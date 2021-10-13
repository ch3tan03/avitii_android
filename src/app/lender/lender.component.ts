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
import { PublicProfileComponent } from '../shared/public-profile/public-profile.component';
declare var $: any;
declare var jQuery: any;

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
      //console.log(`25 :: ec :: Dialog result: ${JSON.stringify(result)}`);
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
  transactionOnForLoanAmountPaidByLenderCustomised = null;
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

  alreadyInitiatedForPayment: Boolean = false;
  LoanApplyObjCurrent: any;
  LoanApplyObjCurrent4Installment: any;
  LoanApplyObjCurrentCheckBoxes: any;
  transactionOnForLoanAmountPaidByLenderCustomised = null;
  transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised = null;
  Role = Role;
  constructor(
    private alertService: AlertService,
    public socketService: SocketioService,
    public router: Router,
    public dialogRef: MatDialogRef<ModalAppliedSessionDisplay>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public utilityService: UtilityService,
    public payment: PaymentService,
    public userService: UserService,
    public authenticationService: AuthenticationService,
    public contactService: ContactService,
    public dialog: MatDialog
  ) {
    this.LoanObj = data.sessionObj;
    this.endUserId = data.endUserId;
    this.LoanApplyObjCurrent = {
      isLoanAmountPaidByLender: true
    };
    this.LoanApplyObjCurrentCheckBoxes = {};
    this.LoanApplyObjCurrentCheckBoxes.visibleKeys = {};
    this.LoanApplyObjCurrent4Installment = {};
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
    return false;
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
    if (this.utilityService.moment(this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender).isAfter(this.utilityService.moment())) {
      this.alertService.error("Future date is not allowed");
      return;
    }
    if (this.utilityService.moment(this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender).isBefore(this.utilityService.moment(this.LoanObj.loanStartDateTime))) {
      this.alertService.error("Transaction date must be newer than loan created date");
      return;
    }

    this.LoanApplyObjCurrent.createdOnForLoanAmountPaidByLender = this.utilityService._.now();

    this.socketService.sendEventForLoanAmountPaidByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, this.LoanApplyObjCurrent).pipe(first()).subscribe(details => {
      if (details && details["success"]) {
        this.updatedSessionObj = details["data"];
        this.LoanObj = this.updatedSessionObj;
        //this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
      }
    });
    this.LoanApplyObjCurrent = {
      isLoanAmountPaidByLender: true
    };
  }
  updatedSessionObj: any = null;
  paymentDoneToLenderConfirmByLender(LoanApplyObj) {
    let _past_days_allowed4payment = 15;
    let _future_days_allowed4payment = 7;

    //this.LoanApplyObjCurrent4Installment.loanTenureInMonths = this.LoanObj.loanTenureInMonths;
    //this.LoanApplyObjCurrent4Installment.installmentKey = null;
    //this.LoanApplyObjCurrent4Installment._id = LoanApplyObj._id;
    if (this.transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised) {
      this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD 00:00:00 A'));
    }
    if (!this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender) {
      this.alertService.error("All data is required");
      return;
    }
    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender).isAfter(this.utilityService.moment(this.LoanApplyObjCurrent4Installment.installmentKey).add(_future_days_allowed4payment, 'day'))) {
      this.alertService.error("Future date is not allowed");
      return;
    }

    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender).isBefore(this.utilityService.moment().add((-1) * _past_days_allowed4payment, 'day'))) {
      this.alertService.error("Historic date is not allowed");
      return;
    }
    if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender).isAfter(this.utilityService.moment().add(_future_days_allowed4payment, 'day'))) {
      this.alertService.error("Future date is not allowed");
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
      if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender).isBefore(this.utilityService.moment(_old_installmentKey))) {
        this.alertService.error("Transaction date must be newer than last installment date");
        return;
      }
    } else {
      if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender).isBefore(this.utilityService.moment(this.LoanObj.loanStartDateTime))) {
        this.alertService.error("Transaction date must be newer than loan created date");
        return;
      }
    }

    this.LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender = this.utilityService._.now();
    let _loanTenureInMonths: number = parseInt(this.LoanObj.loanTenureInMonths);
    let _installmentKey: string = this.LoanApplyObjCurrent4Installment.installmentKey;
    //delete this.LoanApplyObjCurrent4Installment.installmentKey;
    $("#installment_deatils_modal").modal('hide');
    this.socketService.sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, _installmentKey, _loanTenureInMonths, this.LoanApplyObjCurrent4Installment)
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

  initiateLoanAmountPaidByBorrowerConfirmByLender(event, LoanApplyObj, currentRowDate, _key) {
    if (LoanApplyObj) {
      let _installmentKey = null
      if (event.target.checked && !this.alreadyInitiatedForPayment) {

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
        $("#installment_deatils_modal").modal('show');
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

  hideInstallmentPaymentModal() {
    this.LoanApplyObjCurrent4Installment = {};
    $("#installment_deatils_modal").modal('hide');
  }
  returnUrl4downloadCOntractPDF(sessionApplyId) {
    let Url4downloadCOntractPDF = environment.apiUrl + '/signed_pdf_contract/' + sessionApplyId + '.pdf';
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
    if (_sessionApply) {
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
          this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, updatedSessionObj: this.updatedSessionObj } });
          break;
      }
    } else {
      this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, updatedSessionObj: this.updatedSessionObj } });
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
    let _createdBy = this.authenticationService.currentUserValue._id;
    let _userId = _sessionApply.borrowerId;
    let _parentRouting = '';
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _userId = _sessionApply.lenderId;
        _parentRouting = 'borrower';
        break;
      case Role.Lender:
        _userId = _sessionApply.borrowerId;
        _parentRouting = 'lender';
        break;
      case Role.Admin:
        _parentRouting = 'admin';
        break;
    }
    let _userObj = this.userService.returnUsersObjFromLocal(null, null, null, _userId);
    this.router.navigate(['/' + _parentRouting + '/ratings'], { state: { createdBy: _createdBy, userId: _userId, loanId: _loanId, userObj: _userObj } });
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
    this.dialogRef.close({ event: 'close', data: { updatedSessionObj: this.updatedSessionObj } });
    this.router.navigate(['/' + _parentRouting + '/messages'], { state: { contactId: _contactId, AVTrueChatFalse: AVTrueChatFalse } });
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