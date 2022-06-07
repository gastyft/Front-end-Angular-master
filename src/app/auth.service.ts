 import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

import{HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 uri = 'https://localhost:4200/principal';

  token: any; 

  constructor(private http: HttpClient, private router: Router) { }

  Login(email: string, password: string){
    this.http.post(this.uri +'/authenticate', { email: email, password: password})
    .subscribe(( resp: any) =>{
      //redirecciona al usuario a su perfil
      this.router.navigate(['profile']);
      //guardamos el token en localStorage
      localStorage.setItem('auth_token', resp.token);
    
  })
};



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
}
}
