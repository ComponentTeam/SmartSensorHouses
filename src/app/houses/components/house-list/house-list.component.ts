import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HouseService } from '../../services';
import { House } from '../../models';

import { Modal } from 'ng2-modal';


@Component({
  selector: 'houses-list',
  templateUrl: './house-list.component.html',
})
export class HouseListComponent {
  userHouses: Observable<House[]>;
  removeHouseModal: Modal;
  selectedHouseForRemoval: House;

  constructor(private houseService: HouseService) {
    this.userHouses = this.houseService.getUserHouses();
  }

  onHouseRemoveButtonClick(house: House) {
    this.selectedHouseForRemoval = house;
    this.removeHouseModal.open();
  }

  onModalHouseRemoveInit(removeHouseModal: Modal) {
    this.removeHouseModal = removeHouseModal;
  }

  onModalHouseRemoveButtonPressed() {
    this.houseService.delete(this.selectedHouseForRemoval)
      .then((result) => {
        this.removeHouseModal.close();
      });
  }
}
