import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import {
  CanActivateAuthenticatedUserGuard,
  CanActivateUnauthenticatedUserGuard
} from '../shared/guards';
import {
  SignInFormComponent,
  SignUpFormComponent
} from './components';
//import { HouseListComponent } from '../houses/components';
//import { HouseService } from '../houses/services';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
    //HouseListComponent
  ],
  providers: [
    //HouseService,
    CanActivateAuthenticatedUserGuard,
    CanActivateUnauthenticatedUserGuard
  ],
})
export class UsersModule { }
