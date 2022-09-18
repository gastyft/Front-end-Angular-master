import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {FormControl, FormGroup, FormsModule } from '@angular/forms';
import { HardSkillsService } from '../hard-skills.service';
import { hardSkills } from '../model/hardskills';
@Component({
  selector: 'app-boton-hard-skills',
  templateUrl: './boton-hard-skills.component.html',
  styleUrls: ['./boton-hard-skills.component.css']
})
export class BotonHardSkillsComponent implements OnInit {

  form:FormGroup;
 hard:any;
 data:any;


  constructor(
    private router: Router,
    private datosHardSkills: HardSkillsService,
    private activatedRoute: ActivatedRoute,
    private FormBuilder: FormBuilder
  ) { 
    this.form= this.FormBuilder.group({
      
      'frontend':['',[Validators.required ]],
      'backend':['',[Validators.required ]],
      'base_datos':['',[Validators.required ]],
     'ingles':['',[Validators.required ]],
     'italiano':['',[Validators.required ]],
     'trabajo_equipo':['',[Validators.required ]],
     'comunicacion':['',[Validators.required ]],
    
    })
  }

  ngOnInit(): void {
  


this.cargarDatos();

}
cargarDatos()
{
  this.datosHardSkills.getHardSkills().subscribe( data => {
    console.log(data)
    this.hard= data;
    
  }) } 

  onUpdateHardSkills():void{
    {
      
      const id = this.activatedRoute.snapshot.params['id'];
    if(this.form.value){
      this.datosHardSkills.updateHardSkills(id, this.hard).subscribe( 
        data =>{
          console.log(data);
      
      
      })
      this.cargarDatos();
      alert("Datos de Hard Skills actualizados");
      this.router.navigate(['']);
       
    
   }
}
}
}
