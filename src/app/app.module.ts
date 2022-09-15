import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios
import { AppRoutingModule } from './app-routing.module';

//componente principal
import { AppComponent } from './app.component';
//componentes secundarios
import { PrincipalComponent } from './principal/principal.component';
import { Login1Component } from './login1/login1.component';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BotonEstudiosComponent } from './boton-estudios/boton-estudios.component';

import { BotonProfileComponent } from './boton-profile/boton-profile.component';

import { BotonExperienciaLaboralComponent } from './boton-experiencia-laboral/boton-experiencia-laboral.component';
import { AgregarExperienciaComponent } from './boton-experiencia-laboral/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './boton-experiencia-laboral/editar-experiencia/editar-experiencia.component';
import { BotonProyectosComponent } from './boton-proyectos/boton-proyectos.component';
import { AgregarProyectosComponent } from './boton-proyectos/agregar-proyectos/agregar-proyectos.component';
import { EditarProyectosComponent } from './boton-proyectos/editar-proyectos/editar-proyectos.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonImagenComponent } from './boton-imagen/boton-imagen.component';
import {RouterModule} from '@angular/router';
import { BotonHardSkillsComponent } from './boton-hard-skills/boton-hard-skills.component';
import{  InterceptorService } from './interceptor.service';

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
    BotonImagenComponent,
    BotonHardSkillsComponent,
 
   

  ], 
  
  imports: [
    RouterModule,
    AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  FontAwesomeModule,
  NgxSpinnerModule,
  BrowserAnimationsModule,

  BrowserModule,
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { 
  
}



