import {Injectable} from '@angular/core';
// import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

// import { TwitterService } from 'ng2-twitter';

import 'rxjs/add/operator/map';

@Injectable()
export class ServicesComponent {

  private result: any;

  // constructor(private twitter: TwitterService) {
  //
  // }
  constructor() {

  }

//use https://dev.twitter.com/rest/reference/get/statuses/user_timeline



  // getTimeline(){
  //   this.twitter.get(
  //     'https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=362102810',
  //     {
  //       count: 1
  //     },
  //     {
  //       consumerKey: 'ECydhlUjMPodsRgbQ5BGGfH5U',
  //       consumerSecret: 'GE0sS8Ny3NKlJUxOpV99xeOOB1OPsFyBuc9wtM0lbEyFE6r0qM'
  //     },
  //     {
  //       token: '4231076771-kOtISZCDDlF4LOedw3nZLlfbTMv5XV0DnzbqycN',
  //       tokenSecret: '8AlgCusoFv5mdvMPWO9sqL5y1JMMKqBLne42MEAwIuNJp'
  //     }
  //   ).subscribe((res) => {
  //       this.result = res.json().map(tweet => tweet.text);
  //   });
  //   console.log("RESULT" + this.result);
  // }

  newTweet(){

  }

  parseTweet(){

  }

}
