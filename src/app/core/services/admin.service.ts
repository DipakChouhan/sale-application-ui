import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient ) {
  }

  getVehicleList() {
    return this.httpClient.get("http://18.188.123.203:8083/user/getAllCarDetails?pageNo=0&pageSize=1000000");
  }
  getComplaintsList() {
    return this.httpClient.get("http://18.188.123.203:8083/admin/getAllComplaints?pageNo=0&pageSize=1000000");
  }
  getAllSellRequests() {
    return this.httpClient.get("http://18.188.123.203:8083/admin/getAllSellCarRequests?pageNo=0&pageSize=1000000");
  }
  dummyApiCall() {
    return this.httpClient.get("http://18.188.123.203:8083/user/dummyApiCall");
  }

  saveNewVehicleImages(formData: any) {
    return this.httpClient.post("http://18.188.123.203:8083/admin/saveNewVehicleImages", formData);
  }

  saveNewVehicle(vehicleModel: any) {
    return this.httpClient.post("http://18.188.123.203:8083/admin/saveNewVehicle", vehicleModel);
  }
}
