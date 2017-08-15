export class ModalConfig {
  titulo: string;
  cuerpo: string;
  botonAceptar: boolean;
  botonCancelar: boolean;
  objetoDelPadre: any;

  constructor(titulo: string, cuerpo: string, botonAceptar: boolean,
    botonCancelar: boolean) {
    this.titulo = titulo;
    this.cuerpo = cuerpo;
    this.botonAceptar = botonAceptar;
    this.botonCancelar = botonCancelar;
  }

  setObjetoDelPadre(objetoDelPadre: any) {
    this.objetoDelPadre = objetoDelPadre;
  }
}
