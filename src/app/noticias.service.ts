import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';
import { request } from 'https';

@Injectable()
export class NoticiasService {
  constructor() {
    this.getTwts()
  }

  getTwts = ()=> {
    fetch('http://localhost:5001/photographer-th/us-central1/api/gettweets').then(res=>{
      console.log(res)
    })
    // return new Promise((resolve,reject)=>{
    //   twitter.getUserTimeline({ screen_name: '_luzardorenny' }, error => error, twts => {
    //     let twtsParsed = JSON.parse(twts)
    //     let twtsTotales = []
    //     for (let twt in twtsParsed) {
    //       twtsTotales.push(twtsParsed[parseInt(twt)])
    //       if (twtsTotales.length === 4 ) {
    //         resolve(twtsTotales)
    //         break
    //       }
    //     }
    //   })
    // })
  }
}
