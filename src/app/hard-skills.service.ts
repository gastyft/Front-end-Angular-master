import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hardSkills } from './model/hardskills';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {

url = "https://portfolio-gastyft.koyeb.app/hardskills/";
  constructor( private http: HttpClient) { }

getHardSkills():Observable<hardSkills>{
   return this.http.get<hardSkills>(this.url + 'traer');
  }

  getById(id_hard: hardSkills):Observable<hardSkills>{
    return this.http.get<hardSkills>(this.url +`traer/perfil/${id_hard}`)
   }
 updateHardSkills(id:number, hard:hardSkills):Observable<hardSkills>{
    return this.http.put<hardSkills>(this.url+ `editar/${id}?nombre_hard=${hard.nombre_hard}&number_hard=${hard.number_hard}`, hard);
    
  }
  deleteHard(id_hard:number):Observable<hardSkills>{
    return this.http.delete<hardSkills>(this.url+`borrar/${id_hard}`);
  }
  saveHard(hard: hardSkills): Observable<any>{
    return this.http.post<any>(this.url + 'crear', hard);
}
}
