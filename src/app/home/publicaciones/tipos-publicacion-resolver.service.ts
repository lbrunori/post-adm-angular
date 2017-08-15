import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/Rx';

import { TiposPublicacionService } from './tipos-publicacion.service';
import { Publicacion } from './publicacion.model';
import { environment } from './../../../environments/environment';

interface TipoPublicacion {
  nombre: String,
  nombreDescriptivo: String
}

@Injectable()
export class TiposPublicacionResolverService implements Resolve<TipoPublicacion>{

  constructor(private tiposProyectoService: TiposPublicacionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TipoPublicacion> | Promise<TipoPublicacion> {
    return this.tiposProyectoService.getTiposPublicacion();
  }

}
