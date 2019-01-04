import { Component, OnInit } from '@angular/core';
import { TmdbapiService, Trending, MediaType, TimeWindow } from 'tmdbapi';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  trendingshows : Trending;
  constructor(private tmdbapi:TmdbapiService) { }
  
  ngOnInit() {
    this.tmdbapi.getTrending(MediaType.ALL,TimeWindow.WEEK).subscribe(res=>{
      this.trendingshows = res;
    })
  }

}
