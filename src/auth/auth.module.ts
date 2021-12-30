import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// third-party
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from "src/environments/environment";
import { SharedModule } from "./shared/shared.module";
import {provideAuth, getAuth} from '@angular/fire/auth';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)  },
      { path: 'register', loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule)  },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    SharedModule.forRoot(),
  ]
})
export class AuthModule {}