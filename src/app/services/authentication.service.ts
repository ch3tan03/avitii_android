import { Injectable, OnInit, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError, Subject } from 'rxjs';
import { map, first } from 'rxjs/operators';
import * as _ from 'lodash';

import { environment } from 'src/environments/environment';
import { Role, User } from 'src/app/models';
import { SocketioService } from '../socketio.service';

import { timeout, catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { UtilityService } from './utility.service';

@Directive()
@Injectable({ providedIn: 'root' })
export class AuthenticationService implements OnInit {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    baseurl = environment.apiUrl + '/';

    public currentUserLoanTypeWiseCountDetails: any = {};
    public currentUserAdminDashboardDataDetails: any = {};

    public allUserLevelsDataLenders: any = [];
    public allUserLevelsDataBorrower: any = [];

    constructor(
        private http: HttpClient,
        private socketService: SocketioService,
        private userService: UserService,
        private utilityService: UtilityService,
    ) {
        //this.socketService.setupSocketConnectionIfNotExists(this.utilityService.randomString(30, null));
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

        this.socketService.SocketConnectionStatus.pipe(first()).subscribe((status) => {
            if (status) {
                this.socketService.responseRecdSelfUserProfileUpdates()
                    .pipe()
                    .subscribe(
                        data => {
                            if (data && data['success']) {
                                this.sendCurrentUserObj(data["data"]);
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
                        });
                this.fetchAllUserLevelsByUserId();
                this.fetchAllUserLevelsByUpdateEvent();
            }
        })
    }

    returnUserTypeForUserFromSuppliedUserLevel(userType) {
        if (_.keys(this.allUserLevelsDataLenders).lengtg <= 0 || _.keys(this.allUserLevelsDataBorrower)) {
            _.throttle(function () {
                this.fetchAllUserLevelsByUserId();
            }, 5000);
        }
        let allUserLevelsDataMerged = _.union(this.allUserLevelsDataLenders, this.allUserLevelsDataBorrower);
        if (_.keys(allUserLevelsDataMerged).length > 0) {
            let userLevelsName = null;
            if (userType) {
                let userLevelsDataObj = _.filter(allUserLevelsDataMerged, { '_id': userType })[0];
                if (userLevelsDataObj && userLevelsDataObj._id) {
                    userLevelsName = userLevelsDataObj.name;
                } else {
                    userLevelsName = null;
                }
            }
            if (userLevelsName) {
                return userLevelsName;
            }
        }
        return (userType || "").replace("_", " ");
    }

    private currentUserSubjectObject = new Subject<any>();

    sendCurrentUserObj(user: User) {
        this.currentUserSubjectObject.next(user);
        this.currentUserSubject.next(user);
    }

    clearCurrentUserObj() {
        this.currentUserSubjectObject.next();
        this.currentUserSubject.next(null);
    }

    initCurrentUserObj() {
        this.sendCurrentUserObj(JSON.parse(localStorage.getItem('currentUser')));
    }

    getCurrentUserObj(): Observable<any> {
        return this.currentUserSubjectObject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(userName: string, password: string) {
        var _url2use = this.baseurl + 'api/post/user/admin/login'//`${environment.apiUrl}/users/authenticate`;
        return this.http.post<any>(_url2use, { userName, password })
            .pipe(timeout(environment.apiTimeout), map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    let base = this.http.get(this.baseurl + 'session', { headers: { Authorization: `Bearer ${user.token}` } });
                    ////Local storage please rome this 
                    //console.log('35', base);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.sendCurrentUserObj(user);

                }
                return user;
            }));

    }

    autologin4registration(_id: string) {
        var _url2use = this.baseurl + 'api/post/user/admin/login4registration'//`${environment.apiUrl}/users/authenticate`;
        return this.http.post<any>(_url2use, { _id })
            .pipe(timeout(environment.apiTimeout), map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    let base = this.http.get(this.baseurl + 'session', { headers: { Authorization: `Bearer ${user.token}` } });
                    ////Local storage please rome this 
                    //console.log('35', base);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.sendCurrentUserObj(user);

                }
                return user;
            }));

    }

    logout() {
        // remove user from local storage to log user out
        this.socketService.sendSocketDisconnectEvent();
        localStorage.removeItem('currentUser');
        this.clearCurrentUserObj();
    }

    ngOnInit() {
        this.initCurrentUserObj();
    }


    generateReport4SignedContract(LoanObjData: any) {
        var _url2use = this.baseurl + 'api/post/app/report/signed_contract';
        return this.http.post<any>(_url2use, LoanObjData)
            .pipe(timeout(environment.apiTimeout), map(data => {
                // login successful if there's a jwt token in the response

                return data;
            }));

    }

    fetchAllUserLevelsByUpdateEvent() {
        this.userService.getAddUpdateUserUserLevels()
            .pipe(first())
            .subscribe(
                data => {
                    ////console.log('data => ', data)
                    if (data && data['success']) {
                        this.fetchAllUserLevelsByUserId();
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

                });
    }
    
    fetchAllUserLevelsByUserId() {
        this.userService.getUserLevelsAll(null)
            .pipe(first())
            .subscribe(
                data => {
                    ////console.log('data => ', data)
                    if (data && data['success']) {
                        //alert(JSON.stringify( data));

                        this.allUserLevelsDataLenders = this.utilityService.returnSortedObjectArray(_.filter(data["data"], { 'role': Role.Lender }), ['minimumContract']);
                        this.allUserLevelsDataBorrower = this.utilityService.returnSortedObjectArray(_.filter(data["data"], { 'role': Role.Borrower }), ['minimumContract']);

                        //this.allUserLevelsDataLenders = _.filter(data["data"], { 'role': Role.Lender });
                        //this.allUserLevelsDataBorrower = _.filter(data["data"], { 'role': Role.Borrower });
                        //this.alertService.success(data['message'], true);

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

                });
    }

}