import { Timestamp } from '@angular/fire/firestore';

export class Usuario {
  id: string;
  nombre: string;
  email: string;
  // fecha: Timestamp;

  constructor(nombre: string, email: string) {
    this.id = '';
    this.nombre = nombre;
    this.email = email;
  }
}
