import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';
import { SolvedExercisesRoutingModule } from './solved-exercises-routing.module';
import { SolvedExercisesComponent } from './solved-exercises/solved-exercises.component';
import { Exercise1Component } from './solved-exercises/exercise1/exercise1.component';
import { Exercise2Component } from './solved-exercises/exercise2/exercise2.component';
import { Exercise3Component } from './solved-exercises/exercise3/exercise3.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SolvedExercisesComponent, Exercise1Component, Exercise2Component, Exercise3Component],
  imports: [
    CommonModule,
    SolvedExercisesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SolvedExercisesModule { 



}
