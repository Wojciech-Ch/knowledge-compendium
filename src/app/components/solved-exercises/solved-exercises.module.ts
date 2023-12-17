import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';

import { SolvedExercisesRoutingModule } from './solved-exercises-routing.module';
import { SolvedExercisesComponent } from './solved-exercises/solved-exercises.component';
import { Exercise1Component } from './solved-exercises/exercise1/exercise1.component';
import { Exercise2Component } from './solved-exercises/exercise2/exercise2.component';



@NgModule({
  declarations: [SolvedExercisesComponent, Exercise1Component, Exercise2Component],
  imports: [
    CommonModule,
    SolvedExercisesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SolvedExercisesModule { 



}
