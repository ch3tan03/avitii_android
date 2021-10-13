import { Component, Inject, Optional, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Role, SessionStatus } from 'src/app/models';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { HttpClient, HttpEventType } from '@angular/common/http';
import * as _ from 'lodash';
import { UtilityService } from 'src/app/services/utility.service';
import { environment } from 'src/environments/environment';
import { MediaPreviewComponent } from 'src/app/shared/media-preview/media-preview.component';


const uploadAPI = environment.apiUrl + '/api/post/upload/assetdata';
const uploadAccessUrl = environment.apiUrl + '/';

@Component({
  selector: 'app-user-levels',
  templateUrl: './user-levels.component.html',
  styleUrls: ['./user-levels.component.css']
})
export class UserLevelsComponent implements OnInit {

  allUserLevelsDataLenders: any = [];
  allUserLevelsDataBorrower: any = [];
  userUserLevelsForm: FormGroup;
  loading = false;
  submitted = false;

  SessionStatus = SessionStatus;
  userObj: any = null;
  Role = Role;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    public utilityService: UtilityService,
    private _cdr: ChangeDetectorRef,
    public dialog: MatDialog,
  ) {

    this.userObj = this.authenticationService.currentUserValue;

    this.initForm();
    this.fetchAllUserLevelsByUserId();

  }

  ngOnInit(): void {
  }

  fetchAllUserLevelsByUserId() {
    this.userService.getUserLevelsAll(null)
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));

            this.allUserLevelsDataLenders = _.filter(data["data"], { 'role': Role.Lender });
            this.allUserLevelsDataBorrower = _.filter(data["data"], { 'role': Role.Borrower });
            //this.alertService.success(data['message'], true);
            this.loading = false;
            this._cdr.detectChanges();
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
          this.appRouterService.appRouter('');
        });
  }

  get f() { return this.userUserLevelsForm.controls; }

  onUserLevelsUpdateSubmit() {
    this.submitted = true;
    if (this.userUserLevelsForm.invalid) {
      this.alertService.error("Please Provide all data");
      return;
    }

    this.userService.addUpdateUserUserLevels(this.userUserLevelsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));

            this.alertService.success('User Level Updated successfully', true);
            this.fetchAllUserLevelsByUserId();
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

  showEditingFormUserLevels(_userObj) {

    this.userUserLevelsForm = this.formBuilder.group({
      _id: [_userObj._id || ''],
      name: [_userObj.name || '', Validators.required],
      description: [_userObj.description || ''],
      role: [_userObj.role || '', Validators.required],
      minimumContract: [_userObj.minimumContract || null, [Validators.required, Validators.min(1)]],
      minimumSpent: [_userObj.minimumSpent || null, [Validators.required, Validators.min(1)]],
      status: [_userObj.status || SessionStatus.Approved],
      createdOn: [_userObj.createdOn || null],
      updatedOn: [_userObj.updatedOn || null],
      isDeleted: [_userObj.isDeleted || false],
      createdBy: [_userObj.createdBy || this.authenticationService.currentUserValue._id],
      deletedBy: [_userObj.deletedBy || ''],
      updatedBy: [this.authenticationService.currentUserValue._id],

    });
  }

  initForm() {

    this.userUserLevelsForm = this.formBuilder.group({
      _id: [''],
      name: ['', Validators.required],
      description: [''],
      role: ['', Validators.required],
      minimumContract: [null, [Validators.required, Validators.min(1)]],
      minimumSpent: [null, [Validators.required, Validators.min(1)]],
      status: [SessionStatus.Approved],
      createdOn: [null],
      updatedOn: [null],
      isDeleted: [false],
      createdBy: [this.authenticationService.currentUserValue._id],
      deletedBy: [''],
      updatedBy: [],
    });

  }

}
