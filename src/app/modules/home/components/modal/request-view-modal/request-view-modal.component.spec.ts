import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestViewModalComponent } from './request-view-modal.component';

describe('RequestViewModalComponent', () => {
  let component: RequestViewModalComponent;
  let fixture: ComponentFixture<RequestViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
