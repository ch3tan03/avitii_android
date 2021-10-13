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
import { AngularEditorConfig } from '@kolkov/angular-editor';

declare var $: any;
const uploadAPI = environment.apiUrl + '/api/post/upload/assetdata';
const uploadAccessUrl = environment.apiUrl + '/';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    /*upload: (file: File) => { ... }*/
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
  fileData4blogsDocument: File = null;
  fileData4blogsDocumentPendingForUpload: Boolean = false;

  allBlogsData: any;
  userBlogsForm: FormGroup;
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
    this.fetchAllBlogsByUserId();

  }

  ngOnInit(): void {
  }

  fetchAllBlogsByUserId() {
    this.userService.getBlogsAll(null)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allBlogsData = data["data"];
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

  get f() { return this.userBlogsForm.controls; }

  onBlogsUpdateSubmit() {
    this.submitted = true;
    if (this.userBlogsForm.invalid) {
      this.alertService.error("Please Provide all data");
      return;
    }

    if (this.fileData4blogsDocumentPendingForUpload) {
      this.alertService.error('Please upload document first');
      return;
    }

    this.userService.addUpdateUserBlogs(this.userBlogsForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.alertService.success('Blog Updated successfully', true);
            this.fetchAllBlogsByUserId();
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

  showEditingFormBlogs(_userObj) {

    this.userBlogsForm = this.formBuilder.group({
      _id: [_userObj._id || ''],
      title: [_userObj.title || '', Validators.required],
      description: [_userObj.description || '', Validators.required],
      blogsDocument: [_userObj.blogsDocument || '', Validators.required],
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

    this.userBlogsForm = this.formBuilder.group({
      _id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      blogsDocument: ['', Validators.required],
      status: [SessionStatus.Pending],
      createdOn: [''],
      updatedOn: [''],
      isDeleted: [false],
      createdBy: [this.authenticationService.currentUserValue._id || ''],
      deletedBy: [''],
      updatedBy: [''],
    });

  }

  onfileProgressForBlogsDocument(fileInput: any) {
    this.fileData4blogsDocument = <File>fileInput.target.files[0];
    this.previewForBlogsDocument();
  }

  previewForBlogsDocument() {
    // Show preview 
    var mimeType = this.fileData4blogsDocument.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData4blogsDocument);
    reader.onload = (_event) => {
      this.userBlogsForm.get('blogsDocument').setValue(reader.result);
      this.fileData4blogsDocumentPendingForUpload = true;
    }
  }

  onUploadForBlogsDocument() {

    if (!this.fileData4blogsDocument) {
      this.alertService.error("Select file first.");
      return;
    }
    var mimeType = this.fileData4blogsDocument.type;
    if (mimeType.match(/image\/*/) == null) {
      this.alertService.error("Select Image file only.");
      return;
    }
    const formData = new FormData();
    formData.append('files', this.fileData4blogsDocument);
    formData.append('documentId', this.userObj._id + '__blogs');
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
        this.userBlogsForm.get('blogsDocument').setValue(this.uploadedFilePath);
        this.fileData4blogsDocumentPendingForUpload = false;
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

  EditShowBlogsForm(_userObj) {
    this.actionButtons0Add1Edit2Delete = 1;
    this.initForm();
    this.showEditingFormBlogs(_userObj);
    $("#blogModal").modal('show');
  }

  DeleteShowBlogsForm(_userObj) {
    this.currentObj = _userObj;
    this.actionButtons0Add1Edit2Delete = 2;
    this.initForm();
    this.showEditingFormBlogs(_userObj);
    $("#blogModal").modal('show');
  }

  DeleteData() {
    this.actionButtons0Add1Edit2Delete = 2;
    this.initForm();
    this.showEditingFormBlogs(this.currentObj);
    this.userBlogsForm.get("isDeleted").setValue(true);
    this.userBlogsForm.get("deletedBy").setValue(this.authenticationService.currentUserValue._id);
    
    let _temp_allPartnersData = _.mapKeys(this.allBlogsData,'_id');
    delete _temp_allPartnersData[this.currentObj._id];
    this.allBlogsData = _.values(_temp_allPartnersData);

    this.onBlogsUpdateSubmit();
  }

  closeDialog() {
    this.currentObj = null;
    this.actionButtons0Add1Edit2Delete = 0;
    this.initForm();
    $("#blogModal").modal('hide');
  }

}
