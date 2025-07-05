import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeregisterComponent } from './employeeregister.component';

describe('EmployeeregisterComponent', () => {
  let component: EmployeeregisterComponent;
  let fixture: ComponentFixture<EmployeeregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
