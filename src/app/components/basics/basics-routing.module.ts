import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { ArrayOperationsComponent } from './basics/array-operations/array-operations.component';
import { BasicTypesComponent } from './basics/basic-types/basic-types/basic-types.component';
import { DataBindingComponent } from './basics/data-binding/data-binding.component';
import { StringOperationsComponent } from './basics/string-operations/string-operations.component';
import { FormsComponent } from './basics/forms/forms.component';

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
  {path: "data-binding",
  component: DataBindingComponent
},
{path: "string-operations",
component: StringOperationsComponent
},
{path: "forms",
component: FormsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsRoutingModule {}
