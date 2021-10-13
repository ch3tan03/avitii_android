import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/role';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class BankDetailsVerifyGuard implements CanActivate {
  constructor(
    private alertService: AlertService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      let _currentUserRole = '';
      try {
        _currentUserRole = currentUser.role;
      } catch (ex) { }

      if (!currentUser.isUsersBankDetailsSubmitted) {
        this.router.navigate([_currentUserRole + '/home']);
        this.alertService.error("Bank details submission is still pending. Please update to access this feature.", true);
        return false;
      }
      // authorised so return true	
      return true;
    }
    // not logged in so redirect to login page with the return url
    let paramobj = this.router.getCurrentNavigation().extras.state;
    if (paramobj) {
      paramobj.returnUrl = state.url;
    }
    this.router.navigate(['/login'], { state: paramobj });

    return false;
  }

}
