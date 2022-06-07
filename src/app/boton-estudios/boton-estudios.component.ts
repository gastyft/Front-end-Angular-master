import { Component, Injectable, OnInit } from '@angular/core';


import { EquipoService} from '../equipo.service';
import {FormsModule, } from '@angular/forms'


@Component({
  selector: 'app-boton-estudios',
  templateUrl: './boton-estudios.component.html',
  styleUrls: ['./boton-estudios.component.css']
})
export class BotonEstudiosComponent implements OnInit {
 
  primaria:string="";

miPortfolio: any;

binding:string ="";

  constructor( 
    private datosPorfolio: EquipoService
  ) { }

  ngOnInit() {
    this.datosPorfolio.ObtenerDatos().subscribe( (data: any) =>{
      console.log(data)
      this.miPortfolio=data;
  })


}


}


