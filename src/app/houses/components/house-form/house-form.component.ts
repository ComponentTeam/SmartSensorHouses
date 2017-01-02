import { Observable } from 'rxjs/Observable';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { House } from '../../models';


@Component({
  selector: 'house-form',
  templateUrl: './house-form.component.html',
})
export class HouseFormComponent implements OnInit {
  @Input() initiate: House;
  @Input() formHeading: string = 'House form';
  @Input() formButtonTitle: string = 'Submit';
  @Output() houseFormSubmit: EventEmitter<House>;

  createHouseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.houseFormSubmit = new EventEmitter<House>();
  }

  ngOnInit() {
    this.createHouseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      location: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onCreateHouseFormSubmit(event: any) {
    event.preventDefault();

    let controls = this.createHouseForm.controls;
    let house: House = new House(
      controls['name'].value,
      controls['description'].value,
      controls['location'].value
    );

    this.houseFormSubmit.emit(house);
  }

  hasError(formField: string): boolean {
    let control: FormControl = <FormControl>this.createHouseForm.controls[formField];
    return control.touched && control.invalid;
  }
}