import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Price} from "../../entity/Price";

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private url = 'http://localhost:8080/price';

  constructor(private http: HttpClient) {

  }

  getPrices(): any {
    return this.http.get(this.url);
  }

  createPrice(price: Price): any {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, JSON.stringify(price), {headers: myHeaders});
  }

  updatePrice(price: Price) {
    // console.log(price);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const updUrl = 'http://localhost:8080/price/upd/';
    return this.http.put(updUrl + price.price_id, JSON.stringify(price), {headers: myHeaders});
  }
  deletePrice(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
