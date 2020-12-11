import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/shared/service/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  public id: number;
  private sub: any;
  public character: any = {}
  public species:string = ''
  public speciesPath:string;


  constructor(
    private route: ActivatedRoute,
    public characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.getCharacter();
    })
  }

  getCharacter(){
    this.characterService.getCharacterById(this.id).subscribe(data => {
      this.character = data
      this.speciesPath = data.species[0];
      if(data.species[0]){
        this.getSpecies();
      }
    });
  }

  getSpecies(){
    this.characterService.getSpecies(this.speciesPath).subscribe(data => {
      this.species = data.name;
    })
  }

}
