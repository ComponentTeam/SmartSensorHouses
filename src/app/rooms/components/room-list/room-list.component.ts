import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { RoomService } from '../../services';
import { Room } from '../../models';

@Component({
  selector: 'rooms',
  templateUrl: './room-list.component.html',
})
export class RoomListComponent implements OnInit {
  houseRooms: Observable<Room[]>;
  userHouseId: string;

  constructor(
    private service: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.houseRooms = this.route.params
      .switchMap((params: Params) => {
        this.userHouseId = params['houseId'];
        return this.service.getHouseRooms(this.userHouseId);
      });
  }
}