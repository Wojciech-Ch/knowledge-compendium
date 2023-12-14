import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewQuestionsRoutingModule } from './interview-questions-routing.module';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';


@NgModule({
  declarations: [InterviewQuestionsComponent],
  imports: [
    CommonModule,
    InterviewQuestionsRoutingModule
  ]
})
export class InterviewQuestionsModule { }
