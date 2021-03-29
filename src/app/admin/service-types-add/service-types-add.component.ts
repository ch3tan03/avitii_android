
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { AuthenticationService, AlertService } from 'src/app/services';
import { AppRouterService } from 'src/app/services/app-router.service';
import { ServiceTypesService } from 'src/app/services/service-types.service';
import { UtilityService } from 'src/app/services/utility.service';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { SessionStatus } from 'src/app/models';

@Component({
  selector: 'app-service-types-add',
  templateUrl: './service-types-add.component.html',
  styleUrls: ['./service-types-add.component.css']
})
export class ServiceTypesAddComponent implements OnInit {
  addServiceTypesForm: FormGroup;
  private _sessionType: string;
  loading = false;
  editing = false;
  submitted = false;
  element_btn_click_addServiceTypes_basic_details: HTMLElement;
  element_btn_click_addServiceTypes_skills_verification: HTMLElement;
  private sub: any;
  fileData: File = null;
  previewUrl: any = null;
  ParentServicesTypes: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  private loanId: any;
  arrayItems: any = [0];
  public currentSkill: any = '';
  SessionStatus = SessionStatus;
  constructor(

    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private serviceTypesService: ServiceTypesService,
    private alertService: AlertService,
    private appRouterService: AppRouterService,
    public utilityService: UtilityService,
    private route: ActivatedRoute,
  ) {
    // redirect to home if already logged in
    if (!this.authenticationService.currentUserValue) {
      this.appRouterService.appRouter('');
    }
    this.initForm();
    this.serviceTypesService.getServiceTypesParentAll()
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.ParentServicesTypes = data["data"];
            //this.alertService.success(data['message'], true);
            this.loading = false;
            //this.element_btn_click_addServiceTypes_skills_verification.click();
          } else {
            //alert(JSON.stringify(data['message']));
            this.alertService.error(data['message']);
            this.loading = false;
          }
        },
        error => {
          this.ParentServicesTypes = [];
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

    this.sub = this.route.queryParams.subscribe(params => {
      this.loanId = params['id'];
      if (this.loanId) {
        this.serviceTypesService.getServiceTypesById(this.loanId)
          .pipe(first())
          .subscribe(
            data => {
              //console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.showEditingForm(data["data"]);
                //this.alertService.success(data['message'], true);
                this.loading = false;
                //this.element_btn_click_addServiceTypes_skills_verification.click();
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
    });
  }

  showEditingForm(_userObj) {

    this.editing = true;
    this.addServiceTypesForm = this.formBuilder.group({

      name: [_userObj.name || '', Validators.required],
      rateType: [_userObj.rateType || 'per_hour', Validators.required],
      description: [_userObj.description || '', Validators.required],
      parentServicesTypesId: [_userObj.parentServicesTypesId || ''],
      feeFromUserFixedAmount: [_userObj.feeFromUserFixedAmount || 0, Validators.required],
      serviceFeeFromUserFixedAmount: [_userObj.serviceFeeFromUserFixedAmount || 0, Validators.required],
      feeToConsultFixedAmount: [_userObj.feeToConsultFixedAmount || 0, Validators.required],
      commisionToProtalFixedAmount: [_userObj.commisionToProtalFixedAmount || 0, Validators.required],
      serviceFeeFromUserPercentage: [_userObj.serviceFeeFromUserPercentage || 0],
      feeToConsultPercentage: [_userObj.feeToConsultPercentage || 0],
      commisionToProtalPercentage: [_userObj.commisionToProtalPercentage || 0],
      skillTags: this.formBuilder.array(_userObj.skillTags || [], [Validators.required]),
      _id: [_userObj._id || ''],
      createdOn: [_userObj.createdOn || ''],
      updatedOn: [_userObj.updatedOn || ''],
      isDeleted: [_userObj.isDeleted || false],
      createdBy: [_userObj.createdBy || ''],
      deletedBy: [_userObj.deletedBy || ''],
      updatedBy: [this.authenticationService.currentUserValue._id || ''],
    });
    this._sessionType = _userObj.sessionType;
  }


  initForm() {
    this.addServiceTypesForm = this.formBuilder.group({
      name: ['', Validators.required],
      rateType: ['per_hour', Validators.required],
      description: ['', Validators.required],
      parentServicesTypesId: [''],
      feeFromUserFixedAmount: [0, Validators.required],
      serviceFeeFromUserFixedAmount: [0, Validators.required],
      feeToConsultFixedAmount: [0, Validators.required],
      commisionToProtalFixedAmount: [0, Validators.required],
      serviceFeeFromUserPercentage: [0],
      feeToConsultPercentage: [0],
      commisionToProtalPercentage: [0],
      skillTags: this.formBuilder.array([], [Validators.required]),
      _id: [''],
      createdOn: [''],
      updatedOn: [''],
      isDeleted: [false],
      createdBy: [''],
      deletedBy: [''],
      updatedBy: [''],
    });
  }



  // convenience getter for easy access to form fields
  get f() { return this.addServiceTypesForm.controls; }


  onaddServiceTypesUpdateSubmit() {
    this.submitted = true;
    if (this.addServiceTypesForm.invalid) {
      return;
    }
    let _feeFromUserFixedAmount = this.addServiceTypesForm.value["feeFromUserFixedAmount"];
    let _feeToConsultFixedAmount = this.addServiceTypesForm.value["feeToConsultFixedAmount"];
    let _commisionToProtalFixedAmount = this.addServiceTypesForm.value["commisionToProtalFixedAmount"];
    if (_feeFromUserFixedAmount != (_feeToConsultFixedAmount + _commisionToProtalFixedAmount)) {
      this.alertService.error("Please check Amounts, User charges must be equal to addition of consult and portal fees");
      return;
    }

    if (this.loanId) {
      this.serviceTypesService.updateServiceTypesById(this.addServiceTypesForm.value)
        .pipe(first())
        .subscribe(
          data => {
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              this.alertService.success('ServiceTypes Updated successfully', true);
              this.appRouterService.appRouteToPath('/admin/services');
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
      this.serviceTypesService.addNewServiceTypes(this.addServiceTypesForm.value)
        .pipe(first())
        .subscribe(
          data => {
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              this.alertService.success('ServiceTypes Added successfully', true);
              this.appRouterService.appRouteToPath('/admin/services');
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


  get skillTags() {
    return this.addServiceTypesForm.get('skillTags') as FormArray;
  }

  addItem(item) {
    if (!item) {
      return;
    }
    item = _.toLower(_.trim(item));
    if (this.arrayItems.indexOf(item) > -1) {
      return;
    }
    this.arrayItems.push(item);
    this.skillTags.push(this.formBuilder.control(item));
  }
  removeItem() {
    this.arrayItems.pop();
    this.skillTags.removeAt(this.skillTags.length - 1);
  }
  ngOnInit() {
    this.arrayItems = [];
  }
}

