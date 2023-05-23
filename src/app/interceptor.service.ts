import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor( private tokenService: TokenService,  private router: Router ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
const token: string = localStorage.getItem('token');

let request = req;

if (token) {
  request = req.clone({
    setHeaders: {
      authorization: `Bearer ${ token }`
    }
  });
}

return next.handle(request).pipe(
  catchError((err: HttpErrorResponse) => {

    if (err.status === 401) {
      this.router.navigateByUrl('/login1');
    }

    return throwError(() => err);

  })
);
}


}







/* let intReq = req;
    const token = this.tokenService.getToken();
    if(token != null){
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer '+ token)});

      return next.handle(intReq);
    }
    
  }
}

*/
export const interceptorProvider =[{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}];  

