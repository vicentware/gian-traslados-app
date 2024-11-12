import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationTipComponent } from './communication-tip.component';

describe('CommunicationTipComponent', () => {
  let component: CommunicationTipComponent;
  let fixture: ComponentFixture<CommunicationTipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunicationTipComponent]
    });
    fixture = TestBed.createComponent(CommunicationTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
