import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Publicacion } from './../../publicacion.model';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-publicacion',
  templateUrl: './form-publicacion.component.html',
  styleUrls: ['./form-publicacion.component.css']
})
export class FormPublicacionComponent implements OnInit {

  @Input() publicacionInput: Publicacion;
  @Output() submitted: EventEmitter<Publicacion> = new EventEmitter();
  @ViewChild('form') form: NgForm;

  constructor() {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.publicacionInput.titulo = this.form.value.titulo;
    this.publicacionInput.contenido = this.form.value.contenido;
    this.publicacionInput.descripcion = this.form.value.descripcion;
    this.submitted.emit(this.publicacionInput);
  }


}
