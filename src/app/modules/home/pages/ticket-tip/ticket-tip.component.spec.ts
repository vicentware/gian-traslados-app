import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTipComponent } from './ticket-tip.component';

describe('TicketTipComponent', () => {
  let component: TicketTipComponent;
  let fixture: ComponentFixture<TicketTipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketTipComponent]
    });
    fixture = TestBed.createComponent(TicketTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
