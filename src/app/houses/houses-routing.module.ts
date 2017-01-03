import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    HouseListComponent,
    HouseCreateComponent,
    HouseUpdateComponent
} from './components';
 import {
   CanActivateAuthenticatedUserGuard,
   CanActivateUnauthenticatedUserGuard
 } from '../shared/guards';


const usersRoutes: Routes = [
  {
    path: 'houses/list',
    component: HouseListComponent,
    canActivate: [CanActivateAuthenticatedUserGuard]

  },
  {
    path: 'houses/create',
    component: HouseCreateComponent,
    canActivate: [CanActivateAuthenticatedUserGuard]
  },
  {
    path: 'houses/update/:houseId',
    component: HouseUpdateComponent,
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