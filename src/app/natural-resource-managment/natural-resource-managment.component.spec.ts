import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalResourceManagmentComponent } from './natural-resource-managment.component';

describe('NaturalResourceManagmentComponent', () => {
  let component: NaturalResourceManagmentComponent;
  let fixture: ComponentFixture<NaturalResourceManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalResourceManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalResourceManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
