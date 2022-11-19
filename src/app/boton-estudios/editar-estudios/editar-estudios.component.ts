import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiosService } from 'src/app/estudios.service';
import { estudios } from 'src/app/model/estudios';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {
data: any;
estudios1:any;

  nombreestudios: estudios = null;
  estudiodetails: estudios = null;

  constructor(
    private datosEstudios: EstudiosService,
    private activatedRoute : ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    {
    const id_estudios = this.activatedRoute.snapshot.params['id_estudios'];
    this.datosEstudios.getEstudiosId(id_estudios).subscribe((data) => {
      console.log(data);
      this.estudios1 = data;
     this.estudiodetails = this.estudios1.estudiodetail;
     this.nombreestudios = this.estudios1.nombreestudio;
    }
    )};
  }



onUpdate():void{
  const id_estudios = this.activatedRoute.snapshot.params['id_estudios'];
  this.datosEstudios.update(id_estudios, this.estudios1).subscribe(
    data =>{
     console.log(data);
   
      
    });
    if(this.estudios1 != null){
      alert("Estudio actualizado"); 
          
      this.router.navigate(['boton-estudios']);
    }
    else{
      alert("fallo al guardar estudio");
      this.router.navigate(['boton-estudios']);
    }
 }
}
