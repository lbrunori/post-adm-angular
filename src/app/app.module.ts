
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
import { AutenticacionService } from './autenticacion.service';
import { RegistrarPublicacionComponent } from './home/publicaciones/registrar-publicacion/registrar-publicacion.component';
import { FormPublicacionComponent } from './home/publicaciones/registrar-publicacion/form-publicacion/form-publicacion.component';
import { ConsultarPublicacionComponent } from './home/publicaciones/consultar-publicacion/consultar-publicacion.component'
import { PublicacionService } from './home/publicaciones/publicacion.service';
import { PublicacionResolverService } from './home/publicaciones/publicacion-resolver.service';
import { TiposPublicacionService } from './home/publicaciones/tipos-publicacion.service';
import { TiposPublicacionResolverService } from './home/publicaciones/tipos-publicacion-resolver.service';
import { VistaPreviaComponent } from './home/publicaciones/vista-previa/vista-previa/vista-previa.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

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
    }, {
      path: 'publicaciones/nueva-publicacion',
      component: RegistrarPublicacionComponent,
      resolve: {
        tiposPublicacion: TiposPublicacionResolverService
      }
    }, {
      path: 'publicaciones/consultar-publicacion/:id',
      component: ConsultarPublicacionComponent,
      resolve: {
        publicacion: PublicacionResolverService,
        tiposPublicacion: TiposPublicacionResolverService
      }
    }, {
      path: 'publicaciones/vista-previa/:id',
      component: VistaPreviaComponent,
      resolve: {
        publicacion: PublicacionResolverService
      }
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
    PrincipalComponent,
    RegistrarPublicacionComponent,
    FormPublicacionComponent,
    ConsultarPublicacionComponent,
    VistaPreviaComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [AutenticacionService, PublicacionService, PublicacionResolverService, TiposPublicacionResolverService, TiposPublicacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
