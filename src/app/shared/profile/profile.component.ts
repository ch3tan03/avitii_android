import { Component, OnInit } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { ProfilePortfolioComponent } from '../profile-portfolio/profile-portfolio.component';

declare var require: any

const { overwrite, getNames } = require('country-list');
overwrite([{
  code: 'US',
  name: 'USA'
}])

const uploadAPI = environment.apiUrl + '/api/post/upload/assetdata';

const uploadAccessUrl = environment.apiUrl + '/';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  appName: any;
  appLink: any;
  profileForm: FormGroup;
  private sub: any;
  private isOtpSent: boolean;
  public _role: string;
  loading = false;
  submitted = false;
  Role = Role;
  element_btn_click_profile_basic_details: HTMLElement;
  element_btn_click_profile_skills_verification: HTMLElement;
  element_btn_click_profile_portfolio: HTMLElement;
  element_btn_click_profile_banking: HTMLElement;
  element_ctrlUploadProfile: HTMLElement;
  element_ctrllblId: HTMLElement;

  lblmyRKIMediaText = 'Choose RKI document';
  lblmyPassportMediaText = 'Choose Passport';
  lblmyDLMediaText = 'Choose Driving Licence';
  lblmyHICardMediaText = 'Choose Health Insurance Card';

  Roles = Object.keys(Role);
  countrylist: any = null;
  fileData: File = null;
  fileData4Profile: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  myProfileFiles: File[] = [];
  selfProfileUrlPendingForUpload: Boolean = false;
  portfolioDataArr: any = [];
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    private route: ActivatedRoute,
    public utilityService: UtilityService
  ) {
    // redirect to home if already logged in
    if (!this.authenticationService.currentUserValue) {
      this.appRouterService.appRouter('');
    }

    this.countrylist = getNames();
    this.initForm();
    this.userService.getUserById(this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.showEditingForm(data["data"]);
            //this.alertService.success(data['message'], true);
            this.loading = false;
            this.isOtpSent = true;
            //this.element_btn_click_profile_skills_verification.click();
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
    this.userService.getUserProfilePortFolioByUserId(this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this.portfolioDataArr = data["data"];
            this.loading = false;
          } else {
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

  showEditingForm(_userObj) {
    let _birthDate = null;
    if (_userObj.birthDate) {
      _birthDate = moment(_userObj.birthDate).format('YYYY-MM-DD');
    }

    this.profileForm = this.formBuilder.group({
      _id: [_userObj._id || ''],
      role: [_userObj.role || '', Validators.required],
      appPermissions: this.formBuilder.array(_userObj.appPermissions || []),
      firstName: [_userObj.firstName || '', Validators.required],
      middleName: [_userObj.middleName || ''],
      lastName: [_userObj.lastName || '', Validators.required],
      userName: [_userObj.userName || ''],
      address: [_userObj.address || ''],
      emailAddress: [_userObj.emailAddress || '', Validators.required],
      acceptnewUpdates: [_userObj.acceptnewUpdates || ''],
      acceptTerms: [_userObj.acceptTerms || ''],
      cityCode: [_userObj.cityCode || ''],
      birthDate: [_userObj.birthDate || ''],
      nationality: [_userObj.nationality || ''],
      residence: [_userObj.residence || ''],
      birthPlace: [_userObj.birthPlace || ''],
      promoCode: [_userObj.promoCode || ''],
      mobileNo: [_userObj.mobileNo || ''],
      gender: [_userObj.gender || ''],
      country: [_userObj.country || ''],
      birthDateCustomised: [_birthDate || ''],
      education: [_userObj.education || ''],
      additionalCertification: [{}],
      creditCards: [{}],
      skillSets: this.formBuilder.array(_userObj.skillSets || []),
      academicDocuments: this.formBuilder.array(_userObj.academicDocuments || []),
      employmentVerifications: this.formBuilder.array(_userObj.employmentVerifications || []),
      externalAppLinks: this.formBuilder.array(_userObj.externalAppLinks || [], []),
      hearAboutUs: [_userObj.hearAboutUs || ''],
      app_doc_type: [_userObj.app_doc_type || ''],

      isVerified: [_userObj.isVerified || ''],
      myProfileMedia: this.formBuilder.array(_userObj.myProfileMedia || []),
      myProfileDetails: [_userObj.myProfileDetails || ''],
      userType: [_userObj.userType || ''],

      myPassportMedia: this.formBuilder.array(_userObj.myPassportMedia || []),
      myPassportNumber: [_userObj.myPassportNumber || ''],
      myDLMedia: this.formBuilder.array(_userObj.myDLMedia || []),
      myDLNumber: [_userObj.myDLNumber || ''],
      myHICardMedia: this.formBuilder.array(_userObj.myHICardMedia || []),

      myRKIMedia: this.formBuilder.array(_userObj.myRKIMedia || []),
      isRKIRegistered: [_userObj.isRKIRegistered || false],

      accountName: [_userObj.accountName || ''],
      accountNumber: [_userObj.accountNumber || ''],
      bankName: [_userObj.bankName || ''],
      regNumber: [_userObj.regNumber || ''],
      cprNumber: [_userObj.cprNumber || ''],
      branchDetails: [_userObj.branchDetails || ''],
      mobilePayment: [_userObj.mobilePayment || ''],

      bitCoinWalletID: [_userObj.bitCoinWalletID || ''],
      revolutWalletID: [_userObj.revolutWalletID || ''],
      skrillWalletID: [_userObj.skrillWalletID || ''],
      paypalWalletID: [_userObj.paypalWalletID || ''],
      bic: [_userObj.bic || ''],
      accountType: [_userObj.accountType || ''],
      iban: [_userObj.iban || ''],
      accountOtherDetails1: [_userObj.accountOtherDetails1 || ''],
      accountOtherDetails2: [_userObj.accountOtherDetails2 || ''],
      accountOtherDetails3: [_userObj.accountOtherDetails3 || ''],
      accountOtherDetails4: [_userObj.accountOtherDetails4 || ''],
      selfProfileUrl: [_userObj.selfProfileUrl || ''],

    });
    this._role = _userObj.role;

    this.element_btn_click_profile_basic_details = document.getElementById('btn_click_profile_basic_details') as HTMLElement;
    this.element_btn_click_profile_skills_verification = document.getElementById('btn_click_profile_skills_verification') as HTMLElement;
    this.element_btn_click_profile_portfolio = document.getElementById('btn_click_profile_portfolio') as HTMLElement;
    this.element_btn_click_profile_banking = document.getElementById('btn_click_profile_banking') as HTMLElement;

    this.onClickRoleChange(this._role);
    this.onClickGenderChange(_userObj.gender || 'male');
  }

  initForm() {
    this.appName = 'facebook';
    this.profileForm = this.formBuilder.group({
      _id: [''],
      role: ['', Validators.required],
      appPermissions: this.formBuilder.array([]),
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      userName: [''],
      address: [''],
      emailAddress: ['', Validators.required],
      acceptnewUpdates: [''],
      acceptTerms: [''],
      cityCode: [''],
      birthDate: [''],
      nationality: [''],
      residence: [''],
      birthPlace: [''],
      promoCode: [''],
      mobileNo: [''],
      gender: [''],
      country: [''],
      birthDateCustomised: [''],
      education: [''],
      additionalCertification: [{}],
      creditCards: [{}],
      skillSets: this.formBuilder.array([]),
      academicDocuments: this.formBuilder.array([]),
      employmentVerifications: this.formBuilder.array([]),
      externalAppLinks: this.formBuilder.array([], []),
      hearAboutUs: [''],
      app_doc_type: [''],

      isVerified: [''],
      myProfileMedia: this.formBuilder.array([]),
      myProfileDetails: [''],
      userType: [''],

      myPassportMedia: this.formBuilder.array([]),
      myPassportNumber: [''],
      myDLMedia: this.formBuilder.array([]),
      myDLNumber: [''],
      myHICardMedia: this.formBuilder.array([]),

      myRKIMedia: this.formBuilder.array([]),
      isRKIRegistered: [false],

      accountName: [''],
      accountNumber: [''],
      bankName: [''],
      regNumber: [''],
      cprNumber: [''],
      branchDetails: [''],
      mobilePayment: [''],

      bitCoinWalletID: [''],
      revolutWalletID: [''],
      skrillWalletID: [''],
      paypalWalletID: [''],
      bic: [''],
      accountType: [''],
      iban: [''],
      accountOtherDetails1: [''],
      accountOtherDetails2: [''],
      accountOtherDetails3: [''],
      accountOtherDetails4: [''],
      selfProfileUrl: [''],
    });
    this._role = this.authenticationService.currentUserValue.role;

    this.element_btn_click_profile_basic_details = document.getElementById('btn_click_profile_basic_details') as HTMLElement;
    this.element_btn_click_profile_skills_verification = document.getElementById('btn_click_profile_skills_verification') as HTMLElement;
    this.element_btn_click_profile_portfolio = document.getElementById('btn_click_profile_portfolio') as HTMLElement;
    this.element_btn_click_profile_banking = document.getElementById('btn_click_profile_banking') as HTMLElement;
  }

  clickOnGoToNext(_step) {
    switch (_step) {
      case 1:
        this.element_btn_click_profile_basic_details.click();
      case 2:
        this.element_btn_click_profile_skills_verification.click();
        break;
      case 3:
        if (this._role == Role.Borrower) {
          this.element_btn_click_profile_banking.click();
        } else {
          this.element_btn_click_profile_portfolio.click();
        }
        break;
      case 4:
        this.element_btn_click_profile_portfolio.click();
        break;
    }
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  onClickRoleChange(__role) {
    if (__role) {
      this.profileForm.get('role').setValue(__role);
    }
  }

  onClickGenderChange(_gender) {
    if (_gender) {
      this.profileForm.get('gender').setValue(_gender);
    }
  }

  onProfileUpdateSubmit() {
    if (this.selfProfileUrlPendingForUpload) {
      this.alertService.error("Please Save Profile First");
      return;
    }
    this.submitted = true;
    if (this.profileForm.invalid) {
      this.alertService.error("Please Provide all data");
      return;
    }
    let _birthDate = this.profileForm.get('birthDateCustomised').value;

    if (_birthDate) {
      this.profileForm.get('birthDate').setValue(Date.parse(moment(_birthDate, 'YYYY-MM-DD').format('YYYY-MM-DD')));
    }

    if (this.utilityService._returnT_4undefined(this.profileForm.get('userType').value, false)) {
      switch (this.profileForm.get('role').value) {
        case Role.Lender:
          this.profileForm.get('userType').setValue(UserType.new_lender);
          break;
        case Role.Borrower:
          this.profileForm.get('userType').setValue(UserType.new_borrower);
          break;
      }
    }

    this.userService.updateUserById(this.profileForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            localStorage.removeItem('currentUser');
            //this.authenticationService.clearCurrentUserObj();
            localStorage.setItem('currentUser', JSON.stringify(data['data']));
            this.authenticationService.sendCurrentUserObj(data['data']);
            this.alertService.success('Your Profile is Updated successfully', true);
            this.appRouterService.appRouter(this.authenticationService.currentUserValue);
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

  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment({ year: this.year - 100, month: this.month, day: this.day }).format('YYYY-MM-DD');

  maxDate = moment({ year: this.year - 18, month: this.month, day: this.day }).format('YYYY-MM-DD');

  date(ev) {
    console.log(this.minDate)
    console.log(ev.target.value)
  }

  Data: Array<any> = [
    { name: 'Communicator', value: 'communicator' },
    { name: 'Business', value: 'business' },
    { name: 'Sports', value: 'sports' },
    { name: 'Dance', value: 'dance' },
    { name: 'Sing', value: 'sing' },
    { name: 'Repair Cars', value: 'repair_cars' },
    { name: 'Repair Computers', value: 'repair_computers' },
    { name: 'Can you transport a hit/ run accident pet', value: 'can_you_transport_a_hit_run_accident_pet' }
  ];

  onCheckboxChange(e) {
    const checkArray: FormArray = this.profileForm.get('skillSets') as FormArray;
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

  onRKIChange(addedTremovedF) {
    this.profileForm.get('isRKIRegistered').setValue(addedTremovedF);
  }

  onInitRKICheckedValue() {
    return this.profileForm.get('isRKIRegistered').value;
  }

  onSkillSetsChange(skill, addedTremovedF) {
    const checkArray: FormArray = this.profileForm.get('skillSets') as FormArray;
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
    const checkArray: FormArray = this.profileForm.get('skillSets') as FormArray;
    return (checkArray.value.indexOf(skill) > -1)
  }

  fileProgressAssetDocs(fileInput: any, lblId: string) {
    this.fileData = <File>fileInput.target.files[0];
    this.element_ctrllblId = document.getElementById(lblId) as HTMLElement;
    this.element_ctrllblId.innerText = this[lblId + 'Text'] + '-' + this.fileData.name;
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

  onUploadAcademicDocs() {
    const checkArray: FormArray = this.profileForm.get('academicDocuments') as FormArray;
    if (checkArray.length >= 5) {
      this.alertService.error("Upload MAX limit reached.");
      return;
    }
    if (!this.fileData) {
      this.alertService.error("Select file first.");
      return;
    }
    const formData = new FormData();
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      this.alertService.error("Select Image file only.");
      return;
    }
    formData.append('files', this.fileData);
    formData.append('documentId', this.authenticationService.currentUserValue._id);
    this.fileUploadProgress = '0%';
    let _temp_currentFile = {
      name: this.fileData.name,
      type: this.fileData.type,
      size: this.fileData.size,
      url: null
    }
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
        this.fileData = null;
        this.alertService.success('Uploaded Successfully !!', true);
        let _uploadedUrl = events.body["data"].path;
        if (_.startsWith(_uploadedUrl, '/')) {
          _uploadedUrl = _uploadedUrl.substr(1);
        }
        this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
        _temp_currentFile.url = this.uploadedFilePath;
        this.onacademicDocumentsUpdate(true, null, _temp_currentFile);
      }
    });
  }

  onacademicDocumentsUpdate(_addT, _index, _temp_currentFile) {
    const checkArray: FormArray = this.profileForm.get('academicDocuments') as FormArray;
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
    const checkArray: FormArray = this.profileForm.get('myProfileMedia') as FormArray;
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
          console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          console.log(events.body);
          //alert('SUCCESS !!');
          _.pullAt(this.myProfileFiles, _index);
          this.alertService.success('Uploaded Successfully !!', true);
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
    const checkArray: FormArray = this.profileForm.get('myProfileMedia') as FormArray;
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
      this.profileForm.get('selfProfileUrl').setValue(reader.result);
      this.selfProfileUrlPendingForUpload = true;
    }
  }

  onUploadForProfile() {

    if (!this.fileData4Profile) {
      this.alertService.error("Select file first.");
      return;
    }
    var mimeType = this.fileData4Profile.type;
    if (mimeType.match(/image\/*/) == null) {
      this.alertService.error("Select Image file only.");
      return;
    }
    const formData = new FormData();
    formData.append('files', this.fileData4Profile);
    formData.append('documentId', this.authenticationService.currentUserValue._id);
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
        this.fileData4Profile = null;
        this.alertService.success('Uploaded Successfully !!', true);
        let _uploadedUrl = events.body["data"].path;
        if (_.startsWith(_uploadedUrl, '/')) {
          _uploadedUrl = _uploadedUrl.substr(1);
        }
        this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
        this.profileForm.get('selfProfileUrl').setValue(this.uploadedFilePath);
        this.selfProfileUrlPendingForUpload = false;
      }
    });
  }

  addExternalAppLinks(_addT, _index, appName, appLink) {
    const checkArray: FormArray = this.profileForm.get('externalAppLinks') as FormArray;
    if (_.isNaN(parseInt(_index))) {
      //_index=0;
      _index = checkArray.length;
    }
    appName = _.trim(_.toLower(appName));
    if (!appName || !appLink) {
      this.alertService.error("App and Link both are required");
      return;
    }
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    if (!regex.test(appLink)) {
      this.alertService.error("App Link is not valid");
      return;
    }

    let _extenalAppExistsT = false;
    checkArray.controls.forEach((item: FormControl) => {
      if (item.value.appName == appName) {
        _extenalAppExistsT = true;
        return;
      }
    });
    if (_extenalAppExistsT) {
      this.alertService.error("External App already exist, can not add duplicate entry. Please remove existing or update current");
      return;
    }
    let _obj2push = {
      appName: appName, appLink: appLink
    }
    //this.appName = '';
    this.appLink = '';
    if (_addT) {
      checkArray.push(new FormControl(_obj2push));
      this.alertService.success("External App added");
    } else {
      if (parseInt(_index) >= 0) {
        checkArray.removeAt(_index);
      } else {
        let i: number = 0;
        checkArray.controls.forEach((item: FormControl) => {
          if (item.value.appName == appName) {
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      }
    }
  }
  addEditPortFolio() {

    console.log('95', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ProfilePortfolioComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  //#region upload RKI document
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

  onUploadAssetDocs(_keyName) {
    if (!_keyName) {
      return;
    }
    const checkArray: FormArray = this.profileForm.get(_keyName) as FormArray;
    if (checkArray.length >= 1) {
      this.alertService.error("Upload MAX limit reached.");
      return;
    }
    if (!this.fileData) {
      this.alertService.error("Select file first.");
      return;
    }
    const formData = new FormData();
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      this.alertService.error("Select Image file only.");
      return;
    }
    formData.append('files', this.fileData);
    formData.append('documentId', this.authenticationService.currentUserValue._id);
    this.fileUploadProgress = '0%';
    let _temp_currentFile = {
      name: this.fileData.name,
      type: this.fileData.type,
      size: this.fileData.size,
      url: null
    }
    this.element_ctrllblId = document.getElementById('lbl' + _keyName) as HTMLElement;
    this.element_ctrllblId.innerText = this['lbl' + _keyName + 'Text'];

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
        this.fileData = null;
        this.alertService.success('Uploaded Successfully !!', true);
        let _uploadedUrl = events.body["data"].path;
        if (_.startsWith(_uploadedUrl, '/')) {
          _uploadedUrl = _uploadedUrl.substr(1);
        }
        this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
        _temp_currentFile.url = this.uploadedFilePath;
        this.onAssetDocumentsUpdate(true, null, _temp_currentFile, _keyName);
      }
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
  //#endregion
}
