import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { Login1Component } from './login1/login1.component';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';
import { BotonEstudiosComponent } from './boton-estudios/boton-estudios.component';
import { BotonProfileComponent } from './boton-profile/boton-profile.component';
import{ EditarExperienciaComponent } from "./boton-experiencia-laboral/editar-experiencia/editar-experiencia.component";
import{ BotonExperienciaLaboralComponent } from './boton-experiencia-laboral/boton-experiencia-laboral.component';
import { AgregarExperienciaComponent} from './boton-experiencia-laboral/agregar-experiencia/agregar-experiencia.component';
import { BotonProyectosComponent } from './boton-proyectos/boton-proyectos.component';
import { EditarProyectosComponent } from './boton-proyectos/editar-proyectos/editar-proyectos.component';
import {AgregarProyectosComponent } from './boton-proyectos/agregar-proyectos/agregar-proyectos.component';
import { AuthGuard } from './auth.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http' 

const routes : Routes = [
  {path: '', 
  redirectTo: 'principal', pathMatch:'full'},
 /* { path: 'principal', component: PrincipalComponent, 
 canActivate: [AuthGuard] // visit ´principal only if authenticated 
}, */
  {path: 'agregar-proyectos',
component: AgregarProyectosComponent},
  {path: 'editar-proyectos/:id_proyectos',
component: EditarProyectosComponent},
{path:'boton-proyectos',
component: BotonProyectosComponent},
  {path: 'principal', 
  component:PrincipalComponent},
  {path:'boton-experiencia-laboral',
  component:BotonExperienciaLaboralComponent },
  {path:'agregar-experiencia',
  component:AgregarExperienciaComponent },
  {path:'boton-estudios/:id_estudios',
  component:BotonEstudiosComponent },
  {path:'editar-experiencia/:id_exp',
  component: EditarExperienciaComponent},
  {path:'boton-profile/:id',
  component:BotonProfileComponent},
  {path: 'login1', 
  component: Login1Component},
 
  {path: 'Header', 
  component: HeaderComponent},
  
  
 
{ path: '**',  
component: Error404Component  },
];

@NgModule({

  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
