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
@NgModule({
  declarations: [
    BasicsComponent,
    ArrayOperationsComponent,
    BasicTypesComponent,
    DataBindingComponent,
    StringOperationsComponent,
    FormsComponent,
  ],
  imports: [CommonModule, BasicsRoutingModule, MatCardModule, FormsModule,ReactiveFormsModule ],
})
export class BasicsModule implements OnInit {
  ngOnInit(): void {}
}
