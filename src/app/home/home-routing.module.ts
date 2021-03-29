import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { MeetingVcComponent } from './../shared/meeting-vc/meeting-vc.component';

const HomeRoutes: Routes = [
          { 
          path: '', 
          component: LayoutComponent ,
          children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'our-history', component: HowItWorksComponent },
            { path: 'vcmeet', component: MeetingVcComponent }
          ]
        }
];

@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes)
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeRoutingModule {}