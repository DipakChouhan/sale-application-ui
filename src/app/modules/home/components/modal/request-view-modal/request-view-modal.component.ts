import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-request-view-modal',
  templateUrl: './request-view-modal.component.html',
  styleUrls: ['./request-view-modal.component.css']
})
export class RequestViewModalComponent implements OnInit {

  reuest;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.modelDataObject.subscribe(modelObject => {
      // this.createGuestEntryForm(modelObject.data);
      // this.mode = modelObject.mode;
      this.reuest = modelObject.data;
      console.log(this.reuest);
    });
  }

}
