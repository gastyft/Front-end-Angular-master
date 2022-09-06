import { Component, OnInit, Input, Output } from '@angular/core';

import {FormControl, FormGroup, FormsModule } from '@angular/forms';
import { PersonaService } from '../persona.service';
import { persona } from '../model/persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boton-profile',
  templateUrl: './boton-profile.component.html',
  styleUrls: ['./boton-profile.component.css']
})
export class BotonProfileComponent implements OnInit {


  miPorfolio2: any;
  data3: any;
 
  persona: persona;
    constructor( 
      private router: Router,
      private datosPorfolio: PersonaService,
      private activatedRoute: ActivatedRoute
    ) { }
  
    ngOnInit() {
    /*  const id = this.activatedRoute.snapshot.params['id'];
      this.datosPorfolio.getPersonaByID(id).subscribe(
        data =>{
          this.persona= data;
         console.log(data);
          
        }) */

      {
        this.datosPorfolio.getPersona().subscribe( data3 => {
          console.log(data3)
          this.miPorfolio2= data3;
          
        }) } 

      }

  
  onUpdatePersona():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosPorfolio.updatePersona(id, this.persona).subscribe(
      data =>{
        
       console.log(data);
       alert("Datos de la persona actualizada");
       this.router.navigate(['']);
        
      }
    )
   }
}
  