import { Component, OnInit, Input } from "@angular/core";
import { Doctor } from "src/app/doctor";
import { CrudService } from 'src/app/crud.service';
import { CustomRequest } from 'src/app/customrequest';

@Component({
  selector: "app-doctordetail",
  templateUrl: "./doctordetail.component.html",
  styleUrls: ["./doctordetail.component.scss"]
})
export class DoctordetailComponent implements OnInit {
 @Input() doctor:Doctor;
 update:boolean=false;
 updateStatus:boolean=false;
  constructor(private crudService: CrudService) {}
  private request: CustomRequest<Doctor>;
  ngOnInit() {}
updateDoctor(){
  this.update=false;
  this.updateStatus=true;
  this.crudService
      .updateDoctor(this.doctor)
      .subscribe(data => {
        this.request = data;

        console.log(this.request.data);
      });
}
deleteDoctor(){
  this.crudService
      .deleteDoctor(this.doctor)
      .subscribe(data => {
        this.request = data;

        console.log(this.request.data);
      });
}
}
