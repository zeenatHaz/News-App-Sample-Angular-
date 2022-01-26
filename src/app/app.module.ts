import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationsComponent } from './navigations/navigations.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SubContentsComponent } from './sub-contents/sub-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationsComponent,
    MainContentComponent,
    SubContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
