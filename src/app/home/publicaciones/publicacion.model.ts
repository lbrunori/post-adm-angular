export class Publicacion {

  creador: Object;
  fechaCreacion: Date;
  fechaFinalizacion: Date;
  imagenes: String;
  imagenPortada: String;
  titulo: String;
  descripcion: String;
  contenido: String;
  tipoPublicacion: Object;

  constructor(creador: Object, fechaCreacion: Date,
    titulo: string, descripcion: string,
    contenido: string, tipoPublicacion: Object) {
    this.creador = creador;
    this.fechaCreacion = fechaCreacion;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.contenido = contenido;
    this.tipoPublicacion = tipoPublicacion;
  }

}
