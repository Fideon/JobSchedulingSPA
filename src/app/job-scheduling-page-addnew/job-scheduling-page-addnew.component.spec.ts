import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSchedulingPageAddnewComponent } from './job-scheduling-page-addnew.component';

describe('JobSchedulingPageAddnewComponent', () => {
  let component: JobSchedulingPageAddnewComponent;
  let fixture: ComponentFixture<JobSchedulingPageAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSchedulingPageAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSchedulingPageAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
