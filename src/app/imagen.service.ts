import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from './model/imagen';
@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  url= 'https://mi-portfolio-back.herokuapp.com/';
  constructor(private http: HttpClient) { }

  public list():Observable<Imagen[]>{
    return this.http.get<Imagen[]>(this.url+'cloudinary/list');
  }

  public upload(imagen: File): Observable<Imagen[]>{
    const formData = new FormData();
    formData.append('multipartFile', imagen);
    return this.http.post<Imagen[]>(this.url +'cloudinary/upload', formData);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `cloudinary/delete/${id}`);
  }




}
