import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Publicacion } from './publicacion.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class PublicacionService {

  headers = new Headers({
    'Content-Type': 'application/json',
    'x-auth': localStorage.getItem('inta-token')
  })

  constructor(private http: Http) { }

  getPublicaciones() {
    return this.http.get(environment.URL_SERVIDOR + '/publicaciones', { headers: this.headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPublicacion(id) {
    return this.http.get(`${environment.URL_SERVIDOR}/publicaciones/${id}`, { headers: this.headers })
      .map((response: Response) => response.json().publicacion)
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deletePublicacion(id) {
    return this.http.delete(`${environment.URL_SERVIDOR}/publicaciones/${id}`, { headers: this.headers });
  }

  savePublicacion(publicacion: Publicacion) {
    return this.http.post(`${environment.URL_SERVIDOR}/publicaciones`, publicacion, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  updatePublicacion(publicacion: Publicacion) {
    return this.http.put(`${environment.URL_SERVIDOR}/publicaciones`, publicacion, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
