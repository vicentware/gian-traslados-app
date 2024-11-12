import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackIdComponent } from './back-id.component';

describe('BackIdComponent', () => {
  let component: BackIdComponent;
  let fixture: ComponentFixture<BackIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackIdComponent]
    });
    fixture = TestBed.createComponent(BackIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
