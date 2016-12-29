import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class UserService {
  private userState: FirebaseAuthState = null;

  constructor(private firebaseAuth: FirebaseAuth) { }

  get authState(): Observable<FirebaseAuthState> {
    return this.firebaseAuth.asObservable();
  }

  signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.login({email, password})
      .then((state: FirebaseAuthState) => this.userState = state);
  }

  signOut(): void {
    this.firebaseAuth.logout();
  }
}
