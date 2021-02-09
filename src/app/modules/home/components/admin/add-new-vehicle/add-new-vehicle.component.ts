import { AdminService } from 'src/app/core/services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-add-new-vehicle',
  templateUrl: './add-new-vehicle.component.html',
  styleUrls: ['./add-new-vehicle.component.css']
})
export class AddNewVehicleComponent implements OnInit {
  showMsg: boolean = false;
  addVehicleForm: FormGroup;
  uploadVehicleImagesForm: FormGroup;
  subscription: any;
  selectedFiles: File[];
  private savedVehicleId: string;
  step1: boolean = true;

// file upload
urls = new Array<string>();
detectFiles(event) {
  this.urls = [];
  let files = event.target.files;
  if (files) {
    for (let file of files) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.urls.push(e.target.result);
      }
      reader.readAsDataURL(file);
      console.log("urls", this.urls);
    }
  }
}
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.createAddVehicleForm();
  }

  private createAddVehicleForm() {
    // binding data with form
    this.addVehicleForm = new FormGroup({
      vehicleName: new FormControl(null, Validators.required),
      vehicleYear: new FormControl(null, Validators.required),
      vehicleBrand: new FormControl(null, Validators.required),
      vehicleFuel: new FormControl(null, Validators.required),
      vehicleVarient: new FormControl(null, Validators.required),
      vehicleColor: new FormControl(null, Validators.required),
      vehicleKmDriven: new FormControl(null, Validators.required),
      vehicleDescription: new FormControl(null, Validators.required),
      vehicleOwnersCount: new FormControl(null, Validators.required),
      vehicleTransmissionType: new FormControl(null, Validators.required),
      vehicleMileage: new FormControl(null, Validators.required),
      vehicleLowerPrice: new FormControl(null, Validators.required),
      vehicleUpperPrice: new FormControl(null, Validators.required),
      vehicleSpecifications: new FormControl(null, Validators.required)
    });
  }

  onAddVehicle() {
    console.log(this.addVehicleForm.value);
    this.adminService.saveNewVehicle(this.addVehicleForm.value).subscribe(response => {
      console.log(response['payloads']);
      this.savedVehicleId = response['payloads'];
      this.addVehicleForm.reset();
      this.showMsg= true;
      const source = interval(2000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => this.closeAlert());
    this.step1 = false;
    }, error => {
      // this.dataService.buildModelDataObject(null, null, this, null, error.error.errorMessages);
    });
  }

  onFileChanged($event: Event) {
    console.log($event.target['files']);
    this.selectedFiles = $event.target['files'];


    // this.selectedFile = $event.target['files'][0];
  }

  onVehicleImagesSubmit() {
    const uploadImageData = new FormData();
    for (var i = 0; i < this.selectedFiles.length; i++) {
      uploadImageData.append('files', this.selectedFiles[i]);
    }

    uploadImageData.append('vehicleEntityId', this.savedVehicleId);
    this.adminService.saveNewVehicleImages(uploadImageData).subscribe(responseData => {
      console.log(responseData);
      this.step1 = true;
      // this.createUploadVehicleImageForm();
      // this.dataService.buildModelDataObject(null, null, this, responseData['infoMessages'], null);
    }, error => {
      // this.dataService.buildModelDataObject(null, null, this, null, error.error.errorMessages);
    });
  }
  createUploadVehicleImageForm() {
    throw new Error('Method not implemented.');
  }

  closeAlert() {
    this.showMsg = false;
    this.subscription && this.subscription.unsubscribe();
  }

}
