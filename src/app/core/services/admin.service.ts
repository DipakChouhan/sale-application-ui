import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient ) {
  }

  getVehicleList() {
    return this.httpClient.get("http://localhost:8082/user/getAllCarDetails?pageNo=0&pageSize=100");
  }
  dummyApiCall() {
    return this.httpClient.get("http://localhost:8082/user/dummyApiCall");
  }

  saveNewVehicleImages(formData: any) {
    return this.httpClient.post("http://localhost:8082/admin/saveNewVehicleImages", formData);
  }

  saveNewVehicle(vehicleModel: any) {
    return this.httpClient.post("http://localhost:8082/admin/saveNewVehicle", vehicleModel);
  }
}
