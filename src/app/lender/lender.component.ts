import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SessionStatus, SessionExecutionType, Role, TransactionActionType } from '../models';
import { IPayPalConfig } from 'ngx-paypal';
import { UtilityService } from '../services/utility.service';
import { PaymentService } from '../services/payment.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SocketioService } from '../socketio.service';
import { AlertService } from '../services/alert.service';
import { AuthenticationService, UserService } from '../services';
import { ContactService } from '../services/contact.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.css']
})

export class LenderComponent {
  constructor(public dialog: MatDialog) { }

  applyToSession() {
    const dialogRef = this.dialog.open(ModalApplySession);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`25 :: ec :: Dialog result: ${JSON.stringify(result)}`);
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
  sessionApply: any;
  arrayItems: any = [0];
  SessionExecutionType = SessionExecutionType;
  constructor(
    public dialogRef: MatDialogRef<ModalApplySession>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public utilityService: UtilityService, 
  ) {
    this.LoanObj = data.sessionObj;
    this.sessionApply = {};
    this.sessionApply.loanId = this.LoanObj._id;
    this.sessionApply.loanAmount = this.LoanObj.loanAmount;
    this.sessionApply.borrowerId = data.borrowerId;
    this.sessionApply.sessionExecutionType = SessionExecutionType.FixedPrice;
    this.sessionApply.mileStoneProposal = [];
    this.sessionApply.mileStoneProposal.push({ "milestones": null, "milestonesProposal": null });
  }

  addMilestones() {
    if (this.arrayItems.length < 5) {
      this.sessionApply.mileStoneProposal.push({ "milestones": null, "milestonesProposal": null });
      this.arrayItems.push(this.arrayItems.length);
    }
  }
  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.sessionApply });
  }
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
  public payPalConfig?: IPayPalConfig;
  userInitiatedForPayment: boolean = false;
  SessionExecutionType = SessionExecutionType;
  refundObj: any = {};
  ready2Refund: boolean = false;
  constructor(
    private alertService: AlertService,
    public socketService: SocketioService,
    public router: Router,
    public dialogRef: MatDialogRef<ModalAppliedSessionDisplay>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, 
    public utilityService: UtilityService, 
    public payment: PaymentService,
    public userService: UserService,
    private authenticationService: AuthenticationService,
    public contactService: ContactService
  ) {
    this.LoanObj = data.sessionObj;
    this.endUserId = data.endUserId;
  }

  returnUrl4downloadCOntractPDF(sessionApplyId) {
    let Url4downloadCOntractPDF = environment.apiUrl +'/signed_pdf_contract/' + sessionApplyId + '.pdf';
    return Url4downloadCOntractPDF;
  }

  ngOnInit() {
  }
  finalSubmissionForRefund() {
    this.socketService.sendEventToRejectSessionWithRefundRequestWiUpdateAll(this.refundObj.loanId, this.refundObj.loanApplyId, this.endUserId, SessionStatus.RejectedOngoingWithRefund, this.refundObj.transactionId, this.refundObj.amount, this.refundObj.cancellationCharges, this.refundObj.finalAmount2Refund, this.refundObj.captureId, this.refundObj._id).pipe(first()).subscribe(details => {
      if (details && details["success"]) {
      } else {
      }
      this.dialogRef.close({ event: 'close', data: null });
    });

  }
  closeDialog(_sessionApply, _status) {
    this.payment.clearCurrentPayPalConfig();
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
        switch (_sessionApply.sessionExecutionType) {
          case SessionExecutionType.FixedPrice:
            _sessionPrice = _sessionApply.fixedPriceProposal;
            break;
          case SessionExecutionType.Milestones:
            _sessionPrice = this.utilityService._.sum(this.utilityService._.map(_sessionApply.mileStoneProposal, 'milestonesProposal'));
            break;
        }
        //initiate payment here
        _transactiActionType = TransactionActionType.session_ongoing;
        this.initiateForPaymentForLender(_loanId, _loanApplyId, _sessionApply, _status, _sessionPrice, _endUserId, _transactiActionType);
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
        this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status } });
        break;
    }
  }

  initiateForPaymentForLender(_loanId, _loanApplyId, _sessionApply, _status, _sessionPrice, _endUserId, _transactiActionType) {
    //#region handle LoanObj payments
    this.userInitiatedForPayment = true;
    let purchaseUnits = [
      {
        custom_id: _loanId,
        amount: {
          currency_code: 'USD',
          value: _sessionPrice,
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: _sessionPrice
            }
          }
        },
        items: [
          {
            description: _loanApplyId,
            name: TransactionActionType.session_extended + '__' + _loanId,
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: _sessionPrice,
            },
          }
        ]
      }
    ];
    this.payment.getCurrentPaymentApproved().pipe(first()).subscribe(details => {
      this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, transactionId: (details.id || details._id) } });
    });
    this.payPalConfig = this.payment.initConfig(purchaseUnits, _transactiActionType, _endUserId);
    //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id);    
    //#endregion handle LoanObj payments
  }

  check4SessionApplyStatus(sessionApply) {
    try {
      if (sessionApply.status == SessionStatus.Accepted) {
        this.anySingleDataIsApproved = true;
      }
    } catch (ex) { }
    try {
      if ((sessionApply.status == SessionStatus.Pending || sessionApply.status == 'Pending' || sessionApply.status == '' || sessionApply.status == null || typeof sessionApply.status == 'undefined') && this.anySingleDataIsApproved == false) {
        return false;
      }
    } catch (ex) {
    }
    return true;
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

  addNewRatings(_sessionApply) {
    let _loanId = _sessionApply.loanId;
    let _createdBy = this.endUserId;
    let _userId = _sessionApply.borrowerId;
    let _parentRouting = '';
    _parentRouting = 'lender';

    this.router.navigate(['/' + _parentRouting + '/ratings'], { state: { createdBy: _createdBy, userId: _userId, loanId: _loanId } });
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


@Component({
  selector: 'modal-public-profile',
  templateUrl: './modal/modal-public-profile.html',
})
export class ModalPublicProfile implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalPublicProfile>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public utilityService: UtilityService
  ) {

  }

  ngOnInit() {
  }

}