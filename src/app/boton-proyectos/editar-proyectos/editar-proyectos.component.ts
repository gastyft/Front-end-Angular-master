import { Component, OnInit } from '@angular/core';
import { proyectos } from '../../model/proyectos';
import{ ProyectosService } from '../../proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  
proyecto: proyectos = null;
  miPorfolio2: any;
data3: any;
  proyectos: proyectos = null;

    constructor( 
     private datosProyectos: ProyectosService,
     private activatedRoute: ActivatedRoute,
      private router: Router
    ) { }  
  
    ngOnInit() {
      {
        const id_proyectos = this.activatedRoute.snapshot.params['id_proyectos'];
        this.datosProyectos.getProyectos(id_proyectos).subscribe( data3 => {
          console.log(data3)
          this.miPorfolio2= data3;
         this.proyecto= this.miPorfolio2.proyecto;
        }) } 
  
  
  }
  
  onUpdateProyecto():void{
      const id_proyectos = this.activatedRoute.snapshot.params['id_proyectos'];
      this.datosProyectos.update(id_proyectos, this.proyectos).subscribe(
        data => {
         console.log(data);
     
          
        });
        if(this.proyectos != null){
          alert("Proyecto agregado"); 
              
          this.router.navigate(['boton-proyectos']);
        }
        else{
          alert("fallo al guardar proyecto");
          this.router.navigate(['boton-proyectos']);
        }
     }
     
   
    }