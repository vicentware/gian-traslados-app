import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiTipComponent } from './wifi-tip.component';

describe('WifiTipComponent', () => {
  let component: WifiTipComponent;
  let fixture: ComponentFixture<WifiTipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WifiTipComponent]
    });
    fixture = TestBed.createComponent(WifiTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
