import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVaccineInventoryComponent } from './components/inventory-components/create-vaccine-inventory/create-vaccine-inventory.component';
import { VaccineInventoryDetailsComponent } from './components/inventory-components/vaccine-inventory-details/vaccine-inventory-details.component';
import { VaccineInventoryListComponent } from './components/inventory-components/vaccine-inventory-list/vaccine-inventory-list.component';
import { UpdateVaccineInventoryComponent } from './components/inventory-components/update-vaccine-inventory/update-vaccine-inventory.component';


@NgModule({
  declarations: [
    
    AppComponent,
   CreateVaccineInventoryComponent,
   VaccineInventoryDetailsComponent,
   VaccineInventoryListComponent,
   UpdateVaccineInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
