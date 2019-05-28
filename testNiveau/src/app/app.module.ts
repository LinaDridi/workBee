import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CompanyServiceService } from './company-service.service';
import { HttpClientModule } from '@angular/common/http';
//All routes for application
const appRoutes: Routes = [
  { path: '', component: TeamMembersComponent }  //to make TeamMembers component the default opening page
]

@NgModule({
  declarations: [
    AppComponent,
    TeamMembersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CompanyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
