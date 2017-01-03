import { Component} from '@angular/core';
//import {  OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { RoomService } from '../../services';
import { Room } from '../../models';

@Component({
  selector: 'house',
  templateUrl: './house-list.component.html',
})
export class RoomListComponent {//implements OnInit {
  userRooms: Observable<Room[]>;
  userHouseId: number;

  constructor(
    private service: RoomService,
    //private route: ActivatedRoute,
    //private router: Router
  ) {
    this.userRooms = this.service.getUserRooms('myRoom');
  }

  // ngOnInit() {
  //   this.userRooms = this.route.params
  //     .switchMap((params: Params) => {
  //       this.userHouseId = params['houseId'];
  //       return this.service.getUserRooms(this.userHouseId);
  //     });
  // }
}