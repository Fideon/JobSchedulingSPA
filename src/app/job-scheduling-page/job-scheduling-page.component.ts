import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobSchedulingPageAddnewComponent } from '../job-scheduling-page-addnew/job-scheduling-page-addnew.component';


@Component({
	selector: 'app-job-scheduling-page',
	templateUrl: './job-scheduling-page.component.html',
	styleUrls: ['./job-scheduling-page.component.scss']
})
export class JobSchedulingPageComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
	}

	openAddNewDialog() {
		const addNewDialog = this.dialog.open(JobSchedulingPageAddnewComponent, {
			width: '300px',
			height: '750px'
		});
	}
}
