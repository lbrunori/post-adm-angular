import { Publicacion } from '../publicacion.model';
import { PublicacionService } from '../publicacion.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-consultar-publicacion',
  templateUrl: './consultar-publicacion.component.html',
  styleUrls: ['./consultar-publicacion.component.css']
})
export class ConsultarPublicacionComponent implements OnInit {

  publicacion: Publicacion;

  constructor(private route: ActivatedRoute, private servicioPublicacion: PublicacionService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.publicacion = data.publicacion;
      })
  }

  updatePublicacion(publicacion: Publicacion) {
    this.servicioPublicacion.savePublicacion(publicacion)
      .subscribe((resp) => {
        console.log(resp)
      }, (err) => {
        console.error(err);
      })
  }

}
