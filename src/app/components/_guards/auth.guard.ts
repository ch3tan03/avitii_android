import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';
import * as _ from "lodash";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {			
            // check if route is restricted by role
            //currentUser.appPermissions
             if (route.data && route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                 // role not authorised so redirect to home page
				 //alert('1')
                  this.router.navigate(['/']);
                  return false;
              }
              if (route.data && route.data.appPermissions && _.intersection(route.data.appPermissions, currentUser.appPermissions).length ==0) {
                // role not authorised so redirect to home page
                //alert('1')
                 this.router.navigate(['/']);
                 return false;
             }
            // authorised so return true	
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}