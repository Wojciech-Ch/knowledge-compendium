import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing-page',
    loadChildren: () =>
      import('./components/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
    ),
  },
  {
    path: 'basics',
    loadChildren: () =>
      import('./components/basics/basics.module').then((m) => m.BasicsModule),
  },
  {
    path: 'advanced',
    loadChildren: () =>
      import('./components/advanced/advanced.module').then((m) => m.AdvancedModule),
  },
  {
    path: 'solved-exercises',
    loadChildren: () =>
      import('./components/solved-exercises/solved-exercises.module').then((m) => m.SolvedExercisesModule),
  },
  {
    path: 'interview-questions',
    loadChildren: () =>
      import('./components/interview-questions/interview-questions.module').then((m) => m.InterviewQuestionsModule),
  },
  {
    path: '**',
    redirectTo: 'landing-page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
