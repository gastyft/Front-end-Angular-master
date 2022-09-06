import { Component, OnInit } from '@angular/core';
import{ FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import{FormBuilder}from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  email='';
  password='';
form: FormGroup;
constructor(private authService: AuthService,  private formBuilder: FormBuilder, private ruta:Router) { 

//creamos el grupo de controles para el formulario
this.form= this.formBuilder.group({
  password:['',[Validators.required, Validators.minLength(8)]],
  email:['',[Validators.required, Validators.email]],
  deviceInfo: this.formBuilder.group({
    /* deviceId:[""],
    deviceType:[""],
    notificationToken:[""]*/
  })
})
}

/*
Login(){
  this.authService.Login(this.email, this.password)
}*/

  ngOnInit(): void {}
/*
   get Email(): any
  {
    return this.form.get('email');
  }
  get Password(): any
  {
    return this.form.get('password');
  }

  onEnviar(event:Event)
  {
    event.preventDefault;
    this.authService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }*/
}



