import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySignupCodeComponent } from './verify-signup-code.component';

describe('VerifySignupCodeComponent', () => {
  let component: VerifySignupCodeComponent;
  let fixture: ComponentFixture<VerifySignupCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifySignupCodeComponent]
    });
    fixture = TestBed.createComponent(VerifySignupCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
