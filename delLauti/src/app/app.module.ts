import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { TurnosComponent } from './turnos/turnos.component';
import { DegEnPuntaComponent } from './galery/deg-en-punta/deg-en-punta.component';
import { DegradeComponent } from './galery/degrade/degrade.component';
import { ClasicoComponent } from './galery/clasico/clasico.component';
import { CrestaComponent } from './galery/cresta/cresta.component';
import { DisenioComponent } from './galery/disenio/disenio.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PresentationComponent,
    ProyectsComponent,
    AboutComponent,
    FooterComponent,
    TurnosComponent,
    DegEnPuntaComponent,
    DegradeComponent,
    ClasicoComponent,
    CrestaComponent,
    DisenioComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
