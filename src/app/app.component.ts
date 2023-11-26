import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'HomePage';
  link1:any;
  pdfSource:string;
  ngOnInit() {
    var myloc = new Image();  
    myloc.useMap = "https://photos.app.goo.gl/fNVrFDDTigbCfcDR6";
    this.link1= myloc.useMap;
    this.pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  }
}
