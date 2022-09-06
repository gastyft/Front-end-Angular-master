 import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import{ BehaviorSubject, Observable} from 'rxjs';
import{ HttpClientModule, HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 url = 'https://localhost:8080/';

  token: any; 
  currentUserSubject: BehaviorSubject<any>;
  
  constructor(private http: HttpClient, private router: Router) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))

   }


IniciarSesion(credenciales:any):Observable<any> 
{
  return this.http.post(this.url, credenciales).pipe(map(data => {
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    this.currentUserSubject.next(data);
    return data;
 }))
 
}

get UsuarioAutenticado()
 {
   return this.currentUserSubject.value;
 }
/*
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
}
