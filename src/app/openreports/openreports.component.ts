import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-openreports',
  templateUrl: './openreports.component.html',
  styleUrls: ['./openreports.component.css']
})
export class OpenreportsComponent implements OnInit {
  ReportName:string;
  reportdetails:string;
  Filename:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
     this.ReportName= params.report;
     this.Filename= params.filename;
     this.reportdetails=params.reportdetails;
    }
  );
    
  }

}
