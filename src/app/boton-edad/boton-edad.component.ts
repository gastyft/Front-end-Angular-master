import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boton-edad',
  templateUrl: './boton-edad.component.html',
  styleUrls: ['./boton-edad.component.css']
})
export class BotonEdadComponent implements OnInit {


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
