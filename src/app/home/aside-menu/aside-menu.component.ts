import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from './../../autenticacion.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {

  constructor(private router: Router, private servicioAutenticacion: AutenticacionService) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.servicioAutenticacion.logout()
      .subscribe(() => {
        localStorage.removeItem('inta-token');
        this.router.navigate(['/']);
      }, () => {

      })
  }

}
