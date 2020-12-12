import {Component, OnInit} from '@angular/core';
import {TripService} from '../../../services/trip/trip.service';
import {Trip} from '../../../entity/Trip';
import {TokenStorageService} from '../../../services/token-storage/token-storage.service';
import {UserTaxiService} from '../../../services/user-taxi/user-taxi.service';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.scss']
})
export class DriverFormComponent implements OnInit {

  constructor(private tripService: TripService,
              private tokenStorage: TokenStorageService,
              private userService: UserTaxiService
  ) {
    this.count = -1;
  }

  private activeTrips;
  public currentTrip: Trip;
  count: number;
  private user: any;

  statusTrip: string;

  ngOnInit(): void {
    const uid = this.tokenStorage.getUser().id;
    this.userService.getUserById(uid).subscribe(
      res => {
        for (let key in res) {
          if (res[key].userId === uid) {
            this.user = res[key];
          }
        }
      }
    );
    this.tripService.getTrips().subscribe(res => {
      this.activeTrips = res;
      this.activeTrips = this.activeTrips.filter(
        item => item.trip_status === 'active'
      );
      console.log(this.activeTrips);
      this.currentTrip = this.activeTrips[0];
    });
  }

  startCurrentTrip(): any {
    console.log('startCurrentTrip');
    this.currentTrip.trip_dirver = this.user;

    console.log(this.currentTrip);
    this.tripService.updateTrip(this.currentTrip).subscribe(res => {
        console.log(res);
        this.statusTrip = 'driverOnWay';
      },

      err => console.log(err));
  }

  getNext(): void {
    this.count++;
    if (this.activeTrips !== {}
    ) {
      if (this.count === this.activeTrips.length) {
        console.log('restart');
        this.count = 0;
        this.ngOnInit();
      } else {
        this.currentTrip = this.activeTrips[this.count];
      }
    } else {
      console.log('пусто');
      alert('Нет активных заказов');
    }
    console.log('-----');
    console.log(this.count);
    console.log(this.activeTrips);
    console.log(this.currentTrip);
  }

  closeTrip(): void {
    console.log('closeTrip');
    this.statusTrip = 'search';
  }
}
