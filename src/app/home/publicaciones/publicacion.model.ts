export class Publicacion {

  _id: string;
  creador: Object;
  fechaCreacion: Date;
  fechaFinalizacion: Date;
  imagenes: String;
  imagenPortada: String;
  titulo: String;
  descripcion: String;
  contenido: String;
  tipoPublicacion: Object;
  fuente: String;

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
