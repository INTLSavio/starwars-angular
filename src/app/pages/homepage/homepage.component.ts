import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/shared/service/character.service';
import { StarshipService } from 'src/app/shared/service/starship.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public userLogo = '../../../assets/user-logo.png';
  public starshipLogo = '../../../assets/starship-logo.png';

  public currentPageStar = 1;
  public currentPageChar = 1;
  public id: number;
  public starships: any[] = [];
  public characters: any[] = [];
  public characterPath: string = 'https://swapi.dev/api/people/';
  public starshipPath: string = 'https://swapi.dev/api/starships/';

  constructor(
    public characterService: CharacterService,
    public starshipService: StarshipService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
    this.getStarships();

  }

 getCharacters(){
  this.characterService.getCharacters(this.characterPath).subscribe(data => {
    let id = 1;

    for(let i = 0; i < data.results.length; i++){
      this.characters = [...this.characters, data.results[i]];
    }
    this.characterPath = data.next;
    if(this.characterPath != null){
      this.getCharacters();
    }
    for(let j = 0; this.characters.length; j++){
      this.characters[j].id = id;
      id++;
    }
  })
 }

  getStarships(){
    this.starshipService.getStarships(this.starshipPath).subscribe(data => {

      for(let i = 0; i < data.results.length; i++){
        this.starships = [...this.starships, data.results[i]];
      }
      this.starshipPath = data.next;
      if(this.starshipPath != null){
        this.getStarships();
      }
      for(let j = 0; this.starships.length; j++){
        var str = this.starships[j].url;
        var res = str.split("/")
        this.starships[j].id = Number(res[5]);
      }
    })
  }

}
