import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsTrackingTipComponent } from './gps-tracking-tip.component';

describe('GpsTrackingTipComponent', () => {
  let component: GpsTrackingTipComponent;
  let fixture: ComponentFixture<GpsTrackingTipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GpsTrackingTipComponent]
    });
    fixture = TestBed.createComponent(GpsTrackingTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
