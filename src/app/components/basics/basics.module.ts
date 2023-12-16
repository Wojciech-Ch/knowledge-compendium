import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { BasicsRoutingModule } from './basics-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ArrayOperationsComponent } from './basics/array-operations/array-operations.component';
import { BasicTypesComponent } from './basics/basic-types/basic-types/basic-types.component';
import { DataBindingComponent } from './basics/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { StringOperationsComponent } from './basics/string-operations/string-operations.component';
import { FormsComponent } from './basics/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ObjectOperationsComponent } from './basics/object-operations/object-operations.component';
import { LifecycleHooksComponent } from './basics/lifecycle-hooks/lifecycle-hooks.component';
import { UnitsComponent } from './basics/units/units.component';
import { AccessibilityComponent } from './basics/accessibility/accessibility.component';
import { DirectivesComponent } from './basics/directives/directives.component';
@NgModule({
  declarations: [
    BasicsComponent,
    ArrayOperationsComponent,
    BasicTypesComponent,
    DataBindingComponent,
    StringOperationsComponent,
    FormsComponent,
    ObjectOperationsComponent,
    LifecycleHooksComponent,
    UnitsComponent,
    AccessibilityComponent,
    DirectivesComponent,
  ],
  imports: [CommonModule, BasicsRoutingModule, MatCardModule, FormsModule,ReactiveFormsModule, MatIconModule ],
})
export class BasicsModule implements OnInit {
  ngOnInit(): void {}
}
