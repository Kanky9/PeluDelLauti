import { Component } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent {

  videoUrl: string =  "../../../assets/videos/ayuda/";

  openVideoCancelar(videoUrl: string) {
    // Abre el video en una nueva ventana o pestaña
    this.videoUrl = videoUrl;
    window.open(videoUrl + 'cancelarTurno.mp4', '_blank');
  }

  openVideoCambiar(videoUrl: string) {
    // Abre el video en una nueva ventana o pestaña
    this.videoUrl = videoUrl;
    window.open(videoUrl + 'cambiarTurno.mp4', '_blank');
  }

  openVideoVer(videoUrl: string) {
    // Abre el video en una nueva ventana o pestaña
    this.videoUrl = videoUrl;
    window.open(videoUrl + 'verTurno.mp4', '_blank');
  }
}