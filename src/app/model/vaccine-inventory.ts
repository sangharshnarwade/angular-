import { DatePipe } from "@angular/common";
import { VaccinationCenter } from "./vaccination-center";
import { Vaccine } from "./vaccine";


export class VaccineInventory {
    id: number = 0;
    date!: DatePipe;
    quantity : number = 0;
	  price  : number = 0.0;
    centerCode : number = 0;
    vaccineId : number = 0;
    // center!: VaccinationCenter;
    // vaccine!: Vaccine;
    
  //   VaccinationCenter!: {
  //   code : number;
  // };
  // constructor(public count! : VaccineCount, public center! : VaccinationCenter ){}
    // public getId() {
    //     return this.id;
    // }
    // public setId(id: number) {
    //     this.id = id;
    // }
    // public getCenter(): VaccinationCenter {
    //     return this.center;
    // }
    // public setCenter(center: VaccinationCenter) {
    //     this.center = center;
    // }
    // public getCount(): VaccineCount {
    //     return this.count;
    // }
    // public setCount(count: VaccineCount) {
    //     this.count = count;
    // }
}