import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-modal';

import { SharedModule } from '../shared/shared.module';
import {
  CanActivateAuthenticatedUserGuard,
  CanActivateUnauthenticatedUserGuard
} from '../shared/guards';
import {
  SignInFormComponent,
  SignUpFormComponent
} from './components';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
  ],
  providers: [
    CanActivateAuthenticatedUserGuard,
    CanActivateUnauthenticatedUserGuard
  ],
})
export class UsersModule { }
