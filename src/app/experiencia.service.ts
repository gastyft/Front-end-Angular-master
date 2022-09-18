import { Injectable } from '@angular/core';
import { experiencia } from './model/experiencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {



  url = "https://mi-portfolio-back.herokuapp.com/";
  constructor( private http: HttpClient) { }

  getExperiencia(id_exp :number):Observable<experiencia>{
   return this.http.get<experiencia>(this.url + `experiencia/traer/experiencia/${id_exp}`);
  }
   public lista():Observable<any>{
    return this.http.get<any>(this.url + 'experienicia/traer');
  }
save(experiencia: experiencia): Observable<any>{
  return this.http.post<any>(this.url + 'crear', experiencia);
 }
 update(id_exp:number, experiencia_laboral: experiencia):Observable<experiencia>{
  return this.http.put<experiencia>(this.url + `experiencia/editar/${id_exp}?experiencia_laboral=`+ experiencia_laboral, experiencia_laboral);
 }
 delete(id_exp:number):Observable<any>{
  return this.http.delete<any>(this.url + `experienicia/borrar/${id_exp}`)
 }
  
  }
  

