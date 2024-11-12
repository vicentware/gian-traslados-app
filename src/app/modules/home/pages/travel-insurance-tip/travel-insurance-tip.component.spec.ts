import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInsuranceTipComponent } from './travel-insurance-tip.component';

describe('TravelInsuranceTipComponent', () => {
  let component: TravelInsuranceTipComponent;
  let fixture: ComponentFixture<TravelInsuranceTipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelInsuranceTipComponent]
    });
    fixture = TestBed.createComponent(TravelInsuranceTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
