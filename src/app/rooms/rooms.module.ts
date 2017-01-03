import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import {
  CanActivateAuthenticatedUserGuard,
  CanActivateUnauthenticatedUserGuard
} from '../shared/guards';
import { RoomListComponent } from './components';
import { RoomService } from './services';

import { RoomsRoutingModule } from './rooms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RoomsRoutingModule
  ],
  declarations: [
    RoomListComponent
  ],
  providers: [
    RoomService,
    CanActivateAuthenticatedUserGuard,
    CanActivateUnauthenticatedUserGuard
  ],
})
export class RoomsModule { }
