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
import { BotonImagenComponent } from './boton-imagen/boton-imagen.component';
import { AuthGuard as guard} from './auth.guard';
import { BotonHardSkillsComponent } from './boton-hard-skills/boton-hard-skills.component';


const routes : Routes = [
  {path: '', 
  redirectTo: 'principal', pathMatch:'full'},
  {path: 'agregar-proyectos',
component: AgregarProyectosComponent},
{path:'boton-imagen',
component: BotonImagenComponent },

  {path: 'editar-proyectos/:id_proyectos',
component: EditarProyectosComponent},
{path:'boton-proyectos',
component: BotonProyectosComponent},
  {path: 'principal', 
  component:PrincipalComponent},  // oculta componentes hasta que te registres.  canActivate:[guard], data:{expectedRol:['admin','user']} 
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
  {path: 'boton-hard-skills/:id_hards', 
  component: BotonHardSkillsComponent},
 
  {path: 'header', 
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
