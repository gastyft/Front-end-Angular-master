import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hardSkills } from './model/hardskills';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {

url = "https://mi-portfolio-back.herokuapp.com/";
  constructor( private http: HttpClient) { }

getHardSkills():Observable<hardSkills>{
   return this.http.get<hardSkills>(this.url + 'hardskills/traer/perfil');
  }

  
 updateHardSkills(id:number, hard:hardSkills):Observable<hardSkills>{
    return this.http.put<hardSkills>(this.url+ `hardskills/editar/${id}?frontend=${hard.frontend}&backend=${hard.backend}&base_datos=${hard.base_datos}&ingles=${hard.ingles}&italiano=${hard.italiano}&trabajo_equipo=${hard.trabajo_equipo}&comunicacion=${hard.comunicacion}`, hard);
    
  }

}
