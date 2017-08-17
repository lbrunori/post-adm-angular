import { Component, OnInit, ViewChild } from '@angular/core';
import { Data, ActivatedRoute } from '@angular/router';

import { PublicacionService } from '../publicacion.service';
import { Publicacion } from '../publicacion.model';
import { TipoPublicacion } from './../tipos-publicacion.model';
import { ModalConfig } from './../../../util/modal/modalConfig.model';

@Component({
  selector: 'app-registrar-publicacion',
  templateUrl: './registrar-publicacion.component.html',
  styleUrls: ['./registrar-publicacion.component.css']
})
export class RegistrarPublicacionComponent implements OnInit {

  publicacion: Publicacion;
  tiposPublicacion: TipoPublicacion;
  modalConfig: ModalConfig;
  @ViewChild('modal') modal;
  @ViewChild('form') form;

  constructor(private route: ActivatedRoute, private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.publicacion = new Publicacion({}, new Date(), '', '', '', {});
    this.route.data
      .subscribe((data: Data) => {
        this.tiposPublicacion = data.tiposPublicacion;
      })
  }

  savePublicacion(publicacion: Publicacion) {
    this.publicacionService.savePublicacion(publicacion)
      .subscribe(resp => {
        this.form.resetForm();
        this.modalConfig = new ModalConfig("Eliminar publicación",
          "Para eliminar la publicación, hago click en aceptar.",
          true, true);
        this.modal.openModal(this.modalConfig);
      }, (err) => {
        this.modalConfig = new ModalConfig("No se puedo registrar la publicación",
          "Ocurrió un problema al intentar registrar la publicación.",
          true, false);
        this.modal.openModal(this.modalConfig);
      })
  }

}
