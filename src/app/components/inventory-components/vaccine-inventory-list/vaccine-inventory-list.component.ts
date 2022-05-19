import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VaccineInventory } from 'src/app/model/vaccine-inventory';
import { VaccineInventoryService } from 'src/app/services/vaccine-inventory.service';

@Component({
  selector: 'app-vaccine-inventory-list',
  templateUrl: './vaccine-inventory-list.component.html',
  styleUrls: ['./vaccine-inventory-list.component.css']
})
export class VaccineInventoryListComponent implements OnInit {
  inventories!: Observable<VaccineInventory[]>;
  constructor(private inventoryService : VaccineInventoryService, private router : Router){ }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
  this.inventories = this.inventoryService.getVaccineInventoriesList();
  }
  deleteVaccineInventory(id: number) {
    this.inventoryService.deleteVaccineInventory(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateVaccineInventory(id: number) {
    this.router.navigate(['/update', id]);
  }

  vaccineInventoryDetails(id: number){
    this.router.navigate(['/details', id]);
  }

}
