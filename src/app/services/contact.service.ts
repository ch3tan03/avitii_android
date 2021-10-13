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

  returnContactJsonData(_createdByUserId: string, _groupFirstName: string, _loanId: string, _loanApplyId: string, _adminUsersArray: string[], _memberUsersArray: string[], _guestUsersArray: string[], openRoleGroup: string[], isOneWayGroup: boolean) {
    let _contactObj = {
      _id: "",
      firstName: "",
      usersColl: {},
      isGroup: false,
      status: this.Status.Active,
      createdBy: "",
      openRoleGroup: [],
      isOneWayGroup: false,
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

    _contactObj.openRoleGroup = openRoleGroup || [];
    _contactObj.isOneWayGroup = (!!isOneWayGroup);

    return _contactObj;
  }

  returnContactIdForSession(_loanId, _loanApplyId) {
    return _loanApplyId;
  }
}
