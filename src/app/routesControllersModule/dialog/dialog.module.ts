import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material';


@NgModule({
    declarations: [
        DialogComponent
    ],
    exports: [
        DialogComponent,
        MatDialogModule
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule
    ]
  })
  export class DialogModule { }