import { Injectable } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { UtilityService } from './utility.service';
import { SocketioService } from '../socketio.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first, map, timeout } from 'rxjs/operators';
import { AddFundsService } from './add-funds.service';
import { TransactionActionType } from '../models/role';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseurl = environment.apiUrl + '/';
  public payPalConfig?: IPayPalConfig;
  showSuccess: any;
  purchaseUnits: any;
  transactionActionType: any;
  userId: any;
  amount: number;
  custom_id: any;
  constructor(
    private http: HttpClient,
    public utilityService: UtilityService,
    public socketService: SocketioService,
    private addFundsService: AddFundsService
  ) { }
  /**
 * let purchaseUnits=[
           {
             amount: {
               currency_code: 'USD',
               value: '0.01',
               breakdown: {
                 item_total: {
                   currency_code: 'USD',
                   value: '0.01'
                 }
               }
             },
             items: [
               {
                 name: 'Enterprise Subscription',
                 quantity: '1',
                 category: 'DIGITAL_GOODS',
                 unit_amount: {
                   currency_code: 'USD',
                   value: '0.01',
                 },
               }
             ]
           }
         ]
  */
  //#region Online User List
  public currentPayPalConfig = new Subject<any>();

  public sendCurrentPayPalConfig(payPalConfig: any) {
    this.currentPayPalConfig.next(payPalConfig);
  }

  public clearCurrentPayPalConfig() {
    this.currentPayPalConfig.next();
  }

  public initCurrentPayPalConfig() {
    this.sendCurrentPayPalConfig(this.payPalConfig);
  }

  public getCurrentPayPalConfig(): Observable<any> {
    return this.currentPayPalConfig.asObservable();
  }


public _currentPaymentObj:any;
  public currentPaymentObj = new Subject<any>();

  public sendCurrentPaymentObj(_currentPaymentObj: any) {
    this.currentPaymentObj.next(_currentPaymentObj);
  }

  public clearCurrentPaymentObj() {
    this.currentPaymentObj.next();
  }

  public initCurrentPaymentObj() {
    this.sendCurrentPaymentObj(this._currentPaymentObj);
  }

  public getCurrentPaymentObj(): Observable<any> {
    return this.currentPaymentObj.asObservable();
  }
  //#endregion Online User List

  //#region Payment Approval status
  transactionStatus: any;
  public currentPaymentApproved = new Subject<any>();

  public sendCurrentPaymentApproved(transactionStatus: any) {
    this.currentPaymentApproved.next(transactionStatus);
  }

  public clearCurrentPaymentApproved() {
    this.currentPaymentApproved.next();
  }

  public initCurrentPaymentApproved() {
    this.sendCurrentPayPalConfig(this.transactionStatus);
  }

  public getCurrentPaymentApproved(): Observable<any> {
    return this.currentPaymentApproved.asObservable();
  }
  //#endregion Payment Approval status
  public initPaymentConfigStripe(PaymentObj) {
    this._currentPaymentObj = PaymentObj;
    this.sendCurrentPaymentObj(this._currentPaymentObj);
    return this._currentPaymentObj;
  }

  public initConfig(purchaseUnits, _transactiActionType, _userId): IPayPalConfig {
    this.purchaseUnits = purchaseUnits;
    this.amount = purchaseUnits[0].amount.value
    this.custom_id = purchaseUnits[0].amount.custom_id;
    this.transactionActionType = _transactiActionType;
    this.userId = _userId;
    this.payPalConfig = {
      currency: 'USD',
      // clientId: 'AWQej8JvY8p0D8u8exibTzxRgoyJmpYPpfFow5JGwemPl1TwqD5I021E4dDdJIixQnsNt-FWc7qZYyCj',
      //clientId: 'AW-FXPoxErPamrI9YqZJyhfrSZEt_Y7doZulV2hge-QKrmqcQimbx9U9XJKGT6IX__GVGLcloTx9fOhb',
      clientId: 'AfRY8egQeUtW4fEQ6-pxINgBqRdJSBOX-LaCZtMpDA7ry-vqcZdc9BJ6qoXj8JAhA238sZKLksJMbi09',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: purchaseUnits
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        switch (_transactiActionType) {
          case TransactionActionType.funds_add:
            this.socketService.sendEventToSaveCurrentTransaction(_transactiActionType, data.orderID, _userId, data);
            break;
          case TransactionActionType.session_accepted:
            this.socketService.sendEventToSaveCurrentTransaction(_transactiActionType, data.orderID, _userId, data);
            break;
        }
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          switch (_transactiActionType) {
            case TransactionActionType.funds_add:
              this.socketService.sendEventToSaveCurrentTransactionDetails(_transactiActionType, details.id, _userId, details, null);
              let _funds_obj = {
                amount: purchaseUnits[0].amount.value,
                created_by: _userId,
                transactionId: details.id,
                description: ''
              }
              this.socketService.emitEventWithNameAndData('fund_addnew', _funds_obj);
              break;
            case TransactionActionType.session_accepted:
            case TransactionActionType.session_extended:
              this.socketService.sendEventToSaveCurrentTransactionDetails(_transactiActionType, details.id, _userId, details, null);
              break;
          }
          this.sendCurrentPaymentApproved(details);
          console.log('onApprove - you can get full order details inside onApprove: ', details);

        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        //console.log('OnCancel', data, actions);
      },
      onError: err => {
        //console.log('OnError', err);
      },
      onClick: (data, actions) => {
        //console.log('onClick', data, actions);
      },
    };

    this.sendCurrentPayPalConfig(this.payPalConfig);
    return this.payPalConfig;
  }

  payFromUsersWallet() {
    let _funds_obj = {
      amount: this.amount,
      created_by: this.userId,
      transactionId: this.custom_id,
      description: 'Paid from wallet'
    };

    let _data = {
      transactionId: '',
      transactionActionType: this.transactionActionType,
      createdBy: this.userId,
      transactionDetailsObj: null,
    };

    this.socketService.deductAmountFromWallet(_funds_obj, _data).pipe(first()).subscribe(_obj => {
      //this.socketService.emitEventWithNameAndData('request_fund_get_count_sum', this.userId);
      this.sendCurrentPaymentApproved(_obj);
      this.addFundsService.getFundsCountForRequestedUser(this.userId);
    });
  }

  checkoutPaymentForStripe(stripe: any, paymentObj: any) {
    var _url2use = this.baseurl + 'api/post/app/payment/checkout';
    return this.http.post<any>(_url2use, paymentObj)
      .pipe(timeout(environment.apiTimeout), map(response => {
        return response;
      }))
      .pipe(map(session => {
        return stripe.redirectToCheckout({ sessionId: session.id });
      }))
      .pipe(map(result => {
        // If redirectToCheckout fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using error.message.
        if (result.error) {
          console.log(result.error.message);
        }
      }));
  }

  returnUrChargePaymentForStripel() {
    var _url2use = this.baseurl + 'api/post/app/payment/charges';
    return _url2use;
  }
  chargePaymentForStripe(stripe: any, paymentObj: any) {
    var _url2use = this.returnUrChargePaymentForStripel();
    return this.http.post<any>(_url2use, paymentObj)
      .pipe(timeout(environment.apiTimeout), map(response => {
        return response;
      }));
  }

}
