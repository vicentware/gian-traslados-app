import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTicketComponent } from './current-ticket.component';

describe('CurrentTicketComponent', () => {
  let component: CurrentTicketComponent;
  let fixture: ComponentFixture<CurrentTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentTicketComponent]
    });
    fixture = TestBed.createComponent(CurrentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
