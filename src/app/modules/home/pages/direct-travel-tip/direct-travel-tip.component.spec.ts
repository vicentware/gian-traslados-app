import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectTravelTipComponent } from './direct-travel-tip.component';

describe('DirectTravelTipComponent', () => {
  let component: DirectTravelTipComponent;
  let fixture: ComponentFixture<DirectTravelTipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectTravelTipComponent]
    });
    fixture = TestBed.createComponent(DirectTravelTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
