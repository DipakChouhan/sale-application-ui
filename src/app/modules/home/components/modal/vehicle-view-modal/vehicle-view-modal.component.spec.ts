import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleViewModalComponent } from './vehicle-view-modal.component';

describe('VehicleViewModalComponent', () => {
  let component: VehicleViewModalComponent;
  let fixture: ComponentFixture<VehicleViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
