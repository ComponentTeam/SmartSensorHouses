import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import {
  CanActivateAuthenticatedUserGuard,
  CanActivateUnauthenticatedUserGuard
} from '../shared/guards';
import { SensorListComponent } from './components';
import { SensorService } from './services';

import { SensorsRoutingModule } from './sensors-routing.module';
import { Last10DateKeysPipe } from '../shared/pipes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
   SensorsRoutingModule
  ],
  declarations: [
    SensorListComponent,
    Last10DateKeysPipe
  ],
  providers: [
    SensorService,
    CanActivateAuthenticatedUserGuard,
    CanActivateUnauthenticatedUserGuard
  ],
})
export class SensorsModule { }
