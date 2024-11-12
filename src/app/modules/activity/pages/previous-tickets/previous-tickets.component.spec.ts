import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTicketsComponent } from './previous-tickets.component';

describe('PreviousTicketsComponent', () => {
  let component: PreviousTicketsComponent;
  let fixture: ComponentFixture<PreviousTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousTicketsComponent]
    });
    fixture = TestBed.createComponent(PreviousTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
