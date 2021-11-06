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
import { PublicProfileComponent } from '../shared/public-profile/public-profile.component';
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
      //console.log(`25 :: co :: Dialog result: ${JSON.stringify(result)}`);
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
      this.LoanApplyObj.borrowerId = data.borrowerId._id;
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
  Role = Role;
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
    this.setFilteresOfMySessionDependsOnTab(data.selectedTab);
  }
  SessionStatusTypeFilter = [];
  checkCreatedByUserId = null;
  checkCreatedByT = true;
  setFilteresOfMySessionDependsOnTab(selectedTab) {
    //this.selectedTab = selectedTab;
    switch (selectedTab) {
      case 'received':
        this.SessionStatusTypeFilter = [SessionStatus.Pending, SessionStatus.AwaitingForApproval];
        this.checkCreatedByUserId = this.authenticationService.currentUserValue._id;
        this.checkCreatedByT = true;
        break;
      case 'sent':
        this.SessionStatusTypeFilter = [SessionStatus.AwaitingForApproval];
        this.checkCreatedByUserId = this.authenticationService.currentUserValue._id;
        this.checkCreatedByT = false;
        break;
      case 'canceled':
        this.SessionStatusTypeFilter = [SessionStatus.Canceled, SessionStatus.Rejected, SessionStatus.RejectedOngoing, SessionStatus.Suspended, SessionStatus.RejectedOngoingWithRefund];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      case 'active':
        this.SessionStatusTypeFilter = [SessionStatus.Accepted];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      case 'paid':
        this.SessionStatusTypeFilter = [SessionStatus.Completed];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      case 'unpaid':
        this.SessionStatusTypeFilter = [SessionStatus.Unpaid];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      case 'inkasso':
        this.SessionStatusTypeFilter = [SessionStatus.Inkasso];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      default:
        this.SessionStatusTypeFilter = this.utilityService._.values(SessionStatus);
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
    }
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
    if (this.utilityService.moment(LoanApplyObj.transactionOnForLoanAmountPaidByLender).isAfter(this.utilityService.moment(this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower))) {
      this.alertService.error("Transaction date must be newer than loan amount transfered date");
      return;
    }

    this.LoanApplyObjCurrent.createdOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();

    this.socketService.sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, this.LoanApplyObjCurrent).pipe(first()).subscribe(details => {
      if (details && details["success"]) {
        this.updatedSessionObj = details["data"];
        this.LoanObj = this.updatedSessionObj;
        //this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
      }
    });
    this.LoanApplyObjCurrent = {};
  }
  updatedSessionObj: any = null;

  paymentDoneToLender(LoanApplyObj) {
    let _past_days_allowed4payment = 15;
    let _future_days_allowed4payment = 7;

    //this.LoanApplyObjCurrent4Installment.loanTenureInMonths = this.LoanObj.loanTenureInMonths;
    //this.LoanApplyObjCurrent4Installment.installmentKey = null;
    //this.LoanApplyObjCurrent4Installment._id = LoanApplyObj._id;
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
    /*
    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isAfter(this.utilityService.moment(this.LoanApplyObjCurrent4Installment.installmentKey).add(_future_days_allowed4payment, 'day'))) {
      if (!this.LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin) {
        this.alertService.error("Future date is not allowed");
        return;
      }
    }

    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isAfter(this.utilityService.moment().add((-1) * _past_days_allowed4payment, 'day'))) {
      this.alertService.error("Historic date is not allowed");
      return;
    }
    
    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isBefore(this.utilityService.moment().add(_future_days_allowed4payment, 'day'))) {
      if (!this.LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin) {
        this.alertService.error("Future date is not allowed");
        return;
      }
    }
*/
    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isAfter(this.utilityService.moment())) {
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
          this.updatedSessionObj = details["data"];
          this.LoanObj = this.updatedSessionObj;
          //this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
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
    if (_sessionApply) {
      switch (_status) {
        case SessionStatus.Accepted:
          //#region handle LoanObj accepted
          //_sessionPrice = this.LoanObj.loanAmount;
          //initiate payment here
          //_transactiActionType = TransactionActionType.session_accepted;
          //this.initiateForPaymentForLender(_loanId, _loanApplyId, _sessionApply, _status, _sessionPrice, _endUserId, _transactiActionType);
          this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, updatedSessionObj: this.updatedSessionObj } });
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
          this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, updatedSessionObj: this.updatedSessionObj } });
          break;
      }
    } else {
      this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, updatedSessionObj: this.updatedSessionObj } });
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
  addNewRatings(_sessionApply) {
    let _loanId = _sessionApply.loanId;
    let _createdBy = this.authenticationService.currentUserValue._id;
    let _userId = _sessionApply.borrowerId._id || _sessionApply.borrowerId;
    let _parentRouting = '';
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _userId = _sessionApply.lenderId._id || _sessionApply.lenderId;
        _parentRouting = 'borrower';
        break;
      case Role.Lender:
        _userId = _sessionApply.borrowerId._id || _sessionApply.borrowerId;
        _parentRouting = 'lender';
        break;
      case Role.Admin:
        _parentRouting = 'admin';
        break;
    }

    let _userObj = this.userService.returnUsersObjFromLocal(null, null, null, _userId);
    this.router.navigate(['/' + _parentRouting + '/ratings'], { state: { createdBy: _createdBy, userId: _userId, loanId: _loanId, userObj: _userObj } });

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
                userObj: this.utilityService._.cloneDeep(data['data']),
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

  //#region bypass all conditions
  LoanMoneyTransferStatusChange(event, LoanObj: any, LoanApplyObj: any, installmentKey: string = null, updateLastInstallmentPaymentStatus: boolean = false) {
    //console.log('585', this.authenticationService.currentUserValue);
    if (installmentKey) {
      if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
        for (let _items in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
          let _currentObj = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items];
          if (_currentObj) {
            if (_currentObj.createdOnForLoanAmountPaidToLender && !_currentObj.createdOnForLoanAmountPaidToLenderConfirmByLender) {
              this.alertService.error('Last installment payment confirmation is pending from Lender', true);
              return;
            }
          }
        }
      }
    }
    if (updateLastInstallmentPaymentStatus) {
      if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
        for (let _items in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
          let _currentObj = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items];
          if (_currentObj) {
            if (_currentObj.createdOnForLoanAmountPaidToLender && !_currentObj.createdOnForLoanAmountPaidToLenderConfirmByLender) {
              installmentKey = _currentObj.installmentKey;
              break;
            }
          }
        }
      }
      if (!installmentKey) {
        this.alertService.error('Last installment payment not done by borrower', true);
        return;
      }
    }

    let LoanApplyObjCurrent4Installment = {
      isInstallmentPaidByAdmin: null,
      transactionOnForLoanAmountPaidToLender: null,
      transactionIdForLoanAmountPaidToLender: null,
      installmentKey: null,
      createdOnForLoanAmountPaidToLender: null,
      transactionOnForLoanAmountPaidToLenderConfirmByLender: null,
      createdOnForLoanAmountPaidToLenderConfirmByLender: null
    };
    if (event.srcElement.checked) {
      //#region update status add data
      if (installmentKey) {
        if (!updateLastInstallmentPaymentStatus) {
          //#region Borrower updating status for installment done
          //#endregion Borrower updating status for installment done
        } else {
          //#region Lender updating status for installment done by Borrower
          //#endregion Lender updating status for installment done by Borrower
        }
        //#region direct action here with BYPASS ALL CASES
        LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin = false;
        LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender = this.utilityService._.now();
        LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender = 'AUTO-SAVED';
        LoanApplyObjCurrent4Installment.installmentKey = this.utilityService.moment(installmentKey).format('DD-MMM-YYYY');
        LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender = this.utilityService._.now();
        LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender = this.utilityService._.now();
        LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender = this.utilityService._.now();

        let _loanTenureInMonths: number = parseInt(LoanObj.loanTenureInMonths);
        if (_loanTenureInMonths == (this.utilityService._.keys(LoanApplyObj.installmentWiseLoanAmountPaidByBorrower).length + 1)) {
          if (confirm("This is confirmation of last installment") == false) {
            event.srcElement.checked = false;
            return;
          }
        }
        if (!LoanApplyObj.isLoanAmountPaidByLender) {
          //#region direct action here with BYPASS ALL CASES
          this.middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, true, true);
          //#endregion direct action here with BYPASS ALL CASES
        }
        this.socketService.sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, installmentKey, _loanTenureInMonths, LoanApplyObjCurrent4Installment)
          .pipe(first())
          .subscribe(details => {
            if (details && details["success"]) {
              this.updatedSessionObj = details["data"];
              this.LoanObj = this.updatedSessionObj;
              //this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
              //this.broadcastUpdatedEvent2All(details["data"]);
            }
          });
        //#endregion direct action here with BYPASS ALL CASES
      } else {
        if (!LoanApplyObj.isLoanAmountPaidByLender) {
          //#region Lender updating status for payment done
          //#endregion Lender updating status for payment done
        } else {
          //#region Borrower updating status for payment done by Lender
          //#endregion Borrower updating status for payment done by Lender
        }
        //#region direct action here with BYPASS ALL CASES
        this.middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, true, false);
        //#endregion direct action here with BYPASS ALL CASES
      }
      //#endregion update status add data
    } else {
      //#region update status remove data
      if (installmentKey) {
        if (!updateLastInstallmentPaymentStatus) {
          //#region Borrower updating status for installment done
          //#endregion Borrower updating status for installment done
        } else {
          //#region Lender updating status for installment done by Borrower
          //#endregion Lender updating status for installment done by Borrower
        }
        //#region direct action here with BYPASS ALL CASES
        LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin = false;
        LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender = null;
        LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender = null;
        LoanApplyObjCurrent4Installment.installmentKey = this.utilityService.moment(installmentKey).format('DD-MMM-YYYY');
        LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender = null;
        LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender = null;
        LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender = null;
        LoanApplyObjCurrent4Installment["installmentKeyDeleteThisKey"] = true;
        let _loanTenureInMonths: number = parseInt(LoanObj.loanTenureInMonths);
        this.socketService.sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, installmentKey, _loanTenureInMonths, LoanApplyObjCurrent4Installment)
          .pipe(first())
          .subscribe(details => {
            if (details && details["success"]) {
              this.updatedSessionObj = details["data"];
              this.LoanObj = this.updatedSessionObj;
              //this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
              //this.broadcastUpdatedEvent2All(details["data"]);
            }
          });
        //#endregion direct action here with BYPASS ALL CASES
      } else {
        if (!LoanApplyObj.isLoanAmountPaidByLender) {
          //#region Lender updating status for payment done
          //#endregion Lender updating status for payment done
        } else {
          //#region Borrower updating status for payment done by Lender
          //#endregion Borrower updating status for payment done by Lender
        }
        //#region direct action here with BYPASS ALL CASES
        this.middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, false, false);
        //#endregion direct action here with BYPASS ALL CASES
      }
      //#endregion update status remove data
    }
  }

  middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj: any, addTremoveF: boolean, addedWithInstallment: boolean) {
    let LoanApplyObjCurrent = {
      isLoanAmountPaidByLender: null,
      _id: null,
      createdOnForLoanAmountPaidByLender: null,
      transactionIdForLoanAmountPaidByLender: null,
      transactionOnForLoanAmountPaidByLender: null,
      transactionDescriptionForLoanAmountPaidByLender: null,
      transactionOnForLoanAmountPaidByLenderConfirmByBorrower: null,
      createdOnForLoanAmountPaidByLenderConfirmByBorrower: null,
      transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower: null,
      isLoanAmountPaidByLenderConfirmByBorrower: null,
    };

    if (addTremoveF) {
      LoanApplyObjCurrent.isLoanAmountPaidByLender = true;
      LoanApplyObjCurrent._id = LoanApplyObj._id;
      LoanApplyObjCurrent.createdOnForLoanAmountPaidByLender = this.utilityService._.now();
      LoanApplyObjCurrent.transactionIdForLoanAmountPaidByLender = 'AUTO-SAVED';
      LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender = this.utilityService._.now();
      LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLender = 'This data is auto saved' + (addedWithInstallment ? ' with installment payment' : '');
      LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower = true;
      LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();
      LoanApplyObjCurrent.createdOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();
      LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower = 'This data is auto saved' + (addedWithInstallment ? ' with installment payment' : '');
    } else {
      LoanApplyObjCurrent.isLoanAmountPaidByLender = false;
      LoanApplyObjCurrent._id = LoanApplyObj._id;
      LoanApplyObjCurrent.createdOnForLoanAmountPaidByLender = this.utilityService._.now();
      LoanApplyObjCurrent.transactionIdForLoanAmountPaidByLender = 'AUTO-SAVED';
      LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender = this.utilityService._.now();
      LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLender = 'This data is auto saved' + (addedWithInstallment ? ' with installment payment' : '');
      LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower = false;
      LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();
      LoanApplyObjCurrent.createdOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();
      LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower = 'This data is auto saved' + (addedWithInstallment ? ' with installment payment' : '');
    }
    this.socketService.sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, LoanApplyObjCurrent).pipe(first()).subscribe(details => {
      if (details && details["success"]) {
        this.updatedSessionObj = details["data"];
        this.LoanObj = this.updatedSessionObj;
        //this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
        //this.broadcastUpdatedEvent2All(details["data"]);
      }
    });
  }

  //#endregion bypass all conditions

}
//#endregion modal popup for display applied sessions