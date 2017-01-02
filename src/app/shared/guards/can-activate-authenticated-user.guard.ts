import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../../shared/services';


@Injectable()
export class CanActivateAuthenticatedUserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.authState
      .map((authState: FirebaseAuthState) => {
        if (authState === null) {
          this.router.navigate(['/']);
          return false;
        }

        return true;
      });
  }
}
