import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthServiceService,private route:Router){

  }
  canActivate(){
    if(this.service.IsLoggedIn()){
    return true;
    }else{
      this.route.navigate(['login'])
      return false;
    }
  }

  
}
