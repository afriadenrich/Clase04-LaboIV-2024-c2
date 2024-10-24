import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private fs: Firestore, private storage: Storage) {}

  async subir(imagen: Blob) {
    const col = collection(this.fs, 'empleados');
    const documento = doc(col);

    let empleado = { id: documento.id, nombre: 'Agus', imagen: '' };

    const storageRef = ref(this.storage, 'imagenesDePerfil/' + 'imagen.jpg');

    await uploadBytes(storageRef, imagen);

    const url = await getDownloadURL(storageRef);

    empleado.imagen = url;

    setDoc(documento, { ...empleado });
  }
}
