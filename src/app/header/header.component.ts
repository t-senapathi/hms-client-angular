import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userservice:UserserviceService,private dashboardComponent:DashboardComponent) { }

  name:string;
 
  ngOnInit() {
    this.name="sena";//this.userservice.name;
  }
  listdoctor(){
    this.dashboardComponent.listdoctor();

  }


}
