import { PublicacionService } from './publicacion.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

interface Publicacion {
  creador: Object;
  fechaCreacion: Date;
  fechaFinalizacion: Date;
  imagenes: String;
  imagenPortada: String;
  titulo: String;
  descripcion: String;
  contenido: String;
  tipoPublicacion: Object;
}

@Injectable()
export class PublicacionResolverService implements Resolve<Publicacion> {

  constructor(private publicacionesService: PublicacionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Publicacion> | Promise<Publicacion> | Publicacion {
    return this.publicacionesService.getPublicacion(route.params['id']);
  }

}
