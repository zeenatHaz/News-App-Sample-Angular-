import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss']
})
export class NavigationsComponent implements OnInit {
  public navigation:NavigationTitles=new NavigationTitles();
  constructor() {

   }

  ngOnInit(): void {
  }
  
}

export class NavigationTitles{

  home:string;
  top:string;
  politics:string;    
  tech:string;
  food:string;
  travel:string;
  entertainment:string;
  weather:string;
  research:string;

  constructor(){
    this.home="Home";
    this.top="top news";
    this.politics="Politics";
    this.tech="technology";
    this.food="Healthy living";
    this.travel="travels";
    this.entertainment="Entertainment";
    this.weather="Weather";
    this.research="Researches";
  }

}