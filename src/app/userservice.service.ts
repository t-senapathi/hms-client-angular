import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  private _name: string;


  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }


}
