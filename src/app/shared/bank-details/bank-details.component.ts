import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { UtilityService } from 'src/app/services/utility.service';
import * as _ from 'lodash';
import { first } from 'rxjs/internal/operators/first';


@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  bankDetailsForm: FormGroup;
  loading: Boolean = false;
  isOtpSent: Boolean = true;
  submitted: Boolean = false;

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

    this.initForm();
    this.userService.getUserById(this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
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
  }

  get f() { return this.bankDetailsForm.controls; }
  
  ngOnInit(): void {
  }

  showEditingForm(_userObj) {
    let _birthDate = null;
    if (_userObj.birthDate) {
      _birthDate = moment(_userObj.birthDate).format('YYYY-MM-DD');
    }

    this.bankDetailsForm = this.formBuilder.group({
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
      accountNumber: [_userObj.accountNumber || '', Validators.required],
      bankName: [_userObj.bankName || '', Validators.required],
      regNumber: [_userObj.regNumber || ''],
      cprNumber: [_userObj.cprNumber || ''],
      branchDetails: [_userObj.branchDetails || ''],
      mobilePayment: [_userObj.mobilePayment || ''],

      bitCoinWalletID: [_userObj.bitCoinWalletID || ''],
      revolutWalletID: [_userObj.revolutWalletID || ''],
      skrillWalletID: [_userObj.skrillWalletID || ''],
      paypalWalletID: [_userObj.paypalWalletID || ''],
      bic: [_userObj.bic || '', Validators.required],
      accountType: [_userObj.accountType || ''],
      iban: [_userObj.iban || '', Validators.required],
      accountOtherDetails1: [_userObj.accountOtherDetails1 || ''],
      accountOtherDetails2: [_userObj.accountOtherDetails2 || ''],
      accountOtherDetails3: [_userObj.accountOtherDetails3 || ''],
      accountOtherDetails4: [_userObj.accountOtherDetails4 || ''],
      selfProfileUrl: [_userObj.selfProfileUrl || ''],

    });

  }


  initForm() {
    this.bankDetailsForm = this.formBuilder.group({
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
  }

  onBankDetailsUpdateSubmit() {

    this.submitted = true;
    if (this.bankDetailsForm.invalid) {
      this.alertService.error("Please Provide all data");
      return;
    }

    this.userService.updateUserById(this.bankDetailsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            localStorage.removeItem('currentUser');
            //this.authenticationService.clearCurrentUserObj();
            localStorage.setItem('currentUser', JSON.stringify(data['data']));
            this.authenticationService.sendCurrentUserObj(data['data']);
            this.alertService.success('Bank details updated', true);
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

}
