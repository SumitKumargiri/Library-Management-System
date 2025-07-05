import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisEmployeesComponent } from './lis-employees.component';

describe('LisEmployeesComponent', () => {
  let component: LisEmployeesComponent;
  let fixture: ComponentFixture<LisEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LisEmployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
