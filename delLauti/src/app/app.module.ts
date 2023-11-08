import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './Components/presentation/presentation.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';
import { AboutComponent } from './Components/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DegEnPuntaComponent } from './Components/galery/deg-en-punta/deg-en-punta.component';
import { DegradeComponent } from './Components/galery/degrade/degrade.component';
import { ClasicoComponent } from './Components/galery/clasico/clasico.component';
import { CrestaComponent } from './Components/galery/cresta/cresta.component';
import { DisenioComponent } from './Components/galery/disenio/disenio.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { TurnoCalendarioComponent } from './Components/Turnos/turno-calendario/turno-calendario.component';
import { TurnoDetalleComponent } from './Components/Turnos/turno-detalle/turno-detalle.component';
import { TurnoReservaComponent } from './Components/Turnos/turno-reserva/turno-reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PresentationComponent,
    ProyectsComponent,
    AboutComponent,
    FooterComponent,
    DegEnPuntaComponent,
    DegradeComponent,
    ClasicoComponent,
    CrestaComponent,
    DisenioComponent,
    MenuComponent,
    TurnoCalendarioComponent,
    TurnoDetalleComponent,
    TurnoReservaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
