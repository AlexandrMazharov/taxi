import {Component, OnInit} from '@angular/core';
import {Trip} from '../../../entity/Trip';
import {UserTaxi} from '../../../entity/UserTaxi';
import {AuthService} from '../../../services/auth/auth.service';
import {TokenStorageService} from '../../../services/token-storage/token-storage.service';
import {TripService} from '../../../services/trip/trip.service';
import {UserTaxiService} from '../../../services/user-taxi/user-taxi.service';
import {PriceService} from '../../../services/price/price.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  public tarif: string;
  private currentUser: UserTaxi;
  public trip: Trip;
  private user;
  public prices: any;

  constructor(private authService: AuthService,
              private userService: UserTaxiService,
              private tripService: TripService,
              private tokenStorage: TokenStorageService,
              private priceService: PriceService,
  ) {
  }

  ngOnInit(): void {
    console.log(this.tokenStorage.getUser());
    const uid = this.tokenStorage.getUser().id;

    const currentUsers = this.userService.getUserById(uid).subscribe(res => {
      for (const key in res) {
        if (res[key].userId === uid) {
          this.user = res[key];
        }
      }
    });
    console.log(this.user);
    this.trip = new Trip(0, '', '', 100, null, this.user, null, '');
    this.priceService.getPrices().subscribe(res => {
      this.prices = res;
      console.log(this.prices);
    });
  }

  send(): void {
    this.trip.trip_user = this.user;
    this.trip.trip_status = 'active';
    this.tripService.createTrip(this.trip).subscribe(data => {
        console.log(data);
      },
      // tslint:disable-next-line:no-shadowed-variable
      catchError => console.log(catchError));

  }
}
