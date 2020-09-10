import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from '../job.model';
import { JobsService } from '../jobs-service.service';
import { Guid } from "guid-typescript";

@Component({
	selector: 'app-job-scheduling-page-addnew',
	templateUrl: './job-scheduling-page-addnew.component.html',
	styleUrls: ['./job-scheduling-page-addnew.component.scss']
})
export class JobSchedulingPageAddnewComponent implements OnInit, AfterViewInit {

	constructor(public dialogRef: MatDialogRef<JobSchedulingPageAddnewComponent>,private jobsService: JobsService, @Inject(MAT_DIALOG_DATA) public data: Job) { }

    pageTitle = "Add Job";
    titleError = false;
    empIdError = false;
    emailError = false;
    today = new Date();
    
    @ViewChild("form") form: ElementRef;
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
        this.today.setMinutes(0);
        this.today.setSeconds(0);

        if (this.data) {
            this.pageTitle = "Edit " + this.data.title;
        }
    }
    
    ngAfterViewInit(): void {
        if (this.data) {
            this.mapDataToView(this.data);
        }
    }

	onClose() {
		this.dialogRef.close();
    }
    
    async onSave() {
        let job = new Job();

        job = this.mapJobValues(job)

        this.validateForm();
        if (!this.titleError && !this.empIdError && !this.emailError) {
            if (this.data) {   
                await this.jobsService.updateJob((JSON.parse(JSON.stringify(job))));
            }
            else {
                await this.jobsService.createJob((JSON.parse(JSON.stringify(job))));
            }
            this.onClose()
        }
    }

    mapJobValues(job: Job) {
        job.id = this.data ? this.data.id : Guid.create().toString();
        job.title = this.title.nativeElement.value;
        job.date.seconds = this.date.nativeElement.value ? new Date(this.date.nativeElement.value + " " + this.timeHH.nativeElement.value + ":" + this.timeMM.nativeElement.value + " " + this.timeAMPM.nativeElement.value).getTime() / 1000 : this.today.getTime() / 1000; //Build the DateTime, and convert to seconds as is stored in Firebase.
        job.empFirstName = this.firstName.nativeElement.value;
        job.empLastName = this.lastName.nativeElement.value;
        job.empEmail = this.email.nativeElement.value;
        job.empId = this.empId.nativeElement.value;
        job.empPhone = this.phone.nativeElement.value.replace(/\D/g,''); //Strip all non-numeric characters.

        return job;
    }

    mapDataToView(job: any) {
        this.title.nativeElement.value = job.title;
        this.date.nativeElement.value = job.date;
        const splitTime = job.time.split(":");
        this.timeHH.nativeElement.value = splitTime[0];
        this.timeMM.nativeElement.value = splitTime[1];
        this.timeAMPM.nativeElement.value = splitTime[2].split(" ")[1];
        this.firstName.nativeElement.value = job.empFirstName;
        this.lastName.nativeElement.value = job.empLastName;
        this.email.nativeElement.value = job.empEmail;
        this.empId.nativeElement.value = job.empId;
        this.phone.nativeElement.value = job.empPhone;
    }

    validateForm() {
        this.titleError = !this.title.nativeElement.validity.valid;
        this.empIdError = !this.empId.nativeElement.validity.valid;
        this.emailError = !this.email.nativeElement.validity.valid;
    }
}