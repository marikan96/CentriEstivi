import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDetailsModalComponent } from './feedback-details-modal.component';

describe('FeedbackDetailsModalComponent', () => {
  let component: FeedbackDetailsModalComponent;
  let fixture: ComponentFixture<FeedbackDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
