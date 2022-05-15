import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { Login1Component } from './login1/login1.component';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';
const routes : Routes = [
  {path: 'principal', 
  component:PrincipalComponent},
  {path: 'login1', 
  component: Login1Component},
  { path: '**',  
  component: Error404Component  },
  {path: 'Header', 
  component: HeaderComponent},
  {path: '', 
  redirectTo: "/principal", pathMatch:'full'},

];

@NgModule({

  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
