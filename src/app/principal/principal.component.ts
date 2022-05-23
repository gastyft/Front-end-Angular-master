import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
miPorfolio: any;

  constructor(private datosPorfolio:EquipoService) { }



  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe( data =>{
      console.log(data)
      this.miPorfolio=data;
    })
  }

}
