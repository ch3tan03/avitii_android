import { Injectable } from '@angular/core';
import { SocketioService } from '../socketio.service';
import { UtilityService } from './utility.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { SessionsService } from './sessions.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public appNotifications: any = {};
  public chatNotifications: any = {};
  route: string;
  constructor(
    private socketService: SocketioService,
    private utilityService: UtilityService,
    private location: Location,
    private router: Router,
    private sessionsService: SessionsService,
  ) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
      } else {
        this.route = "Home";
      }
      //console.log("26 :: path :: " + this.route);
    });
  }

  appNotificationsListner() {
    this.socketService.getNewMessageToRoomAll().subscribe(_currentChatObj => {
      if (_currentChatObj) {
        //this.chatNotifications[_currentChatObj._id] = _currentChatObj;
      }
    });

    this.socketService.getAppNotificationWithCustomData().subscribe(data => {
      if (data && data['success']) {
        if (data['data']['_id']) {
          this.appNotifications[data['data']['_id']] = data['data'];
          this.check4Notification(data['data'], true);
        } else {
          if (this.utilityService._.first(this.utilityService._.values(data['data']))) {
            if (this.utilityService._.first(this.utilityService._.values(data['data']))['_id']) {
              this.appNotifications = this.utilityService._.merge(this.utilityService._.mapKeys(this.utilityService._.values(this.appNotifications), '_id'), this.utilityService._.mapKeys(this.utilityService._.values(data['data']), '_id'));
              for (let _items in data['data']) {
                let currentNotificationObj = data['data'][_items];
                this.check4Notification(currentNotificationObj, true);
              }
            }
          }
        }
      } else {

      }
    },
      error => {
      });
  }

  check4Notification(notification, _doNotCleanNotificationT: boolean) {
    if (notification && notification.additionalData) {
      this.socketService.requestUpdateAppNotificationForViewedByUser(notification._id);
      let category = notification.additionalData.category;
      let action = notification.additionalData.action;
      let loanId = notification.additionalData.loanId;
      let loanApplyId = notification.additionalData.loanApplyId;
      switch (category) {
        case 'session_apply':
          switch (action) {
            case 'added_new':
              this.decideActionOnSessionApplyDependsOnCurrentPage(loanId, loanApplyId);
              break;
            case 'updated':
              this.decideActionOnSessionApplyDependsOnCurrentPage(loanId, loanApplyId);
              break;
          }
          break;
        case 'sessions':
          switch (action) {
            case 'added_new':
              this.decideActionOnSessionDependsOnCurrentPage(loanId, loanApplyId);
              break;
            case 'updated':
              this.decideActionOnSessionDependsOnCurrentPage(loanId, loanApplyId);
              break;
          }
          break;
      }
      this.playSound();
      if (!_doNotCleanNotificationT) {
        delete this.appNotifications[notification._id];
      }
    }
  }

  decideActionOnSessionDependsOnCurrentPage(loanId, loanApplyId) {
    let _obj2Save = { "_id": loanId };
    switch (this.route) {
      case '/lender':
        this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
        break;
      case '/lender/search-consulatnt':
        this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
        break;
      case '/lender/mysessions':
        this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
        break;
      case '/lender/sessionview':
        this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
        break;
      case '/borrower':
        this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_byborrowerid');
        break;
      case '/borrower/browse':
        this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
        break;
      case '/borrower/mysessions':
        this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
        break;
      case '/borrower/earnings':
        this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
        break;
      default:
        break;
    }
  }

  decideActionOnSessionApplyDependsOnCurrentPage(loanId, loanApplyId) {
    let _obj2Save = { "_id": loanId };
    switch (this.route) {
      case '/lender':
        this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
        break;
      case '/lender/search-consulatnt':
        this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
        break;
      case '/lender/mysessions':
        this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
        break;
      case '/lender/sessionview':
        this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
        break;
      case '/borrower':
        this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
        break;
      case '/borrower/browse':
        this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
        break;
      case '/borrower/mysessions':
        this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
        break;
      case '/borrower/earnings':
        this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
        break;
      default:
        break;
    }
  }

  playSound() {
    let sound = "../assets/img/sound.mp3";
    sound && (new Audio(sound)).play()
  }
}
