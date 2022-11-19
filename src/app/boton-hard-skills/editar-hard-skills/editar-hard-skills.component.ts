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
nombre_hard1: String ='';
number_hard1: number;

  constructor(  private datosHard: HardSkillsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
  

  }

  ngOnInit(): void {
    {
    const id_hard = this.activatedRoute.snapshot.params['id_hard'];
    this.datosHard.getById(id_hard).subscribe(
      data => { 
        console.log(data);
        this.miPorfolio2=data;
        this.nombre_hard1 = this.miPorfolio2.nombre_hard;
        this.number_hard1 = this.miPorfolio2.number_hard;
      }  );
       
    }  
  }

  onUpdate():void{
    const id_hard = this.activatedRoute.snapshot.params['id_hard'];
    this.datosHard.updateHardSkills(id_hard, this.miPorfolio2).subscribe(
      data =>{
       console.log(data);
     
        
      });
      if(this.miPorfolio2 != null){
        alert("Hard Skill agregado"); 
            
        this.router.navigate(['/boton-hard-skills']);
      }
      else{
        alert("fallo al guardar Hard Skill");
        this.router.navigate(['/boton-hard-skills']);
      }
   }
    
 
}
