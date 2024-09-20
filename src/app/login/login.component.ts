import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  logo = properties.logo;
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    const email = this.formLogin.get('email')?.value;
    const password = this.formLogin.get('password')?.value;

    if (email === 'usuario@example.com' && password === '1234') {
      localStorage.setItem('authToken', 'dummy-token');
      console.log('paso');
      this.router.navigate(['/admin']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
