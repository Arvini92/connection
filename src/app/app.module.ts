import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RoutesControllersModule } from './routesControllersModule/routes-controllers-module';
import { RoutesControllersComponent } from './routesControllersModule/routes-controllers/routes-controllers.component';

const appRoutes: Routes = [
  { path: '', component: RoutesControllersComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutesControllersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
