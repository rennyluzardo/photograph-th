import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

var Twitter = require('twitter-node-client').Twitter;

const dataConfig = {
  "consumerKey": "bZVyVqbW1TCN3oNNAwuZE12Uc",
  "consumerSecret": "ZDw1SQ2lgsRu6loTR7DvSARUAEmYUeUEiz8CgYNUEZRiAOAUzZ",
  "accessToken": "283903787-GrfcCsBH72pWyDA1YwWx0taKWm3BSEehTNfcUPAk",
  "accessTokenSecret": "5iNUeZpK2MaDMqlKUs4vVc3bGzDrDFyojca3zJLTYtPUz",
  "callBackUrl": "http://localhost:4200/"
}
var twitter = new Twitter(dataConfig);

var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
}
var success = function (data) {
  console.log('Data [%s]', data);
}
@Injectable()
export class NoticiasService {
  constructor() {
    console.log(twitter.getUserTimeline({ screen_name: '_luzardorenny' }, error, success))
  }

  // getBearer = () => {
  //   let configReq = {

  //   }
  //   this.http.post('https://api.twitter.com/oauth2/token', configReq).subscribe()
  // }


}
