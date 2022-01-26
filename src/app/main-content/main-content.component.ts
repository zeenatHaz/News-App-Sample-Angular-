import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public mainContent:MainContent=new MainContent();
  constructor() { }



  ngOnInit(): void {
  }

}


export class MainContent{
  title:string;
  subTitle:string;
  constructor(){
    this.title="Title of a longer featured news post"; // you will get this from the news services dummy servce.
    this.subTitle="Multiple lines of text from the featured news.";
  }
}