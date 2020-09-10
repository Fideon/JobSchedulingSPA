import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export class Job {
    id: number;
    title: string;
    date = new timeStamp();
    empFirstName: string;
    empLastName: string;
    empEmail: string
    empId: number;
    empPhone: number;
}

class timeStamp {
    seconds = 0;
    nanoseconds = 0;
}