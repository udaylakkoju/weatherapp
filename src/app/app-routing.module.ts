import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'
import { WeatherListComponent } from './weather-list/weather-list.component';
import { SelectedCountryComponent } from './selected-country/selected-country.component';

const routes: Routes = [
{
  path:'',
  component:WeatherListComponent
},
{
  path:'navbar',
  component:NavbarComponent
},
{
  path:'selected',
  component:SelectedCountryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
