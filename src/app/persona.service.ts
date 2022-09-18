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
   return this.http.get<persona>(this.url + 'traer/perfil');
  }

  
 updatePersona(id:number, Persona:persona){
    return this.http.put<persona>(this.url+ `editar/${id}?nombre=${Persona.nombre}&apellido=${Persona.apellido}&edad=${Persona.edad}&ciudad=${Persona.ciudad}&nacionalidad=${Persona.nacionalidad}&estado_civil=${Persona.estado_civil}`, persona);
    
  }

  }

