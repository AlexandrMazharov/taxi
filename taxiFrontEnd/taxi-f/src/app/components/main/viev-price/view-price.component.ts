import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PriceService} from '../../../services/price/price.service';
import {Price} from '../../../entity/Price';
import {UserTaxi} from 'src/app/entity/UserTaxi';
import {UserTaxiService} from '../../../services/user-taxi/user-taxi.service';

@Component({
  selector: 'app-viev-price',
  templateUrl: './view-price.component.html',
  styleUrls: ['./view-price.component.scss']
})
export class ViewPriceComponent implements OnInit {


  // типы шаблонов
  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;

  editedPrice: Price;
  prices: Array<Price>;
  isNewRecord: boolean;
  statusMessage: string;

  users: Array<UserTaxi>;


  constructor(private  serv: PriceService, private  serverUser: UserTaxiService) {
    this.prices = new Array<Price>();
    this.users = new Array<UserTaxi>();

  }

  ngOnInit(): any {
    this.loadPrices();
    this.loadUsers();
  }

  // загрузка юзеров
  public loadUsers(): any {
    this.serverUser.getUserTaxi().subscribe((data: UserTaxi[]) => {
      console.log(data);
      this.users = data;
    });
  }

  // загрузка
  private loadPrices(): any {
    this.serv.getPrices().subscribe((data: Price[]) => {
      console.log(data);
      this.prices = data;
      console.log('trips');
      console.log(this.prices);
    });
  }

  // добавление пользователя
  addPrice(): any {
    // this.editedPrice = new Trip(0, '', '',  0, '', Object(), Object(), '');
    this.editedPrice = new Price(0, 0, '');
    this.prices.push(this.editedPrice);
    this.isNewRecord = true;
  }

  // редактирование пользователя
  editPrice(price: Price): any {
    // console.log('click edit car');
    // console.log(price);
    this.editedPrice = new Price(price.price_id, price.price, price.title);
  }

  // загружаем один из двух шаблонов
  loadTemplate(price: Price): any {
    if (this.editedPrice && this.editedPrice.price_id === price.price_id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  // сохраняем пользователя
  savePrice(): any {
    if (this.isNewRecord) {
      // добавляем пользователя
      this.serv.createPrice(this.editedPrice).subscribe(data => {
        console.log(data);
        this.statusMessage = 'Данные успешно добавлены',
          this.loadPrices();
      });
      this.isNewRecord = false;
      this.editedPrice = null;
    } else {
      // изменяем пользователя
      this.serv.updatePrice(this.editedPrice).subscribe(data => {
        console.log(data);
        this.statusMessage = 'Данные успешно обновлены',
          this.loadPrices();
      });
      this.editedPrice = null;
    }
  }

  // отмена редактирования
  cancel(): any {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
      this.prices.pop();
      this.isNewRecord = false;
    }
    this.editedPrice = null;
  }

  // удаление пользователя
  deletePrice(price: Price): any {
    this.serv.deletePrice(price?.price_id).subscribe(data => {
      this.statusMessage = 'Данные успешно удалены',
        this.loadPrices();
    });
  }
}
