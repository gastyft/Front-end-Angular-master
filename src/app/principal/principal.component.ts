import { Component, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EquipoService } from '../equipo.service';
import{ PersonaService} from '../persona.service';
import { EstudiosService } from'../estudios.service';
import { ExperienciaService } from '../experiencia.service';
import { ProyectosService } from '../proyectos.service';
import { experiencia } from '../model/experiencia';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public archivos: any =[] 
  public previsualizacion: String | undefined;
event: any;
miPorfolio: any;
miPorfolio1: any;
miPorfolio2: any;
miPorfolio3: any;
data: any;
data1: any; 
data2:  any;
data3: any;


  constructor(  private sanitizer: DomSanitizer, private datosPersona: PersonaService, private datosEstudios: EstudiosService, 
    public datosExperiencia: ExperienciaService, public datosProyectos: ProyectosService    ) {
   }

   capturarFile(event: any) : any
   {
    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado)
    this.extraerBase64(archivoCapturado).then((imagen :any): void => {
 this.previsualizacion = imagen.base;

    })
console.log(event.target.files);

   }
   
extraerBase64 =async ($event: any) => new Promise((resolve, reject) => {
  try {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        blob: $event,
        image,
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        blob: $event,
        image,
        base: null
      });
    };

  } catch (e) {
    return null;
  }
})

/*

 subirArchivo(): any{ 
  try{
    const formularioDeDatos = new FormData();
    this.archivos.forEach((archivo : any) =>{
      console.log(archivo);
      formularioDeDatos.append('files', archivo)
    }) 
    this.rest.post('link localhost', formularioDeDatos)
    .subscribe(res=> {
      console.log('Respuesta del servidor', res);
    })
    catch(e) {
      console.log('ERROR', e);

    }
  }
}
*/



  ngOnInit(): void {  {
    this.datosPersona.getPersona().subscribe( data =>{
      console.log(data)
      this.miPorfolio=data;
      
    }) } 
    {
      this.datosEstudios.getEstudios().subscribe( data1 =>{
        console.log(data1)
        this.miPorfolio1=data1;
        
      }) } 
      {
        this.datosExperiencia.lista().subscribe( data2 =>{
          console.log(data2)
          this.miPorfolio2= data2;
          
        }) } 
        {
          this.datosProyectos.lista().subscribe( data3 =>{
            console.log(data3)
            this.miPorfolio3= data3;
            
          }) } 
 
  }

}



