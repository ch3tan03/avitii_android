import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentMethod, TransactionActionType } from 'src/app/models';
import { AddFundsService } from 'src/app/services/add-funds.service';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-payment-paypal',
  templateUrl: './payment-paypal.component.html',
  styleUrls: ['./payment-paypal.component.css']
})
export class PaymentPaypalComponent implements OnInit {
  selectedPaymentMethod: any;
  public payPalConfig?: IPayPalConfig;
  PaymentMethod = PaymentMethod;

  constructor(
    public payment: PaymentService,
    public addFundsService: AddFundsService,
  ) {
  }

  ngOnInit(): void {
    this.payment.getCurrentPayPalConfig().subscribe(payPalConfig => {
      this.selectedPaymentMethod = PaymentMethod.Online;
      this.payPalConfig = payPalConfig
    });
  }
  payPalConfigInit(purchaseUnits, _transactiActionType, _userId) {
    this.payPalConfig = this.payment.initConfig(purchaseUnits, _transactiActionType, _userId);
  }

  paymentThroughWallet() {
    this.payment.payFromUsersWallet();
  }

}
