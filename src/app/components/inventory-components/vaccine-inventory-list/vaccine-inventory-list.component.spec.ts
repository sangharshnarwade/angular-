import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineInventoryListComponent } from './vaccine-inventory-list.component';

describe('VaccineInventoryListComponent', () => {
  let component: VaccineInventoryListComponent;
  let fixture: ComponentFixture<VaccineInventoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineInventoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineInventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
