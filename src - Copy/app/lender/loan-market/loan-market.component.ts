import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStatus } from 'src/app/models/role';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilityService } from 'src/app/services/utility.service';
import { SocketioService } from 'src/app/socketio.service';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-loan-market',
  templateUrl: './loan-market.component.html',
  styleUrls: ['./loan-market.component.css']
})
export class LoanMarketComponent implements OnInit {
  subscription: any;
  allLoanMarketData: any;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private socketService: SocketioService,
    public utilityService: UtilityService,
    private alertService: AlertService,
    public router: Router,
    public authenticationService: AuthenticationService,
  ) {
    this.subscription = this.socketService.getLoanMarketDataForLender().subscribe(_allLoanMarketData => {
      if (_allLoanMarketData) {
        this.allLoanMarketData = _allLoanMarketData["data"];
      } else {
        this.allLoanMarketData = [];
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
    if (loanMarket) {
      let _list_of_pending_or_accepted_loans = _.filter(loanMarket.sessionAppliedByBorrowers, function (e) {
        if (e) {
          switch (e.status) {
            case SessionStatus.Pending:
            case SessionStatus.Accepted:
            case SessionStatus.OngoingAccepted:
              return true;
              break;
            default:
              return false;
              break;
          }
        }
      });
      let _list_of_pending_or_accepted_loans_by_me = _.filter(loanMarket.sessionAppliedByBorrowers, function (e) {
        if (e) {
          if (e.lenderId == _currentUserId) {
            //already applied then why to come here
            return true;
          } else {
            return false;
          }
        }
      });

      if (_list_of_pending_or_accepted_loans_by_me.length > 0) {
        return true;
      } else {
        return !!(_list_of_pending_or_accepted_loans.length >= loanMarket.loanMaxBorrower);
      }
    } else {
      return false;
    }
  }
  usersProfile(userObj) {
    //#region fetch creator id
    this.userService.getUserById(userObj._id)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data['success']) {
            console.log('84', this.authenticationService.currentUserValue);
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
              console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
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
}
