import { Component, OnInit } from '@angular/core';

import{FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
form: FormGroup;

constructor(private formBuilder: FormBuilder ) { 
 
//creamos el grupo de controles para el formulario
this.form= this.formBuilder.group({
  password:['',Validators.required],
  email:['',Validators.required]
})
}


  ngOnInit(): void {}


}