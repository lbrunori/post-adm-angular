import { Component, OnInit } from '@angular/core';
import { Data, ActivatedRoute } from '@angular/router';

import { PublicacionService } from '../publicacion.service';
import { Publicacion } from '../publicacion.model';
import { TipoPublicacion } from './../tipos-publicacion.model';

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
    this.publicacion = new Publicacion({}, new Date(), '', '', '', {});
    this.route.data
      .subscribe((data: Data) => {
        this.tiposPublicacion = data.tiposPublicacion;
      })
  }

  savePublicacion(publicacion: Publicacion) {
    this.publicacionService.savePublicacion(publicacion)
      .subscribe((resp) => {
        console.log(resp)
      }, (err) => {
        console.error(err);
      })
  }

}
