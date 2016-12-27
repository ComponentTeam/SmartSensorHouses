import { Injectable } from '@angular/core';

import {
  AuthProviders,
  AuthMethods,
  FirebaseAuth,
  FirebaseAuthState
} from 'angularfire2';

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

  signIn(authProvider: number): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.login({
        provider: authProvider
      })
      .catch((error) => {
        console.error('Failed authentication - UserService.signIn() :', error);
      });
  }

  signInWithPassword(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Password);
  }

  signOut(): void {
    this.firebaseAuth.logout();
  }
}
