import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
  public selections = new Subject<any>();
  
  getWeatherList(){
    let api = './assets/items.json';
    return this.http.get(api)
  }

 
  addselection(item: object) {
    this.selections.next(item);
  }

  clearselections() {
    this.selections.next();
    console.log(this.selections)
  }

  getData(): Observable<any> {
    return this.selections.asObservable();
  }

}
