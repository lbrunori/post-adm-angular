import { PublicacionService } from '../publicacion.service';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../publicacion.model';

@Component({
  selector: 'app-registrar-publicacion',
  templateUrl: './registrar-publicacion.component.html',
  styleUrls: ['./registrar-publicacion.component.css']
})
export class RegistrarPublicacionComponent implements OnInit {

  publicacion: Publicacion;

  constructor(private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.publicacion = new Publicacion({}, new Date(), '', '', '', {});
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
