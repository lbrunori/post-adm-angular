import { Component, OnInit } from '@angular/core';

import { Publicacion } from './publicacion.model';
import { PublicacionService } from './publicacion.service';
import { _ } from 'lodash';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones: Publicacion[] = []

  constructor(private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.publicacionService.getPublicaciones()
      .subscribe((resp) => {
        this.publicaciones = resp;
      }, (err) => {
        alert(err);
      })
  }

  deletePublicacion(id: string) {
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
