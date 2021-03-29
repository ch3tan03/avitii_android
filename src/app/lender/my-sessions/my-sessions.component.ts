import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { User, Role, SessionStatus } from '../../models'
import { ModalAppliedSessionDisplay } from 'src/app/lender/lender.component';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { ContactService } from 'src/app/services/contact.service';
import { UtilityService } from 'src/app/services/utility.service';
import { AlertService, UserService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-sessions',
  templateUrl: './my-sessions.component.html',
  styleUrls: ['./my-sessions.component.css']
})
export class MySessionsComponent implements OnInit, OnDestroy {
  SessionStatus = SessionStatus;
  SessionStatusTypeFilter: string[] = [];
  checkCreatedByUserId: string = '';
  checkCreatedByT: Boolean = false;
  currentUser: User;
  allSessionsData: any;
  allSessionsCount: any;
  subscription: Subscription;
  subscription1: Subscription;
  subscription2: Subscription;

  constructor(
    public authenticationService: AuthenticationService,
    private socketService: SocketioService,
    public dialog: MatDialog,
    public contactService: ContactService,
    private utilityService: UtilityService,
    private alertService: AlertService,
    public userService: UserService,
    public router: Router,
  ) {

    this.subscription = this.socketService.getCurrentSessionAll().subscribe(_allSessionsData => {
      if (_allSessionsData) {
        this.allSessionsData = _allSessionsData;
        this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId')));

      } else {
        this.allSessionsData = [];
      }
    });
    this.socketService.getUpdatesForSessionAllByLenderId()
      .subscribe(
        data => {
          if (data && data['success']) {
            let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
            for (let _items in data['data']) {
              let _currentObj = data['data'][_items];
              _keyPairedMapObj[_currentObj._id] = _currentObj
            }
            this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
            //this.loading = false;
          } else {
            //this.loading = false;
          }
        },
        error => {
          //this.loading = false;
        });

    let _obj2Save = {};
    this.socketService.getSessionAllByQuery(false, _obj2Save, null);
    console.log('36 :: called');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  showAppliedToSession(sessionObj) {
    let _proccessedSessionObj = null;
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByBorrowers, { "lenderId": this.authenticationService.currentUserValue._id });
        break;
      default:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        break;
    }


    console.log('214', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalAppliedSessionDisplay, {
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'my_session_details_modal',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        sessionObj: _proccessedSessionObj,
        endUserId: this.authenticationService.currentUserValue._id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data) {
          if (result.data.status && result.data.sessionApply) {
            let _loanId = result.data.sessionApply.loanId;
            let _sessionPrice = result.data.sessionApply.loanAmount;
            let _loanApplyId = result.data.sessionApply._id;
            let _borrowerId = result.data.sessionApply.borrowerId;
            let _transactionId = result.data.transactionId;
            let _status = result.data.status;
            //initiate payment here
            //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
            let _allowed2CreateContactForSessionT = false;
            switch (_status) {
              case SessionStatus.Accepted:
                //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                this.proccedAppliedToSession(sessionObj, _loanApplyId);
                _allowed2CreateContactForSessionT = true;
                break;
              case SessionStatus.Pending:
                //this.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);
                break;
              case SessionStatus.Rejected:
              case SessionStatus.RejectedOngoing:
              case SessionStatus.RejectedOngoingWithRefund:
              case SessionStatus.Suspended:
                //this.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);
                break;
              case SessionStatus.Completed:
                //this.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);
                break;
              case SessionStatus.Active:
              case SessionStatus.Ongoing:
              case SessionStatus.OngoingInitiated:
              case SessionStatus.OngoingAccepted:
                //this.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);
                break;
              default:
                _allowed2CreateContactForSessionT = false;
                break;
            }
            /*
            if (_transactionId) {
              this.socketService.setSessionUpdateStatusForTransaction(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
              if (_allowed2CreateContactForSessionT) {
                let _adminUsersArray = [];
                _adminUsersArray.push(this.authenticationService.currentUserValue._id);
                _adminUsersArray.push(_borrowerId);
                let _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, _proccessedSessionObj.sessionSubject, _loanId, _loanApplyId, _adminUsersArray, null, null);
                this.socketService.sendEventToAddNewContact(_currentContactObj);
              }
            } else {
              //#region other cases where need to update status of session
              switch (_status) {
                case SessionStatus.Pending:
                case SessionStatus.Rejected:
                  break;
                default:
                  if (!_transactionId) {
                    this.socketService.setSessionUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id);
                  }
                  break;
              }
              //#endregion other cases where need to update status of session
            }
            */
          }
        }
      }
      console.log(`129 :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  check4applyToSession(sessionObj, checkCreatedBySelfT) {
    if (sessionObj && sessionObj.sessionAppliedByBorrowers) {
      if (checkCreatedBySelfT) {
        if (sessionObj.createdBy == this.authenticationService.currentUserValue._id) {
          if (_.filter(sessionObj.sessionAppliedByBorrowers, { "lenderId": this.authenticationService.currentUserValue._id }).length > 0) {
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
    this.router.navigate(['/lender/lend-now'], { state: { loanId: loanId, loanApplyId: loanApplyId } });
  }

}
