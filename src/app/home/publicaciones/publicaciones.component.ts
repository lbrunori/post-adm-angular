import { ModalConfig } from '../../util/modal/modalConfig.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Publicacion } from './publicacion.model';
import { PublicacionService } from './publicacion.service';

import _ from 'lodash';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones: Publicacion[] = [];
  publicacionAEliminarId: string;
  modalConfig: ModalConfig;
  @ViewChild('modal') modal;



  constructor(private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.publicacionService.getPublicaciones()
      .subscribe((resp) => {
        this.publicaciones = resp;
      }, (err) => {
        alert(err);
      })
    this.modalConfig = new ModalConfig("Eliminar publicación",
      "Para eliminar la publicación, hago click en aceptar.",
      true, true);
  }

  mostrarModalConfirmacion(id: string) {
    this.modal.openModalWithData(id);
  }

  deletePublicacion(id) {
    this.publicacionService.deletePublicacion(id)
      .subscribe((resp) => {
        _.remove(this.publicaciones, (elem) => {
          return elem._id === id;
        })
      }, (err) => {
        alert(err);
      })
  }

}
