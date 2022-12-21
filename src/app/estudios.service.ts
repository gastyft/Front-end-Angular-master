import { Injectable } from '@angular/core';
import{ estudios } from './model/estudios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  url = "https://back-heroku-production.up.railway.app/estudios/";
  constructor( private http: HttpClient) { }

  public getEstudios():Observable<estudios>{
   return this.http.get<estudios>(this.url + 'traer');
  }
public update( id_estudios:number , Estudios:estudios): Observable<estudios>{
  return this.http.put<estudios>(`${this.url}editar/${id_estudios}?nombreestudio=${Estudios.nombreestudio}&estudiodetail=${Estudios.estudiodetail}`,estudios); 
}

public deleteEstudios(id: number): Observable<any>{
  return this.http.delete<any>(this.url +`borrar/${id}`);
}
public getEstudiosId(id: number):Observable<estudios>{
  return this.http.get<estudios>(this.url + `traer/estudios/${id}`);
 }
 save(estudios: estudios): Observable<any>{
  return this.http.post<any>(this.url + 'crear', estudios);
 }
}