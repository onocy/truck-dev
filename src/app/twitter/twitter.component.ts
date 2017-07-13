import { Component, OnChanges, Input } from '@angular/core';
import { AppComponent} from '../app.component';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnChanges {

  @Input() babyOne: boolean = true;

  constructor() { }

  ngOnChanges() {
  }

}
