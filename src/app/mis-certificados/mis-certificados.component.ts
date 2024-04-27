import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-certificados',
  templateUrl: './mis-certificados.component.html',
  styleUrls: ['./mis-certificados.component.css']
})
export class MisCertificadosComponent implements OnInit {



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }
}