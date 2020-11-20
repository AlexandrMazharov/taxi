import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverWindowComponent } from './driver-window.component';

describe('DriverWindowComponent', () => {
  let component: DriverWindowComponent;
  let fixture: ComponentFixture<DriverWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
