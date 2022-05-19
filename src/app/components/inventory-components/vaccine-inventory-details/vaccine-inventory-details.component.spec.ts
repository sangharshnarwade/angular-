import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineInventoryDetailsComponent } from './vaccine-inventory-details.component';

describe('VaccineInventoryDetailsComponent', () => {
  let component: VaccineInventoryDetailsComponent;
  let fixture: ComponentFixture<VaccineInventoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineInventoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineInventoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
