import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    HouseListComponent
} from './components';
 import {
   CanActivateAuthenticatedUserGuard,
   CanActivateUnauthenticatedUserGuard
 } from '../shared/guards';


const usersRoutes: Routes = [
  {
    path: 'houses/house-list',
    component: HouseListComponent,
    canActivate: [CanActivateAuthenticatedUserGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HousesRoutingModule { }