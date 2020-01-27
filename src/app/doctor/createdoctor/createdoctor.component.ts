import { Component, OnInit } from "@angular/core";
import { Doctor } from "src/app/doctor";
import { CrudService } from "src/app/crud.service";
import { CustomRequest } from "src/app/customrequest";

@Component({
  selector: "app-createdoctor",
  templateUrl: "./createdoctor.component.html",
  styleUrls: ["./createdoctor.component.scss"]
})
export class CreatedoctorComponent implements OnInit {
  constructor(private crudService: CrudService) {}
  private doctor: Doctor;
  private request: CustomRequest<Doctor>;
  ngOnInit() {}
  create(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    age: number,
    doctorSpecialisation: string,
    experience: number
  ) {
    this.crudService
      .createDoctor({
        username,
        password,
        firstName,
        lastName,
        age,
        doctorSpecialisation,
        experience
      } as Doctor)
      .subscribe(data => {
        this.request = data;

        console.log(this.request.data);
      });
  }
}
