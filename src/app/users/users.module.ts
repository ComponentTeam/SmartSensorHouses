import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInFormComponent, SignUpFormComponent } from './components';
import { AuthService } from '../shared/services';
import { CanActivateUnauthenticatedUserGuard } from './guards';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [SignInFormComponent, SignUpFormComponent],
  providers: [AuthService, CanActivateUnauthenticatedUserGuard],
})
export class UsersModule { }
