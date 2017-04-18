import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PrimengCalendarModule} from "./primeng-calendar/primeng-calendar.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GoJsComponent } from './go-js/go-js.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routing";
import { HeaderComponent } from './header/header.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialRootModule} from "@angular/material";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GoJsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PrimengCalendarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialRootModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
