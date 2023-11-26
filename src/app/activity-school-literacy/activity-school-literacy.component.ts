import { Component, OnInit } from '@angular/core';
import { LoadconfigService } from '../loadconfig.service';

@Component({
  selector: 'app-activity-school-literacy',
  templateUrl: './activity-school-literacy.component.html',
  styleUrls: ['./activity-school-literacy.component.css']
})
export class ActivitySchoolLiteracyComponent implements OnInit {

  constructor(private configLoaderService: LoadconfigService) { }

  ngOnInit(): void {
    (<HTMLIFrameElement>document.getElementById('videoview')).src = this.configLoaderService.SchoolLiteracyYoutubeVideoURL;
  }

}
