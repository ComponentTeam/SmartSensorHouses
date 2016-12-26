import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HeaderComponent,
  FooterComponent
} from './components';

@NgModule({
    imports: [CommonModule],
    exports: [HeaderComponent, FooterComponent],
    declarations: [HeaderComponent, FooterComponent],
    providers: [],
})
export class SharedModule { }
