import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from './model/imagen';
@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  url= 'http://localhost:8080/cloudinary/';
  constructor(private http: HttpClient) { }

  public list():Observable<Imagen[]>{
    return this.http.get<Imagen[]>(this.url+'list');
  }

  public upload(imagen: File): Observable<Imagen[]>{
    const formData = new FormData();
    formData.append('multipartFile', imagen);
    return this.http.post<Imagen[]>(this.url +'upload', formData);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.url + `delete/${id}`);
  }

public edit(id:number, imagen:Imagen):Observable<any>{
return this.http.put(this.url +`editar/${id}`+imagen, imagen );
}


}
