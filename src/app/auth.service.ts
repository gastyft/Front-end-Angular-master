import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loginUsuario } from './model/loginusuario';
import { nuevousuario } from './model/nuevousuario';
import { jwtDto } from './model/jwtdto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = "http://localhost:8080/auth/";

  constructor(private http: HttpClient, private router: Router) {}

  public nuevo(nuevoUsuario: nuevousuario): Observable<any> {
    return this.http.post<any>(this.url + 'nuevo', nuevousuario);
  }

  public login(loginusuario: loginUsuario): Observable<jwtDto> {
    return this.http.post<jwtDto>(this.url+ `login`, loginusuario);
  }
}

/*
get UsuarioAutenticado()
 {
   return this.currentUserSubject.value;
 }

  Login(email: string, password: string){
    this.http.post(this.url +'/authenticate', { email: email, password: password})
    .subscribe(( resp: any) =>{
      //redirecciona al usuario a su perfil
      this.router.navigate(['profile']);
      //guardamos el token en localStorage
      localStorage.setItem('auth_token', resp.token);
    
  })
};
*/

/*
isLoggedIn(): boolean {


  const token:any = localStorage.getItem('token'); // get token from local storage
  const payload = atob(token.split('.')[1]); // decode payload of token
  const parsedPayload = JSON.parse(payload); // convert payload into an Object

  return parsedPayload.exp > Date.now() / 1000; // check if token is expired

}
//Para cerrar sesión eliminamos el token del LocalStorage
logout(){
  localStorage.removeItem('token');
}
//Servicio para verificar si existe la sesión
public get logIn(): boolean {
  return (localStorage.getItem('token') !== null);
} */
