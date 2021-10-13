import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { User, Role } from '../../models'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';


@Component({
  selector: 'app-search-borrower',
  templateUrl: './search-borrower.component.html',
  styleUrls: ['./search-borrower.component.css']
})
export class SearchBorrowerComponent implements OnInit, OnDestroy {
  modalFindBorrower: string;
  currentUser: User;
  currentOnlineUserList: any;
  allSessionsCount: any;
  subscription: Subscription;
  subscription1: Subscription;
  subscription2: Subscription;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService,
    private socketService: SocketioService,
    ) {

    this.subscription = this.socketService.getCurrentOnlineUsersListObj().subscribe(_currentOnlineUserList => {
      if (_currentOnlineUserList) {
        this.currentOnlineUserList = _currentOnlineUserList;
      } else {
        this.currentOnlineUserList = null;
      }
    });

    this.subscription1 = this.socketService.getCurrentSessionCount().subscribe(_allSessionsCount => {
      if (_allSessionsCount) {
        this.allSessionsCount = _allSessionsCount;
      } else {
        this.allSessionsCount = 0;
      }
    });

    this.subscription2 = this.authenticationService.getCurrentUserObj().subscribe(_currentUser => {
      if (_currentUser) {
        this.currentUser = _currentUser;
      } else {
        this.currentUser = null;
      }
    });
    this.authenticationService.initCurrentUserObj();
    let _obj2Use4Filter = {
      role: 'borrower'
    };
    let useAndTrueOrFalse = false;

    this.socketService.getUserOnlineList(false, _obj2Use4Filter, useAndTrueOrFalse);
    let _obj2Save = { createdBy: this.currentUser._id };
    this.socketService.getSessionCountByQuery(false,_obj2Save);
    //console.log('36 :: called');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  findBorrower(modalFindBorrower) {
    let _obj2Use4Filter = {
      role: 'borrower',
      userName: modalFindBorrower
    };
    let useAndTrueOrFalse = true;
    this.socketService.getUserOnlineList(false, _obj2Use4Filter, useAndTrueOrFalse);
  }

  createNewSessionWithBorrower(_borrowerId) {
    this.router.navigate(['/lender/new-session'], { state: { borrowerId: _borrowerId } });
    //this.router.navigate(['/lender/new-session'], { queryParams: { borrowerId: _borrowerId }, skipLocationChange: true });
  }
  
  usersProfile(userObj){

    //console.log('95', this.authenticationService.currentUserValue);
    const dialogRef = this.dialog.open(PublicProfileComponent, {
    
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: true,
      data: {
        userObj: userObj
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }
}
