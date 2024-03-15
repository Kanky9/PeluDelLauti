import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegEnPuntaComponent } from './Components/galery/deg-en-punta/deg-en-punta.component';
import { DegradeComponent } from './Components/galery/degrade/degrade.component';
import { ClasicoComponent } from './Components/galery/clasico/clasico.component';
import { CrestaComponent } from './Components/galery/cresta/cresta.component';
import { DisenioComponent } from './Components/galery/disenio/disenio.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { TurnosFormComponent } from './Components/turnos-form/turnos-form.component';
import { AyudaComponent } from './Components/ayuda/ayuda.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },// Cambia 'inicio' a '' para la ruta base
  
  {
    path: 'turnos',
    component: TurnosFormComponent
  },

  {
    path: 'ayuda',
    component: AyudaComponent
  },

  {
    path: 'deg-en-punta',
    component: DegEnPuntaComponent
  },
  {
    path: 'degrade', 
    component: DegradeComponent 
  },
  { 
    path: 'clasico', 
    component: ClasicoComponent 
  },
  { 
    path: 'cresta', 
    component: CrestaComponent 
  },
  
  { 
    path: 'disenio', 
    component: DisenioComponent 
  },
  {
    path: '**', // Si no tenemos nada, nos retorna a la pagina de inicio. 
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
