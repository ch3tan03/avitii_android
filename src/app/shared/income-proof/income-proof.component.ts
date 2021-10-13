import { Component, Inject, Optional, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { SessionStatus } from 'src/app/models';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { HttpClient, HttpEventType } from '@angular/common/http';
import * as _ from 'lodash';
import { UtilityService } from 'src/app/services/utility.service';
import { environment } from 'src/environments/environment';
import { MediaPreviewComponent } from '../media-preview/media-preview.component';
import { MediaProccessComponent } from '../media-proccess/media-proccess.component';

const uploadAPI = environment.apiUrl + '/api/post/upload/assetdata';

const uploadAccessUrl = environment.apiUrl + '/';

@Component({
  selector: 'app-income-proof',
  templateUrl: './income-proof.component.html',
  styleUrls: ['./income-proof.component.css']
})
export class IncomeProofComponent implements OnInit {
  fileData4MonthlyIncomeProofDocument: File = null;
  fileData4MonthlyIncomeProofDocumentPendingForUpload: Boolean = false;

  allIncomeDetailsData: any;
  allExpenseDetailsData: any;
  userIncomeDetailsForm: FormGroup;
  userExpenseDetailsForm: FormGroup;
  loading = false;
  submittedIncomeDetails = false;
  submittedExpenseDetails = false;

  fileData: File = null;
  fileData4Profile: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  myProfileFiles: File[] = [];
  selfProfileUrlPendingForUpload: Boolean = false;
  portfolioDataArr: any = [];
  SessionStatus = SessionStatus;
  userObj: any = null;
  isOpenedInModel: boolean = false;
  adminViewT: boolean = false;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    public utilityService: UtilityService,
    @Optional() public dialogRef: MatDialogRef<IncomeProofComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private _cdr: ChangeDetectorRef
  ) {
    if (data && data.isOpenedInModel) {
      this.isOpenedInModel = true;
      this.userObj = data.userObj;
      this.adminViewT = !!data.adminViewT;
    } else {
      this.userObj = this.authenticationService.currentUserValue;
    }
    // redirect to home if already logged in
    if (!this.userObj || !this.userObj._id) {
      if (this.isOpenedInModel) {
        this.closeDialog();
      } else {
        this.appRouterService.appRouter('');
      }
      return;
    }

    this.initForm();
    this.fetchAllIncomeDetailsByUserId();
    this.fetchAllExpenseDetailsByUserId();
    this.fetchSumOfIncomeExpenseDetailsByUserId();
  }

  fetchAllIncomeDetailsByUserId() {
    this.userService.getUserIncomeDetailsByUserId(this.userObj._id)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allIncomeDetailsData = data["data"];
            //this.alertService.success(data['message'], true);
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
          this.appRouterService.appRouter('');
        });
  }

  fetchAllExpenseDetailsByUserId() {
    this.userService.getUserExpenseDetailsByUserId(this.userObj._id)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allExpenseDetailsData = data["data"];
            //this.alertService.success(data['message'], true);
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
          this.appRouterService.appRouter('');
        });
  }

  fetchSumOfIncomeExpenseDetailsByUserId() {
    this.userService.getUserIncomeExpenseDetailsByUserId(this.userObj._id)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));

            if (this.userObj._id == data["data"]["_id"]) {
              this.userObj.totalIncome4currentUser = data["data"]["totalIncome4currentUser"];
              this.userObj.totalExpense4currentUser = data["data"]["totalExpense4currentUser"];
              this.userObj.totalAllowedBudget = this.userObj.totalIncome4currentUser - this.userObj.totalExpense4currentUser;
            }
            this._cdr.detectChanges();

            //this.alertService.success(data['message'], true);
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
          this.appRouterService.appRouter('');
        });
  }
  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get f() { return this.userIncomeDetailsForm.controls; }
  get ff() { return this.userExpenseDetailsForm.controls; }

  onUserIncomeDetailsUpdateSubmit() {
    this.submittedIncomeDetails = true;
    if (this.userIncomeDetailsForm.invalid) {
      this.alertService.error("Please Provide all data");
      return;
    }

    if (this.fileData4MonthlyIncomeProofDocumentPendingForUpload) {
      this.alertService.error('Please upload document first');
      return;
    }

    this.userService.addUpdateUserIncomeDetails(this.userIncomeDetailsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));

            this.alertService.success('Your Income proof is Updated successfully', true);
            this.fetchAllIncomeDetailsByUserId();
            this.submittedIncomeDetails = false;
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

  onUserExpenseDetailsUpdateSubmit() {
    this.submittedExpenseDetails = true;
    if (this.userExpenseDetailsForm.invalid) {
      this.alertService.error("Please Provide all data");
      return;
    }

    let _monthlyExpenseStartDateTimeCustomised = this.userExpenseDetailsForm.get('monthlyExpenseStartDateTimeCustomised').value;
    let _monthlyExpensePaymentDateTimeCustomised = this.userExpenseDetailsForm.get('monthlyExpensePaymentDateTimeCustomised').value;

    if (_monthlyExpenseStartDateTimeCustomised) {
      this.userExpenseDetailsForm.get('monthlyExpenseStartDate').setValue(Date.parse(moment(_monthlyExpenseStartDateTimeCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD')));
    }
    if (_monthlyExpensePaymentDateTimeCustomised) {
      this.userExpenseDetailsForm.get('monthlyExpensePaymentDate').setValue(Date.parse(moment(_monthlyExpensePaymentDateTimeCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD')));
    }

    this.userService.addUpdateUserExpenseDetails(this.userExpenseDetailsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));

            this.alertService.success('Your Expense proof is Updated successfully', true);
            this.fetchAllExpenseDetailsByUserId();
            this.submittedExpenseDetails = false;
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

  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment({ year: this.year - 100, month: this.month, day: this.day }).format('YYYY-MM-DD');

  maxDate = moment({ year: this.year - 18, month: this.month, day: this.day }).format('YYYY-MM-DD');

  date(ev) {
    //console.log(this.minDate)
    //console.log(ev.target.value)
  }

  showEditingFormIncomeDetails(_userObj) {

    this.userIncomeDetailsForm = this.formBuilder.group({
      _id: [_userObj._id || ''],

      incomeSource: [_userObj.incomeSource || '', Validators.required],
      monthlyIncomeAmount: [_userObj.monthlyIncomeAmount || '', Validators.required],
      monthlyIncomeProofDocument: [_userObj.monthlyIncomeProofDocument || '', Validators.required],
      monthlyIncomeStatus: [_userObj.monthlyIncomeStatus || SessionStatus.Pending, Validators.required],

      userId: [_userObj.userId || this.userObj._id],
      createdOn: [_userObj.createdOn || ''],
      updatedOn: [_userObj.updatedOn || ''],
      isDeleted: [_userObj.isDeleted || false],
      createdBy: [_userObj.createdBy || ''],
      deletedBy: [_userObj.deletedBy || ''],
      updatedBy: [this.authenticationService.currentUserValue._id || ''],

    });
  }

  showEditingFormExpenseDetails(_userObj) {
    this.userExpenseDetailsForm = this.formBuilder.group({
      _id: [_userObj._id || ''],

      expenseDetails: [_userObj.expenseDetails || '', Validators.required],
      monthlyEMIAmount: [_userObj.monthlyEMIAmount || '', Validators.required],
      monthlyExpenseStartDateTimeCustomised: [_userObj.monthlyExpenseStartDateTimeCustomised || ''],
      monthlyExpensePaymentDateTimeCustomised: [_userObj.monthlyExpensePaymentDateTimeCustomised || ''],
      monthlyExpenseStartDate: [_userObj.monthlyExpenseStartDate || ''],
      monthlyExpensePaymentDate: [_userObj.monthlyExpensePaymentDate || ''],
      monthlyExpenseStatus: [_userObj.monthlyExpenseStatus || SessionStatus.Pending],

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

    this.userIncomeDetailsForm = this.formBuilder.group({
      _id: [''],

      incomeSource: ['', Validators.required],
      monthlyIncomeAmount: ['', Validators.required],
      monthlyIncomeProofDocument: ['', Validators.required],
      monthlyIncomeStatus: [SessionStatus.Pending, Validators.required],

      userId: [this.userObj._id],
      createdOn: [''],
      updatedOn: [''],
      isDeleted: [false],
      createdBy: [this.authenticationService.currentUserValue._id || ''],
      deletedBy: [''],
      updatedBy: [''],

    });

    this.userExpenseDetailsForm = this.formBuilder.group({
      _id: [''],

      expenseDetails: ['', Validators.required],
      monthlyEMIAmount: ['', Validators.required],
      monthlyExpenseStartDateTimeCustomised: [''],
      monthlyExpensePaymentDateTimeCustomised: [''],
      monthlyExpenseStartDate: [''],
      monthlyExpensePaymentDate: [''],
      monthlyExpenseStatus: [SessionStatus.Pending],

      userId: [this.userObj._id],
      createdOn: [''],
      updatedOn: [''],
      isDeleted: [false],
      createdBy: [this.authenticationService.currentUserValue._id || ''],
      deletedBy: [''],
      updatedBy: [''],

    });

  }

  onfileProgressForMonthlyIncomeProofDocument(fileInput: any) {
    this.fileData4MonthlyIncomeProofDocument = <File>fileInput.target.files[0];
    this.previewForMonthlyIncomeProofDocument();
  }

  previewForMonthlyIncomeProofDocument() {
    // Show preview 
    var mimeType = this.fileData4MonthlyIncomeProofDocument.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData4MonthlyIncomeProofDocument);
    reader.onload = (_event) => {
      this.userIncomeDetailsForm.get('monthlyIncomeProofDocument').setValue(reader.result);
      this.fileData4MonthlyIncomeProofDocumentPendingForUpload = true;
    }
  }

  onUploadForMonthlyIncomeProofDocument() {

    if (!this.fileData4MonthlyIncomeProofDocument) {
      this.alertService.error("Select file first.");
      return;
    }
    var mimeType = this.fileData4MonthlyIncomeProofDocument.type;
    if (mimeType.match(/image\/*/) == null) {
      this.alertService.error("Select Image file only.");
      return;
    }
    const formData = new FormData();
    formData.append('files', this.fileData4MonthlyIncomeProofDocument);
    formData.append('documentId', this.userObj._id + '__income_proof');
    this.fileUploadProgress = '0%';
    
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
        this.fileData4Profile = null;
        this.alertService.success('Uploaded Successfully !!', true);
        let _uploadedUrl = events.body["data"].path;
        if (_.startsWith(_uploadedUrl, '/')) {
          _uploadedUrl = _uploadedUrl.substr(1);
        }
        this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
        this.userIncomeDetailsForm.get('monthlyIncomeProofDocument').setValue(this.uploadedFilePath);
        this.fileData4MonthlyIncomeProofDocumentPendingForUpload = false;
      }
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: true });
  }

  mediaPreviewModel(mediaSrc, mimeType) {

    //console.log('411', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(MediaPreviewComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
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

  updateUsersIncomeVerificationStatus(_documentId: string, _status2update: string) {
    this.alertService.success("Please wait while we updating status of user");
    this.userService.updateUsersIncomeVerificationStatus(_documentId, _status2update, this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this._cdr.detach();
            let usersObjArr = this.utilityService._.mapKeys(this.allIncomeDetailsData, '_id');
            usersObjArr[data["data"]["_id"]] = data["data"]
            this.allIncomeDetailsData = this.utilityService._.values(usersObjArr);
            this._cdr.detectChanges();
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

  updateUsersExpenseVerificationStatus(_documentId: string, _status2update: string) {
    this.alertService.success("Please wait while we updating status of user");
    this.userService.updateUsersExpenseVerificationStatus(_documentId, _status2update, this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            this._cdr.detach();
            let usersObjArr = this.utilityService._.mapKeys(this.allExpenseDetailsData, '_id');
            usersObjArr[data["data"]["_id"]] = data["data"]
            this.allExpenseDetailsData = this.utilityService._.values(usersObjArr);
            this._cdr.detectChanges();
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

    //#region open media uploader with crop feature
    modalMediaUploadWithCropFeature(documentId, attributeKey, subFolderName) {
      switch (attributeKey) {
        case 'selfProfileUrl':
  
          break;
        case 'myPassportMedia':
        case 'myDLMedia':
        case 'myHICardMedia':
        case 'myRKIMedia':
          const checkArray: FormArray = this.userIncomeDetailsForm.get(attributeKey) as FormArray;
          if (checkArray.length >= 1) {
            this.alertService.error("Upload MAX limit reached. Please remove existing.");
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
          subFolderName: subFolderName
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (result.data) {
            switch (result.data.attributeKey) {
              case 'monthlyIncomeProofDocument':
                if (result.data.uploadedFilePath) {
                  this.userIncomeDetailsForm.get('monthlyIncomeProofDocument').setValue(result.data.uploadedFilePath);
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
