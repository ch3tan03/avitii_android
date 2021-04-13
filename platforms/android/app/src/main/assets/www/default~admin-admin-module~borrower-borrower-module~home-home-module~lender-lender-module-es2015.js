(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~borrower-borrower-module~home-home-module~lender-lender-module"],{

/***/ "+7nW":
/*!******************************************************!*\
  !*** ./src/app/shared/profile/profile.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\r\n    padding: 10px 0;\r\n}\r\n\r\nfooter {\r\n    padding: 0px 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "/Dza":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/modal/modal-apply-session.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title class=\"text-primary\">\r\n    {{utilityService.returnLoanType(LoanObj.loanType)}}\r\n</h2>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <div class=\"row\" >\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group \">\r\n                <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                <h4 class=\"text-primary\">\r\n                    {{LoanObj.loanAmount}}\r\n                </h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group\">\r\n                <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                <h4 class=\"text-primary\">\r\n                    {{LoanObj.loanTenureInMonths}}\r\n                </h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group \">\r\n                <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                <h4 class=\"text-primary\">\r\n                    {{LoanObj.loanInterestRate}}\r\n                </h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group \">\r\n                <label for=\"loanStartDateTime\" i18n>Start Date</label>\r\n                <h4 class=\"text-primary\" i18n>\r\n                    {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                </h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group\">\r\n                <div>\r\n                    <label for=\"loanStartDateTime\" i18n>Payment Method</label>\r\n                </div>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\" class=\"badge  mr-2 badge-success\">\r\n                    BANK\r\n                </span>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\" class=\"badge  mr-2 badge-success\">\r\n                    Cash\r\n                </span>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                    class=\"badge  mr-2 badge-success\">\r\n                    Revolut\r\n                </span>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\" class=\"badge  mr-2 badge-success\">\r\n                    Paypal\r\n                </span>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\" class=\"badge  badge-success\">\r\n                    Skrill\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-12 col-12 mt-3\">\r\n            <div class=\"table-responsive table shadow-sm\">\r\n                <table class=\"table mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th scope=\"col\" i18n>EMI Date</th>\r\n                            <th scope=\"col\" i18n>Payment</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                            <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                | date:'dd-MMM-YYYY'}}</td>\r\n                            <td>kr {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-12\">\r\n            <p class=\"mb-2\" i18n>Description:</p>\r\n            <div class=\"text-black-50\" i18n>\r\n                {{LoanObj.loanDescription}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n \r\n  \r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n    <button class=\"btn btn-primary btn-sm float-right\" mat-button mat-dialog-close>\r\n        <i class=\"icon-close\"></i> CLOSE\r\n    </button>\r\n</mat-dialog-actions>");

/***/ }),

/***/ "/d/B":
/*!***************************************************************!*\
  !*** ./src/app/shared/user-ratings/user-ratings.component.ts ***!
  \***************************************************************/
/*! exports provided: UserRatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRatingsComponent", function() { return UserRatingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_ratings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-ratings.component.html */ "B60M");
/* harmony import */ var _user_ratings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-ratings.component.css */ "83w0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "o0su");








let UserRatingsComponent = class UserRatingsComponent {
    constructor(appRouterService, socketService, alertService) {
        this.appRouterService = appRouterService;
        this.socketService = socketService;
        this.alertService = alertService;
        this.currentUsersRating = 0;
        this.currentUsersReview = '';
        let paramobj = history.state;
        if (paramobj) {
            this.createdBy = paramobj['createdBy'];
            this.userId = paramobj['userId'];
            this.loanId = paramobj['loanId'];
            delete history.state['createdBy'];
            delete history.state['userId'];
            delete history.state['loanId'];
            if (!this.createdBy || !this.userId) {
                this.navigateOnHome();
            }
        }
    }
    submitRatingReviews() {
        if (!this.currentUsersRating || !this.currentUsersReview) {
            this.alertService.error("Please Add Reviews..");
            return;
        }
        let _obj2Save = {
            userId: this.userId,
            loanId: this.loanId || null,
            createdBy: this.createdBy,
            rating: this.currentUsersRating,
            comment: this.currentUsersReview
        };
        this.socketService.addNewRatingReview(_obj2Save)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                this.alertService.success(data['message'], true);
                this.loading = false;
                this.navigateOnHome();
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
    navigateOnHome() {
        this.appRouterService.appRouter(null);
    }
    ngOnInit() {
    }
};
UserRatingsComponent.ctorParameters = () => [
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_4__["AppRouterService"] },
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
UserRatingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-ratings',
        template: _raw_loader_user_ratings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_ratings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_4__["AppRouterService"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
], UserRatingsComponent);



/***/ }),

/***/ "0IaG":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
  \************************************************************************/
/*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return MAT_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return MAT_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return MAT_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return MatDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return MatDialogActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return MatDialogClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return MatDialogConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return MatDialogContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return MatDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return MatDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return MatDialogRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return MatDialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return matDialogAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return throwMatDialogContentAlreadyAttachedError; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");












/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Possible overrides for a dialog's position.
 * @record
 */






function MatDialogContainer_ng_template_0_Template(rf, ctx) { }
function DialogPosition() { }
if (false) {}
/**
 * Configuration for opening a modal dialog with the MatDialog service.
 * @template D
 */
class MatDialogConfig {
    constructor() {
        /**
         * The ARIA role of the dialog element.
         */
        this.role = 'dialog';
        /**
         * Custom class for the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the dialog has a backdrop.
         */
        this.hasBackdrop = true;
        /**
         * Custom class for the backdrop.
         */
        this.backdropClass = '';
        /**
         * Whether the user can use escape or clicking on the backdrop to close the modal.
         */
        this.disableClose = false;
        /**
         * Width of the dialog.
         */
        this.width = '';
        /**
         * Height of the dialog.
         */
        this.height = '';
        /**
         * Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw.
         */
        this.maxWidth = '80vw';
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * ID of the element that describes the dialog.
         */
        this.ariaDescribedBy = null;
        /**
         * ID of the element that labels the dialog.
         */
        this.ariaLabelledBy = null;
        /**
         * Aria label to assign to the dialog element.
         */
        this.ariaLabel = null;
        /**
         * Whether the dialog should focus the first focusable element on open.
         */
        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
        // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by MatDialog.
 * \@docs-private
 * @type {?}
 */
const matDialogAnimations = {
    /**
     * Animation that is applied on the dialog container by defalt.
     */
    dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('dialogContainer', [
        // Note: The `enter` animation transitions to `transform: none`, because for some reason
        // specifying the transform explicitly, causes IE both to blur the dialog content and
        // decimate the animation performance. Leaving it as `none` solves both issues.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0, transform: 'scale(0.7)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ transform: 'none' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ transform: 'none', opacity: 1 }))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0 }))),
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-container.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * \@docs-private
 * @return {?}
 */
function throwMatDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * \@docs-private
 */
class MatDialogContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
    /**
     * @param {?} _elementRef
     * @param {?} _focusTrapFactory
     * @param {?} _changeDetectorRef
     * @param {?} _document
     * @param {?} _config
     */
    constructor(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config) {
        super();
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._changeDetectorRef = _changeDetectorRef;
        this._config = _config;
        /**
         * Element that was focused before the dialog was opened. Save this to restore upon close.
         */
        this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * State of the dialog animation.
         */
        this._state = 'enter';
        /**
         * Emits when an animation state changes.
         */
        this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Attaches a DOM portal to the dialog container.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */
        this.attachDomPortal = (/**
         * @param {?} portal
         * @return {?}
         */
        (portal) => {
            if (this._portalOutlet.hasAttached()) {
                throwMatDialogContentAlreadyAttachedError();
            }
            this._setupFocusTrap();
            return this._portalOutlet.attachDomPortal(portal);
        });
        this._ariaLabelledBy = _config.ariaLabelledBy || null;
        this._document = _document;
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @template T
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
        }
        this._setupFocusTrap();
        return this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @template C
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    attachTemplatePortal(portal) {
        if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
        }
        this._setupFocusTrap();
        return this._portalOutlet.attachTemplatePortal(portal);
    }
    /**
     * Moves focus back into the dialog if it was moved out.
     * @return {?}
     */
    _recaptureFocus() {
        if (!this._containsFocus()) {
            /** @type {?} */
            const focusWasTrapped = this._focusTrap.focusInitialElement();
            if (!focusWasTrapped) {
                this._elementRef.nativeElement.focus();
            }
        }
    }
    /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    _trapFocus() {
        // If we were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
        else if (!this._containsFocus()) {
            // Otherwise ensure that focus is on the dialog container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the dialog already, because it's possible that the consumer
            // turned off `autoFocus` in order to move focus themselves.
            this._elementRef.nativeElement.focus();
        }
    }
    /**
     * Restores focus to the element that was focused before the dialog opened.
     * @private
     * @return {?}
     */
    _restoreFocus() {
        /** @type {?} */
        const toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            /** @type {?} */
            const activeElement = this._document.activeElement;
            /** @type {?} */
            const element = this._elementRef.nativeElement;
            // Make sure that focus is still inside the dialog or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.
            if (!activeElement || activeElement === this._document.body || activeElement === element ||
                element.contains(activeElement)) {
                toFocus.focus();
            }
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    }
    /**
     * Sets up the focus trand and saves a reference to the
     * element that was focused before the dialog was opened.
     * @private
     * @return {?}
     */
    _setupFocusTrap() {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = (/** @type {?} */ (this._document.activeElement));
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                // Move focus onto the dialog immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this._elementRef.nativeElement.focus()));
            }
        }
    }
    /**
     * Returns whether focus is inside the dialog.
     * @private
     * @return {?}
     */
    _containsFocus() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        /** @type {?} */
        const activeElement = this._document.activeElement;
        return element === activeElement || element.contains(activeElement);
    }
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    _onAnimationDone(event) {
        if (event.toState === 'enter') {
            this._trapFocus();
        }
        else if (event.toState === 'exit') {
            this._restoreFocus();
        }
        this._animationStateChanged.emit(event);
    }
    /**
     * Callback, invoked when an animation on the host starts.
     * @param {?} event
     * @return {?}
     */
    _onAnimationStart(event) {
        this._animationStateChanged.emit(event);
    }
    /**
     * Starts the dialog exit animation.
     * @return {?}
     */
    _startExitAnimation() {
        this._state = 'exit';
        // Mark the container for check so it can react if the
        // view container is using OnPush change detection.
        this._changeDetectorRef.markForCheck();
    }
}
MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) { return new (t || MatDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig)); };
MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatDialogContainer, selectors: [["mat-dialog-container"]], viewQuery: function MatDialogContainer_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"], hostVars: 6, hostBindings: function MatDialogContainer_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) { return ctx._onAnimationStart($event); })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) { return ctx._onAnimationDone($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._id)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatDialogContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, data: { animation: [matDialogAnimations.dialogContainer] } });
/** @nocollapse */
MatDialogContainer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: MatDialogConfig }
];
MatDialogContainer.propDecorators = {
    _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-dialog-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
                animations: [matDialogAnimations.dialogContainer],
                host: {
                    'class': 'mat-dialog-container',
                    'tabindex': '-1',
                    'aria-modal': 'true',
                    '[attr.id]': '_id',
                    '[attr.role]': '_config.role',
                    '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
                    '[attr.aria-label]': '_config.ariaLabel',
                    '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
                    '[@dialogContainer]': '_state',
                    '(@dialogContainer.start)': '_onAnimationStart($event)',
                    '(@dialogContainer.done)': '_onAnimationDone($event)'
                },
                styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: MatDialogConfig }]; }, { _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(jelbourn): resizing
// Counter for unique dialog ids.
/** @type {?} */
let uniqueId = 0;
/** @enum {number} */
const MatDialogState = {
    OPEN: 0, CLOSING: 1, CLOSED: 2,
};
/**
 * Reference to a dialog opened via the MatDialog service.
 * @template T, R
 */
class MatDialogRef {
    /**
     * @param {?} _overlayRef
     * @param {?} _containerInstance
     * @param {?=} id
     */
    constructor(_overlayRef, _containerInstance, id = `mat-dialog-${uniqueId++}`) {
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /**
         * Whether the user is allowed to close the dialog.
         */
        this.disableClose = this._containerInstance._config.disableClose;
        /**
         * Subject for notifying the user that the dialog has finished opening.
         */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has finished closing.
         */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has started closing.
         */
        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Current state of the dialog.
         */
        this._state = 0 /* OPEN */;
        // Pass the id along to the container.
        _containerInstance._id = id;
        // Emit when opening animation completes
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'enter')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._afterOpened.next();
            this._afterOpened.complete();
        }));
        // Dispose overlay when closing animation is complete
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'exit')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((/**
         * @return {?}
         */
        () => {
            clearTimeout(this._closeFallbackTimeout);
            this._finishDialogClose();
        }));
        _overlayRef.detachments().subscribe((/**
         * @return {?}
         */
        () => {
            this._beforeClosed.next(this._result);
            this._beforeClosed.complete();
            this._afterClosed.next(this._result);
            this._afterClosed.complete();
            this.componentInstance = (/** @type {?} */ (null));
            this._overlayRef.dispose();
        }));
        _overlayRef.keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !this.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            event.preventDefault();
            this.close();
        }));
        _overlayRef.backdropClick().subscribe((/**
         * @return {?}
         */
        () => {
            if (this.disableClose) {
                this._containerInstance._recaptureFocus();
            }
            else {
                this.close();
            }
        }));
    }
    /**
     * Close the dialog.
     * @param {?=} dialogResult Optional result to return to the dialog opener.
     * @return {?}
     */
    close(dialogResult) {
        this._result = dialogResult;
        // Transition the backdrop in parallel to the dialog.
        this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'start')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this._beforeClosed.next(dialogResult);
            this._beforeClosed.complete();
            this._overlayRef.detachBackdrop();
            // The logic that disposes of the overlay depends on the exit animation completing, however
            // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
            // timeout which will clean everything up if the animation hasn't fired within the specified
            // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
            // vast majority of cases the timeout will have been cleared before it has the chance to fire.
            this._closeFallbackTimeout = setTimeout((/**
             * @return {?}
             */
            () => this._finishDialogClose()), event.totalTime + 100);
        }));
        this._containerInstance._startExitAnimation();
        this._state = 1 /* CLOSING */;
    }
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @return {?}
     */
    afterOpened() {
        return this._afterOpened.asObservable();
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     * @return {?}
     */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    /**
     * Gets an observable that is notified when the dialog has started closing.
     * @return {?}
     */
    beforeClosed() {
        return this._beforeClosed.asObservable();
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    backdropClick() {
        return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    keydownEvents() {
        return this._overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's position.
     * @template THIS
     * @this {THIS}
     * @param {?=} position New dialog position.
     * @return {THIS}
     */
    updatePosition(position) {
        /** @type {?} */
        let strategy = (/** @type {?} */ (this))._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        (/** @type {?} */ (this))._overlayRef.updatePosition();
        return (/** @type {?} */ (this));
    }
    /**
     * Updates the dialog's width and height.
     * @template THIS
     * @this {THIS}
     * @param {?=} width New width of the dialog.
     * @param {?=} height New height of the dialog.
     * @return {THIS}
     */
    updateSize(width = '', height = '') {
        (/** @type {?} */ (this))._getPositionStrategy().width(width).height(height);
        (/** @type {?} */ (this))._overlayRef.updatePosition();
        return (/** @type {?} */ (this));
    }
    /**
     * Add a CSS class or an array of classes to the overlay pane.
     * @template THIS
     * @this {THIS}
     * @param {?} classes
     * @return {THIS}
     */
    addPanelClass(classes) {
        (/** @type {?} */ (this))._overlayRef.addPanelClass(classes);
        return (/** @type {?} */ (this));
    }
    /**
     * Remove a CSS class or an array of classes from the overlay pane.
     * @template THIS
     * @this {THIS}
     * @param {?} classes
     * @return {THIS}
     */
    removePanelClass(classes) {
        (/** @type {?} */ (this))._overlayRef.removePanelClass(classes);
        return (/** @type {?} */ (this));
    }
    /**
     * Gets the current state of the dialog's lifecycle.
     * @return {?}
     */
    getState() {
        return this._state;
    }
    /**
     * Finishes the dialog close by updating the state of the dialog
     * and disposing the overlay.
     * @private
     * @return {?}
     */
    _finishDialogClose() {
        this._state = 2 /* CLOSED */;
        this._overlayRef.dispose();
    }
    /**
     * Fetches the position strategy object from the overlay ref.
     * @private
     * @return {?}
     */
    _getPositionStrategy() {
        return (/** @type {?} */ (this._overlayRef.getConfig().positionStrategy));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to access the data that was passed in to a dialog.
 * @type {?}
 */
const MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
/**
 * Injection token that can be used to specify default dialog options.
 * @type {?}
 */
const MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
/**
 * Injection token that determines the scroll handling while the dialog is open.
 * @type {?}
 */
const MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.block());
}
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.block());
}
/**
 * \@docs-private
 * @type {?}
 */
const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
    useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Service to open Material Design modal dialogs.
 */
class MatDialog {
    /**
     * @param {?} _overlay
     * @param {?} _injector
     * @param {?} _location
     * @param {?} _defaultOptions
     * @param {?} scrollStrategy
     * @param {?} _parentDialog
     * @param {?} _overlayContainer
     */
    constructor(_overlay, _injector, 
    /**
     * @deprecated `_location` parameter to be removed.
     * @breaking-change 10.0.0
     */
    _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._ariaHiddenElements = new Map();
        // TODO (jelbourn): tighten the typing right-hand side of this expression.
        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])((/**
         * @return {?}
         */
        () => this.openDialogs.length ?
            this._afterAllClosed :
            this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined))))));
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * Keeps track of the currently-open dialogs.
     * @return {?}
     */
    get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    /**
     * Stream that emits when a dialog has been opened.
     * @return {?}
     */
    get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
    /**
     * @return {?}
     */
    get _afterAllClosed() {
        /** @type {?} */
        const parent = this._parentDialog;
        return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
    }
    /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @return {?} Reference to the newly-opened dialog.
     */
    open(componentOrTemplateRef, config) {
        config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
        if (config.id && this.getDialogById(config.id)) {
            throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        /** @type {?} */
        const overlayRef = this._createOverlay(config);
        /** @type {?} */
        const dialogContainer = this._attachDialogContainer(overlayRef, config);
        /** @type {?} */
        const dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        // If this is the first dialog that we're opening, hide all the non-overlay content.
        if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe((/**
         * @return {?}
         */
        () => this._removeOpenDialog(dialogRef)));
        this.afterOpened.next(dialogRef);
        return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    closeAll() {
        this._closeDialogs(this.openDialogs);
    }
    /**
     * Finds an open dialog by its id.
     * @param {?} id ID to use when looking up the dialog.
     * @return {?}
     */
    getDialogById(id) {
        return this.openDialogs.find((/**
         * @param {?} dialog
         * @return {?}
         */
        dialog => dialog.id === id));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Only close the dialogs at this level on destroy
        // since the parent service may still be active.
        this._closeDialogs(this._openDialogsAtThisLevel);
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
    }
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @private
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the OverlayRef for the created overlay.
     */
    _createOverlay(config) {
        /** @type {?} */
        const overlayConfig = this._getOverlayConfig(config);
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an overlay config from a dialog config.
     * @private
     * @param {?} dialogConfig The dialog configuration.
     * @return {?} The overlay configuration.
     */
    _getOverlayConfig(dialogConfig) {
        /** @type {?} */
        const state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
        });
        if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
        }
        return state;
    }
    /**
     * Attaches an MatDialogContainer to a dialog's already-created overlay.
     * @private
     * @param {?} overlay Reference to the dialog's underlying overlay.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to a ComponentRef for the attached container.
     */
    _attachDialogContainer(overlay, config) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this._injector,
            providers: [{ provide: MatDialogConfig, useValue: config }]
        });
        /** @type {?} */
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector, config.componentFactoryResolver);
        /** @type {?} */
        const containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * Attaches the user-provided component to the already-created MatDialogContainer.
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
     * @param {?} overlayRef Reference to the overlay in which the dialog resides.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
     */
    _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        /** @type {?} */
        const dialogRef = new MatDialogRef(overlayRef, dialogContainer, config.id);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, (/** @type {?} */ (null)), (/** @type {?} */ ({ $implicit: config.data, dialogRef }))));
        }
        else {
            /** @type {?} */
            const injector = this._createInjector(config, dialogRef, dialogContainer);
            /** @type {?} */
            const contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    }
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @private
     * @template T
     * @param {?} config Config object that is used to construct the dialog.
     * @param {?} dialogRef Reference to the dialog.
     * @param {?} dialogContainer
     * @return {?} The custom injector that can be used inside the dialog.
     */
    _createInjector(config, dialogRef, dialogContainer) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
        // content are created out of the same ViewContainerRef and as such, are siblings for injector
        // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
        // added to the injection tokens.
        /** @type {?} */
        const providers = [
            { provide: MatDialogContainer, useValue: dialogContainer },
            { provide: MAT_DIALOG_DATA, useValue: config.data },
            { provide: MatDialogRef, useValue: dialogRef }
        ];
        if (config.direction &&
            (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
            providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
                useValue: { value: config.direction, change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])() }
            });
        }
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({ parent: userInjector || this._injector, providers });
    }
    /**
     * Removes a dialog from the array of open dialogs.
     * @private
     * @param {?} dialogRef Dialog to be removed.
     * @return {?}
     */
    _removeOpenDialog(dialogRef) {
        /** @type {?} */
        const index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach((/**
                 * @param {?} previousValue
                 * @param {?} element
                 * @return {?}
                 */
                (previousValue, element) => {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                }));
                this._ariaHiddenElements.clear();
                this._afterAllClosed.next();
            }
        }
    }
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     * @private
     * @return {?}
     */
    _hideNonDialogContentFromAssistiveTechnology() {
        /** @type {?} */
        const overlayContainer = this._overlayContainer.getContainerElement();
        // Ensure that the overlay container is attached to the DOM.
        if (overlayContainer.parentElement) {
            /** @type {?} */
            const siblings = overlayContainer.parentElement.children;
            for (let i = siblings.length - 1; i > -1; i--) {
                /** @type {?} */
                let sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    }
    /**
     * Closes all of the dialogs in an array.
     * @private
     * @param {?} dialogs
     * @return {?}
     */
    _closeDialogs(dialogs) {
        /** @type {?} */
        let i = dialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
        }
    }
}
MatDialog.ɵfac = function MatDialog_Factory(t) { return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"])); };
MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MatDialog, factory: MatDialog.ɵfac });
/** @nocollapse */
MatDialog.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: MatDialogConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_SCROLL_STRATEGY,] }] },
    { type: MatDialog, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: MatDialogConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_DIALOG_DEFAULT_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_DIALOG_SCROLL_STRATEGY]
            }] }, { type: MatDialog, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"] }]; }, null); })();
if (false) {}
/**
 * Applies default options to the dialog config.
 * @param {?=} config Config to be modified.
 * @param {?=} defaultOptions Default options provided.
 * @return {?} The new configuration object.
 */
function _applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-content-directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique IDs for dialog elements.
 * @type {?}
 */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
class MatDialogClose {
    /**
     * @param {?} dialogRef
     * @param {?} _elementRef
     * @param {?} _dialog
     */
    constructor(dialogRef, _elementRef, _dialog) {
        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /**
         * Default to "button" to prevents accidental form submits.
         */
        this.type = 'button';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef = (/** @type {?} */ (getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
}
MatDialogClose.ɵfac = function MatDialogClose_Factory(t) { return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogClose, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function MatDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler() { return ctx.dialogRef.close(ctx.dialogResult); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    } }, inputs: { type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], ariaLabel: ["aria-label", "ariaLabel"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
MatDialogClose.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: MatDialog }
];
MatDialogClose.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    dialogResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mat-dialog-close',] }],
    _matDialogClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matDialogClose',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[mat-dialog-close], [matDialogClose]',
                exportAs: 'matDialogClose',
                host: {
                    '(click)': 'dialogRef.close(dialogResult)',
                    '[attr.aria-label]': 'ariaLabel || null',
                    '[attr.type]': 'type'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: MatDialog }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dialogResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mat-dialog-close']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], _matDialogClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matDialogClose']
        }] }); })();
if (false) {}
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
class MatDialogTitle {
    /**
     * @param {?} _dialogRef
     * @param {?} _elementRef
     * @param {?} _dialog
     */
    constructor(_dialogRef, _elementRef, _dialog) {
        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = `mat-dialog-title-${dialogElementUid++}`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._dialogRef) {
            this._dialogRef = (/** @type {?} */ (getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
        if (this._dialogRef) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const container = this._dialogRef._containerInstance;
                if (container && !container._ariaLabelledBy) {
                    container._ariaLabelledBy = this.id;
                }
            }));
        }
    }
}
MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) { return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogTitle, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-dialog-title"], hostVars: 1, hostBindings: function MatDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
    } }, inputs: { id: "id" }, exportAs: ["matDialogTitle"] });
/** @nocollapse */
MatDialogTitle.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: MatDialog }
];
MatDialogTitle.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[mat-dialog-title], [matDialogTitle]',
                exportAs: 'matDialogTitle',
                host: {
                    'class': 'mat-dialog-title',
                    '[id]': 'id'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: MatDialog }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}
/**
 * Scrollable content container of a dialog.
 */
class MatDialogContent {
}
MatDialogContent.ɵfac = function MatDialogContent_Factory(t) { return new (t || MatDialogContent)(); };
MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogContent, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-dialog-content"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
                host: { 'class': 'mat-dialog-content' }
            }]
    }], null, null); })();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
class MatDialogActions {
}
MatDialogActions.ɵfac = function MatDialogActions_Factory(t) { return new (t || MatDialogActions)(); };
MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogActions, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-dialog-actions"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
                host: { 'class': 'mat-dialog-actions' }
            }]
    }], null, null); })();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param {?} element Element relative to which to look for a dialog.
 * @param {?} openDialogs References to the currently-open dialogs.
 * @return {?}
 */
function getClosestDialog(element, openDialogs) {
    /** @type {?} */
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find((/**
     * @param {?} dialog
     * @return {?}
     */
    dialog => dialog.id === (/** @type {?} */ (parent)).id)) : null;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatDialogModule {
}
MatDialogModule.ɵfac = function MatDialogModule_Factory(t) { return new (t || MatDialogModule)(); };
MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatDialogModule });
MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        MatDialog,
        MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
    ], imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, { declarations: function () { return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; }, exports: function () { return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                exports: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogContent,
                    MatDialogActions,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                declarations: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogActions,
                    MatDialogContent,
                ],
                providers: [
                    MatDialog,
                    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [MatDialogContainer]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "1cR9":
/*!**********************************************************************!*\
  !*** ./src/app/shared/payment-success/payment-success.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "3GRy":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/update-password/update-password.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"profileUpdatePasswordForm\">\r\n    <div class=\"card mb-3 shadow\">\r\n        <div class=\"card-header\">\r\n            <h5 class=\"font-weight-bold text-primary\">Update Password</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-xl-12\">\r\n                    <label for=\"password\">Old Password</label>\r\n                    <input type=\"text\" formControlName=\"password\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Old Password is required</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-xl-12\">\r\n                    <label for=\"password2update\">New Password</label>\r\n                    <input type=\"text\" formControlName=\"password2update\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.password2update.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password2update.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password2update.errors.required\">Old Password is required</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-xl-12\">\r\n                    <label i18n>Confirm Password</label>\r\n                    <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                    <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.confirmPassword.errors.required\" i18n>\r\n                            Confirm Password is required\r\n                        </div>\r\n                        <div *ngIf=\"f.confirmPassword.errors.mustMatch\" i18n>\r\n                            Passwords must match\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <button type=\"button\" (click)=\"onUpdatePasswordSubmit()\" [disabled]=\"loading\"\r\n            class=\"btn btn-primary float-right\">Update</button>\r\n        </div>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "3ITz":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let ContactService = class ContactService {
    constructor() {
        this.Status = src_app_models__WEBPACK_IMPORTED_MODULE_2__["SessionStatus"];
        this.ContactRole = src_app_models__WEBPACK_IMPORTED_MODULE_2__["ContactRole"];
    }
    returnContactJsonData(_createdByUserId, _groupFirstName, _loanId, _loanApplyId, _adminUsersArray, _memberUsersArray, _guestUsersArray) {
        let _contactObj = {
            _id: "",
            firstName: "",
            usersColl: {},
            isGroup: false,
            status: this.Status.Active,
            createdBy: ""
        };
        if (_groupFirstName) {
            _contactObj.firstName = _groupFirstName;
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["keys"](_adminUsersArray).length > 0) {
            _contactObj.usersColl[src_app_models__WEBPACK_IMPORTED_MODULE_2__["ContactRole"].Admin] = _adminUsersArray;
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["keys"](_memberUsersArray).length > 0) {
            _contactObj.usersColl[src_app_models__WEBPACK_IMPORTED_MODULE_2__["ContactRole"].Member] = _memberUsersArray;
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["keys"](_guestUsersArray).length > 0) {
            _contactObj.usersColl[src_app_models__WEBPACK_IMPORTED_MODULE_2__["ContactRole"].Guest] = _guestUsersArray;
        }
        _contactObj.createdBy = _createdByUserId;
        if (_loanId && _loanApplyId) {
            _contactObj._id = this.returnContactIdForSession(_loanId, _loanApplyId);
            _contactObj.isGroup = true;
        }
        return _contactObj;
    }
    returnContactIdForSession(_loanId, _loanApplyId) {
        return _loanApplyId;
    }
};
ContactService.ctorParameters = () => [];
ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ContactService);



/***/ }),

/***/ "3gPe":
/*!***********************************************!*\
  !*** ./src/app/services/add-funds.service.ts ***!
  \***********************************************/
/*! exports provided: AddFundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFundsService", function() { return AddFundsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socketio.service */ "bgkY");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility.service */ "A1CT");






let AddFundsService = class AddFundsService {
    constructor(socketioService, utilityService) {
        this.socketioService = socketioService;
        this.utilityService = utilityService;
        this.totalFund4currentUser = 0;
        this.totalSpentOnSessions4currentUser = 0;
        this.alreadySubscribed = false;
        this.funds_set_funds([]);
        this.socketioService.emitEventWithNameAndData('fund_getall_list', this.funds_set_funds);
        //this.socket.on('fund_getall_list', this.funds_set_funds);
    }
    getFundsCountForRequestedUser(userId) {
        if (userId) {
            this.funds_get_count_sum(userId).subscribe(result => {
                let data = null;
                if (result) {
                    if (result['success'] == true || result['success'] == false) {
                        data = result['data'];
                    }
                    else {
                        data = result;
                    }
                }
                if (data) {
                    this.totalFund4currentUser = this.utilityService._.round(this.utilityService._.get(data, '0.totalFund4currentUser') || 0, 2);
                }
            });
        }
    }
    getSessionSpentCountForRequestedUser(userId) {
        if (userId) {
            if (!this.alreadySubscribed) {
                this.alreadySubscribed = true;
                this.session_spent_get_count_sum(userId).subscribe(result => {
                    let data = null;
                    if (result) {
                        if (result['success'] == true || result['success'] == false) {
                            data = result['data'];
                        }
                        else {
                            data = result;
                        }
                    }
                    if (data) {
                        this.totalSpentOnSessions4currentUser = this.utilityService._.round(this.utilityService._.get(data, '0.totalSpentOnSessions4currentUser') || 0, 2);
                    }
                });
            }
        }
        else {
            this.funds_get_count_sum_call(userId);
        }
    }
    get allFundsValue() {
        return this.allFundsSubject.value;
    }
    funds_add_new_funds(_funds_obj) {
        this.socketioService.emitEventWithNameAndData('fund_addnew', _funds_obj);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'fund_added');
        //return this.socketioService.socket.fromEvent('fund_added');
    }
    checkStatusOfNewFundsAdded() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'fund_added');
    }
    funds_getall_funds(_user_id) {
        this.socketioService.emitEventWithNameAndData('fund_getall', _user_id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'fund_getall_list');
        //return this.socketioService.socket.fromEvent('fund_getall_list');
    }
    funds_set_funds(_funds_obj) {
        this.allFundsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_funds_obj);
        this.allFunds = this.allFundsSubject.asObservable();
        this.allFundsSubject.next(_funds_obj);
        //alert(JSON.stringify(this.allFunds));
    }
    funds_delete(_id, _user_id) {
        this.socketioService.emitEventWithNameAndData('fund_delete_by_id', { _id: _id, user_id: _user_id });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'fund_getall_list');
        //return this.socketioService.socket.fromEvent('fund_getall_list');
    }
    funds_get_count_sum(_user_id) {
        this.socketioService.emitEventWithNameAndData('request_fund_get_count_sum', _user_id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'response_fund_get_count_sum');
    }
    funds_get_count_sum_call(_user_id) {
        this.socketioService.emitEventWithNameAndData('request_fund_get_count_sum', _user_id);
    }
    session_spent_get_count_sum(_user_id) {
        this.socketioService.emitEventWithNameAndData('request_session_spent_get_count_sum', _user_id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'response_session_spent_get_count_sum');
    }
};
AddFundsService.ctorParameters = () => [
    { type: _socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"] },
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] }
];
AddFundsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"], _utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])
], AddFundsService);



/***/ }),

/***/ "72sj":
/*!*********************************************************************!*\
  !*** ./src/app/shared/payment-success/payment-success.component.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function() { return PaymentSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_success_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-success.component.html */ "e+wd");
/* harmony import */ var _payment_success_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-success.component.css */ "1cR9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PaymentSuccessComponent = class PaymentSuccessComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaymentSuccessComponent.ctorParameters = () => [];
PaymentSuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment-success',
        template: _raw_loader_payment_success_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_success_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PaymentSuccessComponent);



/***/ }),

/***/ "7PL+":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/public-profile/public-profile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-11 col-10\">\r\n        <h4 class=\"mb-3 text-black-50\" i18n>\r\n            Profile\r\n        </h4>\r\n    </div>\r\n    <div class=\"col-xl-1 col-2\">\r\n        <i class=\"icon-close float-right\" mat-button (click)=\"closeDialog()\"></i>\r\n    </div>\r\n</div>\r\n<mat-dialog-content class=\"mat-typography\" style=\"max-height: 86vh;\">\r\n    <div class=\"row mb-2 mb-3\">\r\n        <div class=\"col-xl-3 col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <img [src]=\"userObj.selfProfileUrl\" onerror=\"this.src='/assets/img/nouser.png';\"\r\n                        class=\"img-fluid \" />\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <strong>\r\n                        {{userObj.firstName | titlecase}}&nbsp;\r\n                        {{userObj.middleName | titlecase}}&nbsp;\r\n                        {{userObj.lastName | titlecase}}\r\n                    </strong>\r\n                </div>\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\"> <strong>City</strong> {{userObj.cityCode | titlecase}}</li>\r\n                <li class=\"list-group-item\">\r\n                    <strong>Country</strong> {{userObj.country | titlecase}}\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                    <strong>Member Since</strong> {{userObj.birthDate | date}}\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                    <strong>DOB</strong> {{userObj.birthDate | date}}\r\n                </li>\r\n                <li *ngIf=\"userObj.externalAppLinks\" class=\"list-group-item\">\r\n                    <div *ngFor=\"let previewUrl of userObj.externalAppLinks\">\r\n                        <a *ngIf=\"previewUrl\" href=\"{{previewUrl.appLink}}\">{{previewUrl.appName}}</a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-xl-9 col-12 pl-5\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-6 col-12\" *ngIf=\"adminViewT\">\r\n                    <ul class=\"list-group\">\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            Number of loan notices created\r\n                            <span class=\"badge badge-primary badge-pill\">{{profileAdditionalData.numberOfLoanCreated ||\r\n                                'NA'}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            Signed contracts\r\n                            <span class=\"badge badge-primary badge-pill\">{{profileAdditionalData.numberOfSignedContract\r\n                                || 'NA'}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            Repaid contracts:\r\n                            <span class=\"badge badge-primary badge-pill\">{{profileAdditionalData.numberOfRepaidContract\r\n                                || 'NA'}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            Total amount borrowed\r\n                            <span class=\"badge badge-primary badge-pill\">{{profileAdditionalData.numberOfAmontBorrowed\r\n                                || 'NA'}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            Total amount refunded\r\n                            <span class=\"badge badge-primary badge-pill\">{{profileAdditionalData.numberOfAmontRefunded\r\n                                || 'NA'}}</span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-xl-6 col-12\" *ngIf=\"adminViewT\">\r\n                    <ul class=\"list-group\">\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            Amount available in budget\r\n                            <span\r\n                                class=\"badge badge-primary badge-pill\">{{profileAdditionalData.numberOfAmountAvailableInBudget\r\n                                || 'NA'}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            Recommended\r\n                            <span class=\"badge badge-primary badge-pill\">{{profileAdditionalData.recommended ||\r\n                                'NA'}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            Not Recommended\r\n                            <span class=\"badge badge-primary badge-pill\">{{profileAdditionalData.notRecommended ||\r\n                                'NA'}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            This borrower is in RKI:\r\n                            <span class=\"badge badge-primary badge-pill\">{{profileAdditionalData.borrowerIsInRKI ||\r\n                                'NA'}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                            Email\r\n                            <span class=\"badge badge-primary badge-pill\">Vefified</span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-xl-12 col-12\">\r\n\r\n                    <div class=\"my-3\">\r\n                        <!--\r\n                        <span *ngIf=\"!adminViewT\" (click)=\"addNewRatings(userObj)\" mat-button mat-dialog-close>&nbsp;\r\n                            <i class=\"icon-star\"></i>\r\n                        </span>\r\n                    -->\r\n                        <span *ngIf=\"!adminViewT\">&nbsp;\r\n                            <i class=\"icon-star text-warning\"></i>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 col-12\">\r\n                    <div class=\"table-responsive table-billing-history\">\r\n                        <table class=\"table mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th scope=\"col\">Document</th>\r\n                                    <th scope=\"col\">Doc Number</th>\r\n                                    <th scope=\"col\">Status</th>\r\n                                    <th scope=\"col\" *ngIf=\"adminViewT\">#</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Passport</td>\r\n                                    <td>{{userObj.myPassportNumber||'NA'}}</td>\r\n                                    <td>\r\n                                        <span *ngIf=\"userObj.myPassportMediaVerified\"\r\n                                            class=\"badge badge-success\">Verified</span>\r\n                                        <span *ngIf=\"!userObj.myPassportMediaVerified\"\r\n                                            class=\"badge badge-danger\">Unverified</span>\r\n                                    </td>\r\n                                    <td *ngIf=\"adminViewT\">\r\n                                        <button class=\"btn btn-danger btn-sm btn-xs mr-1\" data-title=\"Unverified\" *ngIf=\"userObj.myPassportMediaVerified\" (click)=\"updateUsersVerificationStatus(userObj._id, 'myPassportMediaVerified', !userObj.myPassportMediaVerified)\">\r\n                                            <i class=\"icon-close\"></i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Verified\" *ngIf=\"!userObj.myPassportMediaVerified\" (click)=\"updateUsersVerificationStatus(userObj._id, 'myPassportMediaVerified', !userObj.myPassportMediaVerified)\">\r\n                                            <i class=\"icon-check\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Driving Licence</td>\r\n                                    <td>{{userObj.myDLNumber||'NA'}}</td>\r\n                                    <td>\r\n                                        <span *ngIf=\"userObj.myDLMediaVerified\"\r\n                                            class=\"badge badge-success\">Verified</span>\r\n                                        <span *ngIf=\"!userObj.myDLMediaVerified\"\r\n                                            class=\"badge badge-danger\">Unverified</span>\r\n                                    </td>\r\n                                    <td *ngIf=\"adminViewT\">\r\n                                        <button class=\"btn btn-danger btn-sm btn-xs mr-1\" data-title=\"Unverified\" *ngIf=\"userObj.myDLMediaVerified\" (click)=\"updateUsersVerificationStatus(userObj._id, 'myDLMediaVerified', !userObj.myDLMediaVerified)\">\r\n                                            <i class=\"icon-close\"></i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Verified\" *ngIf=\"!userObj.myDLMediaVerified\" (click)=\"updateUsersVerificationStatus(userObj._id, 'myDLMediaVerified', !userObj.myDLMediaVerified)\">\r\n                                            <i class=\"icon-check\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>CPR Number</td>\r\n                                    <td>{{userObj.cprNumber||'NA'}}</td>\r\n                                    <td>\r\n                                        <span *ngIf=\"userObj.myHICardMediaVerified\"\r\n                                            class=\"badge badge-success\">Verified</span>\r\n                                        <span *ngIf=\"!userObj.myHICardMediaVerified\"\r\n                                            class=\"badge badge-danger\">Unverified</span>\r\n                                    </td>\r\n                                    <td *ngIf=\"adminViewT\">\r\n                                        <button class=\"btn btn-danger btn-sm btn-xs mr-1\" data-title=\"Unverified\" *ngIf=\"userObj.myHICardMediaVerified\" (click)=\"updateUsersVerificationStatus(userObj._id, 'myHICardMediaVerified', !userObj.myHICardMediaVerified)\">\r\n                                            <i class=\"icon-close\"></i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Verified\" *ngIf=\"!userObj.myHICardMediaVerified\" (click)=\"updateUsersVerificationStatus(userObj._id, 'myHICardMediaVerified', !userObj.myHICardMediaVerified)\">\r\n                                            <i class=\"icon-check\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf=\"userObj.role=='borrower' && !userObj.isRKIRegistered\">\r\n                                    <td>RKI Document </td>\r\n                                    <td>{{userObj.myRKINumber||'NA'}}</td>\r\n                                    <td>\r\n                                        <span *ngIf=\"userObj.myRKIMediaVerified\"\r\n                                            class=\"badge badge-success\">Verified</span>\r\n                                        <span *ngIf=\"!userObj.myRKIMediaVerified\"\r\n                                            class=\"badge badge-danger\">Unverified</span>\r\n                                    </td>\r\n                                    <td *ngIf=\"adminViewT\">\r\n                                        <button class=\"btn btn-danger btn-sm btn-xs mr-1\" data-title=\"Unverified\" *ngIf=\"userObj.myRKIMediaVerified\" (click)=\"updateUsersVerificationStatus(userObj._id, 'myRKIMediaVerified', !userObj.myRKIMediaVerified)\">\r\n                                            <i class=\"icon-close\"></i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Verified\" *ngIf=\"!userObj.myRKIMediaVerified\" (click)=\"updateUsersVerificationStatus(userObj._id, 'myRKIMediaVerified', !userObj.myRKIMediaVerified)\">\r\n                                            <i class=\"icon-check\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"adminViewT\">\r\n                <div class=\"col-xl-12 col-12\">\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-12\"><strong>Passport\r\n                                Documents</strong>\r\n                        </div>\r\n                        <div *ngIf=\"userObj.myPassportMedia\">\r\n                            <div class=\"col-xl-2\" *ngFor=\"let previewUrl of userObj.myPassportMedia\">\r\n                                <div *ngIf=\"previewUrl\">\r\n                                    <video width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('video/')>-1\"\r\n                                        class=\"img-fluid border\" controls [src]=\"previewUrl.url\"></video>\r\n                                    <img width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('image/')>-1\"\r\n                                        class=\"img-fluid border\" [src]=\"previewUrl.url\"\r\n                                        onerror=\"this.src='/assets/img/na.png';\" />\r\n                                    <img width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('video/')==-1 && previewUrl.type && previewUrl.type.indexOf('image/')==-1\"\r\n                                        class=\"img-fluid border\" src=\"/assets/img/pdf.png\"\r\n                                        onerror=\"this.src='/assets/img/na.png';\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-12\"><strong>Driving Licence\r\n                                Documents</strong></div>\r\n                        <div *ngIf=\"userObj.myDLMedia\">\r\n                            <div class=\"col-xl-2\" *ngFor=\"let previewUrl of userObj.myDLMedia\">\r\n                                <div *ngIf=\"previewUrl\">\r\n                                    <video width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('video/')>-1\"\r\n                                        class=\"img-fluid border\" controls [src]=\"previewUrl.url\"></video>\r\n                                    <img width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('image/')>-1\"\r\n                                        class=\"img-fluid border\" [src]=\"previewUrl.url\"\r\n                                        onerror=\"this.src='/assets/img/na.png';\" />\r\n                                    <img width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('video/')==-1 && previewUrl.type && previewUrl.type.indexOf('image/')==-1\"\r\n                                        class=\"img-fluid border\" src=\"/assets/img/pdf.png\"\r\n                                        onerror=\"this.src='/assets/img/na.png';\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-12\"><strong>\r\n                                CPR Number Documents\r\n                            </strong>\r\n                        </div>\r\n                        <div *ngIf=\"userObj.myHICardMedia\">\r\n                            <div class=\"col-xl-2\" *ngFor=\"let previewUrl of userObj.myHICardMedia\">\r\n                                <div *ngIf=\"previewUrl\">\r\n                                    <video width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('video/')>-1\"\r\n                                        class=\"img-fluid border\" controls [src]=\"previewUrl.url\"></video>\r\n                                    <img width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('image/')>-1\"\r\n                                        class=\"img-fluid border\" [src]=\"previewUrl.url\"\r\n                                        onerror=\"this.src='/assets/img/na.png';\" />\r\n                                    <img width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('video/')==-1 && previewUrl.type && previewUrl.type.indexOf('image/')==-1\"\r\n                                        class=\"img-fluid border\" src=\"/assets/img/pdf.png\"\r\n                                        onerror=\"this.src='/assets/img/na.png';\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"userObj.role=='borrower' && !userObj.isRKIRegistered\">\r\n                        <hr>\r\n                        <div class=\"col-xl-12\">\r\n                            <strong>RKI Documents</strong>&nbsp;\r\n                        </div>\r\n                        <div *ngIf=\"userObj.myRKIMedia\">\r\n                            <div class=\"col-xl-2\" *ngFor=\"let previewUrl of userObj.myRKIMedia\">\r\n                                <div *ngIf=\"previewUrl\">\r\n                                    <video width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('video/')>-1\"\r\n                                        class=\"img-fluid border\" controls [src]=\"previewUrl.url\"></video>\r\n                                    <img width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('image/')>-1\"\r\n                                        class=\"img-fluid border\" [src]=\"previewUrl.url\"\r\n                                        onerror=\"this.src='/assets/img/na.png';\" />\r\n                                    <img width=\"1000\" height=\"1000\"\r\n                                        *ngIf=\"previewUrl.type && previewUrl.type.indexOf('video/')==-1 && previewUrl.type && previewUrl.type.indexOf('image/')==-1\"\r\n                                        class=\"img-fluid border\" src=\"/assets/img/pdf.png\"\r\n                                        onerror=\"this.src='/assets/img/na.png';\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</mat-dialog-content>");

/***/ }),

/***/ "83w0":
/*!****************************************************************!*\
  !*** ./src/app/shared/user-ratings/user-ratings.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJhdGluZ3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "83xO":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/session-view/session-view.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>session-view works!</p>\n\n\n<div class=\"container\">\n    <!---------------Platform Tour----------------->\n    <div class=\"platform-tour-wrapper py-3\">\n      <!-- Nav tabs -->\n      <ul class=\"nav nav-tabs justify-content-between border-0 horizontal-tabs-steps\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#step1\"><span>1</span>\n          </a>\n          <h6 class=\"text-center mt-1\">Pending</h6>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step2\"><span>2</span></a>\n          <h6 class=\"text-center mt-1\">Accepeted</h6>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step3\"><span>3</span></a>\n          <h6 class=\"text-center mt-1\">Ongoing</h6>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step4\"><span>4</span></a>\n          <h6 class=\"text-center mt-1\">Completed</h6>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step5\"><span>5</span></a>\n          <h6 class=\"text-center mt-1\">Step 5</h6>\n        </li>\n      </ul>\n\n      <!-- Tab panes -->\n      <div class=\"tab-content platform-content mt-2 mb-4\">\n        <div id=\"step1\" class=\"tab-pane active p-0\">\n\n          <h3 class=\"mb-4\">Lorem Ipsum 1</h3>\n          <!------vertical Tabs------------->\n\n          <div class=\"row\">\n            <div class=\"col-lg-1 col-md-2 col-sm-2 col-3 vertical-tabs-steps pr-0\">\n              <ul class=\"nav nav-tabs d-flex flex-sm-column border-0\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#step1_1\" role=\"tab\" aria-controls=\"home\"><span>Step 1.1</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step1_2\" role=\"tab\" aria-controls=\"profile\"><span>Step 1.2</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step1_3\" role=\"tab\" aria-controls=\"messages\"><span>Step 1.3</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step1_4\" role=\"tab\" aria-controls=\"settings\"><span>Step 1.4</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step1_5\" role=\"tab\" aria-controls=\"settings\"><span>Step 1.5</span></a>\n                </li>\n              </ul> \n            </div>\n\n            <div class=\"col-lg-11 col-md-10 col-sm-10 col-9 p-0 pl-md-2\">\n              <div class=\"tab-content vertical-tabs-content\">\n                <div class=\"tab-pane active\" id=\"step1_1\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step1_2\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step1_3\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step1_4\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step1_5\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <!---------- vertical Tabs End----------------->\n        </div>\n\n        <div id=\"step2\" class=\"tab-pane fade p-0\">\n          <h3 class=\"mb-4\">Lorem Ipsum 2</h3>\n\n          <!------vertical Tabs------------->\n          <div class=\"row\">\n            <div class=\"col-lg-1 col-md-2 col-sm-2 col-3 vertical-tabs-steps pr-0\">\n              <ul class=\"nav nav-tabs d-flex flex-sm-column border-0\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#step2_1\" role=\"tab\" aria-controls=\"home\"><span>Step 2.1</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step2_2\" role=\"tab\" aria-controls=\"profile\"><span>Step 2.2</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step2_3\" role=\"tab\" aria-controls=\"messages\"><span>Step 2.3</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step2_4\" role=\"tab\" aria-controls=\"settings\"><span>Step 2.4</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step2_5\" role=\"tab\" aria-controls=\"settings\"><span>Step 2.5</span></a>\n                </li>\n              </ul> \n            </div>\n\n            <div class=\"col-lg-11 col-md-10 col-sm-10 col-9 p-0 pl-md-2\">\n              <div class=\"tab-content vertical-tabs-content\">\n                <div class=\"tab-pane active\" id=\"step2_1\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step2_2\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step2_3\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step2_4\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step2_5\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <!---------- vertical Tabs End----------------->\n        </div>\n\n        <div id=\"step3\" class=\"tab-pane fade p-0\">\n          <h3 class=\"mb-4\">Lorem Ipsum 3</h3>\n          <!------vertical Tabs------------->\n          <div class=\"row\">\n            <div class=\"col-lg-1 col-md-2 col-sm-2 col-3 vertical-tabs-steps pr-0\">\n              <ul class=\"nav nav-tabs d-flex flex-sm-column border-0\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#step3_1\" role=\"tab\" aria-controls=\"home\"><span>Step 3.1</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step3_2\" role=\"tab\" aria-controls=\"profile\"><span>Step 3.2</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step3_3\" role=\"tab\" aria-controls=\"messages\"><span>Step 3.3</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step3_4\" role=\"tab\" aria-controls=\"settings\"><span>Step 3.4</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step3_5\" role=\"tab\" aria-controls=\"settings\"><span>Step 3.5</span></a>\n                </li>\n              </ul> \n            </div>\n\n            <div class=\"col-lg-11 col-md-10 col-sm-10 col-9 p-0 pl-md-2\">\n              <div class=\"tab-content vertical-tabs-content\">\n                <div class=\"tab-pane active\" id=\"step3_1\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step3_2\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step3_3\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step3_4\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step3_5\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <!---------- vertical Tabs End----------------->\n        </div>\n\n        <div id=\"step4\" class=\"tab-pane fade p-0\">\n          <h3 class=\"mb-4\">Lorem Ipsum 4</h3>\n          <!------vertical Tabs------------->\n          <div class=\"row\">\n            <div class=\"col-lg-1 col-md-2 col-sm-2 col-3 vertical-tabs-steps pr-0\">\n              <ul class=\"nav nav-tabs d-flex flex-sm-column border-0\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#step4_1\" role=\"tab\" aria-controls=\"home\"><span>Step 4.1</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step4_2\" role=\"tab\" aria-controls=\"profile\"><span>Step 4.2</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step4_3\" role=\"tab\" aria-controls=\"messages\"><span>Step 4.3</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step4_4\" role=\"tab\" aria-controls=\"settings\"><span>Step 4.4</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step4_5\" role=\"tab\" aria-controls=\"settings\"><span>Step 4.5</span></a>\n                </li>\n              </ul> \n            </div>\n\n            <div class=\"col-lg-11 col-md-10 col-sm-10 col-9 p-0 pl-md-2\">\n              <div class=\"tab-content vertical-tabs-content\">\n                <div class=\"tab-pane active\" id=\"step4_1\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step4_2\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step4_3\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step4_4\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step4_5\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <!---------- vertical Tabs End----------------->\n        </div>\n\n        <div id=\"step5\" class=\"tab-pane fade p-0\">\n          <h3 class=\"mb-4\">Lorem Ipsum 5</h3>\n          <!------vertical Tabs------------->\n          <div class=\"row\">\n            <div class=\"col-lg-1 col-md-2 col-sm-2 col-3 vertical-tabs-steps pr-0\">\n              <ul class=\"nav nav-tabs d-flex flex-sm-column border-0\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#step5_1\" role=\"tab\" aria-controls=\"home\"><span>Step 5.1</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step5_2\" role=\"tab\" aria-controls=\"profile\"><span>Step 5.2</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step5_3\" role=\"tab\" aria-controls=\"messages\"><span>Step 5.3</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step5_4\" role=\"tab\" aria-controls=\"settings\"><span>Step 5.4</span></a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#step5_5\" role=\"tab\" aria-controls=\"settings\"><span>Step 5.5</span></a>\n                </li>\n              </ul> \n            </div>\n\n            <div class=\"col-lg-11 col-md-10 col-sm-10 col-9 p-0 pl-md-2\">\n              <div class=\"tab-content vertical-tabs-content\">\n                <div class=\"tab-pane active\" id=\"step5_1\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step5_2\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step5_3\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step5_4\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Vestibulum a pellentesque lorem. Nullam convallis consequat orci. Morbi dignissim tempor enim, vel facilisis nisl vestibulum vitae. </p>\n                  <img src=\"https://storage.googleapis.com/website-production/uploads/2017/04/demo-landing-pages.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n\n                <div class=\"tab-pane\" id=\"step5_5\" role=\"tabpanel\">\n                  <h3>Lorem ipsum</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim justo, tincidunt tristique dolor vitae, eleifend tempus orci. </p>\n                  <img src=\"https://www.saleshacker.com/wp-content/uploads/2017/10/sales-demo-tips-best-practices-feature-image.jpg\" alt=\"\" class=\"w-100\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <!---------- vertical Tabs End----------------->\n        </div>\n      </div>\n    </div>  \n    <!---------------Platform Tour End----------------->\n</div>");

/***/ }),

/***/ "9CWG":
/*!*************************************************!*\
  !*** ./node_modules/speak-tts/lib/speak-tts.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./utils */ "W4eI");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpeakTTS =
/*#__PURE__*/
function () {
  function SpeakTTS() {
    _classCallCheck(this, SpeakTTS);

    this.browserSupport = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    this.synthesisVoice = null;
  }

  _createClass(SpeakTTS, [{
    key: "init",
    value: function init() {
      var _this = this;

      var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        if (!_this.browserSupport) {
          reject('Your browser does not support Speech Synthesis');
        }

        var listeners = (0, _utils.isNil)(conf.listeners) ? {} : conf.listeners;
        var splitSentences = (0, _utils.isNil)(conf.splitSentences) ? true : conf.splitSentences;
        var lang = (0, _utils.isNil)(conf.lang) ? undefined : conf.lang;
        var volume = (0, _utils.isNil)(conf.volume) ? 1 : conf.volume;
        var rate = (0, _utils.isNil)(conf.rate) ? 1 : conf.rate;
        var pitch = (0, _utils.isNil)(conf.pitch) ? 1 : conf.pitch;
        var voice = (0, _utils.isNil)(conf.voice) ? undefined : conf.voice; // Attach event listeners

        Object.keys(listeners).forEach(function (listener) {
          var fn = listeners[listener];

          var newListener = function newListener(data) {
            fn && fn(data);
          };

          if (listener !== 'onvoiceschanged') {
            speechSynthesis[listener] = newListener;
          }
        });

        _this._loadVoices().then(function (voices) {
          // Handle callback onvoiceschanged by hand
          listeners['onvoiceschanged'] && listeners['onvoiceschanged'](voices); // Initialize values if necessary

          !(0, _utils.isNil)(lang) && _this.setLanguage(lang);
          !(0, _utils.isNil)(voice) && _this.setVoice(voice);
          !(0, _utils.isNil)(volume) && _this.setVolume(volume);
          !(0, _utils.isNil)(rate) && _this.setRate(rate);
          !(0, _utils.isNil)(pitch) && _this.setPitch(pitch);
          !(0, _utils.isNil)(splitSentences) && _this.setSplitSentences(splitSentences);
          resolve({
            voices: voices,
            lang: _this.lang,
            voice: _this.voice,
            volume: _this.volume,
            rate: _this.rate,
            pitch: _this.pitch,
            splitSentences: _this.splitSentences,
            browserSupport: _this.browserSupport
          });
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "_fetchVoices",
    value: function _fetchVoices() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var voices = speechSynthesis.getVoices();

          if ((0, _utils.size)(voices) > 0) {
            return resolve(voices);
          } else {
            return reject("Could not fetch voices");
          }
        }, 100);
      });
    }
  }, {
    key: "_loadVoices",
    value: function _loadVoices() {
      var _this2 = this;

      var remainingAttempts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      return this._fetchVoices().catch(function (error) {
        if (remainingAttempts === 0) throw error;
        return _this2._loadVoices(remainingAttempts - 1);
      });
    }
  }, {
    key: "hasBrowserSupport",
    value: function hasBrowserSupport() {
      return this.browserSupport;
    }
  }, {
    key: "setVoice",
    value: function setVoice(voice) {
      var synthesisVoice;
      var voices = speechSynthesis.getVoices(); // set voice by name

      if ((0, _utils.isString)(voice)) {
        synthesisVoice = voices.find(function (v) {
          return v.name === voice;
        });
      } // Set the voice in conf if found


      if ((0, _utils.isObject)(voice)) {
        synthesisVoice = voice;
      }

      if (synthesisVoice) {
        this.synthesisVoice = synthesisVoice;
      } else {
        throw 'Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.';
      }
    }
  }, {
    key: "setLanguage",
    value: function setLanguage(lang) {
      lang = lang.replace('_', '-'); // some Android versions seem to ignore BCP 47 and use an underscore character in language tag

      if ((0, _utils.validateLocale)(lang)) {
        this.lang = lang;
      } else {
        throw 'Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)';
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      volume = parseFloat(volume);

      if (!(0, _utils.isNan)(volume) && volume >= 0 && volume <= 1) {
        this.volume = volume;
      } else {
        throw 'Error setting volume. Please verify your volume value is a number between 0 and 1.';
      }
    }
  }, {
    key: "setRate",
    value: function setRate(rate) {
      rate = parseFloat(rate);

      if (!(0, _utils.isNan)(rate) && rate >= 0 && rate <= 10) {
        this.rate = rate;
      } else {
        throw 'Error setting rate. Please verify your volume value is a number between 0 and 10.';
      }
    }
  }, {
    key: "setPitch",
    value: function setPitch(pitch) {
      pitch = parseFloat(pitch);

      if (!(0, _utils.isNan)(pitch) && pitch >= 0 && pitch <= 2) {
        this.pitch = pitch;
      } else {
        throw 'Error setting pitch. Please verify your pitch value is a number between 0 and 2.';
      }
    }
  }, {
    key: "setSplitSentences",
    value: function setSplitSentences(splitSentences) {
      this.splitSentences = splitSentences;
    }
  }, {
    key: "speak",
    value: function speak(data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var text = data.text,
            _data$listeners = data.listeners,
            listeners = _data$listeners === void 0 ? {} : _data$listeners,
            _data$queue = data.queue,
            queue = _data$queue === void 0 ? true : _data$queue;
        var msg = (0, _utils.trim)(text);
        if ((0, _utils.isNil)(msg)) resolve(); // Stop current speech

        !queue && _this3.cancel(); // Split into sentences (for better result and bug with some versions of chrome)

        var utterances = [];
        var sentences = _this3.splitSentences ? (0, _utils.splitSentences)(msg) : [msg];
        sentences.forEach(function (sentence, index) {
          var isLast = index === (0, _utils.size)(sentences) - 1;
          var utterance = new SpeechSynthesisUtterance();
          if (_this3.synthesisVoice) utterance.voice = _this3.synthesisVoice;
          if (_this3.lang) utterance.lang = _this3.lang;
          if (_this3.volume) utterance.volume = _this3.volume; // 0 to 1

          if (_this3.rate) utterance.rate = _this3.rate; // 0.1 to 10

          if (_this3.pitch) utterance.pitch = _this3.pitch; //0 to 2

          utterance.text = sentence; // Attach event listeners

          Object.keys(listeners).forEach(function (listener) {
            var fn = listeners[listener];

            var newListener = function newListener(data) {
              fn && fn(data);

              if (listener === 'onerror') {
                reject({
                  utterances: utterances,
                  lastUtterance: utterance,
                  error: data
                });
              }

              if (listener === 'onend') {
                if (isLast) resolve({
                  utterances: utterances,
                  lastUtterance: utterance
                });
              }
            };

            utterance[listener] = newListener;
          });
          utterances.push(utterance);
          speechSynthesis.speak(utterance);
        });
      });
    }
  }, {
    key: "pending",
    value: function pending() {
      return speechSynthesis.pending;
    }
  }, {
    key: "paused",
    value: function paused() {
      return speechSynthesis.paused;
    }
  }, {
    key: "speaking",
    value: function speaking() {
      return speechSynthesis.speaking;
    }
  }, {
    key: "pause",
    value: function pause() {
      speechSynthesis.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      speechSynthesis.resume();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      speechSynthesis.cancel();
    }
  }]);

  return SpeakTTS;
}();

var _default = SpeakTTS;
exports.default = _default;

/***/ }),

/***/ "B60M":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-ratings/user-ratings.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12 mn-4\">\r\n        <i class=\"icon-star\" (click)=\"currentUsersRating=1\" (mouseover)='currentUsersRating=1' [ngClass]=\"{ 'text-warning': currentUsersRating>=1 }\"></i>\r\n        <i class=\"icon-star\" (click)=\"currentUsersRating=2\" (mouseover)='currentUsersRating=2' [ngClass]=\"{ 'text-warning': currentUsersRating>=2 }\"></i>\r\n        <i class=\"icon-star\" (click)=\"currentUsersRating=3\" (mouseover)='currentUsersRating=3' [ngClass]=\"{ 'text-warning': currentUsersRating>=3 }\"></i>\r\n        <i class=\"icon-star\" (click)=\"currentUsersRating=4\" (mouseover)='currentUsersRating=4' [ngClass]=\"{ 'text-warning': currentUsersRating>=4 }\"></i>\r\n        <i class=\"icon-star\" (click)=\"currentUsersRating=5\" (mouseover)='currentUsersRating=5' [ngClass]=\"{ 'text-warning': currentUsersRating>=5 }\"></i>\r\n    </div>\r\n\r\n    <div class=\"col-xl-12 mb-4\">\r\n        <div class=\"mb-3\">Write Your Review </div>\r\n        <div class=\"form-group\">\r\n            <textarea rows=\"6\" [(ngModel)]=\"currentUsersReview\" placeholder=\"Start Typing\" class=\"form-control\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-12\">\r\n        <button class=\"btn btn-danger btn-sm text-white\" (click)=\"navigateOnHome()\">\r\n            Cancel</button>\r\n\r\n        <button class=\"btn btn-success btn-sm text-white\" [disabled]=\"!loanId || !currentUsersReview || !currentUsersRating\" (click)=\"submitRatingReviews()\">\r\n            Submit</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "C4ci":
/*!*********************************!*\
  !*** ./src/app/models/funds.ts ***!
  \*********************************/
/*! exports provided: Funds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Funds", function() { return Funds; });
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ "z56L");

class Funds {
    constructor() {
        this.app_doc_type = _role__WEBPACK_IMPORTED_MODULE_0__["AppDocumentType"].app_funds;
    }
}


/***/ }),

/***/ "CbED":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/meeting-vc/meeting-vc.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-8 col-12\">\r\n        <div class=\"mt-n4\" id=\"vc_meeting_div\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-12\" *ngIf=\"sessionObj\">\r\n        <div class=\"mt-md-n2 mb-3\">\r\n            <h4><i class=\"icon-timer\"></i>{{hours}}:{{minutes}}:{{seconds}} <span class=\"badge badge-success float-right\">{{sessionObj.sessionType | titlecase}}</span></h4>\r\n        </div>\r\n        <h5 class=\"text-blue mb-2\">{{sessionObj.sessionSubject}}</h5>\r\n        <p class=\"text-black-50\">{{sessionObj.loanDescription}}\r\n        </p>\r\n\r\n        <div *ngIf=\"showExtendSessionButton && showExtendSessionButtonForRole\">\r\n            <hr class=\"my-3\">\r\n            <p class=\"font-weight-bold text-cm-blue\">One Hour consultation session is not enought for you? No worries you can extend Live consultation session for next one hour by paying just ${{((sessionObj.loanAmount || 0)/2)}}.</p>\r\n            <button class=\"btn btn-success border-0\" (click)=\"initiatePayment(sessionObj, roomName)\">Extend My Session</button>\r\n            <div class=\"row\" [ngClass]=\"{ 'd-none': !userInitiatedForPayment }\">\r\n                <app-payment></app-payment>\r\n            </div>\r\n        </div>\r\n        <app-messages></app-messages>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "D+Ly":
/*!***************************************************************!*\
  !*** ./src/app/shared/bank-details/bank-details.component.ts ***!
  \***************************************************************/
/*! exports provided: BankDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankDetailsComponent", function() { return BankDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bank_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bank-details.component.html */ "mRqz");
/* harmony import */ var _bank_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-details.component.css */ "N5mv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/first */ "XoMe");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_12__);













let BankDetailsComponent = class BankDetailsComponent {
    constructor(dialog, http, formBuilder, router, authenticationService, userService, alertService, appRouterService, route, utilityService) {
        this.dialog = dialog;
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.appRouterService = appRouterService;
        this.route = route;
        this.utilityService = utilityService;
        this.loading = false;
        this.isOtpSent = true;
        this.submitted = false;
        // redirect to home if already logged in
        if (!this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter('');
        }
        this.initForm();
        this.userService.getUserById(this.authenticationService.currentUserValue._id)
            .pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_12__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.showEditingForm(data["data"]);
                //this.alertService.success(data['message'], true);
                this.loading = false;
                this.isOtpSent = true;
                //this.element_btn_click_profile_skills_verification.click();
            }
            else {
                //alert(JSON.stringify(data['message']));
                this.alertService.error(data['message']);
                this.loading = false;
                this.isOtpSent = false;
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
            this.isOtpSent = false;
            this.appRouterService.appRouter('');
        });
    }
    get f() { return this.bankDetailsForm.controls; }
    ngOnInit() {
    }
    showEditingForm(_userObj) {
        let _birthDate = null;
        if (_userObj.birthDate) {
            _birthDate = moment__WEBPACK_IMPORTED_MODULE_8__(_userObj.birthDate).format('YYYY-MM-DD');
        }
        this.bankDetailsForm = this.formBuilder.group({
            _id: [_userObj._id || ''],
            role: [_userObj.role || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            appPermissions: this.formBuilder.array(_userObj.appPermissions || []),
            firstName: [_userObj.firstName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            middleName: [_userObj.middleName || ''],
            lastName: [_userObj.lastName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            userName: [_userObj.userName || ''],
            address: [_userObj.address || ''],
            emailAddress: [_userObj.emailAddress || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            acceptnewUpdates: [_userObj.acceptnewUpdates || ''],
            acceptTerms: [_userObj.acceptTerms || ''],
            cityCode: [_userObj.cityCode || ''],
            birthDate: [_userObj.birthDate || ''],
            nationality: [_userObj.nationality || ''],
            residence: [_userObj.residence || ''],
            birthPlace: [_userObj.birthPlace || ''],
            promoCode: [_userObj.promoCode || ''],
            mobileNo: [_userObj.mobileNo || ''],
            gender: [_userObj.gender || ''],
            country: [_userObj.country || ''],
            birthDateCustomised: [_birthDate || ''],
            education: [_userObj.education || ''],
            additionalCertification: [{}],
            creditCards: [{}],
            skillSets: this.formBuilder.array(_userObj.skillSets || []),
            academicDocuments: this.formBuilder.array(_userObj.academicDocuments || []),
            employmentVerifications: this.formBuilder.array(_userObj.employmentVerifications || []),
            externalAppLinks: this.formBuilder.array(_userObj.externalAppLinks || [], []),
            hearAboutUs: [_userObj.hearAboutUs || ''],
            app_doc_type: [_userObj.app_doc_type || ''],
            isVerified: [_userObj.isVerified || ''],
            myProfileMedia: this.formBuilder.array(_userObj.myProfileMedia || []),
            myProfileDetails: [_userObj.myProfileDetails || ''],
            userType: [_userObj.userType || ''],
            myPassportMedia: this.formBuilder.array(_userObj.myPassportMedia || []),
            myPassportNumber: [_userObj.myPassportNumber || ''],
            myDLMedia: this.formBuilder.array(_userObj.myDLMedia || []),
            myDLNumber: [_userObj.myDLNumber || ''],
            myHICardMedia: this.formBuilder.array(_userObj.myHICardMedia || []),
            myRKIMedia: this.formBuilder.array(_userObj.myRKIMedia || []),
            isRKIRegistered: [_userObj.isRKIRegistered || false],
            accountName: [_userObj.accountName || ''],
            accountNumber: [_userObj.accountNumber || ''],
            bankName: [_userObj.bankName || ''],
            regNumber: [_userObj.regNumber || ''],
            cprNumber: [_userObj.cprNumber || ''],
            branchDetails: [_userObj.branchDetails || ''],
            mobilePayment: [_userObj.mobilePayment || ''],
            bitCoinWalletID: [_userObj.bitCoinWalletID || ''],
            revolutWalletID: [_userObj.revolutWalletID || ''],
            skrillWalletID: [_userObj.skrillWalletID || ''],
            paypalWalletID: [_userObj.paypalWalletID || ''],
            bic: [_userObj.bic || ''],
            accountType: [_userObj.accountType || ''],
            iban: [_userObj.iban || ''],
            accountOtherDetails1: [_userObj.accountOtherDetails1 || ''],
            accountOtherDetails2: [_userObj.accountOtherDetails2 || ''],
            accountOtherDetails3: [_userObj.accountOtherDetails3 || ''],
            accountOtherDetails4: [_userObj.accountOtherDetails4 || ''],
            selfProfileUrl: [_userObj.selfProfileUrl || ''],
        });
    }
    initForm() {
        this.bankDetailsForm = this.formBuilder.group({
            _id: [''],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            appPermissions: this.formBuilder.array([]),
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            middleName: [''],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            userName: [''],
            address: [''],
            emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            acceptnewUpdates: [''],
            acceptTerms: [''],
            cityCode: [''],
            birthDate: [''],
            nationality: [''],
            residence: [''],
            birthPlace: [''],
            promoCode: [''],
            mobileNo: [''],
            gender: [''],
            country: [''],
            birthDateCustomised: [''],
            education: [''],
            additionalCertification: [{}],
            creditCards: [{}],
            skillSets: this.formBuilder.array([]),
            academicDocuments: this.formBuilder.array([]),
            employmentVerifications: this.formBuilder.array([]),
            externalAppLinks: this.formBuilder.array([], []),
            hearAboutUs: [''],
            app_doc_type: [''],
            isVerified: [''],
            myProfileMedia: this.formBuilder.array([]),
            myProfileDetails: [''],
            userType: [''],
            myPassportMedia: this.formBuilder.array([]),
            myPassportNumber: [''],
            myDLMedia: this.formBuilder.array([]),
            myDLNumber: [''],
            myHICardMedia: this.formBuilder.array([]),
            myRKIMedia: this.formBuilder.array([]),
            isRKIRegistered: [false],
            accountName: [''],
            accountNumber: [''],
            bankName: [''],
            regNumber: [''],
            cprNumber: [''],
            branchDetails: [''],
            mobilePayment: [''],
            bitCoinWalletID: [''],
            revolutWalletID: [''],
            skrillWalletID: [''],
            paypalWalletID: [''],
            bic: [''],
            accountType: [''],
            iban: [''],
            accountOtherDetails1: [''],
            accountOtherDetails2: [''],
            accountOtherDetails3: [''],
            accountOtherDetails4: [''],
            selfProfileUrl: [''],
        });
    }
    onBankDetailsUpdateSubmit() {
        this.submitted = true;
        if (this.bankDetailsForm.invalid) {
            this.alertService.error("Please Provide all data");
            return;
        }
        this.userService.updateUserById(this.bankDetailsForm.value)
            .pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_12__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                localStorage.removeItem('currentUser');
                //this.authenticationService.clearCurrentUserObj();
                localStorage.setItem('currentUser', JSON.stringify(data['data']));
                this.authenticationService.sendCurrentUserObj(data['data']);
                this.alertService.success('Bank details updated', true);
                this.appRouterService.appRouter(this.authenticationService.currentUserValue);
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
};
BankDetailsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_10__["AppRouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"] }
];
BankDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-bank-details',
        template: _raw_loader_bank_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bank_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_10__["AppRouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"]])
], BankDetailsComponent);



/***/ }),

/***/ "IWWT":
/*!****************************************************!*\
  !*** ./src/app/shared/filter-object-array.pipe.ts ***!
  \****************************************************/
/*! exports provided: FilterObjectArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterObjectArrayPipe", function() { return FilterObjectArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FilterObjectArrayPipe = class FilterObjectArrayPipe {
    transform(items, filter) {
        return items.filter(item => {
            let notMatchingField = Object.keys(filter)
                .find(key => item[key] !== filter[key]);
            return !notMatchingField; // true if matches all fields
        });
    }
};
FilterObjectArrayPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterObjectArray'
    })
], FilterObjectArrayPipe);



/***/ }),

/***/ "JJko":
/*!*********************************************!*\
  !*** ./src/app/models/languageCodesEn.json ***!
  \*********************************************/
/*! exports provided: eo, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"eo\":[{\"language\":\"af\",\"name\":\"Afrikaans\"},{\"language\":\"sq\",\"name\":\"Albanian\"},{\"language\":\"am\",\"name\":\"Amharic\"},{\"language\":\"ar\",\"name\":\"Arabic\"},{\"language\":\"hy\",\"name\":\"Armenian\"},{\"language\":\"az\",\"name\":\"Azerbaijani\"},{\"language\":\"eu\",\"name\":\"Basque\"},{\"language\":\"be\",\"name\":\"Belarusian\"},{\"language\":\"bn\",\"name\":\"Bengali\"},{\"language\":\"bs\",\"name\":\"Bosnian\"},{\"language\":\"bg\",\"name\":\"Bulgarian\"},{\"language\":\"ca\",\"name\":\"Catalan\"},{\"language\":\"ceb\",\"name\":\"Cebuano\"},{\"language\":\"ny\",\"name\":\"Chichewa\"},{\"language\":\"zh-CN\",\"name\":\"Chinese (Simplified)\"},{\"language\":\"zh-TW\",\"name\":\"Chinese (Traditional)\"},{\"language\":\"co\",\"name\":\"Corsican\"},{\"language\":\"hr\",\"name\":\"Croatian\"},{\"language\":\"cs\",\"name\":\"Czech\"},{\"language\":\"da\",\"name\":\"Danish\"},{\"language\":\"nl\",\"name\":\"Dutch\"},{\"language\":\"en\",\"name\":\"English\"},{\"language\":\"eo\",\"name\":\"Esperanto\"},{\"language\":\"et\",\"name\":\"Estonian\"},{\"language\":\"tl\",\"name\":\"Filipino\"},{\"language\":\"fi\",\"name\":\"Finnish\"},{\"language\":\"fr\",\"name\":\"French\"},{\"language\":\"fy\",\"name\":\"Frisian\"},{\"language\":\"gl\",\"name\":\"Galician\"},{\"language\":\"ka\",\"name\":\"Georgian\"},{\"language\":\"de\",\"name\":\"German\"},{\"language\":\"el\",\"name\":\"Greek\"},{\"language\":\"gu\",\"name\":\"Gujarati\"},{\"language\":\"ht\",\"name\":\"Haitian Creole\"},{\"language\":\"ha\",\"name\":\"Hausa\"},{\"language\":\"haw\",\"name\":\"Hawaiian\"},{\"language\":\"iw\",\"name\":\"Hebrew\"},{\"language\":\"hi\",\"name\":\"Hindi\"},{\"language\":\"hmn\",\"name\":\"Hmong\"},{\"language\":\"hu\",\"name\":\"Hungarian\"},{\"language\":\"is\",\"name\":\"Icelandic\"},{\"language\":\"ig\",\"name\":\"Igbo\"},{\"language\":\"id\",\"name\":\"Indonesian\"},{\"language\":\"ga\",\"name\":\"Irish\"},{\"language\":\"it\",\"name\":\"Italian\"},{\"language\":\"ja\",\"name\":\"Japanese\"},{\"language\":\"jw\",\"name\":\"Javanese\"},{\"language\":\"kn\",\"name\":\"Kannada\"},{\"language\":\"kk\",\"name\":\"Kazakh\"},{\"language\":\"km\",\"name\":\"Khmer\"},{\"language\":\"rw\",\"name\":\"Kinyarwanda\"},{\"language\":\"ko\",\"name\":\"Korean\"},{\"language\":\"ku\",\"name\":\"Kurdish (Kurmanji)\"},{\"language\":\"ky\",\"name\":\"Kyrgyz\"},{\"language\":\"lo\",\"name\":\"Lao\"},{\"language\":\"la\",\"name\":\"Latin\"},{\"language\":\"lv\",\"name\":\"Latvian\"},{\"language\":\"lt\",\"name\":\"Lithuanian\"},{\"language\":\"lb\",\"name\":\"Luxembourgish\"},{\"language\":\"mk\",\"name\":\"Macedonian\"},{\"language\":\"mg\",\"name\":\"Malagasy\"},{\"language\":\"ms\",\"name\":\"Malay\"},{\"language\":\"ml\",\"name\":\"Malayalam\"},{\"language\":\"mt\",\"name\":\"Maltese\"},{\"language\":\"mi\",\"name\":\"Maori\"},{\"language\":\"mr\",\"name\":\"Marathi\"},{\"language\":\"mn\",\"name\":\"Mongolian\"},{\"language\":\"my\",\"name\":\"Myanmar (Burmese)\"},{\"language\":\"ne\",\"name\":\"Nepali\"},{\"language\":\"no\",\"name\":\"Norwegian\"},{\"language\":\"or\",\"name\":\"Odia (Oriya)\"},{\"language\":\"ps\",\"name\":\"Pashto\"},{\"language\":\"fa\",\"name\":\"Persian\"},{\"language\":\"pl\",\"name\":\"Polish\"},{\"language\":\"pt\",\"name\":\"Portuguese\"},{\"language\":\"pa\",\"name\":\"Punjabi\"},{\"language\":\"ro\",\"name\":\"Romanian\"},{\"language\":\"ru\",\"name\":\"Russian\"},{\"language\":\"sm\",\"name\":\"Samoan\"},{\"language\":\"gd\",\"name\":\"Scots Gaelic\"},{\"language\":\"sr\",\"name\":\"Serbian\"},{\"language\":\"st\",\"name\":\"Sesotho\"},{\"language\":\"sn\",\"name\":\"Shona\"},{\"language\":\"sd\",\"name\":\"Sindhi\"},{\"language\":\"si\",\"name\":\"Sinhala\"},{\"language\":\"sk\",\"name\":\"Slovak\"},{\"language\":\"sl\",\"name\":\"Slovenian\"},{\"language\":\"so\",\"name\":\"Somali\"},{\"language\":\"es\",\"name\":\"Spanish\"},{\"language\":\"su\",\"name\":\"Sundanese\"},{\"language\":\"sw\",\"name\":\"Swahili\"},{\"language\":\"sv\",\"name\":\"Swedish\"},{\"language\":\"tg\",\"name\":\"Tajik\"},{\"language\":\"ta\",\"name\":\"Tamil\"},{\"language\":\"tt\",\"name\":\"Tatar\"},{\"language\":\"te\",\"name\":\"Telugu\"},{\"language\":\"th\",\"name\":\"Thai\"},{\"language\":\"tr\",\"name\":\"Turkish\"},{\"language\":\"tk\",\"name\":\"Turkmen\"},{\"language\":\"uk\",\"name\":\"Ukrainian\"},{\"language\":\"ur\",\"name\":\"Urdu\"},{\"language\":\"ug\",\"name\":\"Uyghur\"},{\"language\":\"uz\",\"name\":\"Uzbek\"},{\"language\":\"vi\",\"name\":\"Vietnamese\"},{\"language\":\"cy\",\"name\":\"Welsh\"},{\"language\":\"xh\",\"name\":\"Xhosa\"},{\"language\":\"yi\",\"name\":\"Yiddish\"},{\"language\":\"yo\",\"name\":\"Yoruba\"},{\"language\":\"zu\",\"name\":\"Zulu\"},{\"language\":\"he\",\"name\":\"Hebrew\"},{\"language\":\"zh\",\"name\":\"Chinese (Simplified)\"}]}");

/***/ }),

/***/ "KIMC":
/*!***************************************************!*\
  !*** ./src/app/shared/wallet/wallet.component.ts ***!
  \***************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wallet_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wallet.component.html */ "vD63");
/* harmony import */ var _wallet_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.component.css */ "Li+u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/payment.service */ "s5zK");
/* harmony import */ var src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/add-funds.service */ "3gPe");
/* harmony import */ var src_app_models_funds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/funds */ "C4ci");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");












let WalletComponent = class WalletComponent {
    constructor(utilityService, payment, formBuilder, addFundsService, authenticationService, alertService) {
        this.utilityService = utilityService;
        this.payment = payment;
        this.formBuilder = formBuilder;
        this.addFundsService = addFundsService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.allFunds = [];
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.currentFunds = new src_app_models_funds__WEBPACK_IMPORTED_MODULE_10__["Funds"]();
    }
    ngOnInit() {
        this.addFundsForm = this.formBuilder.group({
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.totalFund4currentUser = 0;
        this.loadAllFunds();
    }
    get f() { return this.addFundsForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addFundsForm.invalid) {
            return;
        }
        this.currentFunds.amount = Number(this.f.amount.value);
        this.currentFunds.created_by = this.currentUser._id;
        let purchaseUnits = [
            {
                custom_id: "",
                amount: {
                    currency_code: 'USD',
                    value: this.currentFunds.amount,
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: this.currentFunds.amount
                        }
                    }
                },
                items: [
                    {
                        description: 'Funds Adding in Wallet',
                        name: src_app_models__WEBPACK_IMPORTED_MODULE_5__["TransactionActionType"].funds_add,
                        quantity: '1',
                        category: 'DIGITAL_GOODS',
                        unit_amount: {
                            currency_code: 'USD',
                            value: this.currentFunds.amount,
                        },
                    }
                ]
            }
        ];
        this.addFundsService.checkStatusOfNewFundsAdded().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(_obj => {
            this.loading = false;
            this.alertService.success('Funds Added');
            this.f.amount.setValue('');
            this.loadAllFunds();
            this.payPalConfig = null;
            this.addFundsService.getFundsCountForRequestedUser(this.currentUser._id);
        });
        this.payPalConfig = this.payment.initConfig(purchaseUnits, src_app_models__WEBPACK_IMPORTED_MODULE_5__["TransactionActionType"].funds_add, this.currentUser._id);
        /*
            this.addFundsService.funds_add_new_funds(this.currentFunds).pipe(first()).subscribe(_obj => {
              this.loading = false;
              this.alertService.success('Funds Added');
              this.f.amount.setValue('');
              this.loadAllFunds();
            });
            */
    }
    loadAllFunds() {
        //this.addFundsService.funds_getall_funds(this.currentUser.id);
        /*this.addFundsService.allFunds.subscribe((x)=>{
          this.allFunds=x;
        });
        this.totalFund4currentUser=0;
        for(var item in this.allFunds){
            this.totalFund4currentUser=this.totalFund4currentUser+ this.allFunds[item].amount;
        }
        */
        this.addFundsService.funds_getall_funds(this.currentUser._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(funds => {
            this.totalFund4currentUser = 0;
            this.allFunds = funds;
            for (var item in this.allFunds) {
                this.totalFund4currentUser = this.totalFund4currentUser + this.allFunds[item].amount;
            }
        });
    }
    deleteFund(id) {
        this.addFundsService.funds_delete(id, this.currentUser._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(() => {
            this.loadAllFunds();
        });
    }
};
WalletComponent.ctorParameters = () => [
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"] },
    { type: src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_8__["PaymentService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_9__["AddFundsService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
WalletComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet',
        template: _raw_loader_wallet_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wallet_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"], src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_8__["PaymentService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_9__["AddFundsService"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], WalletComponent);



/***/ }),

/***/ "KRlv":
/*!***************************************************************!*\
  !*** ./src/app/shared/income-proof/income-proof.component.ts ***!
  \***************************************************************/
/*! exports provided: IncomeProofComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeProofComponent", function() { return IncomeProofComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_income_proof_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./income-proof.component.html */ "Xwua");
/* harmony import */ var _income_proof_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./income-proof.component.css */ "wOb1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../media-preview/media-preview.component */ "tZK8");
















const uploadAPI = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl + '/api/post/upload/assetdata';
const uploadAccessUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl + '/';
let IncomeProofComponent = class IncomeProofComponent {
    constructor(http, formBuilder, authenticationService, userService, alertService, appRouterService, utilityService, dialogRef, data, dialog, _cdr) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.appRouterService = appRouterService;
        this.utilityService = utilityService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this._cdr = _cdr;
        this.fileData4MonthlyIncomeProofDocument = null;
        this.fileData4MonthlyIncomeProofDocumentPendingForUpload = false;
        this.loading = false;
        this.submittedIncomeDetails = false;
        this.submittedExpenseDetails = false;
        this.fileData = null;
        this.fileData4Profile = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
        this.myProfileFiles = [];
        this.selfProfileUrlPendingForUpload = false;
        this.portfolioDataArr = [];
        this.SessionStatus = src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"];
        this.userObj = null;
        this.isOpenedInModel = false;
        this.adminViewT = false;
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth();
        this.day = this.now.getDay();
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__({ year: this.year - 100, month: this.month, day: this.day }).format('YYYY-MM-DD');
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_10__({ year: this.year - 18, month: this.month, day: this.day }).format('YYYY-MM-DD');
        if (data && data.isOpenedInModel) {
            this.isOpenedInModel = true;
            this.userObj = data.userObj;
            this.adminViewT = !!data.adminViewT;
        }
        else {
            this.userObj = this.authenticationService.currentUserValue;
        }
        // redirect to home if already logged in
        if (!this.userObj || !this.userObj._id) {
            if (this.isOpenedInModel) {
                this.closeDialog();
            }
            else {
                this.appRouterService.appRouter('');
            }
            return;
        }
        this.initForm();
        this.fetchAllIncomeDetailsByUserId();
        this.fetchAllExpenseDetailsByUserId();
        this.fetchSumOfIncomeExpenseDetailsByUserId();
    }
    fetchAllIncomeDetailsByUserId() {
        this.userService.getUserIncomeDetailsByUserId(this.userObj._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.allIncomeDetailsData = data["data"];
                //this.alertService.success(data['message'], true);
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
            this.appRouterService.appRouter('');
        });
    }
    fetchAllExpenseDetailsByUserId() {
        this.userService.getUserExpenseDetailsByUserId(this.userObj._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.allExpenseDetailsData = data["data"];
                //this.alertService.success(data['message'], true);
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
            this.appRouterService.appRouter('');
        });
    }
    fetchSumOfIncomeExpenseDetailsByUserId() {
        this.userService.getUserIncomeExpenseDetailsByUserId(this.userObj._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                if (this.userObj._id == data["data"]["_id"]) {
                    this.userObj.totalIncome4currentUser = data["data"]["totalIncome4currentUser"];
                    this.userObj.totalExpense4currentUser = data["data"]["totalExpense4currentUser"];
                    this.userObj.totalAllowedBudget = this.userObj.totalIncome4currentUser - this.userObj.totalExpense4currentUser;
                }
                this._cdr.detectChanges();
                //this.alertService.success(data['message'], true);
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
            this.appRouterService.appRouter('');
        });
    }
    ngOnInit() {
    }
    // convenience getter for easy access to form fields
    get f() { return this.userIncomeDetailsForm.controls; }
    get ff() { return this.userExpenseDetailsForm.controls; }
    onUserIncomeDetailsUpdateSubmit() {
        this.submittedIncomeDetails = true;
        if (this.userIncomeDetailsForm.invalid) {
            this.alertService.error("Please Provide all data");
            return;
        }
        if (this.fileData4MonthlyIncomeProofDocumentPendingForUpload) {
            this.alertService.error('Please upload document first');
            return;
        }
        this.userService.addUpdateUserIncomeDetails(this.userIncomeDetailsForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.alertService.success('Your Income proof is Updated successfully', true);
                this.fetchAllIncomeDetailsByUserId();
                this.submittedIncomeDetails = false;
                //this.appRouterService.appRouter(this.userObj);
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
    onUserExpenseDetailsUpdateSubmit() {
        this.submittedExpenseDetails = true;
        if (this.userExpenseDetailsForm.invalid) {
            this.alertService.error("Please Provide all data");
            return;
        }
        let _monthlyExpenseStartDateTimeCustomised = this.userExpenseDetailsForm.get('monthlyExpenseStartDateTimeCustomised').value;
        let _monthlyExpensePaymentDateTimeCustomised = this.userExpenseDetailsForm.get('monthlyExpensePaymentDateTimeCustomised').value;
        if (_monthlyExpenseStartDateTimeCustomised) {
            this.userExpenseDetailsForm.get('monthlyExpenseStartDate').setValue(Date.parse(moment__WEBPACK_IMPORTED_MODULE_10__(_monthlyExpenseStartDateTimeCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD')));
        }
        if (_monthlyExpensePaymentDateTimeCustomised) {
            this.userExpenseDetailsForm.get('monthlyExpensePaymentDate').setValue(Date.parse(moment__WEBPACK_IMPORTED_MODULE_10__(_monthlyExpensePaymentDateTimeCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD')));
        }
        this.userService.addUpdateUserExpenseDetails(this.userExpenseDetailsForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.alertService.success('Your Expense proof is Updated successfully', true);
                this.fetchAllExpenseDetailsByUserId();
                this.submittedExpenseDetails = false;
                //this.appRouterService.appRouter(this.userObj);
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
    date(ev) {
        console.log(this.minDate);
        console.log(ev.target.value);
    }
    showEditingFormIncomeDetails(_userObj) {
        this.userIncomeDetailsForm = this.formBuilder.group({
            _id: [_userObj._id || ''],
            incomeSource: [_userObj.incomeSource || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyIncomeAmount: [_userObj.monthlyIncomeAmount || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyIncomeProofDocument: [_userObj.monthlyIncomeProofDocument || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyIncomeStatus: [_userObj.monthlyIncomeStatus || src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            userId: [_userObj.userId || this.userObj._id],
            createdOn: [_userObj.createdOn || ''],
            updatedOn: [_userObj.updatedOn || ''],
            isDeleted: [_userObj.isDeleted || false],
            createdBy: [_userObj.createdBy || ''],
            deletedBy: [_userObj.deletedBy || ''],
            updatedBy: [this.authenticationService.currentUserValue._id || ''],
        });
    }
    showEditingFormExpenseDetails(_userObj) {
        this.userExpenseDetailsForm = this.formBuilder.group({
            _id: [_userObj._id || ''],
            expenseDetails: [_userObj.expenseDetails || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyEMIAmount: [_userObj.monthlyEMIAmount || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyExpenseStartDateTimeCustomised: [_userObj.monthlyExpenseStartDateTimeCustomised || ''],
            monthlyExpensePaymentDateTimeCustomised: [_userObj.monthlyExpensePaymentDateTimeCustomised || ''],
            monthlyExpenseStartDate: [_userObj.monthlyExpenseStartDate || ''],
            monthlyExpensePaymentDate: [_userObj.monthlyExpensePaymentDate || ''],
            monthlyExpenseStatus: [_userObj.monthlyExpenseStatus || src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending],
            userId: [_userObj.userId || this.userObj._id],
            createdOn: [_userObj.createdOn || ''],
            updatedOn: [_userObj.updatedOn || ''],
            isDeleted: [_userObj.isDeleted || false],
            createdBy: [_userObj.createdBy || ''],
            deletedBy: [_userObj.deletedBy || ''],
            updatedBy: [this.authenticationService.currentUserValue._id || ''],
        });
    }
    initForm() {
        this.userIncomeDetailsForm = this.formBuilder.group({
            _id: [''],
            incomeSource: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyIncomeAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyIncomeProofDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyIncomeStatus: [src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            userId: [this.userObj._id],
            createdOn: [''],
            updatedOn: [''],
            isDeleted: [false],
            createdBy: [this.authenticationService.currentUserValue._id || ''],
            deletedBy: [''],
            updatedBy: [''],
        });
        this.userExpenseDetailsForm = this.formBuilder.group({
            _id: [''],
            expenseDetails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyEMIAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            monthlyExpenseStartDateTimeCustomised: [''],
            monthlyExpensePaymentDateTimeCustomised: [''],
            monthlyExpenseStartDate: [''],
            monthlyExpensePaymentDate: [''],
            monthlyExpenseStatus: [src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending],
            userId: [this.userObj._id],
            createdOn: [''],
            updatedOn: [''],
            isDeleted: [false],
            createdBy: [this.authenticationService.currentUserValue._id || ''],
            deletedBy: [''],
            updatedBy: [''],
        });
    }
    onfileProgressForMonthlyIncomeProofDocument(fileInput) {
        this.fileData4MonthlyIncomeProofDocument = fileInput.target.files[0];
        this.previewForMonthlyIncomeProofDocument();
    }
    previewForMonthlyIncomeProofDocument() {
        // Show preview 
        var mimeType = this.fileData4MonthlyIncomeProofDocument.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData4MonthlyIncomeProofDocument);
        reader.onload = (_event) => {
            this.userIncomeDetailsForm.get('monthlyIncomeProofDocument').setValue(reader.result);
            this.fileData4MonthlyIncomeProofDocumentPendingForUpload = true;
        };
    }
    onUploadForMonthlyIncomeProofDocument() {
        if (!this.fileData4MonthlyIncomeProofDocument) {
            this.alertService.error("Select file first.");
            return;
        }
        var mimeType = this.fileData4MonthlyIncomeProofDocument.type;
        if (mimeType.match(/image\/*/) == null) {
            this.alertService.error("Select Image file only.");
            return;
        }
        const formData = new FormData();
        formData.append('files', this.fileData4MonthlyIncomeProofDocument);
        formData.append('documentId', this.userObj._id + '__income_proof');
        this.fileUploadProgress = '0%';
        this.http.post(uploadAPI, formData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(events => {
            if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].UploadProgress) {
                this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                console.log(this.fileUploadProgress);
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].Response) {
                this.fileUploadProgress = '';
                console.log(events.body);
                //alert('SUCCESS !!');
                this.fileData4Profile = null;
                this.alertService.success('Uploaded Successfully !!', true);
                let _uploadedUrl = events.body["data"].path;
                if (lodash__WEBPACK_IMPORTED_MODULE_12__["startsWith"](_uploadedUrl, '/')) {
                    _uploadedUrl = _uploadedUrl.substr(1);
                }
                this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
                this.userIncomeDetailsForm.get('monthlyIncomeProofDocument').setValue(this.uploadedFilePath);
                this.fileData4MonthlyIncomeProofDocumentPendingForUpload = false;
            }
        });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'close', data: true });
    }
    mediaPreviewModel(mediaSrc, mimeType) {
        console.log('411', this.authenticationService.currentUserValue);
        const dialogRef = this.dialog.open(_media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_15__["MediaPreviewComponent"], {
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '70%',
            width: '70%',
            hasBackdrop: true,
            data: {
                mediaSrc: mediaSrc,
                mimeType: mimeType
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`426 :: msc :: Dialog result: ${JSON.stringify(result)}`);
        });
    }
    updateUsersIncomeVerificationStatus(_documentId, _status2update) {
        this.alertService.success("Please wait while we updating status of user");
        this.userService.updateUsersIncomeVerificationStatus(_documentId, _status2update, this.authenticationService.currentUserValue._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                this._cdr.detach();
                let usersObjArr = this.utilityService._.mapKeys(this.allIncomeDetailsData, '_id');
                usersObjArr[data["data"]["_id"]] = data["data"];
                this.allIncomeDetailsData = this.utilityService._.values(usersObjArr);
                this._cdr.detectChanges();
                this.alertService.success(data['message']);
                this.loading = false;
            }
            else {
                this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            //this.PaymentTransactionDetailsArray = [];
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
    updateUsersExpenseVerificationStatus(_documentId, _status2update) {
        this.alertService.success("Please wait while we updating status of user");
        this.userService.updateUsersExpenseVerificationStatus(_documentId, _status2update, this.authenticationService.currentUserValue._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                this._cdr.detach();
                let usersObjArr = this.utilityService._.mapKeys(this.allExpenseDetailsData, '_id');
                usersObjArr[data["data"]["_id"]] = data["data"];
                this.allExpenseDetailsData = this.utilityService._.values(usersObjArr);
                this._cdr.detectChanges();
                this.alertService.success(data['message']);
                this.loading = false;
            }
            else {
                this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            //this.PaymentTransactionDetailsArray = [];
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
IncomeProofComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
IncomeProofComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-income-proof',
        template: _raw_loader_income_proof_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_income_proof_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], IncomeProofComponent);



/***/ }),

/***/ "LHbK":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/lender.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <app-header></app-header>\r\n</div>\r\n\r\n<div class=\"wrapper-outlet\">\r\n    <div class=\"container-fluid  pt-3\">\r\n        <router-outlet ></router-outlet>\r\n    </div>\r\n   \r\n</div>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n\t");

/***/ }),

/***/ "Li+u":
/*!****************************************************!*\
  !*** ./src/app/shared/wallet/wallet.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "MGOQ":
/*!*********************************************************!*\
  !*** ./src/app/shared/sort-array-by-updated-on.pipe.ts ***!
  \*********************************************************/
/*! exports provided: SortArrayByUpdatedOnPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortArrayByUpdatedOnPipe", function() { return SortArrayByUpdatedOnPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let SortArrayByUpdatedOnPipe = class SortArrayByUpdatedOnPipe {
    transform(array, args) {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](array, [args]);
    }
};
SortArrayByUpdatedOnPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sortArrayByUpdatedOn'
    })
], SortArrayByUpdatedOnPipe);



/***/ }),

/***/ "N5mv":
/*!****************************************************************!*\
  !*** ./src/app/shared/bank-details/bank-details.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5rLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "O0JG":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/monthly-subscription/monthly-subscription.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MonthlySubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlySubscriptionComponent", function() { return MonthlySubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_monthly_subscription_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./monthly-subscription.component.html */ "igiJ");
/* harmony import */ var _monthly_subscription_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monthly-subscription.component.css */ "pU54");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/role */ "z56L");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/payment.service */ "s5zK");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");










let MonthlySubscriptionComponent = class MonthlySubscriptionComponent {
    constructor(utilityService, authenticationService, router, payment, alertService) {
        this.utilityService = utilityService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.payment = payment;
        this.alertService = alertService;
        this.userInitiatedForPayment = false;
        this.usersCurrentPlanSubscription = {};
        this.userMemberShipExpireOn = null;
        this.usersNextPlanSubscription = {};
        if (!this.authenticationService.currentUserValue || !this.authenticationService.currentUserValue._id) {
            this.router.navigate(['/logout']);
            return;
        }
        this.initUsersCurrentAppPlanDetails();
    }
    initUsersCurrentAppPlanDetails() {
        this.userMemberShipExpireOn = this.authenticationService.currentUserValue.userMemberShipExpireOn || (this.utilityService.returnEpochDateWithAddingMonths(this.authenticationService.currentUserValue.userVerifiedOn, this.utilityService.AppPlanTypes['trial_plan'].expiryInMonth));
        let appPlanId = this.authenticationService.currentUserValue.appPlanId || 'trial_plan';
        this.usersCurrentPlanSubscription = {
            appPlanId: this.utilityService.AppPlanTypes[appPlanId]._id,
            planAmount: this.utilityService.AppPlanTypes[appPlanId].amount,
            planName: this.utilityService.AppPlanTypes[appPlanId].name,
            userMemberShipExpireOn: this.userMemberShipExpireOn
        };
    }
    ngOnInit() {
    }
    returnPaidPlanAmountUserRoleWise(planAmount = null) {
        if (!planAmount) {
            switch (this.authenticationService.currentUserValue.role) {
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Borrower:
                    planAmount = this.utilityService.AppPlanTypes["paid_plan4borrower"].amount;
                    break;
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Lender:
                    planAmount = this.utilityService.AppPlanTypes["paid_plan4lender"].amount;
                    break;
                default:
                    planAmount = this.utilityService.AppPlanTypes["trial_plan"].amount;
                    break;
            }
        }
        return planAmount;
    }
    userInitiatedForPlanPurchaseOrRenewal(appPlanId = null) {
        if (!this.userInitiatedForPayment) {
            this.userMemberShipExpireOn = this.authenticationService.currentUserValue.userMemberShipExpireOn || (this.utilityService.returnEpochDateWithAddingMonths(this.authenticationService.currentUserValue.userVerifiedOn, this.utilityService.AppPlanTypes['trial_plan'].expiryInMonth));
            if (!appPlanId) {
                switch (this.authenticationService.currentUserValue.role) {
                    case src_app_models_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Borrower:
                        appPlanId = this.utilityService.AppPlanTypes["paid_plan4borrower"]._id;
                        break;
                    case src_app_models_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Lender:
                        appPlanId = this.utilityService.AppPlanTypes["paid_plan4lender"]._id;
                        break;
                    default:
                        appPlanId = this.utilityService.AppPlanTypes["trial_plan"]._id;
                        break;
                }
            }
            this.userMemberShipExpireOn = this.utilityService.returnEpochDateWithAddingMonths(this.userMemberShipExpireOn, this.utilityService.AppPlanTypes[appPlanId].expiryInMonth);
            this.usersNextPlanSubscription = {
                appPlanId: this.utilityService.AppPlanTypes[appPlanId]._id,
                planAmount: this.utilityService.AppPlanTypes[appPlanId].amount,
                planName: this.utilityService.AppPlanTypes[appPlanId].name,
                userMemberShipExpireOn: this.userMemberShipExpireOn
            };
            let _header4Payment = 'Payment for Plan Upgrade - ' + this.utilityService.AppPlanTypes[appPlanId].name;
            let _paymentUniqId = this.authenticationService.currentUserValue._id + '__' + this.utilityService._.now();
            this.initiateForPaymentForLender(this.usersNextPlanSubscription.appPlanId, this.usersNextPlanSubscription.userMemberShipExpireOn, this.authenticationService.currentUserValue._id, this.usersNextPlanSubscription.planAmount, _header4Payment, src_app_models_role__WEBPACK_IMPORTED_MODULE_6__["TransactionActionType"].plan_purchase, null, null, _paymentUniqId);
        }
        else {
            //already inititated for payment
        }
    }
    resetStatusOfPayment() {
        this.userInitiatedForPayment = false;
    }
    initiateForPaymentForLender(_appPlanId, _planExpiry, _endUserId, _amount4Payment, _header4Payment, _transactiActionType, _currency, _selectedPaymentMethod, _paymentUniqId) {
        //#region handle LoanObj payments
        this.userInitiatedForPayment = true;
        this.payment.getCurrentPaymentApproved().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(details => {
        });
        let PaymentObj = {
            transactiActionType: _transactiActionType,
            header4Payment: _header4Payment || null,
            amount4Payment: _amount4Payment || null,
            selectedPaymentMethod: _selectedPaymentMethod || null,
            currency: _currency || null,
            loanId: null,
            loanApplyId: null,
            appPlanId: _appPlanId || null,
            planExpiry: _planExpiry || null,
            paymentUniqId: _paymentUniqId || null,
            userId: _endUserId || null
        };
        this.payment.initPaymentConfigStripe(PaymentObj);
        this.payment.getCurrentPaymentApproved().subscribe(_obj => {
            if (_obj && _obj.success) {
                let userObj = this.authenticationService.currentUserValue;
                userObj.userMemberShipExpireOn = this.usersNextPlanSubscription.userMemberShipExpireOn;
                userObj.appPlanId = this.usersNextPlanSubscription.appPlanId;
                this.authenticationService.sendCurrentUserObj(userObj);
                this.initUsersCurrentAppPlanDetails();
                this.alertService.success("congratulations! 1 month's subscription is purchased successfullly.");
            }
            else {
                this.alertService.error(_obj.message || "Payment failed");
            }
            this.resetStatusOfPayment();
            this.payment.sendCurrentPaymentFailed(true);
        });
        //#endregion handle LoanObj payments
    }
};
MonthlySubscriptionComponent.ctorParameters = () => [
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_8__["PaymentService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
MonthlySubscriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-monthly-subscription',
        template: _raw_loader_monthly_subscription_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_monthly_subscription_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_8__["PaymentService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
], MonthlySubscriptionComponent);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "uJHj");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet/wallet.component */ "KIMC");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages.component */ "rflR");
/* harmony import */ var _meeting_vc_meeting_vc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meeting-vc/meeting-vc.component */ "b39p");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment/payment.component */ "RZ+U");
/* harmony import */ var _sort_array_by_updated_on_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort-array-by-updated-on.pipe */ "MGOQ");
/* harmony import */ var _filter_object_array_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter-object-array.pipe */ "IWWT");
/* harmony import */ var _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./public-profile/public-profile.component */ "bLZ2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _pipe_data_array_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipe/data-array-filter.pipe */ "tFvZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _lender_lender_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lender/lender.component */ "oJqp");
/* harmony import */ var _user_ratings_user_ratings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-ratings/user-ratings.component */ "/d/B");
/* harmony import */ var _session_view_session_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./session-view/session-view.component */ "kqwP");
/* harmony import */ var _pipe_my_sessions_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipe/my-sessions.pipe */ "fm6r");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pipes */ "aEDk");
/* harmony import */ var _profile_portfolio_profile_portfolio_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile-portfolio/profile-portfolio.component */ "hlmN");
/* harmony import */ var _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./update-password/update-password.component */ "YgAS");
/* harmony import */ var _bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bank-details/bank-details.component */ "D+Ly");
/* harmony import */ var _monthly_subscription_monthly_subscription_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./monthly-subscription/monthly-subscription.component */ "O0JG");
/* harmony import */ var _income_proof_income_proof_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./income-proof/income-proof.component */ "KRlv");
/* harmony import */ var _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./payment-success/payment-success.component */ "72sj");
/* harmony import */ var _payment_cancel_payment_cancel_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./payment-cancel/payment-cancel.component */ "XSBl");
/* harmony import */ var _pipe_date_pretty_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipe/date-pretty.pipe */ "peRX");
/* harmony import */ var _media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./media-preview/media-preview.component */ "tZK8");





























/*import { StripeComponentComponent } from './stripe-component/stripe-component.component';*/


let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_6__["WalletComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"], _meeting_vc_meeting_vc_component__WEBPACK_IMPORTED_MODULE_8__["MeetingVcComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"], _sort_array_by_updated_on_pipe__WEBPACK_IMPORTED_MODULE_10__["SortArrayByUpdatedOnPipe"], _filter_object_array_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterObjectArrayPipe"], _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__["PublicProfileComponent"], _pipe_data_array_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["DataArrayFilterPipe"], _lender_lender_component__WEBPACK_IMPORTED_MODULE_17__["ModalPublicProfile"], _user_ratings_user_ratings_component__WEBPACK_IMPORTED_MODULE_18__["UserRatingsComponent"], _session_view_session_view_component__WEBPACK_IMPORTED_MODULE_19__["SessionViewComponent"], _pipe_my_sessions_pipe__WEBPACK_IMPORTED_MODULE_20__["MySessionsPipe"], _profile_portfolio_profile_portfolio_component__WEBPACK_IMPORTED_MODULE_22__["ProfilePortfolioComponent"], _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_23__["UpdatePasswordComponent"], _bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_24__["BankDetailsComponent"], _monthly_subscription_monthly_subscription_component__WEBPACK_IMPORTED_MODULE_25__["MonthlySubscriptionComponent"], _income_proof_income_proof_component__WEBPACK_IMPORTED_MODULE_26__["IncomeProofComponent"], _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_27__["PaymentSuccessComponent"], _payment_cancel_payment_cancel_component__WEBPACK_IMPORTED_MODULE_28__["PaymentCancelComponent"], /*StripeComponentComponent,*/ _pipe_date_pretty_pipe__WEBPACK_IMPORTED_MODULE_29__["DatePrettyPipe"], _pipe_date_pretty_pipe__WEBPACK_IMPORTED_MODULE_29__["DatePrettyPipe"], _media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_30__["MediaPreviewComponent"]],
        exports: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_6__["WalletComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"], _session_view_session_view_component__WEBPACK_IMPORTED_MODULE_19__["SessionViewComponent"], _pipe_my_sessions_pipe__WEBPACK_IMPORTED_MODULE_20__["MySessionsPipe"], _pipe_date_pretty_pipe__WEBPACK_IMPORTED_MODULE_29__["DatePrettyPipe"]],
        imports: [
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_4__["NgxPayPalModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzoneModule"],
            ngx_pipes__WEBPACK_IMPORTED_MODULE_21__["NgPipesModule"]
        ],
        entryComponents: [_lender_lender_component__WEBPACK_IMPORTED_MODULE_17__["ModalPublicProfile"]]
    })
], SharedModule);



/***/ }),

/***/ "RZ+U":
/*!*****************************************************!*\
  !*** ./src/app/shared/payment/payment.component.ts ***!
  \*****************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment.component.html */ "Saae");
/* harmony import */ var _payment_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.component.css */ "SvH9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/payment.service */ "s5zK");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/add-funds.service */ "3gPe");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");









let PaymentComponent = class PaymentComponent {
    constructor(payment, addFundsService, authenticationService) {
        this.payment = payment;
        this.addFundsService = addFundsService;
        this.authenticationService = authenticationService;
        this.header4Payment = 'Insurance Payment';
        this.amount4Payment = 100;
        this.currentPaymentObj = {};
        this.PaymentMethod = src_app_models__WEBPACK_IMPORTED_MODULE_5__["PaymentMethod"];
        this.handler = null;
        this.currency = 'dkk';
        this.loanId = null;
        this.loanApplyId = null;
        this.appPlanId = null;
        this.planExpiry = null;
        this.paymentUniqId = null;
        this.transactiActionType = null;
        this.alreadyClickedOnPayment = false;
        //this.payPalConfig = this.payment.initConfig(null, null, null);
        this.selectedPaymentMethod = src_app_models__WEBPACK_IMPORTED_MODULE_5__["PaymentMethod"].Online;
        window.paymentStatusSentOnServer = false;
    }
    paymentThroughWallet() {
        this.payment.payFromUsersWallet();
    }
    initForPayment() {
        let STRIP_PAYMENT_Publishable_key = "pk_test_TYooMQauvdEDq54NiTphI7jx";
        var stripe = Stripe(STRIP_PAYMENT_Publishable_key);
        this.payment.checkoutPaymentForStripe(stripe, {}).subscribe(data => {
        });
    }
    ngOnInit() {
        this.payment.getCurrentPayPalConfig().subscribe(payPalConfig => {
            this.payPalConfig = payPalConfig;
        });
        this.payment.getCurrentPaymentObj().subscribe(_currentPaymentObj => {
            this.alreadyClickedOnPayment = false;
            this.currentPaymentObj = _currentPaymentObj;
            this.header4Payment = this.currentPaymentObj.header4Payment || 'Insurance Payment';
            this.amount4Payment = this.currentPaymentObj.amount4Payment || 100;
            this.selectedPaymentMethod = this.currentPaymentObj.selectedPaymentMethod || src_app_models__WEBPACK_IMPORTED_MODULE_5__["PaymentMethod"].Online;
            this.currency = this.currentPaymentObj.currency || 'dkk';
            this.loanId = this.currentPaymentObj.loanId || null;
            this.loanApplyId = this.currentPaymentObj.loanApplyId || null;
            this.appPlanId = this.currentPaymentObj.appPlanId || null;
            this.planExpiry = this.currentPaymentObj.planExpiry || null;
            this.paymentUniqId = this.currentPaymentObj.paymentUniqId || null;
            this.transactiActionType = _currentPaymentObj.transactiActionType;
        });
        this.payment.getCurrentPaymentFailed().subscribe(transactionStatus => {
            this.handler.close();
        });
        this.loadStripe();
    }
    pay(amount, event) {
        this.alreadyClickedOnPayment = true;
        this.payment.startTimerInit();
        let paymentObj = {
            isLiveMode: !src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].isPaymentTestMode,
            amount: amount,
            currency: this.currency,
            tokenId: null,
            description: this.header4Payment,
            receipt_email: this.authenticationService.currentUserValue.emailAddress,
            paymentType: this.selectedPaymentMethod || src_app_models__WEBPACK_IMPORTED_MODULE_5__["PaymentMethod"].Online,
            userId: this.authenticationService.currentUserValue._id,
            loanId: this.loanId,
            loanApplyId: this.loanApplyId,
            appPlanId: this.appPlanId,
            planExpiry: this.planExpiry,
            paymentUniqId: this.paymentUniqId,
            transactiActionType: this.transactiActionType,
            apiUrl: this.payment.returnUrChargePaymentForStripel()
        };
        this.handler = window.StripeCheckout.configure({
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].STRIP_PAYMENT_Publishable_key,
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                console.log(token);
                paymentObj.tokenId = token.id;
                window.paymentStatusSentOnServer = true;
                fetch(paymentObj.apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(paymentObj)
                })
                    .then(response => response.json())
                    .then(data => {
                    //paymentData = data;
                    console.log(data);
                });
                /*
                        this.payment.chargePaymentForStripe(paymentObj).subscribe(response => {
                          console.log('85', response);
                        });
                        */
                //alert('Token Created!!');
            },
            opened: function () {
                console.log("Form opened");
            },
            closed: function () {
                if (!window.paymentStatusSentOnServer) {
                    paymentObj.tokenId = null;
                    console.log("Form Terminated");
                    fetch(paymentObj.apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(paymentObj)
                    })
                        .then(response => response.json())
                        .then(data => {
                        //paymentData = data;
                        console.log(data);
                    });
                }
                else {
                    console.log("Form closed");
                }
            }
        });
        this.handler.open({
            name: 'Avitii Lender System',
            description: this.header4Payment,
            amount: amount * 100,
            currency: this.currency,
            email: this.authenticationService.currentUserValue.emailAddress,
            allowRememberMe: false
        });
        event.preventDefault();
    }
    receivedTokenFromStripe() {
    }
    loadStripe() {
        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = () => {
                this.handler = window.StripeCheckout.configure({
                    key: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].STRIP_PAYMENT_Publishable_key,
                    locale: 'auto',
                    token: function (token) {
                        // You can access the token ID with `token.id`.
                        // Get the token ID to your server-side code for use.
                        console.log(token);
                        alert('Payment Success!!');
                    }
                });
            };
            window.document.body.appendChild(s);
        }
    }
};
PaymentComponent.ctorParameters = () => [
    { type: src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] },
    { type: src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_6__["AddFundsService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }
];
PaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment',
        template: _raw_loader_payment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"],
        src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_6__["AddFundsService"],
        src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
], PaymentComponent);

/*
card:
address_city: null
address_country: null
address_line1: null
address_line1_check: null
address_line2: null
address_state: null
address_zip: null
address_zip_check: null
brand: "Visa"
country: "IN"
cvc_check: "unchecked"
dynamic_last4: null
exp_month: 4
exp_year: 2023
funding: "debit"
id: "card_1IYxIAEpOok5VoBkHXs014L4"
last4: "9884"
name: "yogieemahajan@gmail.com"
object: "card"
tokenization_method: null
__proto__: Object
client_ip: "116.72.93.51"
created: 1616694502
email: "yogieemahajan@gmail.com"
id: "tok_1IYxIAEpOok5VoBk7Eucesjw"
livemode: true
object: "token"
type: "card"
used: false
*/
/*
card:
address_city: null
address_country: null
address_line1: null
address_line1_check: null
address_line2: null
address_state: null
address_zip: null
address_zip_check: null
brand: "Visa"
country: "US"
cvc_check: "unchecked"
dynamic_last4: null
exp_month: 12
exp_year: 2022
funding: "credit"
id: "card_1IYx5OFal2nTZ8wwxp9EI3AQ"
last4: "4242"
name: "coavitii123@gmail.com"
object: "card"
tokenization_method: null
__proto__: Object
client_ip: "116.72.93.51"
created: 1616693710
email: "coavitii123@gmail.com"
id: "tok_1IYx5OFal2nTZ8wwWkLpojzS"
livemode: false
object: "token"
type: "card"
used: false
*/ 


/***/ }),

/***/ "Saae":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/payment/payment.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n    --old ref--\r\n<div class=\"custom-control custom-radio custom-control-inline\">\r\n    <input type=\"radio\" class=\"custom-control-input\" id=\"customRadio\" [(ngModel)]=\"selectedPaymentMethod\" name=\"selectedPaymentMethod\" value=\"wallet\">\r\n    <label class=\"custom-control-label\" for=\"customRadio\">Use Wallet</label>\r\n</div>\r\n<div class=\"custom-control custom-radio custom-control-inline\">\r\n    <input type=\"radio\" class=\"custom-control-input\" id=\"customRadio2\" [(ngModel)]=\"selectedPaymentMethod\" name=\"selectedPaymentMethod\" value=\"online\">\r\n    <label class=\"custom-control-label\" for=\"customRadio2\">Pay Now</label>\r\n</div>\r\n<div [ngClass]=\"{ 'd-none': selectedPaymentMethod!=PaymentMethod.Online }\">\r\n    <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\r\n</div>\r\n<div [ngClass]=\"{ 'd-none': selectedPaymentMethod==PaymentMethod.Online }\">\r\n    <button class=\"btn btn-success btn-sm text-white\" [disabled]=\"addFundsService.totalFund4currentUser < payment.amount\" (click)=\"paymentThroughWallet()\">\r\n    Pay Now</button>\r\n</div>\r\n-->\r\n\r\n<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n<!----stripe card payment with redirection ref---->\r\n<!--\r\n<section>\r\n    <div class=\"product\">\r\n        <div class=\"description\">\r\n            <h3>{{header4Payment}}</h3>\r\n            <h5>{{amount4Payment}}</h5>\r\n        </div>\r\n    </div>\r\n    <button type=\"button\" id=\"checkout-button1\" (click)=\"initForPayment()\">Pay</button>\r\n</section>\r\n kr {{amount4Payment}}\r\n-->\r\n<div class=\"payment-backdrop text-center\">\r\n    <br>\r\n    <button [disabled]=\"alreadyClickedOnPayment\" *ngIf=\"!payment.paymentNotCompletedInTime\" (click)=\"pay(amount4Payment, $event)\" class=\"btn btn-success mt-5 btn-lg\">Pay Now  kr {{amount4Payment}}</button>\r\n    <div class=\"mt-4 text-white\">\r\n        Please Do not navigate or refresh page, while payment is in progress\r\n    </div>\r\n    <div class=\"mt-md-n2 mt-3\" *ngIf=\"payment.hours || payment.minutes || payment.seconds\">\r\n        <h4 class=\"text-white\"><div class=\"spinner-border text-success\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div> Session expires in  <i class=\"icon-timer\"></i>&nbsp;{{payment.hours}}:{{payment.minutes}}:{{payment.seconds}}</h4>\r\n    </div>\r\n    <div class=\"mt-3 \" *ngIf=\"!payment.paymentNotCompletedInTime && payment.paymentNotCompletedInTimeErrorMessageShow\">\r\n        <h4 class=\"text-white\">Please complete payment within time limit</h4>\r\n    </div>\r\n    <div class=\" mt-3\" *ngIf=\"payment.paymentNotCompletedInTime\">\r\n        <h4 class=\"text-white\">Time limit for payment is exceeded, please try again later. In case any deduction, will be revert back in 7 working day's, if not please contact support.</h4>\r\n    </div>\r\n</div>\r\n\r\n<!--\r\n<div *ngIf=\"invalidError\" style=\"color:red\">\r\n    {{ invalidError.message }}\r\n</div>\r\n\r\n<stripe-card #stripeCard (catch)=\"onStripeError($event)\" [(complete)]=\"cardDetailsFilledOut\" [(invalid)]=\"invalidError\"\r\n    (cardMounted)=\"cardCaptureReady = 1\" (paymentMethodChange)=\"setPaymentMethod($event)\"\r\n    (tokenChange)=\"setStripeToken($event)\" (sourceChange)=\"setStripeSource($event)\"></stripe-card>\r\n\r\n<button type=\"button\" (click)=\"stripeCard.createPaymentMethod(extraData)\">createPaymentMethod</button>\r\n<button type=\"button\" (click)=\"stripeCard.createSource(extraData)\">createSource</button>\r\n<button type=\"button\" (click)=\"stripeCard.createToken(extraData)\">createToken</button>\r\n-->");

/***/ }),

/***/ "SvH9":
/*!******************************************************!*\
  !*** ./src/app/shared/payment/payment.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".payment-backdrop{\r\n    position: fixed;\r\n    background: rgba(0, 0, 0, 0.95);\r\n    color: #eee;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 999;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0dBQ2IiLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtYmFja2Ryb3B7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTUpO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgIH0iXX0= */");

/***/ }),

/***/ "W4eI":
/*!*********************************************!*\
  !*** ./node_modules/speak-tts/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = exports.isObject = exports.isNil = exports.isNan = exports.size = exports.isString = exports.validateLocale = exports.splitSentences = void 0;

var splitSentences = function splitSentences() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return text.replace(/\.+/g, '.|').replace(/\?/g, '?|').replace(/\!/g, '!|').split("|").map(function (sentence) {
    return trim(sentence);
  }).filter(Boolean);
};

exports.splitSentences = splitSentences;
var bcp47LocalePattern = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i; // eslint-disable-line max-len

/**
 * Validate a locale string to test if it is bcp47 compliant
 * @param {String} locale The tag locale to parse
 * @return {Boolean} True if tag is bcp47 compliant false otherwise
 */

var validateLocale = function validateLocale(locale) {
  return typeof locale !== 'string' ? false : bcp47LocalePattern.test(locale);
};

exports.validateLocale = validateLocale;

var isString = function isString(value) {
  return typeof value === 'string' || value instanceof String;
};

exports.isString = isString;

var size = function size(value) {
  return value && Array.isArray(value) && value.length ? value.length : 0;
};

exports.size = size;

var isNan = function isNan(value) {
  return typeof value === "number" && isNaN(value);
};

exports.isNan = isNan;

var isNil = function isNil(value) {
  return value === null || value === undefined;
};

exports.isNil = isNil;

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

exports.isObject = isObject;

var trim = function trim(value) {
  return isString(value) ? value.trim() : '';
};

exports.trim = trim;

/***/ }),

/***/ "W6dE":
/*!********************************************************!*\
  !*** ./src/app/shared/messages/messages.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/* .wrap_send_input{\r\n  background: #eeeeee;\r\n} */\r\n  /* #sidepanel p {\r\n    color: #ffffff;\r\n} */\r\n  .contact-profile .name{\r\n  width: 72%;\r\ndisplay: inline-block;\r\nline-height: initial;\r\ntext-overflow: ellipsis;\r\n}\r\n  #frame {\r\n    height: 100vh;\r\n    min-height: 300px;\r\n    max-height: 720px;\r\n    /* background: #E6EAEA; */\r\n  }\r\n  #frame #sidepanel {\r\n    float: left;\r\n    min-width: 280px;\r\n    max-width: 340px;\r\n    width: 40%;\r\n    height: 100%;\r\n    /* background: #2c3e50; */\r\n    /* color: #f5f5f5; */\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel {\r\n      /* width: 58px;\r\n      min-width: 58px; */\r\n      width: 100%;\r\n      min-width: 58px;\r\n      max-width: 100%;\r\n    }\r\n    .message_frame{\r\n      position: fixed;\r\n      width: 100%;\r\n   \r\n      top: 53.016px;\r\n      left: 0;\r\n    height: calc(100% - 53.016px) !important;\r\n  }\r\n    \r\n\r\n  }\r\n  #frame #sidepanel #profile {\r\n    width: 90%;\r\n    margin: 10px 0;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile {\r\n      width: 100%;\r\n      margin: 0 auto;\r\n      padding: 5px 0 0 0;\r\n      background: #32465a;\r\n      display: none;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile.expanded .wrap {\r\n    height: 210px;\r\n    line-height: initial;\r\n  }\r\n  #frame #sidepanel #profile.expanded .wrap p {\r\n    margin-top: 20px;\r\n  }\r\n  #frame #sidepanel #profile.expanded .wrap i.expand-button {\r\n    transform: scaleY(-1);\r\n    filter: FlipH;\r\n    -ms-filter: \"FlipH\";\r\n  }\r\n  #frame #sidepanel #profile .wrap {\r\n    height: 60px;\r\n    line-height: 60px;\r\n    overflow: hidden;\r\n    transition: 0.3s height ease;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap {\r\n      height: 55px;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap img {\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    padding: 3px;\r\n    border: 2px solid #e74c3c;\r\n    height: auto;\r\n    float: left;\r\n    cursor: pointer;\r\n    transition: 0.3s border ease;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap img {\r\n      width: 40px;\r\n      margin-left: 8px;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap img.online {\r\n    border: 2px solid #2ecc71;\r\n  }\r\n  #frame #sidepanel #profile .wrap img.away {\r\n    border: 2px solid #f1c40f;\r\n  }\r\n  #frame #sidepanel #profile .wrap img.busy {\r\n    border: 2px solid #e74c3c;\r\n  }\r\n  #frame #sidepanel #profile .wrap img.offline {\r\n    border: 2px solid #95a5a6;\r\n  }\r\n  #frame #sidepanel #profile .wrap p {\r\n    float: left;\r\n    margin-left: 15px;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap p {\r\n      /* display: none; */\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap i.expand-button {\r\n    float: right;\r\n    margin-top: 23px;\r\n    font-size: 0.8em;\r\n    cursor: pointer;\r\n    color: #435f7a;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap i.expand-button {\r\n      display: none;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options {\r\n    position: absolute;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    width: 150px;\r\n    margin: 70px 0 0 0;\r\n    border-radius: 6px;\r\n    z-index: 99;\r\n    line-height: initial;\r\n    background: #435f7a;\r\n    transition: 0.3s all ease;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap #status-options {\r\n      width: 58px;\r\n      margin-top: 57px;\r\n      \r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options.active {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    margin: 75px 0 0 0;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap #status-options.active {\r\n      margin-top: 62px;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 6px solid transparent;\r\n    border-right: 6px solid transparent;\r\n    border-bottom: 8px solid #435f7a;\r\n    margin: -8px 0 0 24px;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap #status-options:before {\r\n      margin-left: 23px;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul {\r\n    overflow: hidden;\r\n    border-radius: 6px;\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li {\r\n    padding: 15px 0 30px 18px;\r\n    display: block;\r\n    cursor: pointer;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap #status-options ul li {\r\n      padding: 15px 0 35px 22px;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li:hover {\r\n    background: #496886;\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    margin: 5px 0 0 0;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n      width: 14px;\r\n      height: 14px;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 14px;\r\n    height: 14px;\r\n    margin: -3px 0 0 -3px;\r\n    background: transparent;\r\n    border-radius: 50%;\r\n    z-index: 0;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n      height: 18px;\r\n      width: 18px;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li p {\r\n    padding-left: 12px;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #profile .wrap #status-options ul li p {\r\n      display: none;\r\n    }\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle {\r\n    background: #2ecc71;\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before {\r\n    border: 1px solid #2ecc71;\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle {\r\n    background: #f1c40f;\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before {\r\n    border: 1px solid #f1c40f;\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle {\r\n    background: #e74c3c;\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before {\r\n    border: 1px solid #e74c3c;\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle {\r\n    background: #95a5a6;\r\n  }\r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before {\r\n    border: 1px solid #95a5a6;\r\n  }\r\n  #frame #sidepanel #profile .wrap #expanded {\r\n    padding: 100px 0 0 0;\r\n    display: block;\r\n    line-height: initial !important;\r\n  }\r\n  #frame #sidepanel #profile .wrap #expanded label {\r\n    float: left;\r\n    clear: both;\r\n    margin: 0 8px 5px 0;\r\n    padding: 5px 0;\r\n  }\r\n  #frame #sidepanel #profile .wrap #expanded input {\r\n    border: none;\r\n    margin-bottom: 6px;\r\n    background: #32465a;\r\n    border-radius: 3px;\r\n    color: #f5f5f5;\r\n    padding: 7px;\r\n    width: calc(100% - 43px);\r\n  }\r\n  #frame #sidepanel #profile .wrap #expanded input:focus {\r\n    outline: none;\r\n    background: #435f7a;\r\n  }\r\n  #frame #sidepanel #search {\r\n    border-top: 1px solid #32465a;\r\n    border-bottom: 1px solid #32465a;\r\n    font-weight: 300;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #search {\r\n      /* display: none; */\r\n    }\r\n  }\r\n  #frame #sidepanel #search label {\r\n    position: absolute;\r\n    margin: 10px 0 0 20px;\r\n  }\r\n  #frame #sidepanel #search input {\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n    padding: 10px 0 10px 46px;\r\n    width: calc(100% - 0px);\r\n    border: none;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n  }\r\n  #frame #sidepanel #search input:focus {\r\n    outline: none;\r\n    background: #435f7a;\r\n  }\r\n  #frame #sidepanel #search input::-webkit-input-placeholder {\r\n    color: #f5f5f5;\r\n  }\r\n  #frame #sidepanel #search input::-moz-placeholder {\r\n    color: #f5f5f5;\r\n  }\r\n  #frame #sidepanel #search input:-ms-input-placeholder {\r\n    color: #f5f5f5;\r\n  }\r\n  #frame #sidepanel #search input:-moz-placeholder {\r\n    color: #f5f5f5;\r\n  }\r\n  #frame #sidepanel #contacts {\r\n    /* height: calc(100% - 177px); */\r\n    height: 92%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    border-right: 1px solid #c9e6ff;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #contacts {\r\n      height: calc(100% - 45px);\r\n      overflow-y: scroll;\r\n      overflow-x: hidden;\r\n    }\r\n    #frame #sidepanel #contacts::-webkit-scrollbar {\r\n      display: none;\r\n    }\r\n  }\r\n  #frame #sidepanel #contacts.expanded {\r\n    height: calc(100% - 334px);\r\n  }\r\n  #frame #sidepanel #contacts::-webkit-scrollbar {\r\n    width: 8px;\r\n    background: #2c3e50;\r\n  }\r\n  #frame #sidepanel #contacts::-webkit-scrollbar-thumb {\r\n    background-color: #243140;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact {\r\n    position: relative;\r\n    padding: 10px 0 15px 0;\r\n    font-size: 0.9em;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    background: #f5f5f5;\r\n    margin-bottom: 10px;\r\n    border-radius: 15px;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #contacts ul li.contact {\r\n      /* padding: 6px 0 46px 8px; */\r\n      padding: 14px 12px;\r\n      border-bottom: 1px solid #494b61;\r\n      margin-left: 10px;\r\n    border: 1px solid #545454;\r\n    }\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact:hover {\r\n    background: #eeeeee;\r\n    border-radius: 15px;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact.active {\r\n    background: #c8e6c9;\r\n    border-right: 5px solid #66bb6a;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact.active span.contact-status {\r\n    border: 2px solid #32465a !important;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap {\r\n    width: 88%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #contacts ul li.contact .wrap {\r\n      width: 100%;\r\n    }\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap span {\r\n    position: absolute;\r\n    left: 0;\r\n    margin: -2px 0 0 -2px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #2c3e50;\r\n    background: #95a5a6;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap span.online {\r\n    background: #2ecc71;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap span.away {\r\n    background: #f1c40f;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap span.busy {\r\n    background: #e74c3c;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap img {\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin-right: 10px;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #contacts ul li.contact .wrap img {\r\n      margin-right: 12px;\r\n    }\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n    padding: 2px 0 0 2px;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n      /* display: none; */\r\n    }\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta .name {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\r\n    margin: 5px 0 0 0;\r\n    padding: 0 0 1px;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    transition: 1s all ease;\r\n  }\r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\r\n    position: initial;\r\n    border-radius: initial;\r\n    background: none;\r\n    border: none;\r\n    padding: 0 2px 0 0;\r\n    margin: 0 0 0 1px;\r\n    opacity: .5;\r\n  }\r\n  #frame #sidepanel #bottom-bar {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n  }\r\n  #frame #sidepanel #bottom-bar button {\r\n    float: left;\r\n    border: none;\r\n    width: 50%;\r\n    padding: 10px 0;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n    cursor: pointer;\r\n    font-size: 0.85em;\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #bottom-bar button {\r\n      float: none;\r\n      width: 100%;\r\n      padding: 15px 0;\r\n    }\r\n  }\r\n  #frame #sidepanel #bottom-bar button:focus {\r\n    outline: none;\r\n  }\r\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\r\n    border-right: 1px solid #2c3e50;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #bottom-bar button:nth-child(1) {\r\n      border-right: none;\r\n      border-bottom: 1px solid #2c3e50;\r\n    }\r\n  }\r\n  #frame #sidepanel #bottom-bar button:hover {\r\n    background: #435f7a;\r\n  }\r\n  #frame #sidepanel #bottom-bar button i {\r\n    margin-right: 3px;\r\n    font-size: 1em;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #bottom-bar button i {\r\n      font-size: 1.3em;\r\n    }\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame #sidepanel #bottom-bar button span {\r\n      /* display: none; */\r\n    }\r\n  }\r\n  #frame .content {\r\n    float: right;\r\n    width: 60%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame .content {\r\n      width: calc(100% - 0px);\r\n      min-width: 300px !important;\r\n    }\r\n    .contact-profile img{\r\n      display: none;\r\n    }\r\n    .contact-profile i\r\n    {\r\n      width: 35px;\r\n      margin: 20px 0px 0 10px;\r\n      font-size: 20px;\r\n  \r\n    }\r\n    .contact-profile i.icon-arrow-left\r\n    {\r\n      display: block;\r\n    }\r\n   \r\n  }\r\n  @media screen and (min-width: 900px) {\r\n    #frame .content {\r\n      width: calc(100% - 340px);\r\n    }\r\n  }\r\n  #frame .content .contact-profile {\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    background: #f5f5f5;\r\n  }\r\n  #frame .content .contact-profile img {\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin: 9px 12px 0 9px;\r\n  }\r\n  #frame .content .contact-profile p {\r\n    float: left;\r\n  }\r\n  #frame .content .contact-profile .social-media {\r\n    float: right;\r\n  }\r\n  #frame .content .contact-profile .social-media i {\r\n    margin-left: 14px;\r\n    cursor: pointer;\r\n  }\r\n  #frame .content .contact-profile .social-media i:nth-last-child(1) {\r\n    margin-right: 20px;\r\n  }\r\n  #frame .content .contact-profile .social-media i:hover {\r\n    color: #435f7a;\r\n  }\r\n  #frame .content .messages {\r\n    height: auto;\r\n    min-height: calc(100% - 115px);\r\n    max-height: calc(100% - 115px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    width: 100%;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame .content .messages {\r\n      max-height: calc(100% - 105px);\r\n    }\r\n  }\r\n  #frame .content .messages::-webkit-scrollbar {\r\n    width: 8px;\r\n    background: transparent;\r\n  }\r\n  #frame .content .messages::-webkit-scrollbar-thumb {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n  }\r\n  #frame .content .messages ul li {\r\n    display: inline-block;\r\n    clear: both;\r\n    float: left;\r\n    margin: 15px 15px 5px 15px;\r\n    width: calc(100% - 25px);\r\n    font-size: 0.9em;\r\n    font-weight: normal;\r\n  }\r\n  #frame .content .messages ul li:nth-last-child(1) {\r\n    margin-bottom: 20px;\r\n  }\r\n  #frame .content .messages ul li.sent img {\r\n    margin: 6px 8px 0 0;\r\n  }\r\n  #frame .content .messages ul li.sent p {\r\n    background: #435f7a;\r\n    color: #f5f5f5;\r\n  }\r\n  #frame .content .messages ul li.replies img {\r\n    float: right;\r\n    margin: 6px 0 0 8px;\r\n  }\r\n  #frame .content .messages ul li.replies p {\r\n    background: #f5f5f5;\r\n    float: right;\r\n  }\r\n  #frame .content .messages ul li img {\r\n    width: 22px;\r\n    border-radius: 50%;\r\n    float: left;\r\n  }\r\n  #frame .content .messages ul li p {\r\n    display: inline-block;\r\n    padding: 10px 15px;\r\n    border-radius: 20px;\r\n    max-width: 70%;\r\n    line-height: 130%;\r\n  }\r\n  @media screen and (min-width: 767.98) {\r\n    #frame .content .messages ul li p {\r\n      max-width: 300px;\r\n    }\r\n   \r\n  }\r\n  #frame .content .message-input {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    z-index: 99;\r\n  }\r\n  #frame .content .message-input .wrap {\r\n    position: relative;\r\n  }\r\n  #frame .content .message-input .wrap input {\r\n   float: left;\r\n    border: none;\r\n    width: calc(100% - 90px);\r\n    padding: 14px 32px 14px 8px;\r\n    font-size: 0.8em;\r\n    color: #32465a;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame .content .message-input .wrap input {\r\n      padding: 15px 32px 16px 8px;\r\n    }\r\n  }\r\n  #frame .content .message-input .wrap input:focus {\r\n    outline: none;\r\n  }\r\n  #frame .content .message-input .wrap .attachment {\r\n    position: absolute;\r\n    right: 65px;\r\n    z-index: 4;\r\n    margin-top: 17px;\r\n    font-size: 1.1em;\r\n    color: #435f7a;\r\n    /* opacity: .5; */\r\n    cursor: pointer;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame .content .message-input .wrap .attachment {\r\n      margin-top: 17px;\r\n      right: 65px;\r\n    }\r\n  }\r\n  #frame .content .message-input .wrap .attachment:hover {\r\n    opacity: 1;\r\n  }\r\n  #frame .content .message-input .wrap button {\r\n    float: right;\r\n    border: none;\r\n    width: 50px;\r\n    padding: 12px 0;\r\n    cursor: pointer;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n  }\r\n  @media screen and (max-width: 767.98px) {\r\n    #frame .content .message-input .wrap button {\r\n      padding: 16px 0;\r\n    }\r\n  }\r\n  #frame .content .message-input .wrap button:hover {\r\n    background: #435f7a;\r\n  }\r\n  #frame .content .message-input .wrap button:focus {\r\n    outline: none;\r\n  }\r\n  .avittiNone{\r\n    display: none !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztHQUVHO0VBQ0Q7O0dBRUM7RUFDSDtFQUNFLFVBQVU7QUFDWixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2QjtFQUVFO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0U7TUFDRTt3QkFDa0I7TUFDbEIsV0FBVztNQUNYLGVBQWU7TUFDZixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxlQUFlO01BQ2YsV0FBVzs7TUFFWCxhQUFhO01BQ2IsT0FBTztJQUlULHdDQUF3QztFQUMxQzs7O0VBR0E7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0VBQ0E7SUFDRTtNQUNFLFdBQVc7TUFDWCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixhQUFhO0lBQ2Y7RUFDRjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFJRSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFJaEIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRTtNQUNFLFlBQVk7SUFDZDtFQUNGO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBSWYsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRTtNQUNFLFdBQVc7TUFDWCxnQkFBZ0I7SUFDbEI7RUFDRjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7RUFDRjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFJbkIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRTtNQUNFLFdBQVc7TUFDWCxnQkFBZ0I7O0lBRWxCO0VBQ0Y7RUFDQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRTtNQUNFLGlCQUFpQjtJQUNuQjtFQUNGO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTtJQUNFO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsWUFBWTtJQUNkO0VBQ0Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7RUFDQTtJQUNFO01BQ0UsWUFBWTtNQUNaLFdBQVc7SUFDYjtFQUNGO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsMkRBQTJEO0lBQzNELHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRTtNQUNFLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7RUFDRjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFO01BQ0UsNkJBQTZCO01BQzdCLGtCQUFrQjtNQUNsQixnQ0FBZ0M7TUFDaEMsaUJBQWlCO0lBQ25CLHlCQUF5QjtJQUN6QjtFQUNGO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRTtNQUNFLFdBQVc7SUFDYjtFQUNGO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFO01BQ0Usa0JBQWtCO0lBQ3BCO0VBQ0Y7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBSXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyREFBMkQ7RUFDN0Q7RUFDQTtJQUNFO01BQ0UsV0FBVztNQUNYLFdBQVc7TUFDWCxlQUFlO0lBQ2pCO0VBQ0Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixnQ0FBZ0M7SUFDbEM7RUFDRjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjtFQUNBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0U7TUFDRSx1QkFBdUI7TUFDdkIsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7SUFDQTs7TUFFRSxXQUFXO01BQ1gsdUJBQXVCO01BQ3ZCLGVBQWU7O0lBRWpCO0lBQ0E7O01BRUUsY0FBYztJQUNoQjs7RUFFRjtFQUNBO0lBQ0U7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUNBO0lBQ0U7TUFDRSw4QkFBOEI7SUFDaEM7RUFDRjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCOztFQUVGO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0dBQ0MsV0FBVztJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRTtNQUNFLGdCQUFnQjtNQUNoQixXQUFXO0lBQ2I7RUFDRjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFHQTtJQUNFLHdCQUF3QjtFQUMxQiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIC53cmFwX3NlbmRfaW5wdXR7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxufSAqL1xyXG4gIC8qICNzaWRlcGFuZWwgcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufSAqL1xyXG4uY29udGFjdC1wcm9maWxlIC5uYW1le1xyXG4gIHdpZHRoOiA3MiU7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbnRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4gICNmcmFtZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MjBweDtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNFNkVBRUE7ICovXHJcbiAgfVxyXG4gXHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMmMzZTUwOyAqL1xyXG4gICAgLyogY29sb3I6ICNmNWY1ZjU7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwge1xyXG4gICAgICAvKiB3aWR0aDogNThweDtcclxuICAgICAgbWluLXdpZHRoOiA1OHB4OyAqL1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiA1OHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZV9mcmFtZXtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbiAgICAgIHRvcDogNTMuMDE2cHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgXHJcbiAgICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gNTMuMDE2cHgpO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDUzLjAxNnB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTMuMDE2cHgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICAgXHJcblxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZzogNXB4IDAgMCAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCB7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlLmV4cGFuZGVkIC53cmFwIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUuZXhwYW5kZWQgLndyYXAgaS5leHBhbmQtYnV0dG9uIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgICBmaWx0ZXI6IEZsaXBIO1xyXG4gICAgLW1zLWZpbHRlcjogXCJGbGlwSFwiO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBoZWlnaHQgZWFzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHtcclxuICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcub25saW5lIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5hd2F5IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWM0MGY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5idXN5IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNzRjM2M7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5vZmZsaW5lIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5NWE1YTY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xyXG4gICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpLmV4cGFuZC1idXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzQzNWY3YTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGkuZXhwYW5kLWJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiA3MHB4IDAgMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB7XHJcbiAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1N3B4O1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zLmFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG1hcmdpbjogNzVweCAwIDAgMDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucy5hY3RpdmUge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2MnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnM6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzQzNWY3YTtcclxuICAgIG1hcmdpbjogLThweCAwIDAgMjRweDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9uczpiZWZvcmUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjNweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMzBweCAxOHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMzVweCAyMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzQ5Njg4NjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHNwYW4uc3RhdHVzLWNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogNXB4IDAgMCAwO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHNwYW4uc3RhdHVzLWNpcmNsZSB7XHJcbiAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlOmJlZm9yZSB7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBwIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vbmxpbmUgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZWNjNzE7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb25saW5lLmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZWNjNzE7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtYXdheSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogI2YxYzQwZjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1hd2F5LmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWM0MGY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtYnVzeSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1idXN5LmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNzRjM2M7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb2ZmbGluZSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogIzk1YTVhNjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vZmZsaW5lLmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NWE1YTY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCB7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwIDAgMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGxhYmVsIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDVweCAwO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDNweCk7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzQzNWY3YTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMyNDY1YTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzI0NjVhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2gge1xyXG4gICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMTBweCAwIDAgMjBweDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCA0NnB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XHJcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE3N3B4KTsgKi9cclxuICAgIGhlaWdodDogOTIlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjOWU2ZmY7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ1cHgpO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMuZXhwYW5kZWQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMzRweCk7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICMyYzNlNTA7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MzE0MDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDE1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCB7XHJcbiAgICAgIC8qIHBhZGRpbmc6IDZweCAwIDQ2cHggOHB4OyAqL1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDk0YjYxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NDU0NTQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2M4ZTZjOTtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM2NmJiNmE7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0LmFjdGl2ZSBzcGFuLmNvbnRhY3Qtc3RhdHVzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ2NWEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAge1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAtMnB4IDAgMCAtMnB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmMzZTUwO1xyXG4gICAgYmFja2dyb3VuZDogIzk1YTVhNjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5vbmxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogIzJlY2M3MTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5hd2F5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWM0MGY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHNwYW4uYnVzeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIGltZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgLm1ldGEge1xyXG4gICAgcGFkZGluZzogMnB4IDAgMCAycHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XHJcbiAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5wcmV2aWV3IHtcclxuICAgIG1hcmdpbjogNXB4IDAgMCAwO1xyXG4gICAgcGFkZGluZzogMCAwIDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAucHJldmlldyBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDJweCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAwIDFweDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsICBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyYzNlNTA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24gaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24gc3BhbiB7XHJcbiAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICNmcmFtZSAuY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xyXG4gICAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1wcm9maWxlIGltZ3tcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXByb2ZpbGUgaVxyXG4gICAge1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgbWFyZ2luOiAyMHB4IDBweCAwIDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICBcclxuICAgIH1cclxuICAgIC5jb250YWN0LXByb2ZpbGUgaS5pY29uLWFycm93LWxlZnRcclxuICAgIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgIFxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM0MHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiA5cHggMTJweCAwIDlweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIC5zb2NpYWwtbWVkaWEgaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDM1ZjdhO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDExNXB4KTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDExNXB4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwNXB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4IDVweCAxNXB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGk6bnRoLWxhc3QtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5zZW50IGltZyB7XHJcbiAgICBtYXJnaW46IDZweCA4cHggMCAwO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnNlbnQgcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkucmVwbGllcyBpbWcge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiA2cHggMCAwIDhweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5yZXBsaWVzIHAge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBpbWcge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjcuOTgpIHtcclxuICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgcCB7XHJcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0IHtcclxuICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDMycHggMTRweCA4cHg7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6ICMzMjQ2NWE7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgaW5wdXQge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDMycHggMTZweCA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgLmF0dGFjaG1lbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDY1cHg7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBjb2xvcjogIzQzNWY3YTtcclxuICAgIC8qIG9wYWNpdHk6IC41OyAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIC5hdHRhY2htZW50IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgICAgcmlnaHQ6IDY1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCAuYXR0YWNobWVudDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzMyNDY1YTtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuYXZpdHRpTm9uZXtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9Il19 */");

/***/ }),

/***/ "XAw8":
/*!********************************************************************!*\
  !*** ./src/app/shared/payment-cancel/payment-cancel.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWNhbmNlbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "XSBl":
/*!*******************************************************************!*\
  !*** ./src/app/shared/payment-cancel/payment-cancel.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCancelComponent", function() { return PaymentCancelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_cancel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-cancel.component.html */ "losK");
/* harmony import */ var _payment_cancel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-cancel.component.css */ "XAw8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PaymentCancelComponent = class PaymentCancelComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaymentCancelComponent.ctorParameters = () => [];
PaymentCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment-cancel',
        template: _raw_loader_payment_cancel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_cancel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PaymentCancelComponent);



/***/ }),

/***/ "Xbsl":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/media-preview/media-preview.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <i class=\"icon-close float-right\" mat-button mat-dialog-close></i>\r\n    </div>\r\n</div>\r\n<div class=\"row\" [ngSwitch]=\"mimeType\">\r\n    <!-- the same view can be shown in more than one case -->\r\n    <div class=\"col-xl-12\" *ngSwitchCase=\"MediaTypes.video\">\r\n    </div>\r\n    <div class=\"col-xl-12\" *ngSwitchCase=\"MediaTypes.audio\">\r\n    </div>\r\n    <div class=\"col-xl-12\" *ngSwitchCase=\"MediaTypes.image\">\r\n        <img class=\"img-fluid\" [src]=\"mediaSrc\" width=\"90%\" height=\"90%\" />\r\n    </div>\r\n    <div class=\"col-xl-12\" *ngSwitchDefault>\r\n        <img class=\"img-fluid\" [src]=\"mediaSrc\" width=\"90%\" height=\"90%\" />\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Xwua":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/income-proof/income-proof.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div id=\"accordion_userIncomeDetailsForm\">\r\n            <div class=\"card shadow mb-4\">\r\n                <div class=\"card-header py-3 flex-row align-items-center justify-content-between\">\r\n                    <a class=\"collapsed card-link\" data-toggle=\"collapse\"\r\n                        [attr.href]=\"'#collapse_userIncomeDetailsForm'\" i18n>\r\n                        <h6 class=\"m-0 font-weight-bold text-primary\">\r\n                            Update {{adminViewT?userObj.firstName+'`s':'Your'}} Income Details\r\n                            <span class=\"float-right\" [ngClass]=\"{ 'text-success': userObj.totalAllowedBudget, 'text-danger': !userObj.totalAllowedBudget }\">\r\n                                &nbsp;{{userObj.totalAllowedBudget}}&nbsp;\r\n                            </span>\r\n                            <span class=\"float-right\">\r\n                                &nbsp;{{userObj.totalIncome4currentUser || 0 }}&nbsp;-&nbsp;{{userObj.totalExpense4currentUser || 0}}&nbsp;=&nbsp;\r\n                            </span>\r\n                        </h6>\r\n                    </a>\r\n                    <i *ngIf=\"isOpenedInModel\" class=\"icon-close float-right\" mat-button mat-dialog-close></i>\r\n                </div>\r\n                <div [attr.id]=\"'collapse_userIncomeDetailsForm'\" class=\"collapse show\"\r\n                    data-parent=\"#accordion_userIncomeDetailsForm\">\r\n                    <div class=\"card-body\">\r\n\r\n                        <form [formGroup]=\"userIncomeDetailsForm\">\r\n                            <div class=\"row mb-3\" *ngIf=\"!adminViewT\">\r\n                                <div class=\"col-xl-12 mb-3\">\r\n                                    Update your mothly income proof for the verification. be careful with your income\r\n                                    proof\r\n                                    uploads as you cannot change your monthly income proof once uploaded.\r\n                                </div>\r\n                                <div class=\"col-xl-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"incomeSource\">Income Source</label>\r\n                                        <input type=\"text\" formControlName=\"incomeSource\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submittedIncomeDetails && f.incomeSource.errors }\"\r\n                                            placeholder=\"e.g. salaried, business, stocks etc\" />\r\n                                        <div *ngIf=\"submittedIncomeDetails && f.incomeSource.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.incomeSource.errors.required\">Income Source is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"monthlyIncomeAmount\">Monthly Income in kr</label>\r\n                                        <input type=\"number\" formControlName=\"monthlyIncomeAmount\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submittedIncomeDetails && f.monthlyIncomeAmount.errors }\" />\r\n                                        <div *ngIf=\"submittedIncomeDetails && f.monthlyIncomeAmount.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.monthlyIncomeAmount.errors.required\">Monthly Income is\r\n                                                required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"monthlyIncomeProofDocument\">Upload proof</label>\r\n                                        <!--\r\n                                        <input type=\"file\" class=\"form-control\" id=\"monthlyIncomeProofDocument\"\r\n                                            (change)=\"onfileProgressForMonthlyIncomeProofDocument($event)\">\r\n                                        -->\r\n\r\n                                        <img *ngIf=\"f.monthlyIncomeProofDocument.value\"\r\n                                            [src]=\"f.monthlyIncomeProofDocument.value\" class=\"border img-fluid mb-3\"\r\n                                            height=\"50\" width=\"50\" />\r\n\r\n                                        <input *ngIf=\"!fileData4MonthlyIncomeProofDocumentPendingForUpload\"\r\n                                            id=\"ctrlUploadmonthlyIncomeProofDocument\" type=\"file\" name=\"image\"\r\n                                            accept=\"image/*\"\r\n                                            (change)=\"onfileProgressForMonthlyIncomeProofDocument($event)\">\r\n                                        <i *ngIf=\"fileData4MonthlyIncomeProofDocumentPendingForUpload\"\r\n                                            class=\"icon-upload m-2 cursor-pointer text-success\"\r\n                                            (click)=\"onUploadForMonthlyIncomeProofDocument()\">\r\n                                            Upload\r\n                                        </i>\r\n                                        <div *ngIf=\"submittedIncomeDetails && f.monthlyIncomeProofDocument.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.monthlyIncomeProofDocument.errors.required\">Monthly Income\r\n                                                Proof is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12\">\r\n                                    <button class=\"btn btn-success btn-sm float-right\"\r\n                                        (click)=\"onUserIncomeDetailsUpdateSubmit()\"><i class=\"icon icon-plus\"></i>\r\n                                        ADD</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        <div class=\"table-responsive table-billing-history\">\r\n                            <table class=\"table mb-0\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\">Type</th>\r\n                                        <th scope=\"col\">Monthly Income</th>\r\n                                        <th scope=\"col\">Status</th>\r\n                                        <th scope=\"col\">Preview</th>\r\n                                        <th *ngIf=\"adminViewT\" scope=\"col\">#</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let obj2show of allIncomeDetailsData\">\r\n                                        <td>{{obj2show.incomeSource}}</td>\r\n                                        <td>{{obj2show.monthlyIncomeAmount}}</td>\r\n                                        <td class=\"text-capitalize text-cap\">\r\n                                            <span class=\"badge\"\r\n                                                [ngClass]=\"{'badge-success': (obj2show.monthlyIncomeStatus==SessionStatus.Approved || obj2show.monthlyIncomeStatus==SessionStatus.Accepted || obj2show.monthlyIncomeStatus==SessionStatus.Active || obj2show.monthlyIncomeStatus==SessionStatus.Completed || obj2show.monthlyIncomeStatus==SessionStatus.OngoingInitiated  || obj2show.monthlyIncomeStatus==SessionStatus.OngoingAccepted  || obj2show.monthlyIncomeStatus==SessionStatus.Ongoing), 'badge-danger': (obj2show.monthlyIncomeStatus==SessionStatus.Rejected || obj2show.monthlyIncomeStatus==SessionStatus.RejectedOngoing || obj2show.monthlyIncomeStatus==SessionStatus.Suspended), 'badge-info': ( obj2show.monthlyIncomeStatus==null || obj2show.monthlyIncomeStatus=='' || obj2show.monthlyIncomeStatus==SessionStatus.Pending)}\">\r\n                                                {{obj2show.monthlyIncomeStatus}}\r\n                                            </span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <label title=\"Preview\"\r\n                                                (click)=\"mediaPreviewModel(obj2show.monthlyIncomeProofDocument, 'image')\">\r\n                                                <i class=\"icon-eye m-2 text-success\"></i>\r\n                                            </label>\r\n                                        </td>\r\n                                        <td *ngIf=\"adminViewT\">\r\n                                            <div [ngSwitch]=\"obj2show.monthlyIncomeStatus\">\r\n                                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Pending\">\r\n                                                    <button title=\"Approve\" class=\"btn btn-link btn-sm\"\r\n                                                        (click)=\"updateUsersIncomeVerificationStatus(obj2show._id, SessionStatus.Approved)\">\r\n                                                        <i class=\"icon-check m-2 text-success\"></i>\r\n                                                    </button>\r\n                                                    <button title=\"Reject\" class=\"btn btn-link btn-sm\"\r\n                                                        (click)=\"updateUsersIncomeVerificationStatus(obj2show._id, SessionStatus.Rejected)\">\r\n                                                        <i class=\"icon-close m-2 text-danger\"></i>\r\n                                                    </button>\r\n                                                </div>\r\n                                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Approved\">\r\n                                                    <button title=\"Reject\" class=\"btn btn-link btn-sm\"\r\n                                                        (click)=\"updateUsersIncomeVerificationStatus(obj2show._id, SessionStatus.Rejected)\">\r\n                                                        <i class=\"icon-close m-2 text-danger\"></i>\r\n                                                    </button>\r\n                                                </div>\r\n                                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Rejected\">\r\n                                                    <button title=\"Approve\" class=\"btn btn-link btn-sm\"\r\n                                                        (click)=\"updateUsersIncomeVerificationStatus(obj2show._id, SessionStatus.Approved)\">\r\n                                                        <i class=\"icon-check m-2 text-success\"></i>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div id=\"accordion_userExpenseDetailsForm\">\r\n            <div class=\"card shadow mb-4\">\r\n                <div class=\"card-header py-3 flex-row align-items-center justify-content-between\">\r\n                    <a class=\"collapsed card-link\" data-toggle=\"collapse\"\r\n                        [attr.href]=\"'#collapse_userExpenseDetailsForm'\" i18n>\r\n                        <h6 class=\"m-0 font-weight-bold text-primary\">\r\n                            Update {{adminViewT?userObj.firstName+'`s':'Your'}} Monthly Expenses\r\n                        </h6>\r\n                    </a>\r\n                </div>\r\n                <div [attr.id]=\"'collapse_userExpenseDetailsForm'\" class=\"collapse show\"\r\n                    data-parent=\"#accordion_userExpenseDetailsForm\">\r\n                    <div class=\"card-body\">\r\n\r\n                        <form [formGroup]=\"userExpenseDetailsForm\">\r\n                            <div class=\"row mb-3\" *ngIf=\"!adminViewT\">\r\n                                <div class=\"col-xl-12 mb-3\">\r\n                                    Update your existing loans or other expenses.\r\n\r\n                                </div>\r\n                                <div class=\"col-xl-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"usr\">Expense Details</label>\r\n                                        <label for=\"expenseDetails\">Expense Details</label>\r\n                                        <input type=\"text\" formControlName=\"expenseDetails\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submittedExpenseDetails && ff.expenseDetails.errors }\"\r\n                                            placeholder=\"e.g. salaried, business, stocks etc\" />\r\n                                        <div *ngIf=\"submittedExpenseDetails && ff.expenseDetails.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"ff.expenseDetails.errors.required\">Expense Details is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"monthlyEMIAmount\">Monthly EMI</label>\r\n                                        <input type=\"number\" formControlName=\"monthlyEMIAmount\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submittedExpenseDetails && ff.monthlyEMIAmount.errors }\" />\r\n                                        <div *ngIf=\"submittedExpenseDetails && ff.monthlyEMIAmount.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"ff.monthlyEMIAmount.errors.required\">Monthly EMI is required\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6\">\r\n                                    <div class=\"form-group\">\r\n\r\n                                        <label for=\"monthlyExpenseStartDateTimeCustomised\" i18n>Start Date</label>\r\n                                        <input type=\"date\" formControlName=\"monthlyExpenseStartDateTimeCustomised\"\r\n                                            class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submittedExpenseDetails && ff.monthlyExpenseStartDateTimeCustomised.errors }\" />\r\n                                        <div *ngIf=\"submittedExpenseDetails && ff.monthlyExpenseStartDateTimeCustomised.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"ff.monthlyExpenseStartDateTimeCustomised.errors.required\" i18n>\r\n                                                Start Date\r\n                                                is required\r\n                                            </div>\r\n                                            <div *ngIf=\"ff.monthlyExpenseStartDateTimeCustomised.errors.date\" i18n>\r\n                                                Invalid Date\r\n                                                format.\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"monthlyExpensePaymentDateTimeCustomised\" i18n>Payment Date</label>\r\n                                        <input type=\"date\" formControlName=\"monthlyExpensePaymentDateTimeCustomised\"\r\n                                            class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submittedExpenseDetails && ff.monthlyExpensePaymentDateTimeCustomised.errors }\" />\r\n                                        <div *ngIf=\"submittedExpenseDetails && ff.monthlyExpensePaymentDateTimeCustomised.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"ff.monthlyExpensePaymentDateTimeCustomised.errors.required\"\r\n                                                i18n>Payment\r\n                                                Date is required\r\n                                            </div>\r\n                                            <div *ngIf=\"ff.monthlyExpensePaymentDateTimeCustomised.errors.date\" i18n>\r\n                                                Invalid Date\r\n                                                format.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12\">\r\n                                    <button class=\"btn btn-success btn-sm float-right\"\r\n                                        (click)=\"onUserExpenseDetailsUpdateSubmit()\"><i class=\"icon icon-plus\"></i>\r\n                                        ADD</button>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </form>\r\n                        <div class=\"table-responsive table-billing-history\">\r\n                            <table class=\"table mb-0\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\">Expense Details</th>\r\n                                        <th scope=\"col\">Start Date</th>\r\n                                        <th scope=\"col\">Payment Date</th>\r\n                                        <th scope=\"col\">Monthly EMI</th>\r\n                                        <th scope=\"col\">Status</th>\r\n                                        <th *ngIf=\"adminViewT\" scope=\"col\">#</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                    <tr *ngFor=\"let obj2show of allExpenseDetailsData\">\r\n                                        <td>{{obj2show.expenseDetails}}</td>\r\n                                        <td>{{obj2show.monthlyExpenseStartDate | date:'dd-MMM-YYYY'}}</td>\r\n                                        <td>{{obj2show.monthlyExpensePaymentDate | date:'dd-MMM-YYYY'}}</td>\r\n                                        <td>{{obj2show.monthlyEMIAmount}}</td>\r\n                                        <td class=\"text-capitalize text-cap\">\r\n                                            <span class=\"badge\"\r\n                                                [ngClass]=\"{'badge-success': (obj2show.monthlyExpenseStatus==SessionStatus.Approved || obj2show.monthlyExpenseStatus==SessionStatus.Accepted || obj2show.monthlyExpenseStatus==SessionStatus.Active || obj2show.monthlyExpenseStatus==SessionStatus.Completed || obj2show.monthlyExpenseStatus==SessionStatus.OngoingInitiated  || obj2show.monthlyExpenseStatus==SessionStatus.OngoingAccepted  || obj2show.monthlyExpenseStatus==SessionStatus.Ongoing), 'badge-danger': (obj2show.monthlyExpenseStatus==SessionStatus.Rejected || obj2show.monthlyExpenseStatus==SessionStatus.RejectedOngoing || obj2show.monthlyExpenseStatus==SessionStatus.Suspended), 'badge-info': ( obj2show.monthlyExpenseStatus==null || obj2show.monthlyExpenseStatus=='' || obj2show.monthlyExpenseStatus==SessionStatus.Pending)}\">\r\n                                                {{obj2show.monthlyExpenseStatus}}\r\n                                            </span>\r\n                                        </td>\r\n                                        <td *ngIf=\"adminViewT\">\r\n                                            <div [ngSwitch]=\"obj2show.monthlyExpenseStatus\">\r\n                                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Pending\">\r\n                                                    <button title=\"Approve\" class=\"btn btn-link btn-sm\"\r\n                                                        (click)=\"updateUsersExpenseVerificationStatus(obj2show._id, SessionStatus.Approved)\">\r\n                                                        <i class=\"icon-check m-2 text-success\"></i>\r\n                                                    </button>\r\n                                                    <button title=\"Reject\" class=\"btn btn-link btn-sm\"\r\n                                                        (click)=\"updateUsersExpenseVerificationStatus(obj2show._id, SessionStatus.Rejected)\">\r\n                                                        <i class=\"icon-close m-2 text-danger\"></i>\r\n                                                    </button>\r\n                                                </div>\r\n                                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Approved\">\r\n                                                    <button title=\"Reject\" class=\"btn btn-link btn-sm\"\r\n                                                        (click)=\"updateUsersExpenseVerificationStatus(obj2show._id, SessionStatus.Rejected)\">\r\n                                                        <i class=\"icon-close m-2 text-danger\"></i>\r\n                                                    </button>\r\n                                                </div>\r\n                                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Rejected\">\r\n                                                    <button title=\"Approve\" class=\"btn btn-link btn-sm\"\r\n                                                        (click)=\"updateUsersExpenseVerificationStatus(obj2show._id, SessionStatus.Approved)\">\r\n                                                        <i class=\"icon-check m-2 text-success\"></i>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "YgAS":
/*!*********************************************************************!*\
  !*** ./src/app/shared/update-password/update-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: UpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function() { return UpdatePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-password.component.html */ "3GRy");
/* harmony import */ var _update_password_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-password.component.css */ "iiTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/_helpers/must-match-validator */ "nDMU");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");










let UpdatePasswordComponent = class UpdatePasswordComponent {
    constructor(formBuilder, authenticationService, userService, alertService, appRouterService, utilityService) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.appRouterService = appRouterService;
        this.utilityService = utilityService;
        this.submitted = false;
        this.loading = false;
        if (!this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter('');
        }
        this.showEditingForm(this.authenticationService.currentUserValue);
    }
    ngOnInit() {
    }
    onUpdatePasswordSubmit() {
        this.submitted = true;
        if (this.profileUpdatePasswordForm.invalid) {
            this.alertService.error("Please enter stronger password and should have atleast 6 characters.");
            return;
        }
        this.userService.resetExistingUsersPasswordByUserId(this.profileUpdatePasswordForm.value._id, this.profileUpdatePasswordForm.value.userName, this.profileUpdatePasswordForm.value.password, this.profileUpdatePasswordForm.value.password2update, this.profileUpdatePasswordForm.value.role)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                this.submitted = false;
                this.showEditingForm(this.authenticationService.currentUserValue);
                this.alertService.success('Password Updated successfully', true);
            }
            else {
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
    get f() { return this.profileUpdatePasswordForm.controls; }
    showEditingForm(_userObj) {
        this.profileUpdatePasswordForm = this.formBuilder.group({
            _id: [_userObj._id || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            role: [_userObj.role || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            userName: [_userObj.userName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [_userObj.password || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password2update: [_userObj.password2update || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            confirmPassword: [_userObj.confirmPassword || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        }, {
            validator: Object(src_app_components_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('password2update', 'confirmPassword'),
        });
    }
};
UpdatePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] }
];
UpdatePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-password',
        template: _raw_loader_update_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_password_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]])
], UpdatePasswordComponent);



/***/ }),

/***/ "ZD4T":
/*!**************************************************************************!*\
  !*** ./src/app/shared/profile-portfolio/profile-portfolio.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXBvcnRmb2xpby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Zbbr":
/*!*********************************************!*\
  !*** ./src/app/lender/lender.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZW5kZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "aEDk":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-pipes/__ivy_ngcc__/fesm2015/ngx-pipes.js ***!
  \*******************************************************************/
/*! exports provided: AorAnPipe, BOOLEAN_PIPES, BytesPipe, CamelizePipe, CeilPipe, ChunkPipe, DATE_PIPES, DegreesPipe, DiffObjPipe, DiffPipe, EveryPipe, FilterByImpurePipe, FilterByPipe, FlattenPipe, FloorPipe, FromPairsPipe, GroupByImpurePipe, GroupByPipe, InitialPipe, IntersectionPipe, InvertByPipe, InvertPipe, IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsIdenticalToPipe, IsLessEqualThanPipe, IsLessThanPipe, IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, KeysPipe, LatinisePipe, LeftPadPipe, LeftTrimPipe, LinesPipe, MATH_PIPES, MakePluralStringPipe, MatchPipe, MaxPipe, MinPipe, NgArrayPipesModule, NgBooleanPipesModule, NgDatePipesModule, NgMathPipesModule, NgObjectPipesModule, NgPipesModule, NgStringPipesModule, OmitPipe, OrderByImpurePipe, OrderByPipe, PairsPipe, PercentagePipe, PickPipe, PluckPipe, PowerPipe, RadiansPipe, RangePipe, RepeatPipe, ReversePipe, RightPadPipe, RightTrimPipe, RoundPipe, STRING_PIPES, SamplePipe, ScanPipe, ShortenPipe, ShufflePipe, SlugifyPipe, SomePipe, SqrtPipe, StripTagsPipe, SumPipe, TailPipe, TestPipe, TimeAgoPipe, TrimPipe, TrurthifyPipe, UcFirstPipe, UcWordsPipe, UnderscorePipe, UnionPipe, UniquePipe, ValuesPipe, WithoutPipe, WrapPipe, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AorAnPipe", function() { return AorAnPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLEAN_PIPES", function() { return BOOLEAN_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesPipe", function() { return BytesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelizePipe", function() { return CamelizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeilPipe", function() { return CeilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChunkPipe", function() { return ChunkPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_PIPES", function() { return DATE_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreesPipe", function() { return DegreesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffObjPipe", function() { return DiffObjPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffPipe", function() { return DiffPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EveryPipe", function() { return EveryPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByImpurePipe", function() { return FilterByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByPipe", function() { return FilterByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenPipe", function() { return FlattenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPipe", function() { return FloorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromPairsPipe", function() { return FromPairsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByImpurePipe", function() { return GroupByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPipe", function() { return InitialPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionPipe", function() { return IntersectionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertByPipe", function() { return InvertByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertPipe", function() { return InvertPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsArrayPipe", function() { return IsArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDefinedPipe", function() { return IsDefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEqualToPipe", function() { return IsEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFunctionPipe", function() { return IsFunctionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterEqualThanPipe", function() { return IsGreaterEqualThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterThanPipe", function() { return IsGreaterThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIdenticalToPipe", function() { return IsIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessEqualThanPipe", function() { return IsLessEqualThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessThanPipe", function() { return IsLessThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotEqualToPipe", function() { return IsNotEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotIdenticalToPipe", function() { return IsNotIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNullPipe", function() { return IsNullPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumberPipe", function() { return IsNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObjectPipe", function() { return IsObjectPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStringPipe", function() { return IsStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUndefinedPipe", function() { return IsUndefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatinisePipe", function() { return LatinisePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPadPipe", function() { return LeftPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTrimPipe", function() { return LeftTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesPipe", function() { return LinesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATH_PIPES", function() { return MATH_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePluralStringPipe", function() { return MakePluralStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPipe", function() { return MatchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPipe", function() { return MaxPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return MinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgArrayPipesModule", function() { return NgArrayPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBooleanPipesModule", function() { return NgBooleanPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDatePipesModule", function() { return NgDatePipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMathPipesModule", function() { return NgMathPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgObjectPipesModule", function() { return NgObjectPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPipesModule", function() { return NgPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStringPipesModule", function() { return NgStringPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmitPipe", function() { return OmitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByImpurePipe", function() { return OrderByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairsPipe", function() { return PairsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentagePipe", function() { return PercentagePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickPipe", function() { return PickPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluckPipe", function() { return PluckPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerPipe", function() { return PowerPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiansPipe", function() { return RadiansPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePipe", function() { return RangePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatPipe", function() { return RepeatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPadPipe", function() { return RightPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTrimPipe", function() { return RightTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING_PIPES", function() { return STRING_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePipe", function() { return SamplePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPipe", function() { return ScanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShufflePipe", function() { return ShufflePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomePipe", function() { return SomePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqrtPipe", function() { return SqrtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function() { return StripTagsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumPipe", function() { return SumPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailPipe", function() { return TailPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPipe", function() { return TestPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrurthifyPipe", function() { return TrurthifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcFirstPipe", function() { return UcFirstPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcWordsPipe", function() { return UcWordsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderscorePipe", function() { return UnderscorePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionPipe", function() { return UnionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniquePipe", function() { return UniquePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutPipe", function() { return WithoutPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPipe", function() { return WrapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return isString; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DiffPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((d, c) => d.filter((e) => !~c.indexOf(e)), input);
    }
}
DiffPipe.ɵfac = function DiffPipe_Factory(t) { return new (t || DiffPipe)(); };
DiffPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "diff", type: DiffPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiffPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'diff' }]
    }], null, null); })();

class InitialPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(0, input.length - num) : input;
    }
}
InitialPipe.ɵfac = function InitialPipe_Factory(t) { return new (t || InitialPipe)(); };
InitialPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "initial", type: InitialPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitialPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'initial' }]
    }], null, null); })();

class FlattenPipe {
    transform(input, shallow = false) {
        if (!Array.isArray(input)) {
            return input;
        }
        return shallow ? [].concat.apply([], input) : this.flatten(input);
    }
    flatten(array) {
        return array.reduce((arr, elm) => {
            if (Array.isArray(elm)) {
                return arr.concat(this.flatten(elm));
            }
            return arr.concat(elm);
        }, []);
    }
}
FlattenPipe.ɵfac = function FlattenPipe_Factory(t) { return new (t || FlattenPipe)(); };
FlattenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "flatten", type: FlattenPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlattenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'flatten' }]
    }], null, null); })();

class IntersectionPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((n, c) => n.filter((e) => !!~c.indexOf(e)), input);
    }
}
IntersectionPipe.ɵfac = function IntersectionPipe_Factory(t) { return new (t || IntersectionPipe)(); };
IntersectionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "intersection", type: IntersectionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntersectionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'intersection' }]
    }], null, null); })();

function isUndefined(value) {
    return typeof value === 'undefined';
}
function isNull(value) {
    return value === null;
}
function isFunction(value) {
    return typeof value === 'function';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isString(value) {
    return typeof value === 'string';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isObject(value) {
    return value !== null && typeof value === 'object';
}
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
function isVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(letter) !== -1;
}
function ucFirst(text) {
    const [part, ...split] = text.split(/\s/g);
    const ucd = part
        .toLowerCase()
        .split(/(?=['|-])/g)
        .map((word) => word.indexOf('-') + word.indexOf("'") > -2
        ? word.slice(0, 2).toUpperCase() + word.slice(2)
        : word.slice(0, 1).toUpperCase() + word.slice(1))
        .join('');
    return [ucd, ...split].join(' ');
}
function applyPrecision(num, precision) {
    if (precision <= 0) {
        return Math.round(num);
    }
    const tho = Math.pow(10, precision);
    return Math.round(num * tho) / tho;
}
function extractDeepPropertyByMapKey(obj, map) {
    const keys = map.split('.');
    const head = keys.shift();
    return keys.reduce((prop, key) => {
        return !isUndefined(prop) && !isNull(prop) && !isUndefined(prop[key]) ? prop[key] : undefined;
    }, obj[head || '']);
}
function extractDeepPropertyByParentMapKey(obj, map) {
    const keys = map.split('.');
    const tail = keys.pop();
    const props = extractDeepPropertyByMapKey(obj, keys.join('.'));
    return { props, tail };
}
function getKeysTwoObjects(obj, other) {
    return [...Object.keys(obj), ...Object.keys(other)].filter((key, index, array) => array.indexOf(key) === index);
}
function isDeepEqual(obj, other) {
    if (!isObject(obj) || !isObject(other)) {
        return obj === other;
    }
    return getKeysTwoObjects(obj, other).every((key) => {
        if (!isObject(obj[key]) && !isObject(other[key])) {
            return obj[key] === other[key];
        }
        if (!isObject(obj[key]) || !isObject(other[key])) {
            return false;
        }
        return isDeepEqual(obj[key], other[key]);
    });
}

class ReversePipe {
    transform(input) {
        if (isString(input)) {
            return input
                .split('')
                .reverse()
                .join('');
        }
        return Array.isArray(input) ? input.slice().reverse() : input;
    }
}
ReversePipe.ɵfac = function ReversePipe_Factory(t) { return new (t || ReversePipe)(); };
ReversePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "reverse", type: ReversePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReversePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'reverse' }]
    }], null, null); })();

class TailPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(num) : input;
    }
}
TailPipe.ɵfac = function TailPipe_Factory(t) { return new (t || TailPipe)(); };
TailPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tail", type: TailPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TailPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'tail' }]
    }], null, null); })();

class TrurthifyPipe {
    transform(input) {
        return Array.isArray(input) ? input.filter(e => !!e) : input;
    }
}
TrurthifyPipe.ɵfac = function TrurthifyPipe_Factory(t) { return new (t || TrurthifyPipe)(); };
TrurthifyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truthify", type: TrurthifyPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrurthifyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'truthify' }]
    }], null, null); })();

class UnionPipe {
    transform(input, args = []) {
        if (!Array.isArray(input) || !Array.isArray(args)) {
            return input;
        }
        return args.reduce((newArr, currArr) => {
            return newArr.concat(currArr.reduce((noDupArr, curr) => {
                // tslint:disable-next-line:no-bitwise
                return !~noDupArr.indexOf(curr) && !~newArr.indexOf(curr) ? noDupArr.concat([curr]) : noDupArr;
            }, []));
        }, input);
    }
}
UnionPipe.ɵfac = function UnionPipe_Factory(t) { return new (t || UnionPipe)(); };
UnionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "union", type: UnionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'union' }]
    }], null, null); })();

class UniquePipe {
    transform(input, propertyName) {
        const uniques = [];
        return Array.isArray(input)
            ? isUndefined(propertyName)
                ? input.filter((e, i) => input.indexOf(e) === i)
                : input.filter((e, i) => {
                    let value = extractDeepPropertyByMapKey(e, propertyName);
                    value = isObject(value) ? JSON.stringify(value) : value;
                    if (isUndefined(value) || uniques[value]) {
                        return false;
                    }
                    uniques[value] = true;
                    return true;
                })
            : input;
    }
}
UniquePipe.ɵfac = function UniquePipe_Factory(t) { return new (t || UniquePipe)(); };
UniquePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "unique", type: UniquePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniquePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'unique' }]
    }], null, null); })();

class WithoutPipe {
    transform(input, args = []) {
        return Array.isArray(input)
            ? // tslint:disable-next-line:no-bitwise
                input.filter(e => !~args.indexOf(e))
            : input;
    }
}
WithoutPipe.ɵfac = function WithoutPipe_Factory(t) { return new (t || WithoutPipe)(); };
WithoutPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "without", type: WithoutPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithoutPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'without' }]
    }], null, null); })();

class PluckPipe {
    transform(input, map) {
        if (Array.isArray(input)) {
            return input.map(e => extractDeepPropertyByMapKey(e, map));
        }
        return isObject(input) ? extractDeepPropertyByMapKey(input, map) : input;
    }
}
PluckPipe.ɵfac = function PluckPipe_Factory(t) { return new (t || PluckPipe)(); };
PluckPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pluck", type: PluckPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluckPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'pluck', pure: false }]
    }], null, null); })();

class ShufflePipe {
    // Using a version of the Fisher-Yates shuffle algorithm
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        const shuffled = [...input];
        const n = input.length - 1;
        for (let i = 0; i < n; ++i) {
            const j = Math.floor(Math.random() * (n - i + 1)) + i;
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}
ShufflePipe.ɵfac = function ShufflePipe_Factory(t) { return new (t || ShufflePipe)(); };
ShufflePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shuffle", type: ShufflePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShufflePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'shuffle' }]
    }], null, null); })();

class EveryPipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.every(predicate) : false;
    }
}
EveryPipe.ɵfac = function EveryPipe_Factory(t) { return new (t || EveryPipe)(); };
EveryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "every", type: EveryPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EveryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'every' }]
    }], null, null); })();

class SomePipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.some(predicate) : input;
    }
}
SomePipe.ɵfac = function SomePipe_Factory(t) { return new (t || SomePipe)(); };
SomePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "some", type: SomePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SomePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'some' }]
    }], null, null); })();

class SamplePipe {
    transform(input, len = 1) {
        if (!Array.isArray(input)) {
            return input;
        }
        let sample = [];
        const tmp = [...input];
        const l = len < tmp.length ? len : tmp.length;
        for (let i = 0; i < l; ++i) {
            sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
        }
        return sample;
    }
}
SamplePipe.ɵfac = function SamplePipe_Factory(t) { return new (t || SamplePipe)(); };
SamplePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sample", type: SamplePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'sample' }]
    }], null, null); })();

class GroupByPipe {
    transform(input, discriminator = [], delimiter = '|') {
        if (!Array.isArray(input)) {
            return input;
        }
        return this.groupBy(input, discriminator, delimiter);
    }
    groupBy(list, discriminator, delimiter) {
        return list.reduce((acc, payload) => {
            const key = this.extractKeyByDiscriminator(discriminator, payload, delimiter);
            acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];
            return acc;
        }, {});
    }
    extractKeyByDiscriminator(discriminator, payload, delimiter) {
        if (isFunction(discriminator)) {
            return discriminator(payload);
        }
        if (Array.isArray(discriminator)) {
            return discriminator.map(k => extractDeepPropertyByMapKey(payload, k)).join(delimiter);
        }
        return extractDeepPropertyByMapKey(payload, discriminator);
    }
}
GroupByPipe.ɵfac = function GroupByPipe_Factory(t) { return new (t || GroupByPipe)(); };
GroupByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "groupBy", type: GroupByPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'groupBy' }]
    }], null, null); })();

// tslint:disable no-bitwise
class FilterByPipe {
    transform(input, props, search = '', strict = false) {
        if (!Array.isArray(input) ||
            (!Array.isArray(search) && !isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
            return input;
        }
        const terms = String(search)
            .toLowerCase()
            .split(',');
        return input.filter(obj => {
            return props.some(prop => {
                return terms.some(term => {
                    const value = extractDeepPropertyByMapKey(obj, prop);
                    /* tslint:disable */
                    const { props, tail } = extractDeepPropertyByParentMapKey(obj, prop);
                    if (isUndefined(value) && !isUndefined(props) && Array.isArray(props)) {
                        return props.some(parent => {
                            const str = String(parent[tail]).toLowerCase();
                            return strict ? str === term : !!~str.indexOf(term);
                        });
                    }
                    if (isUndefined(value)) {
                        return false;
                    }
                    const strValue = String(value).toLowerCase();
                    return strict ? term === strValue : !!~strValue.indexOf(term);
                });
            });
        });
    }
}
FilterByPipe.ɵfac = function FilterByPipe_Factory(t) { return new (t || FilterByPipe)(); };
FilterByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterBy", type: FilterByPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'filterBy' }]
    }], null, null); })();

class OrderByPipe {
    transform(input, config) {
        if (!Array.isArray(input)) {
            return input;
        }
        const out = [...input];
        // sort by multiple properties
        if (Array.isArray(config)) {
            return out.sort((a, b) => {
                const l = config.length;
                for (let i = 0; i < l; ++i) {
                    const [prop, asc] = OrderByPipe.extractFromConfig(config[i]);
                    const pos = OrderByPipe.orderCompare(prop, asc, a, b);
                    if (pos !== 0) {
                        return pos;
                    }
                }
                return 0;
            });
        }
        // sort by a single property value
        if (isString(config)) {
            const [prop, asc, sign] = OrderByPipe.extractFromConfig(config);
            if (config.length === 1) {
                // tslint:disable-next-line:switch-default
                switch (sign) {
                    case '+':
                        return out.sort(OrderByPipe.simpleSort.bind(this));
                    case '-':
                        return out.sort(OrderByPipe.simpleSort.bind(this)).reverse();
                }
            }
            return out.sort(OrderByPipe.orderCompare.bind(this, prop, asc));
        }
        // default sort by value
        return out.sort(OrderByPipe.simpleSort.bind(this));
    }
    static simpleSort(a, b) {
        return isString(a) && isString(b) ? a.toLowerCase().localeCompare(b.toLowerCase()) : a - b;
    }
    static orderCompare(prop, asc, a, b) {
        const first = extractDeepPropertyByMapKey(a, prop);
        const second = extractDeepPropertyByMapKey(b, prop);
        if (first === second) {
            return 0;
        }
        if (isUndefined(first) || first === '') {
            return 1;
        }
        if (isUndefined(second) || second === '') {
            return -1;
        }
        if (isString(first) && isString(second)) {
            const pos = first.toLowerCase().localeCompare(second.toLowerCase());
            return asc ? pos : -pos;
        }
        return asc ? first - second : second - first;
    }
    static extractFromConfig(config) {
        const sign = config.substr(0, 1);
        const prop = config.replace(/^[-+]/, '');
        const asc = sign !== '-';
        return [prop, asc, sign];
    }
}
OrderByPipe.ɵfac = function OrderByPipe_Factory(t) { return new (t || OrderByPipe)(); };
OrderByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderBy", type: OrderByPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'orderBy' }]
    }], null, null); })();

// tslint:disable use-pipe-transform-interface
class GroupByImpurePipe extends GroupByPipe {
}
GroupByImpurePipe.ɵfac = function GroupByImpurePipe_Factory(t) { return ɵGroupByImpurePipe_BaseFactory(t || GroupByImpurePipe); };
GroupByImpurePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "groupByImpure", type: GroupByImpurePipe, pure: false });
const ɵGroupByImpurePipe_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GroupByImpurePipe);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupByImpurePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'groupByImpure', pure: false }]
    }], null, null); })();

// tslint:disable use-pipe-transform-interface
class FilterByImpurePipe extends FilterByPipe {
}
FilterByImpurePipe.ɵfac = function FilterByImpurePipe_Factory(t) { return ɵFilterByImpurePipe_BaseFactory(t || FilterByImpurePipe); };
FilterByImpurePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterByImpure", type: FilterByImpurePipe, pure: false });
const ɵFilterByImpurePipe_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FilterByImpurePipe);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterByImpurePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'filterByImpure', pure: false }]
    }], null, null); })();

// tslint:disable use-pipe-transform-interface
class OrderByImpurePipe extends OrderByPipe {
}
OrderByImpurePipe.ɵfac = function OrderByImpurePipe_Factory(t) { return ɵOrderByImpurePipe_BaseFactory(t || OrderByImpurePipe); };
OrderByImpurePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderByImpure", type: OrderByImpurePipe, pure: false });
const ɵOrderByImpurePipe_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](OrderByImpurePipe);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByImpurePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'orderByImpure', pure: false }]
    }], null, null); })();

class RangePipe {
    transform(start = 1, count = 0, step = 1) {
        return Array(count)
            .fill('')
            .map((v, i) => step * i + start);
    }
}
RangePipe.ɵfac = function RangePipe_Factory(t) { return new (t || RangePipe)(); };
RangePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "range", type: RangePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'range' }]
    }], null, null); })();

class ChunkPipe {
    transform(input, size = 1) {
        if (isString(input)) {
            return this.chunk(input
                .split(''), size);
        }
        return Array.isArray(input) ? this.chunk(input, size) : input;
    }
    chunk(input, size) {
        return Array(Math.ceil(input.length / size))
            .fill([])
            .map((_, index) => index * size)
            .map(begin => input.slice(begin, begin + size));
    }
}
ChunkPipe.ɵfac = function ChunkPipe_Factory(t) { return new (t || ChunkPipe)(); };
ChunkPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "chunk", type: ChunkPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChunkPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'chunk' }]
    }], null, null); })();

class FromPairsPipe {
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        return input.reduce((obj, arr) => {
            if (!Array.isArray(arr)) {
                return obj;
            }
            const [prop, val] = arr;
            obj[prop] = val;
            return obj;
        }, {});
    }
}
FromPairsPipe.ɵfac = function FromPairsPipe_Factory(t) { return new (t || FromPairsPipe)(); };
FromPairsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fromPairs", type: FromPairsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FromPairsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'fromPairs' }]
    }], null, null); })();

const ARRAY_PIPES = [
    DiffPipe,
    FlattenPipe,
    InitialPipe,
    IntersectionPipe,
    ReversePipe,
    TailPipe,
    TrurthifyPipe,
    UnionPipe,
    UniquePipe,
    WithoutPipe,
    PluckPipe,
    ShufflePipe,
    EveryPipe,
    SomePipe,
    SamplePipe,
    GroupByPipe,
    GroupByImpurePipe,
    FilterByPipe,
    FilterByImpurePipe,
    OrderByPipe,
    OrderByImpurePipe,
    RangePipe,
    ChunkPipe,
    FromPairsPipe
];
class NgArrayPipesModule {
}
NgArrayPipesModule.ɵfac = function NgArrayPipesModule_Factory(t) { return new (t || NgArrayPipesModule)(); };
NgArrayPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgArrayPipesModule });
NgArrayPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgArrayPipesModule, { declarations: [DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe, TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe, EveryPipe, SomePipe, SamplePipe, GroupByPipe, GroupByImpurePipe, FilterByPipe, FilterByImpurePipe, OrderByPipe, OrderByImpurePipe, RangePipe, ChunkPipe, FromPairsPipe], exports: [DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe, TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe, EveryPipe, SomePipe, SamplePipe, GroupByPipe, GroupByImpurePipe, FilterByPipe, FilterByImpurePipe, OrderByPipe, OrderByImpurePipe, RangePipe, ChunkPipe, FromPairsPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgArrayPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: ARRAY_PIPES,
                imports: [],
                exports: ARRAY_PIPES
            }]
    }], null, null); })();

class KeysPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'keys' }]
    }], null, null); })();

class ValuesPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).map(k => obj[k]);
    }
}
ValuesPipe.ɵfac = function ValuesPipe_Factory(t) { return new (t || ValuesPipe)(); };
ValuesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "values", type: ValuesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValuesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'values' }]
    }], null, null); })();

class PairsPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.entries(obj);
    }
}
PairsPipe.ɵfac = function PairsPipe_Factory(t) { return new (t || PairsPipe)(); };
PairsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pairs", type: PairsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PairsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'pairs' }]
    }], null, null); })();

class PickPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return args.reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {});
    }
}
PickPipe.ɵfac = function PickPipe_Factory(t) { return new (t || PickPipe)(); };
PickPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pick", type: PickPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'pick' }]
    }], null, null); })();

class OmitPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return (Object.keys(obj)
            // tslint:disable-next-line:no-bitwise
            .filter(k => !~args.indexOf(k))
            .reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {}));
    }
}
OmitPipe.ɵfac = function OmitPipe_Factory(t) { return new (t || OmitPipe)(); };
OmitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "omit", type: OmitPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OmitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'omit' }]
    }], null, null); })();

class InvertPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            return Object.assign(o, { [obj[k]]: k });
        }, {});
    }
}
InvertPipe.ɵfac = function InvertPipe_Factory(t) { return new (t || InvertPipe)(); };
InvertPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "invert", type: InvertPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvertPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'invert' }]
    }], null, null); })();

class InvertByPipe {
    transform(obj, cb) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            const key = cb ? cb(obj[k]) : obj[k];
            return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, { [key]: [k] });
        }, {});
    }
}
InvertByPipe.ɵfac = function InvertByPipe_Factory(t) { return new (t || InvertByPipe)(); };
InvertByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "invertBy", type: InvertByPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvertByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'invertBy' }]
    }], null, null); })();

class DiffObjPipe {
    transform(obj, original = {}) {
        if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
            return {};
        }
        return getKeysTwoObjects(obj, original).reduce((diff, key) => {
            if (!isDeepEqual(original[key], obj[key])) {
                diff[key] = obj[key];
            }
            return diff;
        }, {});
    }
}
DiffObjPipe.ɵfac = function DiffObjPipe_Factory(t) { return new (t || DiffObjPipe)(); };
DiffObjPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "diffObj", type: DiffObjPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiffObjPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'diffObj' }]
    }], null, null); })();

const OBJECT_PIPES = [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe];
class NgObjectPipesModule {
}
NgObjectPipesModule.ɵfac = function NgObjectPipesModule_Factory(t) { return new (t || NgObjectPipesModule)(); };
NgObjectPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgObjectPipesModule });
NgObjectPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgObjectPipesModule, { declarations: [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe], exports: [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgObjectPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: OBJECT_PIPES,
                imports: [],
                exports: OBJECT_PIPES
            }]
    }], null, null); })();

/**
 * Takes a string and returns the string prepended by 'a' or 'an'.
 * Uses both naive and holdout-list approaches.
 * @constructor
 * @param {string} stringEntity - Entity to prepend 'a' or 'an' to.
 */
class AorAnPipe {
    constructor() {
        this.irregularMap = {
            herb: 'an',
            honor: 'an',
            honorable: 'an',
            hour: 'an',
            mba: 'an',
            msc: 'an',
            'm.sc.': 'an',
            unicorn: 'a',
        };
    }
    transform(stringEntity) {
        if (!stringEntity || stringEntity === '') {
            return '';
        }
        else {
            const firstWord = stringEntity.trim().split(' ')[0];
            if (this.irregularMap[firstWord.toLocaleLowerCase()]) {
                return `${this.irregularMap[firstWord.toLocaleLowerCase()]} ${stringEntity}`;
            }
            else {
                return isVowel(stringEntity[0]) ? `an ${stringEntity}` : `a ${stringEntity}`;
            }
        }
    }
}
AorAnPipe.ɵfac = function AorAnPipe_Factory(t) { return new (t || AorAnPipe)(); };
AorAnPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "aOrAn", type: AorAnPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AorAnPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'aOrAn'
            }]
    }], function () { return []; }, null); })();

class UcWordsPipe {
    transform(text) {
        if (isString(text)) {
            return text
                .split(' ')
                .map((sub) => ucFirst(sub))
                .join(' ');
        }
        return text;
    }
}
UcWordsPipe.ɵfac = function UcWordsPipe_Factory(t) { return new (t || UcWordsPipe)(); };
UcWordsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ucwords", type: UcWordsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UcWordsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ucwords' }]
    }], null, null); })();

class LeftTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+`), '') : text;
    }
}
LeftTrimPipe.ɵfac = function LeftTrimPipe_Factory(t) { return new (t || LeftTrimPipe)(); };
LeftTrimPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ltrim", type: LeftTrimPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftTrimPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ltrim' }]
    }], null, null); })();

class RepeatPipe {
    transform(str, n = 1, separator = '') {
        if (n <= 0) {
            throw new RangeError();
        }
        return n === 1 ? str : this.repeat(str, n - 1, separator);
    }
    repeat(str, n, separator) {
        return isString(str) ? (n === 0 ? str : str + separator + this.repeat(str, n - 1, separator)) : str;
    }
}
RepeatPipe.ɵfac = function RepeatPipe_Factory(t) { return new (t || RepeatPipe)(); };
RepeatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "repeat", type: RepeatPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepeatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'repeat' }]
    }], null, null); })();

class RightTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`[${chars}]+$`), '') : text;
    }
}
RightTrimPipe.ɵfac = function RightTrimPipe_Factory(t) { return new (t || RightTrimPipe)(); };
RightTrimPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rtrim", type: RightTrimPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightTrimPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'rtrim' }]
    }], null, null); })();

class ScanPipe {
    transform(text, args = []) {
        return isString(text)
            ? text.replace(/\{(\d+)}/g, (match, index) => (!isUndefined(args[index]) ? args[index] : match))
            : text;
    }
}
ScanPipe.ɵfac = function ScanPipe_Factory(t) { return new (t || ScanPipe)(); };
ScanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "scan", type: ScanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'scan' }]
    }], null, null); })();

class ShortenPipe {
    transform(text, length = 0, suffix = '', wordBreak = true) {
        if (!isString(text)) {
            return text;
        }
        if (text.length > length) {
            if (wordBreak) {
                return text.slice(0, length) + suffix;
            }
            // tslint:disable-next-line:no-bitwise
            if (!!~text.indexOf(' ', length)) {
                return text.slice(0, text.indexOf(' ', length)) + suffix;
            }
        }
        return text;
    }
}
ShortenPipe.ɵfac = function ShortenPipe_Factory(t) { return new (t || ShortenPipe)(); };
ShortenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shorten", type: ShortenPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'shorten' }]
    }], null, null); })();

class StripTagsPipe {
    transform(text, ...allowedTags) {
        return allowedTags.length > 0
            ? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
            : text.replace(/<(?:.|\s)*?>/g, '');
    }
}
StripTagsPipe.ɵfac = function StripTagsPipe_Factory(t) { return new (t || StripTagsPipe)(); };
StripTagsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "stripTags", type: StripTagsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripTagsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'stripTags' }]
    }], null, null); })();

class TrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'g'), '') : text;
    }
}
TrimPipe.ɵfac = function TrimPipe_Factory(t) { return new (t || TrimPipe)(); };
TrimPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trim", type: TrimPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrimPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'trim' }]
    }], null, null); })();

class UcFirstPipe {
    transform(text) {
        return isString(text) ? ucFirst(text) : text;
    }
}
UcFirstPipe.ɵfac = function UcFirstPipe_Factory(t) { return new (t || UcFirstPipe)(); };
UcFirstPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ucfirst", type: UcFirstPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UcFirstPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ucfirst' }]
    }], null, null); })();

class SlugifyPipe {
    transform(str) {
        return isString(str)
            ? str
                .toLowerCase()
                .trim()
                .replace(/[^\w\-]+/g, ' ')
                .replace(/\s+/g, '-')
            : str;
    }
}
SlugifyPipe.ɵfac = function SlugifyPipe_Factory(t) { return new (t || SlugifyPipe)(); };
SlugifyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "slugify", type: SlugifyPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlugifyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'slugify' }]
    }], null, null); })();

class CamelizePipe {
    transform(text, chars = '\\s') {
        if (!isString(text)) {
            return text;
        }
        return text
            .toLowerCase()
            .split(/[-_\s]/g)
            .filter((v) => !!v)
            .map((word, key) => {
            return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
        })
            .join('');
    }
}
CamelizePipe.ɵfac = function CamelizePipe_Factory(t) { return new (t || CamelizePipe)(); };
CamelizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "camelize", type: CamelizePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamelizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'camelize' }]
    }], null, null); })();

class LatinisePipe {
    constructor() {
        // Source: http://semplicewebsites.com/removing-accents-javascript
        // tslint:disable-next-line whitespace max-line-length object-literal-key-quotes
        this.latinMap = {
            'Á': 'A',
            'Ă': 'A',
            'Ắ': 'A',
            'Ặ': 'A',
            'Ằ': 'A',
            'Ẳ': 'A',
            'Ẵ': 'A',
            'Ǎ': 'A',
            'Â': 'A',
            'Ấ': 'A',
            'Ậ': 'A',
            'Ầ': 'A',
            'Ẩ': 'A',
            'Ẫ': 'A',
            'Ä': 'A',
            'Ǟ': 'A',
            'Ȧ': 'A',
            'Ǡ': 'A',
            'Ạ': 'A',
            'Ȁ': 'A',
            'À': 'A',
            'Ả': 'A',
            'Ȃ': 'A',
            'Ā': 'A',
            'Ą': 'A',
            'Å': 'A',
            'Ǻ': 'A',
            'Ḁ': 'A',
            'Ⱥ': 'A',
            'Ã': 'A',
            'Ꜳ': 'AA',
            'Æ': 'AE',
            'Ǽ': 'AE',
            'Ǣ': 'AE',
            'Ꜵ': 'AO',
            'Ꜷ': 'AU',
            'Ꜹ': 'AV',
            'Ꜻ': 'AV',
            'Ꜽ': 'AY',
            'Ḃ': 'B',
            'Ḅ': 'B',
            'Ɓ': 'B',
            'Ḇ': 'B',
            'Ƀ': 'B',
            'Ƃ': 'B',
            'Ć': 'C',
            'Č': 'C',
            'Ç': 'C',
            'Ḉ': 'C',
            'Ĉ': 'C',
            'Ċ': 'C',
            'Ƈ': 'C',
            'Ȼ': 'C',
            'Ď': 'D',
            'Ḑ': 'D',
            'Ḓ': 'D',
            'Ḋ': 'D',
            'Ḍ': 'D',
            'Ɗ': 'D',
            'Ḏ': 'D',
            'ǲ': 'D',
            'ǅ': 'D',
            'Đ': 'D',
            'Ƌ': 'D',
            'Ǳ': 'DZ',
            'Ǆ': 'DZ',
            'É': 'E',
            'Ĕ': 'E',
            'Ě': 'E',
            'Ȩ': 'E',
            'Ḝ': 'E',
            'Ê': 'E',
            'Ế': 'E',
            'Ệ': 'E',
            'Ề': 'E',
            'Ể': 'E',
            'Ễ': 'E',
            'Ḙ': 'E',
            'Ë': 'E',
            'Ė': 'E',
            'Ẹ': 'E',
            'Ȅ': 'E',
            'È': 'E',
            'Ẻ': 'E',
            'Ȇ': 'E',
            'Ē': 'E',
            'Ḗ': 'E',
            'Ḕ': 'E',
            'Ę': 'E',
            'Ɇ': 'E',
            'Ẽ': 'E',
            'Ḛ': 'E',
            'Ꝫ': 'ET',
            'Ḟ': 'F',
            'Ƒ': 'F',
            'Ǵ': 'G',
            'Ğ': 'G',
            'Ǧ': 'G',
            'Ģ': 'G',
            'Ĝ': 'G',
            'Ġ': 'G',
            'Ɠ': 'G',
            'Ḡ': 'G',
            'Ǥ': 'G',
            'Ḫ': 'H',
            'Ȟ': 'H',
            'Ḩ': 'H',
            'Ĥ': 'H',
            'Ⱨ': 'H',
            'Ḧ': 'H',
            'Ḣ': 'H',
            'Ḥ': 'H',
            'Ħ': 'H',
            'Í': 'I',
            'Ĭ': 'I',
            'Ǐ': 'I',
            'Î': 'I',
            'Ï': 'I',
            'Ḯ': 'I',
            'İ': 'I',
            'Ị': 'I',
            'Ȉ': 'I',
            'Ì': 'I',
            'Ỉ': 'I',
            'Ȋ': 'I',
            'Ī': 'I',
            'Į': 'I',
            'Ɨ': 'I',
            'Ĩ': 'I',
            'Ḭ': 'I',
            'Ꝺ': 'D',
            'Ꝼ': 'F',
            'Ᵹ': 'G',
            'Ꞃ': 'R',
            'Ꞅ': 'S',
            'Ꞇ': 'T',
            'Ꝭ': 'IS',
            'Ĵ': 'J',
            'Ɉ': 'J',
            'Ḱ': 'K',
            'Ǩ': 'K',
            'Ķ': 'K',
            'Ⱪ': 'K',
            'Ꝃ': 'K',
            'Ḳ': 'K',
            'Ƙ': 'K',
            'Ḵ': 'K',
            'Ꝁ': 'K',
            'Ꝅ': 'K',
            'Ĺ': 'L',
            'Ƚ': 'L',
            'Ľ': 'L',
            'Ļ': 'L',
            'Ḽ': 'L',
            'Ḷ': 'L',
            'Ḹ': 'L',
            'Ⱡ': 'L',
            'Ꝉ': 'L',
            'Ḻ': 'L',
            'Ŀ': 'L',
            'Ɫ': 'L',
            'ǈ': 'L',
            'Ł': 'L',
            'Ǉ': 'LJ',
            'Ḿ': 'M',
            'Ṁ': 'M',
            'Ṃ': 'M',
            'Ɱ': 'M',
            'Ń': 'N',
            'Ň': 'N',
            'Ņ': 'N',
            'Ṋ': 'N',
            'Ṅ': 'N',
            'Ṇ': 'N',
            'Ǹ': 'N',
            'Ɲ': 'N',
            'Ṉ': 'N',
            'Ƞ': 'N',
            'ǋ': 'N',
            'Ñ': 'N',
            'Ǌ': 'NJ',
            'Ó': 'O',
            'Ŏ': 'O',
            'Ǒ': 'O',
            'Ô': 'O',
            'Ố': 'O',
            'Ộ': 'O',
            'Ồ': 'O',
            'Ổ': 'O',
            'Ỗ': 'O',
            'Ö': 'O',
            'Ȫ': 'O',
            'Ȯ': 'O',
            'Ȱ': 'O',
            'Ọ': 'O',
            'Ő': 'O',
            'Ȍ': 'O',
            'Ò': 'O',
            'Ỏ': 'O',
            'Ơ': 'O',
            'Ớ': 'O',
            'Ợ': 'O',
            'Ờ': 'O',
            'Ở': 'O',
            'Ỡ': 'O',
            'Ȏ': 'O',
            'Ꝋ': 'O',
            'Ꝍ': 'O',
            'Ō': 'O',
            'Ṓ': 'O',
            'Ṑ': 'O',
            'Ɵ': 'O',
            'Ǫ': 'O',
            'Ǭ': 'O',
            'Ø': 'O',
            'Ǿ': 'O',
            'Õ': 'O',
            'Ṍ': 'O',
            'Ṏ': 'O',
            'Ȭ': 'O',
            'Ƣ': 'OI',
            'Ꝏ': 'OO',
            'Ɛ': 'E',
            'Ɔ': 'O',
            'Ȣ': 'OU',
            'Ṕ': 'P',
            'Ṗ': 'P',
            'Ꝓ': 'P',
            'Ƥ': 'P',
            'Ꝕ': 'P',
            'Ᵽ': 'P',
            'Ꝑ': 'P',
            'Ꝙ': 'Q',
            'Ꝗ': 'Q',
            'Ŕ': 'R',
            'Ř': 'R',
            'Ŗ': 'R',
            'Ṙ': 'R',
            'Ṛ': 'R',
            'Ṝ': 'R',
            'Ȑ': 'R',
            'Ȓ': 'R',
            'Ṟ': 'R',
            'Ɍ': 'R',
            'Ɽ': 'R',
            'Ꜿ': 'C',
            'Ǝ': 'E',
            'Ś': 'S',
            'Ṥ': 'S',
            'Š': 'S',
            'Ṧ': 'S',
            'Ş': 'S',
            'Ŝ': 'S',
            'Ș': 'S',
            'Ṡ': 'S',
            'Ṣ': 'S',
            'Ṩ': 'S',
            'ẞ': 'SS',
            'Ť': 'T',
            'Ţ': 'T',
            'Ṱ': 'T',
            'Ț': 'T',
            'Ⱦ': 'T',
            'Ṫ': 'T',
            'Ṭ': 'T',
            'Ƭ': 'T',
            'Ṯ': 'T',
            'Ʈ': 'T',
            'Ŧ': 'T',
            'Ɐ': 'A',
            'Ꞁ': 'L',
            'Ɯ': 'M',
            'Ʌ': 'V',
            'Ꜩ': 'TZ',
            'Ú': 'U',
            'Ŭ': 'U',
            'Ǔ': 'U',
            'Û': 'U',
            'Ṷ': 'U',
            'Ü': 'U',
            'Ǘ': 'U',
            'Ǚ': 'U',
            'Ǜ': 'U',
            'Ǖ': 'U',
            'Ṳ': 'U',
            'Ụ': 'U',
            'Ű': 'U',
            'Ȕ': 'U',
            'Ù': 'U',
            'Ủ': 'U',
            'Ư': 'U',
            'Ứ': 'U',
            'Ự': 'U',
            'Ừ': 'U',
            'Ử': 'U',
            'Ữ': 'U',
            'Ȗ': 'U',
            'Ū': 'U',
            'Ṻ': 'U',
            'Ų': 'U',
            'Ů': 'U',
            'Ũ': 'U',
            'Ṹ': 'U',
            'Ṵ': 'U',
            'Ꝟ': 'V',
            'Ṿ': 'V',
            'Ʋ': 'V',
            'Ṽ': 'V',
            'Ꝡ': 'VY',
            'Ẃ': 'W',
            'Ŵ': 'W',
            'Ẅ': 'W',
            'Ẇ': 'W',
            'Ẉ': 'W',
            'Ẁ': 'W',
            'Ⱳ': 'W',
            'Ẍ': 'X',
            'Ẋ': 'X',
            'Ý': 'Y',
            'Ŷ': 'Y',
            'Ÿ': 'Y',
            'Ẏ': 'Y',
            'Ỵ': 'Y',
            'Ỳ': 'Y',
            'Ƴ': 'Y',
            'Ỷ': 'Y',
            'Ỿ': 'Y',
            'Ȳ': 'Y',
            'Ɏ': 'Y',
            'Ỹ': 'Y',
            'Ź': 'Z',
            'Ž': 'Z',
            'Ẑ': 'Z',
            'Ⱬ': 'Z',
            'Ż': 'Z',
            'Ẓ': 'Z',
            'Ȥ': 'Z',
            'Ẕ': 'Z',
            'Ƶ': 'Z',
            'Ĳ': 'IJ',
            'Œ': 'OE',
            'ᴀ': 'A',
            'ᴁ': 'AE',
            'ʙ': 'B',
            'ᴃ': 'B',
            'ᴄ': 'C',
            'ᴅ': 'D',
            'ᴇ': 'E',
            'ꜰ': 'F',
            'ɢ': 'G',
            'ʛ': 'G',
            'ʜ': 'H',
            'ɪ': 'I',
            'ʁ': 'R',
            'ᴊ': 'J',
            'ᴋ': 'K',
            'ʟ': 'L',
            'ᴌ': 'L',
            'ᴍ': 'M',
            'ɴ': 'N',
            'ᴏ': 'O',
            'ɶ': 'OE',
            'ᴐ': 'O',
            'ᴕ': 'OU',
            'ᴘ': 'P',
            'ʀ': 'R',
            'ᴎ': 'N',
            'ᴙ': 'R',
            'ꜱ': 'S',
            'ᴛ': 'T',
            'ⱻ': 'E',
            'ᴚ': 'R',
            'ᴜ': 'U',
            'ᴠ': 'V',
            'ᴡ': 'W',
            'ʏ': 'Y',
            'ᴢ': 'Z',
            'á': 'a',
            'ă': 'a',
            'ắ': 'a',
            'ặ': 'a',
            'ằ': 'a',
            'ẳ': 'a',
            'ẵ': 'a',
            'ǎ': 'a',
            'â': 'a',
            'ấ': 'a',
            'ậ': 'a',
            'ầ': 'a',
            'ẩ': 'a',
            'ẫ': 'a',
            'ä': 'a',
            'ǟ': 'a',
            'ȧ': 'a',
            'ǡ': 'a',
            'ạ': 'a',
            'ȁ': 'a',
            'à': 'a',
            'ả': 'a',
            'ȃ': 'a',
            'ā': 'a',
            'ą': 'a',
            'ᶏ': 'a',
            'ẚ': 'a',
            'å': 'a',
            'ǻ': 'a',
            'ḁ': 'a',
            'ⱥ': 'a',
            'ã': 'a',
            'ꜳ': 'aa',
            'æ': 'ae',
            'ǽ': 'ae',
            'ǣ': 'ae',
            'ꜵ': 'ao',
            'ꜷ': 'au',
            'ꜹ': 'av',
            'ꜻ': 'av',
            'ꜽ': 'ay',
            'ḃ': 'b',
            'ḅ': 'b',
            'ɓ': 'b',
            'ḇ': 'b',
            'ᵬ': 'b',
            'ᶀ': 'b',
            'ƀ': 'b',
            'ƃ': 'b',
            'ɵ': 'o',
            'ć': 'c',
            'č': 'c',
            'ç': 'c',
            'ḉ': 'c',
            'ĉ': 'c',
            'ɕ': 'c',
            'ċ': 'c',
            'ƈ': 'c',
            'ȼ': 'c',
            'ď': 'd',
            'ḑ': 'd',
            'ḓ': 'd',
            'ȡ': 'd',
            'ḋ': 'd',
            'ḍ': 'd',
            'ɗ': 'd',
            'ᶑ': 'd',
            'ḏ': 'd',
            'ᵭ': 'd',
            'ᶁ': 'd',
            'đ': 'd',
            'ɖ': 'd',
            'ƌ': 'd',
            'ı': 'i',
            'ȷ': 'j',
            'ɟ': 'j',
            'ʄ': 'j',
            'ǳ': 'dz',
            'ǆ': 'dz',
            'é': 'e',
            'ĕ': 'e',
            'ě': 'e',
            'ȩ': 'e',
            'ḝ': 'e',
            'ê': 'e',
            'ế': 'e',
            'ệ': 'e',
            'ề': 'e',
            'ể': 'e',
            'ễ': 'e',
            'ḙ': 'e',
            'ë': 'e',
            'ė': 'e',
            'ẹ': 'e',
            'ȅ': 'e',
            'è': 'e',
            'ẻ': 'e',
            'ȇ': 'e',
            'ē': 'e',
            'ḗ': 'e',
            'ḕ': 'e',
            'ⱸ': 'e',
            'ę': 'e',
            'ᶒ': 'e',
            'ɇ': 'e',
            'ẽ': 'e',
            'ḛ': 'e',
            'ꝫ': 'et',
            'ḟ': 'f',
            'ƒ': 'f',
            'ᵮ': 'f',
            'ᶂ': 'f',
            'ǵ': 'g',
            'ğ': 'g',
            'ǧ': 'g',
            'ģ': 'g',
            'ĝ': 'g',
            'ġ': 'g',
            'ɠ': 'g',
            'ḡ': 'g',
            'ᶃ': 'g',
            'ǥ': 'g',
            'ḫ': 'h',
            'ȟ': 'h',
            'ḩ': 'h',
            'ĥ': 'h',
            'ⱨ': 'h',
            'ḧ': 'h',
            'ḣ': 'h',
            'ḥ': 'h',
            'ɦ': 'h',
            'ẖ': 'h',
            'ħ': 'h',
            'ƕ': 'hv',
            'í': 'i',
            'ĭ': 'i',
            'ǐ': 'i',
            'î': 'i',
            'ï': 'i',
            'ḯ': 'i',
            'ị': 'i',
            'ȉ': 'i',
            'ì': 'i',
            'ỉ': 'i',
            'ȋ': 'i',
            'ī': 'i',
            'į': 'i',
            'ᶖ': 'i',
            'ɨ': 'i',
            'ĩ': 'i',
            'ḭ': 'i',
            'ꝺ': 'd',
            'ꝼ': 'f',
            'ᵹ': 'g',
            'ꞃ': 'r',
            'ꞅ': 's',
            'ꞇ': 't',
            'ꝭ': 'is',
            'ǰ': 'j',
            'ĵ': 'j',
            'ʝ': 'j',
            'ɉ': 'j',
            'ḱ': 'k',
            'ǩ': 'k',
            'ķ': 'k',
            'ⱪ': 'k',
            'ꝃ': 'k',
            'ḳ': 'k',
            'ƙ': 'k',
            'ḵ': 'k',
            'ᶄ': 'k',
            'ꝁ': 'k',
            'ꝅ': 'k',
            'ĺ': 'l',
            'ƚ': 'l',
            'ɬ': 'l',
            'ľ': 'l',
            'ļ': 'l',
            'ḽ': 'l',
            'ȴ': 'l',
            'ḷ': 'l',
            'ḹ': 'l',
            'ⱡ': 'l',
            'ꝉ': 'l',
            'ḻ': 'l',
            'ŀ': 'l',
            'ɫ': 'l',
            'ᶅ': 'l',
            'ɭ': 'l',
            'ł': 'l',
            'ǉ': 'lj',
            'ſ': 's',
            'ẜ': 's',
            'ẛ': 's',
            'ẝ': 's',
            'ḿ': 'm',
            'ṁ': 'm',
            'ṃ': 'm',
            'ɱ': 'm',
            'ᵯ': 'm',
            'ᶆ': 'm',
            'ń': 'n',
            'ň': 'n',
            'ņ': 'n',
            'ṋ': 'n',
            'ȵ': 'n',
            'ṅ': 'n',
            'ṇ': 'n',
            'ǹ': 'n',
            'ɲ': 'n',
            'ṉ': 'n',
            'ƞ': 'n',
            'ᵰ': 'n',
            'ᶇ': 'n',
            'ɳ': 'n',
            'ñ': 'n',
            'ǌ': 'nj',
            'ó': 'o',
            'ŏ': 'o',
            'ǒ': 'o',
            'ô': 'o',
            'ố': 'o',
            'ộ': 'o',
            'ồ': 'o',
            'ổ': 'o',
            'ỗ': 'o',
            'ö': 'o',
            'ȫ': 'o',
            'ȯ': 'o',
            'ȱ': 'o',
            'ọ': 'o',
            'ő': 'o',
            'ȍ': 'o',
            'ò': 'o',
            'ỏ': 'o',
            'ơ': 'o',
            'ớ': 'o',
            'ợ': 'o',
            'ờ': 'o',
            'ở': 'o',
            'ỡ': 'o',
            'ȏ': 'o',
            'ꝋ': 'o',
            'ꝍ': 'o',
            'ⱺ': 'o',
            'ō': 'o',
            'ṓ': 'o',
            'ṑ': 'o',
            'ǫ': 'o',
            'ǭ': 'o',
            'ø': 'o',
            'ǿ': 'o',
            'õ': 'o',
            'ṍ': 'o',
            'ṏ': 'o',
            'ȭ': 'o',
            'ƣ': 'oi',
            'ꝏ': 'oo',
            'ɛ': 'e',
            'ᶓ': 'e',
            'ɔ': 'o',
            'ᶗ': 'o',
            'ȣ': 'ou',
            'ṕ': 'p',
            'ṗ': 'p',
            'ꝓ': 'p',
            'ƥ': 'p',
            'ᵱ': 'p',
            'ᶈ': 'p',
            'ꝕ': 'p',
            'ᵽ': 'p',
            'ꝑ': 'p',
            'ꝙ': 'q',
            'ʠ': 'q',
            'ɋ': 'q',
            'ꝗ': 'q',
            'ŕ': 'r',
            'ř': 'r',
            'ŗ': 'r',
            'ṙ': 'r',
            'ṛ': 'r',
            'ṝ': 'r',
            'ȑ': 'r',
            'ɾ': 'r',
            'ᵳ': 'r',
            'ȓ': 'r',
            'ṟ': 'r',
            'ɼ': 'r',
            'ᵲ': 'r',
            'ᶉ': 'r',
            'ɍ': 'r',
            'ɽ': 'r',
            'ↄ': 'c',
            'ꜿ': 'c',
            'ɘ': 'e',
            'ɿ': 'r',
            'ś': 's',
            'ṥ': 's',
            'š': 's',
            'ṧ': 's',
            'ş': 's',
            'ŝ': 's',
            'ș': 's',
            'ṡ': 's',
            'ṣ': 's',
            'ṩ': 's',
            'ʂ': 's',
            'ᵴ': 's',
            'ᶊ': 's',
            'ȿ': 's',
            'ɡ': 'g',
            'ß': 'ss',
            'ᴑ': 'o',
            'ᴓ': 'o',
            'ᴝ': 'u',
            'ť': 't',
            'ţ': 't',
            'ṱ': 't',
            'ț': 't',
            'ȶ': 't',
            'ẗ': 't',
            'ⱦ': 't',
            'ṫ': 't',
            'ṭ': 't',
            'ƭ': 't',
            'ṯ': 't',
            'ᵵ': 't',
            'ƫ': 't',
            'ʈ': 't',
            'ŧ': 't',
            'ᵺ': 'th',
            'ɐ': 'a',
            'ᴂ': 'ae',
            'ǝ': 'e',
            'ᵷ': 'g',
            'ɥ': 'h',
            'ʮ': 'h',
            'ʯ': 'h',
            'ᴉ': 'i',
            'ʞ': 'k',
            'ꞁ': 'l',
            'ɯ': 'm',
            'ɰ': 'm',
            'ᴔ': 'oe',
            'ɹ': 'r',
            'ɻ': 'r',
            'ɺ': 'r',
            'ⱹ': 'r',
            'ʇ': 't',
            'ʌ': 'v',
            'ʍ': 'w',
            'ʎ': 'y',
            'ꜩ': 'tz',
            'ú': 'u',
            'ŭ': 'u',
            'ǔ': 'u',
            'û': 'u',
            'ṷ': 'u',
            'ü': 'u',
            'ǘ': 'u',
            'ǚ': 'u',
            'ǜ': 'u',
            'ǖ': 'u',
            'ṳ': 'u',
            'ụ': 'u',
            'ű': 'u',
            'ȕ': 'u',
            'ù': 'u',
            'ủ': 'u',
            'ư': 'u',
            'ứ': 'u',
            'ự': 'u',
            'ừ': 'u',
            'ử': 'u',
            'ữ': 'u',
            'ȗ': 'u',
            'ū': 'u',
            'ṻ': 'u',
            'ų': 'u',
            'ᶙ': 'u',
            'ů': 'u',
            'ũ': 'u',
            'ṹ': 'u',
            'ṵ': 'u',
            'ᵫ': 'ue',
            'ꝸ': 'um',
            'ⱴ': 'v',
            'ꝟ': 'v',
            'ṿ': 'v',
            'ʋ': 'v',
            'ᶌ': 'v',
            'ⱱ': 'v',
            'ṽ': 'v',
            'ꝡ': 'vy',
            'ẃ': 'w',
            'ŵ': 'w',
            'ẅ': 'w',
            'ẇ': 'w',
            'ẉ': 'w',
            'ẁ': 'w',
            'ⱳ': 'w',
            'ẘ': 'w',
            'ẍ': 'x',
            'ẋ': 'x',
            'ᶍ': 'x',
            'ý': 'y',
            'ŷ': 'y',
            'ÿ': 'y',
            'ẏ': 'y',
            'ỵ': 'y',
            'ỳ': 'y',
            'ƴ': 'y',
            'ỷ': 'y',
            'ỿ': 'y',
            'ȳ': 'y',
            'ẙ': 'y',
            'ɏ': 'y',
            'ỹ': 'y',
            'ź': 'z',
            'ž': 'z',
            'ẑ': 'z',
            'ʑ': 'z',
            'ⱬ': 'z',
            'ż': 'z',
            'ẓ': 'z',
            'ȥ': 'z',
            'ẕ': 'z',
            'ᵶ': 'z',
            'ᶎ': 'z',
            'ʐ': 'z',
            'ƶ': 'z',
            'ɀ': 'z',
            'ﬀ': 'ff',
            'ﬃ': 'ffi',
            'ﬄ': 'ffl',
            'ﬁ': 'fi',
            'ﬂ': 'fl',
            'ĳ': 'ij',
            'œ': 'oe',
            'ﬆ': 'st',
            'ₐ': 'a',
            'ₑ': 'e',
            'ᵢ': 'i',
            'ⱼ': 'j',
            'ₒ': 'o',
            'ᵣ': 'r',
            'ᵤ': 'u',
            'ᵥ': 'v',
            'ₓ': 'x',
        };
    }
    transform(text, chars = '\\s') {
        return isString(text)
            ? text.replace(/[^A-Za-z0-9]/g, (key) => {
                return this.latinMap[key] || key;
            })
            : text;
    }
}
LatinisePipe.ɵfac = function LatinisePipe_Factory(t) { return new (t || LatinisePipe)(); };
LatinisePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "latinise", type: LatinisePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatinisePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'latinise' }]
    }], function () { return []; }, null); })();

class LinesPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(/\r\n/g, '\n').split('\n') : text;
    }
}
LinesPipe.ɵfac = function LinesPipe_Factory(t) { return new (t || LinesPipe)(); };
LinesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "lines", type: LinesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'lines' }]
    }], null, null); })();

class UnderscorePipe {
    transform(text, chars = '\\s') {
        return isString(text)
            ? text
                .trim()
                .replace(/\s+/g, '')
                .replace(/[A-Z]/g, (c, k) => {
                return k ? `_${c.toLowerCase()}` : c.toLowerCase();
            })
            : text;
    }
}
UnderscorePipe.ɵfac = function UnderscorePipe_Factory(t) { return new (t || UnderscorePipe)(); };
UnderscorePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "underscore", type: UnderscorePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderscorePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'underscore' }]
    }], null, null); })();

class MatchPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return text.match(new RegExp(pattern, flags));
    }
}
MatchPipe.ɵfac = function MatchPipe_Factory(t) { return new (t || MatchPipe)(); };
MatchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "match", type: MatchPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'match' }]
    }], null, null); })();

class TestPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return new RegExp(pattern, flags).test(text);
    }
}
TestPipe.ɵfac = function TestPipe_Factory(t) { return new (t || TestPipe)(); };
TestPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "test", type: TestPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'test' }]
    }], null, null); })();

class LeftPadPipe {
    transform(str, length, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = padCharacter + str;
        }
        return str;
    }
}
LeftPadPipe.ɵfac = function LeftPadPipe_Factory(t) { return new (t || LeftPadPipe)(); };
LeftPadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "lpad", type: LeftPadPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftPadPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'lpad' }]
    }], null, null); })();

class RightPadPipe {
    transform(str, length = 1, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = str + padCharacter;
        }
        return str;
    }
}
RightPadPipe.ɵfac = function RightPadPipe_Factory(t) { return new (t || RightPadPipe)(); };
RightPadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rpad", type: RightPadPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightPadPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'rpad' }]
    }], null, null); })();

/**
 * Takes a singular entity string and pluralizes it.
 * Uses both naive and holdout-list approaches.
 * If several words appear in the string, only the last word is pluralized -- this
 * means that if "your story" was passed in, "your stories" would be passed out.
 *
 * @param {string} singularEntity - Entity to pluralize. Pass as a singular ('story' or 'house').
 *          NOTE: The last word is examined. So you can pass in e.g. 'my story'.
 * @param {number} [quantity=0] quantity - How many of the entity are there? If left blank, this will
 *          pluralize the string (e.g. 'story' -> 'stories', 'house' -> 'houses'). If given a value,
 *          this will pluralize appropriately (e.g. ('story', 1) -> 'story', ('story', 2) -> 'stories').
 */
class MakePluralStringPipe {
    constructor() {
        this.irregularMap = {
            addendum: 'addenda',
            alga: 'algae',
            alumna: 'alumnae',
            alumnus: 'alumni',
            analysis: 'analyses',
            antenna: 'antennae',
            appendix: 'appendices',
            aquarium: 'aquaria',
            arch: 'arches',
            axe: 'axes',
            axis: 'axes',
            bacillus: 'bacilli',
            bacterium: 'bacteria',
            basis: 'bases',
            batch: 'batches',
            beach: 'beaches',
            beau: 'beaux',
            bison: 'bison',
            brush: 'brushes',
            buffalo: 'buffaloes',
            bureau: 'bureaus',
            bus: 'busses',
            cactus: 'cacti',
            calf: 'calves',
            chateau: 'chateaux',
            cherry: 'cherries',
            child: 'children',
            church: 'churches',
            circus: 'circuses',
            cod: 'cod',
            corps: 'corps',
            corpus: 'corpora',
            crisis: 'crises',
            criterion: 'criteria',
            curriculum: 'curricula',
            datum: 'data',
            deer: 'deer',
            diagnosis: 'diagnoses',
            die: 'dice',
            domino: 'dominoes',
            dwarf: 'dwarves',
            echo: 'echoes',
            elf: 'elves',
            ellipsis: 'ellipses',
            embargo: 'embargoes',
            emphasis: 'emphases',
            erratum: 'errata',
            fax: 'faxes',
            fireman: 'firemen',
            fish: 'fish',
            flush: 'flushes',
            focus: 'foci',
            foot: 'feet',
            formula: 'formulas',
            fungus: 'fungi',
            genus: 'genera',
            goose: 'geese',
            grafito: 'grafiti',
            half: 'halves',
            hero: 'heroes',
            hoax: 'hoaxes',
            hoof: 'hooves',
            hypothesis: 'hypotheses',
            index: 'indices',
            kiss: 'kisses',
            knife: 'knives',
            leaf: 'leaves',
            life: 'lives',
            loaf: 'loaves',
            louse: 'lice',
            man: 'men',
            mango: 'mangoes',
            matrix: 'matrices',
            means: 'means',
            medium: 'media',
            memorandum: 'memoranda',
            millennium: 'milennia',
            moose: 'moose',
            mosquito: 'mosquitoes',
            motto: 'mottoes',
            mouse: 'mice',
            nebula: 'nebulae',
            neurosis: 'neuroses',
            nucleus: 'nuclei',
            oasis: 'oases',
            octopus: 'octopodes',
            ovum: 'ova',
            ox: 'oxen',
            paralysis: 'paralyses',
            parenthesis: 'parentheses',
            person: 'people',
            phenomenon: 'phenomena',
            plateau: 'plateaux',
            potato: 'potatoes',
            quiz: 'quizzes',
            radius: 'radii',
            reflex: 'reflexes',
            'runner-up': 'runners-up',
            scampo: 'scampi',
            scarf: 'scarves',
            scissors: 'scissors',
            scratch: 'scratches',
            self: 'selves',
            series: 'series',
            sheaf: 'sheaves',
            sheep: 'sheep',
            shelf: 'shelves',
            'son-in-law': 'sons-in-law',
            species: 'species',
            splash: 'splashes',
            stimulus: 'stimuli',
            stitch: 'stitches',
            stratum: 'strata',
            syllabus: 'syllabi',
            symposium: 'symposia',
            synopsis: 'synopses',
            synthesis: 'syntheses',
            tableau: 'tableaux',
            tax: 'taxes',
            that: 'those',
            thesis: 'theses',
            thief: 'thieves',
            this: 'these',
            tomato: 'tomatoes',
            tooth: 'teeth',
            tornado: 'tornadoes',
            torpedo: 'torpedoes',
            vertebra: 'vertebrae',
            veto: 'vetoes',
            vita: 'vitae',
            volcano: 'volcanoes',
            waltz: 'waltzes',
            wash: 'washes',
            watch: 'watches',
            wharf: 'wharves',
            wife: 'wives',
            wolf: 'wolves',
            woman: 'women',
            zero: 'zeroes',
        };
    }
    transform(singularEntity, quantity = 0) {
        if (!singularEntity || singularEntity === '') {
            return '';
        }
        if (quantity === 1) {
            return singularEntity;
        }
        else {
            const lastWord = singularEntity.trim().split(' ')[singularEntity.trim().split(' ').length - 1];
            if (this.irregularMap[lastWord.toLocaleLowerCase()]) {
                if (lastWord[0] === lastWord[0].toLocaleUpperCase()) {
                    return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()].replace(this.irregularMap[lastWord.toLocaleLowerCase()][0], this.irregularMap[lastWord.toLocaleLowerCase()][0].toLocaleUpperCase()));
                }
                return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()]);
            }
            else if (lastWord[lastWord.length - 1] === 'y') {
                // Naive approach:
                // consonant+y = word - 'y' +'ies'
                // vowel+y = word + 's'
                return isVowel(lastWord[lastWord.length - 2])
                    ? singularEntity + 's'
                    : singularEntity.replace(lastWord, lastWord.slice(0, -1) + 'ies');
            }
            else if (lastWord[lastWord.length - 1] === 's') {
                return singularEntity + 'es';
            }
            else {
                return singularEntity + 's';
            }
        }
    }
}
MakePluralStringPipe.ɵfac = function MakePluralStringPipe_Factory(t) { return new (t || MakePluralStringPipe)(); };
MakePluralStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "makePluralString", type: MakePluralStringPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakePluralStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'makePluralString'
            }]
    }], function () { return []; }, null); })();

class WrapPipe {
    transform(str, prefix = '', suffix = '') {
        if (!isString(str)) {
            return str;
        }
        return (!!prefix && isString(prefix) ? prefix : '') + str + (!!suffix && isString(suffix) ? suffix : '');
    }
}
WrapPipe.ɵfac = function WrapPipe_Factory(t) { return new (t || WrapPipe)(); };
WrapPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "wrap", type: WrapPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'wrap' }]
    }], null, null); })();

const STRING_PIPES = [
    AorAnPipe,
    LeftTrimPipe,
    RepeatPipe,
    RightTrimPipe,
    ScanPipe,
    ShortenPipe,
    StripTagsPipe,
    TrimPipe,
    UcFirstPipe,
    UcWordsPipe,
    SlugifyPipe,
    CamelizePipe,
    LatinisePipe,
    LinesPipe,
    UnderscorePipe,
    MatchPipe,
    TestPipe,
    LeftPadPipe,
    RightPadPipe,
    MakePluralStringPipe,
    WrapPipe,
];
class NgStringPipesModule {
}
NgStringPipesModule.ɵfac = function NgStringPipesModule_Factory(t) { return new (t || NgStringPipesModule)(); };
NgStringPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgStringPipesModule });
NgStringPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgStringPipesModule, { declarations: [AorAnPipe, LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe, StripTagsPipe, TrimPipe, UcFirstPipe, UcWordsPipe, SlugifyPipe, CamelizePipe, LatinisePipe, LinesPipe, UnderscorePipe, MatchPipe, TestPipe, LeftPadPipe, RightPadPipe, MakePluralStringPipe, WrapPipe], exports: [AorAnPipe, LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe, StripTagsPipe, TrimPipe, UcFirstPipe, UcWordsPipe, SlugifyPipe, CamelizePipe, LatinisePipe, LinesPipe, UnderscorePipe, MatchPipe, TestPipe, LeftPadPipe, RightPadPipe, MakePluralStringPipe, WrapPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgStringPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: STRING_PIPES,
                imports: [],
                exports: STRING_PIPES
            }]
    }], null, null); })();

class MaxPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.max(...arr) : arr;
    }
}
MaxPipe.ɵfac = function MaxPipe_Factory(t) { return new (t || MaxPipe)(); };
MaxPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "max", type: MaxPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'max' }]
    }], null, null); })();

class MinPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.min(...arr) : arr;
    }
}
MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
MinPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "min", type: MinPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'min' }]
    }], null, null); })();

class PercentagePipe {
    transform(num, total = 100, floor = false) {
        if (isNaN(num)) {
            return num;
        }
        const percent = (num * 100) / total;
        return floor ? Math.floor(percent) : percent;
    }
}
PercentagePipe.ɵfac = function PercentagePipe_Factory(t) { return new (t || PercentagePipe)(); };
PercentagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "percentage", type: PercentagePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PercentagePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'percentage' }]
    }], null, null); })();

class SumPipe {
    transform(arr) {
        return Array.isArray(arr) ? arr.reduce((sum, curr) => sum + curr, 0) : arr;
    }
}
SumPipe.ɵfac = function SumPipe_Factory(t) { return new (t || SumPipe)(); };
SumPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sum", type: SumPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SumPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'sum' }]
    }], null, null); })();

class FloorPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.floor(num);
        }
        const tho = Math.pow(10, precision);
        return Math.floor(num * tho) / tho;
    }
}
FloorPipe.ɵfac = function FloorPipe_Factory(t) { return new (t || FloorPipe)(); };
FloorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "floor", type: FloorPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'floor' }]
    }], null, null); })();

class RoundPipe {
    transform(num, precision = 0) {
        return applyPrecision(num, precision);
    }
}
RoundPipe.ɵfac = function RoundPipe_Factory(t) { return new (t || RoundPipe)(); };
RoundPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "round", type: RoundPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'round' }]
    }], null, null); })();

class SqrtPipe {
    transform(num) {
        return !isNaN(num) ? Math.sqrt(num) : num;
    }
}
SqrtPipe.ɵfac = function SqrtPipe_Factory(t) { return new (t || SqrtPipe)(); };
SqrtPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sqrt", type: SqrtPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SqrtPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'sqrt' }]
    }], null, null); })();

class PowerPipe {
    transform(num, power = 2) {
        return !isNaN(num) ? Math.pow(num, power) : num;
    }
}
PowerPipe.ɵfac = function PowerPipe_Factory(t) { return new (t || PowerPipe)(); };
PowerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pow", type: PowerPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PowerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'pow' }]
    }], null, null); })();

class CeilPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.ceil(num);
        }
        const tho = Math.pow(10, precision);
        return Math.ceil(num * tho) / tho;
    }
}
CeilPipe.ɵfac = function CeilPipe_Factory(t) { return new (t || CeilPipe)(); };
CeilPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ceil", type: CeilPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CeilPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ceil' }]
    }], null, null); })();

class DegreesPipe {
    transform(radians) {
        if (!isNumberFinite(radians)) {
            return NaN;
        }
        return (radians * 180) / Math.PI;
    }
}
DegreesPipe.ɵfac = function DegreesPipe_Factory(t) { return new (t || DegreesPipe)(); };
DegreesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "degrees", type: DegreesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DegreesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'degrees' }]
    }], null, null); })();

class BytesPipe {
    constructor() {
        this.dictionary = [
            { max: 1024, type: 'B' },
            { max: 1048576, type: 'KB' },
            { max: 1073741824, type: 'MB' },
            { max: 1.0995116e12, type: 'GB' },
        ];
    }
    transform(value, precision) {
        if (!isNumberFinite(value)) {
            return NaN;
        }
        const format = this.dictionary.find(d => value < d.max) || this.dictionary[this.dictionary.length - 1];
        const calc = value / (format.max / 1024);
        const num = isUndefined(precision) ? calc : applyPrecision(calc, precision);
        return `${num} ${format.type}`;
    }
}
BytesPipe.ɵfac = function BytesPipe_Factory(t) { return new (t || BytesPipe)(); };
BytesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bytes", type: BytesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BytesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'bytes' }]
    }], function () { return []; }, null); })();

class RadiansPipe {
    transform(degrees) {
        if (!isNumberFinite(degrees)) {
            return NaN;
        }
        return (degrees * Math.PI) / 180;
    }
}
RadiansPipe.ɵfac = function RadiansPipe_Factory(t) { return new (t || RadiansPipe)(); };
RadiansPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "radians", type: RadiansPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadiansPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'radians' }]
    }], null, null); })();

const MATH_PIPES = [
    MaxPipe,
    MinPipe,
    PercentagePipe,
    SumPipe,
    FloorPipe,
    RoundPipe,
    SqrtPipe,
    PowerPipe,
    CeilPipe,
    DegreesPipe,
    BytesPipe,
    RadiansPipe,
];
class NgMathPipesModule {
}
NgMathPipesModule.ɵfac = function NgMathPipesModule_Factory(t) { return new (t || NgMathPipesModule)(); };
NgMathPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgMathPipesModule });
NgMathPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgMathPipesModule, { declarations: [MaxPipe, MinPipe, PercentagePipe, SumPipe, FloorPipe, RoundPipe, SqrtPipe, PowerPipe, CeilPipe, DegreesPipe, BytesPipe, RadiansPipe], exports: [MaxPipe, MinPipe, PercentagePipe, SumPipe, FloorPipe, RoundPipe, SqrtPipe, PowerPipe, CeilPipe, DegreesPipe, BytesPipe, RadiansPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMathPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: MATH_PIPES,
                imports: [],
                exports: MATH_PIPES
            }]
    }], null, null); })();

class IsDefinedPipe {
    transform(input) {
        return !isUndefined(input);
    }
}
IsDefinedPipe.ɵfac = function IsDefinedPipe_Factory(t) { return new (t || IsDefinedPipe)(); };
IsDefinedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isDefined", type: IsDefinedPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsDefinedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isDefined' }]
    }], null, null); })();

class IsNullPipe {
    transform(input) {
        return input === null;
    }
}
IsNullPipe.ɵfac = function IsNullPipe_Factory(t) { return new (t || IsNullPipe)(); };
IsNullPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isNull", type: IsNullPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNullPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isNull' }]
    }], null, null); })();

class IsUndefinedPipe {
    transform(input) {
        return isUndefined(input);
    }
}
IsUndefinedPipe.ɵfac = function IsUndefinedPipe_Factory(t) { return new (t || IsUndefinedPipe)(); };
IsUndefinedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isUndefined", type: IsUndefinedPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsUndefinedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isUndefined' }]
    }], null, null); })();

class IsStringPipe {
    transform(input) {
        return isString(input);
    }
}
IsStringPipe.ɵfac = function IsStringPipe_Factory(t) { return new (t || IsStringPipe)(); };
IsStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isString", type: IsStringPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isString' }]
    }], null, null); })();

class IsFunctionPipe {
    transform(input) {
        return isFunction(input);
    }
}
IsFunctionPipe.ɵfac = function IsFunctionPipe_Factory(t) { return new (t || IsFunctionPipe)(); };
IsFunctionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isFunction", type: IsFunctionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsFunctionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isFunction' }]
    }], null, null); })();

class IsNumberPipe {
    transform(input) {
        return isNumber(input);
    }
}
IsNumberPipe.ɵfac = function IsNumberPipe_Factory(t) { return new (t || IsNumberPipe)(); };
IsNumberPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isNumber", type: IsNumberPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNumberPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isNumber' }]
    }], null, null); })();

class IsArrayPipe {
    transform(input) {
        return Array.isArray(input);
    }
}
IsArrayPipe.ɵfac = function IsArrayPipe_Factory(t) { return new (t || IsArrayPipe)(); };
IsArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isArray", type: IsArrayPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsArrayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isArray' }]
    }], null, null); })();

class IsObjectPipe {
    transform(input) {
        return isObject(input);
    }
}
IsObjectPipe.ɵfac = function IsObjectPipe_Factory(t) { return new (t || IsObjectPipe)(); };
IsObjectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isObject", type: IsObjectPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsObjectPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isObject' }]
    }], null, null); })();

class IsGreaterEqualThanPipe {
    transform(input, other) {
        return input >= other;
    }
}
IsGreaterEqualThanPipe.ɵfac = function IsGreaterEqualThanPipe_Factory(t) { return new (t || IsGreaterEqualThanPipe)(); };
IsGreaterEqualThanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isGreaterEqualThan", type: IsGreaterEqualThanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsGreaterEqualThanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isGreaterEqualThan' }]
    }], null, null); })();

class IsGreaterThanPipe {
    transform(input, other) {
        return input > other;
    }
}
IsGreaterThanPipe.ɵfac = function IsGreaterThanPipe_Factory(t) { return new (t || IsGreaterThanPipe)(); };
IsGreaterThanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isGreaterThan", type: IsGreaterThanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsGreaterThanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isGreaterThan' }]
    }], null, null); })();

class IsLessEqualThanPipe {
    transform(input, other) {
        return input <= other;
    }
}
IsLessEqualThanPipe.ɵfac = function IsLessEqualThanPipe_Factory(t) { return new (t || IsLessEqualThanPipe)(); };
IsLessEqualThanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isLessEqualThan", type: IsLessEqualThanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsLessEqualThanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isLessEqualThan' }]
    }], null, null); })();

class IsEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input == other;
    }
}
IsEqualToPipe.ɵfac = function IsEqualToPipe_Factory(t) { return new (t || IsEqualToPipe)(); };
IsEqualToPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isEqualTo", type: IsEqualToPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsEqualToPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isEqualTo' }]
    }], null, null); })();

class IsNotEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input != other;
    }
}
IsNotEqualToPipe.ɵfac = function IsNotEqualToPipe_Factory(t) { return new (t || IsNotEqualToPipe)(); };
IsNotEqualToPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isNotEqualTo", type: IsNotEqualToPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNotEqualToPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isNotEqualTo' }]
    }], null, null); })();

class IsIdenticalToPipe {
    transform(input, other) {
        return input === other;
    }
}
IsIdenticalToPipe.ɵfac = function IsIdenticalToPipe_Factory(t) { return new (t || IsIdenticalToPipe)(); };
IsIdenticalToPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isIdenticalTo", type: IsIdenticalToPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsIdenticalToPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isIdenticalTo' }]
    }], null, null); })();

class IsNotIdenticalToPipe {
    transform(input, other) {
        return input !== other;
    }
}
IsNotIdenticalToPipe.ɵfac = function IsNotIdenticalToPipe_Factory(t) { return new (t || IsNotIdenticalToPipe)(); };
IsNotIdenticalToPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isNotIdenticalTo", type: IsNotIdenticalToPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNotIdenticalToPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isNotIdenticalTo' }]
    }], null, null); })();

class IsLessThanPipe {
    transform(input, other) {
        return input < other;
    }
}
IsLessThanPipe.ɵfac = function IsLessThanPipe_Factory(t) { return new (t || IsLessThanPipe)(); };
IsLessThanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isLessThan", type: IsLessThanPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsLessThanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'isLessThan' }]
    }], null, null); })();

const BOOLEAN_PIPES = [
    IsDefinedPipe,
    IsNullPipe,
    IsUndefinedPipe,
    IsStringPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsArrayPipe,
    IsObjectPipe,
    IsGreaterEqualThanPipe,
    IsGreaterThanPipe,
    IsLessEqualThanPipe,
    IsLessEqualThanPipe,
    IsEqualToPipe,
    IsNotEqualToPipe,
    IsIdenticalToPipe,
    IsNotIdenticalToPipe,
    IsLessThanPipe,
];
class NgBooleanPipesModule {
}
NgBooleanPipesModule.ɵfac = function NgBooleanPipesModule_Factory(t) { return new (t || NgBooleanPipesModule)(); };
NgBooleanPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgBooleanPipesModule });
NgBooleanPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgBooleanPipesModule, { declarations: [IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe, IsArrayPipe, IsObjectPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsLessEqualThanPipe, IsLessEqualThanPipe, IsEqualToPipe, IsNotEqualToPipe, IsIdenticalToPipe, IsNotIdenticalToPipe, IsLessThanPipe], exports: [IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe, IsArrayPipe, IsObjectPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsLessEqualThanPipe, IsLessEqualThanPipe, IsEqualToPipe, IsNotEqualToPipe, IsIdenticalToPipe, IsNotIdenticalToPipe, IsLessThanPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgBooleanPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: BOOLEAN_PIPES,
                imports: [],
                exports: BOOLEAN_PIPES
            }]
    }], null, null); })();

class TimeAgoPipe {
    /**
     * @param inputDate: Date | Moment - not included as TypeScript interface,
     * in order to keep `ngx-pipes` "pure" from dependencies!
     */
    transform(inputDate) {
        if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
            return 'Invalid date';
        }
        const past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
        const now = +new Date();
        if (past > now) {
            return 'in the future';
        }
        for (let i = 0, l = TimeAgoPipe.MAPPER.length, ms = now - past, div = TimeAgoPipe.YEAR_MS; i < l; ++i) {
            const elm = TimeAgoPipe.MAPPER[i];
            const unit = Math.floor(ms / (div /= elm.div));
            if (unit >= 1) {
                return unit === 1 ? elm.single : `${unit} ${elm.many} ago`;
            }
        }
        return 'just now';
    }
}
TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) { return new (t || TimeAgoPipe)(); };
TimeAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timeAgo", type: TimeAgoPipe, pure: true });
TimeAgoPipe.YEAR_MS = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
TimeAgoPipe.MAPPER = [
    { single: 'last year', many: 'years', div: 1 },
    { single: 'last month', many: 'months', div: 12 },
    { single: 'last week', many: 'weeks', div: 4 },
    { single: 'yesterday', many: 'days', div: 7 },
    { single: 'an hour ago', many: 'hours', div: 24 },
    { single: 'just now', many: 'minutes', div: 60 },
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'timeAgo' }]
    }], null, null); })();

const DATE_PIPES = [TimeAgoPipe];
class NgDatePipesModule {
}
NgDatePipesModule.ɵfac = function NgDatePipesModule_Factory(t) { return new (t || NgDatePipesModule)(); };
NgDatePipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgDatePipesModule });
NgDatePipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgDatePipesModule, { declarations: [TimeAgoPipe], exports: [TimeAgoPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDatePipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DATE_PIPES,
                imports: [],
                exports: DATE_PIPES
            }]
    }], null, null); })();

class NgPipesModule {
}
NgPipesModule.ɵfac = function NgPipesModule_Factory(t) { return new (t || NgPipesModule)(); };
NgPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgPipesModule });
NgPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule, NgDatePipesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgPipesModule, { exports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule, NgDatePipesModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    NgArrayPipesModule,
                    NgStringPipesModule,
                    NgMathPipesModule,
                    NgBooleanPipesModule,
                    NgObjectPipesModule,
                    NgDatePipesModule,
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-pipes.js.map

/***/ }),

/***/ "b39p":
/*!***********************************************************!*\
  !*** ./src/app/shared/meeting-vc/meeting-vc.component.ts ***!
  \***********************************************************/
/*! exports provided: MeetingVcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingVcComponent", function() { return MeetingVcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_meeting_vc_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./meeting-vc.component.html */ "CbED");
/* harmony import */ var _meeting_vc_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting-vc.component.css */ "qgPz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/payment.service */ "s5zK");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");













let MeetingVcComponent = class MeetingVcComponent {
    constructor(alertService, appRouterService, socketService, ref, payment, utilityService) {
        this.alertService = alertService;
        this.appRouterService = appRouterService;
        this.socketService = socketService;
        this.ref = ref;
        this.payment = payment;
        this.utilityService = utilityService;
        this.title = 'app';
        this.domain = "host.avitii.com";
        this.loading = false;
        this.showExtendSessionButtonForRole = false;
        this.TimerExpired = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.SearchDate = moment__WEBPACK_IMPORTED_MODULE_8__();
        this.ElapsTime = 60;
        this.MinimumTime4Extend = 60;
        this.showExtendSessionButton = false;
        this.everySecond = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000);
        this.userInitiatedForPayment = false;
        let paramobj = history.state;
        if (paramobj) {
            this.roomName = paramobj['roomId'];
            this.loanId = paramobj['loanId'];
            this.currentUser = paramobj['currentUser'];
            if (this.currentUser) {
                switch (this.currentUser.role) {
                    case src_app_models__WEBPACK_IMPORTED_MODULE_10__["Role"].Lender:
                        this.showExtendSessionButtonForRole = true;
                        break;
                    default:
                        this.showExtendSessionButtonForRole = false;
                        break;
                }
            }
            delete history.state['roomId'];
            delete history.state['usersDisplayName'];
            if (this.loanId) {
                this.socketService.getByIdSessions(this.loanId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                    .subscribe(data => {
                    this.loanStartDateTime = this.utilityService._.now();
                    //console.log('data => ', data)
                    if (data && data['success']) {
                        //alert(JSON.stringify( data));
                        this.sessionObj = data['data'];
                        let useThisElapsTime = null;
                        let _loanEndDateTime = null;
                        if (this.sessionObj.sessionsExecutionCollection) {
                            for (let item in this.sessionObj.sessionsExecutionCollection) {
                                if (this.loanStartDateTime >= this.sessionObj.sessionsExecutionCollection[item].loanEndDateTime) {
                                    this.alertService.error("You have already exceeded allotated session period.", true);
                                    this.appRouterService.appRouter(this.currentUser);
                                    return;
                                }
                                _loanEndDateTime = this.sessionObj.sessionsExecutionCollection[item].loanEndDateTime;
                                useThisElapsTime = (((this.sessionObj.sessionsExecutionCollection[item].loanEndDateTime - this.loanStartDateTime) / 60) / 1000);
                            }
                        }
                        this.extendCurrenSession(true, useThisElapsTime, _loanEndDateTime, null);
                        this.startMyVcSession();
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
                return;
            }
        }
        this.startMyVcSession();
    }
    startMyVcSession() {
        this.roomName = (this.roomName ? this.roomName : null); //"va8979"
        if (!this.roomName) {
            this.appRouterService.appRouter(this.currentUser);
            return;
        }
        if (window.cordova) {
            // mobile app case for video calling
            jitsiplugin.loadURL('https://host.avitii.com/' + this.roomName, this.roomName, false, function (data) {
                if (data === "CONFERENCE_WILL_LEAVE") {
                    jitsiplugin.destroy(function (data) {
                        // call finished
                        this.appRouterService.appRouter(this.currentUser);
                    }, function (err) {
                        console.log(err);
                    });
                }
                jitsiplugin.onConferenceTerminated(function (data) {
                    this.videoConferenceLeft(data);
                });
            }, function (err) {
                console.log(err);
            });
        }
        else {
            //web case for video calling
            this.options = {
                roomName: this.roomName,
                // width: 700,
                // height: 470,
                userInfo: {
                    displayName: this.currentUser["firstName"] || 'Guest'
                },
                parentNode: document.querySelector('#vc_meeting_div'),
            };
            this.api = new JitsiMeetExternalAPI(this.domain, this.options);
            this.api.addEventListeners({
                'incomingMessage': this.incomingMessageListener,
                'outgoingMessage': this.outgoingMessageListener,
                'videoConferenceLeft': this.videoConferenceLeft,
                'suspendDetected': this.suspendDetected
            });
            this.api.on('ended', function (e) {
                //debugger;
            });
            this.api.on('CallEnded', function (e) {
                //debugger;
            });
            this.api.executeCommand('subject', this.sessionObj.sessionSubject);
        }
    }
    incomingMessageListener(object) {
        //debugger;
    }
    outgoingMessageListener(object) {
    }
    suspendDetected(object) {
        //debugger;
        this.dispose();
        //this.alertService.success('VC has been disconnected');
        //this.appRouterService.appRouter(this.currentUser);
        window.location.reload();
    }
    videoConferenceLeft(object) {
        //debugger;
        this.dispose();
        //this.alertService.success('VC has been disconnected');
        //this.appRouterService.appRouter(this.currentUser);
        window.location.reload();
    }
    dispose() {
        //debugger;
    }
    ngOnDestroy() {
        if (this.api) {
            this.api.removeEventListeners(['incomingMessage', 'outgoingMessage', 'videoConferenceLeft', 'suspendDetected']);
            this.api.dispose();
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    startTimer() {
        this.subscription = this.everySecond.subscribe((seconds) => {
            var currentTime = moment__WEBPACK_IMPORTED_MODULE_8__();
            this.remainingTime = this.searchEndDate.diff(currentTime);
            this.remainingTime = (this.remainingTime / (1000));
            if (this.remainingTime <= 0) {
                this.alertService.error("Session time limit expired...");
                //this.SearchDate = moment();
                //this.searchEndDate = this.SearchDate.add(this.ElapsTime, "minutes");
                //this.TimerExpired.emit();
                this.showExtendSessionButton = false;
                if (this.api) {
                    this.api.removeEventListeners(['incomingMessage', 'outgoingMessage', 'videoConferenceLeft', 'suspendDetected']);
                    this.api.dispose();
                    this.alertService.error("You are now navigating back.", true);
                    this.appRouterService.appRouter(this.currentUser);
                    return;
                }
                else if (window.cordova) {
                    jitsiplugin.destroy();
                    this.alertService.error("You are now navigating back.", true);
                    this.appRouterService.appRouter(this.currentUser);
                    return;
                }
            }
            else {
                this.minutes = Math.floor(this.remainingTime / 60);
                if (this.minutes > 59) {
                    this.hours = Math.floor((this.remainingTime / 60) / 60);
                }
                else {
                    this.hours = 0;
                }
                this.minutes = Math.floor((this.remainingTime / 60) - (this.hours * 60));
                this.seconds = Math.floor(this.remainingTime - ((this.minutes * 60) + (this.hours * 60 * 60)));
            }
            if (this.minutes <= this.MinimumTime4Extend) {
                this.showExtendSessionButton = true;
            }
            else {
                this.showExtendSessionButton = false;
            }
            this.ref.markForCheck();
        });
    }
    extendCurrenSession(_initT, useThisElapsTime, _loanEndDateTime, _transactionDetailsObj) {
        this.SearchDate = moment__WEBPACK_IMPORTED_MODULE_8__();
        let _duration = ((useThisElapsTime || this.ElapsTime) + (this.minutes || 0));
        this.searchEndDate = this.SearchDate.add(_duration, "minutes");
        if (!_initT) {
            this.TimerExpired.emit();
            this.ref.markForCheck();
            this.alertService.success("Session time limit extended...");
        }
        else {
            this.startTimer();
        }
        //this.initiatePayment(this.sessionObj, 'asd');
        this.userInitiatedForPayment = false;
        let _loanId = this.loanId;
        let _loanApplyId = this.roomName;
        let _userId = this.currentUser._id;
        let _loanStartDateTime = this.loanStartDateTime;
        _loanEndDateTime = (_loanEndDateTime || Date.parse(this.searchEndDate.toISOString()));
        let _transactionId = null;
        if (_transactionDetailsObj) {
            _transactionId = (_transactionDetailsObj.transactionId || (_transactionDetailsObj.id || _transactionDetailsObj._id));
        }
        let _status = null;
        let _updatedOn = this.utilityService._.now();
        this.socketService.sendEventToUpdateCurrentSessionExecutionDetails(_loanId, _loanApplyId, _userId, _loanStartDateTime, _loanEndDateTime, _duration, _status, _updatedOn, _transactionId, src_app_models__WEBPACK_IMPORTED_MODULE_10__["TransactionActionType"].session_extended, _transactionDetailsObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                if (data['data']) {
                    if (data['data']["_id"]) {
                        this.sessionObj = data['data'];
                    }
                    else {
                        this.sessionObj = data['data'][0];
                    }
                }
                this.loading = false;
            }
            else {
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
    }
    initiatePayment(sessionObj, _loanApplyId) {
        this.userInitiatedForPayment = true;
        _loanApplyId = (_loanApplyId ? _loanApplyId : this.roomName);
        this.payment.clearCurrentPayPalConfig();
        let _loanId = sessionObj._id;
        let _sessionPrice = (sessionObj.loanAmount || 0.01) / 2;
        let _endUserId = this.currentUser._id;
        //initiate payment here
        let purchaseUnits = [
            {
                amount: {
                    custom_id: _loanId,
                    currency_code: 'USD',
                    value: _sessionPrice,
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: _sessionPrice
                        }
                    }
                },
                items: [
                    {
                        description: _loanApplyId,
                        name: src_app_models__WEBPACK_IMPORTED_MODULE_10__["TransactionActionType"].session_extended + '__' + _loanId,
                        quantity: '1',
                        category: 'DIGITAL_GOODS',
                        unit_amount: {
                            currency_code: 'USD',
                            value: _sessionPrice,
                        },
                    }
                ]
            }
        ];
        this.payment.getCurrentPaymentApproved().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(details => {
            this.extendCurrenSession(false, null, null, details);
            //this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, transactionId: details.id } });
        });
        this.payPalConfig = this.payment.initConfig(purchaseUnits, src_app_models__WEBPACK_IMPORTED_MODULE_10__["TransactionActionType"].session_extended, _endUserId);
    }
    ngOnInit() { }
};
MeetingVcComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_4__["AppRouterService"] },
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_6__["SocketioService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_11__["PaymentService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"] }
];
MeetingVcComponent.propDecorators = {
    TimerExpired: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    SearchDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ElapsTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    MinimumTime4Extend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MeetingVcComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-vc',
        template: _raw_loader_meeting_vc_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_vc_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_4__["AppRouterService"],
        src_app_socketio_service__WEBPACK_IMPORTED_MODULE_6__["SocketioService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_11__["PaymentService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]])
], MeetingVcComponent);



/***/ }),

/***/ "bLZ2":
/*!*******************************************************************!*\
  !*** ./src/app/shared/public-profile/public-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: PublicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileComponent", function() { return PublicProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_public_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./public-profile.component.html */ "7PL+");
/* harmony import */ var _public_profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public-profile.component.css */ "sa14");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/first */ "XoMe");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_9__);










let PublicProfileComponent = class PublicProfileComponent {
    constructor(utilityService, authenticationService, router, dialogRef, data, userService, alertService) {
        this.utilityService = utilityService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.alertService = alertService;
        this.portfolioDataArr = [];
        this.profileAdditionalData = {
            numberOfLoanCreated: null,
            numberOfSignedContract: null,
            numberOfRepaidContract: null,
            numberOfAmontBorrowed: null,
            numberOfAmontRefunded: null,
            numberOfAmountAvailableInBudget: null,
            recommended: null,
            notRecommended: null,
            borrowerIsInRKI: null,
        };
        this.loading = false;
        this.adminViewT = false;
        this.Role = src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"];
        this.userObj = data.userObj;
        if (data.adminViewT) {
            this.adminViewT = true;
        }
        this.userService.getUserProfilePortFolioByUserId(this.userObj._id)
            .pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                this.portfolioDataArr = data["data"];
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
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close({ event: 'close', data: this.userObj });
    }
    addNewRatings(_userObj, _loanId) {
        if (!_userObj || !_userObj._id) {
            return;
        }
        let _parentRouting = '';
        switch (this.authenticationService.currentUserValue.role) {
            case src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"].Borrower:
                _parentRouting = 'borrower';
                break;
            case src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"].Lender:
                _parentRouting = 'lender';
                break;
            case src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"].Admin:
                _parentRouting = 'admin';
                break;
        }
        this.router.navigate(['/' + _parentRouting + '/ratings'], { state: { createdBy: this.authenticationService.currentUserValue._id, userId: _userObj._id, loanId: _loanId } });
    }
    updateUsersVerificationStatus(_userId, _verifiedKey, _isVerified) {
        this.alertService.success("Please wait while we updating status of user");
        this.userService.updateUsersDataKeyVerificationStatus(_userId, _verifiedKey, _isVerified)
            .pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                this.userObj = data["data"];
                this.alertService.success(data['message']);
                this.loading = false;
            }
            else {
                this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            //this.PaymentTransactionDetailsArray = [];
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
PublicProfileComponent.ctorParameters = () => [
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
PublicProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-public-profile',
        template: _raw_loader_public_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_public_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], PublicProfileComponent);



/***/ }),

/***/ "bvaM":
/*!****************************************************************!*\
  !*** ./src/app/shared/session-view/session-view.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*********** Steps Start***************/\r\n.horizontal-tabs-steps {\r\n    position: relative;\r\n  }\r\n.horizontal-tabs-steps .nav-item {\r\n    z-index: 1;\r\n    position: relative;\r\n  }\r\n.horizontal-tabs-steps .nav-item:after {\r\n    content: \"\";\r\n    border-top: 5px dotted #73b6ff;\r\n    position: absolute;\r\n    z-index: 0;\r\n    top: 12px;\r\n    width: 265px;\r\n    left: 0px;\r\n    transition: border 1s ease-out;\r\n    transition-delay: 0s, 0s, 0.1s;\r\n  }\r\n.horizontal-tabs-steps .nav-item:last-child:after {\r\n    content: \"\";\r\n    border-top: 0px dotted #4da3ff;\r\n  }\r\n.horizontal-tabs-steps .nav-item.complete-step:after {\r\n    content: \"\";\r\n    border-top: 5px dotted #4d7ed2;\r\n    position: absolute;\r\n    z-index: 0;\r\n    top: 12px;\r\n    width: 265px;\r\n    left: 0px;\r\n    transition: border 1s ease-out;\r\n    transition-delay: 0s, 0s, 0.1s\r\n  }\r\n.horizontal-tabs-steps .nav-link {\r\n    background: #fff;\r\n    border-radius: 50%;\r\n    width: 31px;\r\n    height: 31px;\r\n    color: #3c4858;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    border: 2px solid #4d7ed2;\r\n    z-index: 1;\r\n    position: relative;\r\n  }\r\n.horizontal-tabs-steps .nav-link:hover {\r\n    background: #22437c;\r\n    border: 2px solid #22437c;\r\n    color: #fff !important;\r\n    transition: 0.3s all;\r\n  }\r\n.horizontal-tabs-steps .nav-link:hover .horizontal-tabs-steps .nav-link span {\r\n    color: #fff !important;\r\n  }\r\n.horizontal-tabs-steps .nav-item h6 {\r\n    font-size: 12px;\r\n  }\r\n.horizontal-tabs-steps .nav-item.show .nav-link, .horizontal-tabs-steps .nav-link.active {\r\n    color: #fff;\r\n    background-color: #22437c;\r\n    border-color: #22437c;\r\n    width: 31px;\r\n    height: 31px;\r\n    border-radius: 50%;\r\n  }\r\n.horizontal-tabs-steps .nav-link.active span {\r\n    color: #fff;\r\n    font-weight: 500 !important;\r\n  }\r\n.horizontal-tabs-steps .checked-steps span {\r\n    display: none;\r\n  }\r\n.horizontal-tabs-steps .checked-steps {\r\n    background-color: #22437c !important;\r\n    border: 1px solid #22437c !important;\r\n    color: #fff !important;\r\n  }\r\n.horizontal-tabs-steps .checked-steps:after {\r\n    content: \"\\f00c\";\r\n    font-family: FontAwesome;\r\n    color: #fff;\r\n  }\r\n/*********** Steps End***************/\r\n/*********** Platform Content start***************/\r\n.platform-content .tab-pane h3 {\r\n    font-size: 15px;\r\n    font-weight: 500 !important;\r\n  }\r\n.platform-content .tab-pane p {\r\n    font-size: 12px;\r\n  }\r\n.vertical-tabs-steps.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n    color: #fff;\r\n    background-color: #22437c;\r\n    border-color: #22437c;\r\n    font-size: 12px !important;\r\n  }\r\n.vertical-tabs-steps .nav-link {\r\n    color: #3c4858;\r\n    border: 1px solid #4d7ed2;\r\n    font-size: 12px !important;\r\n    margin-bottom: 45px;\r\n    border-radius: 15px 15px 0px 15px;\r\n    padding: 10px;\r\n    text-align: center;  \r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;  \r\n    width: 80px;\r\n  }\r\n.vertical-tabs-steps .nav-link.checked-steps {\r\n    text-align: left;\r\n  }\r\n.vertical-tabs-steps .nav-link:hover {\r\n    color: #fff;\r\n    background-color: #22437c !important;\r\n    border-color: #22437c;\r\n    transition: 0.3s all;\r\n  }\r\n.vertical-tabs-steps .nav-item {\r\n    position: relative;\r\n  }\r\n.vertical-tabs-steps .nav-item:last-child:after {\r\n    content: \"\";\r\n    border-bottom: 0px !important;\r\n  }\r\n.vertical-tabs-steps .nav-item:after {\r\n    content: \"\";\r\n    border-bottom: 3px dotted #73b6ff;\r\n    position: absolute;\r\n    width: 95px;\r\n    transform: rotate(90deg);\r\n    z-index: 0;\r\n    left: -10px;\r\n    top: 50px;\r\n    transition: border 1s ease-out;\r\n    transition-delay: 0s, 0s, 0.1s;\r\n  }\r\n.vertical-tabs-content {\r\n    padding: 0px 15px;\r\n  }\r\n.vertical-tabs-content p {\r\n    font-size: 12px;\r\n  }\r\n.vertical-tabs-steps .checked-steps {\r\n    background-color: #22437c !important;\r\n    border: 1px solid #22437c !important;\r\n    color: #fff !important;\r\n  }\r\n.vertical-tabs-steps .checked-steps:after {\r\n    content: \"\\f00c\";\r\n    font-family: FontAwesome;\r\n    color: #fff;\r\n    position: absolute;\r\n    right: 10px;\r\n  }\r\n.vertical-tabs-content .tab-pane h3 {\r\n    font-size: 15px;\r\n    font-weight: 500 !important;\r\n  }\r\n.vertical-tabs-steps .checked-border-item.nav-item:after {\r\n    content: \"\";\r\n    border-bottom: 0px dotted #ccc !important;\r\n    position: absolute;\r\n    width: 95px;\r\n    transform: rotate(90deg);\r\n    z-index: 0;\r\n    left: -10px;\r\n    top: 50px;\r\n    transition: border 1s ease-out;\r\n    transition-delay: 0s, 0s, 0.1s;\r\n  }\r\n.vertical-tabs-steps .nav-item.complete-step:after {\r\n    content: \"\";\r\n    border-bottom: 3px dotted #4d7ed2 !important;\r\n    position: absolute;\r\n    width: 95px;\r\n    transform: rotate(90deg);\r\n    z-index: 0;\r\n    left: -10px;\r\n    top: 50px;\r\n  }\r\n/*********** Platform Content End***************/\r\n/*********** Responsive CSS Start***************/\r\n@media only screen and (max-width: 575px) {\r\n    .vertical-tabs-steps .nav-link {\r\n      width: 73px;\r\n    }  \r\n  \r\n    .vertical-tabs-steps .nav-link.checked-steps {\r\n      padding: 10px 7px;\r\n    }  \r\n  \r\n    .vertical-tabs-steps .checked-steps:after {\r\n      content: \"\\f00c\";\r\n      font-family: FontAwesome;\r\n      color: #fff;\r\n      position: absolute;\r\n      right: 7px;\r\n    }  \r\n  }\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n    .horizontal-tabs-steps .nav-item:after {\r\n      content: \"\";\r\n      width: 219px;\r\n    } \r\n  }\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .horizontal-tabs-steps .nav-item:after {\r\n      content: \"\";\r\n      width: 160px;\r\n    } \r\n  }\r\n@media only screen and (min-width: 421px) and (max-width: 767px) {\r\n    .horizontal-tabs-steps .nav-item:after {\r\n      content: \"\";\r\n      width: 115px;\r\n    } \r\n  }\r\n@media only screen and (max-width: 420px) {\r\n    .horizontal-tabs-steps .nav-item:after {\r\n      content: \"\";\r\n      width: 95px;\r\n    } \r\n  }\r\n/*********** Responsive CSS End***************/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQUN2QztJQUNJLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osU0FBUztJQUNULDhCQUE4QjtJQUM5Qiw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLFdBQVc7SUFDWCw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUI7RUFDRjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLFdBQVc7SUFDWCwyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsV0FBVztFQUNiO0FBRUEscUNBQXFDO0FBRXJDLGtEQUFrRDtBQUNsRDtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDBCQUEwQjtFQUM1QjtBQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjtBQUVBO0lBQ0UsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsOEJBQThCO0VBQ2hDO0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBRUE7SUFDRSxlQUFlO0lBQ2YsMkJBQTJCO0VBQzdCO0FBRUE7SUFDRSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULDhCQUE4QjtJQUM5Qiw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0VBQ1g7QUFFQSxnREFBZ0Q7QUFHaEQsZ0RBQWdEO0FBRWhEO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsd0JBQXdCO01BQ3hCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsVUFBVTtJQUNaO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsV0FBVztNQUNYLFlBQVk7SUFDZDtFQUNGO0FBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7RUFDRjtBQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsWUFBWTtJQUNkO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsV0FBVztNQUNYLFdBQVc7SUFDYjtFQUNGO0FBQ0EsOENBQThDIiwiZmlsZSI6InNlc3Npb24tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqIFN0ZXBzIFN0YXJ0KioqKioqKioqKioqKioqL1xyXG4uaG9yaXpvbnRhbC10YWJzLXN0ZXBzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmhvcml6b250YWwtdGFicy1zdGVwcyAubmF2LWl0ZW0ge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmhvcml6b250YWwtdGFicy1zdGVwcyAubmF2LWl0ZW06YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci10b3A6IDVweCBkb3R0ZWQgIzczYjZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICB3aWR0aDogMjY1cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Jpem9udGFsLXRhYnMtc3RlcHMgLm5hdi1pdGVtOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci10b3A6IDBweCBkb3R0ZWQgIzRkYTNmZjtcclxuICB9XHJcbiAgXHJcbiAgLmhvcml6b250YWwtdGFicy1zdGVwcyAubmF2LWl0ZW0uY29tcGxldGUtc3RlcDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IGRvdHRlZCAjNGQ3ZWQyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHdpZHRoOiAyNjVweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlciAxcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4xc1xyXG4gIH1cclxuICBcclxuICAuaG9yaXpvbnRhbC10YWJzLXN0ZXBzIC5uYXYtbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDMxcHg7XHJcbiAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgICBjb2xvcjogIzNjNDg1ODtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRkN2VkMjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Jpem9udGFsLXRhYnMtc3RlcHMgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjQzN2M7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjI0MzdjO1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gIH1cclxuICBcclxuICAuaG9yaXpvbnRhbC10YWJzLXN0ZXBzIC5uYXYtbGluazpob3ZlciAuaG9yaXpvbnRhbC10YWJzLXN0ZXBzIC5uYXYtbGluayBzcGFuIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Jpem9udGFsLXRhYnMtc3RlcHMgLm5hdi1pdGVtIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmhvcml6b250YWwtdGFicy1zdGVwcyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5ob3Jpem9udGFsLXRhYnMtc3RlcHMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjQzN2M7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMjQzN2M7XHJcbiAgICB3aWR0aDogMzFweDtcclxuICAgIGhlaWdodDogMzFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmhvcml6b250YWwtdGFicy1zdGVwcyAubmF2LWxpbmsuYWN0aXZlIHNwYW4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Jpem9udGFsLXRhYnMtc3RlcHMgLmNoZWNrZWQtc3RlcHMgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuaG9yaXpvbnRhbC10YWJzLXN0ZXBzIC5jaGVja2VkLXN0ZXBzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjQzN2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjQzN2MgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Jpem9udGFsLXRhYnMtc3RlcHMgLmNoZWNrZWQtc3RlcHM6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXGYwMGNcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAvKioqKioqKioqKiogU3RlcHMgRW5kKioqKioqKioqKioqKioqL1xyXG4gIFxyXG4gIC8qKioqKioqKioqKiBQbGF0Zm9ybSBDb250ZW50IHN0YXJ0KioqKioqKioqKioqKioqL1xyXG4gIC5wbGF0Zm9ybS1jb250ZW50IC50YWItcGFuZSBoMyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGF0Zm9ybS1jb250ZW50IC50YWItcGFuZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtc3RlcHMubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjQzN2M7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMjQzN2M7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtc3RlcHMgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjM2M0ODU4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRkN2VkMjtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxOyAgXHJcbiAgICB3aWR0aDogODBweDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtc3RlcHMgLm5hdi1saW5rLmNoZWNrZWQtc3RlcHMge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtc3RlcHMgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyNDM3YyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjI0MzdjO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC10YWJzLXN0ZXBzIC5uYXYtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC10YWJzLXN0ZXBzIC5uYXYtaXRlbTpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtc3RlcHMgLm5hdi1pdGVtOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG90dGVkICM3M2I2ZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlciAxcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4xcztcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtc3RlcHMgLmNoZWNrZWQtc3RlcHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyNDM3YyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIyNDM3YyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtc3RlcHMgLmNoZWNrZWQtc3RlcHM6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXGYwMGNcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC10YWJzLWNvbnRlbnQgLnRhYi1wYW5lIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLXRhYnMtc3RlcHMgLmNoZWNrZWQtYm9yZGVyLWl0ZW0ubmF2LWl0ZW06YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBkb3R0ZWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC10YWJzLXN0ZXBzIC5uYXYtaXRlbS5jb21wbGV0ZS1zdGVwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG90dGVkICM0ZDdlZDIgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAvKioqKioqKioqKiogUGxhdGZvcm0gQ29udGVudCBFbmQqKioqKioqKioqKioqKiovXHJcbiAgXHJcbiAgXHJcbiAgLyoqKioqKioqKioqIFJlc3BvbnNpdmUgQ1NTIFN0YXJ0KioqKioqKioqKioqKioqL1xyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC52ZXJ0aWNhbC10YWJzLXN0ZXBzIC5uYXYtbGluayB7XHJcbiAgICAgIHdpZHRoOiA3M3B4O1xyXG4gICAgfSAgXHJcbiAgXHJcbiAgICAudmVydGljYWwtdGFicy1zdGVwcyAubmF2LWxpbmsuY2hlY2tlZC1zdGVwcyB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggN3B4O1xyXG4gICAgfSAgXHJcbiAgXHJcbiAgICAudmVydGljYWwtdGFicy1zdGVwcyAuY2hlY2tlZC1zdGVwczphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDdweDtcclxuICAgIH0gIFxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAuaG9yaXpvbnRhbC10YWJzLXN0ZXBzIC5uYXYtaXRlbTphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAyMTlweDtcclxuICAgIH0gXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLmhvcml6b250YWwtdGFicy1zdGVwcyAubmF2LWl0ZW06YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICB9IFxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5ob3Jpem9udGFsLXRhYnMtc3RlcHMgLm5hdi1pdGVtOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgfSBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLmhvcml6b250YWwtdGFicy1zdGVwcyAubmF2LWl0ZW06YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogOTVweDtcclxuICAgIH0gXHJcbiAgfVxyXG4gIC8qKioqKioqKioqKiBSZXNwb25zaXZlIENTUyBFbmQqKioqKioqKioqKioqKiovIl19 */");

/***/ }),

/***/ "dI9Q":
/*!*********************************************!*\
  !*** ./node_modules/country-list/data.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"code\":\"AD\",\"name\":\"Andorra\"},{\"code\":\"AE\",\"name\":\"United Arab Emirates\"},{\"code\":\"AF\",\"name\":\"Afghanistan\"},{\"code\":\"AG\",\"name\":\"Antigua and Barbuda\"},{\"code\":\"AI\",\"name\":\"Anguilla\"},{\"code\":\"AL\",\"name\":\"Albania\"},{\"code\":\"AM\",\"name\":\"Armenia\"},{\"code\":\"AO\",\"name\":\"Angola\"},{\"code\":\"AQ\",\"name\":\"Antarctica\"},{\"code\":\"AR\",\"name\":\"Argentina\"},{\"code\":\"AS\",\"name\":\"American Samoa\"},{\"code\":\"AT\",\"name\":\"Austria\"},{\"code\":\"AU\",\"name\":\"Australia\"},{\"code\":\"AW\",\"name\":\"Aruba\"},{\"code\":\"AX\",\"name\":\"Åland Islands\"},{\"code\":\"AZ\",\"name\":\"Azerbaijan\"},{\"code\":\"BA\",\"name\":\"Bosnia and Herzegovina\"},{\"code\":\"BB\",\"name\":\"Barbados\"},{\"code\":\"BD\",\"name\":\"Bangladesh\"},{\"code\":\"BE\",\"name\":\"Belgium\"},{\"code\":\"BF\",\"name\":\"Burkina Faso\"},{\"code\":\"BG\",\"name\":\"Bulgaria\"},{\"code\":\"BH\",\"name\":\"Bahrain\"},{\"code\":\"BI\",\"name\":\"Burundi\"},{\"code\":\"BJ\",\"name\":\"Benin\"},{\"code\":\"BL\",\"name\":\"Saint Barthélemy\"},{\"code\":\"BM\",\"name\":\"Bermuda\"},{\"code\":\"BN\",\"name\":\"Brunei Darussalam\"},{\"code\":\"BO\",\"name\":\"Bolivia, Plurinational State of\"},{\"code\":\"BQ\",\"name\":\"Bonaire, Sint Eustatius and Saba\"},{\"code\":\"BR\",\"name\":\"Brazil\"},{\"code\":\"BS\",\"name\":\"Bahamas\"},{\"code\":\"BT\",\"name\":\"Bhutan\"},{\"code\":\"BV\",\"name\":\"Bouvet Island\"},{\"code\":\"BW\",\"name\":\"Botswana\"},{\"code\":\"BY\",\"name\":\"Belarus\"},{\"code\":\"BZ\",\"name\":\"Belize\"},{\"code\":\"CA\",\"name\":\"Canada\"},{\"code\":\"CC\",\"name\":\"Cocos (Keeling) Islands\"},{\"code\":\"CD\",\"name\":\"Congo, Democratic Republic of the\"},{\"code\":\"CF\",\"name\":\"Central African Republic\"},{\"code\":\"CG\",\"name\":\"Congo\"},{\"code\":\"CH\",\"name\":\"Switzerland\"},{\"code\":\"CI\",\"name\":\"Côte d'Ivoire\"},{\"code\":\"CK\",\"name\":\"Cook Islands\"},{\"code\":\"CL\",\"name\":\"Chile\"},{\"code\":\"CM\",\"name\":\"Cameroon\"},{\"code\":\"CN\",\"name\":\"China\"},{\"code\":\"CO\",\"name\":\"Colombia\"},{\"code\":\"CR\",\"name\":\"Costa Rica\"},{\"code\":\"CU\",\"name\":\"Cuba\"},{\"code\":\"CV\",\"name\":\"Cabo Verde\"},{\"code\":\"CW\",\"name\":\"Curaçao\"},{\"code\":\"CX\",\"name\":\"Christmas Island\"},{\"code\":\"CY\",\"name\":\"Cyprus\"},{\"code\":\"CZ\",\"name\":\"Czechia\"},{\"code\":\"DE\",\"name\":\"Germany\"},{\"code\":\"DJ\",\"name\":\"Djibouti\"},{\"code\":\"DK\",\"name\":\"Denmark\"},{\"code\":\"DM\",\"name\":\"Dominica\"},{\"code\":\"DO\",\"name\":\"Dominican Republic\"},{\"code\":\"DZ\",\"name\":\"Algeria\"},{\"code\":\"EC\",\"name\":\"Ecuador\"},{\"code\":\"EE\",\"name\":\"Estonia\"},{\"code\":\"EG\",\"name\":\"Egypt\"},{\"code\":\"EH\",\"name\":\"Western Sahara\"},{\"code\":\"ER\",\"name\":\"Eritrea\"},{\"code\":\"ES\",\"name\":\"Spain\"},{\"code\":\"ET\",\"name\":\"Ethiopia\"},{\"code\":\"FI\",\"name\":\"Finland\"},{\"code\":\"FJ\",\"name\":\"Fiji\"},{\"code\":\"FK\",\"name\":\"Falkland Islands (Malvinas)\"},{\"code\":\"FM\",\"name\":\"Micronesia, Federated States of\"},{\"code\":\"FO\",\"name\":\"Faroe Islands\"},{\"code\":\"FR\",\"name\":\"France\"},{\"code\":\"GA\",\"name\":\"Gabon\"},{\"code\":\"GB\",\"name\":\"United Kingdom of Great Britain and Northern Ireland\"},{\"code\":\"GD\",\"name\":\"Grenada\"},{\"code\":\"GE\",\"name\":\"Georgia\"},{\"code\":\"GF\",\"name\":\"French Guiana\"},{\"code\":\"GG\",\"name\":\"Guernsey\"},{\"code\":\"GH\",\"name\":\"Ghana\"},{\"code\":\"GI\",\"name\":\"Gibraltar\"},{\"code\":\"GL\",\"name\":\"Greenland\"},{\"code\":\"GM\",\"name\":\"Gambia\"},{\"code\":\"GN\",\"name\":\"Guinea\"},{\"code\":\"GP\",\"name\":\"Guadeloupe\"},{\"code\":\"GQ\",\"name\":\"Equatorial Guinea\"},{\"code\":\"GR\",\"name\":\"Greece\"},{\"code\":\"GS\",\"name\":\"South Georgia and the South Sandwich Islands\"},{\"code\":\"GT\",\"name\":\"Guatemala\"},{\"code\":\"GU\",\"name\":\"Guam\"},{\"code\":\"GW\",\"name\":\"Guinea-Bissau\"},{\"code\":\"GY\",\"name\":\"Guyana\"},{\"code\":\"HK\",\"name\":\"Hong Kong\"},{\"code\":\"HM\",\"name\":\"Heard Island and McDonald Islands\"},{\"code\":\"HN\",\"name\":\"Honduras\"},{\"code\":\"HR\",\"name\":\"Croatia\"},{\"code\":\"HT\",\"name\":\"Haiti\"},{\"code\":\"HU\",\"name\":\"Hungary\"},{\"code\":\"ID\",\"name\":\"Indonesia\"},{\"code\":\"IE\",\"name\":\"Ireland\"},{\"code\":\"IL\",\"name\":\"Israel\"},{\"code\":\"IM\",\"name\":\"Isle of Man\"},{\"code\":\"IN\",\"name\":\"India\"},{\"code\":\"IO\",\"name\":\"British Indian Ocean Territory\"},{\"code\":\"IQ\",\"name\":\"Iraq\"},{\"code\":\"IR\",\"name\":\"Iran, Islamic Republic of\"},{\"code\":\"IS\",\"name\":\"Iceland\"},{\"code\":\"IT\",\"name\":\"Italy\"},{\"code\":\"JE\",\"name\":\"Jersey\"},{\"code\":\"JM\",\"name\":\"Jamaica\"},{\"code\":\"JO\",\"name\":\"Jordan\"},{\"code\":\"JP\",\"name\":\"Japan\"},{\"code\":\"KE\",\"name\":\"Kenya\"},{\"code\":\"KG\",\"name\":\"Kyrgyzstan\"},{\"code\":\"KH\",\"name\":\"Cambodia\"},{\"code\":\"KI\",\"name\":\"Kiribati\"},{\"code\":\"KM\",\"name\":\"Comoros\"},{\"code\":\"KN\",\"name\":\"Saint Kitts and Nevis\"},{\"code\":\"KP\",\"name\":\"Korea, Democratic People's Republic of\"},{\"code\":\"KR\",\"name\":\"Korea, Republic of\"},{\"code\":\"KW\",\"name\":\"Kuwait\"},{\"code\":\"KY\",\"name\":\"Cayman Islands\"},{\"code\":\"KZ\",\"name\":\"Kazakhstan\"},{\"code\":\"LA\",\"name\":\"Lao People's Democratic Republic\"},{\"code\":\"LB\",\"name\":\"Lebanon\"},{\"code\":\"LC\",\"name\":\"Saint Lucia\"},{\"code\":\"LI\",\"name\":\"Liechtenstein\"},{\"code\":\"LK\",\"name\":\"Sri Lanka\"},{\"code\":\"LR\",\"name\":\"Liberia\"},{\"code\":\"LS\",\"name\":\"Lesotho\"},{\"code\":\"LT\",\"name\":\"Lithuania\"},{\"code\":\"LU\",\"name\":\"Luxembourg\"},{\"code\":\"LV\",\"name\":\"Latvia\"},{\"code\":\"LY\",\"name\":\"Libya\"},{\"code\":\"MA\",\"name\":\"Morocco\"},{\"code\":\"MC\",\"name\":\"Monaco\"},{\"code\":\"MD\",\"name\":\"Moldova, Republic of\"},{\"code\":\"ME\",\"name\":\"Montenegro\"},{\"code\":\"MF\",\"name\":\"Saint Martin, (French part)\"},{\"code\":\"MG\",\"name\":\"Madagascar\"},{\"code\":\"MH\",\"name\":\"Marshall Islands\"},{\"code\":\"MK\",\"name\":\"North Macedonia\"},{\"code\":\"ML\",\"name\":\"Mali\"},{\"code\":\"MM\",\"name\":\"Myanmar\"},{\"code\":\"MN\",\"name\":\"Mongolia\"},{\"code\":\"MO\",\"name\":\"Macao\"},{\"code\":\"MP\",\"name\":\"Northern Mariana Islands\"},{\"code\":\"MQ\",\"name\":\"Martinique\"},{\"code\":\"MR\",\"name\":\"Mauritania\"},{\"code\":\"MS\",\"name\":\"Montserrat\"},{\"code\":\"MT\",\"name\":\"Malta\"},{\"code\":\"MU\",\"name\":\"Mauritius\"},{\"code\":\"MV\",\"name\":\"Maldives\"},{\"code\":\"MW\",\"name\":\"Malawi\"},{\"code\":\"MX\",\"name\":\"Mexico\"},{\"code\":\"MY\",\"name\":\"Malaysia\"},{\"code\":\"MZ\",\"name\":\"Mozambique\"},{\"code\":\"NA\",\"name\":\"Namibia\"},{\"code\":\"NC\",\"name\":\"New Caledonia\"},{\"code\":\"NE\",\"name\":\"Niger\"},{\"code\":\"NF\",\"name\":\"Norfolk Island\"},{\"code\":\"NG\",\"name\":\"Nigeria\"},{\"code\":\"NI\",\"name\":\"Nicaragua\"},{\"code\":\"NL\",\"name\":\"Netherlands\"},{\"code\":\"NO\",\"name\":\"Norway\"},{\"code\":\"NP\",\"name\":\"Nepal\"},{\"code\":\"NR\",\"name\":\"Nauru\"},{\"code\":\"NU\",\"name\":\"Niue\"},{\"code\":\"NZ\",\"name\":\"New Zealand\"},{\"code\":\"OM\",\"name\":\"Oman\"},{\"code\":\"PA\",\"name\":\"Panama\"},{\"code\":\"PE\",\"name\":\"Peru\"},{\"code\":\"PF\",\"name\":\"French Polynesia\"},{\"code\":\"PG\",\"name\":\"Papua New Guinea\"},{\"code\":\"PH\",\"name\":\"Philippines\"},{\"code\":\"PK\",\"name\":\"Pakistan\"},{\"code\":\"PL\",\"name\":\"Poland\"},{\"code\":\"PM\",\"name\":\"Saint Pierre and Miquelon\"},{\"code\":\"PN\",\"name\":\"Pitcairn\"},{\"code\":\"PR\",\"name\":\"Puerto Rico\"},{\"code\":\"PS\",\"name\":\"Palestine, State of\"},{\"code\":\"PT\",\"name\":\"Portugal\"},{\"code\":\"PW\",\"name\":\"Palau\"},{\"code\":\"PY\",\"name\":\"Paraguay\"},{\"code\":\"QA\",\"name\":\"Qatar\"},{\"code\":\"RE\",\"name\":\"Réunion\"},{\"code\":\"RO\",\"name\":\"Romania\"},{\"code\":\"RS\",\"name\":\"Serbia\"},{\"code\":\"RU\",\"name\":\"Russian Federation\"},{\"code\":\"RW\",\"name\":\"Rwanda\"},{\"code\":\"SA\",\"name\":\"Saudi Arabia\"},{\"code\":\"SB\",\"name\":\"Solomon Islands\"},{\"code\":\"SC\",\"name\":\"Seychelles\"},{\"code\":\"SD\",\"name\":\"Sudan\"},{\"code\":\"SE\",\"name\":\"Sweden\"},{\"code\":\"SG\",\"name\":\"Singapore\"},{\"code\":\"SH\",\"name\":\"Saint Helena, Ascension and Tristan da Cunha\"},{\"code\":\"SI\",\"name\":\"Slovenia\"},{\"code\":\"SJ\",\"name\":\"Svalbard and Jan Mayen\"},{\"code\":\"SK\",\"name\":\"Slovakia\"},{\"code\":\"SL\",\"name\":\"Sierra Leone\"},{\"code\":\"SM\",\"name\":\"San Marino\"},{\"code\":\"SN\",\"name\":\"Senegal\"},{\"code\":\"SO\",\"name\":\"Somalia\"},{\"code\":\"SR\",\"name\":\"Suriname\"},{\"code\":\"SS\",\"name\":\"South Sudan\"},{\"code\":\"ST\",\"name\":\"Sao Tome and Principe\"},{\"code\":\"SV\",\"name\":\"El Salvador\"},{\"code\":\"SX\",\"name\":\"Sint Maarten, (Dutch part)\"},{\"code\":\"SY\",\"name\":\"Syrian Arab Republic\"},{\"code\":\"SZ\",\"name\":\"Eswatini\"},{\"code\":\"TC\",\"name\":\"Turks and Caicos Islands\"},{\"code\":\"TD\",\"name\":\"Chad\"},{\"code\":\"TF\",\"name\":\"French Southern Territories\"},{\"code\":\"TG\",\"name\":\"Togo\"},{\"code\":\"TH\",\"name\":\"Thailand\"},{\"code\":\"TJ\",\"name\":\"Tajikistan\"},{\"code\":\"TK\",\"name\":\"Tokelau\"},{\"code\":\"TL\",\"name\":\"Timor-Leste\"},{\"code\":\"TM\",\"name\":\"Turkmenistan\"},{\"code\":\"TN\",\"name\":\"Tunisia\"},{\"code\":\"TO\",\"name\":\"Tonga\"},{\"code\":\"TR\",\"name\":\"Turkey\"},{\"code\":\"TT\",\"name\":\"Trinidad and Tobago\"},{\"code\":\"TV\",\"name\":\"Tuvalu\"},{\"code\":\"TW\",\"name\":\"Taiwan, Province of China\"},{\"code\":\"TZ\",\"name\":\"Tanzania, United Republic of\"},{\"code\":\"UA\",\"name\":\"Ukraine\"},{\"code\":\"UG\",\"name\":\"Uganda\"},{\"code\":\"UM\",\"name\":\"United States Minor Outlying Islands\"},{\"code\":\"US\",\"name\":\"United States of America\"},{\"code\":\"UY\",\"name\":\"Uruguay\"},{\"code\":\"UZ\",\"name\":\"Uzbekistan\"},{\"code\":\"VA\",\"name\":\"Holy See\"},{\"code\":\"VC\",\"name\":\"Saint Vincent and the Grenadines\"},{\"code\":\"VE\",\"name\":\"Venezuela, Bolivarian Republic of\"},{\"code\":\"VG\",\"name\":\"Virgin Islands, British\"},{\"code\":\"VI\",\"name\":\"Virgin Islands, U.S.\"},{\"code\":\"VN\",\"name\":\"Viet Nam\"},{\"code\":\"VU\",\"name\":\"Vanuatu\"},{\"code\":\"WF\",\"name\":\"Wallis and Futuna\"},{\"code\":\"WS\",\"name\":\"Samoa\"},{\"code\":\"YE\",\"name\":\"Yemen\"},{\"code\":\"YT\",\"name\":\"Mayotte\"},{\"code\":\"ZA\",\"name\":\"South Africa\"},{\"code\":\"ZM\",\"name\":\"Zambia\"},{\"code\":\"ZW\",\"name\":\"Zimbabwe\"}]");

/***/ }),

/***/ "e+wd":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/payment-success/payment-success.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>payment-success works!</p>\r\n");

/***/ }),

/***/ "ejwX":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-paypal/__ivy_ngcc__/fesm2015/ngx-paypal.js ***!
  \*********************************************************************/
/*! exports provided: NgxPayPalModule, NgxPaypalComponent, PayPalScriptService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPayPalModule", function() { return NgxPayPalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaypalComponent", function() { return NgxPaypalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalScriptService", function() { return PayPalScriptService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ScriptService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


const _c0 = ["payPalButtonContainer"];
let ScriptService = /** @class */ (() => {
    class ScriptService {
        /**
         * @param {?} zone
         */
        constructor(zone) {
            this.zone = zone;
        }
        /**
         * @param {?} url
         * @param {?} globalVar
         * @param {?} onReady
         * @return {?}
         */
        registerScript(url, globalVar, onReady) {
            /** @type {?} */
            const existingGlobalVar = ((/** @type {?} */ (window)))[globalVar];
            if (existingGlobalVar) {
                // global variable is present = script was already loaded
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    onReady(existingGlobalVar);
                }));
                return;
            }
            // prepare script elem
            /** @type {?} */
            const scriptElem = document.createElement('script');
            scriptElem.id = this.getElemId(globalVar);
            scriptElem.innerHTML = '';
            scriptElem.onload = (/**
             * @return {?}
             */
            () => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    onReady(((/** @type {?} */ (window)))[globalVar]);
                }));
            });
            scriptElem.src = url;
            scriptElem.async = true;
            scriptElem.defer = true;
            // add script to header
            document.getElementsByTagName('head')[0].appendChild(scriptElem);
        }
        /**
         * @param {?} globalVar
         * @return {?}
         */
        cleanup(globalVar) {
            // remove script from DOM
            /** @type {?} */
            const scriptElem = document.getElementById(this.getElemId(globalVar));
            if (scriptElem) {
                scriptElem.remove();
            }
        }
        /**
         * @private
         * @param {?} globalVar
         * @return {?}
         */
        getElemId(globalVar) {
            return `ngx-paypal-script-elem-${globalVar}`;
        }
    }
ScriptService.ɵfac = function ScriptService_Factory(t) { return new (t || ScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
ScriptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScriptService, factory: function (t) { return ScriptService.ɵfac(t); } });
    /** @nocollapse */
    ScriptService.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
    return ScriptService;
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/paypal-script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let PayPalScriptService = /** @class */ (() => {
    class PayPalScriptService {
        /**
         * @param {?} scriptService
         */
        constructor(scriptService) {
            this.scriptService = scriptService;
            this.paypalWindowName = 'paypal';
        }
        /**
         * @param {?} config
         * @param {?} onReady
         * @return {?}
         */
        registerPayPalScript(config, onReady) {
            this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady);
        }
        /**
         * @return {?}
         */
        destroyPayPalScript() {
            this.scriptService.cleanup(this.paypalWindowName);
        }
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        getUrlForConfig(config) {
            /** @type {?} */
            const params = [
                {
                    name: 'client-id',
                    value: config.clientId
                }
            ];
            if (config.currency) {
                params.push({
                    name: 'currency',
                    value: config.currency
                });
            }
            if (config.commit) {
                params.push({
                    name: 'commit',
                    value: config.commit
                });
            }
            if (config.vault) {
                params.push({
                    name: 'vault',
                    value: config.vault
                });
            }
            if (config.extraParams) {
                params.push(...config.extraParams);
            }
            return `https://www.paypal.com/sdk/js${this.getQueryString(params)}`;
        }
        /**
         * @private
         * @param {?} queryParams
         * @return {?}
         */
        getQueryString(queryParams) {
            /** @type {?} */
            let queryString = '';
            for (let i = 0; i < queryParams.length; i++) {
                /** @type {?} */
                const queryParam = queryParams[i];
                if (i === 0) {
                    queryString += '?';
                }
                else {
                    queryString += '&';
                }
                queryString += `${queryParam.name}=${queryParam.value}`;
            }
            return queryString;
        }
    }
PayPalScriptService.ɵfac = function PayPalScriptService_Factory(t) { return new (t || PayPalScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScriptService)); };
PayPalScriptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PayPalScriptService, factory: function (t) { return PayPalScriptService.ɵfac(t); } });
    /** @nocollapse */
    PayPalScriptService.ctorParameters = () => [
        { type: ScriptService }
    ];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PayPalScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: ScriptService }]; }, null); })();
    return PayPalScriptService;
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/paypal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let NgxPaypalComponent = /** @class */ (() => {
    class NgxPaypalComponent {
        /**
         * @param {?} paypalScriptService
         * @param {?} cdr
         * @param {?} ngZone
         */
        constructor(paypalScriptService, cdr, ngZone) {
            this.paypalScriptService = paypalScriptService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            /**
             * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
             * sharing base configuration. In such a case only a single component may register script.
             */
            this.registerScript = true;
            /**
             * Emitted when paypal script is loaded
             */
            this.scriptLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /**
             * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
             */
            this.initializePayPal = true;
        }
        /**
         * @param {?} content
         * @return {?}
         */
        set payPalButtonContainer(content) {
            this.payPalButtonContainerElem = content;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ngOnChanges(changes) {
            if (!this.payPalButtonContainerId) {
                this.payPalButtonContainerId = this.generateElementId();
            }
            // first time config setup
            /** @type {?} */
            const config = this.config;
            if (changes.config.isFirstChange()) {
                if (config && this.registerScript) {
                    this.initPayPalScript(config, (/**
                     * @param {?} payPal
                     * @return {?}
                     */
                    (payPal) => {
                        // store reference to paypal global script
                        this.payPal = payPal;
                        this.doPayPalCheck();
                    }));
                }
            }
            // changes to config
            if (!changes.config.isFirstChange()) {
                this.reinitialize(config);
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.paypalScriptService.destroyPayPalScript();
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
        }
        /**
         * @return {?}
         */
        ngAfterViewInit() {
            this.doPayPalCheck();
        }
        /**
         * @param {?} payPal
         * @return {?}
         */
        customInit(payPal) {
            this.payPal = payPal;
            this.doPayPalCheck();
        }
        /**
         * @param {?} config
         * @return {?}
         */
        reinitialize(config) {
            this.config = config;
            this.payPal = undefined;
            this.paypalScriptService.destroyPayPalScript();
            this.payPalButtonContainerId = this.generateElementId();
            this.initializePayPal = true;
            if (this.payPalButtonContainerElem) {
                while (this.payPalButtonContainerElem.nativeElement.firstChild) {
                    this.payPalButtonContainerElem.nativeElement.removeChild(this.payPalButtonContainerElem.nativeElement.firstChild);
                }
            }
            this.cdr.detectChanges();
            if (this.config) {
                if (!this.payPal) {
                    this.initPayPalScript(this.config, (/**
                     * @param {?} payPal
                     * @return {?}
                     */
                    (payPal) => {
                        // store reference to paypal global script
                        this.payPal = payPal;
                        this.doPayPalCheck();
                    }));
                }
                else {
                    this.doPayPalCheck();
                }
            }
        }
        /**
         * @private
         * @return {?}
         */
        doPayPalCheck() {
            if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
                // make sure that id is also set
                if (this.payPalButtonContainerElem.nativeElement.id) {
                    this.initializePayPal = false;
                    this.initPayPal(this.config, this.payPal);
                }
            }
        }
        /**
         * @private
         * @param {?} config
         * @param {?} initPayPal
         * @return {?}
         */
        initPayPalScript(config, initPayPal) {
            this.paypalScriptService.registerPayPalScript({
                clientId: config.clientId,
                commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
                currency: config.currency,
                vault: config.vault,
                extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
            }, (/**
             * @param {?} paypal
             * @return {?}
             */
            (paypal) => {
                this.scriptLoaded.next(paypal);
                initPayPal(paypal);
            }));
        }
        /**
         * @private
         * @return {?}
         */
        generateElementId() {
            return `ngx-captcha-id-${new Date().valueOf()}`;
        }
        /**
         * @private
         * @param {?} config
         * @param {?} paypal
         * @return {?}
         */
        initPayPal(config, paypal) {
            // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
                /** @type {?} */
                const createOrder = (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.createOrderOnClient && config.createOrderOnServer) {
                            throw Error(`Both 'createOrderOnClient' and 'createOrderOnServer' are defined.
                    Please choose one or the other.`);
                        }
                        if (!config.createOrderOnClient && !config.createOrderOnServer) {
                            throw Error(`Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.
                    Please define one of these to create order.`);
                        }
                        if (config.createOrderOnClient) {
                            return actions.order.create(config.createOrderOnClient(data));
                        }
                        if (config.createOrderOnServer) {
                            return config.createOrderOnServer(data);
                        }
                        throw Error(`Invalid state for 'createOrder'.`);
                    }));
                });
                /** @type {?} */
                const createSubscription = (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.createSubscription) {
                            return config.createSubscription(data, actions);
                        }
                    }));
                });
                /** @type {?} */
                const onShippingChange = (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onShippingChange) {
                            return config.onShippingChange(data, actions);
                        }
                    }));
                });
                /** @type {?} */
                const buttonsConfig = Object.assign(Object.assign(Object.assign({ style: config.style, onApprove: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        return this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onApprove) {
                                config.onApprove(data, actions);
                            }
                            // capture on server
                            if (config.authorizeOnServer) {
                                return config.authorizeOnServer(data, actions);
                            }
                            // capture on client
                            /** @type {?} */
                            const onClientAuthorization = config.onClientAuthorization;
                            if (onClientAuthorization) {
                                actions.order.capture().then((/**
                                 * @param {?} details
                                 * @return {?}
                                 */
                                (details) => {
                                    this.ngZone.run((/**
                                     * @return {?}
                                     */
                                    () => {
                                        onClientAuthorization(details);
                                    }));
                                }));
                                return;
                            }
                        }));
                    }), onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onError) {
                                config.onError(error);
                            }
                        }));
                    }), onCancel: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onCancel) {
                                config.onCancel(data, actions);
                            }
                        }));
                    }), onClick: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onClick) {
                                config.onClick(data, actions);
                            }
                        }));
                    }), onInit: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onInit) {
                                config.onInit(data, actions);
                            }
                        }));
                    }) }, ((config.createOrderOnClient || config.createOrderOnServer) && { createOrder })), (config.createSubscription && { createSubscription })), (config.onShippingChange && { onShippingChange }));
                paypal.Buttons(buttonsConfig).render(`#${this.payPalButtonContainerId}`);
            }));
        }
    }
NgxPaypalComponent.ɵfac = function NgxPaypalComponent_Factory(t) { return new (t || NgxPaypalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PayPalScriptService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
NgxPaypalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxPaypalComponent, selectors: [["ngx-paypal"]], viewQuery: function NgxPaypalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.payPalButtonContainer = _t.first);
    } }, inputs: { registerScript: "registerScript", config: "config" }, outputs: { scriptLoaded: "scriptLoaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[3, "id"], ["payPalButtonContainer", ""]], template: function NgxPaypalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.payPalButtonContainerId);
    } }, encapsulation: 2, changeDetection: 0 });
    /** @nocollapse */
    NgxPaypalComponent.ctorParameters = () => [
        { type: PayPalScriptService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ];
    NgxPaypalComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        registerScript: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        scriptLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        payPalButtonContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['payPalButtonContainer', { static: false },] }]
    };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPaypalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                selector: 'ngx-paypal',
                template: `
    <div #payPalButtonContainer [id]="payPalButtonContainerId"></div>
    `
            }]
    }], function () { return [{ type: PayPalScriptService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { registerScript: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scriptLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], payPalButtonContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['payPalButtonContainer', { static: false }]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return NgxPaypalComponent;
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-paypal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let NgxPayPalModule = /** @class */ (() => {
    class NgxPayPalModule {
    }
NgxPayPalModule.ɵfac = function NgxPayPalModule_Factory(t) { return new (t || NgxPayPalModule)(); };
NgxPayPalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxPayPalModule });
NgxPayPalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        ScriptService,
        PayPalScriptService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxPayPalModule, { declarations: function () { return [NgxPaypalComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [NgxPaypalComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPayPalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                declarations: [
                    NgxPaypalComponent,
                ],
                exports: [
                    NgxPaypalComponent,
                ],
                providers: [
                    ScriptService,
                    PayPalScriptService
                ]
            }]
    }], null, null); })();
    return NgxPayPalModule;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/paypal-models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IPayPalConfig() { }
if (false) {}
/**
 * @record
 */
function IPayPalUrlConfig() { }
if (false) {}
/**
 * @record
 */
function IOrderDetails() { }
if (false) {}
/**
 * @record
 */
function IClientAuthorizeCallbackData() { }
if (false) {}
/**
 * @record
 */
function ILinkDescription() { }
if (false) {}
/**
 * @record
 */
function IQueryParam() { }
if (false) {}
/**
 * @record
 */
function IOnShippingChangeData() { }
if (false) {}
/**
 * @record
 */
function IOnShippingChangeActions() { }
if (false) {}
/**
 * @record
 */
function IAdvancedConfiguration() { }
if (false) {}
/**
 * @record
 */
function IOnApproveCallbackData() { }
if (false) {}
/**
 * @record
 */
function ICreateOrderCallbackActions() { }
if (false) {}
/**
 * @record
 */
function ICancelCallbackData() { }
if (false) {}
/**
 * @record
 */
function IOnApproveCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IOnInitCallbackActions() { }
if (false) {}
/**
 * @record
 */
function ICreateSubscriptionCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IInitCallbackData() { }
/**
 * @record
 */
function ICreateSubscriptionCallbackData() { }
/**
 * @record
 */
function IOnClickCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IPayPalButtonStyle() { }
if (false) {}
/**
 * @record
 */
function ICreateOrderRequest() { }
if (false) {}
/**
 * @record
 */
function ICreateSubscriptionRequest() { }
if (false) {}
/**
 * @record
 */
function IPayer() { }
if (false) {}
/**
 * @record
 */
function IApplicationContext() { }
if (false) {}
/**
 * @record
 */
function IPaymentMethod() { }
if (false) {}
/**
 * @record
 */
function IPhone() { }
if (false) {}
/**
 * @record
 */
function ITaxInfo() { }
if (false) {}
/**
 * @record
 */
function IPhoneNumber() { }
if (false) {}
/**
 * @record
 */
function IPurchaseUnit() { }
if (false) {}
/**
 * @record
 */
function IPayee() { }
if (false) {}
/**
 * @record
 */
function IPaymentInstructions() { }
if (false) {}
/**
 * @record
 */
function IPlatformFee() { }
if (false) {}
/**
 * @record
 */
function ITransactionItem() { }
if (false) {}
/**
 * @record
 */
function ITax() { }
if (false) {}
/**
 * @record
 */
function IUnitAmount() { }
if (false) {}
/**
 * @record
 */
function IMoney() { }
if (false) {}
/**
 * @record
 */
function IUnitBreakdown() { }
if (false) {}
/**
 * @record
 */
function IPartyName() { }
if (false) {}
/**
 * @record
 */
function IAddressPortable() { }
if (false) {}
/**
 * @record
 */
function IShipping() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-paypal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-paypal.js.map

/***/ }),

/***/ "fm6r":
/*!*************************************************!*\
  !*** ./src/app/shared/pipe/my-sessions.pipe.ts ***!
  \*************************************************/
/*! exports provided: MySessionsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySessionsPipe", function() { return MySessionsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let MySessionsPipe = class MySessionsPipe {
    transform(allSessionsData, field, valuesArr, checkCreatedByUserId = null, checkCreatedByT = false, sendMasterDataBackIfChildMissingT = false) {
        if (!allSessionsData)
            return [];
        if (!valuesArr || valuesArr.length == 0)
            return allSessionsData;
        return allSessionsData.filter(it => {
            if (checkCreatedByUserId) {
                if (!checkCreatedByT) {
                    if (it.createdBy == checkCreatedByUserId) {
                        return false;
                    }
                }
                else {
                    if (it.createdBy != checkCreatedByUserId) {
                        return false;
                    }
                }
            }
            let _fieldData = null;
            let _splittedArr = field.replace('[0]', '').split('.');
            if (field && _splittedArr.length == 2) {
                let master_objAttr = field.replace('[0]', '').split('.')[0];
                let child_objAttr = field.replace('[0]', '').split('.')[1];
                for (let index in it[master_objAttr]) {
                    let _obj = it[master_objAttr][index];
                    if (_obj) {
                        _fieldData = _obj[child_objAttr];
                        if (_fieldData) {
                            return valuesArr.indexOf(_fieldData.toLowerCase()) != -1;
                        }
                    }
                    else {
                        debugger;
                        if (sendMasterDataBackIfChildMissingT) {
                            if (valuesArr.indexOf('pending') > -1) {
                                return true;
                            }
                        }
                    }
                }
            }
            else {
                _fieldData = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](it, field);
                if (_fieldData) {
                    return valuesArr.indexOf(_fieldData.toLowerCase()) != -1;
                }
            }
            return false;
        });
    }
};
MySessionsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'mySessionsFilter'
    })
], MySessionsPipe);



/***/ }),

/***/ "gESH":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/profile/profile.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pt-0 saas2\">\r\n    <div class=\"col-xl-12 col-12 text-center\" *ngIf=\"!f.isVerified.value\">\r\n        <h3>Submit your portfolio for verification</h3>\r\n        <P class=\"my-3\">Remember to fill in all fields correctly, otherwise you may risk lifetime blockage</P>\r\n    </div>\r\n    <div class=\"col-xl-12 col-12\">\r\n        <section class=\"tab-product  p-b-0\">\r\n\r\n            <ul class=\"nav nav-justified nav-material nav-tabs mb-4 shadow-sm\" id=\"top-tab\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a id=\"btn_click_profile_basic_details\" class=\"nav-link show active\" data-toggle=\"tab\"\r\n                        data-target=\"#profile_basic_details\">Basic Details</a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a id=\"btn_click_profile_skills_verification\" class=\"nav-link\" data-toggle=\"tab\"\r\n                        data-target=\"#profile_skills_verification\">Upload Documents</a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <!-- <li class=\"nav-item\" *ngIf=\"_role == Role.Borrower\">\r\n                            <a id=\"btn_click_profile_banking\" class=\"nav-link font-weight-light\" data-toggle=\"pill\"\r\n                                data-target=\"#profile_banking_details\">Banking Details</a>\r\n                        </li> -->\r\n            </ul>\r\n\r\n        </section>\r\n\r\n        <form [formGroup]=\"profileForm\">\r\n\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\" id=\"profile_basic_details\">\r\n                    <div class=\"form-row mb-2  mb-3\">\r\n                        <div class=\"col-xl-3 text-center\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-header\">\r\n                                    <h6 class=\"font-weight-bold text-primary\">Change Profile Pic</h6>\r\n                                </div>\r\n\r\n                                <div class=\"card-body\">\r\n                                    <img [src]=\"f.selfProfileUrl.value\" onerror=\"this.src='/assets/img/nouser.png';\"\r\n                                        class=\"border img-fluid rounded-circle mb-3\" />\r\n\r\n                                    <i *ngIf=\"!selfProfileUrlPendingForUpload\"\r\n                                        class=\"icon-pencil-alt m-2 cursor-pointer text-success\"\r\n                                        (click)=\"openFileUploaderForProfile()\">\r\n                                        <input id=\"ctrlUploadProfile\" hidden type=\"file\" name=\"image\" accept=\"image/*\"\r\n                                            (change)=\"fileProgressForProfile($event)\"> Upload\r\n                                    </i>\r\n                                    <i *ngIf=\"selfProfileUrlPendingForUpload\"\r\n                                        class=\"icon-upload m-2 cursor-pointer text-success\"\r\n                                        (click)=\"onUploadForProfile()\"> Save\r\n                                    </i>\r\n                                </div>\r\n\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"btn-group btn-group-sm shadow\">\r\n                                        <button disabled *ngIf=\"f.role.value !=='lender'\" type=\"button\" class=\"btn\"\r\n                                            (click)=\"onClickRoleChange('borrower')\"\r\n                                            [ngClass]=\"{ 'btn-success': f.role.value=='borrower', 'btn-outline-success': f.role.value!='borrower'}\">\r\n                                            Borrower\r\n                                        </button>\r\n                                        <button disabled *ngIf=\"f.role.value !=='borrower'\" type=\"button\" class=\"btn\"\r\n                                            (click)=\"onClickRoleChange('lender')\"\r\n                                            [ngClass]=\"{ 'btn-success': f.role.value=='lender', 'btn-outline-success': f.role.value!='lender'}\">\r\n                                            Lender\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"col-xl-9\">\r\n\r\n                            <div class=\"card\">\r\n                                <div class=\"card-header\">\r\n                                    <h6 class=\"font-weight-bold text-primary\">Change Basic Details</h6>\r\n                                </div>\r\n\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"form-row \">\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"firstName\">First Name</label>\r\n                                            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"middleName\">Middle Name</label>\r\n                                            <input type=\"text\" formControlName=\"middleName\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.middleName.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.middleName.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.middleName.errors.required\">Middle Name is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"lastName\">Last Name</label>\r\n                                            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-row\">\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"mobileNo\">\r\n                                                <i class=\"icon-mobile text-success\"></i>\r\n                                                Mobile Number</label>\r\n                                            <input type=\"text\" formControlName=\"mobileNo\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.mobileNo.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.mobileNo.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.mobileNo.errors.required\">Mobile Number is required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"emailAddress\">Email</label>\r\n                                            <input type=\"text\" disabled formControlName=\"emailAddress\"\r\n                                                class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.emailAddress.errors.required\">Email is required</div>\r\n                                                <div *ngIf=\"f.emailAddress.errors.email\">Invalid Email format.</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"address\" class=\"font-weight-bold\">\r\n                                                Address\r\n                                            </label>\r\n                                            <textarea rows=\"2\" maxlength=\"500\" formControlName=\"address\"\r\n                                                class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\">\r\n                                                    </textarea>\r\n                                            <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.address.errors.required\">\r\n                                                    Address is required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-row\">\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"birthDateCustomised\">Birthday</label>\r\n                                            <input type=\"date\" formControlName=\"birthDateCustomised\"\r\n                                                class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.birthDateCustomised.errors }\"\r\n                                                [max]=\"maxDate\" [min]=\"minDate\" />\r\n                                            <div *ngIf=\"submitted && f.birthDate.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.birthDateCustomised.errors.required\">Email is required\r\n                                                </div>\r\n                                                <div *ngIf=\"f.birthDateCustomised.errors.date\">Invalid Email format.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-4 d-none\">\r\n                                            <div class=\"form-row\">\r\n                                                <div class=\"col-xl-12 text-center mb-2\">\r\n                                                    <label>Gender</label>\r\n                                                    <div class=\"btn-group shadow mb-3\">\r\n                                                        <button type=\"button\" class=\"btn\"\r\n                                                            (click)=\"onClickGenderChange('male')\"\r\n                                                            [ngClass]=\"{ 'btn-success': f.gender.value=='male', 'btn-outline-success': f.gender.value!='male'}\">\r\n                                                            Male\r\n                                                        </button>\r\n                                                        <button type=\"button\" class=\"btn\"\r\n                                                            (click)=\"onClickGenderChange('female')\"\r\n                                                            [ngClass]=\"{ 'btn-success': f.gender.value=='female', 'btn-outline-success': f.gender.value!='female'}\">\r\n                                                            Female\r\n                                                        </button>\r\n                                                        <button type=\"button\" class=\"btn\"\r\n                                                            (click)=\"onClickGenderChange('other')\"\r\n                                                            [ngClass]=\"{ 'btn-success': f.gender.value=='other', 'btn-outline-success': f.gender.value!='other'}\">\r\n                                                            Other\r\n                                                        </button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"cityCode\">City</label>\r\n                                            <input type=\"text\" formControlName=\"cityCode\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.cityCode.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.cityCode.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.cityCode.errors.required\">City is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"cityCode\">Country</label>\r\n                                            <select formControlName=\"country\" class=\"custom-select\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\r\n                                                <option value=\"\" selected disabled>Choose Country</option>\r\n                                                <option *ngFor=\"let country of countrylist\" [ngValue]=\"country\">\r\n                                                    {{country}}</option>\r\n                                            </select>\r\n                                            <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.country.errors.required\">Country is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xl-12 mb-3\">\r\n                                            <label for=\"myProfileDetails\">About</label>\r\n                                            <textarea rows=\"2\" maxlength=\"500\" formControlName=\"myProfileDetails\"\r\n                                                class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.myProfileDetails.errors }\">\r\n                                                    </textarea>\r\n                                            <div *ngIf=\"submitted && f.myProfileDetails.errors\"\r\n                                                class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.myProfileDetails.errors.required\">About My Profile is\r\n                                                    required\r\n                                                </div>\r\n                                                <div *ngIf=\"f.myProfileDetails.errors.email\">About My Profile format.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"card-footer\">\r\n                                    <button type=\"button\" (click)=\"clickOnGoToNext(2)\" [disabled]=\"loading\"\r\n                                        class=\"btn btn-primary float-right\">Next</button>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"profile_skills_verification\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h6 class=\"font-weight-bold text-primary\">Update Your Documents</h6>\r\n                        </div>\r\n\r\n                        <div class=\"card-body\">\r\n                            <div class=\"form-row mb-3\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"text-gray\" i18n>\r\n                                        Upload your Passport, Driving Licence, Health Insurance Card document\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                                <div class=\"col-xl-3 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"mb-1\" for=\"myPassportNumber\">Passport Number:</label>\r\n                                        <input type=\"text\" formControlName=\"myPassportNumber\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.myPassportNumber.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.myPassportNumber.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.myPassportNumber.errors.required\">Passport number is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-7 col-12\">\r\n                                    <div class=\"custom-file mt-4\">\r\n                                        <input type=\"file\" class=\"custom-file-input\" name=\"image\" accept=\"image/*\"\r\n                                            (change)=\"fileProgressAssetDocs($event,'lblmyPassportMedia')\">\r\n                                        <label class=\"custom-file-label\" for=\"customFile\"\r\n                                            id=\"lblmyPassportMedia\">{{lblmyPassportMediaText}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-2 col-12\">\r\n                                    <button class=\"btn btn-outline-secondary btn-block mt-4\"\r\n                                        (click)=\"onUploadAssetDocs('myPassportMedia')\">\r\n                                        Upload\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row mb-3\">\r\n                                <div class=\"col-xl-3 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"mb-1\" for=\"myDLNumber\">Driving License Number:</label>\r\n                                        <input type=\"text\" formControlName=\"myDLNumber\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.myDLNumber.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.myDLNumber.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.myDLNumber.errors.required\">Driving License number is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-7\">\r\n                                    <div class=\"custom-file mt-4\">\r\n                                        <input type=\"file\" class=\"custom-file-input\" name=\"image\" accept=\"image/*\"\r\n                                            (change)=\"fileProgressAssetDocs($event,'lblmyDLMedia')\">\r\n                                        <label class=\"custom-file-label\" for=\"customFile\"\r\n                                            id=\"lblmyDLMedia\">{{lblmyDLMediaText}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-2\">\r\n                                    <button class=\"btn btn-outline-secondary btn-block mt-4\"\r\n                                        (click)=\"onUploadAssetDocs('myDLMedia')\">\r\n                                        Upload\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row mb-3\">\r\n                                <div class=\"col-xl-3 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"mb-1\" for=\"cprNumber\">CPR Number:</label>\r\n                                        <input type=\"text\" formControlName=\"cprNumber\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.cprNumber.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.cprNumber.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.cprNumber.errors.required\">CPR number is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-7\">\r\n                                    <div class=\"custom-file mt-4\">\r\n                                        <input type=\"file\" class=\"custom-file-input\" name=\"image\" accept=\"image/*\"\r\n                                            (change)=\"fileProgressAssetDocs($event,'lblmyHICardMedia')\">\r\n                                        <label class=\"custom-file-label\" for=\"customFile\"\r\n                                            id=\"lblmyHICardMedia\">{{lblmyHICardMediaText}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-2\">\r\n                                    <button class=\"btn btn-outline-secondary btn-block mt-4\"\r\n                                        (click)=\"onUploadAssetDocs('myHICardMedia')\">\r\n                                        Upload\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-4\">\r\n                                    <div class=\"card\" *ngFor=\"let previewUrl of f.myPassportMedia.value\">\r\n                                        <img class=\"card-img-top\" [src]=\"previewUrl.url\" style=\"height: 200px;\">\r\n                                        <div *ngIf=\"fileUploadProgress\">\r\n                                            Upload progress: {{ fileUploadProgress }}\r\n                                        </div>\r\n                                        <div class=\"card-body\">\r\n                                            Passport\r\n                                            <a class=\"btn btn-primary btn-sm btn-xs float-right text-white\"><i\r\n                                                    class=\"icon icon-trash\"\r\n                                                    (click)=\"onUploadCleanAssetDocs('myPassportMedia')\"></i></a>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n                                <div class=\"col-xl-4\">\r\n                                    <div class=\"card\" *ngFor=\"let previewUrl of f.myDLMedia.value\">\r\n                                        <img class=\"card-img-top\" [src]=\"previewUrl.url\" style=\"height: 200px;\">\r\n                                        <div *ngIf=\"fileUploadProgress\">\r\n                                            Upload progress: {{ fileUploadProgress }}\r\n                                        </div>\r\n                                        <div class=\"card-body\">\r\n                                            Driving Licence\r\n                                            <a class=\"btn btn-primary btn-sm btn-xs float-right text-white\"><i\r\n                                                    class=\"icon icon-trash\"\r\n                                                    (click)=\"onUploadCleanAssetDocs('myDLMedia')\"></i></a>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n                                <div class=\"col-xl-4\">\r\n                                    <div class=\"card\" *ngFor=\"let previewUrl of f.myHICardMedia.value\">\r\n                                        <img class=\"card-img-top\" [src]=\"previewUrl.url\" style=\"height: 200px;\">\r\n                                        <div *ngIf=\"fileUploadProgress\">\r\n                                            Upload progress: {{ fileUploadProgress }}\r\n                                        </div>\r\n                                        <div class=\"card-body\">\r\n                                            Health Insurance Card\r\n                                            <a class=\"btn btn-primary btn-sm btn-xs float-right text-white\"><i\r\n                                                    class=\"icon icon-trash\"\r\n                                                    (click)=\"onUploadCleanAssetDocs('myHICardMedia')\"></i></a>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-xl-12 mt-3\">\r\n                                    <label for=\"myProfileDetails\">Social Network</label>\r\n                                    <div class=\"form-row\">\r\n                                        <div class=\"col-xl-4\">\r\n\r\n                                            <select [(ngModel)]=\"appName\" class=\"custom-select\"\r\n                                                [ngModelOptions]=\"{standalone: true}\">\r\n                                                <option value=\"facebook\" selected>Facebook</option>\r\n                                                <!--<option value=\"linkedin\">LinkedIn</option>-->\r\n                                            </select>\r\n                                        </div>\r\n                                        <div class=\"col-xl-8\">\r\n\r\n                                            <div class=\"input-group mb-3\">\r\n                                                <input type=\"url\"\r\n                                                    pattern=\"/(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})/gi*\"\r\n                                                    [(ngModel)]=\"appLink\" class=\"form-control\"\r\n                                                    [ngModelOptions]=\"{standalone: true}\"\r\n                                                    placeholder=\"Facebook Profile Public Link\" />\r\n                                                <div class=\"input-group-append\">\r\n                                                    <button class=\"btn btn-success\"\r\n                                                        (click)=\"addExternalAppLinks(true, null, appName, appLink)\">Add</button>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"col-xl-12\">\r\n                                            <div *ngIf=\"submitted && f.externalAppLinks.errors\"\r\n                                                class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.externalAppLinks.errors.required\">Links required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-row\" *ngFor=\"let applinks of f.externalAppLinks.value\">\r\n                                        <div class=\"col-xl-2\">\r\n                                            {{applinks.appName | titlecase}}\r\n                                        </div>\r\n                                        <div class=\"col-xl-10\">\r\n                                            <a href=\"{{applinks.appLink}}\">{{applinks.appLink}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"_role == Role.Borrower\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xl-12 mt-3\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-xl-12\">\r\n                                                    <label class=\"font-weight-bold\">Are you registered in RKI?</label>\r\n                                                    <i class=\"icon icon-info-alt ml-2\" data-toggle=\"tooltip\"\r\n                                                        title=\"Hooray!\"></i>\r\n                                                    <div class=\"btn-group btn-group btn-group-sm ml-4\">\r\n                                                        <button type=\"button\" class=\"btn\" (click)=\"onRKIChange(true)\"\r\n                                                            [ngClass]=\"{ 'btn-success': onInitRKICheckedValue()==true, 'btn-outline-success':onInitRKICheckedValue()==false}\">\r\n                                                            Yes\r\n                                                        </button>\r\n                                                        <button type=\"button\" class=\"btn\" (click)=\"onRKIChange(false)\"\r\n                                                            [ngClass]=\"{ 'btn-success': onInitRKICheckedValue()==false, 'btn-outline-success':onInitRKICheckedValue()==true}\">\r\n                                                            No\r\n                                                        </button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div *ngIf=\"submitted && f.isRKIRegistered.errors\" class=\"error\">\r\n                                                <div *ngIf=\"f.isRKIRegistered.errors.required\" class=\"text-red\">\r\n                                                    data required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xl-12 mt-3\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-row\" *ngIf=\"!onInitRKICheckedValue()\">\r\n                                        <div class=\"col-xl-9\">\r\n                                            <div class=\"custom-file\">\r\n                                                <input type=\"file\" class=\"custom-file-input\" name=\"image\"\r\n                                                    accept=\"image/*\"\r\n                                                    (change)=\"fileProgressAssetDocs($event,'lblmyRKIMedia')\">\r\n                                                <label class=\"custom-file-label\" for=\"customFile\"\r\n                                                    id=\"lblmyRKIMedia\">{{lblmyRKIMediaText}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-3\">\r\n                                            <button class=\"btn btn-outline-secondary btn-block\"\r\n                                                (click)=\"onUploadAssetDocs('myRKIMedia')\">\r\n                                                Upload\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"col-xl-4\">\r\n\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-xl-12\" *ngFor=\"let previewUrl of f.myRKIMedia.value\">\r\n                                                    <i class=\"icon-trash text-danger\"\r\n                                                        (click)=\"onUploadCleanAssetDocs('myRKIMedia')\"></i>\r\n                                                    <img class=\"img-fluid\" [src]=\"previewUrl.url\" />\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div *ngIf=\"fileUploadProgress\">\r\n                                                        Upload progress: {{ fileUploadProgress }}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <button type=\"button\" (click)=\"onProfileUpdateSubmit()\" [disabled]=\"loading\"\r\n                                class=\"btn btn-primary float-right\">Save</button>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- register section -->");

/***/ }),

/***/ "hlmN":
/*!*************************************************************************!*\
  !*** ./src/app/shared/profile-portfolio/profile-portfolio.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfilePortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePortfolioComponent", function() { return ProfilePortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_portfolio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-portfolio.component.html */ "jP5n");
/* harmony import */ var _profile_portfolio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-portfolio.component.css */ "ZD4T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/role */ "z56L");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");














const uploadAPI = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl + '/api/post/upload/assetdata';
const uploadAccessUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl + '/';
let ProfilePortfolioComponent = class ProfilePortfolioComponent {
    constructor(http, formBuilder, authenticationService, userService, alertService, appRouterService, utilityService, router) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.appRouterService = appRouterService;
        this.utilityService = utilityService;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.fileData = null;
        this.fileData4Profile = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
        this.myProfileFiles = [];
        this.selfProfileUrlPendingForUpload = false;
        // redirect to home if already logged in
        if (!this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter('');
        }
        this.initForm();
        this.userService.getUserProfilePortFolioById(this.authenticationService.currentUserValue._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.showEditingForm(data["data"]);
                //this.alertService.success(data['message'], true);
                this.loading = false;
                //this.element_btn_click_profile_skills_verification.click();
            }
            else {
                //alert(JSON.stringify(data['message']));
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
    }
    showEditingForm(_userObj) {
        this.profilePortfolioForm = this.formBuilder.group({
            userId: [_userObj.userId || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            projectTitle: [_userObj.projectTitle || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _id: [_userObj._id || ''],
            myProfileMedia: this.formBuilder.array(_userObj.myProfileMedia || []),
            myProfileDetails: [_userObj.myProfileDetails || ''],
            createdOn: [_userObj.createdOn || ''],
            updatedOn: [_userObj.updatedOn || ''],
            isDeleted: [_userObj.isDeleted || ''],
            createdBy: [_userObj.createdBy || ''],
            deletedBy: [_userObj.deletedBy || ''],
            updatedBy: [this.authenticationService.currentUserValue._id || '']
        });
    }
    initForm() {
        this.profilePortfolioForm = this.formBuilder.group({
            userId: [this.authenticationService.currentUserValue._id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            projectTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _id: [''],
            myProfileMedia: this.formBuilder.array([]),
            myProfileDetails: [''],
            createdOn: [''],
            updatedOn: [''],
            createdBy: [this.authenticationService.currentUserValue._id || ''],
            deletedBy: [''],
            updatedBy: ['']
        });
    }
    ngOnInit() {
    }
    // convenience getter for easy access to form fields
    get f() { return this.profilePortfolioForm.controls; }
    onProfileUpdateSubmit() {
        if (this.selfProfileUrlPendingForUpload) {
            this.alertService.error("Please Save Profile First");
            return;
        }
        this.submitted = true;
        if (this.profilePortfolioForm.invalid) {
            this.alertService.error("Please Provide all data");
            return;
        }
        this.userService.addUpdateUserProfilePortFolio(this.profilePortfolioForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.alertService.success('Your Portfolio is Updated successfully', true);
                this.element_ctrlUploadProfile = document.getElementById('ctrlNavigate2Profile');
                this.element_ctrlUploadProfile.click();
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
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview();
    }
    preview() {
        // Show preview 
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            this.previewUrl = reader.result;
        };
    }
    onSelectMyProfileMedia(event) {
        console.log('371 :: Added', event);
        this.myProfileFiles.push(...event.addedFiles);
        console.log('373', this.myProfileFiles);
    }
    onRemoveMyProfileMedia(event) {
        console.log('378 :: Removed', event);
        this.myProfileFiles.splice(this.myProfileFiles.indexOf(event), 1);
    }
    onUploadMyProfileMedia() {
        const checkArray = this.profilePortfolioForm.get('myProfileMedia');
        if (checkArray.length >= 10) {
            this.alertService.error("Upload MAX limit reached.");
            return;
        }
        for (let _index in this.myProfileFiles) {
            let currentFile = this.myProfileFiles[_index];
            if (!currentFile) {
                this.alertService.error("Select file first.");
                continue;
            }
            const formData = new FormData();
            formData.append('files', currentFile);
            formData.append('documentId', this.authenticationService.currentUserValue._id);
            this.fileUploadProgress = '0%';
            let _temp_currentFile = {
                name: currentFile.name,
                type: currentFile.type,
                size: currentFile.size,
                url: null
            };
            this.http.post(uploadAPI, formData, {
                reportProgress: true,
                observe: 'events'
            }).subscribe(events => {
                if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].UploadProgress) {
                    this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                    console.log(this.fileUploadProgress);
                }
                else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Response) {
                    this.fileUploadProgress = '';
                    console.log(events.body);
                    //alert('SUCCESS !!');
                    lodash__WEBPACK_IMPORTED_MODULE_9__["pullAt"](this.myProfileFiles, _index);
                    this.alertService.success('Uploaded Successfully !!', true);
                    let _uploadedUrl = events.body["data"].path;
                    if (lodash__WEBPACK_IMPORTED_MODULE_9__["startsWith"](_uploadedUrl, '/')) {
                        _uploadedUrl = _uploadedUrl.substr(1);
                    }
                    this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
                    _temp_currentFile.url = this.uploadedFilePath;
                    this.onMyProfileMediaUpdate(true, null, _temp_currentFile);
                }
            });
        }
    }
    onMyProfileMediaUpdate(_addT, _index, _temp_currentFile) {
        const checkArray = this.profilePortfolioForm.get('myProfileMedia');
        if (lodash__WEBPACK_IMPORTED_MODULE_9__["isNaN"](parseInt(_index))) {
            //_index=0;
            _index = checkArray.length;
        }
        if (_addT) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_temp_currentFile));
        }
        else {
            if (parseInt(_index) >= 0) {
                checkArray.removeAt(_index);
            }
            else {
                let i = 0;
                checkArray.controls.forEach((item) => {
                    if (item.value.url == _temp_currentFile.url) {
                        checkArray.removeAt(i);
                        return;
                    }
                    i++;
                });
            }
        }
    }
    navigate2Profile() {
        let _parentRouting = '';
        switch (this.authenticationService.currentUserValue.role) {
            case src_app_models_role__WEBPACK_IMPORTED_MODULE_12__["Role"].Borrower:
                _parentRouting = 'borrower';
                break;
            case src_app_models_role__WEBPACK_IMPORTED_MODULE_12__["Role"].Lender:
                _parentRouting = 'lender';
                break;
            case src_app_models_role__WEBPACK_IMPORTED_MODULE_12__["Role"].Admin:
                _parentRouting = 'admin';
                break;
        }
        this.router.navigate([_parentRouting + "/profile"]);
    }
};
ProfilePortfolioComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_6__["AppRouterService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }
];
ProfilePortfolioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile-portfolio',
        template: _raw_loader_profile_portfolio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_portfolio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_6__["AppRouterService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
], ProfilePortfolioComponent);



/***/ }),

/***/ "igiJ":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/monthly-subscription/monthly-subscription.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center mb-4 hide-sm\">\r\n    <div class=\"h1 font-weight-light text-primary mb-2\">Pricing built for your needs.</div>\r\n    <div class=\"h3 text-black-50 font-weight-light\">No surprises, no hassle.</div>\r\n</div>\r\n\r\n<div class=\"pricing-detailed mb-4\">\r\n    <div class=\"row align-items-center no-gutters\">\r\n        <!-- Detailed pricing column 1-->\r\n        <div class=\"col-lg-6 z-1 mb-4 mb-lg-0\">\r\n            <div class=\"card text-center border-0 shadow-sm\">\r\n                <div class=\"card-header bg-transparent justify-content-center py-3\">\r\n                    <h5 class=\"text-primary mb-0\">Paid Plan</h5>\r\n                </div>\r\n                <div class=\"card-body px-5 py-4\">\r\n                    <p class=\"lead\">One easy to understand pricing plan for all of our users! Get complete access to all\r\n                        of our features.</p>\r\n                    <div class=\"mb-2\">\r\n                        <div class=\"display-3 text-dark\">${{returnPaidPlanAmountUserRoleWise()}}</div>\r\n                        per month\r\n                    </div>\r\n                    <ul class=\"list-unstyled\">\r\n                        <li class=\"d-flex align-items-center justify-content-center mb-3\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\r\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\r\n                                stroke-linejoin=\"round\" class=\"feather feather-check-circle text-primary mr-2\">\r\n                                <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path>\r\n                                <polyline points=\"22 4 12 14.01 9 11.01\"></polyline>\r\n                            </svg>\r\n                            Unlimited access to all of our features\r\n                        </li>\r\n                        <li class=\"d-flex align-items-center justify-content-center mb-3\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\r\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\r\n                                stroke-linejoin=\"round\" class=\"feather feather-check-circle text-primary mr-2\">\r\n                                <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path>\r\n                                <polyline points=\"22 4 12 14.01 9 11.01\"></polyline>\r\n                            </svg>\r\n                            No setup fees or any hidden fees\r\n                        </li>\r\n                        <li class=\"d-flex align-items-center justify-content-center\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\r\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\r\n                                stroke-linejoin=\"round\" class=\"feather feather-check-circle text-primary mr-2\">\r\n                                <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path>\r\n                                <polyline points=\"22 4 12 14.01 9 11.01\"></polyline>\r\n                            </svg>\r\n                            Dedicated customer support\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"card-footer d-flex align-items-center justify-content-center cursor-pointer\" href=\"#!\" (click)=\"userInitiatedForPlanPurchaseOrRenewal()\">\r\n                    Pay Now\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                        stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\r\n                        class=\"feather feather-arrow-right ml-2\">\r\n                        <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>\r\n                        <polyline points=\"12 5 19 12 12 19\"></polyline>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Detailed pricing column 2-->\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card bg-dark text-center pricing-detailed-behind\" *ngIf=\"!userInitiatedForPayment\">\r\n                <div class=\"card-header justify-content-center py-3\">\r\n                    <h5 class=\"mb-0 text-white\">Current Subsciption</h5>\r\n                </div>\r\n                <div class=\"card-body text-white-50 px-5 py-4\">\r\n                    <h2 class=\"text-white\">{{usersCurrentPlanSubscription.planName}}</h2>\r\n                    Valid Untill\r\n                    <h2 class=\"mt-3\">\r\n                        <span class=\"badge badge-primary h3\">{{ usersCurrentPlanSubscription.userMemberShipExpireOn | date:'dd-MMM-YYYY'}}</span>\r\n                    </h2> \r\n\r\n                    <div class=\"mt-1 text-white-50\">Plan ends {{ usersCurrentPlanSubscription.userMemberShipExpireOn | datePretty}}</div>\r\n                                   \r\n                </div>\r\n                <div class=\"card-footer bg-gray-800 text-white d-flex align-items-center justify-content-center cursor-pointer\"\r\n                    (click)=\"userInitiatedForPlanPurchaseOrRenewal()\">\r\n                    Upgrade\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                        stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\r\n                        class=\"feather feather-arrow-right ml-2\">\r\n                        <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>\r\n                        <polyline points=\"12 5 19 12 12 19\"></polyline>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n            <div class=\"card bg-dark text-center pricing-detailed-behind\" [hidden]=\"!userInitiatedForPayment\">\r\n                <div class=\"card-header justify-content-center py-3\">\r\n                    <h5 class=\"mb-0 text-white\">Selected Plan</h5>\r\n                </div>\r\n                <div class=\"card-body text-white-50 px-5 py-4\">\r\n                    <h2 class=\"text-white\">{{usersNextPlanSubscription.planName}}</h2>\r\n                    Next Renewal\r\n                    <h2 class=\"mt-3\">\r\n                        <span class=\"badge badge-primary h3\">{{ usersNextPlanSubscription.userMemberShipExpireOn | datePretty}}</span>\r\n                    </h2>\r\n                    {{ usersNextPlanSubscription.userMemberShipExpireOn | date:'dd-MMM-YYYY'}}                               \r\n                </div>\r\n                <div class=\"card-footer bg-gray-800 text-white d-flex align-items-center justify-content-center\">\r\n                    <app-payment [hidden]=\"!userInitiatedForPayment\"></app-payment>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "iiTb":
/*!**********************************************************************!*\
  !*** ./src/app/shared/update-password/update-password.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "jP5n":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/profile-portfolio/profile-portfolio.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title class=\"ml-n2\"><button id=\"ctrlNavigate2Profile\" (click)=\"navigate2Profile()\" class=\"btn btn-link btn-sm\" mat-button mat-dialog-close><i\r\n            class=\"icon-angle-left\"></i> Back</button>Portfolio</h2>\r\n<div class=\"row mb-2 mb-3\">\r\n    <div class=\"col-xl-12 col-12\">\r\n        <form [formGroup]=\"profilePortfolioForm\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"tab-pane\" id=\"profile_portfolio\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-12 mt-3\">\r\n                                <label for=\"projectTitle\" class=\"font-weight-bold\">Project Title</label>\r\n                                <input maxlength=\"50\" formControlName=\"projectTitle\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.projectTitle.errors }\" />\r\n                                <div *ngIf=\"submitted && f.projectTitle.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.projectTitle.errors.required\">Project Title is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-12 mt-3\">\r\n                                <label for=\"myProfileDetails\" class=\"font-weight-bold\">Description</label>\r\n                                <textarea rows=\"2\" maxlength=\"500\" formControlName=\"myProfileDetails\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.myProfileDetails.errors }\">\r\n                                </textarea>\r\n                                <div *ngIf=\"submitted && f.myProfileDetails.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.myProfileDetails.errors.required\">Description is required</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-xl-12  mt-3 text-center\">\r\n                                <!--1000*(10*10*10*1000)::=>1GB-->\r\n                                <div class=\"custom-dropzone\" ngx-dropzone [accept]=\"'image/*,video/*,application/pdf'\" (change)=\"onSelectMyProfileMedia($event)\" [maxFileSize]=\"1000*(10*10*10*1000)\">\r\n                                    <ngx-dropzone-label>\r\n                                        <div>\r\n                                            <p>Drag and drop your files here to upload Your Work</p>\r\n                                        </div>\r\n                                    </ngx-dropzone-label>\r\n                                    <!--  | dataArrayFilter : 'type' : 'video/'; | dataArrayFilter : 'type' : 'image/jpeg';-->\r\n                                    <div *ngFor=\"let file4Preview of myProfileFiles\">\r\n                                        <ngx-dropzone-image-preview *ngIf=\"file4Preview.type.indexOf('image/')>-1\" ngProjectAs=\"ngx-dropzone-preview\" [file]=\"file4Preview\" [removable]=\"true\" (removed)=\"onRemoveMyProfileMedia(file4Preview)\">\r\n                                            <ngx-dropzone-label>{{ file4Preview.name }} ({{ file4Preview.type }})\r\n                                            </ngx-dropzone-label>\r\n                                        </ngx-dropzone-image-preview>\r\n                                        <ngx-dropzone-video-preview *ngIf=\"file4Preview.type.indexOf('video/')>-1\" ngProjectAs=\"ngx-dropzone-preview\" [file]=\"file4Preview\" [removable]=\"true\" (removed)=\"onRemoveMyProfileMedia(file4Preview)\">\r\n                                            <ngx-dropzone-label>{{ file4Preview.name }} ({{ file4Preview.type }})\r\n                                            </ngx-dropzone-label>\r\n                                        </ngx-dropzone-video-preview>\r\n                                        <ngx-dropzone-preview *ngIf=\"file4Preview.type.indexOf('video/')==-1 && file4Preview.type.indexOf('image/')==-1\" ngProjectAs=\"ngx-dropzone-preview\" [file]=\"file4Preview\" [removable]=\"true\" (removed)=\"onRemoveMyProfileMedia(file4Preview)\">\r\n                                            <ngx-dropzone-label>{{ file4Preview.name }} ({{ file4Preview.type }})\r\n                                            </ngx-dropzone-label>\r\n                                        </ngx-dropzone-preview>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-12  mt-3 text-center\">\r\n                                <button class=\"btn btn-primary mt-3\" (click)=\"onUploadMyProfileMedia()\">Upload</button>\r\n                            </div>\r\n                            <div *ngIf=\"fileUploadProgress\">\r\n                                Upload progress: {{ fileUploadProgress }}\r\n                            </div>\r\n                            <div class=\"col-xl-12 mt-3\">\r\n                                <div class=\"card mt-2\">\r\n                                    <div class=\"card-header\">\r\n                                        My Documents\r\n                                    </div>\r\n                                    <div class=\"card-body\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xl-2\" *ngFor=\"let previewUrl of f.myProfileMedia.value\">\r\n                                                <video *ngIf=\"previewUrl.type.indexOf('video/')>-1\" class=\"img-fluid border\" controls [src]=\"previewUrl.url\"></video>\r\n                                                <img *ngIf=\"previewUrl.type.indexOf('image/')>-1\" class=\"img-fluid border\" [src]=\"previewUrl.url\" onerror=\"this.src='/assets/img/na.png';\" />\r\n                                                <img *ngIf=\"previewUrl.type.indexOf('video/')==-1 && previewUrl.type.indexOf('image/')==-1\" class=\"img-fluid border\" src=\"/assets/img/pdf.png\" onerror=\"this.src='/assets/img/na.png';\" />\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-12 mt-3\">\r\n                                <hr>\r\n                                <button type=\"button\" (click)=\"onProfileUpdateSubmit()\" [disabled]=\"loading\" class=\"btn btn-primary float-right\">Save</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "kqwP":
/*!***************************************************************!*\
  !*** ./src/app/shared/session-view/session-view.component.ts ***!
  \***************************************************************/
/*! exports provided: SessionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionViewComponent", function() { return SessionViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session-view.component.html */ "83xO");
/* harmony import */ var _session_view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-view.component.css */ "bvaM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SessionViewComponent = class SessionViewComponent {
    constructor() { }
    ngOnInit() {
        $(document).ready(function () {
            $(".vertical-tabs-steps .nav-link, .horizontal-tabs-steps .nav-link").click(function () {
                $(this).parent().prevAll().children('.vertical-tabs-steps .nav-link, .horizontal-tabs-steps .nav-link').addClass('checked-steps');
                $(this).parent().nextAll().children('.vertical-tabs-steps .nav-link, .horizontal-tabs-steps .nav-link').removeClass('checked-steps');
                $(this).removeClass('checked-steps');
                $(this).parent().removeClass('complete-step');
                $(this).parent().nextAll().removeClass('complete-step');
                $(".horizontal-tabs-steps .nav-link.checked-steps, .vertical-tabs-steps .nav-link.checked-steps").parent().addClass('complete-step');
            });
        });
    }
};
SessionViewComponent.ctorParameters = () => [];
SessionViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session-view',
        template: _raw_loader_session_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SessionViewComponent);



/***/ }),

/***/ "kvL/":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js ***!
  \*************************************************************************/
/*! exports provided: NgxDropzoneModule, NgxDropzoneComponent, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneVideoPreviewComponent, NgxDropzoneRemoveBadgeComponent, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function() { return NgxDropzoneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function() { return NgxDropzoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function() { return NgxDropzonePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function() { return NgxDropzoneImagePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function() { return NgxDropzoneVideoPreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function() { return NgxDropzoneRemoveBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxDropzoneLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxDropzoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template_ngx_dropzone_remove_badge_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1._remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["ngx-dropzone-label"]]];
const _c1 = ["ngx-dropzone-label"];
const _c2 = ["fileInput"];
function NgxDropzoneComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2, ["*ngIf", "!_hasPreviews"]);
} }
const _c3 = [[["ngx-dropzone-preview"]], "*", [["ngx-dropzone-label"]]];
const _c4 = ["ngx-dropzone-preview", "*", "ngx-dropzone-label"];
function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1._remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxDropzoneVideoPreviewComponent_video_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_video_0_Template_video_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.sanitizedVideoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3._remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgxDropzoneLabelDirective {
}
NgxDropzoneLabelDirective.ɵfac = function NgxDropzoneLabelDirective_Factory(t) { return new (t || NgxDropzoneLabelDirective)(); };
NgxDropzoneLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxDropzoneLabelDirective, selectors: [["ngx-dropzone-label"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ngx-dropzone-label'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 * @param {?} value
 * @return {?}
 */
function coerceNumberProperty(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return (!isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value))) ? Number(value) : null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const KEY_CODE = {
    BACKSPACE: 8,
    DELETE: 46,
};
KEY_CODE[KEY_CODE.BACKSPACE] = 'BACKSPACE';
KEY_CODE[KEY_CODE.DELETE] = 'DELETE';
class NgxDropzonePreviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._removable = false;
        /**
         * Emitted when the element should be removed.
         */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Make the preview item focusable using the tab key.
         */
        this.tabIndex = 0;
    }
    /**
     * Allow the user to remove files.
     * @return {?}
     */
    get removable() {
        return this._removable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set removable(value) {
        this._removable = coerceBooleanProperty(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyEvent(event) {
        switch (event.keyCode) {
            case KEY_CODE.BACKSPACE:
            case KEY_CODE.DELETE:
                this.remove();
                break;
            default:
                break;
        }
    }
    /**
     * We use the HostBinding to pass these common styles to child components.
     * @return {?}
     */
    get hostStyle() {
        /** @type {?} */
        const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * Remove method to be used from the template.
     * @param {?} event
     * @return {?}
     */
    _remove(event) {
        event.stopPropagation();
        this.remove();
    }
    /**
     * Remove the preview item (use from component code).
     * @return {?}
     */
    remove() {
        if (this._removable) {
            this.removed.next(this.file);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    readFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    resolve(((/** @type {?} */ (e.target))).result);
                });
                reader.onerror = (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    console.error(`FileReader failed on file ${this.file.name}.`);
                    reject(e);
                });
                if (!this.file) {
                    return reject('No file to read. Please provide a file using the [file] Input property.');
                }
                reader.readAsDataURL(this.file);
            }));
        });
    }
}
NgxDropzonePreviewComponent.ɵfac = function NgxDropzonePreviewComponent_Factory(t) { return new (t || NgxDropzonePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
NgxDropzonePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzonePreviewComponent, selectors: [["ngx-dropzone-preview"]], hostVars: 3, hostBindings: function NgxDropzonePreviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDropzonePreviewComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabindex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hostStyle);
    } }, inputs: { removable: "removable", file: "file" }, outputs: { removed: "removed" }, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"]], template: function NgxDropzonePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template, 1, 0, "ngx-dropzone-remove-badge", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxDropzoneRemoveBadgeComponent]; }, styles: ["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"] });
/** @nocollapse */
NgxDropzonePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
NgxDropzonePreviewComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    keyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
    hostStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['tabindex',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzonePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-preview',
                template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
                styles: [`:host(){background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host():focus,:host():hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}`]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['tabindex']
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
        }], hostStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style']
        }], file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */
class NgxDropzoneService {
    /**
     * @param {?} files
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} multiple
     * @return {?}
     */
    parseFileList(files, accept, maxFileSize, multiple) {
        /** @type {?} */
        const addedFiles = [];
        /** @type {?} */
        const rejectedFiles = [];
        for (let i = 0; i < files.length; i++) {
            /** @type {?} */
            const file = files.item(i);
            if (!this.isAccepted(file, accept)) {
                this.rejectFile(rejectedFiles, file, 'type');
                continue;
            }
            if (maxFileSize && file.size > maxFileSize) {
                this.rejectFile(rejectedFiles, file, 'size');
                continue;
            }
            if (!multiple && addedFiles.length >= 1) {
                this.rejectFile(rejectedFiles, file, 'no_multiple');
                continue;
            }
            addedFiles.push(file);
        }
        /** @type {?} */
        const result = {
            addedFiles,
            rejectedFiles
        };
        return result;
    }
    /**
     * @private
     * @param {?} file
     * @param {?} accept
     * @return {?}
     */
    isAccepted(file, accept) {
        if (accept === '*') {
            return true;
        }
        /** @type {?} */
        const acceptFiletypes = accept.split(',').map((/**
         * @param {?} it
         * @return {?}
         */
        it => it.toLowerCase().trim()));
        /** @type {?} */
        const filetype = file.type.toLowerCase();
        /** @type {?} */
        const filename = file.name.toLowerCase();
        /** @type {?} */
        const matchedFileType = acceptFiletypes.find((/**
         * @param {?} acceptFiletype
         * @return {?}
         */
        acceptFiletype => {
            // check for wildcard mimetype (e.g. image/*)
            if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
            }
            // check for file extension (e.g. .csv)
            if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
            }
            // check for exact mimetype match (e.g. image/jpeg)
            return acceptFiletype == filetype;
        }));
        return !!matchedFileType;
    }
    /**
     * @private
     * @param {?} rejectedFiles
     * @param {?} file
     * @param {?} reason
     * @return {?}
     */
    rejectFile(rejectedFiles, file, reason) {
        /** @type {?} */
        const rejectedFile = (/** @type {?} */ (file));
        rejectedFile.reason = reason;
        rejectedFiles.push(rejectedFile);
    }
}
NgxDropzoneService.ɵfac = function NgxDropzoneService_Factory(t) { return new (t || NgxDropzoneService)(); };
NgxDropzoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxDropzoneService, factory: NgxDropzoneService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        /**
         * Emitted when any files were added or rejected.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Set the accepted file types. Defaults to '*'.
         */
        this.accept = '*';
        this._disabled = false;
        this._multiple = true;
        this._maxFileSize = undefined;
        this._expandable = false;
        this._disableClick = false;
        this._isHovered = false;
    }
    /**
     * @return {?}
     */
    get _hasPreviews() {
        return !!this._previewChildren.length;
    }
    /**
     * Disable any user interaction with the component.
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this._isHovered) {
            this._isHovered = false;
        }
    }
    /**
     * Allow the selection of multiple files.
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = coerceBooleanProperty(value);
    }
    /**
     * Set the maximum size a single file may have.
     * @return {?}
     */
    get maxFileSize() {
        return this._maxFileSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxFileSize(value) {
        this._maxFileSize = coerceNumberProperty(value);
    }
    /**
     * Allow the dropzone container to expand vertically.
     * @return {?}
     */
    get expandable() {
        return this._expandable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandable(value) {
        this._expandable = coerceBooleanProperty(value);
    }
    /**
     * Open the file selector on click.
     * @return {?}
     */
    get disableClick() {
        return this._disableClick;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disableClick(value) {
        this._disableClick = coerceBooleanProperty(value);
    }
    /**
     * Show the native OS file explorer to select files.
     * @return {?}
     */
    _onClick() {
        if (!this.disableClick) {
            this.showFileSelector();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragOver(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = true;
    }
    /**
     * @return {?}
     */
    _onDragLeave() {
        this._isHovered = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDrop(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = false;
        this.handleFileDrop(event.dataTransfer.files);
    }
    /**
     * @return {?}
     */
    showFileSelector() {
        if (!this.disabled) {
            ((/** @type {?} */ (this._fileInput.nativeElement))).click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onFilesSelected(event) {
        /** @type {?} */
        const files = event.target.files;
        this.handleFileDrop(files);
        // Reset the native file input element to allow selecting the same file again
        this._fileInput.nativeElement.value = '';
        // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
        this.preventDefault(event);
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    handleFileDrop(files) {
        /** @type {?} */
        const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
        this.change.next({
            addedFiles: result.addedFiles,
            rejectedFiles: result.rejectedFiles,
            source: this
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
NgxDropzoneComponent.ɵfac = function NgxDropzoneComponent_Factory(t) { return new (t || NgxDropzoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxDropzoneService, 2)); };
NgxDropzoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzoneComponent, selectors: [["ngx-dropzone"], ["", "ngx-dropzone", ""]], contentQueries: function NgxDropzoneComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxDropzonePreviewComponent, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewChildren = _t);
    } }, viewQuery: function NgxDropzoneComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._fileInput = _t.first);
    } }, hostVars: 8, hostBindings: function NgxDropzoneComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneComponent_click_HostBindingHandler() { return ctx._onClick(); })("dragover", function NgxDropzoneComponent_dragover_HostBindingHandler($event) { return ctx._onDragOver($event); })("dragleave", function NgxDropzoneComponent_dragleave_HostBindingHandler() { return ctx._onDragLeave(); })("drop", function NgxDropzoneComponent_drop_HostBindingHandler($event) { return ctx._onDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-dz-hovered", ctx._isHovered)("ngx-dz-disabled", ctx.disabled)("expandable", ctx.expandable)("unclickable", ctx.disableClick);
    } }, inputs: { accept: "accept", disabled: "disabled", multiple: "multiple", maxFileSize: "maxFileSize", expandable: "expandable", disableClick: "disableClick", id: "id", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedBy: ["aria-describedby", "ariaDescribedBy"] }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NgxDropzoneService])], ngContentSelectors: _c4, decls: 5, vars: 8, consts: [["type", "file", 3, "id", "multiple", "accept", "disabled", "change"], ["fileInput", ""], [4, "ngIf"]], template: function NgxDropzoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxDropzoneComponent_Template_input_change_0_listener($event) { return ctx._onFilesSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("multiple", ctx.multiple)("accept", ctx.accept)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._hasPreviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}"] });
/** @nocollapse */
NgxDropzoneComponent.ctorParameters = () => [
    { type: NgxDropzoneService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];
NgxDropzoneComponent.propDecorators = {
    _previewChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgxDropzonePreviewComponent, { descendants: true },] }],
    _fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fileInput',] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-disabled',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expandable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.expandable',] }],
    disableClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.unclickable',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-describedby',] }],
    _isHovered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-hovered',] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    _onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    _onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave',] }],
    _onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone, [ngx-dropzone]',
                template: `<input #fileInput type="file" [id]="id" [multiple]="multiple" [accept]="accept" [disabled]="disabled"
  (change)="_onFilesSelected($event)" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledby"
  [attr.aria-describedby]="ariaDescribedBy">
<ng-content select="ngx-dropzone-label" *ngIf="!_hasPreviews"></ng-content>
<ng-content select="ngx-dropzone-preview"></ng-content>
<ng-content></ng-content>
`,
                styles: [`:host(){display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}:host().ngx-dz-hovered{border-style:solid}:host().ngx-dz-disabled{opacity:.5;cursor:no-drop;pointer-events:none}:host().expandable{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}:host().unclickable{cursor:default}:host() ::ng-deep ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}:host() input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}:host() input:focus+::ng-deep ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}`],
                providers: [NgxDropzoneService]
            }]
    }], function () { return [{ type: NgxDropzoneService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _isHovered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-hovered']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-disabled']
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxFileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expandable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.expandable']
        }], disableClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.unclickable']
        }], 
    /**
     * Show the native OS file explorer to select files.
     * @return {?}
     */
    _onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], 
    /**
     * @return {?}
     */
    _onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    _onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }], _previewChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NgxDropzonePreviewComponent, { descendants: true }]
        }], _fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
        }], ariaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-describedby']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneImagePreviewComponent extends NgxDropzonePreviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        super(sanitizer);
        /**
         * The image data source.
         */
        this.defualtImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
        this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defualtImgLoading);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.readFile()
            .then((/**
         * @param {?} img
         * @return {?}
         */
        img => setTimeout((/**
         * @return {?}
         */
        () => this.imageSrc = img))))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        err => console.error(err)));
    }
}
NgxDropzoneImagePreviewComponent.ɵfac = function NgxDropzoneImagePreviewComponent_Factory(t) { return new (t || NgxDropzoneImagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
NgxDropzoneImagePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzoneImagePreviewComponent, selectors: [["ngx-dropzone-image-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: NgxDropzonePreviewComponent,
                useExisting: NgxDropzoneImagePreviewComponent
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[3, "src"], [3, "click", 4, "ngIf"], [3, "click"]], template: function NgxDropzoneImagePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxDropzoneRemoveBadgeComponent]; }, styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   img[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"] });
/** @nocollapse */
NgxDropzoneImagePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneImagePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-image-preview',
                template: `
    <img [src]="imageSrc" />
		<ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                styles: [`:host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus img,:host():hover img{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() img{max-height:100%;border-radius:5px;opacity:.8}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}`],
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneImagePreviewComponent
                    }
                ]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneRemoveBadgeComponent {
}
NgxDropzoneRemoveBadgeComponent.ɵfac = function NgxDropzoneRemoveBadgeComponent_Factory(t) { return new (t || NgxDropzoneRemoveBadgeComponent)(); };
NgxDropzoneRemoveBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzoneRemoveBadgeComponent, selectors: [["ngx-dropzone-remove-badge"]], decls: 3, vars: 0, consts: [["x1", "0", "y1", "0", "x2", "10", "y2", "10"], ["x1", "0", "y1", "10", "x2", "10", "y2", "0"]], template: function NgxDropzoneRemoveBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneRemoveBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-remove-badge',
                template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
                styles: [`:host(){display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}:host():hover{background:#aeaeae}:host()>svg{height:10px;width:10px}:host()>svg>line{stroke-width:2px;stroke:#fff}`]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneVideoPreviewComponent extends NgxDropzonePreviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        super(sanitizer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.file) {
            console.error('No file to read. Please provide a file using the [file] Input property.');
            return;
        }
        /**
         * We sanitize the URL here to enable the preview.
         * Please note that this could cause security issues!
         **/
        this.videoSrc = URL.createObjectURL(this.file);
        this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        URL.revokeObjectURL(this.videoSrc);
    }
}
NgxDropzoneVideoPreviewComponent.ɵfac = function NgxDropzoneVideoPreviewComponent_Factory(t) { return new (t || NgxDropzoneVideoPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
NgxDropzoneVideoPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzoneVideoPreviewComponent, selectors: [["ngx-dropzone-video-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: NgxDropzonePreviewComponent,
                useExisting: NgxDropzoneVideoPreviewComponent
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [["controls", "", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["controls", "", 3, "click"], [3, "src"], [3, "click"]], template: function NgxDropzoneVideoPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxDropzoneVideoPreviewComponent_video_0_Template, 2, 1, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sanitizedVideoSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxDropzoneRemoveBadgeComponent], styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   video[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   video[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{max-height:100%;border-radius:5px}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"] });
/** @nocollapse */
NgxDropzoneVideoPreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneVideoPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-video-preview',
                template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                styles: [`:host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus video,:host():hover video{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() video{max-height:100%;border-radius:5px}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}`],
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneVideoPreviewComponent
                    }
                ]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneModule {
}
NgxDropzoneModule.ɵfac = function NgxDropzoneModule_Factory(t) { return new (t || NgxDropzoneModule)(); };
NgxDropzoneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxDropzoneModule });
NgxDropzoneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxDropzoneModule, { declarations: function () { return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                declarations: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ],
                exports: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmpzIiwic291cmNlcyI6WyJuZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1sYWJlbC5kaXJlY3RpdmUudHMiLCJuZ3gtZHJvcHpvbmUvbGliL2hlbHBlcnMudHMiLCJuZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudC50cyIsIm5neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLnNlcnZpY2UudHMiLCJuZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS9uZ3gtZHJvcHpvbmUuY29tcG9uZW50LnRzIiwibmd4LWRyb3B6b25lL2xpYi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy5jb21wb25lbnQudHMiLCJuZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2Uvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZS5jb21wb25lbnQudHMiLCJuZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS12aWRlby1wcmV2aWV3L25neC1kcm9wem9uZS12aWRlby1wcmV2aWV3LmNvbXBvbmVudC50cyIsIm5neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFLYSx5QkFBeUI7QUFBRztxREFIeEMsU0FBUyxTQUFDLGtCQUNWLFFBQVEsRUFBRSxvQkFBb0I7RUFDOUI7Ozs7OzswQkFDSztBQUFDO0FBQUM7QUFBSTtBQUNUO0FBQXFIO0FBQUk7QUFBSTtBQUFpRTtBQUFxRztBQUFvQjtBQUFlO0FDRHpVLFNBQWdCLHFCQUFxQixDQUFDLEtBQVU7QUFBSSxJQUVuRCxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7QUFDaEQsQ0FBQztBQUNEO0FBQ0c7QUFDa0Q7QUFDOEM7QUFFcEY7QUFBZTtBQUE5QixTQUFnQixvQkFBb0IsQ0FBQyxLQUFVO0FBQUk7QUFFMkM7QUFDRjtBQUUzRixJQUFBLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLG9CQUFDLEtBQUssR0FBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztBQUMzRixDQUFDO0FBQ0Q7QUFBQztBQUFJO0FBQWtDO0FBQXFIO0FBQUk7QUFBc0I7QUFBbUIsSUNoQnhNLFlBQWE7QUFDZCxJQUFDLFVBQVc7QUFDWDtBQUVBO0FBQytCO0FBUWhDLE1BQWEsMkJBQTJCO0FBQ3hDO0FBQ087QUFDYztBQUFRLElBRDVCLFlBQ1csU0FBdUI7QUFDaEMsUUFEUyxjQUFTLEdBQVQsU0FBUyxDQUFjO0FBQ25DLFFBYVcsZUFBVSxHQUFHLEtBQUssQ0FBQztBQUM5QjtBQUNXO0FBQ0c7QUFBWSxRQUFOLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0FBQ3ZEO0FBQ1c7QUFFUjtBQUFZLFFBK0JXLGFBQVEsR0FBRyxDQUFDLENBQUM7QUFDdkMsS0FwRE07QUFDTjtBQUNPO0FBQ1U7QUFFSjtBQUFRLElBQ3BCLElBQ0ksU0FBUztBQUFLLFFBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUN6QixLQUFFO0FBQ0Y7QUFBUTtBQUF3QjtBQUNkO0FBQVEsSUFEekIsSUFBSSxTQUFTLENBQUMsS0FBYztBQUM3QixRQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakQsS0FBRTtBQUNGO0FBQVE7QUFFUjtBQUFtQjtBQUFRLElBSTFCLFFBQVEsQ0FBQyxLQUFvQjtBQUM5QixRQUFFLFFBQVEsS0FBSyxDQUFDLE9BQU87QUFDdkIsWUFBRyxLQUFLLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDM0IsWUFBRyxLQUFLLFFBQVEsQ0FBQyxNQUFNO0FBQ3ZCLGdCQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQixnQkFBSSxNQUFNO0FBQ1YsWUFBRztBQUNILGdCQUFJLE1BQU07QUFDVixTQUFHO0FBQ0gsS0FBRTtBQUNGO0FBQ087QUFDRDtBQUNKO0FBQVEsSUFEVCxJQUNJLFNBQVM7QUFBSztBQUNMLGNBQU4sTUFBTSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsUUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekQsS0FBRTtBQUNGO0FBQ087QUFBbUQ7QUFDbkM7QUFFdEI7QUFBUSxJQUNSLE9BQU8sQ0FBQyxLQUFLO0FBQ2QsUUFBRSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDMUIsUUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsS0FBRTtBQUNGO0FBQ087QUFDRDtBQUNPO0FBQVEsSUFEcEIsTUFBTTtBQUNQLFFBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3ZCLFlBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLFNBQUc7QUFDSCxLQUFFO0FBQ0Y7QUFDTztBQUFrQjtBQUFtQjtBQUFRLElBQW5DLFFBQVE7QUFBSztBQUNDLFlBQTdCLE9BQU8sSUFBSSxPQUFPO0FBQU07QUFBa0M7QUFDakM7QUFFVjtBQUNWLFlBSm9DLENBQUMsT0FBTyxFQUFFLE1BQU07QUFDM0Q7QUFBaUMsc0JBQXhCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtBQUNsQyxnQkFDRyxNQUFNLENBQUMsTUFBTTtBQUFRO0FBQ007QUFHdEI7QUFDUCxnQkFMa0IsQ0FBQztBQUNwQixvQkFBSSxPQUFPLENBQUMsb0JBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBZ0IsTUFBTSxDQUFDLENBQUM7QUFDN0MsaUJBQUksQ0FBQSxDQUFDO0FBQ0wsZ0JBQ0csTUFBTSxDQUFDLE9BQU87QUFBUTtBQUNLO0FBQStCO0FBQy9DLGdCQUZNLENBQUM7QUFDckIsb0JBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2xFLG9CQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNkLGlCQUFJLENBQUEsQ0FBQztBQUNMLGdCQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ25CLG9CQUFJLE9BQU8sTUFBTSxDQUFDLHlFQUF5RSxDQUFDLENBQUM7QUFDN0YsaUJBQUk7QUFDSixnQkFDRyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxhQUFHLEVBQUMsQ0FBQztBQUNMLFNBQUU7QUFFRixLQUZFO0FBQ0Y7dURBbkdDLFNBQVMsU0FBQyxrQkFDVixRQUFRLEVBQUUsc0JBQXNCLGtCQUNoQyxRQUFRLEVBQUU7c0lBSVQsa0JBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7O3NFQUFzWixDQUFDLGNBQ2hhOzs7Ozs7OzJuQkFDSztBQUFDO0FBQW1CO0FBR0wsWUFuQkQsWUFBWTtBQUFHO0FBQUc7QUFFdkIsbUJBcUJiLEtBQUs7QUFBSyx3QkFHVixLQUFLO0FBQ0wsc0JBU0EsTUFBTTtBQUFLLHVCQUVYLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDN0Isd0JBWUgsV0FBVyxTQUFDLE9BQU87QUFDaEIsdUJBbUJILFdBQVcsU0FBQyxVQUFVO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBQztBQUFJO0FBRVA7QUFNRDtBQ2pGOUI7QUFBSTtBQUVpQjtBQUUyQjtBQUdqQjtBQUNMO0FBa0IxQixNQUFhLGtCQUFrQjtBQUMvQjtBQUNPO0FBQXdCO0FBQXlCO0FBQThCO0FBRWxGO0FBQW1CO0FBQVEsSUFGOUIsYUFBYSxDQUFDLEtBQWUsRUFBRSxNQUFjLEVBQUUsV0FBbUIsRUFBRSxRQUFpQjtBQUFJO0FBRXBGLGNBQUUsVUFBVSxHQUFXLEVBQUU7QUFDL0I7QUFBeUIsY0FBakIsYUFBYSxHQUFtQixFQUFFO0FBQzFDLFFBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekM7QUFBNkIsa0JBQXBCLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM3QixZQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRTtBQUN2QyxnQkFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakQsZ0JBQUksU0FBUztBQUNiLGFBQUk7QUFDSixZQUNHLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxFQUFFO0FBQy9DLGdCQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqRCxnQkFBSSxTQUFTO0FBQ2IsYUFBSTtBQUNKLFlBQ0csSUFBSSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUM1QyxnQkFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDeEQsZ0JBQUksU0FBUztBQUNiLGFBQUk7QUFDSixZQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsU0FBRztBQUNIO0FBQ3dCLGNBQWhCLE1BQU0sR0FBcUI7QUFDbkMsWUFBRyxVQUFVO0FBQ2IsWUFBRyxhQUFhO0FBQ2hCLFNBQUc7QUFDSCxRQUNFLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLEtBQUU7QUFDRjtBQUNPO0FBQWdCO0FBQXVCO0FBRW5DO0FBQ0w7QUFBUSxJQUhMLFVBQVUsQ0FBQyxJQUFVLEVBQUUsTUFBYztBQUFJLFFBRWhELElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtBQUN0QixZQUFHLE9BQU8sSUFBSSxDQUFDO0FBQ2YsU0FBRztBQUNIO0FBQ3dCLGNBQWhCLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7QUFBTTtBQUF5QjtBQUN6RDtBQUFZLFFBRGUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBQztBQUM5RTtBQUF5QixjQUFqQixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDMUM7QUFBeUIsY0FBakIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzFDO0FBQ3dCLGNBQWhCLGVBQWUsR0FBRyxlQUFlLENBQUMsSUFBSTtBQUFNO0FBRS9CO0FBQXVCO0FBQ3JDLFFBSHdDLGNBQWM7QUFDN0Q7QUFFUSxZQUFMLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN0QyxnQkFBSSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRSxhQUFJO0FBQ0o7QUFFUSxZQUFMLElBQUksY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN2QyxnQkFBSSxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0MsYUFBSTtBQUNKO0FBRVEsWUFBTCxPQUFPLGNBQWMsSUFBSSxRQUFRLENBQUM7QUFDckMsU0FBRyxFQUFDO0FBQ0osUUFDRSxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUM7QUFDM0IsS0FBRTtBQUNGO0FBQ087QUFBZ0I7QUFBZ0M7QUFBdUI7QUFFL0Q7QUFBbUI7QUFBUSxJQUZqQyxVQUFVLENBQUMsYUFBNkIsRUFBRSxJQUFVLEVBQUUsTUFBb0I7QUFDbkY7QUFDd0IsY0FBaEIsWUFBWSxzQkFBRyxJQUFJLEVBQWdCO0FBQzNDLFFBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDL0IsUUFDRSxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25DLEtBQUU7QUFDRjs4Q0F6RUMsVUFBVTs7OzswQkFDUjtBQUFDO0FBQUM7QUFBSTtBQUVEO0FBRVE7QUM5QmhCLE1BdUJhLG9CQUFvQjtBQUNqQztBQUNPO0FBQ1c7QUFBUSxJQUR4QixZQUNrQixPQUEyQjtBQUM1QyxRQURpQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtBQUMvQztBQUVHO0FBQ0Q7QUFBWSxRQVdPLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztBQUN6RTtBQUNXO0FBQ0U7QUFDYixRQURXLFdBQU0sR0FBRyxHQUFHLENBQUM7QUFDeEIsUUFjVSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBU1UsY0FBUyxHQUFHLElBQUksQ0FBQztBQUMzQixRQVNVLGlCQUFZLEdBQVcsU0FBUyxDQUFDO0FBQzNDLFFBVVUsZ0JBQVcsR0FBWSxLQUFLLENBQUM7QUFDdkMsUUFVVSxrQkFBYSxHQUFHLEtBQUssQ0FBQztBQUNoQyxRQVFFLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDckIsS0FwRk87QUFDUDtBQUNPO0FBQW1CO0FBQVEsSUFJaEMsSUFBSSxZQUFZO0FBQUssUUFDbkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztBQUMxQyxLQUFHO0FBQ0g7QUFDTztBQUF3RDtBQUM3QztBQUFRLElBU3hCLElBRUksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLEtBQUc7QUFDSDtBQUFRO0FBQXdCO0FBQ2Q7QUFBUSxJQUR4QixJQUFJLFFBQVEsQ0FBQyxLQUFjO0FBQzdCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRCxRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUN6QixZQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlCLFNBQUs7QUFDTCxLQUFHO0FBQ0g7QUFBUTtBQUVnQjtBQUFtQjtBQUN4QyxJQUFELElBQ0ksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLEtBQUc7QUFDSDtBQUFRO0FBQXdCO0FBQ2Q7QUFBUSxJQUR4QixJQUFJLFFBQVEsQ0FBQyxLQUFjO0FBQzdCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRCxLQUFHO0FBQ0g7QUFBUTtBQUV1QjtBQUFtQjtBQUM5QyxJQUFGLElBQ0ksV0FBVztBQUFLLFFBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztBQUM3QixLQUFHO0FBQ0g7QUFBUTtBQUF3QjtBQUNoQjtBQUFRLElBRHRCLElBQUksV0FBVyxDQUFDLEtBQWE7QUFDL0IsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELEtBQUc7QUFDSDtBQUFRO0FBRWE7QUFBbUI7QUFBUSxJQUM5QyxJQUVJLFVBQVU7QUFBSyxRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDNUIsS0FBRztBQUNIO0FBQVE7QUFBd0I7QUFDaEI7QUFBUSxJQUR0QixJQUFJLFVBQVUsQ0FBQyxLQUFjO0FBQy9CLFFBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxLQUFHO0FBQ0g7QUFBUTtBQUVEO0FBQW1CO0FBQVEsSUFDaEMsSUFFSSxZQUFZO0FBQUssUUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQzlCLEtBQUc7QUFDSDtBQUFRO0FBQXdCO0FBQ2xCO0FBQVEsSUFEcEIsSUFBSSxZQUFZLENBQUMsS0FBYztBQUNqQyxRQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEQsS0FBRztBQUNIO0FBQVE7QUFFdUI7QUFBbUI7QUFBUSxJQVd4RCxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtBQUM1QixZQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQzlCLFNBQUs7QUFBQyxLQUNIO0FBQ0g7QUFDTztBQUF3QjtBQUNyQjtBQUFRLElBQWhCLFdBQVcsQ0FBQyxLQUFLO0FBQ25CLFFBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsUUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUMzQixLQUFHO0FBQ0g7QUFDTztBQUFtQjtBQUNyQixJQUFILFlBQVk7QUFDZCxRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzVCLEtBQUc7QUFDSDtBQUNPO0FBQXdCO0FBQ2pCO0FBQ1gsSUFERCxPQUFPLENBQUMsS0FBSztBQUNmLFFBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsUUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRCxLQUFHO0FBQ0g7QUFDSztBQUNKO0FBQVEsSUFEUCxnQkFBZ0I7QUFDbEIsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN4QixZQUFNLG9CQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFzQixLQUFLLEVBQUUsQ0FBQztBQUNsRSxTQUFLO0FBQ0wsS0FBRztBQUNIO0FBQ087QUFDSjtBQUFtQjtBQUFRLElBRDVCLGdCQUFnQixDQUFDLEtBQUs7QUFDeEI7QUFBeUIsY0FBZixLQUFLLEdBQWEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO0FBQzlDLFFBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQjtBQUVHLFFBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUM3QztBQUVHLFFBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixLQUFHO0FBQ0g7QUFDTztBQUFnQjtBQUNwQjtBQUFtQjtBQUFRLElBRHBCLGNBQWMsQ0FBQyxLQUFlO0FBQ3hDO0FBQXlCLGNBQWYsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNsRyxRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3JCLFlBQU0sVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO0FBQ25DLFlBQU0sYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhO0FBQ3pDLFlBQU0sTUFBTSxFQUFFLElBQUk7QUFDbEIsU0FBSyxDQUFDLENBQUM7QUFDUCxLQUFHO0FBQ0g7QUFDTztBQUFnQjtBQUNyQjtBQUFtQjtBQUNwQixJQUZTLGNBQWMsQ0FBQyxLQUFnQjtBQUN6QyxRQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMzQixRQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM1QixLQUFHO0FBQ0g7Z0RBdEtDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsOEJBQThCLGtCQUN4QyxRQUFRLEVBQUU7Ozs7OzJEQU1YLGtCQUNDLE1BQU0sRUFBRSxDQUFDOzs7Ozs7O3VWQUFvckIsQ0FBQyxrQkFDOXJCLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLGNBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7OzQwQkFDSztBQUFDO0FBQW1CO0FBR04sWUF6Qlgsa0JBQWtCLHVCQXlCdEIsSUFBSTtBQUFNO0FBQUc7QUFHakIsK0JBQ0UsZUFBZSxTQUFDLDJCQUEyQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtBQUNoRSx5QkFPRixTQUFTLFNBQUMsV0FBVztBQUFPLHFCQUc1QixNQUFNO0FBQUsscUJBR1gsS0FBSztBQUFLLHVCQUdWLEtBQUssWUFDTCxXQUFXLFNBQUMsdUJBQXVCO0FBQ2pDLHVCQWFGLEtBQUs7QUFDTiwwQkFTQyxLQUFLO0FBQ04seUJBU0MsS0FBSyxZQUNMLFdBQVcsU0FBQyxrQkFBa0I7QUFDNUIsMkJBU0YsS0FBSyxZQUNMLFdBQVcsU0FBQyxtQkFBbUI7QUFDN0IsaUJBU0YsS0FBSztBQUFLLHdCQUNWLEtBQUssU0FBQyxZQUFZO0FBQU8sNkJBQ3pCLEtBQUssU0FBQyxpQkFBaUI7QUFBTyw4QkFDOUIsS0FBSyxTQUFDLGtCQUFrQjtBQUFPLHlCQUUvQixXQUFXLFNBQUMsc0JBQXNCO0FBQ2hDLHVCQUdGLFlBQVksU0FBQyxPQUFPO0FBQ2xCLDBCQU1GLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDakMsMkJBU0YsWUFBWSxTQUFDLFdBQVc7QUFDdEIsc0JBSUYsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQUM7QUFBSTtBQUVWO0FBS21DO0FDL0lyQyxNQW9CYSxnQ0FBaUMsU0FBUSwyQkFBMkI7QUFBRztBQUFRO0FBRzFGO0FBQVEsSUFEUixZQUNFLFNBQXVCO0FBQ3hCLFFBQ0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JCO0FBRU87QUFDRTtBQUFZLFFBQWxCLHNCQUFpQixHQUFHLHc5Q0FBdzlDLENBQUM7QUFDaC9DLFFBQUUsYUFBUSxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFBQyxLQUo5RTtBQUNIO0FBQ087QUFBbUI7QUFDeEIsSUFHQSxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ25CLGFBQU8sSUFBSTtBQUFNO0FBQTBCO0FBQ25DO0FBQVksUUFEUixHQUFHLElBQUksVUFBVTtBQUFNO0FBQ25DO0FBQVksUUFEa0IsTUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBQyxFQUFDO0FBQ3pELGFBQU8sS0FBSztBQUFNO0FBQ2Y7QUFFaUI7QUFBWSxRQUhuQixHQUFHLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0FBQ3hDLEtBQUc7QUFDSDs0REFqQ0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSw0QkFBNEIsa0JBQ3RDLFFBQVEsRUFBRTttS0FLVixrQkFDQSxNQUFNLEVBQUUsQ0FBQzs7Ozs7O2dCQUFnWixDQUFDLGtCQUMxWjtPQUFTLEVBQUUsc0JBQ1Q7a0JBQ0UsT0FBTyxFQUFFO3NCQUEyQiwwQkFDcEMsV0FBVyxFQUFFLGdDQUFnQyxzQkFDOUMsa0JBQ0Y7UUFDRjs7Ozs2ckJBQ0s7QUFBQztBQUFtQjtBQUEwRCxZQWxCM0UsWUFBWTtBQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZFQUFFO0FBQUM7QUFBQztBQUFJO0FBQWtDO0FBTW5EO0FDUmYsTUFZYSwrQkFBK0I7QUFBRzsyREFWOUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSwyQkFBMkI7Q0FDckMsUUFBUSxFQUFFLG9IQUtULGtCQUNELE1BQU0sRUFBRSxDQUFDOzs7bUJBQTBTLENBQUMsY0FDclQ7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0s7QUFBQztBQUFDO0FBQUk7QUFBa0M7QUFDb0U7QUNibEgsTUFzQmEsZ0NBQWlDLFNBQVEsMkJBQTJCO0FBQUc7QUFBUTtBQUV0RjtBQUFRLElBQVosWUFDRSxTQUF1QjtBQUN4QixRQUNDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQixLQUFHO0FBQ0g7QUFDTztBQUFtQjtBQUN4QixJQUlBLFFBQVE7QUFDVixRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3BCLFlBQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO0FBQy9GLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTDtBQUVHO0FBQ0k7QUFFTDtBQUFhLFFBQVgsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuRCxRQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsRixLQUFHO0FBQ0g7QUFDTztBQUNDO0FBQVEsSUFEZCxXQUFXO0FBQ2IsUUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QyxLQUFHO0FBQ0g7NERBaERDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsNEJBQTRCLGtCQUN0QyxRQUFRLEVBQUU7Ozs7ZUFPVixrQkFDQSxNQUFNLEVBQUUsQ0FBQzs7OztjQUEyWSxDQUFDLGtCQUNyWixTQUFTLEVBQUUsc0JBQ1QsMEJBQ0U7QUFBTyxFQUFFLDJCQUEyQjt1QkFDcEMsV0FBVyxFQUFFLGdDQUFnQyxzQkFDOUMsa0JBQ0YsY0FDRjs7Ozs7Z3FCQUNLO0FBQUM7QUFBbUI7QUFBMEQsWUFwQjNFLFlBQVk7QUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZFQUFFO0FBQUM7QUFBQztBQUFJO0FBQWtDO0FBS3BCO0FDUDlDLE1BOEJhLGlCQUFpQjtBQUFHOzZDQXJCaEMsUUFBUSxTQUFDLGtCQUNULE9BQU8sRUFBRTtJQUNSLFlBQVksa0JBQ1osa0JBQ0QsWUFBWSxFQUFFO1NBQ2Isb0JBQW9CLHNCQUNwQjthQUF5QjtVQUN6QjtzQkFBMkIsc0JBQzNCLGdDQUFnQyxzQkFDaEMsK0JBQStCLHNCQUMvQixnQ0FBZ0MsbUJBQ2hDLGtCQUNELE9BQU8sRUFBRSxzQkFDUixvQkFBb0Isc0JBQ3BCLHlCQUF5QixzQkFDekIsMkJBQTJCLHNCQUMzQixnQ0FBZ0Msc0JBQ2hDLCtCQUErQixzQkFDL0IsZ0NBQWdDLG1CQUNoQyxjQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0s7QUFBQztBQUFDO0FBQUk7QUFDRDtBQUFxSDtBQUFJO0FBQUM7QUFBSTtBQUFrQztBQUFxSDtBQUFJO0FBQUM7O0FSL0JBLEFBS0EsQUFBQSxBQUhBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUNDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQ2ZBLEFBQUEsQUFDQSxBQUFBLEFBWUEsQUFBQSxBQUFBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQW1DQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBbkRBLEFBTUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQVlBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBbEdBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBSUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQWZBLEFBQUEsQUF1QkEsQUFBQSxBQUdBLEFBQUEsQUFVQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWFBLEFBQUEsQUFBQSxBQUFBLEFBb0JBLEFBQUEsQUFBQSxBQUFBLEFDekVBLEFBMEJBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXhFQSxBQUFBLEFDekJBLEFBdUJBLEFBQUEsQUFFQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBZUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBZUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFVQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBV0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFTQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBbkZBLEFBTUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQVlBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBSUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQWNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFyS0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFNQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBckJBLEFBQUEsQUF5QkEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBUUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQWNBLEFBQUEsQUFVQSxBQUFBLEFBVUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBVUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBVUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBVUEsQUFBQSxBQUFBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFDdklBLEFBb0JBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFKQSxBQU1BLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQWhDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUtBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBakJBLEFBQUEsQUNGQSxBQVlBLEFBQUEsQUFWQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUtBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUNYQSxBQXNCQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBT0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUEvQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFPQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQW5CQSxBQUFBLEFDRkEsQUE4QkEsQUFBQSxBQXJCQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lLWxhYmVsJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZUxhYmVsRGlyZWN0aXZlIHsgfVxuIiwiXG4vKipcbiAqIENvZXJjZXMgYSBkYXRhLWJvdW5kIHZhbHVlICh0eXBpY2FsbHkgYSBzdHJpbmcpIHRvIGEgYm9vbGVhbi5cbiAqIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9ibG9iL21hc3Rlci9zcmMvY2RrL2NvZXJjaW9uL2Jvb2xlYW4tcHJvcGVydHkudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZTogYW55KTogYm9vbGVhblxue1xuXHRyZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGNvbnNpZGVyZWQgYSBudW1iZXIuXG4gKiBUYWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvYmxvYi9tYXN0ZXIvc3JjL2Nkay9jb2VyY2lvbi9udW1iZXItcHJvcGVydHkudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlOiBhbnkpOiBudW1iZXJcbntcblx0Ly8gcGFyc2VGbG9hdCh2YWx1ZSkgaGFuZGxlcyBtb3N0IG9mIHRoZSBjYXNlcyB3ZSdyZSBpbnRlcmVzdGVkIGluIChpdCB0cmVhdHMgbnVsbCwgZW1wdHkgc3RyaW5nLFxuXHQvLyBhbmQgb3RoZXIgbm9uLW51bWJlciB2YWx1ZXMgYXMgTmFOLCB3aGVyZSBOdW1iZXIganVzdCB1c2VzIDApIGJ1dCBpdCBjb25zaWRlcnMgdGhlIHN0cmluZ1xuXHQvLyAnMTIzaGVsbG8nIHRvIGJlIGEgdmFsaWQgbnVtYmVyLiBUaGVyZWZvcmUgd2UgYWxzbyBjaGVjayBpZiBOdW1iZXIodmFsdWUpIGlzIE5hTi5cblx0cmV0dXJuICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSBhcyBhbnkpKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSkpID8gTnVtYmVyKHZhbHVlKSA6IG51bGw7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBTYWZlU3R5bGUsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5lbnVtIEtFWV9DT0RFIHtcblx0QkFDS1NQQUNFID0gOCxcblx0REVMRVRFID0gNDZcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lLXByZXZpZXcnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kcm9wem9uZS1sYWJlbFwiPjwvbmctY29udGVudD5cblx0XHQ8bmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSAqbmdJZj1cInJlbW92YWJsZVwiIChjbGljayk9XCJfcmVtb3ZlKCRldmVudClcIj5cblx0XHQ8L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2U+XG5cdGAsXG5cdHN0eWxlczogW2A6aG9zdCgpe2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCwjZWRlZGVkLCNlZmVmZWYsI2YxZjFmMSwjZjRmNGY0LCNmNmY2ZjYpfTpob3N0KCk6Zm9jdXMsOmhvc3QoKTpob3ZlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AsI2UzZTNlMywjZWJlYWVhLCNlOGU3ZTcsI2ViZWFlYSwjZjRmNGY0KTtvdXRsaW5lOjB9Omhvc3QoKTpmb2N1cyBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLDpob3N0KCk6aG92ZXIgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjF9Omhvc3QoKSBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWBdXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG5cdCkgeyB9XG5cblx0LyoqIFRoZSBmaWxlIHRvIHByZXZpZXcuICovXG5cdEBJbnB1dCgpIGZpbGU6IEZpbGU7XG5cblx0LyoqIEFsbG93IHRoZSB1c2VyIHRvIHJlbW92ZSBmaWxlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlbW92YWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fcmVtb3ZhYmxlO1xuXHR9XG5cdHNldCByZW1vdmFibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9yZW1vdmFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXHR9XG5cdHByb3RlY3RlZCBfcmVtb3ZhYmxlID0gZmFsc2U7XG5cblx0LyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmVtb3ZlZC4gKi9cblx0QE91dHB1dCgpIHJlYWRvbmx5IHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGU+KCk7XG5cblx0QEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuXHRrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXHRcdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuXHRcdFx0Y2FzZSBLRVlfQ09ERS5CQUNLU1BBQ0U6XG5cdFx0XHRjYXNlIEtFWV9DT0RFLkRFTEVURTpcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvKiogV2UgdXNlIHRoZSBIb3N0QmluZGluZyB0byBwYXNzIHRoZXNlIGNvbW1vbiBzdHlsZXMgdG8gY2hpbGQgY29tcG9uZW50cy4gKi9cblx0QEhvc3RCaW5kaW5nKCdzdHlsZScpXG5cdGdldCBob3N0U3R5bGUoKTogU2FmZVN0eWxlIHtcblx0XHRjb25zdCBzdHlsZXMgPSBgXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0aGVpZ2h0OiAxNDBweDtcblx0XHRcdG1pbi1oZWlnaHQ6IDE0MHB4O1xuXHRcdFx0bWluLXdpZHRoOiAxODBweDtcblx0XHRcdG1heC13aWR0aDogMTgwcHg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRwYWRkaW5nOiAwIDIwcHg7XG5cdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0YDtcblxuXHRcdHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGVzKTtcblx0fVxuXG5cdC8qKiBNYWtlIHRoZSBwcmV2aWV3IGl0ZW0gZm9jdXNhYmxlIHVzaW5nIHRoZSB0YWIga2V5LiAqL1xuXHRASG9zdEJpbmRpbmcoJ3RhYmluZGV4JykgdGFiSW5kZXggPSAwO1xuXG5cdC8qKiBSZW1vdmUgbWV0aG9kIHRvIGJlIHVzZWQgZnJvbSB0aGUgdGVtcGxhdGUuICovXG5cdF9yZW1vdmUoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqIFJlbW92ZSB0aGUgcHJldmlldyBpdGVtICh1c2UgZnJvbSBjb21wb25lbnQgY29kZSkuICovXG5cdHJlbW92ZSgpIHtcblx0XHRpZiAodGhpcy5fcmVtb3ZhYmxlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZWQubmV4dCh0aGlzLmZpbGUpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBhc3luYyByZWFkRmlsZSgpOiBQcm9taXNlPHN0cmluZyB8IEFycmF5QnVmZmVyPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IEFycmF5QnVmZmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG5cdFx0XHRyZWFkZXIub25sb2FkID0gZSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKGUudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRyZWFkZXIub25lcnJvciA9IGUgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBGaWxlUmVhZGVyIGZhaWxlZCBvbiBmaWxlICR7dGhpcy5maWxlLm5hbWV9LmApO1xuXHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIXRoaXMuZmlsZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KCdObyBmaWxlIHRvIHJlYWQuIFBsZWFzZSBwcm92aWRlIGEgZmlsZSB1c2luZyB0aGUgW2ZpbGVdIElucHV0IHByb3BlcnR5LicpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGUpO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVNlbGVjdFJlc3VsdCB7XG5cblx0LyoqIFRoZSBhZGRlZCBmaWxlcywgZW1pdHRlZCBpbiB0aGUgZmlsZXNBZGRlZCBldmVudC4gKi9cblx0YWRkZWRGaWxlczogRmlsZVtdO1xuXG5cdC8qKiBUaGUgcmVqZWN0ZWQgZmlsZXMsIGVtaXR0ZWQgaW4gdGhlIGZpbGVzUmVqZWN0ZWQgZXZlbnQuICovXG5cdHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlamVjdGVkRmlsZSBleHRlbmRzIEZpbGUge1xuXG5cdC8qKiBUaGUgcmVhc29uIHRoZSBmaWxlIHdhcyByZWplY3RlZC4gKi9cblx0cmVhc29uPzogUmVqZWN0UmVhc29uO1xufVxuXG5leHBvcnQgdHlwZSBSZWplY3RSZWFzb24gPSAndHlwZScgfCAnc2l6ZScgfCAnbm9fbXVsdGlwbGUnO1xuXG4vKipcbiAqIFRoaXMgc2VydmljZSBjb250YWlucyB0aGUgZmlsdGVyaW5nIGxvZ2ljIHRvIGJlIGFwcGxpZWQgdG9cbiAqIGFueSBkcm9wcGVkIG9yIHNlbGVjdGVkIGZpbGUuIElmIGEgZmlsZSBtYXRjaGVzIGFsbCBjcml0ZXJpYVxuICogbGlrZSBtYXhpbXVtIHNpemUgb3IgYWNjZXB0IHR5cGUsIGl0IHdpbGwgYmUgZW1pdHRlZCBpbiB0aGVcbiAqIGFkZGVkRmlsZXMgYXJyYXksIG90aGVyd2lzZSBpbiB0aGUgcmVqZWN0ZWRGaWxlcyBhcnJheS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lU2VydmljZSB7XG5cblx0cGFyc2VGaWxlTGlzdChmaWxlczogRmlsZUxpc3QsIGFjY2VwdDogc3RyaW5nLCBtYXhGaWxlU2l6ZTogbnVtYmVyLCBtdWx0aXBsZTogYm9vbGVhbik6IEZpbGVTZWxlY3RSZXN1bHQge1xuXG5cdFx0Y29uc3QgYWRkZWRGaWxlczogRmlsZVtdID0gW107XG5cdFx0Y29uc3QgcmVqZWN0ZWRGaWxlczogUmVqZWN0ZWRGaWxlW10gPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGZpbGUgPSBmaWxlcy5pdGVtKGkpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaXNBY2NlcHRlZChmaWxlLCBhY2NlcHQpKSB7XG5cdFx0XHRcdHRoaXMucmVqZWN0RmlsZShyZWplY3RlZEZpbGVzLCBmaWxlLCAndHlwZScpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG1heEZpbGVTaXplICYmIGZpbGUuc2l6ZSA+IG1heEZpbGVTaXplKSB7XG5cdFx0XHRcdHRoaXMucmVqZWN0RmlsZShyZWplY3RlZEZpbGVzLCBmaWxlLCAnc2l6ZScpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFtdWx0aXBsZSAmJiBhZGRlZEZpbGVzLmxlbmd0aCA+PSAxKSB7XG5cdFx0XHRcdHRoaXMucmVqZWN0RmlsZShyZWplY3RlZEZpbGVzLCBmaWxlLCAnbm9fbXVsdGlwbGUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGFkZGVkRmlsZXMucHVzaChmaWxlKTtcblx0XHR9XG5cblx0XHRjb25zdCByZXN1bHQ6IEZpbGVTZWxlY3RSZXN1bHQgPSB7XG5cdFx0XHRhZGRlZEZpbGVzLFxuXHRcdFx0cmVqZWN0ZWRGaWxlc1xuXHRcdH07XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cHJpdmF0ZSBpc0FjY2VwdGVkKGZpbGU6IEZpbGUsIGFjY2VwdDogc3RyaW5nKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoYWNjZXB0ID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFjY2VwdEZpbGV0eXBlcyA9IGFjY2VwdC5zcGxpdCgnLCcpLm1hcChpdCA9PiBpdC50b0xvd2VyQ2FzZSgpLnRyaW0oKSk7XG5cdFx0Y29uc3QgZmlsZXR5cGUgPSBmaWxlLnR5cGUudG9Mb3dlckNhc2UoKTtcblx0XHRjb25zdCBmaWxlbmFtZSA9IGZpbGUubmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Y29uc3QgbWF0Y2hlZEZpbGVUeXBlID0gYWNjZXB0RmlsZXR5cGVzLmZpbmQoYWNjZXB0RmlsZXR5cGUgPT4ge1xuXG5cdFx0XHQvLyBjaGVjayBmb3Igd2lsZGNhcmQgbWltZXR5cGUgKGUuZy4gaW1hZ2UvKilcblx0XHRcdGlmIChhY2NlcHRGaWxldHlwZS5lbmRzV2l0aCgnLyonKSkge1xuXHRcdFx0XHRyZXR1cm4gZmlsZXR5cGUuc3BsaXQoJy8nKVswXSA9PT0gYWNjZXB0RmlsZXR5cGUuc3BsaXQoJy8nKVswXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2hlY2sgZm9yIGZpbGUgZXh0ZW5zaW9uIChlLmcuIC5jc3YpXG5cdFx0XHRpZiAoYWNjZXB0RmlsZXR5cGUuc3RhcnRzV2l0aChcIi5cIikpIHtcblx0XHRcdFx0cmV0dXJuIGZpbGVuYW1lLmVuZHNXaXRoKGFjY2VwdEZpbGV0eXBlKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2hlY2sgZm9yIGV4YWN0IG1pbWV0eXBlIG1hdGNoIChlLmcuIGltYWdlL2pwZWcpXG5cdFx0XHRyZXR1cm4gYWNjZXB0RmlsZXR5cGUgPT0gZmlsZXR5cGU7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gISFtYXRjaGVkRmlsZVR5cGU7XG5cdH1cblxuXHRwcml2YXRlIHJlamVjdEZpbGUocmVqZWN0ZWRGaWxlczogUmVqZWN0ZWRGaWxlW10sIGZpbGU6IEZpbGUsIHJlYXNvbjogUmVqZWN0UmVhc29uKSB7XG5cblx0XHRjb25zdCByZWplY3RlZEZpbGUgPSBmaWxlIGFzIFJlamVjdGVkRmlsZTtcblx0XHRyZWplY3RlZEZpbGUucmVhc29uID0gcmVhc29uO1xuXG5cdFx0cmVqZWN0ZWRGaWxlcy5wdXNoKHJlamVjdGVkRmlsZSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIFZpZXdDaGlsZCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFNlbGYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neERyb3B6b25lU2VydmljZSwgRmlsZVNlbGVjdFJlc3VsdCB9IGZyb20gJy4uL25neC1kcm9wem9uZS5zZXJ2aWNlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4uL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4RHJvcHpvbmVDaGFuZ2VFdmVudCB7XG4gIHNvdXJjZTogTmd4RHJvcHpvbmVDb21wb25lbnQ7XG4gIGFkZGVkRmlsZXM6IEZpbGVbXTtcbiAgcmVqZWN0ZWRGaWxlczogRmlsZVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUsIFtuZ3gtZHJvcHpvbmVdJyxcbiAgdGVtcGxhdGU6IGA8aW5wdXQgI2ZpbGVJbnB1dCB0eXBlPVwiZmlsZVwiIFtpZF09XCJpZFwiIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiIFthY2NlcHRdPVwiYWNjZXB0XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgKGNoYW5nZSk9XCJfb25GaWxlc1NlbGVjdGVkKCRldmVudClcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieVwiXG4gIFthdHRyLmFyaWEtZGVzY3JpYmVkYnldPVwiYXJpYURlc2NyaWJlZEJ5XCI+XG48bmctY29udGVudCBzZWxlY3Q9XCJuZ3gtZHJvcHpvbmUtbGFiZWxcIiAqbmdJZj1cIiFfaGFzUHJldmlld3NcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJuZ3gtZHJvcHpvbmUtcHJldmlld1wiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2A6aG9zdCgpe2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjE4MHB4O2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6cG9pbnRlcjtjb2xvcjojNzE3Mzg2O2JvcmRlcjoycHggZGFzaGVkICM3MTczODY7Ym9yZGVyLXJhZGl1czo1cHg7Zm9udC1zaXplOjE2cHg7b3ZlcmZsb3cteDphdXRvfTpob3N0KCkubmd4LWR6LWhvdmVyZWR7Ym9yZGVyLXN0eWxlOnNvbGlkfTpob3N0KCkubmd4LWR6LWRpc2FibGVke29wYWNpdHk6LjU7Y3Vyc29yOm5vLWRyb3A7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCgpLmV4cGFuZGFibGV7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDp1bnNldDttaW4taGVpZ2h0OjE4MHB4O2ZsZXgtd3JhcDp3cmFwfTpob3N0KCkudW5jbGlja2FibGV7Y3Vyc29yOmRlZmF1bHR9Omhvc3QoKSA6Om5nLWRlZXAgbmd4LWRyb3B6b25lLWxhYmVse3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MTA7bWFyZ2luOjEwcHggYXV0b306aG9zdCgpIGlucHV0e3dpZHRoOi4xcHg7aGVpZ2h0Oi4xcHg7b3BhY2l0eTowO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Oi0xfTpob3N0KCkgaW5wdXQ6Zm9jdXMrOjpuZy1kZWVwIG5neC1kcm9wem9uZS1sYWJlbHtvdXRsaW5lOiMwMDAgZG90dGVkIDFweDtvdXRsaW5lOi13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDVweH1gXSxcbiAgcHJvdmlkZXJzOiBbTmd4RHJvcHpvbmVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNlbGYoKSBwcml2YXRlIHNlcnZpY2U6IE5neERyb3B6b25lU2VydmljZVxuICApIHsgfVxuXG4gIC8qKiBBIGxpc3Qgb2YgdGhlIGNvbnRlbnQtcHJvamVjdGVkIHByZXZpZXcgY2hpbGRyZW4uICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIF9wcmV2aWV3Q2hpbGRyZW46IFF1ZXJ5TGlzdDxOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQ+O1xuXG4gIGdldCBfaGFzUHJldmlld3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fcHJldmlld0NoaWxkcmVuLmxlbmd0aDtcbiAgfVxuXG4gIC8qKiBBIHRlbXBsYXRlIHJlZmVyZW5jZSB0byB0aGUgbmF0aXZlIGZpbGUgaW5wdXQgZWxlbWVudC4gKi9cbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JykgX2ZpbGVJbnB1dDogRWxlbWVudFJlZjtcblxuICAvKiogRW1pdHRlZCB3aGVuIGFueSBmaWxlcyB3ZXJlIGFkZGVkIG9yIHJlamVjdGVkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ3hEcm9wem9uZUNoYW5nZUV2ZW50PigpO1xuXG4gIC8qKiBTZXQgdGhlIGFjY2VwdGVkIGZpbGUgdHlwZXMuIERlZmF1bHRzIHRvICcqJy4gKi9cbiAgQElucHV0KCkgYWNjZXB0ID0gJyonO1xuXG4gIC8qKiBEaXNhYmxlIGFueSB1c2VyIGludGVyYWN0aW9uIHdpdGggdGhlIGNvbXBvbmVudC4gKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZ3gtZHotZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblxuICAgIGlmICh0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKiBBbGxvdyB0aGUgc2VsZWN0aW9uIG9mIG11bHRpcGxlIGZpbGVzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9tdWx0aXBsZSA9IHRydWU7XG5cbiAgLyoqIFNldCB0aGUgbWF4aW11bSBzaXplIGEgc2luZ2xlIGZpbGUgbWF5IGhhdmUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtYXhGaWxlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXhGaWxlU2l6ZTtcbiAgfVxuICBzZXQgbWF4RmlsZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heEZpbGVTaXplID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX21heEZpbGVTaXplOiBudW1iZXIgPSB1bmRlZmluZWQ7XG5cbiAgLyoqIEFsbG93IHRoZSBkcm9wem9uZSBjb250YWluZXIgdG8gZXhwYW5kIHZlcnRpY2FsbHkuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZXhwYW5kYWJsZScpXG4gIGdldCBleHBhbmRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRhYmxlO1xuICB9XG4gIHNldCBleHBhbmRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXhwYW5kYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZXhwYW5kYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBPcGVuIHRoZSBmaWxlIHNlbGVjdG9yIG9uIGNsaWNrLiAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnVuY2xpY2thYmxlJylcbiAgZ2V0IGRpc2FibGVDbGljaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZUNsaWNrO1xuICB9XG4gIHNldCBkaXNhYmxlQ2xpY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlQ2xpY2sgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVDbGljayA9IGZhbHNlO1xuXG4gIC8qKiBFeHBvc2UgdGhlIGlkLCBhcmlhLWxhYmVsLCBhcmlhLWxhYmVsbGVkYnkgYW5kIGFyaWEtZGVzY3JpYmVkYnkgb2YgdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGZvciBwcm9wZXIgYWNjZXNzaWJpbGl0eS4gKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCdhcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1sYWJlbGxlZGJ5JykgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcbiAgQElucHV0KCdhcmlhLWRlc2NyaWJlZGJ5JykgYXJpYURlc2NyaWJlZEJ5OiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZ3gtZHotaG92ZXJlZCcpXG4gIF9pc0hvdmVyZWQgPSBmYWxzZTtcblxuICAvKiogU2hvdyB0aGUgbmF0aXZlIE9TIGZpbGUgZXhwbG9yZXIgdG8gc2VsZWN0IGZpbGVzLiAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9vbkNsaWNrKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlQ2xpY2spIHtcbiAgICAgIHRoaXMuc2hvd0ZpbGVTZWxlY3RvcigpO1xuICAgIH0gXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIF9vbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJylcbiAgX29uRHJhZ0xlYXZlKCkge1xuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIF9vbkRyb3AoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxlRmlsZURyb3AoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgfVxuICBcbiAgc2hvd0ZpbGVTZWxlY3RvcigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICh0aGlzLl9maWxlSW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkZpbGVzU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCBmaWxlczogRmlsZUxpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgdGhpcy5oYW5kbGVGaWxlRHJvcChmaWxlcyk7XG5cbiAgICAvLyBSZXNldCB0aGUgbmF0aXZlIGZpbGUgaW5wdXQgZWxlbWVudCB0byBhbGxvdyBzZWxlY3RpbmcgdGhlIHNhbWUgZmlsZSBhZ2FpblxuICAgIHRoaXMuX2ZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG5cbiAgICAvLyBmaXgoIzMyKTogUHJldmVudCB0aGUgZGVmYXVsdCBldmVudCBiZWhhdmlvdXIgd2hpY2ggY2F1c2VkIHRoZSBjaGFuZ2UgZXZlbnQgdG8gZW1pdCB0d2ljZS5cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRmlsZURyb3AoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLnBhcnNlRmlsZUxpc3QoZmlsZXMsIHRoaXMuYWNjZXB0LCB0aGlzLm1heEZpbGVTaXplLCB0aGlzLm11bHRpcGxlKTtcblxuICAgIHRoaXMuY2hhbmdlLm5leHQoe1xuICAgICAgYWRkZWRGaWxlczogcmVzdWx0LmFkZGVkRmlsZXMsXG4gICAgICByZWplY3RlZEZpbGVzOiByZXN1bHQucmVqZWN0ZWRGaWxlcyxcbiAgICAgIHNvdXJjZTogdGhpc1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmV2ZW50RGVmYXVsdChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbWcgW3NyY109XCJpbWFnZVNyY1wiIC8+XG5cdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLWxhYmVsXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlICpuZ0lmPVwicmVtb3ZhYmxlXCIgKGNsaWNrKT1cIl9yZW1vdmUoJGV2ZW50KVwiPlxuICAgIDwvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZT5cblx0YCxcbiAgc3R5bGVzOiBbYDpob3N0KCl7bWluLXdpZHRoOnVuc2V0IWltcG9ydGFudDttYXgtd2lkdGg6dW5zZXQhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnR9Omhvc3QoKTpmb2N1cyBpbWcsOmhvc3QoKTpob3ZlciBpbWd7b3BhY2l0eTouN306aG9zdCgpOmZvY3VzIG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UsOmhvc3QoKTpob3ZlciBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MX06aG9zdCgpIG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2V7b3BhY2l0eTowfTpob3N0KCkgaW1ne21heC1oZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjVweDtvcGFjaXR5Oi44fTpob3N0KCkgOjpuZy1kZWVwIG5neC1kcm9wem9uZS1sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmR9YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBOZ3hEcm9wem9uZUltYWdlUHJldmlld0NvbXBvbmVudFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZUltYWdlUHJldmlld0NvbXBvbmVudCBleHRlbmRzIE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7XG4gICAgc3VwZXIoc2FuaXRpemVyKTtcbiAgfVxuXG4gIC8qKiBUaGUgaW1hZ2UgZGF0YSBzb3VyY2UuICovXG4gICBkZWZ1YWx0SW1nTG9hZGluZyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUJ6ZEhsc1pUMGliV0Z5WjJsdU9pQmhkWFJ2T3lCaVlXTnJaM0p2ZFc1a09pQnlaMklvTWpReExDQXlORElzSURJME15a2dibTl1WlNCeVpYQmxZWFFnYzJOeWIyeHNJREFsSURBbE95QmthWE53YkdGNU9pQmliRzlqYXpzZ2MyaGhjR1V0Y21WdVpHVnlhVzVuT2lCaGRYUnZPeUlnZDJsa2RHZzlJakl5TkhCNElpQm9aV2xuYUhROUlqSXlOSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNVEF3SURFd01DSWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcFpGbE5hV1FpUGdvOFkybHlZMnhsSUdONFBTSTFNQ0lnWTNrOUlqVXdJaUJ5UFNJeE5DSWdjM1J5YjJ0bExYZHBaSFJvUFNJeklpQnpkSEp2YTJVOUlpTTROV0V5WWpZaUlITjBjbTlyWlMxa1lYTm9ZWEp5WVhrOUlqSXhMams1TVRFME9EVTNOVEV5T0RVMU1pQXlNUzQ1T1RFeE5EZzFOelV4TWpnMU5USWlJR1pwYkd3OUltNXZibVVpSUhOMGNtOXJaUzFzYVc1bFkyRndQU0p5YjNWdVpDSStDaUFnUEdGdWFXMWhkR1ZVY21GdWMyWnZjbTBnWVhSMGNtbGlkWFJsVG1GdFpUMGlkSEpoYm5ObWIzSnRJaUIwZVhCbFBTSnliM1JoZEdVaUlHUjFjajBpTVM0eE5qSTNPVEEyT1RjMk56UTBNVGcwY3lJZ2NtVndaV0YwUTI5MWJuUTlJbWx1WkdWbWFXNXBkR1VpSUd0bGVWUnBiV1Z6UFNJd096RWlJSFpoYkhWbGN6MGlNQ0ExTUNBMU1Ec3pOakFnTlRBZ05UQWlQand2WVc1cGJXRjBaVlJ5WVc1elptOXliVDRLUEM5amFYSmpiR1UrQ2p4amFYSmpiR1VnWTNnOUlqVXdJaUJqZVQwaU5UQWlJSEk5SWpFd0lpQnpkSEp2YTJVdGQybGtkR2c5SWpNaUlITjBjbTlyWlQwaUkySmlZMlZrWkNJZ2MzUnliMnRsTFdSaGMyaGhjbkpoZVQwaU1UVXVOekEzT1RZek1qWTNPVFE0T1RZMklERTFMamN3TnprMk16STJOemswT0RrMk5pSWdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTlJakUxTGpjd056azJNekkyTnprME9EazJOaUlnWm1sc2JEMGlibTl1WlNJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJajRLSUNBOFlXNXBiV0YwWlZSeVlXNXpabTl5YlNCaGRIUnlhV0oxZEdWT1lXMWxQU0owY21GdWMyWnZjbTBpSUhSNWNHVTlJbkp2ZEdGMFpTSWdaSFZ5UFNJeExqRTJNamM1TURZNU56WTNORFF4T0RSeklpQnlaWEJsWVhSRGIzVnVkRDBpYVc1a1pXWnBibWwwWlNJZ2EyVjVWR2x0WlhNOUlqQTdNU0lnZG1Gc2RXVnpQU0l3SURVd0lEVXdPeTB6TmpBZ05UQWdOVEFpUGp3dllXNXBiV0YwWlZSeVlXNXpabTl5YlQ0S1BDOWphWEpqYkdVK0Nqd2hMUzBnVzJ4a2FXOWRJR2RsYm1WeVlYUmxaQ0JpZVNCb2RIUndjem92TDJ4dllXUnBibWN1YVc4dklDMHRQand2YzNablBnPT0nO1xuICBpbWFnZVNyYzogYW55ID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh0aGlzLmRlZnVhbHRJbWdMb2FkaW5nKTsgXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWFkRmlsZSgpXG4gICAgICAudGhlbihpbWcgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmltYWdlU3JjID0gaW1nKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc+XG4gICAgICA8bGluZSB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjEwXCIgeTI9XCIxMFwiIC8+XG4gICAgICA8bGluZSB4MT1cIjBcIiB5MT1cIjEwXCIgeDI9XCIxMFwiIHkyPVwiMFwiIC8+XG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW2A6aG9zdCgpe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtoZWlnaHQ6MjJweDt3aWR0aDoyMnB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHg7cmlnaHQ6NXB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6I2JiYjtjb2xvcjojMzMzO2N1cnNvcjpwb2ludGVyfTpob3N0KCk6aG92ZXJ7YmFja2dyb3VuZDojYWVhZWFlfTpob3N0KCk+c3Zne2hlaWdodDoxMHB4O3dpZHRoOjEwcHh9Omhvc3QoKT5zdmc+bGluZXtzdHJva2Utd2lkdGg6MnB4O3N0cm9rZTojZmZmfWBdXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lUmVtb3ZlQmFkZ2VDb21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wem9uZS12aWRlby1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dmlkZW8gKm5nSWY9XCJzYW5pdGl6ZWRWaWRlb1NyY1wiIGNvbnRyb2xzIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgIDxzb3VyY2UgW3NyY109XCJzYW5pdGl6ZWRWaWRlb1NyY1wiIC8+XG4gICAgPC92aWRlbz5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuZ3gtZHJvcHpvbmUtbGFiZWxcIj48L25nLWNvbnRlbnQ+XG4gICAgPG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UgKm5nSWY9XCJyZW1vdmFibGVcIiAoY2xpY2spPVwiX3JlbW92ZSgkZXZlbnQpXCI+XG4gICAgPC9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlPlxuXHRgLFxuICBzdHlsZXM6IFtgOmhvc3QoKXttaW4td2lkdGg6dW5zZXQhaW1wb3J0YW50O21heC13aWR0aDp1bnNldCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudH06aG9zdCgpOmZvY3VzIHZpZGVvLDpob3N0KCk6aG92ZXIgdmlkZW97b3BhY2l0eTouN306aG9zdCgpOmZvY3VzIG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UsOmhvc3QoKTpob3ZlciBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MX06aG9zdCgpIG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2V7b3BhY2l0eTowfTpob3N0KCkgdmlkZW97bWF4LWhlaWdodDoxMDAlO2JvcmRlci1yYWRpdXM6NXB4fTpob3N0KCkgOjpuZy1kZWVwIG5neC1kcm9wem9uZS1sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmR9YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBOZ3hEcm9wem9uZVZpZGVvUHJldmlld0NvbXBvbmVudFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVZpZGVvUHJldmlld0NvbXBvbmVudCBleHRlbmRzIE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHtcbiAgICBzdXBlcihzYW5pdGl6ZXIpO1xuICB9XG5cbiAgLyoqIFRoZSB2aWRlbyBkYXRhIHNvdXJjZS4gKi9cbiAgc2FuaXRpemVkVmlkZW9TcmM6IFNhZmVVcmw7XG5cbiAgcHJpdmF0ZSB2aWRlb1NyYzogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBmaWxlIHRvIHJlYWQuIFBsZWFzZSBwcm92aWRlIGEgZmlsZSB1c2luZyB0aGUgW2ZpbGVdIElucHV0IHByb3BlcnR5LicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHNhbml0aXplIHRoZSBVUkwgaGVyZSB0byBlbmFibGUgdGhlIHByZXZpZXcuXG4gICAgICogUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGNvdWxkIGNhdXNlIHNlY3VyaXR5IGlzc3VlcyFcbiAgICAgKiovXG4gICAgdGhpcy52aWRlb1NyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5maWxlKTtcbiAgICB0aGlzLnNhbml0aXplZFZpZGVvU3JjID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh0aGlzLnZpZGVvU3JjKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy52aWRlb1NyYyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWRyb3B6b25lLWxhYmVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lL25neC1kcm9wem9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3L25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlL25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neERyb3B6b25lVmlkZW9QcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtdmlkZW8tcHJldmlldy9uZ3gtZHJvcHpvbmUtdmlkZW8tcHJldmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdE5neERyb3B6b25lQ29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lTGFiZWxEaXJlY3RpdmUsXG5cdFx0Tmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lSW1hZ2VQcmV2aWV3Q29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lUmVtb3ZlQmFkZ2VDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnQsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHROZ3hEcm9wem9uZUNvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUxhYmVsRGlyZWN0aXZlLFxuXHRcdE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUltYWdlUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lVmlkZW9QcmV2aWV3Q29tcG9uZW50LFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lTW9kdWxlIHsgfVxuIl19

/***/ }),

/***/ "lAmc":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/modal/modal-public-profile.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "losK":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/payment-cancel/payment-cancel.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>payment-cancel works!</p>\r\n");

/***/ }),

/***/ "mRqz":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bank-details/bank-details.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"bankDetailsForm\" class=\"mb-3\">\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n            <h5 class=\"font-weight-bold text-primary\">Bank Details</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-xl-12\">\r\n                    <label for=\"bankName\">Bank Name</label>\r\n\r\n                    <input type=\"text\" formControlName=\"bankName\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.bankName.errors }\" />\r\n                    <div *ngIf=\"submitted && f.bankName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.bankName.errors.required\">Bank Name is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-xl-6\">\r\n                    <label for=\"regNumber\">Registration Number</label>\r\n                    <input type=\"text\" formControlName=\"regNumber\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.regNumber.errors }\" />\r\n                    <div *ngIf=\"submitted && f.regNumber.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.regNumber.errors.required\">Registration Number is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-xl-6\">\r\n                    <label for=\"accountNumber\">Account number</label>\r\n                    <input type=\"text\" formControlName=\"accountNumber\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.accountNumber.errors }\" />\r\n                    <div *ngIf=\"submitted && f.accountNumber.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.accountNumber.errors.required\">Account Number is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-xl-6\">\r\n                    <label for=\"iban\">IBAN Number</label>\r\n                    <input type=\"text\" formControlName=\"iban\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.iban.errors }\" />\r\n                    <div *ngIf=\"submitted && f.iban.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.iban.errors.required\">IBAN Number is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-xl-6\">\r\n                    <label for=\"bic\">Bank Identifier Code</label>\r\n                    <input type=\"text\" formControlName=\"bic\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.bic.errors }\" />\r\n                    <div *ngIf=\"submitted && f.bic.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.bic.errors.required\">Bank Identifier Code is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n            <h5 class=\"font-weight-bold text-primary\">Online Wallets</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-xl-12\">\r\n                    <label for=\"paypalWalletID\">Paypal</label>\r\n                    <input type=\"text\" formControlName=\"paypalWalletID\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.paypalWalletID.errors }\" />\r\n                    <div *ngIf=\"submitted && f.paypalWalletID.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.paypalWalletID.errors.required\">Paypal ID is required</div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"form-group col-xl-12\">\r\n                    <label for=\"skrillWalletID\">Skrill</label>\r\n                    <input type=\"text\" formControlName=\"skrillWalletID\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.skrillWalletID.errors }\" />\r\n                    <div *ngIf=\"submitted && f.skrillWalletID.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.skrillWalletID.errors.required\">Skrill ID is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-xl-12\">\r\n                    <label for=\"revolutWalletID\">Revolut</label>\r\n                    <input type=\"text\" formControlName=\"revolutWalletID\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.revolutWalletID.errors }\" />\r\n                    <div *ngIf=\"submitted && f.revolutWalletID.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.revolutWalletID.errors.required\">Revoult ID is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n            <h5 class=\"font-weight-bold text-primary\">Crypto currency</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-xl-12\">\r\n                    <label for=\"bitCoinWalletID\">Bitcoin Wallet</label>\r\n                    <input type=\"text\" formControlName=\"bitCoinWalletID\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.bitCoinWalletID.errors }\" />\r\n                    <div *ngIf=\"submitted && f.bitCoinWalletID.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.bitCoinWalletID.errors.required\">BicCoin Wallet ID is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group text-right\">\r\n        <button type=\"button\" (click)=\"onBankDetailsUpdateSubmit()\" [disabled]=\"loading\" class=\"btn btn-primary \">Update</button>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "mq5u":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/messages/messages.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"frame\" class=\"mt-md-n4 message_frame\">\r\n    <div id=\"sidepanel\">\r\n        <div id=\"profile\">\r\n\r\n            <h4 class=\"text-primary\">My Loans</h4>\r\n            <div class=\"wrap avittiNone\">\r\n                <img id=\"profile-img\" src=\"/assets/img/user-default.png\" default=\"\" class=\"online\" alt=\"\" />\r\n                <p class=\"mt-2\"> {{currentUser.firstName | titlecase}}</p>\r\n                <i class=\"fa fa-chevron-down expand-button\" aria-hidden=\"true\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-none\" id=\"search\">\r\n            <label for=\"\"><i class=\"icon-search\" aria-hidden=\"true\"></i></label>\r\n            <input type=\"text\" placeholder=\"Search contacts...\" />\r\n        </div>\r\n        <div id=\"contacts\" class=\"mt-3\">\r\n            <ul>\r\n                <li class=\"contact\" *ngFor=\"let currentContactItem of myContactsList | orderBy: ['-updatedOn']\" [ngClass]=\"{ 'active': (currentContact?._id==currentContactItem?._id) }\">\r\n                    <div (click)=\"setCurrentContact(currentContactItem)\" class=\"wrap\" >\r\n                        <div class=\"d-none\" [ngSwitch]=\"currentContactItem.onlineStatus\">\r\n                            <span *ngSwitchCase=\"online\" class=\"contact-status online\"></span>\r\n                            <span *ngSwitchCase=\"busy\" class=\"contact-status busy\"></span>\r\n                            <span *ngSwitchCase=\"away\" class=\"contact-status away\"></span>\r\n                            <span *ngSwitchDefault class=\"contact-status\"></span>\r\n                        </div>\r\n\r\n                        <img *ngIf=\"!currentContactItem.isGroup\" src=\"/assets/img/user-default.png\" alt=\" \" />\r\n                        <img *ngIf=\"currentContactItem.isGroup\" src=\"/assets/img/users.png\" alt=\" \" />\r\n                        <div class=\"meta \">\r\n                            <div class=\"name \">{{currentContactItem.firstName | titlecase}}</div>\r\n                            <div class=\"small font-weight-light\">\r\n                                {{currentContactItem.createdOn | date}}\r\n                                <!-- {{currentContactItem.lastMessage || 'NA'}} -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- <div id=\"bottom-bar\">\r\n            <button id=\"addcontact\"><i class=\"fa fa-user-plus fa-fw\" aria-hidden=\"true\"></i> <span>Add\r\n                    contact</span></button>\r\n            <button id=\"settings\"><i class=\"fa fa-cog fa-fw\" aria-hidden=\"true\"></i> <span>Settings</span></button>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"content text-center\" *ngIf=\"!currentContact\">\r\n        <div class=\"mt-5 text-center blog-agency no-item\">\r\n            <img class=\"mt-5\" src=\"assets/img/noresult.png\">\r\n\r\n<!--            \r\n            <h4 class=\"font-weight-normal\">Choose A Session To Start Collaberating</h4> -->\r\n            <h4 class=\"text-black-50\"> Select your loan to start chatting.\r\n            </h4>\r\n\r\n        </div>\r\n        <div class=\"mt-5 d-none\">\r\n\r\n            <textarea class=\"form-control\" type=\"text\" [(ngModel)]=\"tts_textarea\"></textarea>\r\n            <select class=\"form-control\" #langSelect *ngIf=\"speechData\" (change)=\"setLanguage(langSelect.value)\">\r\n                <option [value]=\"i\" *ngFor=\"let voice of speechData.voices;let i = index;\">\r\n                    {{voice.name}} - {{voice.lang}}\r\n                </option>\r\n            </select>\r\n            <br>\r\n            <i class=\"icon-microphone-alt\" (click)=\"start()\" title=\"Start\"></i>\r\n            <button class=\"btn btn-xs d-none\" (click)=\"pause()\"> pause {{speech.volume}}</button>\r\n            <button class=\"btn btn-xs d-none\" (click)=\"resume()\"> resume </button>\r\n\r\n            <button class=\"btn btn-xs d-none\" (click)=\"speech.volume = speech.volume - 1\"> - </button> <button class=\"btn btn-xs d-none\" (click)=\"speech.volume = speech.volume + 1\"> + </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"content\" *ngIf=\"currentContact\">\r\n        <div class=\"contact-profile shadow-sm\">\r\n            <!-- <img src=\"/assets/img/user-default.png\" alt=\" \" /> -->\r\n\r\n            <i class=\"icon-arrow-left float-left\" (click)=\"goback_to_contacts()\"></i>\r\n\r\n            <div class=\"name m-md-3 m-0\">{{currentContact.firstName | titlecase}}</div>\r\n            <div class=\"social-media avittiNone\" style=\"right: 0;top: 3px;position: absolute;\">\r\n                <select [(ngModel)]=\"currentSelectedLanguageCode\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\" style=\"width: 75px;\">\r\n                    <option value=\"\" selected>Language</option>\r\n                    <option *ngFor=\"let language of languageCodes\" [ngValue]=\"language.language\">\r\n                        {{language.name}}</option>\r\n                </select>\r\n                <a (click)=\"joinNewVCSessionWithContact(currentContact._id,currentContact.loanId,currentContact.isGroup)\" routerLinkActive=\"active\"> <i class=\"icon-video-camera fa-lg\"></i></a>\r\n\r\n                <!-- <i class=\"icon-comment \"></i> -->\r\n            </div>\r\n        </div>\r\n        <div id=\"chat_messages\" class=\"messages\">\r\n            <!--#scrollMe [scrollTop]=\"scrollMe.scrollHeight\"\r\n            $(\"#chat_messages\").animate({\r\n    scrollTop: $(\"#chat_messages\").height()\r\n}, 400)\r\n            -->\r\n            <ul>\r\n                <!--\r\n                <li n class=\"sent \">\r\n                    <img src=\"http://emilcarlsson.se/assets/mikeross.png \" alt=\" \" /> \r\n                    <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>\r\n                </li>\r\n                <li class=\"replies \">\r\n                    <img src=\"http://emilcarlsson.se/assets/harveyspecter.png \" alt=\" \" /> \r\n                    <p>When you're backed against the wall, break the god damn thing down.</p>\r\n                </li>\r\n            -->\r\n                <!-- | sortArrayByUpdatedOn:['updatedOn']-->\r\n                <li *ngFor=\"let _chat of allChatListOfRoom; trackBy $index; let i = index\" [ngClass]=\"{ 'replies': _chat.userId == currentUser._id, 'sent': _chat.userId!=currentUser._id }\">\r\n                    <!-- <img src=\"/assets/img/user-default.png\" alt=\" \" /> -->\r\n                    <p>\r\n                        <span id=\"{{_chat._id}}\">\r\n                            {{_chat.message}}\r\n                        </span>\r\n                        <i class=\"icon-microphone-alt mr-1 avittiNone\" (click)=\"start(_chat.message)\" title=\"Text To Speech\"></i> \r\n                        <i (click)=\"translateTextInOtherLanguage(_chat.message, currentSelectedLanguageCode, false, _chat._id)\" title=\"Speech To Text\" class=\"icon-flickr-alt avittiNone\"></i></p>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n        <div class=\"message-input\">\r\n            <div class=\"d-none\">\r\n                <div *ngIf=\"voiceActiveSectionDisabled; else voicesection;\">\r\n                    <button type=\"button\" (click)=\"startVoiceRecognition()\">Record</button>\r\n                </div>\r\n                <ng-template #voicesection>\r\n                    <ng-container *ngIf=\"!voiceActiveSectionError; else failure\">\r\n                        <ng-container *ngIf=\"message2send; else start\">\r\n                            <!-- <span>{{message2send}}</span> -->\r\n                        </ng-container>\r\n                        <ng-template #start>\r\n                            <ng-container *ngIf=\"voiceActiveSectionListening; else beginning\">\r\n                                <span>Listening...</span>\r\n                            </ng-container>\r\n                            <ng-template #beginning>\r\n                                <span>Start talking...</span>\r\n                            </ng-template>\r\n                        </ng-template>\r\n                    </ng-container>\r\n                    <ng-template #failure>\r\n                        <span>Didn't catch that</span>\r\n                    </ng-template>\r\n                    <div>\r\n                        <button (click)=\"closeVoiceRecognition()\">Close</button>\r\n                        <button (click)=\"startVoiceRecognition()\">Restart</button>\r\n                    </div>\r\n                </ng-template>\r\n            </div>\r\n\r\n\r\n            <div class=\"wrap_send_input\">\r\n                <!-- <input (keydown.enter)=\"sendMessage(currentContact._id, message2send)\" type=\"text \" placeholder=\"Write your message... \" [(ngModel)]=\"message2send\" />\r\n                \r\n                <button [disabled]=\"returnTifCurrentContactIsNullOrEmpty(currentContact) \" class=\"submit \" (click)=\"sendMessage(currentContact._id, message2send)\">\r\n\t\t\t\t\t<i class=\"fa fa-paper-plane \" aria-hidden=\"true \"></i>\r\n                </button> -->\r\n                <small class=\"text-danger ml-1 mb-3\" *ngIf=\"message2send && (message2send.includes('skype') || message2send.includes('facebook') || message2send.includes('wechat') || message2send.includes('messenger') || message2send.includes('messenger')|| message2send.includes('@') || message2send.includes('(a)') || message2send.includes('-a-') || message2send.includes('.dk') || message2send.includes('.com') )\">Your message cannot have restricted keywords: messenger, facebook, whatsapp, wechat, skype, @,(a), -a-\r\n                   , .com, .dk   \r\n                      </small>\r\n                <div class=\"input-group input-group-lg shadow-lg mt-1\">\r\n                   \r\n                    <input type=\"text\" (keydown.enter)=\"sendMessage(currentContact._id, message2send)\" type=\"text \" placeholder=\"Write your message... \" [(ngModel)]=\"message2send\" class=\"form-control border-0\" placeholder=\"Start Typing...\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-light d-none avittiNone\" *ngIf=\"voiceActiveSectionListening; else beginning\" (click)=\"closeVoiceRecognition()\">\r\n                            <span class=\"small font-weight-light mr-1\">Listening...</span> <i\r\n                                class=\"fas fa-headset\"></i>\r\n                        </button>\r\n                        <button *ngIf=\"!voiceActiveSectionListening\" class=\"btn btn-light avittiNone\" (click)=\"startVoiceRecognition()\">\r\n                            <i class=\"fas icon-microphone fa-lg\" aria-hidden=\"true \"></i>\r\n                        </button>\r\n\r\n\r\n                        <button class=\"btn btn-link\" type=\"button\" [disabled]=\"!returnTifCurrentContactIsNullOrEmpty(currentContact) && !message2send\" (click)=\"sendMessage(currentContact._id, message2send)\">\r\n                            <i class=\"icon-arrow-right\" aria-hidden=\"true \"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "oJqp":
/*!********************************************!*\
  !*** ./src/app/lender/lender.component.ts ***!
  \********************************************/
/*! exports provided: LenderComponent, ModalApplySession, ModalAppliedSessionDisplay, ModalPublicProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LenderComponent", function() { return LenderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalApplySession", function() { return ModalApplySession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAppliedSessionDisplay", function() { return ModalAppliedSessionDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPublicProfile", function() { return ModalPublicProfile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lender_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lender.component.html */ "LHbK");
/* harmony import */ var _lender_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lender.component.css */ "Zbbr");
/* harmony import */ var _raw_loader_modal_modal_apply_session_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./modal/modal-apply-session.html */ "/Dza");
/* harmony import */ var _raw_loader_modal_modal_applied_session_display_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raw-loader!./modal/modal-applied-session-display.html */ "vAC1");
/* harmony import */ var _raw_loader_modal_modal_public_profile_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!./modal/modal-public-profile.html */ "lAmc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models */ "VHTt");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/utility.service */ "A1CT");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/payment.service */ "s5zK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../socketio.service */ "bgkY");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/alert.service */ "3LUQ");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services */ "o0su");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/contact.service */ "3ITz");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/environments/environment */ "AytR");


















let LenderComponent = class LenderComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    applyToSession() {
        const dialogRef = this.dialog.open(ModalApplySession);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`25 :: ec :: Dialog result: ${JSON.stringify(result)}`);
        });
    }
};
LenderComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
LenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-lender',
        template: _raw_loader_lender_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lender_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], LenderComponent);

//#region modal popup for apply LoanObj
let ModalApplySession = class ModalApplySession {
    constructor(dialogRef, data, utilityService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.utilityService = utilityService;
        this.arrayItems = [0];
        this.SessionExecutionType = _models__WEBPACK_IMPORTED_MODULE_8__["SessionExecutionType"];
        this.transactionOnForLoanAmountPaidByLenderCustomised = null;
        this.LoanObj = data.sessionObj;
        this.sessionApply = {};
        this.sessionApply.loanId = this.LoanObj._id;
        this.sessionApply.loanAmount = this.LoanObj.loanAmount;
        this.sessionApply.borrowerId = data.borrowerId;
        this.sessionApply.sessionExecutionType = _models__WEBPACK_IMPORTED_MODULE_8__["SessionExecutionType"].FixedPrice;
        this.sessionApply.mileStoneProposal = [];
        this.sessionApply.mileStoneProposal.push({ "milestones": null, "milestonesProposal": null });
    }
    addMilestones() {
        if (this.arrayItems.length < 5) {
            this.sessionApply.mileStoneProposal.push({ "milestones": null, "milestonesProposal": null });
            this.arrayItems.push(this.arrayItems.length);
        }
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close({ event: 'close', data: this.sessionApply });
    }
};
ModalApplySession.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] }
];
ModalApplySession = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'modal-apply-session',
        template: _raw_loader_modal_modal_apply_session_html__WEBPACK_IMPORTED_MODULE_3__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]])
], ModalApplySession);

//#endregion modal popup for apply LoanObj
//#region modal popup for display applied sessions
let ModalAppliedSessionDisplay = class ModalAppliedSessionDisplay {
    constructor(alertService, socketService, router, dialogRef, data, utilityService, payment, userService, authenticationService, contactService) {
        this.alertService = alertService;
        this.socketService = socketService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.utilityService = utilityService;
        this.payment = payment;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.contactService = contactService;
        this.SessionStatus = _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"];
        this.arrayItems = [0];
        this.anySingleDataIsApproved = false;
        this.userInitiatedForPayment = false;
        this.SessionExecutionType = _models__WEBPACK_IMPORTED_MODULE_8__["SessionExecutionType"];
        this.refundObj = {};
        this.ready2Refund = false;
        this.alreadyInitiatedForPayment = false;
        this.transactionOnForLoanAmountPaidByLenderCustomised = null;
        this.transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised = null;
        this.LoanObj = data.sessionObj;
        this.endUserId = data.endUserId;
        this.LoanApplyObjCurrent = {};
        this.LoanApplyObjCurrentCheckBoxes = {};
        this.LoanApplyObjCurrentCheckBoxes.visibleKeys = {};
        this.LoanApplyObjCurrent4Installment = {};
    }
    initiateLoanAmountPaidByBorrower(event, LoanApplyObj, currentRowDate, _key) {
        if (LoanApplyObj) {
            let _installmentKey = null;
            if (event.target.checked && !this.alreadyInitiatedForPayment) {
                _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');
                if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                    if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
                        this.alertService.error("Installment already paid");
                        return;
                    }
                }
                this.LoanApplyObjCurrent4Installment = {};
                this.LoanApplyObjCurrent4Installment.installmentKey = _installmentKey;
                this.alreadyInitiatedForPayment = true;
            }
            else {
                if (!event.target.checked) {
                    if (this.alreadyInitiatedForPayment) {
                        this.alreadyInitiatedForPayment = false;
                    }
                    this.LoanApplyObjCurrent4Installment = {};
                }
                event.target.checked = false;
                this.LoanApplyObjCurrentCheckBoxes[_key] = false;
            }
        }
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
    paymentDoneByLender(LoanApplyObj) {
        this.LoanApplyObjCurrent._id = LoanApplyObj._id;
        if (this.transactionOnForLoanAmountPaidByLenderCustomised) {
            this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidByLenderCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD'));
        }
        if (!this.LoanApplyObjCurrent.isLoanAmountPaidByLender || !this.LoanApplyObjCurrent.transactionIdForLoanAmountPaidByLender || !this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender) {
            this.alertService.error("All data is required");
            return;
        }
        if (this.utilityService.moment(this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender).isAfter(this.utilityService.moment())) {
            this.alertService.error("Future date is not allowed");
            return;
        }
        if (this.utilityService.moment(this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLender).isBefore(this.utilityService.moment(this.LoanObj.loanStartDateTime))) {
            this.alertService.error("Transaction date must be newer than loan created date");
            return;
        }
        this.LoanApplyObjCurrent.createdOnForLoanAmountPaidByLender = this.utilityService._.now();
        this.socketService.sendEventForLoanAmountPaidByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, this.LoanApplyObjCurrent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(details => {
            if (details && details["success"]) {
                this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
            }
        });
        this.LoanApplyObjCurrent = {};
    }
    paymentDoneToLenderConfirmByLender(LoanApplyObj) {
        let _past_days_allowed4payment = 15;
        let _future_days_allowed4payment = 7;
        //this.LoanApplyObjCurrent4Installment.loanTenureInMonths = this.LoanObj.loanTenureInMonths;
        //this.LoanApplyObjCurrent4Installment.installmentKey = null;
        //this.LoanApplyObjCurrent4Installment._id = LoanApplyObj._id;
        if (this.transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised) {
            this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD 00:00:00 A'));
        }
        if (!this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender) {
            this.alertService.error("All data is required");
            return;
        }
        if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender).isAfter(this.utilityService.moment(this.LoanApplyObjCurrent4Installment.installmentKey).add('D', _future_days_allowed4payment))) {
            this.alertService.error("Future date is not allowed");
            return;
        }
        if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidByLenderConfirmByBorrower).isAfter(this.utilityService.moment().add('D', (-1) * _past_days_allowed4payment))) {
            this.alertService.error("Historic date is not allowed");
            return;
        }
        if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidByLenderConfirmByBorrower).isBefore(this.utilityService.moment().add('D'))) {
            this.alertService.error("Future date is not allowed");
            return;
        }
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
            let _old_installmentKey = null;
            for (let index in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index]) {
                    _old_installmentKey = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index].installmentKey;
                }
            }
            if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender).isBefore(this.utilityService.moment(_old_installmentKey))) {
                this.alertService.error("Transaction date must be newer than installment date");
                return;
            }
        }
        else {
            if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender).isBefore(this.utilityService.moment(this.LoanObj.loanStartDateTime))) {
                this.alertService.error("Transaction date must be newer than loan created date");
                return;
            }
        }
        this.LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender = this.utilityService._.now();
        let _loanTenureInMonths = parseInt(this.LoanObj.loanTenureInMonths);
        let _installmentKey = this.LoanApplyObjCurrent4Installment.installmentKey;
        //delete this.LoanApplyObjCurrent4Installment.installmentKey;
        this.socketService.sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, _installmentKey, _loanTenureInMonths, this.LoanApplyObjCurrent4Installment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])())
            .subscribe(details => {
            if (details && details["success"]) {
                this.dialogRef.close({ event: 'close', data: { updatedSessionObj: details["data"] } });
            }
        });
        this.LoanApplyObjCurrent4Installment = {};
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
    viewCurrentInstallmentAlreadyPaid(LoanApplyObj, currentRowDate, _key) {
        let _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');
        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
                if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
                    this.LoanApplyObjCurrent4Installment = {};
                    this.LoanApplyObjCurrent4Installment = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey];
                    return true;
                }
            }
        }
        return false;
    }
    initiateLoanAmountPaidByBorrowerConfirmByLender(event, LoanApplyObj, currentRowDate, _key) {
        if (LoanApplyObj) {
            let _installmentKey = null;
            if (event.target.checked && !this.alreadyInitiatedForPayment) {
                _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');
                this.LoanApplyObjCurrent4Installment = {};
                if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                    if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
                        if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey].createdOnForLoanAmountPaidToLenderConfirmByLender) {
                            this.alertService.error("Installment payment already confirmed");
                            return;
                        }
                        else {
                            this.LoanApplyObjCurrent4Installment = {};
                            this.LoanApplyObjCurrent4Installment = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey];
                        }
                    }
                }
                this.LoanApplyObjCurrent4Installment.installmentKey = _installmentKey;
                this.alreadyInitiatedForPayment = true;
            }
            else {
                if (!event.target.checked) {
                    if (this.alreadyInitiatedForPayment) {
                        this.alreadyInitiatedForPayment = false;
                    }
                    this.LoanApplyObjCurrent4Installment = {};
                }
                event.target.checked = false;
                this.LoanApplyObjCurrentCheckBoxes[_key] = false;
            }
        }
    }
    returnUrl4downloadCOntractPDF(sessionApplyId) {
        let Url4downloadCOntractPDF = src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].apiUrl + '/signed_pdf_contract/' + sessionApplyId + '.pdf';
        return Url4downloadCOntractPDF;
    }
    ngOnInit() {
    }
    finalSubmissionForRefund() {
        this.socketService.sendEventToRejectSessionWithRefundRequestWiUpdateAll(this.refundObj.loanId, this.refundObj.loanApplyId, this.endUserId, _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].RejectedOngoingWithRefund, this.refundObj.transactionId, this.refundObj.amount, this.refundObj.cancellationCharges, this.refundObj.finalAmount2Refund, this.refundObj.captureId, this.refundObj._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(details => {
            if (details && details["success"]) {
            }
            else {
            }
            this.dialogRef.close({ event: 'close', data: null });
        });
    }
    closeDialog(_sessionApply, _status) {
        this.payment.clearCurrentPayPalConfig();
        let _loanId = _sessionApply.loanId;
        let _sessionPrice = 0;
        let _loanApplyId = _sessionApply._id;
        let _endUserId = this.endUserId;
        let _transactiActionType = null;
        switch (_status) {
            case _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].Accepted:
                //#region handle LoanObj accepted
                //_sessionPrice = this.LoanObj.loanAmount;
                //initiate payment here
                //_transactiActionType = TransactionActionType.session_accepted;
                //this.initiateForPaymentForLender(_loanId, _loanApplyId, _sessionApply, _status, _sessionPrice, _endUserId, _transactiActionType);
                this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status } });
                //#endregion handle LoanObj accepted
                break;
            case _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].Ongoing:
                //#region handle LoanObj accepted
                switch (_sessionApply.sessionExecutionType) {
                    case _models__WEBPACK_IMPORTED_MODULE_8__["SessionExecutionType"].FixedPrice:
                        _sessionPrice = _sessionApply.fixedPriceProposal;
                        break;
                    case _models__WEBPACK_IMPORTED_MODULE_8__["SessionExecutionType"].Milestones:
                        _sessionPrice = this.utilityService._.sum(this.utilityService._.map(_sessionApply.mileStoneProposal, 'milestonesProposal'));
                        break;
                }
                //initiate payment here
                _transactiActionType = _models__WEBPACK_IMPORTED_MODULE_8__["TransactionActionType"].session_ongoing;
                this.initiateForPaymentForLender(_loanId, _loanApplyId, _sessionApply, _status, _sessionPrice, _endUserId, _transactiActionType);
                //#endregion handle LoanObj accepted
                break;
            case _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].RejectedOngoingWithRefund:
                this.ready2Refund = false;
                //#region handle LoanObj rejected with refund
                this.socketService.sendEventToRejectSessionWithRefundRequest(_loanId, _loanApplyId, _endUserId, _status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(details => {
                    if (details && details["success"]) {
                        this.refundObj = details["data"];
                        this.ready2Refund = true;
                    }
                    else {
                        this.alertService.error(details["message"], true);
                    }
                    //this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, transactionId: (details.id || details._id) } });
                });
                //#endregion handle LoanObj rejected with refund  
                break;
            default:
                this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status } });
                break;
        }
    }
    initiateForPaymentForLender(_loanId, _loanApplyId, _sessionApply, _status, _sessionPrice, _endUserId, _transactiActionType) {
        //#region handle LoanObj payments
        this.userInitiatedForPayment = true;
        let purchaseUnits = [
            {
                custom_id: _loanId,
                amount: {
                    currency_code: 'USD',
                    value: _sessionPrice,
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: _sessionPrice
                        }
                    }
                },
                items: [
                    {
                        description: _loanApplyId,
                        name: _models__WEBPACK_IMPORTED_MODULE_8__["TransactionActionType"].session_extended + '__' + _loanId,
                        quantity: '1',
                        category: 'DIGITAL_GOODS',
                        unit_amount: {
                            currency_code: 'USD',
                            value: _sessionPrice,
                        },
                    }
                ]
            }
        ];
        this.payment.getCurrentPaymentApproved().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(details => {
            this.dialogRef.close({ event: 'close', data: { sessionApply: _sessionApply, status: _status, transactionId: (details.id || details._id) } });
        });
        this.payPalConfig = this.payment.initConfig(purchaseUnits, _transactiActionType, _endUserId);
        //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id);    
        //#endregion handle LoanObj payments
    }
    check4SessionApplyStatus(sessionApply) {
        try {
            if (sessionApply.status == _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].Accepted) {
                this.anySingleDataIsApproved = true;
            }
        }
        catch (ex) { }
        try {
            if ((sessionApply.status == _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].Pending || sessionApply.status == 'Pending' || sessionApply.status == '' || sessionApply.status == null || typeof sessionApply.status == 'undefined') && this.anySingleDataIsApproved == false) {
                return false;
            }
        }
        catch (ex) {
        }
        return true;
    }
    returnSessionApplyStatus(sessionApply) {
        let _currentStatus = _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].Pending;
        try {
            if ((sessionApply.status == _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].Pending || sessionApply.status == 'Pending' || sessionApply.status == '' || sessionApply.status == null || typeof sessionApply.status == 'undefined')) {
                _currentStatus = _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].Pending;
            }
            else {
                _currentStatus = sessionApply.status;
            }
        }
        catch (ex) { }
        try {
            if (sessionApply.status != _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].Pending && sessionApply.status != _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].Rejected && sessionApply.status != _models__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].RejectedOngoing) {
                this.anySingleDataIsApproved = true;
            }
        }
        catch (ex) { }
        return _currentStatus;
    }
    addNewRatings(_sessionApply) {
        let _loanId = _sessionApply.loanId;
        let _createdBy = this.endUserId;
        let _userId = _sessionApply.borrowerId;
        let _parentRouting = '';
        _parentRouting = 'lender';
        this.router.navigate(['/' + _parentRouting + '/ratings'], { state: { createdBy: _createdBy, userId: _userId, loanId: _loanId } });
    }
    clickedOnSessionChatVideo(sessionObj, AVTrueChatFalse) {
        let _contactId = this.contactService.returnContactIdForSession(sessionObj._id, sessionObj.sessionAppliedByBorrowers[0]._id);
        let _parentRouting = '';
        switch (this.authenticationService.currentUserValue.role) {
            case _models__WEBPACK_IMPORTED_MODULE_8__["Role"].Borrower:
                _parentRouting = 'borrower';
                break;
            case _models__WEBPACK_IMPORTED_MODULE_8__["Role"].Lender:
                _parentRouting = 'lender';
                break;
            case _models__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin:
                _parentRouting = 'admin';
                break;
        }
        this.dialogRef.close({ event: 'close', data: {} });
        this.router.navigate(['/' + _parentRouting + '/messages'], { state: { contactId: _contactId, AVTrueChatFalse: AVTrueChatFalse } });
    }
};
ModalAppliedSessionDisplay.ctorParameters = () => [
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_14__["AlertService"] },
    { type: _socketio_service__WEBPACK_IMPORTED_MODULE_13__["SocketioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] },
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_10__["PaymentService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_15__["UserService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_16__["ContactService"] }
];
ModalAppliedSessionDisplay = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'modal-applied-session-display',
        template: _raw_loader_modal_modal_applied_session_display_html__WEBPACK_IMPORTED_MODULE_4__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_14__["AlertService"],
        _socketio_service__WEBPACK_IMPORTED_MODULE_13__["SocketioService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"],
        _services_payment_service__WEBPACK_IMPORTED_MODULE_10__["PaymentService"],
        _services__WEBPACK_IMPORTED_MODULE_15__["UserService"],
        _services__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"],
        _services_contact_service__WEBPACK_IMPORTED_MODULE_16__["ContactService"]])
], ModalAppliedSessionDisplay);

//#endregion modal popup for display applied sessions
let ModalPublicProfile = class ModalPublicProfile {
    constructor(dialogRef, data, utilityService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
};
ModalPublicProfile.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] },
    { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] }
];
ModalPublicProfile = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'modal-public-profile',
        template: _raw_loader_modal_modal_public_profile_html__WEBPACK_IMPORTED_MODULE_5__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]])
], ModalPublicProfile);



/***/ }),

/***/ "pFHx":
/*!******************************************************************!*\
  !*** ./src/app/shared/media-preview/media-preview.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpYS1wcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "pHmk":
/*!***************************************************!*\
  !*** ./node_modules/country-list/country-list.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(/*! ./data.json */ "dI9Q")

/** Precompute name and code lookups. */
var nameMap = {}
var codeMap = {}
data.forEach(mapCodeAndName)

function mapCodeAndName (country) {
  nameMap[country.name.toLowerCase()] = country.code
  codeMap[country.code.toLowerCase()] = country.name
}

exports.overwrite = function overwrite (countries) {
  if (!countries || !countries.length) return
  countries.forEach(function (country) {
    var foundIndex = data.findIndex(function (item) {
      return item.code === country.code
    })
    data[foundIndex] = country
    mapCodeAndName(country)
  })
}

exports.getCode = function getCode (name) {
  return nameMap[name.toLowerCase()]
}

exports.getName = function getName (code) {
  return codeMap[code.toLowerCase()]
}

exports.getNames = function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

exports.getCodes = function getCodes () {
  return data.map(function (country) {
    return country.code
  })
}

exports.getCodeList = function getCodeList () {
  return codeMap
}

exports.getNameList = function getNameList () {
  return nameMap
}

exports.getData = function getData () {
  return data
}


/***/ }),

/***/ "pU54":
/*!********************************************************************************!*\
  !*** ./src/app/shared/monthly-subscription/monthly-subscription.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb250aGx5LXN1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "peRX":
/*!*************************************************!*\
  !*** ./src/app/shared/pipe/date-pretty.pipe.ts ***!
  \*************************************************/
/*! exports provided: DatePrettyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePrettyPipe", function() { return DatePrettyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let DatePrettyPipe = class DatePrettyPipe {
    transform(date2check, currentDate = null) {
        currentDate = (currentDate ? currentDate : Date.now());
        if (date2check) {
            return moment__WEBPACK_IMPORTED_MODULE_2__(new Date(date2check)).from(new Date(currentDate));
        }
        return date2check;
    }
};
DatePrettyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'datePretty'
    })
], DatePrettyPipe);



/***/ }),

/***/ "qgPz":
/*!************************************************************!*\
  !*** ./src/app/shared/meeting-vc/meeting-vc.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#vc_meeting_div iframe{\r\nwidth: 100%;\r\nheight: 80vh !important;\r\n} \r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctdmMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7QUFDWCx1QkFBdUI7QUFDdkIiLCJmaWxlIjoibWVldGluZy12Yy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZjX21lZXRpbmdfZGl2IGlmcmFtZXtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogODB2aCAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuXHJcbiAgIl19 */");

/***/ }),

/***/ "rflR":
/*!*******************************************************!*\
  !*** ./src/app/shared/messages/messages.component.ts ***!
  \*******************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./messages.component.html */ "mq5u");
/* harmony import */ var _messages_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.component.css */ "W6dE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var src_app_models_languageCodesEn_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/languageCodesEn.json */ "JJko");
var src_app_models_languageCodesEn_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/models/languageCodesEn.json */ "JJko", 1);
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! speak-tts */ "9CWG");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(speak_tts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");












//import translate from 'google-translate';//'google-translate-open-api';


let MessagesComponent = class MessagesComponent {
    //end tts
    constructor(socketService, authenticationService, ngZone, contactService, router, alertService, utilityService) {
        this.socketService = socketService;
        this.authenticationService = authenticationService;
        this.ngZone = ngZone;
        this.contactService = contactService;
        this.router = router;
        this.alertService = alertService;
        this.utilityService = utilityService;
        this.loading = false;
        //start speech to text vars
        this.voiceActiveSectionDisabled = true;
        this.voiceActiveSectionError = false;
        this.voiceActiveSectionSuccess = false;
        this.voiceActiveSectionListening = false;
        this.result = '';
        if (src_app_models_languageCodesEn_json__WEBPACK_IMPORTED_MODULE_10___namespace) {
            this.languageCodes = src_app_models_languageCodesEn_json__WEBPACK_IMPORTED_MODULE_10__["eo"];
        }
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.subscription = this.socketService.getNewMessageToRoomAll().subscribe(_currentChatObj => {
            if (!this.allChatListOfRoom) {
                this.allChatListOfRoom = [];
            }
            if (_currentChatObj) {
                this.allChatListOfRoom.push(_currentChatObj);
                $('#chat_messages').animate({
                    scrollTop: $('#chat_messages').get(0).scrollHeight
                }, 'fast');
            }
        });
        this.socketService.listenEventToAddNewContact().subscribe(_currentContactObj => {
            if (!this.myContactsList) {
                this.myContactsList = [];
            }
            if (_currentContactObj) {
                this.myContactsList.push(_currentContactObj);
            }
        });
        //start tts
        this.speech = new speak_tts__WEBPACK_IMPORTED_MODULE_11___default.a(); // will throw an exception if not browser supported
        if (this.speech.hasBrowserSupport()) { // returns a boolean
            console.log("speech synthesis supported");
            this.speech.init({
                'volume': 1,
                'lang': 'en-GB',
                'rate': 1,
                'pitch': 1,
                'voice': 'Google UK English Male',
                'splitSentences': true,
                'listeners': {
                    'onvoiceschanged': (voices) => {
                        console.log("Event voiceschanged", voices);
                    }
                }
            }).then((data) => {
                // The "data" object contains the list of available voices and the voice synthesis params
                console.log("Speech is ready, voices are available", data);
                this.speechData = data;
                data.voices.forEach(voice => {
                    console.log(voice.name + " " + voice.lang);
                });
            }).catch(e => {
                console.error("An error occured while initializing : ", e);
            });
        }
        //end tts
        let paramobj = history.state;
        if (paramobj) {
            let contactId = paramobj['contactId'];
            let AVTrueChatFalse = paramobj['AVTrueChatFalse'];
            delete history.state['contactId'];
            delete history.state['AVTrueChatFalse'];
            if (contactId) {
                this.socketService.getByIdMyContacts(contactId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                    .subscribe(data => {
                    //console.log('data => ', data)
                    if (data && data['success']) {
                        //alert(JSON.stringify( data));
                        if (AVTrueChatFalse) {
                            this.joinNewVCSessionWithContact(contactId, data["data"].loanId, data["data"].isGroup);
                        }
                        else {
                            this.setCurrentContact(data["data"]);
                        }
                        //this.alertService.success(data['message'], true);
                        this.loading = false;
                        //this.element_btn_click_addServiceTypes_skills_verification.click();
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
    }
    returnTifCurrentContactIsNullOrEmpty(currentContact) {
        if (currentContact && currentContact.roomId) {
            return false;
        }
        return true;
    }
    returnTifUserIsInCurrenrContact(_userId) {
        if (this.currentContact && this.currentContact.userId && _userId) {
            if (this.currentContact.userId == _userId) {
                return true;
            }
        }
        return false;
    }
    ngOnInit() {
        this.getAllMyContacts();
        this.translateTextInOtherLanguage('', '', false, null);
    }
    translateTextInOtherLanguage(string2Translate, languageCode2Translate, sendDirect2ChatT, chatId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!string2Translate || string2Translate == '' || string2Translate == null) {
                return;
            }
            languageCode2Translate = (languageCode2Translate ? languageCode2Translate : 'en');
            this.socketService.requestTestTranslation(string2Translate, languageCode2Translate)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                .subscribe(data => {
                if (data && data['success']) {
                    console.log('141', data["data"]);
                    if (chatId) {
                        this.element_ctrlChatMessage = document.getElementById(chatId);
                        this.element_ctrlChatMessage.innerText = data["data"].translatedText;
                    }
                    if (sendDirect2ChatT) {
                        return data["data"];
                    }
                }
                else {
                    if (sendDirect2ChatT) {
                        return null;
                    }
                }
            }, error => {
                let errorMsg2show = "";
                //this.PaymentTransactionDetailsArray = [];
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
                if (sendDirect2ChatT) {
                    return null;
                }
            });
            /*
            const result = await translate(`I'm fine.`, {
              tld: "com",
              to: "hi",
              browers: true
        
            }).catch((e) => {
              console.error("141 :: An error occured while translatings : ", e)
            });
            let data = null;
            if (result && result.data) {
              data = result.data[0];
            }
            console.log('139', data, result);
            */
        });
    }
    getAllUsers() {
        let _data = {};
        this.socketService.getAllUsers(_data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(users => {
            this.allUsersList = users;
        });
    }
    sendMessage(_roomId, _message) {
        if (_message == null || typeof _message == 'undefined' || _message == '' || !_message) {
            return;
        }
        //#region filter message with reserved word and make it with star
        let wordsArr2filterFromMessage = [];
        let _copiedMessage = _message.toString().toLowerCase();
        for (let index in wordsArr2filterFromMessage) {
            let word2find = wordsArr2filterFromMessage[index];
            let _temp_message = _message;
            if (_copiedMessage.indexOf(word2find) > -1) {
                let _wordLength = word2find.length;
                let _startIndex = _copiedMessage.indexOf(word2find);
                let _endIndex = _startIndex + _wordLength;
                let _maskedWord2Replace = this.utilityService.createString('*', _wordLength);
                let _word2replace = _message.substr(_startIndex, _wordLength);
                _message = _temp_message.replaceAll(_word2replace, _maskedWord2Replace);
            }
        }
        //#endregion filter message with reserved word and make it with star
        let _copiedMessage3 = _message.toString().toLowerCase().replaceAll(' ', '');
        if (_copiedMessage3.match(/[0-9]{8}/)) {
            this.alertService.error("Phone number is not allowed in message");
            return;
        }
        //#region filter message with reserved word and make it with star
        let wordsArr2restrictFromMessage = ['@', '(a)', '-a-', '.com', '.dk', 'messenger', 'facebook', 'whatsapp', 'wechat', 'skype', 'mobile', 'emailid', 'mob', 'email'];
        let _copiedMessage2 = _message.toString().toLowerCase();
        for (let index in wordsArr2restrictFromMessage) {
            let word2find = wordsArr2restrictFromMessage[index];
            if (_copiedMessage2.indexOf(word2find) > -1) {
                this.alertService.error("Message contains restricted word '" + word2find + "'");
                return;
            }
        }
        //#endregion filter message with reserved word and make it with star
        if (_message != null && typeof _message != 'undefined' && _message != '') {
            this.socketService.sendEventWithMessageChatRoom(_roomId, this.currentUser._id, _message);
            this.message2send = '';
        }
    }
    getAllMyContacts() {
        let _data = {};
        let _currentUserId = this.currentUser._id;
        this.socketService.getAllMyContacts(_currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(users => {
            this.myContactsList = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](lodash__WEBPACK_IMPORTED_MODULE_8__["values"](users), function (e) {
                if (e) {
                    return (e._id != _currentUserId);
                }
            });
        });
    }
    setCurrentContact(currentContactItem) {
        if (currentContactItem) {
            console.log(window.innerWidth);
            if (window.innerWidth < 768) {
                $('#sidepanel').slideUp();
            }
            if (!currentContactItem.usersColl) {
                this.allChatListOfRoom = null;
                let _adminUsersArray = [];
                _adminUsersArray.push(this.currentUser._id);
                _adminUsersArray.push(currentContactItem.userId ? currentContactItem.userId : currentContactItem._id);
                let _currentContactObj = this.contactService.returnContactJsonData(this.currentUser._id, currentContactItem.firstName, null, null, _adminUsersArray, null, null);
                this.socketService.sendEventToAddNewContact(_currentContactObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(result => {
                    if (result) {
                        if (result['success'] == true || result['success'] == false) {
                            this.currentContact = result['data'];
                        }
                        else {
                            this.currentContact = result;
                        }
                    }
                    try {
                        if (this.currentContact) {
                            if (!this.currentContact._id && this.currentContact[0]._id) {
                                this.currentContact = this.currentContact[0];
                            }
                        }
                    }
                    catch (ex) { }
                    this.socketService.sendEventToJoinChatRoom(this.currentContact._id, this.currentUser._id);
                    this.getAllChatByRoomId(this.currentContact._id);
                });
            }
            else {
                this.currentContact = currentContactItem;
                this.socketService.sendEventToJoinChatRoom(this.currentContact._id, this.currentUser._id);
                this.getAllChatByRoomId(this.currentContact._id);
            }
        }
    }
    getAllChatByRoomId(_roomId) {
        let _data = {};
        this.socketService.sendEventToGetAllChatOfRoomWithPromise(_roomId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(chats => {
            this.allChatListOfRoom = chats;
            setTimeout(() => {
                $('#chat_messages').animate({
                    scrollTop: $('#chat_messages').get(0).scrollHeight
                }, 'fast');
            }, 10);
        });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    //start speech to text methos
    initializeVoiceRecognitionCallback() {
        annyang.addCallback('error', (err) => {
            if (err.error === 'network') {
                this.message2send = "Please check your internet connection.";
                annyang.abort();
                this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
            }
            else if (this.message2send === undefined) {
                this.ngZone.run(() => this.voiceActiveSectionError = true);
                annyang.abort();
            }
        });
        annyang.addCallback('soundstart', (res) => {
            this.ngZone.run(() => this.voiceActiveSectionListening = true);
        });
        annyang.addCallback('end', () => {
            if (this.message2send === undefined) {
                this.ngZone.run(() => this.voiceActiveSectionError = true);
                annyang.abort();
            }
        });
        annyang.addCallback('result', (userSaid) => {
            this.ngZone.run(() => this.voiceActiveSectionError = false);
            let queryText = userSaid[0];
            annyang.abort();
            this.message2send = queryText;
            this.ngZone.run(() => this.voiceActiveSectionListening = false);
            this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
        });
    }
    startVoiceRecognition() {
        this.voiceActiveSectionDisabled = false;
        this.voiceActiveSectionError = false;
        this.voiceActiveSectionSuccess = false;
        this.message2send = undefined;
        if (annyang) {
            let commands = {
                'demo-annyang': () => { }
            };
            annyang.addCommands(commands);
            this.initializeVoiceRecognitionCallback();
            annyang.start({ autoRestart: false });
        }
    }
    closeVoiceRecognition() {
        this.voiceActiveSectionDisabled = true;
        this.voiceActiveSectionError = false;
        this.voiceActiveSectionSuccess = false;
        this.voiceActiveSectionListening = false;
        this.message2send = undefined;
        if (annyang) {
            annyang.abort();
        }
    }
    trackByFn(index, item) {
        console.log('TrackBy:', item._id, 'at index', index);
        return (item._id);
    }
    //end speech to text methos
    //start tts methods
    start(text_to_speak) {
        this.speech
            .speak({
            text: text_to_speak ? text_to_speak : this.tts_textarea,
            queue: false,
            listeners: {
                onstart: () => {
                    console.log("Start utterance");
                },
                onend: () => {
                    console.log("End utterance");
                },
                onresume: () => {
                    console.log("Resume utterance");
                },
                onboundary: event => {
                    console.log(event.name +
                        " boundary reached after " +
                        event.elapsedTime +
                        " milliseconds.");
                }
            }
        })
            .then(data => {
            console.log("Success !", data);
        })
            .catch(e => {
            console.error("An error occurred :", e);
        });
    }
    pause() {
        this.speech.pause();
    }
    resume() {
        this.speech.resume();
    }
    goback_to_contacts() {
        $('#sidepanel').slideDown();
    }
    setLanguage(i) {
        console.log(i);
        console.log(this.speechData.voices[i].lang + this.speechData.voices[i].name);
        this.speech.setLanguage(this.speechData.voices[i].lang);
        this.speech.setVoice(this.speechData.voices[i].name);
    }
    //end tts methods
    joinNewVCSessionWithContact(_roomId, loanId, isGroup) {
        if (!_roomId) {
            this.alertService.error("Requested Meeting/Contact not found");
            return;
        }
        if (isGroup && !loanId) {
            loanId = _roomId.split('__')[0];
        }
        let _parentRouting = '';
        switch (this.currentUser.role) {
            case src_app_models__WEBPACK_IMPORTED_MODULE_5__["Role"].Borrower:
                _parentRouting = 'borrower';
                break;
            case src_app_models__WEBPACK_IMPORTED_MODULE_5__["Role"].Lender:
                _parentRouting = 'lender';
                break;
            case src_app_models__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin:
                _parentRouting = 'admin';
                break;
        }
        this.router.navigate(['/' + _parentRouting + '/vcmeet'], { state: { roomId: _roomId, currentUser: this.currentUser, loanId: loanId } });
    }
};
MessagesComponent.ctorParameters = () => [
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_6__["SocketioService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_9__["ContactService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"] }
];
MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        styles: [_messages_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_socketio_service__WEBPACK_IMPORTED_MODULE_6__["SocketioService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_9__["ContactService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
        src_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"]])
], MessagesComponent);



/***/ }),

/***/ "s5zK":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.service */ "A1CT");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socketio.service */ "bgkY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _add_funds_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-funds.service */ "3gPe");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/role */ "z56L");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let PaymentService = class PaymentService {
    constructor(http, utilityService, socketService, addFundsService) {
        this.http = http;
        this.utilityService = utilityService;
        this.socketService = socketService;
        this.addFundsService = addFundsService;
        this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + '/';
        this.TimerExpired = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.SearchDate = moment__WEBPACK_IMPORTED_MODULE_10__();
        this.ElapsTime = 5;
        this.MinimumTime4Extend = 3;
        this.everySecond = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 1000);
        this.paymentNotCompletedInTime = false;
        this.paymentNotCompletedInTimeErrorMessageShow = false;
        /**
       * let purchaseUnits=[
                 {
                   amount: {
                     currency_code: 'USD',
                     value: '0.01',
                     breakdown: {
                       item_total: {
                         currency_code: 'USD',
                         value: '0.01'
                       }
                     }
                   },
                   items: [
                     {
                       name: 'Enterprise Subscription',
                       quantity: '1',
                       category: 'DIGITAL_GOODS',
                       unit_amount: {
                         currency_code: 'USD',
                         value: '0.01',
                       },
                     }
                   ]
                 }
               ]
        */
        //#region Online User List
        this.currentPayPalConfig = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.currentPaymentObj = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.currentPaymentApproved = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.currentPaymentFailed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    sendCurrentPayPalConfig(payPalConfig) {
        this.currentPayPalConfig.next(payPalConfig);
    }
    clearCurrentPayPalConfig() {
        this.currentPayPalConfig.next();
    }
    initCurrentPayPalConfig() {
        this.sendCurrentPayPalConfig(this.payPalConfig);
    }
    getCurrentPayPalConfig() {
        return this.currentPayPalConfig.asObservable();
    }
    sendCurrentPaymentObj(_currentPaymentObj) {
        this.currentPaymentObj.next(_currentPaymentObj);
    }
    clearCurrentPaymentObj() {
        this.currentPaymentObj.next();
    }
    initCurrentPaymentObj() {
        this.sendCurrentPaymentObj(this._currentPaymentObj);
    }
    getCurrentPaymentObj() {
        return this.currentPaymentObj.asObservable();
    }
    sendCurrentPaymentApproved(transactionStatus) {
        this.currentPaymentApproved.next(transactionStatus);
    }
    clearCurrentPaymentApproved() {
        this.currentPaymentApproved.next();
    }
    initCurrentPaymentApproved() {
        this.sendCurrentPayPalConfig(this.transactionStatus);
    }
    getCurrentPaymentApproved() {
        return this.currentPaymentApproved.asObservable();
    }
    sendCurrentPaymentFailed(transactionStatus) {
        this.currentPaymentFailed.next(transactionStatus);
    }
    clearCurrentPaymentFailed() {
        this.currentPaymentFailed.next();
    }
    getCurrentPaymentFailed() {
        return this.currentPaymentFailed.asObservable();
    }
    //#endregion Payment Approval status
    startTimerInit() {
        this.paymentNotCompletedInTime = false;
        this.paymentNotCompletedInTimeErrorMessageShow = false;
        this.stopTimer();
        let _duration = ((this.ElapsTime) + (this.minutes || 0));
        this.searchEndDate = this.SearchDate.add(_duration, "minutes");
        this.startTimer();
    }
    initPaymentConfigStripe(PaymentObj) {
        this._currentPaymentObj = PaymentObj;
        this.sendCurrentPaymentObj(this._currentPaymentObj);
        this.socketService.listenForUpdateStatusOfLastPayment().subscribe(_obj => {
            //this.socketService.emitEventWithNameAndData('request_fund_get_count_sum', this.userId);
            this.sendCurrentPaymentApproved(_obj);
            this.stopTimer();
        });
        this.socketService.sendEventToCheckLastPaymentReturnedSuccessOrFailed(this._currentPaymentObj);
        return this._currentPaymentObj;
    }
    initConfig(purchaseUnits, _transactiActionType, _userId) {
        this.purchaseUnits = purchaseUnits;
        this.amount = purchaseUnits[0].amount.value;
        this.custom_id = purchaseUnits[0].amount.custom_id;
        this.transactionActionType = _transactiActionType;
        this.userId = _userId;
        this.payPalConfig = {
            currency: 'USD',
            // clientId: 'AWQej8JvY8p0D8u8exibTzxRgoyJmpYPpfFow5JGwemPl1TwqD5I021E4dDdJIixQnsNt-FWc7qZYyCj',
            //clientId: 'AW-FXPoxErPamrI9YqZJyhfrSZEt_Y7doZulV2hge-QKrmqcQimbx9U9XJKGT6IX__GVGLcloTx9fOhb',
            clientId: 'AfRY8egQeUtW4fEQ6-pxINgBqRdJSBOX-LaCZtMpDA7ry-vqcZdc9BJ6qoXj8JAhA238sZKLksJMbi09',
            createOrderOnClient: (data) => ({
                intent: 'CAPTURE',
                purchase_units: purchaseUnits
            }),
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: (data, actions) => {
                switch (_transactiActionType) {
                    case _models_role__WEBPACK_IMPORTED_MODULE_7__["TransactionActionType"].funds_add:
                        this.socketService.sendEventToSaveCurrentTransaction(_transactiActionType, data.orderID, _userId, data);
                        break;
                    case _models_role__WEBPACK_IMPORTED_MODULE_7__["TransactionActionType"].session_accepted:
                        this.socketService.sendEventToSaveCurrentTransaction(_transactiActionType, data.orderID, _userId, data);
                        break;
                }
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(details => {
                    switch (_transactiActionType) {
                        case _models_role__WEBPACK_IMPORTED_MODULE_7__["TransactionActionType"].funds_add:
                            this.socketService.sendEventToSaveCurrentTransactionDetails(_transactiActionType, details.id, _userId, details, null);
                            let _funds_obj = {
                                amount: purchaseUnits[0].amount.value,
                                created_by: _userId,
                                transactionId: details.id,
                                description: ''
                            };
                            this.socketService.emitEventWithNameAndData('fund_addnew', _funds_obj);
                            break;
                        case _models_role__WEBPACK_IMPORTED_MODULE_7__["TransactionActionType"].session_accepted:
                        case _models_role__WEBPACK_IMPORTED_MODULE_7__["TransactionActionType"].session_extended:
                            this.socketService.sendEventToSaveCurrentTransactionDetails(_transactiActionType, details.id, _userId, details, null);
                            break;
                    }
                    this.sendCurrentPaymentApproved(details);
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                this.showSuccess = true;
            },
            onCancel: (data, actions) => {
                //console.log('OnCancel', data, actions);
            },
            onError: err => {
                //console.log('OnError', err);
            },
            onClick: (data, actions) => {
                //console.log('onClick', data, actions);
            },
        };
        this.sendCurrentPayPalConfig(this.payPalConfig);
        return this.payPalConfig;
    }
    payFromUsersWallet() {
        let _funds_obj = {
            amount: this.amount,
            created_by: this.userId,
            transactionId: this.custom_id,
            description: 'Paid from wallet'
        };
        let _data = {
            transactionId: '',
            transactionActionType: this.transactionActionType,
            createdBy: this.userId,
            transactionDetailsObj: null,
        };
        this.socketService.deductAmountFromWallet(_funds_obj, _data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(_obj => {
            //this.socketService.emitEventWithNameAndData('request_fund_get_count_sum', this.userId);
            this.sendCurrentPaymentApproved(_obj);
            this.addFundsService.getFundsCountForRequestedUser(this.userId);
        });
    }
    checkoutPaymentForStripe(stripe, paymentObj) {
        var _url2use = this.baseurl + 'api/post/app/payment/checkout';
        return this.http.post(_url2use, paymentObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiTimeout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(session => {
            return stripe.redirectToCheckout({ sessionId: session.id });
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
            // If redirectToCheckout fails due to a browser or network
            // error, you should display the localized error message to your
            // customer using error.message.
            if (result.error) {
                console.log(result.error.message);
            }
        }));
    }
    returnUrChargePaymentForStripel() {
        var _url2use = this.baseurl + 'api/post/app/payment/charges';
        return _url2use;
    }
    chargePaymentForStripe(stripe, paymentObj) {
        var _url2use = this.returnUrChargePaymentForStripel();
        return this.http.post(_url2use, paymentObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiTimeout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response;
        }));
    }
    stopTimer() {
        if (this.subscription4Timer) {
            this.subscription4Timer.unsubscribe();
        }
        this.SearchDate = moment__WEBPACK_IMPORTED_MODULE_10__();
        this.ElapsTime = 5;
        this.hours = null;
        this.minutes = null;
        this.seconds = null;
        this.old_minutes = null;
    }
    startTimer() {
        this.subscription4Timer = this.everySecond.subscribe((seconds) => {
            var currentTime = moment__WEBPACK_IMPORTED_MODULE_10__();
            this.remainingTime = this.searchEndDate.diff(currentTime);
            this.remainingTime = (this.remainingTime / (1000));
            if (this.remainingTime <= 0) {
                this.paymentNotCompletedInTime = true;
                this.paymentNotCompletedInTimeErrorMessageShow = true;
                //stop interval here;
                this.sendCurrentPaymentFailed(true);
            }
            else {
                this.minutes = Math.floor(this.remainingTime / 60);
                if (this.minutes > 59) {
                    this.hours = Math.floor((this.remainingTime / 60) / 60);
                }
                else {
                    this.hours = 0;
                }
                this.minutes = Math.floor((this.remainingTime / 60) - (this.hours * 60));
                this.seconds = Math.floor(this.remainingTime - ((this.minutes * 60) + (this.hours * 60 * 60)));
            }
            if ((this.seconds % 10) === 0) { //this.old_minutes != this.seconds
                //debugger;
                this.old_minutes = this.seconds;
                this.socketService.sendEventToCheckLastPaymentReturnedSuccessOrFailed(this._currentPaymentObj);
            }
            else {
                console.log("303", this.old_minutes, this.minutes);
            }
            if (this.minutes <= this.MinimumTime4Extend) {
                this.paymentNotCompletedInTimeErrorMessageShow = true;
                //limit reached
                //debugger;
            }
        });
    }
};
PaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] },
    { type: _socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"] },
    { type: _add_funds_service__WEBPACK_IMPORTED_MODULE_6__["AddFundsService"] }
];
PaymentService.propDecorators = {
    TimerExpired: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    SearchDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ElapsTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    MinimumTime4Extend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PaymentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
        _socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"],
        _add_funds_service__WEBPACK_IMPORTED_MODULE_6__["AddFundsService"]])
], PaymentService);



/***/ }),

/***/ "sa14":
/*!********************************************************************!*\
  !*** ./src/app/shared/public-profile/public-profile.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n}\r\n.emp-profile{\r\n    padding: 3%;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\r\n    border-radius: 0.5rem;\r\n    background: #fff;\r\n}\r\n.profile-img{\r\n    text-align: center;\r\n}\r\n.profile-img img{\r\n    width: 70%;\r\n    height: 100%;\r\n}\r\n.profile-img .file {\r\n    position: relative;\r\n    overflow: hidden;\r\n    margin-top: -20%;\r\n    width: 70%;\r\n    border: none;\r\n    border-radius: 0;\r\n    font-size: 15px;\r\n    background: #212529b8;\r\n}\r\n.profile-img .file input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n.profile-head h5{\r\n    color: #333;\r\n}\r\n.profile-head h6{\r\n    color: #0062cc;\r\n}\r\n.profile-edit-btn{\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    width: 70%;\r\n    padding: 2%;\r\n    font-weight: 600;\r\n    color: #6c757d;\r\n    cursor: pointer;\r\n}\r\n.proile-rating{\r\n    font-size: 12px;\r\n    color: #818182;\r\n    margin-top: 5%;\r\n}\r\n.proile-rating span{\r\n    color: #495057;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n}\r\n.profile-head .nav-tabs{\r\n    margin-bottom:5%;\r\n}\r\n.profile-head .nav-tabs .nav-link{\r\n    font-weight:600;\r\n    border: none;\r\n}\r\n.profile-head .nav-tabs .nav-link.active{\r\n    border: none;\r\n    border-bottom:2px solid #0062cc;\r\n}\r\n.profile-work{\r\n    padding: 14%;\r\n    margin-top: -15%;\r\n}\r\n.profile-work p{\r\n    font-size: 12px;\r\n    color: #818182;\r\n    font-weight: 600;\r\n    margin-top: 10%;\r\n}\r\n.profile-work a{\r\n    text-decoration: none;\r\n    color: #495057;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n}\r\n.profile-work ul{\r\n    list-style: none;\r\n}\r\n.profile-tab label{\r\n    font-weight: 600;\r\n}\r\n.profile-tab p{\r\n    font-weight: 600;\r\n    color: #0062cc;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpYy1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyREFBMkQ7QUFDL0Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07QUFDVjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoicHVibGljLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcclxufVxyXG4uZW1wLXByb2ZpbGV7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5wcm9maWxlLWltZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZmlsZS1pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ucHJvZmlsZS1pbWcgLmZpbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IC0yMCU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMTI1MjliODtcclxufVxyXG4ucHJvZmlsZS1pbWcgLmZpbGUgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcbi5wcm9maWxlLWhlYWQgaDV7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG4ucHJvZmlsZS1oZWFkIGg2e1xyXG4gICAgY29sb3I6ICMwMDYyY2M7XHJcbn1cclxuLnByb2ZpbGUtZWRpdC1idG57XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByb2lsZS1yYXRpbmd7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzgxODE4MjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5wcm9pbGUtcmF0aW5nIHNwYW57XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnN7XHJcbiAgICBtYXJnaW4tYm90dG9tOjUlO1xyXG59XHJcbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGlua3tcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzAwNjJjYztcclxufVxyXG4ucHJvZmlsZS13b3Jre1xyXG4gICAgcGFkZGluZzogMTQlO1xyXG4gICAgbWFyZ2luLXRvcDogLTE1JTtcclxufVxyXG4ucHJvZmlsZS13b3JrIHB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzgxODE4MjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLnByb2ZpbGUtd29yayBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5wcm9maWxlLXdvcmsgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5wcm9maWxlLXRhYiBsYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnByb2ZpbGUtdGFiIHB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDYyY2M7XHJcbn0iXX0= */");

/***/ }),

/***/ "tFvZ":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipe/data-array-filter.pipe.ts ***!
  \*******************************************************/
/*! exports provided: DataArrayFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataArrayFilterPipe", function() { return DataArrayFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let DataArrayFilterPipe = class DataArrayFilterPipe {
    transform(allDataArr, field, value) {
        if (!allDataArr)
            return [];
        if (!value || value.length == 0)
            return allDataArr;
        return allDataArr.filter(it => {
            let _fieldData = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](it, field);
            if (_fieldData) {
                return _fieldData.toLowerCase().indexOf(value.toLowerCase()) != -1;
            }
            return false;
        });
    }
};
DataArrayFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dataArrayFilter'
    })
], DataArrayFilterPipe);



/***/ }),

/***/ "tZK8":
/*!*****************************************************************!*\
  !*** ./src/app/shared/media-preview/media-preview.component.ts ***!
  \*****************************************************************/
/*! exports provided: MediaPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPreviewComponent", function() { return MediaPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_media_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./media-preview.component.html */ "Xbsl");
/* harmony import */ var _media_preview_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-preview.component.css */ "pFHx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/role */ "z56L");






let MediaPreviewComponent = class MediaPreviewComponent {
    constructor(dialogRef, data, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.mediaSrc = null;
        this.mimeType = null;
        this.MediaTypes = src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["MediaTypes"];
        if (data && data.mediaSrc) {
            this.mediaSrc = data.mediaSrc;
            this.mimeType = data.mimeType || src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["MediaTypes"].image;
        }
        else {
            this.closeDialog();
        }
    }
    closeDialog() {
        this.dialogRef.close({ event: 'close', data: true });
    }
    ngOnInit() {
    }
};
MediaPreviewComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
MediaPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-media-preview',
        template: _raw_loader_media_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_media_preview_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], MediaPreviewComponent);



/***/ }),

/***/ "uJHj":
/*!*****************************************************!*\
  !*** ./src/app/shared/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "gESH");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "+7nW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _profile_portfolio_profile_portfolio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../profile-portfolio/profile-portfolio.component */ "hlmN");

















const { overwrite, getNames } = __webpack_require__(/*! country-list */ "pHmk");
overwrite([{
        code: 'US',
        name: 'USA'
    }]);
const uploadAPI = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl + '/api/post/upload/assetdata';
const uploadAccessUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl + '/';
let ProfileComponent = class ProfileComponent {
    constructor(dialog, http, formBuilder, router, authenticationService, userService, alertService, appRouterService, route, utilityService) {
        this.dialog = dialog;
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.appRouterService = appRouterService;
        this.route = route;
        this.utilityService = utilityService;
        this.loading = false;
        this.submitted = false;
        this.Role = src_app_models__WEBPACK_IMPORTED_MODULE_5__["Role"];
        this.lblmyRKIMediaText = 'Choose RKI document';
        this.lblmyPassportMediaText = 'Choose Passport';
        this.lblmyDLMediaText = 'Choose Driving Licence';
        this.lblmyHICardMediaText = 'Choose Health Insurance Card';
        this.Roles = Object.keys(src_app_models__WEBPACK_IMPORTED_MODULE_5__["Role"]);
        this.countrylist = null;
        this.fileData = null;
        this.fileData4Profile = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
        this.myProfileFiles = [];
        this.selfProfileUrlPendingForUpload = false;
        this.portfolioDataArr = [];
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth();
        this.day = this.now.getDay();
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__({ year: this.year - 100, month: this.month, day: this.day }).format('YYYY-MM-DD');
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_10__({ year: this.year - 18, month: this.month, day: this.day }).format('YYYY-MM-DD');
        this.Data = [
            { name: 'Communicator', value: 'communicator' },
            { name: 'Business', value: 'business' },
            { name: 'Sports', value: 'sports' },
            { name: 'Dance', value: 'dance' },
            { name: 'Sing', value: 'sing' },
            { name: 'Repair Cars', value: 'repair_cars' },
            { name: 'Repair Computers', value: 'repair_computers' },
            { name: 'Can you transport a hit/ run accident pet', value: 'can_you_transport_a_hit_run_accident_pet' }
        ];
        // redirect to home if already logged in
        if (!this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter('');
        }
        this.countrylist = getNames();
        this.initForm();
        this.userService.getUserById(this.authenticationService.currentUserValue._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.showEditingForm(data["data"]);
                //this.alertService.success(data['message'], true);
                this.loading = false;
                this.isOtpSent = true;
                //this.element_btn_click_profile_skills_verification.click();
            }
            else {
                //alert(JSON.stringify(data['message']));
                this.alertService.error(data['message']);
                this.loading = false;
                this.isOtpSent = false;
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
            this.isOtpSent = false;
            this.appRouterService.appRouter('');
        });
        this.userService.getUserProfilePortFolioByUserId(this.authenticationService.currentUserValue._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                this.portfolioDataArr = data["data"];
                this.loading = false;
            }
            else {
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
    showEditingForm(_userObj) {
        let _birthDate = null;
        if (_userObj.birthDate) {
            _birthDate = moment__WEBPACK_IMPORTED_MODULE_10__(_userObj.birthDate).format('YYYY-MM-DD');
        }
        this.profileForm = this.formBuilder.group({
            _id: [_userObj._id || ''],
            role: [_userObj.role || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            appPermissions: this.formBuilder.array(_userObj.appPermissions || []),
            firstName: [_userObj.firstName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            middleName: [_userObj.middleName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: [_userObj.lastName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            userName: [_userObj.userName || ''],
            address: [_userObj.address || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            emailAddress: [_userObj.emailAddress || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            acceptnewUpdates: [_userObj.acceptnewUpdates || ''],
            acceptTerms: [_userObj.acceptTerms || ''],
            cityCode: [_userObj.cityCode || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            birthDate: [_userObj.birthDate || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nationality: [_userObj.nationality || ''],
            residence: [_userObj.residence || ''],
            birthPlace: [_userObj.birthPlace || ''],
            promoCode: [_userObj.promoCode || ''],
            mobileNo: [_userObj.mobileNo || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gender: [_userObj.gender || ''],
            country: [_userObj.country || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            birthDateCustomised: [_birthDate || ''],
            education: [_userObj.education || ''],
            additionalCertification: [{}],
            creditCards: [{}],
            skillSets: this.formBuilder.array(_userObj.skillSets || []),
            academicDocuments: this.formBuilder.array(_userObj.academicDocuments || []),
            employmentVerifications: this.formBuilder.array(_userObj.employmentVerifications || []),
            externalAppLinks: this.formBuilder.array(_userObj.externalAppLinks || [], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            hearAboutUs: [_userObj.hearAboutUs || ''],
            app_doc_type: [_userObj.app_doc_type || ''],
            isVerified: [_userObj.isVerified || ''],
            myProfileMedia: this.formBuilder.array(_userObj.myProfileMedia || []),
            myProfileDetails: [_userObj.myProfileDetails || ''],
            userType: [_userObj.userType || ''],
            myPassportMedia: this.formBuilder.array(_userObj.myPassportMedia || [], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            myPassportNumber: [_userObj.myPassportNumber || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            myDLMedia: this.formBuilder.array(_userObj.myDLMedia || [], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            myDLNumber: [_userObj.myDLNumber || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            myHICardMedia: this.formBuilder.array(_userObj.myHICardMedia || [], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            cprNumber: [_userObj.cprNumber || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            myRKIMedia: this.formBuilder.array(_userObj.myRKIMedia || []),
            isRKIRegistered: [_userObj.isRKIRegistered || false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            accountName: [_userObj.accountName || ''],
            accountNumber: [_userObj.accountNumber || ''],
            bankName: [_userObj.bankName || ''],
            regNumber: [_userObj.regNumber || ''],
            branchDetails: [_userObj.branchDetails || ''],
            mobilePayment: [_userObj.mobilePayment || ''],
            bitCoinWalletID: [_userObj.bitCoinWalletID || ''],
            revolutWalletID: [_userObj.revolutWalletID || ''],
            skrillWalletID: [_userObj.skrillWalletID || ''],
            paypalWalletID: [_userObj.paypalWalletID || ''],
            bic: [_userObj.bic || ''],
            accountType: [_userObj.accountType || ''],
            iban: [_userObj.iban || ''],
            accountOtherDetails1: [_userObj.accountOtherDetails1 || ''],
            accountOtherDetails2: [_userObj.accountOtherDetails2 || ''],
            accountOtherDetails3: [_userObj.accountOtherDetails3 || ''],
            accountOtherDetails4: [_userObj.accountOtherDetails4 || ''],
            selfProfileUrl: [_userObj.selfProfileUrl || ''],
        });
        this._role = _userObj.role;
        this.element_btn_click_profile_basic_details = document.getElementById('btn_click_profile_basic_details');
        this.element_btn_click_profile_skills_verification = document.getElementById('btn_click_profile_skills_verification');
        this.element_btn_click_profile_portfolio = document.getElementById('btn_click_profile_portfolio');
        this.element_btn_click_profile_banking = document.getElementById('btn_click_profile_banking');
        this.onClickRoleChange(this._role);
        this.onClickGenderChange(_userObj.gender || 'male');
    }
    initForm() {
        this.appName = 'facebook';
        this.profileForm = this.formBuilder.group({
            _id: [''],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            appPermissions: this.formBuilder.array([]),
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            userName: [''],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            acceptnewUpdates: [''],
            acceptTerms: [''],
            cityCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            birthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nationality: [''],
            residence: [''],
            birthPlace: [''],
            promoCode: [''],
            mobileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gender: [''],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            birthDateCustomised: [''],
            education: [''],
            additionalCertification: [{}],
            creditCards: [{}],
            skillSets: this.formBuilder.array([]),
            academicDocuments: this.formBuilder.array([]),
            employmentVerifications: this.formBuilder.array([]),
            externalAppLinks: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            hearAboutUs: [''],
            app_doc_type: [''],
            isVerified: [''],
            myProfileMedia: this.formBuilder.array([]),
            myProfileDetails: [''],
            userType: [''],
            myPassportMedia: this.formBuilder.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            myPassportNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            myDLMedia: this.formBuilder.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            myDLNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            myHICardMedia: this.formBuilder.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            cprNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            myRKIMedia: this.formBuilder.array([]),
            isRKIRegistered: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            accountName: [''],
            accountNumber: [''],
            bankName: [''],
            regNumber: [''],
            branchDetails: [''],
            mobilePayment: [''],
            bitCoinWalletID: [''],
            revolutWalletID: [''],
            skrillWalletID: [''],
            paypalWalletID: [''],
            bic: [''],
            accountType: [''],
            iban: [''],
            accountOtherDetails1: [''],
            accountOtherDetails2: [''],
            accountOtherDetails3: [''],
            accountOtherDetails4: [''],
            selfProfileUrl: [''],
        });
        this._role = this.authenticationService.currentUserValue.role;
        this.element_btn_click_profile_basic_details = document.getElementById('btn_click_profile_basic_details');
        this.element_btn_click_profile_skills_verification = document.getElementById('btn_click_profile_skills_verification');
        this.element_btn_click_profile_portfolio = document.getElementById('btn_click_profile_portfolio');
        this.element_btn_click_profile_banking = document.getElementById('btn_click_profile_banking');
    }
    clickOnGoToNext(_step) {
        this.submitted = true;
        switch (_step) {
            case 1:
                this.element_btn_click_profile_basic_details.click();
            case 2:
                this.element_btn_click_profile_skills_verification.click();
                break;
            case 3:
                if (this._role == src_app_models__WEBPACK_IMPORTED_MODULE_5__["Role"].Borrower) {
                    this.element_btn_click_profile_banking.click();
                }
                else {
                    this.element_btn_click_profile_portfolio.click();
                }
                break;
            case 4:
                this.element_btn_click_profile_portfolio.click();
                break;
        }
    }
    ngOnInit() {
    }
    // convenience getter for easy access to form fields
    get f() { return this.profileForm.controls; }
    onClickRoleChange(__role) {
        if (__role) {
            this.profileForm.get('role').setValue(__role);
        }
    }
    onClickGenderChange(_gender) {
        if (_gender) {
            this.profileForm.get('gender').setValue(_gender);
        }
    }
    onProfileUpdateSubmit() {
        if (this.selfProfileUrlPendingForUpload) {
            this.alertService.error("Please Save Profile First");
            return;
        }
        this.submitted = true;
        if (this.profileForm.invalid) {
            this.alertService.error("Please Provide all data");
            return;
        }
        let _birthDate = this.profileForm.get('birthDateCustomised').value;
        if (_birthDate) {
            this.profileForm.get('birthDate').setValue(Date.parse(moment__WEBPACK_IMPORTED_MODULE_10__(_birthDate, 'YYYY-MM-DD').format('YYYY-MM-DD')));
        }
        if (this.utilityService._returnT_4undefined(this.profileForm.get('userType').value, false)) {
            switch (this.profileForm.get('role').value) {
                case src_app_models__WEBPACK_IMPORTED_MODULE_5__["Role"].Lender:
                    this.profileForm.get('userType').setValue(src_app_models__WEBPACK_IMPORTED_MODULE_5__["UserType"].new_lender);
                    break;
                case src_app_models__WEBPACK_IMPORTED_MODULE_5__["Role"].Borrower:
                    this.profileForm.get('userType').setValue(src_app_models__WEBPACK_IMPORTED_MODULE_5__["UserType"].new_borrower);
                    break;
            }
        }
        this.userService.updateUserById(this.profileForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                localStorage.removeItem('currentUser');
                //this.authenticationService.clearCurrentUserObj();
                localStorage.setItem('currentUser', JSON.stringify(data['data']));
                this.authenticationService.sendCurrentUserObj(data['data']);
                this.alertService.success('Your Profile is Updated successfully', true);
                this.appRouterService.appRouter(this.authenticationService.currentUserValue);
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
    date(ev) {
        console.log(this.minDate);
        console.log(ev.target.value);
    }
    onCheckboxChange(e) {
        const checkArray = this.profileForm.get('skillSets');
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
    onRKIChange(addedTremovedF) {
        this.profileForm.get('isRKIRegistered').setValue(addedTremovedF);
    }
    onInitRKICheckedValue() {
        return this.profileForm.get('isRKIRegistered').value;
    }
    onSkillSetsChange(skill, addedTremovedF) {
        const checkArray = this.profileForm.get('skillSets');
        if (addedTremovedF) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](skill));
        }
        else {
            let i = 0;
            checkArray.controls.forEach((item) => {
                if (item.value == skill) {
                    checkArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    onInitSetCheckedValue(skill) {
        const checkArray = this.profileForm.get('skillSets');
        return (checkArray.value.indexOf(skill) > -1);
    }
    fileProgressAssetDocs(fileInput, lblId) {
        this.fileData = fileInput.target.files[0];
        this.element_ctrllblId = document.getElementById(lblId);
        this.element_ctrllblId.innerText = this[lblId + 'Text'] + '-' + this.fileData.name;
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview();
    }
    preview() {
        // Show preview 
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            this.previewUrl = reader.result;
        };
    }
    onUploadAcademicDocs() {
        const checkArray = this.profileForm.get('academicDocuments');
        if (checkArray.length >= 5) {
            this.alertService.error("Upload MAX limit reached.");
            return;
        }
        if (!this.fileData) {
            this.alertService.error("Select file first.");
            return;
        }
        const formData = new FormData();
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            this.alertService.error("Select Image file only.");
            return;
        }
        formData.append('files', this.fileData);
        formData.append('documentId', this.authenticationService.currentUserValue._id);
        this.fileUploadProgress = '0%';
        let _temp_currentFile = {
            name: this.fileData.name,
            type: this.fileData.type,
            size: this.fileData.size,
            url: null
        };
        this.http.post(uploadAPI, formData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(events => {
            if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].UploadProgress) {
                this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                console.log(this.fileUploadProgress);
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].Response) {
                this.fileUploadProgress = '';
                console.log(events.body);
                //alert('SUCCESS !!');
                this.fileData = null;
                this.alertService.success('Uploaded Successfully !!', true);
                let _uploadedUrl = events.body["data"].path;
                if (lodash__WEBPACK_IMPORTED_MODULE_12__["startsWith"](_uploadedUrl, '/')) {
                    _uploadedUrl = _uploadedUrl.substr(1);
                }
                this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
                _temp_currentFile.url = this.uploadedFilePath;
                this.onacademicDocumentsUpdate(true, null, _temp_currentFile);
            }
        });
    }
    onacademicDocumentsUpdate(_addT, _index, _temp_currentFile) {
        const checkArray = this.profileForm.get('academicDocuments');
        if (lodash__WEBPACK_IMPORTED_MODULE_12__["isNaN"](parseInt(_index))) {
            //_index=0;
            _index = checkArray.length;
        }
        if (_addT) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_temp_currentFile));
        }
        else {
            if (parseInt(_index) >= 0) {
                checkArray.removeAt(_index);
            }
            else {
                let i = 0;
                checkArray.controls.forEach((item) => {
                    if (item.value.url == _temp_currentFile.url) {
                        checkArray.removeAt(i);
                        return;
                    }
                    i++;
                });
            }
        }
    }
    onSelectMyProfileMedia(event) {
        console.log('371 :: Added', event);
        this.myProfileFiles.push(...event.addedFiles);
        console.log('373', this.myProfileFiles);
    }
    onRemoveMyProfileMedia(event) {
        console.log('378 :: Removed', event);
        this.myProfileFiles.splice(this.myProfileFiles.indexOf(event), 1);
    }
    onUploadMyProfileMedia() {
        const checkArray = this.profileForm.get('myProfileMedia');
        if (checkArray.length >= 10) {
            this.alertService.error("Upload MAX limit reached.");
            return;
        }
        for (let _index in this.myProfileFiles) {
            let currentFile = this.myProfileFiles[_index];
            if (!currentFile) {
                this.alertService.error("Select file first.");
                continue;
            }
            const formData = new FormData();
            formData.append('files', currentFile);
            formData.append('documentId', this.authenticationService.currentUserValue._id);
            this.fileUploadProgress = '0%';
            let _temp_currentFile = {
                name: currentFile.name,
                type: currentFile.type,
                size: currentFile.size,
                url: null
            };
            this.http.post(uploadAPI, formData, {
                reportProgress: true,
                observe: 'events'
            }).subscribe(events => {
                if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].UploadProgress) {
                    this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                    console.log(this.fileUploadProgress);
                }
                else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].Response) {
                    this.fileUploadProgress = '';
                    console.log(events.body);
                    //alert('SUCCESS !!');
                    lodash__WEBPACK_IMPORTED_MODULE_12__["pullAt"](this.myProfileFiles, _index);
                    this.alertService.success('Uploaded Successfully !!', true);
                    let _uploadedUrl = events.body["data"].path;
                    if (lodash__WEBPACK_IMPORTED_MODULE_12__["startsWith"](_uploadedUrl, '/')) {
                        _uploadedUrl = _uploadedUrl.substr(1);
                    }
                    this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
                    _temp_currentFile.url = this.uploadedFilePath;
                    this.onMyProfileMediaUpdate(true, null, _temp_currentFile);
                }
            });
        }
    }
    onMyProfileMediaUpdate(_addT, _index, _temp_currentFile) {
        const checkArray = this.profileForm.get('myProfileMedia');
        if (lodash__WEBPACK_IMPORTED_MODULE_12__["isNaN"](parseInt(_index))) {
            //_index=0;
            _index = checkArray.length;
        }
        if (_addT) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_temp_currentFile));
        }
        else {
            if (parseInt(_index) >= 0) {
                checkArray.removeAt(_index);
            }
            else {
                let i = 0;
                checkArray.controls.forEach((item) => {
                    if (item.value.url == _temp_currentFile.url) {
                        checkArray.removeAt(i);
                        return;
                    }
                    i++;
                });
            }
        }
    }
    openFileUploaderForProfile() {
        this.element_ctrlUploadProfile = document.getElementById('ctrlUploadProfile');
        this.element_ctrlUploadProfile.click();
    }
    fileProgressForProfile(fileInput) {
        this.fileData4Profile = fileInput.target.files[0];
        this.previewForProfile();
    }
    previewForProfile() {
        // Show preview 
        var mimeType = this.fileData4Profile.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData4Profile);
        reader.onload = (_event) => {
            this.profileForm.get('selfProfileUrl').setValue(reader.result);
            this.selfProfileUrlPendingForUpload = true;
        };
    }
    onUploadForProfile() {
        if (!this.fileData4Profile) {
            this.alertService.error("Select file first.");
            return;
        }
        var mimeType = this.fileData4Profile.type;
        if (mimeType.match(/image\/*/) == null) {
            this.alertService.error("Select Image file only.");
            return;
        }
        const formData = new FormData();
        formData.append('files', this.fileData4Profile);
        formData.append('documentId', this.authenticationService.currentUserValue._id);
        this.fileUploadProgress = '0%';
        this.http.post(uploadAPI, formData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(events => {
            if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].UploadProgress) {
                this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                console.log(this.fileUploadProgress);
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].Response) {
                this.fileUploadProgress = '';
                console.log(events.body);
                //alert('SUCCESS !!');
                this.fileData4Profile = null;
                this.alertService.success('Uploaded Successfully !!', true);
                let _uploadedUrl = events.body["data"].path;
                if (lodash__WEBPACK_IMPORTED_MODULE_12__["startsWith"](_uploadedUrl, '/')) {
                    _uploadedUrl = _uploadedUrl.substr(1);
                }
                this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
                this.profileForm.get('selfProfileUrl').setValue(this.uploadedFilePath);
                this.selfProfileUrlPendingForUpload = false;
            }
        });
    }
    addExternalAppLinks(_addT, _index, appName, appLink) {
        const checkArray = this.profileForm.get('externalAppLinks');
        if (lodash__WEBPACK_IMPORTED_MODULE_12__["isNaN"](parseInt(_index))) {
            //_index=0;
            _index = checkArray.length;
        }
        appName = lodash__WEBPACK_IMPORTED_MODULE_12__["trim"](lodash__WEBPACK_IMPORTED_MODULE_12__["toLower"](appName));
        if (!appName || !appLink) {
            this.alertService.error("App and Link both are required");
            return;
        }
        var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        var regex = new RegExp(expression);
        if (!regex.test(appLink)) {
            this.alertService.error("App Link is not valid");
            return;
        }
        let _extenalAppExistsT = false;
        checkArray.controls.forEach((item) => {
            if (item.value.appName == appName) {
                _extenalAppExistsT = true;
                return;
            }
        });
        if (_extenalAppExistsT) {
            this.alertService.error("External App already exist, can not add duplicate entry. Please remove existing or update current");
            return;
        }
        let _obj2push = {
            appName: appName, appLink: appLink
        };
        //this.appName = '';
        this.appLink = '';
        if (_addT) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_obj2push));
            this.alertService.success("External App added");
        }
        else {
            if (parseInt(_index) >= 0) {
                checkArray.removeAt(_index);
            }
            else {
                let i = 0;
                checkArray.controls.forEach((item) => {
                    if (item.value.appName == appName) {
                        checkArray.removeAt(i);
                        return;
                    }
                    i++;
                });
            }
        }
    }
    addEditPortFolio() {
        console.log('95', this.authenticationService.currentUserValue);
        const dialogRef = this.dialog.open(_profile_portfolio_profile_portfolio_component__WEBPACK_IMPORTED_MODULE_16__["ProfilePortfolioComponent"], {
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            hasBackdrop: true,
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
        });
    }
    //#region upload RKI document
    onUploadCleanAssetDocs(_keyName) {
        if (!_keyName) {
            return;
        }
        const checkArray = this.profileForm.get(_keyName);
        let _index = null;
        if (lodash__WEBPACK_IMPORTED_MODULE_12__["isNaN"](parseInt(_index))) {
            _index = checkArray.length - 1;
        }
        if (parseInt(_index) >= 0) {
            checkArray.removeAt(_index);
        }
    }
    onUploadAssetDocs(_keyName) {
        if (!_keyName) {
            return;
        }
        const checkArray = this.profileForm.get(_keyName);
        if (checkArray.length >= 1) {
            this.alertService.error("Upload MAX limit reached.");
            return;
        }
        if (!this.fileData) {
            this.alertService.error("Select file first.");
            return;
        }
        const formData = new FormData();
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            this.alertService.error("Select Image file only.");
            return;
        }
        formData.append('files', this.fileData);
        formData.append('documentId', this.authenticationService.currentUserValue._id);
        this.fileUploadProgress = '0%';
        let _temp_currentFile = {
            name: this.fileData.name,
            type: this.fileData.type,
            size: this.fileData.size,
            url: null
        };
        this.element_ctrllblId = document.getElementById('lbl' + _keyName);
        this.element_ctrllblId.innerText = this['lbl' + _keyName + 'Text'];
        this.http.post(uploadAPI, formData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(events => {
            if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].UploadProgress) {
                this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                console.log(this.fileUploadProgress);
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].Response) {
                this.fileUploadProgress = '';
                console.log(events.body);
                //alert('SUCCESS !!');
                this.fileData = null;
                this.alertService.success('Uploaded Successfully !!', true);
                let _uploadedUrl = events.body["data"].path;
                if (lodash__WEBPACK_IMPORTED_MODULE_12__["startsWith"](_uploadedUrl, '/')) {
                    _uploadedUrl = _uploadedUrl.substr(1);
                }
                this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
                _temp_currentFile.url = this.uploadedFilePath;
                this.onAssetDocumentsUpdate(true, null, _temp_currentFile, _keyName);
            }
        });
    }
    onAssetDocumentsUpdate(_addT, _index, _temp_currentFile, _keyName) {
        if (!_keyName) {
            return;
        }
        const checkArray = this.profileForm.get(_keyName);
        if (lodash__WEBPACK_IMPORTED_MODULE_12__["isNaN"](parseInt(_index))) {
            //_index=0;
            _index = checkArray.length;
        }
        if (_addT) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_temp_currentFile));
        }
        else {
            if (parseInt(_index) >= 0) {
                checkArray.removeAt(_index);
            }
            else {
                let i = 0;
                checkArray.controls.forEach((item) => {
                    if (item.value.url == _temp_currentFile.url) {
                        checkArray.removeAt(i);
                        return;
                    }
                    i++;
                });
            }
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"]])
], ProfileComponent);



/***/ }),

/***/ "vAC1":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lender/modal/modal-applied-session-display.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row\">\r\n    <div class=\"col-xl-11 col-10\">\r\n        <h4 class=\"mb-3 text-black-50\" i18n>\r\n            Borrowers Requests for {{utilityService.returnLoanType(LoanObj.loanType)}} of kr {{LoanObj.loanAmount}}\r\n        </h4>\r\n    </div>\r\n    <div class=\"col-xl-1 col-2\">\r\n        <i class=\"icon-close float-right\" mat-button mat-dialog-close></i>\r\n    </div>\r\n</div> -->\r\n<h2 mat-dialog-title class=\"text-primary\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-11 col-10\">\r\n            <h4 class=\"mb-3 text-black-50\" i18n>\r\n                Borrowers Requests for {{utilityService.returnLoanType(LoanObj.loanType)}} of kr {{LoanObj.loanAmount}}\r\n            </h4>\r\n        </div>\r\n        <div class=\"col-xl-1 col-2\">\r\n            <i class=\"icon-close float-right\" mat-button mat-dialog-close></i>\r\n        </div>\r\n    </div>\r\n</h2>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12 col-12\">\r\n            <div id=\"accordion\">\r\n                <div class=\"card shadow-sm mb-3\" *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers;\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"collapsed card-link\" data-toggle=\"collapse\"\r\n                            [attr.href]=\"'#collapse_' + LoanApplyObj.borrowerId\" i18n>\r\n                            {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers, false,'firstName')}}\r\n                            <label class=\"badge font-weight-light text-capitalize text-cap\"\r\n                                [ngClass]=\"{'badge-success': (LoanApplyObj.status==SessionStatus.Accepted || LoanApplyObj.status==SessionStatus.Active || LoanApplyObj.status==SessionStatus.Completed || LoanApplyObj.status==SessionStatus.OngoingInitiated  || LoanApplyObj.status==SessionStatus.OngoingAccepted  || LoanApplyObj.status==SessionStatus.Ongoing), 'badge-danger': (LoanApplyObj.status==SessionStatus.Rejected || LoanApplyObj.status==SessionStatus.RejectedOngoing || LoanApplyObj.status==SessionStatus.Suspended), 'badge-info': ( LoanApplyObj.status==null || LoanApplyObj.status=='' || LoanApplyObj.status==SessionStatus.Pending)}\">\r\n                                {{\r\n                                utilityService.returnStringWithReplacing_(LoanApplyObj.status || SessionStatus.Pending) |\r\n                                titlecase }}\r\n                            </label>\r\n                            <label class=\"badge badge-info font-weight-light text-capitalize text-cap float-right\">\r\n                                #{{LoanApplyObj.loanApplyNumber}}\r\n                            </label>\r\n                        </a>\r\n                    </div>\r\n                    <div [attr.id]=\"'collapse_' + LoanApplyObj.borrowerId\" class=\"collapse show\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-6 col-12\">\r\n                                    <h5 class=\"card-title\" i18n>Proposed Amount: <badge class=\"badge badge-primary\">\r\n                                            {{LoanApplyObj.proposedLoanAmount || 'NA'}}</badge>\r\n                                    </h5>\r\n                                </div>\r\n                                <div class=\"col-xl-6 col-12\">\r\n                                    <h5 *ngIf=\"LoanApplyObj.loanInsuranceRequired\" class=\"card-title float-right\" i18n>Applied for Insurance with Amount: <badge\r\n                                            class=\"badge badge-primary\">\r\n                                            {{LoanApplyObj.loanInsuranceAmount || 'NA'}}</badge>\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\"\r\n                                *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender && returnSessionApplyStatus(LoanApplyObj)==SessionStatus.Accepted\">\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"form-check-inline\">\r\n                                            <div class=\"custom-control custom-checkbox\">\r\n                                                <input [(ngModel)]=\"LoanApplyObjCurrent.isLoanAmountPaidByLender\"\r\n                                                    name=\"isLoanAmountPaidByLender\" id=\"isLoanAmountPaidByLender\"\r\n                                                    type=\"checkbox\" class=\"custom-control-input\" [value]=\"true\"\r\n                                                    [checked]=\"LoanApplyObjCurrent.isLoanAmountPaidByLender\">\r\n                                                <label for=\"isLoanAmountPaidByLender\" class=\"custom-control-label\" i18n>\r\n                                                    Is Loan Amount Transfered to Borrower </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"transactionIdForLoanAmountPaidByLender\" i18n>TransactionId/Payment Ref.\r\n                                            ID</label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"TransactionId/Payment Ref. ID\"\r\n                                            [(ngModel)]=\"LoanApplyObjCurrent.transactionIdForLoanAmountPaidByLender\">\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group\">\r\n    \r\n                                        <label for=\"transactionOnForLoanAmountPaidByLenderCustomised\" i18n>\r\n                                            Transaction Date\r\n                                        </label>\r\n                                        <input type=\"date\" [(ngModel)]=\"transactionOnForLoanAmountPaidByLenderCustomised\"\r\n                                            class=\"form-control\" />\r\n    \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"usr\" i18n>Transaction Description</label>\r\n                                        <input type=\"transactionDescriptionForLoanAmountPaidByLender\" class=\"form-control\"\r\n                                            placeholder=\"Description\"\r\n                                            [(ngModel)]=\"LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLender\">\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <hr>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <button class=\"btn btn-primary btn-sm float-right\"\r\n                                        (click)=\"paymentDoneByLender(LoanApplyObj)\" i18n>\r\n                                        <i class=\"icon-cloud-up\"></i>&nbsp;Update\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div class=\"row\" *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionIdForLoanAmountPaidByLender\" i18n>TransactionId/Payment Ref.\r\n                                            ID</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.transactionIdForLoanAmountPaidByLender}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionOnForLoanAmountPaidByLender\" i18n>Transaction Date</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.transactionOnForLoanAmountPaidByLender | date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"createdOnForLoanAmountPaidByLender\" i18n>Updated On</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.createdOnForLoanAmountPaidByLender | date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12\">\r\n                                    <p class=\"mb-2\" for=\"transactionDescriptionForLoanAmountPaidByLender\" i18n>Description:\r\n                                    </p>\r\n                                    <div class=\"text-black-50\" i18n>\r\n                                        {{LoanApplyObj.transactionDescriptionForLoanAmountPaidByLender}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n    \r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionOnForLoanAmountPaidByLenderConfirmByBorrower\"\r\n                                            i18n>Transaction\r\n                                            Date</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.transactionOnForLoanAmountPaidByLenderConfirmByBorrower |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"createdOnForLoanAmountPaidByLender\" i18n>Updated On</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.createdOnForLoanAmountPaidByLenderConfirmByBorrower |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <p class=\"mb-2\" for=\"transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower\"\r\n                                        i18n>\r\n                                        Description:</p>\r\n                                    <div class=\"text-black-50\" i18n>\r\n                                        {{LoanApplyObj.transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\"\r\n                                *ngIf=\"LoanApplyObjCurrent4Installment.installmentKey && returnSessionApplyStatus(LoanApplyObj)==SessionStatus.Accepted  && LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\r\n    \r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"installmentKey\" i18n>Installment For</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.installmentKey}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionIdForLoanAmountPaidToLender\" i18n>TransactionId/Payment Ref.\r\n                                            ID</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionOnForLoanAmountPaidToLender\" i18n>Transaction\r\n                                            Date</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"createdOnForLoanAmountPaidToLender\" i18n>Updated On</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <p class=\"mb-2\" for=\"transactionDescriptionForLoanAmountPaidToLender\" i18n>\r\n                                        Note:</p>\r\n                                    <div class=\"text-black-50\" i18n>\r\n                                        {{LoanApplyObjCurrent4Installment.transactionDescriptionForLoanAmountPaidToLender}}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"row\"\r\n                                        *ngIf=\"LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender\">\r\n                                        <div class=\"col-xl-4 col-12\">\r\n                                            <div class=\"form-group border-right\">\r\n                                                <label for=\"transactionOnForLoanAmountPaidToLenderConfirmByLender\"\r\n                                                    i18n>Confirmation: Transaction Date</label>\r\n                                                <h4 class=\"text-primary\" i18n>\r\n                                                    {{LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender\r\n                                                    |\r\n                                                    date:'dd-MMM-YYYY'}}\r\n                                                </h4>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-4 col-12\">\r\n                                            <div class=\"form-group border-right\">\r\n                                                <label for=\"createdOnForLoanAmountPaidToLenderConfirmByLender\"\r\n                                                    i18n>Confirmation:\r\n                                                    Updated On</label>\r\n                                                <h4 class=\"text-primary\" i18n>\r\n                                                    {{LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender\r\n                                                    |\r\n                                                    date:'dd-MMM-YYYY'}}\r\n                                                </h4>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-4 col-12\">\r\n                                            <p class=\"mb-2\"\r\n                                                for=\"transactionDescriptionForLoanAmountPaidToLenderConfirmByLender\" i18n>\r\n                                                Confirmation: Note:</p>\r\n                                            <div class=\"text-black-50\" i18n>\r\n                                                {{LoanApplyObjCurrent4Installment.transactionDescriptionForLoanAmountPaidToLenderConfirmByLender}}\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-12 col-12\">\r\n                                            <button class=\"btn btn-primary btn-sm float-right\"\r\n                                                (click)=\"LoanApplyObjCurrent4Installment={};\" i18n>\r\n                                                <i class=\"icon-eye\"></i>&nbsp;Hide\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"row\"\r\n                                        *ngIf=\"!LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender\">\r\n                                        <div class=\"col-xl-4 col-12\">\r\n                                            <div class=\"form-group\">\r\n    \r\n                                                <label for=\"transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised\"\r\n                                                    i18n>\r\n                                                    Transaction Date\r\n                                                </label>\r\n                                                <input type=\"date\"\r\n                                                    [(ngModel)]=\"transactionOnForLoanAmountPaidToLenderConfirmByLenderCustomised\"\r\n                                                    class=\"form-control\" />\r\n    \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-12 col-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"transactionDescriptionForLoanAmountPaidToLenderConfirmByLender\"\r\n                                                    i18n>Note.</label>\r\n                                                <input text=\"text\"\r\n                                                    name=\"transactionDescriptionForLoanAmountPaidToLenderConfirmByLender\"\r\n                                                    class=\"form-control\" placeholder=\"Description\"\r\n                                                    [(ngModel)]=\"LoanApplyObjCurrent4Installment.transactionDescriptionForLoanAmountPaidToLenderConfirmByLender\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <br>\r\n                                        <hr>\r\n                                        <div class=\"col-xl-12 col-12\">\r\n                                            <button class=\"btn btn-primary btn-sm float-right\"\r\n                                                (click)=\"paymentDoneToLenderConfirmByLender(LoanApplyObj)\" i18n>\r\n                                                <i class=\"icon-cloud-up\"></i>&nbsp;Update\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12 col-12 mt-3\">\r\n                                    <div class=\"table-responsive table shadow-sm\">\r\n                                        <table class=\"table mb-0\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th scope=\"col\" i18n>EMI Date</th>\r\n                                                    <th scope=\"col\" i18n>Payment</th>\r\n                                                    <th *ngIf=\"returnSessionApplyStatus(LoanApplyObj)==SessionStatus.Accepted\"\r\n                                                        scope=\"col\" i18n>\r\n                                                        <!-- && LoanApplyObj.borrowerId==authenticationService.currentUserValue._id-->\r\n                                                        Payment Status\r\n                                                    </th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr\r\n                                                    *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                                                    <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                                        | date:'dd-MMM-YYYY'}}</td>\r\n                                                    <td *ngIf=\"!LoanApplyObj.calculatedMonthlyAmountForEMI\">kr\r\n                                                        {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n                                                    <td *ngIf=\"LoanApplyObj.calculatedMonthlyAmountForEMI\">kr\r\n                                                        <span\r\n                                                            style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\r\n                                                            {{LoanObj.calculatedMonthlyAmountForEMI}}\r\n                                                        </span>\r\n                                                        &nbsp;\r\n                                                        <span>\r\n                                                            {{LoanApplyObj.calculatedMonthlyAmountForEMI}}\r\n                                                        </span>\r\n                                                    </td>\r\n                                                    <td\r\n                                                        *ngIf=\"returnSessionApplyStatus(LoanApplyObj)==SessionStatus.Accepted\">\r\n                                                        <!--&& LoanApplyObj.borrowerId==authenticationService.currentUserValue._id-->\r\n                                                        <div\r\n                                                            *ngIf=\"!returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && LoanApplyObj.borrowerId==authenticationService.currentUserValue._id\">\r\n                                                            <div class=\"form-check-inline\">\r\n                                                                <div class=\"custom-control custom-checkbox\">\r\n                                                                    <!--[disabled]=\"LoanApplyObjCurrentCheckBoxes.visibleKeys['isLoanAmountPaidByBorrower_isEnable'+i]\"-->\r\n                                                                    <input\r\n                                                                        [(ngModel)]=\"LoanApplyObjCurrentCheckBoxes['isLoanAmountPaidByBorrower_'+i]\"\r\n                                                                        name=\"isLoanAmountPaidByBorrower\"\r\n                                                                        id=\"isLoanAmountPaidByBorrower_{{i}}\"\r\n                                                                        type=\"checkbox\" class=\"custom-control-input\"\r\n                                                                        [value]=\"true\"\r\n                                                                        (change)=\"initiateLoanAmountPaidByBorrower($event, LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_'+i))\"\r\n                                                                        [checked]=\"LoanApplyObjCurrentCheckBoxes['isLoanAmountPaidByBorrower_'+i]\">\r\n                                                                    <label for=\"isLoanAmountPaidByBorrower_{{i}}\"\r\n                                                                        class=\"custom-control-label\" i18n>\r\n                                                                        Is Amount Transfered? </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div\r\n                                                            *ngIf=\"(returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i))  && LoanApplyObj.borrowerId==authenticationService.currentUserValue._id) || (returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && LoanApplyObj.lenderId==authenticationService.currentUserValue._id)\">\r\n                                                            <i class=\"icon-check\"></i>&nbsp;\r\n                                                            Paid{{returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender(LoanApplyObj,\r\n                                                            utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i))?'\r\n                                                            & Verified':''}}\r\n                                                            &nbsp;<i class=\"icon-eye\"\r\n                                                                (click)=\"viewCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i))\"></i>&nbsp;\r\n                                                        </div>\r\n                                                        <div\r\n                                                            *ngIf=\"!returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i))  && LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\r\n                                                            <i class=\"icon-close\"></i>&nbsp;Not Paid\r\n                                                        </div>\r\n                                                        <div\r\n                                                            *ngIf=\"returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && !returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\r\n                                                            <div class=\"form-check-inline\">\r\n                                                                <div class=\"custom-control custom-checkbox\">\r\n                                                                    <!--[disabled]=\"LoanApplyObjCurrentCheckBoxes.visibleKeys['isLoanAmountPaidByBorrower_isEnable'+i]\"-->\r\n                                                                    <input\r\n                                                                        [(ngModel)]=\"LoanApplyObjCurrentCheckBoxes['isLoanAmountPaidByBorrowerConfirmByLender_'+i]\"\r\n                                                                        name=\"isLoanAmountPaidByBorrowerConfirmByLender\"\r\n                                                                        id=\"isLoanAmountPaidByBorrowerConfirmByLender_{{i}}\"\r\n                                                                        type=\"checkbox\" class=\"custom-control-input\"\r\n                                                                        [value]=\"true\"\r\n                                                                        (change)=\"initiateLoanAmountPaidByBorrowerConfirmByLender($event, LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrowerConfirmByLender_'+i))\"\r\n                                                                        [checked]=\"LoanApplyObjCurrentCheckBoxes['isLoanAmountPaidByBorrowerConfirmByLender_'+i]\">\r\n                                                                    <label\r\n                                                                        for=\"isLoanAmountPaidByBorrowerConfirmByLender_{{i}}\"\r\n                                                                        class=\"custom-control-label\" i18n>\r\n                                                                        Is Amount Received? </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"row\" [ngClass]=\"{ 'd-none': ready2Refund }\"\r\n                                [ngSwitch]=\"returnSessionApplyStatus(LoanApplyObj)\">\r\n                                <!-- the same view can be shown in more than one case -->\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Pending\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Rejected)\">Reject</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Accepted)\">Accept</button>\r\n                                    -->\r\n                                    <button class=\"btn btn-primary btn-sm float-right\"\r\n                                        (click)=\"clickedOnSessionChatVideo(LoanObj, false)\"><i\r\n                                            class=\"icon-comments\"></i>&nbsp;Chat</button>\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Accepted\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.RejectedOngoing)\">Reject</button> &nbsp;\r\n                                    <button class=\"btn btn-info btn-sm\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.RejectedOngoingWithRefund)\">Apply\r\n                                        for Refund</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.OngoingInitiated)\">Proceed for\r\n                                        Execution</button>\r\n                                        -->\r\n    \r\n                                    <a class=\"btn btn-success btn-sm float-left ml-2\" target=\"_blank\"\r\n                                        [href]=\"returnUrl4downloadCOntractPDF(LoanApplyObj._id)\" download><i\r\n                                            class=\"icon-cloud-down\"></i>&nbsp;Download Contract</a>\r\n                                    <button class=\"btn btn-primary btn-sm float-right\"\r\n                                        (click)=\"clickedOnSessionChatVideo(LoanObj, false)\"><i\r\n                                            class=\"icon-comments\"></i>&nbsp;Chat</button>\r\n                                </div>\r\n    \r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingInitiated\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.RejectedOngoing)\">Reject</button>\r\n                                    <button [disabled]=\"true\" class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.OngoingAccepted)\">Proceed for\r\n                                        Execution</button>\r\n                                    -->\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingAccepted\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.RejectedOngoing)\">Reject</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Ongoing)\">Proceed for\r\n                                        Execution</button>\r\n                                    -->\r\n    \r\n                                    <button *ngIf=\"LoanApplyObj.createdBy!=authenticationService.currentUserValue._id\"\r\n                                        class=\"float-right btn btn-danger btn-sm\">Reject</button>\r\n                                    <button *ngIf=\"LoanApplyObj.createdBy!=authenticationService.currentUserValue._id\"\r\n                                        class=\"btn btn-success btn-sm float-right mr-2\"\r\n                                        (click)=\"closeDialog(LoanApplyObj, SessionStatus.Accepted)\">\r\n                                        Proceed For Contract\r\n                                    </button>\r\n                                    <button class=\"btn btn-primary btn-sm float-right mr-2\"\r\n                                        (click)=\"clickedOnSessionChatVideo(LoanObj, false)\"><i\r\n                                            class=\"icon-comments\"></i>&nbsp;Chat</button>\r\n    \r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Ongoing\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Suspended)\">Reject</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Completed)\">Completed</button>\r\n                                    -->\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Completed\">\r\n                                    <button mat-button mat-dialog-close class=\"btn btn-success btn-sm float-right\"\r\n                                        (click)=\"addNewRatings(LoanApplyObj)\">Rate Now</button>\r\n                                </div>\r\n                                <!--default case when there are no matches -->\r\n                                <div class=\"col-xl-12\" *ngSwitchDefault>\r\n                                    <!-- \r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Rejected)\">Reject</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Accepted)\">Accept</button>\r\n                                -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--<button *ngIf=\"!check4SessionApplyStatus(LoanApplyObj)\" class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Accepted)\">Accept</button>\r\n                        <button *ngIf=\"check4SessionApplyStatus(LoanApplyObj)\" class=\"btn btn-success btn-sm float-right mr-2\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.OngoingInitiated)\">Proceed for Execution</button>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</mat-dialog-content>\r\n\r\n\r\n<!--\r\n<div class=\"row\" [ngClass]=\"{ 'd-none': !userInitiatedForPayment }\">\r\n    <div class=\"col-xl-12 text-center\">\r\n        <app-payment></app-payment>\r\n    </div>\r\n</div>\r\n<div class=\"row\" [ngClass]=\"{ 'd-none': !ready2Refund }\">\r\n    <div class=\"col-xl-12\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 text-center\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"mb-3 font-weight-bold\">\r\n                            Paid Amount:&nbsp;\r\n                        </label>\r\n                        <label class=\"mb-3\">\r\n                            {{refundObj.amount}}\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"mb-3 font-weight-bold\">\r\n                            Refund Charges:&nbsp;\r\n                        </label>\r\n                        <label class=\"mb-3\">\r\n                            {{refundObj.cancellationCharges}}\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"mb-3 font-weight-bold\">\r\n                            Amount to be refunded:&nbsp;\r\n                        </label>\r\n                        <label class=\"mb-3\">\r\n                            {{refundObj.finalAmount2Refund}}\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-danger btn-sm\" (click)=\"ready2Refund=false\">Cancel</button> &nbsp;\r\n                        <button class=\"btn btn-success btn-sm\" (click)=\"finalSubmissionForRefund()\">Refund</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n-->");

/***/ }),

/***/ "vD63":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/wallet/wallet.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12 col-md-12 mb-4\">\r\n        <div class=\"card shadow h-100\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12 mb-4\">\r\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\">Deposit Money</div>\r\n                    </div>\r\n                    <div class=\"col-xl-3\">\r\n                        <img src=\"/assets/img/svg/depositmoney.svg\" class=\"img-fluid\">\r\n                    </div>\r\n                    <div class=\"col-xl-6\">\r\n                        <form [formGroup]=\"addFundsForm\" (ngSubmit)=\"onSubmit()\">\r\n                            <div class=\"md-form\">\r\n                                <div class=\"input-group mt-3 mb-3\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text bg-white\">$</span>\r\n                                    </div>\r\n                                    <input type=\"number\" formControlName=\"amount\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.amount.errors }\" placeholder=\"Amount\">\r\n                                    <button [disabled]=\"loading\" class=\"btn btn-primary btn-sm\">Deposit</button>\r\n                                </div>\r\n                                <div class=\"m-2\" id=\"paypal-button-container\" *ngIf=\"payPalConfig\">\r\n                                    <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\r\n                                </div>\r\n                                <div *ngIf=\"submitted && f.amount.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.amount.errors.required\">amount is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        <div class=\"mb-1 text-xs text-gray-50\"><img src=\"/assets/img/svg/hand.svg\" class=\"img-fluid\"> User and Borrower Wallet simply facilitates Payments and Refunds. </div>\r\n                    </div>\r\n                    <div class=\"col-xl-3\">\r\n                        <div class=\"card p-4 text-center\">\r\n                            <i class=\" fas fa-repeat\" (click)=\"loadAllFunds()\"></i>\r\n                            <div class=\"h4 font-weight-light\">Total Fund</div>\r\n                            <div class=\"h4\">${{addFundsService.totalFund4currentUser}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-12 col-12 mb-4\">\r\n\r\n\r\n        <div class=\"view view-cascade gradient-card-header white\">\r\n            <table class=\"table btn-table\">\r\n\r\n                <thead>\r\n                    <tr>\r\n\r\n                        <th>Amount</th>\r\n                        <th>Date</th>\r\n                        <th>#</th>\r\n                    </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let fund of allFunds\">\r\n\r\n                        <td>${{fund.amount}}</td>\r\n                        <td>{{fund.updatedOn | date:short}}</td>\r\n                        <td>\r\n                            #\r\n                            <!-- <button type=\"button\" (click)=\"deleteFund(fund._id)\" class=\"btn btn-outline-primary btn-sm m-0 waves-effect\">Delete</button>-->\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "wOb1":
/*!****************************************************************!*\
  !*** ./src/app/shared/income-proof/income-proof.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNvbWUtcHJvb2YuY29tcG9uZW50LmNzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~borrower-borrower-module~home-home-module~lender-lender-module-es2015.js.map