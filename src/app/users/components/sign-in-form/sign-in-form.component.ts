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

import { AuthService } from '../../../shared/services';


@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html'
})
export class SignInFormComponent implements OnInit {
  @Output() public formSubmit: EventEmitter<FormGroup>;

  signInForm: FormGroup;
  authError: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.formSubmit = new EventEmitter<FormGroup>();
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSignInFormSubmit() {
    this.formSubmit.emit(this.signInForm);

    let formControls = this.signInForm.controls;
    this.authService.signIn(formControls['email'].value, formControls['password'].value)
      .then((data) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        this.authError = error.message;
      });
  }

  hasError(formField: string): boolean {
    let control: FormControl = <FormControl>this.signInForm.controls[formField];
    return control.touched && control.invalid;
  }
}
