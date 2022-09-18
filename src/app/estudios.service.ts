import { Injectable } from '@angular/core';
import{ estudios } from './model/estudios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  url = "https://mi-portfolio-back.herokuapp.com/";
  constructor( private http: HttpClient) { }

  public getEstudios():Observable<estudios>{
   return this.http.get<estudios>(this.url + 'estudios/traer/estudios');
  }
public update( id_estudios:number , Estudios:estudios): Observable<estudios>{
  return this.http.put<estudios>(`${this.url}estudios/editar/${id_estudios}?primaria=${Estudios.primaria}&secundaria=${Estudios.secundaria}&universidad=${Estudios.universidad}&actual=${Estudios.actual}`,estudios); //"primaria="+estudios.primaria+"&secundaria="+estudios.secundaria+"&universidad="+estudios.universidad+"&actual="+estudios.actual
}

public delete(id: number): Observable<any>{
  return this.http.delete<any>(this.url +`estudios/borrar/${id}`);
}
}