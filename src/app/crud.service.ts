import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Doctor } from "./doctor";
import { CustomRequest } from "./customrequest";
@Injectable({
  providedIn: "root"
})
export class CrudService {
  private id: number;
  private url = "http://localhost:8080";
  public getAllDoctors = (): Observable<CustomRequest<Doctor>> => {
    return this.http.get<CustomRequest<Doctor>>(`${this.url}/doctor/all`);
  };
  public createDoctor = (doctor: Doctor): Observable<CustomRequest<Doctor>> => {
    console.log(doctor);
    return this.http.post<CustomRequest<Doctor>>(
      `${this.url}/doctor/create`,
      doctor
    );
  };
  public updateDoctor = (doctor: Doctor): Observable<CustomRequest<Doctor>> => {
    console.log(doctor);
    return this.http.put<CustomRequest<Doctor>>(
      `${this.url}/doctor/update`,
      doctor
    );
  };
  public deleteDoctor = (doctor: Doctor): Observable<CustomRequest<Doctor>> => {
    console.log(doctor);
    this.id = doctor.pkUserId;
    return this.http.delete<CustomRequest<Doctor>>(
      `${this.url}/doctor/delete/` + this.id
    );
  };
  public getAllPatients = () => {
    return this.http.get(`${this.url}/patients/all`);
  };
  constructor(private http: HttpClient) {}
}
