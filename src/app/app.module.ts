import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent} from './dashboard/user/user.component';

import { UserserviceService } from './userservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule,HTTP_INTERCEPTORS,HttpHeaders} from '@angular/common/http';
import { CrudService } from './crud.service';
import { DoctorComponent,NgbdModalContent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorlistComponent } from './doctor/doctorlist/doctorlist.component';
import { DoctordetailComponent } from './doctor/doctordetail/doctordetail.component';
import { CreatedoctorComponent } from './doctor/createdoctor/createdoctor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    UserComponent,
    NgbdModalContent,
    DoctorComponent,
    PatientComponent,
    DoctorlistComponent,
    DoctordetailComponent,
    CreatedoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UserserviceService,CrudService],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent]
})
export class AppModule { }
