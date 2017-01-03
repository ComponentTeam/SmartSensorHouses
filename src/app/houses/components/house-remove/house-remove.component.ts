import {
  Component,
  AfterViewInit,
  EventEmitter,
  ViewChild,
  Input,
  Output
} from '@angular/core';

import { Modal, ModalContent } from 'ng2-modal';
import { House } from '../../models';


@Component({
  selector: 'house-remove',
  templateUrl: './house-remove.component.html'
})
export class HouseRemoveComponent implements AfterViewInit {
  @ViewChild('houseRemoveModal') removeModal: Modal;
  @Input() removeHouse: House;
  @Output() houseRemoveModalInit: EventEmitter<Modal>;
  @Output() houseRemoveButtonPressed: EventEmitter<boolean>;

  constructor() {
    this.houseRemoveModalInit = new EventEmitter<Modal>();
    this.houseRemoveButtonPressed = new EventEmitter<boolean>();
  }

  ngAfterViewInit() {
    this.houseRemoveModalInit.emit(this.removeModal);
  }

  onRemoveButtonClick() {
    this.houseRemoveButtonPressed.emit(true);
  }
}
