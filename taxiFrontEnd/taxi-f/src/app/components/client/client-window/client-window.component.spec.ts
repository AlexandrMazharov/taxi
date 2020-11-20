import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWindowComponent } from './client-window.component';

describe('ClientWindowComponent', () => {
  let component: ClientWindowComponent;
  let fixture: ComponentFixture<ClientWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
