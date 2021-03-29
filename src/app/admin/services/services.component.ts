
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  ParentServicesTypes: any = null;
  loading = false;

  constructor(
    private serviceTypesService: ServiceTypesService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    private authenticationService: AuthenticationService,
  ) {
    this.loadServiceTypesService();
  }
  loadServiceTypesService() {
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
          let errorMsg2show = "";
          this.ParentServicesTypes = [];
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

  ngOnInit(): void {
  }

  deleteById(documentId) {
    let deletedBy = this.authenticationService.currentUserValue._id;
    this.serviceTypesService.deleteServiceTypesById(documentId, deletedBy)
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            this.loadServiceTypesService();
            this.alertService.success(data['message'], true);
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
          this.ParentServicesTypes = [];
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
