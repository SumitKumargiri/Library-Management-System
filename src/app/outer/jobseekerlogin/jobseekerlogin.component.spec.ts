import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerloginComponent } from './jobseekerlogin.component';

describe('JobseekerloginComponent', () => {
  let component: JobseekerloginComponent;
  let fixture: ComponentFixture<JobseekerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobseekerloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
