import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { LoadconfigService } from './loadconfig.service';
import { Routes,RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BoardMembersComponent } from './board-members/board-members.component';
import { LegalStatusComponent } from './legal-status/legal-status.component';
import { ReportsComponent } from './reports/reports.component';
import { LatestComponent } from './latest/latest.component';
import { DonateComponent } from './donate/donate.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { ActivityHealthComponent } from './activity-health/activity-health.component';
import { ActivityMotherChildComponent } from './activity-mother-child/activity-mother-child.component';
import { ActivitySchoolLiteracyComponent } from './activity-school-literacy/activity-school-literacy.component';
import { PreloadFactory } from "./preload-service.factory";
import { HttpClientModule } from "@angular/common/http";
import { AwsUploadComponent } from './aws-upload/aws-upload.component';
import { ProfileComponent } from './profile/profile.component';
import { OurSupportersComponent } from './our-supporters/our-supporters.component';
import { NgJsonEditorModule } from '@maaxgr/ang-jsoneditor';
import { NaturalResourceManagmentComponent } from './natural-resource-managment/natural-resource-managment.component';
import { FarmerWelfareComponent } from './farmer-welfare/farmer-welfare.component';
import { WomenChildCareComponent } from './women-child-care/women-child-care.component';
import { OpenreportsComponent } from './openreports/openreports.component';
import { OurGalleryComponent } from './our-gallery/our-gallery.component';
import { LinkvideosComponent } from './linkvideos/linkvideos.component';
import { DynamicreportComponent } from './dynamicreport/dynamicreport.component';
import { AwardsComponent } from './awards/awards.component' 
const appRoutes:Routes=[
  {path:'',component:HomePageComponent},
  {path:'Homepage',component:HomePageComponent},
  {path:'BoardMembers',component:BoardMembersComponent},
  {path:'LegalStatus',component:LegalStatusComponent},
  {path:'Reports',component:DynamicreportComponent},
  {path:'Latest',component:LatestComponent},
  {path:'Donate',component:DonateComponent},
  {path:'VisionMission',component:VisionMissionComponent},
  {path:'Health',component:ActivityHealthComponent},
  {path:'MotherChild',component:ActivityMotherChildComponent},
  {path:'School',component:ActivitySchoolLiteracyComponent},
  {path:'Others',component:ActivitiesComponent},
  {path:'Upload',component:AwsUploadComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'OurSupporters',component:OurSupportersComponent},
  {path:'WomenChildCare',component:WomenChildCareComponent},
  {path:'NaturalResourceManagment',component:NaturalResourceManagmentComponent},
  {path:'FarmerWelfare',component:FarmerWelfareComponent},
  {path:'OpenReports',component:OpenreportsComponent},
  {path:'OurGallery',component:OurGalleryComponent},
  {path:'LinkVideos',component:LinkvideosComponent},
  {path:'Awards',component:AwardsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ActivitiesComponent,
    BoardMembersComponent,
    LegalStatusComponent,
    ReportsComponent,
    LatestComponent,
    DonateComponent,
    VisionMissionComponent,
    ActivityHealthComponent,
    ActivityMotherChildComponent,
    ActivitySchoolLiteracyComponent,
    AwsUploadComponent,
    ProfileComponent,
    OurSupportersComponent,
    NaturalResourceManagmentComponent,
    FarmerWelfareComponent,
    WomenChildCareComponent,
    OpenreportsComponent,
    OurGalleryComponent,
    LinkvideosComponent,
    DynamicreportComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,FormsModule, PdfViewerModule, HttpClientModule,RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),NgJsonEditorModule
  ],
  providers: [   LoadconfigService,
    {
      provide: APP_INITIALIZER,
      deps: [
        LoadconfigService
      ],
      multi: true,
      useFactory: PreloadFactory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
