import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterimReportFormComponent } from './interim-report-form.component';

describe('InterimReportFormComponent', () => {
  let component: InterimReportFormComponent;
  let fixture: ComponentFixture<InterimReportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterimReportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterimReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
