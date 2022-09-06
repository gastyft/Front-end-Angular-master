import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http';
 import { Observable } from 'rxjs';
import { ExperienciaService } from './experiencia.service';
import { EstudiosService } from './estudios.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
 miPorfolio:any;
// ApiURL=" http://localhost:8080/"   // "./assets/data/data.json"
 

  constructor( private http: HttpClient) { }
//Datos Persona
/* ObtenerDatos(): Observable<any> {
  return  this.http.get<any>(this.ApiURL + "personas/traer/perfil");
}
*/

/*
BorrarDatos(): Observable<any> {
  return this.http.delete(this.apiUrl)
}

GuardarDatos(){

  return this.http.post(this.apiUrl, this.miPorfolio)

}
*/
}