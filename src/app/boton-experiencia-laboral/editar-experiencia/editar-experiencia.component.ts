import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/experiencia.service';
import {  experiencia } from '../../model/experiencia';
@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

experiencia: any;

experiencia_laboral: experiencia = null;
id_exp:number;
miPorfolio2: any;
data2: any;

  constructor( 
   private datosExperiencia: ExperienciaService,
   private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    

  }  

  ngOnInit() {

    {
      const id_exp = this.activatedRoute.snapshot.params['id_exp'];
      this.datosExperiencia.getExperiencia(id_exp).subscribe(
        data => { 
          console.log(data);
          this.experiencia =data;
          
          this.experiencia_laboral= this.experiencia.experiencia_laboral;
        }  );
       
    }  


}


   onUpdate():void{
    const id_exp = this.activatedRoute.snapshot.params['id_exp'];
    this.datosExperiencia.update(id_exp, this.experiencia).subscribe(
      data =>{
       console.log(data);
     
        
      });
      if(this.experiencia != null){
        alert("Experiencia agregada"); 
            
        this.router.navigate(['boton-experiencia-laboral']);
      }
      else{
        alert("fallo al guardar experiencia");
        this.router.navigate(['boton-experiencia-laboral']);
      }
   }
    
 
  }