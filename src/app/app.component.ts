import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { User, AppRooms } from './models';
import { SocketioService } from './socketio.service';
import { NotificationService } from './services/notification.service';
import { UtilityService } from './services/utility.service';

import { AppVersion } from '@ionic-native/app-version/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Market } from '@ionic-native/market/ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  currentUser: User;
  subscription: Subscription;
  isUpdateAvailable: boolean;
  constructor(
    platform: Platform,
    private authenticationService: AuthenticationService,
    private socketService: SocketioService,
    private utilityService: UtilityService,
    private notificationService: NotificationService,
    private appVersion: AppVersion,
    private http: HttpClient,
    private market: Market
  ) {


    platform.ready().then(() => {

      this.getJSON().subscribe(data => {
      
        let appConfig= JSON.parse(data)
        
        this.appVersion.getVersionCode().then(version => {
          //console.log(version)
          if(appConfig.versionCode != version){
            this.isUpdateAvailable = true
          }
         }).catch(err => {
          console.log(err);
         });
       },
       err => {
         console.log(err);
       });

    })

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

  public getJSON(): Observable<any> {
    return this.http.get("https://avitii-lending.com/endpoint/version/versionCheck.json", {responseType: 'text'});
}

navigateToStore() {
  this.market.open('com.avitiilending.dev');

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
