import { Component, OnInit } from '@angular/core';
import { proyectos } from '../model/proyectos';
import{ ProyectosService } from '../proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-proyectos',
  templateUrl: './boton-proyectos.component.html',
  styleUrls: ['./boton-proyectos.component.css']
})
export class BotonProyectosComponent implements OnInit {

  miPorfolio3: any;

 data3: any; 
 
 proyectos: proyectos[]= [] ;

    constructor( 
      public datosProyectos: ProyectosService,
      private router: Router,
    ) { }
  
    ngOnInit() {
      this.cargarDatos();
    
    }
    cargarDatos(){
      this.datosProyectos.lista().subscribe( data3 =>{
        console.log(data3)
        this.miPorfolio3= data3;
        
      }) } 

      
  deleteProyecto(id_proyecto?: number){
    if(id_proyecto != null){
      this.datosProyectos.delete(id_proyecto).subscribe(
                data => {
     this.cargarDatos();
      
          
        })
        alert("Se ha eliminado proyecto");
      // this.router.navigate(['']);
      location.reload();
    }
  }
}


