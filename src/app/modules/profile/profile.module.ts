import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MainComponent } from './pages/main/main.component';
import { EnterPhoneComponent } from './pages/phone-verification/enter-phone/enter-phone.component';
import { EnterPhoneCodeComponent } from './pages/phone-verification/enter-phone-code/enter-phone-code.component';
import { EnterEmailComponent } from './pages/email-verification/enter-email/enter-email.component';
import { EnterEmailCodeComponent } from './pages/email-verification/enter-email-code/enter-email-code.component';
import { FrontIdComponent } from './pages/identity-verification/front-id/front-id.component';
import { BackIdComponent } from './pages/identity-verification/back-id/back-id.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { ChangeNameComponent } from './pages/change-name/change-name.component';
import { ChangeProfilePhotoComponent } from './pages/change-profile-photo/change-profile-photo.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RatingsReviewsComponent } from './pages/ratings-reviews/ratings-reviews.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MainComponent,
    EnterPhoneComponent,
    EnterPhoneCodeComponent,
    EnterEmailComponent,
    EnterEmailCodeComponent,
    FrontIdComponent,
    BackIdComponent,
    BiographyComponent,
    PaymentMethodComponent,
    ChangeNameComponent,
    ChangeProfilePhotoComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    RatingsReviewsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
