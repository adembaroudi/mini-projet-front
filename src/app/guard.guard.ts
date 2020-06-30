import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private apiservice: ApiserviceService , private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const connect = this.apiservice.responseData;
      if (connect === null ) {
        this.router.navigateByUrl('/log-in');
        return false ;
    }
      return true;
  }
  
}

