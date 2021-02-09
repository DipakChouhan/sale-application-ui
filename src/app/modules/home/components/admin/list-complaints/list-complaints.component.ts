import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-list-complaints',
  templateUrl: './list-complaints.component.html',
  styleUrls: ['./list-complaints.component.css']
})
export class ListComplaintsComponent implements OnInit {

  complaints: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getComplaintsList().subscribe(responseData => {
      this.complaints = responseData;
      console.log(this.complaints);
      // this.adminService = true;
      // this.dataService.buildModelDataObject(null, null, this, responseData['infoMessages'], null);
    }, error => {
      // this.dataService.buildModelDataObject(null, null, this, null, error.error.errorMessages);
    });
  }

}
