import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    HouseListComponent
} from './components';
 import {
   CanActivateAuthenticatedUserGuard,
   CanActivateUnauthenticatedUserGuard
 } from '../users/guards';


const usersRoutes: Routes = [
  {
    path: 'houses/house-list',
    component: HouseListComponent,
    //canActivate: [CanActivateAuthenticatedUserGuard]
    //canActivate: [CanActivateAuthenticatedUserGuard]
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