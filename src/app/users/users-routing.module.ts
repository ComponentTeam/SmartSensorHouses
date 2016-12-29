import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInFormComponent } from './components';
import { CanActivateSignInGuard } from './guards';


const usersRoutes: Routes = [
  { path: 'users/sign-in', component: SignInFormComponent, canActivate: [CanActivateSignInGuard] },
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