import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControllersCircleComponent } from './controllers-circle.component';

import { MatIconModule } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@NgModule({
    declarations: [
        ControllersCircleComponent
    ],
    exports: [
        ControllersCircleComponent
    ],
    entryComponents: [
        DialogComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule
    ]
  })
  export class ControllersCircleModule { }