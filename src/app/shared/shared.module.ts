import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services';

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [],
    providers: [AuthService],
})
export class SharedModule { }
