import { Component } from '@angular/core';
import { Movie } from './movie';
import { moviedb } from './movie';
import { allsongsData, Songs } from './songs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies:Movie[]=moviedb;
  songs:Songs[]=allsongsData;
  title = 'ComponentHandle';
}
