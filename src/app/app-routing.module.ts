import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSchedulingPageComponent } from 'src/app/job-scheduling-page/job-scheduling-page.component'


const routes: Routes = [{ path: '**', component: JobSchedulingPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
