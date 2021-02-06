import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {
  vehicleList;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getVehicleList();
  }

  private getVehicleList() {
    this.adminService.getVehicleList().subscribe(responseData => {
      this.vehicleList = responseData;
      console.log(this.vehicleList);
      // this.adminService = true;
      // this.dataService.buildModelDataObject(null, null, this, responseData['infoMessages'], null);
    }, error => {
      // this.dataService.buildModelDataObject(null, null, this, null, error.error.errorMessages);
    });
  }
}
