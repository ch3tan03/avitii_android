import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalApplySession, ModalAppliedSessionDisplay } from '../borrower.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertService, AuthenticationService, UserService } from 'src/app/services';
import { SessionsService } from 'src/app/services/sessions.service';
import { UtilityService } from 'src/app/services/utility.service';
import { first } from 'rxjs/operators';
import * as _ from 'lodash';
import { Role, SessionStatus } from 'src/app/models';
import { AddFundsService } from 'src/app/services/add-funds.service';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  SearchString: string;
  currentOnlineUserList: any;
  subscription: Subscription;
  subscription1: Subscription;
  show_more = true;
  loading: boolean;
  allSessionsData: any;
  allSessionsCount: number;
  homeComponantForm: FormGroup;
  allSessionsTodayList: any;
  allSessionsTodayCount: any;

  checkCreatedByUserId: string = null;
  checkCreatedByT: Boolean = false;


  allMyActiveLoanCount: number = 0;
  allMyDisbursedLoanCount: number = 0;
  allMyUnSignedContractLoanCount: number = 0;
  allMyProfitOverviewCount: number = 0;//undone
  allMyPaidContractCount: number = 0;//undone
  allMyPaidLoanCount: number = 0;//undone
  Role = Role;
  ngOnInit() {
  }

  ngOnDestroy() {
  }

  constructor(
    public userService: UserService,
    private socketService: SocketioService,
    private formBuilder: FormBuilder,
    private sessionsService: SessionsService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    public dialog: MatDialog,
    public authenticationService: AuthenticationService,
    public fundService: AddFundsService,
    public router: Router,
    public contactService: ContactService,
    private _cdr: ChangeDetectorRef
  ) {
    this.checkIfCurrentUserUpdatedBankDetailsOrNot();
    this.checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot();

    this.checkCreatedByUserId = null;
    this.checkCreatedByT = null;
    let _obj2Save = {};
    //#region get count for allMyActiveLoanCount i.e. status set to accepted
    _obj2Save = {
      borrowerId: this.authenticationService.currentUserValue._id,
      status: SessionStatus.Accepted
    };
    this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyActiveLoanCount')
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            this.allMyActiveLoanCount = data['data'];
          } else {
            //alert(JSON.stringify(data['message']));
            //this.alertService.error(data['message']);
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
          //this.alertService.error(errorMsg2show);
          this.loading = false;
        });
    //#endregion get count for allMyActiveLoanCount i.e. status set to accepted
    //#region get count for allMyDisbursedLoanCount i.e. status set to accepted and loan amount paid by lender
    _obj2Save = {
      borrowerId: this.authenticationService.currentUserValue._id,
      status: SessionStatus.Accepted,
      isLoanAmountPaidByLender: true
    };
    this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyDisbursedLoanCount')
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {

            this.allMyDisbursedLoanCount = data['data'];
          } else {
            //alert(JSON.stringify(data['message']));
            //this.alertService.error(data['message']);
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
          //this.alertService.error(errorMsg2show);
          this.loading = false;
        });
    //#endregion get count for allMyDisbursedLoanCount i.e. status set to accepted and loan amount paid by lender

    //#region get count for allMyUnSignedContractLoanCount i.e. status set to OngoingAccepted
    _obj2Save = {
      borrowerId: this.authenticationService.currentUserValue._id,
      status: SessionStatus.OngoingAccepted
    };
    this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyUnSignedContractLoanCount')
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            this.allMyUnSignedContractLoanCount = data['data'];
          } else {
            //alert(JSON.stringify(data['message']));
            //this.alertService.error(data['message']);
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
          //this.alertService.error(errorMsg2show);
          this.loading = false;
        });
    //#endregion get count for allMyUnSignedContractLoanCount i.e. status set to OngoingAccepted


    this.sessionsService.getSessionAllByBorrowerId(this.authenticationService.currentUserValue._id, null, null, null, true, null)
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allSessionsData = data['data'];
            this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
            this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')));
            //this.alertService.success(data['message'], true);
            this.loading = false;
            //this.element_btn_click_addSession_skills_verification.click();
          } else {
            //alert(JSON.stringify(data['message']));
            //this.alertService.error(data['message']);
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
          //this.alertService.error(errorMsg2show);
          this.loading = false;
        });

    this.sessionsService.getUpdatesForSessionAllByBorrowerId()
      .subscribe(
        data => {
          if (data && data['success']) {
            let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
            for (let _items in data['data']) {
              let _currentObj = data['data'][_items];
              _keyPairedMapObj[_currentObj._id] = _currentObj
            }
            this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
            this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
            this.loading = false;
          } else {
            this.loading = false;
          }
        },
        error => {
          this.loading = false;
        });



    /*
        this.subscription = this.socketService.getCurrentOnlineUsersListObj().subscribe(_currentOnlineUserList => {
          if (_currentOnlineUserList) {
            this.currentOnlineUserList = _currentOnlineUserList;
          } else {
            this.currentOnlineUserList = null;
          }
        });
    
        this.subscription1 =  this.socketService.getCurrentSessionCount().subscribe(_allSessionsCount => {
          if (_allSessionsCount) {
            this.allSessionsCount = _allSessionsCount;
          } else {
            this.allSessionsCount = null;
          }
        });
    
        let _obj2Use4Filter = {
          role: 'borrower'
        };
        let useAndTrueOrFalse = false;
    
        this.socketService.getUserOnlineList(false, _obj2Use4Filter, useAndTrueOrFalse);
        let _obj2Save = {};
        this.socketService.getSessionCountByQuery(false, _obj2Save);
        fundService.getFundsCountForRequestedUser(this.authenticationService.currentUserValue._id);
        fundService.getSessionSpentCountForRequestedUser(this.authenticationService.currentUserValue._id);
        this.socketService.getSessionAllTodaysDateAcceptedOnly(this.authenticationService.currentUserValue._id, this.authenticationService.currentUserValue.role).subscribe(result => {
          let data = null;
          if (result) {
            if (result['success'] == true || result['success'] == false) {
              data = result['data'];
            } else {
              data = result;
            }
          }
          this.allSessionsTodayList = data;
          if (this.utilityService._.keys(this.allSessionsTodayList).length <= 0) {
            this.allSessionsTodayList = [];
          }
          this.allSessionsTodayCount = this.utilityService._.keys(this.allSessionsTodayList).length;
        });
        */
  }
  checkIfCurrentUserUpdatedBankDetailsOrNot() {

    this.userService.getUserById(this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            if (data["data"]["bankName"] || data["data"]["accountNumber"]) {
              this.authenticationService.currentUserValue.isUsersBankDetailsSubmitted = true;
              this.authenticationService.sendCurrentUserObj(this.authenticationService.currentUserValue);
            }
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
          this.loading = false;
        });

  }
  checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot() {
    this.userService.getUserIncomeExpenseDetailsByUserId(this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            if(data["data"]["totalIncome4currentUser"] && data["data"]["totalExpense4currentUser"]){
              
              this.authenticationService.currentUserValue.totalIncome4currentUser = data["data"]["totalIncome4currentUser"];
              this.authenticationService.currentUserValue.totalExpense4currentUser = data["data"]["totalExpense4currentUser"];
              this.authenticationService.currentUserValue.totalAllowedBudget = this.authenticationService.currentUserValue.totalIncome4currentUser - this.authenticationService.currentUserValue.totalExpense4currentUser;

              this.authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified=true;
              this.authenticationService.sendCurrentUserObj(this.authenticationService.currentUserValue);
            }
  
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
          this.loading = false;
        });
  }

  returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender(LoanApplyObj, currentRowDate, _key) {
    let _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');
    if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
      if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey].createdOnForLoanAmountPaidToLenderConfirmByLender) {
          return true;
        }
      }
    }
    return false;
  }
  returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, currentRowDate, _key) {
    let _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');
    if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
      if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
        return true;
      }
    }
    return false;
  }
  calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower() {
    for (let item in this.allSessionsData) {
      let _LoanObj = this.allSessionsData[item];
      if (_LoanObj) {
        _LoanObj.nextInstallment = null;
        for (let indexOuter in _LoanObj.sessionAppliedByBorrowers) {
          let LoanApplyObj = _LoanObj.sessionAppliedByBorrowers[indexOuter];

          if (LoanApplyObj) {
            for (let index = 0; index < _LoanObj.loanTenureInMonths; index++) {
              let installment = {
                loanStartDateTime: null,
                calculatedMonthlyAmountForEMI: null
              };
              installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1);

              if (!this.returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, installment.loanStartDateTime, null)) {
                if (!_LoanObj.nextInstallment) {
                  if (this.utilityService.moment(_LoanObj.nextInstallment).isBefore(this.utilityService.moment(installment.loanStartDateTime))) {
                    break;
                  }
                }
                _LoanObj.nextInstallment = installment.loanStartDateTime;
                break;
              }
            }

          }
        }
        this.allSessionsData[item] = _LoanObj;

      }
    }
  }

  sessionApplyOngoingCheck(sessionObj, sessionApply) {
    console.log('179', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalApplySession, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        sessionObj: sessionObj,
        borrowerId: this.authenticationService.currentUserValue._id,
        sessionApply: sessionApply
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      let _currentSessionApply = null;
      if (result) {
        if (result.data) {

        }
      }
      console.log(`163 :: myc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }
  showAppliedToSession(sessionObj) {
    let _proccessedSessionObj = null;
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id });
        break;
      default:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        break;
    }

    console.log('214', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalAppliedSessionDisplay, {
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'my_session_details_modal',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        sessionObj: _proccessedSessionObj,
        borrowerId: this.authenticationService.currentUserValue._id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data) {
          console.log(`86 :: msc :: Dialog result: ${JSON.stringify(result)}`);
          if (result.data.status && result.data.sessionApply) {
            let _loanApplyId = result.data.sessionApply._id;
            let _status = result.data.status;
            //initiate payment here
            //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
            let _allowed2CreateContactForSessionT = false;
            switch (_status) {
              case SessionStatus.Accepted:
                //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                this.proccedAppliedToSession(sessionObj, _loanApplyId);
                break;
            }
          }
          if (result.data.updatedSessionObj) {

            let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");

            _keyPairedMapObj[result.data.updatedSessionObj._id] = result.data.updatedSessionObj;

            this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
            this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
            this._cdr.detectChanges();
          }
        }
      }
    });
  }
  proccedAppliedToSession(sessionObj, loanApplyId) {
    let loanId = sessionObj._id;

    let _proccessedSessionObj = null;
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id });
        break;
      case Role.Lender:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByLenders, { "lenderId": this.authenticationService.currentUserValue._id });
        break;
      default:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        break;
    }
    if (!loanApplyId) {
      loanApplyId = _proccessedSessionObj.sessionAppliedByBorrowers[0]._id;
    }
    this.router.navigate(['/borrower/borrow-now'], { state: { loanId: loanId, loanApplyId: loanApplyId } });
  }


  /*
    get f() { return this.homeComponantForm.controls; }
  
    sessionSearchByService() {
      let generaldata4search = this.homeComponantForm.get('generaldata4search').value;
      let useAndTrueOrFalse = false;
      this.allSessionsData = [];
      this.sessionsService.getSessionAllByService('', '', generaldata4search, generaldata4search, useAndTrueOrFalse)
        .pipe(first())
        .subscribe(
          data => {
            //console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              this.allSessionsData = data['data'];
              //this.alertService.success(data['message'], true);
              this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId')));
              this.loading = false;
              //this.element_btn_click_addSession_skills_verification.click();
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
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
            //this.alertService.error(errorMsg2show);
            this.loading = false;
          });
  
    }
    ngOnInit() {
      this.homeComponantForm = this.formBuilder.group({
        services4search: [''],
        location4search: [''],
        generaldata4search: [''],
      });
  
      this.sessionsService.getSessionAllWithSessionApply(this.authenticationService.currentUserValue._id)
        .pipe(first())
        .subscribe(
          data => {
            //console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              this.allSessionsData = data['data'];
              this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId')));
              //this.alertService.success(data['message'], true);
              this.loading = false;
              //this.element_btn_click_addSession_skills_verification.click();
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
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
            //this.alertService.error(errorMsg2show);
            this.loading = false;
          });
      this.sessionsService.getUpdatesForSessionAllByBorrowerId()
        .subscribe(
          data => {
            if (data && data['success']) {
              let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
              for (let _items in data['data']) {
                let _currentObj = data['data'][_items];
                _keyPairedMapObj[_currentObj._id] = _currentObj
              }
              this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
              this.loading = false;
            } else {
              this.loading = false;
            }
          },
          error => {
            this.loading = false;
          });
      this.sessionsService.getSessionLengthByService(null, null, null, null, null)
        .pipe(first())
        .subscribe(
          data => {
            //console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              this.allSessionsCount = data['data'];
              //this.alertService.success(data['message'], true);
              this.loading = false;
              //this.element_btn_click_addSession_skills_verification.click();
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
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
            //this.alertService.error(errorMsg2show);
            this.loading = false;
          });
    }
    ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
      this.subscription1.unsubscribe();
    }
  
    check4applyToSession(sessionObj) {
      if (sessionObj && sessionObj.sessionAppliedByBorrowers) {
        if (_.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id }).length > 0) {
          return true;
        }
      }
      return false;
    }
  
    applyToSession(sessionObj) {
      console.log('179', this.authenticationService.currentUserValue);
      const dialogRef = this.dialog.open(ModalApplySession, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        data: {
          sessionObj: sessionObj,
          borrowerId: this.authenticationService.currentUserValue._id
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        let _currentSessionApply = null;
        if (result) {
          if (result.data) {
            _currentSessionApply = result.data.sessionApply
            if (_currentSessionApply) {
              if (!_currentSessionApply._id) {
                _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
              }
              _currentSessionApply.status = result.data.status || SessionStatus.Pending;
              this.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);
              switch (_currentSessionApply.status) {
                case SessionStatus.Pending:
                  this.socketService.setSessionApply(true, _currentSessionApply);
                  break;
                default:
                  this.socketService.updateSessionApply(true, _currentSessionApply, this.authenticationService.currentUserValue);
                  break;
              }
              switch (_currentSessionApply.status) {
                case SessionStatus.Accepted:
                  this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                  break;
                case SessionStatus.Pending:
                  this.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);
                  break;
                case SessionStatus.Rejected:
                case SessionStatus.RejectedOngoing:
                case SessionStatus.RejectedOngoingWithRefund:
                case SessionStatus.Suspended:
                  this.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);
                  break;
                case SessionStatus.Completed:
                  this.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);
                  break;
                case SessionStatus.Active:
                case SessionStatus.Ongoing:
                case SessionStatus.OngoingInitiated:
                case SessionStatus.OngoingAccepted:
                  this.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);
                  break;
                default:
                  break;
              }
            }
          }
        }
        console.log(`239 :: hc :: Dialog result: ${JSON.stringify(result)}`);
      });
    }
  
    showAppliedToSession(sessionObj) {
      let _proccessedSessionObj = null;
      switch (this.authenticationService.currentUserValue.role) {
        case Role.Borrower:
          _proccessedSessionObj = _.cloneDeep(sessionObj);
          _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id });
          break;
        default:
          _proccessedSessionObj = _.cloneDeep(sessionObj);
          break;
      }
  
  
      console.log('214', this.authenticationService.currentUserValue);
      const dialogRef = this.dialog.open(ModalAppliedSessionDisplay, {
        backdropClass: 'cdk-overlay-transparent-backdrop',
        hasBackdrop: true,
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        data: {
          sessionObj: _proccessedSessionObj,
          borrowerId: this.authenticationService.currentUserValue._id
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`238 :: hc :: Dialog result: ${JSON.stringify(result)}`);
      });
    }
  
    clickedOnSessionChatVideo(sessionObj, AVTrueChatFalse) {
      let _contactId = this.contactService.returnContactIdForSession(sessionObj._id, sessionObj.sessionAppliedByBorrowers[0]._id);
      let _parentRouting = '';
      switch (this.authenticationService.currentUserValue.role) {
        case Role.Borrower:
          _parentRouting = 'borrower';
          break;
        case Role.Lender:
          _parentRouting = 'lender';
          break;
        case Role.Admin:
          _parentRouting = 'admin';
          break;
      }
      this.router.navigate(['/' + _parentRouting + '/messages'], { state: { contactId: _contactId, AVTrueChatFalse: AVTrueChatFalse } });
    }
    */
}