import { Component, OnInit, Input, Output } from '@angular/core';

import {FormControl, FormGroup, FormsModule } from '@angular/forms';
import { PersonaService } from '../persona.service';
import { persona } from '../model/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-boton-profile',
  templateUrl: './boton-profile.component.html',
  styleUrls: ['./boton-profile.component.css']
})
export class BotonProfileComponent implements OnInit {

  miPorfolio2:any;
  data3: any;
  persona: persona = null;

  nombre: persona = null;
  apellido:persona = null;
edad:persona = null;
ciudad:persona = null;
nacionalidad:persona = null;
estado_civil:persona = null;
id=1;

    constructor( 
      private router: Router,
      private datosPorfolio: PersonaService,
      private activatedRoute: ActivatedRoute,
      private FormBuilder: FormBuilder
    ) {
    
  }
    ngOnInit() {
      {
        
      this.datosPorfolio.getPersona().subscribe( data => {
        console.log(data)
        this.miPorfolio2= data;
         const id=1;
     this.nombre = this.miPorfolio2?.id.nombre;
     this.apellido = this.miPorfolio2?.apellido;
     this.edad= this.miPorfolio2?.edad;
     this.ciudad= this.miPorfolio2?.ciudad;
     this.nacionalidad= this.miPorfolio2?.nacionalidad;
     this.estado_civil= this.miPorfolio2?.estado_civil;
      });
    }
  }
    
  onUpdatePersona():void {
       //const id= this.activatedRoute.snapshot.params['id'];
   
      this.datosPorfolio.updatePersona(this.id, this.miPorfolio2).subscribe(
        data =>{
          console.log(data);
        });
        if(this.miPorfolio2 != null){
          alert("Persona editada"); 
              
          this.router.navigate(['/principal']);
        }
        else{
          alert("fallo al guardar persona");
          this.router.navigate(['/principal']);
        }
}
}
