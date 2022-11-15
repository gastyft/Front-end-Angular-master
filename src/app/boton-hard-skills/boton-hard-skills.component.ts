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
      
      'nombre_hard':['',[Validators.required ]],
      'number_hard':['',[Validators.required ]]
    
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

  
  deleteHard(id_hard?: number){
    if(id_hard != null){
      this.datosHardSkills.deleteHard(id_hard).subscribe(
                data => {
     this.cargarDatos();
      
          
        })
        alert("Se ha eliminado Hard Skill");
    
      location.reload();
    }
  }


  onUpdateHardSkills():void{
    {
      
      const id = this.activatedRoute.snapshot.params['id'];
    if(this.form.value){
      this.datosHardSkills.updateHardSkills(id, this.hard).subscribe( 
        data =>{
          console.log(data);
      
      
      });
      if(this.hard != null){
      alert("datos de Hard-Skills editados"); 
          
      this.router.navigate(['']);
    }
    else{
      alert("fallo al guardar hard skills");
      this.router.navigate(['boton-hard-skills']);
    }
       
    
   }
}
}
}
