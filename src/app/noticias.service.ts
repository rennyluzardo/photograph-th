import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve, reject } from 'q';

@Injectable()
export class NoticiasService {
  constructor(public http: HttpClient) {
  }

  getTwts = () => {
    // console.log(__dirname)
    return new Promise((resolve, reject) => {
      this.http.get('/tweets_list').subscribe(data => {
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
