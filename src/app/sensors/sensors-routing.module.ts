import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensorListComponent } from './components';

import {
  CanActivateAuthenticatedUserGuard,
  CanActivateUnauthenticatedUserGuard
} from '../shared/guards';


const sensorsRoutes: Routes = [
  {
    path: 'sensors/sensor-list/:roomId',
    component: SensorListComponent,
    canActivate: [CanActivateAuthenticatedUserGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(sensorsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SensorsRoutingModule { }