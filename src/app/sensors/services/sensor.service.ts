import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { AuthService, AbstractFirebaseService } from '../../shared/services';
import { Sensor } from '../models';


@Injectable()
export class SensorService extends AbstractFirebaseService<Sensor> {
  constructor(
    protected angularFire: AngularFire,
    protected authService: AuthService
  ) {
    super(angularFire, authService);
  }

  get entityPath(): string {
    return '/sensors';
  }

  getRoomSensors(queryRoomId): Observable<Sensor[]> {
    let roomSensors = [];
    return this.getList({
        query: {
          orderByChild: 'roomId',
          equalTo: queryRoomId
        }
      });
  };
}
