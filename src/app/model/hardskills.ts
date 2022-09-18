export class hardSkills {
    id?:number;
    frontend:number;
    backend:number;
    base_datos:number;
    italiano:number;
    ingles:number;
    trabajo_equipo:number;
    comunicacion:number;


    constructor(
        frontend:number,
        backend:number,
        base_datos:number,
        italiano:number,
        ingles:number,
        trabajo_equipo:number,
        comunicacion:number ) 
        {
            this.frontend= frontend;
            this.backend= backend;
            this.base_datos=base_datos;
            this.ingles =ingles;
            this.italiano= italiano;
            this.trabajo_equipo=trabajo_equipo;
            this.comunicacion= comunicacion;
         
        }
}