import { Component, OnInit, Input, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { TipoPublicacion } from '../../tipos-publicacion.model';
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
  uploader: FileUploader = new FileUploader(
    { url: 'http://localhost:3000/api/publicaciones' }
  );
  uploaderOptions: FileUploaderOptions = {};
  public options: Object = {
    placeholderText: 'Ingrese el contenido de la publicación',
    charCounterCount: true,
    rows: 5
  }

  constructor() {
  }

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
      uploaderForm.append('fuente', this.form.value.fuente);
      uploaderForm.append('tipoPublicacion', JSON.stringify(this.form.value.tipoPublicacion, undefined, 2));
    };
    console.log(this.publicacionInput.tipoPublicacion)
  }

  resetForm() {
    this.form.reset();
  }

  onSubmit() {
    this.uploader.uploadAll();
  }

  log(elem: ElementRef) {
    console.debug(elem);
  }

}
