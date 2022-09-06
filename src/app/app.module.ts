import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios
import { EquipoService } from './equipo.service';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorService } from './interceptor.service';
//componente principal
import { AppComponent } from './app.component';
//componentes secundarios
import { PrincipalComponent } from './principal/principal.component';
import { Login1Component } from './login1/login1.component';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BotonEstudiosComponent } from './boton-estudios/boton-estudios.component';

import { BotonProfileComponent } from './boton-profile/boton-profile.component';

import { BotonExperienciaLaboralComponent } from './boton-experiencia-laboral/boton-experiencia-laboral.component';
import { AgregarExperienciaComponent } from './boton-experiencia-laboral/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './boton-experiencia-laboral/editar-experiencia/editar-experiencia.component';
import { BotonProyectosComponent } from './boton-proyectos/boton-proyectos.component';
import { AgregarProyectosComponent } from './boton-proyectos/agregar-proyectos/agregar-proyectos.component';
import { EditarProyectosComponent } from './boton-proyectos/editar-proyectos/editar-proyectos.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Login1Component,
    HeaderComponent,
    Error404Component,
    BotonEstudiosComponent,
    BotonProfileComponent,
    BotonExperienciaLaboralComponent,
    AgregarExperienciaComponent,
    EditarExperienciaComponent,
    BotonProyectosComponent,
    AgregarProyectosComponent,
    EditarProyectosComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  FontAwesomeModule,

  ],
  providers: [
    EquipoService,{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}



