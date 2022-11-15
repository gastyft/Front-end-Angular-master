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
import { EditarHardSkillsComponent } from './boton-hard-skills/editar-hard-skills/editar-hard-skills.component';
import { AgregarHardSkillsComponent } from './boton-hard-skills/agregar-hard-skills/agregar-hard-skills.component';
import { AgregarEstudiosComponent } from './boton-estudios/agregar-estudios/agregar-estudios.component';
import { EditarEstudiosComponent } from './boton-estudios/editar-estudios/editar-estudios.component';


const routes : Routes = [
  {path: '', 
  redirectTo: 'principal', pathMatch:'full'},
  {path: 'agregar-proyectos',
component: AgregarProyectosComponent,  canActivate:[guard], data:{expectedRol:['admin','user']} },
{path: 'agregar-hard-skills',
component: AgregarHardSkillsComponent, /* canActivate:[guard], data:{expectedRol:['admin','user']} */},
{path:'boton-imagen',
component: BotonImagenComponent,  canActivate:[guard], data:{expectedRol:['admin','user']}  },
{path:'editar-hard-skills/:id_hard',
component: EditarHardSkillsComponent, /* canActivate:[guard], data:{expectedRol:['admin','user']} */ },
{path:'agregar-estudios',
component: AgregarEstudiosComponent, /* canActivate:[guard], data:{expectedRol:['admin','user']} */ },
{path:'editar-estudios/:id_estudios',
component: EditarEstudiosComponent, /* canActivate:[guard], data:{expectedRol:['admin','user']} */ },
  {path: 'editar-proyectos/:id_proyectos',
component: EditarProyectosComponent, canActivate:[guard], data:{expectedRol:['admin','user']} },
{path:'boton-proyectos',
component: BotonProyectosComponent, canActivate:[guard], data:{expectedRol:['admin','user']} },
  {path: 'principal', 
  component:PrincipalComponent },  // oculta componentes hasta que te registres.  canActivate:[guard], data:{expectedRol:['admin','user']} 
  {path:'boton-experiencia-laboral',
  component:BotonExperienciaLaboralComponent, canActivate:[guard], data:{expectedRol:['admin','user']}  },
  {path:'agregar-experiencia',
  component:AgregarExperienciaComponent, canActivate:[guard], data:{expectedRol:['admin','user']}  },
  {path:'boton-estudios',
  component:BotonEstudiosComponent, canActivate:[guard], data:{expectedRol:['admin','user']}  },
  {path:'editar-experiencia/:id_exp',
  component: EditarExperienciaComponent, canActivate:[guard], data:{expectedRol:['admin','user']} },
  {path:'boton-profile/:id',
  component:BotonProfileComponent, canActivate:[guard], data:{expectedRol:['admin','user']} },
  {path: 'login1', 
  component: Login1Component},
  {path: 'boton-hard-skills', 
  component: BotonHardSkillsComponent, /* canActivate:[guard], data:{expectedRol:['admin','user']}*/ },
 
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
