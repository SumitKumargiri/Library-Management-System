import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsheaderComponent } from './jsheader.component';

describe('JsheaderComponent', () => {
  let component: JsheaderComponent;
  let fixture: ComponentFixture<JsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
