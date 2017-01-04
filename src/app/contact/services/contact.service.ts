import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
  AngularFire
} from 'angularfire2';

import { AuthService, AbstractFirebaseService } from '../../shared/services';
import { Contact } from '../models';


@Injectable()
export class ContactService extends AbstractFirebaseService<Contact> {
  constructor(
    protected angularFire: AngularFire,
    protected authService: AuthService
  ) {
    super(angularFire, authService);
  }

  get entityPath(): string {
    return `/feedback`;
  }
}
