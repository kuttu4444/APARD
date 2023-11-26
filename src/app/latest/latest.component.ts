import { Component, OnInit } from '@angular/core';
import { LoadconfigService } from '../loadconfig.service';
@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  isOn:boolean;
  YoutubeName1:string;
  YoutubeName2:string;
  YoutubeName3:string;
  YoutubeName4:string;
  YoutubeName5:string;
  YoutubeName6:string;
  YoutubeName7:string;
  YoutubeName8:string;
  YoutubeName9:string;
  YoutubeName10:string;
  YoutubeURL1:string;
  YoutubeURL2:string;
  YoutubeURL3:string;
  YoutubeURL4:string;
  YoutubeURL5:string;
  YoutubeURL6:string;
  YoutubeURL7:string;
  YoutubeURL8:string;
  YoutubeURL9:string;
  YoutubeURL10:string;

  constructor(private configLoaderService: LoadconfigService) { }

  ngOnInit(): void {
    this.YoutubeName1=this.configLoaderService.YoutubeName1;
    this.YoutubeName2=this.configLoaderService.YoutubeName2;
    this.YoutubeName3=this.configLoaderService.YoutubeName3;
    this.YoutubeName4=this.configLoaderService.YoutubeName4;
    this.YoutubeName5=this.configLoaderService.YoutubeName5;
    this.YoutubeName6=this.configLoaderService.YoutubeName6;
    this.YoutubeName7=this.configLoaderService.YoutubeName7;
    this.YoutubeName8=this.configLoaderService.YoutubeName8;
    this.YoutubeName9=this.configLoaderService.YoutubeName9;
    this.YoutubeName10=this.configLoaderService.YoutubeName10;
    this.YoutubeURL1=this.configLoaderService.YoutubeURL1;
    this.YoutubeURL2=this.configLoaderService.YoutubeURL2;
    this.YoutubeURL3=this.configLoaderService.YoutubeURL3;
    this.YoutubeURL4=this.configLoaderService.YoutubeURL4;
    this.YoutubeURL5=this.configLoaderService.YoutubeURL5;
    this.YoutubeURL6=this.configLoaderService.YoutubeURL6;
    this.YoutubeURL7=this.configLoaderService.YoutubeURL7;
    this.YoutubeURL8=this.configLoaderService.YoutubeURL8;
    this.YoutubeURL9=this.configLoaderService.YoutubeURL9;
    this.YoutubeURL10=this.configLoaderService.YoutubeURL10;

    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL1;
    this.isOn=true;
  }
  openReport(id:number)
{
  this.isOn=false;
  if(id===1)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL1;
  }
  if(id===2)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL2;
  }
  if(id===3)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL3;
  }
  if(id===4)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL4;
  }
  if(id===5)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL5;
  }
  if(id===6)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL6;
  }
  if(id===7)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL7;
  }
  if(id===8)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL8;
  }
  if(id===9)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL9;
  }
  if(id===10)
  {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.YoutubeURL10;
  }
  
}

}
