import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../app/models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/trips';

  getTrips() {
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    // Console.log for debugging.
    // console.log('Currently in TripDataSerive::getTrip method');
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    // Console.log for debugging.
    // console.log('Currently in TripDataSerive::updateTrip method');
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

}
