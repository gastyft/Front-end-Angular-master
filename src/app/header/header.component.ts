import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service'; 
import { NavigationEnd, Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged : boolean= false;
  showInicio: boolean = true;
  
  constructor(public tokenService: TokenService, private router: Router ) {   
    this.showInicio = !this.router.url.includes('mis-certificados');

  // Suscripción a cambios en la URL para actualizar la visibilidad del enlace "Inicio"
  this.router.events.subscribe(() => {
    this.showInicio = !this.router.url.includes('mis-certificados');
  });
}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verificar la URL actual y mostrar u ocultar el título "Inicio" según corresponda
        this.showInicio = !event.url.includes('mis-certificados');
      }
    });
  }
  
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
    this.router.navigate(['/']);
  }
}