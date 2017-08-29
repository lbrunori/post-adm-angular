
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from './../environments/environment';

@Injectable()
export class AutenticacionService {

  constructor(private http: Http) { }

  login(email: string, password: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(environment.URL_SERVIDOR + '/usuarios/login', { email, password }, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('inta-token')
    })
    return this.http.delete(environment.URL_SERVIDOR + '/usuarios/me/logout', { headers: headers });
  }

  userMe() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('inta-token')
    })
    return this.http.get(environment.URL_SERVIDOR + '/usuarios/me', { headers: headers });
  }
}
