import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobSchedulingPageComponent } from './job-scheduling-page/job-scheduling-page.component';
import { JobSchedulingPageTableComponent } from './job-scheduling-page-table/job-scheduling-page-table.component';
import { JobSchedulingPageAddnewComponent } from './job-scheduling-page-addnew/job-scheduling-page-addnew.component';

@NgModule({
  declarations: [
    AppComponent,
    JobSchedulingPageComponent,
    JobSchedulingPageTableComponent,
    JobSchedulingPageAddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
