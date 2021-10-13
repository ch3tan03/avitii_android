import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/internal/operators/first';
import { TransactionActionType } from 'src/app/models/role';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-borrower-earnings',
  templateUrl: './borrower-earnings.component.html',
  styleUrls: ['./borrower-earnings.component.css']
})
export class BorrowerEarningsComponent implements OnInit {
  PaymentBorrowerDetailsArray: any = {};
  loading = false;
  transactionIdCtrl: any = [];
  editingIdCtrl: any = {};
  currentUser: User;
  constructor(
    private socketService: SocketioService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.callLatestPaymentDetails();
  }
  callLatestPaymentDetails() {
    let _data = {};
    this.socketService.getAllBorrowerPaymentTransactionDetails(_data)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.PaymentBorrowerDetailsArray = data["data"];
            this.loading = false;
          } else {
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          this.PaymentBorrowerDetailsArray = [];
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
  ngOnInit(): void {
  }

  updateTransactionIdDoPaymentForBorrower(index, transactionId, obj) {
    if (index > -1 && transactionId && obj) {
      this.editingIdCtrl[index] = false;
      let _msg2show = "";
      let _borrowerId = obj._id;
      let _loanApplyIdArray = this.utilityService._.map(obj.sessionApplyInfo, '_id');
      let _amount = (obj.totalPayment4CurrentUser) * (-1);
      let _transactionActionType = TransactionActionType.paid_to_consulatant;
      let _transactionIdArray=this.utilityService._.uniq( this.utilityService._.flattenDepth(this.utilityService._.map(obj.sessionApplyInfo, 'transactionIdArray'),1));
      let _transactionDocumentIdArray=this.utilityService._.uniq( this.utilityService._.flattenDepth(this.utilityService._.map(obj.sessionApplyInfo, 'transactionDocumentIdArray'),1));
      let _Obj2Save = {
        borrowerId:_borrowerId,
        transactionId: transactionId,
        transactionActionType: _transactionActionType,
        userId: this.currentUser._id,
        transactionDetailsObj: null,
        amount: _amount,
        loanId: null,
        loanApplyIdArray: _loanApplyIdArray,
        status: null,
        updatedBy: this.currentUser._id,
        transactionIdArray:_transactionIdArray,
        transactionDocumentIdArray:_transactionDocumentIdArray
      };
      this.socketService.adminPaidToBorrowerUpdateInTransactions(_Obj2Save)
        .pipe(first())
        .subscribe(
          data => {
            if (data && data['success']) {
              this.callLatestPaymentDetails()
              this.loading = false;
            } else {
              this.alertService.error(data['message']);
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
            this.alertService.error(errorMsg2show);
            this.loading = false;
          });

      _msg2show = "Request Queued => Borrower : " + _borrowerId + ", TransactionId : " + transactionId + ", Paid : " + obj.totalPayment4CurrentUser
      this.alertService.success(_msg2show);
    } else {
      this.alertService.success("All values required.");
    }
  }
}
