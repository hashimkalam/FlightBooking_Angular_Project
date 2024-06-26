import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { CityComponent } from './pages/admin/city/city.component';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    NewFlightComponent,
    AllFlightsComponent,
    BookingsComponent,
    AirportComponent,
    CityComponent,
    SearchComponent,
    BookFlightComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,  // Import RouterModule here if using routing
    FormsModule,
    HttpClientModule
    
  ],
  providers: []
})
export class AppModule { }
