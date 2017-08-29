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

  constructor(private route: ActivatedRoute, private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.publicacion = new Publicacion({}, new Date(), '', '', '', new TipoPublicacion("", ""));
    this.route.data
      .subscribe((data: Data) => {
        this.tiposPublicacion = data.tiposPublicacion;
      })
  }



}
