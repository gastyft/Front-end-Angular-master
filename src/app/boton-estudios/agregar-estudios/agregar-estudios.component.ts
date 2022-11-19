import { Component, OnInit } from '@angular/core';
import { EstudiosService } from '../../estudios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { estudios } from '../../model/estudios';

@Component({
  selector: 'app-agregar-estudios',
  templateUrl: './agregar-estudios.component.html',
  styleUrls: ['./agregar-estudios.component.css']
})
export class AgregarEstudiosComponent implements OnInit {



data: any;
  Estudios: estudios ;
  
nombreestudio: String='';
estudiodetail: String='';
   
  
  constructor( 
    private router: Router,
    private datosEstudios: EstudiosService,
    private activatedRoute: ActivatedRoute
    ) { }
  
    ngOnInit() {
  

  }
  
  
  onUpdateEstudios():void{
    const est = new estudios(this.nombreestudio, this.estudiodetail);
    this.datosEstudios.save(est).subscribe(
      data =>{
        console.log(data);
    
  
  });
  if(this.est != null){
    alert("Estudios agregados"); 
        
    this.router.navigate(['']);
  }
  else{
    alert("fallo al guardar estudios");
    this.router.navigate(['']);
  }
   }
  est(est: any) {
    throw new Error('Method not implemented.');
  }
    
}
