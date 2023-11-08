import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-turno-reserva',
  templateUrl: './turno-reserva.component.html',
  styleUrls: ['./turno-reserva.component.css']
})
export class TurnoReservaComponent {
  
   @Input() horarioSeleccionado!: Date;
  // Implementa la lógica para realizar la reserva.
}
