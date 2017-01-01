import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HouseService } from '../../services';
import { House } from '../../models';

@Component({
  selector: 'house',
  templateUrl: './house-list.component.html',
})
export class HouseListComponent {
  userHouses: Observable<House[]>;

  constructor(private houseService: HouseService) {
    this.userHouses = this.houseService.getUserHouses();
  }
}