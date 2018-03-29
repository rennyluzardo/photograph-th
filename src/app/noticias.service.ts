import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { resolve, reject } from 'q';
// import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

var Twitter = require('twitter-node-client').Twitter;

const dataConfig = {
  "consumerKey": "bZVyVqbW1TCN3oNNAwuZE12Uc",
  "consumerSecret": "ZDw1SQ2lgsRu6loTR7DvSARUAEmYUeUEiz8CgYNUEZRiAOAUzZ",
  "accessToken": "283903787-GrfcCsBH72pWyDA1YwWx0taKWm3BSEehTNfcUPAk",
  "accessTokenSecret": "5iNUeZpK2MaDMqlKUs4vVc3bGzDrDFyojca3zJLTYtPUz",
  "callBackUrl": ""
}
var twitter = new Twitter(dataConfig);

@Injectable()
export class NoticiasService {
  constructor() {}

  getTwts = ()=> {
    let twtsTotales = []
    twitter.getUserTimeline({ screen_name: '_luzardorenny' }, error => error, twts => {
      let twtsParsed = JSON.parse(twts)
      for (let twt in twtsParsed) {
        twtsTotales.push(twtsParsed[parseInt(twt)])
        if (twtsTotales.length > 4 ) {
          break
        }
      }
    })
    return twtsTotales
  }
}
