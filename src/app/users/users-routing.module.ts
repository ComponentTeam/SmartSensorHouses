import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInFormComponent, SignUpFormComponent } from './components';
import { CanActivateUnauthenticatedUserGuard } from './guards';


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