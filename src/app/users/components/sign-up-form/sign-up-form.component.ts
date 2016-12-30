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
import { Router } from '@angular/router';

import { ToasterService } from 'angular2-toaster';
import { AuthService } from '../../../shared/services';


@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html'
})
export class SignUpFormComponent implements OnInit {
  @Output() public formSubmit: EventEmitter<FormGroup>;

  signUpForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toasterService: ToasterService
  ) {
    this.formSubmit = new EventEmitter<FormGroup>();
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSignUpFormSubmit() {
    this.formSubmit.emit(this.signUpForm);

    let formControls = this.signUpForm.controls;
    this.authService.register(formControls['email'].value, formControls['password'].value)
      .then((data) => {
        this.router.navigate(['/']);
        this.toasterService.pop('success', 'Success', 'You have successfully registered!');
      })
      .catch((error) => {
        this.router.navigate(['/']);
        this.toasterService.pop(
          'warning',
          'Unexpected error',
          'There was a problem registering your account. Please try again later.'
        );
      });
  }

  hasError(formField: string): boolean {
    let control: FormControl = <FormControl>this.signUpForm.controls[formField];
    return control.touched && control.invalid;
  }
}
