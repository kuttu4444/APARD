import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerWelfareComponent } from './farmer-welfare.component';

describe('FarmerWelfareComponent', () => {
  let component: FarmerWelfareComponent;
  let fixture: ComponentFixture<FarmerWelfareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerWelfareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerWelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
