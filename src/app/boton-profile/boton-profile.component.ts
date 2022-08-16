import { Component, OnInit, Input, Output } from '@angular/core';
import { EquipoService} from '../equipo.service';
import {FormsModule } from '@angular/forms';
@Component({
  selector: 'app-boton-profile',
  templateUrl: './boton-profile.component.html',
  styleUrls: ['./boton-profile.component.css']
})
export class BotonProfileComponent implements OnInit {


  miPortfolio: any;
  

  
    constructor( 
      private datosPorfolio: EquipoService
    ) { }
  
    ngOnInit() {
      this.datosPorfolio.ObtenerDatos().subscribe( (data: any) =>{
        console.log(data)
        this.miPortfolio=data;
      })
      
  
    }}