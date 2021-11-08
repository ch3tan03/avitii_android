import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { AppAccessPermissions, Role, SessionStatus } from 'src/app/models';
import { AlertService, AuthenticationService, UserService } from 'src/app/services';
import { UtilityService } from 'src/app/services/utility.service';
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';
import { SocketioService } from 'src/app/socketio.service';
import * as _ from 'lodash';
import { ModalAppliedSessionDisplay } from 'src/app/borrower/borrower.component';

@Component({
  selector: 'app-loan-payment',
  templateUrl: './loan-payment.component.html',
  styleUrls: ['./loan-payment.component.css']
})
export class LoanPaymentComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

  PaymentTransactionDetailsArray: any = null;
  loading = false;
  Role = Role;
  constructor(
    public dialog: MatDialog,
    private socketService: SocketioService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    public authenticationService: AuthenticationService,
    public router: Router,
    private elementRef: ElementRef,
    public userService: UserService,
    private _cdr: ChangeDetectorRef
  ) {
    let _data = {
      status: ['unpaid']
    };
    this.socketService.getSessionApplyAllByQuery(false, _data, null)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.PaymentTransactionDetailsArray = data["data"];
            this.populateUsersDataInTable();
            //this.rerender();
            let _dataObj = _.flattenDepth(_.map(_.values(this.PaymentTransactionDetailsArray), "sessionAppliedByBorrowers"), 1);
            let _allUsersArray = _.map(_.uniq(_.union(_.map(_dataObj, 'borrowerId'), _.map(_dataObj, 'lenderId'))),'_id');

            this.userService.proccessAllAppUsersCollections(_allUsersArray);
            this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
            setTimeout(() => {                           //<<<---using ()=> syntax
              this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
            }, 3000);

            this.loading = false;
          } else {
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          this.PaymentTransactionDetailsArray = [];
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


  //#region datatable actions

  ngOnInit(): void {
    this.populateUsersDataInTable();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    if (this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.querySelector('.paginate_button.next')) {
      this.elementRef.nativeElement.querySelector('.paginate_button.next')
        .removeEventListener('click');
    }
  }

  populateUsersDataInTable() {
    this.destroyTable();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      drawCallback: () => {
        this.elementRef.nativeElement.querySelector('.paginate_button.next')
          .addEventListener('click', this.onClick.bind(this));
      }
    };
    this.dtTrigger.next();
    this.rerender();
  }

  ngAfterViewInit(): void {
    if (this.datatableElement && this.datatableElement.dtInstance) {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
      });
    }
  }

  rerender(): void {
    if (this.datatableElement && this.datatableElement.dtInstance) {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }
  }

  destroyTable(): void {
    if (this.datatableElement && this.datatableElement.dtInstance) {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
      });
    }
  }

  onClick(event): void {
  }

  //#endregion datatable actions


  calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower() {
    for (let item in this.PaymentTransactionDetailsArray) {
      let _LoanObj = this.PaymentTransactionDetailsArray[item];
      if (_LoanObj) {
        _LoanObj.nextInstallment = null;
        let _proccessedSessionObj = null;
        switch (this.authenticationService.currentUserValue.role) {
          case Role.Borrower:
            _proccessedSessionObj = _.cloneDeep(_LoanObj);
            _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(_LoanObj.sessionAppliedByBorrowers, { "borrowerId":{"_id": this.authenticationService.currentUserValue._id }});
            break;
          case Role.Lender:
            _proccessedSessionObj = _.cloneDeep(_LoanObj);
            _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(_LoanObj.sessionAppliedByBorrowers, { "lenderId":{"_id": this.authenticationService.currentUserValue._id }});//_sessionAppliedByLenders
            break;
          default:
            _proccessedSessionObj = _.cloneDeep(_LoanObj);
            break;
        }

        for (let indexOuter in _proccessedSessionObj.sessionAppliedByBorrowers) {
          let LoanApplyObj = _proccessedSessionObj.sessionAppliedByBorrowers[indexOuter];

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
                    if (!_LoanObj.nextInstallmentBorrowerFirstName) {
                      _LoanObj.nextInstallmentBorrowerFirstName = this.userService.returnUsersObjFromLocal(null, false, 'firstName', _LoanObj.nextInstallmentBorrowerId);
                    }
                    break;
                  }
                }
                _LoanObj.nextInstallment = installment.loanStartDateTime;
                _LoanObj.nextInstallmentBorrowerId = LoanApplyObj.borrowerId._id;
                _LoanObj.nextInstallmentBorrowerFirstName = this.userService.returnUsersObjFromLocal(null, false, 'firstName', _LoanObj.nextInstallmentBorrowerId);
                _LoanObj.nextInstallmentLenderId = LoanApplyObj.lenderId._id;
                _LoanObj.nextInstallmentLenderFirstName = this.userService.returnUsersObjFromLocal(null, false, 'firstName', _LoanObj.nextInstallmentLenderId);
                break;
              }
            }

          }
        }
        this.PaymentTransactionDetailsArray[item] = _LoanObj;

      }
    }
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

  showAppliedToSession(sessionObj) {
    let _proccessedSessionObj = null;
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByBorrowers, { "lenderId": {"_id":this.authenticationService.currentUserValue._id} });
        break;
      default:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        break;
    }


    //console.log('214', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalAppliedSessionDisplay, {
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'my_session_details_modal',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        sessionObj: _proccessedSessionObj,
        endUserId: this.authenticationService.currentUserValue._id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data) {
          if (result.data.status && result.data.sessionApply) {
            let _loanId = result.data.sessionApply.loanId;
            let _sessionPrice = result.data.sessionApply.loanAmount;
            let _loanApplyId = result.data.sessionApply._id;
            //let _borrowerId = result.data.sessionApply.borrowerId._id;
            let _transactionId = result.data.transactionId;
            let _status = result.data.status;
            //initiate payment here
            //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
            let _allowed2CreateContactForSessionT = false;
            switch (_status) {
              case SessionStatus.Accepted:
                //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                //this.proccedAppliedToSession(sessionObj, _loanApplyId);
                _allowed2CreateContactForSessionT = true;
                break;
              case SessionStatus.Pending:
                //this.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);
                break;
              case SessionStatus.Rejected:
              case SessionStatus.RejectedOngoing:
              case SessionStatus.RejectedOngoingWithRefund:
              case SessionStatus.Suspended:
                //this.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);
                break;
              case SessionStatus.Completed:
                //this.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);
                break;
              case SessionStatus.Active:
              case SessionStatus.Ongoing:
              case SessionStatus.OngoingInitiated:
              case SessionStatus.AwaitingForApproval:
                //this.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);
                break;
              default:
                _allowed2CreateContactForSessionT = false;
                break;
            }
            /*
            if (_transactionId) {
              this.socketService.setSessionUpdateStatusForTransaction(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
              if (_allowed2CreateContactForSessionT) {
                let _adminUsersArray = [];
                _adminUsersArray.push(this.authenticationService.currentUserValue._id);
                _adminUsersArray.push(_borrowerId);
                let _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, _proccessedSessionObj.sessionSubject, _loanId, _loanApplyId, _adminUsersArray, null, null);
                this.socketService.sendEventToAddNewContact(_currentContactObj);
              }
            } else {
              //#region other cases where need to update status of session
              switch (_status) {
                case SessionStatus.Pending:
                case SessionStatus.Rejected:
                  break;
                default:
                  if (!_transactionId) {
                    this.socketService.setSessionUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id);
                  }
                  break;
              }
              //#endregion other cases where need to update status of session
            }
            */
          }
          if (result.data.updatedSessionObj) {

            let _keyPairedMapObj = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, "_id");

            _keyPairedMapObj[result.data.updatedSessionObj._id] = result.data.updatedSessionObj;

            this.PaymentTransactionDetailsArray = this.utilityService._.values(_keyPairedMapObj);

            let _dataObj = _.flattenDepth(_.map(_.values(this.PaymentTransactionDetailsArray), "sessionAppliedByBorrowers"), 1);
            let _allUsersArray = _.map(_.uniq(_.union(_.map(_dataObj, 'borrowerId'), _.map(_dataObj, 'lenderId'))),'_id');

            this.userService.proccessAllAppUsersCollections(_allUsersArray);

            this._cdr.detectChanges();
          }
        }
      }
      //console.log(`129 :: Dialog result: ${JSON.stringify(result)}`);
    });
  }
}