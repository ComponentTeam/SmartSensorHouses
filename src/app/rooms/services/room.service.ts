import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { AuthService, AbstractFirebaseService } from '../../shared/services';
import { Room } from '../models';


@Injectable()
export class RoomService extends AbstractFirebaseService<Room> {
  constructor(
    protected angularFire: AngularFire,
    protected authService: AuthService
  ) {
    super(angularFire, authService);
  }

  get housesPath(): string {
    return '/houses';
  }

  get entityPath(): string {
    return '/rooms';
  }

  getUserRooms(queryHouseId): Observable<Room[]> {
    let houseRooms = [];
    return this.getList({
        query: {
          orderByChild: 'houseId',
          equalTo: queryHouseId
        }
      });
      // .subscribe((rooms) => houseRooms.push(rooms));
      // // .map((roomRelations) => {
      // //   let houseRooms = [];

      // //   roomRelations.forEach((room) => {
      // //     houseRooms.push(room);
      // //   });

      //   return houseRooms;
      // });
  };
}
