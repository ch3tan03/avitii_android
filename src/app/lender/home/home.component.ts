import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketioService } from 'src/app/socketio.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { User, Role } from '../../models'
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PublicProfileComponent } from 'src/app/shared/public-profile/public-profile.component';
import { UtilityService } from 'src/app/services/utility.service';
import { AddFundsService } from 'src/app/services/add-funds.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentOnlineUserList: any;
  allSessionsTodayList:any;
  allSessionsTodayCount: any;
  allSessionsCount: any;
  subscription: Subscription;
  subscription1: Subscription;
  subscription2: Subscription;
  public modalFindBorrower: any;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService,
    private socketService: SocketioService,
    public utilityService: UtilityService,
    public fundService:AddFundsService,
    public contactService:ContactService
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
        this.socketService.getSessionAllTodaysDateAcceptedOnly(this.currentUser._id, this.currentUser.role).subscribe(result => {
            let data = null;
            if (result) {
              if (result['success'] == true || result['success'] == false) {
                data = result['data'];
              } else {
                data = result;
              }
            }
            this.allSessionsTodayList = data;
            if(this.utilityService._.keys(this.allSessionsTodayList).length<=0){
              this.allSessionsTodayList=[];
            }
            this.allSessionsTodayCount =this.utilityService._.keys(this.allSessionsTodayList).length;
        });
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
    this.socketService.getSessionCountByQuery(false, _obj2Save);
    console.log('36 :: called');
  }


  ngOnInit() {
    //this.socketService.getUserOnlineList();
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

    console.log('95', this.authenticationService.currentUserValue);
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
      console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
    });
  }
  clickedOnSessionChatVideo(sessionObj, AVTrueChatFalse){
    let _contactId=this.contactService.returnContactIdForSession(sessionObj._id, sessionObj.sessionAppliedByBorrowers[0]._id);
       let _parentRouting = '';
       switch (this.currentUser.role) {
         case Role.Borrower:
           _parentRouting = 'borrower';
           break;
         case Role.Lender:
           _parentRouting = 'lender';
           break;
         case Role.Admin:
           _parentRouting = 'admin';
           break;
       }
       this.router.navigate(['/' + _parentRouting + '/messages'], { state: { contactId: _contactId, AVTrueChatFalse: AVTrueChatFalse } });
      }
}