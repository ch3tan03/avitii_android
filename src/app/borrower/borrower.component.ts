import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SessionStatus, SessionExecutionType, Role } from '../models/role';
import { AuthenticationService } from '../services';
import { ContactService } from '../services/contact.service';
import { UserService } from '../services/user.service';
import { UtilityService } from '../services/utility.service';

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
  constructor(
    public dialogRef: MatDialogRef<ModalAppliedSessionDisplay>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService,
    public utilityService: UtilityService,
    public dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService,
    public contactService: ContactService
  ) {
    this.LoanObj = data.sessionObj;
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