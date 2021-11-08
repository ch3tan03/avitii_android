import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { Role, SessionStatus, TransactionActionType } from 'src/app/models/role';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';
import * as _ from 'lodash'
import { User } from 'src/app/models';
import { ContactService } from 'src/app/services/contact.service';
import { PaymentService } from 'src/app/services/payment.service';
import { MatDialog } from '@angular/material/dialog';
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';

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
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    private userService: UserService,
    public contactService: ContactService,
    public payment: PaymentService,
    public dialog: MatDialog,
  ) {
    let paramobj = history.state;
    if (paramobj) {
      this.loanId = paramobj['loanId'];
      delete history.state['loanId'];

      this.loanApplyId = paramobj['loanApplyId'];
      delete history.state['loanApplyId'];
      if (this.loanApplyId) {
        this.initForm();
        this.clickedOnSignLoanContract();
      }
      if (this.loanId) {
        this.socketService.getLoanMarketDataById(this.loanId)
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
                      _userIdOfLoanCreatorOrEditorWhichisNotCurrentUser = _obj4LoanApply.borrowerId._id;
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
                          /*
                          if (this.loanApplyId) {
                            this.clickedOnSignLoanContract();
                          }
                          */
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
                if (this.loanApplyId) {
                  this.clickedOnSignLoanContract();
                }
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
    this.initForm();

  }
  initForm() {
    this.returnHeaderTitleForPage();

    this.lendNowForm = this.formBuilder.group({
      eSignatureLendersPassportNumber: ['', Validators.required],
      eSignatureLendersName: ['', Validators.required],
      loanInsuranceRequired: [false],
      loanInsuranceAmount: [0],
      proposedLoanAmount: [null],
      loanApplyNumber: [null],
      loanInsuranceCreatedOn: [null],
      calculatedMonthlyAmountForEMI: [null],
      eSignatureLendersCreatedOn: [null],
      eSignatureBorrowersCreatedOn: [null],
      loanAgreementCondition: [null, Validators.required]
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
      proposedLoanAmount: [_userObj.proposedLoanAmount || null],
      loanApplyNumber: [_userObj.loanApplyNumber || null],
      loanInsuranceCreatedOn: [_userObj.loanInsuranceCreatedOn || null],
      calculatedMonthlyAmountForEMI: [_userObj.calculatedMonthlyAmountForEMI || null],
      eSignatureLendersCreatedOn: [_userObj.eSignatureLendersCreatedOn || null],
      eSignatureBorrowersCreatedOn: [_userObj.eSignatureBorrowersCreatedOn || null],
      loanAgreementCondition: [null, Validators.required]
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
    if (this.lenderUserObj) {
      this.lendNowForm.get('eSignatureLendersName').setValue(this.lenderUserObj.firstName || this.lenderUserObj.lastName);

      if (this.lenderUserObj.myPassportNumber && this.lenderUserObj.myPassportMediaVerified == 1) {
        this.lendNowForm.get('eSignatureLendersPassportNumber').setValue(this.lenderUserObj.myPassportNumber);
      } else if (this.lenderUserObj.myDLNumber && this.lenderUserObj.myDLMediaVerified == 1) {
        this.lendNowForm.get('eSignatureLendersPassportNumber').setValue(this.lenderUserObj.myDLNumber);
      } else {
        this.lendNowForm.get('eSignatureLendersPassportNumber').setValue(this.lenderUserObj.myPassportNumber || this.lenderUserObj.myDLNumber);
      }
      /* else if (this.lenderUserObj.cprNumber && this.lenderUserObj.myHICardMediaVerified == 1) {
              this.lendNowForm.get('eSignatureLendersPassportNumber').setValue(this.lenderUserObj.cprNumber);
            } */
    }
  }

  clickedOnVerifiedSignLoanContract() {
    //debugger;
    this.submitted = true;
    if (this.lendNowForm.invalid) {
      return;
    }
    if (this.lendNowForm.get('loanInsuranceRequired').value && !this.lendNowForm.get('loanInsuranceAmount').value) {
      this.alertService.error("Please pay insurance amount first");
      return;
    }
    if (this.lendNowForm.get('eSignatureLendersPassportNumber').value != this.lenderUserObj.myPassportNumber) {
      //this.alertService.error("Passport Number miss match. Please enter proper number");
      //return;
    }
    if (!this.lendNowForm.get('eSignatureLendersPassportNumber').value) {
      this.alertService.error("Document missing, Passport/DL");
      return;
    }
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Lender:
        this.lendNowForm.get('eSignatureLendersCreatedOn').setValue(_.now());
        break;
      case Role.Borrower:
        this.lendNowForm.get('eSignatureBorrowersCreatedOn').setValue(_.now());
        break;
    }

    if (!this.lendNowForm.get('calculatedMonthlyAmountForEMI').value) {
      let _calculatedMonthlyAmountForEMI = this.LoanObj.calculatedMonthlyAmountForEMI;
      this.lendNowForm.get('calculatedMonthlyAmountForEMI').setValue(_calculatedMonthlyAmountForEMI);
    }

    let selectedTab = null;
    let _currentSessionApply = {
      sessionObj: {
        loanAmount: null
      },
      borrowerId: null,
      lenderId: null,
      _id: null,
      status: null,
      loanId: null,
      isLoanBorrowed: false,
      createdByUserObj: {},
      createdBy: null
    };

    _currentSessionApply = this.lendNowForm.value;
    _currentSessionApply.sessionObj = this.LoanObj;
    if (this.lendNowForm.get('proposedLoanAmount').value) {
      _currentSessionApply.sessionObj.loanAmount = this.lendNowForm.get('proposedLoanAmount').value;
    }
    _currentSessionApply.borrowerId = this.borrowerUserObj._id;
    _currentSessionApply.lenderId = this.lenderUserObj._id;
    _currentSessionApply.loanId = this.LoanObj._id;
    _currentSessionApply.isLoanBorrowed = false;
    _currentSessionApply.status || SessionStatus.Pending;

    _currentSessionApply._id = this.loanApplyId;
    if (_currentSessionApply) {
      if (!_currentSessionApply._id) {
        _currentSessionApply._id = _currentSessionApply.loanId + '__' + (_currentSessionApply.borrowerId._id || _currentSessionApply.borrowerId);
      }
      if (this.LoanObj.createdBy == this.lenderUserObj._id) {
        //here status set to accepted as this is lender side and creator is same so borrower already initiated ongoing proccess
        _currentSessionApply.status = _currentSessionApply.status || SessionStatus.Accepted;
      } else {
        //here loan created by borrower so informing borrower as lender is interested to lend money so borrower can set to accepted status
        _currentSessionApply.status = _currentSessionApply.status || SessionStatus.AwaitingForApproval;
      }
      this.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);

      switch (_currentSessionApply.status) {
        case SessionStatus.Pending:
        case SessionStatus.AwaitingForApproval:
          _currentSessionApply.createdBy = this.authenticationService.currentUserValue._id;
          this.socketService.setSessionApply(true, _currentSessionApply);
          break;
        default:
          this.socketService.updateSessionApply(true, _currentSessionApply, this.lenderUserObj);
          break;
      }
      //#region create chat group
      let _adminUsersArray = [];
      _adminUsersArray.push(this.lenderUserObj._id);
      _adminUsersArray.push(this.borrowerUserObj._id);
      /*this.borrowerUserObj.firstName + " - " + */
      let _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, this.utilityService.returnLoanType(this.LoanObj.loanType) + " - " + (this.LoanObj.loanNumber || ''), this.LoanObj._id, _currentSessionApply._id, _adminUsersArray, null, null, null, false);
      this.socketService.sendEventToAddNewContact(_currentContactObj);
      //#endregion create chat group
      switch (_currentSessionApply.status) {
        case SessionStatus.AwaitingForApproval:
          selectedTab = { selectedTab: 'sent' };
          break;
        case SessionStatus.Accepted:
          this.alertService.success("Updated. Loan contract is available under My Contract->Active tab.", true);
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
 
          if (this.lenderUserObj.myPassportNumber && this.lenderUserObj.myPassportMediaVerified == 1) {
            _LoanObj.lendersUserObj.lenderPassportOrDlNumber = this.lenderUserObj.myPassportNumber;
          } else if (this.lenderUserObj.myDLNumber && this.lenderUserObj.myDLMediaVerified == 1) {
            _LoanObj.lendersUserObj.lenderPassportOrDlNumber = this.lenderUserObj.myDLNumber;
          } else {
            _LoanObj.lendersUserObj.lenderPassportOrDlNumber = (this.lenderUserObj.myPassportNumber || this.lenderUserObj.myDLNumber);
          }

          if (this.borrowerUserObj.myPassportNumber && this.borrowerUserObj.myPassportMediaVerified == 1) {
            _LoanObj.borrowersUserObj.borrowerPassportOrDlNumber = this.borrowerUserObj.myPassportNumber;
          } else if (this.borrowerUserObj.myDLNumber && this.borrowerUserObj.myDLMediaVerified == 1) {
            _LoanObj.borrowersUserObj.borrowerPassportOrDlNumber = this.borrowerUserObj.myDLNumber;
          } else {
            _LoanObj.borrowersUserObj.borrowerPassportOrDlNumber = (this.borrowerUserObj.myPassportNumber || this.borrowerUserObj.myDLNumber);
          }

          _LoanObj.installments = [];
          for (let index = 0; index < this.LoanObj.loanTenureInMonths; index++) {
            let installment = {
              loanStartDateTime: null,
              calculatedMonthlyAmountForEMI: null
            };
            installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1).format("DD-MMM-YYYY");
            installment.calculatedMonthlyAmountForEMI = this.lendNowForm.get('calculatedMonthlyAmountForEMI').value || this.LoanObj.calculatedMonthlyAmountForEMI;
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
          this.alertService.success("Updated. Loan contract is available under My Contract->Paid tab.", true);
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

    this.appRouterService.appRouteToPath("/lender/my-contract", selectedTab);

  }

  clicked2InitiatePayment(event) {
    if (event.srcElement.checked) {
      this.lendNowForm.get('loanInsuranceRequired').setValue(true);
    } else {
      this.lendNowForm.get('loanInsuranceRequired').setValue(false);
    }
  }

  initiatePayment() {
    this.submitted = true;
    if (this.lendNowForm.invalid) {
      return;
    }

    if (this.lendNowForm.get('eSignatureLendersPassportNumber').value != this.lenderUserObj.myPassportNumber) {
      //this.alertService.error("Passport Number miss match. Please enter proper number");
      //return;
    }
    if (!this.lendNowForm.get('eSignatureLendersPassportNumber').value) {
      this.alertService.error("Document missing, Passport/DL");
      return;
    }

    if (this.lendNowForm.get('loanInsuranceRequired').value) {

      let _calculatedInsuranceValue = 0;
      //_calculatedInsuranceValue = (this.LoanObj.loanAmount * 20) / 100;
      _calculatedInsuranceValue = this.utilityService.returnRoundedNumber((this.LoanObj.loanAmount / 100) * 20);
      this.lendNowForm.get('loanInsuranceAmount').setValue(_calculatedInsuranceValue);
      let _header4Payment = 'Insurance Payment for ' + this.utilityService.returnLoanType(this.LoanObj.loanType);
//debugger;
      let _loanApplyId = this.loanApplyId;
      if (!_loanApplyId) {
        _loanApplyId = this.loanId + '__' + this.borrowerUserObj._id;
      }
      let _paymentUniqId = _loanApplyId + '__' + _.now();
      this.initiateForPaymentForLender(this.loanId, _loanApplyId, this.lenderUserObj._id, _calculatedInsuranceValue, _header4Payment, TransactionActionType.insurance_purchase, null, null, _paymentUniqId);
    } else {
      this.userInitiatedForPayment = false;
      this.lendNowForm.get('loanInsuranceAmount').setValue(0);
    }
  }
  resetStatusOfPayment() {
    this.userInitiatedForPayment = false;
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
    this.payment.getCurrentPaymentApproved().subscribe(_obj => {
      if (_obj && _obj.success) {
        let userObj = this.authenticationService.currentUserValue;
        this.lendNowForm.get('loanInsuranceAmount').setValue(PaymentObj.amount4Payment);
        this.lendNowForm.get('loanInsuranceRequired').setValue(true);
        this.lendNowForm.get('loanInsuranceCreatedOn').setValue(_.now());
        this.clickedOnVerifiedSignLoanContract();
      } else {
        this.alertService.error(_obj.message || "Payment failed");
        this.lendNowForm.get('loanInsuranceAmount').setValue(0);
        this.lendNowForm.get('loanInsuranceRequired').setValue(false);
        this.lendNowForm.get('loanInsuranceCreatedOn').setValue(null);
      }
      this.resetStatusOfPayment();
      this.payment.sendCurrentPaymentFailed(true);
    });
    //#endregion handle LoanObj payments
  }
  clicked2LoanAgreementCondition(event) {
    if (event.srcElement.checked) {
      this.lendNowForm.get('loanAgreementCondition').setValue(true);
    } else {
      this.lendNowForm.get('loanAgreementCondition').setValue(false);
    }
  }
  usersProfile(userObj) {
    //#region fetch creator id
    this.userService.getUserById(userObj._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //console.log('84', this.authenticationService.currentUserValue);
            const dialogRef = this.dialog.open(PublicProfileComponent, {

              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                userObj: _.cloneDeep(data['data']),
                adminViewT: false
              }
            });

            dialogRef.afterClosed().subscribe(result => {
              //console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
            });

          } else {

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

        });
    //#endregion fetch creator id

  }
}

