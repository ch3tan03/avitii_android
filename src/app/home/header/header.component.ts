import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models';
import {  AuthenticationService } from 'src/app/services';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  currentUser: User;

  constructor(
      public router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.router.navigate(['/logout']);
}

ngAfterViewInit(): void  {  
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
     //toggle show
     $('.toggle-nav').on('click', function (e) {
        // $('.navbar').css("right", "0px");
        $('.navbar').show();
      });
      $('.btn-back').on('click', function (e) {
        // $('.navbar').css("right", "-350px");
        $('.navbar').hide();
      });
      function checkWidth() {
          var windowSize = $(window).width();
          if (windowSize <= 991) {
              $(".dropdown").click(function(){
                  $(".dropdown ~ul").not($(this).siblings()).hide("fast");
                  $(".dropdown ~.mega-menu-container").not($(this).siblings()).hide("fast");
                  $(this).siblings().slideToggle("fast");
              });
          }
          else if (windowSize >= 991) {
              $(".navbar > ul > li.mega-menu").mouseover(function(){
                  $(this).children().css("display", "block");
              });
              $(".navbar > ul > li.mega-menu").mouseout(function(){
                  $(this).children().last().css("display", "none");
              });
  
              $(".sub-menu").mouseover(function(){
                  $(this).children().css("display", "block")
              });
              $(".sub-menu").mouseout(function(){
                  $(this).children().last().css("display", "none")
              });
          }
      }
      checkWidth();
      $(window).resize(checkWidth);
  })(jQuery);
  }

}
