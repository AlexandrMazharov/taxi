import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {ViewRolesTableComponent} from './components/main/roles/view-roles-table/view-roles-table.component';
import {RoleService} from './services/roles/role.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ViewCarTableComponent} from './components/main/car/view-car-table/view-car-table.component';
import {ViewUserTaxiTableComponent} from './components/main/user/view-user-taxi-table/view-user-taxi-table.component';
import {ViewUsedCarTableComponent} from './components/main/used-car/view-used-car-table/view-used-car-table.component';
import {ViewTripTableComponent} from './components/main/trip/view-trip-table/view-trip-table.component';
import {authInterceptorProviders} from './helpers/AuthInterceptor';
import {RegisterComponent} from './components/auth/register/register.component';
import {LoginComponent} from './components/auth/login/login.component';
import {TitleComponent} from './components/main/title/title.component';
import {ProfileComponent} from './components/auth/profile/profile.component';
import {CommonModule} from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule, } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { ClientWindowComponent } from './components/client/client-window/client-window.component';
import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { ClientMapComponent } from './components/client/client-map/client-map.component';
import { DriverWindowComponent } from './components/driver/driver-window/driver-window.component';
import { DriverMapComponent } from './components/driver/driver-map/driver-map.component';
import { DriverFormComponent } from './components/driver/driver-form/driver-form.component';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    ViewRolesTableComponent,
    ViewCarTableComponent,
    ViewUserTaxiTableComponent,
    ViewUsedCarTableComponent,
    ViewTripTableComponent,
    RegisterComponent,
    LoginComponent,
    TitleComponent,
    ProfileComponent,
    ClientWindowComponent,
    ClientFormComponent,
    ClientMapComponent,
    DriverWindowComponent,
    DriverMapComponent,
    DriverFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    NgxMatDatetimePickerModule, NgxMatTimepickerModule,

    NgxMatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzm0_U4sjhJo8pEq3tNmfOckaW8JHaDpo'
    }),
  ],
  providers: [RoleService,
    authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
