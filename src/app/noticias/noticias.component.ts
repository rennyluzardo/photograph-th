import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service'
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [NoticiasService]
})
export class NoticiasComponent implements OnInit {

  constructor( private noticias:NoticiasService ) { }

  ngOnInit() {
  }

}
