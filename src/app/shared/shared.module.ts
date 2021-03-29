import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';

import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { MessagesComponent } from './messages/messages.component';
import { MeetingVcComponent } from './meeting-vc/meeting-vc.component';
import { PaymentComponent } from './payment/payment.component';
import { SortArrayByUpdatedOnPipe } from './sort-array-by-updated-on.pipe';
import { FilterObjectArrayPipe } from './filter-object-array.pipe';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DataArrayFilterPipe } from './pipe/data-array-filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalPublicProfile } from '../lender/lender.component';
import { UserRatingsComponent } from './user-ratings/user-ratings.component';
import { SessionViewComponent } from './session-view/session-view.component';
import { MySessionsPipe } from './pipe/my-sessions.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { ProfilePortfolioComponent } from './profile-portfolio/profile-portfolio.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { MonthlySubscriptionComponent } from './monthly-subscription/monthly-subscription.component';
import { IncomeProofComponent } from './income-proof/income-proof.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentCancelComponent } from './payment-cancel/payment-cancel.component';
import { StripeComponentComponent } from './stripe-component/stripe-component.component';

@NgModule({
  declarations: [ProfileComponent, WalletComponent, MessagesComponent, MeetingVcComponent, PaymentComponent, SortArrayByUpdatedOnPipe, FilterObjectArrayPipe, PublicProfileComponent, DataArrayFilterPipe, ModalPublicProfile, UserRatingsComponent, SessionViewComponent, MySessionsPipe, ProfilePortfolioComponent, UpdatePasswordComponent, BankDetailsComponent, MonthlySubscriptionComponent, IncomeProofComponent, PaymentSuccessComponent, PaymentCancelComponent, StripeComponentComponent],
  exports: [ProfileComponent, WalletComponent, MessagesComponent, PaymentComponent, SessionViewComponent, MySessionsPipe],
  imports: [
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    RouterModule,
    NgxDropzoneModule,
    NgPipesModule


  ],
  entryComponents: [ModalPublicProfile]
})
export class SharedModule { }
