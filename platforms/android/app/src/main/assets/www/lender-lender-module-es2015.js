(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lender-lender-module"],{

/***/ "0Phk":
/*!*********************************************************************!*\
  !*** ./src/app/lender/search-borrower/search-borrower.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchBorrowerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBorrowerComponent", function() { return SearchBorrowerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_borrower_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-borrower.component.html */ "5s2n");
/* harmony import */ var _search_borrower_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-borrower.component.css */ "6zw6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/public-profile/public-profile.component */ "bLZ2");









let SearchBorrowerComponent = class SearchBorrowerComponent {
    constructor(dialog, router, authenticationService, socketService) {
        this.dialog = dialog;
        this.router = router;
        this.authenticationService = authenticationService;
        this.socketService = socketService;
        this.subscription = this.socketService.getCurrentOnlineUsersListObj().subscribe(_currentOnlineUserList => {
            if (_currentOnlineUserList) {
                this.currentOnlineUserList = _currentOnlineUserList;
            }
            else {
                this.currentOnlineUserList = null;
            }
        });
        this.subscription1 = this.socketService.getCurrentSessionCount().subscribe(_allSessionsCount => {
            if (_allSessionsCount) {
                this.allSessionsCount = _allSessionsCount;
            }
            else {
                this.allSessionsCount = 0;
            }
        });
        this.subscription2 = this.authenticationService.getCurrentUserObj().subscribe(_currentUser => {
            if (_currentUser) {
                this.currentUser = _currentUser;
            }
            else {
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
    usersProfile(userObj) {
        //console.log('95', this.authenticationService.currentUserValue);
        const dialogRef = this.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__["PublicProfileComponent"], {
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
};
SearchBorrowerComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"] }
];
SearchBorrowerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-borrower',
        template: _raw_loader_search_borrower_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_borrower_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"]])
], SearchBorrowerComponent);



/***/ }),

/***/ "17Jk":
/*!**************************************************************!*\
  !*** ./src/app/lender/new-session/new-session.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctc2Vzc2lvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "2avt":
/*!***************************************************!*\
  !*** ./src/app/lender/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "lX2P");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "oyWB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/add-funds.service */ "3gPe");
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/messages.service */ "Hzbo");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");










let HeaderComponent = class HeaderComponent {
    constructor(router, authenticationService, fundService, utilityService, notificationService, messagesService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.fundService = fundService;
        this.utilityService = utilityService;
        this.notificationService = notificationService;
        this.messagesService = messagesService;
        this.messagesService.getAllMyContacts();
        this.authenticationService.currentUser.subscribe(x => {
            this.currentUser = x;
            if (this.currentUser) {
                fundService.getFundsCountForRequestedUser(this.currentUser._id);
                fundService.getSessionSpentCountForRequestedUser(this.currentUser._id);
            }
        });
    }
    navigate2State(state) {
        state = (state ? state : '/logout');
        this.router.navigate([state]);
    }
    showAlert() {
        alert("Sorry, you can not create a loan contract untill 30th October.");
    }
    ngAfterViewInit() {
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
                        $(this).children().css("display", "block");
                    });
                    $(".sub-menu").mouseout(function () {
                        $(this).children().last().css("display", "none");
                    });
                }
            }
            checkWidth();
            $(window).resize(checkWidth);
        })(jQuery);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_6__["AddFundsService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_7__["MessagesService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_6__["AddFundsService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"],
        src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"],
        src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_7__["MessagesService"]])
], HeaderComponent);



/***/ }),

/***/ "3VcK":
/*!***************************************************!*\
  !*** ./src/app/lender/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "5bAa");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "IKZ3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "5bAa":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!--copyright start-->\r\n  <div class=\"agency copyright\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"link-horizontal\">\r\n                    <ul>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Privacy Policy</a>\r\n                        </li>\r\n\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Terms of Use</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/faqs\" routerLinkActive=\"active\" i18n>FAQs</a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div>\r\n                    <h6 class=\"copyright-text text-white text-right\" i18n>© 2020 Avitii Lender System\r\n\r\n                    </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!--copyright end-->\r\n  \r\n ");

/***/ }),

/***/ "5s2n":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/search-borrower/search-borrower.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-xl-12 col-12\">\r\n                <form class=\"bg-pink border p-4 shadow-sm\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-xl-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"modalFindBorrower\" placeholder=\"Find Borrowers\" [(ngModel)]=\"modalFindBorrower\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <button class=\"btn btn-secondary\" data-toggle=\"collapse\" data-target=\"#filter-menus\"><i class=\"icon-filter\"></i></button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"row collapse\" id=\"filter-menus\">\r\n                                <div class=\"col-xl-6 mt-2\">\r\n                                    <select formControlName=\"services4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\r\n                                    <option value=\"\" selected>Service Type</option>\r\n                                    <option *ngFor=\"let item of utilityService.ServicesTypes\" [ngValue]=\"item.value\">\r\n                                        {{item.name}}</option>\r\n                                </select>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mt-2\">\r\n                                    <select formControlName=\"location4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\r\n                                    <option value=\"\" selected>Choose Location</option>\r\n                                    <option *ngFor=\"let location of utilityService.Locations\" [ngValue]=\"location\">\r\n                                        {{location}}</option>\r\n                                </select>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                        <div class=\"col-xl-2\">\r\n                            <button class=\"btn btn-outline-primary btn-block h-100\" (click)=\"findBorrower(modalFindBorrower)\" i18n>\r\n                                <i class=\"icon-search\"></i> SEARCH\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-12 col-12\">\r\n        <section class=\"agency blog blog-sec p-0\">\r\n            <div class=\"h6 mb-3\">\r\n                Borrowers\r\n                <!-- <span class=\"float-right custom-switch floar-right\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\">\r\n                    <label class=\"custom-control-label\" for=\"customSwitch1\">USA</label>\r\n                </span> -->\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-4 col-12\" *ngFor=\"let item of currentOnlineUserList;\">\r\n\r\n\r\n                    <div class=\"card shadow-sm mb-4\">\r\n                        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n                            {{item.firstName}}\r\n\r\n                            <div class=\"center-text float-right\">\r\n\r\n                             \r\n                                <span *ngIf=\"item.online\" class=\"badge badge-success\" i18n>Online</span>\r\n                                <span *ngIf=\"!item.online\" class=\"badge badge-danger\" i18n>Offline</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body px-md-3 px-1 small\">\r\n                             <div class=\"row\">  \r\n                            <div class=\"col-xl-3\">\r\n                                <img class=\"img-fluid img-thumbnail\" src=\"{{item.selfProfileUrl || './assets/img/nouser.png'}}\">\r\n                            \r\n                            </div> \r\n                                \r\n                            <div class=\"col-xl-8 col-12\">\r\n                             \r\n\r\n                                <div class=\"row\">\r\n                                    <!-- <div class=\"col-xl-6 col-6 border-right mb-2\">\r\n                                        <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> \r\n                                     {{session.loanStartDateTime | date:'MMM d, h:mm a'}} \r\n                                    </div> -->\r\n                                    <!-- <div class=\"col-xl-12 col-12\">\r\n                                        <p class=\"para2\">\r\n                                            {{item.myProfileDetails}}\r\n                                        </p>\r\n                                    </div>  -->\r\n                                    <div class=\"col-xl-6 col-6\">\r\n                                        <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\r\n                                        \r\n                                        {{item.country || 'NA'}}\r\n                                    </div>\r\n                                    <div class=\"col-xl-6 col-6\">\r\n                                        <i aria-hidden=\"true\" class=\"icon-bag m-r-10\"></i>\r\n                                        \r\n                                        {{item.education || 'NA'}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>          \r\n                          \r\n                          \r\n                        </div>\r\n                        </div>\r\n                        <div class=\"card-footer bg-white\">\r\n                            <!-- <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span> -->\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <button class=\"btn btn-link text-capitalize text-success btn-sm\" (click)=\"usersProfile(item)\">\r\n                                         Profile</button>\r\n                                    <button *ngIf=\"item.role=='borrower' && currentUser.role=='lender'\" class=\"btn btn-link btn-sm text-capitalize float-right\" (click)=\"createNewSessionWithBorrower(item._id)\">\r\n                                        Request Consultation</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n             \r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "6zw6":
/*!**********************************************************************!*\
  !*** ./src/app/lender/search-borrower/search-borrower.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtYm9ycm93ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "BqqJ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/new-session/new-session.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- addSession section -->\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-3 col-12\">\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            Loan Amount\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr {{f.loanAmount.value}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            EMI (Monthly)\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr {{_calculatedMonthlyAmountForEMI}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card border-left-primary shadow py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            Total Loan\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr\r\n                            {{utilityService.returnRoundedNumber(_calculatedMonthlyAmountForEMI*f.loanTenureInMonths.value)}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-9 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Make A Loan</h6>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"addSessionForm\" class=\"theme-form\">\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-xl-12 col-12\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanType\" i18n>Loan Type</label>\r\n                                <select formControlName=\"loanType\" class=\"custom-select\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanType.errors }\">\r\n                                    <option value=\"\" selected disabled> Choose Loan Type</option>\r\n                                    <option *ngFor=\"let item of _.values(utilityService.ParentLoanTypes);\"\r\n                                        [ngValue]=\"item._id\" >\r\n                                        {{item.name}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.loanType.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanType.errors.required\" i18n>Loan type is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                                <input type=\"number\" min=\"0\" formControlName=\"loanAmount\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanAmount.errors }\"\r\n                                    (change)=\"calculateMonthlyAmountForEMI()\" (keyup)=\"calculateMonthlyAmountForEMI()\"\r\n                                    pattern=\"^[1-9]\\d*$\" />\r\n                                <div *ngIf=\"submitted && f.loanAmount.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanAmount.errors.required\" i18n>Loan Amount is required</div>\r\n                                    <div *ngIf=\"f.loanAmount.errors.min\" i18n>value must be greater than 1</div>\r\n                                    <div *ngIf=\"f.loanAmount.errors.max\" i18n>value must be less than\r\n                                        {{currentUserMaxLoanAmount}}</div>\r\n                                    <div *ngIf=\"f.loanAmount.errors.pattern\" i18n>value should be a valid number</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 small text-primary mt-n3 mb-3\">\r\n                            <div class=\"row\" [ngSwitch]=\"currentUserRoleType\">\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.new_lender\" >\r\n                                    {{utilityService.LoanAmountMaxTypes[UserType.new_lender].name}}\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.good_lender\" >\r\n                                    {{utilityService.LoanAmountMaxTypes[UserType.good_lender].name}}\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.expert_lender\" >\r\n                                    {{utilityService.LoanAmountMaxTypes[UserType.expert_lender].name}}\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.super_lender\" >\r\n                                    {{utilityService.LoanAmountMaxTypes[UserType.super_lender].name}}\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.proff_lender\" >\r\n                                    {{utilityService.LoanAmountMaxTypes[UserType.proff_lender].name}}\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchDefault >\r\n                                    {{utilityService.LoanAmountMaxTypes[UserType.new_lender].name}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\" >\r\n                                    {{authenticationService.returnUserTypeForUserFromSuppliedUserLevel(currentUserRoleType)}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                                <input type=\"number\" formControlName=\"loanTenureInMonths\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanTenureInMonths.errors }\"\r\n                                    (change)=\"calculateMonthlyAmountForEMI()\" (keyup)=\"calculateMonthlyAmountForEMI()\"\r\n                                    pattern=\"^[1-9]\\d*$\" />\r\n                                <div *ngIf=\"submitted && f.loanTenureInMonths.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.required\" i18n>Loan Tenure is\r\n                                        required\r\n                                    </div>\r\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.min\" i18n>value must be greater than\r\n                                        3</div>\r\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.pattern\" i18n>value should be a valid number\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                                <input type=\"number\" formControlName=\"loanInterestRate\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanInterestRate.errors }\"\r\n                                    (change)=\"calculateMonthlyAmountForEMI()\"\r\n                                    (keyup)=\"calculateMonthlyAmountForEMI()\" />\r\n                                <div *ngIf=\"submitted && f.loanInterestRate.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanInterestRate.errors.required\" i18n>Interest Rate is\r\n                                        required\r\n                                    </div>\r\n                                    <div *ngIf=\"f.loanInterestRate.errors.min\" >\r\n                                        min interest rate of {{loanInterestRateMin}}%\r\n                                    </div>\r\n                                    <div *ngIf=\"f.loanInterestRate.errors.max\" >\r\n                                        max interest rate of {{loanInterestRateMax}}% (remember to check  the rules for your country)\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"loanStartDateTimeCustomised\" i18n>Start on</label>\r\n                                        <input type=\"date\" formControlName=\"loanStartDateTimeCustomised\"\r\n                                            class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanStartDateTimeCustomised.errors }\"\r\n                                            [max]=\"maxDate\" [min]=\"minDate\" />\r\n                                        <div *ngIf=\"submitted && f.loanStartDateTimeCustomised.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.required\" i18n>Start Date\r\n                                                Time is required\r\n                                            </div>\r\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.date\" i18n>Invalid Date\r\n                                                format.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            -->\r\n                        <!--\r\n                                        <div class=\"col-xl-12 col-12\">\r\n                                            <label for=\"loanEndDateTimeCustomised\" i18n>Ends on</label>\r\n                                            <input [readonly]=\"true\" type=\"datetime-local\"\r\n                                                formControlName=\"loanEndDateTimeCustomised\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.loanEndDateTimeCustomised.errors }\"\r\n                                                [max]=\"maxDate\" [min]=\"minDate\" />\r\n                                            <div *ngIf=\"submitted && f.loanEndDateTimeCustomised.errors\"\r\n                                                class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.required\" i18n>End Date Time is\r\n                                                    required\r\n                                                </div>\r\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.date\" i18n>Invalid Date format.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        -->\r\n                        <div class=\"col-xl-12 mb-3\">\r\n                            <div for=\"loanRepaymentType\" class=\"mb-2\" i18n>How to give the money</div>\r\n\r\n                            <div class=\"form-check-inline\"\r\n                                *ngFor=\"let item of _.values( utilityService.LoanRepaymentTypes);\">\r\n\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input name=\"service\" id=\"services_{{item._id}}\" type=\"checkbox\"\r\n                                        class=\"custom-control-input\" value=\"{{item._id}}\"\r\n                                        (change)=\"onLoanRepaymentTypeChange($event)\"\r\n                                        [checked]=\"onInitSetLoanRepaymentTypeValue(item._id)\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanRepaymentType.errors }\">\r\n                                    <label for=\"services_{{item._id}}\"\r\n                                        class=\"custom-control-label\">{{item.name}}</label>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div *ngIf=\"submitted && f.loanRepaymentType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.loanRepaymentType.errors.required\" i18n>Payment option required\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-xl-12 col-12 d-none\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanInsuranceType\" i18n>Insurance Choice</label>\r\n                                <select formControlName=\"loanInsuranceType\" class=\"custom-select\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanInsuranceType.errors }\">\r\n                                    <option *ngFor=\"let item of _.values(utilityService.InsuranceTypes);\"\r\n                                        [ngValue]=\"item._id\" >\r\n                                        {{item.name}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.loanInsuranceType.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanInsuranceType.errors.required\" i18n>Option required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanMaxBorrower\" i18n>Number of Borrower can apply</label>\r\n                                <input type=\"number\" formControlName=\"loanMaxBorrower\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanMaxBorrower.errors }\" pattern=\"^[1-9]\\d*$\"/>\r\n                                <div *ngIf=\"submitted && f.loanMaxBorrower.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanMaxBorrower.errors.required\" i18n>Borrowe limit is\r\n                                        required\r\n                                    </div>\r\n                                    <div *ngIf=\"f.loanMaxBorrower.errors.min\" i18n>value must be greater than 0\r\n                                    </div>\r\n                                    <div *ngIf=\"f.loanMaxBorrower.errors.pattern\" i18n>value should be a valid number</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 mb-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"comment\" i18n>Description:</label>\r\n                                <textarea class=\"form-control\" formControlName=\"loanDescription\" rows=\"2\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanDescription.errors }\">\r\n                                            </textarea>\r\n                            </div>\r\n                            <div *ngIf=\"submitted && f.loanDescription.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.loanDescription.errors.required\" i18n>Description is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-12 text-center\">\r\n                            <hr>\r\n                            <button type=\"button\" (click)=\"onaddSessionUpdateSubmit()\" [disabled]=\"loading\"\r\n                                class=\"btn btn-primary\" i18n>Submit</button>\r\n                            <img *ngIf=\"loading\" class=\"pl-3\"\r\n                                src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- addSession section -->");

/***/ }),

/***/ "ByGf":
/*!************************************************!*\
  !*** ./src/app/lender/home/home.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .card-body {\r\n  \r\n    font-size: 0.6rem !important;\r\n}\r\n.card-body h5{\r\n  \r\n    font-size: 0.6rem !important;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztHQU9HIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jYXJkLWJvZHkge1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1ib2R5IGg1e1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcclxufSAqLyJdfQ== */");

/***/ }),

/***/ "CTHm":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/lend-now/lend-now.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- addSession section -->\r\n<div class=\"row\" *ngIf=\"!userClickedOnSignLoanContract\">\r\n    <div class=\"col-xl-3 col-12\">\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            EMI (Monthly)\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr {{LoanObj.calculatedMonthlyAmountForEMI}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            Loan Amount\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr {{LoanObj.loanAmount}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            Total Loan\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr\r\n                            {{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI*LoanObj.loanTenureInMonths)}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-9 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <span class=\"float-left\">\r\n                    <h5 class=\"m-0 font-weight-bold text-primary\">{{headerMessage2show}}</h5>\r\n                </span>\r\n                <span>\r\n                    <div (click)=\"usersProfile(LoanObj.createdByUserObj)\">\r\n                        <i class=\"icon icon-user\"></i>\r\n                    </div>\r\n                </span>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <div class=\"theme-form\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-4 col-12 \">\r\n                            <div class=\"form-group border-right\">\r\n                                <label for=\"loanType\" i18n>Loan Type</label>\r\n                                <h4 class=\"text-primary\" >\r\n                                    {{utilityService.returnLoanType(LoanObj.loanType)}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"form-group border-right\">\r\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanAmount}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanTenureInMonths}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"form-group border-right\">\r\n                                <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanInterestRate}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"form-group border-right\">\r\n                                <label for=\"loanStartDateTime\" i18n>Start Date</label>\r\n                                <h4 class=\"text-primary\" >\r\n                                    {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <p class=\"mb-2\" i18n>How to give the money</p>\r\n\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                                    BANK\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                                    Cash\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                                    Revolut\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                                    Paypal\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase badge-success\" i18n>\r\n                                    Skrill\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12\">\r\n                            <p class=\"mb-2\" i18n>Description:</p>\r\n                            <div class=\"text-black-50\" i18n>\r\n                                {{LoanObj.loanDescription}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 col-12 mt-3\">\r\n                            <div class=\"table-responsive table-billing-history\">\r\n                                <table class=\"table mb-0\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th scope=\"col\" i18n>EMI Date</th>\r\n                                            <th scope=\"col\" i18n>Payment</th>\r\n\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr\r\n                                            *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                                            <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                                | date:'dd-MMM-YYYY'}}</td>\r\n                                            <td>kr {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button *ngIf=\"!userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\r\n                    (click)=\"clickedOnSignLoanContract()\" i18n>\r\n                    Sign Loan Contract\r\n                </button>\r\n                <button *ngIf=\"userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\r\n                    (click)=\"resetClickedOnSignLoanContract()\" i18n>\r\n                    Cancel\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"row\" *ngIf=\"userClickedOnSignLoanContract\">\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Loan Contract</h5>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <div class=\"theme-form\">\r\n                    <div class=\"row mb-3\">\r\n                        <div class=\"col-xl-12 col-12 table-responsive\" *ngIf=\"lenderUserObj && borrowerUserObj\">\r\n\r\n                            <table class=\"table table table-bordered shadow-sm\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th style=\"width: 20%;\"> #</th>\r\n\r\n                                        <th style=\"width: 40%;\" i18n>Borrower</th>\r\n                                        <th style=\"width: 40%;\" i18n>Lender</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\">\r\n                                                NAME</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\r\n                                                {{borrowerUserObj.firstName}}&nbsp;{{borrowerUserObj.lastName}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\r\n                                                {{lenderUserObj.firstName}}&nbsp;{{lenderUserObj.lastName}}\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\" i18n>\r\n                                                Address</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{borrowerUserObj.address}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{lenderUserObj.address}}\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\" i18n>\r\n                                                Passport Number</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{borrowerUserObj.myPassportNumber}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{lenderUserObj.myPassportNumber}}\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\" i18n>\r\n                                                DL Number</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{borrowerUserObj.myDLNumber}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{lenderUserObj.myDLNumber}}\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\" i18n>\r\n                                                Payment Method</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\">\r\n                                                BANK\r\n\r\n                                                <label for=\"borrowerBankName\" i18n>Bank Name</label>\r\n                                                <h4 class=\"text-primary\" >\r\n                                                    {{borrowerUserObj.bankName}}\r\n                                                </h4>\r\n                                                <label for=\"borrowerRegNumber\" i18n>Reg nr</label>\r\n                                                <h4 class=\"text-primary\" >\r\n                                                    {{borrowerUserObj.regNumber}}\r\n                                                </h4>\r\n                                                <label for=\"borrowerAccountNumber\" i18n>Account Number</label>\r\n                                                <h4 class=\"text-primary\" >\r\n                                                    {{borrowerUserObj.accountNumber}}\r\n                                                </h4>\r\n                                                <!--\r\n                                                <label for=\"borrowerMobilePayment\" i18n>Mobile payment</label>\r\n                                                <h4 class=\"text-primary\" i18n>\r\n                                                    {{borrowerUserObj.mobilePayment}}\r\n                                                </h4>\r\n                                            -->\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                                class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                                Cash\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\" i18n>\r\n\r\n                                                Revolut:\r\n                                                {{borrowerUserObj.revolutWalletID}}\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\" i18n>\r\n                                                Paypal ID: {{borrowerUserObj.paypalWalletID}}\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\" i18n>\r\n                                                Skrill: {{borrowerUserObj.skrillWalletID}}\r\n                                            </div>\r\n\r\n\r\n                                        </td>\r\n\r\n                                        <td>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\">\r\n                                                BANK\r\n\r\n                                                <div class=\"text-black-50\" i18n>Bank Name</div>\r\n                                                <div class=\"font-weight-bold text-primary mb-1\">\r\n                                                    {{lenderUserObj.bankName}}\r\n                                                </div>\r\n                                                <div for=\"lenderRegNumber\" i18n>Reg Number</div>\r\n                                                <div class=\"font-weight-bold text-primary mb-1\">\r\n                                                    {{lenderUserObj.regNumber}}\r\n                                                </div>\r\n                                                <div for=\"lenderAccountNumber\" i18n>Account Number</div>\r\n                                                <div class=\"font-weight-bold text-primary mb-1\">\r\n                                                    {{lenderUserObj.accountNumber}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                                class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                                Cash\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\" i18n>\r\n\r\n                                                Revolut:\r\n                                                {{lenderUserObj.revolutWalletID}}\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\" i18n>\r\n                                                Paypal ID: {{lenderUserObj.paypalWalletID}}\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\" i18n>\r\n                                                Skrill: {{lenderUserObj.skrillWalletID}}\r\n                                            </div>\r\n\r\n\r\n                                        </td>\r\n\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row mb-3\">\r\n                        <div class=\"col-xl-4 col-12 \">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label for=\"loanType\" i18n>Loan Type</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{utilityService.returnLoanType(LoanObj.loanType)}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\" *ngIf=\"!f.proposedLoanAmount.value\">\r\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanAmount}}\r\n                                </h4>\r\n                            </div>\r\n                            <div class=\"card shadow-sm p-2\" *ngIf=\"f.proposedLoanAmount.value\">\r\n                                <label for=\"loanAmount\" i18n>Loan Amount/Proposed Loan Amount</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    <span\r\n                                        style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\r\n                                        {{LoanObj.loanAmount}}\r\n                                    </span>\r\n                                    /\r\n                                    <span>\r\n                                        {{f.proposedLoanAmount.value}}\r\n                                    </span>\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Tenure in Months</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanTenureInMonths}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Interest(%) Rate (per month)</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanInterestRate}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Start Date</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n\r\n                                <label class=\"mb-3\" i18n>Payment Method</label>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                    BANK\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                    Cash\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                    Revolut\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                    Paypal\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase badge-success w-20\">\r\n                                    Skrill\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 mt-3\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Description</label>\r\n\r\n                                <div class=\"text-black-50\">\r\n                                    {{LoanObj.loanDescription}}\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-xl-12 mt-3\" *ngIf=\"f.loanInsuranceRequired.value\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Applied for Insurance with Amount</label>\r\n                                <div class=\"text-black-50\">\r\n                                    {{f.loanInsuranceAmount.value}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-xl-12 col-12 mt-3\">\r\n                            <div class=\"table-responsive table shadow-sm\">\r\n                                <table class=\"table mb-0\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th scope=\"col\" i18n>EMI Date</th>\r\n                                            <th scope=\"col\" i18n>Payment</th>\r\n\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr\r\n                                            *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                                            <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                                | date:'dd-MMM-YYYY'}}</td>\r\n                                            <td *ngIf=\"(!f.calculatedMonthlyAmountForEMI.value) || (f.calculatedMonthlyAmountForEMI.value ==LoanObj.calculatedMonthlyAmountForEMI)\">kr\r\n                                                {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n                                            <td *ngIf=\"(f.calculatedMonthlyAmountForEMI.value) && (f.calculatedMonthlyAmountForEMI.value !=LoanObj.calculatedMonthlyAmountForEMI)\">kr\r\n                                                <span\r\n                                                    style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\r\n                                                    {{LoanObj.calculatedMonthlyAmountForEMI}}\r\n                                                </span>\r\n                                                &nbsp;\r\n                                                <span>\r\n                                                    {{f.calculatedMonthlyAmountForEMI.value}}\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"card shadow mb-4\">\r\n\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Terms & Conditions</h5>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n                <ol class=\"terms ml-n4\">\r\n                    <li>\r\n                        <div class=\"font-weight-bold\" i18n>Scope</div>\r\n                        <div i18n>\r\n                            These loan terms apply to all loan agreements entered into between the borrower and the\r\n                            lender\r\n                            through the Avitii Lending System. Avitii Lending System acts solely as a dissemination\r\n                            platform\r\n                            and cannot be held liable of any kind, either by the lender or the borrower.\r\n                            By signing the loan agreement, you have accepted these loan terms, which deal with you and\r\n                            the\r\n                            borrower. You are at all times subject to the terms of use of the Avitii Lending System.\r\n                            Deviations from the loan terms must be agreed in writing, and in the event of a discrepancy\r\n                            between the loan terms and your agreement, the loan agreement will take precedence.\r\n                            Avitii Lending System does not provide financial advice when concluding the credit agreement\r\n                            and\r\n                            therefore does not assume any responsibility in connection with this.\r\n                            Both the borrower and the lender confirm compliance with the country's applicable laws and\r\n                            regulations for private loans between private individuals.\r\n                            Borrower as well as lender, provides using Avitii Lending System\r\n                            consent to information including, loan history as well as profile data,\r\n                            address, photo id, social media shared and registered at Credit-List.net\r\n                        </div>\r\n\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"font-weight-bold\" i18n>Acceptance deadline</div>\r\n                        <div i18n>\r\n                            Loan offers offered on the Avitii Lending System must be considered as an open offer, for\r\n                            any\r\n                            borrower profile on the website. It is the individual private loan provider who, based on\r\n                            the\r\n                            borrower's information, makes the final decision on the loan implementation.\r\n                            Loan offers are considered as P2P loans, where any acceptance of loan offers is binding on\r\n                            the\r\n                            borrower. The lender as well as the borrower can stay updated at any time with the terms of\r\n                            agreements on the Avitii Lending Systems website.\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"font-weight-bold\" i18n>Prerequisites</div>\r\n                        <div i18n>\r\n                            Credit rating: As a borrower, you declare in good faith that your information entered at all\r\n                            times is correct, that at the time of entering into the loan you have not been declared\r\n                            unfit to\r\n                            take care of yourself or your finances. At the same time, you declare not to be under\r\n                            compulsory\r\n                            dissolution, debt restructuring, or otherwise declared insolvent.\r\n                            Money laundering: Avitii Lending System is a dissemination platform, and is therefore out of\r\n                            responsibility. Private lender enters into loan agreement with private borrowers. As a\r\n                            borrower\r\n                            on the website, you must in principle always provide private information on an ongoing\r\n                            basis, at\r\n                            the request of Avittii Lending Systems. If you do not provide the necessary correct\r\n                            information,\r\n                            the Avitii Lending System may exclude you from using the Website.\r\n                        </div>\r\n\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"font-weight-bold\" i18n>Loan terms</div>\r\n                        The borrower must at all times be aware that he or she has the finances to take out offered\r\n                        loans. In addition to the principal, the opportunity to bear interest expenses, fees and other\r\n                        expenses in connection with redemption.\r\n\r\n                        <div i18n>The borrower must at all times confirm their creditworthiness, as well as they are not\r\n                            over-mortgaged for the applicable period. The borrower must at all times comply with the\r\n                            applicable rules for repayment. In the event of late payment or otherwise default, it is up\r\n                            to the lender to impose additional expenses. The borrower confirms that he or she is solely\r\n                            responsible for finding a solution to repay the loan / debt.</div>\r\n                        <div i18n>\r\n                            The borrower confirms with this agreement that he agrees that the lender can at any time\r\n                            transfer the loan to a third party for recovery.\r\n                        </div>\r\n                        <div i18n>\r\n                            Receipt for repayment or remission must be notified in writing by endorsement on this loan\r\n                            document.\r\n                        </div>\r\n\r\n                        <div i18n>\r\n                            In the event of late payment, 5 days from the payment date are generally given to find a\r\n                            solution yourself. In case the borrower fails to comply with the repayment within the 5\r\n                            days, the lender is entitled to impose a 65% fee on the amount lent, valid from the date of\r\n                            payment. After another 5 days, the debt will be transferred to recovery.\r\n                        </div>\r\n\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"font-weight-bold\" i18n>Fraud</div>\r\n                        <div i18n>\r\n                            Borrowers who take out loans fraudulently, or in some other way by giving incorrect\r\n                            information\r\n                            and thus force themselves on loans that they are unable to repay or should have foreseen,\r\n                            not\r\n                            being able to repay will be considered fraud.\r\n                            279 CRIMINAL ACT Fraud For fraud, a person is punished who, in order to obtain gain or other\r\n                            unjustified gain, by unlawfully causing, corroborating or exploiting an error, determines\r\n                            another for an act or omission, whereby the person or person for whom the act is inflicted\r\n                            or\r\n                            the omission becomes decisive, a loss of property.\r\n                        </div>\r\n\r\n                    </li>\r\n\r\n\r\n                </ol>\r\n                <hr>\r\n                <h5>E-Signature</h5>\r\n                <hr>\r\n                <form [formGroup]=\"lendNowForm\" class=\"theme-form\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-6 col-12 d-none\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"eSignatureLendersName\" i18n>Name</label>\r\n                                <input type=\"text\" formControlName=\"eSignatureLendersName\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureLendersName.errors }\" />\r\n                                <div *ngIf=\"submitted && f.eSignatureLendersName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.eSignatureLendersName.errors.required\" i18n>Name is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-12 d-none\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"eSignatureLendersPassportNumber\" i18n>Passport or Driving Licence\r\n                                    Number</label>\r\n                                <input type=\"text\" formControlName=\"eSignatureLendersPassportNumber\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureLendersPassportNumber.errors }\" />\r\n                                <div *ngIf=\"submitted && f.eSignatureLendersPassportNumber.errors\"\r\n                                    class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.eSignatureLendersPassportNumber.errors.required\" i18n>Passport or\r\n                                        Driving\r\n                                        Licence Number is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-12\" *ngIf=\"authenticationService.currentUserValue.userMemberShipExpireOn\">\r\n                            <div class=\"form-check-inline\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input name=\"loanInsuranceRequired\" id=\"loanInsuranceRequired\" type=\"checkbox\"\r\n                                        class=\"custom-control-input\" [value]=\"true\"\r\n                                        (change)=\"clicked2InitiatePayment($event)\"\r\n                                        [checked]=\"f.loanInsuranceRequired.value\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanInsuranceRequired.errors }\">\r\n                                    <label for=\"loanInsuranceRequired\" class=\"custom-control-label\">Get Loan\r\n                                        Insurance <i class=\"icon icon-info-alt\"\r\n                                            data-title=\"Calculated insurance will be 20% of the total loan amount.\"></i></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-12\" *ngIf=\"f.loanInsuranceRequired.value\">\r\n                            Insurance Amount <span class=\"badge badge-secondary\">kr\r\n                                {{utilityService.returnRoundedNumber(((LoanObj.loanAmount || 0)/100)*20)}}</span>\r\n                            <div class=\"small text-black-50\">Calculated insurance will be 20% of the total loan amount.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-12\">\r\n                            <div class=\"form-check-inline\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input name=\"loanAgreementCondition\" id=\"loanAgreementCondition\" type=\"checkbox\"\r\n                                        class=\"custom-control-input\" [value]=\"true\"\r\n                                        (change)=\"clicked2LoanAgreementCondition($event)\"\r\n                                        [checked]=\"f.loanAgreementCondition.value\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanAgreementCondition.errors }\">\r\n                                    <label for=\"loanAgreementCondition\" class=\"custom-control-label\">\r\n                                        Agree to the above terms & conditions for Loan Agreement.\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n\r\n                <app-payment [hidden]=\"!userInitiatedForPayment\"></app-payment>\r\n\r\n                <button *ngIf=\"f.loanInsuranceRequired.value\" type=\"button\" class=\"btn btn-success float-right\" (click)=\"initiatePayment()\" i18n>\r\n                    Proceed & Pay\r\n                </button>\r\n                <button type=\"button\" *ngIf=\"!f.loanInsuranceRequired.value\" class=\"btn btn-success float-right\"\r\n                    (click)=\"clickedOnVerifiedSignLoanContract()\" i18n>\r\n                    SUBMIT\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- addSession section -->");

/***/ }),

/***/ "IKZ3":
/*!****************************************************!*\
  !*** ./src/app/lender/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\r\n    padding: 0px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMDtcclxufSJdfQ== */");

/***/ }),

/***/ "IX0O":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/calendar/calendar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<full-calendar [options]=\"calendarOptions\"></full-calendar>\r\n");

/***/ }),

/***/ "JhGI":
/*!*******************************************************!*\
  !*** ./src/app/lender/calendar/calendar.component.ts ***!
  \*******************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calendar.component.html */ "IX0O");
/* harmony import */ var _calendar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component.css */ "Zy6n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/first */ "XoMe");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/sessions.service */ "BZV/");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var _lender_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lender.component */ "oJqp");














let CalendarComponent = class CalendarComponent {
    constructor(authenticationService, socketService, dialog, contactService, utilityService, alertService, userService, router, sessionsService) {
        this.authenticationService = authenticationService;
        this.socketService = socketService;
        this.dialog = dialog;
        this.contactService = contactService;
        this.utilityService = utilityService;
        this.alertService = alertService;
        this.userService = userService;
        this.router = router;
        this.sessionsService = sessionsService;
        this.loading = false;
        this.SessionStatus = src_app_models__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"];
        this.SessionStatusTypeFilter = [];
        this.checkCreatedByUserId = '';
        this.checkCreatedByT = false;
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            dateClick: this.handleDateClick.bind(this),
            eventClick: this.handleEeventClick.bind(this),
            events: [
                { title: 'event 1', date: '2019-04-01' },
                { title: 'event 2', date: '2019-04-02' }
            ]
        };
        this.sessionsService.getSessionAllByLenderId(this.authenticationService.currentUserValue._id, null, null, src_app_models__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Accepted, true, null)
            .pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.allSessionsData = data['data'];
                this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //_sessionAppliedByLenders
                //this.alertService.success(data['message'], true);
                this.bindDataToCalendrUI(this.allSessionsData);
                this.loading = false;
                //this.element_btn_click_addSession_skills_verification.click();
            }
            else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            //this.alertService.error(errorMsg2show);
            this.loading = false;
        });
        this.sessionsService.getUpdatesForSessionAllByLenderId()
            .subscribe(data => {
            if (data && data['success']) {
                let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
                for (let _items in data['data']) {
                    let _currentObj = data['data'][_items];
                    _keyPairedMapObj[_currentObj._id] = _currentObj;
                }
                this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
                this.bindDataToCalendrUI(this.allSessionsData);
                this.loading = false;
            }
            else {
                this.loading = false;
            }
        }, error => {
            this.loading = false;
        });
    }
    ngOnInit() {
    }
    handleDateClick(arg) {
        arg.jsEvent.preventDefault();
        //alert('date click! ' + arg.dateStr)
    }
    handleEeventClick(arg) {
        arg.jsEvent.preventDefault();
        //alert('event click! ' + arg.event.id);
        let _sessionId = arg.event.id;
        let _sessionObj = this.utilityService._.filter(this.allSessionsData, { '_id': _sessionId })[0];
        let _proccessedSessionObj = null;
        switch (this.authenticationService.currentUserValue.role) {
            case src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"].Borrower:
                _proccessedSessionObj = this.utilityService._.cloneDeep(_sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = _sessionObj.sessionAppliedByBorrowers;
                break;
            case src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"].Lender:
                _proccessedSessionObj = this.utilityService._.cloneDeep(_sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = _sessionObj.sessionAppliedByBorrowers;
                break;
            default:
                _proccessedSessionObj = this.utilityService._.cloneDeep(_sessionObj);
                break;
        }
        let _sessionApplyObj = this.utilityService._.first(_proccessedSessionObj.sessionAppliedByBorrowers);
        let _borrowerId = null;
        if (_sessionApplyObj) {
            _borrowerId = _sessionApplyObj.borrowerId;
        }
        this.showDataOfLoanObjInModal(_sessionObj, _sessionApplyObj, _borrowerId);
    }
    bindDataToCalendrUI(_allSessionsData) {
        let _all_installments = [];
        for (let inedexOuter in _allSessionsData) {
            let _LoanObj = {
                _id: null,
                loanTenureInMonths: null,
                loanStartDateTime: null,
                calculatedMonthlyAmountForEMI: null,
                loanType: null
            };
            _LoanObj = _allSessionsData[inedexOuter];
            for (let index = 0; index < _LoanObj.loanTenureInMonths; index++) {
                let installment = {
                    loanStartDateTime: null,
                    calculatedMonthlyAmountForEMI: null,
                    title: null,
                    date: null,
                    description: null,
                    id: null,
                };
                installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1).format("YYYY-MM-DD");
                installment.calculatedMonthlyAmountForEMI = _LoanObj.calculatedMonthlyAmountForEMI;
                installment.date = installment.loanStartDateTime;
                installment.id = _LoanObj._id;
                installment.description = '' + installment.calculatedMonthlyAmountForEMI;
                let _installmentString = '' + (index + 1).toString();
                installment.title = _installmentString + '. ' + installment.calculatedMonthlyAmountForEMI + '-' + this.utilityService.returnLoanType(_LoanObj.loanType);
                _all_installments.push(installment);
            }
        }
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            dateClick: this.handleDateClick.bind(this),
            eventClick: this.handleEeventClick.bind(this),
            events: _all_installments
        };
    }
    showDataOfLoanObjInModal(sessionObj, sessionApply, borrowerId) {
        const dialogRef = this.dialog.open(_lender_component__WEBPACK_IMPORTED_MODULE_13__["ModalApplySession"], {
            backdropClass: 'cdk-overlay-transparent-backdrop',
            hasBackdrop: true,
            data: {
                sessionObj: sessionObj,
                borrowerId: this.authenticationService.currentUserValue._id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log(`25 :: co :: Dialog result: ${JSON.stringify(result)}`);
        });
    }
};
CalendarComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__["SocketioService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_9__["ContactService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_10__["SessionsService"] }
];
CalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calendar',
        template: _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calendar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
        src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__["SocketioService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_9__["ContactService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_10__["SessionsService"]])
], CalendarComponent);



/***/ }),

/***/ "KJmD":
/*!*************************************************!*\
  !*** ./src/app/lender/lender-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LenderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LenderRoutingModule", function() { return LenderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _lender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lender.component */ "oJqp");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "fxdU");
/* harmony import */ var _new_session_new_session_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-session/new-session.component */ "j+nj");
/* harmony import */ var _search_borrower_search_borrower_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-borrower/search-borrower.component */ "0Phk");
/* harmony import */ var _my_sessions_my_sessions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-sessions/my-sessions.component */ "bSvo");
/* harmony import */ var _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../shared/messages/messages.component */ "rflR");
/* harmony import */ var _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../shared/profile/profile.component */ "uJHj");
/* harmony import */ var _shared_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../shared/wallet/wallet.component */ "KIMC");
/* harmony import */ var _shared_payment_payment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../shared/payment/payment.component */ "RZ+U");
/* harmony import */ var _shared_meeting_vc_meeting_vc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/meeting-vc/meeting-vc.component */ "b39p");
/* harmony import */ var _shared_session_view_session_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/session-view/session-view.component */ "kqwP");
/* harmony import */ var _shared_user_ratings_user_ratings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/user-ratings/user-ratings.component */ "/d/B");
/* harmony import */ var _components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/_guards/roles.guard */ "7ANl");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./calendar/calendar.component */ "JhGI");
/* harmony import */ var _loan_market_loan_market_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loan-market/loan-market.component */ "VSCM");
/* harmony import */ var _lend_now_lend_now_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lend-now/lend-now.component */ "swyj");
/* harmony import */ var _shared_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/update-password/update-password.component */ "YgAS");
/* harmony import */ var _shared_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/bank-details/bank-details.component */ "D+Ly");
/* harmony import */ var _shared_monthly_subscription_monthly_subscription_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/monthly-subscription/monthly-subscription.component */ "O0JG");
/* harmony import */ var _shared_payment_cancel_payment_cancel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/payment-cancel/payment-cancel.component */ "XSBl");
/* harmony import */ var _shared_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/payment-success/payment-success.component */ "72sj");
/* harmony import */ var _bank_details_verify_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../bank-details-verify.guard */ "wtEr");
/* harmony import */ var _shared_media_proccess_media_proccess_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/media-proccess/media-proccess.component */ "Tbeh");
/* harmony import */ var _shared_ratings_list_ratings_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/ratings-list/ratings-list.component */ "jcGx");




























/*import { StripeComponentComponent } from '../shared/stripe-component/stripe-component.component';*/
const routes = [
    {
        path: '',
        component: _lender_component__WEBPACK_IMPORTED_MODULE_4__["LenderComponent"],
        children: [
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'profile', component: _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'messages', component: _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'wallet', component: _shared_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_11__["WalletComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'payment', component: _shared_payment_payment_component__WEBPACK_IMPORTED_MODULE_12__["PaymentComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'payment-success', component: _shared_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_24__["PaymentSuccessComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'payment-cancel', component: _shared_payment_cancel_payment_cancel_component__WEBPACK_IMPORTED_MODULE_23__["PaymentCancelComponent"] },
            /*{ canActivate: [RolesGuard], path: 'payment-stripe', component: StripeComponentComponent },*/
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"], _bank_details_verify_guard__WEBPACK_IMPORTED_MODULE_25__["BankDetailsVerifyGuard"]], path: 'make-a-loan', component: _new_session_new_session_component__WEBPACK_IMPORTED_MODULE_6__["NewSessionComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'search-consulatnt', component: _search_borrower_search_borrower_component__WEBPACK_IMPORTED_MODULE_7__["SearchBorrowerComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'my-contract', component: _my_sessions_my_sessions_component__WEBPACK_IMPORTED_MODULE_8__["MySessionsComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'vcmeet', component: _shared_meeting_vc_meeting_vc_component__WEBPACK_IMPORTED_MODULE_13__["MeetingVcComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'sessionview', component: _shared_session_view_session_view_component__WEBPACK_IMPORTED_MODULE_14__["SessionViewComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'ratings', component: _shared_user_ratings_user_ratings_component__WEBPACK_IMPORTED_MODULE_15__["UserRatingsComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'calendar', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_17__["CalendarComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"], _bank_details_verify_guard__WEBPACK_IMPORTED_MODULE_25__["BankDetailsVerifyGuard"]], path: 'loan-market', component: _loan_market_loan_market_component__WEBPACK_IMPORTED_MODULE_18__["LoanMarketComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'lend-now', component: _lend_now_lend_now_component__WEBPACK_IMPORTED_MODULE_19__["LendNowComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'update-password', component: _shared_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_20__["UpdatePasswordComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'bank-details', component: _shared_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_21__["BankDetailsComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'my-subscriptions', component: _shared_monthly_subscription_monthly_subscription_component__WEBPACK_IMPORTED_MODULE_22__["MonthlySubscriptionComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'media-proccess', component: _shared_media_proccess_media_proccess_component__WEBPACK_IMPORTED_MODULE_26__["MediaProccessComponent"] },
            { canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: 'my-ratings', component: _shared_ratings_list_ratings_list_component__WEBPACK_IMPORTED_MODULE_27__["RatingsListComponent"] },
        ]
    },
    // otherwise redirect to home
    {
        canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]], path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
let LenderRoutingModule = class LenderRoutingModule {
};
LenderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], LenderRoutingModule);



/***/ }),

/***/ "VSCM":
/*!*************************************************************!*\
  !*** ./src/app/lender/loan-market/loan-market.component.ts ***!
  \*************************************************************/
/*! exports provided: LoanMarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanMarketComponent", function() { return LoanMarketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loan_market_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loan-market.component.html */ "vUt5");
/* harmony import */ var _loan_market_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-market.component.css */ "m1e0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/role */ "z56L");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/public-profile/public-profile.component */ "bLZ2");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/sessions.service */ "BZV/");
/* harmony import */ var src_app_shared_search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/search/search.component */ "9H8w");

















let LoanMarketComponent = class LoanMarketComponent {
    constructor(userService, dialog, socketService, utilityService, alertService, router, authenticationService, sessionsService) {
        this.userService = userService;
        this.dialog = dialog;
        this.socketService = socketService;
        this.utilityService = utilityService;
        this.alertService = alertService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.sessionsService = sessionsService;
        this.getLoanMarketData();
        this.sessionsService.getSessionNewAdded().subscribe(_allLoanMarketData => {
            if (_allLoanMarketData) {
                if (_allLoanMarketData["success"]) {
                    let temp_allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_10__["mapKeys"](this.allLoanMarketData, '_id');
                    if (_allLoanMarketData["data"].isDeleted) {
                        delete temp_allLoanMarketData[_allLoanMarketData["data"]._id];
                    }
                    else {
                        temp_allLoanMarketData[_allLoanMarketData["data"]._id] = _allLoanMarketData["data"];
                    }
                    this.allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_10__["values"](temp_allLoanMarketData);
                }
            }
        });
        this.sessionsService.getSessionUpdated().subscribe(_allLoanMarketData => {
            if (_allLoanMarketData) {
                if (_allLoanMarketData["success"]) {
                    let temp_allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_10__["mapKeys"](this.allLoanMarketData, '_id');
                    if (_allLoanMarketData["data"].isDeleted) {
                        delete temp_allLoanMarketData[_allLoanMarketData["data"]._id];
                    }
                    else {
                        temp_allLoanMarketData[_allLoanMarketData["data"]._id] = _allLoanMarketData["data"];
                    }
                    this.allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_10__["values"](temp_allLoanMarketData);
                }
            }
        });
    }
    ngOnInit() {
    }
    navigate2LoanProccess(loanId) {
        this.router.navigate(['/lender/lend-now'], { state: { loanId: loanId } });
    }
    returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(loanMarket) {
        let _currentUserId = this.authenticationService.currentUserValue._id;
        if (loanMarket && lodash__WEBPACK_IMPORTED_MODULE_10__["keys"](loanMarket.sessionAppliedByBorrowers).length > 0) {
            //#region proccess only if any one applied to current loan request
            let _list_of_pending_loans = null;
            let roleId2Check = null;
            let _list_of_pending_or_accepted_loans_by_me = null;
            //#region check whether anyone have applied to current loan or not
            _list_of_pending_loans = lodash__WEBPACK_IMPORTED_MODULE_10__["filter"](loanMarket.sessionAppliedByBorrowers, function (e) {
                if (e) {
                    switch (e.status) {
                        case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Pending:
                            return true;
                            break;
                        case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Accepted:
                        case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].AwaitingForApproval:
                            return false; //return true;
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
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Borrower:
                    roleId2Check = 'borrowerId';
                    break;
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Lender:
                    roleId2Check = 'lenderId';
                    break;
            }
            //#endregion set value for attribute depends on user's role
            //#region check whether I have already applied to current loan or not
            _list_of_pending_or_accepted_loans_by_me = lodash__WEBPACK_IMPORTED_MODULE_10__["filter"](loanMarket.sessionAppliedByBorrowers, function (e) {
                if (e) {
                    if (e[roleId2Check] == _currentUserId) {
                        //already applied then why to come here
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            });
            //#endregion check whether I have already applied to current loan or not
            //#region return boolean value for current request
            if (_list_of_pending_or_accepted_loans_by_me.length > 0) {
                return true;
            }
            else {
                return !(_list_of_pending_loans.length > 0); //!!(_list_of_pending_or_accepted_loans.length >= loanMarket.loanMaxBorrower);
            }
            //#endregion return boolean value for current request
            //#endregion proccess only if any one applied to current loan request
        }
        else {
            //#region no one applied till now for current loan request
            return false;
            //#endregion no one applied till now for current loan request
        }
    }
    usersProfile(userObj) {
        //#region fetch creator id
        this.userService.getUserById(userObj._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                //console.log('84', this.authenticationService.currentUserValue);
                const dialogRef = this.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__["PublicProfileComponent"], {
                    maxWidth: '100vw',
                    maxHeight: '100vh',
                    height: '100%',
                    width: '100%',
                    hasBackdrop: true,
                    data: {
                        userObj: lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"](data['data']),
                        adminViewT: false
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    //console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
                });
            }
            else {
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            this.alertService.error(errorMsg2show);
        });
        //#endregion fetch creator id
    }
    showSearchPanel() {
        //console.log('84', this.authenticationService.currentUserValue);
        const dialogRef = this.dialog.open(src_app_shared_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"], {
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
                    case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Borrower:
                        _obj2Save.isLoanRequested = false;
                        emitThisEvent = 'sessions_response_getall_bysearch_from_borrower';
                        break;
                    case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Lender:
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
            }
            else {
                this.allLoanMarketData = [];
            }
        });
    }
};
LoanMarketComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_14__["UserService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_9__["SocketioService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_15__["SessionsService"] }
];
LoanMarketComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loan-market',
        template: _raw_loader_loan_market_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loan_market_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_14__["UserService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
        src_app_socketio_service__WEBPACK_IMPORTED_MODULE_9__["SocketioService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_15__["SessionsService"]])
], LoanMarketComponent);



/***/ }),

/***/ "ZbtL":
/*!********************************************************!*\
  !*** ./src/app/lender/lend-now/lend-now.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".terms li{\r\n    font-size: smaller;\r\n\r\n    font-weight: 300;\r\n    line-height: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbmQtbm93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0lBRWxCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImxlbmQtbm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMgbGl7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcblxyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "Zy6n":
/*!********************************************************!*\
  !*** ./src/app/lender/calendar/calendar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "bSvo":
/*!*************************************************************!*\
  !*** ./src/app/lender/my-sessions/my-sessions.component.ts ***!
  \*************************************************************/
/*! exports provided: MySessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySessionsComponent", function() { return MySessionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_sessions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-sessions.component.html */ "paPN");
/* harmony import */ var _my_sessions_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-sessions.component.css */ "kUut");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "VHTt");
/* harmony import */ var src_app_lender_lender_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/lender/lender.component */ "oJqp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/sessions.service */ "BZV/");
/* harmony import */ var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/public-profile/public-profile.component */ "bLZ2");

















let MySessionsComponent = class MySessionsComponent {
    constructor(authenticationService, sessionsService, socketService, dialog, contactService, utilityService, alertService, userService, router, _cdr) {
        this.authenticationService = authenticationService;
        this.sessionsService = sessionsService;
        this.socketService = socketService;
        this.dialog = dialog;
        this.contactService = contactService;
        this.utilityService = utilityService;
        this.alertService = alertService;
        this.userService = userService;
        this.router = router;
        this._cdr = _cdr;
        this.loading = false;
        this.SessionStatus = _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"];
        this.SessionStatusTypeFilter = [];
        this.checkCreatedByUserId = '';
        this.checkCreatedByT = false;
        this.selectedTab = 'active';
        this._ = lodash__WEBPACK_IMPORTED_MODULE_9__;
        let paramobj = history.state;
        if (paramobj) {
            this.selectedTab = paramobj['selectedTab'];
            delete history.state['selectedTab'];
        }
        if (!this.selectedTab) {
            this.selectedTab = 'active';
        }
        this.getUserLoanTypeWiseCountDetailsByUserId();
        this.sessionsService.getSessionAllByLenderId(this.authenticationService.currentUserValue._id, null, null, null, true, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
            .subscribe(data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
                for (let _items in data['data']) {
                    let _currentObj = data['data'][_items];
                    _keyPairedMapObj[_currentObj._id] = _currentObj;
                }
                this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
                this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId')));
                //this.alertService.success(data['message'], true);
                //this.element_btn_click_addSession_skills_verification.click();
            }
            else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            //this.alertService.error(errorMsg2show);
        });
        this.socketService.getUpdatesForSessionAllByLenderId()
            .subscribe(data => {
            if (data && data['success']) {
                let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
                for (let _items in data['data']) {
                    let _currentObj = data['data'][_items];
                    _keyPairedMapObj[_currentObj._id] = _currentObj;
                }
                this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
                this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //_sessionAppliedByLenders
                //this.loading = false;
            }
            else {
                //this.loading = false;
            }
        }, error => {
            //this.loading = false;
        });
        this.socketService.getCurrentSessionAll().subscribe(_allSessionsData => {
            if (_allSessionsData) {
                let data = { 'data': _allSessionsData };
                let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
                for (let _items in data['data']) {
                    let _currentObj = data['data'][_items];
                    _keyPairedMapObj[_currentObj._id] = _currentObj;
                }
                this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
                this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId')));
            }
            else {
                //this.allSessionsData = [];
            }
        });
        let _obj2Save = {
            createdBy: this.authenticationService.currentUserValue._id
        };
        this.socketService.getSessionAllByQuery(false, _obj2Save, null);
        this.setFilteresOfMySessionDependsOnTab(this.selectedTab);
    }
    setFilteresOfMySessionDependsOnTab(selectedTab) {
        switch (selectedTab) {
            case 'received':
                this.SessionStatusTypeFilter = [_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending, _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].AwaitingForApproval];
                this.checkCreatedByUserId = this.authenticationService.currentUserValue._id;
                this.checkCreatedByT = true;
                break;
            case 'sent':
                this.SessionStatusTypeFilter = [_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].AwaitingForApproval];
                this.checkCreatedByUserId = this.authenticationService.currentUserValue._id;
                this.checkCreatedByT = false;
                break;
            case 'canceled':
                this.SessionStatusTypeFilter = [_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Canceled, _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Rejected, _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].RejectedOngoing, _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Suspended, _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].RejectedOngoingWithRefund];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;
            case 'active':
                this.SessionStatusTypeFilter = [_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Accepted];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;
            case 'paid':
                this.SessionStatusTypeFilter = [_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Completed];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;
            case 'unpaid':
                this.SessionStatusTypeFilter = [_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].RejectedOngoing, _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Suspended, _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Unpaid];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;
            case 'inkasso':
                this.SessionStatusTypeFilter = [_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Rejected, _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].RejectedOngoingWithRefund, _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Inkasso];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        //this.subscription.unsubscribe();
    }
    showAppliedToSession(sessionObj) {
        let _proccessedSessionObj = null;
        switch (this.authenticationService.currentUserValue.role) {
            case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_9__["filter"](sessionObj.sessionAppliedByBorrowers, { "lenderId": this.authenticationService.currentUserValue._id });
                break;
            default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](sessionObj);
                break;
        }
        //console.log('214', this.authenticationService.currentUserValue);
        const dialogRef = this.dialog.open(src_app_lender_lender_component__WEBPACK_IMPORTED_MODULE_7__["ModalAppliedSessionDisplay"], {
            backdropClass: 'custom-dialog-backdrop-class',
            panelClass: 'my_session_details_modal',
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            data: {
                sessionObj: _proccessedSessionObj,
                endUserId: this.authenticationService.currentUserValue._id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (result.data) {
                    if (result.data.status && result.data.sessionApply) {
                        let _loanId = result.data.sessionApply.loanId;
                        let _sessionPrice = result.data.sessionApply.loanAmount;
                        let _loanApplyId = result.data.sessionApply._id;
                        let _borrowerId = result.data.sessionApply.borrowerId;
                        let _transactionId = result.data.transactionId;
                        let _status = result.data.status;
                        //initiate payment here
                        //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
                        let _allowed2CreateContactForSessionT = false;
                        switch (_status) {
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Accepted:
                                //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                                this.proccedAppliedToSession(sessionObj, _loanApplyId);
                                _allowed2CreateContactForSessionT = true;
                                break;
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending:
                                //this.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);
                                break;
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Rejected:
                                this.socketService.setSessionApplyUpdateStatus(true, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
                                break;
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].RejectedOngoing:
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].RejectedOngoingWithRefund:
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Suspended:
                                //this.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);
                                break;
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Completed:
                                //this.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);
                                break;
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Active:
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Ongoing:
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].OngoingInitiated:
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].AwaitingForApproval:
                                //this.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);
                                break;
                            default:
                                _allowed2CreateContactForSessionT = false;
                                break;
                        }
                        /*
                        if (_transactionId) {
                          this.socketService.setSessionUpdateStatusForTransaction(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
                          if (_allowed2CreateContactForSessionT) {
                            let _adminUsersArray = [];
                            _adminUsersArray.push(this.authenticationService.currentUserValue._id);
                            _adminUsersArray.push(_borrowerId);
                            let _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, _proccessedSessionObj.sessionSubject, _loanId, _loanApplyId, _adminUsersArray, null, null);
                            this.socketService.sendEventToAddNewContact(_currentContactObj);
                          }
                        } else {
                          //#region other cases where need to update status of session
                          switch (_status) {
                            case SessionStatus.Pending:
                            case SessionStatus.Rejected:
                              break;
                            default:
                              if (!_transactionId) {
                                this.socketService.setSessionUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id);
                              }
                              break;
                          }
                          //#endregion other cases where need to update status of session
                        }
                        */
                    }
                    if (result.data.updatedSessionObj) {
                        let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
                        _keyPairedMapObj[result.data.updatedSessionObj._id] = result.data.updatedSessionObj;
                        this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
                        this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId')));
                        this._cdr.detectChanges();
                    }
                }
            }
            //console.log(`129 :: Dialog result: ${JSON.stringify(result)}`);
        });
    }
    check4applyToSession(sessionObj, checkCreatedBySelfT) {
        if (sessionObj && sessionObj.sessionAppliedByBorrowers) {
            if (checkCreatedBySelfT) {
                if (sessionObj.createdBy == this.authenticationService.currentUserValue._id) {
                    if (lodash__WEBPACK_IMPORTED_MODULE_9__["filter"](sessionObj.sessionAppliedByBorrowers, { "lenderId": this.authenticationService.currentUserValue._id }).length > 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    returnSessionApplyStatus(sessionApply) {
        let _currentStatus = _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending;
        try {
            if ((sessionApply.status == _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending || sessionApply.status == 'Pending' || sessionApply.status == '' || sessionApply.status == null || typeof sessionApply.status == 'undefined')) {
                _currentStatus = _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending;
            }
            else {
                _currentStatus = sessionApply.status;
            }
        }
        catch (ex) { }
        return _currentStatus;
    }
    proccedAppliedToSession(sessionObj, loanApplyId) {
        let loanId = sessionObj._id;
        let _proccessedSessionObj = null;
        switch (this.authenticationService.currentUserValue.role) {
            case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_9__["filter"](sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id });
                break;
            default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](sessionObj);
                break;
        }
        if (!loanApplyId) {
            loanApplyId = _proccessedSessionObj.sessionAppliedByBorrowers[0]._id;
        }
        this.router.navigate(['/lender/lend-now'], { state: { loanId: loanId, loanApplyId: loanApplyId } });
    }
    getUserLoanTypeWiseCountDetailsByUserId() {
        this.userService.getUserLoanTypeWiseCountDetailsByUserId(this.authenticationService.currentUserValue._id, this.authenticationService.currentUserValue.role)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
            .subscribe(data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
                this.authenticationService.currentUserLoanTypeWiseCountDetails = data['data'];
            }
            else {
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
        });
    }
    usersProfile(userObj) {
        //#region fetch creator id
        this.userService.getUserById(userObj._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                //console.log('84', this.authenticationService.currentUserValue);
                const dialogRef = this.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_16__["PublicProfileComponent"], {
                    maxWidth: '100vw',
                    maxHeight: '100vh',
                    height: '100%',
                    width: '100%',
                    hasBackdrop: true,
                    data: {
                        userObj: lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](data['data']),
                        adminViewT: false
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    //console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
                });
            }
            else {
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            this.alertService.error(errorMsg2show);
        });
        //#endregion fetch creator id
    }
    deleteSessionById(sessionId) {
        this.sessionsService.deleteSessionById(sessionId, this.authenticationService.currentUserValue._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
            .subscribe(_allLoanMarketData => {
            if (_allLoanMarketData && _allLoanMarketData['success']) {
                //alert(JSON.stringify( data));
                if (_allLoanMarketData) {
                    if (_allLoanMarketData["success"]) {
                        let temp_allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_9__["mapKeys"](this.allSessionsData, '_id');
                        if (_allLoanMarketData["data"].isDeleted) {
                            delete temp_allLoanMarketData[_allLoanMarketData["data"]._id];
                            this.alertService.success('Deleted successfully');
                        }
                        else {
                            temp_allLoanMarketData[_allLoanMarketData["data"]._id] = _allLoanMarketData["data"];
                            this.alertService.success('Updated successfully');
                        }
                        this.allSessionsData = lodash__WEBPACK_IMPORTED_MODULE_9__["values"](temp_allLoanMarketData);
                        this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId')));
                        this._cdr.detectChanges();
                    }
                }
                this.loading = false;
            }
            else {
                //alert(JSON.stringify(data['message']));
                this.alertService.error(_allLoanMarketData['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            this.alertService.error(errorMsg2show);
            this.loading = false;
        });
    }
};
MySessionsComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_15__["SessionsService"] },
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_10__["ContactService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_12__["AlertService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
MySessionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-sessions',
        template: _raw_loader_my_sessions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_sessions_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_15__["SessionsService"],
        src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
        src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_10__["ContactService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_12__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], MySessionsComponent);



/***/ }),

/***/ "e25r":
/*!*****************************************!*\
  !*** ./src/app/lender/lender.module.ts ***!
  \*****************************************/
/*! exports provided: LenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LenderModule", function() { return LenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _lender_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lender-routing.module */ "KJmD");
/* harmony import */ var _lender_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lender.component */ "oJqp");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "fxdU");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "2avt");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "3VcK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../shared/shared.module */ "PCNd");
/* harmony import */ var _new_session_new_session_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-session/new-session.component */ "j+nj");
/* harmony import */ var _search_borrower_search_borrower_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-borrower/search-borrower.component */ "0Phk");
/* harmony import */ var _my_sessions_my_sessions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-sessions/my-sessions.component */ "bSvo");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calendar/calendar.component */ "JhGI");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _loan_market_loan_market_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loan-market/loan-market.component */ "VSCM");
/* harmony import */ var _lend_now_lend_now_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lend-now/lend-now.component */ "swyj");




















_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_15__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_16__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_17__["default"]
]);
let LenderModule = class LenderModule {
};
LenderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lender_component__WEBPACK_IMPORTED_MODULE_6__["LenderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _new_session_new_session_component__WEBPACK_IMPORTED_MODULE_11__["NewSessionComponent"], _search_borrower_search_borrower_component__WEBPACK_IMPORTED_MODULE_12__["SearchBorrowerComponent"], _my_sessions_my_sessions_component__WEBPACK_IMPORTED_MODULE_13__["MySessionsComponent"], _lender_component__WEBPACK_IMPORTED_MODULE_6__["ModalApplySession"], _lender_component__WEBPACK_IMPORTED_MODULE_6__["ModalAppliedSessionDisplay"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__["CalendarComponent"], _loan_market_loan_market_component__WEBPACK_IMPORTED_MODULE_18__["LoanMarketComponent"], _lend_now_lend_now_component__WEBPACK_IMPORTED_MODULE_19__["LendNowComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            _lender_routing_module__WEBPACK_IMPORTED_MODULE_5__["LenderRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_15__["FullCalendarModule"]
        ],
        entryComponents: [_lender_component__WEBPACK_IMPORTED_MODULE_6__["ModalApplySession"], _lender_component__WEBPACK_IMPORTED_MODULE_6__["ModalAppliedSessionDisplay"]]
    })
], LenderModule);



/***/ }),

/***/ "fxdU":
/*!***********************************************!*\
  !*** ./src/app/lender/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "nAv/");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "ByGf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "VHTt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/public-profile/public-profile.component */ "bLZ2");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/add-funds.service */ "3gPe");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/sessions.service */ "BZV/");
/* harmony import */ var _lender_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lender.component */ "oJqp");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var src_app_shared_money_transfer_data_money_transfer_data_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/money-transfer-data/money-transfer-data.component */ "rZf2");




















let HomeComponent = class HomeComponent {
    constructor(userService, socketService, formBuilder, sessionsService, alertService, utilityService, dialog, authenticationService, fundService, router, contactService, _cdr) {
        this.userService = userService;
        this.socketService = socketService;
        this.formBuilder = formBuilder;
        this.sessionsService = sessionsService;
        this.alertService = alertService;
        this.utilityService = utilityService;
        this.dialog = dialog;
        this.authenticationService = authenticationService;
        this.fundService = fundService;
        this.router = router;
        this.contactService = contactService;
        this._cdr = _cdr;
        this.show_more = true;
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = false;
        this.allMyActiveLoanCount = 0;
        this.allMyDisbursedLoanCount = 0;
        this.allMyUnSignedContractLoanCount = 0;
        this.allMyProfitOverviewCount = 0; //undone
        this.allMyPaidContractCount = 0; //undone
        this.allMyPaidLoanCount = 0; //undone
        this.Role = _models__WEBPACK_IMPORTED_MODULE_6__["Role"];
        this.showSessionApplyInRoot = true; //by default set it to// false;
        this.allSessionApplyData = [];
        this.checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot();
        this.checkCreatedByUserId = null;
        this.checkCreatedByT = null;
        let _obj2Save = {};
        //#region get count for allMyActiveLoanCount i.e. status set to paid
        _obj2Save = {
            lenderId: this.authenticationService.currentUserValue._id,
            status: _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Completed
        };
        this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyPaidContractCount')
            .subscribe(data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
                this.allMyPaidContractCount = data['data'];
                this.allMyPaidLoanCount = data['data'];
            }
            else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            //this.alertService.error(errorMsg2show);
            this.loading = false;
        });
        //#endregion get count for allMyActiveLoanCount i.e. status set to paid
        //#region get count for allMyActiveLoanCount i.e. status set to accepted
        _obj2Save = {
            lenderId: this.authenticationService.currentUserValue._id,
            status: _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Accepted
        };
        this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyActiveLoanCount')
            .subscribe(data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
                this.allMyActiveLoanCount = data['data'];
            }
            else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            //this.alertService.error(errorMsg2show);
            this.loading = false;
        });
        //#endregion get count for allMyActiveLoanCount i.e. status set to accepted
        //#region get count for allMyDisbursedLoanCount i.e. status set to accepted and loan amount paid by lender
        _obj2Save = {
            lenderId: this.authenticationService.currentUserValue._id,
            status: _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Accepted,
            isLoanAmountPaidByLender: true
        };
        this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyDisbursedLoanCount')
            .subscribe(data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
                this.allMyDisbursedLoanCount = data['data'];
            }
            else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            //this.alertService.error(errorMsg2show);
            this.loading = false;
        });
        //#endregion get count for allMyDisbursedLoanCount i.e. status set to accepted and loan amount paid by lender
        //#region get count for allMyUnSignedContractLoanCount i.e. status set to AwaitingForApproval
        _obj2Save = {
            lenderId: this.authenticationService.currentUserValue._id,
            status: _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].AwaitingForApproval
        };
        this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyUnSignedContractLoanCount')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
            .subscribe(data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
                this.allMyUnSignedContractLoanCount = data['data'];
            }
            else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            //this.alertService.error(errorMsg2show);
            this.loading = false;
        });
        //#endregion get count for allMyUnSignedContractLoanCount i.e. status set to AwaitingForApproval
        this.sessionsService.getSessionAllByLenderId(this.authenticationService.currentUserValue._id, null, null, null, true, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
            .subscribe(data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.allSessionsData = data['data'];
                this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //_sessionAppliedByLenders
                this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
                setTimeout(() => {
                    this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
                }, 3000);
                //this.alertService.success(data['message'], true);
                this.loading = false;
                //this.element_btn_click_addSession_skills_verification.click();
            }
            else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            //this.alertService.error(errorMsg2show);
            this.loading = false;
        });
        this.sessionsService.getUpdatesForSessionAllByLenderId()
            .subscribe(data => {
            if (data && data['success']) {
                let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
                for (let _items in data['data']) {
                    let _currentObj = data['data'][_items];
                    _keyPairedMapObj[_currentObj._id] = _currentObj;
                }
                this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
                this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //_sessionAppliedByLenders
                this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
                this.loading = false;
            }
            else {
                this.loading = false;
            }
        }, error => {
            this.loading = false;
        });
        /*
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
            //console.log('36 :: called');
            */
    }
    checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot() {
        this.userService.getUserIncomeExpenseDetailsByUserId(this.authenticationService.currentUserValue._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
            .subscribe(data => {
            ////console.log('data => ', data)
            if (data && data['success']) {
                if ((data["data"]["bankName"] && data["data"]["accountNumber"]) || data["data"]["isUsersBankDetailsSubmitted"]) {
                    this.authenticationService.currentUserValue.isUsersBankDetailsSubmitted = true;
                    this.authenticationService.sendCurrentUserObj(this.authenticationService.currentUserValue);
                }
                if (data["data"]["totalIncome4currentUser"] && data["data"]["totalExpense4currentUser"]) {
                    this.authenticationService.currentUserValue.totalIncome4currentUser = data["data"]["totalIncome4currentUser"];
                    this.authenticationService.currentUserValue.totalExpense4currentUser = data["data"]["totalExpense4currentUser"];
                    this.authenticationService.currentUserValue.totalAllowedBudget = this.authenticationService.currentUserValue.totalIncome4currentUser - this.authenticationService.currentUserValue.totalExpense4currentUser;
                    this.authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified = true;
                    this.authenticationService.sendCurrentUserObj(this.authenticationService.currentUserValue);
                }
            }
            else {
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            this.loading = false;
        });
    }
    ngOnInit() {
        //this.socketService.getUserOnlineList();
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        //this.subscription.unsubscribe();
        //this.subscription1.unsubscribe();
        //this.subscription2.unsubscribe();
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
    usersProfile(userObj) {
        //console.log('95', this.authenticationService.currentUserValue);
        const dialogRef = this.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_9__["PublicProfileComponent"], {
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
    clickedOnSessionChatVideo(sessionObj, AVTrueChatFalse) {
        let _contactId = this.contactService.returnContactIdForSession(sessionObj._id, sessionObj.sessionAppliedByBorrowers[0]._id);
        let _parentRouting = '';
        switch (this.currentUser.role) {
            case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Borrower:
                _parentRouting = 'borrower';
                break;
            case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Lender:
                _parentRouting = 'lender';
                break;
            case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Admin:
                _parentRouting = 'admin';
                break;
        }
        this.router.navigate(['/' + _parentRouting + '/messages'], { state: { contactId: _contactId, AVTrueChatFalse: AVTrueChatFalse } });
    }
    showAppliedToSession(sessionObj) {
        let _proccessedSessionObj = null;
        switch (this.authenticationService.currentUserValue.role) {
            case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_18__["filter"](sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id });
                break;
            case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Lender:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_18__["filter"](sessionObj.sessionAppliedByBorrowers, { "lenderId": this.authenticationService.currentUserValue._id }); //_sessionAppliedByLenders
                break;
            default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](sessionObj);
                break;
        }
        //console.log('214', this.authenticationService.currentUserValue);
        const dialogRef = this.dialog.open(_lender_component__WEBPACK_IMPORTED_MODULE_17__["ModalAppliedSessionDisplay"], {
            backdropClass: 'custom-dialog-backdrop-class',
            panelClass: 'my_session_details_modal',
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            data: {
                sessionObj: _proccessedSessionObj,
                lenderId: this.authenticationService.currentUserValue._id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (result.data) {
                    //console.log(`86 :: msc :: Dialog result: ${JSON.stringify(result)}`);
                    if (result.data.status && result.data.sessionApply) {
                        let _loanApplyId = result.data.sessionApply._id;
                        let _status = result.data.status;
                        //initiate payment here
                        //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);
                        let _allowed2CreateContactForSessionT = false;
                        switch (_status) {
                            case _models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Accepted:
                                //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                                this.proccedAppliedToSession(sessionObj, _loanApplyId);
                                break;
                        }
                    }
                    if (result.data.updatedSessionObj) {
                        let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
                        _keyPairedMapObj[result.data.updatedSessionObj._id] = result.data.updatedSessionObj;
                        this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
                        this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //_sessionAppliedByLenders
                        this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
                        this._cdr.detectChanges();
                    }
                }
            }
        });
    }
    proccedAppliedToSession(sessionObj, loanApplyId) {
        let loanId = sessionObj._id;
        let _proccessedSessionObj = null;
        switch (this.authenticationService.currentUserValue.role) {
            case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_18__["filter"](sessionObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id });
                break;
            default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](sessionObj);
                break;
        }
        if (!loanApplyId) {
            loanApplyId = _proccessedSessionObj.sessionAppliedByBorrowers[0]._id;
        }
        this.router.navigate(['/lender/lend-now'], { state: { loanId: loanId, loanApplyId: loanApplyId } });
    }
    returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender(LoanApplyObj, currentRowDate, _key) {
        let _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
                if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey].createdOnForLoanAmountPaidToLenderConfirmByLender) {
                    return true;
                }
            }
        }
        return false;
    }
    returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, currentRowDate, _key) {
        let _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
                return true;
            }
        }
        return false;
    }
    calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower() {
        //#region calculate and update next EMI of applied loans
        for (let item in this.allSessionsData) {
            let _LoanObj = this.allSessionsData[item];
            if (_LoanObj) {
                _LoanObj.nextInstallment = null;
                let _proccessedSessionObj = null;
                switch (this.authenticationService.currentUserValue.role) {
                    case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Borrower:
                        _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](_LoanObj);
                        _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_18__["filter"](_LoanObj.sessionAppliedByBorrowers, { "borrowerId": this.authenticationService.currentUserValue._id });
                        break;
                    case _models__WEBPACK_IMPORTED_MODULE_6__["Role"].Lender:
                        _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](_LoanObj);
                        _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_18__["filter"](_LoanObj.sessionAppliedByBorrowers, { "lenderId": this.authenticationService.currentUserValue._id }); //_sessionAppliedByLenders
                        break;
                    default:
                        _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](_LoanObj);
                        break;
                }
                for (let indexOuter in _proccessedSessionObj.sessionAppliedByBorrowers) {
                    let LoanApplyObj = _proccessedSessionObj.sessionAppliedByBorrowers[indexOuter];
                    if (LoanApplyObj) {
                        for (let index = 0; index < _LoanObj.loanTenureInMonths; index++) {
                            let installment = {
                                loanStartDateTime: null,
                                calculatedMonthlyAmountForEMI: null
                            };
                            installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1);
                            if (!this.returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, installment.loanStartDateTime, null)) {
                                if (!_LoanObj.nextInstallment) {
                                    if (this.utilityService.moment(_LoanObj.nextInstallment).isBefore(this.utilityService.moment(installment.loanStartDateTime))) {
                                        if (!_LoanObj.nextInstallmentBorrowerFirstName) {
                                            _LoanObj.nextInstallmentBorrowerFirstName = this.userService.returnUsersObjFromLocal(null, false, 'firstName', _LoanObj.nextInstallmentBorrowerId);
                                        }
                                        break;
                                    }
                                }
                                _LoanObj.applicationDate = (LoanApplyObj.eSignatureLendersCreatedOn || LoanApplyObj.eSignatureBorrowersCreatedOn);
                                _LoanObj.nextInstallment = installment.loanStartDateTime;
                                _LoanObj.nextInstallmentBorrowerId = LoanApplyObj.borrowerId;
                                _LoanObj.nextInstallmentBorrowerFirstName = this.userService.returnUsersObjFromLocal(null, false, 'firstName', _LoanObj.nextInstallmentBorrowerId);
                                break;
                            }
                        }
                    }
                }
                this.allSessionsData[item] = _LoanObj;
            }
        }
        //#endregion calculate and update next EMI of applied loans
        //#region create session apply from sessions
        if (this.showSessionApplyInRoot) {
            this.reformSessionApplyFromSessionsData(true);
        }
        //#endregion create session apply from sessions
    }
    reformSessionApplyFromSessionsData(resetOldT = false) {
        //#region create session apply from sessions
        if (resetOldT) {
            this.allSessionApplyData = [];
        }
        for (let item in this.allSessionsData) {
            for (let item in this.allSessionsData) {
                let _LoanObj = this.allSessionsData[item];
                if (_LoanObj) {
                    for (let indexOuter in _LoanObj.sessionAppliedByBorrowers) {
                        let LoanApplyObj = _LoanObj.sessionAppliedByBorrowers[indexOuter];
                        if (LoanApplyObj) {
                            let sessionForBorrower = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](_LoanObj);
                            delete sessionForBorrower.sessionAppliedByBorrowers;
                            LoanApplyObj.sessionForBorrower = sessionForBorrower;
                            LoanApplyObj.applicationDate = _LoanObj.applicationDate;
                            LoanApplyObj.nextInstallment = _LoanObj.nextInstallment;
                            this.allSessionApplyData[LoanApplyObj._id] = LoanApplyObj;
                        }
                    }
                }
            }
        }
        //#endregion create session apply from sessions
    }
    LoanMoneyTransferStatusChange(event, LoanObj, LoanApplyObj, installmentKey = null, updateLastInstallmentPaymentStatus = false) {
        //console.log('585', this.authenticationService.currentUserValue);
        if (installmentKey) {
            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                for (let _items in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                    let _currentObj = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items];
                    if (_currentObj) {
                        if (_currentObj.createdOnForLoanAmountPaidToLender && !_currentObj.createdOnForLoanAmountPaidToLenderConfirmByLender) {
                            this.alertService.error('Last installment payment confirmation is pending from Lender', true);
                            return;
                        }
                    }
                }
            }
        }
        if (updateLastInstallmentPaymentStatus) {
            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                for (let _items in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                    let _currentObj = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items];
                    if (_currentObj) {
                        if (_currentObj.createdOnForLoanAmountPaidToLender && !_currentObj.createdOnForLoanAmountPaidToLenderConfirmByLender) {
                            installmentKey = _currentObj.installmentKey;
                            break;
                        }
                    }
                }
            }
            if (!installmentKey) {
                this.alertService.error('Last installment payment not done by borrower', true);
                return;
            }
        }
        let LoanApplyObjCurrent4Installment = {
            isInstallmentPaidByAdmin: null,
            transactionOnForLoanAmountPaidToLender: null,
            transactionIdForLoanAmountPaidToLender: null,
            installmentKey: null,
            createdOnForLoanAmountPaidToLender: null,
            transactionOnForLoanAmountPaidToLenderConfirmByLender: null,
            createdOnForLoanAmountPaidToLenderConfirmByLender: null
        };
        if (event.srcElement.checked) {
            //#region update status add data
            if (installmentKey) {
                if (!updateLastInstallmentPaymentStatus) {
                    //#region Borrower updating status for installment done
                    //#endregion Borrower updating status for installment done
                }
                else {
                    //#region Lender updating status for installment done by Borrower
                    //#endregion Lender updating status for installment done by Borrower
                }
                //#region direct action here with BYPASS ALL CASES
                LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin = false;
                LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender = this.utilityService._.now();
                LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender = 'AUTO-SAVED';
                LoanApplyObjCurrent4Installment.installmentKey = this.utilityService.moment(installmentKey).format('DD-MMM-YYYY');
                LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender = this.utilityService._.now();
                LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender = this.utilityService._.now();
                LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender = this.utilityService._.now();
                let _loanTenureInMonths = parseInt(LoanObj.loanTenureInMonths);
                if (_loanTenureInMonths == (lodash__WEBPACK_IMPORTED_MODULE_18__["keys"](LoanApplyObj.installmentWiseLoanAmountPaidByBorrower).length + 1)) {
                    if (confirm("This is confirmation of last installment") == false) {
                        event.srcElement.checked = false;
                        return;
                    }
                }
                if (!LoanApplyObj.isLoanAmountPaidByLender) {
                    //#region direct action here with BYPASS ALL CASES
                    this.middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, true, true);
                    //#endregion direct action here with BYPASS ALL CASES
                }
                this.socketService.sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, installmentKey, _loanTenureInMonths, LoanApplyObjCurrent4Installment)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
                    .subscribe(details => {
                    if (details && details["success"]) {
                        this.broadcastUpdatedEvent2All(details["data"]);
                    }
                });
                //#endregion direct action here with BYPASS ALL CASES
            }
            else {
                if (!LoanApplyObj.isLoanAmountPaidByLender) {
                    //#region Lender updating status for payment done
                    //#endregion Lender updating status for payment done
                }
                else {
                    //#region Borrower updating status for payment done by Lender
                    //#endregion Borrower updating status for payment done by Lender
                }
                //#region direct action here with BYPASS ALL CASES
                this.middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, true, false);
                //#endregion direct action here with BYPASS ALL CASES
            }
            //#endregion update status add data
        }
        else {
            //#region update status remove data
            if (installmentKey) {
                if (!updateLastInstallmentPaymentStatus) {
                    //#region Borrower updating status for installment done
                    //#endregion Borrower updating status for installment done
                }
                else {
                    //#region Lender updating status for installment done by Borrower
                    //#endregion Lender updating status for installment done by Borrower
                }
                //#region direct action here with BYPASS ALL CASES
                LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin = false;
                LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender = null;
                LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender = null;
                LoanApplyObjCurrent4Installment.installmentKey = this.utilityService.moment(installmentKey).format('DD-MMM-YYYY');
                LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender = null;
                LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender = null;
                LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender = null;
                LoanApplyObjCurrent4Installment["installmentKeyDeleteThisKey"] = true;
                let _loanTenureInMonths = parseInt(LoanObj.loanTenureInMonths);
                this.socketService.sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, installmentKey, _loanTenureInMonths, LoanApplyObjCurrent4Installment)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
                    .subscribe(details => {
                    if (details && details["success"]) {
                        this.broadcastUpdatedEvent2All(details["data"]);
                    }
                });
                //#endregion direct action here with BYPASS ALL CASES
            }
            else {
                if (!LoanApplyObj.isLoanAmountPaidByLender) {
                    //#region Lender updating status for payment done
                    //#endregion Lender updating status for payment done
                }
                else {
                    //#region Borrower updating status for payment done by Lender
                    //#endregion Borrower updating status for payment done by Lender
                }
                //#region direct action here with BYPASS ALL CASES
                this.middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, false, false);
                //#endregion direct action here with BYPASS ALL CASES
            }
            //#endregion update status remove data
        }
    }
    middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, addTremoveF, addedWithInstallment) {
        let LoanApplyObjCurrent = {
            isLoanAmountPaidByLender: null,
            _id: null,
            createdOnForLoanAmountPaidByLender: null,
            transactionIdForLoanAmountPaidByLender: null,
            transactionOnForLoanAmountPaidByLender: null,
            transactionDescriptionForLoanAmountPaidByLender: null,
            transactionOnForLoanAmountPaidByLenderConfirmByBorrower: null,
            createdOnForLoanAmountPaidByLenderConfirmByBorrower: null,
            transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower: null,
            isLoanAmountPaidByLenderConfirmByBorrower: null,
        };
        if (addTremoveF) {
            LoanApplyObjCurrent.isLoanAmountPaidByLender = true;
            LoanApplyObjCurrent._id = LoanApplyObj._id;
            LoanApplyObjCurrent.createdOnForLoanAmountPaidByLender = this.utilityService._.now();
            LoanApplyObjCurrent.transactionIdForLoanAmountPaidByLender = 'AUTO-SAVED';
            LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender = this.utilityService._.now();
            LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLender = 'This data is auto saved' + (addedWithInstallment ? ' with installment payment' : '');
            LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower = true;
            LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();
            LoanApplyObjCurrent.createdOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();
            LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower = 'This data is auto saved' + (addedWithInstallment ? ' with installment payment' : '');
        }
        else {
            LoanApplyObjCurrent.isLoanAmountPaidByLender = false;
            LoanApplyObjCurrent._id = LoanApplyObj._id;
            LoanApplyObjCurrent.createdOnForLoanAmountPaidByLender = this.utilityService._.now();
            LoanApplyObjCurrent.transactionIdForLoanAmountPaidByLender = 'AUTO-SAVED';
            LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender = this.utilityService._.now();
            LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLender = 'This data is auto saved' + (addedWithInstallment ? ' with installment payment' : '');
            LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower = false;
            LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();
            LoanApplyObjCurrent.createdOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();
            LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower = 'This data is auto saved' + (addedWithInstallment ? ' with installment payment' : '');
        }
        this.socketService.sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, LoanApplyObjCurrent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])()).subscribe(details => {
            if (details && details["success"]) {
                this.broadcastUpdatedEvent2All(details["data"]);
            }
        });
    }
    LoanMoneyTransferStatusModel(LoanObj, LoanApplyObj, installmentKey = null, updateLastInstallmentPaymentStatus = false) {
        //console.log('585', this.authenticationService.currentUserValue);
        if (installmentKey) {
            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                for (let _items in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                    let _currentObj = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items];
                    if (_currentObj) {
                        if (_currentObj.createdOnForLoanAmountPaidToLender && !_currentObj.createdOnForLoanAmountPaidToLenderConfirmByLender) {
                            this.alertService.error('Last installment payment confirmation is pending from Lender', true);
                            return;
                        }
                    }
                }
            }
        }
        if (updateLastInstallmentPaymentStatus) {
            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                for (let _items in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                    let _currentObj = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items];
                    if (_currentObj) {
                        if (_currentObj.createdOnForLoanAmountPaidToLender && !_currentObj.createdOnForLoanAmountPaidToLenderConfirmByLender) {
                            installmentKey = _currentObj.installmentKey;
                            break;
                        }
                    }
                }
            }
            if (!installmentKey) {
                this.alertService.error('Last installment payment not done by borrower', true);
                return;
            }
        }
        const dialogRef = this.dialog.open(src_app_shared_money_transfer_data_money_transfer_data_component__WEBPACK_IMPORTED_MODULE_19__["MoneyTransferDataComponent"], {
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            hasBackdrop: true,
            data: {
                LoanObj: LoanObj,
                LoanApplyObj: LoanApplyObj,
                installmentKey: installmentKey,
                updateLastInstallmentPaymentStatus: updateLastInstallmentPaymentStatus
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log(`597 :: msc :: Dialog result: ${JSON.stringify(result)}`);
            if (result && result.data && result.data.updatedSessionObj) {
                this.broadcastUpdatedEvent2All(result.data.updatedSessionObj);
            }
        });
    }
    broadcastUpdatedEvent2All(sessionObj) {
        if (sessionObj) {
            let _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");
            _keyPairedMapObj[sessionObj._id] = sessionObj;
            this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
            this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId')));
            this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
            this._cdr.detectChanges();
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_15__["UserService"] },
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"] },
    { type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_16__["SessionsService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_15__["AlertService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_11__["AddFundsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
        src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"],
        src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_16__["SessionsService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_15__["AlertService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_11__["AddFundsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], HomeComponent);



/***/ }),

/***/ "j+nj":
/*!*************************************************************!*\
  !*** ./src/app/lender/new-session/new-session.component.ts ***!
  \*************************************************************/
/*! exports provided: NewSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSessionComponent", function() { return NewSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_session_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-session.component.html */ "BqqJ");
/* harmony import */ var _new_session_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-session.component.css */ "17Jk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sessions.service */ "BZV/");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/models */ "VHTt");














const { overwrite, getNames } = __webpack_require__(/*! country-list */ "pHmk");
overwrite([{
        code: 'US',
        name: 'USA'
    }]);
let NewSessionComponent = class NewSessionComponent {
    constructor(formBuilder, authenticationService, sessionsService, alertService, appRouterService, utilityService, route) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.sessionsService = sessionsService;
        this.alertService = alertService;
        this.appRouterService = appRouterService;
        this.utilityService = utilityService;
        this.route = route;
        this._ = lodash__WEBPACK_IMPORTED_MODULE_11__;
        this.UserType = src_app_models__WEBPACK_IMPORTED_MODULE_13__["UserType"];
        this.currentUserRoleType = null;
        this.currentUserMaxLoanAmount = 0;
        this.loading = false;
        this.submitted = false;
        this.fileData = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
        this._calculatedMonthlyAmountForEMI = 0;
        this.SessionStatus = src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"];
        this.SessionTypes = src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionTypes"];
        this.ParentServicesTypes = null;
        this.ChildServicesTypes = [];
        this.countrylist = null;
        this.loanInterestRateMin = 0;
        this.loanInterestRateMax = 0;
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth();
        this.day = this.now.getDate();
        this.hours = this.now.getHours();
        this.minutes = this.now.getMinutes();
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__({ year: this.year, month: this.month, day: this.day, hour: this.hours + 1, minute: this.minutes }).format('YYYY-MM-DD');
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_6__({ year: this.year, month: this.month + 1, day: this.day, hour: this.hours, minute: this.minutes }).format('YYYY-MM-DD');
        // redirect to home if already logged in
        if (!this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter('');
        }
        //#region do not allow to create new loan in last 3 day's of the month
        let dt = this.utilityService.moment();
        let day4monthEnd = 3;
        if (dt.date() >= (dt.daysInMonth() - day4monthEnd)) {
            this.appRouterService.appRouter('');
            this.alertService.error('New loan request not allowed in end of the month, Please try again later in next month', true);
            return;
        }
        //#endregion do not allow to create new loan in last 3 day's of the month
        this.currentUserRoleType = this.authenticationService.currentUserValue.userType;
        this.currentUserMaxLoanAmount = 0;
        /*
        switch (this.currentUserRoleType) {
          case UserType.new_lender:
            this.currentUserMaxLoanAmount = this.utilityService.LoanAmountMaxTypes[UserType.new_lender].amount;
            break;
          case UserType.good_lender:
            this.currentUserMaxLoanAmount = this.utilityService.LoanAmountMaxTypes[UserType.good_lender].amount;
            break;
          case UserType.expert_lender:
            this.currentUserMaxLoanAmount = this.utilityService.LoanAmountMaxTypes[UserType.expert_lender].amount;
            break;
          case UserType.super_lender:
            this.currentUserMaxLoanAmount = this.utilityService.LoanAmountMaxTypes[UserType.super_lender].amount;
            break;
          case UserType.proff_lender:
            this.currentUserMaxLoanAmount = this.utilityService.LoanAmountMaxTypes[UserType.proff_lender].amount;
            break;
          default:
            this.currentUserMaxLoanAmount = this.utilityService.LoanAmountMaxTypes[UserType.new_lender].amount;
            break;
        }
        */
        if (this.currentUserRoleType) {
            let maxLoanAmountForLenderObj = lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](this.authenticationService.allUserLevelsDataLenders, { '_id': this.currentUserRoleType });
            if (maxLoanAmountForLenderObj && maxLoanAmountForLenderObj._id) {
                this.currentUserMaxLoanAmount = maxLoanAmountForLenderObj.minimumSpent;
            }
            else {
                this.currentUserMaxLoanAmount = null;
            }
        }
        this.countrylist = getNames();
        this.initForm();
        let paramobj = history.state;
        if (paramobj) {
            this.loanId = paramobj['id'];
            this.borrowerId = paramobj['borrowerId'];
            delete history.state['id'];
            delete history.state['borrowerId'];
            /*
            this.sub = this.route.queryParams.subscribe(params => {
              this.loanId = params['id'];
              */
            if (this.loanId) {
                this.sessionsService.getSessionById(this.loanId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(data => {
                    ////console.log('data => ', data)
                    if (data && data['success']) {
                        //alert(JSON.stringify( data));
                        this.showEditingForm(data["data"]);
                        //this.alertService.success(data['message'], true);
                        this.loading = false;
                        //this.element_btn_click_addSession_skills_verification.click();
                    }
                    else {
                        //alert(JSON.stringify(data['message']));
                        this.alertService.error(data['message']);
                        this.loading = false;
                    }
                }, error => {
                    let errorMsg2show = "";
                    try {
                        if (error && error.error && error.error.message) {
                            errorMsg2show = error.error.message;
                        }
                        else if (error && error.message) {
                            errorMsg2show = error.message;
                        }
                        else {
                            errorMsg2show = error;
                        }
                    }
                    catch (ex) { }
                    this.alertService.error(errorMsg2show);
                    this.loading = false;
                });
            }
            else if (this.borrowerId) {
                this.initForm();
            }
            /* });*/
        }
    }
    showEditingForm(_userObj) {
        this.loanInterestRateMin = 0;
        this.loanInterestRateMax = 50;
        let _loanInterestRateValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.loanInterestRateMin), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.loanInterestRateMax)];
        this.addSessionForm = this.formBuilder.group({
            _id: [_userObj._id || ''],
            loanType: [_userObj.loanType || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            sessionType: [_userObj.sessionType || ''],
            sessionSubject: [_userObj.sessionSubject || ''],
            loanDescription: [_userObj.loanDescription || ''],
            transactionIdCollection: [_userObj.transactionIdCollection || ''],
            sessionsExecutionCollection: [_userObj.sessionsExecutionCollection || ''],
            loanStartDateTimeCustomised: [_userObj.loanStartDateTimeCustomised || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            loanEndDateTimeCustomised: [_userObj.loanEndDateTimeCustomised || ''],
            loanStartDateTime: [_userObj.loanStartDateTime || ''],
            loanEndDateTime: [_userObj.loanEndDateTime || ''],
            services: [_userObj.services || ''],
            location: [_userObj.location || ''],
            status: [_userObj.status || ''],
            additionalDocuments: this.formBuilder.array(_userObj.additionalDocuments || [], []),
            loanAmount: [_userObj.loanAmount || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.currentUserMaxLoanAmount)]],
            loanTenureInMonths: [_userObj.loanTenureInMonths || 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            loanInterestRate: [_userObj.loanInterestRate || 10, _loanInterestRateValidation],
            loanRepaymentType: this.formBuilder.array(_userObj.loanRepaymentType || [], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            loanInsuranceType: [_userObj.loanInsuranceType || ''],
            loanMaxBorrower: [_userObj.loanMaxBorrower || 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            createdOn: [_userObj.createdOn || ''],
            updatedOn: [_userObj.updatedOn || ''],
            isDeleted: [_userObj.isDeleted || ''],
            createdBy: [_userObj.createdBy || ''],
            deletedBy: [_userObj.deletedBy || ''],
            updatedBy: [this.authenticationService.currentUserValue._id || ''],
            bannerUrl: [_userObj.bannerUrl || ''],
            borrowerId: [_userObj.borrowerId || ''],
            isLoanRequested: [false],
            calculatedMonthlyAmountForEMI: []
        });
        this._sessionType = _userObj.sessionType;
    }
    initHtmlContent() {
        if (!this.element_btn_click_addSession_basic_details) {
            this.element_btn_click_addSession_basic_details = document.getElementById('btn_click_addSession_basic_details');
            this.element_btn_click_addSession_skills_verification = document.getElementById('btn_click_addSession_skills_verification');
        }
    }
    initForm() {
        this.loanInterestRateMin = 0;
        this.loanInterestRateMax = 50;
        let _loanInterestRateValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.loanInterestRateMin), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.loanInterestRateMax)];
        //_.first(this.ParentServicesTypes)['_id']
        this.initHtmlContent();
        this.addSessionForm = this.formBuilder.group({
            _id: [''],
            loanType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            sessionType: [''],
            sessionSubject: [''],
            loanDescription: [''],
            transactionIdCollection: [''],
            sessionsExecutionCollection: [''],
            loanStartDateTimeCustomised: [''],
            loanEndDateTimeCustomised: [''],
            loanStartDateTime: [''],
            loanEndDateTime: [''],
            services: [''],
            location: [''],
            status: [src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"].Pending],
            additionalDocuments: this.formBuilder.array([], []),
            loanAmount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.currentUserMaxLoanAmount)]],
            loanTenureInMonths: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            loanInterestRate: [10, _loanInterestRateValidation],
            loanRepaymentType: this.formBuilder.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            loanInsuranceType: [''],
            loanMaxBorrower: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            createdOn: [''],
            updatedOn: [''],
            isDeleted: [false],
            createdBy: [this.authenticationService.currentUserValue._id || ''],
            deletedBy: [''],
            updatedBy: [''],
            bannerUrl: [''],
            borrowerId: [this.borrowerId || ''],
            isLoanRequested: [false],
            calculatedMonthlyAmountForEMI: []
        });
    }
    clickOnGoToNext(_step) {
        this.initHtmlContent();
        switch (_step) {
            case 2:
                this.element_btn_click_addSession_skills_verification.click();
                break;
        }
    }
    ngOnInit() {
    }
    // convenience getter for easy access to form fields
    get f() { return this.addSessionForm.controls; }
    onaddSessionUpdateSubmit() {
        this.submitted = true;
        if (this.addSessionForm.invalid) {
            return;
        }
        let _loanStartDateTime = this.addSessionForm.get('loanStartDateTimeCustomised').value;
        let _loanEndDateTime = this.addSessionForm.get('loanEndDateTimeCustomised').value;
        /*
            if (!_loanStartDateTime || moment(_loanStartDateTime).isBefore(moment().add(1, 'day',))) {
              this.alertService.error("Start date must have 24 hours difference");
              return;
            }
            */
        _loanEndDateTime = null;
        switch (this.addSessionForm.get('sessionType').value) {
            case src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionTypes"].Instant:
                _loanStartDateTime = null;
                _loanEndDateTime = null;
                break;
        }
        let loanStartDateTime_Temp = null;
        let loanEndDateTime_Temp = null;
        if (_loanStartDateTime) {
            loanStartDateTime_Temp = moment__WEBPACK_IMPORTED_MODULE_6__(_loanStartDateTime, 'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        else {
            loanStartDateTime_Temp = moment__WEBPACK_IMPORTED_MODULE_6__().add(1, 'h').format('YYYY-MM-DD');
        }
        if (_loanEndDateTime) {
            loanEndDateTime_Temp = moment__WEBPACK_IMPORTED_MODULE_6__(_loanEndDateTime, 'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        else {
            loanEndDateTime_Temp = moment__WEBPACK_IMPORTED_MODULE_6__(loanStartDateTime_Temp, 'YYYY-MM-DD').add(this.addSessionForm.get('loanTenureInMonths').value, 'month').format('YYYY-MM-DD');
        }
        //#region validate dates
        this.addSessionForm.get('loanStartDateTime').setValue(Date.parse(loanStartDateTime_Temp));
        this.addSessionForm.get('loanEndDateTime').setValue(Date.parse(loanEndDateTime_Temp));
        if (!moment__WEBPACK_IMPORTED_MODULE_6__(this.addSessionForm.get('loanStartDateTime').value).isValid || lodash__WEBPACK_IMPORTED_MODULE_11__["isNaN"](moment__WEBPACK_IMPORTED_MODULE_6__(this.addSessionForm.get('loanStartDateTime').value)) || !this.addSessionForm.get('loanStartDateTime').value) {
            this.alertService.error("start time is not valid");
            return;
        }
        if (!moment__WEBPACK_IMPORTED_MODULE_6__(this.addSessionForm.get('loanEndDateTime').value).isValid || lodash__WEBPACK_IMPORTED_MODULE_11__["isNaN"](moment__WEBPACK_IMPORTED_MODULE_6__(this.addSessionForm.get('loanEndDateTime').value)) || !this.addSessionForm.get('loanEndDateTime').value) {
            this.alertService.error("end time is not valid");
            return;
        }
        /*
          if (moment(this.addSessionForm.get('loanStartDateTime').value).isBefore(moment())) {
            this.alertService.error("Loan should start in future date time only.");
            return;
          }
      */
        if (moment__WEBPACK_IMPORTED_MODULE_6__(this.addSessionForm.get('loanStartDateTime').value).add(1, 'h').isAfter(moment__WEBPACK_IMPORTED_MODULE_6__(this.addSessionForm.get('loanEndDateTime').value))) {
            this.alertService.error("There must be min. 1 hour difference in Loan start and end time");
            return;
        }
        //#endregion validate dates
        if (this.loanId) {
            this.sessionsService.updateSessionById(this.addSessionForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(data => {
                if (data && data['success']) {
                    //alert(JSON.stringify( data));
                    //this.alertService.success('Loan Request Updated successfully', true);
                    //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
                    this.alertService.success("Loan Request Updated successfully. Loan contract is available under My Contract->My Contract tab.", true);
                    this.appRouterService.appRouteToPath("/lender/my-contract", { selectedTab: 'received' }, true);
                }
                else {
                    //alert(JSON.stringify(data['message']));
                    this.alertService.error(data['message']);
                    this.loading = false;
                }
            }, error => {
                let errorMsg2show = "";
                try {
                    if (error && error.error && error.error.message) {
                        errorMsg2show = error.error.message;
                    }
                    else if (error && error.message) {
                        errorMsg2show = error.message;
                    }
                    else {
                        errorMsg2show = error;
                    }
                }
                catch (ex) { }
                this.alertService.error(errorMsg2show);
                this.loading = false;
            });
        }
        else {
            this.sessionsService.addNewSession(this.addSessionForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(data => {
                if (data && data['success']) {
                    //alert(JSON.stringify( data));
                    //this.alertService.success('New Loan added to loan market. you will receive borrowers request in received tab.', true);
                    //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
                    this.alertService.success("New Loan added to loan market. Loan contract is available under My Contract->My Contract tab.", true);
                    this.appRouterService.appRouteToPath("/lender/my-contract", { selectedTab: 'received' }, true);
                }
                else {
                    //alert(JSON.stringify(data['message']));
                    this.alertService.error(data['message']);
                    this.loading = false;
                }
            }, error => {
                let errorMsg2show = "";
                try {
                    if (error && error.error && error.error.message) {
                        errorMsg2show = error.error.message;
                    }
                    else if (error && error.message) {
                        errorMsg2show = error.message;
                    }
                    else {
                        errorMsg2show = error;
                    }
                }
                catch (ex) { }
                this.alertService.error(errorMsg2show);
                this.loading = false;
            });
        }
    }
    date(ev) {
        //console.log(this.minDate)
        //console.log(ev.target.value)
    }
    calculateMonthlyAmountForEMI() {
        let loanAmount = this.addSessionForm.get('loanAmount').value || 0;
        let loanTenureInMonths = this.addSessionForm.get('loanTenureInMonths').value || 0;
        let loanInterestRate = this.addSessionForm.get('loanInterestRate').value || 0;
        this._calculatedMonthlyAmountForEMI = this.utilityService.fnCalculateMonthlyAmountForEMI(loanAmount, loanTenureInMonths, loanInterestRate);
        this.addSessionForm.get('calculatedMonthlyAmountForEMI').setValue(this._calculatedMonthlyAmountForEMI);
    }
    onLoanRepaymentTypeChange(e) {
        const checkArray = this.addSessionForm.get('loanRepaymentType');
        if (e.target.checked) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](e.target.value));
        }
        else {
            let i = 0;
            checkArray.controls.forEach((item) => {
                if (item.value == e.target.value) {
                    checkArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    onInitSetLoanRepaymentTypeValue(_id) {
        const checkArray = this.addSessionForm.get('loanRepaymentType');
        let _isLoanRepaymentTypeChecked = (checkArray.value.indexOf(_id) > -1);
        return _isLoanRepaymentTypeChecked;
    }
};
NewSessionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_9__["SessionsService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
];
NewSessionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-session',
        template: _raw_loader_new_session_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_session_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_9__["SessionsService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]])
], NewSessionComponent);



/***/ }),

/***/ "kUut":
/*!**************************************************************!*\
  !*** ./src/app/lender/my-sessions/my-sessions.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my_session_details_modal mat-dialog-content {    \r\n    max-height: 82vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXNlc3Npb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibXktc2Vzc2lvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teV9zZXNzaW9uX2RldGFpbHNfbW9kYWwgbWF0LWRpYWxvZy1jb250ZW50IHsgICAgXHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG59Il19 */");

/***/ }),

/***/ "lX2P":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul  class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion navbar_side_panel\" id=\"accordionSidebar\">\r\n\r\n    <!-- Sidebar - Brand -->\r\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\">\r\n        <img class=\"img-fluid\" src=\"./assets/img/avitii-logo.png\">\r\n    </a>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider my-0\">\r\n\r\n    <div class=\"d-inline text-white text-center mt-2\">\r\n        <a class=\"mr-1 small text-white\" href=\"/en\">English</a> |\r\n        <a href=\"/da\" class=\"ml-1 small text-white\">Dansk</a>\r\n    </div>\r\n   \r\n    <!-- Nav Item - Dashboard -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\">\r\n            {{currentUser.firstName}}\r\n            <!-- <a class=\"float-right ml-2\" title=\"Logout\" (click)=\"navigate2State('/logout')\">\r\n                <i class=\"icon icon-flickr-alt\"></i>\r\n               </a> -->\r\n            <span class=\"badge badge-success float-right font-weight-lighter text-capitalize\"\r\n                [textContent]=\"currentUser.role\"> Borrower</span>\r\n\r\n        </a>\r\n    </li>\r\n\r\n\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <!-- <div class=\"sidebar-heading\">\r\n        Interface\r\n    </div> -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/lender/\">\r\n            <i class=\"icon icon-home\"></i>\r\n            <span i18n>Dashboard</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/lender/loan-market\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-shopping-cart\"></i>\r\n            <span i18n>Loan Market</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"showAlert()\"\r\n       routerLinkActive=\"active\">\r\n            <i class=\"icon icon-money\"></i>\r\n            <span i18n>Make a Loan</span></a>\r\n    </li>\r\n    <!-- routerLink=\"/lender/make-a-loan\" -->\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/lender/my-contract\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-bag\"></i>\r\n            <span i18n>My Contracts</span></a>\r\n    </li>\r\n  \r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-comments\"></i>\r\n            <span i18n>Messages</span>\r\n            <span *ngIf=\"messagesService.returnTotalPendingMessagesForUser()>0\" class=\"badge badge-light float-right font-weight-lighter text-capitalize\" i18n> {{messagesService.returnTotalPendingMessagesForUser()}}</span>\r\n        </a>\r\n          \r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/lender/calendar\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-calendar\"></i>\r\n            <span i18n>Calendar</span></a>\r\n    </li>\r\n\r\n  \r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <!-- <div class=\"sidebar-heading\">\r\n        Addons\r\n    </div> -->\r\n\r\n    <!-- Nav Item - Pages Collapse Menu -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\"\r\n            aria-controls=\"collapsePages\">\r\n            <i class=\"icon icon-settings\"></i>\r\n            <span i18n>Settings</span>\r\n        </a>\r\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n                <!-- <h6 class=\"collapse-header\">Login Screens:</h6> -->\r\n                <a class=\"collapse-item\" routerLink=\"/lender/profile\" routerLinkActive=\"active\" i18n>My Profile</a>\r\n                <a class=\"collapse-item\" routerLink=\"/lender/update-password\" routerLinkActive=\"active\" i18n>Change Password</a>\r\n                <a class=\"collapse-item\" routerLink=\"/lender/bank-details\" routerLinkActive=\"active\" i18n>Bank Details</a>\r\n                <a class=\"collapse-item\" routerLink=\"/lender/my-subscriptions\" routerLinkActive=\"active\" i18n>My Subscriptions</a>\r\n\r\n            </div>\r\n        </div>\r\n    </li>\r\n\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/logout\">\r\n            <i class=\"icon icon-flickr-alt\"></i>\r\n            <span i18n>Logout</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <!-- <hr class=\"sidebar-divider d-none d-md-block\"> -->\r\n\r\n    <!-- Sidebar Toggler (Sidebar) -->\r\n    <!-- <div class=\"text-center d-none d-md-inline\">\r\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n    </div> -->\r\n\r\n \r\n</ul>\r\n<!-- <div class=\"responsive-btn\">\r\n    <a class=\"toggle-nav\"><i aria-hidden=\"true\" class=\"icon-align-center\"></i></a>\r\n</div> -->\r\n<div class=\"sidebar_overlay navbar_side_panel btn-back\" ></div>\r\n\r\n\r\n\r\n\r\n<!-- Nav Start [ngClass]=\"{'dark position-relative' : (router.url!='/')}\"-->\r\n<header id=\"custom-header-nav\" class=\"ecommerce nav-fix shadow-sm p-0 hide-lg\">\r\n    \r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <nav>\r\n                    <div class=\"responsive-btn ml-1\">\r\n                        <a class=\"toggle-nav\"><i aria-hidden=\"true\" class=\"icon-align-center\"></i></a>\r\n                    </div>\r\n                    <a class=\"logo-light\" routerLink=\"/home\">\r\n                        <img class=\"img-fluid\" src=\"./assets/img/avitii-logo-purple.png\"></a>\r\n\r\n                    <!-- <div class=\"navbar navbar_side_panel m-l-auto p-1 btn-back\" id=\"togglebtn\">\r\n                     <div class=\"responsive-btn\">\r\n                            <h5 class=\"btn-back\">back</h5>\r\n                        </div> \r\n                        <ul class=\"main-menu\">\r\n                            <li><a routerLink=\"/lender\">Home</a></li>\r\n\r\n                            <li><a routerLink=\"/lender/search-consulatnt\" routerLinkActive=\"active\">Search</a></li>\r\n                            <li><a routerLink=\"/lender/my-contract\" routerLinkActive=\"active\">My Contract</a></li>\r\n                            <li><a routerLink=\"/lender/make-a-loan\" routerLinkActive=\"active\"><i class=\"icon-plus\"></i>\r\n                                    Make a Loan</a></li>\r\n\r\n                        </ul>\r\n                    </div> -->\r\n                    <div class=\"top-header-right mr-1\">\r\n                        <ul>\r\n\r\n                            <!-- <li class=\"cart\">\r\n                                <a aria-expanded=\"false\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n                                    <i class=\"icon-comment-alt\"></i>\r\n                                </a>\r\n\r\n                            </li>\r\n                            <li class=\"cart\">\r\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\" id=\"dropdownMenuButton1\">\r\n                                    <i class=\"icon-bell bell\"></i>\r\n                                    <span *ngIf=\"(utilityService._.keys(notificationService.appNotifications).length)>0\"\r\n                                        class=\"badge badge-primary bell-count\"\r\n                                        [textContent]=\"utilityService._.keys(notificationService.appNotifications).length\"></span>\r\n                                </a>\r\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\"\r\n                                    x-placement=\"bottom-end\"\r\n                                    style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                    <ul class=\"shopping-cart list-group list-group-flush\">\r\n                                        <li class=\"list-group-item\"\r\n                                            *ngFor=\"let notification of utilityService._.values(notificationService.appNotifications)\">\r\n                                            <div class=\"pb-2\">\r\n                                                <div class=\"mb-1\">{{notification.message}}&nbsp;<a\r\n                                                        class=\"float-lg-right font-large text-danger\"\r\n                                                        (click)=\"notificationService.check4Notification(notification)\"><i\r\n                                                            class=\"icon-close\" style=\"font-size: 0.6rem;\"></i></a></div>\r\n                                                <div class=\"font-weight-light small mb-1\">{{notification.description}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n\r\n\r\n                                        <li class=\"no-item text-center\">\r\n                                            <h4 class=\"my-4 font-weight-normal\">No Notifications</h4>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </li> -->\r\n                            <li class=\"cart\">\r\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\"  id=\"dropdownMenuButton1\">\r\n                                    <!-- <img class=\"userimg mt-n2\" src=\"./assets/img/user-default.png\"> -->\r\n                                    <i class=\"icon icon-user\"></i>\r\n                                </a>\r\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\"\r\n                                    x-placement=\"bottom-end\"\r\n                                    style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                    <ul class=\"shopping-cart\">\r\n                                        <li>\r\n                                            <a class=\"h6 d-block\" routerLink=\"/lender\">\r\n                                                {{currentUser.firstName}}\r\n                                                <span class=\"badge badge-primary float-right\"\r\n                                                    [textContent]=\"currentUser.role\" i18n> Borrower</span>\r\n                                            </a>\r\n                                        </li>\r\n\r\n                                        <!-- <li>\r\n                                            <a class=\"d-block\" routerLink=\"/lender/wallet\">Wallet\r\n                                                <span\r\n                                                    class=\"badge badge-success float-right\">${{fundService.totalFund4currentUser}}</span>\r\n                                            </a>\r\n                                        </li> -->\r\n                                        <li><a routerLink=\"/lender/profile\" i18n>Profile</a></li>\r\n                                        <hr>\r\n                                        <li>\r\n                                            <a routerLink=\"/logout\" i18n>Logout</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    \r\n                    <div class=\"sidebar_overlay navbar_side_panel btn-back\" style=\"display: none;\"></div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n   \r\n</header>\r\n<!-- Nav end-->");

/***/ }),

/***/ "m1e0":
/*!**************************************************************!*\
  !*** ./src/app/lender/loan-market/loan-market.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n .wrapper:focus {\r\n    outline: 0;\r\n}\r\n.clash-card {\r\n    background: white;\r\n\r\n    display: inline-block;\r\n    margin: auto;\r\n    border-radius: 19px;\r\n    position: relative;\r\n    text-align: center;\r\n    box-shadow: -1px 15px 30px -12px black;\r\n  \r\n}\r\n.clash-card__image {\r\n    position: relative;\r\n    height: 230px;\r\n    margin-bottom: 35px;\r\n    border-top-left-radius: 14px;\r\n    border-top-right-radius: 14px;\r\n}\r\n.clash-card__image--barbarian {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg');\r\n}\r\n.clash-card__image--barbarian img {\r\n    width: 400px;\r\n    position: absolute;\r\n    top: -65px;\r\n    left: -70px;\r\n}\r\n.clash-card__image--archer {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg');\r\n}\r\n.clash-card__image--archer img {\r\n    width: 400px;\r\n    position: absolute;\r\n    top: -34px;\r\n    left: -37px;\r\n}\r\n.clash-card__image--giant {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg');\r\n}\r\n.clash-card__image--giant img {\r\n    width: 340px;\r\n    position: absolute;\r\n    top: -30px;\r\n    left: -25px;\r\n}\r\n.clash-card__image--goblin {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg');\r\n}\r\n.clash-card__image--goblin img {\r\n    width: 370px;\r\n    position: absolute;\r\n    top: -21px;\r\n    left: -37px;\r\n}\r\n.clash-card__image--wizard {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg');\r\n}\r\n.clash-card__image--wizard img {\r\n    width: 345px;\r\n    position: absolute;\r\n    top: -28px;\r\n    left: -10px;\r\n}\r\n.clash-card__level {\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    margin-bottom: 3px;\r\n}\r\n.clash-card__level--barbarian {\r\n    color: #ec9b3b;\r\n}\r\n.clash-card__level--archer {\r\n    color: #ee5487;\r\n}\r\n.clash-card__level--giant {\r\n    color: #f6901a;\r\n}\r\n.clash-card__level--goblin {\r\n    color: #82bb30;\r\n}\r\n.clash-card__level--wizard {\r\n    color: #4facff;\r\n}\r\n.clash-card__unit-name {\r\n    font-size: 26px;\r\n    color: black;\r\n    font-weight: 900;\r\n    margin-bottom: 5px;\r\n}\r\n.clash-card__unit-description {\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n.clash-card__unit-stats--barbarian {\r\n    background: #ec9b3b;\r\n}\r\n.clash-card__unit-stats--barbarian .one-third {\r\n    border-right: 1px solid #bd7c2f;\r\n}\r\n.clash-card__unit-stats--archer {\r\n    background: #ee5487;\r\n}\r\n.clash-card__unit-stats--archer .one-third {\r\n    border-right: 1px solid #d04976;\r\n}\r\n.clash-card__unit-stats--giant {\r\n    background: #f6901a;\r\n}\r\n.clash-card__unit-stats--giant .one-third {\r\n    border-right: 1px solid #de7b09;\r\n}\r\n.clash-card__unit-stats--goblin {\r\n    background: #82bb30;\r\n}\r\n.clash-card__unit-stats--goblin .one-third {\r\n    border-right: 1px solid #71a32a;\r\n}\r\n.clash-card__unit-stats--wizard {\r\n    background: #4facff;\r\n}\r\n.clash-card__unit-stats--wizard .one-third {\r\n    border-right: 1px solid #309eff;\r\n}\r\n.clash-card__unit-stats {\r\n    color: white;\r\n    font-weight: 700;\r\n    border-bottom-left-radius: 14px;\r\n    border-bottom-right-radius: 14px;\r\n}\r\n.clash-card__unit-stats .one-third {\r\n    width: 33%;\r\n    float: left;\r\n    padding: 10px 5px;\r\n}\r\n.clash-card__unit-stats sup {\r\n    position: absolute;\r\n    bottom: 4px;\r\n    font-size: 45%;\r\n    margin-left: 2px;\r\n}\r\n.clash-card__unit-stats .stat {\r\n    position: relative;\r\n    font-size: 20px;\r\n    margin-bottom: 5px;\r\n}\r\n.clash-card__unit-stats .stat-value {\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n.clash-card__unit-stats .no-border {\r\n    border-right: none;\r\n}\r\n.clearfix:after {\r\n    visibility: hidden;\r\n    display: block;\r\n    font-size: 0;\r\n    content: \" \";\r\n    clear: both;\r\n    height: 0;\r\n}\r\n.slick-prev {\r\n    left: 100px;\r\n    z-index: 999;\r\n}\r\n.slick-next {\r\n    right: 100px;\r\n    z-index: 999;\r\n}\r\n.month{\r\n    font-size: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tbWFya2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7O0lBRWpCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0NBQXNDOztBQUUxQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksdUZBQXVGO0FBQzNGO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9GQUFvRjtBQUN4RjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxtRkFBbUY7QUFDdkY7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0ZBQW9GO0FBQ3hGO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9GQUFvRjtBQUN4RjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJsb2FuLW1hcmtldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAud3JhcHBlcjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi5jbGFzaC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDE1cHggMzBweCAtMTJweCBibGFjaztcclxuICBcclxufVxyXG4uY2xhc2gtY2FyZF9faW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE0cHg7XHJcbn1cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1iYXJiYXJpYW4ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvYmFyYmFyaWFuLWJnLmpwZycpO1xyXG59XHJcbi5jbGFzaC1jYXJkX19pbWFnZS0tYmFyYmFyaWFuIGltZyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC02NXB4O1xyXG4gICAgbGVmdDogLTcwcHg7XHJcbn1cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1hcmNoZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvYXJjaGVyLWJnLmpwZycpO1xyXG59XHJcbi5jbGFzaC1jYXJkX19pbWFnZS0tYXJjaGVyIGltZyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zNHB4O1xyXG4gICAgbGVmdDogLTM3cHg7XHJcbn1cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1naWFudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5NTYxMi9naWFudC1iZy5qcGcnKTtcclxufVxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWdpYW50IGltZyB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgbGVmdDogLTI1cHg7XHJcbn1cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1nb2JsaW4ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvZ29ibGluLWJnLmpwZycpO1xyXG59XHJcbi5jbGFzaC1jYXJkX19pbWFnZS0tZ29ibGluIGltZyB7XHJcbiAgICB3aWR0aDogMzcwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yMXB4O1xyXG4gICAgbGVmdDogLTM3cHg7XHJcbn1cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS13aXphcmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvd2l6YXJkLWJnLmpwZycpO1xyXG59XHJcbi5jbGFzaC1jYXJkX19pbWFnZS0td2l6YXJkIGltZyB7XHJcbiAgICB3aWR0aDogMzQ1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yOHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbn1cclxuLmNsYXNoLWNhcmRfX2xldmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbi5jbGFzaC1jYXJkX19sZXZlbC0tYmFyYmFyaWFuIHtcclxuICAgIGNvbG9yOiAjZWM5YjNiO1xyXG59XHJcbi5jbGFzaC1jYXJkX19sZXZlbC0tYXJjaGVyIHtcclxuICAgIGNvbG9yOiAjZWU1NDg3O1xyXG59XHJcbi5jbGFzaC1jYXJkX19sZXZlbC0tZ2lhbnQge1xyXG4gICAgY29sb3I6ICNmNjkwMWE7XHJcbn1cclxuLmNsYXNoLWNhcmRfX2xldmVsLS1nb2JsaW4ge1xyXG4gICAgY29sb3I6ICM4MmJiMzA7XHJcbn1cclxuLmNsYXNoLWNhcmRfX2xldmVsLS13aXphcmQge1xyXG4gICAgY29sb3I6ICM0ZmFjZmY7XHJcbn1cclxuLmNsYXNoLWNhcmRfX3VuaXQtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5jbGFzaC1jYXJkX191bml0LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWJhcmJhcmlhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWM5YjNiO1xyXG59XHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1iYXJiYXJpYW4gLm9uZS10aGlyZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmQ3YzJmO1xyXG59XHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1hcmNoZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VlNTQ4NztcclxufVxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tYXJjaGVyIC5vbmUtdGhpcmQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QwNDk3NjtcclxufVxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tZ2lhbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2OTAxYTtcclxufVxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tZ2lhbnQgLm9uZS10aGlyZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGU3YjA5O1xyXG59XHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1nb2JsaW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzgyYmIzMDtcclxufVxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tZ29ibGluIC5vbmUtdGhpcmQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcxYTMyYTtcclxufVxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0td2l6YXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZmFjZmY7XHJcbn1cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLXdpemFyZCAub25lLXRoaXJkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMDllZmY7XHJcbn1cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTRweDtcclxufVxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyAub25lLXRoaXJkIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59XHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzIHN1cCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogNDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyAuc3RhdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLnN0YXQtdmFsdWUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLm5vLWJvcmRlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG4uc2xpY2stcHJldiB7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG4uc2xpY2stbmV4dCB7XHJcbiAgICByaWdodDogMTAwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5tb250aHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG59Il19 */");

/***/ }),

/***/ "nAv/":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/home/home.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<!-- <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n        <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\r\n        <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Profile</a>\r\n    </div> -->\r\n\r\n<div [ngSwitch]=\"authenticationService.currentUserValue.role\">\r\n    <div *ngSwitchCase=\"Role.Borrower\">\r\n        <div class=\"jumbotron\"\r\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted || !authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\r\n            <div class=\"text-black-50 h2 font-weight-lighter\" >\r\n                <span i18n>Welome, Your profile has been verified succesfully. Your need to submit your</span>\r\n                <span class=\"badge badge-danger\" i18n>Bank Details</span> <span i18n>and</span> \r\n                <span class=\"badge badge-danger\" i18n>Income Proof Documents</span> <span i18n>to access the loan market.</span>\r\n            </div>\r\n            <hr>\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Profile and personal document verification\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/profile\"></i>\r\n                    </span>\r\n                </li>\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Bank details submission\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/bank-details\"></i>\r\n                    </span>\r\n                </li>\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Income Proof Documents and Mothly Expenses\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/income-proof\"></i>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"Role.Lender\">\r\n        <div class=\"jumbotron\"\r\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\r\n            <div class=\"text-black-50 h2 font-weight-lighter\" i18n>\r\n                Welome, Your profile has been verified succesfully. Your need to submit your\r\n                <span class=\"badge badge-danger\">Bank Details</span> to access the Loan Market.\r\n            </div>\r\n            <hr>\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Profile and personal document verification\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/lender/profile\"></i>\r\n                    </span>\r\n                </li>\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Bank details submission\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/lender/bank-details\"></i>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-primary shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            My Level\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\r\n                            <!--{{utilityService.returnStringWithReplacing_(authenticationService.currentUserValue.userType)}}-->\r\n                            {{authenticationService.returnUserTypeForUserFromSuppliedUserLevel(authenticationService.currentUserValue.userType)}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-warning shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\" i18n>\r\n                            Member since\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                            {{authenticationService.currentUserValue.userVerifiedOn | date:'dd-MMM-YYYY'}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-success shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\" i18n>\r\n                            Paid Contracts\r\n                        </div>\r\n                        <div class=\"row no-gutters align-items-center\">\r\n                            <div class=\"col-auto\">\r\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{allMyPaidContractCount}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col\">\r\n                                            <div class=\"progress progress-sm mr-2\">\r\n                                                <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Pending Requests Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-secondary shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-secondary text-uppercase mb-1\" i18n>\r\n                            Paid Loans</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{allMyPaidLoanCount}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-primary text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\r\n                    Active Loan</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyActiveLoanCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-warning text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\r\n                    Disbursed Loans</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyDisbursedLoanCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-success text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\r\n                    UnSigned contracts</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyUnSignedContractLoanCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-secondary text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\r\n                    Profit Overview</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyProfitOverviewCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Active Loans</h6>\r\n\r\n            </div>\r\n\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive table-billing-history\">\r\n                    <table class=\"table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\" i18n>Type</th>\r\n                                <th scope=\"col\" i18n>\r\n                                    {{Role.Lender!=authenticationService.currentUserValue.role?'Lender\r\n                                    Name':'Borrower Name'}}\r\n                                </th>\r\n                                <th scope=\"col\" i18n>Amount</th>\r\n                                <th scope=\"col\" i18n>Refund</th>\r\n                                <th scope=\"col\" i18n>Next EMI</th>\r\n                                <th scope=\"col\" i18n>Status</th>\r\n                                <th scope=\"col\">#</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <!--New Data table from Sessions Apply-->\r\n                            <tr\r\n                                *ngFor=\"let LoanApplyObj of utilityService._.values( allSessionApplyData) | mySessionsFilter : 'status' : ['accepted']:checkCreatedByUserId:checkCreatedByT\">\r\n                                <td class=\"text-capitalize\">{{(LoanApplyObj.sessionForBorrower.loanType ||\r\n                                    \"\").replace(\"_\", \" \")}}</td>\r\n                                <td class=\"text-capitalize\">\r\n                                    {{userService.returnUsersObjFromLocal(null,\r\n                                    null,'firstName',\r\n                                    (LoanApplyObj.lenderId!=authenticationService.currentUserValue._id?LoanApplyObj.lenderId:LoanApplyObj.borrowerId))}}\r\n                                </td>\r\n                                <td>{{LoanApplyObj.loanAmount || LoanApplyObj.sessionForBorrower.loanAmount}}</td>\r\n                                <td>{{utilityService.returnRoundedNumber((LoanApplyObj.calculatedMonthlyAmountForEMI ||\r\n                                    LoanApplyObj.sessionForBorrower.calculatedMonthlyAmountForEMI) *\r\n                                    LoanApplyObj.sessionForBorrower.loanTenureInMonths)}}</td>\r\n                                <td>{{LoanApplyObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\r\n                                <td>\r\n                                    <div *ngIf=\"LoanApplyObj.lenderId!=authenticationService.currentUserValue._id\">\r\n                                        <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                            <span class=\"badge badge-danger\">\r\n                                                Pending\r\n                                            </span>\r\n                                        </a>\r\n                                        <a\r\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                            <span class=\"badge badge-warning\"i18n>\r\n                                                Money Sent\r\n                                            </span>\r\n                                        </a>\r\n                                        <a\r\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                            <span class=\"badge badge-success\" i18n>\r\n                                                Received Money\r\n                                            </span>\r\n                                        </a>\r\n                                    </div>\r\n                                    <div *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\r\n                                        <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                            <span\r\n                                                *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\"\r\n                                                class=\"badge badge-danger\" i18n>\r\n                                                Money Not Sent\r\n                                            </span>\r\n                                        </a>\r\n                                        <a\r\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                            <span class=\"badge badge-warning\" i18n>\r\n                                                Money Sent\r\n                                            </span>\r\n                                        </a>\r\n                                        <a\r\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                            <span class=\"badge badge-success\" i18n>\r\n                                                Money Sent\r\n                                            </span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div *ngIf=\"LoanApplyObj.lenderId!=authenticationService.currentUserValue._id\">\r\n                                        <a (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj)\"\r\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                            <span class=\"badge badge-success\" i18n>is Money Received?</span>\r\n                                        </a>\r\n                                        <a\r\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower && LoanApplyObj.nextInstallment && !LoanApplyObj.isLoanAmountPaidByBorrower\">\r\n                                            <!--\r\n                                            <span (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj, LoanApplyObj.nextInstallment)\" class=\"badge badge-success\">is Installment Money Transfered?</span>\r\n                                        -->\r\n                                            <div class=\"form-check-inline\">\r\n                                                <div class=\"custom-control custom-checkbox\">\r\n                                                    <input name=\"isLoanAmountPaidByBorrower\"\r\n                                                        id=\"isLoanAmountPaidByBorrower\" type=\"checkbox\"\r\n                                                        class=\"custom-control-input\" [value]=\"true\"\r\n                                                        (change)=\"LoanMoneyTransferStatusChange($event, LoanApplyObj.sessionForBorrower, LoanApplyObj, LoanApplyObj.nextInstallment)\"\r\n                                                        [checked]=\"LoanApplyObj.isLoanAmountPaidByBorrower\">\r\n                                                    <label for=\"isLoanAmountPaidByBorrower\"\r\n                                                        class=\"custom-control-label\" i18n>\r\n                                                        Installment Money Transfered\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </a>\r\n                                    </div>\r\n                                    <div *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\r\n                                        <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                            <!--\r\n                                            <span (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj)\" class=\"badge badge-success\">\r\n                                                is Money Transfered?\r\n                                            </span>\r\n                                        -->\r\n                                            <div class=\"form-check-inline\">\r\n                                                <div class=\"custom-control custom-checkbox\">\r\n                                                    <input name=\"isLoanAmountPaidByLender\" id=\"isLoanAmountPaidByLender\"\r\n                                                        type=\"checkbox\" class=\"custom-control-input\" [value]=\"true\"\r\n                                                        (change)=\"LoanMoneyTransferStatusChange($event, LoanApplyObj.sessionForBorrower, LoanApplyObj)\"\r\n                                                        [checked]=\"LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                                    <label for=\"isLoanAmountPaidByLender\" class=\"custom-control-label\" i18n>\r\n                                                        Money Transfered\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </a>\r\n                                        <a (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj, null, true)\"\r\n                                            *ngIf=\"!LoanApplyObj.isLoanAmountPaidByBorrower && LoanApplyObj.installmentWiseLoanAmountPaidByBorrower\">\r\n                                            <span class=\"badge badge-success\" i18n>is Installment Money\r\n                                                Received?&nbsp;</span>\r\n                                            <span\r\n                                                *ngFor=\"let installmentObj of LoanApplyObj.installmentWiseLoanAmountPaidByBorrower\">\r\n                                                <i\r\n                                                    *nfIf=\"installmentObj.createdOnForLoanAmountPaidToLender && !installmentObj.createdOnForLoanAmountPaidToLenderConfirmByLender\">*</i>\r\n                                            </span>\r\n                                        </a>\r\n\r\n\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <!--New Data table from Session Apply-->\r\n\r\n                            <!--Old Data table from Sessions-->\r\n                            <!--\r\n                            <tr\r\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['accepted']:checkCreatedByUserId:checkCreatedByT\">\r\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\r\n                                <td class=\"text-capitalize\">\r\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\r\n                                    true,'firstName')}}</td>\r\n                                <td>{{LoanObj.loanAmount}}</td>\r\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\r\n                                    LoanObj.loanTenureInMonths)}}</td>\r\n                                <td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\r\n                                <td>\r\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\r\n                                        <a>\r\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-danger\">Pending</span>\r\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-success\">Received Money</span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\r\n                                        <span class=\"badge badge-primary\">Details</span>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        -->\r\n                            <!--Old Data table from Sessions-->\r\n                            <tr class=\"mt-2 text-center no-item\">\r\n\r\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Unsigned Contract</h6>\r\n\r\n            </div>\r\n\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive table-billing-history\">\r\n                    <table class=\"table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\" i18n>Type</th>\r\n                                <th scope=\"col\" i18n>Borrower Name</th>\r\n                                <th scope=\"col\" i18n>Amount</th>\r\n                                <th scope=\"col\" i18n>Refund</th>\r\n                                <!--<th scope=\"col\">Next EMI</th>-->\r\n                                <th scope=\"col\" i18n>Application Date</th>\r\n                                <th scope=\"col\" i18n>Status</th>\r\n                                <th scope=\"col\">#</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['awaiting_for_approval']:checkCreatedByUserId:checkCreatedByT\">\r\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\r\n                                <td class=\"text-capitalize\">\r\n                                    {{LoanObj.nextInstallmentBorrowerFirstName}}\r\n                                </td>\r\n                                <td>{{LoanObj.loanAmount}}</td>\r\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\r\n                                    LoanObj.loanTenureInMonths)}}</td>\r\n                                <!--<td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>-->\r\n                                <td>{{LoanObj.applicationDate | datePretty}}</td>\r\n                                <td>\r\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\r\n                                        <a>\r\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-danger\" i18n>Money Not Sent</span>\r\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-success\" i18n>Money Sent</span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\r\n                                        <span class=\"badge badge-primary\" i18n>Details</span>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                            <tr class=\"mt-2 text-center no-item\">\r\n\r\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Paid Loans</h6>\r\n\r\n            </div>\r\n\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive table-billing-history\">\r\n                    <table class=\"table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\" i18n>Type</th>\r\n                                <th scope=\"col\" i18n>Lender Name</th>\r\n                                <th scope=\"col\" i18n>Amount</th>\r\n                                <th scope=\"col\" i18n>Refund</th>\r\n                                <th scope=\"col\" i18n>Status</th>\r\n                                <th scope=\"col\">#</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['paid','completed']:checkCreatedByUserId:checkCreatedByT\">\r\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\r\n                                <td class=\"text-capitalize\">\r\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\r\n                                    true,'firstName')}}</td>\r\n                                <td>{{LoanObj.loanAmount}}</td>\r\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\r\n                                    LoanObj.loanTenureInMonths)}}</td>\r\n                                <td>\r\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\r\n                                        <a>\r\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-danger\" i18n>Pending</span>\r\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-success\" i18n>Received Money</span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\r\n                                        <span class=\"badge badge-primary\" i18n>Details</span>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                            <tr class=\"mt-2 text-center no-item\">\r\n\r\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--\r\n        <div class=\"row d-none\">\r\n        \r\n            <div class=\"col-xl-4 col-12\">\r\n                <div class=\"row\">\r\n        \r\n                    <div class=\"col-xl-12 col-md-6 mb-3\">\r\n                        <div class=\"card shadow-sm\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row no-gutters align-items-center\">\r\n                                    <div class=\"col text-center border-right\">\r\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Wallet\r\n                                        </div>\r\n                                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                            ${{fundService.totalFund4currentUser}}</div>\r\n                                    </div>\r\n        \r\n                                    <div class=\"col text-center\">\r\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Sessions\r\n                                        </div>\r\n                                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                            {{allSessionsCount}}/{{allSessionsTodayCount}}</div>\r\n                                    </div>\r\n        \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n        \r\n                    <div class=\"col-xl-12 col-md-6 mb-3\">\r\n        \r\n                        <section class=\"blog-sidebar pt-0\">\r\n                            <div class=\"row pl-0 pr-0\">\r\n                                <div class=\"col-lg-12\">\r\n                                     <div>\r\n                                        <h5 class=\"blog-title\">upcoming sessions</h5>\r\n                                        <div class=\"sidebar-container\">\r\n                                            <div *ngFor=\"let item of utilityService._.values(allSessionsTodayList);\" class=\"post-container d-flex\">\r\n                                                <div class=\"w-35 m-r-25\">\r\n                                                    <img alt=\"\" class=\"img-fluid\" src=\"./assets/img/na.png\">\r\n                                                    <div class=\"badge badge-blue\">\r\n                                                        {{item.location}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <h5 class=\"post-head\">{{item.sessionSubject}}</h5>\r\n                                                    <h6 class=\"date\">{{item.loanStartDateTime | date:'medium'}}</h6>\r\n                                                    <div class=\"mt-3\">\r\n                                                        <i class=\"icon-video-camera fa-lg mr-3\" (click)=\"clickedOnSessionChatVideo(item, true)\"></i>\r\n                                                        <i class=\"icon-comment\" (click)=\"clickedOnSessionChatVideo(item, false)\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"mt-2 text-center blog-agency no-item\">\r\n                                                <img src=\"assets/img/noresult.png\" style=\"height: 60px;\">\r\n                                                <h5 class=\"mt-3 font-weight-normal\">Looks like you don't have any counselling Session today</h5>\r\n                                            </div>\r\n        \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </section>\r\n                    </div>\r\n        \r\n                </div>\r\n        \r\n            </div>\r\n        \r\n            <div class=\"col-xl-8 col-12\">\r\n        \r\n                <section class=\"agency blog blog-sec blog-sidebar sider p-0\">\r\n        \r\n                    <div class=\"h6 mb-3\">\r\n        \r\n                        LATEST SESSIONS\r\n                       \r\n                    </div>\r\n                    <div class=\"card shadow-sm mb-4\" *ngFor=\"let session of allSessionsData\">\r\n                        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n                            {{session.sessionSubject}}\r\n                        </div>\r\n                        <div class=\"card-body px-md-3 px-1 small\">\r\n                             <div class=\"row\">               \r\n                            <div class=\"col-xl-12 col-12\">\r\n                                <p class=\"para2\" [class.show_more]=\"!session._id\">\r\n                                    {{session.loanDescription}}\r\n                                </p>\r\n                            </div>          \r\n                            <div class=\"col-xl-6 col-6 border-right mb-2\">\r\n                                <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{session.loanStartDateTime | date:'MMM d, h:mm a'}}\r\n                            </div>\r\n                           \r\n                            <div class=\"col-xl-6 col-6\">\r\n                                <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\r\n                                \r\n                                {{session.location}}\r\n                            </div>\r\n                          \r\n                        </div>\r\n                        </div>\r\n                        <div class=\"card-footer bg-white\">\r\n                            <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span>\r\n                            <a *ngIf=\"!check4applyToSession(session)\" class=\"btn btn-success  text-capitalize btn-sm float-right text-white\" (click)=\"applyToSession(session)\">Apply</a>\r\n                            <a *ngIf=\"check4applyToSession(session)\" class=\"btn btn-primary text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(session)\"> Details</a>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div *ngIf=\"!allSessionsData\">\r\n                        <div class=\"content_loader\"></div>\r\n                        <div class=\"content_loader\"></div>\r\n                    </div>\r\n        \r\n                </section>\r\n            </div>\r\n        </div>\r\n        -->");

/***/ }),

/***/ "oyWB":
/*!****************************************************!*\
  !*** ./src/app/lender/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\r\n    padding: 0;\r\n}\r\nheader img{\r\n    height: 3.3rem;\r\n}\r\nheader nav ul .mega-menu .mega-menu-container {\r\n\r\n    min-width: auto;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmhlYWRlciBpbWd7XHJcbiAgICBoZWlnaHQ6IDMuM3JlbTtcclxufVxyXG5oZWFkZXIgbmF2IHVsIC5tZWdhLW1lbnUgLm1lZ2EtbWVudS1jb250YWluZXIge1xyXG5cclxuICAgIG1pbi13aWR0aDogYXV0bztcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "paPN":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/my-sessions/my-sessions.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"tab-product  p-b-0\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-lg-12\">\r\n            <ul class=\"nav nav-justified nav-material nav-tabs\" id=\"top-tab\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='received', 'show': selectedTab=='received'}\"\r\n                        data-toggle=\"tab\" href=\"#top-home\" id=\"top-home-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('received');\" i18n>My Contracts\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalPendingContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='sent', 'show': selectedTab=='sent'}\" data-toggle=\"tab\"\r\n                        href=\"#top-sent\" id=\"profile-sent-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('sent')\" i18n>Loan Market\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalSentContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='canceled', 'show': selectedTab=='canceled'}\"\r\n                        data-toggle=\"tab\" href=\"#top-canceled\" id=\"profile-canceled-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('canceled')\" i18n>Cancelled\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalCanceledContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Cancelled contracts\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='active', 'show': selectedTab=='active'}\" data-toggle=\"tab\"\r\n                        href=\"#top-active\" id=\"profile-active-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('active')\" i18n>Active\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalActiveContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='paid', 'show': selectedTab=='paid'}\" data-toggle=\"tab\"\r\n                        href=\"#top-profile\" id=\"profile-top-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('paid')\" i18n>Paid\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalPaidContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='unpaid', 'show': selectedTab=='unpaid'}\" data-toggle=\"tab\"\r\n                        href=\"#top-profile\" id=\"profile-top-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('unpaid')\" i18n>Unpaid\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalUnPaidContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='inkasso', 'show': selectedTab=='inkasso'}\"\r\n                        data-toggle=\"tab\" href=\"#top-contact\" id=\"contact-top-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('inkasso')\" i18n>Inkasso\r\n\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalInkassoContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <!-- <li class=\"nav-item\"><a aria-selected=\"true\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-review\" id=\"review-top-tab\" role=\"tab\" (click)=\"SessionStatusTypeFilter=[SessionStatus.Completed]\">Completed \r\n                    <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                        </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\r\n    <!-- ;-->\r\n    <div class=\"card shadow-sm mb-4\"\r\n        *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : (SessionStatusTypeFilter.length>0 ? SessionStatusTypeFilter:['accepted']):checkCreatedByUserId:checkCreatedByT:(SessionStatusTypeFilter.indexOf(SessionStatus.Pending)>-1)\">\r\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n            <span class=\"float-left\">{{utilityService.returnLoanType(LoanObj.loanType)}}</span>\r\n            <span class=\"float-right cursor-pointer\" (click)=\"usersProfile(LoanObj.createdByUserObj)\">\r\n                <i class=\"icon icon-user\"></i>\r\n                {{LoanObj.createdByUserObj.firstName}}\r\n                <i *ngIf=\"authenticationService.currentUserValue._id==LoanObj.createdByUserObj._id\">*</i>\r\n            </span>\r\n        </div>\r\n        <div class=\"card-body px-md-3 px-1 small\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group border-right\">\r\n                        <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                        <h4 class=\"text-primary\">\r\n                            {{LoanObj.loanAmount}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group  border-right\">\r\n                        <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                        <h4 class=\"text-primary\">\r\n                            {{LoanObj.loanTenureInMonths}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                        <h4 class=\"text-primary\">\r\n                            {{LoanObj.loanInterestRate}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group border-right\">\r\n                        <label for=\"loanStartDateTime\" i18n>Start Date</label>\r\n                        <h4 class=\"text-primary\" >\r\n                            {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group  border-right\">\r\n                        <p class=\"mb-2\" i18n>How to give the money</p>\r\n\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                            BANK\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                            Cash\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                            Revolut\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                            Paypal\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase badge-success\" i18n>\r\n                            Skrill\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-12\">\r\n                    <p class=\"mb-2\" i18n>Description:</p>\r\n                    <div class=\"text-black-50\" >\r\n                        {{LoanObj.loanDescription}}\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card-footer bg-white\">\r\n            <span\r\n                class=\"badge badge-success font-weight-normal text-capitalize btn float-left\">{{LoanObj.sessionType}}</span>\r\n            <div class=\"row\"\r\n                [ngSwitch]=\"returnSessionApplyStatus(utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\r\n                <!-- the same view can be shown in more than one case -->\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Pending\">\r\n\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                    -->\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\" title=\"Received Requests/Total Applicants\"\r\n                    class=\"float-left btn btn-primary text-capitalize btn-sm text-white\">\r\n                    {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                </label>\r\n                  \r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\r\n                        <a *ngIf=\"LoanObj.createdByUserObj._id==authenticationService.currentUserValue._id\"\r\n                        class=\"btn btn-danger text-capitalize btn-sm mr-2 float-right text-white\"><i class=\"icon icon-trash\"\r\n                            (click)=\"deleteSessionById(LoanObj._id)\"></i></a>\r\n                   \r\n\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Accepted\">\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                    -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingInitiated\">\r\n                    <!--\r\n                    <button *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right\" (click)=\"sessionApplyOngoingCheck(LoanObj, utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\r\n                        Proceed for Execution\r\n                    </button>\r\n                -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n>  Details</a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.AwaitingForApproval\">\r\n                    <a i18n *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\"\r\n                        class=\"btn btn-success btn-sm text-capitalize float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\">\r\n                        Details\r\n                    </a>\r\n                    <a i18n *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\"\r\n                        class=\"btn btn-success btn-sm text-capitalize float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\"> <i class=\"icon-check fa-lg text-white\"></i>\r\n                        Proceed for Contract Sign\r\n                    </a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Ongoing\">\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">\r\n                        Details\r\n                    </a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> <i class=\"icon-check fa-lg text-white\"></i>\r\n                        Proceed for Execution\r\n                    </a>\r\n                -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n                <!--default case when there are no matches -->\r\n                <div class=\"col-xl-12\" *ngSwitchDefault>\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm text-capitalize float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Apply</a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Details</a>\r\n                    -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mt-5 text-center blog-agency no-item\">\r\n        <!-- <img src=\"assets/img/noresult.png\"> -->\r\n        <!--\r\n        <div class=\"spinner-border text-success mb-4\"></div>\r\n        <h2 class=\"text-black-50\">Hold on updating Loan Data</h2>\r\n        -->\r\n    </div>\r\n</section>");

/***/ }),

/***/ "swyj":
/*!*******************************************************!*\
  !*** ./src/app/lender/lend-now/lend-now.component.ts ***!
  \*******************************************************/
/*! exports provided: LendNowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LendNowComponent", function() { return LendNowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lend_now_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lend-now.component.html */ "CTHm");
/* harmony import */ var _lend_now_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lend-now.component.css */ "ZbtL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/role */ "z56L");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/payment.service */ "s5zK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/public-profile/public-profile.component */ "bLZ2");

















let LendNowComponent = class LendNowComponent {
    constructor(socketService, utilityService, alertService, appRouterService, formBuilder, authenticationService, userService, contactService, payment, dialog) {
        this.socketService = socketService;
        this.utilityService = utilityService;
        this.alertService = alertService;
        this.appRouterService = appRouterService;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.contactService = contactService;
        this.payment = payment;
        this.dialog = dialog;
        this.userInitiatedForPayment = false;
        this.loading = false;
        this.LoanObj = {};
        this.loanId = null;
        this.loanApplyId = null;
        this.submitted = false;
        this.borrowerUserObj = null;
        this.lenderUserObj = null;
        this.headerMessage2show = "";
        this.userClickedOnSignLoanContract = false;
        let paramobj = history.state;
        if (paramobj) {
            this.loanId = paramobj['loanId'];
            delete history.state['loanId'];
            this.loanApplyId = paramobj['loanApplyId'];
            delete history.state['loanApplyId'];
            if (this.loanApplyId) {
                this.initForm();
                this.clickedOnSignLoanContract();
            }
            if (this.loanId) {
                this.socketService.getLoanMarketDataById(this.loanId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                    .subscribe(data => {
                    //#region proccess for success here
                    if (data && data['success']) {
                        if (data["data"]) {
                            //#region data set to local of loan obj
                            if (data["data"]["_id"]) {
                                this.LoanObj = data["data"];
                            }
                            else {
                                this.LoanObj = data["data"][0];
                            }
                            let _obj4LoanApply = null;
                            if (this.loanApplyId) {
                                _obj4LoanApply = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](this.LoanObj.sessionAppliedByBorrowers, { "_id": this.loanApplyId })[0];
                                this.showEditingForm(_obj4LoanApply);
                            }
                            let _userIdOfLoanCreatorOrEditorWhichisNotCurrentUser = this.LoanObj.createdByUserObj._id;
                            if (this.loanApplyId) {
                                if (this.authenticationService.currentUserValue._id == this.LoanObj.createdByUserObj._id) {
                                    _userIdOfLoanCreatorOrEditorWhichisNotCurrentUser = _obj4LoanApply.borrowerId;
                                }
                            }
                            //#endregion data set to local of loan obj
                            //#region fetch creator id
                            this.userService.getUserById(_userIdOfLoanCreatorOrEditorWhichisNotCurrentUser)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                                .subscribe(data => {
                                if (data && data['success']) {
                                    this.borrowerUserObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](data['data']);
                                    this.loading = false;
                                    /*
                                    if (this.loanApplyId) {
                                      this.clickedOnSignLoanContract();
                                    }
                                    */
                                }
                                else {
                                    this.alertService.error(data['message']);
                                    this.loading = false;
                                    this.appRouterService.appRouter('');
                                }
                            }, error => {
                                let errorMsg2show = "";
                                try {
                                    if (error && error.error && error.error.message) {
                                        errorMsg2show = error.error.message;
                                    }
                                    else if (error && error.message) {
                                        errorMsg2show = error.message;
                                    }
                                    else {
                                        errorMsg2show = error;
                                    }
                                }
                                catch (ex) { }
                                this.alertService.error(errorMsg2show);
                                this.loading = false;
                                this.appRouterService.appRouter('');
                            });
                            //#endregion fetch creator id
                        }
                        this.loading = false;
                    }
                    else {
                        this.alertService.error(data['message']);
                        this.loading = false;
                        this.appRouterService.appRouter('');
                    }
                    //#endregion proccess for success here
                }, error => {
                    //#region proccess for failure here
                    let errorMsg2show = "";
                    try {
                        if (error && error.error && error.error.message) {
                            errorMsg2show = error.error.message;
                        }
                        else if (error && error.message) {
                            errorMsg2show = error.message;
                        }
                        else {
                            errorMsg2show = error;
                        }
                    }
                    catch (ex) { }
                    this.alertService.error(errorMsg2show);
                    this.loading = false;
                    this.appRouterService.appRouter('');
                    //#endregion proccess for failure here
                });
                //#region read current users data here
                this.userService.getUserById(this.authenticationService.currentUserValue._id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                    .subscribe(data => {
                    //#region proccess for success here
                    if (data && data['success']) {
                        this.lenderUserObj = data["data"];
                        this.loading = false;
                        if (this.loanApplyId) {
                            this.clickedOnSignLoanContract();
                        }
                    }
                    else {
                        this.alertService.error(data['message']);
                        this.loading = false;
                        this.appRouterService.appRouter('');
                    }
                    //#endregion proccess for success here
                }, error => {
                    //#region proccess for failure here
                    let errorMsg2show = "";
                    try {
                        if (error && error.error && error.error.message) {
                            errorMsg2show = error.error.message;
                        }
                        else if (error && error.message) {
                            errorMsg2show = error.message;
                        }
                        else {
                            errorMsg2show = error;
                        }
                    }
                    catch (ex) { }
                    this.alertService.error(errorMsg2show);
                    this.loading = false;
                    this.appRouterService.appRouter('');
                    //#endregion proccess for failure here
                });
                //#endregion read current users data here
            }
            else {
                //navigate back
                this.alertService.error("Data is missing or invalid entry");
                this.appRouterService.appRouter('');
            }
        }
        else {
            //navigate back
            this.alertService.error("Data is missing or invalid entry");
            this.appRouterService.appRouter('');
        }
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.returnHeaderTitleForPage();
        this.lendNowForm = this.formBuilder.group({
            eSignatureLendersPassportNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            eSignatureLendersName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            loanInsuranceRequired: [false],
            loanInsuranceAmount: [0],
            proposedLoanAmount: [null],
            loanApplyNumber: [null],
            loanInsuranceCreatedOn: [null],
            calculatedMonthlyAmountForEMI: [null],
            eSignatureLendersCreatedOn: [null],
            eSignatureBorrowersCreatedOn: [null],
            loanAgreementCondition: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    showEditingForm(_userObj) {
        this.lendNowForm = this.formBuilder.group({
            eSignatureLendersPassportNumber: [_userObj.eSignatureLendersPassportNumber || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            eSignatureLendersName: [_userObj.eSignatureLendersName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            eSignatureBorrowersPassportNumber: [_userObj.eSignatureBorrowersPassportNumber || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            eSignatureBorrowersName: [_userObj.eSignatureBorrowersName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            loanInsuranceRequired: [_userObj.loanInsuranceRequired || false],
            loanInsuranceAmount: [_userObj.loanInsuranceAmount || 0],
            proposedLoanAmount: [_userObj.proposedLoanAmount || null],
            loanApplyNumber: [_userObj.loanApplyNumber || null],
            loanInsuranceCreatedOn: [_userObj.loanInsuranceCreatedOn || null],
            calculatedMonthlyAmountForEMI: [_userObj.calculatedMonthlyAmountForEMI || null],
            eSignatureLendersCreatedOn: [_userObj.eSignatureLendersCreatedOn || null],
            eSignatureBorrowersCreatedOn: [_userObj.eSignatureBorrowersCreatedOn || null],
            loanAgreementCondition: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    get f() { return this.lendNowForm.controls; }
    returnHeaderTitleForPage() {
        if (this.userClickedOnSignLoanContract) {
            this.headerMessage2show = "Sign Loan Contract";
        }
        else {
            this.headerMessage2show = "Loan Summary";
        }
    }
    resetClickedOnSignLoanContract() {
        this.userClickedOnSignLoanContract = false;
        this.returnHeaderTitleForPage();
    }
    clickedOnSignLoanContract() {
        this.userClickedOnSignLoanContract = true;
        this.returnHeaderTitleForPage();
        if (this.lenderUserObj) {
            this.lendNowForm.get('eSignatureLendersName').setValue(this.lenderUserObj.firstName || this.lenderUserObj.lastName);
            this.lendNowForm.get('eSignatureLendersPassportNumber').setValue(this.lenderUserObj.myPassportNumber || this.lenderUserObj.myDLNumber);
        }
    }
    clickedOnVerifiedSignLoanContract() {
        this.submitted = true;
        if (this.lendNowForm.invalid) {
            return;
        }
        if (this.lendNowForm.get('loanInsuranceRequired').value && !this.lendNowForm.get('loanInsuranceAmount').value) {
            this.alertService.error("Please pay insurance amount first");
            return;
        }
        if (this.lendNowForm.get('eSignatureLendersPassportNumber').value != this.lenderUserObj.myPassportNumber) {
            this.alertService.error("Passport Number miss match. Please enter proper number");
            return;
        }
        switch (this.authenticationService.currentUserValue.role) {
            case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Lender:
                this.lendNowForm.get('eSignatureLendersCreatedOn').setValue(lodash__WEBPACK_IMPORTED_MODULE_12__["now"]());
                break;
            case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Borrower:
                this.lendNowForm.get('eSignatureBorrowersCreatedOn').setValue(lodash__WEBPACK_IMPORTED_MODULE_12__["now"]());
                break;
        }
        if (!this.lendNowForm.get('calculatedMonthlyAmountForEMI').value) {
            let _calculatedMonthlyAmountForEMI = this.LoanObj.calculatedMonthlyAmountForEMI;
            this.lendNowForm.get('calculatedMonthlyAmountForEMI').setValue(_calculatedMonthlyAmountForEMI);
        }
        let selectedTab = null;
        let _currentSessionApply = {
            sessionObj: {
                loanAmount: null
            },
            borrowerId: null,
            lenderId: null,
            _id: null,
            status: null,
            loanId: null,
            isLoanBorrowed: false,
            createdByUserObj: {},
            createdBy: null
        };
        _currentSessionApply = this.lendNowForm.value;
        _currentSessionApply.sessionObj = this.LoanObj;
        if (this.lendNowForm.get('proposedLoanAmount').value) {
            _currentSessionApply.sessionObj.loanAmount = this.lendNowForm.get('proposedLoanAmount').value;
        }
        _currentSessionApply.borrowerId = this.borrowerUserObj._id;
        _currentSessionApply.lenderId = this.lenderUserObj._id;
        _currentSessionApply.loanId = this.LoanObj._id;
        _currentSessionApply.isLoanBorrowed = false;
        _currentSessionApply.status || src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Pending;
        _currentSessionApply._id = this.loanApplyId;
        if (_currentSessionApply) {
            if (!_currentSessionApply._id) {
                _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
            }
            if (this.LoanObj.createdBy == this.lenderUserObj._id) {
                //here status set to accepted as this is lender side and creator is same so borrower already initiated ongoing proccess
                _currentSessionApply.status = _currentSessionApply.status || src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Accepted;
            }
            else {
                //here loan created by borrower so informing borrower as lender is interested to lend money so borrower can set to accepted status
                _currentSessionApply.status = _currentSessionApply.status || src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].AwaitingForApproval;
            }
            this.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);
            switch (_currentSessionApply.status) {
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Pending:
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].AwaitingForApproval:
                    _currentSessionApply.createdBy = this.authenticationService.currentUserValue._id;
                    this.socketService.setSessionApply(true, _currentSessionApply);
                    break;
                default:
                    this.socketService.updateSessionApply(true, _currentSessionApply, this.lenderUserObj);
                    break;
            }
            //#region create chat group
            let _adminUsersArray = [];
            _adminUsersArray.push(this.lenderUserObj._id);
            _adminUsersArray.push(this.borrowerUserObj._id);
            /*this.borrowerUserObj.firstName + " - " + */
            let _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, this.utilityService.returnLoanType(this.LoanObj.loanType) + " - " + (this.LoanObj.loanNumber || ''), this.LoanObj._id, _currentSessionApply._id, _adminUsersArray, null, null, null, false);
            this.socketService.sendEventToAddNewContact(_currentContactObj);
            //#endregion create chat group
            switch (_currentSessionApply.status) {
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].AwaitingForApproval:
                    selectedTab = { selectedTab: 'sent' };
                    break;
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Accepted:
                    this.alertService.success("Updated. Loan contract is available under My Contract->Active tab.", true);
                    //#region print PDF signed contract
                    let _LoanObj = {
                        borrowersUserObj: null,
                        lendersUserObj: null,
                        loanStartDateTime: null,
                        installments: null,
                        loanType: null,
                        loanRepaymentType: null
                    };
                    _LoanObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](_currentSessionApply);
                    _LoanObj.borrowersUserObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](this.borrowerUserObj);
                    _LoanObj.lendersUserObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](this.lenderUserObj);
                    _LoanObj.loanStartDateTime = moment__WEBPACK_IMPORTED_MODULE_5__(this.LoanObj.loanStartDateTime).format("DD-MMM-YYYY");
                    _LoanObj.lendersUserObj.lenderPassportOrDlNumber = this.lenderUserObj.myPassportNumber;
                    _LoanObj.borrowersUserObj.borrowerPassportOrDlNumber = this.borrowerUserObj.myPassportNumber;
                    _LoanObj.installments = [];
                    for (let index = 0; index < this.LoanObj.loanTenureInMonths; index++) {
                        let installment = {
                            loanStartDateTime: null,
                            calculatedMonthlyAmountForEMI: null
                        };
                        installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1).format("DD-MMM-YYYY");
                        installment.calculatedMonthlyAmountForEMI = this.lendNowForm.get('calculatedMonthlyAmountForEMI').value || this.LoanObj.calculatedMonthlyAmountForEMI;
                        _LoanObj.installments.push(installment);
                    }
                    _LoanObj.loanType = this.utilityService.returnLoanType(this.LoanObj.loanType);
                    _LoanObj.loanRepaymentType = this.LoanObj.loanRepaymentType;
                    this.authenticationService.generateReport4SignedContract(_LoanObj)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                        .subscribe(data => {
                    }, error => {
                        let errorMsg2show = "";
                        try {
                            if (error && error.error && error.error.message) {
                                errorMsg2show = error.error.message;
                            }
                            else if (error && error.message) {
                                errorMsg2show = error.message;
                            }
                            else {
                                errorMsg2show = error;
                            }
                        }
                        catch (ex) {
                        }
                        //this.alertService.error(errorMsg2show);
                        this.loading = false;
                    });
                    //#endregion print PDF signed contract
                    break;
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Pending:
                    this.alertService.success("Loan contract signed successfully.", true);
                    break;
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Rejected:
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].RejectedOngoing:
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].RejectedOngoingWithRefund:
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Suspended:
                    this.alertService.success("Updated. Loan contract is available under My Contract->Rejected tab.", true);
                    break;
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Completed:
                    this.alertService.success("Updated. Loan contract is available under My Contract->Paid tab.", true);
                    break;
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Active:
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Ongoing:
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].OngoingInitiated:
                    this.alertService.success("Updated. Loan contract is available under My Contract->Ongoing tab.", true);
                    break;
                default:
                    break;
            }
        }
        this.appRouterService.appRouteToPath("/lender/my-contract", selectedTab);
    }
    clicked2InitiatePayment(event) {
        if (event.srcElement.checked) {
            this.lendNowForm.get('loanInsuranceRequired').setValue(true);
        }
        else {
            this.lendNowForm.get('loanInsuranceRequired').setValue(false);
        }
    }
    initiatePayment() {
        this.submitted = true;
        if (this.lendNowForm.invalid) {
            return;
        }
        if (this.lendNowForm.get('eSignatureLendersPassportNumber').value != this.lenderUserObj.myPassportNumber) {
            this.alertService.error("Passport Number miss match. Please enter proper number");
            return;
        }
        if (this.lendNowForm.get('loanInsuranceRequired').value) {
            let _calculatedInsuranceValue = 0;
            //_calculatedInsuranceValue = (this.LoanObj.loanAmount * 20) / 100;
            _calculatedInsuranceValue = this.utilityService.returnRoundedNumber((this.LoanObj.loanAmount / 100) * 20);
            this.lendNowForm.get('loanInsuranceAmount').setValue(_calculatedInsuranceValue);
            let _header4Payment = 'Insurance Payment for ' + this.utilityService.returnLoanType(this.LoanObj.loanType);
            let _loanApplyId = this.loanApplyId;
            if (!_loanApplyId) {
                _loanApplyId = this.loanId + '__' + this.borrowerUserObj._id;
            }
            let _paymentUniqId = _loanApplyId + '__' + lodash__WEBPACK_IMPORTED_MODULE_12__["now"]();
            this.initiateForPaymentForLender(this.loanId, _loanApplyId, this.lenderUserObj._id, _calculatedInsuranceValue, _header4Payment, src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["TransactionActionType"].insurance_purchase, null, null, _paymentUniqId);
        }
        else {
            this.userInitiatedForPayment = false;
            this.lendNowForm.get('loanInsuranceAmount').setValue(0);
        }
    }
    resetStatusOfPayment() {
        this.userInitiatedForPayment = false;
    }
    initiateForPaymentForLender(_loanId, _loanApplyId, _endUserId, _amount4Payment, _header4Payment, _transactiActionType, _currency, _selectedPaymentMethod, _paymentUniqId) {
        //#region handle LoanObj payments
        this.userInitiatedForPayment = true;
        this.payment.getCurrentPaymentApproved().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(details => {
        });
        let PaymentObj = {
            transactiActionType: _transactiActionType,
            header4Payment: _header4Payment || null,
            amount4Payment: _amount4Payment || null,
            selectedPaymentMethod: _selectedPaymentMethod || null,
            currency: _currency || null,
            loanId: _loanId || null,
            loanApplyId: _loanApplyId || null,
            appPlanId: null,
            planExpiry: null,
            paymentUniqId: _paymentUniqId || null,
            userId: _endUserId || null
        };
        this.payment.initPaymentConfigStripe(PaymentObj);
        this.payment.getCurrentPaymentApproved().subscribe(_obj => {
            if (_obj && _obj.success) {
                let userObj = this.authenticationService.currentUserValue;
                this.lendNowForm.get('loanInsuranceAmount').setValue(PaymentObj.amount4Payment);
                this.lendNowForm.get('loanInsuranceRequired').setValue(true);
                this.lendNowForm.get('loanInsuranceCreatedOn').setValue(lodash__WEBPACK_IMPORTED_MODULE_12__["now"]());
                this.clickedOnVerifiedSignLoanContract();
            }
            else {
                this.alertService.error(_obj.message || "Payment failed");
                this.lendNowForm.get('loanInsuranceAmount').setValue(0);
                this.lendNowForm.get('loanInsuranceRequired').setValue(false);
                this.lendNowForm.get('loanInsuranceCreatedOn').setValue(null);
            }
            this.resetStatusOfPayment();
            this.payment.sendCurrentPaymentFailed(true);
        });
        //#endregion handle LoanObj payments
    }
    clicked2LoanAgreementCondition(event) {
        if (event.srcElement.checked) {
            this.lendNowForm.get('loanAgreementCondition').setValue(true);
        }
        else {
            this.lendNowForm.get('loanAgreementCondition').setValue(false);
        }
    }
    usersProfile(userObj) {
        //#region fetch creator id
        this.userService.getUserById(userObj._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                //console.log('84', this.authenticationService.currentUserValue);
                const dialogRef = this.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_16__["PublicProfileComponent"], {
                    maxWidth: '100vw',
                    maxHeight: '100vh',
                    height: '100%',
                    width: '100%',
                    hasBackdrop: true,
                    data: {
                        userObj: lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](data['data']),
                        adminViewT: false
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    //console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
                });
            }
            else {
            }
        }, error => {
            let errorMsg2show = "";
            try {
                if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                }
                else if (error && error.message) {
                    errorMsg2show = error.message;
                }
                else {
                    errorMsg2show = error;
                }
            }
            catch (ex) { }
            this.alertService.error(errorMsg2show);
        });
        //#endregion fetch creator id
    }
};
LendNowComponent.ctorParameters = () => [
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__["SocketioService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_9__["AppRouterService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"] },
    { type: src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_14__["PaymentService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] }
];
LendNowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lend-now',
        template: _raw_loader_lend_now_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lend_now_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__["SocketioService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_9__["AppRouterService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"],
        src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_14__["PaymentService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]])
], LendNowComponent);



/***/ }),

/***/ "vUt5":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/loan-market/loan-market.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\r\n    <div class=\"card shadow-sm mb-4\" *ngFor=\"let LoanMarket of allLoanMarketData\">\r\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n            {{LoanMarket.LoanMarketubject}}\r\n        </div>\r\n        <div class=\"card-body px-md-3 px-1 small\">\r\n             <div class=\"row\">               \r\n            <div class=\"col-xl-12 col-12\">\r\n                <p class=\"para2\" [class.show_more]=\"!LoanMarket._id\">\r\n                    {{LoanMarket.loanAmount}}\r\n                </p>\r\n            </div>          \r\n            <div class=\"col-xl-6 col-6 border-right mb-2\">\r\n                <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{LoanMarket.loanStartDateTime | date:'MMM d, h:mm a'}}\r\n            </div>\r\n            <div class=\"col-xl-6 col-6\">\r\n                <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\r\n                {{LoanMarket.location}}\r\n            </div>\r\n          \r\n        </div>\r\n        </div>\r\n        <div class=\"card-footer bg-white\">\r\n            <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{LoanMarket.LoanMarketType}}</span>\r\n          \r\n            <a class=\"btn btn-primary text-capitalize  btn-sm float-right text-white\" (click)=\"showAppliedToLoanMarket(LoanMarket)\">Details</a>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"mt-5 text-center blog-agency no-item\">\r\n        <img src=\"assets/img/noresult.png\">\r\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\r\n    </div>\r\n</section> -->\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12 col-12 align-items-stretch\">\r\n        <button *ngIf=\"this.searchFilterObj\" class=\"btn btn-xs btn-danger float-right mb-3 mt-n2 ml-2\" (click)=\"cleanSearchFilter()\" i18n>\r\n            <i class=\"icon icon-trash\"></i> Reset\r\n        </button>\r\n        <button class=\"btn btn-xs btn-success float-right mb-3 mt-n2\"  (click)=\"showSearchPanel()\" i18n> \r\n            <i class=\"icon icon-filter\"></i> Filter\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-4 col-12 d-flex align-items-stretch mb-4\" *ngFor=\"let LoanMarket of allLoanMarketData | sortArrayByUpdatedOn:'loanStartDateTime':true\">\r\n\r\n        <div class=\"clash-card goblin w-100\">\r\n\r\n            <div class=\"product-image\" *ngIf=\"(!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)) || (returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket))\">\r\n                <span class=\"onsale-section\" *ngIf=\"returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\"><span class=\"onsale\" i18n>Contract Signed</span></span>\r\n\r\n                <span class=\"onsale-section\"  *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\"><span class=\"onsale\" i18n>Cancelled</span></span>\r\n              </div>\r\n\r\n            <div class=\"clash-card__level clash-card__level--goblin mt-3\">\r\n                <!--{{(LoanMarket.createdByUserObj.userType || \"\").replace(\"_\", \" \")}}-->\r\n                {{authenticationService.returnUserTypeForUserFromSuppliedUserLevel(LoanMarket.createdByUserObj.userType)}}\r\n            </div>\r\n            <div class=\"clash-card__unit-name text-capitalize\">{{(LoanMarket.loanType || \"\").replace(\"_\", \" \")}}</div>\r\n            <div class=\"clash-card__unit-description\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"Created By\">\r\n                        <div (click)=\"usersProfile(LoanMarket.createdByUserObj)\">\r\n                            <!--<i class=\"icon icon-user\"></i>-->\r\n                            <span class=\"flag-icon flag-icon-{{utilityService.returnCountryCodeFromName(LoanMarket.createdByUserObj.country)}} flag-icon-squared\"></span>\r\n                        </div>\r\n                        <div class=\"text-black-50 small\">\r\n                            {{LoanMarket.createdByUserObj.firstName}}\r\n                        </div>\r\n                    </div>\r\n                     <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"City\">\r\n                        <div>\r\n                            <i class=\"icon icon-location-pin\"></i>\r\n                        </div>\r\n                        <div class=\"text-black-50 small\">\r\n                            {{LoanMarket.createdByUserObj.cityCode}}\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"col-xl-4 col-4 \" data-toggle=\"tooltip\" title=\"Created On\">\r\n                        <div>\r\n                            <i class=\"icon icon-time\"></i>\r\n                        </div>\r\n                        <div class=\"text-black-50 small\">\r\n                            {{LoanMarket.loanStartDateTime | date:'MMM d, yy'}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mt-2\">\r\n                        <div class=\"text-black-50 small mb-1\" i18n>\r\n                            Payment Methods\r\n                        </div>\r\n                     \r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('bank')>-1\" class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n > \r\n                            BANK\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('cash')>-1\" class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n> \r\n                            Cash\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('revolut')>-1\" class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n> \r\n                            Revolut\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('paypal')>-1\" class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n> \r\n                            Paypal\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('skrill')>-1\" class=\"badge font-weight-light text-uppercase badge-success\" i18n> \r\n                            Skrill\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && !utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\" class=\"btn btn-success btn-sm mb-2\" (click)=\"navigate2LoanProccess(LoanMarket._id)\" i18n>\r\n                Lend Now\r\n            </button>\r\n            <button *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\"\r\n                class=\"btn btn-danger btn-sm mb-2\" disabled i18n>\r\n                Cancelled\r\n            </button>\r\n            <button *ngIf=\"returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\" class=\"btn btn-primary btn-sm mb-2\"  i18n>\r\n                <i class=\"icon icon-check-box\"></i> \r\n                Contract Signed\r\n            </button>\r\n\r\n            <div class=\"clash-card__unit-stats clash-card__unit-stats--goblin clearfix\">\r\n                <div class=\"one-third\">\r\n                    <div class=\"stat\">{{LoanMarket.loanAmount}}</div>\r\n                    <div class=\"stat-value\" i18n>Amount</div>\r\n                </div>\r\n\r\n                <div class=\"one-third\">\r\n                    <div class=\"stat\">\r\n                        {{utilityService.returnRoundedNumber(LoanMarket.calculatedMonthlyAmountForEMI*LoanMarket.loanTenureInMonths)}}\r\n                    </div>\r\n                    <div class=\"stat-value\" i18n>Refund</div>\r\n                </div>\r\n\r\n                <div class=\"one-third no-border\">\r\n                    <div class=\"stat\">{{LoanMarket.loanTenureInMonths}} <sub class=\"month\">{{LoanMarket.loanTenureInMonths>1?'Months':'Month'}}</sub></div>\r\n                    <div class=\"stat-value\" i18n>Duration</div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div> <!-- end clash-card goblin-->\r\n\r\n\r\n    </div>\r\n    <!-- <div class=\"mt-5 text-center blog-agency no-item\">\r\n        <img src=\"assets/img/noresult.png\">\r\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\r\n    </div> -->\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=lender-lender-module-es2015.js.map