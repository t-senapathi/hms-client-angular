import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from 'src/app/crud.service';
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent implements OnInit {

  @Input() name:string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {

  }

}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private modalService: NgbModal,private crudService : CrudService) {}
  private doctors :any = [];
  private isPageLoaded = false;

  @Input() listData :Array<any>;

  ngOnInit() {
    this.crudService.getAllDoctors().subscribe((data)=>{
      this.doctors = data.data;
      console.log(this.doctors);
      this.isPageLoaded = true;
    })
  }
  open(firstname:string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = firstname;
  }
  getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
  }

}
