import { NgModule } from '@angular/core';

import { SignInComponent } from './components';
import { UserService } from './services';

@NgModule({
  exports: [SignInComponent, UserService],
  declarations: [SignInComponent, UserService],
  providers: [UserService],
})
export class UsersModule { }
