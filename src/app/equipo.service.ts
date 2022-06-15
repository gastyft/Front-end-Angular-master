import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http';
 import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class EquipoService {
miPorfolio: any;
private apiUrl ='src\assets\data\data.json'
  constructor( private http: HttpClient ) { }

ObtenerDatos(): Observable <any> {
  return  this.http.get(this.apiUrl)
}
EditarDatos(){
  
  return this.http.put(this.apiUrl,this.miPorfolio)

}
BorrarDatos(): Observable<any> {
  return this.http.delete(this.apiUrl)
}

GuardarDatos(){

  return this.http.post(this.apiUrl, this.miPorfolio)

}
}

