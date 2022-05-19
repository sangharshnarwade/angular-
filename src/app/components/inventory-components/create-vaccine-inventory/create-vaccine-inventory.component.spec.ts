import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVaccineInventoryComponent } from './create-vaccine-inventory.component';

describe('CreateVaccineInventoryComponent', () => {
  let component: CreateVaccineInventoryComponent;
  let fixture: ComponentFixture<CreateVaccineInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVaccineInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVaccineInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
