import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('user_logged');
        if(!token){
            return next.handle(req);
        }
        var _user = JSON.parse(token);
        const dupReq = req.clone({
           headers: req.headers.set('authorization', (_user && _user.token) ? 'Bearer ' + _user.token : '')
        });
        return next.handle(dupReq);
    }
}

@NgModule({
    providers: [{
       provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor,
       multi: true,
    }]
 })
 export class Interceptor { }