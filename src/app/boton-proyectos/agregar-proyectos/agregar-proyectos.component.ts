import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/proyectos.service';
@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {

  proyectos: String = '' ;

  constructor( 
private router:Router,
private datosProyectos: ProyectosService,
  ) { }  

  ngOnInit() {

 
}


AgregarProyectos():void{
  const pro = new proyectos(this.proyectos);
  this.datosProyectos.save(pro).subscribe( data=> {
   
   
  });
  if(this.proyectos != null){
    alert("Proyecto agregado"); 
        
    this.router.navigate(['boton-proyectos']);
  }
  else{
    alert("fallo al guardar proyecto");
    this.router.navigate(['boton-proyectos'])
  }
  
 }
}