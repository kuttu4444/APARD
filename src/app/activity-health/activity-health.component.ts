import { Component, OnInit } from '@angular/core';
import { LoadconfigService } from '../loadconfig.service';

@Component({
  selector: 'app-activity-health',
  templateUrl: './activity-health.component.html',
  styleUrls: ['./activity-health.component.css']
})
export class ActivityHealthComponent implements OnInit {

  constructor(private configLoaderService: LoadconfigService) { }

  ngOnInit(): void {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.configLoaderService.HealthCareYoutubeVideoURL;
  }

}
