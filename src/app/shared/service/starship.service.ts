import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starship } from '../model/Starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(
    private http: HttpClient
  ) { }

  public getStarships(path: string): Observable<Starship>{
    return this.http.get<Starship>(path)
  }

  public getStarshipById(id:number) {
    return this.http.get<Starship>(`https://swapi.dev/api/starships/${id}/`)
  }

}
