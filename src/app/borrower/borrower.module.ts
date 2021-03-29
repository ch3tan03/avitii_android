import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { RouterModule, Routes } from '@angular/router';
import { BorrowerRoutingModule, } from './borrower-routing.module';
import { BorrowerComponent,ModalApplySession, ModalAppliedSessionDisplay } from './borrower.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowseSessionsComponent } from './browse-sessions/browse-sessions.component';
import { MySessionsComponent } from './my-sessions/my-sessions.component';
import { EarningsComponent } from './earnings/earnings.component';
import { SharedModule } from './../shared/shared.module';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { LoanMarketComponent } from './loan-market/loan-market.component';
import { GetALoanComponent } from './get-a-loan/get-a-loan.component';
import { BorrowNowComponent } from './borrow-now/borrow-now.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [BorrowerComponent, HeaderComponent, FooterComponent, HomeComponent, BrowseSessionsComponent, MySessionsComponent, EarningsComponent, ModalApplySession, ModalAppliedSessionDisplay, CalendarComponent, LoanMarketComponent, GetALoanComponent, BorrowNowComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ScrollingModule,
    BorrowerRoutingModule,
    SharedModule,
    RouterModule,
    FullCalendarModule
  ],
  entryComponents: [ModalApplySession,ModalAppliedSessionDisplay]
})
export class BorrowerModule { }
