import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerregisterComponent } from './jobseekerregister.component';

describe('JobseekerregisterComponent', () => {
  let component: JobseekerregisterComponent;
  let fixture: ComponentFixture<JobseekerregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobseekerregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
