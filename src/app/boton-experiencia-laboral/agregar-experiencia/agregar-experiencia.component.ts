import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/experiencia.service';
import { experiencia} from 'src/app/model/experiencia';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  
  experiencia_laboral: String = '' ;

    constructor( 
    
private datosExperiencia: ExperienciaService,
private router: Router,

    ) { 
      

    }
  
    ngOnInit() {
    
  }
  

    AgregarExperiencia():void{
      const exp = new experiencia(this.experiencia_laboral);
      this.datosExperiencia.save(exp).subscribe( data=> {
       
      });
      if(this.experiencia_laboral != null){
        alert("Experiencia agregada"); 
            
        this.router.navigate(['boton-experiencia-laboral']);
      }
      else{
        alert("fallo al guardar proyecto");
        this.router.navigate(['boton-experiencia-laboral']);
      }
      
     }
    }

