import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Role, TransactionActionType } from 'src/app/models/role';
import { AlertService, AuthenticationService } from 'src/app/services';
import { PaymentService } from 'src/app/services/payment.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-monthly-subscription',
  templateUrl: './monthly-subscription.component.html',
  styleUrls: ['./monthly-subscription.component.css']
})
export class MonthlySubscriptionComponent implements OnInit {
  userInitiatedForPayment: Boolean = false;
  usersCurrentPlanSubscription: any = {};
  userMemberShipExpireOn: Number = null;
  usersNextPlanSubscription: any = {};
  constructor(
    public utilityService: UtilityService,
    public authenticationService: AuthenticationService,
    public router: Router,
    public payment: PaymentService,
    private alertService: AlertService,
  ) {
    if (!this.authenticationService.currentUserValue || !this.authenticationService.currentUserValue._id) {
      this.router.navigate(['/logout']);
      return;
    }
    this.initUsersCurrentAppPlanDetails();
  }
  initUsersCurrentAppPlanDetails() {
    this.userMemberShipExpireOn = this.authenticationService.currentUserValue.userMemberShipExpireOn || (this.utilityService.returnEpochDateWithAddingMonths(this.authenticationService.currentUserValue.userVerifiedOn, this.utilityService.AppPlanTypes['trial_plan'].expiryInMonth));
    let appPlanId = this.authenticationService.currentUserValue.appPlanId || 'trial_plan';
    this.usersCurrentPlanSubscription = {
      appPlanId: this.utilityService.AppPlanTypes[appPlanId]._id,
      planAmount: this.utilityService.AppPlanTypes[appPlanId].amount,
      planName: this.utilityService.AppPlanTypes[appPlanId].name,
      userMemberShipExpireOn: this.userMemberShipExpireOn
    };
  }

  ngOnInit(): void {
  }

  returnPaidPlanAmountUserRoleWise(planAmount: number = null) {
    if (!planAmount) {
      switch (this.authenticationService.currentUserValue.role) {
        case Role.Borrower:
          planAmount = this.utilityService.AppPlanTypes["paid_plan4borrower"].amount;
          break;
        case Role.Lender:
          planAmount = this.utilityService.AppPlanTypes["paid_plan4lender"].amount;
          break;
        default:
          planAmount = this.utilityService.AppPlanTypes["trial_plan"].amount;
          break;
      }
    }
    return planAmount;
  }

  userInitiatedForPlanPurchaseOrRenewal(appPlanId: string = null) {
    if (!this.userInitiatedForPayment) {

      this.userMemberShipExpireOn = this.authenticationService.currentUserValue.userMemberShipExpireOn || (this.utilityService.returnEpochDateWithAddingMonths(this.authenticationService.currentUserValue.userVerifiedOn, this.utilityService.AppPlanTypes['trial_plan'].expiryInMonth));

      if (!appPlanId) {
        switch (this.authenticationService.currentUserValue.role) {
          case Role.Borrower:
            appPlanId = this.utilityService.AppPlanTypes["paid_plan4borrower"]._id;
            break;
          case Role.Lender:
            appPlanId = this.utilityService.AppPlanTypes["paid_plan4lender"]._id;
            break;
          default:
            appPlanId = this.utilityService.AppPlanTypes["trial_plan"]._id;
            break;
        }
      }
      //#region exception case check as expiry was in past so RESET date here and set to today's date
      if (!this.checkWhetherPlanExpiryIsInFuture(this.userMemberShipExpireOn)) {
        this.userMemberShipExpireOn = this.utilityService._.now();
      }
      //#endregion exception case check as expiry was in past so RESET date here and set to today's date

      this.userMemberShipExpireOn = this.utilityService.returnEpochDateWithAddingMonths(this.userMemberShipExpireOn, this.utilityService.AppPlanTypes[appPlanId].expiryInMonth);
      this.usersNextPlanSubscription = {
        appPlanId: this.utilityService.AppPlanTypes[appPlanId]._id,
        planAmount: this.utilityService.AppPlanTypes[appPlanId].amount,
        planName: this.utilityService.AppPlanTypes[appPlanId].name,
        userMemberShipExpireOn: this.userMemberShipExpireOn
      };

      let _header4Payment = 'Payment for Plan Upgrade - ' + this.utilityService.AppPlanTypes[appPlanId].name;



      let _paymentUniqId = this.authenticationService.currentUserValue._id + '__' + this.utilityService._.now();
      this.initiateForPaymentForLender(this.usersNextPlanSubscription.appPlanId, this.usersNextPlanSubscription.userMemberShipExpireOn, this.authenticationService.currentUserValue._id, this.usersNextPlanSubscription.planAmount, _header4Payment, TransactionActionType.plan_purchase, null, null, _paymentUniqId);
    } else {
      //already inititated for payment
    }
  }
  resetStatusOfPayment() {
    this.userInitiatedForPayment = false;
  }

  initiateForPaymentForLender(_appPlanId, _planExpiry, _endUserId, _amount4Payment, _header4Payment, _transactiActionType, _currency, _selectedPaymentMethod, _paymentUniqId) {
    _currency = _currency || 'USD';
    //#region handle LoanObj payments
    this.userInitiatedForPayment = true;
    //#region paypal payment init
    let purchaseUnits = [
      {
        amount: {
          currency_code: _currency,
          value: _amount4Payment,
          breakdown: {
            item_total: {
              currency_code: _currency,
              value: _amount4Payment
            }
          }
        },
        items: [
          {
            name: _transactiActionType,
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: _currency,
              value: _amount4Payment,
            },
          }
        ]
      }
    ];
    this.payment.paymentWithMultipleOptions = false;
    if (this.payment.paymentWithMultipleOptions) {
      this.payment.initConfig(purchaseUnits, _transactiActionType, _endUserId);
    }
    //#endregion paypal payment init
    this.payment.getCurrentPaymentApproved().pipe(first()).subscribe(details => {
    });
    let PaymentObj = {
      transactiActionType: _transactiActionType,
      header4Payment: _header4Payment || null,
      amount4Payment: _amount4Payment || null,
      selectedPaymentMethod: _selectedPaymentMethod || null,
      currency: _currency || null,
      loanId: null,
      loanApplyId: null,
      appPlanId: _appPlanId || null,
      planExpiry: _planExpiry || null,
      paymentUniqId: _paymentUniqId || null,
      userId: _endUserId || null
    };

    this.payment.initPaymentConfigStripe(PaymentObj);
    this.payment.getCurrentPaymentApproved().subscribe(_obj => {
      if (_obj && _obj.success) {
        let userObj = this.authenticationService.currentUserValue;
        userObj.userMemberShipExpireOn = this.usersNextPlanSubscription.userMemberShipExpireOn;
        userObj.appPlanId = this.usersNextPlanSubscription.appPlanId;
        this.authenticationService.sendCurrentUserObj(userObj);
        this.initUsersCurrentAppPlanDetails();
        this.alertService.success("congratulations! 1 month's subscription is purchased successfullly.");
      } else {
        this.alertService.error(_obj.message || "Payment failed");
      }
      this.resetStatusOfPayment();
      this.payment.sendCurrentPaymentFailed(true);
    });
    //#endregion handle LoanObj payments
  }

  checkWhetherPlanExpiryIsInFuture(userMemberShipExpireOn) {
    return this.utilityService.checkWhetherPlanExpiryIsInFuture(userMemberShipExpireOn);
  }

}
