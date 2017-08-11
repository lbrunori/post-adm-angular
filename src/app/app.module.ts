import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PublicacionesComponent } from './home/publicaciones/publicaciones.component';
import { UsuariosComponent } from './home/usuarios/usuarios.component';
import { AsideMenuComponent } from './home/aside-menu/aside-menu.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { AutenticacionService } from './autenticacion.service'

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [{
      path: '',
      component: PrincipalComponent
    }, {
      path: 'usuarios',
      component: UsuariosComponent
    }, {
      path: 'publicaciones',
      component: PublicacionesComponent
    }]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PublicacionesComponent,
    UsuariosComponent,
    AsideMenuComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
