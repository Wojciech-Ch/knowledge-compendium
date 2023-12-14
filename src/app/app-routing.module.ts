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
    path: '**',
    redirectTo: 'landing-page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
