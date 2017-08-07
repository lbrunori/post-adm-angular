import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  iniciarSesion(inputEmail: HTMLInputElement, inputContrasenia: HTMLInputElement): void {
    console.log(inputEmail.value);
    console.log(inputContrasenia.value);
  }
}
