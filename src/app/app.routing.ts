import { Routes } from "@angular/router";
import {PrimengCalendarComponent} from "./primeng-calendar/primeng-calendar.component";
import {GoJsComponent} from "./go-js/go-js.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "calendar",
    component: PrimengCalendarComponent,
  },{
    path: "go-js",
    component: GoJsComponent
  }
];
