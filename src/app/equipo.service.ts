import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http';
 import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  EditarDatos() {
    throw new Error('Method not implemented.');
  }
private ApiURL='./assets/data/data.json'

  constructor( private http: HttpClient ) { }

ObtenerDatos(): Observable<any> {
  return  this.http.get(this.ApiURL)
}
}
/*
EditarDatos(){
  
  return this.http.put(this.apiUrl,this.miPorfolio)

}
BorrarDatos(): Observable<any> {
  return this.http.delete(this.apiUrl)
}

GuardarDatos(){

  return this.http.post(this.apiUrl, this.miPorfolio)

}
*/
