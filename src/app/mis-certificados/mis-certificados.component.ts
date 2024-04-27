import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-mis-certificados',
  templateUrl: './mis-certificados.component.html',
  styleUrls: ['./mis-certificados.component.css']
})
export class MisCertificadosComponent implements OnInit {



  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}