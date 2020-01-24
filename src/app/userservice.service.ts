import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  private _name: string;

  private _listOfDoctor: Array<any> = [{ "name": "sena", "data": "cardiologist" },{ "name": "sena", "data": "cardiologist" },{ "name": "sena", "data": "cardiologist" },{ "name": "sena", "data": "cardiologist" },{ "name": "sena", "data": "cardiologist" },{ "name": "sena", "data": "cardiologist" },{ "name": "sena", "data": "cardiologist" },{ "name": "sena", "data": "cardiologist" },{ "name": "sena", "data": "cardiologist" }, { "name": "vijay", "data": "eye doctor" }];
  
  public get listOfDoctor(): Array<any> {
    return this._listOfDoctor;
  }
  public set listOfDoctor(value: Array<any>) {
    this._listOfDoctor = value;
  }

  private _listOfPatient: Array<any> = [{ "name": "nirmal", "data": "fever" }, { "name": "rose", "data": "cold" }, { "name": "rose", "data": "cold" }, { "name": "rose", "data": "cold" }, { "name": "vishal", "data": "body pain" }];
  
  public get listOfPatient(): Array<any> {
    return this._listOfPatient;
  }
  public set listOfPatient(value: Array<any>) {
    this._listOfPatient = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }


}
