import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Role, AppRooms } from 'src/app/models';
import { Subject, Observable, fromEvent } from 'rxjs';
import { UtilityService } from './services/utility.service';
import { NotificationService } from './services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  baseurl = environment.apiUrl + '/';
  currentUsersRooms: any[] = [];
  public socket: any;
  onlineUsersList: any;
  sessionCount: any;
  sessionApply: any;
  allSessionsData: any;
  currentUserId: any;
  oldUserLeftRoomData: any;
  newUserJoinedRoomData: any;
  NewMessageToRoomAllData: any;
  OldMessageToRoomAllData: any;
  constructor(
    private utilityService: UtilityService
  ) {
    window["baseurl"] = this.baseurl;
  }
  //#region Session Applied by current user
  public currentAppliedSession = new Subject<any>();

  public sendCurrentAppliedSessionObj(user: any) {
    this.currentAppliedSession.next(user);
  }

  public clearCurrentAppliedSessionObj() {
    this.currentAppliedSession.next();
  }

  public initCurrentAppliedSessionObj() {
    this.sendCurrentAppliedSessionObj({});
  }

  public getCurrentAppliedSessionObj(): Observable<any> {
    return this.currentAppliedSession.asObservable();
  }
  //#endregion Session Applied by current user

  //#region Online User List
  public currentOnlineUsersListObj = new Subject<any>();

  public sendCurrentOnlineUsersListObj(user: any) {
    this.currentOnlineUsersListObj.next(user);
  }

  public clearCurrentOnlineUsersListObj() {
    this.currentOnlineUsersListObj.next();
  }

  public initCurrentOnlineUsersListObj() {
    this.sendCurrentOnlineUsersListObj(this.onlineUsersList);
  }

  public getCurrentOnlineUsersListObj(): Observable<any> {
    return this.currentOnlineUsersListObj.asObservable();
  }
  //#endregion Online User List

  //#region User Role List
  public currentRoleWiseUsersListObj = new Subject<any>();

  public sendCurrentRoleWiseUsersListObj(user: any) {
    this.currentRoleWiseUsersListObj.next(user);
  }

  public clearCurrentRoleWiseUsersListObj() {
    this.currentRoleWiseUsersListObj.next();
  }

  public initCurrentRoleWiseUsersListObj() {
    this.sendCurrentRoleWiseUsersListObj(this.onlineUsersList);
  }

  public getcurrentRoleWiseUsersListObj(): Observable<any> {
    return this.currentRoleWiseUsersListObj.asObservable();
  }
  //#endregion Online User List

  //#region Session Count
  public currentSessionCount = new Subject<any>();

  public sendCurrentSessionCount(user: any) {
    this.currentSessionCount.next(user);
  }

  public clearSessionCount() {
    this.currentSessionCount.next();
  }

  public initCurrentSessionCount() {
    this.sendCurrentSessionCount(this.sessionCount);
  }

  public getCurrentSessionCount(): Observable<any> {
    return this.currentSessionCount.asObservable();
  }
  //#endregion Session Count

  //#region Session Apply
  public currentSessionApply = new Subject<any>();

  public sendCurrentSessionApply(sessionApply: any) {
    this.currentSessionApply.next(sessionApply);
  }

  public clearSessionApply() {
    this.currentSessionApply.next();
  }

  public initCurrentSessionApply() {
    this.sendCurrentSessionApply(this.sessionApply);
  }

  public getCurrentSessionApply(): Observable<any> {
    return this.currentSessionApply.asObservable();
  }
  //#endregion Session Count

  //#region Session All
  public currentSessionAll = new Subject<any>();

  public sendCurrentSessionAll(user: any) {
    this.currentSessionAll.next(user);
  }

  public clearSessionAll() {
    this.currentSessionAll.next();
  }

  public initCurrentSessionAll() {
    this.sendCurrentSessionAll(this.allSessionsData);
  }

  public getCurrentSessionAll(): Observable<any> {
    return this.currentSessionAll.asObservable();
  }
  //#endregion Session All  

  //#region New User Joined Chat Room
  public newUserJoinedRoomAll = new Subject<any>();

  public sendUserJoinedRoomAll(user: any) {
    this.newUserJoinedRoomAll.next(user);
  }

  public clearUserJoinedRoomAll() {
    this.newUserJoinedRoomAll.next();
  }

  public initUserJoinedRoomAll() {
    this.sendUserJoinedRoomAll(this.newUserJoinedRoomData);
  }

  public getUserJoinedRoomAll(): Observable<any> {
    return this.newUserJoinedRoomAll.asObservable();
  }
  //#endregion New User Joined Chat Room

  //#region Old User left Chat Room
  public oldUserLeftRoomAll = new Subject<any>();

  public sendUserLeftRoomAll(user: any) {
    this.oldUserLeftRoomAll.next(user);
  }

  public clearUserLeftRoomAll() {
    this.oldUserLeftRoomAll.next();
  }

  public initUserLeftRoomAll() {
    this.sendUserLeftRoomAll(this.oldUserLeftRoomData);
  }

  public getUserLeftRoomAll(): Observable<any> {
    return this.oldUserLeftRoomAll.asObservable();
  }
  //#endregion Old User left Chat Room

  //#region recd new message in Chat Room
  public NewMessageToRoomAll = new Subject<any>();

  public sendNewMessageToRoomAll(user: any) {
    this.NewMessageToRoomAll.next(user);
  }

  public clearNewMessageToRoomAll() {
    this.NewMessageToRoomAll.next();
  }

  public initNewMessageToRoomAll() {
    this.sendNewMessageToRoomAll(this.NewMessageToRoomAllData);
  }

  public getNewMessageToRoomAll(): Observable<any> {
    return this.NewMessageToRoomAll.asObservable();
  }
  //#endregion recd new message in Chat Room


  //#region recd new message in Chat Room
  public OldMessageToRoomAll = new Subject<any>();

  public sendOldMessageToRoomAll(user: any) {
    this.OldMessageToRoomAll.next(user);
  }

  public clearOldMessageToRoomAll() {
    this.OldMessageToRoomAll.next();
  }

  public initOldMessageToRoomAll() {
    this.sendOldMessageToRoomAll(this.OldMessageToRoomAllData);
  }

  public getOldMessageToRoomAll(): Observable<any> {
    return this.OldMessageToRoomAll.asObservable();
  }
  //#endregion recd new message in Chat Room

  //#region send status of socket connected or disconnected
  public SocketConnectionStatus = new Subject<boolean>();

  public sendSocketConnectionStatus(isConnected: boolean) {
    this.SocketConnectionStatus.next(isConnected);
  }

  public clearSocketConnectionStatus() {
    this.SocketConnectionStatus.next();
  }

  public initSocketConnectionStatus() {
    //this.sendSocketConnectionStatus(false);
  }

  public getSocketConnectionStatus(): Observable<any> {
    return this.SocketConnectionStatus.asObservable();
  }
  //#endregion send status of socket connected or disconnected

  //#region handle events from server in single end point
  setupSocketConnectionIfNotExists(_user_id: string) {
    if (_user_id) {
      try {
        if ((!this.socket) || (this.socket && !this.socket.connected)) {
          this.setupSocketConnection(_user_id);
        }
      } catch (ex) {
        this.setupSocketConnection(_user_id);
      }
    }
  }
  setupSocketConnection(_user_id: string) {
    //console.log("231 :: SOCKET Connection init");
    this.currentUserId = _user_id;
    this.socket = io(environment.SOCKET_ENDPOINT, { query: "user_id=" + _user_id + "" });
    this.socket.once('disconnected', function () {
      //this.sendSocketConnectionStatus(false);
      //console.log("235 :: disconnected");
    });
    this.socket.on('send_user_online_list', (result: any) => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      //console.log('Received a message from websocket service');
      this.sendCurrentOnlineUsersListObj(data);
    });

    this.socket.on('send_user_role_wise_list', (result: any) => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      //console.log('Received a message from websocket service');
      this.sendCurrentOnlineUsersListObj(data);
    });

    this.socket.on('sessions_response_getlength_bysearch', (result: any) => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      //console.log('140 :: Received a message from websocket service');
      this.sendCurrentSessionCount(data);
    });

    this.socket.on('sessions_response_getall_bysearch', (result: any) => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      //console.log('Received a message from websocket service :: sessions_response_getall_bysearch');
      this.sendCurrentSessionAll(data);
    });

    this.socket.on('send_session_apply_by_session_id', (result: any) => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      //console.log('Received a message from websocket service');
      this.sendCurrentSessionApply(data);
    });

    this.socket.on('connected_successfully', (result: any) => {
      this.sendSocketConnectionStatus(true);
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      this.currentUsersRooms = this.utilityService._.union(this.currentUsersRooms, [this.currentUserId, AppRooms.my_app_main_room]);
      for (let _item in this.currentUsersRooms) {
        this.sendEventToJoinChatRoom(this.currentUsersRooms[_item], this.currentUserId);
      }
      //console.log('149 :: Received a message from websocket service :: connected_successfully', data);
    });

    this.socket.on('new_user_joined_room', (result: any) => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      //console.log('161 :: Received a message from websocket service', data);
      this.sendUserJoinedRoomAll(data);
    });

    this.socket.on('user_left_room', (result: any) => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      //console.log('166 :: Received a message from websocket service', data);
      this.sendUserLeftRoomAll(data);
    });

    this.socket.on('new_message_in_room', (result: any) => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      //console.log('166 :: Received a message from websocket service', data);
      this.sendNewMessageToRoomAll(data);
    });

    this.socket.on('get_all_old_chat_of_room', (result: any) => {
      let data = null;
      if (result) {
        if (result['success'] == true || result['success'] == false) {
          data = result['data'];
        } else {
          data = result;
        }
      }
      //console.log('171 :: Received a message from websocket service', data);
      this.sendOldMessageToRoomAll(data);
    });

  }
  //#endregion handle events from server in single end point

  //#region route client event to send server
  sendSocketDisconnectEvent() {
    this.socket.emit('end');
  }

  getUserOnlineList(_sendDataOnlyMeFalseToAllTrue: boolean, _obj2Use4Filter: any, useAndTrueOrFalse: boolean) {
    this.socket.emit('get_user_online_list', _sendDataOnlyMeFalseToAllTrue, _obj2Use4Filter, useAndTrueOrFalse);
  }

  getUserRoleWiseList(_sendDataOnlyMeFalseToAllTrue: boolean, _obj2Use4Filter: any, useAndTrueOrFalse: boolean) {
    this.socket.emit('get_user_by_role_list', _sendDataOnlyMeFalseToAllTrue, _obj2Use4Filter, useAndTrueOrFalse);
  }

  getSessionCountByQuery(_sendDataOnlyMeFalseToAllTrue: boolean, _obj2Save) {
    this.socket.emit('sessions_request_getlength_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
  }
  getByIdSessions(loanId) {
    this.socket.emit("request_sessions_getbyid", loanId);
    return fromEvent<any[]>(this.socket, 'response_sessions_getbyid');
  }
  setSessionApply(_sendDataOnlyMeFalseToAllTrue: boolean, _obj2Save) {
    this.socket.emit('set_session_apply_by_borrower', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
  }

  updateSessionApply(_sendDataOnlyMeFalseToAllTrue: boolean, _obj2Save, _updatedByUserObj) {
    let _updatedBy = _updatedByUserObj._id;
    switch (_updatedByUserObj.role) {
      case Role.Lender:
        this.socket.emit('update_session_apply_by_lender', _sendDataOnlyMeFalseToAllTrue, _obj2Save, _updatedByUserObj, _updatedBy);
        break;
      case Role.Borrower:
        this.socket.emit('update_session_apply_by_borrower', _sendDataOnlyMeFalseToAllTrue, _obj2Save, _updatedByUserObj, _updatedBy);
        break;
    }
  }

  getSessionApplyBySelf() {
    return fromEvent<any[]>(this.socket, 'get_session_apply_by_borrower');
  }

  getSessionApplyBySessionId(_sendDataOnlyMeFalseToAllTrue: boolean, _loanId) {
    this.socket.emit('get_session_apply_by_session_id', _sendDataOnlyMeFalseToAllTrue, _loanId);
  }

  getSessionAllByQuery(_sendDataOnlyMeFalseToAllTrue: boolean, _obj2Save, emitThisEvent: string) {
    this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, false, emitThisEvent);
  }

  setSessionApplyUpdateStatus(_sendDataOnlyMeFalseToAllTrue: boolean, _loanId, _loanApplyId, _status, _updatedBy, _transactionId) {
    let _obj2Save = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      status: _status,
      updatedBy: _updatedBy,
      transactionId: _transactionId
    };
    this.socket.emit('set_session_apply_status_updated_by_lender', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
  }

  setSessionUpdateStatus(_sendDataOnlyMeFalseToAllTrue: boolean, _loanId, _loanApplyId, _status, _updatedBy) {
    let _obj2Save = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      status: _status,
      updatedBy: _updatedBy,
    };
    this.socket.emit('set_session_status_updated_by_lender', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
  }

  setSessionUpdateStatusForTransaction(_sendDataOnlyMeFalseToAllTrue: boolean, _loanId, _loanApplyId, _status, _updatedBy, _transactionId) {
    let _obj2Save = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      status: _status,
      updatedBy: _updatedBy,
      transactionId: _transactionId
    };
    this.socket.emit('set_session_add_transactions_updated_by_lender', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
  }

  sendEventToJoinChatRoom(_roomId, _userId, _roomIdArr: string[] = []) {
    this.currentUsersRooms.push(_roomId);
    this.socket.emit('join_room', { roomId: _roomId, userId: _userId, roomIdArr: _roomIdArr });
    this.requestAppNotificationWithCustomData(_roomId, [_userId]);
  }

  sendEventToLeaveChatRoom(_roomId, _userId) {
    this.currentUsersRooms = this.utilityService._.without(this.currentUsersRooms, _roomId);
    this.socket.emit('leave_room', { roomId: _roomId, userId: _userId });
  }

  sendEventWithMessageChatRoom(_roomId, _userId, _message, createdByUserObj) {
    this.socket.emit('message_in_room', { roomId: _roomId, userId: _userId, message: _message }, createdByUserObj);
  }

  sendEventToGetAllChatOfRoom(_roomId: string, skip: number) {
    this.socket.emit('get_all_old_chat_of_room', { roomId: _roomId, skip: skip });
  }

  sendEventToUpdateChatReceivedByUserOfRoom(_roomId: string, userId: string) {
    this.socket.emit('update_chat_received_by_user_of_room', { roomId: _roomId, userId: userId });
  }

  sendEventToUpdateChatReadByUserOfRoom(_roomId: string, userId: string) {
    this.socket.emit('update_chat_read_by_user_of_room', { roomId: _roomId, userId: userId });
  }

  emitEventWithNameAndData(_eventName, ...args) {
    if (this.socket) {
      this.socket.emit(_eventName, ...args);
    }
  }

  getAllUsers(_data) {
    this.socket.emit("user_getall", _data);
    return fromEvent<any[]>(this.socket, 'user_getall_list');
  }

  getAllMyContacts(_userId: string, role: string, skip: boolean = null) {
    this.socket.emit("request_contact_getall", _userId, role, skip);
    return fromEvent<any[]>(this.socket, 'response_contact_getall');
  }

  getByIdMyContacts(_data) {
    this.socket.emit("request_contact_getbyid", _data);
    return fromEvent<any[]>(this.socket, 'response_contact_getbyid');
  }
  getByIdMyContactsPendingMessages(_roomIdArr, userId) {
    this.socket.emit("request_contact_pending_messages", _roomIdArr, userId);
    return fromEvent<any[]>(this.socket, 'response_contact_pending_messages');
  }
  sendEventToGetAllChatOfRoomWithPromise(_roomId: string, skip: number) {
    this.socket.emit('get_all_old_chat_of_room', { roomId: _roomId, skip: skip });
    return fromEvent<any[]>(this.socket, 'set_all_old_chat_of_room');
  }

  sendEventToSaveCurrentTransaction(_transactiActionType, _transactionId, _userId, _transactionObj) {
    let _data = {
      transactionId: _transactionId,
      transactionActionType: _transactiActionType,
      createdBy: _userId,
      transactionObj: _transactionObj,
    };
    this.socket.emit("recd_new_transaction", _data);
  }

  listenForUpdateStatusOfCurrentTransaction() {
    return fromEvent<any[]>(this.socket, 'added_recd_new_transaction');
  }

  sendEventToSaveCurrentTransactionDetails(_transactiActionType, _transactionId, _userId, _transactionDetailsObj, _amount) {
    let _data = {
      transactionId: _transactionId,
      transactionActionType: _transactiActionType,
      createdBy: _userId,
      transactionDetailsObj: _transactionDetailsObj,
      amount: _amount
    };
    this.socket.emit("recd_new_transaction_details", _data);
  }

  listenForUpdateStatusOfCurrentTransactionDetails() {
    return fromEvent<any[]>(this.socket, 'added_new_transaction_details');
  }

  sendEventToAddNewContact(_contactObj) {
    this.socket.emit('recd_new_contact', _contactObj, this.currentUserId);
    return fromEvent<any[]>(this.socket, 'added_by_self_recd_new_contact');
  }

  listenEventToAddNewContact() {
    return fromEvent<any[]>(this.socket, 'added_recd_new_contact');
  }

  getAllPaymentTransactionDetails(_data) {
    this.socket.emit("request_transaction_details", _data);
    return fromEvent<any[]>(this.socket, 'response_transaction_details');
  }

  getAllBorrowerPaymentTransactionDetails(_data) {
    this.socket.emit("request_borrower_payment_transaction_details", _data);
    return fromEvent<any[]>(this.socket, 'response_borrower_payment_transaction_details');
  }

  getAllUsersWithRequestData(_data, skip, dataTablesParameters) {
    this.socket.emit("request_user_getall", _data, skip, dataTablesParameters);
    return fromEvent<any[]>(this.socket, 'response_user_getall');
  }

  updateUsersVerificationStatus(_userId, _isVerified) {
    this.socket.emit("request_user_update_verification", _userId, _isVerified);
    return fromEvent<any[]>(this.socket, 'response_user_update_verification');
  }

  responseRecdSelfUserProfileUpdates() {
    return fromEvent<any[]>(this.socket, 'response_recd_self_user_profile_updates');
  }

  requestTestTranslation(string2Translate: any, languageCode2Translate: any) {
    this.socket.emit("request_text_translation", string2Translate, languageCode2Translate);
    return fromEvent<any[]>(this.socket, 'response_text_translation');
  }

  getSessionAllTodaysDateAcceptedOnly(_user_id, _role) {
    this.socket.emit("request_sessions_get_all_accepted_today", _user_id, _role);
    return fromEvent<any[]>(this.socket, 'response_sessions_get_all_accepted_today');
  }

  addNewRatingReview(_obj2Save) {
    this.socket.emit("request_rating_addnew", _obj2Save);
    return fromEvent<any[]>(this.socket, 'response_rating_added');
  }

  getByIdRatingReviewe(_ratingId) {
    this.socket.emit("request_rating_getbyid", _ratingId);
    return fromEvent<any[]>(this.socket, 'response_rating_getbyid');
  }

  getByLoanIdRatingReviewe(_obj2Save) {
    this.socket.emit("request_rating_getby_loanid", _obj2Save);
    return fromEvent<any[]>(this.socket, 'response_rating_getby_loanid');
  }

  getByQuerySummaryRatingReviewe(_obj2Save) {
    this.socket.emit("request_get_ratings_summary_by_query", _obj2Save);
    return fromEvent<any[]>(this.socket, 'response_get_ratings_summary_by_query');
  }

  deductAmountFromWallet(_fundsObj, _transactionDetails) {
    this.socket.emit("request_deduct_amount_from_wallet", _fundsObj, _transactionDetails);
    return fromEvent<any[]>(this.socket, 'response_deduct_amount_from_wallet');
  }

  sendEventToUpdateCurrentSessionExecutionDetails(_loanId, _loanApplyId, _userId, _loanStartDateTime, _loanEndDateTime, _duration, _updatedOn, _status, _transactionId, _transactiActionType, _transactionDetailsObj) {
    let _data = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      status: _status,
      updatedBy: _userId,
      loanStartDateTime: _loanStartDateTime,
      loanEndDateTime: _loanEndDateTime,
      duration: _duration,
      updatedOn: _updatedOn,
      transactionId: _transactionId,
      transactionActionType: _transactiActionType,
      transactionDetailsObj: _transactionDetailsObj,
    };
    this.socket.emit("request_session_session_apply_update_for_execution_time", _data);
    return fromEvent<any[]>(this.socket, 'response_session_session_apply_update_for_execution_time');
  }

  public getSessionUpdates() {
    return fromEvent<any[]>(this.socket, 'response_session_updates_for_single_session');
  }

  public getAppNotificationWithCustomData() {
    return fromEvent<any[]>(this.socket, 'response_app_notification_with_custom_data');
  }

  requestAppNotificationWithCustomData(_roomId, notifyRoomExceptUserIds) {
    this.socket.emit("request_app_notification_with_custom_data", _roomId, notifyRoomExceptUserIds);
  }

  requestUpdateAppNotificationForViewedByUser(notificationId) {
    this.socket.emit("request_update_app_notification_for_viewed_by_user", notificationId, this.currentUserId);
  }

  getUpdatesForSessionAllByLenderId() {
    return fromEvent<any[]>(this.socket, 'response_updated_sessions_bylenderid');
  }

  adminPaidToBorrowerUpdateInTransactions(_Obj2Save) {
    this.socket.emit("set_transactions_paid_to_borrower", _Obj2Save);
    return fromEvent<any[]>(this.socket, 'response_transactions_paid_to_borrower');
  }

  deleteUserById(_id: string, _user_id: string) {
    this.socket.emit('user_delete_by_id', { _id: _id, user_id: _user_id });
    return fromEvent<any[]>(this.socket, 'user_delete_by_id');
  }

  sendEventToRejectSessionWithRefundRequest(_loanId, _loanApplyId, _userId, _status) {
    let _data = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      status: _status,
      updatedBy: _userId
    };
    this.socket.emit("request_session_session_apply_reject_with_refund", _data);
    return fromEvent<any[]>(this.socket, 'response_session_session_apply_reject_with_refund');
  }

  sendEventToRejectSessionWithRefundRequestWiUpdateAll(_loanId, _loanApplyId, _userId, _status, _transactionId, amount, cancellationCharges, finalAmount2Refund, _captureId, _id) {
    let _data = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      status: _status,
      updatedBy: _userId,
      transactionId: _transactionId,
      amount: amount,
      cancellationCharges: cancellationCharges,
      finalAmount2Refund: finalAmount2Refund,
      captureId: _captureId,
      _id: _id
    };
    this.socket.emit("request_session_session_apply_reject_with_refund_submit_request_and_update_all", _data);
    return fromEvent<any[]>(this.socket, 'response_session_session_apply_reject_with_refund_submit_request_and_update_all');
  }

  sendEventForLoanAmountPaidByLenderWithUpdateAll(_loanId, _loanApplyId, _userId, _LoanApplyObjCurrent) {
    let _data = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      updatedBy: _userId,
      LoanApplyObjCurrent: _LoanApplyObjCurrent,
      _id: _loanApplyId
    };
    this.socket.emit("request_session_session_apply_loan_amount_paid_by_lender_update_and_broadcast", _data);
    return fromEvent<any[]>(this.socket, 'response_session_session_apply_loan_amount_paid_by_lender_update_and_broadcast');
  }
  sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(_loanId, _loanApplyId, _userId, _LoanApplyObjCurrent) {
    let _data = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      updatedBy: _userId,
      LoanApplyObjCurrent: _LoanApplyObjCurrent,
      _id: _loanApplyId
    };
    this.socket.emit("request_session_session_apply_loan_amount_paid_by_lender_update_and_broadcast", _data);
    return fromEvent<any[]>(this.socket, 'response_session_session_apply_loan_amount_paid_by_lender_update_and_broadcast');
  }
  sendEventForLoanAmountPaidToLenderWithUpdateAll(_loanId: string, _loanApplyId: string, _userId: string, _installmentKey: string, _loanTenureInMonths: number, _LoanApplyObjCurrent: any) {
    let _data = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      updatedBy: _userId,
      LoanApplyObjCurrent: _LoanApplyObjCurrent,
      _id: _loanApplyId,
      installmentKey: _installmentKey,
      loanTenureInMonths: _loanTenureInMonths
    };
    this.socket.emit("request_session_session_apply_loan_amount_paid_to_lender_update_and_broadcast", _data);
    return fromEvent<any[]>(this.socket, 'response_session_session_apply_loan_amount_paid_to_lender_update_and_broadcast');
  }

  sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(_loanId: string, _loanApplyId: string, _userId: string, _installmentKey: string, _loanTenureInMonths: number, _LoanApplyObjCurrent: any) {
    let _data = {
      loanId: _loanId,
      loanApplyId: _loanApplyId,
      updatedBy: _userId,
      LoanApplyObjCurrent: _LoanApplyObjCurrent,
      _id: _loanApplyId,
      installmentKey: _installmentKey,
      loanTenureInMonths: _loanTenureInMonths
    };
    this.socket.emit("request_session_session_apply_loan_amount_paid_to_lender_update_and_broadcast", _data);
    return fromEvent<any[]>(this.socket, 'response_session_session_apply_loan_amount_paid_to_lender_update_and_broadcast');
  }


  addNewUser(obj2use: any) {
    this.socket.emit('request_user_add_new', obj2use);
    return fromEvent<any[]>(this.socket, 'response_user_add_new');
  }

  createNewOrderForPayment(obj2use: any) {
    this.socket.emit('request_order_for_paymentr_add_new', obj2use);
    return fromEvent<any[]>(this.socket, 'response_order_for_paymentr_add_new');
  }

  getLoanMarketDataForBorrower() {
    let emitThisEvent = 'sessions_response_getall_bysearch_from_borrower';
    let _sendDataOnlyMeFalseToAllTrue = false;
    let _obj2Save = {
      isLoanRequested: false,
      status: 'pending',
      isDeleted: false
    };
    this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, true, emitThisEvent);
    return fromEvent<any[]>(this.socket, 'sessions_response_getall_bysearch_from_borrower');
  }

  getLoanMarketDataForLender() {
    let emitThisEvent = 'sessions_response_getall_bysearch_from_lender';
    let _sendDataOnlyMeFalseToAllTrue = false;
    let _obj2Save = {
      isLoanRequested: true,
      status: 'pending',
      isDeleted: false
    };
    this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, true, emitThisEvent);
    return fromEvent<any[]>(this.socket, 'sessions_response_getall_bysearch_from_lender');
  }

  getLoanMarketDataForSearch(_obj2Save, emitThisEvent) {
    emitThisEvent = (emitThisEvent ? emitThisEvent : 'sessions_response_getall_bysearch_from_borrower');
    let _sendDataOnlyMeFalseToAllTrue = false;
    this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, true, emitThisEvent);
    return fromEvent<any[]>(this.socket, 'sessions_response_getall_bysearch_from_borrower');
  }

  getLoanMarketDataById(loanId) {
    let emitThisEvent = 'sessions_response_getall_bysearch_by_id';
    let _sendDataOnlyMeFalseToAllTrue = false;
    let _obj2Save = {
      isDeleted: false,
      _id: loanId
    };
    this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, true, emitThisEvent);
    return fromEvent<any[]>(this.socket, 'sessions_response_getall_bysearch_by_id');
  }

  getSessionApplyCountByQuery(_sendDataOnlyMeFalseToAllTrue: boolean, _obj2Save, useAndTrueOrFalse: boolean, emitThisEvent: string) {
    emitThisEvent = (emitThisEvent ? emitThisEvent : 'sessions_response_get_session_apply_count_by_query');
    this.socket.emit('sessions_request_get_session_apply_count_by_query', _sendDataOnlyMeFalseToAllTrue, _obj2Save, useAndTrueOrFalse, emitThisEvent);
    return fromEvent<any[]>(this.socket, emitThisEvent);
  }

  //#endregion route client event to send server

  sendEventToCheckLastPaymentReturnedSuccessOrFailed(PaymentObj) {
    this.socket.emit("recd_to_check_last_payment_status", PaymentObj);
  }

  listenForUpdateStatusOfLastPayment() {
    return fromEvent<any[]>(this.socket, 'recd_confirmation_of_last_payment_status');
  }

  getSessionApplyAllByQuery(_sendDataOnlyMeFalseToAllTrue: boolean, _obj2Save, emitThisEvent: string, useAndTrueOrFalse: boolean = false) {
    this.socket.emit('session_apply_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, useAndTrueOrFalse, emitThisEvent);
    return fromEvent<any[]>(this.socket, 'session_apply_response_getall_bysearch');
  }

}
