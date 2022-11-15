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


  miPorfolio2: any;
  data3: any;
 data:any;
  persona: persona={
    nombre:'',
    apellido:'',
    edad:'',
    ciudad:'',
    nacionalidad:'',
    estado_civil:'',

  }
  
  form:FormGroup;

    constructor( 
      private router: Router,
      private datosPorfolio: PersonaService,
      private activatedRoute: ActivatedRoute,
      private FormBuilder: FormBuilder
    ) {
      this.form= this.FormBuilder.group({
        'nombre':['',[Validators.required]],
        'apellido':['',[Validators.required ]],
        'ciudad':['',[Validators.required ]],
       'nacionalidad':['',[Validators.required ]],
       'estado_civil':['',[Validators.required ]],
       
    })
  }
    ngOnInit() {
  

this.cargarDatos();

      }
cargarDatos()
      {
        this.datosPorfolio.getPersona().subscribe( data3 => {
          console.log(data3)
          this.miPorfolio2= data3;
          
        }) } 
    
  onUpdatePersona():void{
    {
      
      const id = this.activatedRoute.snapshot.params['id'];
    if(this.form.value){
      this.datosPorfolio.updatePersona(id, this.persona).subscribe(
        data =>{
          console.log(data);
      
      
      })
      this.cargarDatos();
      alert("Datos de la persona actualizada");
      this.router.navigate(['']);
       
    
   }
}
}
}

  