import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ApiRequestService } from './services/api-request.service';
import { JsonPipe } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { Usuario } from './classes/usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, LoginComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'servicios-2024-c2';
  datosRecibidos: any = {};

  constructor(protected auth: AuthService) {}

  apiRequestS = inject(ApiRequestService);

  ngOnInit() {
    const peticion = this.apiRequestS.traerUsuario('afriadenrich');

    peticion.subscribe((respueta) => {
      this.datosRecibidos = respueta;
    });

    const user = new Usuario('Fernando', 'fernando@mail.com');
  }

  salir() {
    this.auth.salir();
  }
}
