import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { environment } from 'src/environments/environment';
import { SessionStatus, SessionExecutionType, Role } from '../models/role';
import { AlertService, AuthenticationService } from '../services';
import { ContactService } from '../services/contact.service';
import { UserService } from '../services/user.service';
import { UtilityService } from '../services/utility.service';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
// export class BorrowerComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class BorrowerComponent {
  constructor(public dialog: MatDialog) { }

  applyToSession() {
    const dialogRef = this.dialog.open(ModalApplySession, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`25 :: co :: Dialog result: ${JSON.stringify(result)}`);
    });
  }
}

//#region modal popup for apply LoanObj
@Component({
  selector: 'modal-apply-session',
  templateUrl: './modal/modal-apply-session.html',
})
export class ModalApplySession implements OnInit {

  LoanObj: any;
  LoanApplyObj: any;
  arrayItems: any = [0];
  anySingleDataIsApproved: boolean;
  SessionStatus: any = SessionStatus;
  editing: boolean = false;
  SessionExecutionType = SessionExecutionType;
  constructor(
    public dialogRef: MatDialogRef<ModalApplySession>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public utilityService: UtilityService
  ) {
    this.LoanObj = data.sessionObj;
    if (!data.LoanApplyObj) {
      this.LoanApplyObj = {};
      this.LoanApplyObj.loanId = this.LoanObj._id;
      this.LoanApplyObj.loanAmount = this.LoanObj.loanAmount;
      this.LoanApplyObj.borrowerId = data.borrowerId;
      this.LoanApplyObj.sessionExecutionType = SessionExecutionType.FixedPrice;
      this.LoanApplyObj.mileStoneProposal = [];
      this.LoanApplyObj.mileStoneProposal.push({ "milestones": null, "milestonesProposal": null });
    } else {
      this.LoanApplyObj = data.LoanApplyObj;
      this.editing = true;
    }
  }

  addMilestones() {
    if (this.arrayItems.length < 5) {
      this.LoanApplyObj.mileStoneProposal.push({ "milestones": null, "milestonesProposal": null });
      this.arrayItems.push(this.arrayItems.length);
    }
  }
  returnSessionApplyStatus(LoanApplyObj) {
    let _currentStatus = SessionStatus.Pending;

    try {
      if ((LoanApplyObj.status == SessionStatus.Pending || LoanApplyObj.status == 'Pending' || LoanApplyObj.status == '' || LoanApplyObj.status == null || typeof LoanApplyObj.status == 'undefined')) {
        _currentStatus = SessionStatus.Pending;
      } else {
        _currentStatus = LoanApplyObj.status;
      }
    } catch (ex) { }
    try {
      if (LoanApplyObj.status != SessionStatus.Pending && LoanApplyObj.status != SessionStatus.Rejected && LoanApplyObj.status != SessionStatus.RejectedOngoing) {
        this.anySingleDataIsApproved = true;
      }
    } catch (ex) { }
    return _currentStatus;
  }
  ngOnInit() {

  }
  closeDialog() {
    this.dialogRef.close({ event: 'close', data: {} });
  }
  /*
    closeDialog(LoanApplyObj, status) {
      this.dialogRef.close({ event: 'close', data: {LoanApplyObj: LoanApplyObj || this.LoanApplyObj, status:status,editing: this.editing } });
    }
    */
}
//#endregion modal popup for apply LoanObj


//#region modal popup for display applied sessions
@Component({
  selector: 'modal-applied-session-display',
  templateUrl: './modal/modal-applied-session-display.html',
})
export class ModalAppliedSessionDisplay implements OnInit {
  SessionStatus: any = SessionStatus;
  LoanObj: any;
  arrayItems: any = [0];
  endUserId: any;
  anySingleDataIsApproved: boolean = false;
  //public payPalConfig?: IPayPalConfig;
  userInitiatedForPayment: boolean = false;
  SessionExecutionType = SessionExecutionType;
  refundObj: any = {};
  ready2Refund: boolean = false;

  alreadyInitiatedForPayment: Boolean = false;
  LoanApplyObjCurrent: any;
  LoanApplyObjCurrent4Installment: any;
  transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised = null;
  LoanApplyObjCurrentCheckBoxes: any = {};
  transactionOnForLoanAmountPaidToLenderCustomised = null;
  alreadyVisibleForPayment: Boolean = false;
 
  constructor(
    private alertService: AlertService,
    public socketService: SocketioService,
    public dialogRef: MatDialogRef<ModalAppliedSessionDisplay>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService,
    public utilityService: UtilityService,
    public dialog: MatDialog,
    private router: Router,
    public authenticationService: AuthenticationService,
    public contactService: ContactService
  ) {
    this.LoanObj = data.sessionObj;
    this.LoanApplyObjCurrent = {};
    this.LoanApplyObjCurrentCheckBoxes = {};
    this.LoanApplyObjCurrentCheckBoxes.visibleKeys = {};
    this.LoanApplyObjCurrent4Installment = {};
  }
  
  paymentDoneByLenderConfirmByBorrower(LoanApplyObj) {
    this.LoanApplyObjCurrent._id = LoanApplyObj._id;
    if (this.transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised) {
      this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD'));
    }
    if (!this.LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower || !this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower) {
      this.alertService.error("All data is required");
      return;
    }
    if (this.utilityService.moment(this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower).isAfter(this.utilityService.moment())) {
      this.alertService.error("Future date is not allowed");
      return;
    }
    if (this.utilityService.moment(this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower).isBefore(this.utilityService.moment(this.LoanObj.loanStartDateTime))) {
      this.alertService.error("Transaction date must be newer than loan created date");
      return;
    }

    this.LoanApplyObjCurrent.createdOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();

    this.socketService.sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, this.LoanApplyObjCurrent).pipe(first()).subscribe(details => {
      if (details && details["success"]) {
        this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
      }
    });
    this.LoanApplyObjCurrent = {};
  }

  paymentDoneToLender(LoanApplyObj) {
    let _past_days_allowed4payment = 15;
    let _future_days_allowed4payment = 7;

    //this.LoanApplyObjCurrent4Installment.loanTenureInMonths = this.LoanObj.loanTenureInMonths;
    //this.LoanApplyObjCurrent4Installment.installmentKey = null;
    //this.LoanApplyObjCurrent4Installment._id = LoanApplyObj._id;
    if (this.transactionOnForLoanAmountPaidToLenderCustomised) {
      this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidToLenderCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD 00:00:00 A'));
    }
    if (!this.LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender || !this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender) {
      this.alertService.error("All data is required");
      return;
    }
    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isAfter(this.utilityService.moment(this.LoanApplyObjCurrent4Installment.installmentKey).add('D', _future_days_allowed4payment))) {
      this.alertService.error("Future date is not allowed");
      return;
    }

    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidByLender).isAfter(this.utilityService.moment().add('D', (-1) * _past_days_allowed4payment))) {
      this.alertService.error("Historic date is not allowed");
      return;
    }
    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidByLender).isBefore(this.utilityService.moment().add('D',))) {
      this.alertService.error("Future date is not allowed");
      return;
    }

    if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
      let _old_installmentKey: string = null;
      for (let index in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index]) {
          _old_installmentKey = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index].installmentKey;
        }
      }
      if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isBefore(this.utilityService.moment(_old_installmentKey))) {
        this.alertService.error("Transaction date must be newer than last installment date");
        return;
      }
    } else {
      if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isBefore(this.utilityService.moment(this.LoanObj.loanStartDateTime))) {
        this.alertService.error("Transaction date must be newer than loan created date");
        return;
      }
    }

    this.LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender = this.utilityService._.now();
    let _loanTenureInMonths: number = parseInt(this.LoanObj.loanTenureInMonths);
    let _installmentKey: string = this.LoanApplyObjCurrent4Installment.installmentKey;
    //delete this.LoanApplyObjCurrent4Installment.installmentKey;

    this.socketService.sendEventForLoanAmountPaidToLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, _installmentKey, _loanTenureInMonths, this.LoanApplyObjCurrent4Installment)
      .pipe(first())
      .subscribe(details => {
        if (details && details["success"]) {
          this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
        }
      });
    this.LoanApplyObjCurrent4Installment = {};
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

  viewCurrentInstallmentAlreadyPaid(LoanApplyObj, currentRowDate, _key) {
    let _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');
    if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
      if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
          this.LoanApplyObjCurrent4Installment = {};
          this.LoanApplyObjCurrent4Installment = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey];
          return true;
        }
      }
    }
    return false;
  }

  initiateLoanAmountPaidByBorrower(event, LoanApplyObj, currentRowDate, _key) {
    if (LoanApplyObj) {
      let _installmentKey = null
      if (event.target.checked && !this.alreadyInitiatedForPayment) {

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
        if (!event.target.checked) {
          if (this.alreadyInitiatedForPayment) {
            this.alreadyInitiatedForPayment = false;
          }
          this.LoanApplyObjCurrent4Installment = {};
        }
        event.target.checked = false;
        this.LoanApplyObjCurrentCheckBoxes[_key] = false;
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
    /*
    if (_key) {

      if (!this.LoanApplyObjCurrentCheckBoxes.visibleKeys) {
        this.LoanApplyObjCurrentCheckBoxes.visibleKeys = {};
      }
      if (this.utilityService._.keys(this.LoanApplyObjCurrentCheckBoxes.visibleKeys).length>0) {
        this.LoanApplyObjCurrentCheckBoxes.visibleKeys[_key] = true;
      }
    }
    */
    return false;
  }

  returnUrl4downloadCOntractPDF(sessionApplyId) {
    let Url4downloadCOntractPDF = environment.apiUrl + '/signed_pdf_contract/' + sessionApplyId + '.pdf';
    return Url4downloadCOntractPDF;
  }

  ngOnInit() {
  }

  closeDialog(_sessionApply, _status) {
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

        //#endregion handle LoanObj rejected with refund  
        break;
      default:
        this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status } });
        break;
    }
  }
  returnSessionApplyStatus(LoanApplyObj) {
    let _currentStatus = SessionStatus.Pending;

    try {
      if ((LoanApplyObj.status == SessionStatus.Pending || LoanApplyObj.status == 'Pending' || LoanApplyObj.status == '' || LoanApplyObj.status == null || typeof LoanApplyObj.status == 'undefined')) {
        _currentStatus = SessionStatus.Pending;
      } else {
        _currentStatus = LoanApplyObj.status;
      }
    } catch (ex) { }
    try {
      if (LoanApplyObj.status != SessionStatus.Pending && LoanApplyObj.status != SessionStatus.Rejected && LoanApplyObj.status != SessionStatus.RejectedOngoing) {
        this.anySingleDataIsApproved = true;
      }
    } catch (ex) { }
    return _currentStatus;
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
    this.dialogRef.close({ event: 'close', data: {} });
    this.router.navigate(['/' + _parentRouting + '/messages'], { state: { contactId: _contactId, AVTrueChatFalse: AVTrueChatFalse } });
  }

}
//#endregion modal popup for display applied sessions