import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    // if (localStorage.getItem('role') == null || localStorage.getItem('role') != 'ADMIN') {
    //   this.router.navigate(['/login']);
    // }
    this.adminService.dummyApiCall().subscribe(responseDate => {});
  }

}
