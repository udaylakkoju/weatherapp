import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selected-country',
  templateUrl: './selected-country.component.html',
  styleUrls: ['./selected-country.component.css']
})
export class SelectedCountryComponent implements OnInit {

  selection: {};
  subscription: Subscription;

  constructor(private sharedService: SharedService) {
    // subscribe to home component selections 
    this.subscription = this.sharedService.getData().subscribe(selection => {
      if (selection) {
        this.selection = selection;
      } else {
        // clear selections when empty selection received
        this.selection = {};
      }
    });
  }
  ngOnInit() { }

  clearselections(): void {
    // clear selections
    this.sharedService.clearselections();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}