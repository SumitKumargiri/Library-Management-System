import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedjobComponent } from './appliedjob.component';

describe('AppliedjobComponent', () => {
  let component: AppliedjobComponent;
  let fixture: ComponentFixture<AppliedjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppliedjobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
