import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccineInventory } from 'src/app/model/vaccine-inventory';
import { VaccineInventoryService } from 'src/app/services/vaccine-inventory.service';

@Component({
  selector: 'app-update-vaccine-inventory',
  templateUrl: './update-vaccine-inventory.component.html',
  styleUrls: ['./update-vaccine-inventory.component.css']
})
export class UpdateVaccineInventoryComponent implements OnInit {
  id: number = 0;
  inventory : VaccineInventory = new VaccineInventory();
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router, 
    private inventoryService : VaccineInventoryService ) { }

  ngOnInit(): void {
    
    this.inventory = new VaccineInventory();

    this.id = this.route.snapshot.params['id'];
    this.inventoryService.getVaccineInventory(this.id)
    .subscribe(data => {
      console.log(data)
      this.inventory = data;
    }, error => console.log(error));
  }

  updateVaccineInventory() {
    this.inventoryService.updateVaccineInventory(this.id, this.inventory)
      .subscribe(data => {
        console.log(data);
        this.inventory = new VaccineInventory();
        this.gotoList();
      }, error => console.log(error));
    }
      onSubmit() {
        this.submitted = true;
        this.updateVaccineInventory();    
      }
  
    
      gotoList() {
        this.router.navigate(['/inventories']);
      }
  }



