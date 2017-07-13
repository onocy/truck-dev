import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { AppComponent} from '../app.component';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  data: any;
  lat:number;
  lng: number;

  @Input() babyOne: boolean = true;

  constructor(private service: ServicesComponent) {
    // this.service.getTasks()
    //   .subscribe(data => {
    //     this.data = data;
    //   });
   }

  ngOnInit() {
    this.lat = 42.3912;
    this.lng = -72.5267;
  }
  ngOnChanges(){

  }

}
