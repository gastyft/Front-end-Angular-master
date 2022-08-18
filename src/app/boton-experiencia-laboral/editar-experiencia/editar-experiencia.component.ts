import { Component, OnInit } from '@angular/core';
import { EquipoService} from  '../.././equipo.service';
@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

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
