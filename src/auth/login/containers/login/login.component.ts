import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/auth/shared/services/auth/auth.service";

@Component({
  selector: 'login',
  template: `
    <auth-form (submitted)="loginUser($event)">
      <h1>Se connecter</h1>
      <a routerLink="/auth/register">Je n'ai pas de compte ?</a>
      <button type="submit">
        Se connecter
      </button>
      <div class="error" *ngIf="error">
        {{ error }}
      </div>
    </auth-form>
  `,
})
export class LoginComponent {
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async loginUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['/']);
    } catch (err: any) {
      this.error = err.message;
    }
  }
}