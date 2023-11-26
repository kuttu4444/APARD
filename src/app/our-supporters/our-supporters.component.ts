import { Component, OnInit } from '@angular/core';
import { LoadconfigService } from '../loadconfig.service';

@Component({
  selector: 'app-our-supporters',
  templateUrl: './our-supporters.component.html',
  styleUrls: ['./our-supporters.component.css']
})
export class OurSupportersComponent implements OnInit {

  constructor(private configLoaderService: LoadconfigService) { }

  ngOnInit(): void { 
  }

}
