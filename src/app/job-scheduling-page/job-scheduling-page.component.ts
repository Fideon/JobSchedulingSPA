import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobSchedulingPageAddnewComponent } from '../job-scheduling-page-addnew/job-scheduling-page-addnew.component';
import { JobsService } from './../jobs-service.service'

@Component({
	selector: 'app-job-scheduling-page',
	templateUrl: './job-scheduling-page.component.html',
	styleUrls: ['./job-scheduling-page.component.scss']
})
export class JobSchedulingPageComponent implements OnInit {

	constructor(public dialog: MatDialog, private jobsService: JobsService) { }

	ngOnInit(): void {
	}

	openAddNewDialog() {
        if (this.jobsService.jobsCount < 10) {
		    const addNewDialog = this.dialog.open(JobSchedulingPageAddnewComponent, {
		    	width: '350px',
		    	height: '750px'
            });
        }
        else {
            alert("Maximum number of jobs reached (10). Delete a job to add more.");
        }
	}
}
