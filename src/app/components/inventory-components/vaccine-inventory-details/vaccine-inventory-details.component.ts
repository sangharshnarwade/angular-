import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccineInventory } from 'src/app/model/vaccine-inventory';
import { VaccineInventoryService } from 'src/app/services/vaccine-inventory.service';

@Component({
  selector: 'app-vaccine-inventory-details',
  templateUrl: './vaccine-inventory-details.component.html',
  styleUrls: ['./vaccine-inventory-details.component.css']
})
export class VaccineInventoryDetailsComponent implements OnInit {
  id: number = 0;
  inventory: VaccineInventory = new VaccineInventory();
  constructor(private inventoryService: VaccineInventoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.inventory = new VaccineInventory();
    this.id = this.route.snapshot.params['id'];

    this.inventoryService.getVaccineInventory(this.id)
      .subscribe(data => {
        console.log(data)
        this.inventory = data;
      }, error => console.log(error));
  }
  list() {
    this.router.navigate(['inventories']);
  }

}

