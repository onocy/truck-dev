import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
// import { TwitterService } from 'ng2-twitter';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { TwitterComponent } from './twitter/twitter.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGv5NErrmEwgC0c5EJrD-jQ8KEOpnZGVE'
    })
  ],
  providers: [ServicesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
