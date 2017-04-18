import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-calendar',
  templateUrl: './primeng-calendar.component.html',
  styleUrls: ['./primeng-calendar.component.css']
})
export class PrimengCalendarComponent implements OnInit {

  value: Date;

  constructor() { }

  ngOnInit() {
  }

}
