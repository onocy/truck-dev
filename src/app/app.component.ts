import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  babyOne:boolean = true;
  num: number;
  color: string =  "#FFFBFE";

ngOnInit(){
  this.num = 2;
}

  swapBabies(){
    this.babyOne = !this.babyOne;
    if(this.babyOne){
      this.num = 2;
    }
    else{
      this.num = 1;
    }
    if(this.color ==  "#FFFBFE"){
      this.color = "#009900";
    }
    else{
      this.color = "#FFFBFE";
    }
    console.log(this.color);
  }

}
