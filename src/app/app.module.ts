import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { TwitterComponent } from './twitter/twitter.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGv5NErrmEwgC0c5EJrD-jQ8KEOpnZGVE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
