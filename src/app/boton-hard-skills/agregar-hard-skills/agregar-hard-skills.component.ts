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
data5: any;
  hard:  String = '' ;
hardss: hardSkills;
   data: any;
  constructor(private router : Router,
    private datosHard : HardSkillsService) { }

  ngOnInit(): void {
    
  }


  AgregarHardSkills():void{
    const hards= new hardSkills(this.hardss.nombre_hard, this.hardss.number_hard)
    this.datosHard.saveHard(hards).subscribe( data=> {
     
    }
    )
    if(this.hardss.nombre_hard != null && this.hardss.number_hard !=null){

      alert("Hard Skill agregado"); 
          
      this.router.navigate(['boton-hard-skills']);
    }
    else{
      alert("fallo al guardar Hard Skill");
      this.router.navigate(['boton-hard-skills'])
    }
  
   }
}
