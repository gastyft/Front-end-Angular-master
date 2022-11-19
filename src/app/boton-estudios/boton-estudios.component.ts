import { Component, Injectable, OnInit } from '@angular/core';
import { EstudiosService } from '../estudios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { estudios } from '../model/estudios';
@Component({
  selector: 'app-boton-estudios',
  templateUrl: './boton-estudios.component.html',
  styleUrls: ['./boton-estudios.component.css']
})
export class BotonEstudiosComponent implements OnInit {
 

data: any;
Estudios: any;

constructor( 
  private router: Router,
  private datosEstudios: EstudiosService,
  private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

 this.cargarDatos();  
}


cargarDatos(){
  {
    this.datosEstudios.getEstudios().subscribe( data => {
      console.log(data)
      this.Estudios= data;
      
    }) } 
}
onUpdateEstudios():void{
  const id_estudios = this.activatedRoute.snapshot.params['id_estudios'];

  this.datosEstudios.update(id_estudios, this.Estudios).subscribe(
    data =>{
      console.log(data);
  

});
if(this.Estudios != null){
  alert("Estudios agregados"); 
      
  this.router.navigate(['']);
}
else{
  alert("fallo al guardar estudios");
  this.router.navigate(['']);
}
 }

 
 deleteEstudio(id_estudio?: number){
  if(id_estudio != null){
    this.datosEstudios.deleteEstudios(id_estudio).subscribe(
              data => {
   this.cargarDatos();
    
        
      })
      alert("Se ha eliminado estudios");
  
    location.reload();
  }
}
}
