import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerlayoutComponent } from './jobseekerlayout.component';

describe('JobseekerlayoutComponent', () => {
  let component: JobseekerlayoutComponent;
  let fixture: ComponentFixture<JobseekerlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobseekerlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
