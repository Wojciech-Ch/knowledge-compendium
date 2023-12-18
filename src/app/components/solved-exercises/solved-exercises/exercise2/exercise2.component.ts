import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css'],
})
export class Exercise2Component {
  taskList: Array<any> = [
{title: "zadanie1", description: "opis1"},

  ];
  reactiveForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(),
  });

  constructor() {}
  onSubmit() {
    if(this.reactiveForm.valid){

    
    this.taskList.push(this.reactiveForm.value);
    this.reactiveForm.reset();
    console.log("tasklist",this.taskList)
  }
  }
  usun(i:number){
    this.taskList = [
    ...this.taskList.slice(0,i),
    ...this.taskList.slice(i+1)
    ]
  }
}
