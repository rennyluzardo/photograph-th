import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service'

var Twitter = require('twitter-node-client').Twitter;

const dataConfig = {
  "consumerKey": "bZVyVqbW1TCN3oNNAwuZE12Uc",
  "consumerSecret": "ZDw1SQ2lgsRu6loTR7DvSARUAEmYUeUEiz8CgYNUEZRiAOAUzZ",
  "accessToken": "283903787-GrfcCsBH72pWyDA1YwWx0taKWm3BSEehTNfcUPAk",
  "accessTokenSecret": "5iNUeZpK2MaDMqlKUs4vVc3bGzDrDFyojca3zJLTYtPUz",
  "callBackUrl": ""
}
var twitter = new Twitter(dataConfig)

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [NoticiasService]
})

export class NoticiasComponent implements OnInit {
  constructor( private noticias: NoticiasService) { 
    this.noticias.getTwts()
  }  
  totaltwts = this.noticias.getTwts()
  ngOnInit() {
  }
}