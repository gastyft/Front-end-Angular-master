import { Component, OnInit } from '@angular/core';

import{FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
email='';
password='';

constructor(private authService: AuthService ) { 
 
//creamos el grupo de controles para el formulario
/*this.form= this.formBuilder.group({
  password:['',Validators.required],
  email:['',Validators.required]
})
}
*/
}
Login(){
  this.authService.Login(this.email, this.password)
}

  ngOnInit(): void {}


}



