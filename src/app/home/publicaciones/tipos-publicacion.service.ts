import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TiposPublicacionService {

  headers = new Headers({
    'Content-Type': 'application/json',
    'x-auth': localStorage.getItem('inta-token')
  })


  constructor(private http: Http) { }

  getTiposPublicacion() {
    return this.http.get(`${environment.URL_SERVIDOR}/tipos-publicacion`, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
    ;
  }
}
