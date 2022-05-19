import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VaccineInventory } from '../model/vaccine-inventory';

@Injectable({
  providedIn: 'root'
})
export class VaccineInventoryService {
  private baseUrl = "http://localhost:8080/api/admin/Vaccine/Inventory";
  constructor(private http: HttpClient) { }
  
  createVaccineInventory (inv: Object) : Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/new`,inv);
  }
  getVaccineInventoriesList() : Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  getVaccineInventory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  updateVaccineInventory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
  deleteVaccineInventory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
