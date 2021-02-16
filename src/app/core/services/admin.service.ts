import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient ) {
  }

  getVehicleList() {
    return this.httpClient.get("https://18.188.123.203:8082/user/getAllCarDetails?pageNo=0&pageSize=1000000");
  }
  getComplaintsList() {
    return this.httpClient.get("https://18.188.123.203:8082/admin/getAllComplaints?pageNo=0&pageSize=1000000");
  }
  getAllSellRequests() {
    return this.httpClient.get("https://18.188.123.203:8082/admin/getAllSellCarRequests?pageNo=0&pageSize=1000000");
  }
  dummyApiCall() {
    return this.httpClient.get("https://18.188.123.203:8082/user/dummyApiCall");
  }

  saveNewVehicleImages(formData: any) {
    return this.httpClient.post("https://18.188.123.203:8082/admin/saveNewVehicleImages", formData);
  }

  saveNewVehicle(vehicleModel: any) {
    return this.httpClient.post("https://18.188.123.203:8082/admin/saveNewVehicle", vehicleModel);
  }
}
