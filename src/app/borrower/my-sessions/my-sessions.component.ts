import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService, AlertService, UserService } from 'src/app/services';
import { UtilityService } from 'src/app/services/utility.service';
import { first } from 'rxjs/operators';
import { ModalAppliedSessionDisplay, ModalApplySession } from '../borrower.component';
import * as _ from 'lodash';
import { Role, SessionStatus } from 'src/app/models';
import { Router } from '@angular/router';
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-my-sessions',
  templateUrl: './my-sessions.component.html',
  styleUrls: ['./my-sessions.component.css']
})

export class MySessionsComponent implements OnInit {

  loading: boolean;
  allSessionsData: any;
  SessionStatusTypeFilter: string[] = [];
  checkCreatedByUserId: string = '';
  checkCreatedByT: Boolean = false;
  isLast: any;
  SessionStatus = SessionStatus;
  sessionApply: any;
  selectedTab: string = 'active';
  public _ = _;
  constructor(
    private socketService: SocketioService,
    private sessionsService: SessionsService,
    private alertService: AlertService,
    public utilityService: UtilityService,
    public dialog: MatDialog,
    public authenticationService: AuthenticationService,
    public userService: UserService,
    public router: Router,
    private _cdr: ChangeDetectorRef
  ) {
    let paramobj = history.state;
    if (paramobj) {
      this.selectedTab = paramobj['selectedTab'];
      delete history.state['selectedTab'];
    }
    if (!this.selectedTab) {
      this.selectedTab = 'active';
    }
    this.setFilteresOfMySessionDependsOnTab(this.selectedTab);
    this.getUserLoanTypeWiseCountDetailsByUserId();
  }

  setFilteresOfMySessionDependsOnTab(selectedTab) {
    this.selectedTab = selectedTab;
    switch (selectedTab) {
      case 'received':
        this.SessionStatusTypeFilter = [SessionStatus.Pending, SessionStatus.AwaitingForApproval];
        this.checkCreatedByUserId = this.authenticationService.currentUserValue._id;
        this.checkCreatedByT = true;
        break;
      case 'sent':
        this.SessionStatusTypeFilter = [SessionStatus.AwaitingForApproval];
        this.checkCreatedByUserId = this.authenticationService.currentUserValue._id;
        this.checkCreatedByT = false;
        break;
      case 'canceled':
        this.SessionStatusTypeFilter = [SessionStatus.Canceled, SessionStatus.Rejected, SessionStatus.RejectedOngoing, SessionStatus.Suspended, SessionStatus.RejectedOngoingWithRefund];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      case 'active':
        this.SessionStatusTypeFilter = [SessionStatus.Accepted];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      case 'paid':
        this.SessionStatusTypeFilter = [SessionStatus.Completed];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      case 'unpaid':
        this.SessionStatusTypeFilter = [SessionStatus.Unpaid];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      case 'inkasso':
        this.SessionStatusTypeFilter = [SessionStatus.Inkasso];
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
      default:
        this.SessionStatusTypeFilter = this.utilityService._.values(SessionStatus);
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        break;
    }
  }

  ngOnInit() {
    (function ($) {
      try {
        $('.tooltip-info').tooltip();
      } catch (ex) {
        //console.log('48', ex.message);
      }
    })(jQuery);
  }

  getSessionsDataFromServer() {
    this.sessionsService.getSessionAllByBorrowerId(this.authenticationService.currentUserValue._id, null, null, null, true, null)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            //alert(JSON.stringify( data));
            let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
            for (let _items in data['data']) {
              let _currentObj = data['data'][_items];
              _keyPairedMapObj[_currentObj._id] = _currentObj
            }
            this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
            this.filterAllSessionsDataForAppliedCurrentUserOnly();

            this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')),'_id')));
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
            this.filterAllSessionsDataForAppliedCurrentUserOnly();

            this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')),'_id')));
            this.loading = false;
          } else {
            this.loading = false;
          }
        },
        error => {
          this.loading = false;
        });

    this.socketService.getCurrentSessionAll().subscribe(_allSessionsData => {
      if (_allSessionsData) {
        let data = { 'data': _allSessionsData };
        let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
        for (let _items in data['data']) {
          let _currentObj = data['data'][_items];
          _keyPairedMapObj[_currentObj._id] = _currentObj
        }
        this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
        this.filterAllSessionsDataForAppliedCurrentUserOnly();

        this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')),'_id')));

      } else {
        //this.allSessionsData = [];
      }
    });
    let _obj2Save = {
      createdBy: this.authenticationService.currentUserValue._id
    };
    this.socketService.getSessionAllByQuery(false, _obj2Save, null);  
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
      panelClass: 'my_session_details_modal',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        sessionObj: _proccessedSessionObj,
        borrowerId: this.authenticationService.currentUserValue._id,
        selectedTab:this.selectedTab
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data) {
          //console.log(`86 :: msc :: Dialog result: ${JSON.stringify(result)}`);
          if (result.data.status && result.data.sessionApply) {
            let _loanApplyId = result.data.sessionApply._id;
            let _status = result.data.status;
            //initiate payment here
            //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
            let _allowed2CreateContactForSessionT = false;
            switch (_status) {
              case SessionStatus.Accepted:
                //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                this.proccedAppliedToSession(sessionObj, _loanApplyId);
                break;
              case SessionStatus.Rejected:
                this.socketService.setSessionApplyUpdateStatus(true, result.data.sessionApply.loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, null);
                break;
            }
          }
          if (result.data.updatedSessionObj) {

            let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");

            _keyPairedMapObj[result.data.updatedSessionObj._id] = result.data.updatedSessionObj;

            this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
            this.filterAllSessionsDataForAppliedCurrentUserOnly();

            this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')),'_id')));

            this._cdr.detectChanges();
          }
        }
      }
    });
  }

  proccedAppliedToSession(sessionObj, loanApplyId) {
    let loanId = sessionObj._id;

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
    if (!loanApplyId) {
      loanApplyId = _proccessedSessionObj.sessionAppliedByBorrowers[0]._id;
    }
    this.router.navigate(['/borrower/borrow-now'], { state: { loanId: loanId, loanApplyId: loanApplyId } });
  }

  check4applyToSession(sessionObj, checkCreatedBySelfT) {
    if (sessionObj && sessionObj.sessionAppliedByBorrowers) {
      if (checkCreatedBySelfT) {
        if (sessionObj.createdBy == this.authenticationService.currentUserValue._id) {
          if (_.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId":{"_id": this.authenticationService.currentUserValue._id }}).length > 0) {
            return true;
          }
        }
      }
    }
    return false;
  }

  returnSessionApplyStatus(sessionApply) {
    let _currentStatus = SessionStatus.Pending;
    try {
      if ((sessionApply.status == SessionStatus.Pending || sessionApply.status == 'Pending' || sessionApply.status == '' || sessionApply.status == null || typeof sessionApply.status == 'undefined')) {
        _currentStatus = SessionStatus.Pending;
      } else {
        _currentStatus = sessionApply.status;
      }
    } catch (ex) { }
    return _currentStatus;
  }

  sessionApplyOngoingCheck(sessionObj, sessionApply) {
    //console.log('179', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalApplySession, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        sessionObj: sessionObj,
        borrowerId: this.authenticationService.currentUserValue._id,
        sessionApply: sessionApply
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
            let _loanId = _currentSessionApply.loanId;
            let _sessionPrice = _currentSessionApply.loanAmount;
            let _loanApplyId = _currentSessionApply._id;
            let _borrowerId = (_currentSessionApply.borrowerId._id || _currentSessionApply.borrowerId);
            let _transactionId = result.data.transactionId;
            let _status = result.data.status;
            _currentSessionApply.status = result.data.status || SessionStatus.Pending;
            this.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);
            switch (_currentSessionApply.status) {
              case SessionStatus.Pending:
                _currentSessionApply.createdBy = this.authenticationService.currentUserValue._id;
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
                this.socketService.setSessionApplyUpdateStatus(true, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
                break;
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
              case SessionStatus.AwaitingForApproval:
                this.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);
                break;
              default:
                break;
            }
          }
        }
      }
      //console.log(`163 :: myc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  getUserLoanTypeWiseCountDetailsByUserId() {
    this.userService.getUserLoanTypeWiseCountDetailsByUserId(this.authenticationService.currentUserValue._id, this.authenticationService.currentUserValue.role)
      .pipe(first())
      .subscribe(
        data => {
          ////console.log('data => ', data)
          if (data && data['success']) {
            this.authenticationService.currentUserLoanTypeWiseCountDetails = data['data'];
          } else {
          }
          this.getSessionsDataFromServer();
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

        });
  }
  usersProfile(userObj) {
    //#region fetch creator id
    this.userService.getUserById(userObj._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //console.log('84', this.authenticationService.currentUserValue);
            const dialogRef = this.dialog.open(PublicProfileComponent, {

              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                userObj: _.cloneDeep(data['data']),
                adminViewT: false
              }
            });

            dialogRef.afterClosed().subscribe(result => {
              //console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
            });

          } else {

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

        });
    //#endregion fetch creator id

  }
  deleteSessionById(sessionId) {
    this.sessionsService.deleteSessionById(sessionId, this.authenticationService.currentUserValue._id)
      .pipe(first())
      .subscribe(
        _allLoanMarketData => {
          if (_allLoanMarketData && _allLoanMarketData['success']) {
            //alert(JSON.stringify( data));
            if (_allLoanMarketData) {
              if (_allLoanMarketData["success"]) {
                let temp_allLoanMarketData = _.mapKeys(this.allSessionsData, '_id')
                if (_allLoanMarketData["data"].isDeleted) {
                  delete temp_allLoanMarketData[_allLoanMarketData["data"]._id];
                  this.alertService.success('Deleted successfully');
                } else {
                  temp_allLoanMarketData[_allLoanMarketData["data"]._id] = _allLoanMarketData["data"];
                  this.alertService.success('Updated successfully');
                }
                this.allSessionsData = _.values(temp_allLoanMarketData);
                this.filterAllSessionsDataForAppliedCurrentUserOnly();

                this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')),'_id')));

                this._cdr.detectChanges();
              }
            }
            this.loading = false;
          } else {
            //alert(JSON.stringify(data['message']));
            this.alertService.error(_allLoanMarketData['message']);
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
