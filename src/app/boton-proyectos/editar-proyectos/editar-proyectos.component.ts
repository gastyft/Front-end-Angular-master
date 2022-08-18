import { Component, OnInit } from '@angular/core';
import { EquipoService} from  '../.././equipo.service';
@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
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
