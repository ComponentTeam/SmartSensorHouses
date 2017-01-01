import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: FirebaseAuth) { }

  get authState(): Observable<FirebaseAuthState> {
    return this.firebaseAuth.asObservable();
  }

  get userId(): string {
    let userId = localStorage.getItem('loggedUserId');

    return userId !== null ? userId : '';
  }

  register(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.createUser({email, password})
      .then((state: FirebaseAuthState) => this.setUserId(state));
  }

  signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.login({email, password})
      .then((state: FirebaseAuthState) => this.setUserId(state));
  }

  signOut(): void {
    this.firebaseAuth.logout();
    localStorage.removeItem('loggedUserId');
  }

  private setUserId(state: FirebaseAuthState): void {
    localStorage.setItem('loggedUserId', state.uid);
  }
}
