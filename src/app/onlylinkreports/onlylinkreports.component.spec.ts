import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlylinkreportsComponent } from './onlylinkreports.component';

describe('OnlylinkreportsComponent', () => {
  let component: OnlylinkreportsComponent;
  let fixture: ComponentFixture<OnlylinkreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlylinkreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlylinkreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
