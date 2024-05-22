import { Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component'; 
import { CityComponent } from './pages/admin/city/city.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { LoginComponent } from './pages/admin/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    }, 
    {
        path: 'search',
        component: SearchComponent,
        title: 'Search Flight'
    },
    {
        path: 'book-flight',
        component: BookFlightComponent,
        title: 'Book New Ticket'
    },
    {
        path: 'bookings',
        component: MyBookingsComponent,
        title: 'My Bookings'
    },
    
    // login page at top caz login page must be accessible if user doesnt log in the website
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'airport',
                component: AirportComponent, 
            },
            {
                path: 'city',
                component: CityComponent, 
            },
            {
                path: 'all-bookings',
                component: BookingsComponent, 
            },
            {
                path: 'new-flight',
                component: NewFlightComponent, 
            } 
        ]
    }
];
