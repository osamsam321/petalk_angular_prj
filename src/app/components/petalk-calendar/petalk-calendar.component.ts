import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-petalk-calendar',
  templateUrl: './petalk-calendar.component.html',
  styleUrls: ['./petalk-calendar.component.css']
})
export class PetalkCalendarComponent implements OnInit {
  title = 'petalk_prj';
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
