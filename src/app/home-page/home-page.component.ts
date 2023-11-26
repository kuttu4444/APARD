import { Component, OnInit } from '@angular/core';
import { LoadconfigService } from '../loadconfig.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  card1:string;
  card2:string;
  card3:string;
  carddetails1:string;
  carddetails2:string;
  carddetails3:string;

  constructor(private configLoaderService: LoadconfigService) { }

  ngOnInit(): void {
    this.card1=this.configLoaderService.card1;
    this.card2=this.configLoaderService.card2;
    this.card3=this.configLoaderService.card3;
    this.carddetails1=this.configLoaderService.carddetails1;
    this.carddetails2=this.configLoaderService.carddetails2;
    this.carddetails3=this.configLoaderService.carddetails3;
    (<HTMLIFrameElement>document.getElementById('videoview1')).src = this.configLoaderService.HomePageYoutubeVideoURL;
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.configLoaderService.SmallHomePageYoutubeVideoURL;
  }

}
