import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ToasterModule } from 'angular2-toaster';
import { ContactComponent } from './components/contact.component';
import { ContactRoutingModule } from './contact-routing.module';

import { ContactService } from './services';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToasterModule,
    ContactRoutingModule,
  ],
  declarations: [ContactComponent],
  providers: [
    ContactService
  ]
})
export class ContactModule { }