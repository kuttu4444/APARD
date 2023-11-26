import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkvideosComponent } from './linkvideos.component';

describe('LinkvideosComponent', () => {
  let component: LinkvideosComponent;
  let fixture: ComponentFixture<LinkvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
