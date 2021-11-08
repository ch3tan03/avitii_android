import { Component, Inject, Optional, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService, AuthenticationService, UserService } from 'src/app/services';
import { Router } from '@angular/router';
import { Role } from 'src/app/models';
import { UtilityService } from 'src/app/services/utility.service';
import { first } from 'rxjs/internal/operators/first';
import { SocketioService } from 'src/app/socketio.service';
import { RatingsListComponent } from '../ratings-list/ratings-list.component';
import { MediaPreviewComponent } from '../media-preview/media-preview.component';
import { PublicProfileEditComponent } from '../public-profile-edit/public-profile-edit.component';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  portfolioDataArr: any = [];
  profileAdditionalData: any = {
    createdOn: null,
    _id: null,
    totalLoanCreated: null,
    totalSignedContract: null,
    totalRepaidContract: null,
    totalAmountBorrowed: null,
    totalAmountRefunded: null,
    totalAmountOfNextInstallment: null,
    totalAmountAvailableInBudget: null,
    totalNumberOfRecommended: null,
    totalNumberOfNotRecommended: null,
    borrowerIsInRKI: null,
    totalActiveContract: null,
    totalAmountLent: null,
  };
  loading: boolean = false;
  userObj: any;
  adminViewT: boolean = false;
  Role = Role;
  myRatingsSummaryObj: any = {};
  RatingDetailsArray: any = [];
  constructor(
    public utilityService: UtilityService,
    public authenticationService: AuthenticationService,
    public router: Router,
    public dialogRef: MatDialogRef<PublicProfileComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private alertService: AlertService,
    private socketService: SocketioService,
    public dialog: MatDialog,
    private _cdr: ChangeDetectorRef,
    private contactService: ContactService
  ) {
    this.userObj = data.userObj;
    if (data.adminViewT) {
      this.adminViewT = true;
      let _contactId = this.sendEvent2CreateNewCpntactIfMissing(this.userObj);
    }
    switch (this.userObj.role) {
      case Role.Admin:
        this.closeDialog();
        return;
        break;
        default:
          break;

    }
    this.userService.getUserProfilePortFolioByUserId(this.userObj._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.portfolioDataArr = data["data"];
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
    this.userService.getUsersDashboardData(this.userObj._id, this.userObj.role)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.profileAdditionalData = data["data"];
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
    let _data = {
      userId: this.userObj._id
    };

    this.socketService.getByQuerySummaryRatingReviewe(_data)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.myRatingsSummaryObj = data["data"];
            //this.rerender();
            this.loading = false;
          } else {
            //this.alertService.error(data['message']);
            this.loading = false;
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
          this.alertService.error(errorMsg2show);
          this.loading = false;
        });

    this.socketService.getByLoanIdRatingReviewe(_data)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.RatingDetailsArray = data["data"];
            //this.rerender();
            this.loading = false;
          } else {
            //this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          let errorMsg2show = "";
          this.RatingDetailsArray = [];
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
          //this.RatingDetailsArray = [];
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
  usersRatings(userObj) {

    //console.log('95', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(RatingsListComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {
        userObj: userObj,
        adminViewT: true,
        isOpenedInModel: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {

      }
      //console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  mediaPreviewModel(mediaSrc, mimeType) {

    //console.log('411', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(MediaPreviewComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '98%',
      width: '98%',
      hasBackdrop: true,
      data: {
        mediaSrc: mediaSrc,
        mimeType: mimeType
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`426 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  editUsersDocuments(userObj, _subDocumentKey) {
    //console.log('411', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(PublicProfileEditComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {
        userObj: userObj,
        subDocumentKey: _subDocumentKey
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        this.userObj.myPassportMedia = result.data.myPassportMedia;
        this.userObj.myPassportMediaSelfVerify = result.data.myPassportMediaSelfVerify;
        this.userObj.myPassportMediaVerified = result.data.myPassportMediaVerified;
        this.userObj.myPassportNumber = result.data.myPassportNumber;
        this.userObj.myDLMedia = result.data.myDLMedia;
        this.userObj.myDLMediaSelfVerify = result.data.myDLMediaSelfVerify;
        this.userObj.myDLMediaVerified = result.data.myDLMediaVerified;
        this.userObj.myDLNumber = result.data.myDLNumber;
        this.userObj.myHICardMedia = result.data.myHICardMedia;
        this.userObj.myHICardMediaSelfVerify = result.data.myHICardMediaSelfVerify;
        this.userObj.myHICardMediaVerified = result.data.myHICardMediaVerified;
        this.userObj.myRKIMedia = result.data.myRKIMedia;
        this.userObj.myRKIMediaSelfVerify = result.data.myRKIMediaSelfVerify;
        this.userObj.myRKIMediaVerified = result.data.myRKIMediaVerified;
        this._cdr.detectChanges();
      }

      ////console.log(`426 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  sendEvent2CreateNewCpntactIfMissing(userObj) {
    if (!userObj) {
      return
    }
    let id2check = userObj._id;
    let _contactId = this.contactService.returnContactIdForPrivate(id2check, this.authenticationService.currentUserValue._id);
    let _adminUsersArray = [];
    _adminUsersArray.push(this.authenticationService.currentUserValue._id);
    _adminUsersArray.push(id2check);
    let _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, userObj.firstName + ' ' + userObj.lastName, _contactId, _contactId, _adminUsersArray, null, null, null, false, false);
    this.socketService.sendEventToAddNewContact(_currentContactObj);
    return _contactId;
  }


  clickedOnUsersChat(userObj) {
    if (!userObj) {
      return
    }
    let _parentRouting = '';
    let _contactId = this.sendEvent2CreateNewCpntactIfMissing(userObj);
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
    this.dialogRef.close({ event: 'close', data: {} });
    this.router.navigate(['/' + _parentRouting + '/messages'], { state: { contactId: _contactId, AVTrueChatFalse: false } });
  }

}
