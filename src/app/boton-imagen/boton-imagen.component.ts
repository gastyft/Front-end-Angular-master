import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImagenService } from '../imagen.service';
import { Imagen } from '../model/imagen';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-boton-imagen',
  templateUrl: './boton-imagen.component.html',
  styleUrls: ['./boton-imagen.component.css']
})
export class BotonImagenComponent implements OnInit {

  @ViewChild('imagenInputFile', {static:false}) imagenFile: ElementRef;

imagen:File;
imagenMin: File;
imagen1: Imagen;
imagenc: any;
data4:any;

  constructor(private spinner: NgxSpinnerService,
   private router: Router,
  private imagenService: ImagenService) { }


  ngOnInit() {
      /* /** spinner starts on init 
       this.spinner.show();

       setTimeout(() => {
         /** spinner ends after 5 seconds 
         this.spinner.hide();
       })
       this.cargarImagen();*/
  }

 /* onFileChange(event:any) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);

  }
  cargarImagen(){
   

    this.imagenService.list().subscribe(
      data4=>{
       
   
        this.imagenc = data4; 
      
  })
}
 */
     
/*
  onUpload():void{
    this.spinner.show();

    this.imagenService.upload(this.imagen).subscribe(
      data =>{
        

        this.spinner.hide(); 
        this.router.navigate(['']);
        
      },
      err => {
        alert(err.error.MensajeCloudinary);
        this.spinner.hide(); 
      
        this.reset();
      });
  }
  reset():void{
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value ='';

  }
  deleteImagen(id?: number){
    if(id != undefined){
      this.imagenService.delete(id).subscribe(
                data => {
 
        })
        alert("Se ha eliminado imagen anterior");
    
      location.reload();
    }
  }
*/
}
