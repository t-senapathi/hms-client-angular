import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userservice:UserserviceService,private route:ActivatedRoute,private router:Router) { }

  patientshow:boolean=false;
  doctorshow:boolean=false;

  ngOnInit() {
    
  }

  listpatient()
  {
     this.patientshow=true;
     this.doctorshow=false;

    
  }

  showdoctor()
  {
    this.router.navigate(['doctor'],{relativeTo:this.route});
   
  }

}
