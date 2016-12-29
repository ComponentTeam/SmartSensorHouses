import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FirebaseAuthState } from 'angularfire2';
import { UserService } from '../services';


@Injectable()
export class CanActivateSignInGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.userService.authState
      .map((authState: FirebaseAuthState) => {
        if (authState === null) {
          return true;
        }

        this.router.navigate(['/']);
        return false;
      });
  }
}
