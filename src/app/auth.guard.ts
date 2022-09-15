 import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard /* implements CanActivate  */ {
realRol: string;

  constructor(   private tokenService:TokenService, private router: Router) {}

  canActivate(   route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   const expectedRol = route.data['expectedRol'];
   const roles = this.tokenService.getAuthorities();
   this.realRol= 'user';
   roles.forEach(rol => {
    if(rol === 'ROLE_ADMIN'){
      this.realRol ='admin';
    }
   });
   if(!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1){

   this.router.navigate(['']);
 return false;
}
return true;
  }
  }