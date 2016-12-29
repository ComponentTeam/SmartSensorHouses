import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInFormComponent } from './components';
import { AuthService } from '../shared/services';
import { CanActivateSignInGuard } from './guards';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [SignInFormComponent],
  providers: [AuthService, CanActivateSignInGuard],
})
export class UsersModule { }
