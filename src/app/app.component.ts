import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  babyOne:boolean = true;
  color: string =  "#FFFBFE";

  swapBabies(){
    this.babyOne = !this.babyOne;
    if(this.color ==  "#FFFBFE"){
      this.color = "#009900";
    }
    else{
      this.color = "#FFFBFE";
    }
    console.log(this.color);
  }

}
