import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  public lists = [];
  public searchText: any = '';
  constructor(public shared: SharedService) { }
  ngOnInit() {
      this.shared.getWeatherList().subscribe((data) => {
          this.lists = Array.from(Object.keys(data), k => data[k]);
      });
  }

  selectedlist(list) {
      this.shared.addselection(list)
  }
}

