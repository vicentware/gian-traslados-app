import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripTrackingComponent } from './trip-tracking.component';

describe('TripTrackingComponent', () => {
  let component: TripTrackingComponent;
  let fixture: ComponentFixture<TripTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripTrackingComponent]
    });
    fixture = TestBed.createComponent(TripTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
