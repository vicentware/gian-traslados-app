import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { MainComponent } from './pages/main/main.component';
import { CurrentTicketComponent } from './pages/current-ticket/current-ticket.component';
import { PreviousTicketsComponent } from './pages/previous-tickets/previous-tickets.component';
import { TripTrackingComponent } from './pages/trip-tracking/trip-tracking.component';
import { TripDetailsComponent } from './pages/trip-details/trip-details.component';


@NgModule({
  declarations: [
    ActivityComponent,
    MainComponent,
    CurrentTicketComponent,
    PreviousTicketsComponent,
    TripTrackingComponent,
    TripDetailsComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
