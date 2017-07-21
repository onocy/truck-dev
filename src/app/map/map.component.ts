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
  currLocation: any;

  lat: number =  42.391642;
  lng: number = -72.519154;

//regex : \d?:?\d\d-\d?:?\d?\d
//today|tonight
//all locations...
//We'll need to take the tweet, and scan it from left to right. first for keyword: tonight/today, then locations, then find time corresponding to the location, then find next location...etc. 

 coordinates = {
  ohill: {
      lat: 42.391642,
      lng: -72.519154
  },
  kennedy: {
      lat: 42.384399,
      lng: -72.529378
  },
  hampden: {
      lat: 42.382773,
      lng: -72.529356
  },
  whitmore: {
      lat: 42.385919,
      lng: -72.527357
  },
  curry: {
      lat: 42.386752,
      lng: -72.528156
  },
  design: {
      lat: 42.388198,
      lng: -72.523055
  },
  north_east: {
      lat: 42.394648,
      lng: -72.525743
  },
  haigis: {
      lat: 42.387250,
      lng: -72.526114
  },
  fleet_services: {
      lat: 42.394274,
      lng: -72.532870
  },
  student_union: {
      lat: 42.390724,
      lng: -72.528186
  },
  dubois: {
    lat: 42.390054,
    lng: -72.528260
  }
}

  @Input() babyOne: boolean = true;

  constructor(private service: ServicesComponent) {
    // this.service.getTasks()
    //   .subscribe(data => {
    //     this.data = data;
    //   });
   }

  ngOnInit() {
    this.currLocation = this.coordinates.student_union;
    this.lat = this.currLocation.lat;
    this.lng = this.currLocation.lng;
    console.log(this.lat);
    console.log(this.lng);
  }

  ngOnChanges(){
    //adjust lat + lang based on value of babyone.
  }



}
