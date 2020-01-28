import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Doctor } from "src/app/doctor";
import { CrudService } from "src/app/crud.service";
import { CustomRequest } from "src/app/customrequest";
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { forbiddenPasswordValidator } from "../FormValidators";

@Component({
  selector: "app-createdoctor",
  templateUrl: "./createdoctor.component.html",
  styleUrls: ["./createdoctor.component.scss"]
})
export class CreatedoctorComponent implements OnInit {
  @Output() doctorCreated = new EventEmitter();
  createStatus: boolean = false;
  doctor: Doctor;
  CreateForm: FormGroup;
  constructor(
    private crudService: CrudService,
    private formBuilder: FormBuilder
  ) {}
  private request: CustomRequest<Doctor>;
  ngOnInit() {
    this.CreateForm = this.formBuilder.group(
      {
        username: [""],
        password: ["", [Validators.required, Validators.minLength(8)]],
        firstName: [""],
        lastName: [""],
        age: [""],
        doctorSpecialisation: [""],
        experience: [""]
      },
      { validator: forbiddenPasswordValidator }
    );
  }
  get form() {
    return this.CreateForm.controls;
  }
  get password() {
    return this.CreateForm.get("password");
  }

  create() {
    console.log(this.CreateForm.value);
    this.doctor = this.CreateForm.value;
    this.crudService.createDoctor(this.doctor).subscribe(data => {
      this.request = data;
      this.doctorCreated.emit(null);
      this.createStatus = true;
      console.log(this.request.data);
    });
  }
}
