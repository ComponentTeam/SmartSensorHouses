import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInFormComponent } from './components';


const usersRoutes: Routes = [
  { path: 'users/sign-in', component: SignInFormComponent },
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