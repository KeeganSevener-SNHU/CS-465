import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {trips} from '../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Trip } from '../models/trip';
import { TripDataService } from '../../services/trip-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  // Declare Trip array and message string
  trips!: Trip[];
  message = "";

  constructor(
    private tripDataService: TripDataService,
    private router: Router) {
    console.log("trip-listing Constructor");
  }

  public addTrip() {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    this.tripDataService.getTrips()
    .subscribe({
      next: (value: any) => {
        this.trips = value;
        if (value.length > 0) {
          this.message = "There are " + value.length + " trips available.";
        }
        else {
          this.message = "There were no trips retrieved from the database";
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    })
    

    // Testing stuff below DELETE THIS
    /*
    const mahthing = '2022-01-19T08:00:00.000Z';
    //let mahDat = new Date(mahthing);
    const newTrip = {
      start: new Date(mahthing)
    }
    console.log("lol: " + newTrip.start);
    */
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

}
