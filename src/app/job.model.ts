export class Job {
    id: string;
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