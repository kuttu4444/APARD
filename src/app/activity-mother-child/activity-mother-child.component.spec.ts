import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMotherChildComponent } from './activity-mother-child.component';

describe('ActivityMotherChildComponent', () => {
  let component: ActivityMotherChildComponent;
  let fixture: ComponentFixture<ActivityMotherChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityMotherChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityMotherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
