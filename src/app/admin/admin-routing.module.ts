import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ServiceTypesAddComponent } from './service-types-add/service-types-add.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PaymentTransactionsComponent } from './payment-transactions/payment-transactions.component';
import { ProfileComponent } from './../shared/profile/profile.component';
import { BorrowerEarningsComponent } from './borrower-earnings/borrower-earnings.component';
import { AppAccessPermissions } from '../models/role';
import { AuthGuard } from '../components/_guards';
import { AddUserComponent } from './add-user/add-user.component';
import { UserLevelsComponent } from './user-levels/user-levels.component';
import { BlogsComponent } from './blogs/blogs.component';
import { MessagesComponent } from './../shared/messages/messages.component';
import { LoanPaymentComponent } from './loan-payment/loan-payment.component';
import { PartnersComponent } from './partners/partners.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { UserManagementPendingComponent } from './user-management-pending/user-management-pending.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'services',
        component: ServicesComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.adminAddEdit],
        }
      },
      {
        path: 'servicesadd',
        component: ServiceTypesAddComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.adminAddEdit],
        }
      },
      {
        path: 'users',
        component: UserManagementComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.usersAddEdit, AppAccessPermissions.adminAddEdit],
        }
      },{
        path: 'pending-users',
        component: UserManagementPendingComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.usersAddEdit, AppAccessPermissions.adminAddEdit],
        }
      },
      {
        path: 'add-user',
        component: AddUserComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.usersAddEdit, AppAccessPermissions.adminAddEdit],
        }
      }, {
        path: 'admin-users',
        component: UserManagementComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.adminAddEdit],
        }
      },
      {
        path: 'add-admin-user',
        component: AddUserComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.adminAddEdit],
        }
      },
      {
        path: 'payments',
        component: PaymentTransactionsComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.borrowerPayments],
        }
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'earnings',
        component: BorrowerEarningsComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.earningTransactions],
        }
      },
      {
        path: 'user-levels',
        component: UserLevelsComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.borrowerPayments],
        }
      },
      {
        path: 'blogs',
        component: BlogsComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.borrowerPayments],
        }
      }, {
        path: 'customer-review',
        component: CustomerReviewComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.borrowerPayments],
        }
      },
      {
        path: 'partners',
        component: PartnersComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.borrowerPayments],
        }
      },
      { canActivate: [AuthGuard], path: 'messages', component: MessagesComponent },
      {
        path: 'loan-pay',
        component: LoanPaymentComponent,
        canActivate: [AuthGuard],
        data: {
          appPermissions: [AppAccessPermissions.borrowerPayments],
        }
      }
    ]
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AdminRoutingModule { }
