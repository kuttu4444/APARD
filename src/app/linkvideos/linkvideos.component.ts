import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linkvideos',
  templateUrl: './linkvideos.component.html',
  styleUrls: ['./linkvideos.component.css']
})
export class LinkvideosComponent implements OnInit {
  link:string;
  videodetails:string;
  videoname:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
     this.link= params.link;
     this.videodetails=params.videodetails;
     this.videoname=params.videoname;
     (<HTMLIFrameElement>document.getElementById('videoview')).src =params.link+"?rel=0";
    }
  );
  }

}
