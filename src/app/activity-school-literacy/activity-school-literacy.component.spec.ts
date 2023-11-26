import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySchoolLiteracyComponent } from './activity-school-literacy.component';

describe('ActivitySchoolLiteracyComponent', () => {
  let component: ActivitySchoolLiteracyComponent;
  let fixture: ComponentFixture<ActivitySchoolLiteracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySchoolLiteracyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySchoolLiteracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
