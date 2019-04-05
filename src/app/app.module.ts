import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RoutesControllersModule } from './routesControllersModule/routes-controllers-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutesControllersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
