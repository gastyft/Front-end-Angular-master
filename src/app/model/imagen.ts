export class Imagen {
    id_imagen?:number;
    name: String;
    imagen_url: String;
    imagen_id: String;

constructor(
    name: String,
    imagen_url: String,
    imagen_id: String ) 
    {
        this.name=  name;
        this.imagen_url= imagen_url;
        this.imagen_id= imagen_id;
      
    }
}


  