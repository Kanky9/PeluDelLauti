import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-turnos-form',
  templateUrl: './turnos-form.component.html',
  styleUrls: ['./turnos-form.component.css']
})
export class TurnosFormComponent implements AfterViewInit {
  showLoadingMessage: boolean = true;

  constructor() { }

  ngAfterViewInit(): void {
    // Simula una carga asíncrona, puedes ajustar el tiempo según lo necesario
    setTimeout(() => {
      // Oculta el mensaje de espera después de un cierto tiempo
      this.showLoadingMessage = false;
    }, 3000); // Por ejemplo, espera 3 segundos antes de ocultar el mensaje

    // Este código asegura que el script externo de Calendly se ejecute después de que la vista del componente se haya inicializado
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }

}