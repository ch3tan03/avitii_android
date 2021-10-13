
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BorrowerComponent } from './borrower.component';
import { HomeComponent } from './home/home.component';
import { BrowseSessionsComponent } from './browse-sessions/browse-sessions.component';
import { MySessionsComponent } from './my-sessions/my-sessions.component';
import { EarningsComponent } from './earnings/earnings.component';
import { RoomComponent } from './room/room.component';

import { MessagesComponent } from './../shared/messages/messages.component';
import { ProfileComponent } from './../shared/profile/profile.component';
import { WalletComponent } from './../shared/wallet/wallet.component';
import { MeetingVcComponent } from './../shared/meeting-vc/meeting-vc.component';
import { PaymentComponent } from './../shared/payment/payment.component';
import { UserRatingsComponent } from './../shared/user-ratings/user-ratings.component';
import { RolesGuard } from '../components/_guards/roles.guard';
import { LoanMarketComponent } from './loan-market/loan-market.component';
import {GetALoanComponent} from './get-a-loan/get-a-loan.component';
import { BorrowNowComponent } from './borrow-now/borrow-now.component';
import { UpdatePasswordComponent } from '../shared/update-password/update-password.component';
import { BankDetailsComponent } from '../shared/bank-details/bank-details.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthlySubscriptionComponent } from '../shared/monthly-subscription/monthly-subscription.component';
import { IncomeProofComponent } from '../shared/income-proof/income-proof.component';
import { PaymentCancelComponent } from '../shared/payment-cancel/payment-cancel.component';
import { PaymentSuccessComponent } from '../shared/payment-success/payment-success.component';
import { UsersIncomeExpenseVerifyGuard } from '../users-income-expense-verify.guard';
import { BankDetailsVerifyGuard } from '../bank-details-verify.guard';
import { RatingsListComponent } from '../shared/ratings-list/ratings-list.component';

const routes: Routes = [
  {
    path: '',
    component: BorrowerComponent,
    children: [
      {canActivate: [RolesGuard], path: '', component: HomeComponent},
      { canActivate: [RolesGuard], path: 'profile', component: ProfileComponent },    
      {canActivate: [RolesGuard], path: 'wallet', component: WalletComponent},
      {canActivate: [RolesGuard], path: 'browse', component: BrowseSessionsComponent},
      { canActivate: [RolesGuard], path: 'my-contract', component: MySessionsComponent },
      { canActivate: [RolesGuard], path: 'messages', component: MessagesComponent },
      { canActivate: [RolesGuard], path: 'earnings', component: EarningsComponent },
      { canActivate: [RolesGuard], path: 'vcmeet', component: MeetingVcComponent },
      { canActivate: [RolesGuard], path: 'room', component: RoomComponent },
      { canActivate: [RolesGuard], path: 'payment', component: PaymentComponent },
      { canActivate: [RolesGuard], path: 'payment-success', component: PaymentSuccessComponent },
      { canActivate: [RolesGuard], path: 'payment-cancel', component: PaymentCancelComponent },
      { canActivate: [RolesGuard], path: 'ratings', component: UserRatingsComponent },
      { canActivate: [RolesGuard, BankDetailsVerifyGuard, UsersIncomeExpenseVerifyGuard], path: 'loan-market', component: LoanMarketComponent },
      { canActivate: [RolesGuard, BankDetailsVerifyGuard, UsersIncomeExpenseVerifyGuard], path: 'make-a-loan', component: GetALoanComponent },
      { canActivate: [RolesGuard], path: 'borrow-now', component: BorrowNowComponent },
      { canActivate: [RolesGuard], path: 'update-password', component: UpdatePasswordComponent },
      { canActivate: [RolesGuard], path: 'bank-details', component: BankDetailsComponent },
      { canActivate: [RolesGuard], path: 'my-subscriptions', component: MonthlySubscriptionComponent },
      { canActivate: [RolesGuard], path: 'income-proof', component: IncomeProofComponent },
      { canActivate: [RolesGuard], path: 'calendar', component: CalendarComponent },
      { canActivate: [RolesGuard], path: 'my-ratings', component: RatingsListComponent },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BorrowerRoutingModule { }
