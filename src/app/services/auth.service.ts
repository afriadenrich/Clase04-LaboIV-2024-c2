import { Injectable, OnInit, inject } from '@angular/core';
import {
  Auth,
  Unsubscribe,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import {
  Firestore,
  collection,
  doc,
  getDocs,
  setDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  usuario: any = null;
  authSubscription?: Unsubscribe;
  private auth = inject(Auth);
  private firestore = inject(Firestore);
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

  async registro(
    email: string,
    password: string,
    nombre: string = 'fernando',
    perfil: string = 'especialista'
  ) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      // ACA guardar en la db. email, nombre, tipo de usuario, etc...
      sendEmailVerification(userCredential.user);

      const col = collection(this.firestore, 'empleados');
      const documento = doc(col);

      setDoc(documento, { email, nombre, perfil });
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
  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      userCredential.user.email;

      const col = collection(this.firestore, 'empleados');

      // getDocs();
    } catch (e) {}
  }

  salir() {
    this.auth.signOut();
  }
}
