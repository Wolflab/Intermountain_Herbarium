import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReviewFormComponent } from './service-review-form.component';

describe('ServiceReviewFormComponent', () => {
  let component: ServiceReviewFormComponent;
  let fixture: ComponentFixture<ServiceReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceReviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
