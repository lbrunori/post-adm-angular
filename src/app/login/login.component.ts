import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Request } from '@angular/http'
import { Router } from "@angular/router";

import { AutenticacionService } from './../autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') loginForm: NgForm;

  constructor(private autenticacionService: AutenticacionService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(): void {
    this.autenticacionService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((res) => {
        localStorage.setItem('inta-token', res.token);
        this.router.navigate(['home']);
      }, (err) => {
        console.log(err);
      })
  }

}
