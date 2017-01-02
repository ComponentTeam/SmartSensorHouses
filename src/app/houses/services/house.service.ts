import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { AuthService, AbstractFirebaseService } from '../../shared/services';
import { House } from '../models';


@Injectable()
export class HouseService extends AbstractFirebaseService<House> {

  constructor(
    protected angularFire: AngularFire,
    protected authService: AuthService
  ) {
    super(angularFire, authService);
  }

  get entityPath(): string {
    return `/houses`;
  }

  getUserHouses(): Observable<House[]> {
    return this.angularFire.database
      .list(`/users/${this.authService.userId}/houses`)
      .map((houseRelations) => {
        let userHouses = [];

        houseRelations.forEach((houseRelation) => {
          this.angularFire.database
            .object(`${this.entityPath}/${houseRelation.$key}`)
            .subscribe((house) => userHouses.push(house));
        });

        return userHouses;
      });
  }
}
