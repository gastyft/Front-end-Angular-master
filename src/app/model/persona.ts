export class persona {
   id?: number;
    nombre: String;
    apellido: String;
    edad: String;
    ciudad: String;
    nacionalidad: String;
    estado_civil: String;

  
    constructor(
        nombre: String,
        apellido: String,
        edad: String,
        ciudad: String,
        nacionalidad:String,
        estado_civil: String) 
        {
            this.nombre=  nombre;
            this.apellido= apellido;
            this.edad = edad;
            this.ciudad = ciudad;
            this.nacionalidad= nacionalidad;
            this.estado_civil= estado_civil;
         
        }


}