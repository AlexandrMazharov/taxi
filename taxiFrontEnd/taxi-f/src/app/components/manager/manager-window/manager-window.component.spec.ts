import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerWindowComponent } from './manager-window.component';

describe('MainComponent', () => {
  let component: ManagerWindowComponent;
  let fixture: ComponentFixture<ManagerWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
