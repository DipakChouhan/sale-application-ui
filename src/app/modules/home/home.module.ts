import { AuthGuard } from '../../core/auth/auth.guard';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { AddNewVehicleComponent } from './components/admin/add-new-vehicle/add-new-vehicle.component';
import { ListVehiclesComponent } from './components/admin/list-vehicles/list-vehicles.component';
import { ListRequestsComponent } from './components/admin/list-requests/list-requests.component';
import { ListComplaintsComponent } from './components/admin/list-complaints/list-complaints.component';
import { VehicleViewModalComponent } from './components/modal/vehicle-view-modal/vehicle-view-modal.component';
import { RequestViewModalComponent } from './components/modal/request-view-modal/request-view-modal.component';

@NgModule({
  declarations: [ UserComponent, LoginComponent,
    AdminComponent,
    AddNewVehicleComponent,
    ListVehiclesComponent,
    ListRequestsComponent,
    ListComplaintsComponent,
    VehicleViewModalComponent,
    RequestViewModalComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [AuthGuard]
})
export class HomeModule { }
