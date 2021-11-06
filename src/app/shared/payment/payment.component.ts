import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentMethod } from 'src/app/models';
import { AddFundsService } from 'src/app/services/add-funds.service';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';

declare var Stripe: any;
declare let window: any;
declare let paymentData: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  public header4Payment = 'Insurance Payment';
  public amount4Payment = 100;
  public payPalConfig?: IPayPalConfig;
  public currentPaymentObj: any = {};
  selectedPaymentMethod: any;
  PaymentMethod = PaymentMethod;
  handler: any = null;
  currency = '$';
  loanId = null;
  loanApplyId = null;
  appPlanId = null;
  planExpiry = null;
  paymentUniqId = null;
  transactiActionType = null;
  alreadyClickedOnPayment: Boolean = false;
  constructor(
    public payment: PaymentService,
    public addFundsService: AddFundsService,
    private authenticationService: AuthenticationService,
  ) {
    //this.payPalConfig = this.payment.initConfig(null, null, null);
    this.selectedPaymentMethod = PaymentMethod.Online;
    window.paymentStatusSentOnServer = false;
  }

  paymentThroughWallet() {
    this.payment.payFromUsersWallet();
  }

  initForPayment() {

    let STRIP_PAYMENT_Publishable_key = "pk_test_TYooMQauvdEDq54NiTphI7jx";
    var stripe = Stripe(STRIP_PAYMENT_Publishable_key);
    this.payment.checkoutPaymentForStripe(stripe, {}).subscribe(data => {
    });
  }

  ngOnInit() {
    this.payment.getCurrentPayPalConfig().subscribe(payPalConfig => {
      this.payPalConfig = payPalConfig
    });

    this.payment.getCurrentPaymentObj().subscribe(_currentPaymentObj => {
      this.alreadyClickedOnPayment = false;
      this.currentPaymentObj = _currentPaymentObj;
      this.header4Payment = this.currentPaymentObj.header4Payment || 'Insurance Payment';
      this.amount4Payment = this.currentPaymentObj.amount4Payment || 100;
      this.selectedPaymentMethod = this.currentPaymentObj.selectedPaymentMethod || PaymentMethod.Online;
      this.currency = this.currentPaymentObj.currency || '$';
      this.loanId = this.currentPaymentObj.loanId || null;
      this.loanApplyId = this.currentPaymentObj.loanApplyId || null;
      this.appPlanId = this.currentPaymentObj.appPlanId || null;
      this.planExpiry = this.currentPaymentObj.planExpiry || null;
      this.paymentUniqId = this.currentPaymentObj.paymentUniqId || null;
      this.transactiActionType = _currentPaymentObj.transactiActionType;
    });
    this.payment.getCurrentPaymentFailed().subscribe(transactionStatus => {
      this.handler.close();
    });

    this.loadStripe();
  }

  pay(amount, event) {
    this.alreadyClickedOnPayment = true;
    this.payment.startTimerInit();

    let paymentObj = {
      isLiveMode: !environment.isPaymentTestMode,
      amount: amount,
      currency: this.currency,
      tokenId: null,
      description: this.header4Payment,
      receipt_email: this.authenticationService.currentUserValue.emailAddress,
      paymentType: this.selectedPaymentMethod || PaymentMethod.Online,
      userId: this.authenticationService.currentUserValue._id,
      loanId: this.loanId,
      loanApplyId: this.loanApplyId,
      appPlanId: this.appPlanId,
      planExpiry: this.planExpiry,
      paymentUniqId: this.paymentUniqId,
      transactiActionType: this.transactiActionType,
      apiUrl: this.payment.returnUrChargePaymentForStripel()
    };
    this.handler = (<any>window).StripeCheckout.configure({
      key: environment.STRIP_PAYMENT_Publishable_key,
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        //console.log(token);
        paymentObj.tokenId = token.id;
        window.paymentStatusSentOnServer = true;
        fetch(paymentObj.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(paymentObj)
        })
          .then(response => response.json())
          .then(data => {
            //paymentData = data;
            //console.log(data)
          });
        /*
                this.payment.chargePaymentForStripe(paymentObj).subscribe(response => {
                  //console.log('85', response);
                });
                */
        //alert('Token Created!!');
      },
      opened: function () {
        //console.log("Form opened");
      },
      closed: function () {
        if (!window.paymentStatusSentOnServer) {
          paymentObj.tokenId = null;
          //console.log("Form Terminated");
          fetch(paymentObj.apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(paymentObj)
          })
            .then(response => response.json())
            .then(data => {
              //paymentData = data;
              //console.log(data)
            });
        } else {
          //console.log("Form closed");
        }
      }
    });

    this.handler.open({
      name: 'Avitii Lender System',
      description: this.header4Payment,
      amount: amount * 100,
      currency: this.currency,
      email: this.authenticationService.currentUserValue.emailAddress,
      allowRememberMe: false
    });
    event.preventDefault();
  }

  receivedTokenFromStripe() {

  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: environment.STRIP_PAYMENT_Publishable_key,
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            //console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
  /*
  extraData=null;
  invalidError=null;
  cardCaptureReady = 0;

  onStripeInvalid( error: Error ){
    //console.log('Validation Error', error)
  }

  onStripeError( error: Error ){
    console.error('Stripe error', error)
  }

  setPaymentMethod( token: stripe.paymentMethod.PaymentMethod ){
    //console.log('Stripe Payment Method', token)
  }

  setStripeToken( token: stripe.Token ){
    //console.log('Stripe Token', token)
  }

  setStripeSource( source: stripe.Source ){
    //console.log('Stripe Source', source)
  }
  */
}

/*
card:
address_city: null
address_country: null
address_line1: null
address_line1_check: null
address_line2: null
address_state: null
address_zip: null
address_zip_check: null
brand: "Visa"
country: "IN"
cvc_check: "unchecked"
dynamic_last4: null
exp_month: 4
exp_year: 2023
funding: "debit"
id: "card_1IYxIAEpOok5VoBkHXs014L4"
last4: "9884"
name: "yogieemahajan@gmail.com"
object: "card"
tokenization_method: null
__proto__: Object
client_ip: "116.72.93.51"
created: 1616694502
email: "yogieemahajan@gmail.com"
id: "tok_1IYxIAEpOok5VoBk7Eucesjw"
livemode: true
object: "token"
type: "card"
used: false
*/
/*
card:
address_city: null
address_country: null
address_line1: null
address_line1_check: null
address_line2: null
address_state: null
address_zip: null
address_zip_check: null
brand: "Visa"
country: "US"
cvc_check: "unchecked"
dynamic_last4: null
exp_month: 12
exp_year: 2022
funding: "credit"
id: "card_1IYx5OFal2nTZ8wwxp9EI3AQ"
last4: "4242"
name: "coavitii123@gmail.com"
object: "card"
tokenization_method: null
__proto__: Object
client_ip: "116.72.93.51"
created: 1616693710
email: "coavitii123@gmail.com"
id: "tok_1IYx5OFal2nTZ8wwWkLpojzS"
livemode: false
object: "token"
type: "card"
used: false
*/