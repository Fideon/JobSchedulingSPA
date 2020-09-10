import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobSchedulingPageAddnewComponent } from '../job-scheduling-page-addnew/job-scheduling-page-addnew.component';
import { JobsService } from './../jobs-service.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';
import * as moment from 'moment';
import { Job } from '../job.model';


@Component({
	selector: 'app-job-scheduling-page',
	templateUrl: './job-scheduling-page.component.html',
	styleUrls: ['./job-scheduling-page.component.scss']
})
export class JobSchedulingPageComponent implements OnInit {

    constructor(public dialog: MatDialog, private jobsService: JobsService, private snackBar: MatSnackBar) { }

    jobs: Job[];
    
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        eventClick: this.handleDateClick.bind(this),
        events: {}
      };

	ngOnInit(): void {
        this.jobsService.getJobs().subscribe(
			(result) => {
				this.jobs = result.map((e) => {
					return {
                        id: e.payload.doc.id,
						...e.payload.doc.data() as Job
					}
                })
                this.calendarOptions.events = this.buildCalendarVM(this.jobs);
			}
        );
	}

	openAddNewDialog() {
        if (this.jobsService.jobsCount < 10) {
		    this.dialog.open(JobSchedulingPageAddnewComponent, {
		    	width: '350px',
		    	height: '750px'
            });
        }
        else {
            this.snackBar.open("Maximum number of jobs reached (10)!")
        }
    }
    
    handleDateClick(eventClickInfo: EventClickArg) {
        const jobSelected: any = this.jobs.find(job => job.id == eventClickInfo.event.id)
        const jobSelectedDateTime = jobSelected.date;
        jobSelected.date = moment(new Date(jobSelectedDateTime.seconds * 1000)).format('L'),
        jobSelected.time = moment(new Date(jobSelectedDateTime.seconds * 1000)).format('LTS'),
        this.dialog.open(JobSchedulingPageAddnewComponent, {
            width: '350px',
            height: '750px',
            data: jobSelected
        });
    }

    buildCalendarVM(jobs: Job[]) {
        let calendarVM: jobCalendarVM[]

        calendarVM = jobs.map((e) => {
            return {
                id: e.id,
                title: e.title,
                date: moment(new Date(e.date.seconds * 1000)).format('YYYY-MM-DD')
            }
        })
        return calendarVM;
    }
}

class jobCalendarVM {
    id: string
    title: string;
    date: string;
}
