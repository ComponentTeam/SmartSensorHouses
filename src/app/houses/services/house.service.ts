import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { AuthService, AbstractFirebaseService } from '../../shared/services';
import { House } from '../models';


@Injectable()
export class HouseService extends AbstractFirebaseService<House> {
  private userHouseRelationsList: FirebaseListObservable<any[]>;

  constructor(
    protected angularFire: AngularFire,
    protected authService: AuthService
  ) {
    super(angularFire, authService);

    this.userHouseRelationsList = this.angularFire.database
      .list(`/users/${this.authService.userId}/houses`);
  }

  get entityPath(): string {
    return `/houses`;
  }

  create(house: House) {
    house['users'] = {
      [this.authService.userId]: true
    };

    let createdHouse = super.create(house);

    // Set the newly created house to the user
    this.userHouseRelationsList
      .$ref
      .child(createdHouse['key'])
      .set(true);

    return createdHouse;
  }

  delete(house: House) {
    this.userHouseRelationsList.remove(house['$key']);
    // TODO: Remove house rooms and sensors

    return super.delete(house);
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
