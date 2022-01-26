import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

   //#region variables
    public header:Header=new Header("subscribe","daily news","search");

   // region variables ends
  constructor() { }
  
  ngOnInit(): void {
  }

}

export  class Header {
  subscribeInfo:string;
  mainHeader:string;
  searchText:string;

  constructor(subscribeInfo:string,mainHeader:string,searchText:string){
    this.subscribeInfo=subscribeInfo;
    this.mainHeader=mainHeader;
    this.searchText=searchText;
  }
}
