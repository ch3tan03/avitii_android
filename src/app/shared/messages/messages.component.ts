declare var $: any;
declare var jQuery: any;
import { Component, OnInit, NgZone, ChangeDetectionStrategy } from '@angular/core';

import { AuthenticationService, AlertService } from 'src/app/services';
import { User, Role, SessionStatus } from 'src/app/models';
import { SocketioService } from 'src/app/socketio.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { ContactService } from 'src/app/services/contact.service';
import * as languageCodesEn from 'src/app/models/languageCodesEn.json';
declare const annyang: any;
import Speech from 'speak-tts';
import { MatDialog } from '@angular/material/dialog';
//import translate from 'google-translate';//'google-translate-open-api';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';
import { ModalAppliedSessionDisplay } from 'src/app/borrower/borrower.component';
import { MessagesService } from 'src/app/services/messages.service';
declare let window: any;
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MessagesComponent implements OnInit {
  Role = Role;
  loading = false;
  currentUser: User = <User>{};
  currentContact: any;
  message2send: any;
  allChatListOfRoom: any[];
  subscription: Subscription;
  public innerWidth: any;
  //start speech to text vars
  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = false;
  //message2send: any;
  //end speech to text vars
  element_ctrlChatMessage: HTMLElement;
  languageCodes: any;
  //start tts
  tts_textarea: any;
  result = '';
  speech: any;
  speechData: any;
  currentSelectedLanguageCode: any;
  //end tts
  constructor(
    public socketService: SocketioService,
    private authenticationService: AuthenticationService,
    private ngZone: NgZone,
    public contactService: ContactService,
    public router: Router,
    private alertService: AlertService,
    private utilityService: UtilityService,
    public dialog: MatDialog,
    public messagesService: MessagesService
  ) {
    this.messagesService.getAllMyContacts();
    if (languageCodesEn) {
      this.languageCodes = languageCodesEn["eo"];
    }
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.subscription = this.socketService.getNewMessageToRoomAll().subscribe(_currentChatObj => {

      if (!this.allChatListOfRoom) {
        this.allChatListOfRoom = [];
      }
      if (_currentChatObj) {
        if (_currentChatObj.roomId == this.currentContact._id) {
          let mappedAllChatListOfRoom = _.mapKeys(this.allChatListOfRoom, '_id');
          mappedAllChatListOfRoom[_currentChatObj._id] = _currentChatObj;
          this.allChatListOfRoom = _.values(mappedAllChatListOfRoom);

          //this.allChatListOfRoom.push(_currentChatObj);
          $('#chat_messages').animate({
            scrollTop: $('#chat_messages').get(0).scrollHeight
          }, 'fast');
        }
      }
    });
    //start tts
    this.speech = new Speech() // will throw an exception if not browser supported
    if (this.speech.hasBrowserSupport()) { // returns a boolean
      //console.log("speech synthesis supported")
      this.speech.init({
        'volume': 1,
        'lang': 'en-GB',
        'rate': 1,
        'pitch': 1,
        'voice': 'Google UK English Male',
        'splitSentences': true,
        'listeners': {
          'onvoiceschanged': (voices) => {
            //console.log("Event voiceschanged", voices)
          }
        }
      }).then((data) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        //console.log("Speech is ready, voices are available", data)
        this.speechData = data;
        data.voices.forEach(voice => {
          //console.log(voice.name + " " + voice.lang)
        });
      }).catch(e => {
        console.error("An error occured while initializing : ", e)
      })
    }
    //end tts
    this.messagesService.getAllMyContacts();
    this.messagesService.getAllUsers();
    let paramobj = history.state;
    if (paramobj) {
      let contactId = paramobj['contactId'];
      let AVTrueChatFalse = paramobj['AVTrueChatFalse'];
      delete history.state['contactId'];
      delete history.state['AVTrueChatFalse'];
      if (contactId) {
        this.socketService.getByIdMyContacts(contactId)
          .pipe(first())
          .subscribe(
            data => {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                if (AVTrueChatFalse) {
                  this.joinNewVCSessionWithContact(contactId, data["data"].loanId, data["data"].isGroup);
                } else {
                  this.setCurrentContact(data["data"]);
                }

                let existingData = _.filter(this.messagesService.myContactsList, { _id: data["data"]["_id"] });
                if (existingData.length <= 0) {
                  this.messagesService.myContactsList.push(existingData);
                }
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
    }
  }

  returnTifCurrentContactIsNullOrEmpty(currentContact) {
    if (currentContact && currentContact.roomId) {
      return false;
    }
    return true;
  }

  returnTifUserIsInCurrenrContact(_userId) {
    if (this.currentContact && this.currentContact.userId && _userId) {
      if (this.currentContact.userId == _userId) {
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
    this.translateTextInOtherLanguage('', '', false, null);
  }

  async translateTextInOtherLanguage(string2Translate, languageCode2Translate, sendDirect2ChatT, chatId): Promise<any> {
    if (!string2Translate || string2Translate == '' || string2Translate == null) {
      return;
    }
    languageCode2Translate = (languageCode2Translate ? languageCode2Translate : 'en');
    this.socketService.requestTestTranslation(string2Translate, languageCode2Translate)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {

            //console.log('141', data["data"]);
            if (chatId) {
              this.element_ctrlChatMessage = document.getElementById(chatId) as HTMLElement;
              this.element_ctrlChatMessage.innerText = data["data"].translatedText;
            }
            if (sendDirect2ChatT) {
              return data["data"];
            }
          } else {
            if (sendDirect2ChatT) {
              return null;
            }
          }
        },
        error => {
          let errorMsg2show = "";
          //this.PaymentTransactionDetailsArray = [];
          try {
            if (error && error.error && error.error.message) {
              errorMsg2show = error.error.message;
            } else if (error && error.message) {
              errorMsg2show = error.message;
            } else {
              errorMsg2show = error;
            }
          } catch (ex) { }
          if (sendDirect2ChatT) {
            return null;
          }
        });
    /*
    const result = await translate(`I'm fine.`, {
      tld: "com",
      to: "hi",
      browers: true

    }).catch((e) => {
      console.error("141 :: An error occured while translatings : ", e)
    });
    let data = null;
    if (result && result.data) {
      data = result.data[0];
    }
    //console.log('139', data, result);
    */
  }

  sendMessage(_roomId, _message) {
    if (_message == null || typeof _message == 'undefined' || _message == '' || !_message) {
      return;
    }
    switch (this.currentUser.role) {
      case Role.Admin:
        //NO ACTION HERE
        break;
      default:
        //#region filter message with reserved word and make it with star
        let wordsArr2filterFromMessage = [];
        let _copiedMessage = _message.toString().toLowerCase();
        for (let index in wordsArr2filterFromMessage) {
          let word2find = wordsArr2filterFromMessage[index];
          let _temp_message = _message;
          if (_copiedMessage.indexOf(word2find) > -1) {
            let _wordLength = word2find.length;
            let _startIndex = _copiedMessage.indexOf(word2find);
            let _endIndex = _startIndex + _wordLength;
            let _maskedWord2Replace = this.utilityService.createString('*', _wordLength);
            let _word2replace = _message.substr(_startIndex, _wordLength);
            _message = _temp_message.replaceAll(_word2replace, _maskedWord2Replace);
          }
        }
        //#endregion filter message with reserved word and make it with star
        let _copiedMessage3 = _message.toString().toLowerCase().replaceAll(' ', '');

        if (_copiedMessage3.match(/[0-9]{8}/)) {
          this.alertService.error("Phone number is not allowed in message");
          return;
        }


        //#region filter message with reserved word and make it with star
        let wordsArr2restrictFromMessage = ['@', '(a)', '-a-', '.com', '.dk', 'messenger', 'facebook', 'whatsapp', 'wechat', 'skype', 'mobile', 'emailid', 'mob', 'email', 'gmail', 'trunk', 'text message', 'text-message', 'message', 'yahoo', 'outlook'];
        let _copiedMessage2 = _message.toString().toLowerCase();
        for (let index in wordsArr2restrictFromMessage) {
          let word2find = wordsArr2restrictFromMessage[index];
          if (_copiedMessage2.indexOf(word2find) > -1) {
            this.alertService.error("Message contains restricted word '" + word2find + "'");
            return;
          }
        }
        //#endregion filter message with reserved word and make it with star

        break;
    }

    if (_message != null && typeof _message != 'undefined' && _message != '') {
      let createdByUserObj = {
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.firstName,
        emailAddress: this.currentUser.emailAddress,
        selfProfileUrl: this.currentUser.selfProfileUrl
      }
      this.socketService.sendEventWithMessageChatRoom(_roomId, this.currentUser._id, _message, createdByUserObj);
      this.message2send = '';
    }
  }

  setCurrentContact = _.debounce(function (currentContactItem) {
    this.allChatListOfRoom = [];
    if (currentContactItem) {
      //console.log(window.innerWidth)
      if (window.innerWidth < 768) {
        $('#sidepanel').slideUp();
      }

      if (!currentContactItem.usersColl) {

        this.allChatListOfRoom = null;
        let _adminUsersArray = [];
        _adminUsersArray.push(this.currentUser._id);
        _adminUsersArray.push(currentContactItem.userId ? currentContactItem.userId : currentContactItem._id);
        let _currentContactObj = this.contactService.returnContactJsonData(this.currentUser._id, currentContactItem.firstName, null, null, _adminUsersArray, null, null, null, false);

        this.socketService.sendEventToAddNewContact(_currentContactObj).pipe(first()).subscribe(result => {

          if (result) {
            if (result['success'] == true || result['success'] == false) {
              this.currentContact = result['data'];
            } else {
              this.currentContact = result;

            }
          }
          try {
            if (this.currentContact) {
              if (!this.currentContact._id && this.currentContact[0]._id) {
                this.currentContact = this.currentContact[0];
              }
            }
          } catch (ex) { }
          this.socketService.sendEventToJoinChatRoom(this.currentContact._id, this.currentUser._id);
          this.getAllChatByRoomId(this.currentContact._id);
        });

      } else {
        this.currentContact = currentContactItem;
        this.socketService.sendEventToJoinChatRoom(this.currentContact._id, this.currentUser._id);
        this.getAllChatByRoomId(this.currentContact._id);

      }
    }

  }, 500, { leading: true, trailing: false });

  getAllChatByRoomId(_roomId) {
    let _allChatListOfRoomFiltered = _.filter(this.allChatListOfRoom, { roomId: _roomId });
    let _data = {};
    let skip = _.keys(_allChatListOfRoomFiltered).length;
    this.socketService.sendEventToGetAllChatOfRoomWithPromise(_roomId, skip).pipe(first()).subscribe(chats => {
      if (_.keys(chats).length > 0) {
        if (chats[0].roomId == this.currentContact._id) {
          if (_.keys(this.allChatListOfRoom).length > 0) {
            this.allChatListOfRoom = _.union(this.allChatListOfRoom, chats);
          } else {
            this.allChatListOfRoom = _.union(this.allChatListOfRoom, chats);
          }
        }
      } else {
        this.allChatListOfRoom = _.union(this.allChatListOfRoom, chats);
      }
      console.log('367 :: ' + this.currentContact._id + ' :: ' + _.keys(this.allChatListOfRoom).length + ' :: ' + _.keys(chats).length);
      setTimeout(() => {
        $('#chat_messages').animate({
          scrollTop: $('#chat_messages').get(0).scrollHeight
        }, 'fast');
      }, 10);
    });
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  //start speech to text methos
  initializeVoiceRecognitionCallback(): void {
    annyang.addCallback('error', (err) => {
      if (err.error === 'network') {
        this.message2send = "Please check your internet connection.";
        annyang.abort();
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      } else if (this.message2send === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
        annyang.abort();
      }
    });

    annyang.addCallback('soundstart', (res) => {
      this.ngZone.run(() => this.voiceActiveSectionListening = true);
    });

    annyang.addCallback('end', () => {
      if (this.message2send === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
        annyang.abort();
      }
    });

    annyang.addCallback('result', (userSaid) => {
      this.ngZone.run(() => this.voiceActiveSectionError = false);

      let queryText: any = userSaid[0];

      annyang.abort();

      this.message2send = queryText;

      this.ngZone.run(() => this.voiceActiveSectionListening = false);
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
    });
  }

  startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.message2send = undefined;

    if (annyang) {
      let commands = {
        'demo-annyang': () => { }
      };

      annyang.addCommands(commands);

      this.initializeVoiceRecognitionCallback();

      annyang.start({ autoRestart: false });
    }
  }

  closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceActiveSectionListening = false;
    this.message2send = undefined;

    if (annyang) {
      annyang.abort();
    }
  }

  trackByFn(index, item) {
    //console.log('TrackBy:', item._id, 'at index', index);
    return (item._id);
  }
  //end speech to text methos


  //start tts methods
  start(text_to_speak) {
    this.speech
      .speak({
        text: text_to_speak ? text_to_speak : this.tts_textarea,
        queue: false,
        listeners: {
          onstart: () => {
            //console.log("Start utterance");
          },
          onend: () => {
            //console.log("End utterance");
          },
          onresume: () => {
            //console.log("Resume utterance");
          },
          onboundary: event => {
            //console.log(event.name +" boundary reached after " + event.elapsedTime + " milliseconds.");
          }
        }
      })
      .then(data => {
        //console.log("Success !", data);
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
  }
  pause() {
    this.speech.pause();
  }
  resume() {
    this.speech.resume();
  }

  goback_to_contacts() {
    $('#sidepanel').slideDown();
  }

  setLanguage(i) {
    //console.log(i);
    //console.log(this.speechData.voices[i].lang + this.speechData.voices[i].name);
    this.speech.setLanguage(this.speechData.voices[i].lang);
    this.speech.setVoice(this.speechData.voices[i].name);
  }

  //end tts methods
  joinNewVCSessionWithContact(_roomId, loanId, isGroup) {
    if (!_roomId) {
      this.alertService.error("Requested Meeting/Contact not found");
      return;
    }
    if (isGroup && !loanId) {
      loanId = _roomId.split('__')[0];
    }
    let _parentRouting = '';
    switch (this.currentUser.role) {
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
    this.router.navigate(['/' + _parentRouting + '/vcmeet'], { state: { roomId: _roomId, currentUser: this.currentUser, loanId: loanId } });
  }

  returnNameOfAnyNonSelfUserFromList(userColl: any, concatThisSubString: string = '', mainString: string = '', isGroup) {
    if (_.keys(userColl).length == 2) {
      for (let _item in userColl) {
        let usersObj = userColl[_item];
        if (usersObj && usersObj._id && usersObj._id != this.currentUser._id) {
          if (isGroup) {
            return (usersObj.firstName || '') + (concatThisSubString || '') + (mainString || '');
          } else {
            return (usersObj.firstName || '');
          }
        }
      }
    }
    return (mainString || '');
  }

  showAppliedToSessionCallMediator(loanApplyId) {
    let _data = {
      '_id': loanApplyId
    };
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _data["borrowerId"] = this.authenticationService.currentUserValue._id;
        break;
      case Role.Lender:
        _data["lenderId"] = this.authenticationService.currentUserValue._id;
        break;
      default:
        break;
    }
    this.socketService.getSessionApplyAllByQuery(false, _data, null, true)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            let sessionObj = _.first(data["data"]);
            if (sessionObj) {
              this.showAppliedToSession(sessionObj);
            }
            this.loading = false;
          } else {
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

  showAppliedToSession(sessionObj) {
    let _proccessedSessionObj = null;
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByBorrowers, { "lenderId": { "_id": this.authenticationService.currentUserValue._id } });
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
                this.socketService.setSessionApplyUpdateStatus(true, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
                break;
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
              case SessionStatus.AwaitingForApproval:
                //this.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);
                break;
              default:
                _allowed2CreateContactForSessionT = false;
                break;
            }
          }
          if (result.data.updatedSessionObj) {

          }
        }
      }
      //console.log(`129 :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  proccedAppliedToSession(sessionObj, loanApplyId) {
    let loanId = sessionObj._id;

    let _proccessedSessionObj = null;
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        _proccessedSessionObj.sessionAppliedByBorrowers = _.filter(sessionObj.sessionAppliedByBorrowers, { "borrowerId": { "_id": this.authenticationService.currentUserValue._id } });
        break;
      default:
        _proccessedSessionObj = _.cloneDeep(sessionObj);
        break;
    }
    if (!loanApplyId) {
      loanApplyId = _proccessedSessionObj.sessionAppliedByBorrowers[0]._id;
    }
    switch (this.authenticationService.currentUserValue.role) {
      case Role.Borrower:
        this.router.navigate(['/borrower/borrow-now'], { state: { loanId: loanId, loanApplyId: loanApplyId } });
        break;
      default:
        this.router.navigate(['/lender/lend-now'], { state: { loanId: loanId, loanApplyId: loanApplyId } });
        break;
    }
  }

  updateChatReceivedByUser(_roomId: string, userId: string = this.authenticationService.currentUserValue._id) {
    if (this.allChatListOfRoom) {
      let chatMessage = _.filter(_.values(this.allChatListOfRoom), function (e) {
        if (e) {
          return (e._id == _roomId && e.userId != userId);
        }
      })[0];
      if (chatMessage) {
        if (chatMessage && chatMessage.messageReceivedUsersColl && chatMessage.messageReceivedUsersColl[userId]) {
          return;
        }
      } else {
        return;
      }
    }
    this.socketService.sendEventToUpdateChatReceivedByUserOfRoom(_roomId, userId);
  }

  updateChatReadByUser(_roomId: string, userId: string = this.authenticationService.currentUserValue._id) {
    if (this.allChatListOfRoom) {
      let chatMessage = _.filter(_.values(this.allChatListOfRoom), function (e) {
        if (e) {
          return (e._id == _roomId && e.userId != userId);
        }
      })[0];
      if (chatMessage) {
        if (chatMessage && chatMessage.messageReadUsersColl && chatMessage.messageReadUsersColl[userId]) {
          return;
        }
      } else {
        return;
      }
    }
    this.socketService.sendEventToUpdateChatReadByUserOfRoom(_roomId, userId);
  }

  messageViewed(chatId, message) {
    this.updateChatReadByUser(chatId);
  }
  lastScreenReached(message) {
    if (message == 'last-message-in-app') {
      console.log('748', _.keys(this.allChatListOfRoom).length);
      this.getAllChatByRoomId(this.currentContact._id);
    }
  }

  messageNotViewed(chatId, message) {
    //debugger;
  }

  returnNameOfMessageSender(_chat: any, returnEmailIdT: boolean = false) {
    try {
      if (_chat && _chat.createdByUserObj) {
        if (_chat.userId != this.currentUser._id) {
          switch (_chat.createdByUserObj.role) {
            case Role.Admin:
              return 'Admin';
              break;
            default:
              if (returnEmailIdT) {
                return (_chat.createdByUserObj ? ((_chat.createdByUserObj.emailAddress || '')) : '');
              } else {
                return (_chat.createdByUserObj ? ((_chat.createdByUserObj.firstName || '') + ' ' + (_chat.createdByUserObj.lastName || '')) : '');
              }
              break;
          }
        }
      }
    } catch (ex) {
    }
    return '';
  }

  usersProfile(_userObj, userColl) {
    let adminViewT = false;
    switch (this.currentUser.role) {
      case Role.Admin:
        adminViewT = true;
        break;
      default:
        break;
    }
    if (!_userObj) {
      if (_.keys(userColl).length == 2) {
        for (let _item in userColl) {
          let usersObj = userColl[_item];
          if (usersObj && usersObj._id && usersObj._id != this.currentUser._id) {
            //return (usersObj.firstName || '') + (concatThisSubString || '') + (mainString || '');
            _userObj = usersObj;
          }
        }
      }
    }

    if (!_userObj) {
      return;
    }
    //console.log('95', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(PublicProfileComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {
        userObj: _userObj,
        adminViewT: adminViewT
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      //console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }

  lastUserReached(message) {
    if (message == 'last-user-in-app') {
      console.log('812', _.keys(this.messagesService.myContactsList).length);
      this.messagesService.getAllMyContacts();
    }
  }

}
