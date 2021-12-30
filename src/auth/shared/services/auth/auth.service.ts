import { Injectable } from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginUser(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}