import { Component, inject } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Usuario } from '../../classes/usuario';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent {
  protected db = inject(DatabaseService);
  subscription: Subscription | null = null;
  usuarios: Usuario[] = [];

  ngOnInit() {
    const observable = this.db.traerUsuarios();
    // this.db.agregarUsuario(new Usuario('Agus', 'agus@agus.com'));
    // this.db.agregarUsuario(new Usuario('Facu', 'facu@agus.com'));
    this.subscription = observable.subscribe((resultado) => {
      console.log(resultado);
      this.usuarios = resultado as Usuario[];
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
