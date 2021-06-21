import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SortingPipe } from './sorting.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { SelectedCountryComponent } from './selected-country/selected-country.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SortingPipe,
    FilterPipe,
    WeatherListComponent,
    SelectedCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
