import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { User, AppRooms } from './models';
import { SocketioService } from './socketio.service';
import { NotificationService } from './services/notification.service';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  currentUser: User;
  subscription: Subscription;
  constructor(
    private authenticationService: AuthenticationService,
    private socketService: SocketioService,
    private utilityService: UtilityService,
    private notificationService: NotificationService
  ) {
    this.subscription = this.authenticationService.getCurrentUserObj().subscribe(_currentUser => {
      if (_currentUser) {
        this.currentUser = _currentUser;
        this.socketService.setupSocketConnection(this.currentUser._id);
        if (this.currentUser.role) {
          this.socketService.sendEventToJoinChatRoom(AppRooms['my_app_main_room_for_' + this.currentUser.role], this.currentUser._id);
        }
      } else {
        this.currentUser = null;
      }
      this.notificationService.appNotificationsListner();
    });
    this.authenticationService.initCurrentUserObj();

  }


  ngOnInit() {

    //	document.styleSheets[0].disabled = true;
    //	document.styleSheets[1].disabled = true;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
