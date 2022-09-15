export class persona {
   id?: number;
    nombre: string;
    apellido:string;
    edad: string;
    ciudad: string;
    nacionalidad: string;
    estado_civil: string;

  
    constructor(
        nombre: string,
        apellido: string,
        edad: string,
        ciudad: string,
        nacionalidad: string,
        estado_civil: string) 
        {
            this.nombre=  nombre;
            this.apellido= apellido;
            this.edad = edad;
            this.ciudad = ciudad;
            this.nacionalidad= nacionalidad;
            this.estado_civil= estado_civil;
         
        }


}