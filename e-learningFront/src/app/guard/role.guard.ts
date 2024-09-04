  import { AuthServiceService } from 'src/app/service/auth-service.service';
  import { Injectable } from '@angular/core';
  import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
  } from '@angular/router';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root',
  })
  export class RoleGuard implements CanActivate {
    constructor(private service: AuthServiceService, private route: Router) {}
    canActivate(route:ActivatedRouteSnapshot) {
      console.log("$$$$");
      console.log(route.data["roles"]
        );
      
      console.log(this.service.haveRoleAccess());
      
      if (this.service.haveRoleAccess() == route.data["roles"] ) {
        return true;
      } else {
        this.route.navigate(['login']);
        return false;
      }
    }
  }
