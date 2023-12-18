import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface items {
  name:string,
  price:number,
  amount:number
}

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component {
  itemLists: items[] = []
  newControlName = ""
  newControlValue: any
  toggle = false
  
hardReactiveForm = new FormGroup({
  name: new FormControl("", [Validators.required, Validators.minLength(3)]),
  price: new FormControl(0, [Validators.required, Validators.min(0)]),
  amount: new FormControl(0, [Validators.required, Validators.min(1)])
})
controlsFromForm = this.hardReactiveForm.controls

  constructor(){}

  get controlsFromFormButItsGetter(){
    return Object.keys(this.hardReactiveForm)
  }
 

addFormValuesToList(){
if(this.hardReactiveForm.valid){
this.itemLists.push(this.hardReactiveForm.value as items)
this.hardReactiveForm.reset()
console.log(this.itemLists)
}
}

addControl(controlName: any, value: any, validators: any[]) {
  if (!this.hardReactiveForm.contains(controlName)) {
    this.hardReactiveForm.addControl(controlName, new FormControl(value, validators));
    
  }
}
toggleVisible(){
this.toggle = !this.toggle
}
}
