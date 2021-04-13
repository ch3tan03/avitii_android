import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// used to create fake backend
//import { fakeBackendProvider } from './components/_helpers';
//import { routing }        from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './components/_helpers';
import { UtilityService } from './services/utility.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChartsModule } from 'ng2-charts';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { SocketioService } from './socketio.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatSnackBar} from '@angular/material/snack-bar';
import { StripeModule } from "stripe-angular";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ForgotPasswordComponent,
    FaqsComponent,
    DisclaimerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    OverlayModule,
    StripeModule.forRoot(""),
    DataTablesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UtilityService,
    SocketioService,
     MatSnackBar

    // provider used to create fake backend

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
