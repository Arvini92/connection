import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiddleFormComponent } from './middle-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
} from '@angular/material';

@NgModule({
    declarations: [
        MiddleFormComponent
    ],
    exports: [
        MiddleFormComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatChipsModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        BrowserAnimationsModule
    ]
  })
  export class MiddleFormModule { }