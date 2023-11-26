import { Component, OnInit } from '@angular/core';
import { LoadconfigService } from '../loadconfig.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private configLoaderService: LoadconfigService) { }

  ngOnInit(): void {
  }

}
