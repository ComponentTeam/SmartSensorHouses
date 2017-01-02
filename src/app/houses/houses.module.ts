import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import {
  CanActivateAuthenticatedUserGuard,
  CanActivateUnauthenticatedUserGuard
} from '../shared/guards';
import { HouseListComponent } from './components';
import { HouseService } from './services';

import { HousesRoutingModule } from './houses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HousesRoutingModule
  ],
  declarations: [
    HouseListComponent
  ],
  providers: [
    HouseService,
    // CanActivateAuthenticatedUserGuard,
    // CanActivateUnauthenticatedUserGuard
  ],
})
export class HousesModule { }
