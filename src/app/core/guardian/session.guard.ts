import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookieserv: CookieService, private router:Router) {


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



    return this.revisarCookiesession();
  }

  revisarCookiesession(): boolean {
    try {
      const token: boolean = this.cookieserv.check('token')
      console.log('ststud tokennn ::: ', token);

      if(!token){ 
        this.router.navigate(['/','auth'])
      }
      return token;

      return token
    } catch (error) {
      console.log('algo error en guardian .. ', error);


      return false
    }

  }

}
