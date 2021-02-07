import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-vehicle-view-modal',
  templateUrl: './vehicle-view-modal.component.html',
  styleUrls: ['./vehicle-view-modal.component.css']
})
export class VehicleViewModalComponent implements OnInit {

  vehicle;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.modelDataObject.subscribe(modelObject => {
      // this.createGuestEntryForm(modelObject.data);
      // this.mode = modelObject.mode;
      this.vehicle = modelObject.data;
      console.log(this.vehicle);
      const vehicleName  = this.vehicle['vehicleName'];
    });
  }

}
