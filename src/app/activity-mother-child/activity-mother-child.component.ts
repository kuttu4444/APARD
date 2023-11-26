import { Component, OnInit } from '@angular/core';
import { LoadconfigService } from '../loadconfig.service';

@Component({
  selector: 'app-activity-mother-child',
  templateUrl: './activity-mother-child.component.html',
  styleUrls: ['./activity-mother-child.component.css']
})
export class ActivityMotherChildComponent implements OnInit {

  constructor(private configLoaderService: LoadconfigService) { }

  ngOnInit(): void {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.configLoaderService.MotherChildYoutubeVideoURL;
  }

}
