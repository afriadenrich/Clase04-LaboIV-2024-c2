import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  http = inject(HttpClient);

  apiUrl = 'https://api.github.com/users/';

  datos: any = {};

  constructor() {}

  traerUsuario(usuario: string) {
    // "https://api.github.com/users/usuario?ejemplo=labo4";

    const peticion = this.http.get(this.apiUrl + usuario, {
      responseType: 'json',
      params: {
        ejemplo: 'labo4',
      },
    });

    return peticion;
    /*
    peticion.subscribe((respuesta) => {
      console.log(respuesta);
      this.datos = respuesta;
    });
    
    */
  }
}
