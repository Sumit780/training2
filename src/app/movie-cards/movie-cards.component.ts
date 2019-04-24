import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { Songs } from '../songs';


@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {
 
  //  @Input() movie:Movie;
   @Input() song:Songs;

  constructor() { }

  ngOnInit() {
  }

}
