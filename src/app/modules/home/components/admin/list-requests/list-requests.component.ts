import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit {

  sellRequests : [];
  constructor(private adminService: AdminService, private dataService: DataService) { }

  ngOnInit(): void {
    this.adminService.getAllSellRequests().subscribe(responseData => {
      this.sellRequests = responseData['payloads'];
      console.log(this.sellRequests);
      // this.createUploadVehicleImageForm();
      // this.dataService.buildModelDataObject(null, null, this, responseData['infoMessages'], null);
    }, error => {
      // this.dataService.buildModelDataObject(null, null, this, null, error.error.errorMessages);
    });
  }

  viewRequest(request: any) {
    this.dataService.buildModelDataObject(request, 'VIEW', this, null, null);
  }
  

}
