import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsfooterComponent } from './jsfooter.component';

describe('JsfooterComponent', () => {
  let component: JsfooterComponent;
  let fixture: ComponentFixture<JsfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
