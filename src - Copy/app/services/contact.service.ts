import { Injectable } from '@angular/core';
import { SessionStatus, ContactRole } from 'src/app/models';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  Status = SessionStatus;
  ContactRole = ContactRole;
  constructor() { }

  returnContactJsonData(_createdByUserId, _groupFirstName, _loanId, _loanApplyId, _adminUsersArray, _memberUsersArray, _guestUsersArray, ) {
    let _contactObj = {
      _id: "",

      firstName: "",

      usersColl: {},
      isGroup: false,
      status: this.Status.Active,
      createdBy: ""
    };

    if (_groupFirstName) {
      _contactObj.firstName = _groupFirstName;
    }

    if (_.keys(_adminUsersArray).length > 0) {
      _contactObj.usersColl[ContactRole.Admin] = _adminUsersArray;
    }

    if (_.keys(_memberUsersArray).length > 0) {
      _contactObj.usersColl[ContactRole.Member] = _memberUsersArray;
    }

    if (_.keys(_guestUsersArray).length > 0) {
      _contactObj.usersColl[ContactRole.Guest] = _guestUsersArray;
    }

    _contactObj.createdBy = _createdByUserId;

    if (_loanId && _loanApplyId) {
      _contactObj._id = this.returnContactIdForSession(_loanId, _loanApplyId);
      _contactObj.isGroup = true;
    }

    return _contactObj;
  }

  returnContactIdForSession(_loanId, _loanApplyId) {
    return _loanApplyId;
  }
}
