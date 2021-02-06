import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/user/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import {GuestComponent} from "./components/guest/guest.component";
import {GuestBookEntryComponent} from "./components/guest/guest-book-entry/guest-book-entry.component";
import {AdminComponent} from "./components/admin/admin.component";
import {UserGuestEntryListComponent} from "./components/guest/user-guest-entry-list/user-guest-entry-list.component";
import { AddNewVehicleComponent } from './components/admin/add-new-vehicle/add-new-vehicle.component';
import { ListVehiclesComponent } from './components/admin/list-vehicles/list-vehicles.component';
import { ListRequestsComponent } from './components/admin/list-requests/list-requests.component';
import { ListComplaintsComponent } from './components/admin/list-complaints/list-complaints.component';

const routes: Routes = [
  {path: '', component: UserComponent, children: []},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'guest', component: GuestComponent, children: [
      {path: 'guestBookEntry', component: GuestBookEntryComponent},
      {path: 'userGuestEntryList', component: UserGuestEntryListComponent}
    ]},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'addNewVehicle', component: AddNewVehicleComponent},
      {path: 'listVehicles', component: ListVehiclesComponent},
      {path: 'listRequests', component: ListRequestsComponent},
      {path: 'listComplaints', component: ListComplaintsComponent},
    ]},
  // {path: '**', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
