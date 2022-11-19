import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from './model/persona';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 url = "https://mi-porfolio-back-end.herokuapp.com/personas/";
  constructor( private http: HttpClient) { }

getPersona():Observable<persona>{
   return this.http.get<persona>(this.url + `traer/perfil`);
  }

  
 updatePersona(id:number, persona1 :persona):Observable<persona>{
    return this.http.put<persona>(this.url+ `editar/${id}?nombre=${persona1.nombre}&apellido=${persona1.apellido}&edad=${persona1.edad}&ciudad=${persona1.ciudad}&nacionalidad=${persona1.nacionalidad}&estado_civil=${persona1.estado_civil}`, persona);
    
  }

  }

