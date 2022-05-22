import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVaccineInventoryComponent } from './components/inventory-components/create-vaccine-inventory/create-vaccine-inventory.component';
import { UpdateVaccineInventoryComponent } from './components/inventory-components/update-vaccine-inventory/update-vaccine-inventory.component';
import { VaccineInventoryDetailsComponent } from './components/inventory-components/vaccine-inventory-details/vaccine-inventory-details.component';
import { VaccineInventoryListComponent } from './components/inventory-components/vaccine-inventory-list/vaccine-inventory-list.component';


const routes: Routes = [
{ path: '', redirectTo: 'inventories', pathMatch: 'full' },
{ path: 'new', component: CreateVaccineInventoryComponent },
{path : 'inventories',component : VaccineInventoryListComponent},
{path : 'update/:id', component : UpdateVaccineInventoryComponent},
{path : 'details/:id', component : VaccineInventoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
