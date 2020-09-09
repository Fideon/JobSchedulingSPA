import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSchedulingPageComponent } from './job-scheduling-page.component';

describe('JobSchedulingPageComponent', () => {
  let component: JobSchedulingPageComponent;
  let fixture: ComponentFixture<JobSchedulingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSchedulingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSchedulingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
