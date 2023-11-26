import { Component, NgModule, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { LoadconfigService } from '../loadconfig.service';
import {JsonEditorOptions} from "@maaxgr/ang-jsoneditor";

@Component({
  selector: 'app-aws-upload',
  templateUrl: './aws-upload.component.html',
  styleUrls: ['./aws-upload.component.css']
})
export class AwsUploadComponent implements OnInit {
  toFile;
  userName:string="";
  password:string="";
  authorized:boolean=false;
  wrongcreds:boolean=false;
  uploaded:boolean=false;
  filename:string;
  uploadedfile:string;
  public editorOptions: JsonEditorOptions;
  public initialData: any;
  public visibleData: any;
  constructor(private uploadService: UploadService,private configLoaderService: LoadconfigService) {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];

    this.initialData = {"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]}
    this.visibleData = this.initialData;
   }

  ngOnInit(): void {
  }
  showJson(d: Event) {
    this.visibleData = d;
  }
  verify()
  {
    if(this.userName===this.configLoaderService.Username && this.password===this.configLoaderService.Password)
    {
this.authorized=true;
this.wrongcreds=false;
    }
    else
    {
      this.wrongcreds=true;
      this.authorized=false;
    }
  }
  submit() {
    this.uploaded=false;
    const file = this.toFile.item(0);
    this.uploadedfile=file.name;
    if(this.uploadedfile.split('.')[1]===this.filename.split('.')[1])
    {
      if(this.filename.split('.')[0].length===0)
      {
        this.uploaded=this.uploadService.fileUpload(file,this.uploadedfile);
      }
      else
      {
   this.uploaded=this.uploadService.fileUpload(file,this.filename);
      }
    }
    else
    {
      window.alert('Please Upload '+ this.filename.split('.')[1] +' file only');
    }
    }
   
    onChange(event) {
    this.toFile = event.target.files;
    }
    onItemChange(value){
     this.filename=value;
   }
}
