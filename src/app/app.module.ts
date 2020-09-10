import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { JobSchedulingPageComponent } from './job-scheduling-page/job-scheduling-page.component';
import { JobSchedulingPageTableComponent } from './job-scheduling-page-table/job-scheduling-page-table.component';
import { JobSchedulingPageAddnewComponent } from './job-scheduling-page-addnew/job-scheduling-page-addnew.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxMaskModule } from 'ngx-mask'

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
    dayGridPlugin,
    interactionPlugin
  ]);
  

@NgModule({
  declarations: [
    AppComponent,
    JobSchedulingPageComponent,
    JobSchedulingPageTableComponent,
    JobSchedulingPageAddnewComponent
  ],
  entryComponents: [
    JobSchedulingPageAddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot(),
    FullCalendarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
