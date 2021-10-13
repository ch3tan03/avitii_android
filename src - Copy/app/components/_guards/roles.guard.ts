import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/role';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services';

@Injectable({
    providedIn: 'root'
})
export class RolesGuard implements CanActivate {
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
            switch (_currentUserRole) {
                case Role.Lender:
                    if (!currentUser.isVerified) {
                        if (!currentUser.isRegisteredAllowed2EditProfile) {
                            this.router.navigate(['/logout']);
                            this.alertService.error("Approval is still pending. We will notify you when approved.", true);
                            return false;
                        } else {
                            //this.router.navigate(['/profile']);
                            this.alertService.error("Approval is still pending. Please update required data.", true);
                            return true;
                        }
                    }
                    break;
                case Role.Borrower:
                    if (!currentUser.isVerified) {
                        switch (state.url) {
                            case '/borrower/profile':
                                //NO Action here
                                break;
                            default:
                                this.alertService.error("Your account approval is pending. Please upload educational/work documents and complete your profile to expedite the approval process. Ignore if already uploaded.", true);
                                this.router.navigate(['/borrower/profile']);
                                return false;
                                break;
                        }
                    }
                    break;
            }
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(_currentUserRole) === -1) {
                // role not authorised so redirect to home page
                //alert('1')
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true	
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

}
