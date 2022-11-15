import { Component, OnInit } from '@angular/core';
import { EstudiosService } from 'src/app/estudios.service';
import { estudios } from 'src/app/model/estudios';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {
data: any;
  estudios: estudios;
  constructor(
    private datosEstudios: EstudiosService,

  ) { }

  ngOnInit(): void {
    this.datosEstudios.getEstudiosId().subscribe((data) => {
      console.log(data);
      this.estudios = data;
    });
  }

}
