import { Injectable, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '.';
import { User } from '../models';
import { SocketioService } from '../socketio.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService implements OnInit {
  currentUser: User = <User>{};
  myContactsList: any[];
  myPendingMessages: any[];
  allUsersList: any[];
  constructor(
    public socketService: SocketioService,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.socketService.getNewMessageToRoomAll().subscribe(_currentChatObj => {
      //console.log('21 :: Received a message from websocket service', _currentChatObj);
      if (_currentChatObj) {
        this.getAllPendingMessageCountOfContact(_currentChatObj.roomId);
      }
    });
    this.socketService.getOldMessageToRoomAll().subscribe(_currentChatObj => {
      if (_currentChatObj) {
        this.getAllPendingMessageCountOfContact(_.map(_currentChatObj, 'roomId'));
      }
    });
    this.socketService.listenEventToAddNewContact().subscribe(_currentContactObj => {

      if (!this.myContactsList) {
        this.myContactsList = [];
      }
      if (_currentContactObj) {
        this.myContactsList.push(_currentContactObj);
      }
    });
  }

  getAllMyContacts() {
    let _currentUserId = this.currentUser._id;
    this.socketService.getAllMyContacts(_currentUserId, this.currentUser.role).pipe(first()).subscribe(users => {
      this.myContactsList = _.filter(_.values(users), function (e) {
        if (e) {
          return (e._id != _currentUserId);
        }
      });
      this.getAllPendingMessageCountOfContact();
    });
  }

  getAllPendingMessageCountOfContact(_roomIdArr: string[] = null) {
    let _currentUserId = this.currentUser._id;
    if (!_roomIdArr) {
      _roomIdArr = _.map(this.myContactsList, '_id');
    }
    this.socketService.getByIdMyContactsPendingMessages(_roomIdArr, _currentUserId).subscribe(users => {
      if (users && users['success']) {
        this.myPendingMessages = users['data'];
        /*
        totalPendingMessages
        _id
        */
      }
    });
  }

  returnTotalPendingMessagesForUser(contactId: string = null) {
    if (_.keys(this.myPendingMessages).length > 0) {
      let _temp_myPendingMessages = this.myPendingMessages;
      if (contactId) {
        _temp_myPendingMessages = _.filter(_.values(this.myPendingMessages), function (e) {
          if (e) {
            return (e._id == contactId);
          }
        });
      }
      return _.sum(_.map(_temp_myPendingMessages, 'totalPendingMessages'));
    }
    return 0;
  }

  ngOnInit() {
    this.getAllMyContacts();
    this.getAllUsers();
  }

  getAllUsers() {
    let _data = {};
    this.socketService.getAllUsers(_data).pipe(first()).subscribe(users => {
      this.allUsersList = users;
    });
  }

}
