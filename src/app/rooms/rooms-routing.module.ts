import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  RoomListComponent
} from './components';

import {
  CanActivateAuthenticatedUserGuard,
  CanActivateUnauthenticatedUserGuard
} from '../shared/guards';


const roomsRoutes: Routes = [
  {
    path: 'rooms/room-list/:houseId',
    component: RoomListComponent,
    canActivate: [CanActivateAuthenticatedUserGuard]
  },
  // {
  //   path: 'rooms/room-list/:houseId',
  //   component: RoomListComponent,
  //   canActivate: [CanActivateAuthenticatedUserGuard]
  // },
];

@NgModule({
  imports: [
    RouterModule.forChild(roomsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoomsRoutingModule { }