import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';
import { Role } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppRouterService {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }
  onInitRouteOnHomeIfLoggedin() {
    if (this.authenticationService.currentUserValue) {
      this.appRouter(this.authenticationService.currentUserValue);
    }
  }

  appRouter(_user) {
    let _currentUserRole = '';
    try {
      _currentUserRole = _user.role;
    } catch (ex) { }
    switch (_currentUserRole) {
      // case Role.Business:
      //   this.router.navigate(['/business']);
      //   break;
      // case Role.Invester:
      //   this.router.navigate(['/invester']);
      //   break;
      case Role.Admin:
        this.router.navigate(['/admin']);
        break;
      case Role.Lender:
        this.router.navigate(['/lender']);
        break;
      case Role.Borrower:
        this.router.navigate(['/borrower']);
        break;
      case 'Register':
      case 'register':
        this.router.navigate(['/register']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

  appRouterRoleWise(_user, _path) {
    _path = (_path ? _path : '');
    let _currentUserRole = '';
    try {
      _currentUserRole = _user.role;
    } catch (ex) { }
    switch (_currentUserRole) {
      case Role.Admin:
        this.router.navigate(['/admin/' + _path]);
        break;
      case Role.Lender:
        this.router.navigate(['/lender/' + _path]);
        break;
      case Role.Borrower:
        this.router.navigate(['/borrower/' + _path]);
        break;
      case 'Register':
      case 'register':
        this.router.navigate(['/register']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
  appRouteToPath(_path: string, _stateObj: any = null, delayedT: boolean = false) {
    if (delayedT) { 
      if (_stateObj) {
        setTimeout(()=>{
          this.router.navigate([_path], { state: _stateObj });
        },500);
      } else {
        setTimeout(()=>{
          this.router.navigate([_path]);
        },500);
      }
    } else {
      if (_stateObj) {
        this.router.navigate([_path], { state: _stateObj });
      } else {
        this.router.navigate([_path]);
      }
    }
  }
}
