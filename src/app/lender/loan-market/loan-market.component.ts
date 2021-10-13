import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, SessionStatus } from 'src/app/models/role';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services';
import { SessionsService } from 'src/app/services/sessions.service';
import { SearchComponent } from 'src/app/shared/search/search.component';

@Component({
  selector: 'app-loan-market',
  templateUrl: './loan-market.component.html',
  styleUrls: ['./loan-market.component.css']
})
export class LoanMarketComponent implements OnInit {
  subscription: any;
  allLoanMarketData: any;
  searchFilterObj: any;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private socketService: SocketioService,
    public utilityService: UtilityService,
    private alertService: AlertService,
    public router: Router,
    public authenticationService: AuthenticationService,
    private sessionsService: SessionsService
  ) {
    this.getLoanMarketData();
    this.sessionsService.getSessionNewAdded().subscribe(_allLoanMarketData => {
      if (_allLoanMarketData) {
        if (_allLoanMarketData["success"]) {
          let temp_allLoanMarketData = _.mapKeys(this.allLoanMarketData, '_id')
          if (_allLoanMarketData["data"].isDeleted) {
            delete temp_allLoanMarketData[_allLoanMarketData["data"]._id];
          } else {
            temp_allLoanMarketData[_allLoanMarketData["data"]._id] = _allLoanMarketData["data"];
          }
          this.allLoanMarketData = _.values(temp_allLoanMarketData);
        }
      }
    });
    this.sessionsService.getSessionUpdated().subscribe(_allLoanMarketData => {
      if (_allLoanMarketData) {
        if (_allLoanMarketData["success"]) {
          let temp_allLoanMarketData = _.mapKeys(this.allLoanMarketData, '_id')
          if (_allLoanMarketData["data"].isDeleted) {
            delete temp_allLoanMarketData[_allLoanMarketData["data"]._id];
          } else {
            temp_allLoanMarketData[_allLoanMarketData["data"]._id] = _allLoanMarketData["data"];
          }
          this.allLoanMarketData = _.values(temp_allLoanMarketData);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  navigate2LoanProccess(loanId) {
    this.router.navigate(['/lender/lend-now'], { state: { loanId: loanId } });
  }

  returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(loanMarket) {
    let _currentUserId = this.authenticationService.currentUserValue._id;
    if (loanMarket && _.keys(loanMarket.sessionAppliedByBorrowers).length > 0) {
      //#region proccess only if any one applied to current loan request
      let _list_of_pending_loans = null;
      let roleId2Check = null;
      let _list_of_pending_or_accepted_loans_by_me = null;
      //#region check whether anyone have applied to current loan or not
      _list_of_pending_loans = _.filter(loanMarket.sessionAppliedByBorrowers, function (e) {
        if (e) {
          switch (e.status) {
            case SessionStatus.Pending:
              return true;
              break;
            case SessionStatus.Accepted:
            case SessionStatus.AwaitingForApproval:
              return false;//return true;
              break;
            default:
              return false;
              break;
          }
        }
      });
      //#endregion check whether anyone have applied to current loan or not
      //#region set value for attribute depends on user's role
      switch (this.authenticationService.currentUserValue.role) {
        case Role.Borrower:
          roleId2Check = 'borrowerId';
          break;
        case Role.Lender:
          roleId2Check = 'lenderId';
          break;
      }
      //#endregion set value for attribute depends on user's role
      //#region check whether I have already applied to current loan or not
      _list_of_pending_or_accepted_loans_by_me = _.filter(loanMarket.sessionAppliedByBorrowers, function (e) {
        if (e) {
          if (e[roleId2Check] == _currentUserId) {
            //already applied then why to come here
            return true;
          } else {
            return false;
          }
        }
      });
      //#endregion check whether I have already applied to current loan or not
      //#region return boolean value for current request
      if (_list_of_pending_or_accepted_loans_by_me.length > 0) {
        return true;
      } else {
        return !(_list_of_pending_loans.length > 0);//!!(_list_of_pending_or_accepted_loans.length >= loanMarket.loanMaxBorrower);
      }
      //#endregion return boolean value for current request
      //#endregion proccess only if any one applied to current loan request
    } else {
      //#region no one applied till now for current loan request
      return false;
      //#endregion no one applied till now for current loan request
    }
  }

  usersProfile(userObj) {
    //#region fetch creator id
    this.userService.getUserById(userObj._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            //console.log('84', this.authenticationService.currentUserValue);
            const dialogRef = this.dialog.open(PublicProfileComponent, {

              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                userObj: _.cloneDeep(data['data']),
                adminViewT: false
              }
            });

            dialogRef.afterClosed().subscribe(result => {
              //console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
            });

          } else {

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

        });
    //#endregion fetch creator id

  }

  showSearchPanel() {

    //console.log('84', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(SearchComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '65%',
      width: '50%',
      hasBackdrop: true,
      data: {
        searchFilterObj: this.searchFilterObj,
        adminViewT: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        let _obj2Save = result.data;
        if (!_obj2Save) {
          _obj2Save = {};
        }
        this.searchFilterObj = _obj2Save;
        _obj2Save.status = 'pending';
        _obj2Save.isDeleted = false;
        let emitThisEvent = null;
        switch (this.authenticationService.currentUserValue.role) {
          case Role.Borrower:
            _obj2Save.isLoanRequested = false;
            emitThisEvent = 'sessions_response_getall_bysearch_from_borrower';
            break;
          case Role.Lender:
            _obj2Save.isLoanRequested = true;
            emitThisEvent = 'sessions_response_getall_bysearch_from_lender';
            break;
        }

        this.socketService.getLoanMarketDataForSearch(_obj2Save, emitThisEvent).subscribe(_allLoanMarketData => {
        });
        //console.log(`223 :: msc :: Dialog result: ${JSON.stringify(result)}`);
      }

    });
  }

  cleanSearchFilter() {
    this.searchFilterObj = null;
    this.getLoanMarketData();
  }

  getLoanMarketData() {
    this.subscription = this.socketService.getLoanMarketDataForLender().subscribe(_allLoanMarketData => {
      if (_allLoanMarketData) {
        this.allLoanMarketData = _allLoanMarketData["data"];
      } else {
        this.allLoanMarketData = [];
      }
    });
  }
}
