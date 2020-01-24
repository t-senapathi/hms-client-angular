import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  patientshow:boolean=false;
  doctorshow:boolean=false;

  ngOnInit() {
    
  }

  listpatient()
  {
     this.patientshow=true;
     this.doctorshow=false;

    
  }

  listdoctor()
  {
    this.patientshow=false;
    this.doctorshow=true;
   
  }

}
