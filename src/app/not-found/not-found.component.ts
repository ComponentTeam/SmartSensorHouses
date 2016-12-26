import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  notFoundImageUrl: string = '/assets/img/not-found.png';
}
