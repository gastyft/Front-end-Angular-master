import { Component, Injectable, OnInit } from '@angular/core';


import { EquipoService} from '../equipo.service';
import {FormsModule, } from '@angular/forms';
import { EstudiosService } from '../estudios.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { estudios } from '../model/estudios';
@Component({
  selector: 'app-boton-estudios',
  templateUrl: './boton-estudios.component.html',
  styleUrls: ['./boton-estudios.component.css']
})
export class BotonEstudiosComponent implements OnInit {
 

data: any;
miPortfolio: any;


 Estudios: estudios={
  primaria:null,
  secundaria: null,
  universidad:null,
  actual: null,
 };

constructor( 
  private router: Router,
  private datosPortfolio: EstudiosService,
  private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

 this.cargarDatos();  
}


cargarDatos(){
  {
    this.datosPortfolio.getEstudios().subscribe( data => {
      console.log(data)
      this.miPortfolio= data;
      
    }) } 
}
onUpdateEstudios():void{
  const id_estudios = this.activatedRoute.snapshot.params['id_estudios'];

  this.datosPortfolio.update(id_estudios, this.Estudios).subscribe(
    data =>{
      console.log(data);
  

})
this.cargarDatos();

alert("Datos de la persona actualizada");
this.router.navigate(['']);

 }
}
