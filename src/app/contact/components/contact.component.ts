import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { ToasterService } from 'angular2-toaster';
import { ContactService } from '../services';
import { Contact } from '../models';


@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      contactEmail: ['', [Validators.required]],
      question: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onContactFormSubmit() {
    let formControls = this.contactForm.controls;
    let contact = new Contact(
        formControls['firstName'].value,
        formControls['lastName'].value,
        formControls['contactEmail'].value,
        formControls['question'].value
    );

    this.contactService.create(contact)
      .then((data) => {
        this.toasterService.pop(
          'success',
          'Success',
          'You have successfully sent your question!'
        );
        this.router.navigate(['/']);
      })
      .catch((error) => {
        this.toasterService.pop(
          'error',
          'Error',
          'An unexpected error occured. Please try again later.')
        ;
        this.router.navigate(['/']);
      });
  }

  hasError(formField: string): boolean {
    let control: FormControl = <FormControl>this.contactForm.controls[formField];
    return control.touched && control.invalid;
  }
}
