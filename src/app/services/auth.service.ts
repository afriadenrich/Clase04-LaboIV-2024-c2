import { Injectable, OnInit, inject } from '@angular/core';
import {
  Auth,
  Unsubscribe,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  usuario: any = null;
  authSubscription?: Unsubscribe;
  private auth = inject(Auth);
  //  private router = inject(Router);

  constructor() {
    console.log('entra');
    this.authSubscription = this.auth.onAuthStateChanged((auth) => {
      console.log(auth);
      if (auth?.email) {
        this.usuario = auth;
        // this.router.navigateByUrl('');
      } else {
        this.usuario = null;
      }
    });
  }

  ngOnInit() {}

  async registro(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      // ACA guardar en la db. email, nombre, tipo de usuario, etc...
    } catch (e) {}

    //Crear un usuario, automáticamente inicia sesión.
  }
  /*
registro(email: string, password: string) {
  try {
    createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    ).then((userCredential) => {

    })
    // ACA guardar en la db. email, nombre, tipo de usuario, etc...


  } catch (e) {}

  //Crear un usuario, automáticamente inicia sesión.
}
*/
  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password);
  }

  salir() {
    this.auth.signOut();
  }
}
