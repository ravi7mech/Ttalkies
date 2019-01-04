import { Component, ViewChild, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { TmdbapiService, MediaType, Genres } from 'tmdbapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(MatMenuTrigger) matMenuTrigger : MatMenuTrigger;
  genres: Genres;
  title = 'touring-talkies-app';
  data: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  
  constructor(private tmdbapi : TmdbapiService){

  }

  ngOnInit(){
    // this.tmdbapi.getGenres(MediaType.MOVIE).subscribe(res=>this.genres = res)
  }

  openGenres(){
    this.matMenuTrigger.openMenu();
  }
  closeGenreMenu(){
    this.matMenuTrigger.closeMenu();
  }

}
