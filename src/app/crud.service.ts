import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { CustomRequest } from './customrequest';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url = "http://localhost:8080";
  public  getAllDoctors = ():Observable<CustomRequest<Doctor>> =>{
    return this.http.get<CustomRequest<Doctor>>(`${this.url}/doctor/all`);}
  public getAllPatients = () =>{
    return this.http.get(`${this.url}/patients/all`);
  }
  constructor(private http : HttpClient) { }
}