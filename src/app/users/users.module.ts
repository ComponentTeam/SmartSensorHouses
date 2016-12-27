import { NgModule } from '@angular/core';

import { SignInComponent } from './components';
import { UserService } from './services';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [UsersRoutingModule],
  declarations: [SignInComponent],
  providers: [UserService],
})
export class UsersModule { }
