import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Session } from 'src/app/models/';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { SocketioService } from '../socketio.service';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  constructor(public socketioService: SocketioService) {
  }

  addNewSession(session: Session) {
    this.socketioService.emitEventWithNameAndData('sessions_request_addnew', session);
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_added');
  }

  getSessionInstastTypeAdded() {
    return fromEvent<Session[]>(this.socketioService.socket, 'instant_sessions_response_added');
  }

  
  getSessionNewAdded() {
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_added');
  }
  getSessionUpdated() {
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_updatebyid');
  }
  getSessionAll() {
    this.socketioService.emitEventWithNameAndData('sessions_request_getall', {});
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_getall');
  }

  getSessionById(id: string) {
    this.socketioService.emitEventWithNameAndData('sessions_request_getbyid', { loanId: id });
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_getbyid');
  }


  getSessionAllWithSessionApply(_borrowerId: string) {
    this.socketioService.emitEventWithNameAndData('sessions_request_withappliedsessions', { borrowerId: _borrowerId });
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_withappliedsessions');
  }

  updateSessionById(session: Session) {
    this.socketioService.emitEventWithNameAndData('sessions_request_updatebyid', session);
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_updatebyid');
  }
  
  deleteSessionById(sessionId:string, _deletedBy:string) {
    this.socketioService.emitEventWithNameAndData('sessions_request_deletebyid', sessionId, _deletedBy);
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_deletebyid');
  }

  getSessionAllByService(services: string, location: string, sessionSubject: string, loanDescription: string, useAndTrueOrFalse: boolean) {
    let _data2search = { services: services, location: location, sessionSubject: sessionSubject, loanDescription: loanDescription };
    if (!services) {
      delete _data2search.services;
    }
    if (!location) {
      delete _data2search.location;
    }
    if (!sessionSubject) {
      delete _data2search.sessionSubject;
    }
    if (!loanDescription) {
      delete _data2search.loanDescription;
    }
    this.socketioService.getSessionAllByQuery(false, { data2search: _data2search, useAndTrueOrFalse: useAndTrueOrFalse }, null);
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_getall_bysearch');
  }

  getSessionLengthByService(services: string, location: string, sessionSubject: string, loanDescription: string, useAndTrueOrFalse: boolean) {
    let _data2search = { services: services, location: location, sessionSubject: sessionSubject, loanDescription: loanDescription };
    if (!services) {
      delete _data2search.services;
    }
    if (!location) {
      delete _data2search.location;
    }
    if (!sessionSubject) {
      delete _data2search.sessionSubject;
    }
    if (!loanDescription) {
      delete _data2search.loanDescription;
    }
    this.socketioService.getSessionCountByQuery(false, { data2search: _data2search, useAndTrueOrFalse: useAndTrueOrFalse });
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_getlength_bysearch');
  }

  getSessionAllByBorrowerId(borrowerId: string, loanId: string, loanApplyId: string, status: string, useAndTrueOrFalse: boolean, emitThisEvent: string) {
    this.socketioService.emitEventWithNameAndData('sessions_request_getall_byborrowerid', { borrowerId: borrowerId, loanId: loanId, loanApplyId: loanApplyId, useAndTrueOrFalse: useAndTrueOrFalse, emitThisEvent: emitThisEvent, status: status });
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_getall_byborrowerid');
  }
  getSessionAllByLenderId(lenderId: string, loanId: string, loanApplyId: string, status: string, useAndTrueOrFalse: boolean, emitThisEvent: string) {
    this.socketioService.emitEventWithNameAndData('sessions_request_getall_bylenderid', { lenderId: lenderId, loanId: loanId, loanApplyId: loanApplyId, useAndTrueOrFalse: useAndTrueOrFalse, emitThisEvent: emitThisEvent, status: status });
    return fromEvent<Session[]>(this.socketioService.socket, 'sessions_response_getall_bylenderid');
  }
  getUpdatesForSessionAllByBorrowerId() {
    return fromEvent<Session[]>(this.socketioService.socket, 'response_updated_sessions_byborrowerid');
  }
  getUpdatesForSessionAllByLenderId() {
    return fromEvent<Session[]>(this.socketioService.socket, 'response_updated_sessions_bylenderid');
  }

}

/*
baseurl = environment.apiUrl + '/';
constructor(private http: HttpClient) { }

addNewSession(session: Session) {
  return this.http.post(this.baseurl + 'api/post/session/addnew', session);
}

getSessionById(id: string) {
  return this.http.post(this.baseurl + 'api/post/session/getbyid', { loanId: id });
}

getSessionAll() {
  return this.http.post(this.baseurl + 'api/post/session/getall', {});
}

getSessionAllWithSessionApply(_borrowerId: string) {
  return this.http.post(this.baseurl + 'api/post/session/getall/withappliedsessions', { borrowerId: _borrowerId });
}

updateSessionById(session: Session) {
  return this.http.post(this.baseurl + 'api/post/session/update/byid', session);
}

getSessionAllByService(services: string, location: string, sessionSubject: string, loanDescription: string, useAndTrueOrFalse: boolean) {
  return this.http.post(this.baseurl + 'api/post/session/getall/bysearch', { data2search: { services: services, location: location, sessionSubject: sessionSubject, loanDescription: loanDescription }, useAndTrueOrFalse: useAndTrueOrFalse });
}

getSessionLengthByService(services: string, location: string, sessionSubject: string, loanDescription: string, useAndTrueOrFalse: boolean) {
  return this.http.post(this.baseurl + 'api/post/session/getlength/bysearch', { data2search: { services: services, location: location, sessionSubject: sessionSubject, loanDescription: loanDescription }, useAndTrueOrFalse: useAndTrueOrFalse });
}

getSessionAllByBorrowerId(borrowerId: string, useAndTrueOrFalse: boolean) {
  return this.http.post(this.baseurl + 'api/post/session/getall/byborrowerid', {  borrowerId: borrowerId, useAndTrueOrFalse: useAndTrueOrFalse });
}
}
*/