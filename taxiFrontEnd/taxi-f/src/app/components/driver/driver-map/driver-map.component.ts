import {Component, OnInit} from '@angular/core';
import {Addres} from "../../../entity/Addres";

@Component({
  selector: 'app-driver-map',
  templateUrl: './driver-map.component.html',
  styleUrls: ['./driver-map.component.scss']
})
export class DriverMapComponent implements OnInit {
  startAddress: Addres ;
  finishAdress: Addres ;
  lat = 13;
  lng = 80;
  constructor() {
  }

  ngOnInit(): void {
  }

  onChoseLocation(event): any {
    console.log(event.coords.lat);
    if (this.startAddress == null) {
      this.startAddress.lat = event.coords.lat;
      this.startAddress.lng = event.coords.lng;
      console.log(this.startAddress);
    }
    // let lat = event.coords.lat;
    // let lon = event.coords.lng;
  }
}
