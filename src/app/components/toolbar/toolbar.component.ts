import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public logoImg = '../../../assets/star-wars.svg';
  public sabersImg = '../../../assets/sabers.svg.png';

  constructor() { }

  ngOnInit(): void {
  }

}
