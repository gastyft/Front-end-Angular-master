import { Injectable } from '@angular/core';
import { experiencia } from './model/experiencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {



  url = "https://portfolio-gastyft.koyeb.app";
  constructor( private http: HttpClient) { }

  getExperiencia(id_exp: number):Observable<experiencia[]>{
   return this.http.get<experiencia[]>(this.url + `traer/experiencia/${id_exp}`);
  }
   public lista():Observable<any>{
    return this.http.get<any>(this.url + 'traer');
  }
save(experiencia: experiencia): Observable<any>{
  return this.http.post<any>(this.url + 'crear', experiencia);
 }
 update(id_exp:number, experiencia_laboral: experiencia):Observable<experiencia>{
  return this.http.put<experiencia>(this.url + `editar/${id_exp}?experiencia_laboral=${experiencia_laboral.experiencia_laboral}`, experiencia);
 }
 delete(id_exp:number):Observable<any>{
  return this.http.delete<any>(this.url + `borrar/${id_exp}`)
 }
  
  }
  

