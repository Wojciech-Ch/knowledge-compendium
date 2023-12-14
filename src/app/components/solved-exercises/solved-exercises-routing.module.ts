import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolvedExercisesComponent } from './solved-exercises/solved-exercises.component';

const routes: Routes = [
  {
    path: '',
    component: SolvedExercisesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolvedExercisesRoutingModule { }
