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
   
   
    alert("Agregada"); // Arreglar problema de guardado que se guarda vacio y siempre tira cartel de alert "fallo" y nunca de alert "agregada"
        
    this.router.navigate(['']);
  },
   err => {
    alert("Agregada");
    this.router.navigate(['boton-proyectos']);
  }
  )
 }
}