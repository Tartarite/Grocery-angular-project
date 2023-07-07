import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GroceryServiceService } from './grocery-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("in route guard " + this.serv.admin_login.value)
      if(this.serv.admin_login.value){
        
        return true
      }
      else
      {
      
        alert("Unauthorized");
        return false;
      }
  }
 
  constructor(private serv:GroceryServiceService){}
}
