import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterEmailCodeComponent } from './enter-email-code.component';

describe('EnterEmailCodeComponent', () => {
  let component: EnterEmailCodeComponent;
  let fixture: ComponentFixture<EnterEmailCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterEmailCodeComponent]
    });
    fixture = TestBed.createComponent(EnterEmailCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
