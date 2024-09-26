export class Usuario {
  id: string;
  nombre: string;
  email: string;

  constructor(nombre: string, email: string) {
    this.id = '';
    this.nombre = nombre;
    this.email = email;
  }
}
