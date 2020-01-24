import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userservice:UserserviceService) { }

  name:string;
 
  ngOnInit() {
    this.name=this.userservice.name;
  }

}
