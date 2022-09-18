import { Injectable } from '@angular/core';
import { proyectos } from './model/proyectos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {


  url = "https://mi-portfolio-back.herokuapp.com/proyectos/";
  constructor( private http: HttpClient) { }

  getProyectos():Observable<proyectos[]>{
    return this.http.get<proyectos[]>(this.url + 'traer/proyectos');
   }
    public lista():Observable<any>{
     return this.http.get<proyectos>(this.url + 'traer');
   }
 save(proyectos: proyectos): Observable<proyectos>{
   return this.http.post<proyectos>(this.url + 'crear', proyectos);
  }
  update(id_proyecto:number, proyecto:proyectos):Observable<proyectos>{
   return this.http.put<proyectos>(this.url + `editar/${id_proyecto}?proyectos=`+proyecto,proyectos);
  }
  delete(id_proyecto:number):Observable<any>{
   return this.http.delete<any>(this.url + `borrar/${id_proyecto}`);
  }
}
