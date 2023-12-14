import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-froms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  myReactiveForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

onSubmit(form: NgForm) {
  console.log(form.value); // Teraz możemy odwołać się do wartości formularza
}

onSubmition() {
  console.log(this.myReactiveForm.value); // używamy this.myForm, które jest typu FormGroup
}
}
