
import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionActionType, User } from 'src/app/models';
import { AuthenticationService } from 'src/app/services';
import { MessagesService } from 'src/app/services/messages.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UtilityService } from 'src/app/services/utility.service';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  currentUser: User;
  TransactionActionType = TransactionActionType;
  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public utilityService: UtilityService,
    public notificationService: NotificationService,
    public messagesService: MessagesService
  ) {
    this.messagesService.getAllMyContacts();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.router.navigate(['/logout']);
  }
  navigate2State(state: string, stateObj: any = null) {
    state = (state ? state : '/logout');

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';

    if (!stateObj) {
      this.router.navigate([state]);
    } else {
      this.router.navigate([state], { state: stateObj });
    }
  }
  ngAfterViewInit(): void {
    (function ($) {
      "use strict";


      $('.filter-btn').on('click', function (e) {
        $('.collection-filter').css("left", "-15px");
      });
      $('.filter-back').on('click', function (e) {
        $('.collection-filter').css("left", "-365px");
        $('.sidebar-popup').trigger('click');
      });

      //toggle show
      $('.toggle-nav').on('click', function (e) {

        $('.navbar_side_panel').show();
      });
      $('.btn-back').on('click', function (e) {

        $('.navbar_side_panel').hide();
      });

      function checkWidth() {
        var windowSize = $(window).width();
        if (windowSize <= 991) {
          $(".dropdown").click(function () {
            $(".dropdown ~ul").not($(this).siblings()).hide("fast");
            $(".dropdown ~.mega-menu-container").not($(this).siblings()).hide("fast");
            $(this).siblings().slideToggle("fast");
          });
          $('.nav-item').on('click', function (e) {

            $('.navbar_side_panel').hide();
          });
        }
        else if (windowSize >= 991) {
          $(".navbar > ul > li.mega-menu").mouseover(function () {
            $(this).children().css("display", "block");
          });
          $(".navbar > ul > li.mega-menu").mouseout(function () {
            $(this).children().last().css("display", "none");
          });

          $(".sub-menu").mouseover(function () {
            $(this).children().css("display", "block")
          });
          $(".sub-menu").mouseout(function () {
            $(this).children().last().css("display", "none")
          });
        }
      }
      checkWidth();
      $(window).resize(checkWidth);
    })(jQuery);
  }

}
