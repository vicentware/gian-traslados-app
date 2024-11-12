import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation.component';
import { OriginComponent } from './pages/origin/origin.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { AvailableTripsComponent } from './pages/available-trips/available-trips.component';
import { TripDetailsComponent } from './pages/trip-details/trip-details.component';
import { PassengerInfoComponent } from './pages/passenger-info/passenger-info.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SuccessComponent } from './pages/success/success.component';


@NgModule({
  declarations: [
    ReservationComponent,
    OriginComponent,
    DestinationComponent,
    AvailableTripsComponent,
    TripDetailsComponent,
    PassengerInfoComponent,
    PaymentComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
