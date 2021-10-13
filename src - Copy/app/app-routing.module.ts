import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Role } from './models';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

import { AuthGuard,NoAuthGuard } from './components/_guards';


const routes: Routes = [
  //DO NOT CHNAGE below routing This will be our final structure for page restrictions as per roles
  
 /* {
    path: 'invester',
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    loadChildren: () => import('./invester/invester.module').then(m => m.InvesterModule)
  },
  {
    path: 'business',
    canActivate: [AuthGuard],
    data: { roles: [Role.Business] },
    loadChildren: () => import('./business/business.module').then(m => m.BusinessModule)
  }
  ,*/
  {
    path: '',
    canActivate: [NoAuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'borrower',
    canActivate: [AuthGuard],
    data: { roles: [Role.Borrower] },
    loadChildren: () => import('./borrower/borrower.module').then(m => m.BorrowerModule)
  },
  {
    path: 'lender',
    canActivate: [AuthGuard],
    data: { roles: [Role.Lender] },
    loadChildren: () => import('./lender/lender.module').then(m => m.LenderModule)

  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
  //  data: { roles: [Role.Admin] },
    data: { roles: [Role.Admin] },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    canActivate: [NoAuthGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [NoAuthGuard],
    component: RegisterComponent
  },
  {
    path: 'forgotpassword',
    canActivate: [NoAuthGuard],
    component: ForgotPasswordComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent
  },

  // otherwise redirect to home
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
