import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './pages/sign-in/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './pages/sign-in/verify-code/verify-code.component';
import { NewPasswordComponent } from './pages/sign-in/new-password/new-password.component';
import { RegistrationFormComponent } from './pages/sign-up/registration-form/registration-form.component';
import { PhoneVerificationComponent } from './pages/sign-up/phone-verification/phone-verification.component';
import { VerifySignupCodeComponent } from './pages/sign-up/verify-signup-code/verify-signup-code.component';
import { SetPasswordComponent } from './pages/sign-up/set-password/set-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    VerifyCodeComponent,
    NewPasswordComponent,
    RegistrationFormComponent,
    PhoneVerificationComponent,
    VerifySignupCodeComponent,
    SetPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
