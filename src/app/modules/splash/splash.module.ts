import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashRoutingModule } from './splash-routing.module';
import { SplashComponent } from './splash.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    SplashComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SplashRoutingModule
  ]
})
export class SplashModule { }
