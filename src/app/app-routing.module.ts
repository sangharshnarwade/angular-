import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVaccineInventoryComponent } from './components/inventory-components/create-vaccine-inventory/create-vaccine-inventory.component';
import { VaccineInventoryListComponent } from './components/inventory-components/vaccine-inventory-list/vaccine-inventory-list.component';


const routes: Routes = [{ path: 'new', component: CreateVaccineInventoryComponent },
{path : 'inventories',component : VaccineInventoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
