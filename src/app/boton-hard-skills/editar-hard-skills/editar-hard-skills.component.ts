import { Component, OnInit } from '@angular/core';
import { HardSkillsService } from 'src/app/hard-skills.service';
import { ActivatedRoute, Router } from '@angular/router';
import { hardSkills } from 'src/app/model/hardskills';

@Component({
  selector: 'app-editar-hard-skills',
  templateUrl: './editar-hard-skills.component.html',
  styleUrls: ['./editar-hard-skills.component.css']
})
export class EditarHardSkillsComponent implements OnInit {


  hardskill: hardSkills = null; 

miPorfolio2: any;
data2: any;

  constructor(  private datosHard: HardSkillsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
  

  }

  ngOnInit(): void {
  }

  onUpdate():void{
    const id_hard = this.activatedRoute.snapshot.params['id_hard'];
    this.datosHard.updateHardSkills(id_hard, this.hardskill).subscribe(
      data =>{
       console.log(data);
     
        
      });
      if(this.hardskill != null){
        alert("Hard Skill agregado"); 
            
        this.router.navigate(['boton-hard-skill']);
      }
      else{
        alert("fallo al guardar Hard Skill");
        this.router.navigate(['boton-hard-skill']);
      }
   }
    
 
}
