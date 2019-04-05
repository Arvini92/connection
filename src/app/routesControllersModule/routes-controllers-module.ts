import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControllersCircleModule } from './controllers-circle/controllers-circle.module';
import { MiddleFormModule } from './middle-form/middle-form..module';
import { DialogModule } from './dialog/dialog.module';
import { RoutesControllersComponent } from './routes-controllers/routes-controllers.component';

@NgModule({
    declarations: [
        RoutesControllersComponent
    ],
    exports: [
        RoutesControllersComponent
    ],
    imports: [
        CommonModule,
        ControllersCircleModule,
        MiddleFormModule,
        DialogModule
    ]
  })
  export class RoutesControllersModule { }