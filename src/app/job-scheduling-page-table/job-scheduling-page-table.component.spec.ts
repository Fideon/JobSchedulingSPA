import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSchedulingPageTableComponent } from './job-scheduling-page-table.component';

describe('JobSchedulingPageTableComponent', () => {
  let component: JobSchedulingPageTableComponent;
  let fixture: ComponentFixture<JobSchedulingPageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSchedulingPageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSchedulingPageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
