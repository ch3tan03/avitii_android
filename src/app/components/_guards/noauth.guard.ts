import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (!currentUser) {			
            // check if route is restricted by role
            
             if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                 // role not authorised so redirect to home page
				 //alert('1')
                  this.router.navigate(['/']);
                  return false;
              }
 
            // authorised so return true	
            return true;
        }
        // not logged in so redirect to login page with the return url
       // this.router.navigate(['/lender']);
        switch (currentUser.role) {         
          case 'Admin':
            this.router.navigate(['/admin']);
            break;
          case 'lender':
            this.router.navigate(['/lender']);
            break;
          case 'borrower':
            this.router.navigate(['/borrower']);
            break;         
          default:
            this.router.navigate(['/']);
            break;
        }
        return false;
    }
}