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
  Estudios: estudios;
  

   
  
  constructor( 
    private router: Router,
    private datosEstudios: EstudiosService,
    private activatedRoute: ActivatedRoute
    ) { }
  
    ngOnInit() {
  
   this.cargarDatos();  
  }
  
  
  cargarDatos(){
    {
      this.datosEstudios.getEstudios().subscribe( data => {
        console.log(data)
        this.Estudios= data;
        
      }) } 
  }
  onUpdateEstudios():void{
    const id_estudios = this.activatedRoute.snapshot.params['id_estudios'];
  
    this.datosEstudios.update(id_estudios, this.Estudios).subscribe(
      data =>{
        console.log(data);
    
  
  });
  if(this.Estudios != null){
    alert("Estudios agregados"); 
        
    this.router.navigate(['']);
  }
  else{
    alert("fallo al guardar estudios");
    this.router.navigate(['']);
  }
   }
    
}
