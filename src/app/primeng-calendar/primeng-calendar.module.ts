import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimengCalendarComponent} from "./primeng-calendar.component";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "primeng/components/common/shared";

@NgModule({
  imports: [

    CommonModule,
    CalendarModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PrimengCalendarComponent
  ],
  exports: [
    PrimengCalendarComponent
  ]
})
export class PrimengCalendarModule { }
