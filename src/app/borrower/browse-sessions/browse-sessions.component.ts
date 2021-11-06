import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { AlertService, AuthenticationService, UserService } from 'src/app/services';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalApplySession, ModalAppliedSessionDisplay } from '../borrower.component';
import * as _ from 'lodash';
import { Role, SessionStatus } from 'src/app/models';
/*import { ServiceTypesService } from 'src/app/services/service-types.service';*/
import { SocketioService } from 'src/app/socketio.service';
declare var require: any
const { overwrite, getNames } = require('country-list');
overwrite([{
  code: 'US',
  name: 'USA'
}])
@Component({
  selector: 'app-browse-sessions',
  templateUrl: './browse-sessions.component.html',
  styleUrls: ['./browse-sessions.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BrowseSessionsComponent implements OnInit {
  public submitted: boolean;
  loading: boolean;
  allSessionsData: any;
  allSessionsCount: number;
  browseSessionForm: FormGroup;
  ParentServicesTypes: any = null;
  countrylist: any = null;
  constructor(
    public userService:UserService,
    private socketService: SocketioService,
    private formBuilder: FormBuilder,
    private sessionsService: SessionsService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    /*private serviceTypesService: ServiceTypesService,*/
  ) {
    this.countrylist = getNames();
  /*
    this.serviceTypesService.getServiceTypesChildAll()
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
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
*/
  }

  check4applyToSession(sessionObj) {
    if (sessionObj && sessionObj.sessionAppliedByBorrowers) {
      if (_.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId":{"_id": this.authenticationService.currentUserValue._id }}).length > 0) {
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
    this.browseSessionForm = this.formBuilder.group({
      services4search: [''],
      location4search: [''],
      generaldata4search: [''],
    });

    this.sessionsService.getSessionAllWithSessionApply(this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allSessionsData = data['data'];
            this.filterAllSessionsDataForAppliedCurrentUserOnly();
            
            this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq( this.utilityService._.map( this.utilityService._.flattenDepth( this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"),1),'borrowerId')));
            //this.alertService.success(data['message'], true);
            this.loading = false;
            //this.element_btn_click_addSession_skills_verification.click();
          } else {
            //alert(JSON.stringify(data['message']));
            //this.alertService.error(data['message']);
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
          //this.alertService.error(errorMsg2show);
          this.loading = false;
        });
    this.sessionsService.getUpdatesForSessionAllByBorrowerId()
      .subscribe(
        data => {
          if (data && data['success']) {
            let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
            for (let _items in data['data']) {
              let _currentObj = data['data'][_items];
              _keyPairedMapObj[_currentObj._id] = _currentObj
            }
            this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
            this.loading = false;
          } else {
            this.loading = false;
          }
        },
        error => {
          this.loading = false;
        });
    this.sessionsService.getSessionLengthByService(null, null, null, null, null)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allSessionsCount = data['data'];
            //this.alertService.success(data['message'], true);
            this.loading = false;
            //this.element_btn_click_addSession_skills_verification.click();
          } else {
            //alert(JSON.stringify(data['message']));
            //this.alertService.error(data['message']);
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
          //this.alertService.error(errorMsg2show);
          this.loading = false;
        });
  }
  get f() { return this.browseSessionForm.controls; }

  sessionSearchByService() {
    let services = this.browseSessionForm.get('services4search').value;
    let location = this.browseSessionForm.get('location4search').value;
    let generaldata4search = this.browseSessionForm.get('generaldata4search').value;
    let useAndTrueOrFalse = false;
    this.allSessionsData = [];
    this.sessionsService.getSessionAllByService(services, location, generaldata4search, generaldata4search, useAndTrueOrFalse)
      .pipe(first())
      .subscribe(
        data => {

          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allSessionsData = data['data'];
            this.filterAllSessionsDataForAppliedCurrentUserOnly();

            this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq( this.utilityService._.map( this.utilityService._.flattenDepth( this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"),1),'borrowerId')));
            //this.alertService.success(data['message'], true);
            this.loading = false;
            //this.element_btn_click_addSession_skills_verification.click();
          } else {
            //alert(JSON.stringify(data['message']));
            //this.alertService.error(data['message']);
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
          //this.alertService.error(errorMsg2show);
          this.loading = false;
        });

  }

  applyToSession(sessionObj) {
    //console.log('179', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalApplySession, {
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: {
        sessionObj: sessionObj,
        borrowerId: this.authenticationService.currentUserValue._id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      let _currentSessionApply = null;
      if (result) {
        if (result.data) {
          _currentSessionApply = result.data.sessionApply
          if (_currentSessionApply) {
            if (!_currentSessionApply._id) {
              _currentSessionApply._id = _currentSessionApply.loanId + '__' + (_currentSessionApply.borrowerId._id || _currentSessionApply.borrowerId);
            }
            _currentSessionApply.status = result.data.status || SessionStatus.Pending;
            this.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);
            switch (_currentSessionApply.status) {
              case SessionStatus.Pending:
                _currentSessionApply.createdBy=this.authenticationService.currentUserValue._id;
                this.socketService.setSessionApply(true, _currentSessionApply);
                break;
              default:
                this.socketService.updateSessionApply(true, _currentSessionApply, this.authenticationService.currentUserValue);
                break;
            }
            switch (_currentSessionApply.status) {
              case SessionStatus.Accepted:
                this.alertService.success("Updated. Session is available under My Sessionss ->Accepted tab.", true);
                break;
              case SessionStatus.Pending:
                this.alertService.success("Applied. Session is available under My Sessionss->Pending tab.", true);
                break;
              case SessionStatus.Rejected:
              case SessionStatus.RejectedOngoing:
              case SessionStatus.RejectedOngoingWithRefund:
              case SessionStatus.Suspended:
                this.alertService.success("Updated. Session is available under My Sessionss->Rejected tab.", true);
                break;
              case SessionStatus.Completed:
                this.alertService.success("Updated. Session is available under My Sessionss->Completed tab.", true);
                break;
              case SessionStatus.Active:
              case SessionStatus.Ongoing:
              case SessionStatus.OngoingInitiated:
              case SessionStatus.AwaitingForApproval:
                this.alertService.success("Updated. Session is available under My Sessionss->Ongoing tab.", true);
                break;
              default:
                break;
            }
          }
        }
      }
      //console.log(`252 :: bsc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  showAppliedToSession(sessionObj) {
    let _proccessedSessionObj = null;
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId":{"_id": this.authenticationService.currentUserValue._id }});
        break;
      default:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        break;
    }
    //console.log('214', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalAppliedSessionDisplay, {
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: {
        sessionObj: _proccessedSessionObj,
        borrowerId: this.authenticationService.currentUserValue._id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`191 :: bcs :: Dialog result: ${JSON.stringify(result)}`);
    });
  }
  filterAllSessionsDataForAppliedCurrentUserOnly() {
    if (this.allSessionsData) {
      let allSessionsDataKeyPaired = {};
      for (let _items in this.allSessionsData) {
        let _proccessedSessionObj = {
          _id: null,
          sessionAppliedByBorrowers: []
        };
        let sessionObj = this.allSessionsData[_items];
        switch (this.authenticationService.currentUserValue.role) {
          case Role.Borrower:
            _proccessedSessionObj =this.utilityService._.cloneDeep(sessionObj);
            _proccessedSessionObj.sessionAppliedByBorrowers = this.utilityService._.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId":{"_id": this.authenticationService.currentUserValue._id }});
            break;
          default:
            _proccessedSessionObj = this.utilityService._.cloneDeep(sessionObj);
            break;
        }
        allSessionsDataKeyPaired[_proccessedSessionObj._id] = _proccessedSessionObj;
      }
      this.allSessionsData = this.utilityService._.values(allSessionsDataKeyPaired);
    }
  }
}
