import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ServiceTypesAddComponent } from './service-types-add/service-types-add.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PaymentTransactionsComponent } from './payment-transactions/payment-transactions.component';
import { BorrowerEarningsComponent } from './borrower-earnings/borrower-earnings.component';
import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [AdminComponent, HomeComponent, HeaderComponent, FooterComponent, ServicesComponent, ServiceTypesAddComponent, UserManagementComponent, PaymentTransactionsComponent, BorrowerEarningsComponent, AddUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    MatDialogModule,
    ScrollingModule,
    SharedModule,
  ]
})
export class AdminModule { }
