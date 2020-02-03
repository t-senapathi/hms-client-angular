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
  public doctorscopy: Doctor[];
  private request: CustomRequest<Doctor>;
  private isPageLoaded = false;
  private errBlock=false;
  private errorMsg:string;
  @Output() doctorSelected = new EventEmitter<Doctor>();
  filterText:string;
  filter() {
    if (this.filterText === '') {
      this.doctors = Object.assign([], this.doctorscopy);
    }
    else{
      this.doctors = Object.assign([], this.doctorscopy);
      this.doctors = this.doctors.filter((el) => {
        return el.username.includes(this.filterText);
      });
    }
    
  }
  ngOnInit() {
   this.getAllDoctor();
  }
  getAllDoctor(){
    this.crudService.getAllDoctors().subscribe(data => {
      this.request = data;
      this.doctors = this.request.data;
      this.doctorscopy = this.request.data;
      console.log(this.doctors);
      this.isPageLoaded = true;
    },error =>{
      this.errBlock=true;
      this.errorMsg=error;
      console.log(this.errorMsg);
    }
    );
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
