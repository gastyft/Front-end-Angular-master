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

experiencia: experiencia = null; 

miPorfolio2: any;
data2: any;

  constructor( 
   private datosExperiencia: ExperienciaService,
   private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }  

  ngOnInit() {
    {
      this.datosExperiencia.lista().subscribe( data2 =>{
        console.log(data2)
        this.miPorfolio2= data2;
        
      }) } 


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
        alert("fallo al guardar proyecto");
        this.router.navigate(['boton-experiencia-laboral']);
      }
   }
    
 
  }