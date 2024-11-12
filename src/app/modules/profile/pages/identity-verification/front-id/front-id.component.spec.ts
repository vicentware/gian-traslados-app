import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontIdComponent } from './front-id.component';

describe('FrontIdComponent', () => {
  let component: FrontIdComponent;
  let fixture: ComponentFixture<FrontIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontIdComponent]
    });
    fixture = TestBed.createComponent(FrontIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
