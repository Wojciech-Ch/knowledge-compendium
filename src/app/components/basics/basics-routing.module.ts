import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { ArrayOperationsComponent } from './basics/array-operations/array-operations.component';
import { BasicTypesComponent } from './basics/basic-types/basic-types/basic-types.component';
import { DataBindingComponent } from './basics/data-binding/data-binding.component';
import { StringOperationsComponent } from './basics/string-operations/string-operations.component';
import { FormsComponent } from './basics/forms/forms.component';
import { ObjectOperationsComponent } from './basics/object-operations/object-operations.component';
import { LifecycleHooksComponent } from './basics/lifecycle-hooks/lifecycle-hooks.component';
import { UnitsComponent } from './basics/units/units.component';
import { AccessibilityComponent } from './basics/accessibility/accessibility.component';
import { DirectivesComponent } from './basics/directives/directives.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
  },
  {
    path: 'array-operations',
    component: ArrayOperationsComponent,
  },
  {
    path: 'basic-types',
    component: BasicTypesComponent,
  },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'string-operations', component: StringOperationsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'object-operations', component: ObjectOperationsComponent },
  { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
  { path: 'units', component: UnitsComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  {path: "directives", component:DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsRoutingModule {}
