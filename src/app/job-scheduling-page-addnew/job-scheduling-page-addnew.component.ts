import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Job } from '../job.model';

@Component({
	selector: 'app-job-scheduling-page-addnew',
	templateUrl: './job-scheduling-page-addnew.component.html',
	styleUrls: ['./job-scheduling-page-addnew.component.scss']
})
export class JobSchedulingPageAddnewComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<JobSchedulingPageAddnewComponent>, @Inject(MAT_DIALOG_DATA) public data: Job) { }

	title = "Add Job";

	ngOnInit(): void {
	}

	onClose() {
		this.dialogRef.close();
    }
    
    onSave() {

    }
}
