import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolvedExercisesComponent } from './solved-exercises/solved-exercises.component';
import { Exercise1Component } from './solved-exercises/exercise1/exercise1.component';
import { Exercise2Component } from './solved-exercises/exercise2/exercise2.component';

const routes: Routes = [
  {
    path: '',
    component: SolvedExercisesComponent,
  },
  {
    path: 'exercise-1',
    component: Exercise1Component
  },
  {
    path: 'exercise-2',
    component: Exercise2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolvedExercisesRoutingModule { }
