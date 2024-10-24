import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
})
export class UploadComponent {
  constructor(private storageService: StorageService) {}

  nuevaImagenCargada($event: any) {
    const file = $event.target.files[0];
    const imagen = new Blob([file], {
      type: file.type,
    });
    this.storageService.subir(imagen);
  }
}
