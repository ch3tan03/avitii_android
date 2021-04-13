import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LenderComponent } from './lender.component';
import { HomeComponent } from './home/home.component';
import { NewSessionComponent } from './new-session/new-session.component';
import { SearchBorrowerComponent } from './search-borrower/search-borrower.component';
import { MySessionsComponent } from './my-sessions/my-sessions.component';

import { MessagesComponent } from './../shared/messages/messages.component';
import { ProfileComponent } from './../shared/profile/profile.component';
import { WalletComponent } from './../shared/wallet/wallet.component';
import { PaymentComponent } from './../shared/payment/payment.component';
import { MeetingVcComponent } from '../shared/meeting-vc/meeting-vc.component';
import { SessionViewComponent } from '../shared/session-view/session-view.component';
import { UserRatingsComponent } from '../shared/user-ratings/user-ratings.component';
import { RolesGuard } from '../components/_guards/roles.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { LoanMarketComponent } from './loan-market/loan-market.component';
import { LendNowComponent } from './lend-now/lend-now.component';
import { UpdatePasswordComponent } from '../shared/update-password/update-password.component';
import { BankDetailsComponent } from '../shared/bank-details/bank-details.component';
import { MonthlySubscriptionComponent } from '../shared/monthly-subscription/monthly-subscription.component';
import { PaymentCancelComponent } from '../shared/payment-cancel/payment-cancel.component';
import { PaymentSuccessComponent } from '../shared/payment-success/payment-success.component';
import { BankDetailsVerifyGuard } from '../bank-details-verify.guard';
/*import { StripeComponentComponent } from '../shared/stripe-component/stripe-component.component';*/

const routes: Routes = [
  {
   path: '',
    component: LenderComponent,
    children: [
      { canActivate: [RolesGuard], path: '', component: HomeComponent },
      { canActivate: [RolesGuard], path: 'profile', component: ProfileComponent },      
      { canActivate: [RolesGuard], path: 'messages', component: MessagesComponent },
      { canActivate: [RolesGuard], path: 'wallet', component: WalletComponent },
      { canActivate: [RolesGuard], path: 'payment', component: PaymentComponent },
      { canActivate: [RolesGuard], path: 'payment-success', component: PaymentSuccessComponent },
      { canActivate: [RolesGuard], path: 'payment-cancel', component: PaymentCancelComponent },
      /*{ canActivate: [RolesGuard], path: 'payment-stripe', component: StripeComponentComponent },*/

      { canActivate: [RolesGuard, BankDetailsVerifyGuard], path: 'make-a-loan', component: NewSessionComponent },
      { canActivate: [RolesGuard], path: 'search-consulatnt', component: SearchBorrowerComponent },
      { canActivate: [RolesGuard], path: 'my-contract', component: MySessionsComponent },
      { canActivate: [RolesGuard], path: 'vcmeet', component: MeetingVcComponent },
      { canActivate: [RolesGuard], path: 'sessionview', component: SessionViewComponent },
      { canActivate: [RolesGuard], path: 'ratings', component: UserRatingsComponent },
      { canActivate: [RolesGuard], path: 'calendar', component: CalendarComponent },
      { canActivate: [RolesGuard, BankDetailsVerifyGuard], path: 'loan-market', component: LoanMarketComponent },
      { canActivate: [RolesGuard], path: 'lend-now', component: LendNowComponent },
      { canActivate: [RolesGuard], path: 'update-password', component: UpdatePasswordComponent },
      { canActivate: [RolesGuard], path: 'bank-details', component: BankDetailsComponent },
      { canActivate: [RolesGuard], path: 'my-subscriptions', component: MonthlySubscriptionComponent },
    ]
  },
  // otherwise redirect to home
  {
    canActivate: [RolesGuard], path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LenderRoutingModule { }
