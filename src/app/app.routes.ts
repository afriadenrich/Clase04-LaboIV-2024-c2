import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UploadComponent } from './pages/upload/upload.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'listado', component: UsuariosComponent },
  { path: 'upload', component: UploadComponent },
];
