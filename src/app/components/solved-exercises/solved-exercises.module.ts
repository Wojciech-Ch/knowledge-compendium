import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolvedExercisesRoutingModule } from './solved-exercises-routing.module';
import { SolvedExercisesComponent } from './solved-exercises/solved-exercises.component';


@NgModule({
  declarations: [SolvedExercisesComponent],
  imports: [
    CommonModule,
    SolvedExercisesRoutingModule
  ]
})
export class SolvedExercisesModule { }
