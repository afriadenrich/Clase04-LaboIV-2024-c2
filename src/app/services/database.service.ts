import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  agregarUsuario(user: Usuario) {
    const colUsuarios = this.firestore.collection('usuarios');
    const documento = colUsuarios.doc();
    user.id = documento.ref.id;

    documento.set({ ...user });
    // colUsuarios.add({ ...user });

    const fecha: Timestamp = Timestamp.fromDate(new Date());

    const date: Date = fecha.toDate();
  }

  traerUsuarios() {
    const colUsuarios = this.firestore.collection('usuarios');

    /*
    const observable = colUsuarios.get();

    observable.subscribe((resultado) => {
      resultado.docs.forEach((documento) => {
        console.log(documento.data());
      });
    });
    */

    const observable = colUsuarios.valueChanges();
    return observable;
  }

  modificar(usuario: Usuario) {
    const colUsuarios = this.firestore.collection('usuarios');
    const documento = colUsuarios.doc(usuario.id);
    documento.update({ ...usuario });
  }

  eliminar(usuario: Usuario) {
    const colUsuarios = this.firestore.collection('usuarios');
    const documento = colUsuarios.doc(usuario.id);
    documento.delete();
  }
}
