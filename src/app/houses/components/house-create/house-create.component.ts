import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HouseService } from '../../services';
import { House } from '../../models';


@Component({
  selector: 'house-create',
  templateUrl: './house-create.component.html'
})
export class HouseCreateComponent {

  constructor(
    private houseService: HouseService,
    private router: Router
  ) { }

  onHouseFormSubmit(house: House) {
    this.houseService
      .create(house)
      .then((result) => {
        this.router.navigate(['/houses/list']);
      });
  }

}
