import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FirebaseObjectObservable } from 'angularfire2';

import { HouseService } from '../../services';
import { House } from '../../models';


@Component({
  selector: 'house-update',
  templateUrl: './house-update.component.html'
})
export class HouseUpdateComponent {
  private house: FirebaseObjectObservable<House>;

  constructor(
    private houseService: HouseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params => {
      this.house = this.houseService.get(params['houseId'])
    });
  }

  onHouseFormSubmit(updatedHouse: House) {
    this.house.subscribe((initialHouseForUpdate: House) => {
      this.houseService
        .update(initialHouseForUpdate, updatedHouse)
        .then((result) => {
          window.location.href = 'http://localhost:3000/houses/list';
        });
    });
  }

}
