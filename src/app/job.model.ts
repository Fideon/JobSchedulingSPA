import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export class Job {
    id: number;
    title: string;
    date: timeStamp;
    empFirstName: string;
    empLastName: string;
    empEmail: string
    empId: number;
    empPhone: number;
}

class timeStamp {
    seconds: number;
    nanoseconds: number;
}