import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/Character';
import { Species } from '../model/Species';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  public getCharacters(path: string): Observable<Character>{
    return this.http.get<Character>(path)
  }

  public getCharacterById(id:number) {
    return this.http.get<Character>(`https://swapi.dev/api/people/${id}/`)
  }

  public getSpecies(path: string){
    return this.http.get<Species>(path)
  }
}
