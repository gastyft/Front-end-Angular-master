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
data3: any;
  proyectos: proyectos= null;

    constructor( 
     private datosProyectos: ProyectosService,
     private activatedRoute: ActivatedRoute,
      private router: Router
    ) { }  
  
    ngOnInit() {
      {
        this.datosProyectos.lista().subscribe( data3 => {
          console.log(data3)
          this.miPorfolio2= data3;
          
        }) } 
  
  
  }
  
  onUpdateProyecto():void{
      const id_proyectos = this.activatedRoute.snapshot.params['id_proyectos'];
      this.datosProyectos.update(id_proyectos, this.proyectos).subscribe(
        data => {
         console.log(data);
         alert("Proyecto actualizado");
         this.router.navigate(['']);
          
        }
      )
     }
     
   
    }