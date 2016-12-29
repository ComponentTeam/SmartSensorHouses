import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInFormComponent } from './components';
import { UserService } from './services';
import { CanActivateSignInGuard } from './guards';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [SignInFormComponent],
  providers: [UserService, CanActivateSignInGuard],
})
export class UsersModule { }
