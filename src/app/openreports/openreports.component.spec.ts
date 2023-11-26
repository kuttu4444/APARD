import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenreportsComponent } from './openreports.component';

describe('OpenreportsComponent', () => {
  let component: OpenreportsComponent;
  let fixture: ComponentFixture<OpenreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
