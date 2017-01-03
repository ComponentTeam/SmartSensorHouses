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
  HouseListComponent,
  HouseFormComponent,
  HouseCreateComponent,
  HouseUpdateComponent,
  HouseRemoveComponent
} from './components';

import { HouseService } from './services';

import { HousesRoutingModule } from './houses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    SharedModule,
    HousesRoutingModule
  ],
  declarations: [
    HouseListComponent,
    HouseFormComponent,
    HouseCreateComponent,
    HouseUpdateComponent,
    HouseRemoveComponent
  ],
  providers: [
    HouseService,
    // CanActivateAuthenticatedUserGuard,
    // CanActivateUnauthenticatedUserGuard
  ],
})
export class HousesModule { }
