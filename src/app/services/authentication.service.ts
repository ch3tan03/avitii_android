import { Injectable, OnInit, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError, Subject } from 'rxjs';
import { map, delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { User } from 'src/app/models';
import { SocketioService } from '../socketio.service';

import { timeout, catchError } from 'rxjs/operators';

@Directive()
@Injectable({ providedIn: 'root' })
export class AuthenticationService implements OnInit {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    baseurl = environment.apiUrl + '/';
    constructor(private http: HttpClient, private socketService: SocketioService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

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
                    console.log('35', base);
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
                    console.log('35', base);
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

}