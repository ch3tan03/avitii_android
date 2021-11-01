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
/* harmony default export */ __webpack_exports__["default"] = ("  <!--copyright start-->\n  <div class=\"agency copyright\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"link-horizontal\">\n                    <ul>\n                        <li>\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Privacy Policy</a>\n                        </li>\n\n                        <li>\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Terms of Use</a>\n                        </li>\n                        <li>\n                            <a class=\"copyright-text\" routerLink=\"/faqs\" routerLinkActive=\"active\" i18n>FAQs</a>\n                        </li>\n                        \n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div>\n                    <h6 class=\"copyright-text text-white text-right\" i18n>© 2020 Avitii Lender System\n\n                    </h6>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  <!--copyright end-->\n  \n ");

/***/ }),

/***/ "5s2n":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/search-borrower/search-borrower.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12 col-12\">\n        <div class=\"row mb-3\">\n            <div class=\"col-xl-12 col-12\">\n                <form class=\"bg-pink border p-4 shadow-sm\">\n                    <div class=\"form-row\">\n                        <div class=\"col-xl-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-12\">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" class=\"form-control\" name=\"modalFindBorrower\" placeholder=\"Find Borrowers\" [(ngModel)]=\"modalFindBorrower\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-secondary\" data-toggle=\"collapse\" data-target=\"#filter-menus\"><i class=\"icon-filter\"></i></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"row collapse\" id=\"filter-menus\">\n                                <div class=\"col-xl-6 mt-2\">\n                                    <select formControlName=\"services4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\n                                    <option value=\"\" selected>Service Type</option>\n                                    <option *ngFor=\"let item of utilityService.ServicesTypes\" [ngValue]=\"item.value\">\n                                        {{item.name}}</option>\n                                </select>\n                                </div>\n                                <div class=\"col-xl-6 mt-2\">\n                                    <select formControlName=\"location4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\n                                    <option value=\"\" selected>Choose Location</option>\n                                    <option *ngFor=\"let location of utilityService.Locations\" [ngValue]=\"location\">\n                                        {{location}}</option>\n                                </select>\n                                </div>\n                            </div> -->\n                        </div>\n                        <div class=\"col-xl-2\">\n                            <button class=\"btn btn-outline-primary btn-block h-100\" (click)=\"findBorrower(modalFindBorrower)\" i18n>\n                                <i class=\"icon-search\"></i> SEARCH\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-12 col-12\">\n        <section class=\"agency blog blog-sec p-0\">\n            <div class=\"h6 mb-3\">\n                Borrowers\n                <!-- <span class=\"float-right custom-switch floar-right\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\">\n                    <label class=\"custom-control-label\" for=\"customSwitch1\">USA</label>\n                </span> -->\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xl-4 col-12\" *ngFor=\"let item of currentOnlineUserList;\">\n\n\n                    <div class=\"card shadow-sm mb-4\">\n                        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\n                            {{item.firstName}}\n\n                            <div class=\"center-text float-right\">\n\n                             \n                                <span *ngIf=\"item.online\" class=\"badge badge-success\" i18n>Online</span>\n                                <span *ngIf=\"!item.online\" class=\"badge badge-danger\" i18n>Offline</span>\n                            </div>\n                        </div>\n                        <div class=\"card-body px-md-3 px-1 small\">\n                             <div class=\"row\">  \n                            <div class=\"col-xl-3\">\n                                <img class=\"img-fluid img-thumbnail\" src=\"{{item.selfProfileUrl || './assets/img/nouser.png'}}\">\n                            \n                            </div> \n                                \n                            <div class=\"col-xl-8 col-12\">\n                             \n\n                                <div class=\"row\">\n                                    <!-- <div class=\"col-xl-6 col-6 border-right mb-2\">\n                                        <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> \n                                     {{session.loanStartDateTime | date:'MMM d, h:mm a'}} \n                                    </div> -->\n                                    <!-- <div class=\"col-xl-12 col-12\">\n                                        <p class=\"para2\">\n                                            {{item.myProfileDetails}}\n                                        </p>\n                                    </div>  -->\n                                    <div class=\"col-xl-6 col-6\">\n                                        <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\n                                        \n                                        {{item.country || 'NA'}}\n                                    </div>\n                                    <div class=\"col-xl-6 col-6\">\n                                        <i aria-hidden=\"true\" class=\"icon-bag m-r-10\"></i>\n                                        \n                                        {{item.education || 'NA'}}\n                                    </div>\n                                </div>\n                            </div>          \n                          \n                          \n                        </div>\n                        </div>\n                        <div class=\"card-footer bg-white\">\n                            <!-- <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span> -->\n                            <div class=\"row\">\n                                <div class=\"col-xl-12\">\n                                    <button class=\"btn btn-link text-capitalize text-success btn-sm\" (click)=\"usersProfile(item)\">\n                                         Profile</button>\n                                    <button *ngIf=\"item.role=='borrower' && currentUser.role=='lender'\" class=\"btn btn-link btn-sm text-capitalize float-right\" (click)=\"createNewSessionWithBorrower(item._id)\">\n                                        Request Consultation</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n             \n            </div>\n        </section>\n    </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- addSession section -->\n\n<div class=\"row\">\n    <div class=\"col-xl-3 col-12\">\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            Loan Amount\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                            kr {{f.loanAmount.value}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            EMI (Monthly)\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                            kr {{_calculatedMonthlyAmountForEMI}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card border-left-primary shadow py-2\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            Total Loan\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                            kr\n                            {{utilityService.returnRoundedNumber(_calculatedMonthlyAmountForEMI*f.loanTenureInMonths.value)}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-9 col-12\">\n        <div class=\"card shadow mb-4\">\n            <!-- Card Header - Dropdown -->\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Make A Loan</h6>\n            </div>\n            <!-- Card Body -->\n            <div class=\"card-body\">\n                <form [formGroup]=\"addSessionForm\" class=\"theme-form\">\n\n                    <div class=\"row\">\n\n                        <div class=\"col-xl-12 col-12\">\n\n                            <div class=\"form-group\">\n                                <label for=\"loanType\" i18n>Loan Type</label>\n                                <select formControlName=\"loanType\" class=\"custom-select\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanType.errors }\">\n                                    <option value=\"\" selected disabled> Choose Loan Type</option>\n                                    <option *ngFor=\"let item of _.values(utilityService.ParentLoanTypes);\"\n                                        [ngValue]=\"item._id\" >\n                                        {{item.name}}</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.loanType.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanType.errors.required\" i18n>Loan type is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 col-12\">\n                            <div class=\"form-group\">\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\n                                <input type=\"number\" min=\"0\" formControlName=\"loanAmount\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanAmount.errors }\"\n                                    (change)=\"calculateMonthlyAmountForEMI()\" (keyup)=\"calculateMonthlyAmountForEMI()\"\n                                    pattern=\"^[1-9]\\d*$\" />\n                                <div *ngIf=\"submitted && f.loanAmount.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanAmount.errors.required\" i18n>Loan Amount is required</div>\n                                    <div *ngIf=\"f.loanAmount.errors.min\" i18n>value must be greater than 1</div>\n                                    <div *ngIf=\"f.loanAmount.errors.max\" i18n>value must be less than\n                                        {{currentUserMaxLoanAmount}}</div>\n                                    <div *ngIf=\"f.loanAmount.errors.pattern\" i18n>value should be a valid number</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 small text-primary mt-n3 mb-3\">\n                            <div class=\"row\" [ngSwitch]=\"currentUserRoleType\">\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.new_lender\" >\n                                    {{utilityService.LoanAmountMaxTypes[UserType.new_lender].name}}\n                                </div>\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.good_lender\" >\n                                    {{utilityService.LoanAmountMaxTypes[UserType.good_lender].name}}\n                                </div>\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.expert_lender\" >\n                                    {{utilityService.LoanAmountMaxTypes[UserType.expert_lender].name}}\n                                </div>\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.super_lender\" >\n                                    {{utilityService.LoanAmountMaxTypes[UserType.super_lender].name}}\n                                </div>\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"UserType.proff_lender\" >\n                                    {{utilityService.LoanAmountMaxTypes[UserType.proff_lender].name}}\n                                </div>\n                                <div class=\"col-xl-12\" *ngSwitchDefault >\n                                    {{utilityService.LoanAmountMaxTypes[UserType.new_lender].name}}\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-12\" >\n                                    {{authenticationService.returnUserTypeForUserFromSuppliedUserLevel(currentUserRoleType)}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 col-12\">\n                            <div class=\"form-group\">\n                                <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\n                                <input type=\"number\" formControlName=\"loanTenureInMonths\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanTenureInMonths.errors }\"\n                                    (change)=\"calculateMonthlyAmountForEMI()\" (keyup)=\"calculateMonthlyAmountForEMI()\"\n                                    pattern=\"^[1-9]\\d*$\" />\n                                <div *ngIf=\"submitted && f.loanTenureInMonths.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.required\" i18n>Loan Tenure is\n                                        required\n                                    </div>\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.min\" i18n>value must be greater than\n                                        3</div>\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.pattern\" i18n>value should be a valid number\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 col-12\">\n                            <div class=\"form-group\">\n                                <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\n                                <input type=\"number\" formControlName=\"loanInterestRate\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanInterestRate.errors }\"\n                                    (change)=\"calculateMonthlyAmountForEMI()\"\n                                    (keyup)=\"calculateMonthlyAmountForEMI()\" />\n                                <div *ngIf=\"submitted && f.loanInterestRate.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanInterestRate.errors.required\" i18n>Interest Rate is\n                                        required\n                                    </div>\n                                    <div *ngIf=\"f.loanInterestRate.errors.min\" >\n                                        min interest rate of {{loanInterestRateMin}}%\n                                    </div>\n                                    <div *ngIf=\"f.loanInterestRate.errors.max\" >\n                                        max interest rate of {{loanInterestRateMax}}% (remember to check  the rules for your country)\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--\n                                <div class=\"col-xl-12 col-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"loanStartDateTimeCustomised\" i18n>Start on</label>\n                                        <input type=\"date\" formControlName=\"loanStartDateTimeCustomised\"\n                                            class=\"form-control\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanStartDateTimeCustomised.errors }\"\n                                            [max]=\"maxDate\" [min]=\"minDate\" />\n                                        <div *ngIf=\"submitted && f.loanStartDateTimeCustomised.errors\"\n                                            class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.required\" i18n>Start Date\n                                                Time is required\n                                            </div>\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.date\" i18n>Invalid Date\n                                                format.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            -->\n                        <!--\n                                        <div class=\"col-xl-12 col-12\">\n                                            <label for=\"loanEndDateTimeCustomised\" i18n>Ends on</label>\n                                            <input [readonly]=\"true\" type=\"datetime-local\"\n                                                formControlName=\"loanEndDateTimeCustomised\" class=\"form-control\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.loanEndDateTimeCustomised.errors }\"\n                                                [max]=\"maxDate\" [min]=\"minDate\" />\n                                            <div *ngIf=\"submitted && f.loanEndDateTimeCustomised.errors\"\n                                                class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.required\" i18n>End Date Time is\n                                                    required\n                                                </div>\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.date\" i18n>Invalid Date format.\n                                                </div>\n                                            </div>\n                                        </div>\n                                        -->\n                        <div class=\"col-xl-12 mb-3\">\n                            <div for=\"loanRepaymentType\" class=\"mb-2\" i18n>How to give the money</div>\n\n                            <div class=\"form-check-inline\"\n                                *ngFor=\"let item of _.values( utilityService.LoanRepaymentTypes);\">\n\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input name=\"service\" id=\"services_{{item._id}}\" type=\"checkbox\"\n                                        class=\"custom-control-input\" value=\"{{item._id}}\"\n                                        (change)=\"onLoanRepaymentTypeChange($event)\"\n                                        [checked]=\"onInitSetLoanRepaymentTypeValue(item._id)\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanRepaymentType.errors }\">\n                                    <label for=\"services_{{item._id}}\"\n                                        class=\"custom-control-label\">{{item.name}}</label>\n                                </div>\n\n                            </div>\n                            <div *ngIf=\"submitted && f.loanRepaymentType.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.loanRepaymentType.errors.required\" i18n>Payment option required\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"col-xl-12 col-12 d-none\">\n                            <div class=\"form-group\">\n                                <label for=\"loanInsuranceType\" i18n>Insurance Choice</label>\n                                <select formControlName=\"loanInsuranceType\" class=\"custom-select\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanInsuranceType.errors }\">\n                                    <option *ngFor=\"let item of _.values(utilityService.InsuranceTypes);\"\n                                        [ngValue]=\"item._id\" >\n                                        {{item.name}}</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.loanInsuranceType.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanInsuranceType.errors.required\" i18n>Option required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 col-12\">\n                            <div class=\"form-group\">\n                                <label for=\"loanMaxBorrower\" i18n>Number of Borrower can apply</label>\n                                <input type=\"number\" formControlName=\"loanMaxBorrower\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanMaxBorrower.errors }\" pattern=\"^[1-9]\\d*$\"/>\n                                <div *ngIf=\"submitted && f.loanMaxBorrower.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanMaxBorrower.errors.required\" i18n>Borrowe limit is\n                                        required\n                                    </div>\n                                    <div *ngIf=\"f.loanMaxBorrower.errors.min\" i18n>value must be greater than 0\n                                    </div>\n                                    <div *ngIf=\"f.loanMaxBorrower.errors.pattern\" i18n>value should be a valid number</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 mb-3\">\n                            <div class=\"form-group\">\n                                <label for=\"comment\" i18n>Description:</label>\n                                <textarea class=\"form-control\" formControlName=\"loanDescription\" rows=\"2\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanDescription.errors }\">\n                                            </textarea>\n                            </div>\n                            <div *ngIf=\"submitted && f.loanDescription.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.loanDescription.errors.required\" i18n>Description is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-12 text-center\">\n                            <hr>\n                            <button type=\"button\" (click)=\"onaddSessionUpdateSubmit()\" [disabled]=\"loading\"\n                                class=\"btn btn-primary\" i18n>Submit</button>\n                            <img *ngIf=\"loading\" class=\"pl-3\"\n                                src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- addSession section -->");

/***/ }),

/***/ "ByGf":
/*!************************************************!*\
  !*** ./src/app/lender/home/home.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .card-body {\n  \n    font-size: 0.6rem !important;\n}\n.card-body h5{\n  \n    font-size: 0.6rem !important;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztHQU9HIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jYXJkLWJvZHkge1xuICBcbiAgICBmb250LXNpemU6IDAuNnJlbSAhaW1wb3J0YW50O1xufVxuLmNhcmQtYm9keSBoNXtcbiAgXG4gICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcbn0gKi8iXX0= */");

/***/ }),

/***/ "CTHm":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/lend-now/lend-now.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- addSession section -->\n<div class=\"row\" *ngIf=\"!userClickedOnSignLoanContract\">\n    <div class=\"col-xl-3 col-12\">\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            EMI (Monthly)\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                            kr {{LoanObj.calculatedMonthlyAmountForEMI}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            Loan Amount\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                            kr {{LoanObj.loanAmount}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            Total Loan\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                            kr\n                            {{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI*LoanObj.loanTenureInMonths)}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-9 col-12\">\n        <div class=\"card shadow mb-4\">\n            <!-- Card Header - Dropdown -->\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <span class=\"float-left\">\n                    <h5 class=\"m-0 font-weight-bold text-primary\">{{headerMessage2show}}</h5>\n                </span>\n                <span>\n                    <div (click)=\"usersProfile(LoanObj.createdByUserObj)\">\n                        <i class=\"icon icon-user\"></i>\n                    </div>\n                </span>\n            </div>\n            <!-- Card Body -->\n            <div class=\"card-body\">\n                <div class=\"theme-form\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-4 col-12 \">\n                            <div class=\"form-group border-right\">\n                                <label for=\"loanType\" i18n>Loan Type</label>\n                                <h4 class=\"text-primary\" >\n                                    {{utilityService.returnLoanType(LoanObj.loanType)}}\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"form-group border-right\">\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\n                                <h4 class=\"text-primary\">\n                                    {{LoanObj.loanAmount}}\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"form-group\">\n                                <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\n                                <h4 class=\"text-primary\">\n                                    {{LoanObj.loanTenureInMonths}}\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"form-group border-right\">\n                                <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\n                                <h4 class=\"text-primary\">\n                                    {{LoanObj.loanInterestRate}}\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"form-group border-right\">\n                                <label for=\"loanStartDateTime\" i18n>Start Date</label>\n                                <h4 class=\"text-primary\" >\n                                    {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"form-group\">\n                                <p class=\"mb-2\" i18n>How to give the money</p>\n\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                                    BANK\n                                </span>\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                                    Cash\n                                </span>\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                                    Revolut\n                                </span>\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                                    Paypal\n                                </span>\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase badge-success\" i18n>\n                                    Skrill\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12\">\n                            <p class=\"mb-2\" i18n>Description:</p>\n                            <div class=\"text-black-50\" i18n>\n                                {{LoanObj.loanDescription}}\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 col-12 mt-3\">\n                            <div class=\"table-responsive table-billing-history\">\n                                <table class=\"table mb-0\">\n                                    <thead>\n                                        <tr>\n                                            <th scope=\"col\" i18n>EMI Date</th>\n                                            <th scope=\"col\" i18n>Payment</th>\n\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr\n                                            *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\n                                            <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\n                                                | date:'dd-MMM-YYYY'}}</td>\n                                            <td>kr {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\n\n                                        </tr>\n\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button *ngIf=\"!userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\n                    (click)=\"clickedOnSignLoanContract()\" i18n>\n                    Sign Loan Contract\n                </button>\n                <button *ngIf=\"userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\n                    (click)=\"resetClickedOnSignLoanContract()\" i18n>\n                    Cancel\n                </button>\n            </div>\n        </div>\n    </div>\n\n</div>\n<div class=\"row\" *ngIf=\"userClickedOnSignLoanContract\">\n\n    <div class=\"col-xl-12 col-12\">\n        <div class=\"card shadow mb-4\">\n            <!-- Card Header - Dropdown -->\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Loan Contract</h5>\n            </div>\n            <!-- Card Body -->\n            <div class=\"card-body\">\n                <div class=\"theme-form\">\n                    <div class=\"row mb-3\">\n                        <div class=\"col-xl-12 col-12 table-responsive\" *ngIf=\"lenderUserObj && borrowerUserObj\">\n\n                            <table class=\"table table table-bordered shadow-sm\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"width: 20%;\"> #</th>\n\n                                        <th style=\"width: 40%;\" i18n>Borrower</th>\n                                        <th style=\"width: 40%;\" i18n>Lender</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            <div class=\"text-black-50 text-uppercase\">\n                                                NAME</div>\n                                        </td>\n                                        <td>\n                                            <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\n                                                {{borrowerUserObj.firstName}}&nbsp;{{borrowerUserObj.lastName}}\n                                            </div>\n                                        </td>\n                                        <td>\n                                            <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\n                                                {{lenderUserObj.firstName}}&nbsp;{{lenderUserObj.lastName}}\n                                            </div>\n                                        </td>\n                                    </tr>\n\n                                    <tr>\n                                        <td>\n                                            <div class=\"text-black-50 text-uppercase\" i18n>\n                                                Address</div>\n                                        </td>\n                                        <td>\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\n                                                {{borrowerUserObj.address}}\n                                            </div>\n                                        </td>\n                                        <td>\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\n                                                {{lenderUserObj.address}}\n                                            </div>\n                                        </td>\n                                    </tr>\n\n                                    <tr>\n                                        <td>\n                                            <div class=\"text-black-50 text-uppercase\" i18n>\n                                                Passport Number</div>\n                                        </td>\n                                        <td>\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\n                                                {{borrowerUserObj.myPassportNumber}}\n                                            </div>\n                                        </td>\n                                        <td>\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\n                                                {{lenderUserObj.myPassportNumber}}\n                                            </div>\n                                        </td>\n                                    </tr>\n\n                                    <tr>\n                                        <td>\n                                            <div class=\"text-black-50 text-uppercase\" i18n>\n                                                DL Number</div>\n                                        </td>\n                                        <td>\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\n                                                {{borrowerUserObj.myDLNumber}}\n                                            </div>\n                                        </td>\n                                        <td>\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\n                                                {{lenderUserObj.myDLNumber}}\n                                            </div>\n                                        </td>\n                                    </tr>\n\n                                    <tr>\n                                        <td>\n                                            <div class=\"text-black-50 text-uppercase\" i18n>\n                                                Payment Method</div>\n                                        </td>\n                                        <td>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\">\n                                                BANK\n\n                                                <label for=\"borrowerBankName\" i18n>Bank Name</label>\n                                                <h4 class=\"text-primary\" >\n                                                    {{borrowerUserObj.bankName}}\n                                                </h4>\n                                                <label for=\"borrowerRegNumber\" i18n>Reg nr</label>\n                                                <h4 class=\"text-primary\" >\n                                                    {{borrowerUserObj.regNumber}}\n                                                </h4>\n                                                <label for=\"borrowerAccountNumber\" i18n>Account Number</label>\n                                                <h4 class=\"text-primary\" >\n                                                    {{borrowerUserObj.accountNumber}}\n                                                </h4>\n                                                <!--\n                                                <label for=\"borrowerMobilePayment\" i18n>Mobile payment</label>\n                                                <h4 class=\"text-primary\" i18n>\n                                                    {{borrowerUserObj.mobilePayment}}\n                                                </h4>\n                                            -->\n                                            </div>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                                                class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                                                Cash\n                                            </div>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\" i18n>\n\n                                                Revolut:\n                                                {{borrowerUserObj.revolutWalletID}}\n                                            </div>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\" i18n>\n                                                Paypal ID: {{borrowerUserObj.paypalWalletID}}\n                                            </div>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\" i18n>\n                                                Skrill: {{borrowerUserObj.skrillWalletID}}\n                                            </div>\n\n\n                                        </td>\n\n                                        <td>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\">\n                                                BANK\n\n                                                <div class=\"text-black-50\" i18n>Bank Name</div>\n                                                <div class=\"font-weight-bold text-primary mb-1\">\n                                                    {{lenderUserObj.bankName}}\n                                                </div>\n                                                <div for=\"lenderRegNumber\" i18n>Reg Number</div>\n                                                <div class=\"font-weight-bold text-primary mb-1\">\n                                                    {{lenderUserObj.regNumber}}\n                                                </div>\n                                                <div for=\"lenderAccountNumber\" i18n>Account Number</div>\n                                                <div class=\"font-weight-bold text-primary mb-1\">\n                                                    {{lenderUserObj.accountNumber}}\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                                                class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                                                Cash\n                                            </div>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\" i18n>\n\n                                                Revolut:\n                                                {{lenderUserObj.revolutWalletID}}\n                                            </div>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\" i18n>\n                                                Paypal ID: {{lenderUserObj.paypalWalletID}}\n                                            </div>\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\" i18n>\n                                                Skrill: {{lenderUserObj.skrillWalletID}}\n                                            </div>\n\n\n                                        </td>\n\n                                    </tr>\n\n                                </tbody>\n                            </table>\n                        </div>\n\n                    </div>\n\n                    <div class=\"row mb-3\">\n                        <div class=\"col-xl-4 col-12 \">\n                            <div class=\"card shadow-sm p-2\">\n                                <label for=\"loanType\" i18n>Loan Type</label>\n                                <h4 class=\"text-primary\">\n                                    {{utilityService.returnLoanType(LoanObj.loanType)}}\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"card shadow-sm p-2\" *ngIf=\"!f.proposedLoanAmount.value\">\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\n                                <h4 class=\"text-primary\">\n                                    {{LoanObj.loanAmount}}\n                                </h4>\n                            </div>\n                            <div class=\"card shadow-sm p-2\" *ngIf=\"f.proposedLoanAmount.value\">\n                                <label for=\"loanAmount\" i18n>Loan Amount/Proposed Loan Amount</label>\n                                <h4 class=\"text-primary\">\n                                    <span\n                                        style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\n                                        {{LoanObj.loanAmount}}\n                                    </span>\n                                    /\n                                    <span>\n                                        {{f.proposedLoanAmount.value}}\n                                    </span>\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"card shadow-sm p-2\">\n                                <label i18n>Tenure in Months</label>\n                                <h4 class=\"text-primary\">\n                                    {{LoanObj.loanTenureInMonths}}\n                                </h4>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"card shadow-sm p-2\">\n                                <label i18n>Interest(%) Rate (per month)</label>\n                                <h4 class=\"text-primary\">\n                                    {{LoanObj.loanInterestRate}}\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"card shadow-sm p-2\">\n                                <label i18n>Start Date</label>\n                                <h4 class=\"text-primary\">\n                                    {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\n                                </h4>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-12\">\n                            <div class=\"card shadow-sm p-2\">\n\n                                <label class=\"mb-3\" i18n>Payment Method</label>\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\n                                    BANK\n                                </span>\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\n                                    Cash\n                                </span>\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\n                                    Revolut\n                                </span>\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\n                                    Paypal\n                                </span>\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\n                                    class=\"badge font-weight-light text-uppercase badge-success w-20\">\n                                    Skrill\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 mt-3\">\n                            <div class=\"card shadow-sm p-2\">\n                                <label i18n>Description</label>\n\n                                <div class=\"text-black-50\">\n                                    {{LoanObj.loanDescription}}\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"col-xl-12 mt-3\" *ngIf=\"f.loanInsuranceRequired.value\">\n                            <div class=\"card shadow-sm p-2\">\n                                <label i18n>Applied for Insurance with Amount</label>\n                                <div class=\"text-black-50\">\n                                    {{f.loanInsuranceAmount.value}}\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-xl-12 col-12 mt-3\">\n                            <div class=\"table-responsive table shadow-sm\">\n                                <table class=\"table mb-0\">\n                                    <thead>\n                                        <tr>\n                                            <th scope=\"col\" i18n>EMI Date</th>\n                                            <th scope=\"col\" i18n>Payment</th>\n\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr\n                                            *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\n                                            <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\n                                                | date:'dd-MMM-YYYY'}}</td>\n                                            <td *ngIf=\"(!f.calculatedMonthlyAmountForEMI.value) || (f.calculatedMonthlyAmountForEMI.value ==LoanObj.calculatedMonthlyAmountForEMI)\">kr\n                                                {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\n                                            <td *ngIf=\"(f.calculatedMonthlyAmountForEMI.value) && (f.calculatedMonthlyAmountForEMI.value !=LoanObj.calculatedMonthlyAmountForEMI)\">kr\n                                                <span\n                                                    style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\n                                                    {{LoanObj.calculatedMonthlyAmountForEMI}}\n                                                </span>\n                                                &nbsp;\n                                                <span>\n                                                    {{f.calculatedMonthlyAmountForEMI.value}}\n                                                </span>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"card shadow mb-4\">\n\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Terms & Conditions</h5>\n            </div>\n\n            <div class=\"card-body\">\n                <ol class=\"terms ml-n4\">\n                    <li>\n                        <div class=\"font-weight-bold\" i18n>Scope</div>\n                        <div i18n>\n                            These loan terms apply to all loan agreements entered into between the borrower and the\n                            lender\n                            through the Avitii Lending System. Avitii Lending System acts solely as a dissemination\n                            platform\n                            and cannot be held liable of any kind, either by the lender or the borrower.\n                            By signing the loan agreement, you have accepted these loan terms, which deal with you and\n                            the\n                            borrower. You are at all times subject to the terms of use of the Avitii Lending System.\n                            Deviations from the loan terms must be agreed in writing, and in the event of a discrepancy\n                            between the loan terms and your agreement, the loan agreement will take precedence.\n                            Avitii Lending System does not provide financial advice when concluding the credit agreement\n                            and\n                            therefore does not assume any responsibility in connection with this.\n                            Both the borrower and the lender confirm compliance with the country's applicable laws and\n                            regulations for private loans between private individuals.\n                            Borrower as well as lender, provides using Avitii Lending System\n                            consent to information including, loan history as well as profile data,\n                            address, photo id, social media shared and registered at Credit-List.net\n                        </div>\n\n                    </li>\n                    <li>\n                        <div class=\"font-weight-bold\" i18n>Acceptance deadline</div>\n                        <div i18n>\n                            Loan offers offered on the Avitii Lending System must be considered as an open offer, for\n                            any\n                            borrower profile on the website. It is the individual private loan provider who, based on\n                            the\n                            borrower's information, makes the final decision on the loan implementation.\n                            Loan offers are considered as P2P loans, where any acceptance of loan offers is binding on\n                            the\n                            borrower. The lender as well as the borrower can stay updated at any time with the terms of\n                            agreements on the Avitii Lending Systems website.\n                        </div>\n                    </li>\n                    <li>\n                        <div class=\"font-weight-bold\" i18n>Prerequisites</div>\n                        <div i18n>\n                            Credit rating: As a borrower, you declare in good faith that your information entered at all\n                            times is correct, that at the time of entering into the loan you have not been declared\n                            unfit to\n                            take care of yourself or your finances. At the same time, you declare not to be under\n                            compulsory\n                            dissolution, debt restructuring, or otherwise declared insolvent.\n                            Money laundering: Avitii Lending System is a dissemination platform, and is therefore out of\n                            responsibility. Private lender enters into loan agreement with private borrowers. As a\n                            borrower\n                            on the website, you must in principle always provide private information on an ongoing\n                            basis, at\n                            the request of Avittii Lending Systems. If you do not provide the necessary correct\n                            information,\n                            the Avitii Lending System may exclude you from using the Website.\n                        </div>\n\n                    </li>\n                    <li>\n                        <div class=\"font-weight-bold\" i18n>Loan terms</div>\n                        The borrower must at all times be aware that he or she has the finances to take out offered\n                        loans. In addition to the principal, the opportunity to bear interest expenses, fees and other\n                        expenses in connection with redemption.\n\n                        <div i18n>The borrower must at all times confirm their creditworthiness, as well as they are not\n                            over-mortgaged for the applicable period. The borrower must at all times comply with the\n                            applicable rules for repayment. In the event of late payment or otherwise default, it is up\n                            to the lender to impose additional expenses. The borrower confirms that he or she is solely\n                            responsible for finding a solution to repay the loan / debt.</div>\n                        <div i18n>\n                            The borrower confirms with this agreement that he agrees that the lender can at any time\n                            transfer the loan to a third party for recovery.\n                        </div>\n                        <div i18n>\n                            Receipt for repayment or remission must be notified in writing by endorsement on this loan\n                            document.\n                        </div>\n\n                        <div i18n>\n                            In the event of late payment, 5 days from the payment date are generally given to find a\n                            solution yourself. In case the borrower fails to comply with the repayment within the 5\n                            days, the lender is entitled to impose a 65% fee on the amount lent, valid from the date of\n                            payment. After another 5 days, the debt will be transferred to recovery.\n                        </div>\n\n                    </li>\n                    <li>\n                        <div class=\"font-weight-bold\" i18n>Fraud</div>\n                        <div i18n>\n                            Borrowers who take out loans fraudulently, or in some other way by giving incorrect\n                            information\n                            and thus force themselves on loans that they are unable to repay or should have foreseen,\n                            not\n                            being able to repay will be considered fraud.\n                            279 CRIMINAL ACT Fraud For fraud, a person is punished who, in order to obtain gain or other\n                            unjustified gain, by unlawfully causing, corroborating or exploiting an error, determines\n                            another for an act or omission, whereby the person or person for whom the act is inflicted\n                            or\n                            the omission becomes decisive, a loss of property.\n                        </div>\n\n                    </li>\n\n\n                </ol>\n                <hr>\n                <h5>E-Signature</h5>\n                <hr>\n                <form [formGroup]=\"lendNowForm\" class=\"theme-form\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-6 col-12 d-none\">\n                            <div class=\"form-group\">\n                                <label for=\"eSignatureLendersName\" i18n>Name</label>\n                                <input type=\"text\" formControlName=\"eSignatureLendersName\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureLendersName.errors }\" />\n                                <div *ngIf=\"submitted && f.eSignatureLendersName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.eSignatureLendersName.errors.required\" i18n>Name is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6 col-12 d-none\">\n                            <div class=\"form-group\">\n                                <label for=\"eSignatureLendersPassportNumber\" i18n>Passport or Driving Licence\n                                    Number</label>\n                                <input type=\"text\" formControlName=\"eSignatureLendersPassportNumber\"\n                                    class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureLendersPassportNumber.errors }\" />\n                                <div *ngIf=\"submitted && f.eSignatureLendersPassportNumber.errors\"\n                                    class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.eSignatureLendersPassportNumber.errors.required\" i18n>Passport or\n                                        Driving\n                                        Licence Number is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6 col-12\" *ngIf=\"authenticationService.currentUserValue.userMemberShipExpireOn\">\n                            <div class=\"form-check-inline\">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input name=\"loanInsuranceRequired\" id=\"loanInsuranceRequired\" type=\"checkbox\"\n                                        class=\"custom-control-input\" [value]=\"true\"\n                                        (change)=\"clicked2InitiatePayment($event)\"\n                                        [checked]=\"f.loanInsuranceRequired.value\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanInsuranceRequired.errors }\">\n                                    <label for=\"loanInsuranceRequired\" class=\"custom-control-label\">Get Loan\n                                        Insurance <i class=\"icon icon-info-alt\"\n                                            data-title=\"Calculated insurance will be 20% of the total loan amount.\"></i></label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6 col-12\" *ngIf=\"f.loanInsuranceRequired.value\">\n                            Insurance Amount <span class=\"badge badge-secondary\">kr\n                                {{utilityService.returnRoundedNumber(((LoanObj.loanAmount || 0)/100)*20)}}</span>\n                            <div class=\"small text-black-50\">Calculated insurance will be 20% of the total loan amount.\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6 col-12\">\n                            <div class=\"form-check-inline\">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input name=\"loanAgreementCondition\" id=\"loanAgreementCondition\" type=\"checkbox\"\n                                        class=\"custom-control-input\" [value]=\"true\"\n                                        (change)=\"clicked2LoanAgreementCondition($event)\"\n                                        [checked]=\"f.loanAgreementCondition.value\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanAgreementCondition.errors }\">\n                                    <label for=\"loanAgreementCondition\" class=\"custom-control-label\">\n                                        Agree to the above terms & conditions for Loan Agreement.\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer text-right\">\n\n                <app-payment [hidden]=\"!userInitiatedForPayment\"></app-payment>\n\n                <button *ngIf=\"f.loanInsuranceRequired.value\" type=\"button\" class=\"btn btn-success float-right\" (click)=\"initiatePayment()\" i18n>\n                    Proceed & Pay\n                </button>\n                <button type=\"button\" *ngIf=\"!f.loanInsuranceRequired.value\" class=\"btn btn-success float-right\"\n                    (click)=\"clickedOnVerifiedSignLoanContract()\" i18n>\n                    SUBMIT\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- addSession section -->");

/***/ }),

/***/ "IKZ3":
/*!****************************************************!*\
  !*** ./src/app/lender/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n    padding: 0px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgcGFkZGluZzogMHB4IDA7XG59Il19 */");

/***/ }),

/***/ "IX0O":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/calendar/calendar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<full-calendar [options]=\"calendarOptions\"></full-calendar>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".terms li{\n    font-size: smaller;\n\n    font-weight: 300;\n    line-height: 20px;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbmQtbm93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0lBRWxCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImxlbmQtbm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMgbGl7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".my_session_details_modal mat-dialog-content {    \n    max-height: 82vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXNlc3Npb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibXktc2Vzc2lvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teV9zZXNzaW9uX2RldGFpbHNfbW9kYWwgbWF0LWRpYWxvZy1jb250ZW50IHsgICAgXG4gICAgbWF4LWhlaWdodDogODJ2aDtcbn0iXX0= */");

/***/ }),

/***/ "lX2P":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul  class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion navbar_side_panel\" id=\"accordionSidebar\">\n\n    <!-- Sidebar - Brand -->\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\">\n        <img class=\"img-fluid\" src=\"./assets/img/avitii-logo.png\">\n    </a>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\">\n\n    <div class=\"text-white text-center mt-2\">\n        <a class=\"mr-1 small text-white\" href=\"/en\">English</a> |\n        <a href=\"/da\" class=\"ml-1 small text-white\">Dansk</a>\n    </div>\n   \n    <!-- Nav Item - Dashboard -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\">\n            {{currentUser.firstName}}\n            <!-- <a class=\"float-right ml-2\" title=\"Logout\" (click)=\"navigate2State('/logout')\">\n                <i class=\"icon icon-flickr-alt\"></i>\n               </a> -->\n            <span class=\"badge badge-success float-right font-weight-lighter text-capitalize\"\n                [textContent]=\"currentUser.role\"> Borrower</span>\n\n        </a>\n    </li>\n\n\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <!-- <div class=\"sidebar-heading\">\n        Interface\n    </div> -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/lender/\">\n            <i class=\"icon icon-home\"></i>\n            <span i18n>Dashboard</span></a>\n    </li>\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/lender/loan-market\" routerLinkActive=\"active\">\n            <i class=\"icon icon-shopping-cart\"></i>\n            <span i18n>Loan Market</span></a>\n    </li>\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"showAlert()\"\n       routerLinkActive=\"active\">\n            <i class=\"icon icon-money\"></i>\n            <span i18n>Make a Loan</span></a>\n    </li>\n    <!-- routerLink=\"/lender/make-a-loan\" -->\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/lender/my-contract\" routerLinkActive=\"active\">\n            <i class=\"icon icon-bag\"></i>\n            <span i18n>My Contracts</span></a>\n    </li>\n  \n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\n            <i class=\"icon icon-comments\"></i>\n            <span i18n>Messages</span>\n            <span *ngIf=\"messagesService.returnTotalPendingMessagesForUser()>0\" class=\"badge badge-light float-right font-weight-lighter text-capitalize\" i18n> {{messagesService.returnTotalPendingMessagesForUser()}}</span>\n        </a>\n          \n    </li>\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/lender/calendar\" routerLinkActive=\"active\">\n            <i class=\"icon icon-calendar\"></i>\n            <span i18n>Calendar</span></a>\n    </li>\n\n  \n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <!-- <div class=\"sidebar-heading\">\n        Addons\n    </div> -->\n\n    <!-- Nav Item - Pages Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\"\n            aria-controls=\"collapsePages\">\n            <i class=\"icon icon-settings\"></i>\n            <span i18n>Settings</span>\n        </a>\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n                <!-- <h6 class=\"collapse-header\">Login Screens:</h6> -->\n                <a class=\"collapse-item\" routerLink=\"/lender/profile\" routerLinkActive=\"active\" i18n>My Profile</a>\n                <a class=\"collapse-item\" routerLink=\"/lender/update-password\" routerLinkActive=\"active\" i18n>Change Password</a>\n                <a class=\"collapse-item\" routerLink=\"/lender/bank-details\" routerLinkActive=\"active\" i18n>Bank Details</a>\n                <a class=\"collapse-item\" routerLink=\"/lender/my-subscriptions\" routerLinkActive=\"active\" i18n>My Subscriptions</a>\n\n            </div>\n        </div>\n    </li>\n\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/logout\">\n            <i class=\"icon icon-flickr-alt\"></i>\n            <span i18n>Logout</span></a>\n    </li>\n\n    <!-- Divider -->\n    <!-- <hr class=\"sidebar-divider d-none d-md-block\"> -->\n\n    <!-- Sidebar Toggler (Sidebar) -->\n    <!-- <div class=\"text-center d-none d-md-inline\">\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n    </div> -->\n\n \n</ul>\n<!-- <div class=\"responsive-btn\">\n    <a class=\"toggle-nav\"><i aria-hidden=\"true\" class=\"icon-align-center\"></i></a>\n</div> -->\n<div class=\"sidebar_overlay navbar_side_panel btn-back\" ></div>\n\n\n\n\n<!-- Nav Start [ngClass]=\"{'dark position-relative' : (router.url!='/')}\"-->\n<header id=\"custom-header-nav\" class=\"ecommerce nav-fix shadow-sm p-0 hide-lg\">\n    \n        <div class=\"row\">\n            <div class=\"col\">\n                <nav>\n                    <div class=\"responsive-btn ml-1\">\n                        <a class=\"toggle-nav\"><i aria-hidden=\"true\" class=\"icon-align-center\"></i></a>\n                    </div>\n                    <a class=\"logo-light\" routerLink=\"/home\">\n                        <img class=\"img-fluid\" src=\"./assets/img/avitii-logo-purple.png\"></a>\n\n                    <!-- <div class=\"navbar navbar_side_panel m-l-auto p-1 btn-back\" id=\"togglebtn\">\n                     <div class=\"responsive-btn\">\n                            <h5 class=\"btn-back\">back</h5>\n                        </div> \n                        <ul class=\"main-menu\">\n                            <li><a routerLink=\"/lender\">Home</a></li>\n\n                            <li><a routerLink=\"/lender/search-consulatnt\" routerLinkActive=\"active\">Search</a></li>\n                            <li><a routerLink=\"/lender/my-contract\" routerLinkActive=\"active\">My Contract</a></li>\n                            <li><a routerLink=\"/lender/make-a-loan\" routerLinkActive=\"active\"><i class=\"icon-plus\"></i>\n                                    Make a Loan</a></li>\n\n                        </ul>\n                    </div> -->\n                    <div class=\"top-header-right mr-1\">\n                        <ul>\n\n                            <!-- <li class=\"cart\">\n                                <a aria-expanded=\"false\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\n                                    <i class=\"icon-comment-alt\"></i>\n                                </a>\n\n                            </li>\n                            <li class=\"cart\">\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\" id=\"dropdownMenuButton1\">\n                                    <i class=\"icon-bell bell\"></i>\n                                    <span *ngIf=\"(utilityService._.keys(notificationService.appNotifications).length)>0\"\n                                        class=\"badge badge-primary bell-count\"\n                                        [textContent]=\"utilityService._.keys(notificationService.appNotifications).length\"></span>\n                                </a>\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\"\n                                    x-placement=\"bottom-end\"\n                                    style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\n                                    <ul class=\"shopping-cart list-group list-group-flush\">\n                                        <li class=\"list-group-item\"\n                                            *ngFor=\"let notification of utilityService._.values(notificationService.appNotifications)\">\n                                            <div class=\"pb-2\">\n                                                <div class=\"mb-1\">{{notification.message}}&nbsp;<a\n                                                        class=\"float-lg-right font-large text-danger\"\n                                                        (click)=\"notificationService.check4Notification(notification)\"><i\n                                                            class=\"icon-close\" style=\"font-size: 0.6rem;\"></i></a></div>\n                                                <div class=\"font-weight-light small mb-1\">{{notification.description}}\n                                                </div>\n                                            </div>\n                                        </li>\n\n\n                                        <li class=\"no-item text-center\">\n                                            <h4 class=\"my-4 font-weight-normal\">No Notifications</h4>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </li> -->\n                            <li class=\"cart\">\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\"  id=\"dropdownMenuButton1\">\n                                    <!-- <img class=\"userimg mt-n2\" src=\"./assets/img/user-default.png\"> -->\n                                    <i class=\"icon icon-user\"></i>\n                                </a>\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\"\n                                    x-placement=\"bottom-end\"\n                                    style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\n                                    <ul class=\"shopping-cart\">\n                                        <li>\n                                            <a class=\"h6 d-block\" routerLink=\"/lender\">\n                                                {{currentUser.firstName}}\n                                                <span class=\"badge badge-primary float-right\"\n                                                    [textContent]=\"currentUser.role\" i18n> Borrower</span>\n                                            </a>\n                                        </li>\n\n                                        <!-- <li>\n                                            <a class=\"d-block\" routerLink=\"/lender/wallet\">Wallet\n                                                <span\n                                                    class=\"badge badge-success float-right\">${{fundService.totalFund4currentUser}}</span>\n                                            </a>\n                                        </li> -->\n                                        <li><a routerLink=\"/lender/profile\" i18n>Profile</a></li>\n                                        <hr>\n                                        <li>\n                                            <a routerLink=\"/logout\" i18n>Logout</a>\n                                        </li>\n                                    </ul>\n                                </div>\n\n                            </li>\n                        </ul>\n                    </div>\n                    \n                    <div class=\"sidebar_overlay navbar_side_panel btn-back\" style=\"display: none;\"></div>\n                </nav>\n            </div>\n        </div>\n   \n</header>\n<!-- Nav end-->");

/***/ }),

/***/ "m1e0":
/*!**************************************************************!*\
  !*** ./src/app/lender/loan-market/loan-market.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n .wrapper:focus {\n    outline: 0;\n}\n.clash-card {\n    background: white;\n\n    display: inline-block;\n    margin: auto;\n    border-radius: 19px;\n    position: relative;\n    text-align: center;\n    box-shadow: -1px 15px 30px -12px black;\n  \n}\n.clash-card__image {\n    position: relative;\n    height: 230px;\n    margin-bottom: 35px;\n    border-top-left-radius: 14px;\n    border-top-right-radius: 14px;\n}\n.clash-card__image--barbarian {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg');\n}\n.clash-card__image--barbarian img {\n    width: 400px;\n    position: absolute;\n    top: -65px;\n    left: -70px;\n}\n.clash-card__image--archer {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg');\n}\n.clash-card__image--archer img {\n    width: 400px;\n    position: absolute;\n    top: -34px;\n    left: -37px;\n}\n.clash-card__image--giant {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg');\n}\n.clash-card__image--giant img {\n    width: 340px;\n    position: absolute;\n    top: -30px;\n    left: -25px;\n}\n.clash-card__image--goblin {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg');\n}\n.clash-card__image--goblin img {\n    width: 370px;\n    position: absolute;\n    top: -21px;\n    left: -37px;\n}\n.clash-card__image--wizard {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg');\n}\n.clash-card__image--wizard img {\n    width: 345px;\n    position: absolute;\n    top: -28px;\n    left: -10px;\n}\n.clash-card__level {\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 700;\n    margin-bottom: 3px;\n}\n.clash-card__level--barbarian {\n    color: #ec9b3b;\n}\n.clash-card__level--archer {\n    color: #ee5487;\n}\n.clash-card__level--giant {\n    color: #f6901a;\n}\n.clash-card__level--goblin {\n    color: #82bb30;\n}\n.clash-card__level--wizard {\n    color: #4facff;\n}\n.clash-card__unit-name {\n    font-size: 26px;\n    color: black;\n    font-weight: 900;\n    margin-bottom: 5px;\n}\n.clash-card__unit-description {\n    padding: 5px;\n    margin-bottom: 10px;\n}\n.clash-card__unit-stats--barbarian {\n    background: #ec9b3b;\n}\n.clash-card__unit-stats--barbarian .one-third {\n    border-right: 1px solid #bd7c2f;\n}\n.clash-card__unit-stats--archer {\n    background: #ee5487;\n}\n.clash-card__unit-stats--archer .one-third {\n    border-right: 1px solid #d04976;\n}\n.clash-card__unit-stats--giant {\n    background: #f6901a;\n}\n.clash-card__unit-stats--giant .one-third {\n    border-right: 1px solid #de7b09;\n}\n.clash-card__unit-stats--goblin {\n    background: #82bb30;\n}\n.clash-card__unit-stats--goblin .one-third {\n    border-right: 1px solid #71a32a;\n}\n.clash-card__unit-stats--wizard {\n    background: #4facff;\n}\n.clash-card__unit-stats--wizard .one-third {\n    border-right: 1px solid #309eff;\n}\n.clash-card__unit-stats {\n    color: white;\n    font-weight: 700;\n    border-bottom-left-radius: 14px;\n    border-bottom-right-radius: 14px;\n}\n.clash-card__unit-stats .one-third {\n    width: 33%;\n    float: left;\n    padding: 10px 5px;\n}\n.clash-card__unit-stats sup {\n    position: absolute;\n    bottom: 4px;\n    font-size: 45%;\n    margin-left: 2px;\n}\n.clash-card__unit-stats .stat {\n    position: relative;\n    font-size: 20px;\n    margin-bottom: 5px;\n}\n.clash-card__unit-stats .stat-value {\n    text-transform: uppercase;\n    font-weight: 400;\n    font-size: 12px;\n}\n.clash-card__unit-stats .no-border {\n    border-right: none;\n}\n.clearfix:after {\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0;\n}\n.slick-prev {\n    left: 100px;\n    z-index: 999;\n}\n.slick-next {\n    right: 100px;\n    z-index: 999;\n}\n.month{\n    font-size: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tbWFya2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7O0lBRWpCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0NBQXNDOztBQUUxQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksdUZBQXVGO0FBQzNGO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9GQUFvRjtBQUN4RjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxtRkFBbUY7QUFDdkY7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0ZBQW9GO0FBQ3hGO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9GQUFvRjtBQUN4RjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJsb2FuLW1hcmtldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gLndyYXBwZXI6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG59XG4uY2xhc2gtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAtMXB4IDE1cHggMzBweCAtMTJweCBibGFjaztcbiAgXG59XG4uY2xhc2gtY2FyZF9faW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTRweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTRweDtcbn1cbi5jbGFzaC1jYXJkX19pbWFnZS0tYmFyYmFyaWFuIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5NTYxMi9iYXJiYXJpYW4tYmcuanBnJyk7XG59XG4uY2xhc2gtY2FyZF9faW1hZ2UtLWJhcmJhcmlhbiBpbWcge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNjVweDtcbiAgICBsZWZ0OiAtNzBweDtcbn1cbi5jbGFzaC1jYXJkX19pbWFnZS0tYXJjaGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5NTYxMi9hcmNoZXItYmcuanBnJyk7XG59XG4uY2xhc2gtY2FyZF9faW1hZ2UtLWFyY2hlciBpbWcge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzRweDtcbiAgICBsZWZ0OiAtMzdweDtcbn1cbi5jbGFzaC1jYXJkX19pbWFnZS0tZ2lhbnQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL2dpYW50LWJnLmpwZycpO1xufVxuLmNsYXNoLWNhcmRfX2ltYWdlLS1naWFudCBpbWcge1xuICAgIHdpZHRoOiAzNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzBweDtcbiAgICBsZWZ0OiAtMjVweDtcbn1cbi5jbGFzaC1jYXJkX19pbWFnZS0tZ29ibGluIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5NTYxMi9nb2JsaW4tYmcuanBnJyk7XG59XG4uY2xhc2gtY2FyZF9faW1hZ2UtLWdvYmxpbiBpbWcge1xuICAgIHdpZHRoOiAzNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjFweDtcbiAgICBsZWZ0OiAtMzdweDtcbn1cbi5jbGFzaC1jYXJkX19pbWFnZS0td2l6YXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5NTYxMi93aXphcmQtYmcuanBnJyk7XG59XG4uY2xhc2gtY2FyZF9faW1hZ2UtLXdpemFyZCBpbWcge1xuICAgIHdpZHRoOiAzNDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjhweDtcbiAgICBsZWZ0OiAtMTBweDtcbn1cbi5jbGFzaC1jYXJkX19sZXZlbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4uY2xhc2gtY2FyZF9fbGV2ZWwtLWJhcmJhcmlhbiB7XG4gICAgY29sb3I6ICNlYzliM2I7XG59XG4uY2xhc2gtY2FyZF9fbGV2ZWwtLWFyY2hlciB7XG4gICAgY29sb3I6ICNlZTU0ODc7XG59XG4uY2xhc2gtY2FyZF9fbGV2ZWwtLWdpYW50IHtcbiAgICBjb2xvcjogI2Y2OTAxYTtcbn1cbi5jbGFzaC1jYXJkX19sZXZlbC0tZ29ibGluIHtcbiAgICBjb2xvcjogIzgyYmIzMDtcbn1cbi5jbGFzaC1jYXJkX19sZXZlbC0td2l6YXJkIHtcbiAgICBjb2xvcjogIzRmYWNmZjtcbn1cbi5jbGFzaC1jYXJkX191bml0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2xhc2gtY2FyZF9fdW5pdC1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tYmFyYmFyaWFuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWM5YjNiO1xufVxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWJhcmJhcmlhbiAub25lLXRoaXJkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmQ3YzJmO1xufVxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWFyY2hlciB7XG4gICAgYmFja2dyb3VuZDogI2VlNTQ4Nztcbn1cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1hcmNoZXIgLm9uZS10aGlyZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QwNDk3Njtcbn1cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1naWFudCB7XG4gICAgYmFja2dyb3VuZDogI2Y2OTAxYTtcbn1cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1naWFudCAub25lLXRoaXJkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGU3YjA5O1xufVxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWdvYmxpbiB7XG4gICAgYmFja2dyb3VuZDogIzgyYmIzMDtcbn1cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1nb2JsaW4gLm9uZS10aGlyZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcxYTMyYTtcbn1cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS13aXphcmQge1xuICAgIGJhY2tncm91bmQ6ICM0ZmFjZmY7XG59XG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0td2l6YXJkIC5vbmUtdGhpcmQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMDllZmY7XG59XG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTRweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTRweDtcbn1cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzIC5vbmUtdGhpcmQge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG59XG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyBzdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDRweDtcbiAgICBmb250LXNpemU6IDQ1JTtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xufVxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLnN0YXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLnN0YXQtdmFsdWUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyAubm8tYm9yZGVyIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uY2xlYXJmaXg6YWZ0ZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDA7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgaGVpZ2h0OiAwO1xufVxuLnNsaWNrLXByZXYge1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cbi5zbGljay1uZXh0IHtcbiAgICByaWdodDogMTAwcHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4ubW9udGh7XG4gICAgZm9udC1zaXplOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "nAv/":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/home/home.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\n<!-- <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n        <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\n        <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Profile</a>\n    </div> -->\n\n<div [ngSwitch]=\"authenticationService.currentUserValue.role\">\n    <div *ngSwitchCase=\"Role.Borrower\">\n        <div class=\"jumbotron\"\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted || !authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\n            <div class=\"text-black-50 h2 font-weight-lighter\" >\n                <span i18n>Welome, Your profile has been verified succesfully. Your need to submit your</span>\n                <span class=\"badge badge-danger\" i18n>Bank Details</span> <span i18n>and</span> \n                <span class=\"badge badge-danger\" i18n>Income Proof Documents</span> <span i18n>to access the loan market.</span>\n            </div>\n            <hr>\n            <ul class=\"list-unstyled\">\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Profile and personal document verification\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/borrower/profile\"></i>\n                    </span>\n                </li>\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Bank details submission\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/borrower/bank-details\"></i>\n                    </span>\n                </li>\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Income Proof Documents and Mothly Expenses\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/borrower/income-proof\"></i>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div *ngSwitchCase=\"Role.Lender\">\n        <div class=\"jumbotron\"\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\n            <div class=\"text-black-50 h2 font-weight-lighter\" i18n>\n                Welome, Your profile has been verified succesfully. Your need to submit your\n                <span class=\"badge badge-danger\">Bank Details</span> to access the Loan Market.\n            </div>\n            <hr>\n            <ul class=\"list-unstyled\">\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Profile and personal document verification\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/lender/profile\"></i>\n                    </span>\n                </li>\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Bank details submission\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/lender/bank-details\"></i>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card border-left-primary shadow h-100\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            My Level\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\n                            <!--{{utilityService.returnStringWithReplacing_(authenticationService.currentUserValue.userType)}}-->\n                            {{(authenticationService.currentUserValue.userTypeTitle || authenticationService.returnUserTypeForUserFromSuppliedUserLevel(authenticationService.currentUserValue.userType))}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card border-left-warning shadow h-100\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\" i18n>\n                            Member since\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            {{authenticationService.currentUserValue.userVerifiedOn | date:'dd-MMM-YYYY'}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card border-left-success shadow h-100\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\" i18n>\n                            Paid Contracts\n                        </div>\n                        <div class=\"row no-gutters align-items-center\">\n                            <div class=\"col-auto\">\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{allMyPaidContractCount}}\n                                </div>\n                            </div>\n                            <!-- <div class=\"col\">\n                                            <div class=\"progress progress-sm mr-2\">\n                                                <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                            </div>\n                                        </div> -->\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Pending Requests Card Example -->\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card border-left-secondary shadow h-100\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-secondary text-uppercase mb-1\" i18n>\n                            Paid Loans</div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{allMyPaidLoanCount}}</div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-primary text-white shadow\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                    Active Loan</div>\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyActiveLoanCount}}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-warning text-white shadow\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                    Disbursed Loans</div>\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyDisbursedLoanCount}}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-success text-white shadow\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                    UnSigned contracts</div>\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyUnSignedContractLoanCount}}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-secondary text-white shadow\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                    Profit Overview</div>\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyProfitOverviewCount}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n\n    <div class=\"col-xl-12 col-12\">\n        <div class=\"card shadow mb-4\">\n\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Active Loans</h6>\n\n            </div>\n\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive table-billing-history\">\n                    <table class=\"table mb-0\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" i18n>Type</th>\n                                <th scope=\"col\" i18n>\n                                    {{Role.Lender!=authenticationService.currentUserValue.role?'Lender\n                                    Name':'Borrower Name'}}\n                                </th>\n                                <th scope=\"col\" i18n>Amount</th>\n                                <th scope=\"col\" i18n>Refund</th>\n                                <th scope=\"col\" i18n>Next EMI</th>\n                                <th scope=\"col\" i18n>Status</th>\n                                <th scope=\"col\">#</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <!--New Data table from Sessions Apply-->\n                            <tr\n                                *ngFor=\"let LoanApplyObj of utilityService._.values( allSessionApplyData) | mySessionsFilter : 'status' : ['accepted']:checkCreatedByUserId:checkCreatedByT\">\n                                <td class=\"text-capitalize\">{{(LoanApplyObj.sessionForBorrower.loanType ||\n                                    \"\").replace(\"_\", \" \")}}</td>\n                                <td class=\"text-capitalize\">\n                                    {{userService.returnUsersObjFromLocal(null,\n                                    null,'firstName',\n                                    (LoanApplyObj.lenderId!=authenticationService.currentUserValue._id?LoanApplyObj.lenderId:LoanApplyObj.borrowerId))}}\n                                </td>\n                                <td>{{LoanApplyObj.loanAmount || LoanApplyObj.sessionForBorrower.loanAmount}}</td>\n                                <td>{{utilityService.returnRoundedNumber((LoanApplyObj.calculatedMonthlyAmountForEMI ||\n                                    LoanApplyObj.sessionForBorrower.calculatedMonthlyAmountForEMI) *\n                                    LoanApplyObj.sessionForBorrower.loanTenureInMonths)}}</td>\n                                <td>{{LoanApplyObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\n                                <td>\n                                    <div *ngIf=\"LoanApplyObj.lenderId!=authenticationService.currentUserValue._id\">\n                                        <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\n                                            <span class=\"badge badge-danger\">\n                                                Pending\n                                            </span>\n                                        </a>\n                                        <a\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                            <span class=\"badge badge-warning\"i18n>\n                                                Money Sent\n                                            </span>\n                                        </a>\n                                        <a\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                            <span class=\"badge badge-success\" i18n>\n                                                Received Money\n                                            </span>\n                                        </a>\n                                    </div>\n                                    <div *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\n                                        <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\n                                            <span\n                                                *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\"\n                                                class=\"badge badge-danger\" i18n>\n                                                Money Not Sent\n                                            </span>\n                                        </a>\n                                        <a\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                            <span class=\"badge badge-warning\" i18n>\n                                                Money Sent\n                                            </span>\n                                        </a>\n                                        <a\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                            <span class=\"badge badge-success\" i18n>\n                                                Money Sent\n                                            </span>\n                                        </a>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div *ngIf=\"LoanApplyObj.lenderId!=authenticationService.currentUserValue._id\">\n                                        <a (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj)\"\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                            <span class=\"badge badge-success\" i18n>is Money Received?</span>\n                                        </a>\n                                        <a\n                                            *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower && LoanApplyObj.nextInstallment && !LoanApplyObj.isLoanAmountPaidByBorrower\">\n                                            <!--\n                                            <span (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj, LoanApplyObj.nextInstallment)\" class=\"badge badge-success\">is Installment Money Transfered?</span>\n                                        -->\n                                            <div class=\"form-check-inline\">\n                                                <div class=\"custom-control custom-checkbox\">\n                                                    <input name=\"isLoanAmountPaidByBorrower\"\n                                                        id=\"isLoanAmountPaidByBorrower\" type=\"checkbox\"\n                                                        class=\"custom-control-input\" [value]=\"true\"\n                                                        (change)=\"LoanMoneyTransferStatusChange($event, LoanApplyObj.sessionForBorrower, LoanApplyObj, LoanApplyObj.nextInstallment)\"\n                                                        [checked]=\"LoanApplyObj.isLoanAmountPaidByBorrower\">\n                                                    <label for=\"isLoanAmountPaidByBorrower\"\n                                                        class=\"custom-control-label\" i18n>\n                                                        Installment Money Transfered\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </div>\n                                    <div *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\n                                        <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\n                                            <!--\n                                            <span (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj)\" class=\"badge badge-success\">\n                                                is Money Transfered?\n                                            </span>\n                                        -->\n                                            <div class=\"form-check-inline\">\n                                                <div class=\"custom-control custom-checkbox\">\n                                                    <input name=\"isLoanAmountPaidByLender\" id=\"isLoanAmountPaidByLender\"\n                                                        type=\"checkbox\" class=\"custom-control-input\" [value]=\"true\"\n                                                        (change)=\"LoanMoneyTransferStatusChange($event, LoanApplyObj.sessionForBorrower, LoanApplyObj)\"\n                                                        [checked]=\"LoanApplyObj.isLoanAmountPaidByLender\">\n                                                    <label for=\"isLoanAmountPaidByLender\" class=\"custom-control-label\" i18n>\n                                                        Money Transfered\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        <a (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj, null, true)\"\n                                            *ngIf=\"!LoanApplyObj.isLoanAmountPaidByBorrower && LoanApplyObj.installmentWiseLoanAmountPaidByBorrower\">\n                                            <span class=\"badge badge-success\" i18n>is Installment Money\n                                                Received?&nbsp;</span>\n                                            <span\n                                                *ngFor=\"let installmentObj of LoanApplyObj.installmentWiseLoanAmountPaidByBorrower\">\n                                                <i\n                                                    *nfIf=\"installmentObj.createdOnForLoanAmountPaidToLender && !installmentObj.createdOnForLoanAmountPaidToLenderConfirmByLender\">*</i>\n                                            </span>\n                                        </a>\n\n\n                                    </div>\n                                </td>\n                            </tr>\n                            <!--New Data table from Session Apply-->\n\n                            <!--Old Data table from Sessions-->\n                            <!--\n                            <tr\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['accepted']:checkCreatedByUserId:checkCreatedByT\">\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\n                                <td class=\"text-capitalize\">\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\n                                    true,'firstName')}}</td>\n                                <td>{{LoanObj.loanAmount}}</td>\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\n                                    LoanObj.loanTenureInMonths)}}</td>\n                                <td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\n                                <td>\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\n                                        <a>\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-danger\">Pending</span>\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-success\">Received Money</span>\n                                        </a>\n                                    </div>\n                                </td>\n                                <td>\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\n                                        <span class=\"badge badge-primary\">Details</span>\n                                    </a>\n                                </td>\n                            </tr>\n                        -->\n                            <!--Old Data table from Sessions-->\n                            <tr class=\"mt-2 text-center no-item\">\n\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-12 col-12\">\n        <div class=\"card shadow mb-4\">\n\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Unsigned Contract</h6>\n\n            </div>\n\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive table-billing-history\">\n                    <table class=\"table mb-0\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" i18n>Type</th>\n                                <th scope=\"col\" i18n>Borrower Name</th>\n                                <th scope=\"col\" i18n>Amount</th>\n                                <th scope=\"col\" i18n>Refund</th>\n                                <!--<th scope=\"col\">Next EMI</th>-->\n                                <th scope=\"col\" i18n>Application Date</th>\n                                <th scope=\"col\" i18n>Status</th>\n                                <th scope=\"col\">#</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['awaiting_for_approval']:checkCreatedByUserId:checkCreatedByT\">\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\n                                <td class=\"text-capitalize\">\n                                    {{LoanObj.nextInstallmentBorrowerFirstName}}\n                                </td>\n                                <td>{{LoanObj.loanAmount}}</td>\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\n                                    LoanObj.loanTenureInMonths)}}</td>\n                                <!--<td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>-->\n                                <td>{{LoanObj.applicationDate | datePretty}}</td>\n                                <td>\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\n                                        <a>\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-danger\" i18n>Money Not Sent</span>\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-success\" i18n>Money Sent</span>\n                                        </a>\n                                    </div>\n                                </td>\n                                <td>\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\n                                        <span class=\"badge badge-primary\" i18n>Details</span>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr class=\"mt-2 text-center no-item\">\n\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-12 col-12\">\n        <div class=\"card shadow mb-4\">\n\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Paid Loans</h6>\n\n            </div>\n\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive table-billing-history\">\n                    <table class=\"table mb-0\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" i18n>Type</th>\n                                <th scope=\"col\" i18n>Lender Name</th>\n                                <th scope=\"col\" i18n>Amount</th>\n                                <th scope=\"col\" i18n>Refund</th>\n                                <th scope=\"col\" i18n>Status</th>\n                                <th scope=\"col\">#</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['paid','completed']:checkCreatedByUserId:checkCreatedByT\">\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\n                                <td class=\"text-capitalize\">\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\n                                    true,'firstName')}}</td>\n                                <td>{{LoanObj.loanAmount}}</td>\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\n                                    LoanObj.loanTenureInMonths)}}</td>\n                                <td>\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\n                                        <a>\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-danger\" i18n>Pending</span>\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-success\" i18n>Received Money</span>\n                                        </a>\n                                    </div>\n                                </td>\n                                <td>\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\n                                        <span class=\"badge badge-primary\" i18n>Details</span>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr class=\"mt-2 text-center no-item\">\n\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--\n        <div class=\"row d-none\">\n        \n            <div class=\"col-xl-4 col-12\">\n                <div class=\"row\">\n        \n                    <div class=\"col-xl-12 col-md-6 mb-3\">\n                        <div class=\"card shadow-sm\">\n                            <div class=\"card-body\">\n                                <div class=\"row no-gutters align-items-center\">\n                                    <div class=\"col text-center border-right\">\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Wallet\n                                        </div>\n                                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                                            ${{fundService.totalFund4currentUser}}</div>\n                                    </div>\n        \n                                    <div class=\"col text-center\">\n                                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Sessions\n                                        </div>\n                                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                                            {{allSessionsCount}}/{{allSessionsTodayCount}}</div>\n                                    </div>\n        \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n        \n                    <div class=\"col-xl-12 col-md-6 mb-3\">\n        \n                        <section class=\"blog-sidebar pt-0\">\n                            <div class=\"row pl-0 pr-0\">\n                                <div class=\"col-lg-12\">\n                                     <div>\n                                        <h5 class=\"blog-title\">upcoming sessions</h5>\n                                        <div class=\"sidebar-container\">\n                                            <div *ngFor=\"let item of utilityService._.values(allSessionsTodayList);\" class=\"post-container d-flex\">\n                                                <div class=\"w-35 m-r-25\">\n                                                    <img alt=\"\" class=\"img-fluid\" src=\"./assets/img/na.png\">\n                                                    <div class=\"badge badge-blue\">\n                                                        {{item.location}}\n                                                    </div>\n                                                </div>\n                                                <div>\n                                                    <h5 class=\"post-head\">{{item.sessionSubject}}</h5>\n                                                    <h6 class=\"date\">{{item.loanStartDateTime | date:'medium'}}</h6>\n                                                    <div class=\"mt-3\">\n                                                        <i class=\"icon-video-camera fa-lg mr-3\" (click)=\"clickedOnSessionChatVideo(item, true)\"></i>\n                                                        <i class=\"icon-comment\" (click)=\"clickedOnSessionChatVideo(item, false)\"></i>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"mt-2 text-center blog-agency no-item\">\n                                                <img src=\"assets/img/noresult.png\" style=\"height: 60px;\">\n                                                <h5 class=\"mt-3 font-weight-normal\">Looks like you don't have any counselling Session today</h5>\n                                            </div>\n        \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </section>\n                    </div>\n        \n                </div>\n        \n            </div>\n        \n            <div class=\"col-xl-8 col-12\">\n        \n                <section class=\"agency blog blog-sec blog-sidebar sider p-0\">\n        \n                    <div class=\"h6 mb-3\">\n        \n                        LATEST SESSIONS\n                       \n                    </div>\n                    <div class=\"card shadow-sm mb-4\" *ngFor=\"let session of allSessionsData\">\n                        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\n                            {{session.sessionSubject}}\n                        </div>\n                        <div class=\"card-body px-md-3 px-1 small\">\n                             <div class=\"row\">               \n                            <div class=\"col-xl-12 col-12\">\n                                <p class=\"para2\" [class.show_more]=\"!session._id\">\n                                    {{session.loanDescription}}\n                                </p>\n                            </div>          \n                            <div class=\"col-xl-6 col-6 border-right mb-2\">\n                                <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{session.loanStartDateTime | date:'MMM d, h:mm a'}}\n                            </div>\n                           \n                            <div class=\"col-xl-6 col-6\">\n                                <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\n                                \n                                {{session.location}}\n                            </div>\n                          \n                        </div>\n                        </div>\n                        <div class=\"card-footer bg-white\">\n                            <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span>\n                            <a *ngIf=\"!check4applyToSession(session)\" class=\"btn btn-success  text-capitalize btn-sm float-right text-white\" (click)=\"applyToSession(session)\">Apply</a>\n                            <a *ngIf=\"check4applyToSession(session)\" class=\"btn btn-primary text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(session)\"> Details</a>\n                        </div>\n                    </div>\n                    \n                    <div *ngIf=\"!allSessionsData\">\n                        <div class=\"content_loader\"></div>\n                        <div class=\"content_loader\"></div>\n                    </div>\n        \n                </section>\n            </div>\n        </div>\n        -->");

/***/ }),

/***/ "oyWB":
/*!****************************************************!*\
  !*** ./src/app/lender/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n    padding: 0;\n}\nheader img{\n    height: 3.3rem;\n}\nheader nav ul .mega-menu .mega-menu-container {\n\n    min-width: auto;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgcGFkZGluZzogMDtcbn1cbmhlYWRlciBpbWd7XG4gICAgaGVpZ2h0OiAzLjNyZW07XG59XG5oZWFkZXIgbmF2IHVsIC5tZWdhLW1lbnUgLm1lZ2EtbWVudS1jb250YWluZXIge1xuXG4gICAgbWluLXdpZHRoOiBhdXRvO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "paPN":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/my-sessions/my-sessions.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"tab-product  p-b-0\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-lg-12\">\n            <ul class=\"nav nav-justified nav-material nav-tabs\" id=\"top-tab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='received', 'show': selectedTab=='received'}\"\n                        data-toggle=\"tab\" href=\"#top-home\" id=\"top-home-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('received');\" i18n>My Contracts\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalPendingContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='sent', 'show': selectedTab=='sent'}\" data-toggle=\"tab\"\n                        href=\"#top-sent\" id=\"profile-sent-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('sent')\" i18n>Loan Market\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalSentContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='canceled', 'show': selectedTab=='canceled'}\"\n                        data-toggle=\"tab\" href=\"#top-canceled\" id=\"profile-canceled-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('canceled')\" i18n>Cancelled\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalCanceledContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Cancelled contracts\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='active', 'show': selectedTab=='active'}\" data-toggle=\"tab\"\n                        href=\"#top-active\" id=\"profile-active-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('active')\" i18n>Active\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalActiveContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='paid', 'show': selectedTab=='paid'}\" data-toggle=\"tab\"\n                        href=\"#top-profile\" id=\"profile-top-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('paid')\" i18n>Paid\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalPaidContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='unpaid', 'show': selectedTab=='unpaid'}\" data-toggle=\"tab\"\n                        href=\"#top-profile\" id=\"profile-top-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('unpaid')\" i18n>Unpaid\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalUnPaidContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='inkasso', 'show': selectedTab=='inkasso'}\"\n                        data-toggle=\"tab\" href=\"#top-contact\" id=\"contact-top-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('inkasso')\" i18n>Inkasso\n\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalInkassoContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <!-- <li class=\"nav-item\"><a aria-selected=\"true\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-review\" id=\"review-top-tab\" role=\"tab\" (click)=\"SessionStatusTypeFilter=[SessionStatus.Completed]\">Completed \n                    <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                        </a>\n                    <div class=\"material-border\"></div>\n                </li> -->\n            </ul>\n        </div>\n    </div>\n</section>\n\n<section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\n    <!-- ;-->\n    <div class=\"card shadow-sm mb-4\"\n        *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : (SessionStatusTypeFilter.length>0 ? SessionStatusTypeFilter:['accepted']):checkCreatedByUserId:checkCreatedByT:(SessionStatusTypeFilter.indexOf(SessionStatus.Pending)>-1)\">\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\n            <span class=\"float-left\">{{utilityService.returnLoanType(LoanObj.loanType)}}</span>\n            <span class=\"float-right cursor-pointer\" (click)=\"usersProfile(LoanObj.createdByUserObj)\">\n                <i class=\"icon icon-user\"></i>\n                {{LoanObj.createdByUserObj.firstName}}\n                <i *ngIf=\"authenticationService.currentUserValue._id==LoanObj.createdByUserObj._id\">*</i>\n            </span>\n        </div>\n        <div class=\"card-body px-md-3 px-1 small\">\n            <div class=\"row\">\n\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group border-right\">\n                        <label for=\"loanAmount\" i18n>Loan Amount</label>\n                        <h4 class=\"text-primary\">\n                            {{LoanObj.loanAmount}}\n                        </h4>\n                    </div>\n                </div>\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group  border-right\">\n                        <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\n                        <h4 class=\"text-primary\">\n                            {{LoanObj.loanTenureInMonths}}\n                        </h4>\n                    </div>\n                </div>\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group\">\n                        <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\n                        <h4 class=\"text-primary\">\n                            {{LoanObj.loanInterestRate}}\n                        </h4>\n                    </div>\n                </div>\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group border-right\">\n                        <label for=\"loanStartDateTime\" i18n>Start Date</label>\n                        <h4 class=\"text-primary\" >\n                            {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\n                        </h4>\n                    </div>\n                </div>\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group  border-right\">\n                        <p class=\"mb-2\" i18n>How to give the money</p>\n\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                            BANK\n                        </span>\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                            Cash\n                        </span>\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                            Revolut\n                        </span>\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                            Paypal\n                        </span>\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase badge-success\" i18n>\n                            Skrill\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-xl-12\">\n                    <p class=\"mb-2\" i18n>Description:</p>\n                    <div class=\"text-black-50\" >\n                        {{LoanObj.loanDescription}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"card-footer bg-white\">\n            <span\n                class=\"badge badge-success font-weight-normal text-capitalize btn float-left\">{{LoanObj.sessionType}}</span>\n            <div class=\"row\"\n                [ngSwitch]=\"returnSessionApplyStatus(utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\n                <!-- the same view can be shown in more than one case -->\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Pending\">\n\n                    <!--\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\n                    -->\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\" title=\"Received Requests/Total Applicants\"\n                    class=\"float-left btn btn-primary text-capitalize btn-sm text-white\">\n                    {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                </label>\n                  \n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\n                        <a *ngIf=\"LoanObj.createdByUserObj._id==authenticationService.currentUserValue._id\"\n                        class=\"btn btn-danger text-capitalize btn-sm mr-2 float-right text-white\"><i class=\"icon icon-trash\"\n                            (click)=\"deleteSessionById(LoanObj._id)\"></i></a>\n                   \n\n                </div>\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Accepted\">\n                    <!--\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\n                    -->\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingInitiated\">\n                    <!--\n                    <button *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right\" (click)=\"sessionApplyOngoingCheck(LoanObj, utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\n                        Proceed for Execution\n                    </button>\n                -->\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n>  Details</a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.AwaitingForApproval\">\n                    <a i18n *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\"\n                        class=\"btn btn-success btn-sm text-capitalize float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\">\n                        Details\n                    </a>\n                    <a i18n *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\"\n                        class=\"btn btn-success btn-sm text-capitalize float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\"> <i class=\"icon-check fa-lg text-white\"></i>\n                        Proceed for Contract Sign\n                    </a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Ongoing\">\n                    <!--\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">\n                        Details\n                    </a>\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> <i class=\"icon-check fa-lg text-white\"></i>\n                        Proceed for Execution\n                    </a>\n                -->\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n                <!--default case when there are no matches -->\n                <div class=\"col-xl-12\" *ngSwitchDefault>\n                    <!--\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm text-capitalize float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Apply</a>\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Details</a>\n                    -->\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mt-5 text-center blog-agency no-item\">\n        <!-- <img src=\"assets/img/noresult.png\"> -->\n        <!--\n        <div class=\"spinner-border text-success mb-4\"></div>\n        <h2 class=\"text-black-50\">Hold on updating Loan Data</h2>\n        -->\n    </div>\n</section>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\n    <div class=\"card shadow-sm mb-4\" *ngFor=\"let LoanMarket of allLoanMarketData\">\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\n            {{LoanMarket.LoanMarketubject}}\n        </div>\n        <div class=\"card-body px-md-3 px-1 small\">\n             <div class=\"row\">               \n            <div class=\"col-xl-12 col-12\">\n                <p class=\"para2\" [class.show_more]=\"!LoanMarket._id\">\n                    {{LoanMarket.loanAmount}}\n                </p>\n            </div>          \n            <div class=\"col-xl-6 col-6 border-right mb-2\">\n                <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{LoanMarket.loanStartDateTime | date:'MMM d, h:mm a'}}\n            </div>\n            <div class=\"col-xl-6 col-6\">\n                <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\n                {{LoanMarket.location}}\n            </div>\n          \n        </div>\n        </div>\n        <div class=\"card-footer bg-white\">\n            <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{LoanMarket.LoanMarketType}}</span>\n          \n            <a class=\"btn btn-primary text-capitalize  btn-sm float-right text-white\" (click)=\"showAppliedToLoanMarket(LoanMarket)\">Details</a>\n        </div>\n    </div>\n\n\n    <div class=\"mt-5 text-center blog-agency no-item\">\n        <img src=\"assets/img/noresult.png\">\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\n    </div>\n</section> -->\n\n\n<div class=\"row\">\n    <div class=\"col-xl-12 col-12 align-items-stretch\">\n        <button *ngIf=\"this.searchFilterObj\" class=\"btn btn-xs btn-danger float-right mb-3 mt-n2 ml-2\" (click)=\"cleanSearchFilter()\" i18n>\n            <i class=\"icon icon-trash\"></i> Reset\n        </button>\n        <button class=\"btn btn-xs btn-success float-right mb-3 mt-n2\"  (click)=\"showSearchPanel()\" i18n> \n            <i class=\"icon icon-filter\"></i> Filter\n        </button>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xl-4 col-12 d-flex align-items-stretch mb-4\" *ngFor=\"let LoanMarket of allLoanMarketData | sortArrayByUpdatedOn:'loanStartDateTime':true\">\n\n        <div class=\"clash-card goblin w-100\">\n\n            <div class=\"product-image\" *ngIf=\"(!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)) || (returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket))\">\n                <span class=\"onsale-section\" *ngIf=\"returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\"><span class=\"onsale\" i18n>Contract Signed</span></span>\n\n                <span class=\"onsale-section\"  *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\"><span class=\"onsale\" i18n>Cancelled</span></span>\n              </div>\n\n            <div class=\"clash-card__level clash-card__level--goblin mt-3\">\n                <!--{{(LoanMarket.createdByUserObj.userType || \"\").replace(\"_\", \" \")}}-->\n                {{( LoanMarket.createdByUserObj.userTypeTitle || authenticationService.returnUserTypeForUserFromSuppliedUserLevel(LoanMarket.createdByUserObj.userType))}}\n            </div>\n            <div class=\"clash-card__unit-name text-capitalize\">{{(LoanMarket.loanType || \"\").replace(\"_\", \" \")}}</div>\n            <div class=\"clash-card__unit-description\">\n                <div class=\"row\">\n                    <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"Created By\">\n                        <div (click)=\"usersProfile(LoanMarket.createdByUserObj)\">\n                            <!--<i class=\"icon icon-user\"></i>-->\n                            <span class=\"flag-icon flag-icon-{{utilityService.returnCountryCodeFromName(LoanMarket.createdByUserObj.country)}} flag-icon-squared\"></span>\n                        </div>\n                        <div class=\"text-black-50 small\">\n                            {{LoanMarket.createdByUserObj.firstName}}\n                        </div>\n                    </div>\n                     <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"City\">\n                        <div>\n                            <i class=\"icon icon-location-pin\"></i>\n                        </div>\n                        <div class=\"text-black-50 small\">\n                            {{LoanMarket.createdByUserObj.cityCode}}\n                        </div>\n                    </div> \n                    <div class=\"col-xl-4 col-4 \" data-toggle=\"tooltip\" title=\"Created On\">\n                        <div>\n                            <i class=\"icon icon-time\"></i>\n                        </div>\n                        <div class=\"text-black-50 small\">\n                            {{LoanMarket.loanStartDateTime | date:'MMM d, yy'}}\n                        </div>\n                    </div>\n                    <div class=\"col-xl-12 col-12 mt-2\">\n                        <div class=\"text-black-50 small mb-1\" i18n>\n                            Payment Methods\n                        </div>\n                     \n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('bank')>-1\" class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n > \n                            BANK\n                        </span>\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('cash')>-1\" class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n> \n                            Cash\n                        </span>\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('revolut')>-1\" class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n> \n                            Revolut\n                        </span>\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('paypal')>-1\" class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n> \n                            Paypal\n                        </span>\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('skrill')>-1\" class=\"badge font-weight-light text-uppercase badge-success\" i18n> \n                            Skrill\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <button *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && !utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\" class=\"btn btn-success btn-sm mb-2\" (click)=\"navigate2LoanProccess(LoanMarket._id)\" i18n>\n                Lend Now\n            </button>\n            <button *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\"\n                class=\"btn btn-danger btn-sm mb-2\" disabled i18n>\n                Cancelled\n            </button>\n            <button *ngIf=\"returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\" class=\"btn btn-primary btn-sm mb-2\"  i18n>\n                <i class=\"icon icon-check-box\"></i> \n                Contract Signed\n            </button>\n\n            <div class=\"clash-card__unit-stats clash-card__unit-stats--goblin clearfix\">\n                <div class=\"one-third\">\n                    <div class=\"stat\">{{LoanMarket.loanAmount}}</div>\n                    <div class=\"stat-value\" i18n>Amount</div>\n                </div>\n\n                <div class=\"one-third\">\n                    <div class=\"stat\">\n                        {{utilityService.returnRoundedNumber(LoanMarket.calculatedMonthlyAmountForEMI*LoanMarket.loanTenureInMonths)}}\n                    </div>\n                    <div class=\"stat-value\" i18n>Refund</div>\n                </div>\n\n                <div class=\"one-third no-border\">\n                    <div class=\"stat\">{{LoanMarket.loanTenureInMonths}} <sub class=\"month\">{{LoanMarket.loanTenureInMonths>1?'Months':'Month'}}</sub></div>\n                    <div class=\"stat-value\" i18n>Duration</div>\n                </div>\n\n            </div>\n\n        </div> <!-- end clash-card goblin-->\n\n\n    </div>\n    <!-- <div class=\"mt-5 text-center blog-agency no-item\">\n        <img src=\"assets/img/noresult.png\">\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\n    </div> -->\n</div>");

/***/ })

}]);
//# sourceMappingURL=lender-lender-module-es2015.js.map