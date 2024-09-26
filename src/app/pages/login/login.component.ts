import { Component, inject } from '@angular/core';
import {
  Auth,
  Unsubscribe,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  authService = inject(AuthService);

  registro() {
    this.authService.registro(this.email, this.password);
    //Crear un usuario, automáticamente inicia sesión.
  }

  login() {
    this.authService.login(this.email, this.password);
  }
}
