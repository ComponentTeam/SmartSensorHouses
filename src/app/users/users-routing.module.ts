import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  SignInFormComponent,
  SignUpFormComponent,
} from './components';
// import {
//     HouseListComponent,
// } from '../houses/components';
import {
  CanActivateAuthenticatedUserGuard,
  CanActivateUnauthenticatedUserGuard
} from './guards';


const usersRoutes: Routes = [
  {
    path: 'users/sign-in',
    component: SignInFormComponent,
    canActivate: [CanActivateUnauthenticatedUserGuard]
  },
  {
    path: 'users/sign-up',
    component: SignUpFormComponent,
    canActivate: [CanActivateUnauthenticatedUserGuard]
  },
  // {
  //   path: 'houses',
  //   component: HouseListComponent,
  //   canActivate: [CanActivateAuthenticatedUserGuard]
  // },
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }