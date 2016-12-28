import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { ToasterService } from 'angular2-toaster';
import { UserService } from '../../services';


@Component({
  selector: 'sign-in-form',
  providers: [UserService],
  templateUrl: './sign-in-form.component.html'
})
export class SignInFormComponent implements OnInit {
  @Output() public formSubmit: EventEmitter<FormGroup>;

  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService
  ) {
    this.formSubmit = new EventEmitter<FormGroup>();
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSignInFormSubmit(submitEvent) {
    this.formSubmit.emit(this.signInForm);

    let formControls = this.signInForm.controls;
    this.userService.signIn(formControls['email'].value, formControls['password'].value)
      .then((data) => console.log(data))
      .catch((error) => {
        this.toasterService.pop('error', 'Authorization failed', error.message);
      });
  }

  hasSuccess(formField: string): boolean {
    let control: FormControl = <FormControl>this.signInForm.controls[formField];
    return control.touched && control.valid;
  }

  hasError(formField: string): boolean {
    let control: FormControl = <FormControl>this.signInForm.controls[formField];
    return control.touched && control.invalid;
  }
}
