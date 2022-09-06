export class persona {
   id?: number;
    nombre: String;
    apellido: String;
    edad: String;
    ciudad: String;
    nacionalidad: String;
    estado_civil: String;
    url_foto: String;
    url_fondo: String;
  
    constructor(
        nombre: String,
        apellido: String,
        edad: String,
        ciudad: String,
        nacionalidad: String,
        url_foto: String,
        url_fondo: String,
        estado_civil: String) 
        {
            this.nombre=  nombre;
            this.apellido= apellido;
            this.edad = edad;
            this.ciudad = ciudad;
            this.nacionalidad= nacionalidad;
            this.estado_civil= estado_civil;
            this.url_fondo= url_fondo;
            this.url_foto= url_foto;
        }


}