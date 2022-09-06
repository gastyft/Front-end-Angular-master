import { Injectable } from '@angular/core';
import{ estudios } from './model/estudios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  url = "http://localhost:8080/estudios/";
  constructor( private http: HttpClient) { }

  public getEstudios():Observable<estudios>{
   return this.http.get<estudios>(this.url + 'traer/estudios');
  }
public update( id_estudios:number , Estudios:estudios): Observable<estudios>{
  return this.http.put<estudios>(`${this.url}editar/${id_estudios}?primaria=${Estudios.primaria}&secundaria=${Estudios.secundaria}&universidad=${Estudios.universidad}&actual=${Estudios.actual}`,estudios); //"primaria="+estudios.primaria+"&secundaria="+estudios.secundaria+"&universidad="+estudios.universidad+"&actual="+estudios.actual
}

public delete(id: number): Observable<any>{
  return this.http.delete<any>(this.url +`/estudios/borrar/${id}`);
}
}