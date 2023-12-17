import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {
  reactiveForm = new FormGroup({
    name : new FormControl(''),
    surname : new FormControl(''),
  })
  formValueVisible = false;
constructor() { }
onSubmition(){
this.formValueVisible = !this.formValueVisible
}
}
