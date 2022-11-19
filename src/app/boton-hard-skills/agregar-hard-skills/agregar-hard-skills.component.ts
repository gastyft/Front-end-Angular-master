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

  nombre_hard:  String = '' ;
  number_hard: number ;
hards: hardSkills = null;
   data: any;
 
  
  constructor(private router : Router,
    private datosHard : HardSkillsService) { }

  ngOnInit(): void {
    
  }


  AgregarHardSkills():void{
    const hards1 = new hardSkills(this.nombre_hard, this.number_hard);
    this.datosHard.saveHard(hards1).subscribe( data=> {
     console.log(data);
    }
    )
    if( this.nombre_hard  !=null && this.number_hard !=null){

      alert("Hard Skill agregado"); 
          
      this.router.navigate(['boton-hard-skills']);
    }
    else{
      alert("fallo al guardar Hard Skill");
      this.router.navigate(['boton-hard-skills'])
    }
   
   }
   hards1(hards1: any) {
    throw new Error('Method not implemented.');
  }
}
