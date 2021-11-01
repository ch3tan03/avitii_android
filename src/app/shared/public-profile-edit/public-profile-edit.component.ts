import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Role, UserType } from 'src/app/models';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { HttpClient, HttpEventType } from '@angular/common/http';
import * as _ from 'lodash';
import { UtilityService } from 'src/app/services/utility.service';
import { environment } from 'src/environments/environment';
import { ProfilePortfolioComponent } from '../profile-portfolio/profile-portfolio.component';
import { MediaProccessComponent } from '../media-proccess/media-proccess.component';

declare var require: any

const uploadAPI = environment.apiUrl + '/api/post/upload/assetdata';

const uploadAccessUrl = environment.apiUrl + '/';

@Component({
  selector: 'app-public-profile-edit',
  templateUrl: './public-profile-edit.component.html',
  styleUrls: ['./public-profile-edit.component.css']
})
export class PublicProfileEditComponent implements OnInit {

  userObj: any = {};
  subDocumentKey: string = '';

  profileForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  public _role: string;
  public _ = _;
  Role = Role;
  constructor(
    public dialogRef: MatDialogRef<PublicProfileEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,

    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    public authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    private route: ActivatedRoute,
    public utilityService: UtilityService
  ) {
    if (!data || !data.userObj) {
      this.closeDialog();
      return;
    }
    this.userObj = data.userObj;
    this.showEditingForm(this.userObj);
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.userObj });
  }

  get f() { return this.profileForm.controls; }

  showEditingForm(_userObj) {

    this.profileForm = this.formBuilder.group({
      _id: [_userObj._id || ''],

      myPassportMedia: this.formBuilder.array(_userObj.myPassportMedia || []),/*, Validators.required */
      myPassportMediaSelfVerify: this.formBuilder.array(_userObj.myPassportMediaSelfVerify || []),/*, Validators.required */
      myPassportNumber: [_userObj.myPassportNumber || ''],/*, Validators.required */
      myDLMedia: this.formBuilder.array(_userObj.myDLMedia || []),/*, Validators.required */
      myDLMediaSelfVerify: this.formBuilder.array(_userObj.myDLMediaSelfVerify || []),/*, Validators.required */
      myDLNumber: [_userObj.myDLNumber || ''],/*, Validators.required */
      myHICardMedia: this.formBuilder.array(_userObj.myHICardMedia || []),/*, Validators.required */
      myHICardMediaSelfVerify: this.formBuilder.array(_userObj.myHICardMediaSelfVerify || []),/*, Validators.required */
      cprNumber: [_userObj.cprNumber || ''],/*, Validators.required */

      myRKIMedia: this.formBuilder.array(_userObj.myRKIMedia || []),
      myRKIMediaSelfVerify: this.formBuilder.array(_userObj.myRKIMediaSelfVerify || []),
      isRKIRegistered: [_userObj.isRKIRegistered || false],/*, Validators.required */
    });
    this._role = _userObj.role;
  }

  onUsersProfileUpdateSubmit(byPassValidation: boolean = false) {
    this.submitted = true;
    if (!byPassValidation) {
      if (this.profileForm.invalid) {
        this.alertService.error("Please Provide all data");
        return;
      }
    }

    this.userService.updateUserByIdFromAdmin(this.profileForm.value, this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));

            this.userObj = data['data'];

            this.alertService.success('User`s Profile is Updated successfully', true);
            this.closeDialog();
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

  onAssetDocumentsUpdate(_addT, _index, _temp_currentFile, _keyName) {
    if (!_keyName) {
      return;
    }
    const checkArray: FormArray = this.profileForm.get(_keyName) as FormArray;
    if (_.isNaN(parseInt(_index))) {
      //_index=0;
      _index = checkArray.length;
    }
    if (_addT) {
      checkArray.push(new FormControl(_temp_currentFile));
    } else {
      if (parseInt(_index) >= 0) {
        checkArray.removeAt(_index);
      } else {
        let i: number = 0;
        checkArray.controls.forEach((item: FormControl) => {
          if (item.value.url == _temp_currentFile.url) {
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      }
    }
  }
  onUploadCleanAssetDocs(_keyName) {
    if (!_keyName) {
      return;
    }
    const checkArray: FormArray = this.profileForm.get(_keyName) as FormArray;
    let _index = null;
    if (_.isNaN(parseInt(_index))) {
      _index = checkArray.length - 1;
    }
    if (parseInt(_index) >= 0) {
      checkArray.removeAt(_index);
    }
  }
  //#region open media uploader with crop feature
  modalMediaUploadWithCropFeature(documentId, attributeKey, subFolderName) {
    let isAdminUserT=true;
    switch (attributeKey) {
      case 'selfProfileUrl':

        break;
      case 'myPassportMedia':
      case 'myPassportMediaSelfVerify':
      case 'myDLMedia':
      case 'myDLMediaSelfVerify':
      case 'myHICardMedia':
      case 'myHICardMediaSelfVerify':
      case 'myRKIMedia':
      case 'myRKIMediaSelfVerify':
        const checkArray: FormArray = this.profileForm.get(attributeKey) as FormArray;
        if (checkArray.length >= 1) {
          this.alertService.error("Upload MAX limit reached. isting.");
          return;
        }

        break;
    }
    //console.log('912', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(MediaProccessComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {
        documentId: documentId,
        attributeKey: attributeKey,
        subFolderName: subFolderName,
        isAdminUserT:isAdminUserT
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data) {
          switch (result.data.attributeKey) {
            case 'selfProfileUrl':
              if (result.data.uploadedFilePath) {
                this.profileForm.get('selfProfileUrl').setValue(result.data.uploadedFilePath);
              }
              break;
            case 'myPassportMedia':
            case 'myPassportMediaSelfVerify':
            case 'myDLMedia':
            case 'myDLMediaSelfVerify':
            case 'myHICardMedia':
            case 'myHICardMediaSelfVerify':
            case 'myRKIMedia':
            case 'myRKIMediaSelfVerify':
              this.alertService.success("It can take up to 48 hours for your documents to be approved, as we go through all the documents manually.");
              if (result.data.uploadedFilePath) {
                this.onAssetDocumentsUpdate(true, null, result.data.uploadedFileObj, result.data.attributeKey);
              }
              break;
          }
        }
      }
      //console.log(`946 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }
  //#endregion open media uploader with crop feature

}
