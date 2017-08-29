import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TiposPublicacionService {


  constructor(private http: Http) { }

  getTiposPublicacion() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('inta-token')
    })
    return this.http.get(`${environment.URL_SERVIDOR}/tipos-publicacion`, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
    ;
  }
}
