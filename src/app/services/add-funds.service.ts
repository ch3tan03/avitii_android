import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
//import { Socket } from 'ngx-socket-io';
//import * as Socket from 'socket.io-client';
import { Funds } from 'src/app/models/funds';
import { SocketioService } from '../socketio.service';
import { fromEvent } from 'rxjs';
import { UtilityService } from './utility.service';
@Injectable({
  providedIn: 'root'
})
export class AddFundsService {
  public allFundsSubject: BehaviorSubject<Funds[]>;
  public allFunds: Observable<Funds[]>;
  public totalFund4currentUser: any = 0;
  public totalSpentOnSessions4currentUser: any = 0;
  alreadySubscribed: boolean = false;
  constructor(public socketioService: SocketioService, public utilityService: UtilityService) {
    this.funds_set_funds([]);
    this.socketioService.emitEventWithNameAndData('fund_getall_list', this.funds_set_funds);
    //this.socket.on('fund_getall_list', this.funds_set_funds);
  }
  getFundsCountForRequestedUser(userId) {
    if (userId) {
      this.funds_get_count_sum(userId).subscribe(result => {
        let data = null;
        if (result) {
          if (result['success'] == true || result['success'] == false) {
            data = result['data'];
          } else {
            data = result;
          }
        }
        if (data) {
          this.totalFund4currentUser = this.utilityService._.round(this.utilityService._.get(data, '0.totalFund4currentUser') || 0, 2);
        }
      });
    }
  }
  getSessionSpentCountForRequestedUser(userId) {
    if (userId) {
      if (!this.alreadySubscribed) {
        this.alreadySubscribed = true;
        this.session_spent_get_count_sum(userId).subscribe(result => {
          let data = null;
          if (result) {
            if (result['success'] == true || result['success'] == false) {
              data = result['data'];
            } else {
              data = result;
            }
          }
          if (data) {
            this.totalSpentOnSessions4currentUser = this.utilityService._.round(this.utilityService._.get(data, '0.totalSpentOnSessions4currentUser') || 0, 2);
          }
        });
      }
    } else {
      this.funds_get_count_sum_call(userId);
    }

  }

  public get allFundsValue(): Funds[] {
    return this.allFundsSubject.value;
  }
  funds_add_new_funds(_funds_obj) {
    this.socketioService.emitEventWithNameAndData('fund_addnew', _funds_obj);


    return fromEvent<Funds[]>(this.socketioService.socket, 'fund_added');
    //return this.socketioService.socket.fromEvent('fund_added');
  }

  checkStatusOfNewFundsAdded() {
    return fromEvent<Funds[]>(this.socketioService.socket, 'fund_added');
  }

  funds_getall_funds(_user_id) {
    this.socketioService.emitEventWithNameAndData('fund_getall', _user_id);
    return fromEvent<Funds[]>(this.socketioService.socket, 'fund_getall_list');
    //return this.socketioService.socket.fromEvent('fund_getall_list');
  }
  funds_set_funds(_funds_obj) {
    this.allFundsSubject = new BehaviorSubject<Funds[]>(_funds_obj);
    this.allFunds = this.allFundsSubject.asObservable();
    this.allFundsSubject.next(_funds_obj);
    //alert(JSON.stringify(this.allFunds));
  }
  funds_delete(_id, _user_id) {
    this.socketioService.emitEventWithNameAndData('fund_delete_by_id', { _id: _id, user_id: _user_id });
    return fromEvent<Funds[]>(this.socketioService.socket, 'fund_getall_list');
    //return this.socketioService.socket.fromEvent('fund_getall_list');
  }

  funds_get_count_sum(_user_id) {
    this.socketioService.emitEventWithNameAndData('request_fund_get_count_sum', _user_id);
    return fromEvent<Funds[]>(this.socketioService.socket, 'response_fund_get_count_sum');
  }

  funds_get_count_sum_call(_user_id) {
    this.socketioService.emitEventWithNameAndData('request_fund_get_count_sum', _user_id);
  }
  session_spent_get_count_sum(_user_id) {
    this.socketioService.emitEventWithNameAndData('request_session_spent_get_count_sum', _user_id);
    return fromEvent<Funds[]>(this.socketioService.socket, 'response_session_spent_get_count_sum');
  }
}
