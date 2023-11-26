import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityHealthComponent } from './activity-health.component';

describe('ActivityHealthComponent', () => {
  let component: ActivityHealthComponent;
  let fixture: ComponentFixture<ActivityHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
