import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainComponent } from './pages/main/main.component';
import { GpsTrackingTipComponent } from './pages/gps-tracking-tip/gps-tracking-tip.component';
import { CommunicationTipComponent } from './pages/communication-tip/communication-tip.component';
import { DirectTravelTipComponent } from './pages/direct-travel-tip/direct-travel-tip.component';
import { WifiTipComponent } from './pages/wifi-tip/wifi-tip.component';
import { TicketTipComponent } from './pages/ticket-tip/ticket-tip.component';
import { TravelInsuranceTipComponent } from './pages/travel-insurance-tip/travel-insurance-tip.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    GpsTrackingTipComponent,
    CommunicationTipComponent,
    DirectTravelTipComponent,
    WifiTipComponent,
    TicketTipComponent,
    TravelInsuranceTipComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
