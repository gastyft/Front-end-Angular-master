import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../experiencia.service';
import {  experiencia } from '../model/experiencia';
@Component({
  selector: 'app-boton-experiencia-laboral',
  templateUrl: './boton-experiencia-laboral.component.html',
  styleUrls: ['./boton-experiencia-laboral.component.css']
})
export class BotonExperienciaLaboralComponent implements OnInit {

  miPorfolio2: any;
 data2: any;
 
 experiencia: experiencia[]= [] ;

    constructor( 
      public datosExperiencia: ExperienciaService,

    ) { }
  
    ngOnInit() {
      this.cargarDatos();
    
    }
    cargarDatos(){
      this.datosExperiencia.lista().subscribe( data2 =>{
        console.log(data2)
        this.miPorfolio2= data2;
        
      }) } 

      
  deleteExperiencia(id_exp?: number){
    if(id_exp != null){
      this.datosExperiencia.delete(id_exp).subscribe(
                data => {
     this.cargarDatos();
      
          
        })
        alert("Se ha eliminado experiencia");
    
      location.reload();
    }
  }
}
