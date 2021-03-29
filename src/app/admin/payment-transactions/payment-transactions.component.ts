import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';
import { AlertService } from 'src/app/services';
import { SocketioService } from 'src/app/socketio.service';

@Component({
  selector: 'app-payment-transactions',
  templateUrl: './payment-transactions.component.html',
  styleUrls: ['./payment-transactions.component.css']
})
export class PaymentTransactionsComponent implements OnInit {

  PaymentTransactionDetailsArray: any = null;
  loading = false;

  constructor(
    private socketService: SocketioService,
    private alertService: AlertService,
    public utilityService: UtilityService,
  ) {
    let _data = {};
    this.socketService.getAllPaymentTransactionDetails(_data)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.PaymentTransactionDetailsArray = data["data"];
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
  ngOnInit(): void {
  }

}
