import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  registerUser(form: FormGroup) {
    console.log(form);
  }
}