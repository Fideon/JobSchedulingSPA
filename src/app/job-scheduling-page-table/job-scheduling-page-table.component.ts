import { Component, OnInit } from '@angular/core';
import { JobsService } from './../jobs-service.service'
import { Job } from '../job.model';
import { JobView } from '../job-view.model';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { JobSchedulingPageAddnewComponent } from '../job-scheduling-page-addnew/job-scheduling-page-addnew.component';

@Component({
	selector: 'app-job-scheduling-page-table',
	templateUrl: './job-scheduling-page-table.component.html',
	styleUrls: ['./job-scheduling-page-table.component.scss']
})
export class JobSchedulingPageTableComponent implements OnInit {

	constructor(public dialog: MatDialog, private jobsService: JobsService) { }

	jobs: Job[];
    jobsViewModel: JobView[];

	ngOnInit(): void {
		this.jobsService.getJobs().subscribe(
			(result) => {
				this.jobs = result.map((e) => {
					return {
						id: e.payload.doc.id,
						...e.payload.doc.data() as Job
					}					
				})				
                this.mapResultToViewModel();
                this.jobsService.jobsCount = this.jobs.length;
			}
		);		
	}

	mapResultToViewModel() {
		this.jobsViewModel = this.jobs.map((e) => {
			return {
				id: e.id,
				title: e.title,
				date: moment(new Date(e.date.seconds * 1000)).format('L'),
				time: moment(new Date(e.date.seconds * 1000)).format('LTS'),
				empFirstName: e.empFirstName,
				empLastName: e.empLastName,
				empEmail: e.empEmail,
				empId: e.empId,
				empPhone: this.formatPhoneNumber(e.empPhone)				
			}
		})
    }

    editJob(job: Job) {
        const addNewDialog = this.dialog.open(JobSchedulingPageAddnewComponent, {
            width: '350px',
		    height: '750px',
            data: job
        });
    }
    
    deleteJob(jobId: number) {
        this.jobsService.deleteJob(jobId);
    }

	formatPhoneNumber(number: number) {
		var cleaned = ('' + number).replace(/\D/g, '')
  		var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  		if (match) {
    		return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  		}
  		return null
	}
}