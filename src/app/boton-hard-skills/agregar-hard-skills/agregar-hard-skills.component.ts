import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkillsService } from 'src/app/hard-skills.service';
import { hardSkills } from 'src/app/model/hardskills';


@Component({
  selector: 'app-agregar-hard-skills',
  templateUrl: './agregar-hard-skills.component.html',
  styleUrls: ['./agregar-hard-skills.component.css']
})
export class AgregarHardSkillsComponent implements OnInit {

  hard: string='';
  nombre_hard : any ;
   number_hard:any;
  constructor(private router : Router,
    private datosHard : HardSkillsService) { }

  ngOnInit(): void {
  }


  AgregarHardSkills():void{
    const hard = new hardSkills(this.nombre_hard  , this.number_hard);
    this.datosHard.save(hard).subscribe( data=> {
     
     
    });
    if(this.hard != null){
      alert("Hard Skill agregado"); 
          
      this.router.navigate(['boton-proyectos']);
    }
    else{
      alert("fallo al guardar Hard Skill");
      this.router.navigate(['boton-hard-skills'])
    }
    
   }
}
