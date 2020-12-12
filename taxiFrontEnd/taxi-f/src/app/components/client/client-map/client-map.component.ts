import {Component, OnInit} from '@angular/core';
import {Addres} from '../../../entity/Addres';
import {AgmMarker, MapsAPILoader} from '@agm/core';
// import {google} from '@agm/core/services/google-maps-types';
import {MapTypeControlOptions} from '@agm/core/services/google-maps-types';
import {ControlPosition} from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-client-map',
  templateUrl: './client-map.component.html',
  styleUrls: ['./client-map.component.scss']
})


export class ClientMapComponent implements OnInit {
  title = 'Angular Google Maps Example';
  startAddress: Addres;
  finishAdress: Addres;
  lat = 13;
  lng = 80;
  markers = [
    {lat: 22.33159, lng: 105.63233, alpha: 1},
  ];
  geocoder: any;

  // private mapsApiLoader: any;

  constructor(public mapsApiLoader: MapsAPILoader) {
    this.mapsApiLoader = mapsApiLoader;

    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }
  ngOnInit(): void {
  }

  onChoseLocation(event): any {
    console.log(event.coords);
    const lat = event.coords.lat;
    const lng = event.coords.lng;
    this.findAddressByCoordinates(lat, lng);
    if (this.startAddress == null) {

      this.startAddress = new Addres();
      this.startAddress.lat = lat;
      this.startAddress.lng = lng;

      this.markers.push({lat, lng, alpha: 0.4});
      console.log(this.startAddress);
    } else if (this.finishAdress == null) {
      this.finishAdress = new Addres();
      this.finishAdress.lat = lat;
      this.finishAdress.lng = lng;
      this.markers.push({lat, lng, alpha: 0.4});
    }
  }

  selectMarker($event: AgmMarker): void {

  }

  findAddressByCoordinates(lat, lng) {
    // this.geocoder.geocode({
    //   'location': {
    //     lat: lat,
    //     lng: lng
    //   }
    // }, (results, status) => {
    //   console.log(results);
    // });
  }

  // decomposeAddressComponents(addressArray) {
  //   if (addressArray.length == 0) return false;
  //   let address = addressArray[0].address_components;
  //
  //   for (let element of address) {
  //     if (element.length == 0 && !element['types']) continue
  //
  //     if (element['types'].indexOf('street_number') > -1) {
  //       this.location.address_level_1 = element['long_name'];
  //       continue;
  //     }
  //     if (element['types'].indexOf('route') > -1) {
  //       this.location.address_level_1 += ', ' + element['long_name'];
  //       continue;
  //     }
  //     if (element['types'].indexOf('locality') > -1) {
  //       this.location.address_level_2 = element['long_name'];
  //       continue;
  //     }
  //     if (element['types'].indexOf('administrative_area_level_1') > -1) {
  //       this.location.address_state = element['long_name'];
  //       continue;
  //     }
  //     if (element['types'].indexOf('country') > -1) {
  //       this.location.address_country = element['long_name'];
  //       continue;
  //     }
  //     if (element['types'].indexOf('postal_code') > -1) {
  //       this.location.address_zip = element['long_name'];
  //       continue;
  //     }
  //   }
  // }
}

