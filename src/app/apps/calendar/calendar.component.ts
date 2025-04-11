import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { WorkingScheduleComponent } from './working-schedule/working-schedule.component';

@Component({
    selector: 'app-calendar',
    imports: [RouterLink, FullCalendarModule, WorkingScheduleComponent],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

    // Calendar
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        dayMaxEvents: true, // when too many events in a day, show the popover
        weekends: true,
        events: [
            {
                title: 'Annual Conference 2025',
                date: '2025-09-01'
            },
            {
                title: 'Product Lunch Webinar 2025 & Meet With Trezo Angular',
                start: '2025-09-09',
                end: '2025-09-10'
            },
            {
                title: 'Tech Summit 2025',
                date: '2025-09-14'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-09-17'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2025-09-26'
            },
            {
                title: 'Meeting with Developers',
                date: '2025-09-30'
            },
            {
                title: 'Annual Conference 2025',
                date: '2025-10-10'
            },
            {
                title: 'Product Lunch Webinar 2025 & Meet With Trezo Angular',
                start: '2025-10-14',
                end: '2025-10-16'
            },
            {
                title: 'Tech Summit 2025',
                date: '2025-10-24'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2025-10-26'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-10-28'
            },
            {
                title: 'Annual Conference 2025',
                date: '2025-11-21'
            },
            {
                title: 'Product Lunch Webinar 2025 & Meet With Trezo Angular',
                start: '2025-11-05',
                end: '2025-11-08'
            },
            {
                title: 'Tech Summit 2025',
                date: '2025-11-14'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-11-17'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2025-11-26'
            },
            {
                title: 'Meeting with Developers',
                date: '2025-11-30'
            },
            {
                title: 'Annual Conference 2025',
                date: '2025-12-05'
            },
            {
                title: 'Product Lunch Webinar 2025 & Meet With Trezo Angular',
                start: '2025-12-09',
                end: '2025-12-11'
            },
            {
                title: 'Tech Summit 2025',
                date: '2025-12-20'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2025-12-26'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-12-29'
            },
            {
                title: 'Web Development Seminar',
                date: '2026-02-10'
            },
            {
                title: 'Web Development Seminar',
                date: '2026-02-15'
            },
            {
                title: 'Web Development Seminar',
                date: '2026-02-20'
            }
        ],
        plugins: [dayGridPlugin]
    };

}