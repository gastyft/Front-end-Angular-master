import { Component, OnInit } from '@angular/core';
 import { EquipoService} from '../equipo.service';
@Component({
  selector: 'app-boton-experiencia-laboral',
  templateUrl: './boton-experiencia-laboral.component.html',
  styleUrls: ['./boton-experiencia-laboral.component.css']
})
export class BotonExperienciaLaboralComponent implements OnInit {
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
contador(cont:any, i:any){

  i=0;
  cont=0;
  for(i=0; i<10; i++){
  cont=i+1;
}
  return cont;
}

}
