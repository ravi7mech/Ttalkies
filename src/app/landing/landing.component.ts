import { Component, OnInit } from '@angular/core';
import { TmdbapiService } from 'tmdbapi';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private tmdbapi : TmdbapiService) { }
  
  ngOnInit() {
    this.tmdbapi.getConfigAPI().subscribe(res =>{
      console.log(res)
    })
  }

}
