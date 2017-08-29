import { AutenticacionService } from './autenticacion.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AutenticacionService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.userMe().map(e => {
      if (e) {
        return true;
      }
    }).catch(() => {
      this.router.navigate(['']);
      return Observable.of(false);
    });
  }
}
