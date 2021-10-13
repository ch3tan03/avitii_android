import { Component, OnInit, Inject, OnDestroy, EventEmitter, ChangeDetectorRef, Output, Input } from '@angular/core';
import { AppRouterService } from 'src/app/services/app-router.service';
import { AlertService } from 'src/app/services';
import { SocketioService } from 'src/app/socketio.service';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { Subscription, Observable, timer } from 'rxjs';
import { Role, TransactionActionType } from 'src/app/models';
import { IPayPalConfig } from 'ngx-paypal';
import { PaymentService } from 'src/app/services/payment.service';
import { UtilityService } from 'src/app/services/utility.service';
declare var jitsiplugin: any;
declare let window: any;
declare var JitsiMeetExternalAPI: any;
@Component({
	selector: 'app-meeting-vc',
	templateUrl: './meeting-vc.component.html',
	styleUrls: ['./meeting-vc.component.css']
})

export class MeetingVcComponent implements OnInit, OnDestroy {
	title = 'app';
	domain: string = "host.avitii.com";
	options: any;
	api: any;
	roomName: any;
	jitsiplugin: any;
	currentUser: any;
	loanId: any;
	sessionObj: any;
	loading: Boolean = false;
	showExtendSessionButtonForRole: Boolean = false;
	private subscription: Subscription;
	@Output() TimerExpired: EventEmitter<any> = new EventEmitter<any>();
	@Input() SearchDate: moment.Moment = moment();
	@Input() ElapsTime: number = 60;
	@Input() MinimumTime4Extend: number = 60;
	showExtendSessionButton: Boolean = false;
	searchEndDate: moment.Moment;
	remainingTime: number;
	hours: number;
	minutes: number;
	seconds: number;
	everySecond: Observable<number> = timer(0, 1000);
	public payPalConfig?: IPayPalConfig;
	userInitiatedForPayment: boolean = false;
	loanStartDateTime: number;

	constructor(
		private alertService: AlertService,
		private appRouterService: AppRouterService,
		private socketService: SocketioService,
		private ref: ChangeDetectorRef,
		public payment: PaymentService,
		public utilityService: UtilityService,
	) {
		let paramobj = history.state;
		if (paramobj) {
			this.roomName = paramobj['roomId'];
			this.loanId = paramobj['loanId'];
			this.currentUser = paramobj['currentUser'];
			if (this.currentUser) {
				switch (this.currentUser.role) {
					case Role.Lender:
						this.showExtendSessionButtonForRole = true;
						break;
					default:
						this.showExtendSessionButtonForRole = false;
						break;
				}
			}
			delete history.state['roomId'];
			delete history.state['usersDisplayName'];
			if (this.loanId) {
				this.socketService.getByIdSessions(this.loanId).pipe(first())
					.subscribe(
						data => {
							this.loanStartDateTime = this.utilityService._.now();
							//console.log('data => ', data)
							if (data && data['success']) {
								//alert(JSON.stringify( data));
								this.sessionObj = data['data'];
								let useThisElapsTime = null;
								let _loanEndDateTime = null;
								if (this.sessionObj.sessionsExecutionCollection) {
									for (let item in this.sessionObj.sessionsExecutionCollection) {
										if (this.loanStartDateTime >= this.sessionObj.sessionsExecutionCollection[item].loanEndDateTime) {
											this.alertService.error("You have already exceeded allotated session period.", true);
											this.appRouterService.appRouter(this.currentUser);
											return;
										}
										_loanEndDateTime = this.sessionObj.sessionsExecutionCollection[item].loanEndDateTime;
										useThisElapsTime = (((this.sessionObj.sessionsExecutionCollection[item].loanEndDateTime - this.loanStartDateTime) / 60) / 1000);
									}
								}
								this.extendCurrenSession(true, useThisElapsTime, _loanEndDateTime, null);
								this.startMyVcSession();
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
				return;
			}
		}
		this.startMyVcSession();
	}

	startMyVcSession() {
		this.roomName = (this.roomName ? this.roomName : null);//"va8979"
		if (!this.roomName) {
			this.appRouterService.appRouter(this.currentUser);
			return;
		}
		if (window.cordova) {
			// mobile app case for video calling

			jitsiplugin.loadURL('https://host.avitii.com/' + this.roomName, this.roomName, false, function (data) {
				if (data === "CONFERENCE_WILL_LEAVE") {
					jitsiplugin.destroy(function (data) {
						// call finished
						this.appRouterService.appRouter(this.currentUser);
					}, function (err) {
						console.log(err);
					});
				}
				jitsiplugin.onConferenceTerminated(function (data) {
					this.videoConferenceLeft(data);
				});
			}, function (err) {
				console.log(err);
			});
		} else {
			//web case for video calling
			this.options = {
				roomName: this.roomName,
				// width: 700,
				// height: 470,
				
				userInfo: {
					displayName: this.currentUser["firstName"] || 'Guest'
				},
				parentNode: document.querySelector('#vc_meeting_div'),
				// configOverwrite: { startWithAudioMuted: true },
				// enableClosePage: false,
				// interfaceConfigOverwrite: {

				// 	TOOLBAR_BUTTONS: [
				// 		'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
				// 		'fodeviceselection', 'hangup', 'profile', 'recording',
				// 		'etherpad', 'filmstrip',
				// 		'tileview', 'download',
				// 		'e2ee', 'security'
				// 	],

				// },
			}
			this.api = new JitsiMeetExternalAPI(this.domain, this.options);

			this.api.addEventListeners({
				'incomingMessage': this.incomingMessageListener,
				'outgoingMessage': this.outgoingMessageListener,
				'videoConferenceLeft': this.videoConferenceLeft,
				'suspendDetected': this.suspendDetected
			});
			this.api.on('ended', function (e) {
				//debugger;
			});
			this.api.on('CallEnded', function (e) {
				//debugger;
			});
			this.api.executeCommand('subject', this.sessionObj.sessionSubject);
		}
	}

	incomingMessageListener(object) {
		//debugger;
	}

	outgoingMessageListener(object) {

	}
	suspendDetected(object) {
		//debugger;
		this.dispose();
		//this.alertService.success('VC has been disconnected');
		//this.appRouterService.appRouter(this.currentUser);
		window.location.reload();
	}

	videoConferenceLeft(object) {
		//debugger;
		this.dispose();
		//this.alertService.success('VC has been disconnected');
		//this.appRouterService.appRouter(this.currentUser);
		window.location.reload();
	}
	dispose() {
		//debugger;
	}
	ngOnDestroy() {
		if (this.api) {
			this.api.removeEventListeners(['incomingMessage', 'outgoingMessage', 'videoConferenceLeft', 'suspendDetected']);
			this.api.dispose();
		}
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}

	startTimer() {
		this.subscription = this.everySecond.subscribe((seconds) => {
			var currentTime: moment.Moment = moment();
			this.remainingTime = this.searchEndDate.diff(currentTime)
			this.remainingTime = (this.remainingTime / (1000));
			if (this.remainingTime <= 0) {
				this.alertService.error("Session time limit expired...");
				//this.SearchDate = moment();
				//this.searchEndDate = this.SearchDate.add(this.ElapsTime, "minutes");
				//this.TimerExpired.emit();
				this.showExtendSessionButton = false;
				if (this.api) {
					this.api.removeEventListeners(['incomingMessage', 'outgoingMessage', 'videoConferenceLeft', 'suspendDetected']);
					this.api.dispose();
					this.alertService.error("You are now navigating back.", true);
					this.appRouterService.appRouter(this.currentUser);
					return;
				} else if (window.cordova) {
					jitsiplugin.destroy();
					this.alertService.error("You are now navigating back.", true);
					this.appRouterService.appRouter(this.currentUser);
					return;
				}
			}
			else {
				this.minutes = Math.floor(this.remainingTime / 60);
				if (this.minutes > 59) {
					this.hours = Math.floor((this.remainingTime / 60) / 60);
				} else {
					this.hours = 0;
				}
				this.minutes = Math.floor((this.remainingTime / 60) - (this.hours * 60));
				this.seconds = Math.floor(this.remainingTime - ((this.minutes * 60) + (this.hours * 60 * 60)));
			}
			if (this.minutes <= this.MinimumTime4Extend) {
				this.showExtendSessionButton = true;
			} else {
				this.showExtendSessionButton = false;
			}
			this.ref.markForCheck();
		});
	}

	extendCurrenSession(_initT, useThisElapsTime, _loanEndDateTime, _transactionDetailsObj) {
		this.SearchDate = moment();
		let _duration = ((useThisElapsTime || this.ElapsTime) + (this.minutes || 0));
		this.searchEndDate = this.SearchDate.add(_duration, "minutes");
		if (!_initT) {
			this.TimerExpired.emit();
			this.ref.markForCheck();
			this.alertService.success("Session time limit extended...");
		} else {
			this.startTimer();
		}
		//this.initiatePayment(this.sessionObj, 'asd');
		this.userInitiatedForPayment = false;
		let _loanId = this.loanId;
		let _loanApplyId = this.roomName;
		let _userId = this.currentUser._id;
		let _loanStartDateTime = this.loanStartDateTime;
		_loanEndDateTime = (_loanEndDateTime || Date.parse(this.searchEndDate.toISOString()));
		let _transactionId = null;
		if (_transactionDetailsObj) {
			_transactionId = (_transactionDetailsObj.transactionId || (_transactionDetailsObj.id || _transactionDetailsObj._id));
		}
		let _status = null
		let _updatedOn = this.utilityService._.now();
		this.socketService.sendEventToUpdateCurrentSessionExecutionDetails(_loanId, _loanApplyId, _userId, _loanStartDateTime, _loanEndDateTime, _duration, _status, _updatedOn, _transactionId, TransactionActionType.session_extended, _transactionDetailsObj).pipe(first())
			.subscribe(
				data => {
					//console.log('data => ', data)
					if (data && data['success']) {
						//alert(JSON.stringify( data));
						if (data['data']) {
							if (data['data']["_id"]) {
								this.sessionObj = data['data'];
							} else {
								this.sessionObj = data['data'][0];
							}
						}
						this.loading = false;
					} else {
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

	initiatePayment(sessionObj, _loanApplyId) {
		this.userInitiatedForPayment = true;
		_loanApplyId = (_loanApplyId ? _loanApplyId : this.roomName);
		this.payment.clearCurrentPayPalConfig();
		let _loanId = sessionObj._id;
		let _sessionPrice = (sessionObj.loanAmount || 0.01) / 2;
		let _endUserId = this.currentUser._id;
		//initiate payment here
		let purchaseUnits = [
			{
				amount: {
					custom_id: _loanId,
					currency_code: 'USD',
					value: _sessionPrice,
					breakdown: {
						item_total: {
							currency_code: 'USD',
							value: _sessionPrice
						}
					}
				},
				items: [
					{
						description: _loanApplyId,
						name: TransactionActionType.session_extended + '__' + _loanId,
						quantity: '1',
						category: 'DIGITAL_GOODS',
						unit_amount: {
							currency_code: 'USD',
							value: _sessionPrice,
						},
					}
				]
			}
		];
		this.payment.getCurrentPaymentApproved().pipe(first()).subscribe(details => {
			this.extendCurrenSession(false, null, null, details);
			//this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, transactionId: details.id } });
		});

		this.payPalConfig = this.payment.initConfig(purchaseUnits, TransactionActionType.session_extended, _endUserId);
	}
	ngOnInit() { }
}