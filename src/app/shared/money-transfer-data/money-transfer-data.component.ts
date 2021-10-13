import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SessionStatus, SessionExecutionType, Role, TransactionActionType } from 'src/app/models'
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from 'src/app/services';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';


@Component({
  selector: 'app-money-transfer-data',
  templateUrl: './money-transfer-data.component.html',
  styleUrls: ['./money-transfer-data.component.css']
})
export class MoneyTransferDataComponent implements OnInit {
  SessionStatus: any = SessionStatus;
  LoanObj: any;
  arrayItems: any = [0];
  endUserId: any;
  anySingleDataIsApproved: boolean = false;

  userInitiatedForPayment: boolean = false;
  SessionExecutionType = SessionExecutionType;
  refundObj: any = {};
  ready2Refund: boolean = false;

  alreadyInitiatedForPayment: Boolean = false;
  LoanApplyObjCurrent: any;
  LoanApplyObjCurrent4Installment: any;
  LoanApplyObjCurrentCheckBoxes: any;
  transactionOnForLoanAmountPaidByLenderCustomised = null;
  transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised = null;
  Role = Role;
  updatedSessionObj: any = null;
  LoanApplyObj: any = null;
  transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised = null;
  transactionOnForLoanAmountPaidToLenderCustomised = null;
  constructor(
    private alertService: AlertService,
    public dialogRef: MatDialogRef<MoneyTransferDataComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public utilityService: UtilityService,
    public socketService: SocketioService,
    public authenticationService: AuthenticationService,
  ) {

    this.LoanObj = data.LoanObj;
    this.LoanApplyObj = data.LoanApplyObj;

    this.endUserId = data.endUserId;
    this.LoanApplyObjCurrent = {
      isLoanAmountPaidByLender: true
    };
    this.LoanApplyObjCurrentCheckBoxes = {};
    this.LoanApplyObjCurrentCheckBoxes.visibleKeys = {};
    this.LoanApplyObjCurrent4Installment = {};

    if (data.installmentKey) {
      if (!data.updateLastInstallmentPaymentStatus) {
        this.initiateLoanAmountPaidByBorrower(true, this.LoanApplyObj, data.installmentKey, null);
      } else {
        this.initiateLoanAmountPaidByBorrowerConfirmByLender(true, this.LoanApplyObj, data.installmentKey, null);
      }
    }
  }

  ngOnInit(): void {
  }

  closeDialog(_sessionApply, _status) {
    if (_sessionApply) {
      let _loanId = _sessionApply.loanId;
      let _sessionPrice = 0;
      let _loanApplyId = _sessionApply._id;
      let _endUserId = this.endUserId;
      let _transactiActionType = null;
      switch (_status) {
        case SessionStatus.Accepted:
          //#region handle LoanObj accepted
          //_sessionPrice = this.LoanObj.loanAmount;
          //initiate payment here
          //_transactiActionType = TransactionActionType.session_accepted;
          //this.initiateForPaymentForLender(_loanId, _loanApplyId, _sessionApply, _status, _sessionPrice, _endUserId, _transactiActionType);
          this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status } });
          //#endregion handle LoanObj accepted
          break;
        case SessionStatus.Ongoing:
          //#region handle LoanObj accepted

          //#endregion handle LoanObj accepted
          break;
        case SessionStatus.RejectedOngoingWithRefund:
          this.ready2Refund = false;
          //#region handle LoanObj rejected with refund
          this.socketService.sendEventToRejectSessionWithRefundRequest(_loanId, _loanApplyId, _endUserId, _status).pipe(first()).subscribe(details => {
            if (details && details["success"]) {
              this.refundObj = details["data"];
              this.ready2Refund = true;
            } else {
              this.alertService.error(details["message"], true);
            }
            //this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, transactionId: (details.id || details._id) } });
          });
          //#endregion handle LoanObj rejected with refund  
          break;
        default:
          this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, updatedSessionObj: this.updatedSessionObj } });
          break;
      }
    } else {
      this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, updatedSessionObj: this.updatedSessionObj } });
    }
  }

  paymentDoneByLender(LoanApplyObj) {
    this.LoanApplyObjCurrent._id = LoanApplyObj._id;
    this.LoanApplyObjCurrent.isLoanAmountPaidByLender = true;
    if (this.transactionOnForLoanAmountPaidByLenderCustomised) {
      this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidByLenderCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD'));
    }
    if (!this.LoanApplyObjCurrent.isLoanAmountPaidByLender || !this.LoanApplyObjCurrent.transactionIdForLoanAmountPaidByLender || !this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender) {
      this.alertService.error("All data is required");
      return;
    }

    this.LoanApplyObjCurrent.createdOnForLoanAmountPaidByLender = this.utilityService._.now();

    this.socketService.sendEventForLoanAmountPaidByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, this.LoanApplyObjCurrent).pipe(first()).subscribe(details => {
      if (details && details["success"]) {
        this.updatedSessionObj = details["data"];
        this.LoanObj = this.updatedSessionObj;
        this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
      }
    });
    this.LoanApplyObjCurrent = {
      isLoanAmountPaidByLender: true
    };
  }

  returnSessionApplyStatus(sessionApply) {
    let _currentStatus = SessionStatus.Pending;

    try {
      if ((sessionApply.status == SessionStatus.Pending || sessionApply.status == 'Pending' || sessionApply.status == '' || sessionApply.status == null || typeof sessionApply.status == 'undefined')) {
        _currentStatus = SessionStatus.Pending;
      } else {
        _currentStatus = sessionApply.status;
      }
    } catch (ex) { }
    try {
      if (sessionApply.status != SessionStatus.Pending && sessionApply.status != SessionStatus.Rejected && sessionApply.status != SessionStatus.RejectedOngoing) {
        this.anySingleDataIsApproved = true;
      }
    } catch (ex) { }
    return _currentStatus;
  }

  paymentDoneByLenderConfirmByBorrower(LoanApplyObj) {
    this.LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower = true;
    this.LoanApplyObjCurrent._id = LoanApplyObj._id;
    if (this.transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised) {
      this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD'));
    }
    if (!this.LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower || !this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower) {
      this.alertService.error("All data is required");
      return;
    }

    this.LoanApplyObjCurrent.createdOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();

    this.socketService.sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, this.LoanApplyObjCurrent).pipe(first()).subscribe(details => {
      if (details && details["success"]) {
        this.updatedSessionObj = details["data"];
        this.LoanObj = this.updatedSessionObj;
        this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
      }
    });
    this.LoanApplyObjCurrent = {};
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

  initiateLoanAmountPaidByBorrower(isChecked, LoanApplyObj, currentRowDate, _key) {
    if (LoanApplyObj) {
      let _installmentKey = null
      if (isChecked && !this.alreadyInitiatedForPayment) {

        _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');

        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
          if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
            this.alertService.error("Installment already paid");
            return;
          }
        }
        this.LoanApplyObjCurrent4Installment = {};
        this.LoanApplyObjCurrent4Installment.installmentKey = _installmentKey;
        this.alreadyInitiatedForPayment = true;
      } else {
        if (!isChecked) {
          if (this.alreadyInitiatedForPayment) {
            this.alreadyInitiatedForPayment = false;
          }
          this.LoanApplyObjCurrent4Installment = {};
        }
        isChecked = false;
        this.LoanApplyObjCurrentCheckBoxes[_key] = false;
      }
    }
  }

  paymentDoneToLender(LoanApplyObj) {
    this.LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin = false;
    if (this.returnSessionApplyStatus(LoanApplyObj) == SessionStatus.Unpaid && this.authenticationService.currentUserValue.role == Role.Admin) {
      this.LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin = true;
    }

    if (this.transactionOnForLoanAmountPaidToLenderCustomised) {
      this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidToLenderCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD 00:00:00 A'));
    }
    if (!this.LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender || !this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender) {
      this.alertService.error("All data is required");
      return;
    }

    if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
      let _old_installmentKey: string = null;
      for (let index in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index]) {
          _old_installmentKey = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index].installmentKey;
        }
      }

    } else {

    }

    this.LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender = this.utilityService._.now();
    let _loanTenureInMonths: number = parseInt(this.LoanObj.loanTenureInMonths);
    let _installmentKey: string = this.LoanApplyObjCurrent4Installment.installmentKey;

    //delete this.LoanApplyObjCurrent4Installment.installmentKey;

    this.socketService.sendEventForLoanAmountPaidToLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, _installmentKey, _loanTenureInMonths, this.LoanApplyObjCurrent4Installment)
      .pipe(first())
      .subscribe(details => {
        if (details && details["success"]) {
          this.updatedSessionObj = details["data"];
          this.LoanObj = this.updatedSessionObj;
          this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
        }
      });
    this.LoanApplyObjCurrent4Installment = {};
  }

  initiateLoanAmountPaidByBorrowerConfirmByLender(isChecked, LoanApplyObj, currentRowDate, _key) {
    if (LoanApplyObj) {
      let _installmentKey = null
      if (isChecked && !this.alreadyInitiatedForPayment) {

        _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');
        this.LoanApplyObjCurrent4Installment = {};
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
          if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey].createdOnForLoanAmountPaidToLenderConfirmByLender) {
              this.alertService.error("Installment payment already confirmed");
              return;
            } else {
              this.LoanApplyObjCurrent4Installment = {};
              this.LoanApplyObjCurrent4Installment = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey];
            }
          }
        }

        this.LoanApplyObjCurrent4Installment.installmentKey = _installmentKey;
        this.alreadyInitiatedForPayment = true;

      } else {
        if (!isChecked) {
          if (this.alreadyInitiatedForPayment) {
            this.alreadyInitiatedForPayment = false;
          }
          this.LoanApplyObjCurrent4Installment = {};
        }
        isChecked = false;
        this.LoanApplyObjCurrentCheckBoxes[_key] = false;
      }
    }
  }
  paymentDoneToLenderConfirmByLender(LoanApplyObj) {

    if (this.transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised) {
      this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD 00:00:00 A'));
    }
    if (!this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender) {
      this.alertService.error("All data is required");
      return;
    }

    if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
      let _old_installmentKey: string = null;
      for (let index in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index]) {
          if (!LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index].createdOnForLoanAmountPaidToLenderConfirmByLender) {
            break;
          }
          _old_installmentKey = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index].installmentKey;
        }
      }
      
    } else {
      
    }

    this.LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender = this.utilityService._.now();
    let _loanTenureInMonths: number = parseInt(this.LoanObj.loanTenureInMonths);
    let _installmentKey: string = this.LoanApplyObjCurrent4Installment.installmentKey;

    this.socketService.sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, _installmentKey, _loanTenureInMonths, this.LoanApplyObjCurrent4Installment)
      .pipe(first())
      .subscribe(details => {
        if (details && details["success"]) {
          this.updatedSessionObj = details["data"];
          this.LoanObj = this.updatedSessionObj;
          this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
        }
      });
    this.LoanApplyObjCurrent4Installment = {};
  }

}
