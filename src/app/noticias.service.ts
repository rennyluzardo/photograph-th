import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve, reject } from 'q';

@Injectable()
export class NoticiasService {
  constructor(public http: HttpClient) {
  }

  //https://us-central1-photographer-th.cloudfunctions.net/api/gettweets
    // - Esta endpoint podria funcionar pagando un plan para usar Cloud Functions en Firebase
  getTwts = () => {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:5000/photographer-th/us-central1/api/gettweets').subscribe(data => {
        let twtsTotales = []
        // Filtro
        for (let i = 0; twtsTotales.length < 4; i++) {
          twtsTotales.push(data[i])
          if (twtsTotales.length === 4) {
            resolve(twtsTotales)
          }
        }
      },
        err => reject(err))
    })
  }
}
