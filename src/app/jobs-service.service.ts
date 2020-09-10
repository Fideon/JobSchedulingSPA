import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Job } from 'src/app/job.model';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private firestore: AngularFirestore) { }

  public jobsCount = 0;

  getJobs() {
    return this.firestore.collection('jobs').snapshotChanges();
  }

  createJob(job: Job){
    return this.firestore.collection('jobs').doc(job.id).set(job);
  }

  updateJob(job: Job){
    // delete job.id;
    this.firestore.doc('jobs/' + job.id).update(job);
  }

  deleteJob(jobId: number){
    this.firestore.doc('jobs/' + jobId).delete();
  }
}
