import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/internal/operators/first';
import { SessionStatus } from 'src/app/models';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';

@Component({
  selector: 'app-user-restriction-details',
  templateUrl: './user-restriction-details.component.html',
  styleUrls: ['./user-restriction-details.component.css']
})
export class UserRestrictionDetailsComponent implements OnInit {

  userRestrictionDetailsForm: FormGroup;
  loading = false;

  userObj: any = null;
  isOpenedInModel: boolean = false;
  adminViewT: boolean = false
  isVerified: boolean = false;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    public utilityService: UtilityService,
    @Optional() public dialogRef: MatDialogRef<UserRestrictionDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private socketService: SocketioService,
  ) {
    if (data && data.isOpenedInModel) {
      this.isOpenedInModel = true;
      this.userObj = data.userObj;
      this.adminViewT = !!data.adminViewT;
      this.isVerified = !!data.isVerified;
    } else {
      this.appRouterService.appRouter('');
      return;
    }
    this.initForm();
  }

  get f() { return this.userRestrictionDetailsForm.controls; }

  onUserRestrictionDetailsUpdateSubmit() {
    this.submitted = true;
    if (this.userRestrictionDetailsForm.invalid) {
      this.alertService.error("Please Provide all data");
      return;
    }

    this.userService.addUpdateUserRestrictionDetails(this.userRestrictionDetailsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.updateUsersVerificationStatus(this.userObj._id, this.isVerified);
            this.alertService.success('Users status updated successfully', true);
            this.submitted = false;
            this.initForm();
            //this.appRouterService.appRouter(this.userObj);
          } else {
            //alert(JSON.stringify(data['message']));
            this.alertService.error(data['message']);
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
  }

  ngOnInit(): void {
  }

  showEditingFormUserRestrictionDetails(_userObj) {
    this.userRestrictionDetailsForm = this.formBuilder.group({
      _id: [_userObj._id || ''],
      comment: [_userObj.comment || '', Validators.required],
      isVerified: [_userObj.isVerified || false, Validators.required],
      userId: [_userObj.userId || this.userObj._id],
      createdOn: [_userObj.createdOn || ''],
      updatedOn: [_userObj.updatedOn || ''],
      isDeleted: [_userObj.isDeleted || false],
      createdBy: [_userObj.createdBy || ''],
      deletedBy: [_userObj.deletedBy || ''],
      updatedBy: [this.authenticationService.currentUserValue._id || ''],
    });
  }

  initForm() {

    this.userRestrictionDetailsForm = this.formBuilder.group({
      _id: [''],
      comment: ['', Validators.required],
      isVerified: [this.isVerified || false, Validators.required],
      userId: [this.userObj._id],
      createdOn: [''],
      updatedOn: [''],
      isDeleted: [false],
      createdBy: [this.authenticationService.currentUserValue._id || ''],
      deletedBy: [''],
      updatedBy: [''],

    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.userObj });
  }

  updateUsersVerificationStatus(_userId, _isVerified) {
    this.alertService.success("Please wait while we updating status of user");
    this.socketService.updateUsersVerificationStatus(_userId, _isVerified)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.userObj = data["data"]
            //this.rerender();
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
