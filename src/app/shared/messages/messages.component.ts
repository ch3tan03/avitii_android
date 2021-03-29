declare var $: any;
declare var jQuery: any;
import { Component, OnInit, NgZone, ChangeDetectionStrategy } from '@angular/core';

import { AuthenticationService, AlertService } from 'src/app/services';
import { User, Role } from 'src/app/models';
import { SocketioService } from 'src/app/socketio.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { ContactService } from 'src/app/services/contact.service';
import * as languageCodesEn from 'src/app/models/languageCodesEn.json';
declare const annyang: any;
import Speech from 'speak-tts';
//import translate from 'google-translate';//'google-translate-open-api';
import { Router } from '@angular/router';
declare let window: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MessagesComponent implements OnInit {
  loading = false;
  currentUser: User;
  myContactsList: any[];
  allUsersList: any[];
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
  ) {
    if (languageCodesEn) {
      this.languageCodes = languageCodesEn["eo"];
    }
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.subscription = this.socketService.getNewMessageToRoomAll().subscribe(_currentChatObj => {

      if (!this.allChatListOfRoom) {
        this.allChatListOfRoom = [];
      }
      if (_currentChatObj) {
        this.allChatListOfRoom.push(_currentChatObj);
        $('#chat_messages').animate({
          scrollTop: $('#chat_messages').get(0).scrollHeight
        }, 'fast');

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
    //start tts
    this.speech = new Speech() // will throw an exception if not browser supported
    if (this.speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported")
      this.speech.init({
        'volume': 1,
        'lang': 'en-GB',
        'rate': 1,
        'pitch': 1,
        'voice': 'Google UK English Male',
        'splitSentences': true,
        'listeners': {
          'onvoiceschanged': (voices) => {
            console.log("Event voiceschanged", voices)
          }
        }
      }).then((data) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data)
        this.speechData = data;
        data.voices.forEach(voice => {
          console.log(voice.name + " " + voice.lang)
        });
      }).catch(e => {
        console.error("An error occured while initializing : ", e)
      })
    }
    //end tts
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
              //console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                if (AVTrueChatFalse) {
                  this.joinNewVCSessionWithContact(contactId, data["data"].loanId, data["data"].isGroup);
                } else {
                  this.setCurrentContact(data["data"]);
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
    this.getAllMyContacts();
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

            console.log('141', data["data"]);
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
    console.log('139', data, result);
    */
  }
  getAllUsers() {
    let _data = {};
    this.socketService.getAllUsers(_data).pipe(first()).subscribe(users => {
      this.allUsersList = users;
    });
  }

  sendMessage(_roomId, _message) {
    if (_message != null && typeof _message != 'undefined' && _message != '') {
      this.socketService.sendEventWithMessageChatRoom(_roomId, this.currentUser._id, _message);
      this.message2send = '';
    }
  }

  getAllMyContacts() {
    let _data = {};
    let _currentUserId = this.currentUser._id;
    this.socketService.getAllMyContacts(_currentUserId).pipe(first()).subscribe(users => {
      this.myContactsList = _.filter(_.values(users), function (e) {
        if (e) {
          return (e._id != _currentUserId);
        }
      });
    });
  }

  setCurrentContact(currentContactItem) {

    if (currentContactItem) {
      console.log(window.innerWidth)
      if (window.innerWidth < 768) {
        $('#sidepanel').slideUp();
      }

      if (!currentContactItem.usersColl) {

        this.allChatListOfRoom = null;
        let _adminUsersArray = [];
        _adminUsersArray.push(this.currentUser._id);
        _adminUsersArray.push(currentContactItem.userId ? currentContactItem.userId : currentContactItem._id);
        let _currentContactObj = this.contactService.returnContactJsonData(this.currentUser._id, currentContactItem.firstName, null, null, _adminUsersArray, null, null);

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

  }

  getAllChatByRoomId(_roomId) {
    let _data = {};
    this.socketService.sendEventToGetAllChatOfRoomWithPromise(_roomId).pipe(first()).subscribe(chats => {
      this.allChatListOfRoom = chats;
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
        this.message2send = "Internet is require";
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
    console.log('TrackBy:', item._id, 'at index', index);
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
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          onboundary: event => {
            console.log(
              event.name +
              " boundary reached after " +
              event.elapsedTime +
              " milliseconds."
            );
          }
        }
      })
      .then(data => {
        console.log("Success !", data);
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
    console.log(i);
    console.log(this.speechData.voices[i].lang + this.speechData.voices[i].name);
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
}
