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

  approveGuestEntry(guestBookEntryId: any) {
    return this.httpClient.put("http://localhost:8082/admin/approveGuestBookEntries", guestBookEntryId);
  }

  deleteGuestEntry(guestBookEntryId: any) {
    return this.httpClient.post("http://localhost:8082/admin/deleteGuestBookEntries", guestBookEntryId);
  }
}
