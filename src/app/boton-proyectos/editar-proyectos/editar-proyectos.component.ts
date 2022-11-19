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

  miPorfolio2: any;
data: any;
data3: any;
    proyecto1: proyectos = null;


    constructor( 
     private datosProyectos: ProyectosService,
     private activatedRoute: ActivatedRoute,
      private router: Router
    ) { }  
  
    ngOnInit() {
      {
        const id_proyectos = this.activatedRoute.snapshot.params['id_proyectos'];
        this.datosProyectos.getProyectos(id_proyectos).subscribe( (data) => {
          console.log(data)
          this.miPorfolio2= data;
         this.proyecto1 = this.miPorfolio2?.proyecto;
        }
        )};
      }
    
    
  
  onUpdateProyecto():void{
      const id_proyectos = this.activatedRoute.snapshot.params['id_proyectos'];
      this.datosProyectos.update(id_proyectos, this.miPorfolio2).subscribe(
       data =>{
          console.log(data);
     
          
        });
        if(this.miPorfolio2 != null){
          alert("Proyecto agregado"); 
              
          this.router.navigate(['boton-proyectos']);
        }
        else{
          alert("fallo al guardar proyecto");
          this.router.navigate(['boton-proyectos']);
        }
     }
     
   
    }