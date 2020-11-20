import {Component, OnInit} from '@angular/core';
import {Addres} from '../../../entity/Addres';

@Component({
  selector: 'app-client-map',
  templateUrl: './client-map.component.html',
  styleUrls: ['./client-map.component.scss']
})


export class ClientMapComponent implements OnInit {
  title = 'Angular Google Maps Example';

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

