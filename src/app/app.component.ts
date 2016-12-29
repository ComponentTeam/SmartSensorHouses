/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AuthService } from './shared/services';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})
export class AppComponent {
  private isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    authService.authState.subscribe((state) => {
      this.isAuthenticated = !!state;
    });
  }

  onSignOutClick(event: MouseEvent) {
    this.authService.signOut();
  }

}
