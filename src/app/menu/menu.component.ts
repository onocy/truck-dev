import { Component, OnChanges, Input } from '@angular/core';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnChanges{

  @Input() babyOne: boolean = true;

  constructor() { }

  ngOnChanges() {

  }

}
