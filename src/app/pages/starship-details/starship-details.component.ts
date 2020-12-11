import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarshipService } from 'src/app/shared/service/starship.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  public id: number;
  private sub: any;
  public starship: any = {};

  constructor(
    private route: ActivatedRoute,
    public starshipService: StarshipService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.getStarship();
    })
  }

  getStarship(){
    this.starshipService.getStarshipById(this.id).subscribe(data => {
      this.starship = data;
      console.log(data);
    })
  }

}
