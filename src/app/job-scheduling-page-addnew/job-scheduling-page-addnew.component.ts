import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from '../job.model';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/overlay-directives';
import { JobsService } from '../jobs-service.service';

@Component({
	selector: 'app-job-scheduling-page-addnew',
	templateUrl: './job-scheduling-page-addnew.component.html',
	styleUrls: ['./job-scheduling-page-addnew.component.scss']
})
export class JobSchedulingPageAddnewComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<JobSchedulingPageAddnewComponent>,private jobsService: JobsService, @Inject(MAT_DIALOG_DATA) public data: Job) { }

    pageTitle = "Add Job";
    isNewJob = true;
    
    @ViewChild("id") id: ElementRef;
    @ViewChild("title") title: ElementRef;
    @ViewChild("date") date: ElementRef;
    @ViewChild("timeHH") timeHH: ElementRef;
    @ViewChild("timeMM") timeMM: ElementRef;
    @ViewChild("timeAMPM") timeAMPM: ElementRef;
    @ViewChild("firstName") firstName: ElementRef;
    @ViewChild("lastName") lastName: ElementRef;
    @ViewChild("email") email: ElementRef;
    @ViewChild("empId") empId: ElementRef;
    @ViewChild("phone") phone: ElementRef;

	ngOnInit(): void {
        if (!this.isNewJob) {
            // TODO: Add logic to change pageTitle to Job Title.
        }

	}

	onClose() {
		this.dialogRef.close();
    }
    
    async onSave() {
        let job = new Job();

        job = this.mapJobValues(job)

        if (this.isNewJob) {
            await this.jobsService.createJob((JSON.parse(JSON.stringify(job))));
            this.onClose()
        }
    }

    mapJobValues(job: Job) {
        job.id = this.id.nativeElement.value;
        job.title = this.title.nativeElement.value;
        job.date.seconds = new Date(this.date.nativeElement.value + " " + this.timeHH.nativeElement.value + ":" + this.timeMM.nativeElement.value + " " + this.timeAMPM.nativeElement.value).getTime() / 1000; //Build the DateTime, and convert to seconds as is stored in Firebase.
        job.empFirstName = this.firstName.nativeElement.value;
        job.empLastName = this.lastName.nativeElement.value;
        job.empEmail = this.email.nativeElement.value;
        job.empId = this.empId.nativeElement.value;
        job.empPhone = this.phone.nativeElement.value.replace(/\D/g,''); //Strip all non-numeric characters.

        return job;
    }
}