/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { UserService } from './users/services';

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

  constructor(private userService: UserService) {
    userService.authState.subscribe((state) => {
      this.isAuthenticated = !!state;
    });
  }

  onSignOutClick(event: MouseEvent) {
    this.userService.signOut();
  }

}
