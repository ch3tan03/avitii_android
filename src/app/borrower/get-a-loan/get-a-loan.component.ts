import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { AuthenticationService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { UtilityService } from 'src/app/services/utility.service';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { SessionStatus, SessionTypes, UserType, Role } from 'src/app/models';

@Component({
  selector: 'app-get-a-loan',
  templateUrl: './get-a-loan.component.html',
  styleUrls: ['./get-a-loan.component.css']
})
export class GetALoanComponent implements OnInit {
  public _ = _;
  addSessionForm: FormGroup;
  private _sessionType: string;
  //UserType = UserType;
  //currentUserRoleType: string = null;
  currentUserMaxLoanAmount: number = 0;
  loading = false;
  submitted = false;
  element_btn_click_addSession_basic_details: HTMLElement;
  element_btn_click_addSession_skills_verification: HTMLElement;
  private sub: any;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  private loanId: any;
  private borrowerId: any;
  _calculatedMonthlyAmountForEMI = 0;
  SessionStatus = SessionStatus;
  SessionTypes = SessionTypes;
  ParentServicesTypes: any = null;
  ChildServicesTypes: any = [];
  countrylist: any = null;
  loanInterestRateMin: number = 0;
  loanInterestRateMax: number = 0;
  constructor(

    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private sessionsService: SessionsService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    public utilityService: UtilityService,
    private route: ActivatedRoute
  ) {
    // redirect to home if already logged in
    if (!this.authenticationService.currentUserValue) {
      this.appRouterService.appRouter('');
    }
    //#region do not allow to create new loan in last 3 day's of the month
    let dt = this.utilityService.moment();
    let day4monthEnd = 3;
    if (dt.date() >= (dt.daysInMonth() - day4monthEnd)) {
      this.appRouterService.appRouter('');
      this.alertService.error('New loan request not allowed in end of the month, Please try again later in next month', true);
      return;
    }
    //#endregion do not allow to create new loan in last 3 day's of the month
    //this.currentUserRoleType = this.authenticationService.currentUserValue.userType;
    this.currentUserMaxLoanAmount = 1000;

    this.initForm();

    let paramobj = history.state;
    if (paramobj) {
      this.loanId = paramobj['id'];
      this.borrowerId = paramobj['borrowerId'];
      delete history.state['id'];
      delete history.state['borrowerId'];
      /*
      this.sub = this.route.queryParams.subscribe(params => {
        this.loanId = params['id'];
        */
      if (this.loanId) {
        this.sessionsService.getSessionById(this.loanId)
          .pipe(first())
          .subscribe(
            data => {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.showEditingForm(data["data"]);
                //this.alertService.success(data['message'], true);
                this.loading = false;
                //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                this.alertService.error(data['message']);
                this.loading = false;
              }
            },
            error => {
              let errorMsg2show = "";
              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) { }
              this.alertService.error(errorMsg2show);
              this.loading = false;
            });
      } else if (this.borrowerId) {
        this.initForm();
      }
      /* });*/
    }
  }

  showEditingForm(_userObj) {

    this.loanInterestRateMin = 0;
    this.loanInterestRateMax = 50;
    let _loanInterestRateValidation = [Validators.required, Validators.min(this.loanInterestRateMin), Validators.max(this.loanInterestRateMax)];
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        if (this.authenticationService.currentUserValue.isRKIRegistered) {
          this.loanInterestRateMin = 3;
          this.loanInterestRateMax = 35;
        } else {
          this.loanInterestRateMin = 0;
          this.loanInterestRateMax = 3;
        }
        _loanInterestRateValidation = [Validators.required, Validators.min(this.loanInterestRateMin), Validators.max(this.loanInterestRateMax)];
        break;
    }

    this.addSessionForm = this.formBuilder.group({

      _id: [_userObj._id || ''],
      loanType: [_userObj.loanType || '', Validators.required],
      sessionType: [_userObj.sessionType || ''],
      sessionSubject: [_userObj.sessionSubject || ''],
      loanDescription: [_userObj.loanDescription || ''],
      transactionIdCollection: [_userObj.transactionIdCollection || ''],
      sessionsExecutionCollection: [_userObj.sessionsExecutionCollection || ''],
      loanStartDateTimeCustomised: [_userObj.loanStartDateTimeCustomised || '', Validators.required],
      loanEndDateTimeCustomised: [_userObj.loanEndDateTimeCustomised || ''],
      loanStartDateTime: [_userObj.loanStartDateTime || ''],
      loanEndDateTime: [_userObj.loanEndDateTime || ''],
      services: [_userObj.services || ''],
      location: [_userObj.location || ''],
      status: [_userObj.status || ''],
      additionalDocuments: this.formBuilder.array(_userObj.additionalDocuments || [], []),
      loanAmount: [_userObj.loanAmount || 0, [Validators.required, Validators.min(1), Validators.max(this.currentUserMaxLoanAmount)]],
      loanTenureInMonths: [_userObj.loanTenureInMonths || 1, [Validators.required, Validators.min(1)]],
      loanInterestRate: [_userObj.loanInterestRate || this.loanInterestRateMax, _loanInterestRateValidation],
      loanRepaymentType: this.formBuilder.array(_userObj.loanRepaymentType || [], Validators.required),
      loanInsuranceType: [_userObj.loanInsuranceType || ''],
      loanMaxBorrower: [_userObj.loanMaxBorrower || 1, [Validators.required, Validators.min(1)]],
      createdOn: [_userObj.createdOn || ''],
      updatedOn: [_userObj.updatedOn || ''],
      isDeleted: [_userObj.isDeleted || ''],
      createdBy: [_userObj.createdBy || ''],
      deletedBy: [_userObj.deletedBy || ''],
      updatedBy: [this.authenticationService.currentUserValue._id || ''],
      bannerUrl: [_userObj.bannerUrl || ''],
      borrowerId: [_userObj.borrowerId || ''],
      isLoanRequested: [true],
      calculatedMonthlyAmountForEMI: []
    });
    this._sessionType = _userObj.sessionType;
  }

  initHtmlContent() {
    if (!this.element_btn_click_addSession_basic_details) {
      this.element_btn_click_addSession_basic_details = document.getElementById('btn_click_addSession_basic_details') as HTMLElement;
      this.element_btn_click_addSession_skills_verification = document.getElementById('btn_click_addSession_skills_verification') as HTMLElement;
    }
  }

  initForm() {
    this.loanInterestRateMin = 1;
    this.loanInterestRateMax = 50;
    let _loanInterestRateValidation = [Validators.required, Validators.min(this.loanInterestRateMin), Validators.max(this.loanInterestRateMax)];
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        if (this.authenticationService.currentUserValue.isRKIRegistered) {
          this.loanInterestRateMin = 3;
          this.loanInterestRateMax = 35;
        } else {
          this.loanInterestRateMin = 1;
          this.loanInterestRateMax = 3;
        }
        _loanInterestRateValidation = [Validators.required, Validators.min(this.loanInterestRateMin), Validators.max(this.loanInterestRateMax)];
        break;
    }
    //_.first(this.ParentServicesTypes)['_id']
    this.initHtmlContent();
    this.addSessionForm = this.formBuilder.group({

      _id: [''],
      loanType: ['', Validators.required],
      sessionType: [''],
      sessionSubject: [''],
      loanDescription: [''],
      transactionIdCollection: [''],
      sessionsExecutionCollection: [''],
      loanStartDateTimeCustomised: [''],
      loanEndDateTimeCustomised: [''],
      loanStartDateTime: [''],
      loanEndDateTime: [''],
      services: [''],
      location: [''],
      status: [SessionStatus.Pending],
      additionalDocuments: this.formBuilder.array([], []),
      loanAmount: [0, [Validators.required, Validators.min(1), Validators.max(this.currentUserMaxLoanAmount)]],
      loanTenureInMonths: [1, [Validators.required, Validators.min(1)]],
      loanInterestRate: [this.loanInterestRateMax, _loanInterestRateValidation],
      loanRepaymentType: this.formBuilder.array([], Validators.required),
      loanInsuranceType: [''],
      loanMaxBorrower: [1, [Validators.required, Validators.min(1)]],
      createdOn: [''],
      updatedOn: [''],
      isDeleted: [false],
      createdBy: [this.authenticationService.currentUserValue._id || ''],
      deletedBy: [''],
      updatedBy: [''],
      bannerUrl: [''],
      borrowerId: [this.borrowerId || ''],
      isLoanRequested: [true],
      calculatedMonthlyAmountForEMI: []
    });
  }

  clickOnGoToNext(_step) {
    this.initHtmlContent();
    switch (_step) {
      case 2:
        this.element_btn_click_addSession_skills_verification.click();
        break;
    }
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get f() { return this.addSessionForm.controls; }

  onaddSessionUpdateSubmit() {
    this.submitted = true;
    if (this.addSessionForm.invalid) {
      return;
    }

    let _loanStartDateTime = this.addSessionForm.get('loanStartDateTimeCustomised').value;
    let _loanEndDateTime = this.addSessionForm.get('loanEndDateTimeCustomised').value;
    /*
        if (!_loanStartDateTime || moment(_loanStartDateTime).isBefore(moment().add(1, 'day'))) {
          this.alertService.error("Start date must have 24 hours difference");
          return;
        }
    */
    _loanEndDateTime = null;
    switch (this.addSessionForm.get('sessionType').value) {
      case SessionTypes.Instant:
        _loanStartDateTime = null;
        _loanEndDateTime = null;
        break;
    }


    let loanStartDateTime_Temp = null;
    let loanEndDateTime_Temp = null;
    if (_loanStartDateTime) {
      loanStartDateTime_Temp = moment(_loanStartDateTime, 'YYYY-MM-DD').format('YYYY-MM-DD');
    } else {
      loanStartDateTime_Temp = moment().add(1, 'h').format('YYYY-MM-DD');
    }

    if (_loanEndDateTime) {
      loanEndDateTime_Temp = moment(_loanEndDateTime, 'YYYY-MM-DD').format('YYYY-MM-DD');
    } else {
      loanEndDateTime_Temp = moment(loanStartDateTime_Temp, 'YYYY-MM-DD').add(this.addSessionForm.get('loanTenureInMonths').value, 'month').format('YYYY-MM-DD');
    }

    //#region validate dates
    this.addSessionForm.get('loanStartDateTime').setValue(Date.parse(loanStartDateTime_Temp));
    this.addSessionForm.get('loanEndDateTime').setValue(Date.parse(loanEndDateTime_Temp));

    if (!moment(this.addSessionForm.get('loanStartDateTime').value).isValid || _.isNaN(moment(this.addSessionForm.get('loanStartDateTime').value)) || !this.addSessionForm.get('loanStartDateTime').value) {
      this.alertService.error("start time is not valid");
      return;
    }
    if (!moment(this.addSessionForm.get('loanEndDateTime').value).isValid || _.isNaN(moment(this.addSessionForm.get('loanEndDateTime').value)) || !this.addSessionForm.get('loanEndDateTime').value) {
      this.alertService.error("end time is not valid");
      return;
    }
    /*
      if (moment(this.addSessionForm.get('loanStartDateTime').value).isBefore(moment())) {
        this.alertService.error("Loan should start in future date time only.");
        return;
      }
  */
    if (moment(this.addSessionForm.get('loanStartDateTime').value).add(1, 'h').isAfter(moment(this.addSessionForm.get('loanEndDateTime').value))) {
      this.alertService.error("There must be min. 1 hour difference in Loan start and end time");
      return;
    }

    //#endregion validate dates


    if (this.loanId) {
      this.sessionsService.updateSessionById(this.addSessionForm.value)
        .pipe(first())
        .subscribe(
          data => {
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              //this.alertService.success('Loan Request Updated successfully', true);
              //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
              this.alertService.success("Loan Request Updated successfully. Loan contract is available under My Contract->My Contract tab.", true);
              this.appRouterService.appRouteToPath("/borrower/my-contract", { selectedTab: 'received' }, true);
            } else {
              //alert(JSON.stringify(data['message']));
              this.alertService.error(data['message']);
              this.loading = false;
            }
          },
          error => {
            let errorMsg2show = "";
            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) { }
            this.alertService.error(errorMsg2show);
            this.loading = false;
          });
    } else {
      this.sessionsService.addNewSession(this.addSessionForm.value)
        .pipe(first())
        .subscribe(
          data => {
            if (data && data['success']) {

              //alert(JSON.stringify( data));
              //this.alertService.success('Loan Request added in loan market. Lenders request will be visible under receivers tab.', true);
              //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
              this.alertService.success("Loan Request added in loan market. Loan contract is available under My Contract->My Contract tab.", true);
              this.appRouterService.appRouteToPath("/borrower/my-contract", { selectedTab: 'received' }, true);
            } else {
              //alert(JSON.stringify(data['message']));
              this.alertService.error(data['message']);
              this.loading = false;
            }
          },
          error => {
            let errorMsg2show = "";
            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) { }
            this.alertService.error(errorMsg2show);
            this.loading = false;
          });
    }

  }
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDate();
  hours = this.now.getHours();
  minutes = this.now.getMinutes();
  minDate = moment({ year: this.year, month: this.month, day: this.day, hour: this.hours + 1, minute: this.minutes }).format('YYYY-MM-DD');

  maxDate = moment({ year: this.year, month: this.month + 1, day: this.day, hour: this.hours, minute: this.minutes }).format('YYYY-MM-DD');

  date(ev) {
    //console.log(this.minDate)
    //console.log(ev.target.value)
  }

  calculateMonthlyAmountForEMI() {
    let loanAmount = this.addSessionForm.get('loanAmount').value || 0;
    let loanTenureInMonths = this.addSessionForm.get('loanTenureInMonths').value || 0;
    let loanInterestRate = this.addSessionForm.get('loanInterestRate').value || 0;

    this._calculatedMonthlyAmountForEMI = this.utilityService.fnCalculateMonthlyAmountForEMI(loanAmount, loanTenureInMonths, loanInterestRate);

    this.addSessionForm.get('calculatedMonthlyAmountForEMI').setValue(this._calculatedMonthlyAmountForEMI);
  }

  onLoanRepaymentTypeChange(e) {
    const checkArray: FormArray = this.addSessionForm.get('loanRepaymentType') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onInitSetLoanRepaymentTypeValue(_id) {
    const checkArray: FormArray = this.addSessionForm.get('loanRepaymentType') as FormArray;
    let _isLoanRepaymentTypeChecked = (checkArray.value.indexOf(_id) > -1);
    return _isLoanRepaymentTypeChecked;
  }

}