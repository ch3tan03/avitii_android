import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SessionStatus, TransactionActionType } from 'src/app/models/role';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';
import * as _ from 'lodash'
import { User } from 'src/app/models';
import { ContactService } from 'src/app/services/contact.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-lend-now',
  templateUrl: './lend-now.component.html',
  styleUrls: ['./lend-now.component.css']
})
export class LendNowComponent implements OnInit {
  userInitiatedForPayment: Boolean = false;
  lendNowForm: FormGroup;
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
    public payment: PaymentService,
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
                      _userIdOfLoanCreatorOrEditorWhichisNotCurrentUser = _obj4LoanApply.borrowerId;
                    }
                  }
                  //#endregion data set to local of loan obj
                  //#region fetch creator id
                  this.userService.getUserById(_userIdOfLoanCreatorOrEditorWhichisNotCurrentUser)
                    .pipe(first())
                    .subscribe(
                      data => {
                        if (data && data['success']) {

                          this.borrowerUserObj = _.cloneDeep(data['data']);
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
                this.lenderUserObj = data["data"];
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

    this.lendNowForm = this.formBuilder.group({
      eSignatureLendersPassportNumber: ['', Validators.required],
      eSignatureLendersName: ['', Validators.required],
      loanInsuranceRequired: [false],
      loanInsuranceAmount: [0],
    });

  }
  showEditingForm(_userObj) {
    this.lendNowForm = this.formBuilder.group({
      eSignatureLendersPassportNumber: [_userObj.eSignatureLendersPassportNumber || '', Validators.required],
      eSignatureLendersName: [_userObj.eSignatureLendersName || '', Validators.required],
      eSignatureBorrowersPassportNumber: [_userObj.eSignatureBorrowersPassportNumber || '', Validators.required],
      eSignatureBorrowersName: [_userObj.eSignatureBorrowersName || '', Validators.required],
      loanInsuranceRequired: [_userObj.loanInsuranceRequired || false],
      loanInsuranceAmount: [_userObj.loanInsuranceAmount || 0],
    });
  }

  get f() { return this.lendNowForm.controls; }

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
    if (this.lendNowForm.invalid) {
      return;
    }

    if (this.lendNowForm.get('eSignatureLendersPassportNumber').value != this.lenderUserObj.myPassportNumber) {
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

    _currentSessionApply = this.lendNowForm.value;
    _currentSessionApply.sessionObj = this.LoanObj;
    _currentSessionApply.borrowerId = this.borrowerUserObj._id;
    _currentSessionApply.lenderId = this.lenderUserObj._id;
    _currentSessionApply.loanId = this.LoanObj._id;
    _currentSessionApply.isLoanBorrowed = false;
    _currentSessionApply.status || SessionStatus.Pending;

    _currentSessionApply._id = this.loanApplyId;
    if (_currentSessionApply) {
      if (!_currentSessionApply._id) {
        _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
      }
      if (this.LoanObj.createdBy == this.lenderUserObj._id) {
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
          this.socketService.updateSessionApply(true, _currentSessionApply, this.lenderUserObj);
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

          _LoanObj.loanRepaymentType = this.LoanObj.loanRepaymentType;

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
          let _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, _LoanObj.loanType + " - " + this.borrowerUserObj.firstName, this.LoanObj._id, _currentSessionApply._id, _adminUsersArray, null, null);
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

    this.appRouterService.appRouteToPath("/lender/my-contract");

  }

  initiatePayment(event) {
    if (event.srcElement.checked) {
      let _calculatedInsuranceValue = 0;
      //_calculatedInsuranceValue = (this.LoanObj.loanAmount * 20) / 100;
      _calculatedInsuranceValue = (this.LoanObj.loanAmount / 100) * 20;
      this.lendNowForm.get('loanInsuranceAmount').setValue(_calculatedInsuranceValue);
      let _header4Payment = 'Insurance Payment for ' + this.utilityService.returnLoanType(this.LoanObj.loanType);

      let _loanApplyId = this.loanApplyId;
      if (!_loanApplyId) {
        _loanApplyId = this.loanId + '__' + this.borrowerUserObj._id;
      }
      let _paymentUniqId = _loanApplyId + '__' + _.now();
      this.initiateForPaymentForLender(this.loanId, _loanApplyId, this.lenderUserObj._id, _calculatedInsuranceValue, _header4Payment, TransactionActionType.paid_for_loan_insurance, null, null, _paymentUniqId);
    } else {
      this.userInitiatedForPayment = false;
      this.lendNowForm.get('loanInsuranceAmount').setValue(0);
    }
  }

  initiateForPaymentForLender(_loanId, _loanApplyId, _endUserId, _amount4Payment, _header4Payment, _transactiActionType, _currency, _selectedPaymentMethod, _paymentUniqId) {
    //#region handle LoanObj payments
    this.userInitiatedForPayment = true;
    this.payment.getCurrentPaymentApproved().pipe(first()).subscribe(details => {
    });
    let PaymentObj = {
      transactiActionType: _transactiActionType,
      header4Payment: _header4Payment || null,
      amount4Payment: _amount4Payment || null,
      selectedPaymentMethod: _selectedPaymentMethod || null,
      currency: _currency || null,
      loanId: _loanId || null,
      loanApplyId: _loanApplyId || null,
      appPlanId: null,
      planExpiry: null,
      paymentUniqId: _paymentUniqId || null,
      userId: _endUserId || null
    };

    this.payment.initPaymentConfigStripe(PaymentObj);
    //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id);    
    //#endregion handle LoanObj payments
  }

}

