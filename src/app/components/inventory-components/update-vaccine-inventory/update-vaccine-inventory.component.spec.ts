import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVaccineInventoryComponent } from './update-vaccine-inventory.component';

describe('UpdateVaccineInventoryComponent', () => {
  let component: UpdateVaccineInventoryComponent;
  let fixture: ComponentFixture<UpdateVaccineInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVaccineInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVaccineInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
