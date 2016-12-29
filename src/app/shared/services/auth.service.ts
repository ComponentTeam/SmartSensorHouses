import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: FirebaseAuth) { }

  get authState(): Observable<FirebaseAuthState> {
    return this.firebaseAuth.asObservable();
  }

  signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.login({email, password});
  }

  signOut(): void {
    this.firebaseAuth.logout();
  }
}
