import { Component, OnInit, Input } from "@angular/core";
import { Doctor } from "src/app/doctor";
import { CrudService } from "src/app/crud.service";
import { CustomRequest } from "src/app/customrequest";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-doctordetail",
  templateUrl: "./doctordetail.component.html",
  styleUrls: ["./doctordetail.component.scss"]
})
export class DoctordetailComponent implements OnInit {
  @Input() doctor: Doctor;
  update: boolean = false;
  updateStatus: boolean = false;
  constructor(private crudService: CrudService) {}
  private request: CustomRequest<Doctor>;
  ngOnInit() {
    this.UpdateForm.patchValue(this.doctor);
  }
  ngOnChanges(changes) {
    this.UpdateForm.patchValue(this.doctor);
  }
  UpdateForm = new FormGroup({
    username: new FormControl(""),
    pkUserId: new FormControl(""),
    password: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    age: new FormControl(""),
    doctorSpecialisation: new FormControl(""),
    experience: new FormControl("")
  });
  updateDoctor() {
    this.update = false;
    this.updateStatus = true;
    this.doctor = this.UpdateForm.value;
    this.crudService.updateDoctor(this.doctor).subscribe(data => {
      this.request = data;

      console.log(this.request.data);
    });
  }
}
