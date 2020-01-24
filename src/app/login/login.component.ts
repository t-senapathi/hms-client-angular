import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserserviceService,private router: Router) { }

  ngOnInit() {
  }

  name:string;

login()
{
  this.userservice.name=this.name;
  this.router.navigateByUrl("/dashboard");
}




}
