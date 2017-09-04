import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { AppComponent} from '../app.component';
import { ServicesComponent } from '../services/services.component';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  @Input() babyOne: boolean = true;
  private data: any;

  // constructor(private service: ServicesComponent) { }

  constructor() { }

  ngOnInit(): void{
    // this.http.get('https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=362102810')
    //   .subscribe(data => {
    //     this.data = data;
    //   });
    //   console.log("http data" + this.data);
    // this.service.getTimeline();
  }


}
