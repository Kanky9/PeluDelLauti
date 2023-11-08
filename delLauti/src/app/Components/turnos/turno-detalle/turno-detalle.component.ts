import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-turno-detalle',
  templateUrl: './turno-detalle.component.html',
  styleUrls: ['./turno-detalle.component.css']
})
export class TurnoDetalleComponent {


  @Input() diaSeleccionado!: Date;
  // Implementa la lógica para mostrar y seleccionar horarios.
}
