import { Injectable } from '@angular/core';
import { IRide } from '../models/ride';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor(private http: HttpClient) { }

  getRides(){
    // reading data from file
    return this.http.get<IRide[]>("assets/data.json");
  }
}
