import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPhoneCodeComponent } from './enter-phone-code.component';

describe('EnterPhoneCodeComponent', () => {
  let component: EnterPhoneCodeComponent;
  let fixture: ComponentFixture<EnterPhoneCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterPhoneCodeComponent]
    });
    fixture = TestBed.createComponent(EnterPhoneCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
