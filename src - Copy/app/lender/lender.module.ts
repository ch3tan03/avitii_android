import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { LenderRoutingModule } from './lender-routing.module';
import { LenderComponent, ModalApplySession, ModalAppliedSessionDisplay } from './lender.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './../shared/shared.module';
import { NewSessionComponent } from './new-session/new-session.component';
import { SearchBorrowerComponent } from './search-borrower/search-borrower.component';
import { MySessionsComponent } from './my-sessions/my-sessions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { LoanMarketComponent } from './loan-market/loan-market.component';
import { LendNowComponent } from './lend-now/lend-now.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [LenderComponent, HomeComponent, HeaderComponent, FooterComponent,  NewSessionComponent, SearchBorrowerComponent, MySessionsComponent, ModalApplySession, ModalAppliedSessionDisplay, CalendarComponent, LoanMarketComponent, LendNowComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ScrollingModule,
    LenderRoutingModule,
    SharedModule,
    FullCalendarModule
  ],
  entryComponents: [ModalApplySession, ModalAppliedSessionDisplay]
})
export class LenderModule { }
