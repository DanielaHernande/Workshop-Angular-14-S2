import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { properties } from 'src/assets/properties/properties';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/assets/model/LoginResponse';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logo = properties.logo;
  formLogin: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.formLogin.valid) {
      const loginDta = this.formLogin.value;

      this.http
        .post<LoginResponse>('https://reqres.in/api/login', loginDta)
        .subscribe((response) => {
          localStorage.setItem('authToken', response['token']);
          console.log("Funciono va para users")
          this.router.navigate(['users']);
        },
        error => {
          alert('Error de autenticacnion')
        }
      );
    } else {
      alert('Formulario no invalido')
    }
  }
}
