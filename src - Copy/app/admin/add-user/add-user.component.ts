import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { AlertService, UserService, AuthenticationService } from 'src/app/services';
import { Role, AppDocumentType, AppAccessPermissions } from 'src/app/models';
import { HearAboutUs } from '../../models/hearAboutUs';
//import { MustMatch } from '../_helpers/must-match-validator';
import { AppRouterService } from 'src/app/services/app-router.service'
import { ActivatedRoute } from '@angular/router';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';
import { SocketioService } from 'src/app/socketio.service';

const uploadAPI = environment.apiUrl + '/api/post/upload/assetdata';

const uploadAccessUrl = environment.apiUrl + '/';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  AppAccessPermissions: any = [];
  imgSelfProfileUrl: any;
  registerForm: FormGroup;
  private sub: any;
  public isOtpSent: boolean;
  public editing: boolean = false;
  private _role: string;
  loading = false;
  submitted = false;
  Role = Role;
  achievements: any;
  education: any;
  element_btn_click_profile_basic_details: HTMLElement;
  element_btn_click_profile_skills_verification: HTMLElement;
  element_ctrlUploadProfile: HTMLElement;
  Roles = Object.keys(Role);
  HearAboutUs = Object.keys(HearAboutUs);
  fileData4Profile: File = null;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  myProfileFiles: File[] = [];
  selfProfileUrlPendingForUpload: Boolean = false;
  userId = null;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    private route: ActivatedRoute,
    private socketService: SocketioService,
  ) {
    for (let index in AppAccessPermissions) {
      let obj = {
        name: index,
        value: AppAccessPermissions[index]
      };
      this.AppAccessPermissions.push(obj);
    }
    this.showInitForm();
    let paramobj = history.state;
    if (paramobj) {
      this.userId = paramobj['userId'];
      delete history.state['userId'];
    }
    if (this.userId) {
      this.userService.getUserById(this.userId)
        .pipe(first())
        .subscribe(
          data => {
            if (data && data['success']) {
              this.showEditingForm(data["data"]);
              this.loading = false;
              this.isOtpSent = true;
              this.editing = true;
            } else {
              //alert(JSON.stringify(data['message']));
              this.alertService.error(data['message']);
              this.loading = false;
              this.isOtpSent = false;
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
            this.isOtpSent = false;
            this.appRouterService.appRouter('');
          });
    }
  }
  showEditingForm(_userObj) {
    this.element_btn_click_profile_basic_details = document.getElementById('btn_click_profile_basic_details') as HTMLElement;
    this.element_btn_click_profile_skills_verification = document.getElementById('btn_click_profile_skills_verification') as HTMLElement;

    this.registerForm = this.formBuilder.group({
      password: [_userObj.password || 'avitii@987', [Validators.required, Validators.minLength(6)]],
      role: [_userObj.role || '', Validators.required],
      firstName: [_userObj.firstName || '', Validators.required],
      lastName: [_userObj.lastName || '', Validators.required],
      userName: [_userObj.userName || ''],

      mobileNo: [_userObj.mobileNo || ''],
      emailAddress: [_userObj.emailAddress || '', Validators.required],
      gender: [_userObj.gender || ''],
      country: [_userObj.country || ''],

      _id: [_userObj._id || ''],
      acceptnewUpdates: [_userObj.acceptnewUpdates || ''],
      acceptTerms: [_userObj.acceptTerms || ''],
      birthDate: [_userObj.birthDate || ''],
      nationality: [_userObj.nationality || ''],
      residence: [_userObj.residence || ''],
      birthPlace: [_userObj.birthPlace || ''],
      promoCode: [_userObj.promoCode || ''],
      education: [_userObj.education || ''],
      educationCertification: [{}],
      creditCards: [{}],
      skillSets: this.formBuilder.array(_userObj.skillSets || [], [Validators.required]),
      academicDocuments: this.formBuilder.array(_userObj.academicDocuments || []),
      appPermissions: this.formBuilder.array(_userObj.appPermissions || []),
      myProfileMedia: this.formBuilder.array(_userObj.myProfileMedia || []),
      myProfileDetails: [_userObj.myProfileDetails || ''],
      employmentVerifications: this.formBuilder.array(_userObj.employmentVerifications || []),
      externalAppLinks: this.formBuilder.array(_userObj.externalAppLinks || [], [Validators.required]),
      hearAboutUs: [_userObj.hearAboutUs || ''],
      app_doc_type: [_userObj.app_doc_type || ''],
      selfProfileUrl: [_userObj.selfProfileUrl || '']
    }, {
      // validator: MustMatch('password', 'confirmPassword'),
      // validate: EmailValidator('emailAddress')
    });
    this._role = _userObj.role || Role.Admin;

    this.onClickRoleChange(this._role);
  }
  ngOnInit() {
  }
  showInitForm() {
    this.element_btn_click_profile_basic_details = document.getElementById('btn_click_profile_basic_details') as HTMLElement;
    this.element_btn_click_profile_skills_verification = document.getElementById('btn_click_profile_skills_verification') as HTMLElement;

    this.registerForm = this.formBuilder.group({
      password: ['avitii@987', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: [''],

      mobileNo: [''],
      emailAddress: ['', Validators.required],
      gender: [''],
      country: [''],

      _id: [''],
      acceptnewUpdates: [''],
      birthDate: [''],
      nationality: [''],
      residence: [''],
      birthPlace: [''],
      promoCode: [''],
      education: [''],
      educationCertification: [{}],
      creditCards: [{}],
      skillSets: this.formBuilder.array([], [Validators.required]),
      academicDocuments: this.formBuilder.array([]),
      appPermissions: this.formBuilder.array([]),
      myProfileMedia: this.formBuilder.array([]),
      myProfileDetails: [''],
      employmentVerifications: this.formBuilder.array([]),
      externalAppLinks: this.formBuilder.array([], [Validators.required]),
      hearAboutUs: [''],
      app_doc_type: [''],
      selfProfileUrl: ['']
    }, {
      // validator: MustMatch('password', 'confirmPassword'),
      // validate: EmailValidator('emailAddress')
    });
    this._role = Role.Admin;
    this.sub = this.route.queryParams.subscribe(params => {
      let _data = params['id'];
      switch (_data) {
        case "ct":
          this._role = Role.Borrower;
          break;
        case "cr":
          this._role = Role.Lender;
          break;
        case 'ad':
          this._role = Role.Admin;
          break;
        default:
          break;
      }
      this.onClickRoleChange(this._role);
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onClickRoleChange(_role) {
    if (_role) {
      this.registerForm.get('role').setValue(_role);
    }
  }

  onVerifySendOtp() {
    this.isOtpSent = false;
    if (!this.isOtpSent) {
      this.submitted = true;
      console.log('inside Submit ' + this.registerForm.invalid);
      // stop here if form is invalid
      //(this.registerForm.controls.mobileNo.invalid || this.registerForm.controls.firstName.invalid || this.registerForm.controls.lastName.invalid || this.registerForm.controls.emailAddress.invalid)
      if (this.registerForm.controls.emailAddress.invalid) {
        return;
      }
      console.log('inside');
      this.loading = true;
      console.log("Reg Data => ", this.registerForm.value);
      this.registerForm.get('userName').setValue(this.registerForm.get('emailAddress').value);
      let _jsonData2send = this.registerForm.value;
      //delete _jsonData2send['selfProfileUrl'];
      this.userService.sendOtp2user(_jsonData2send)
        .pipe(first())
        .subscribe(
          data => {
            console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              this.alertService.success('Verified!', true);
              this.loading = false;
              this.isOtpSent = true;
              this.submitted = false;
            } else {
              //alert(JSON.stringify(data['message']));
              this.alertService.error(data['message']);
              this.loading = false;
              this.isOtpSent = false;
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
            this.isOtpSent = false;
          });
    }
  }
  onSubmitRegisterUser() {
    if (this.selfProfileUrlPendingForUpload) {
      this.alertService.error("Please wait upload is in progress");
      return
    }
    if (!this.isOtpSent) {
      this.alertService.error("Please Enter & Verify Email Id First");
      return
    }
    this.submitted = true;
    // stop here if form is invalid
    //(this.registerForm.controls.password.invalid || this.registerForm.controls.confirmPassword.invalid || this.registerForm.controls.acceptTerms.invalid || this.registerForm.controls.otp.invalid) 
    if (this.registerForm.controls.mobileNo.invalid || this.registerForm.controls.firstName.invalid || this.registerForm.controls.lastName.invalid || this.registerForm.controls.emailAddress.invalid) {
      return;
    }
    console.log('inside');
    this.loading = true;
    console.log("Reg Data => ", this.registerForm.value);
    this.registerForm.get('userName').setValue(this.registerForm.get('emailAddress').value);
    let _jsonData2send = this.registerForm.value;
    //delete _jsonData2send['selfProfileUrl'];
    if (!this.editing) {
      this.socketService.addNewUser(_jsonData2send)
        .pipe(first())
        .subscribe(
          data => {
            console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              this.loading = false;
              this.alertService.success('user added successfully', true);
              //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
              this.router.navigate(['/admin/faculty/']);
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
    } else {
      this.userService.updateUserById(_jsonData2send)
        .pipe(first())
        .subscribe(
          data => {
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              this.alertService.success('user Updated successfully', true);
              //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
              this.router.navigate(['/admin/faculty/']);
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
  }

  onSelectMyProfileMedia(event) {
    console.log('371 :: Added', event);
    this.myProfileFiles.push(...event.addedFiles);
    console.log('373', this.myProfileFiles);
  }

  onRemoveMyProfileMedia(event) {
    console.log('378 :: Removed', event);
    this.myProfileFiles.splice(this.myProfileFiles.indexOf(event), 1);
  }

  onUploadMyProfileMedia() {
    if (!this.isOtpSent) {
      this.alertService.error("Please Enter & Verify Email Id First");
      return
    }
    if (this.fileUploadProgress) {
      this.alertService.error("Upload still in progress. Please try again later");
      return;
    }
    const checkArray: FormArray = this.registerForm.get('myProfileMedia') as FormArray;
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
      if (!this.registerForm.get('_id').value) {
        let _id = this.registerForm.get('emailAddress').value + '_' + _.now();
        this.registerForm.get('_id').setValue(_id);
      }
      const formData = new FormData();
      formData.append('files', currentFile);
      formData.append('documentId', this.registerForm.get('_id').value);
      this.fileUploadProgress = '0%';

      this.http.post(uploadAPI, formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
          console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          console.log(events.body);
          //alert('SUCCESS !!');
          this.alertService.success('Uploaded Successfully !!', true);
          let _uploadedUrl = events.body["data"].path;
          if (_.startsWith(_uploadedUrl, '/')) {
            _uploadedUrl = _uploadedUrl.substr(1);
          }
          this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
          this.onMyProfileMediaUpdate(true, null, this.uploadedFilePath);
        }
      });
    }
  }

  onMyProfileMediaUpdate(_addT, _index, _url) {
    const checkArray: FormArray = this.registerForm.get('myProfileMedia') as FormArray;
    if (_.isNaN(parseInt(_index))) {
      //_index=0;
      _index = checkArray.length;
    }
    if (_addT) {
      checkArray.push(new FormControl(_url));
    } else {
      if (parseInt(_index) >= 0) {
        checkArray.removeAt(_index);
      } else {
        let i: number = 0;
        checkArray.controls.forEach((item: FormControl) => {
          if (item.value == _url) {
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      }
    }
  }

  openFileUploaderForProfile() {
    this.element_ctrlUploadProfile = document.getElementById('ctrlUploadProfile') as HTMLElement;
    this.element_ctrlUploadProfile.click();
  }

  fileProgressForProfile(fileInput: any) {
    this.fileData4Profile = <File>fileInput.target.files[0];
    this.previewForProfile();
  }

  previewForProfile() {
    // Show preview 
    var mimeType = this.fileData4Profile.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData4Profile);
    reader.onload = (_event) => {
      //this.registerForm.get('selfProfileUrl').setValue(reader.result);
      this.imgSelfProfileUrl = reader.result;
      this.selfProfileUrlPendingForUpload = true;
    }
  }

  onUploadForProfile() {
    if (!this.isOtpSent) {
      this.alertService.error("Please Enter & Verify Email Id First");
      return
    }
    if (this.fileUploadProgress) {
      this.alertService.error("Upload still in progress. Please try again later");
      return;
    }
    if (!this.fileData4Profile) {
      this.alertService.error("Select file first.");
      return;
    }
    var mimeType = this.fileData4Profile.type;
    if (mimeType.match(/image\/*/) == null) {
      this.alertService.error("Select Image file only.");
      return;
    }
    if (!this.registerForm.get('_id').value) {
      let _id = this.registerForm.get('emailAddress').value + '_' + _.now();
      this.registerForm.get('_id').setValue(_id);
    }
    const formData = new FormData();
    formData.append('files', this.fileData4Profile);
    formData.append('documentId', this.registerForm.get('_id').value);
    this.fileUploadProgress = '0%';

    this.http.post(uploadAPI, formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(events => {
      if (events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
        console.log(this.fileUploadProgress);
      } else if (events.type === HttpEventType.Response) {
        this.fileUploadProgress = '';
        console.log(events.body);
        //alert('SUCCESS !!');
        this.alertService.success('Uploaded Successfully !!', true);
        let _uploadedUrl = events.body["data"].path;
        if (_.startsWith(_uploadedUrl, '/')) {
          _uploadedUrl = _uploadedUrl.substr(1);
        }
        this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
        this.registerForm.get('selfProfileUrl').setValue(this.uploadedFilePath);
        this.selfProfileUrlPendingForUpload = false;
      }
    });
  }
  clickOnGoToNext(_step) {
    switch (_step) {
      case 2:
        this.element_btn_click_profile_skills_verification.click();
        break;
    }
  }
  onClickGenderChange(_gender) {
    if (_gender) {
      //this.registerForm.get('gender').setValue(_gender);
    }
  }
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDate();
  hours = this.now.getHours();
  minutes = this.now.getMinutes();
  minDate = moment({ year: this.year, month: this.month, day: this.day, hour: this.hours, minute: this.minutes }).add(1,'hour').format('MM/DD/YYYY hh:mm A');

  maxDate = moment({ year: this.year, month: this.month, day: this.day, hour: this.hours, minute: this.minutes }).add(1,'month').format('MM/DD/YYYY hh:mm A');

  onAddRemoveEducationDetails(education, addTremoveFalse) {
    const checkArray: FormArray = this.registerForm.get('education') as FormArray;
    if (addTremoveFalse) {
      if (education) {
        if (checkArray.value.indexOf(education) == -1) {
          checkArray.push(new FormControl(education));
        }
      }
      this.education = null;
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == education) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onAddRemoveAchievementsDetails(achievements, addTremoveFalse) {
    const checkArray: FormArray = this.registerForm.get('achievements') as FormArray;
    if (addTremoveFalse) {
      if (achievements) {
        if (checkArray.value.indexOf(achievements) == -1) {
          checkArray.push(new FormControl(achievements));
        }
      }
      this.achievements = null;
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == achievements) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.registerForm.get('appPermissions') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSkillSetsChange(skill, addedTremovedF) {
    const checkArray: FormArray = this.registerForm.get('appPermissions') as FormArray;
    if (addedTremovedF) {
      checkArray.push(new FormControl(skill));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == skill) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onInitSetCheckedValue(skill) {
    const checkArray: FormArray = this.registerForm.get('appPermissions') as FormArray;
    return (checkArray.value.indexOf(skill) > -1)
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

}
