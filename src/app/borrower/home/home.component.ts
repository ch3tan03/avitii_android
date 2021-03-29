import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalApplySession, ModalAppliedSessionDisplay } from '../borrower.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertService, AuthenticationService, UserService } from 'src/app/services';
import { SessionsService } from 'src/app/services/sessions.service';
import { UtilityService } from 'src/app/services/utility.service';
import { first } from 'rxjs/operators';
import * as _ from 'lodash';
import { Role, SessionStatus } from 'src/app/models';
import { AddFundsService } from 'src/app/services/add-funds.service';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  SearchString: string;
  currentOnlineUserList: any;
  subscription: Subscription;
  subscription1: Subscription;
  show_more = true;
  loading: boolean;
  allSessionsData: any;
  allSessionsCount: number;
  homeComponantForm: FormGroup;
  allSessionsTodayList :any;
  allSessionsTodayCount:any;
  constructor(
    public userService:UserService,
    private socketService: SocketioService,
    private formBuilder: FormBuilder,
    private sessionsService: SessionsService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    public fundService:AddFundsService,
    public router: Router,
    public contactService:ContactService
    ) {
    this.subscription = this.socketService.getCurrentOnlineUsersListObj().subscribe(_currentOnlineUserList => {
      if (_currentOnlineUserList) {
        this.currentOnlineUserList = _currentOnlineUserList;
      } else {
        this.currentOnlineUserList = null;
      }
    });

    this.subscription1 = this.socketService.getCurrentSessionCount().subscribe(_allSessionsCount => {
      if (_allSessionsCount) {
        this.allSessionsCount = _allSessionsCount;
      } else {
        this.allSessionsCount = null;
      }
    });

    let _obj2Use4Filter = {
      role: 'borrower'
    };
    let useAndTrueOrFalse = false;

    this.socketService.getUserOnlineList(false, _obj2Use4Filter, useAndTrueOrFalse);
    let _obj2Save = {};
    this.socketService.getSessionCountByQuery(false, _obj2Save);
    fundService.getFundsCountForRequestedUser(this.authenticationService.currentUserValue._id);
    fundService.getSessionSpentCountForRequestedUser(this.authenticationService.currentUserValue._id);
    this.socketService.getSessionAllTodaysDateAcceptedOnly(this.authenticationService.currentUserValue._id, this.authenticationService.currentUserValue.role).subscribe(result => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      this.allSessionsTodayList = data;
      if(this.utilityService._.keys(this.allSessionsTodayList).length<=0){
        this.allSessionsTodayList=[];
      }
      this.allSessionsTodayCount =this.utilityService._.keys(this.allSessionsTodayList).length;
  });
  }


  get f() { return this.homeComponantForm.controls; }

  sessionSearchByService() {
    let generaldata4search = this.homeComponantForm.get('generaldata4search').value;
    let useAndTrueOrFalse = false;
    this.allSessionsData = [];
    this.sessionsService.getSessionAllByService('', '', generaldata4search, generaldata4search, useAndTrueOrFalse)
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allSessionsData = data['data'];
            //this.alertService.success(data['message'], true);
            this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq( this.utilityService._.map( this.utilityService._.flattenDepth( this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"),1),'borrowerId')));
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
  ngOnInit() {
    this.homeComponantForm = this.formBuilder.group({
      services4search: [''],
      location4search: [''],
      generaldata4search: [''],
    });

    this.sessionsService.getSessionAllWithSessionApply(this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        data => {
          //console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            this.allSessionsData = data['data'];
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
              let _keyPairedMapObj=this.utilityService._.mapKeys(this.allSessionsData, "_id");
              for(let _items in data['data']){
                let _currentObj=data['data'][_items];
                _keyPairedMapObj[_currentObj._id]=_currentObj
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
          //console.log('data => ', data)
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
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }

  check4applyToSession(sessionObj) {
    if (sessionObj && sessionObj.sessionAppliedByBorrowers) {
      if (_.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id }).length > 0) {
        return true;
      }
    }
    return false;
  }

  applyToSession(sessionObj) {
    console.log('179', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalApplySession, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
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
              _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
            }
            _currentSessionApply.status = result.data.status || SessionStatus.Pending;
            this.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);
            switch (_currentSessionApply.status) {
              case SessionStatus.Pending:
                this.socketService.setSessionApply(true, _currentSessionApply);
                break;
              default:
                this.socketService.updateSessionApply(true, _currentSessionApply, this.authenticationService.currentUserValue);
                break;
            }
            switch (_currentSessionApply.status) {
              case SessionStatus.Accepted:
                this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                break;
              case SessionStatus.Pending:
                this.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);
                break;
              case SessionStatus.Rejected:
              case SessionStatus.RejectedOngoing:
              case SessionStatus.RejectedOngoingWithRefund:
              case SessionStatus.Suspended:
                this.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);
                break;
              case SessionStatus.Completed:
                this.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);
                break;
              case SessionStatus.Active:
              case SessionStatus.Ongoing:
              case SessionStatus.OngoingInitiated:
              case SessionStatus.OngoingAccepted:
                this.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);
                break;
              default:
                break;
            }
          }
        }
      }
      console.log(`239 :: hc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  showAppliedToSession(sessionObj) {
    let _proccessedSessionObj = null;
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id });
        break;
      default:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        break;
    }


    console.log('214', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalAppliedSessionDisplay, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        sessionObj: _proccessedSessionObj,
        borrowerId: this.authenticationService.currentUserValue._id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`238 :: hc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  clickedOnSessionChatVideo(sessionObj, AVTrueChatFalse){
    let _contactId=this.contactService.returnContactIdForSession(sessionObj._id, sessionObj.sessionAppliedByBorrowers[0]._id);
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
    this.router.navigate(['/' + _parentRouting + '/messages'], { state: { contactId: _contactId, AVTrueChatFalse: AVTrueChatFalse } });
     }
}