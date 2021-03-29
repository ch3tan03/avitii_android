import { Component, OnInit } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { AlertService, AuthenticationService } from 'src/app/services';
import { UtilityService } from 'src/app/services/utility.service';
import { first } from 'rxjs/operators';
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { Role, AppAccessPermissions } from 'src/app/models/role';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  PaymentTransactionDetailsArray: any = null;
  loading = false;

  constructor(
    public dialog: MatDialog,
    private socketService: SocketioService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    public authenticationService: AuthenticationService,
    public router: Router,
    ) {
    let _data = {};

    this.socketService.getAllUsersWithRequestData(_data, 0)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.PaymentTransactionDetailsArray = data["data"];
            this.loading = false;
          } else {
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          this.PaymentTransactionDetailsArray = [];
          try {
            if (error && error.error && error.error.message) {
              errorMsg2show = error.error.message;
            } else if (error && error.message) {
              errorMsg2show = error.message;
            } else {
              errorMsg2show = error;
            }
          } catch (ex) { }
          this.alertService.error(errorMsg2show);
          this.loading = false;
        });
  }

  ngOnInit(): void {
  }

  updateUsersVerificationStatus(_userId, _isVerified) {
    this.alertService.success("Please wait while we updating status of user");
    this.socketService.updateUsersVerificationStatus(_userId, _isVerified)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
            usersObjArr[data["data"]["_id"]] = data["data"]
            this.PaymentTransactionDetailsArray = usersObjArr;
            this.alertService.success(data['message']);
            this.loading = false;
          } else {
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          //this.PaymentTransactionDetailsArray = [];
          try {
            if (error && error.error && error.error.message) {
              errorMsg2show = error.error.message;
            } else if (error && error.message) {
              errorMsg2show = error.message;
            } else {
              errorMsg2show = error;
            }
          } catch (ex) { }
          this.alertService.error(errorMsg2show);
          this.loading = false;
        });
  }

  deleteUserById(_userId) {
    this.alertService.success("Please wait while we deleting user");
    this.socketService.deleteUserById(_userId, this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
            delete usersObjArr[_userId];
            this.PaymentTransactionDetailsArray = usersObjArr;
            this.alertService.success(data['message']);
            this.loading = false;
          } else {
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          //this.PaymentTransactionDetailsArray = [];
          try {
            if (error && error.error && error.error.message) {
              errorMsg2show = error.error.message;
            } else if (error && error.message) {
              errorMsg2show = error.message;
            } else {
              errorMsg2show = error;
            }
          } catch (ex) { }
          this.alertService.error(errorMsg2show);
          this.loading = false;
        });
  }
  usersProfile(userObj) {

    console.log('95', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(PublicProfileComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {
        userObj: userObj,
        adminViewT: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  returnT4CurrentUserIsSAdmin() {
    try {
      if (this.authenticationService.currentUserValue.appPermissions && this.authenticationService.currentUserValue.appPermissions.indexOf(AppAccessPermissions.adminAddEdit) > -1) {
        return true;
      }
    } catch (ex) {
    }
    return false;
  }

  returnT4CurrentUserAllowedToShow(currentUserRole) {
    if (this.returnT4CurrentUserIsSAdmin()) {
      return true;
    }
    if (currentUserRole != Role.Admin) {
      return true;
    }
    return false;
  }
  navigate2EditUser(userId) {
    this.router.navigate(['/admin/add-user'], { state: { userId: userId } });
  }
}
