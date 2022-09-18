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
  url = "https://mi-porfolio-back-end.herokuapp.com/";

  constructor(private http: HttpClient, private router: Router) {}

  public nuevo(nuevoUsuario: nuevousuario): Observable<any> {
    return this.http.post<any>(this.url + 'auth/nuevo', nuevousuario);
  }

  public login(loginusuario: loginUsuario): Observable<jwtDto> {
    return this.http.post<jwtDto>(this.url+ 'auth/login', loginusuario);
  }
}
