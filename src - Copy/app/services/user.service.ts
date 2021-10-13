﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models';
import { SocketioService } from '../socketio.service';
import { UtilityService } from './utility.service';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
//import { Socket } from 'ngx-socket-io';

@Injectable({ providedIn: 'root' })
export class UserService {
  baseurl = environment.apiUrl + '/';
  constructor(
    private http: HttpClient,
    public socketioService: SocketioService,
    public utilityService: UtilityService
  ) { }

  getAll() {
    var _userType = null;
    //var _result=this.http.post<any>(`http://localhost:4444/api/get/user/getall`,{})
    //.pipe(user => {
    // login successful if there's a jwt token in the response
    //alert(JSON.stringify(user))
    //return user;
    //});
    //alert(JSON.stringify( _result));
    //return this.http.get<User[]>(`http://localhost:4444/api/get/user/getall`, null);
    //return this.http.get<User[]>(`${environment.apiUrl}/users`);
    ////this.socket.emit('user_getall', _userType);
    ////var _result = this.socket.fromEvent<User[]>('user_getall_list');
    //alert(JSON.stringify( _result));
    ////return _result;
  }

  getById(id: number) {
    return this.http.get(this.baseurl + 'users/' + id);
  }

  register(user: User) {
    console.log(user);
    return this.http.post(this.baseurl + 'api/post/user/admin/register', user);
    //return this.http.post(`http://localhost:4444/api/user/register`, user);
    //return this.http.post(`${environment.apiUrl}/api/user/register`, user);
    //return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  sendOtp2user(user: User) {
    return this.http.post(this.baseurl + 'api/post/users/sendotp', user);
  }

  verifyOtpAndRegister(user: User) {
    user["serverUrl"]=environment.serverUrl;
    return this.http.post(this.baseurl + 'api/post/users/verifyotp', user);
  }

  verifyUserAndRegister(user: User) {
    user["serverUrl"]=environment.serverUrl;
    return this.http.post(this.baseurl + 'api/post/users/verifyuserandregister', user);
  }

  resetPasswordSendOtp2user(user: User) {
    return this.http.post(this.baseurl + 'api/post/users/resetpassword/sendotp', user);
  }

  resetPasswordVerifyOtpAndUpdate(user: User) {
    return this.http.post(this.baseurl + 'api/post/users/resetpassword/verifyotp', user);
  }

  update(user: User) {
    return this.http.put(this.baseurl + 'users/' + user._id, user);
  }

  delete(_id: string, _user_id: string) {
    ////this.socket.emit('user_delete_by_id', { _id: _id, user_id: _user_id });
    ////var _result = this.socket.fromEvent<User[]>('user_delete_by_id');
    //alert(JSON.stringify( _result));
    ////return _result;
    //return this.http.delete(`${environment.apiUrl}/users/${id}`);
    return;
  }

  getUserById(id: string) {
    return this.http.post(this.baseurl + 'api/post/user/getbyid', { userId: id });
  }

  updateUserById(user: User) {
    return this.http.post(this.baseurl + 'api/post/user/update/byid', user);
  }

  authenticateAndLoginUser(userName: string, password: string) {
    return this.http.post<any>(this.baseurl + 'api/post/user/admin/login', { userName, password });
  }

  sendMailForContactUs(contactedUsersObj) {
    return this.http.post<any>(this.baseurl + 'api/post/app/contactus', contactedUsersObj);
  }

  sendMailForAnyReason(toEmailId, subject, body) {
    let _message = {
      toEmailId: toEmailId,
      subject: subject,
      body: body
    };
    return this.http.post<any>(this.baseurl + 'api/post/app/sendmail', _message);
  }
  alreadySubscribedForUsersArray: boolean;
  public allAppUsersCollections: any = {};
  proccessAllAppUsersCollections(userIdArray) {
    if (userIdArray) {
      if (!this.alreadySubscribedForUsersArray) {
        this.alreadySubscribedForUsersArray = true;
        this.getAppUsersCollections(userIdArray).subscribe(result => {

          let data = null;
          if (result) {
            if (result['success'] == true || result['success'] == false) {
              data = result['data'];
            } else {
              data = result;
            }
          }
          if (data) {
            this.allAppUsersCollections = this.utilityService._.merge(this.allAppUsersCollections, this.utilityService._.mapKeys(data, '_id'));
          }
        });
      }
    } else {
      this.getAppUsersCollections(userIdArray);
    }
  }

  getAppUsersCollections(userIdArray) {
    this.socketioService.emitEventWithNameAndData('request_user_getall_get_user_id', userIdArray);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_getall_by_user_id');
  }

  addUpdateUserProfilePortFolio(userPortFolio) {
    this.socketioService.emitEventWithNameAndData('request_user_add_update_portfolio_data', userPortFolio);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_add_update_portfolio_data');
  }

  getUserProfilePortFolioById(portFolioId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_id_portfolio_data', portFolioId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_id_portfolio_data');
  }

  getUserProfilePortFolioByUserId(userId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_portfolio_data', userId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_userid_portfolio_data');
  }

  resetExistingUsersPasswordByUserId(_userId, _userName, _password, _password2update, _role) {
    let newUser = {
      _id: _userId,
      userName: _userName,
      password: _password,
      role: _role,
      password2update: _password2update
    };
    this.socketioService.emitEventWithNameAndData('request_user_to_reset_existing_password', newUser);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_to_reset_existing_password');
  }

  addUpdateUserIncomeDetails(userIncomeDetails) {
    this.socketioService.emitEventWithNameAndData('request_user_add_update_user_income_details_data', userIncomeDetails);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_add_update_user_income_details_data');
  }

  getUserIncomeDetailsById(userIncomeDetailsId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_id_user_income_details_data', userIncomeDetailsId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_id_user_income_details_data');
  }

  getUserIncomeDetailsByUserId(userId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_income_details_data', userId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_userid_user_income_details_data');
  }

  addUpdateUserExpenseDetails(userExpenseDetails) {
    this.socketioService.emitEventWithNameAndData('request_user_add_update_user_expense_details_data', userExpenseDetails);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_add_update_user_expense_details_data');
  }

  getUserExpenseDetailsById(userExpenseDetailsId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_id_user_expense_details_data', userExpenseDetailsId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_id_user_expense_details_data');
  }

  getUserExpenseDetailsByUserId(userId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_expense_details_data', userId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_userid_user_expense_details_data');
  }

  returnUsersObjFromLocal(sessionAppliedByBorrowers, lenderTrue: boolean, returnOnlyThisKey, userId: string = null) {
    if (sessionAppliedByBorrowers || userId) {
      if ((this.allAppUsersCollections && this.utilityService._.keys(this.allAppUsersCollections).length > 0) || userId) {
        if (!userId) {
          let _obj = this.utilityService._.first(sessionAppliedByBorrowers);
          if (_obj) {
            if (lenderTrue) {
              userId = _obj.lenderId;
            } else {
              userId = _obj.borrowerId;
            }
          }
        }

        if (userId) {
          let userObj = this.utilityService._.filter(this.allAppUsersCollections, { "_id": userId })[0];
          if (userObj) {
            if (returnOnlyThisKey) {
              return userObj[returnOnlyThisKey];
            } else {
              return userObj;
            }
          }
        }
      }
    }
  }

  updateUsersIncomeVerificationStatus(_documentId: string, _status2update: string, _updatedBy: string) {
    this.socketioService.emitEventWithNameAndData("request_user_update_income_verification", _documentId, _status2update, _updatedBy);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_update_income_verification');
  }

  updateUsersExpenseVerificationStatus(_documentId: string, _status2update: string, _updatedBy: string) {
    this.socketioService.emitEventWithNameAndData("request_user_update_expense_verification", _documentId, _status2update, _updatedBy);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_update_expense_verification');
  }

  getUserIncomeExpenseDetailsByUserId(userId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_income_expense_details_data', userId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_userid_user_income_expense_details_data');
  }

  addUpdateUserBlogs(blogs) {
    this.socketioService.emitEventWithNameAndData('request_user_add_update_blogs_data', blogs);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_add_update_blogs_data');
  }

  getBlogsById(blogsId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_id_blogs_data', blogsId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_id_blogs_data');
  }

  getBlogsByUserId(userId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_blogs_data', userId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_userid_blogs_data');
  }

  updateBlogsStatus(_documentId: string, _status2update: string, _updatedBy: string) {
    this.socketioService.emitEventWithNameAndData("request_user_update_blogs_verification", _documentId, _status2update, _updatedBy);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_update_blogs_verification');
  }

  getBlogsAll(_skip: number) {
    this.socketioService.emitEventWithNameAndData("request_user_getall_blogs", _skip);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_getall_blogs');
  }

  getBlogsAllByQuery(_skip: number) {
    this.socketioService.emitEventWithNameAndData("request_user_getall_blogs", _skip);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_getall_blogs');
  }

  addUpdateUserUserLevels(userLevels) {
    this.socketioService.emitEventWithNameAndData('request_user_add_update_user_levels_data', userLevels);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_add_update_user_levels_data');
  }

  getUserLevelsById(userLevelsId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_id_user_levels_data', userLevelsId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_id_user_levels_data');
  }

  getUserLevelsByUserId(userId) {
    this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_levels_data', userId);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_get_by_userid_user_levels_data');
  }

  updateUserLevelsStatus(_documentId: string, _status2update: string, _updatedBy: string) {
    this.socketioService.emitEventWithNameAndData("request_user_update_user_levels_verification", _documentId, _status2update, _updatedBy);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_update_user_levels_verification');
  }

  getUserLevelsAll(_skip: number) {
    this.socketioService.emitEventWithNameAndData("request_user_getall_user_levels", _skip);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_getall_user_levels');
  }

  getUserLevelsAllByQuery(_skip: number) {
    this.socketioService.emitEventWithNameAndData("request_user_getall_user_levels", _skip);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_getall_user_levels');
  }

  updateUsersDataKeyVerificationStatus(_userId, _verifiedKey, _isVerified) {
    this.socketioService.emitEventWithNameAndData("request_user_internal_key_update_verification", _userId, _verifiedKey, _isVerified);
    return fromEvent<any[]>(this.socketioService.socket, 'response_user_internal_key_update_verification');
  }

}