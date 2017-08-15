import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { Publicacion } from './../../publicacion.model';
import { PublicacionService } from './../../publicacion.service';

@Component({
  selector: 'app-vista-previa',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.css']
})
export class VistaPreviaComponent implements OnInit {

  publicacion: Publicacion;

  constructor(private route: ActivatedRoute, private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.publicacion = data.publicacion;
      })
  }

}
