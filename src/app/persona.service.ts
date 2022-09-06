import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from './model/persona';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 url = "http://localhost:8080/personas/";
  constructor( private http: HttpClient) { }

getPersona():Observable<persona>{
   return this.http.get<persona>(this.url + 'traer/perfil');
  }

  
 updatePersona(id:number, persona:persona){
    return this.http.put<persona>(this.url+ `editar/${id}?`+ persona, persona);
    
  }

  }

