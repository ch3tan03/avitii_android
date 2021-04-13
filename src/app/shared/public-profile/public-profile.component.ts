import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService, AuthenticationService, UserService } from 'src/app/services';
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
  profileAdditionalData:any={
    numberOfLoanCreated:null,
    numberOfSignedContract:null,
    numberOfRepaidContract:null,
    numberOfAmontBorrowed:null,
    numberOfAmontRefunded:null,
    numberOfAmountAvailableInBudget:null,
    recommended:null,
    notRecommended:null,
    borrowerIsInRKI:null,
  };
  loading: boolean = false;
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
    private alertService: AlertService,
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
    this.dialogRef.close({ event: 'close', data: this.userObj });
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

  updateUsersVerificationStatus(_userId, _verifiedKey, _isVerified) {
    this.alertService.success("Please wait while we updating status of user");
    this.userService.updateUsersDataKeyVerificationStatus(_userId, _verifiedKey, _isVerified)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.userObj = data["data"]
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

}
