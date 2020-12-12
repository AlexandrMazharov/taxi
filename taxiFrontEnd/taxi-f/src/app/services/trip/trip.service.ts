import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Trip} from '../../entity/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private url = 'http://localhost:8080/trip';

  constructor(private http: HttpClient) {
  }

  getTrips(): any {
    return this.http.get(this.url);
  }

  createTrip(trip: Trip): any {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, JSON.stringify(trip), {headers: myHeaders});
  }

  updateTrip(trip: Trip): any {
    console.log(trip);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const updUrl = 'http://localhost:8080/trip/upd/';
    return this.http.put(updUrl + trip.trip_id, JSON.stringify(trip), {headers: myHeaders});
  }

  deleteTrip(id: number): any {
    return this.http.delete(this.url + '/' + id);
  }

}
