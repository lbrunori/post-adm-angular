import { Component, OnInit, Input, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalConfig } from './modalConfig.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalConfig: ModalConfig;
  @Output() esCancelar: EventEmitter<any> = new EventEmitter<any>();
  @Output() esAceptar: EventEmitter<any> = new EventEmitter<any>();

  modalRef: BsModalRef;
  @ViewChild('template') template: TemplateRef<any>;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(modalConfig: ModalConfig) {
    this.modalConfig = modalConfig;
    this.modalRef = this.modalService.show(this.template);
  }

  openModalWithData(modalConfig: ModalConfig, comodin: any) {
    this.modalConfig = modalConfig;
    this.modalConfig.objetoDelPadre = comodin;
    this.openModal(this.modalConfig);
  }

  onAceptar() {
    this.esAceptar.emit(this.modalConfig.objetoDelPadre);
    this.modalRef.hide();
  }

  onCancelar() {
    this.esCancelar.emit(this.modalConfig.objetoDelPadre);
    this.modalRef.hide();
  }


}
