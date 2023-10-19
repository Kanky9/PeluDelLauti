import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnosComponent } from './turnos/turnos.component';
import { DegEnPuntaComponent } from './galery/deg-en-punta/deg-en-punta.component';
import { DegradeComponent } from './galery/degrade/degrade.component';
import { ClasicoComponent } from './galery/clasico/clasico.component';
import { CrestaComponent } from './galery/cresta/cresta.component';
import { DisenioComponent } from './galery/disenio/disenio.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  }, // Cambia 'inicio' a '' para la ruta base
  {
    path: 'turnos',
    component: TurnosComponent
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














/*{
    path: 'gallery',
    children: [
      { path: '', redirectTo: 'deg-en-punta', pathMatch: 'full' },
      { path: 'deg-en-punta', component: DegEnPuntaComponent }
    ]
  },
  {
    path: 'gallery',
    children: [
      { path: '', redirectTo: 'degrade', pathMatch: 'full' },
      { path: 'degrade', component: DegradeComponent }
    ]
  },
  {
    path: 'gallery',
    children: [
      { path: '', redirectTo: 'clasicos', pathMatch: 'full' },
      { path: 'clasico', component: ClasicoComponent  }
    ]
  },
  {
    path: 'gallery',
    children: [
      { path: '', redirectTo: 'cresta', pathMatch: 'full' },
      { path: 'cresta', component: CrestaComponent  }
    ]
  },
  {
    path: 'gallery',
    children: [
      { path: '', redirectTo: 'disenio', pathMatch: 'full' },
      { path: 'disenio', component: DisenioComponent  }
    ]
  }*/