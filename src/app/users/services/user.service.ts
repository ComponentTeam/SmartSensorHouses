import { Injectable } from '@angular/core';

import { FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class UserService {
  private userState: FirebaseAuthState = null;

  constructor(private firebaseAuth: FirebaseAuth) {
    firebaseAuth.subscribe((state: FirebaseAuthState) => {
      this.userState = state;
    });
  }

  get userId(): string {
    return this.isAuthenticated ? this.userState.uid : '';
  }

  get isAuthenticated(): boolean {
    return this.userState !== null;
  }

  signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.login({email, password});
  }

  signOut(): void {
    this.firebaseAuth.logout();
  }
}
