import { Injectable } from '@angular/core';
import{ estudios } from './model/estudios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  url = "https://mi-porfolio-back-end.herokuapp.com/estudios/";
  constructor( private http: HttpClient) { }

  public getEstudios():Observable<estudios>{
   return this.http.get<estudios>(this.url + 'traer/estudios');
  }
public update( id_estudios:number , Estudios:estudios): Observable<estudios>{
  return this.http.put<estudios>(`${this.url}editar/${id_estudios}?primaria=${Estudios.nombre_estudio}&secundaria=${Estudios.estudio_detail}`,estudios); 
}

public deleteEstudios(id: number): Observable<any>{
  return this.http.delete<any>(this.url +`borrar/${id}`);
}
public getEstudiosId():Observable<estudios>{
  return this.http.get<estudios>(this.url + 'estudios/traer/estudios');
 }
}