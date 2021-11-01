import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { first } from 'rxjs/operators';
import * as moment from 'moment'
import { HttpClient, HttpEventType } from '@angular/common/http';
import * as _ from 'lodash';
import { UtilityService } from 'src/app/services/utility.service';
import { environment } from 'src/environments/environment';
import { Role } from 'src/app/models/role';
import { Router } from '@angular/router';

const uploadAPI = environment.apiUrl + '/api/post/upload/assetdata';

const uploadAccessUrl = environment.apiUrl + '/';

@Component({
  selector: 'app-profile-portfolio',
  templateUrl: './profile-portfolio.component.html',
  styleUrls: ['./profile-portfolio.component.css']
})
export class ProfilePortfolioComponent implements OnInit {


  profilePortfolioForm: FormGroup;

  loading = false;
  submitted = false;
  element_ctrlUploadProfile: HTMLElement;

  fileData: File = null;
  fileData4Profile: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  myProfileFiles: File[] = [];
  selfProfileUrlPendingForUpload: Boolean = false;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    public utilityService: UtilityService,
    private router: Router
  ) {
    // redirect to home if already logged in
    if (!this.authenticationService.currentUserValue) {
      this.appRouterService.appRouter('');
    }

    this.initForm();
    this.userService.getUserProfilePortFolioById(this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.showEditingForm(data["data"]);
            //this.alertService.success(data['message'], true);
            this.loading = false;
            //this.element_btn_click_profile_skills_verification.click();
          } else {
            //alert(JSON.stringify(data['message']));
            this.alertService.error(data['message']);
            this.loading = false;
            this.appRouterService.appRouter('');
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

  showEditingForm(_userObj) {
    this.profilePortfolioForm = this.formBuilder.group({
      userId: [_userObj.userId || '', Validators.required],
      projectTitle: [_userObj.projectTitle || '', Validators.required],
      _id: [_userObj._id || ''],
      myProfileMedia: this.formBuilder.array(_userObj.myProfileMedia || []),
      myProfileDetails: [_userObj.myProfileDetails || ''],
      createdOn: [_userObj.createdOn || ''],
      updatedOn: [_userObj.updatedOn || ''],
      isDeleted: [_userObj.isDeleted || ''],
      createdBy: [_userObj.createdBy || ''],
      deletedBy: [_userObj.deletedBy || ''],
      updatedBy: [this.authenticationService.currentUserValue._id || '']
    });
  }

  initForm() {
    this.profilePortfolioForm = this.formBuilder.group({
      userId: [this.authenticationService.currentUserValue._id, Validators.required],
      projectTitle: ['', Validators.required],
      _id: [''],
      myProfileMedia: this.formBuilder.array([]),
      myProfileDetails: [''],
      createdOn: [''],
      updatedOn: [''],
      createdBy: [this.authenticationService.currentUserValue._id || ''],
      deletedBy: [''],
      updatedBy: ['']
    });
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get f() { return this.profilePortfolioForm.controls; }

  onProfileUpdateSubmit() {
    if (this.selfProfileUrlPendingForUpload) {
      this.alertService.error("Please Save Profile First");
      return;
    }
    this.submitted = true;
    if (this.profilePortfolioForm.invalid) {
      this.alertService.error("Please Provide all data");
      return;
    }

    this.userService.addUpdateUserProfilePortFolio(this.profilePortfolioForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.alertService.success('Your Portfolio is Updated successfully', true);
            this.element_ctrlUploadProfile = document.getElementById('ctrlNavigate2Profile') as HTMLElement;
            this.element_ctrlUploadProfile.click();
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

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }


  onSelectMyProfileMedia(event) {
    //console.log('371 :: Added', event);
    this.myProfileFiles.push(...event.addedFiles);
    //console.log('373', this.myProfileFiles);
  }

  onRemoveMyProfileMedia(event) {
    //console.log('378 :: Removed', event);
    this.myProfileFiles.splice(this.myProfileFiles.indexOf(event), 1);
  }

  onUploadMyProfileMedia() {
    const checkArray: FormArray = this.profilePortfolioForm.get('myProfileMedia') as FormArray;
    if (checkArray.length >= 10) {
      this.alertService.error("Upload MAX limit reached.");
      return;
    }
    for (let _index in this.myProfileFiles) {
      let currentFile = this.myProfileFiles[_index];
      if (!currentFile) {
        this.alertService.error("Select file first.");
        continue;
      }
      const formData = new FormData();
      formData.append('files', currentFile);
      formData.append('documentId', this.authenticationService.currentUserValue._id);
      this.fileUploadProgress = '0%';
      let _temp_currentFile = {
        name: currentFile.name,
        type: currentFile.type,
        size: currentFile.size,
        url: null
      }
      this.http.post(uploadAPI, formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
          //console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          //console.log(events.body);
          //alert('SUCCESS !!');
          _.pullAt(this.myProfileFiles, _index);
          this.alertService.success('Uploaded successfully', true);
          let _uploadedUrl = events.body["data"].path;
          if (_.startsWith(_uploadedUrl, '/')) {
            _uploadedUrl = _uploadedUrl.substr(1);
          }
          this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
          _temp_currentFile.url = this.uploadedFilePath;
          this.onMyProfileMediaUpdate(true, null, _temp_currentFile);
        }
      });
    }
  }

  onMyProfileMediaUpdate(_addT, _index, _temp_currentFile) {
    const checkArray: FormArray = this.profilePortfolioForm.get('myProfileMedia') as FormArray;
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

  navigate2Profile() {
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

    this.router.navigate([_parentRouting + "/profile"]);
  }
}
