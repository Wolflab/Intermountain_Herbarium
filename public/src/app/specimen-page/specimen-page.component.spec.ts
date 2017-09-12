import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecimenPageComponent } from './specimen-page.component';

describe('SpecimenPageComponent', () => {
  let component: SpecimenPageComponent;
  let fixture: ComponentFixture<SpecimenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecimenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecimenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
