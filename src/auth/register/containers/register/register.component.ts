import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/auth/shared/services/auth/auth.service";

@Component({
  selector: 'register',
  template: `
    <auth-form (submitted)="registerUser($event)">
      <h1>Créer un compte</h1>
      <a routerLink="/auth/login">J'ai déjà un compte</a>
      <button type="submit">
        Créer un compte
      </button>
      <div class="error" *ngIf="error">
        {{ error }}
      </div>
    </auth-form>
  `
})
export class RegisterComponent {
  error = '';
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async registerUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (err: any) {
      this.error = err.message;
    }
  }
}