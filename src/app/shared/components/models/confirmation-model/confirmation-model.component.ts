import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AdminService} from "../../../../core/services/admin.service";

@Component({
  selector: 'app-confirmation-model',
  templateUrl: './confirmation-model.component.html',
  styleUrls: ['./confirmation-model.component.css']
})
export class ConfirmationModelComponent implements OnInit {

  public guestEntry: any;
  public mode: String;

  constructor(private adminService: AdminService, private dataService: DataService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.modelDataObject.subscribe(modelObject => {
      this.guestEntry = modelObject.data;
      this.mode = modelObject.mode;
    });
  }

  onYes() {

  }
}
