import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onlylinkreports',
  templateUrl: './onlylinkreports.component.html',
  styleUrls: ['./onlylinkreports.component.css']
})
export class OnlylinkreportsComponent implements OnInit {
  ReportName:string;
  reportdetails:string;
  Filename:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
     this.Filename= params.filename;
    }
  );
  }

}
