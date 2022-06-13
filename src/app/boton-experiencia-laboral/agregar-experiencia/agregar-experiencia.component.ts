import { Component, OnInit } from '@angular/core';
import { EquipoService} from '../.././equipo.service';


@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  miPortfolio: any;
  

  
    constructor( 
      private datosPortfolio: EquipoService
    ) { }
  
    ngOnInit() {
      this.datosPortfolio.ObtenerDatos().subscribe( (data: any) =>{
        console.log(data)
        this.miPortfolio=data;
    })
   
  }

}
