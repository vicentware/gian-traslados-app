import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';
import { Screen1Component } from './pages/screen1/screen1.component';
import { Screen2Component } from './pages/screen2/screen2.component';
import { Screen3Component } from './pages/screen3/screen3.component';


@NgModule({
  declarations: [
    OnboardingComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule { }
