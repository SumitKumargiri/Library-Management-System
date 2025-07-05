import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsdashboardComponent } from './jsdashboard.component';

describe('JsdashboardComponent', () => {
  let component: JsdashboardComponent;
  let fixture: ComponentFixture<JsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
