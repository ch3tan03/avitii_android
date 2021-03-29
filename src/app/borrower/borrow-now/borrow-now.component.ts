import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SessionStatus } from 'src/app/models/role';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';
import * as _ from 'lodash'
import { User } from 'src/app/models';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-borrow-now',
  templateUrl: './borrow-now.component.html',
  styleUrls: ['./borrow-now.component.css']
})
export class BorrowNowComponent implements OnInit {
  borrowNowForm: FormGroup;
  loading: Boolean = false;
  LoanObj: any = {};
  loanId: any = null;
  loanApplyId: any = null;
  submitted: Boolean = false;
  public borrowerUserObj: User = null;
  public lenderUserObj: User = null;
  headerMessage2show = "";
  userClickedOnSignLoanContract: Boolean = false;
  constructor(
    private socketService: SocketioService,
    public utilityService: UtilityService,
    private socketioService: SocketioService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    private userService: UserService,
    public contactService: ContactService,
  ) {
    let paramobj = history.state;
    if (paramobj) {
      this.loanId = paramobj['loanId'];
      delete history.state['loanId'];

      this.loanApplyId = paramobj['loanApplyId'];
      delete history.state['loanApplyId'];
      if (this.loanApplyId) {
        this.clickedOnSignLoanContract();
      }
      if (this.loanId) {
        this.socketioService.getLoanMarketDataById(this.loanId)
          .pipe(first())
          .subscribe(
            data => {
              //#region proccess for success here
              if (data && data['success']) {
                if (data["data"]) {
                  //#region data set to local of loan obj
                  if (data["data"]["_id"]) {
                    this.LoanObj = data["data"];
                  } else {
                    this.LoanObj = data["data"][0];
                  }
                  let _obj4LoanApply = null;
                  if (this.loanApplyId) {
                    _obj4LoanApply = _.filter(this.LoanObj.sessionAppliedByBorrowers, { "_id": this.loanApplyId })[0];
                    this.showEditingForm(_obj4LoanApply);
                  }
                  let _userIdOfLoanCreatorOrEditorWhichisNotCurrentUser = this.LoanObj.createdByUserObj._id;
                  if (this.loanApplyId) {
                    if (this.authenticationService.currentUserValue._id == this.LoanObj.createdByUserObj._id) {
                      _userIdOfLoanCreatorOrEditorWhichisNotCurrentUser = _obj4LoanApply.lenderId;
                    }
                  }
                  //#endregion data set to local of loan obj
                  //#region fetch creator id
                  this.userService.getUserById(_userIdOfLoanCreatorOrEditorWhichisNotCurrentUser)
                    .pipe(first())
                    .subscribe(
                      data => {
                        if (data && data['success']) {
                          
                          this.lenderUserObj = _.cloneDeep(data["data"]);
                          this.loading = false;
                        } else {
                          this.alertService.error(data['message']);
                          this.loading = false;
                          this.appRouterService.appRouter('');
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
                        this.appRouterService.appRouter('');
                      });
                  //#endregion fetch creator id
                }
                this.loading = false;
              } else {
                this.alertService.error(data['message']);
                this.loading = false;
                this.appRouterService.appRouter('');
              }
              //#endregion proccess for success here
            },
            error => {
              //#region proccess for failure here
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
              this.appRouterService.appRouter('');
              //#endregion proccess for failure here
            });
        //#region read current users data here
        this.userService.getUserById(this.authenticationService.currentUserValue._id)
          .pipe(first())
          .subscribe(
            data => {
              //#region proccess for success here
              if (data && data['success']) {
                this.borrowerUserObj = data["data"];
                this.loading = false;
              } else {
                this.alertService.error(data['message']);
                this.loading = false;
                this.appRouterService.appRouter('');
              }
              //#endregion proccess for success here
            },
            error => {
              //#region proccess for failure here
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
              this.appRouterService.appRouter('');
              //#endregion proccess for failure here
            });
        //#endregion read current users data here
      } else {
        //navigate back
        this.alertService.error("Data is missing or invalid entry");
        this.appRouterService.appRouter('');
      }

    } else {
      //navigate back
      this.alertService.error("Data is missing or invalid entry");
      this.appRouterService.appRouter('');
    }
  }

  ngOnInit(): void {
    this.returnHeaderTitleForPage();
    this.borrowNowForm = this.formBuilder.group({
      eSignatureBorrowersPassportNumber: ['', Validators.required],
      eSignatureBorrowersName: ['', Validators.required],
      loanInsuranceRequired:[false],
      loanInsuranceAmount: [0],
    });
  }

  showEditingForm(_userObj) {
    this.borrowNowForm = this.formBuilder.group({
      eSignatureLendersPassportNumber: [_userObj.eSignatureLendersPassportNumber || '', Validators.required],
      eSignatureLendersName: [_userObj.eSignatureLendersName || '', Validators.required],
      eSignatureBorrowersPassportNumber: [_userObj.eSignatureBorrowersPassportNumber || '', Validators.required],
      eSignatureBorrowersName: [_userObj.eSignatureBorrowersName || '', Validators.required],
      loanInsuranceRequired:[_userObj.loanInsuranceRequired || false],
      loanInsuranceAmount: [_userObj.loanInsuranceAmount || 0],
    });
  }
  get f() { return this.borrowNowForm.controls; }

  returnHeaderTitleForPage() {
    if (this.userClickedOnSignLoanContract) {
      this.headerMessage2show = "Sign Loan Contract";
    } else {
      this.headerMessage2show = "Loan Summary";
    }
  }

  resetClickedOnSignLoanContract() {
    this.userClickedOnSignLoanContract = false;
    this.returnHeaderTitleForPage();
  }

  clickedOnSignLoanContract() {
    this.userClickedOnSignLoanContract = true;
    this.returnHeaderTitleForPage();
  }

  clickedOnVerifiedSignLoanContract() {

    this.submitted = true;
    if (this.borrowNowForm.invalid) {
      return;
    }

    if (this.borrowNowForm.get('eSignatureBorrowersPassportNumber').value != this.borrowerUserObj.myPassportNumber) {
      this.alertService.error("Passport Number miss match. Please enter proper number");
      return;
    }


    let _currentSessionApply = {
      sessionObj: {},
      borrowerId: null,
      lenderId: null,
      _id: null,
      status: null,
      loanId: null,
      isLoanBorrowed: false,
      createdByUserObj: {}
    };

    _currentSessionApply = this.borrowNowForm.value;
    _currentSessionApply.sessionObj = this.LoanObj;
    _currentSessionApply.borrowerId = this.borrowerUserObj._id;
    _currentSessionApply.lenderId = this.lenderUserObj._id;
    _currentSessionApply.loanId = this.LoanObj._id;
    _currentSessionApply.isLoanBorrowed = true;
    _currentSessionApply.status || SessionStatus.Pending;

    _currentSessionApply._id = this.loanApplyId;
    if (_currentSessionApply) {
      if (!_currentSessionApply._id) {
        _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
      }
      if (this.LoanObj.createdBy == this.borrowerUserObj._id) {
        //here status set to accepted as this is lender side and creator is same so borrower already initiated ongoing proccess
        _currentSessionApply.status = _currentSessionApply.status || SessionStatus.Accepted;
      } else {
        //here loan created by borrower so informing borrower as lender is interested to lend money so borrower can set to accepted status
        _currentSessionApply.status = _currentSessionApply.status || SessionStatus.OngoingAccepted;
      }
      this.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);
      switch (_currentSessionApply.status) {
        case SessionStatus.Pending:
        case SessionStatus.OngoingAccepted:
          this.socketService.setSessionApply(true, _currentSessionApply);
          break;
        default:
          this.socketService.updateSessionApply(true, _currentSessionApply, this.borrowerUserObj);
          break;
      }
      switch (_currentSessionApply.status) {
        case SessionStatus.Accepted:
          this.alertService.success("Updated. Loan contract is available under My Contract->Accepted tab.", true);
          //#region print PDF signed contract
          let _LoanObj = {
            borrowersUserObj: null,
            lendersUserObj: null,
            loanStartDateTime: null,
            installments: null,
            loanType: null,
            loanRepaymentType: null
          };

          _LoanObj = _.cloneDeep(_currentSessionApply);
          _LoanObj.borrowersUserObj = _.cloneDeep(this.borrowerUserObj);
          _LoanObj.lendersUserObj = _.cloneDeep(this.lenderUserObj);

          _LoanObj.loanStartDateTime = moment(this.LoanObj.loanStartDateTime).format("DD-MMM-YYYY");
          _LoanObj.lendersUserObj.lenderPassportOrDlNumber = this.lenderUserObj.myPassportNumber;
          _LoanObj.borrowersUserObj.borrowerPassportOrDlNumber = this.borrowerUserObj.myPassportNumber;

          _LoanObj.installments = [];
          for (let index = 0; index < this.LoanObj.loanTenureInMonths; index++) {
            let installment = {
              loanStartDateTime: null,
              calculatedMonthlyAmountForEMI: null
            };
            installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1).format("DD-MMM-YYYY");
            installment.calculatedMonthlyAmountForEMI = this.LoanObj.calculatedMonthlyAmountForEMI;
            _LoanObj.installments.push(installment);
          }

          _LoanObj.loanType = this.utilityService.returnLoanType(this.LoanObj.loanType);

          _LoanObj.loanRepaymentType = this.LoanObj.loanRepaymentType

          this.authenticationService.generateReport4SignedContract(_LoanObj)
            .pipe(first())
            .subscribe(
              data => {
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
                } catch (ex) {
                }
                //this.alertService.error(errorMsg2show);
                this.loading = false;
              });
          //#endregion print PDF signed contract
          //#region create chat group
          let _adminUsersArray = [];
          _adminUsersArray.push(this.lenderUserObj._id);
          _adminUsersArray.push(this.borrowerUserObj._id);
          let _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, _LoanObj.loanType+" - "+this.borrowerUserObj.firstName, this.LoanObj._id, _currentSessionApply._id, _adminUsersArray, null, null);
          this.socketService.sendEventToAddNewContact(_currentContactObj);
          //#endregion create chat group
          break;
        case SessionStatus.Pending:
          this.alertService.success("Loan contract signed successfully.", true);
          break;
        case SessionStatus.Rejected:
        case SessionStatus.RejectedOngoing:
        case SessionStatus.RejectedOngoingWithRefund:
        case SessionStatus.Suspended:
          this.alertService.success("Updated. Loan contract is available under My Contract->Rejected tab.", true);
          break;
        case SessionStatus.Completed:
          this.alertService.success("Updated. Loan contract is available under My Contract->Completed tab.", true);
          break;
        case SessionStatus.Active:
        case SessionStatus.Ongoing:
        case SessionStatus.OngoingInitiated:
          this.alertService.success("Updated. Loan contract is available under My Contract->Ongoing tab.", true);
          break;
        default:
          break;
      }

    }

    this.appRouterService.appRouteToPath("/borrower/my-contract");

  }

 
}

