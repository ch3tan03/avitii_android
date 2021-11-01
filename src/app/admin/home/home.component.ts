import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/internal/operators/first';
import { Role } from 'src/app/models';
import { UserService } from 'src/app/services';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ContactService } from 'src/app/services/contact.service';
import { SocketioService } from 'src/app/socketio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    public contactService: ContactService,
    private socketService: SocketioService,
    public userService: UserService,
  ) {
    this.getAdminDashboardDataOnLogin();
    let _adminUsersArray = [];
    _adminUsersArray.push(this.authenticationService.currentUserValue._id);

    let _currentContactObjAll = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, 'System', 'app-system-group', 'app-system-group', _adminUsersArray, null, null, [Role.Admin, Role.Borrower, Role.Lender], false);
    this.socketService.sendEventToAddNewContact(_currentContactObjAll);

    let _currentContactObjLender = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, 'Avitii Lending(L)', 'app-system-group-lenders', 'app-system-group-lenders', _adminUsersArray, null, null, [Role.Admin, Role.Lender], false);
    this.socketService.sendEventToAddNewContact(_currentContactObjLender);

    let _currentContactObjBorrower = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, 'Avitii Lending(B)', 'app-system-group-borrower', 'app-system-group-borrower', _adminUsersArray, null, null, [Role.Admin, Role.Borrower], false);
    this.socketService.sendEventToAddNewContact(_currentContactObjBorrower);

  }

  getAdminDashboardDataOnLogin() {
    this.userService.getAdminDashboardDataOnLogin(this.authenticationService.currentUserValue._id, this.authenticationService.currentUserValue.role)
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            this.authenticationService.currentUserAdminDashboardDataDetails = data['data'];
          } else {
          }
        },
        error => {
          let errorMsg2show = "";
          try {
            if (error && error.error && error.error.message) {
              errorMsg2show = error.error.message;
            } else if (error && error.message) {
              errorMsg2show = error.message;
            } else {
              errorMsg2show = error;
            }
          } catch (ex) { }

        });
  }

  ngOnInit(): void {
  }

}
