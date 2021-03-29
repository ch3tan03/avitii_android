import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService, UserService } from 'src/app/services';
import { Router } from '@angular/router';
import { Role } from 'src/app/models';
import { UtilityService } from 'src/app/services/utility.service';
import { first } from 'rxjs/internal/operators/first';


@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  portfolioDataArr:any=[];
  userObj: any;
  adminViewT: boolean = false;
  Role=Role;
  constructor(
    public utilityService: UtilityService,
    private authenticationService: AuthenticationService,
    public router: Router,
    public dialogRef: MatDialogRef<PublicProfileComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
  ) {
    this.userObj = data.userObj;
    if (data.adminViewT) {
      this.adminViewT = true;
    }
    this.userService.getUserProfilePortFolioByUserId(this.userObj._id)
    .pipe(first())
    .subscribe(
      data => {
        if (data && data['success']) {
          this.portfolioDataArr=data["data"];
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

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: true });
  }

  addNewRatings(_userObj, _loanId) {
    if (!_userObj || !_userObj._id) {
      return;
    }
    let _parentRouting = '';
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _parentRouting = 'borrower';
        break;
      case Role.Lender:
        _parentRouting = 'lender';
        break;
      case Role.Admin:
        _parentRouting = 'admin';
        break;
    }
    this.router.navigate(['/' + _parentRouting + '/ratings'], { state: { createdBy: this.authenticationService.currentUserValue._id, userId: _userObj._id, loanId: _loanId } });
  }

}
