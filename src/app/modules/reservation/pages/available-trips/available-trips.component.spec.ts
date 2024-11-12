import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTripsComponent } from './available-trips.component';

describe('AvailableTripsComponent', () => {
  let component: AvailableTripsComponent;
  let fixture: ComponentFixture<AvailableTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableTripsComponent]
    });
    fixture = TestBed.createComponent(AvailableTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
