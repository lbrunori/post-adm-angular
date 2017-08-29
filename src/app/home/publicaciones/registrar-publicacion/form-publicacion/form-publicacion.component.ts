import { Component, OnInit, Input, ViewChild, EventEmitter, Output, ElementRef, AfterViewInit } from '@angular/core';
import { TipoPublicacion } from '../../tipos-publicacion.model';
import { Publicacion } from './../../publicacion.model';
import { NgModel, NgForm } from '@angular/forms';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { environment } from './../../../../../environments/environment';
import { ModalConfig } from './../../../../util/modal/modalConfig.model';
import { PublicacionService } from './../../publicacion.service';
import _ from 'lodash';

@Component({
  selector: 'app-form-publicacion',
  templateUrl: './form-publicacion.component.html',
  styleUrls: ['./form-publicacion.component.css']
})
export class FormPublicacionComponent implements OnInit {

  @Input() publicacionInput: Publicacion;
  @Input() tiposPublicacionInput: TipoPublicacion;
  @Input() esNuevo: boolean;
  @Output() submitted: EventEmitter<Publicacion> = new EventEmitter();
  @ViewChild('modal') modal;
  @ViewChild('form') form;
  @ViewChild('uploadEl') uploadElRef: ElementRef

  modalConfig: ModalConfig;
  uploader: FileUploader;
  uploaderOptions: FileUploaderOptions = {};
  public options: Object = {
    placeholderText: 'Ingrese el contenido de la publicación',
    charCounterCount: true,
    rows: 5
  }

  constructor(private servicioPublicacion: PublicacionService) { }

  ngOnInit() {
    let index = 0;
    _.forEach(this.tiposPublicacionInput, (elem, indexElem) => {
      if (elem._id === this.publicacionInput.tipoPublicacion._id) {
        index = indexElem;
      }
    });
    this.publicacionInput.tipoPublicacion = this.tiposPublicacionInput[index];
    this.uploader = new FileUploader({
      url: this.esNuevo ? `${environment.URL_SERVIDOR}/publicaciones` : `${environment.URL_SERVIDOR}/publicaciones/${this.publicacionInput._id}`,
      method: this.esNuevo ? 'POST' : 'PUT'
    });
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
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      if (status === 200) {
        this.modalConfig = new ModalConfig("Se ha registrado la operación con éxito",
          "La operación ha sido ejecutada con éxito",
          true, false);
        this.modal.openModal(this.modalConfig);
        if (this.esNuevo) {
          this.form.reset();
          this.publicacionInput.contenido = "";
          this.uploadElRef.nativeElement.value = ''
        } else {
          let resp = JSON.parse(response);
          this.publicacionInput.imagenPortada = resp.imagenPortada;
        }
      } else {
        this.modalConfig = new ModalConfig("Error al ejecutar la operación",
          "No se pudo realizar la operación solicitada.",
          true, false);
        this.modal.openModal(this.modalConfig);
      }
    };

  }

  onActualizar() {
    if (this.uploadElRef.nativeElement.value === '') {
      let publicacion: Publicacion = new Publicacion({}, new Date(),
        this.form.value.titulo,
        this.form.value.descripcion,
        this.form.value.contenido,
        this.form.value.tipoPublicacion)
      publicacion.fuente = this.form.value.fuente;
      publicacion._id = this.publicacionInput._id;
      this.servicioPublicacion.updatePublicacion(publicacion)
        .subscribe((resp) => {
          console.log(resp);
          this.modalConfig = new ModalConfig("Se ha registrado la operación con éxito",
            "La operación ha sido ejecutada con éxito",
            true, false);
          this.modal.openModal(this.modalConfig);
        }, (err) => {
          console.error(err);
          this.modalConfig = new ModalConfig("Error al ejecutar la operación",
            "No se pudo realizar la operación solicitada.",
            true, false);
          this.modal.openModal(this.modalConfig);
        })
    } else {
      this.uploader.uploadAll();
    }

  }

  onCrearPublicacion() {
    this.uploader.uploadAll()
  }

}
