import { Component, OnInit } from '@angular/core';
import { EquipoService} from  '../.././equipo.service';
@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {
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
