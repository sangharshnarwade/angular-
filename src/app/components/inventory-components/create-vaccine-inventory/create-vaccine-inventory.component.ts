import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaccineInventory } from 'src/app/model/vaccine-inventory';
import { VaccineInventoryService } from 'src/app/services/vaccine-inventory.service';

@Component({
  selector: 'app-create-vaccine-inventory',
  templateUrl: './create-vaccine-inventory.component.html',
  styleUrls: ['./create-vaccine-inventory.component.css']
})
export class CreateVaccineInventoryComponent implements OnInit {
  inventory : VaccineInventory = new VaccineInventory();
  submitted = false;
  constructor(private inventoryService : VaccineInventoryService, private router : Router) { }
  
  ngOnInit(): void {
  }
  newVaccineInventory(): void {
    this.submitted = false;
    this.inventory = new VaccineInventory();
  }
  save() {
    this.inventoryService.createVaccineInventory(this.inventory).subscribe(data => {
      console.log(data)
      this.inventory = new VaccineInventory();
      this.gotoList();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    return this.router.navigate(['/inventories']);
  }
}
