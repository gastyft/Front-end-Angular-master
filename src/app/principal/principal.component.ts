import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PersonaService } from '../persona.service';
import { EstudiosService } from '../estudios.service';
import { ExperienciaService } from '../experiencia.service';
import { ProyectosService } from '../proyectos.service';
import { ImagenService } from '../imagen.service';
import { HardSkillsService } from '../hard-skills.service';
import { TokenService } from '../token.service';
import { hardSkills } from '../model/hardskills';
import { persona } from '../model/persona';
import swal from 'sweetalert';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  public archivos: any = [];
  // public previsualizacion: String | undefined;
  event: any;
  miPorfolio: any;
  miPorfolio1: any;
  miPorfolio2: any;
  miPorfolio3: any;
  data: any;
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  imagen: any;
  hardSkill: any;
  data5: any;
  isLogged: boolean = false;
last: any;
id:any;
nombre: persona = null;
apellido:persona = null;
edad:persona = null;
ciudad:persona = null;
nacionalidad:persona = null;
estado_civil:persona = null;

  constructor(
    private tokenService: TokenService,
    private sanitizer: DomSanitizer,
    private datosPersona: PersonaService,
    private datosEstudios: EstudiosService,
    public datosExperiencia: ExperienciaService,
    public datosProyectos: ProyectosService,
    private imagenService: ImagenService,
    private datosHardSkills: HardSkillsService
  ) {}
  /*
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

    }}
  }
}
*/

  ngOnInit(): void {
    {
      
      this.datosPersona.getPersona().subscribe((data) => {
        console.log(data);
        this.miPorfolio = data;
        
        this.nombre = this.miPorfolio?.nombre;
     this.apellido = this.miPorfolio?.apellido;
     this.edad= this.miPorfolio?.edad;
     this.ciudad= this.miPorfolio?.ciudad;
     this.nacionalidad= this.miPorfolio?.nacionalidad;
     this.estado_civil= this.miPorfolio?.estado_civil;
      });
    }
    {
      this.datosEstudios.getEstudios().subscribe((data1) => {
        console.log(data1);
        this.miPorfolio1 = data1;
      });
    }
    {
      this.datosExperiencia.lista().subscribe((data2) => {
        console.log(data2);
        this.miPorfolio2 = data2;
      });
    }
    {
      this.datosProyectos.lista().subscribe((data3) => {
        console.log(data3);
        this.miPorfolio3 = data3;
      });
    }
    {
      this.datosHardSkills.getHardSkills().subscribe((data5) => {
        console.log(data5);
        this.hardSkill = data5;
      });
    }

   {
      this.imagenService.list().subscribe((data4) => {
        this.imagen = data4;

      
      });  
    }

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

 
}
// swal("Problemas con el servidor", "Pagina en mantenimiento. No se cargaran mis datos. Disculpen las molestias", "error");



