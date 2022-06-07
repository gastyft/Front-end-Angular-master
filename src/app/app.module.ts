import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios
import { EquipoService } from './equipo.service';
import { AppRoutingModule } from './app-routing.module';
//componente principal
import { AppComponent } from './app.component';
//componentes secundarios
import { PrincipalComponent } from './principal/principal.component';
import { Login1Component } from './login1/login1.component';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BotonEstudiosComponent } from './boton-estudios/boton-estudios.component';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Login1Component,
    HeaderComponent,
    Error404Component,
    BotonEstudiosComponent,
    DashbordComponent,
    
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
    EquipoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}



