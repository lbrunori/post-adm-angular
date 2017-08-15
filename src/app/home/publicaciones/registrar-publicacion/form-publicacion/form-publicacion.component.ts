import { TipoPublicacion } from '../../tipos-publicacion.model';
import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Publicacion } from './../../publicacion.model';
import { NgModel, NgForm } from '@angular/forms';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

@Component({
  selector: 'app-form-publicacion',
  templateUrl: './form-publicacion.component.html',
  styleUrls: ['./form-publicacion.component.css']
})
export class FormPublicacionComponent implements OnInit {

  @Input() publicacionInput: Publicacion;
  @Input() tiposPublicacionInput: TipoPublicacion;
  @Output() submitted: EventEmitter<Publicacion> = new EventEmitter();
  @ViewChild('form') form: NgForm;
  uploader: FileUploader = new FileUploader({ url: 'http://localhost:3000/api/publicaciones' });
  uploaderOptions: FileUploaderOptions = {};


  constructor() { }

  ngOnInit() {
    this.uploaderOptions.headers = [{ name: 'x-auth', value: localStorage.getItem('inta-token') }];
    this.uploader.setOptions(this.uploaderOptions);
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
    this.uploader.onBuildItemForm = (item, uploaderForm) => {
      uploaderForm.append('contenido', this.form.value.contenido);
      uploaderForm.append('descripcion', this.form.value.descripcion);
      uploaderForm.append('titulo', this.form.value.titulo);
      uploaderForm.append('tipoPublicacion', JSON.stringify(this.form.value.tipoPublicacion, undefined, 2));
    };
  }





  onSubmit() {
    this.uploader.uploadAll();
  }

  // onSubmit() {
  //   console.log(this.form);
  //   this.publicacionInput.titulo = this.form.value.titulo;
  //   this.publicacionInput.contenido = this.form.value.contenido;
  //   this.publicacionInput.descripcion = this.form.value.descripcion;
  //   this.publicacionInput.imagenPortada = this.form.value.imagenPortada;
  //   this.publicacionInput.tipoPublicacion = this.form.value.tipoPublicacion;

  //   console.log(this.publicacionInput)
  //   this.submitted.emit(this.publicacionInput);
  // }

  // onChange(event) {
  //   var files = event.srcElement.files;
  //   console.log(files);
  // }


}
