import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Publicacion } from './publicacion.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class PublicacionService {

  constructor(private http: Http) { }

  savePublicacion(publicacion: Publicacion) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('inta-token')
    })
    return this.http.post(`${environment.URL_SERVIDOR}/publicaciones`, publicacion, { headers: headers });
  }

  getPublicaciones() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('inta-token')
    })
    return this.http.get(environment.URL_SERVIDOR + '/publicaciones', { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPublicacion(id) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('inta-token')
    })
    return this.http.get(`${environment.URL_SERVIDOR}/publicaciones/${id}`, { headers: headers })
      .map((response: Response) => response.json().publicacion)
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deletePublicacion(id) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('inta-token')
    })
    return this.http.delete(`${environment.URL_SERVIDOR}/publicaciones/${id}`, { headers: headers });
  }

  updatePublicacion(publicacion: Publicacion) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('inta-token')
    })
    return this.http.put(`${environment.URL_SERVIDOR}/publicaciones/${publicacion._id}`, publicacion, { headers: headers })
      .map((response: Response) => response.json())
  }

}
