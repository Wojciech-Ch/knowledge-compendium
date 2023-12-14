import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { BasicsRoutingModule } from './basics-routing.module';
import {MatCardModule} from '@angular/material/card';
import { ArrayOperationsComponent } from './basics/array-operations/array-operations.component';
import { BasicTypesComponent } from './basics/basic-types/basic-types/basic-types.component';
import { DataBindingComponent } from './basics/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [BasicsComponent, ArrayOperationsComponent, BasicTypesComponent, DataBindingComponent],
  imports: [CommonModule, BasicsRoutingModule,MatCardModule, FormsModule],
})
export class BasicsModule implements OnInit {
  ngOnInit(): void {

  }
}
