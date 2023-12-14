import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewQuestionsComponent } from './interview-questions.component';

describe('InterviewQuestionsComponent', () => {
  let component: InterviewQuestionsComponent;
  let fixture: ComponentFixture<InterviewQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewQuestionsComponent]
    });
    fixture = TestBed.createComponent(InterviewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
