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
import { MediaPreviewComponent } from 'src/app/shared/media-preview/media-preview.component';

declare var $: any;
const uploadAPI = environment.apiUrl + '/api/post/upload/assetdata';
const uploadAccessUrl = environment.apiUrl + '/';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  fileData4refDocument: File = null;
  fileData4refDocumentPendingForUpload: Boolean = false;

  allPartnersData: any;
  userPartnersForm: FormGroup;
  loading = false;
  submitted = false;

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
  currentObj: any = null;
  actionButtons0Add1Edit2Delete: number = 0;
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
    this.fetchAllPartnersByUserId();

  }

  ngOnInit(): void {
  }

  fetchAllPartnersByUserId() {
    this.userService.getPartnersAll(null)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allPartnersData = data["data"];
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

  get f() { return this.userPartnersForm.controls; }

  onPartnersUpdateSubmit() {
    this.submitted = true;
    if (this.userPartnersForm.invalid) {
      this.alertService.error("Please Provide all data");
      return;
    }

    if (this.fileData4refDocumentPendingForUpload) {
      this.alertService.error('Please upload document first');
      return;
    }

    this.userService.addUpdateUserPartners(this.userPartnersForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.alertService.success('Data Updated successfully', true);
            this.fetchAllPartnersByUserId();
            this.submitted = false;
            this.closeDialog();
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
          //this.closeDialog();
        });
  }

  showEditingFormPartners(_userObj) {

    this.userPartnersForm = this.formBuilder.group({
      _id: [_userObj._id || ''],
      title: [_userObj.title || '', Validators.required],
      domainLink: [_userObj.domainLink || ''],
      description: [_userObj.description || '', Validators.required],
      refDocument: [_userObj.refDocument || '', Validators.required],
      status: [_userObj.status || SessionStatus.Pending],
      createdOn: [_userObj.createdOn || null],
      updatedOn: [_userObj.updatedOn || null],
      isDeleted: [_userObj.isDeleted || false],
      createdBy: [_userObj.createdBy || this.authenticationService.currentUserValue._id],
      deletedBy: [_userObj.deletedBy || ''],
      updatedBy: [this.authenticationService.currentUserValue._id],

    });
  }

  initForm() {

    this.userPartnersForm = this.formBuilder.group({
      _id: [''],
      title: ['', Validators.required],
      domainLink: [''],
      description: ['', Validators.required],
      refDocument: ['', Validators.required],
      status: [SessionStatus.Pending],
      createdOn: [''],
      updatedOn: [''],
      isDeleted: [false],
      createdBy: [this.authenticationService.currentUserValue._id || ''],
      deletedBy: [''],
      updatedBy: [''],
    });

  }

  onfileProgressForPartnersDocument(fileInput: any) {
    this.fileData4refDocument = <File>fileInput.target.files[0];
    this.previewForPartnersDocument();
  }

  previewForPartnersDocument() {
    // Show preview 
    var mimeType = this.fileData4refDocument.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData4refDocument);
    reader.onload = (_event) => {
      this.userPartnersForm.get('refDocument').setValue(reader.result);
      this.fileData4refDocumentPendingForUpload = true;
    }
  }

  onUploadForPartnersDocument() {

    if (!this.fileData4refDocument) {
      this.alertService.error("Select file first.");
      return;
    }
    var mimeType = this.fileData4refDocument.type;
    if (mimeType.match(/image\/*/) == null) {
      this.alertService.error("Select Image file only.");
      return;
    }
    const formData = new FormData();
    formData.append('files', this.fileData4refDocument);
    formData.append('documentId', this.userObj._id + '__partners');
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
        this.userPartnersForm.get('refDocument').setValue(this.uploadedFilePath);
        this.fileData4refDocumentPendingForUpload = false;
      }
    });
  }

  mediaPreviewModel(mediaSrc, mimeType) {

    //console.log('411', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(MediaPreviewComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '70%',
      width: '70%',
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

  EditShowPartnersForm(_userObj) {
    this.actionButtons0Add1Edit2Delete = 1;
    this.initForm();
    this.showEditingFormPartners(_userObj);
    $("#blogModal").modal('show');
  }

  DeleteShowPartnersForm(_userObj) {
    this.currentObj = _userObj;
    this.actionButtons0Add1Edit2Delete = 2;
    this.initForm();
    this.showEditingFormPartners(_userObj);
    $("#blogModal").modal('show');
  }

  DeleteData() {
    this.actionButtons0Add1Edit2Delete = 2;
    this.initForm();
    this.showEditingFormPartners(this.currentObj);
    this.userPartnersForm.get("isDeleted").setValue(true);
    this.userPartnersForm.get("deletedBy").setValue(this.authenticationService.currentUserValue._id);
    let _temp_allPartnersData = _.mapKeys(this.allPartnersData,'_id');
    delete _temp_allPartnersData[this.currentObj._id];
    this.allPartnersData = _.values(_temp_allPartnersData);
    this.onPartnersUpdateSubmit();
  }

  closeDialog() {
    this.currentObj = null;
    this.actionButtons0Add1Edit2Delete = 0;
    this.initForm();
    $("#blogModal").modal('hide');
  }

}
