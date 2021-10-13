
import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Role, SessionStatus } from 'src/app/models';
import { AuthenticationService, AlertService } from 'src/app/services';
import { SessionsService } from 'src/app/services/sessions.service';
import * as _ from 'lodash';
import { UtilityService } from 'src/app/services/utility.service';
import { MatDialog } from '@angular/material/dialog';
/*import { ServiceTypesService } from 'src/app/services/service-types.service';*/
import { first } from 'rxjs/operators';
import { ModalApplySession, ModalAppliedSessionDisplay } from '../borrower.component';
import { SocketioService } from 'src/app/socketio.service';
import { AddFundsService } from 'src/app/services/add-funds.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MessagesService } from 'src/app/services/messages.service';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {

  currentUser: User;
  allInstantSessionsData: any[];

  public submitted: boolean;
  loading: boolean;
  allSessionsData: any;
  allSessionsCount: number;
  ParentServicesTypes: any = null;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private sessionsService: SessionsService,
    public dialog: MatDialog,
    /*private serviceTypesService: ServiceTypesService,*/
    public socketService: SocketioService,
    public fundService: AddFundsService,
    public utilityService: UtilityService,
    public notificationService:NotificationService,
    public messagesService:MessagesService
  ) {
    this.messagesService.getAllMyContacts();
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      if(!this.currentUser){
        return;
      }
      fundService.getFundsCountForRequestedUser(this.currentUser._id);
      fundService.getSessionSpentCountForRequestedUser(this.currentUser._id);
      this.sessionsService.getSessionAllWithSessionApply(this.authenticationService.currentUserValue._id)
        .subscribe(
          data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              this.allSessionsData = data['data'];
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

    });

    this.sessionsService.getSessionInstastTypeAdded()
      .subscribe(
        data => {
          if (data && data['success']) {
            if (!this.allInstantSessionsData) {
              this.allInstantSessionsData = [];
            }
            let _currentSessionObj = data['data'];
            let _existingSessionObjKryPair = _.mapKeys(_.values(this.allInstantSessionsData), '_id');
            if (_.keys(_existingSessionObjKryPair).length > 0) {
              delete _existingSessionObjKryPair[_currentSessionObj._id];
            }
            _existingSessionObjKryPair[_currentSessionObj._id] = _currentSessionObj;
            this.allInstantSessionsData = _.values(_existingSessionObjKryPair);
          } else {
            //this.alertService.error(data['message']);
          }
        },
        error => {
        });

    this.socketService.getCurrentAppliedSessionObj()
      .subscribe(
        data => {
          if (data) {
            if (!this.allInstantSessionsData) {
              this.allInstantSessionsData = [];
            }
            let _existingSessionObjKryPair = _.mapKeys(_.values(this.allInstantSessionsData), '_id');
            delete _existingSessionObjKryPair[data];
            this.allInstantSessionsData = _.values(_existingSessionObjKryPair);
          } else {
            //this.alertService.error(data['message']);
          }
        },
        error => {
        });
    this.socketService.getSessionUpdates().subscribe(data => {
      if (data && data['success']) {
        if (!this.allSessionsData) {
          this.allSessionsData = [];
        }
        let _currentSessionObj = data['data'];
        let _existingSessionObjKryPair = _.mapKeys(_.values(this.allSessionsData), '_id');
        if (_.keys(_existingSessionObjKryPair).length > 0) {
          delete _existingSessionObjKryPair[_currentSessionObj._id];
        }
        _existingSessionObjKryPair[_currentSessionObj._id] = _currentSessionObj;
        this.allSessionsData = _.values(_existingSessionObjKryPair);
      } else {
        //this.alertService.error(data['message']);
      }
    },
      error => {
      });
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
      if (_.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id }).length > 0) {
        return true;
      }
    }
    return false;
  }

  navigate2State(state) {
    state = (state ? state : '/logout');
    this.router.navigate([state]);
  }

  applyToSession(sessionObj) {
    //console.log('179', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(ModalApplySession, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
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

            if (!this.allInstantSessionsData) {
              this.allInstantSessionsData = [];
            }
            let _existingSessionObjKryPair = _.mapKeys(_.values(this.allInstantSessionsData), '_id');
            if (_.keys(_existingSessionObjKryPair).length > 0) {
              delete _existingSessionObjKryPair[_currentSessionApply.loanId];
            }
            this.allInstantSessionsData = _.values(_existingSessionObjKryPair);

            if (!_currentSessionApply._id) {
              _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
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
              case SessionStatus.AwaitingForApproval:
                this.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);
                break;
              default:
                break;
            }
          }
        }
      }
      //console.log(`211 :: headerc :: Dialog result: ${JSON.stringify(result)}`);
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


    //console.log('214', this.authenticationService.currentUserValue);
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
      //console.log(`238 :: hc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }


  logout() {
    this.router.navigate(['/logout']);
  }

  showAlert() {
    alert("Sorry, you can not create a loan request untill 30th October.")
  }

  ngAfterViewInit(): void {
    (function ($) {
      "use strict";


      $('.filter-btn').on('click', function (e) {
        $('.collection-filter').css("left", "-15px");
      });
      $('.filter-back').on('click', function (e) {
        $('.collection-filter').css("left", "-365px");
        $('.sidebar-popup').trigger('click');
      });

      //toggle show
      $('.toggle-nav').on('click', function (e) {
        $('.navbar').css("right", "0px");
        $('.navbar_side_panel').show();
      });
      $('.btn-back').on('click', function (e) {
        $('.navbar').css("right", "-350px");
        $('.navbar_side_panel').hide();
      });
      function checkWidth() {
        var windowSize = $(window).width();
        if (windowSize <= 991) {
          $(".dropdown").click(function () {
            $(".dropdown ~ul").not($(this).siblings()).hide("fast");
            $(".dropdown ~.mega-menu-container").not($(this).siblings()).hide("fast");
            $(this).siblings().slideToggle("fast");
          });
        }
        else if (windowSize >= 991) {
          $(".navbar > ul > li.mega-menu").mouseover(function () {
            $(this).children().css("display", "block");
          });
          $(".navbar > ul > li.mega-menu").mouseout(function () {
            $(this).children().last().css("display", "none");
          });

          $(".sub-menu").mouseover(function () {
            $(this).children().css("display", "block")
          });
          $(".sub-menu").mouseout(function () {
            $(this).children().last().css("display", "none")
          });
        }
      }
      checkWidth();
      $(window).resize(checkWidth);
    })(jQuery);
  }

}
