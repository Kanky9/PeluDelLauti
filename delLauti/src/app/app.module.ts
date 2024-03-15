import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
   
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
import { TurnosFormComponent } from './Components/turnos-form/turnos-form.component';
import { AyudaComponent } from './Components/ayuda/ayuda.component';


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
    TurnosFormComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    CommonModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
