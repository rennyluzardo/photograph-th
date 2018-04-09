import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [NoticiasService]
})

export class NoticiasComponent implements OnInit {
  constructor( private noticias: NoticiasService) { 
  }  
  totaltwts:Object

  ngOnInit() {
    // this.noticias.getTwts().then(tweets=>{this.totaltwts=tweets}).catch(err=>console.log(err))
  }
}
