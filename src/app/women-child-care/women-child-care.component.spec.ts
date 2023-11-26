import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenChildCareComponent } from './women-child-care.component';

describe('WomenChildCareComponent', () => {
  let component: WomenChildCareComponent;
  let fixture: ComponentFixture<WomenChildCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenChildCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenChildCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
