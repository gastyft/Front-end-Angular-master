 import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard /* implements CanActivate  */ {

  constructor(   private authService: AuthService, private rutas: Router) {}


 /*   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | UrlTree | Promise<boolean> | boolean {
      let currentUser= this.authService.UsuarioAutenticado;
      if(currentUser && currentUser.accessToken){
    return true;
      }
     else
      this.rutas.navigate(['/login1']);
      return false; 
  } */
}
