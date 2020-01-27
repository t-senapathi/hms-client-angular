import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from 'src/app/crud.service';
import {Doctor} from '../doctor';
import { CustomRequest } from '../customrequest';
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Details</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <li>First Name: {{firstName}}</li>
      <li>Last Name: {{lastName}}</li>
      <li>username: {{username}}</li>
      <li>Specialisation: {{specialisation}}</li>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent implements OnInit {

  @Input() specialisation:string;
  @Input() lastName:string;
  @Input() firstName:string;
  @Input() username:string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {

  }

}
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  selectedDoctor:Doctor;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }
  

}

