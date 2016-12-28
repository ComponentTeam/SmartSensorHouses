import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInFormComponent } from './components';
import { UserService } from './services';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [ReactiveFormsModule, UsersRoutingModule],
  declarations: [SignInFormComponent],
  providers: [UserService],
})
export class UsersModule { }
