import { Component, OnInit } from '@angular/core';
import { EquipoService} from '../equipo.service';
@Component({
  selector: 'app-boton-proyectos',
  templateUrl: './boton-proyectos.component.html',
  styleUrls: ['./boton-proyectos.component.css']
})
export class BotonProyectosComponent implements OnInit {

  miPortfolio: any;
  
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
