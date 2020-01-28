import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CrudService } from "src/app/crud.service";
import { CustomRequest } from "src/app/customrequest";
import { Doctor } from "src/app/doctor";

@Component({
  selector: "app-doctorlist",
  templateUrl: "./doctorlist.component.html",
  styleUrls: ["./doctorlist.component.scss"]
})
export class DoctorlistComponent implements OnInit {
  constructor(private crudService: CrudService) {}
  public doctors: Doctor[];
  private request: CustomRequest<Doctor>;
  private isPageLoaded = false;
  @Output() doctorSelected = new EventEmitter<Doctor>();
  ngOnInit() {
   this.getAllDoctor();
  }
  getAllDoctor(){
    this.crudService.getAllDoctors().subscribe(data => {
      this.request = data;
      this.doctors = this.request.data;
      console.log(this.doctors);
      this.isPageLoaded = true;
    });
  }
  deleteDoctor(doctor:Doctor){
    this.crudService
        .deleteDoctor(doctor)
        .subscribe(data => {
          this.request = data;
          this.getAllDoctor();
          console.log(this.request.data);
        });
  }
  onSelected(doctor:Doctor) {
    this.doctorSelected.emit(doctor);
  }
  getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
  }
}
