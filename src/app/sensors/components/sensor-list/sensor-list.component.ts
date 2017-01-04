import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { SensorService } from '../../services';
import { Sensor } from '../../models';

@Component({
  selector: 'sensors',
  templateUrl: './sensor-list.component.html',
})
export class SensorListComponent implements OnInit {
  roomSensors: Observable<Sensor[]>;
  roomId: string;

  constructor(
    private service: SensorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.roomSensors = this.route.params
      .switchMap((params: Params) => {
        this.roomId = params['roomId'];
        return this.service.getRoomSensors(this.roomId);
      });
  }
}