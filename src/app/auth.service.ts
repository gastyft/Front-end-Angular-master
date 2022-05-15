import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'https://localhost:3000/api';

  token; 
  
}

  constructor() { }
}
