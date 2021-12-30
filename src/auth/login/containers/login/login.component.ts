import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  loginUser(form: FormGroup) {
    console.log(form);
  }
}