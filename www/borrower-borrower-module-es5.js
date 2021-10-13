(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["borrower-borrower-module"], {
    /***/
    "+54H":
    /*!**************************************************************!*\
      !*** ./src/app/borrower/borrow-now/borrow-now.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3Jyb3ctbm93LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "+hC5":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/get-a-loan/get-a-loan.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hC5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- addSession section -->\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-3 col-12\">\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            Loan Amount\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr {{f.loanAmount.value}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            EMI (Monthly)\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr {{_calculatedMonthlyAmountForEMI}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card border-left-primary shadow py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            Total Loan\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr\r\n                            {{utilityService.returnRoundedNumber(_calculatedMonthlyAmountForEMI*f.loanTenureInMonths.value)}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-9 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Get A Loan</h6>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"addSessionForm\" class=\"theme-form\">\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-xl-12 col-12\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanType\" i18n>Loan Type</label>\r\n                                <select formControlName=\"loanType\" class=\"custom-select\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanType.errors }\">\r\n                                    <option value=\"\" selected disabled> Choose Loan Type</option>\r\n                                    <option *ngFor=\"let item of _.values(utilityService.ParentLoanTypes);\"\r\n                                        [ngValue]=\"item._id\" >\r\n                                        {{item.name}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.loanType.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanType.errors.required\" i18n>Loan type is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                                <input type=\"number\" min=\"0\" formControlName=\"loanAmount\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanAmount.errors }\"\r\n                                    (change)=\"calculateMonthlyAmountForEMI()\" (keyup)=\"calculateMonthlyAmountForEMI()\"\r\n                                    pattern=\"^[1-9]\\d*$\" />\r\n                                <div *ngIf=\"submitted && f.loanAmount.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanAmount.errors.required\" i18n>Loan Amount is required</div>\r\n                                    <div *ngIf=\"f.loanAmount.errors.min\" i18n>value must be greater than 1</div>\r\n                                    <div *ngIf=\"f.loanAmount.errors.max\" i18n>value must be less than\r\n                                        {{currentUserMaxLoanAmount}}</div>\r\n                                    <div *ngIf=\"f.loanAmount.errors.pattern\" i18n>value should be a valid number</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 small text-primary mt-n3 mb-3\">\r\n\r\n                        </div>\r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                                <input type=\"number\" formControlName=\"loanTenureInMonths\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanTenureInMonths.errors }\"\r\n                                    (change)=\"calculateMonthlyAmountForEMI()\" (keyup)=\"calculateMonthlyAmountForEMI()\"\r\n                                    pattern=\"^[1-9]\\d*$\" />\r\n                                <div *ngIf=\"submitted && f.loanTenureInMonths.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.required\" i18n>Loan Tenure is\r\n                                        required\r\n                                    </div>\r\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.min\" i18n>value must be greater than\r\n                                        3</div>\r\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.pattern\" i18n>value should be a valid number\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                                <input type=\"number\" formControlName=\"loanInterestRate\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanInterestRate.errors }\"\r\n                                    (change)=\"calculateMonthlyAmountForEMI()\"\r\n                                    (keyup)=\"calculateMonthlyAmountForEMI()\" />\r\n                                <div *ngIf=\"submitted && f.loanInterestRate.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.loanInterestRate.errors.required\" i18n>Interest Rate is\r\n                                        required\r\n                                    </div>\r\n                                    <div *ngIf=\"f.loanInterestRate.errors.min\" i18n>\r\n                                        min interest rate of {{loanInterestRateMin}}%\r\n                                    </div>\r\n                                    <div *ngIf=\"f.loanInterestRate.errors.max\" i18n>\r\n                                        max interest rate of {{loanInterestRateMax}}% (remember to check  the rules for your country)\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"loanStartDateTimeCustomised\" i18n>Start on</label>\r\n                                        <input type=\"date\" formControlName=\"loanStartDateTimeCustomised\"\r\n                                            class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanStartDateTimeCustomised.errors }\"\r\n                                            [max]=\"maxDate\" [min]=\"minDate\" />\r\n                                        <div *ngIf=\"submitted && f.loanStartDateTimeCustomised.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.required\" i18n>Start Date\r\n                                                Time is required\r\n                                            </div>\r\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.date\" i18n>Invalid Date\r\n                                                format.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            -->\r\n                        <!--\r\n                                        <div class=\"col-xl-12 col-12\">\r\n                                            <label for=\"loanEndDateTimeCustomised\" i18n>Ends on</label>\r\n                                            <input [readonly]=\"true\" type=\"datetime-local\"\r\n                                                formControlName=\"loanEndDateTimeCustomised\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.loanEndDateTimeCustomised.errors }\"\r\n                                                [max]=\"maxDate\" [min]=\"minDate\" />\r\n                                            <div *ngIf=\"submitted && f.loanEndDateTimeCustomised.errors\"\r\n                                                class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.required\" i18n>End Date Time is\r\n                                                    required\r\n                                                </div>\r\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.date\" i18n>Invalid Date format.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        -->\r\n                        <div class=\"col-xl-12 mb-3\">\r\n                            <div for=\"loanRepaymentType\" class=\"mb-2\" i18n>How to give the money</div>\r\n\r\n                            <div class=\"form-check-inline\"\r\n                                *ngFor=\"let item of _.values( utilityService.LoanRepaymentTypes);\">\r\n\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input name=\"service\" id=\"services_{{item._id}}\" type=\"checkbox\"\r\n                                        class=\"custom-control-input\" value=\"{{item._id}}\"\r\n                                        (change)=\"onLoanRepaymentTypeChange($event)\"\r\n                                        [checked]=\"onInitSetLoanRepaymentTypeValue(item._id)\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanRepaymentType.errors }\">\r\n                                    <label for=\"services_{{item._id}}\"\r\n                                        class=\"custom-control-label\">{{item.name}}</label>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div *ngIf=\"submitted && f.loanRepaymentType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.loanRepaymentType.errors.required\">Payment option required\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-xl-12 mb-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"comment\" i18n>Description:</label>\r\n                                <textarea class=\"form-control\" formControlName=\"loanDescription\" rows=\"2\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanDescription.errors }\">\r\n                                            </textarea>\r\n                            </div>\r\n                            <div *ngIf=\"submitted && f.loanDescription.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.loanDescription.errors.required\" i18n>Description is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-12 text-center\">\r\n                            <hr>\r\n                            <button type=\"button\" (click)=\"onaddSessionUpdateSubmit()\" [disabled]=\"loading\"\r\n                                class=\"btn btn-primary\" i18n>Submit</button>\r\n                            <img *ngIf=\"loading\" class=\"pl-3\"\r\n                                src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- addSession section -->";
      /***/
    },

    /***/
    "/N9K":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/home/home.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function N9K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<!-- <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n        <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\r\n        <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Profile</a>\r\n    </div> -->\r\n\r\n<div [ngSwitch]=\"authenticationService.currentUserValue.role\">\r\n    <div *ngSwitchCase=\"Role.Borrower\">\r\n        <div class=\"jumbotron\"\r\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted || !authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\r\n            <div class=\"text-black-50 h2 font-weight-lighter\" i18n>\r\n                Welome, Your profile has been verified succesfully. Your need to submit your\r\n                <span class=\"badge badge-danger\" >Bank Details</span> and\r\n                <span class=\"badge badge-danger\" >Income Proof Documents</span> to access the loan market.\r\n            </div>\r\n            <hr>\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Profile and personal document verification\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/profile\"></i>\r\n                    </span>\r\n                </li>\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Bank details submission\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/bank-details\"></i>\r\n                    </span>\r\n                </li>\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Income Proof Documents and Mothly Expenses\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/income-proof\"></i>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"Role.Lender\">\r\n        <div class=\"jumbotron\"\r\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\r\n            <div class=\"text-black-50 h2 font-weight-lighter\" i18n>\r\n                Welome, Your profile has been verified succesfully. Your need to submit your\r\n                <span class=\"badge badge-danger\">Bank Details</span> to access the Loan Market.\r\n            </div>\r\n            <hr>\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Profile and personal document verification\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/lender/profile\"></i>\r\n                    </span>\r\n                </li>\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\r\n                    Bank details submission\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/lender/bank-details\"></i>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-warning shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\" i18n>\r\n                            Member since\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                            {{authenticationService.currentUserValue.userVerifiedOn | date:'dd-MMM-YYYY'}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-primary shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            My Level\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\r\n                            <!--{{utilityService.returnStringWithReplacing_(authenticationService.currentUserValue.userType)}}-->\r\n                            {{authenticationService.returnUserTypeForUserFromSuppliedUserLevel(authenticationService.currentUserValue.userType)}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-success shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\" i18n>\r\n                            Paid Contracts\r\n                        </div>\r\n                        <div class=\"row no-gutters align-items-center\">\r\n                            <div class=\"col-auto\">\r\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{allMyPaidContractCount}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col\">\r\n                                            <div class=\"progress progress-sm mr-2\">\r\n                                                <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Pending Requests Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-secondary shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-secondary text-uppercase mb-1\" i18n>\r\n                            Paid Loans</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{allMyPaidLoanCount}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-primary text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\r\n                    Active Loan</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyActiveLoanCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-success text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\r\n                    UnSigned contracts</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyUnSignedContractLoanCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-warning text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\r\n                    Disbursed Loans</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyDisbursedLoanCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-secondary text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                    Profit Overview</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyProfitOverviewCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n-->\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Active Loans</h6>\r\n\r\n            </div>\r\n\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive table-billing-history\">\r\n                    <table class=\"table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\" i18n>Type</th>\r\n                                <th scope=\"col\">\r\n                                    {{Role.Lender!=authenticationService.currentUserValue.role?'Lender\r\n                                    Name':'Borrower Name'}}\r\n                                </th>\r\n                                <th scope=\"col\" i18n>Amount</th>\r\n                                <th scope=\"col\" i18n>Refund</th>\r\n                                <th scope=\"col\" i18n>Next EMI</th>\r\n                                <th scope=\"col\" i18n>Status</th>\r\n                                <th scope=\"col\">#</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <!--New Data table from Sessions Apply-->\r\n                            <tr\r\n                            *ngFor=\"let LoanApplyObj of utilityService._.values( allSessionApplyData) | mySessionsFilter : 'status' : ['accepted']:checkCreatedByUserId:checkCreatedByT\">\r\n                            <td class=\"text-capitalize\">{{(LoanApplyObj.sessionForBorrower.loanType ||\r\n                                \"\").replace(\"_\", \" \")}}</td>\r\n                            <td class=\"text-capitalize\">\r\n                                {{userService.returnUsersObjFromLocal(null,\r\n                                null,'firstName',\r\n                                (LoanApplyObj.lenderId!=authenticationService.currentUserValue._id?LoanApplyObj.lenderId:LoanApplyObj.borrowerId))}}\r\n                            </td>\r\n                            <td>{{LoanApplyObj.loanAmount || LoanApplyObj.sessionForBorrower.loanAmount}}</td>\r\n                            <td>{{utilityService.returnRoundedNumber((LoanApplyObj.calculatedMonthlyAmountForEMI ||\r\n                                LoanApplyObj.sessionForBorrower.calculatedMonthlyAmountForEMI) *\r\n                                LoanApplyObj.sessionForBorrower.loanTenureInMonths)}}</td>\r\n                            <td>{{LoanApplyObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\r\n                            <td>\r\n                                <div *ngIf=\"LoanApplyObj.lenderId!=authenticationService.currentUserValue._id\">\r\n                                    <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                        <span class=\"badge badge-danger\" i18n>\r\n                                            Pending\r\n                                        </span>\r\n                                    </a>\r\n                                    <a\r\n                                        *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                        <span class=\"badge badge-warning\" i18n>\r\n                                            Money Sent\r\n                                        </span>\r\n                                    </a>\r\n                                    <a\r\n                                        *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                        <span class=\"badge badge-success\" i18n>\r\n                                            Received Money\r\n                                        </span>\r\n                                    </a>\r\n                                </div>\r\n                                <div *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\r\n                                    <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                        <span\r\n                                            *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\"\r\n                                            class=\"badge badge-danger\" i18n>\r\n                                            Money Not Sent\r\n                                        </span>\r\n                                    </a>\r\n                                    <a\r\n                                    *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                    <span class=\"badge badge-warning\" i18n>\r\n                                        Money Sent\r\n                                    </span>\r\n                                    </a>\r\n                                    <a\r\n                                        *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                        <span class=\"badge badge-success\" i18n>\r\n                                            Money Sent\r\n                                        </span>\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                            <td>\r\n                                <div *ngIf=\"LoanApplyObj.lenderId!=authenticationService.currentUserValue._id\">\r\n                                    <a (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj)\"\r\n                                        *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                        <span class=\"badge badge-success\" i18n>is Money Received?</span>\r\n                                    </a>\r\n                                    <a *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower && LoanApplyObj.nextInstallment && !LoanApplyObj.isLoanAmountPaidByBorrower\">\r\n                                       <!--\r\n                                        <span (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj, LoanApplyObj.nextInstallment)\" class=\"badge badge-success\">is Installment Money Transfered?</span>\r\n                                    -->\r\n                                    <div class=\"form-check-inline\">\r\n                                        <div class=\"custom-control custom-checkbox\">\r\n                                            <input name=\"isLoanAmountPaidByBorrower\" id=\"isLoanAmountPaidByBorrower\" type=\"checkbox\"\r\n                                                class=\"custom-control-input\" [value]=\"true\"\r\n                                                (change)=\"LoanMoneyTransferStatusChange($event, LoanApplyObj.sessionForBorrower, LoanApplyObj, LoanApplyObj.nextInstallment)\"\r\n                                                [checked]=\"LoanApplyObj.isLoanAmountPaidByBorrower\">\r\n                                            <label for=\"isLoanAmountPaidByBorrower\" class=\"custom-control-label\" i18n>\r\n                                                Installment Money Transfered\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    </a>\r\n                                </div>\r\n                                <div *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\r\n                                    <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                       <!--\r\n                                        <span (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj)\" class=\"badge badge-success\">\r\n                                            is Money Transfered?\r\n                                        </span>\r\n                                    -->\r\n                                        <div class=\"form-check-inline\">\r\n                                            <div class=\"custom-control custom-checkbox\">\r\n                                                <input name=\"isLoanAmountPaidByLender\" id=\"isLoanAmountPaidByLender\" type=\"checkbox\"\r\n                                                    class=\"custom-control-input\" [value]=\"true\"\r\n                                                    (change)=\"LoanMoneyTransferStatusChange($event, LoanApplyObj.sessionForBorrower, LoanApplyObj)\"\r\n                                                    [checked]=\"LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                                <label for=\"isLoanAmountPaidByLender\" class=\"custom-control-label\" i18n>\r\n                                                    Money Transfered\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </a>\r\n                                    <a (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj, null, true)\"\r\n                                        *ngIf=\"!LoanApplyObj.isLoanAmountPaidByBorrower && LoanApplyObj.installmentWiseLoanAmountPaidByBorrower\">\r\n                                        <span class=\"badge badge-success\" i18n>is Installment Money Received?&nbsp;</span>\r\n                                        <span\r\n                                            *ngFor=\"let installmentObj of LoanApplyObj.installmentWiseLoanAmountPaidByBorrower\">\r\n                                            <i *nfIf=\"installmentObj.createdOnForLoanAmountPaidToLender && !installmentObj.createdOnForLoanAmountPaidToLenderConfirmByLender\">*</i>\r\n                                        </span>\r\n                                    </a>\r\n\r\n\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                            <!--New Data table from Session Apply-->\r\n\r\n                            <!--Old Data table from Sessions-->\r\n                            <!--\r\n                            <tr\r\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['accepted']:checkCreatedByUserId:checkCreatedByT\">\r\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\r\n                                <td class=\"text-capitalize\">\r\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\r\n                                    true,'firstName')}}</td>\r\n                                <td>{{LoanObj.loanAmount}}</td>\r\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\r\n                                    LoanObj.loanTenureInMonths)}}</td>\r\n                                <td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\r\n                                <td>\r\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\r\n                                        <a>\r\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-danger\">Pending</span>\r\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-success\">Received Money</span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\r\n                                        <span class=\"badge badge-primary\">Details</span>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        -->\r\n                            <!--Old Data table from Sessions-->\r\n                            <tr class=\"mt-2 text-center no-item\">\r\n\r\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Unsigned Contracts</h6>\r\n\r\n            </div>\r\n\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive table-billing-history\">\r\n                    <table class=\"table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\" i18n>Type</th>\r\n                                <th scope=\"col\" i18n>Lender Name</th>\r\n                                <th scope=\"col\" i18n>Amount</th>\r\n                                <th scope=\"col\" i18n>Refund</th>\r\n                                <!--<th scope=\"col\">Next EMI</th>-->\r\n                                <th scope=\"col\" i18n>Application Date</th>\r\n                                <th scope=\"col\" i18n>Status</th>\r\n                                <th scope=\"col\">#</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['awaiting_for_approval']:checkCreatedByUserId:checkCreatedByT\">\r\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\r\n                                <td class=\"text-capitalize\">\r\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\r\n                                    true,'firstName')}}</td>\r\n                                <td>{{LoanObj.loanAmount}}</td>\r\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\r\n                                    LoanObj.loanTenureInMonths)}}</td>\r\n                                <!--<td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>-->\r\n                                <td>{{LoanObj.applicationDate | datePretty}}</td>\r\n                                <td>\r\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\r\n                                        <a>\r\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-danger\" i18n>Pending</span>\r\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-success\" i18n>Received Money</span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\r\n                                        <span class=\"badge badge-primary\" i18n>Details</span>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                            <tr class=\"mt-2 text-center no-item\">\r\n\r\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Paid Loans</h6>\r\n\r\n            </div>\r\n\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive table-billing-history\">\r\n                    <table class=\"table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\" i18n>Type</th>\r\n                                <th scope=\"col\" i18n>Lender Name</th>\r\n                                <th scope=\"col\" i18n>Amount</th>\r\n                                <th scope=\"col\" i18n>Refund</th>\r\n                                <th scope=\"col\" i18n>Status</th>\r\n                                <th scope=\"col\">#</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['paid','completed']:checkCreatedByUserId:checkCreatedByT\">\r\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\r\n                                <td class=\"text-capitalize\">\r\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\r\n                                    true,'firstName')}}</td>\r\n                                <td>{{LoanObj.loanAmount}}</td>\r\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\r\n                                    LoanObj.loanTenureInMonths)}}</td>\r\n                                <td>\r\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\r\n                                        <a>\r\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-danger\" i18n>Pending</span>\r\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-success\" i18n>Received Money</span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\r\n                                        <span class=\"badge badge-primary\" i18n>Details</span>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                            <tr class=\"mt-2 text-center no-item\">\r\n\r\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--\r\n    <div class=\"row d-none\">\r\n    \r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"row\">\r\n    \r\n                <div class=\"col-xl-12 col-md-6 mb-3\">\r\n                    <div class=\"card shadow-sm\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col text-center border-right\">\r\n                                    <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Wallet\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        ${{fundService.totalFund4currentUser}}</div>\r\n                                </div>\r\n    \r\n                                <div class=\"col text-center\">\r\n                                    <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Sessions\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{allSessionsCount}}/{{allSessionsTodayCount}}</div>\r\n                                </div>\r\n    \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"col-xl-12 col-md-6 mb-3\">\r\n    \r\n                    <section class=\"blog-sidebar pt-0\">\r\n                        <div class=\"row pl-0 pr-0\">\r\n                            <div class=\"col-lg-12\">\r\n                                 <div>\r\n                                    <h5 class=\"blog-title\">upcoming sessions</h5>\r\n                                    <div class=\"sidebar-container\">\r\n                                        <div *ngFor=\"let item of utilityService._.values(allSessionsTodayList);\" class=\"post-container d-flex\">\r\n                                            <div class=\"w-35 m-r-25\">\r\n                                                <img alt=\"\" class=\"img-fluid\" src=\"./assets/img/na.png\">\r\n                                                <div class=\"badge badge-blue\">\r\n                                                    {{item.location}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div>\r\n                                                <h5 class=\"post-head\">{{item.sessionSubject}}</h5>\r\n                                                <h6 class=\"date\">{{item.loanStartDateTime | date:'medium'}}</h6>\r\n                                                <div class=\"mt-3\">\r\n                                                    <i class=\"icon-video-camera fa-lg mr-3\" (click)=\"clickedOnSessionChatVideo(item, true)\"></i>\r\n                                                    <i class=\"icon-comment\" (click)=\"clickedOnSessionChatVideo(item, false)\"></i>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"mt-2 text-center blog-agency no-item\">\r\n                                            <img src=\"assets/img/noresult.png\" style=\"height: 60px;\">\r\n                                            <h5 class=\"mt-3 font-weight-normal\">Looks like you don't have any counselling Session today</h5>\r\n                                        </div>\r\n    \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n    \r\n            </div>\r\n    \r\n        </div>\r\n    \r\n        <div class=\"col-xl-8 col-12\">\r\n    \r\n            <section class=\"agency blog blog-sec blog-sidebar sider p-0\">\r\n    \r\n                <div class=\"h6 mb-3\">\r\n    \r\n                    LATEST SESSIONS\r\n                   \r\n                </div>\r\n                <div class=\"card shadow-sm mb-4\" *ngFor=\"let session of allSessionsData\">\r\n                    <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n                        {{session.sessionSubject}}\r\n                    </div>\r\n                    <div class=\"card-body px-md-3 px-1 small\">\r\n                         <div class=\"row\">               \r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <p class=\"para2\" [class.show_more]=\"!session._id\">\r\n                                {{session.loanDescription}}\r\n                            </p>\r\n                        </div>          \r\n                        <div class=\"col-xl-6 col-6 border-right mb-2\">\r\n                            <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{session.loanStartDateTime | date:'MMM d, h:mm a'}}\r\n                        </div>\r\n                       \r\n                        <div class=\"col-xl-6 col-6\">\r\n                            <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\r\n                            \r\n                            {{session.location}}\r\n                        </div>\r\n                      \r\n                    </div>\r\n                    </div>\r\n                    <div class=\"card-footer bg-white\">\r\n                        <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span>\r\n                        <a *ngIf=\"!check4applyToSession(session)\" class=\"btn btn-success  text-capitalize btn-sm float-right text-white\" (click)=\"applyToSession(session)\">Apply</a>\r\n                        <a *ngIf=\"check4applyToSession(session)\" class=\"btn btn-primary text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(session)\"> Details</a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div *ngIf=\"!allSessionsData\">\r\n                    <div class=\"content_loader\"></div>\r\n                    <div class=\"content_loader\"></div>\r\n                </div>\r\n    \r\n            </section>\r\n        </div>\r\n    </div>\r\n    -->";
      /***/
    },

    /***/
    "/b2o":
    /*!**********************************************************!*\
      !*** ./src/app/borrower/earnings/earnings.component.css ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function b2o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlYXJuaW5ncy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "0OUo":
    /*!*********************************************!*\
      !*** ./src/app/borrower/borrower.module.ts ***!
      \*********************************************/

    /*! exports provided: BorrowerModule */

    /***/
    function OUo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BorrowerModule", function () {
        return BorrowerModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _borrower_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./borrower-routing.module */
      "MBDN");
      /* harmony import */


      var _borrower_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./borrower.component */
      "mtiP");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./header/header.component */
      "XmLS");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./footer/footer.component */
      "sxVe");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home/home.component */
      "CgDp");
      /* harmony import */


      var _browse_sessions_browse_sessions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./browse-sessions/browse-sessions.component */
      "qfzN");
      /* harmony import */


      var _my_sessions_my_sessions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./my-sessions/my-sessions.component */
      "Denz");
      /* harmony import */


      var _earnings_earnings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./earnings/earnings.component */
      "F8Mo");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./calendar/calendar.component */
      "7UJ9");
      /* harmony import */


      var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @fullcalendar/angular */
      "IvIE");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @fullcalendar/daygrid */
      "PN1e");
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @fullcalendar/interaction */
      "ogxq");
      /* harmony import */


      var _loan_market_loan_market_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./loan-market/loan-market.component */
      "Vjsn");
      /* harmony import */


      var _get_a_loan_get_a_loan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./get-a-loan/get-a-loan.component */
      "MH3C");
      /* harmony import */


      var _borrow_now_borrow_now_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./borrow-now/borrow-now.component */
      "AWbT");

      _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__["FullCalendarModule"].registerPlugins([_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_17__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_18__["default"]]);

      var BorrowerModule = function BorrowerModule() {
        _classCallCheck(this, BorrowerModule);
      };

      BorrowerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_borrower_component__WEBPACK_IMPORTED_MODULE_7__["BorrowerComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _browse_sessions_browse_sessions_component__WEBPACK_IMPORTED_MODULE_11__["BrowseSessionsComponent"], _my_sessions_my_sessions_component__WEBPACK_IMPORTED_MODULE_12__["MySessionsComponent"], _earnings_earnings_component__WEBPACK_IMPORTED_MODULE_13__["EarningsComponent"], _borrower_component__WEBPACK_IMPORTED_MODULE_7__["ModalApplySession"], _borrower_component__WEBPACK_IMPORTED_MODULE_7__["ModalAppliedSessionDisplay"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__["CalendarComponent"], _loan_market_loan_market_component__WEBPACK_IMPORTED_MODULE_19__["LoanMarketComponent"], _get_a_loan_get_a_loan_component__WEBPACK_IMPORTED_MODULE_20__["GetALoanComponent"], _borrow_now_borrow_now_component__WEBPACK_IMPORTED_MODULE_21__["BorrowNowComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _borrower_routing_module__WEBPACK_IMPORTED_MODULE_6__["BorrowerRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__["FullCalendarModule"]],
        entryComponents: [_borrower_component__WEBPACK_IMPORTED_MODULE_7__["ModalApplySession"], _borrower_component__WEBPACK_IMPORTED_MODULE_7__["ModalAppliedSessionDisplay"]]
      })], BorrowerModule);
      /***/
    },

    /***/
    "2mJr":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/earnings/earnings.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "5I6h":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/my-sessions/my-sessions.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I6h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"tab-product  p-b-0\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-lg-12\">\r\n            <ul class=\"nav nav-justified nav-material nav-tabs\" id=\"top-tab\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='received', 'show': selectedTab=='received'}\"\r\n                        data-toggle=\"tab\" href=\"#top-home\" id=\"top-home-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('received');\" i18n>My Contracts\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalPendingContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='sent', 'show': selectedTab=='sent'}\" data-toggle=\"tab\"\r\n                        href=\"#top-sent\" id=\"profile-sent-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('sent')\" i18n>Sent\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalSentContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='canceled', 'show': selectedTab=='canceled'}\"\r\n                        data-toggle=\"tab\" href=\"#top-canceled\" id=\"profile-canceled-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('canceled')\" i18n>Cancelled\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalCanceledContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Cancelled contracts\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='active', 'show': selectedTab=='active'}\" data-toggle=\"tab\"\r\n                        href=\"#top-active\" id=\"profile-active-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('active')\" i18n>Active\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalActiveContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='paid', 'show': selectedTab=='paid'}\" data-toggle=\"tab\"\r\n                        href=\"#top-profile\" id=\"profile-top-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('paid')\" i18n>Paid\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalPaidContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='unpaid', 'show': selectedTab=='unpaid'}\" data-toggle=\"tab\"\r\n                        href=\"#top-profile\" id=\"profile-top-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('unpaid')\" i18n>Unpaid\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalUnPaidContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\"\r\n                        [ngClass]=\"{ 'active': selectedTab=='inkasso', 'show': selectedTab=='inkasso'}\"\r\n                        data-toggle=\"tab\" href=\"#top-contact\" id=\"contact-top-tab\" role=\"tab\"\r\n                        (click)=\"setFilteresOfMySessionDependsOnTab('inkasso')\" i18n>Inkasso\r\n\r\n                        &nbsp;\r\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalInkassoContract || 0}}\r\n                        </span>\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <!-- <li class=\"nav-item\"><a aria-selected=\"true\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-review\" id=\"review-top-tab\" role=\"tab\" (click)=\"SessionStatusTypeFilter=[SessionStatus.Completed]\">Completed \r\n                    <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                        </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\r\n    <!-- ;-->\r\n    <div class=\"card shadow-sm mb-4\"\r\n        *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : (SessionStatusTypeFilter.length>0 ? SessionStatusTypeFilter:['accepted']):checkCreatedByUserId:checkCreatedByT:(SessionStatusTypeFilter.indexOf(SessionStatus.Pending)>-1)\">\r\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n            <span class=\"float-left\">{{utilityService.returnLoanType(LoanObj.loanType)}}</span>\r\n            <span class=\"float-right cursor-pointer\" (click)=\"usersProfile(LoanObj.createdByUserObj)\">\r\n                <i class=\"icon icon-user\"></i>\r\n                {{LoanObj.createdByUserObj.firstName}}\r\n                <i *ngIf=\"authenticationService.currentUserValue._id==LoanObj.createdByUserObj._id\">*</i>\r\n            </span>\r\n        </div>\r\n        <div class=\"card-body px-md-3 px-1 small\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group border-right\">\r\n                        <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                        <h4 class=\"text-primary\">\r\n                            {{LoanObj.loanAmount}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group  border-right\">\r\n                        <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                        <h4 class=\"text-primary\">\r\n                            {{LoanObj.loanTenureInMonths}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                        <h4 class=\"text-primary\">\r\n                            {{LoanObj.loanInterestRate}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group border-right\">\r\n                        <label for=\"loanStartDateTime\" i18n>Start Date</label>\r\n                        <h4 class=\"text-primary\" i18n>\r\n                            {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group  border-right\">\r\n                        <p class=\"mb-2\" i18n>How to give the money</p>\r\n\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            BANK\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            Cash\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            Revolut\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            Paypal\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase badge-success\">\r\n                            Skrill\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-12\">\r\n                    <p class=\"mb-2\" i18n>Description:</p>\r\n                    <div class=\"text-black-50\" >\r\n                        {{LoanObj.loanDescription}}\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card-footer bg-white\">\r\n            <span\r\n                class=\"badge badge-success font-weight-normal text-capitalize btn float-left\">{{LoanObj.sessionType}}</span>\r\n            <div class=\"row\"\r\n                [ngSwitch]=\"returnSessionApplyStatus(utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\r\n                <!-- the same view can be shown in more than one case -->\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Pending\">\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                    -->\r\n\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"btn btn-primary text-capitalize btn-sm text-white\" title=\"Received Requests/Total Applicants\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\r\n                    <a *ngIf=\"LoanObj.createdByUserObj._id==authenticationService.currentUserValue._id\"\r\n                        class=\"btn btn-danger text-capitalize btn-sm float-right text-white mr-2\"><i class=\"icon icon-trash\"\r\n                            (click)=\"deleteSessionById(LoanObj._id)\"></i></a>\r\n                    \r\n                    \r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Accepted\">\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                    -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingInitiated\">\r\n                    <!--\r\n                    <button *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right\" (click)=\"sessionApplyOngoingCheck(LoanObj, utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\r\n                        Proceed for Execution\r\n                    </button>\r\n                -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.AwaitingForApproval\">\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\"\r\n                        class=\"btn btn-success btn-sm text-capitalize float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\">\r\n                        Details\r\n                    </a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\"\r\n                        class=\"btn btn-success btn-sm text-capitalize float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> <i class=\"icon-check fa-lg text-white\"></i>\r\n                        Proceed for Contract Sign\r\n                    </a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Ongoing\">\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">\r\n                        Details\r\n                    </a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> <i class=\"icon-check fa-lg text-white\"></i>\r\n                        Proceed for Execution\r\n                    </a>\r\n                -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n                <!--default case when there are no matches -->\r\n                <div class=\"col-xl-12\" *ngSwitchDefault>\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm text-capitalize float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Apply</a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Details</a>\r\n                    -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\r\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\r\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\r\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\r\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mt-5 text-center blog-agency no-item\">\r\n        <!-- <img src=\"assets/img/noresult.png\"> -->\r\n        <!--\r\n        <div class=\"spinner-border text-success mb-4\"></div>\r\n        <h2 class=\"text-black-50\">Hold on updating Loan Data</h2>\r\n        -->\r\n    </div>\r\n</section>";
      /***/
    },

    /***/
    "7UJ9":
    /*!*********************************************************!*\
      !*** ./src/app/borrower/calendar/calendar.component.ts ***!
      \*********************************************************/

    /*! exports provided: CalendarComponent */

    /***/
    function UJ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
        return CalendarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./calendar.component.html */
      "YT+T");
      /* harmony import */


      var _calendar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar.component.css */
      "9HLT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/internal/operators/first */
      "XoMe");
      /* harmony import */


      var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/contact.service */
      "3ITz");
      /* harmony import */


      var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/sessions.service */
      "BZV/");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var _borrower_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../borrower.component */
      "mtiP");

      var CalendarComponent = /*#__PURE__*/function () {
        function CalendarComponent(authenticationService, socketService, dialog, contactService, utilityService, alertService, userService, router, sessionsService) {
          var _this = this;

          _classCallCheck(this, CalendarComponent);

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
            events: [{
              title: 'event 1',
              date: '2019-04-01'
            }, {
              title: 'event 2',
              date: '2019-04-02'
            }]
          };
          this.sessionsService.getSessionAllByBorrowerId(this.authenticationService.currentUserValue._id, null, null, src_app_models__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Accepted, true, null).pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
            ////console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              _this.allSessionsData = data['data'];

              _this.userService.proccessAllAppUsersCollections(_this.utilityService._.uniq(_this.utilityService._.map(_this.utilityService._.flattenDepth(_this.utilityService._.map(_this.utilityService._.values(_this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId'))); //this.alertService.success(data['message'], true);


              _this.bindDataToCalendrUI(_this.allSessionsData);

              _this.loading = false; //this.element_btn_click_addSession_skills_verification.click();
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";

            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) {} //this.alertService.error(errorMsg2show);


            _this.loading = false;
          });
          this.sessionsService.getUpdatesForSessionAllByBorrowerId().subscribe(function (data) {
            if (data && data['success']) {
              var _keyPairedMapObj = _this.utilityService._.mapKeys(_this.allSessionsData, "_id");

              for (var _items in data['data']) {
                var _currentObj = data['data'][_items];
                _keyPairedMapObj[_currentObj._id] = _currentObj;
              }

              _this.allSessionsData = _this.utilityService._.values(_keyPairedMapObj);

              _this.bindDataToCalendrUI(_this.allSessionsData);

              _this.loading = false;
            } else {
              _this.loading = false;
            }
          }, function (error) {
            _this.loading = false;
          });
        }

        _createClass(CalendarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleDateClick",
          value: function handleDateClick(arg) {
            arg.jsEvent.preventDefault(); //alert('date click! ' + arg.dateStr)
          }
        }, {
          key: "handleEeventClick",
          value: function handleEeventClick(arg) {
            arg.jsEvent.preventDefault(); //alert('event click! ' + arg.event.id);

            var _sessionId = arg.event.id;

            var _sessionObj = this.utilityService._.filter(this.allSessionsData, {
              '_id': _sessionId
            })[0];

            var _proccessedSessionObj = null;

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"].Borrower:
                _proccessedSessionObj = this.utilityService._.cloneDeep(_sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = _sessionObj.sessionAppliedByBorrowers;
                break;

              case src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"].Lender:
                _proccessedSessionObj = this.utilityService._.cloneDeep(_sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = _sessionObj.sessionAppliedByBorrowers; //_sessionAppliedByLenders

                break;

              default:
                _proccessedSessionObj = this.utilityService._.cloneDeep(_sessionObj);
                break;
            }

            var _sessionApplyObj = this.utilityService._.first(_proccessedSessionObj.sessionAppliedByBorrowers);

            var _borrowerId = null;

            if (_sessionApplyObj) {
              _borrowerId = _sessionApplyObj.borrowerId;
            }

            this.showDataOfLoanObjInModal(_sessionObj, _sessionApplyObj, _borrowerId);
          }
        }, {
          key: "bindDataToCalendrUI",
          value: function bindDataToCalendrUI(_allSessionsData) {
            var _all_installments = [];

            for (var inedexOuter in _allSessionsData) {
              var _LoanObj = {
                _id: null,
                loanTenureInMonths: null,
                loanStartDateTime: null,
                calculatedMonthlyAmountForEMI: null,
                loanType: null
              };
              _LoanObj = _allSessionsData[inedexOuter];

              for (var index = 0; index < _LoanObj.loanTenureInMonths; index++) {
                var installment = {
                  loanStartDateTime: null,
                  calculatedMonthlyAmountForEMI: null,
                  title: null,
                  date: null,
                  description: null,
                  id: null
                };
                installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1).format("YYYY-MM-DD");
                installment.calculatedMonthlyAmountForEMI = _LoanObj.calculatedMonthlyAmountForEMI;
                installment.date = installment.loanStartDateTime;
                installment.id = _LoanObj._id;
                installment.description = '' + installment.calculatedMonthlyAmountForEMI;

                var _installmentString = '' + (index + 1).toString();

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
        }, {
          key: "showDataOfLoanObjInModal",
          value: function showDataOfLoanObjInModal(sessionObj, sessionApply, borrowerId) {
            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_13__["ModalApplySession"], {
              backdropClass: 'cdk-overlay-transparent-backdrop',
              hasBackdrop: true,
              data: {
                sessionObj: sessionObj,
                borrowerId: this.authenticationService.currentUserValue._id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {//console.log(`25 :: co :: Dialog result: ${JSON.stringify(result)}`);
            });
          }
        }]);

        return CalendarComponent;
      }();

      CalendarComponent.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__["SocketioService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_9__["ContactService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_10__["SessionsService"]
        }];
      };

      CalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calendar',
        template: _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calendar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__["SocketioService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_9__["ContactService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_10__["SessionsService"]])], CalendarComponent);
      /***/
    },

    /***/
    "8ZRX":
    /*!****************************************************************!*\
      !*** ./src/app/borrower/my-sessions/my-sessions.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function ZRX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1zZXNzaW9ucy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "9HLT":
    /*!**********************************************************!*\
      !*** ./src/app/borrower/calendar/calendar.component.css ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function HLT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AWbT":
    /*!*************************************************************!*\
      !*** ./src/app/borrower/borrow-now/borrow-now.component.ts ***!
      \*************************************************************/

    /*! exports provided: BorrowNowComponent */

    /***/
    function AWbT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BorrowNowComponent", function () {
        return BorrowNowComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_borrow_now_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./borrow-now.component.html */
      "m8XZ");
      /* harmony import */


      var _borrow_now_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./borrow-now.component.css */
      "+54H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/role */
      "z56L");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/contact.service */
      "3ITz");
      /* harmony import */


      var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/public-profile/public-profile.component */
      "bLZ2");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var BorrowNowComponent = /*#__PURE__*/function () {
        function BorrowNowComponent(socketService, utilityService, socketioService, alertService, appRouterService, formBuilder, authenticationService, userService, contactService, dialog) {
          var _this2 = this;

          _classCallCheck(this, BorrowNowComponent);

          this.socketService = socketService;
          this.utilityService = utilityService;
          this.socketioService = socketioService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.contactService = contactService;
          this.dialog = dialog;
          this.loading = false;
          this.LoanObj = {};
          this.loanId = null;
          this.loanApplyId = null;
          this.submitted = false;
          this.borrowerUserObj = null;
          this.lenderUserObj = null;
          this.headerMessage2show = "";
          this.userClickedOnSignLoanContract = false;

          if (lodash__WEBPACK_IMPORTED_MODULE_12__["keys"](this.authenticationService.allUserLevelsDataLenders).length <= 0 || lodash__WEBPACK_IMPORTED_MODULE_12__["keys"](this.authenticationService.allUserLevelsDataBorrower).length <= 0) {
            this.authenticationService.fetchAllUserLevelsByUserId();
          }

          var paramobj = history.state;

          if (paramobj) {
            this.loanId = paramobj['loanId'];
            delete history.state['loanId'];
            this.loanApplyId = paramobj['loanApplyId'];
            delete history.state['loanApplyId'];

            if (this.loanApplyId) {
              this.initForm();
              this.clickedOnSignLoanContract(true);
            }

            if (this.loanId) {
              this.socketioService.getLoanMarketDataById(this.loanId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                //#region proccess for success here
                if (data && data['success']) {
                  if (data["data"]) {
                    //#region data set to local of loan obj
                    if (data["data"]["_id"]) {
                      _this2.LoanObj = data["data"];
                    } else {
                      _this2.LoanObj = data["data"][0];
                    }

                    var _obj4LoanApply = null;

                    if (_this2.loanApplyId) {
                      _obj4LoanApply = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](_this2.LoanObj.sessionAppliedByBorrowers, {
                        "_id": _this2.loanApplyId
                      })[0];

                      _this2.showEditingForm(_obj4LoanApply);
                    }

                    var _userIdOfLoanCreatorOrEditorWhichisNotCurrentUser = _this2.LoanObj.createdByUserObj._id;

                    if (_this2.loanApplyId) {
                      if (_this2.authenticationService.currentUserValue._id == _this2.LoanObj.createdByUserObj._id) {
                        _userIdOfLoanCreatorOrEditorWhichisNotCurrentUser = _obj4LoanApply.lenderId;
                      }
                    } //#endregion data set to local of loan obj
                    //#region fetch creator id


                    _this2.userService.getUserById(_userIdOfLoanCreatorOrEditorWhichisNotCurrentUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                      if (data && data['success']) {
                        _this2.lenderUserObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](data["data"]);
                        _this2.loading = false;
                        /*
                        if (this.loanApplyId) {
                          this.clickedOnSignLoanContract(true);
                        }
                        */
                      } else {
                        _this2.alertService.error(data['message']);

                        _this2.loading = false;

                        _this2.appRouterService.appRouter('');
                      }
                    }, function (error) {
                      var errorMsg2show = "";

                      try {
                        if (error && error.error && error.error.message) {
                          errorMsg2show = error.error.message;
                        } else if (error && error.message) {
                          errorMsg2show = error.message;
                        } else {
                          errorMsg2show = error;
                        }
                      } catch (ex) {}

                      _this2.alertService.error(errorMsg2show);

                      _this2.loading = false;

                      _this2.appRouterService.appRouter('');
                    }); //#endregion fetch creator id

                  }

                  _this2.loading = false;
                } else {
                  _this2.alertService.error(data['message']);

                  _this2.loading = false;

                  _this2.appRouterService.appRouter('');
                } //#endregion proccess for success here

              }, function (error) {
                //#region proccess for failure here
                var errorMsg2show = "";

                try {
                  if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                  } else if (error && error.message) {
                    errorMsg2show = error.message;
                  } else {
                    errorMsg2show = error;
                  }
                } catch (ex) {}

                _this2.alertService.error(errorMsg2show);

                _this2.loading = false;

                _this2.appRouterService.appRouter(''); //#endregion proccess for failure here

              }); //#region read current users data here

              this.userService.getUserById(this.authenticationService.currentUserValue._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                //#region proccess for success here
                if (data && data['success']) {
                  _this2.borrowerUserObj = data["data"];
                  _this2.loading = false;

                  if (_this2.loanApplyId) {
                    _this2.clickedOnSignLoanContract(true);
                  }
                } else {
                  _this2.alertService.error(data['message']);

                  _this2.loading = false;

                  _this2.appRouterService.appRouter('');
                } //#endregion proccess for success here

              }, function (error) {
                //#region proccess for failure here
                var errorMsg2show = "";

                try {
                  if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                  } else if (error && error.message) {
                    errorMsg2show = error.message;
                  } else {
                    errorMsg2show = error;
                  }
                } catch (ex) {}

                _this2.alertService.error(errorMsg2show);

                _this2.loading = false;

                _this2.appRouterService.appRouter(''); //#endregion proccess for failure here

              }); //#endregion read current users data here
            } else {
              //navigate back
              this.alertService.error("Data is missing or invalid entry");
              this.appRouterService.appRouter('');
            }
          } else {
            //navigate back
            this.alertService.error("Data is missing or invalid entry");
            this.appRouterService.appRouter('');
          }
        }

        _createClass(BorrowNowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.returnHeaderTitleForPage();
            this.borrowNowForm = this.formBuilder.group({
              eSignatureBorrowersPassportNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              eSignatureBorrowersName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              loanInsuranceRequired: [false],
              loanInsuranceAmount: [0],
              proposedLoanAmount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.LoanObj.loanAmount)],
              loanApplyNumber: [null],
              loanInsuranceCreatedOn: [null],
              calculatedMonthlyAmountForEMI: [null],
              eSignatureLendersCreatedOn: [null],
              eSignatureBorrowersCreatedOn: [null],
              loanAgreementCondition: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "showEditingForm",
          value: function showEditingForm(_userObj) {
            this.borrowNowForm = this.formBuilder.group({
              eSignatureLendersPassportNumber: [_userObj.eSignatureLendersPassportNumber || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              eSignatureLendersName: [_userObj.eSignatureLendersName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              eSignatureBorrowersPassportNumber: [_userObj.eSignatureBorrowersPassportNumber || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              eSignatureBorrowersName: [_userObj.eSignatureBorrowersName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              loanInsuranceRequired: [_userObj.loanInsuranceRequired || false],
              loanInsuranceAmount: [_userObj.loanInsuranceAmount || 0],
              proposedLoanAmount: [_userObj.proposedLoanAmount || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.LoanObj.loanAmount)],
              loanApplyNumber: [_userObj.loanApplyNumber || null],
              loanInsuranceCreatedOn: [_userObj.loanInsuranceCreatedOn || null],
              calculatedMonthlyAmountForEMI: [_userObj.calculatedMonthlyAmountForEMI || null],
              eSignatureLendersCreatedOn: [_userObj.eSignatureLendersCreatedOn || null],
              eSignatureBorrowersCreatedOn: [_userObj.eSignatureBorrowersCreatedOn || null],
              loanAgreementCondition: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.borrowNowForm.controls;
          }
        }, {
          key: "returnHeaderTitleForPage",
          value: function returnHeaderTitleForPage() {
            if (this.userClickedOnSignLoanContract) {
              this.headerMessage2show = "Sign Loan Contract";
            } else {
              this.headerMessage2show = "Loan Summary";
            }
          }
        }, {
          key: "resetClickedOnSignLoanContract",
          value: function resetClickedOnSignLoanContract() {
            this.userClickedOnSignLoanContract = false;
            this.returnHeaderTitleForPage();
          }
        }, {
          key: "clickedOnSignLoanContract",
          value: function clickedOnSignLoanContract() {
            var bypass2CheckOfProposedAmount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!bypass2CheckOfProposedAmount) {
              if (this.borrowNowForm.get('proposedLoanAmount').value) {
                /*
                if (this.borrowNowForm.get('proposedLoanAmount').value <= this.LoanObj.loanAmount) {
                  this.alertService.error("amount must be hight than kr " + this.LoanObj.loanAmount);
                  return;
                }
                */
                if (this.borrowNowForm.get('proposedLoanAmount').value <= 1) {
                  this.alertService.error("amount must be hight than kr " + 1);
                  return;
                }
                /*
                if (this.borrowNowForm.get('proposedLoanAmount').value > this.borrowerUserObj.monthlyIncomeExpenseMargineAmount) {
                  this.alertService.error("amount must be lower than or equal to kr " + this.borrowerUserObj.monthlyIncomeExpenseMargineAmount);
                  return;
                }
                */


                if (this.borrowNowForm.get('proposedLoanAmount').value > this.returnAllowedAmountForLenderDependOnUserType()) {
                  this.alertService.error("amount must be lower than or equal to kr " + this.returnAllowedAmountForLenderDependOnUserType());
                  return;
                }

                var _calculatedMonthlyAmountForEMI = this.utilityService.fnCalculateMonthlyAmountForEMI(this.borrowNowForm.get('proposedLoanAmount').value, this.LoanObj.loanTenureInMonths, this.LoanObj.loanInterestRate);

                this.borrowNowForm.get('calculatedMonthlyAmountForEMI').setValue(_calculatedMonthlyAmountForEMI);
              } else {
                if (!this.borrowNowForm.get('calculatedMonthlyAmountForEMI').value) {
                  var _calculatedMonthlyAmountForEMI2 = this.utilityService.fnCalculateMonthlyAmountForEMI(this.LoanObj.loanAmount, this.LoanObj.loanTenureInMonths, this.LoanObj.loanInterestRate);

                  this.borrowNowForm.get('calculatedMonthlyAmountForEMI').setValue(_calculatedMonthlyAmountForEMI2);
                }
              }
            }

            this.userClickedOnSignLoanContract = true;
            this.returnHeaderTitleForPage();

            if (this.borrowerUserObj) {
              this.borrowNowForm.get('eSignatureBorrowersName').setValue(this.borrowerUserObj.firstName || this.borrowerUserObj.lastName);
              this.borrowNowForm.get('eSignatureBorrowersPassportNumber').setValue(this.borrowerUserObj.myPassportNumber || this.borrowerUserObj.myDLNumber);
            }
          }
        }, {
          key: "returnAllowedAmountForLenderDependOnUserType",
          value: function returnAllowedAmountForLenderDependOnUserType() {
            var maxLoanAmountForLender = null;

            if (this.lenderUserObj.userType) {
              var maxLoanAmountForLenderObj = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](this.authenticationService.allUserLevelsDataLenders, {
                '_id': this.lenderUserObj.userType
              });

              if (maxLoanAmountForLenderObj && maxLoanAmountForLenderObj._id) {
                maxLoanAmountForLender = maxLoanAmountForLenderObj.minimumSpent;
              } else {
                maxLoanAmountForLender = null;
              }
            }

            if (maxLoanAmountForLender) {
              return maxLoanAmountForLender;
            } //#region old version


            if (this.lenderUserObj.userType) {
              maxLoanAmountForLender = this.utilityService.LoanAmountMaxTypes[this.lenderUserObj.userType].amount;
            } else {
              maxLoanAmountForLender = this.utilityService.LoanAmountMaxTypes[src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["UserType"].new_lender].amount;
            }

            return maxLoanAmountForLender; //#endregion old version
          }
        }, {
          key: "clickedOnVerifiedSignLoanContract",
          value: function clickedOnVerifiedSignLoanContract() {
            var _this3 = this;

            if (this.borrowerUserObj) {
              if (!this.borrowNowForm.get('eSignatureBorrowersName').value) {
                this.borrowNowForm.get('eSignatureBorrowersName').setValue(this.borrowerUserObj.firstName || this.borrowerUserObj.lastName);
              }

              if (!this.borrowNowForm.get('eSignatureBorrowersPassportNumber').value) {
                this.borrowNowForm.get('eSignatureBorrowersPassportNumber').setValue(this.borrowerUserObj.myPassportNumber || this.borrowerUserObj.myDLNumber);
              }
            }

            this.submitted = true;

            if (this.borrowNowForm.invalid) {
              return;
            }

            if (this.borrowNowForm.get('eSignatureBorrowersPassportNumber').value != this.borrowerUserObj.myPassportNumber) {
              this.alertService.error("Passport Number miss match. Please enter proper number");
              return;
            }

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Lender:
                this.borrowNowForm.get('eSignatureLendersCreatedOn').setValue(lodash__WEBPACK_IMPORTED_MODULE_12__["now"]());
                break;

              case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Borrower:
                this.borrowNowForm.get('eSignatureBorrowersCreatedOn').setValue(lodash__WEBPACK_IMPORTED_MODULE_12__["now"]());
                break;
            }

            var selectedTab = null;
            var _currentSessionApply = {
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
            _currentSessionApply = this.borrowNowForm.value;
            _currentSessionApply.sessionObj = this.LoanObj;

            if (this.borrowNowForm.get('proposedLoanAmount').value) {
              _currentSessionApply.sessionObj.loanAmount = this.borrowNowForm.get('proposedLoanAmount').value;
            }

            _currentSessionApply.borrowerId = this.borrowerUserObj._id;
            _currentSessionApply.lenderId = this.lenderUserObj._id;
            _currentSessionApply.loanId = this.LoanObj._id;
            _currentSessionApply.isLoanBorrowed = true;
            _currentSessionApply.status || src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Pending;
            _currentSessionApply._id = this.loanApplyId;

            if (_currentSessionApply) {
              if (!_currentSessionApply._id) {
                _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
              }

              if (this.LoanObj.createdBy == this.borrowerUserObj._id) {
                //here status set to accepted as this is lender side and creator is same so borrower already initiated ongoing proccess
                _currentSessionApply.status = _currentSessionApply.status || src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Accepted;
              } else {
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
                  this.socketService.updateSessionApply(true, _currentSessionApply, this.borrowerUserObj);
                  break;
              } //#region create chat group


              var _adminUsersArray = [];

              _adminUsersArray.push(this.lenderUserObj._id);

              _adminUsersArray.push(this.borrowerUserObj._id);
              /*this.borrowerUserObj.firstName + " - " + */


              var _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, this.utilityService.returnLoanType(this.LoanObj.loanType) + " - " + (this.LoanObj.loanNumber || ''), this.LoanObj._id, _currentSessionApply._id, _adminUsersArray, null, null, null, false);

              this.socketService.sendEventToAddNewContact(_currentContactObj); //#endregion create chat group

              switch (_currentSessionApply.status) {
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].AwaitingForApproval:
                  selectedTab = {
                    selectedTab: 'sent'
                  };
                  break;

                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Accepted:
                  this.alertService.success("Updated. Loan contract is available under My Contract->Active tab.", true); //#region print PDF signed contract

                  var _LoanObj = {
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

                  for (var index = 0; index < this.LoanObj.loanTenureInMonths; index++) {
                    var installment = {
                      loanStartDateTime: null,
                      calculatedMonthlyAmountForEMI: null
                    };
                    installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1).format("DD-MMM-YYYY");
                    installment.calculatedMonthlyAmountForEMI = this.borrowNowForm.get('calculatedMonthlyAmountForEMI').value || this.LoanObj.calculatedMonthlyAmountForEMI;

                    _LoanObj.installments.push(installment);
                  }

                  _LoanObj.loanType = this.utilityService.returnLoanType(this.LoanObj.loanType);
                  _LoanObj.loanRepaymentType = this.LoanObj.loanRepaymentType;
                  this.authenticationService.generateReport4SignedContract(_LoanObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {}, function (error) {
                    var errorMsg2show = "";

                    try {
                      if (error && error.error && error.error.message) {
                        errorMsg2show = error.error.message;
                      } else if (error && error.message) {
                        errorMsg2show = error.message;
                      } else {
                        errorMsg2show = error;
                      }
                    } catch (ex) {} //this.alertService.error(errorMsg2show);


                    _this3.loading = false;
                  }); //#endregion print PDF signed contract

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

            this.appRouterService.appRouteToPath("/borrower/my-contract", selectedTab);
          }
        }, {
          key: "clicked2LoanAgreementCondition",
          value: function clicked2LoanAgreementCondition(event) {
            if (event.srcElement.checked) {
              this.borrowNowForm.get('loanAgreementCondition').setValue(true);
            } else {
              this.borrowNowForm.get('loanAgreementCondition').setValue(false);
            }
          }
        }, {
          key: "usersProfile",
          value: function usersProfile(userObj) {
            var _this4 = this;

            //#region fetch creator id
            this.userService.getUserById(userObj._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                //console.log('84', this.authenticationService.currentUserValue);
                var dialogRef = _this4.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_14__["PublicProfileComponent"], {
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

                dialogRef.afterClosed().subscribe(function (result) {//console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
                });
              } else {}
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {}

              _this4.alertService.error(errorMsg2show);
            }); //#endregion fetch creator id
          }
        }]);

        return BorrowNowComponent;
      }();

      BorrowNowComponent.ctorParameters = function () {
        return [{
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__["SocketioService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__["SocketioService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_9__["AppRouterService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]
        }];
      };

      BorrowNowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-borrow-now',
        template: _raw_loader_borrow_now_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_borrow_now_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__["SocketioService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__["SocketioService"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_9__["AppRouterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]])], BorrowNowComponent);
      /***/
    },

    /***/
    "B8I+":
    /*!*************************************************!*\
      !*** ./src/app/borrower/room/room.component.ts ***!
      \*************************************************/

    /*! exports provided: RoomComponent */

    /***/
    function B8I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoomComponent", function () {
        return RoomComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_room_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./room.component.html */
      "t1JT");
      /* harmony import */


      var _room_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./room.component.css */
      "d+mw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RoomComponent = /*#__PURE__*/function () {
        function RoomComponent() {
          _classCallCheck(this, RoomComponent);
        }

        _createClass(RoomComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RoomComponent;
      }();

      RoomComponent.ctorParameters = function () {
        return [];
      };

      RoomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-room',
        template: _raw_loader_room_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_room_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RoomComponent);
      /***/
    },

    /***/
    "CgDp":
    /*!*************************************************!*\
      !*** ./src/app/borrower/home/home.component.ts ***!
      \*************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function CgDp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "/N9K");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "Fw9W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _borrower_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../borrower.component */
      "mtiP");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/sessions.service */
      "BZV/");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/add-funds.service */
      "3gPe");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/services/contact.service */
      "3ITz");
      /* harmony import */


      var src_app_shared_money_transfer_data_money_transfer_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/money-transfer-data/money-transfer-data.component */
      "rZf2");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(userService, socketService, formBuilder, sessionsService, alertService, utilityService, dialog, authenticationService, fundService, router, contactService, _cdr) {
          var _this5 = this;

          _classCallCheck(this, HomeComponent);

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

          this.Role = src_app_models__WEBPACK_IMPORTED_MODULE_13__["Role"];
          this.showSessionApplyInRoot = true; //by default set it to// false;

          this.allSessionApplyData = [];
          this.checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot();
          this.checkCreatedByUserId = null;
          this.checkCreatedByT = null;
          var _obj2Save = {}; //#region get count for allMyActiveLoanCount i.e. status set to paid

          _obj2Save = {
            borrowerId: this.authenticationService.currentUserValue._id,
            status: src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"].Completed
          };
          this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyPaidContractCount').subscribe(function (data) {
            ////console.log('data => ', data)
            if (data && data['success']) {
              _this5.allMyPaidContractCount = data['data'];
              _this5.allMyPaidLoanCount = data['data'];
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this5.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";

            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) {} //this.alertService.error(errorMsg2show);


            _this5.loading = false;
          }); //#endregion get count for allMyActiveLoanCount i.e. status set to paid
          //#region get count for allMyActiveLoanCount i.e. status set to accepted

          _obj2Save = {
            borrowerId: this.authenticationService.currentUserValue._id,
            status: src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"].Accepted
          };
          this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyActiveLoanCount').subscribe(function (data) {
            ////console.log('data => ', data)
            if (data && data['success']) {
              _this5.allMyActiveLoanCount = data['data'];
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this5.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";

            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) {} //this.alertService.error(errorMsg2show);


            _this5.loading = false;
          }); //#endregion get count for allMyActiveLoanCount i.e. status set to accepted
          //#region get count for allMyDisbursedLoanCount i.e. status set to accepted and loan amount paid by lender

          _obj2Save = {
            borrowerId: this.authenticationService.currentUserValue._id,
            status: src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"].Accepted,
            isLoanAmountPaidByLender: true
          };
          this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyDisbursedLoanCount').subscribe(function (data) {
            ////console.log('data => ', data)
            if (data && data['success']) {
              _this5.allMyDisbursedLoanCount = data['data'];
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this5.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";

            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) {} //this.alertService.error(errorMsg2show);


            _this5.loading = false;
          }); //#endregion get count for allMyDisbursedLoanCount i.e. status set to accepted and loan amount paid by lender
          //#region get count for allMyUnSignedContractLoanCount i.e. status set to AwaitingForApproval

          _obj2Save = {
            borrowerId: this.authenticationService.currentUserValue._id,
            status: src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"].AwaitingForApproval
          };
          this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyUnSignedContractLoanCount').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (data) {
            ////console.log('data => ', data)
            if (data && data['success']) {
              _this5.allMyUnSignedContractLoanCount = data['data'];
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this5.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";

            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) {} //this.alertService.error(errorMsg2show);


            _this5.loading = false;
          }); //#endregion get count for allMyUnSignedContractLoanCount i.e. status set to AwaitingForApproval

          this.sessionsService.getSessionAllByBorrowerId(this.authenticationService.currentUserValue._id, null, null, null, true, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (data) {
            ////console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              _this5.allSessionsData = data['data'];

              _this5.userService.proccessAllAppUsersCollections(_this5.utilityService._.uniq(_this5.utilityService._.map(_this5.utilityService._.flattenDepth(_this5.utilityService._.map(_this5.utilityService._.values(_this5.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')));

              _this5.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower(); //this.alertService.success(data['message'], true);


              _this5.loading = false; //this.element_btn_click_addSession_skills_verification.click();
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this5.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";

            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) {} //this.alertService.error(errorMsg2show);


            _this5.loading = false;
          });
          this.sessionsService.getUpdatesForSessionAllByBorrowerId().subscribe(function (data) {
            if (data && data['success']) {
              var _keyPairedMapObj = _this5.utilityService._.mapKeys(_this5.allSessionsData, "_id");

              for (var _items in data['data']) {
                var _currentObj = data['data'][_items];
                _keyPairedMapObj[_currentObj._id] = _currentObj;
              }

              _this5.allSessionsData = _this5.utilityService._.values(_keyPairedMapObj);

              _this5.userService.proccessAllAppUsersCollections(_this5.utilityService._.uniq(_this5.utilityService._.map(_this5.utilityService._.flattenDepth(_this5.utilityService._.map(_this5.utilityService._.values(_this5.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')));

              _this5.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();

              _this5.loading = false;
            } else {
              _this5.loading = false;
            }
          }, function (error) {
            _this5.loading = false;
          });
          /*
              this.subscription = this.socketService.getCurrentOnlineUsersListObj().subscribe(_currentOnlineUserList => {
                if (_currentOnlineUserList) {
                  this.currentOnlineUserList = _currentOnlineUserList;
                } else {
                  this.currentOnlineUserList = null;
                }
              });
          
              this.subscription1 =  this.socketService.getCurrentSessionCount().subscribe(_allSessionsCount => {
                if (_allSessionsCount) {
                  this.allSessionsCount = _allSessionsCount;
                } else {
                  this.allSessionsCount = null;
                }
              });
          
              let _obj2Use4Filter = {
                role: 'borrower'
              };
              let useAndTrueOrFalse = false;
          
              this.socketService.getUserOnlineList(false, _obj2Use4Filter, useAndTrueOrFalse);
              let _obj2Save = {};
              this.socketService.getSessionCountByQuery(false, _obj2Save);
              fundService.getFundsCountForRequestedUser(this.authenticationService.currentUserValue._id);
              fundService.getSessionSpentCountForRequestedUser(this.authenticationService.currentUserValue._id);
              this.socketService.getSessionAllTodaysDateAcceptedOnly(this.authenticationService.currentUserValue._id, this.authenticationService.currentUserValue.role).subscribe(result => {
                let data = null;
                if (result) {
                  if (result['success'] == true || result['success'] == false) {
                    data = result['data'];
                  } else {
                    data = result;
                  }
                }
                this.allSessionsTodayList = data;
                if (this.utilityService._.keys(this.allSessionsTodayList).length <= 0) {
                  this.allSessionsTodayList = [];
                }
                this.allSessionsTodayCount = this.utilityService._.keys(this.allSessionsTodayList).length;
              });
              */
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot",
          value: function checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot() {
            var _this6 = this;

            this.userService.getUserIncomeExpenseDetailsByUserId(this.authenticationService.currentUserValue._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                if (data["data"]["bankName"] && data["data"]["accountNumber"] || data["data"]["isUsersBankDetailsSubmitted"]) {
                  _this6.authenticationService.currentUserValue.isUsersBankDetailsSubmitted = true;

                  _this6.authenticationService.sendCurrentUserObj(_this6.authenticationService.currentUserValue);
                }

                if (data["data"]["totalIncome4currentUser"] && data["data"]["totalExpense4currentUser"]) {
                  _this6.authenticationService.currentUserValue.totalIncome4currentUser = data["data"]["totalIncome4currentUser"];
                  _this6.authenticationService.currentUserValue.totalExpense4currentUser = data["data"]["totalExpense4currentUser"];
                  _this6.authenticationService.currentUserValue.totalAllowedBudget = _this6.authenticationService.currentUserValue.totalIncome4currentUser - _this6.authenticationService.currentUserValue.totalExpense4currentUser;
                  _this6.authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified = true;

                  _this6.authenticationService.sendCurrentUserObj(_this6.authenticationService.currentUserValue);
                }
              } else {}
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {}

              _this6.loading = false;
            });
          }
        }, {
          key: "returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender",
          value: function returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender(LoanApplyObj, currentRowDate, _key) {
            var _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');

            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
              if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
                if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey].createdOnForLoanAmountPaidToLenderConfirmByLender) {
                  return true;
                }
              }
            }

            return false;
          }
        }, {
          key: "returnT4IfCurrentInstallmentAlreadyPaid",
          value: function returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, currentRowDate, _key) {
            var _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');

            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
              if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower",
          value: function calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower() {
            //#region calculate and update next EMI of applied loans
            for (var item in this.allSessionsData) {
              var _LoanObj = this.allSessionsData[item];

              if (_LoanObj) {
                _LoanObj.nextInstallment = null;

                for (var indexOuter in _LoanObj.sessionAppliedByBorrowers) {
                  var LoanApplyObj = _LoanObj.sessionAppliedByBorrowers[indexOuter];

                  if (LoanApplyObj) {
                    for (var index = 0; index < _LoanObj.loanTenureInMonths; index++) {
                      var installment = {
                        loanStartDateTime: null,
                        calculatedMonthlyAmountForEMI: null
                      };
                      installment.loanStartDateTime = this.utilityService.returnDateWithAddingMonths(_LoanObj.loanStartDateTime, index + 1);

                      if (!this.returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, installment.loanStartDateTime, null)) {
                        if (!_LoanObj.nextInstallment) {
                          if (this.utilityService.moment(_LoanObj.nextInstallment).isBefore(this.utilityService.moment(installment.loanStartDateTime))) {
                            break;
                          }
                        }

                        _LoanObj.applicationDate = LoanApplyObj.eSignatureLendersCreatedOn || LoanApplyObj.eSignatureBorrowersCreatedOn;
                        _LoanObj.nextInstallment = installment.loanStartDateTime;
                        break;
                      }
                    }
                  }
                }

                this.allSessionsData[item] = _LoanObj;
              }
            } //#endregion calculate and update next EMI of applied loans
            //#region create session apply from sessions


            if (this.showSessionApplyInRoot) {
              this.reformSessionApplyFromSessionsData(true);
            } //#endregion create session apply from sessions

          }
        }, {
          key: "reformSessionApplyFromSessionsData",
          value: function reformSessionApplyFromSessionsData() {
            var resetOldT = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            //#region create session apply from sessions
            if (resetOldT) {
              this.allSessionApplyData = [];
            }

            for (var item in this.allSessionsData) {
              for (var _item in this.allSessionsData) {
                var _LoanObj = this.allSessionsData[_item];

                if (_LoanObj) {
                  for (var indexOuter in _LoanObj.sessionAppliedByBorrowers) {
                    var LoanApplyObj = _LoanObj.sessionAppliedByBorrowers[indexOuter];

                    if (LoanApplyObj) {
                      var sessionForBorrower = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](_LoanObj);
                      delete sessionForBorrower.sessionAppliedByBorrowers;
                      LoanApplyObj.sessionForBorrower = sessionForBorrower;
                      LoanApplyObj.applicationDate = _LoanObj.applicationDate;
                      LoanApplyObj.nextInstallment = _LoanObj.nextInstallment;
                      this.allSessionApplyData[LoanApplyObj._id] = LoanApplyObj;
                    }
                  }
                }
              }
            } //#endregion create session apply from sessions

          }
        }, {
          key: "sessionApplyOngoingCheck",
          value: function sessionApplyOngoingCheck(sessionObj, sessionApply) {
            //console.log('179', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_6__["ModalApplySession"], {
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              data: {
                sessionObj: sessionObj,
                borrowerId: this.authenticationService.currentUserValue._id,
                sessionApply: sessionApply
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              var _currentSessionApply = null;

              if (result) {
                if (result.data) {}
              } //console.log(`163 :: myc :: Dialog result: ${JSON.stringify(result)}`);

            });
          }
        }, {
          key: "showAppliedToSession",
          value: function showAppliedToSession(sessionObj) {
            var _this7 = this;

            var _proccessedSessionObj = null;

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](sessionObj.sessionAppliedByBorrowers, {
                  "borrowerId": this.authenticationService.currentUserValue._id
                });
                break;

              default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](sessionObj);
                break;
            } //console.log('214', this.authenticationService.currentUserValue);


            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_6__["ModalAppliedSessionDisplay"], {
              backdropClass: 'custom-dialog-backdrop-class',
              panelClass: 'my_session_details_modal',
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              data: {
                sessionObj: _proccessedSessionObj,
                borrowerId: this.authenticationService.currentUserValue._id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                if (result.data) {
                  //console.log(`86 :: msc :: Dialog result: ${JSON.stringify(result)}`);
                  if (result.data.status && result.data.sessionApply) {
                    var _loanApplyId = result.data.sessionApply._id;
                    var _status = result.data.status; //initiate payment here
                    //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);

                    var _allowed2CreateContactForSessionT = false;

                    switch (_status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"].Accepted:
                        //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                        _this7.proccedAppliedToSession(sessionObj, _loanApplyId);

                        break;
                    }
                  }

                  if (result.data.updatedSessionObj) {
                    var _keyPairedMapObj = _this7.utilityService._.mapKeys(_this7.allSessionsData, "_id");

                    _keyPairedMapObj[result.data.updatedSessionObj._id] = result.data.updatedSessionObj;
                    _this7.allSessionsData = _this7.utilityService._.values(_keyPairedMapObj);

                    _this7.userService.proccessAllAppUsersCollections(_this7.utilityService._.uniq(_this7.utilityService._.map(_this7.utilityService._.flattenDepth(_this7.utilityService._.map(_this7.utilityService._.values(_this7.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')));

                    _this7.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();

                    _this7._cdr.detectChanges();
                  }
                }
              }
            });
          }
        }, {
          key: "proccedAppliedToSession",
          value: function proccedAppliedToSession(sessionObj, loanApplyId) {
            var loanId = sessionObj._id;
            var _proccessedSessionObj = null;

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](sessionObj.sessionAppliedByBorrowers, {
                  "borrowerId": this.authenticationService.currentUserValue._id
                });
                break;

              case src_app_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Lender:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](sessionObj.sessionAppliedByBorrowers, {
                  "lenderId": this.authenticationService.currentUserValue._id
                }); //_sessionAppliedByLenders

                break;

              default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](sessionObj);
                break;
            }

            if (!loanApplyId) {
              loanApplyId = _proccessedSessionObj.sessionAppliedByBorrowers[0]._id;
            }

            this.router.navigate(['/borrower/borrow-now'], {
              state: {
                loanId: loanId,
                loanApplyId: loanApplyId
              }
            });
          }
        }, {
          key: "LoanMoneyTransferStatusChange",
          value: function LoanMoneyTransferStatusChange(event, LoanObj, LoanApplyObj) {
            var _this8 = this;

            var installmentKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var updateLastInstallmentPaymentStatus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            //console.log('585', this.authenticationService.currentUserValue);
            if (installmentKey) {
              if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                for (var _items in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                  var _currentObj = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items];

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
                for (var _items2 in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                  var _currentObj2 = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items2];

                  if (_currentObj2) {
                    if (_currentObj2.createdOnForLoanAmountPaidToLender && !_currentObj2.createdOnForLoanAmountPaidToLenderConfirmByLender) {
                      installmentKey = _currentObj2.installmentKey;
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

            var LoanApplyObjCurrent4Installment = {
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
                if (!updateLastInstallmentPaymentStatus) {//#region Borrower updating status for installment done
                  //#endregion Borrower updating status for installment done
                } else {//#region Lender updating status for installment done by Borrower
                  //#endregion Lender updating status for installment done by Borrower
                } //#region direct action here with BYPASS ALL CASES


                LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin = false;
                LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender = this.utilityService._.now();
                LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender = 'AUTO-SAVED';
                LoanApplyObjCurrent4Installment.installmentKey = this.utilityService.moment(installmentKey).format('DD-MMM-YYYY');
                LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender = this.utilityService._.now();
                LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender = this.utilityService._.now();
                LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender = this.utilityService._.now();

                var _loanTenureInMonths = parseInt(LoanObj.loanTenureInMonths);

                if (_loanTenureInMonths == lodash__WEBPACK_IMPORTED_MODULE_12__["keys"](LoanApplyObj.installmentWiseLoanAmountPaidByBorrower).length + 1) {
                  if (confirm("This is confirmation of last installment") == false) {
                    event.srcElement.checked = false;
                    return;
                  }
                }

                if (!LoanApplyObj.isLoanAmountPaidByLender) {
                  //#region direct action here with BYPASS ALL CASES
                  this.middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, true, true); //#endregion direct action here with BYPASS ALL CASES
                }

                this.socketService.sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, installmentKey, _loanTenureInMonths, LoanApplyObjCurrent4Installment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (details) {
                  if (details && details["success"]) {
                    _this8.broadcastUpdatedEvent2All(details["data"]);
                  }
                }); //#endregion direct action here with BYPASS ALL CASES
              } else {
                if (!LoanApplyObj.isLoanAmountPaidByLender) {//#region Lender updating status for payment done
                  //#endregion Lender updating status for payment done
                } else {//#region Borrower updating status for payment done by Lender
                  //#endregion Borrower updating status for payment done by Lender
                } //#region direct action here with BYPASS ALL CASES


                this.middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, true, false); //#endregion direct action here with BYPASS ALL CASES
              } //#endregion update status add data

            } else {
              //#region update status remove data
              if (installmentKey) {
                if (!updateLastInstallmentPaymentStatus) {//#region Borrower updating status for installment done
                  //#endregion Borrower updating status for installment done
                } else {//#region Lender updating status for installment done by Borrower
                  //#endregion Lender updating status for installment done by Borrower
                } //#region direct action here with BYPASS ALL CASES


                LoanApplyObjCurrent4Installment.isInstallmentPaidByAdmin = false;
                LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender = null;
                LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender = null;
                LoanApplyObjCurrent4Installment.installmentKey = this.utilityService.moment(installmentKey).format('DD-MMM-YYYY');
                LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender = null;
                LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender = null;
                LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender = null;
                LoanApplyObjCurrent4Installment["installmentKeyDeleteThisKey"] = true;

                var _loanTenureInMonths2 = parseInt(LoanObj.loanTenureInMonths);

                this.socketService.sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, installmentKey, _loanTenureInMonths2, LoanApplyObjCurrent4Installment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (details) {
                  if (details && details["success"]) {
                    _this8.broadcastUpdatedEvent2All(details["data"]);
                  }
                }); //#endregion direct action here with BYPASS ALL CASES
              } else {
                if (!LoanApplyObj.isLoanAmountPaidByLender) {//#region Lender updating status for payment done
                  //#endregion Lender updating status for payment done
                } else {//#region Borrower updating status for payment done by Lender
                  //#endregion Borrower updating status for payment done by Lender
                } //#region direct action here with BYPASS ALL CASES


                this.middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, false, false); //#endregion direct action here with BYPASS ALL CASES
              } //#endregion update status remove data

            }
          }
        }, {
          key: "middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll",
          value: function middiatorFnForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj, addTremoveF, addedWithInstallment) {
            var _this9 = this;

            var LoanApplyObjCurrent = {
              isLoanAmountPaidByLender: null,
              _id: null,
              createdOnForLoanAmountPaidByLender: null,
              transactionIdForLoanAmountPaidByLender: null,
              transactionOnForLoanAmountPaidByLender: null,
              transactionDescriptionForLoanAmountPaidByLender: null,
              transactionOnForLoanAmountPaidByLenderConfirmByBorrower: null,
              createdOnForLoanAmountPaidByLenderConfirmByBorrower: null,
              transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower: null,
              isLoanAmountPaidByLenderConfirmByBorrower: null
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
            } else {
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

            this.socketService.sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, LoanApplyObjCurrent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (details) {
              if (details && details["success"]) {
                _this9.broadcastUpdatedEvent2All(details["data"]);
              }
            });
          }
        }, {
          key: "LoanMoneyTransferStatusModel",
          value: function LoanMoneyTransferStatusModel(LoanObj, LoanApplyObj) {
            var _this10 = this;

            var installmentKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var updateLastInstallmentPaymentStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            //console.log('585', this.authenticationService.currentUserValue);
            if (installmentKey) {
              if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                for (var _items in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                  var _currentObj = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items];

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
                for (var _items3 in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                  var _currentObj3 = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_items3];

                  if (_currentObj3) {
                    if (_currentObj3.createdOnForLoanAmountPaidToLender && !_currentObj3.createdOnForLoanAmountPaidToLenderConfirmByLender) {
                      installmentKey = _currentObj3.installmentKey;
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

            var dialogRef = this.dialog.open(src_app_shared_money_transfer_data_money_transfer_data_component__WEBPACK_IMPORTED_MODULE_17__["MoneyTransferDataComponent"], {
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
            dialogRef.afterClosed().subscribe(function (result) {
              //console.log(`597 :: msc :: Dialog result: ${JSON.stringify(result)}`);
              if (result && result.data && result.data.updatedSessionObj) {
                _this10.broadcastUpdatedEvent2All(result.data.updatedSessionObj);
              }
            });
          }
        }, {
          key: "broadcastUpdatedEvent2All",
          value: function broadcastUpdatedEvent2All(sessionObj) {
            if (sessionObj) {
              var _keyPairedMapObj = this.utilityService._.mapKeys(this.allSessionsData, "_id");

              _keyPairedMapObj[sessionObj._id] = sessionObj;
              this.allSessionsData = this.utilityService._.values(_keyPairedMapObj);
              this.userService.proccessAllAppUsersCollections(this.utilityService._.uniq(this.utilityService._.map(this.utilityService._.flattenDepth(this.utilityService._.map(this.utilityService._.values(this.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId')));
              this.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();

              this._cdr.detectChanges();
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_9__["SessionsService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
        }, {
          type: src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_14__["AddFundsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]
        }, {
          type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_16__["ContactService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_9__["SessionsService"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_14__["AddFundsService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_16__["ContactService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], HomeComponent);
      /***/
    },

    /***/
    "Denz":
    /*!***************************************************************!*\
      !*** ./src/app/borrower/my-sessions/my-sessions.component.ts ***!
      \***************************************************************/

    /*! exports provided: MySessionsComponent */

    /***/
    function Denz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MySessionsComponent", function () {
        return MySessionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_sessions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-sessions.component.html */
      "5I6h");
      /* harmony import */


      var _my_sessions_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-sessions.component.css */
      "8ZRX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sessions.service */
      "BZV/");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _borrower_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../borrower.component */
      "mtiP");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/public-profile/public-profile.component */
      "bLZ2");

      var MySessionsComponent = /*#__PURE__*/function () {
        function MySessionsComponent(socketService, sessionsService, alertService, utilityService, dialog, authenticationService, userService, router, _cdr) {
          _classCallCheck(this, MySessionsComponent);

          this.socketService = socketService;
          this.sessionsService = sessionsService;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.dialog = dialog;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.router = router;
          this._cdr = _cdr;
          this.SessionStatusTypeFilter = [];
          this.checkCreatedByUserId = '';
          this.checkCreatedByT = false;
          this.SessionStatus = src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"];
          this.selectedTab = 'active';
          this._ = lodash__WEBPACK_IMPORTED_MODULE_11__;
          var paramobj = history.state;

          if (paramobj) {
            this.selectedTab = paramobj['selectedTab'];
            delete history.state['selectedTab'];
          }

          if (!this.selectedTab) {
            this.selectedTab = 'active';
          }

          this.setFilteresOfMySessionDependsOnTab(this.selectedTab);
          this.getUserLoanTypeWiseCountDetailsByUserId();
        }

        _createClass(MySessionsComponent, [{
          key: "setFilteresOfMySessionDependsOnTab",
          value: function setFilteresOfMySessionDependsOnTab(selectedTab) {
            switch (selectedTab) {
              case 'received':
                this.SessionStatusTypeFilter = [src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending, src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].AwaitingForApproval];
                this.checkCreatedByUserId = this.authenticationService.currentUserValue._id;
                this.checkCreatedByT = true;
                break;

              case 'sent':
                this.SessionStatusTypeFilter = [src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].AwaitingForApproval];
                this.checkCreatedByUserId = this.authenticationService.currentUserValue._id;
                this.checkCreatedByT = false;
                break;

              case 'canceled':
                this.SessionStatusTypeFilter = [src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Canceled, src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Rejected, src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoing, src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Suspended, src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoingWithRefund];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;

              case 'active':
                this.SessionStatusTypeFilter = [src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Accepted];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;

              case 'paid':
                this.SessionStatusTypeFilter = [src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Completed];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;

              case 'unpaid':
                this.SessionStatusTypeFilter = [src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoing, src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Suspended, src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Unpaid];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;

              case 'inkasso':
                this.SessionStatusTypeFilter = [src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Rejected, src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoingWithRefund, src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Inkasso];
                this.checkCreatedByUserId = null;
                this.checkCreatedByT = false;
                break;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            (function ($) {
              try {
                $('.tooltip-info').tooltip();
              } catch (ex) {//console.log('48', ex.message);
              }
            })(jQuery);

            this.sessionsService.getSessionAllByBorrowerId(this.authenticationService.currentUserValue._id, null, null, null, true, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                var _keyPairedMapObj = _this11.utilityService._.mapKeys(_this11.allSessionsData, "_id");

                for (var _items in data['data']) {
                  var _currentObj = data['data'][_items];
                  _keyPairedMapObj[_currentObj._id] = _currentObj;
                }

                _this11.allSessionsData = _this11.utilityService._.values(_keyPairedMapObj);

                _this11.userService.proccessAllAppUsersCollections(_this11.utilityService._.uniq(_this11.utilityService._.map(_this11.utilityService._.flattenDepth(_this11.utilityService._.map(_this11.utilityService._.values(_this11.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId'))); //this.alertService.success(data['message'], true);


                _this11.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this11.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {} //this.alertService.error(errorMsg2show);


              _this11.loading = false;
            });
            this.sessionsService.getUpdatesForSessionAllByBorrowerId().subscribe(function (data) {
              if (data && data['success']) {
                var _keyPairedMapObj = _this11.utilityService._.mapKeys(_this11.allSessionsData, "_id");

                for (var _items in data['data']) {
                  var _currentObj = data['data'][_items];
                  _keyPairedMapObj[_currentObj._id] = _currentObj;
                }

                _this11.allSessionsData = _this11.utilityService._.values(_keyPairedMapObj);

                _this11.userService.proccessAllAppUsersCollections(_this11.utilityService._.uniq(_this11.utilityService._.map(_this11.utilityService._.flattenDepth(_this11.utilityService._.map(_this11.utilityService._.values(_this11.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')));

                _this11.loading = false;
              } else {
                _this11.loading = false;
              }
            }, function (error) {
              _this11.loading = false;
            });
            this.socketService.getCurrentSessionAll().subscribe(function (_allSessionsData) {
              if (_allSessionsData) {
                var data = {
                  'data': _allSessionsData
                };

                var _keyPairedMapObj = _this11.utilityService._.mapKeys(_this11.allSessionsData, "_id");

                for (var _items in data['data']) {
                  var _currentObj = data['data'][_items];
                  _keyPairedMapObj[_currentObj._id] = _currentObj;
                }

                _this11.allSessionsData = _this11.utilityService._.values(_keyPairedMapObj);

                _this11.userService.proccessAllAppUsersCollections(_this11.utilityService._.uniq(_this11.utilityService._.map(_this11.utilityService._.flattenDepth(_this11.utilityService._.map(_this11.utilityService._.values(_this11.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')));
              } else {//this.allSessionsData = [];
              }
            });
            var _obj2Save = {
              createdBy: this.authenticationService.currentUserValue._id
            };
            this.socketService.getSessionAllByQuery(false, _obj2Save, null);
          }
        }, {
          key: "showAppliedToSession",
          value: function showAppliedToSession(sessionObj) {
            var _this12 = this;

            var _proccessedSessionObj = null;

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_12__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](sessionObj.sessionAppliedByBorrowers, {
                  "borrowerId": this.authenticationService.currentUserValue._id
                });
                break;

              default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](sessionObj);
                break;
            } //console.log('214', this.authenticationService.currentUserValue);


            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_10__["ModalAppliedSessionDisplay"], {
              backdropClass: 'custom-dialog-backdrop-class',
              panelClass: 'my_session_details_modal',
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              data: {
                sessionObj: _proccessedSessionObj,
                borrowerId: this.authenticationService.currentUserValue._id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                if (result.data) {
                  //console.log(`86 :: msc :: Dialog result: ${JSON.stringify(result)}`);
                  if (result.data.status && result.data.sessionApply) {
                    var _loanApplyId = result.data.sessionApply._id;
                    var _status = result.data.status; //initiate payment here
                    //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);

                    var _allowed2CreateContactForSessionT = false;

                    switch (_status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Accepted:
                        //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                        _this12.proccedAppliedToSession(sessionObj, _loanApplyId);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Rejected:
                        _this12.socketService.setSessionApplyUpdateStatus(true, result.data.sessionApply.loanId, _loanApplyId, _status, _this12.authenticationService.currentUserValue._id, null);

                        break;
                    }
                  }

                  if (result.data.updatedSessionObj) {
                    var _keyPairedMapObj = _this12.utilityService._.mapKeys(_this12.allSessionsData, "_id");

                    _keyPairedMapObj[result.data.updatedSessionObj._id] = result.data.updatedSessionObj;
                    _this12.allSessionsData = _this12.utilityService._.values(_keyPairedMapObj);

                    _this12.userService.proccessAllAppUsersCollections(_this12.utilityService._.uniq(_this12.utilityService._.map(_this12.utilityService._.flattenDepth(_this12.utilityService._.map(_this12.utilityService._.values(_this12.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')));

                    _this12._cdr.detectChanges();
                  }
                }
              }
            });
          }
        }, {
          key: "proccedAppliedToSession",
          value: function proccedAppliedToSession(sessionObj, loanApplyId) {
            var loanId = sessionObj._id;
            var _proccessedSessionObj = null;

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_12__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](sessionObj.sessionAppliedByBorrowers, {
                  "borrowerId": this.authenticationService.currentUserValue._id
                });
                break;

              default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](sessionObj);
                break;
            }

            if (!loanApplyId) {
              loanApplyId = _proccessedSessionObj.sessionAppliedByBorrowers[0]._id;
            }

            this.router.navigate(['/borrower/borrow-now'], {
              state: {
                loanId: loanId,
                loanApplyId: loanApplyId
              }
            });
          }
        }, {
          key: "check4applyToSession",
          value: function check4applyToSession(sessionObj, checkCreatedBySelfT) {
            if (sessionObj && sessionObj.sessionAppliedByBorrowers) {
              if (checkCreatedBySelfT) {
                if (sessionObj.createdBy == this.authenticationService.currentUserValue._id) {
                  if (lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](sessionObj.sessionAppliedByBorrowers, {
                    "borrowerId": this.authenticationService.currentUserValue._id
                  }).length > 0) {
                    return true;
                  }
                }
              }
            }

            return false;
          }
        }, {
          key: "returnSessionApplyStatus",
          value: function returnSessionApplyStatus(sessionApply) {
            var _currentStatus = src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending;

            try {
              if (sessionApply.status == src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending || sessionApply.status == 'Pending' || sessionApply.status == '' || sessionApply.status == null || typeof sessionApply.status == 'undefined') {
                _currentStatus = src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending;
              } else {
                _currentStatus = sessionApply.status;
              }
            } catch (ex) {}

            return _currentStatus;
          }
        }, {
          key: "sessionApplyOngoingCheck",
          value: function sessionApplyOngoingCheck(sessionObj, sessionApply) {
            var _this13 = this;

            //console.log('179', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_10__["ModalApplySession"], {
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              data: {
                sessionObj: sessionObj,
                borrowerId: this.authenticationService.currentUserValue._id,
                sessionApply: sessionApply
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              var _currentSessionApply = null;

              if (result) {
                if (result.data) {
                  _currentSessionApply = result.data.sessionApply;

                  if (_currentSessionApply) {
                    if (!_currentSessionApply._id) {
                      _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
                    }

                    var _loanId = _currentSessionApply.loanId;
                    var _sessionPrice = _currentSessionApply.loanAmount;
                    var _loanApplyId = _currentSessionApply._id;
                    var _borrowerId = _currentSessionApply.borrowerId;
                    var _transactionId = result.data.transactionId;
                    var _status = result.data.status;
                    _currentSessionApply.status = result.data.status || src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending;

                    _this13.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending:
                        _currentSessionApply.createdBy = _this13.authenticationService.currentUserValue._id;

                        _this13.socketService.setSessionApply(true, _currentSessionApply);

                        break;

                      default:
                        _this13.socketService.updateSessionApply(true, _currentSessionApply, _this13.authenticationService.currentUserValue);

                        break;
                    }

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Accepted:
                        _this13.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending:
                        _this13.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Rejected:
                        _this13.socketService.setSessionApplyUpdateStatus(true, _loanId, _loanApplyId, _status, _this13.authenticationService.currentUserValue._id, _transactionId);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoingWithRefund:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Suspended:
                        _this13.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Completed:
                        _this13.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Active:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Ongoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].OngoingInitiated:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].AwaitingForApproval:
                        _this13.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);

                        break;

                      default:
                        break;
                    }
                  }
                }
              } //console.log(`163 :: myc :: Dialog result: ${JSON.stringify(result)}`);

            });
          }
        }, {
          key: "getUserLoanTypeWiseCountDetailsByUserId",
          value: function getUserLoanTypeWiseCountDetailsByUserId() {
            var _this14 = this;

            this.userService.getUserLoanTypeWiseCountDetailsByUserId(this.authenticationService.currentUserValue._id, this.authenticationService.currentUserValue.role).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                _this14.authenticationService.currentUserLoanTypeWiseCountDetails = data['data'];
              } else {}
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {}
            });
          }
        }, {
          key: "usersProfile",
          value: function usersProfile(userObj) {
            var _this15 = this;

            //#region fetch creator id
            this.userService.getUserById(userObj._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                //console.log('84', this.authenticationService.currentUserValue);
                var dialogRef = _this15.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_14__["PublicProfileComponent"], {
                  maxWidth: '100vw',
                  maxHeight: '100vh',
                  height: '100%',
                  width: '100%',
                  hasBackdrop: true,
                  data: {
                    userObj: lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](data['data']),
                    adminViewT: false
                  }
                });

                dialogRef.afterClosed().subscribe(function (result) {//console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
                });
              } else {}
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {}

              _this15.alertService.error(errorMsg2show);
            }); //#endregion fetch creator id
          }
        }, {
          key: "deleteSessionById",
          value: function deleteSessionById(sessionId) {
            var _this16 = this;

            this.sessionsService.deleteSessionById(sessionId, this.authenticationService.currentUserValue._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (_allLoanMarketData) {
              if (_allLoanMarketData && _allLoanMarketData['success']) {
                //alert(JSON.stringify( data));
                if (_allLoanMarketData) {
                  if (_allLoanMarketData["success"]) {
                    var temp_allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_11__["mapKeys"](_this16.allSessionsData, '_id');

                    if (_allLoanMarketData["data"].isDeleted) {
                      delete temp_allLoanMarketData[_allLoanMarketData["data"]._id];

                      _this16.alertService.success('Deleted successfully');
                    } else {
                      temp_allLoanMarketData[_allLoanMarketData["data"]._id] = _allLoanMarketData["data"];

                      _this16.alertService.success('Updated successfully');
                    }

                    _this16.allSessionsData = lodash__WEBPACK_IMPORTED_MODULE_11__["values"](temp_allLoanMarketData);

                    _this16.userService.proccessAllAppUsersCollections(_this16.utilityService._.uniq(_this16.utilityService._.map(_this16.utilityService._.flattenDepth(_this16.utilityService._.map(_this16.utilityService._.values(_this16.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId')));

                    _this16._cdr.detectChanges();
                  }
                }

                _this16.loading = false;
              } else {
                //alert(JSON.stringify(data['message']));
                _this16.alertService.error(_allLoanMarketData['message']);

                _this16.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {}

              _this16.alertService.error(errorMsg2show);

              _this16.loading = false;
            });
          }
        }]);

        return MySessionsComponent;
      }();

      MySessionsComponent.ctorParameters = function () {
        return [{
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"]
        }, {
          type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_5__["SessionsService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      MySessionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-sessions',
        template: _raw_loader_my_sessions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_sessions_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"], src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_5__["SessionsService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], MySessionsComponent);
      /***/
    },

    /***/
    "F8Mo":
    /*!*********************************************************!*\
      !*** ./src/app/borrower/earnings/earnings.component.ts ***!
      \*********************************************************/

    /*! exports provided: EarningsComponent */

    /***/
    function F8Mo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EarningsComponent", function () {
        return EarningsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_earnings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./earnings.component.html */
      "2mJr");
      /* harmony import */


      var _earnings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./earnings.component.css */
      "/b2o");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EarningsComponent = /*#__PURE__*/function () {
        function EarningsComponent() {
          _classCallCheck(this, EarningsComponent);
        }

        _createClass(EarningsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EarningsComponent;
      }();

      EarningsComponent.ctorParameters = function () {
        return [];
      };

      EarningsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-earnings',
        template: _raw_loader_earnings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_earnings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EarningsComponent);
      /***/
    },

    /***/
    "Fw9W":
    /*!**************************************************!*\
      !*** ./src/app/borrower/home/home.component.css ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Fw9W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container_read {\r\n    height: 70px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .show_more {\r\n    overflow: visible;\r\n    height: auto;\r\n  }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfcmVhZCB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuc2hvd19tb3JlIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgIl19 */";
      /***/
    },

    /***/
    "Gbp1":
    /*!****************************************************************!*\
      !*** ./src/app/borrower/loan-market/loan-market.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function Gbp1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrapper:focus {\r\n    outline: 0;\r\n}\r\n\r\n.clash-card {\r\n    background: white;\r\n    display: inline-block;\r\n    margin: auto;\r\n    border-radius: 19px;\r\n    position: relative;\r\n    text-align: center;\r\n    box-shadow: -1px 15px 30px -12px black;\r\n}\r\n\r\n.clash-card__image {\r\n    position: relative;\r\n    height: 230px;\r\n    margin-bottom: 35px;\r\n    border-top-left-radius: 14px;\r\n    border-top-right-radius: 14px;\r\n}\r\n\r\n.clash-card__image--barbarian {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg');\r\n}\r\n\r\n.clash-card__image--barbarian img {\r\n    width: 400px;\r\n    position: absolute;\r\n    top: -65px;\r\n    left: -70px;\r\n}\r\n\r\n.clash-card__image--archer {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg');\r\n}\r\n\r\n.clash-card__image--archer img {\r\n    width: 400px;\r\n    position: absolute;\r\n    top: -34px;\r\n    left: -37px;\r\n}\r\n\r\n.clash-card__image--giant {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg');\r\n}\r\n\r\n.clash-card__image--giant img {\r\n    width: 340px;\r\n    position: absolute;\r\n    top: -30px;\r\n    left: -25px;\r\n}\r\n\r\n.clash-card__image--goblin {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg');\r\n}\r\n\r\n.clash-card__image--goblin img {\r\n    width: 370px;\r\n    position: absolute;\r\n    top: -21px;\r\n    left: -37px;\r\n}\r\n\r\n.clash-card__image--wizard {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg');\r\n}\r\n\r\n.clash-card__image--wizard img {\r\n    width: 345px;\r\n    position: absolute;\r\n    top: -28px;\r\n    left: -10px;\r\n}\r\n\r\n.clash-card__level {\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.clash-card__level--barbarian {\r\n    color: #ec9b3b;\r\n}\r\n\r\n.clash-card__level--archer {\r\n    color: #ee5487;\r\n}\r\n\r\n.clash-card__level--giant {\r\n    color: #f6901a;\r\n}\r\n\r\n.clash-card__level--goblin {\r\n    color: #82bb30;\r\n}\r\n\r\n.clash-card__level--wizard {\r\n    color: #4facff;\r\n}\r\n\r\n.clash-card__unit-name {\r\n    font-size: 26px;\r\n    color: black;\r\n    font-weight: 900;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.clash-card__unit-description {\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.clash-card__unit-stats--barbarian {\r\n    background: #ec9b3b;\r\n}\r\n\r\n.clash-card__unit-stats--barbarian .one-third {\r\n    border-right: 1px solid #bd7c2f;\r\n}\r\n\r\n.clash-card__unit-stats--archer {\r\n    background: #ee5487;\r\n}\r\n\r\n.clash-card__unit-stats--archer .one-third {\r\n    border-right: 1px solid #d04976;\r\n}\r\n\r\n.clash-card__unit-stats--giant {\r\n    background: #f6901a;\r\n}\r\n\r\n.clash-card__unit-stats--giant .one-third {\r\n    border-right: 1px solid #de7b09;\r\n}\r\n\r\n.clash-card__unit-stats--goblin {\r\n    background: #82bb30;\r\n}\r\n\r\n.clash-card__unit-stats--goblin .one-third {\r\n    border-right: 1px solid #71a32a;\r\n}\r\n\r\n.clash-card__unit-stats--wizard {\r\n    background: #4facff;\r\n}\r\n\r\n.clash-card__unit-stats--wizard .one-third {\r\n    border-right: 1px solid #309eff;\r\n}\r\n\r\n.clash-card__unit-stats {\r\n    color: white;\r\n    font-weight: 700;\r\n    border-bottom-left-radius: 14px;\r\n    border-bottom-right-radius: 14px;\r\n}\r\n\r\n.clash-card__unit-stats .one-third {\r\n    width: 33%;\r\n    float: left;\r\n    padding: 10px 5px;\r\n}\r\n\r\n.clash-card__unit-stats sup {\r\n    position: absolute;\r\n    bottom: 4px;\r\n    font-size: 45%;\r\n    margin-left: 2px;\r\n}\r\n\r\n.clash-card__unit-stats .stat {\r\n    position: relative;\r\n    font-size: 20px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.clash-card__unit-stats .stat-value {\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n\r\n.clash-card__unit-stats .no-border {\r\n    border-right: none;\r\n}\r\n\r\n.clearfix:after {\r\n    visibility: hidden;\r\n    display: block;\r\n    font-size: 0;\r\n    content: \" \";\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.slick-prev {\r\n    left: 100px;\r\n    z-index: 999;\r\n}\r\n\r\n.slick-next {\r\n    right: 100px;\r\n    z-index: 999;\r\n}\r\n\r\n.month {\r\n    font-size: 8px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tbWFya2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUZBQXVGO0FBQzNGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUZBQW1GO0FBQ3ZGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoibG9hbi1tYXJrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggMTVweCAzMHB4IC0xMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX19pbWFnZS0tYmFyYmFyaWFuIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL2JhcmJhcmlhbi1iZy5qcGcnKTtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1iYXJiYXJpYW4gaW1nIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTY1cHg7XHJcbiAgICBsZWZ0OiAtNzBweDtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1hcmNoZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvYXJjaGVyLWJnLmpwZycpO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWFyY2hlciBpbWcge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMzRweDtcclxuICAgIGxlZnQ6IC0zN3B4O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWdpYW50IHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL2dpYW50LWJnLmpwZycpO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWdpYW50IGltZyB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgbGVmdDogLTI1cHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX19pbWFnZS0tZ29ibGluIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL2dvYmxpbi1iZy5qcGcnKTtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1nb2JsaW4gaW1nIHtcclxuICAgIHdpZHRoOiAzNzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTIxcHg7XHJcbiAgICBsZWZ0OiAtMzdweDtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS13aXphcmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvd2l6YXJkLWJnLmpwZycpO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLXdpemFyZCBpbWcge1xyXG4gICAgd2lkdGg6IDM0NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjhweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fbGV2ZWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX19sZXZlbC0tYmFyYmFyaWFuIHtcclxuICAgIGNvbG9yOiAjZWM5YjNiO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fbGV2ZWwtLWFyY2hlciB7XHJcbiAgICBjb2xvcjogI2VlNTQ4NztcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2xldmVsLS1naWFudCB7XHJcbiAgICBjb2xvcjogI2Y2OTAxYTtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2xldmVsLS1nb2JsaW4ge1xyXG4gICAgY29sb3I6ICM4MmJiMzA7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX19sZXZlbC0td2l6YXJkIHtcclxuICAgIGNvbG9yOiAjNGZhY2ZmO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1iYXJiYXJpYW4ge1xyXG4gICAgYmFja2dyb3VuZDogI2VjOWIzYjtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWJhcmJhcmlhbiAub25lLXRoaXJkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiZDdjMmY7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1hcmNoZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VlNTQ4NztcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWFyY2hlciAub25lLXRoaXJkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkMDQ5NzY7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1naWFudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjY5MDFhO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tZ2lhbnQgLm9uZS10aGlyZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGU3YjA5O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tZ29ibGluIHtcclxuICAgIGJhY2tncm91bmQ6ICM4MmJiMzA7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1nb2JsaW4gLm9uZS10aGlyZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzFhMzJhO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0td2l6YXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZmFjZmY7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS13aXphcmQgLm9uZS10aGlyZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzA5ZWZmO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTRweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyAub25lLXRoaXJkIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyBzdXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDQ1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzIC5zdGF0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLnN0YXQtdmFsdWUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzIC5uby1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpY2stcHJldiB7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLnNsaWNrLW5leHQge1xyXG4gICAgcmlnaHQ6IDEwMHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubW9udGgge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "LiEQ":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/footer/footer.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function LiEQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!--copyright start-->\r\n  <div class=\"agency copyright\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"link-horizontal\">\r\n                    <ul>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Privacy Policy</a>\r\n                        </li>\r\n\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Terms of Use</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/faqs\" routerLinkActive=\"active\" i18n>FAQs</a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div>\r\n                    <h6 class=\"copyright-text text-white text-right\" i18n>© 2020 Avitii Lender System\r\n\r\n                    </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!--copyright end-->\r\n  \r\n ";
      /***/
    },

    /***/
    "MBDN":
    /*!*****************************************************!*\
      !*** ./src/app/borrower/borrower-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: BorrowerRoutingModule */

    /***/
    function MBDN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BorrowerRoutingModule", function () {
        return BorrowerRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _borrower_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./borrower.component */
      "mtiP");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "CgDp");
      /* harmony import */


      var _browse_sessions_browse_sessions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./browse-sessions/browse-sessions.component */
      "qfzN");
      /* harmony import */


      var _my_sessions_my_sessions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./my-sessions/my-sessions.component */
      "Denz");
      /* harmony import */


      var _earnings_earnings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./earnings/earnings.component */
      "F8Mo");
      /* harmony import */


      var _room_room_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./room/room.component */
      "B8I+");
      /* harmony import */


      var _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../shared/messages/messages.component */
      "rflR");
      /* harmony import */


      var _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../shared/profile/profile.component */
      "uJHj");
      /* harmony import */


      var _shared_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../shared/wallet/wallet.component */
      "KIMC");
      /* harmony import */


      var _shared_meeting_vc_meeting_vc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../shared/meeting-vc/meeting-vc.component */
      "b39p");
      /* harmony import */


      var _shared_payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../shared/payment/payment.component */
      "RZ+U");
      /* harmony import */


      var _shared_user_ratings_user_ratings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../shared/user-ratings/user-ratings.component */
      "/d/B");
      /* harmony import */


      var _components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../components/_guards/roles.guard */
      "7ANl");
      /* harmony import */


      var _loan_market_loan_market_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./loan-market/loan-market.component */
      "Vjsn");
      /* harmony import */


      var _get_a_loan_get_a_loan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./get-a-loan/get-a-loan.component */
      "MH3C");
      /* harmony import */


      var _borrow_now_borrow_now_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./borrow-now/borrow-now.component */
      "AWbT");
      /* harmony import */


      var _shared_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../shared/update-password/update-password.component */
      "YgAS");
      /* harmony import */


      var _shared_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../shared/bank-details/bank-details.component */
      "D+Ly");
      /* harmony import */


      var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./calendar/calendar.component */
      "7UJ9");
      /* harmony import */


      var _shared_monthly_subscription_monthly_subscription_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../shared/monthly-subscription/monthly-subscription.component */
      "O0JG");
      /* harmony import */


      var _shared_income_proof_income_proof_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../shared/income-proof/income-proof.component */
      "KRlv");
      /* harmony import */


      var _shared_payment_cancel_payment_cancel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../shared/payment-cancel/payment-cancel.component */
      "XSBl");
      /* harmony import */


      var _shared_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../shared/payment-success/payment-success.component */
      "72sj");
      /* harmony import */


      var _users_income_expense_verify_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../users-income-expense-verify.guard */
      "wFWH");
      /* harmony import */


      var _bank_details_verify_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../bank-details-verify.guard */
      "wtEr");
      /* harmony import */


      var _shared_ratings_list_ratings_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../shared/ratings-list/ratings-list.component */
      "jcGx");

      var routes = [{
        path: '',
        component: _borrower_component__WEBPACK_IMPORTED_MODULE_4__["BorrowerComponent"],
        children: [{
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: '',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'profile',
          component: _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'wallet',
          component: _shared_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_12__["WalletComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'browse',
          component: _browse_sessions_browse_sessions_component__WEBPACK_IMPORTED_MODULE_6__["BrowseSessionsComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'my-contract',
          component: _my_sessions_my_sessions_component__WEBPACK_IMPORTED_MODULE_7__["MySessionsComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'messages',
          component: _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'earnings',
          component: _earnings_earnings_component__WEBPACK_IMPORTED_MODULE_8__["EarningsComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'vcmeet',
          component: _shared_meeting_vc_meeting_vc_component__WEBPACK_IMPORTED_MODULE_13__["MeetingVcComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'room',
          component: _room_room_component__WEBPACK_IMPORTED_MODULE_9__["RoomComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'payment',
          component: _shared_payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'payment-success',
          component: _shared_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_26__["PaymentSuccessComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'payment-cancel',
          component: _shared_payment_cancel_payment_cancel_component__WEBPACK_IMPORTED_MODULE_25__["PaymentCancelComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'ratings',
          component: _shared_user_ratings_user_ratings_component__WEBPACK_IMPORTED_MODULE_15__["UserRatingsComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"], _bank_details_verify_guard__WEBPACK_IMPORTED_MODULE_28__["BankDetailsVerifyGuard"], _users_income_expense_verify_guard__WEBPACK_IMPORTED_MODULE_27__["UsersIncomeExpenseVerifyGuard"]],
          path: 'loan-market',
          component: _loan_market_loan_market_component__WEBPACK_IMPORTED_MODULE_17__["LoanMarketComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"], _bank_details_verify_guard__WEBPACK_IMPORTED_MODULE_28__["BankDetailsVerifyGuard"], _users_income_expense_verify_guard__WEBPACK_IMPORTED_MODULE_27__["UsersIncomeExpenseVerifyGuard"]],
          path: 'make-a-loan',
          component: _get_a_loan_get_a_loan_component__WEBPACK_IMPORTED_MODULE_18__["GetALoanComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'borrow-now',
          component: _borrow_now_borrow_now_component__WEBPACK_IMPORTED_MODULE_19__["BorrowNowComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'update-password',
          component: _shared_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_20__["UpdatePasswordComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'bank-details',
          component: _shared_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_21__["BankDetailsComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'my-subscriptions',
          component: _shared_monthly_subscription_monthly_subscription_component__WEBPACK_IMPORTED_MODULE_23__["MonthlySubscriptionComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'income-proof',
          component: _shared_income_proof_income_proof_component__WEBPACK_IMPORTED_MODULE_24__["IncomeProofComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'calendar',
          component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__["CalendarComponent"]
        }, {
          canActivate: [_components_guards_roles_guard__WEBPACK_IMPORTED_MODULE_16__["RolesGuard"]],
          path: 'my-ratings',
          component: _shared_ratings_list_ratings_list_component__WEBPACK_IMPORTED_MODULE_29__["RatingsListComponent"]
        }]
      }, {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }];

      var BorrowerRoutingModule = function BorrowerRoutingModule() {
        _classCallCheck(this, BorrowerRoutingModule);
      };

      BorrowerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      })], BorrowerRoutingModule);
      /***/
    },

    /***/
    "MH3C":
    /*!*************************************************************!*\
      !*** ./src/app/borrower/get-a-loan/get-a-loan.component.ts ***!
      \*************************************************************/

    /*! exports provided: GetALoanComponent */

    /***/
    function MH3C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetALoanComponent", function () {
        return GetALoanComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_get_a_loan_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./get-a-loan.component.html */
      "+hC5");
      /* harmony import */


      var _get_a_loan_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./get-a-loan.component.css */
      "p9Sh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/sessions.service */
      "BZV/");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");

      var GetALoanComponent = /*#__PURE__*/function () {
        function GetALoanComponent(formBuilder, authenticationService, sessionsService, alertService, appRouterService, utilityService, route) {
          var _this17 = this;

          _classCallCheck(this, GetALoanComponent);

          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.sessionsService = sessionsService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.utilityService = utilityService;
          this.route = route;
          this._ = lodash__WEBPACK_IMPORTED_MODULE_11__; //UserType = UserType;
          //currentUserRoleType: string = null;

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
          this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__({
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hours + 1,
            minute: this.minutes
          }).format('YYYY-MM-DD');
          this.maxDate = moment__WEBPACK_IMPORTED_MODULE_6__({
            year: this.year,
            month: this.month + 1,
            day: this.day,
            hour: this.hours,
            minute: this.minutes
          }).format('YYYY-MM-DD'); // redirect to home if already logged in

          if (!this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter('');
          } //#region do not allow to create new loan in last 3 day's of the month


          var dt = this.utilityService.moment();
          var day4monthEnd = 3;

          if (dt.date() >= dt.daysInMonth() - day4monthEnd) {
            this.appRouterService.appRouter('');
            this.alertService.error('New loan request not allowed in end of the month, Please try again later in next month', true);
            return;
          } //#endregion do not allow to create new loan in last 3 day's of the month
          //this.currentUserRoleType = this.authenticationService.currentUserValue.userType;


          this.currentUserMaxLoanAmount = 1000;
          this.initForm();
          var paramobj = history.state;

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
              this.sessionsService.getSessionById(this.loanId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
                ////console.log('data => ', data)
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this17.showEditingForm(data["data"]); //this.alertService.success(data['message'], true);


                  _this17.loading = false; //this.element_btn_click_addSession_skills_verification.click();
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this17.alertService.error(data['message']);

                  _this17.loading = false;
                }
              }, function (error) {
                var errorMsg2show = "";

                try {
                  if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                  } else if (error && error.message) {
                    errorMsg2show = error.message;
                  } else {
                    errorMsg2show = error;
                  }
                } catch (ex) {}

                _this17.alertService.error(errorMsg2show);

                _this17.loading = false;
              });
            } else if (this.borrowerId) {
              this.initForm();
            }
            /* });*/

          }
        }

        _createClass(GetALoanComponent, [{
          key: "showEditingForm",
          value: function showEditingForm(_userObj) {
            this.loanInterestRateMin = 0;
            this.loanInterestRateMax = 50;
            var _loanInterestRateValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.loanInterestRateMin), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.loanInterestRateMax)];

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Borrower:
                if (this.authenticationService.currentUserValue.isRKIRegistered) {
                  this.loanInterestRateMin = 3;
                  this.loanInterestRateMax = 35;
                } else {
                  this.loanInterestRateMin = 0;
                  this.loanInterestRateMax = 3;
                }

                _loanInterestRateValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.loanInterestRateMin), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.loanInterestRateMax)];
                break;
            }

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
              loanInterestRate: [_userObj.loanInterestRate || this.loanInterestRateMax, _loanInterestRateValidation],
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
              isLoanRequested: [true],
              calculatedMonthlyAmountForEMI: []
            });
            this._sessionType = _userObj.sessionType;
          }
        }, {
          key: "initHtmlContent",
          value: function initHtmlContent() {
            if (!this.element_btn_click_addSession_basic_details) {
              this.element_btn_click_addSession_basic_details = document.getElementById('btn_click_addSession_basic_details');
              this.element_btn_click_addSession_skills_verification = document.getElementById('btn_click_addSession_skills_verification');
            }
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.loanInterestRateMin = 1;
            this.loanInterestRateMax = 50;
            var _loanInterestRateValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.loanInterestRateMin), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.loanInterestRateMax)];

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_13__["Role"].Borrower:
                if (this.authenticationService.currentUserValue.isRKIRegistered) {
                  this.loanInterestRateMin = 3;
                  this.loanInterestRateMax = 35;
                } else {
                  this.loanInterestRateMin = 1;
                  this.loanInterestRateMax = 3;
                }

                _loanInterestRateValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.loanInterestRateMin), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.loanInterestRateMax)];
                break;
            } //_.first(this.ParentServicesTypes)['_id']


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
              loanInterestRate: [this.loanInterestRateMax, _loanInterestRateValidation],
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
              isLoanRequested: [true],
              calculatedMonthlyAmountForEMI: []
            });
          }
        }, {
          key: "clickOnGoToNext",
          value: function clickOnGoToNext(_step) {
            this.initHtmlContent();

            switch (_step) {
              case 2:
                this.element_btn_click_addSession_skills_verification.click();
                break;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {} // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.addSessionForm.controls;
          }
        }, {
          key: "onaddSessionUpdateSubmit",
          value: function onaddSessionUpdateSubmit() {
            var _this18 = this;

            this.submitted = true;

            if (this.addSessionForm.invalid) {
              return;
            }

            var _loanStartDateTime = this.addSessionForm.get('loanStartDateTimeCustomised').value;
            var _loanEndDateTime = this.addSessionForm.get('loanEndDateTimeCustomised').value;
            /*
                if (!_loanStartDateTime || moment(_loanStartDateTime).isBefore(moment().add(1, 'day'))) {
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

            var loanStartDateTime_Temp = null;
            var loanEndDateTime_Temp = null;

            if (_loanStartDateTime) {
              loanStartDateTime_Temp = moment__WEBPACK_IMPORTED_MODULE_6__(_loanStartDateTime, 'YYYY-MM-DD').format('YYYY-MM-DD');
            } else {
              loanStartDateTime_Temp = moment__WEBPACK_IMPORTED_MODULE_6__().add(1, 'h').format('YYYY-MM-DD');
            }

            if (_loanEndDateTime) {
              loanEndDateTime_Temp = moment__WEBPACK_IMPORTED_MODULE_6__(_loanEndDateTime, 'YYYY-MM-DD').format('YYYY-MM-DD');
            } else {
              loanEndDateTime_Temp = moment__WEBPACK_IMPORTED_MODULE_6__(loanStartDateTime_Temp, 'YYYY-MM-DD').add(this.addSessionForm.get('loanTenureInMonths').value, 'month').format('YYYY-MM-DD');
            } //#region validate dates


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
            } //#endregion validate dates


            if (this.loanId) {
              this.sessionsService.updateSessionById(this.addSessionForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  //this.alertService.success('Loan Request Updated successfully', true);
                  //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
                  _this18.alertService.success("Loan Request Updated successfully. Loan contract is available under My Contract->My Contract tab.", true);

                  _this18.appRouterService.appRouteToPath("/borrower/my-contract", {
                    selectedTab: 'received'
                  }, true);
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this18.alertService.error(data['message']);

                  _this18.loading = false;
                }
              }, function (error) {
                var errorMsg2show = "";

                try {
                  if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                  } else if (error && error.message) {
                    errorMsg2show = error.message;
                  } else {
                    errorMsg2show = error;
                  }
                } catch (ex) {}

                _this18.alertService.error(errorMsg2show);

                _this18.loading = false;
              });
            } else {
              this.sessionsService.addNewSession(this.addSessionForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  //this.alertService.success('Loan Request added in loan market. Lenders request will be visible under receivers tab.', true);
                  //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
                  _this18.alertService.success("Loan Request added in loan market. Loan contract is available under My Contract->My Contract tab.", true);

                  _this18.appRouterService.appRouteToPath("/borrower/my-contract", {
                    selectedTab: 'received'
                  }, true);
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this18.alertService.error(data['message']);

                  _this18.loading = false;
                }
              }, function (error) {
                var errorMsg2show = "";

                try {
                  if (error && error.error && error.error.message) {
                    errorMsg2show = error.error.message;
                  } else if (error && error.message) {
                    errorMsg2show = error.message;
                  } else {
                    errorMsg2show = error;
                  }
                } catch (ex) {}

                _this18.alertService.error(errorMsg2show);

                _this18.loading = false;
              });
            }
          }
        }, {
          key: "date",
          value: function date(ev) {//console.log(this.minDate)
            //console.log(ev.target.value)
          }
        }, {
          key: "calculateMonthlyAmountForEMI",
          value: function calculateMonthlyAmountForEMI() {
            var loanAmount = this.addSessionForm.get('loanAmount').value || 0;
            var loanTenureInMonths = this.addSessionForm.get('loanTenureInMonths').value || 0;
            var loanInterestRate = this.addSessionForm.get('loanInterestRate').value || 0;
            this._calculatedMonthlyAmountForEMI = this.utilityService.fnCalculateMonthlyAmountForEMI(loanAmount, loanTenureInMonths, loanInterestRate);
            this.addSessionForm.get('calculatedMonthlyAmountForEMI').setValue(this._calculatedMonthlyAmountForEMI);
          }
        }, {
          key: "onLoanRepaymentTypeChange",
          value: function onLoanRepaymentTypeChange(e) {
            var checkArray = this.addSessionForm.get('loanRepaymentType');

            if (e.target.checked) {
              checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](e.target.value));
            } else {
              var i = 0;
              checkArray.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                  checkArray.removeAt(i);
                  return;
                }

                i++;
              });
            }
          }
        }, {
          key: "onInitSetLoanRepaymentTypeValue",
          value: function onInitSetLoanRepaymentTypeValue(_id) {
            var checkArray = this.addSessionForm.get('loanRepaymentType');

            var _isLoanRepaymentTypeChecked = checkArray.value.indexOf(_id) > -1;

            return _isLoanRepaymentTypeChecked;
          }
        }]);

        return GetALoanComponent;
      }();

      GetALoanComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_9__["SessionsService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
        }];
      };

      GetALoanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-a-loan',
        template: _raw_loader_get_a_loan_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_get_a_loan_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_9__["SessionsService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]])], GetALoanComponent);
      /***/
    },

    /***/
    "NkB+":
    /*!******************************************************!*\
      !*** ./src/app/borrower/header/header.component.css ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function NkB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "nav {\r\n    padding: 0;\r\n}\r\nheader img{\r\n    height: 3.3rem;\r\n}\r\nheader nav ul .mega-menu .mega-menu-container {\r\n\r\n    min-width: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmhlYWRlciBpbWd7XHJcbiAgICBoZWlnaHQ6IDMuM3JlbTtcclxufVxyXG5oZWFkZXIgbmF2IHVsIC5tZWdhLW1lbnUgLm1lZ2EtbWVudS1jb250YWluZXIge1xyXG5cclxuICAgIG1pbi13aWR0aDogYXV0bztcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "OuU8":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/browse-sessions/browse-sessions.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OuU8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n\r\n    <!-- <div class=\"col-xl-4 col-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 collection-filter\">\r\n               \r\n                <div class=\"collection-filter-block\">\r\n                  \r\n                    <div class=\"collection-mobile-back\"><span class=\"filter-back\"><i aria-hidden=\"true\"\r\n                                class=\"fa fa-angle-left\"></i> back</span>\r\n                    </div>\r\n                    <div class=\"collection-collapse-block open\">\r\n                        <h3 class=\"collapse-block-title\">Services</h3>\r\n                        <div class=\"collection-collapse-block-content\">\r\n                            <div class=\"collection-brand-filter\">\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\" *ngFor=\"let item of utilityService.ServicesTypes; let i = index\">\r\n                                    <input class=\"custom-control-input\" id=\"{{item.value}}\" type=\"radio\">\r\n                                    <label class=\"custom-control-label\" for=\"{{item.value}}\">{{item.name}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                   \r\n                    <div class=\"collection-collapse-block open\">\r\n                        <h3 class=\"collapse-block-title\">Type</h3>\r\n                        <div class=\"collection-collapse-block-content\">\r\n                            <div class=\"collection-brand-filter\">\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"zara\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"zara\">Instant</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"vera-moda\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"vera-moda\">Scheduled</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"forever-21\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"forever-21\">All</label>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n              \r\n                    <div class=\"collection-collapse-block border-0 open\">\r\n                        <h3 class=\"collapse-block-title\">price</h3>\r\n                        <div class=\"collection-collapse-block-content\">\r\n                            <div class=\"collection-brand-filter\">\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"hundred\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"hundred\">$10 - $100</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"twohundred\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"twohundred\">$100 - $200</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"threehundred\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"threehundred\">$200 - $300</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"fourhundred\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"fourhundred\">$300 - $400</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"fourhundredabove\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"fourhundredabove\">$400 above</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div> -->\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-xl-12 col-12\">\r\n                <form class=\"bg-pink border p-4 shadow-sm\" [formGroup]=\"browseSessionForm\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-xl-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n\r\n                                    <div class=\"input-group\">\r\n                                        <input formControlName=\"generaldata4search\" type=\"text\" class=\"form-control\" placeholder=\"Find Sessions\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <button class=\"btn btn-secondary\" data-toggle=\"collapse\" data-target=\"#filter-menus\"><i class=\"icon-filter\"></i></button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row collapse\" id=\"filter-menus\">\r\n                                <div class=\"col-xl-6 mt-2\">\r\n                                    <select formControlName=\"services4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\r\n                                        <option value=\"\" selected i18n>Service Type</option>\r\n                                        <option *ngFor=\"let item of ParentServicesTypes\"\r\n                                            [ngValue]=\"item._id\">\r\n                                            {{item.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mt-2\">\r\n                                    <select formControlName=\"location4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\r\n                                        <option value=\"\" selected i18n>Choose Location</option>\r\n                                        <option *ngFor=\"let location of countrylist\" [ngValue]=\"location\">\r\n                                            {{location}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-xl-2\">\r\n                            <button class=\"btn btn-outline-primary btn-block h-100 mt-md-0 mt-2\" (click)=\"sessionSearchByService()\" i18n>\r\n                                <i class=\"icon-search\"></i> SEARCH\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <section class=\"agency blog blog-sec blog-sidebar sider p-0\">\r\n\r\n            <div class=\"h6 mb-3\" i18n>\r\n\r\n                SESSION RESULT\r\n                <!--\r\n                <div class=\"btn-group btn-group-toggle btn-group-sm float-right\" data-toggle=\"buttons\">\r\n                    <label class=\"btn btn-secondary active\">\r\n                        <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> USA\r\n                    </label>\r\n                    <label class=\"btn btn-secondary\">\r\n                        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Worldwide\r\n                    </label>\r\n            </div>\r\n        -->\r\n                <!-- <span class=\"float-right custom-switch floar-right\">\r\n\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\">\r\n                    <label class=\"custom-control-label\" for=\"customSwitch1\">USA</label>\r\n                </span> -->\r\n            </div>\r\n            <cdk-virtual-scroll-viewport itemSize=\"50\" class=\"ngfor-viewport\">\r\n                <div  *cdkVirtualFor=\"let session of allSessionsData\" class=\"ngfor-item card shadow-sm mb-4\">\r\n                    <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n                        {{session.sessionSubject}}\r\n                    </div>\r\n                    <div class=\"card-body px-md-3 px-1 small\">\r\n                         <div class=\"row\">               \r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <p class=\"para2\" [class.show_more]=\"!session._id\">\r\n                                {{session.loanDescription}}\r\n                            </p>\r\n                        </div>          \r\n                        <div class=\"col-xl-6 col-6 border-right mb-2\">\r\n                            <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{session.loanStartDateTime | date:'MMM d, h:mm a'}}\r\n                        </div>\r\n                       \r\n                        <div class=\"col-xl-6 col-6\">\r\n                            <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\r\n                            \r\n                            {{session.location}}\r\n                        </div>\r\n                      \r\n                    </div>\r\n                    </div>\r\n                    <div class=\"card-footer bg-white\">\r\n                        <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span>\r\n                        <a *ngIf=\"!check4applyToSession(session)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"applyToSession(session)\" i18n>Apply</a>\r\n\r\n                        <a *ngIf=\"check4applyToSession(session)\" class=\"btn btn-primary text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(session)\" i18n> Details</a>\r\n\r\n                    </div>\r\n                </div>\r\n                \r\n             \r\n                <div *ngIf=\"!allSessionsData\">\r\n                    <div class=\"content_loader\"></div>\r\n                    <div class=\"content_loader\"></div>\r\n                </div>\r\n            </cdk-virtual-scroll-viewport>\r\n            \r\n\r\n           \r\n        </section>\r\n    </div>\r\n\r\n</div>";
      /***/
    },

    /***/
    "Vjsn":
    /*!***************************************************************!*\
      !*** ./src/app/borrower/loan-market/loan-market.component.ts ***!
      \***************************************************************/

    /*! exports provided: LoanMarketComponent */

    /***/
    function Vjsn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoanMarketComponent", function () {
        return LoanMarketComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loan_market_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loan-market.component.html */
      "dEQK");
      /* harmony import */


      var _loan_market_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loan-market.component.css */
      "Gbp1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/role */
      "z56L");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/public-profile/public-profile.component */
      "bLZ2");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/services/sessions.service */
      "BZV/");
      /* harmony import */


      var src_app_shared_search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/search/search.component */
      "9H8w");

      var LoanMarketComponent = /*#__PURE__*/function () {
        function LoanMarketComponent(userService, dialog, socketService, utilityService, alertService, router, authenticationService, sessionsService) {
          var _this19 = this;

          _classCallCheck(this, LoanMarketComponent);

          this.userService = userService;
          this.dialog = dialog;
          this.socketService = socketService;
          this.utilityService = utilityService;
          this.alertService = alertService;
          this.router = router;
          this.authenticationService = authenticationService;
          this.sessionsService = sessionsService;
          this.loading = false;
          this._ = lodash__WEBPACK_IMPORTED_MODULE_10__;
          this.getLoanMarketData();
          this.sessionsService.getSessionNewAdded().subscribe(function (_allLoanMarketData) {
            if (_allLoanMarketData) {
              if (_allLoanMarketData["success"]) {
                var temp_allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_10__["mapKeys"](_this19.allLoanMarketData, '_id');

                if (_allLoanMarketData["data"].isDeleted) {
                  delete temp_allLoanMarketData[_allLoanMarketData["data"]._id];
                } else {
                  temp_allLoanMarketData[_allLoanMarketData["data"]._id] = _allLoanMarketData["data"];
                }

                _this19.allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_10__["values"](temp_allLoanMarketData);
              }
            }
          });
          this.sessionsService.getSessionUpdated().subscribe(function (_allLoanMarketData) {
            if (_allLoanMarketData) {
              if (_allLoanMarketData["success"]) {
                var temp_allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_10__["mapKeys"](_this19.allLoanMarketData, '_id');

                if (_allLoanMarketData["data"].isDeleted) {
                  delete temp_allLoanMarketData[_allLoanMarketData["data"]._id];
                } else {
                  temp_allLoanMarketData[_allLoanMarketData["data"]._id] = _allLoanMarketData["data"];
                }

                _this19.allLoanMarketData = lodash__WEBPACK_IMPORTED_MODULE_10__["values"](temp_allLoanMarketData);
              }
            }
          });
        }

        _createClass(LoanMarketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigate2LoanProccess",
          value: function navigate2LoanProccess(loanId) {
            this.router.navigate(['/borrower/borrow-now'], {
              state: {
                loanId: loanId
              }
            });
          }
        }, {
          key: "returnT4DisableLoanBorrowOrLendIfAlreadyAccepted",
          value: function returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(loanMarket) {
            var _currentUserId = this.authenticationService.currentUserValue._id;

            if (loanMarket && lodash__WEBPACK_IMPORTED_MODULE_10__["keys"](loanMarket.sessionAppliedByBorrowers).length > 0) {
              //#region proccess only if any one applied to current loan request
              var _list_of_pending_loans = null;
              var roleId2Check = null;
              var _list_of_pending_or_accepted_loans_by_me = null; //#region check whether anyone have applied to current loan or not

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
              }); //#endregion check whether anyone have applied to current loan or not
              //#region set value for attribute depends on user's role

              switch (this.authenticationService.currentUserValue.role) {
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Borrower:
                  roleId2Check = 'borrowerId';
                  break;

                case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Lender:
                  roleId2Check = 'lenderId';
                  break;
              } //#endregion set value for attribute depends on user's role
              //#region check whether I have already applied to current loan or not


              _list_of_pending_or_accepted_loans_by_me = lodash__WEBPACK_IMPORTED_MODULE_10__["filter"](loanMarket.sessionAppliedByBorrowers, function (e) {
                if (e) {
                  if (e[roleId2Check] == _currentUserId) {
                    //already applied then why to come here
                    return true;
                  } else {
                    return false;
                  }
                }
              }); //#endregion check whether I have already applied to current loan or not
              //#region return boolean value for current request

              if (_list_of_pending_or_accepted_loans_by_me.length > 0) {
                return true;
              } else {
                return !(_list_of_pending_loans.length > 0); //!!(_list_of_pending_or_accepted_loans.length >= loanMarket.loanMaxBorrower);
              } //#endregion return boolean value for current request
              //#endregion proccess only if any one applied to current loan request

            } else {
              //#region no one applied till now for current loan request
              return false; //#endregion no one applied till now for current loan request
            }
          }
        }, {
          key: "usersProfile",
          value: function usersProfile(userObj) {
            var _this20 = this;

            //#region fetch creator id
            this.userService.getUserById(userObj._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                //console.log('84', this.authenticationService.currentUserValue);
                var dialogRef = _this20.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__["PublicProfileComponent"], {
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

                dialogRef.afterClosed().subscribe(function (result) {//console.log(`99 :: msc :: Dialog result: ${JSON.stringify(result)}`);
                });
              } else {}
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {}

              _this20.alertService.error(errorMsg2show);
            }); //#endregion fetch creator id
          }
        }, {
          key: "showSearchPanel",
          value: function showSearchPanel() {
            var _this21 = this;

            //console.log('84', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(src_app_shared_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"], {
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
            dialogRef.afterClosed().subscribe(function (result) {
              if (result && result.data) {
                var _obj2Save = result.data;

                if (!_obj2Save) {
                  _obj2Save = {};
                }

                _this21.searchFilterObj = _obj2Save;
                _obj2Save.status = 'pending';
                _obj2Save.isDeleted = false;
                var emitThisEvent = null;

                switch (_this21.authenticationService.currentUserValue.role) {
                  case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Borrower:
                    _obj2Save.isLoanRequested = false;
                    emitThisEvent = 'sessions_response_getall_bysearch_from_borrower';
                    break;

                  case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Lender:
                    _obj2Save.isLoanRequested = true;
                    emitThisEvent = 'sessions_response_getall_bysearch_from_lender';
                    break;
                }

                _this21.socketService.getLoanMarketDataForSearch(_obj2Save, emitThisEvent).subscribe(function (_allLoanMarketData) {}); //console.log(`223 :: msc :: Dialog result: ${JSON.stringify(result)}`);

              }
            }); //#endregion fetch creator id
          }
        }, {
          key: "cleanSearchFilter",
          value: function cleanSearchFilter() {
            this.searchFilterObj = null;
            this.getLoanMarketData();
          }
        }, {
          key: "getLoanMarketData",
          value: function getLoanMarketData() {
            var _this22 = this;

            this.subscription = this.socketService.getLoanMarketDataForBorrower().subscribe(function (_allLoanMarketData) {
              if (_allLoanMarketData) {
                _this22.allLoanMarketData = _allLoanMarketData["data"];
              } else {
                _this22.allLoanMarketData = [];
              }
            });
          }
        }]);

        return LoanMarketComponent;
      }();

      LoanMarketComponent.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_14__["UserService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_9__["SocketioService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_15__["SessionsService"]
        }];
      };

      LoanMarketComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loan-market',
        template: _raw_loader_loan_market_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loan_market_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_14__["UserService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_9__["SocketioService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_15__["SessionsService"]])], LoanMarketComponent);
      /***/
    },

    /***/
    "XmLS":
    /*!*****************************************************!*\
      !*** ./src/app/borrower/header/header.component.ts ***!
      \*****************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function XmLS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "lcJc");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "NkB+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/sessions.service */
      "BZV/");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _borrower_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../borrower.component */
      "mtiP");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/add-funds.service */
      "3gPe");
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/notification.service */
      "OC8m");
      /* harmony import */


      var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/services/messages.service */
      "Hzbo");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, authenticationService, alertService, sessionsService, dialog,
        /*private serviceTypesService: ServiceTypesService,*/
        socketService, fundService, utilityService, notificationService, messagesService) {
          var _this23 = this;

          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.alertService = alertService;
          this.sessionsService = sessionsService;
          this.dialog = dialog;
          this.socketService = socketService;
          this.fundService = fundService;
          this.utilityService = utilityService;
          this.notificationService = notificationService;
          this.messagesService = messagesService;
          this.ParentServicesTypes = null;
          this.messagesService.getAllMyContacts();
          this.authenticationService.currentUser.subscribe(function (x) {
            _this23.currentUser = x;

            if (!_this23.currentUser) {
              return;
            }

            fundService.getFundsCountForRequestedUser(_this23.currentUser._id);
            fundService.getSessionSpentCountForRequestedUser(_this23.currentUser._id);

            _this23.sessionsService.getSessionAllWithSessionApply(_this23.authenticationService.currentUserValue._id).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this23.allSessionsData = data['data']; //this.alertService.success(data['message'], true);

                _this23.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this23.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {} //this.alertService.error(errorMsg2show);


              _this23.loading = false;
            });
          });
          this.sessionsService.getSessionInstastTypeAdded().subscribe(function (data) {
            if (data && data['success']) {
              if (!_this23.allInstantSessionsData) {
                _this23.allInstantSessionsData = [];
              }

              var _currentSessionObj = data['data'];

              var _existingSessionObjKryPair = lodash__WEBPACK_IMPORTED_MODULE_8__["mapKeys"](lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_this23.allInstantSessionsData), '_id');

              if (lodash__WEBPACK_IMPORTED_MODULE_8__["keys"](_existingSessionObjKryPair).length > 0) {
                delete _existingSessionObjKryPair[_currentSessionObj._id];
              }

              _existingSessionObjKryPair[_currentSessionObj._id] = _currentSessionObj;
              _this23.allInstantSessionsData = lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_existingSessionObjKryPair);
            } else {//this.alertService.error(data['message']);
            }
          }, function (error) {});
          this.socketService.getCurrentAppliedSessionObj().subscribe(function (data) {
            if (data) {
              if (!_this23.allInstantSessionsData) {
                _this23.allInstantSessionsData = [];
              }

              var _existingSessionObjKryPair = lodash__WEBPACK_IMPORTED_MODULE_8__["mapKeys"](lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_this23.allInstantSessionsData), '_id');

              delete _existingSessionObjKryPair[data];
              _this23.allInstantSessionsData = lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_existingSessionObjKryPair);
            } else {//this.alertService.error(data['message']);
            }
          }, function (error) {});
          this.socketService.getSessionUpdates().subscribe(function (data) {
            if (data && data['success']) {
              if (!_this23.allSessionsData) {
                _this23.allSessionsData = [];
              }

              var _currentSessionObj = data['data'];

              var _existingSessionObjKryPair = lodash__WEBPACK_IMPORTED_MODULE_8__["mapKeys"](lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_this23.allSessionsData), '_id');

              if (lodash__WEBPACK_IMPORTED_MODULE_8__["keys"](_existingSessionObjKryPair).length > 0) {
                delete _existingSessionObjKryPair[_currentSessionObj._id];
              }

              _existingSessionObjKryPair[_currentSessionObj._id] = _currentSessionObj;
              _this23.allSessionsData = lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_existingSessionObjKryPair);
            } else {//this.alertService.error(data['message']);
            }
          }, function (error) {});
          /*
          this.serviceTypesService.getServiceTypesChildAll()
          .pipe(first())
          .subscribe(
            data => {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.ParentServicesTypes = data["data"];
                //this.alertService.success(data['message'], true);
                this.loading = false;
                //this.element_btn_click_addServiceTypes_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                this.alertService.error(data['message']);
                this.loading = false;
              }
            },
            error => {
              let errorMsg2show = "";
              this.ParentServicesTypes = [];
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
              this.loading = false;
            });
          */
        }

        _createClass(HeaderComponent, [{
          key: "check4applyToSession",
          value: function check4applyToSession(sessionObj) {
            if (sessionObj && sessionObj.sessionAppliedByBorrowers) {
              if (lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](sessionObj.sessionAppliedByBorrowers, {
                "borrowerId": this.authenticationService.currentUserValue._id
              }).length > 0) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "navigate2State",
          value: function navigate2State(state) {
            state = state ? state : '/logout';
            this.router.navigate([state]);
          }
        }, {
          key: "applyToSession",
          value: function applyToSession(sessionObj) {
            var _this24 = this;

            //console.log('179', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_11__["ModalApplySession"], {
              backdropClass: 'cdk-overlay-transparent-backdrop',
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                sessionObj: sessionObj,
                borrowerId: this.authenticationService.currentUserValue._id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              var _currentSessionApply = null;

              if (result) {
                if (result.data) {
                  _currentSessionApply = result.data.sessionApply;

                  if (_currentSessionApply) {
                    if (!_this24.allInstantSessionsData) {
                      _this24.allInstantSessionsData = [];
                    }

                    var _existingSessionObjKryPair = lodash__WEBPACK_IMPORTED_MODULE_8__["mapKeys"](lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_this24.allInstantSessionsData), '_id');

                    if (lodash__WEBPACK_IMPORTED_MODULE_8__["keys"](_existingSessionObjKryPair).length > 0) {
                      delete _existingSessionObjKryPair[_currentSessionApply.loanId];
                    }

                    _this24.allInstantSessionsData = lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_existingSessionObjKryPair);

                    if (!_currentSessionApply._id) {
                      _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
                    }

                    _currentSessionApply.status = result.data.status || src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Pending;

                    _this24.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Pending:
                        _currentSessionApply.createdBy = _this24.authenticationService.currentUserValue._id;

                        _this24.socketService.setSessionApply(true, _currentSessionApply);

                        break;

                      default:
                        _this24.socketService.updateSessionApply(true, _currentSessionApply, _this24.authenticationService.currentUserValue);

                        break;
                    }

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Accepted:
                        _this24.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Pending:
                        _this24.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Rejected:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].RejectedOngoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].RejectedOngoingWithRefund:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Suspended:
                        _this24.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Completed:
                        _this24.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Active:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Ongoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].OngoingInitiated:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].AwaitingForApproval:
                        _this24.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);

                        break;

                      default:
                        break;
                    }
                  }
                }
              } //console.log(`211 :: headerc :: Dialog result: ${JSON.stringify(result)}`);

            });
          }
        }, {
          key: "showAppliedToSession",
          value: function showAppliedToSession(sessionObj) {
            var _proccessedSessionObj = null;

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_5__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](sessionObj.sessionAppliedByBorrowers, {
                  "borrowerId": this.authenticationService.currentUserValue._id
                });
                break;

              default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"](sessionObj);
                break;
            } //console.log('214', this.authenticationService.currentUserValue);


            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_11__["ModalAppliedSessionDisplay"], {
              backdropClass: 'cdk-overlay-transparent-backdrop',
              hasBackdrop: true,
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              data: {
                sessionObj: _proccessedSessionObj,
                borrowerId: this.authenticationService.currentUserValue._id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {//console.log(`238 :: hc :: Dialog result: ${JSON.stringify(result)}`);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.router.navigate(['/logout']);
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            alert("Sorry, you can not create a loan request untill 30th October.");
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            (function ($) {
              "use strict";

              $('.filter-btn').on('click', function (e) {
                $('.collection-filter').css("left", "-15px");
              });
              $('.filter-back').on('click', function (e) {
                $('.collection-filter').css("left", "-365px");
                $('.sidebar-popup').trigger('click');
              }); //toggle show

              $('.toggle-nav').on('click', function (e) {
                $('.navbar').css("right", "0px");
                $('.navbar_side_panel').show();
              });
              $('.btn-back').on('click', function (e) {
                $('.navbar').css("right", "-350px");
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
                } else if (windowSize >= 991) {
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
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_7__["SessionsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__["SocketioService"]
        }, {
          type: src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_13__["AddFundsService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]
        }, {
          type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"]
        }, {
          type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_15__["MessagesService"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_7__["SessionsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__["SocketioService"], src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_13__["AddFundsService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"], src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_15__["MessagesService"]])], HeaderComponent);
      /***/
    },

    /***/
    "YT+T":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/calendar/calendar.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YTT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<full-calendar [options]=\"calendarOptions\"></full-calendar>\n";
      /***/
    },

    /***/
    "Zvop":
    /*!******************************************************!*\
      !*** ./src/app/borrower/footer/footer.component.css ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function Zvop(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "footer {\r\n    padding: 0px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "d+mw":
    /*!**************************************************!*\
      !*** ./src/app/borrower/room/room.component.css ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function dMw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "dEQK":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/loan-market/loan-market.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dEQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\r\n    <div class=\"card shadow-sm mb-4\" *ngFor=\"let LoanMarket of allLoanMarketData\">\r\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n            {{LoanMarket.LoanMarketubject}}\r\n        </div>\r\n        <div class=\"card-body px-md-3 px-1 small\">\r\n             <div class=\"row\">               \r\n            <div class=\"col-xl-12 col-12\">\r\n                <p class=\"para2\" [class.show_more]=\"!LoanMarket._id\">\r\n                    {{LoanMarket.loanAmount}}\r\n                </p>\r\n            </div>          \r\n            <div class=\"col-xl-6 col-6 border-right mb-2\">\r\n                <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{LoanMarket.loanStartDateTime | date:'MMM d, h:mm a'}}\r\n            </div>\r\n            <div class=\"col-xl-6 col-6\">\r\n                <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\r\n                {{LoanMarket.location}}\r\n            </div>\r\n          \r\n        </div>\r\n        </div>\r\n        <div class=\"card-footer bg-white\">\r\n            <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{LoanMarket.LoanMarketType}}</span>\r\n          \r\n            <a class=\"btn btn-primary text-capitalize  btn-sm float-right text-white\" (click)=\"showAppliedToLoanMarket(LoanMarket)\">Details</a>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"mt-5 text-center blog-agency no-item\">\r\n        <img src=\"assets/img/noresult.png\">\r\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\r\n    </div>\r\n</section> -->\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12 col-12 align-items-stretch\">\r\n        <button i18n *ngIf=\"this.searchFilterObj\" class=\"btn btn-xs btn-danger float-right mb-3 mt-n2 ml-2\" (click)=\"cleanSearchFilter()\">\r\n            <i class=\"icon icon-trash\"></i> Reset\r\n        </button>\r\n        <button i18n class=\"btn btn-xs btn-success float-right mb-3 mt-n2\"  (click)=\"showSearchPanel()\"> \r\n            <i class=\"icon icon-filter\"></i> Filter\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-4 col-12 d-flex align-items-stretch mb-4\"\r\n        *ngFor=\"let LoanMarket of allLoanMarketData | sortArrayByUpdatedOn:'loanStartDateTime':true\">\r\n       \r\n        <div class=\"clash-card wizard w-100\">\r\n            <div class=\"product-image\" *ngIf=\"(!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)) || (returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket))\">\r\n                <span class=\"onsale-section\" *ngIf=\"returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\"><span class=\"onsale\" i18n>Contract Signed</span></span>\r\n\r\n                <span class=\"onsale-section\"  *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\"><span class=\"onsale\" i18n>Cancelled</span></span>\r\n              </div>\r\n\r\n             \r\n\r\n\r\n            <div class=\"clash-card__level clash-card__level--wizard mt-3\">\r\n                <!--{{(LoanMarket.createdByUserObj.userType || \"\").replace(\"_\", \" \")}}-->\r\n                {{authenticationService.returnUserTypeForUserFromSuppliedUserLevel(LoanMarket.createdByUserObj.userType)}}\r\n            </div>\r\n            <div class=\"clash-card__unit-name text-capitalize\">{{(LoanMarket.loanType || \"\").replace(\"_\", \" \")}}</div>\r\n            <div class=\"clash-card__unit-description\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"Created By\">\r\n                        <div (click)=\"usersProfile(LoanMarket.createdByUserObj)\">\r\n                            <!--<i class=\"icon icon-user\"></i>-->\r\n                            <span\r\n                                class=\"flag-icon flag-icon-{{utilityService.returnCountryCodeFromName(LoanMarket.createdByUserObj.country)}} flag-icon-squared\"></span>\r\n                        </div>\r\n                        <div class=\"text-black-50 small\">\r\n                            {{LoanMarket.createdByUserObj.firstName}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"Max Applicants\">\r\n                        <div>\r\n                            <i class=\"icon icon-check-box\"></i>\r\n                        </div>\r\n                        <div class=\"text-black-50 small\">\r\n                            {{ _.keys(LoanMarket.sessionAppliedByBorrowers).length || 0}}/{{LoanMarket.loanMaxBorrower}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-4 col-4 \" data-toggle=\"tooltip\" title=\"Created On\">\r\n                        <div>\r\n                            <i class=\"icon icon-time\"></i>\r\n                        </div>\r\n                        <div class=\"text-black-50 small\">\r\n                            {{LoanMarket.loanStartDateTime | date:'MMM d, yy'}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mt-2\">\r\n                        <div class=\"text-black-50 small mb-1\" i18n>\r\n                            Payment Methods\r\n                        </div>\r\n\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('bank')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                            BANK\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('cash')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                            Cash\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('revolut')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                            Revolut\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('paypal')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                            Paypal\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('skrill')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase badge-success\" i18n>\r\n                            Skrill\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button\r\n                *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && !utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\"\r\n                class=\"btn btn-success btn-sm mb-2\" (click)=\"navigate2LoanProccess(LoanMarket._id)\" i18n>\r\n                Borrow Now\r\n            </button>\r\n            <button\r\n                *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\" i18n\r\n                class=\"btn btn-danger btn-sm mb-2\" disabled>\r\n                Cancelled\r\n            </button>\r\n            <button *ngIf=\"returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\"\r\n                class=\"btn btn-primary btn-sm mb-2\" i18n><i class=\"icon icon-check-box\"></i>\r\n                Contract Signed\r\n            </button>\r\n\r\n            <div class=\"clash-card__unit-stats clash-card__unit-stats--wizard clearfix\">\r\n                <div class=\"one-third\">\r\n                    <div class=\"stat\">{{LoanMarket.loanAmount}}</div>\r\n                    <div class=\"stat-value\" i18n>Amount</div>\r\n                </div>\r\n\r\n                <div class=\"one-third\">\r\n                    <div class=\"stat\">\r\n                        {{utilityService.returnRoundedNumber(LoanMarket.calculatedMonthlyAmountForEMI*LoanMarket.loanTenureInMonths)}}\r\n                    </div>\r\n                    <div class=\"stat-value\" i18n>Refund</div>\r\n                </div>\r\n\r\n                <div class=\"one-third no-border\">\r\n                    <div class=\"stat\">{{LoanMarket.loanTenureInMonths}} <sub\r\n                            class=\"month\">{{LoanMarket.loanTenureInMonths>1?'Months':'Month'}}</sub></div>\r\n                    <div class=\"stat-value\" i18n>Duration</div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- end clash-card goblin-->\r\n\r\n\r\n    </div>\r\n    <!-- <div class=\"mt-5 text-center blog-agency no-item\">\r\n        <img src=\"assets/img/noresult.png\">\r\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\r\n    </div> -->\r\n</div>";
      /***/
    },

    /***/
    "lWgQ":
    /*!************************************************************************!*\
      !*** ./src/app/borrower/browse-sessions/browse-sessions.component.css ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function lWgQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ngfor-viewport {\r\n    height: 80vh;\r\n \r\n  }\r\n  \r\n\r\n  \r\n\r\n  @media (max-width: 767.98px) { \r\n    .ngfor-item {\r\n      max-height: 290px;\r\n      margin-bottom: 15px;\r\n    }\r\n    a.btn.btn-apply-session{\r\n      width: 100%;\r\n      margin-top: 11px;\r\n    }\r\n    p.para2{\r\n      overflow: hidden;\r\n      text-overflow: ellipsis; \r\n    }\r\n  }\r\n  \r\n\r\n  \r\n\r\n  @media (min-width: 767.98px) {\r\n    .ngfor-item {\r\n      max-height: 200px;\r\n      margin-bottom: 20px !important;\r\n    }\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZS1zZXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTs7RUFFZDs7Ozs7RUFLQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsV0FBVztNQUNYLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLHVCQUF1QjtJQUN6QjtFQUNGOzs7OztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsOEJBQThCO0lBQ2hDO0dBQ0QiLCJmaWxlIjoiYnJvd3NlLXNlc3Npb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmdmb3Itdmlld3BvcnQge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gXHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7IFxyXG4gICAgLm5nZm9yLWl0ZW0ge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyOTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIGEuYnRuLmJ0bi1hcHBseS1zZXNzaW9ue1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgIH1cclxuICAgIHAucGFyYTJ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLm5nZm9yLWl0ZW0ge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICB9Il19 */";
      /***/
    },

    /***/
    "lcJc":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/header/header.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function lcJc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion navbar_side_panel\" id=\"accordionSidebar\">\r\n\r\n    <!-- Sidebar - Brand -->\r\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\">\r\n        <img class=\"img-fluid\" src=\"./assets/img/avitii-logo.png\">\r\n    </a>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider my-0\">\r\n    <div class=\"d-inline text-white text-center mt-2\">\r\n        <a class=\"mr-1 small text-white\" href=\"/en\">English</a> |\r\n        <a href=\"/da\" class=\"ml-1 small text-white\">Dansk</a>\r\n    </div>\r\n    <!-- Nav Item - Dashboard -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\">\r\n            {{currentUser.firstName}} \r\n            <span class=\"badge badge-success float-right font-weight-lighter text-capitalize\" [textContent]=\"currentUser.role\" i18n> Borrower</span>\r\n         </a>\r\n    </li>\r\n    \r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <!-- <div class=\"sidebar-heading\">\r\n        Interface\r\n    </div> -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/borrower\">\r\n            <i class=\"icon icon-home\"></i>\r\n            <span i18n>Dashboard</span></a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/borrower/loan-market\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-shopping-cart\"></i>\r\n            <span i18n>Loan Market</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n        (click)=\"showAlert()\"\r\n       \r\n        routerLinkActive=\"active\">\r\n            <i class=\"icon icon-money\"></i>\r\n            <span i18n>Get a Loan</span></a>\r\n    </li>\r\n     <!-- routerLink=\"/borrower/make-a-loan\"  -->\r\n     \r\n    <!-- Nav Item - Pages Collapse Menu -->\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n            <i class=\"icon icon-bag\"></i>\r\n            <span>My Contracts</span>\r\n        </a>\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            \r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">My Offers</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">Paid Contracts</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">Unpaid Contracts</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">Inkasso cases</a>\r\n           \r\n            </div>\r\n        </div>\r\n    </li> -->\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/borrower/my-contract\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-bag\"></i>\r\n            <span i18n>My Contracts</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/borrower/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-comments\"></i>\r\n            <span i18n>Messages</span>\r\n            <span *ngIf=\"messagesService.returnTotalPendingMessagesForUser()>0\" class=\"badge badge-light float-right font-weight-lighter text-capitalize\" i18n> {{messagesService.returnTotalPendingMessagesForUser()}}</span>\r\n        </a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/borrower/calendar\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-calendar\"></i>\r\n            <span i18n>Calendar</span></a>\r\n    </li>\r\n\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/borrower/ratings\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-star\"></i>\r\n            <span>My Ratings</span></a>\r\n    </li> -->\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <!-- <div class=\"sidebar-heading\">\r\n        Addons\r\n    </div> -->\r\n\r\n    <!-- Nav Item - Pages Collapse Menu -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\r\n            <i class=\"icon icon-settings\"></i>\r\n            <span i18n>Settings</span>\r\n        </a>\r\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            \r\n                <a class=\"collapse-item\" routerLink=\"/borrower/profile\" routerLinkActive=\"active\" i18n>My Profile</a>\r\n                <a class=\"collapse-item\" routerLink=\"/borrower/update-password\" routerLinkActive=\"active\" i18n>Change Password</a>\r\n                <a class=\"collapse-item\" routerLink=\"/borrower/bank-details\" routerLinkActive=\"active\" i18n>Bank Details</a>\r\n                <a class=\"collapse-item\" routerLink=\"/borrower/income-proof\" routerLinkActive=\"active\" i18n>Income Proof</a>\r\n                <a class=\"collapse-item\" routerLink=\"/borrower/my-subscriptions\" routerLinkActive=\"active\" i18n>My Subscriptions</a>\r\n               \r\n            </div>\r\n        </div>\r\n    </li>\r\n\r\n \r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/logout\">\r\n            <i class=\"icon icon-flickr-alt\"></i>\r\n            <span i18n>Logout</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <!-- <hr class=\"sidebar-divider d-none d-md-block\">\r\n\r\n\r\n    <div class=\"text-center d-none d-md-inline\">\r\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n    </div> -->\r\n\r\n\r\n</ul>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "m8XZ":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/borrow-now/borrow-now.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m8XZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"borrowNowForm\" class=\"theme-form\">\r\n    <!-- addSession section -->\r\n    <div class=\"row\" *ngIf=\"!userClickedOnSignLoanContract\">\r\n        <div class=\"col-xl-3 col-12\">\r\n            <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row no-gutters align-items-center\">\r\n                        <div class=\"col mr-2\">\r\n                            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                                EMI (Monthly)\r\n                            </div>\r\n                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\" >\r\n                                kr {{LoanObj.calculatedMonthlyAmountForEMI}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row no-gutters align-items-center\">\r\n                        <div class=\"col mr-2\">\r\n                            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                                Loan Amount\r\n                            </div>\r\n                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                                kr {{LoanObj.loanAmount}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row no-gutters align-items-center\">\r\n                        <div class=\"col mr-2\">\r\n                            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                                Total Loan\r\n                            </div>\r\n                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                                kr\r\n                                {{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI*LoanObj.loanTenureInMonths)}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-9 col-12\">\r\n            <div class=\"card shadow mb-4\">\r\n                <!-- Card Header - Dropdown -->\r\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                    <span class=\"float-left\">\r\n                        <h5 class=\"m-0 font-weight-bold text-primary\" i18n>{{headerMessage2show}}</h5>\r\n                    </span>\r\n                    <span>\r\n                        <div (click)=\"usersProfile(LoanObj.createdByUserObj)\">\r\n                            <i class=\"icon icon-user\"></i>\r\n                        </div>\r\n                    </span>\r\n                </div>\r\n                <!-- Card Body -->\r\n                <div class=\"card-body\">\r\n                    <div class=\"theme-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-4 col-12 border-right\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"loanType\" i18n>Loan Type</label>\r\n                                    <h4 class=\"text-primary\" >\r\n                                        {{utilityService.returnLoanType(LoanObj.loanType)}}\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-4 col-12 border-right\">\r\n                                <div class=\"form-group \">\r\n                                    <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                                    <h4 class=\"text-primary\">\r\n                                        {{LoanObj.loanAmount}}\r\n                                    </h4>\r\n                                </div>\r\n                                <div class=\"form-group bg-light2 p-2\">\r\n                                    <label for=\"proposedLoanAmount\" i18n>\r\n                                        Propose a new loan amount <sub>(Optional) & amount must be hight than kr\r\n                                            {{LoanObj.loanAmount}}</sub></label>\r\n                                    <input type=\"number\" formControlName=\"proposedLoanAmount\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.proposedLoanAmount.errors }\"\r\n                                        placeholder=\"Enter New Amount\" />\r\n                                    <div *ngIf=\"submitted && f.proposedLoanAmount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.proposedLoanAmount.errors.required\" i18n>\r\n                                            Proposed Loan Amount is required\r\n                                        </div>\r\n                                        <div *ngIf=\"f.proposedLoanAmount.min.required\" i18n>\r\n                                            amount must be hight than kr {{LoanObj.loanAmount}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-4 col-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                                    <h4 class=\"text-primary\">\r\n                                        {{LoanObj.loanTenureInMonths}}\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-4 col-12 border-right\">\r\n                                <div class=\"form-group \">\r\n                                    <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                                    <h4 class=\"text-primary\">\r\n                                        {{LoanObj.loanInterestRate}}\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-4 col-12 border-right\">\r\n                                <div class=\"form-group \">\r\n                                    <label for=\"loanStartDateTime\" i18n>Start Date</label>\r\n                                    <h4 class=\"text-primary\" >\r\n                                        {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-4 col-12\">\r\n                                <div class=\"form-group\">\r\n                                    <p class=\"mb-2\" i18n>How to give the money</p>\r\n\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                        BANK\r\n                                    </span>\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                                        Cash\r\n                                    </span>\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                                        Revolut\r\n                                    </span>\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                                        Paypal\r\n                                    </span>\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase badge-success\" i18n>\r\n                                        Skrill\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-12\">\r\n                                <p class=\"mb-2\" i18n>Description:</p>\r\n                                <div class=\"text-black-50\" i18n>\r\n                                    {{LoanObj.loanDescription}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-xl-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"proposedLoanAmount\" i18n>\r\n                                    Propose a new loan amount <sub>(Optional) & amount must be hight than kr {{LoanObj.loanAmount}}</sub></label>\r\n                                <input type=\"number\" formControlName=\"proposedLoanAmount\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.proposedLoanAmount.errors }\" />\r\n                                <div *ngIf=\"submitted && f.proposedLoanAmount.errors\"\r\n                                    class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.proposedLoanAmount.errors.required\" i18n>\r\n                                        Proposed Loan Amount is required\r\n                                    </div>\r\n                                    <div *ngIf=\"f.proposedLoanAmount.min.required\" i18n>\r\n                                        amount must be hight than kr {{LoanObj.loanAmount}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                            <div class=\"col-xl-12 col-12 mt-3\">\r\n                                <div class=\"table-responsive table-billing-history\">\r\n                                    <table class=\"table mb-0\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th scope=\"col\" i18n>EMI Date</th>\r\n                                                <th scope=\"col\" i18n>Payment</th>\r\n\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr\r\n                                                *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                                                <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                                    | date:'dd-MMM-YYYY'}}</td>\r\n                                                <td>kr {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n\r\n                                            </tr>\r\n\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <button *ngIf=\"!userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\r\n                        (click)=\"clickedOnSignLoanContract()\" i18n>\r\n                        Sign Loan Contract\r\n                    </button>\r\n                    <button *ngIf=\"userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\r\n                        (click)=\"resetClickedOnSignLoanContract()\" i18n>\r\n                        Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"userClickedOnSignLoanContract\">\r\n\r\n        <div class=\"col-xl-12 col-12\">\r\n            <div class=\"card shadow mb-4\">\r\n                <!-- Card Header - Dropdown -->\r\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                    <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Loan Contract</h5>\r\n                </div>\r\n                <!-- Card Body -->\r\n                <div class=\"card-body\">\r\n                    <div class=\"theme-form\">\r\n                        <div class=\"row mb-3\">\r\n                            <div class=\"col-xl-12 col-12\" *ngIf=\"lenderUserObj && borrowerUserObj\">\r\n\r\n                                <table class=\"table table table-bordered  shadow-sm\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th style=\"width: 20%;\">#</th>\r\n\r\n                                            <th style=\"width: 40%;\" i18n>Borrower</th>\r\n                                            <th style=\"width: 40%;\" i18n>Lender</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\r\n                                                    NAME</div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\r\n                                                    {{borrowerUserObj.firstName}}&nbsp;{{borrowerUserObj.lastName}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\r\n                                                    {{lenderUserObj.firstName}}&nbsp;{{lenderUserObj.lastName}}\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\r\n                                                    Address</div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                    {{borrowerUserObj.address}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                    {{lenderUserObj.address}}\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\r\n                                                    Passport Number</div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                    {{borrowerUserObj.myPassportNumber}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                    {{lenderUserObj.myPassportNumber}}\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\r\n                                                    DL Number</div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                    {{borrowerUserObj.myDLNumber}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                    {{lenderUserObj.myDLNumber}}\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\r\n                                                    Payment Method</div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\">\r\n                                                    BANK\r\n\r\n                                                    <label for=\"borrowerBankName\" i18n>Bank Name</label>\r\n                                                    <h4 class=\"text-primary\" >\r\n                                                        {{borrowerUserObj.bankName}}\r\n                                                    </h4>\r\n                                                    <label for=\"borrowerRegNumber\" i18n>Reg nr</label>\r\n                                                    <h4 class=\"text-primary\" >\r\n                                                        {{borrowerUserObj.regNumber}}\r\n                                                    </h4>\r\n                                                    <label for=\"borrowerAccountNumber\" i18n>Account Number</label>\r\n                                                    <h4 class=\"text-primary\" >\r\n                                                        {{borrowerUserObj.accountNumber}}\r\n                                                    </h4>\r\n                                                    <!--\r\n                                                <label for=\"borrowerMobilePayment\" i18n>Mobile payment</label>\r\n                                                <h4 class=\"text-primary\" i18n>\r\n                                                    {{borrowerUserObj.mobilePayment}}\r\n                                                </h4>\r\n                                            -->\r\n                                                </div>\r\n                                                <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\r\n                                                    Cash\r\n                                                </div>\r\n                                                <div\r\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\" i18n>\r\n\r\n                                                    Revolut:\r\n                                                    {{borrowerUserObj.revolutWalletID}}\r\n                                                </div>\r\n                                                <div\r\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\" i18n>\r\n                                                    Paypal ID: {{borrowerUserObj.paypalWalletID}}\r\n                                                </div>\r\n                                                <div\r\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\" i18n>\r\n                                                    Skrill: {{borrowerUserObj.skrillWalletID}}\r\n                                                </div>\r\n\r\n\r\n                                            </td>\r\n\r\n                                            <td>\r\n                                                <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\" i18n>\r\n                                                    BANK\r\n\r\n                                                    <div class=\"text-black-50\" >Bank Name</div>\r\n                                                    <div class=\"font-weight-bold text-primary mb-1\">\r\n                                                        {{lenderUserObj.bankName}}\r\n                                                    </div>\r\n                                                    <div for=\"lenderRegNumber\" >Reg Number</div>\r\n                                                    <div class=\"font-weight-bold text-primary mb-1\">\r\n                                                        {{lenderUserObj.regNumber}}\r\n                                                    </div>\r\n                                                    <div for=\"lenderAccountNumber\" >Account Number</div>\r\n                                                    <div class=\"font-weight-bold text-primary mb-1\">\r\n                                                        {{lenderUserObj.accountNumber}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                                    Cash\r\n                                                </div>\r\n                                                <div\r\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\" >\r\n\r\n                                                    Revolut:\r\n                                                    {{lenderUserObj.revolutWalletID}}\r\n                                                </div>\r\n                                                <div\r\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\">\r\n                                                    Paypal ID: {{lenderUserObj.paypalWalletID}}\r\n                                                </div>\r\n                                                <div\r\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\">\r\n                                                    Skrill: {{lenderUserObj.skrillWalletID}}\r\n                                                </div>\r\n\r\n\r\n                                            </td>\r\n\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"row mb-3\">\r\n                            <div class=\"col-xl-4 col-12 \">\r\n                                <div class=\"card shadow-sm p-2\">\r\n                                    <label for=\"loanType\" i18n>Loan Type</label>\r\n                                    <h4 class=\"text-primary\">\r\n                                        {{utilityService.returnLoanType(LoanObj.loanType)}}\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-4 col-12\">\r\n                                <div class=\"card shadow-sm p-2\" *ngIf=\"!f.proposedLoanAmount.value\">\r\n                                    <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                                    <h4 class=\"text-primary\">\r\n                                        {{LoanObj.loanAmount}}\r\n                                    </h4>\r\n                                </div>\r\n                                <div class=\"card shadow-sm p-2\" *ngIf=\"f.proposedLoanAmount.value\">\r\n                                    <label for=\"loanAmount\" i18n>Loan Amount/Proposed Loan Amount</label>\r\n                                    <h4 class=\"text-primary\">\r\n                                        <span\r\n                                            style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\r\n                                            {{LoanObj.loanAmount}}\r\n                                        </span>\r\n                                        /\r\n                                        <span>\r\n                                            {{f.proposedLoanAmount.value}}\r\n                                        </span>\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-4 col-12\">\r\n                                <div class=\"card shadow-sm p-2\">\r\n                                    <label i18n>Tenure in Months</label>\r\n                                    <h4 class=\"text-primary\">\r\n                                        {{LoanObj.loanTenureInMonths}}\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-4 col-12\">\r\n                                <div class=\"card shadow-sm p-2\">\r\n                                    <label i18n>Interest(%) Rate (per month)</label>\r\n                                    <h4 class=\"text-primary\">\r\n                                        {{LoanObj.loanInterestRate}}\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-4 col-12\">\r\n                                <div class=\"card shadow-sm p-2\">\r\n                                    <label i18n>Start Date</label>\r\n                                    <h4 class=\"text-primary\">\r\n                                        {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-4 col-12\">\r\n                                <div class=\"card shadow-sm p-2\">\r\n\r\n                                    <label class=\"mb-3\" i18n>Payment Method</label>\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                        BANK\r\n                                    </span>\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                        Cash\r\n                                    </span>\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                        Revolut\r\n                                    </span>\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                        Paypal\r\n                                    </span>\r\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\r\n                                        class=\"badge font-weight-light text-uppercase badge-success w-20\">\r\n                                        Skrill\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-12 mt-3\">\r\n                                <div class=\"card shadow-sm p-2\">\r\n                                    <label i18n>Description</label>\r\n\r\n                                    <div class=\"text-black-50\">\r\n                                        {{LoanObj.loanDescription}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-xl-12 mt-3\" *ngIf=\"f.loanInsuranceRequired.value\">\r\n                                <div class=\"card shadow-sm p-2\">\r\n                                    <label i18n>Applied for Insurance with Amount</label>\r\n                                    <div class=\"text-black-50\">\r\n                                        {{f.loanInsuranceAmount.value}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-xl-12 col-12 mt-3\">\r\n                                <div class=\"table-responsive table shadow-sm\">\r\n                                    <table class=\"table mb-0\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th scope=\"col\" i18n>EMI Date</th>\r\n                                                <th scope=\"col\" i18n>Payment</th>\r\n\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr\r\n                                                *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                                                <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                                    | date:'dd-MMM-YYYY'}}</td>\r\n                                                <td *ngIf=\"(!f.calculatedMonthlyAmountForEMI.value) || (f.calculatedMonthlyAmountForEMI.value ==LoanObj.calculatedMonthlyAmountForEMI)\">kr\r\n                                                    {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n                                                <td *ngIf=\"(f.calculatedMonthlyAmountForEMI.value) && (f.calculatedMonthlyAmountForEMI.value !=LoanObj.calculatedMonthlyAmountForEMI)\">kr\r\n                                                    <span\r\n                                                        style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\r\n                                                        {{LoanObj.calculatedMonthlyAmountForEMI}}\r\n                                                    </span>\r\n                                                    &nbsp;\r\n                                                    <span>\r\n                                                        {{f.calculatedMonthlyAmountForEMI.value}}\r\n                                                    </span>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"card shadow mb-4\">\r\n\r\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                    <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Terms & Conditions</h5>\r\n                </div>\r\n\r\n                <div class=\"card-body\">\r\n                    <ol class=\"terms ml-n4\">\r\n                        <li>\r\n                            <div class=\"font-weight-bold\" i18n>Scope</div>\r\n                            <div i18n>\r\n                                These loan terms apply to all loan agreements entered into between the borrower and the\r\n                                lender\r\n                                through the Avitii Lending System. Avitii Lending System acts solely as a dissemination\r\n                                platform\r\n                                and cannot be held liable of any kind, either by the lender or the borrower.\r\n                                By signing the loan agreement, you have accepted these loan terms, which deal with you\r\n                                and the\r\n                                borrower. You are at all times subject to the terms of use of the Avitii Lending System.\r\n                                Deviations from the loan terms must be agreed in writing, and in the event of a\r\n                                discrepancy\r\n                                between the loan terms and your agreement, the loan agreement will take precedence.\r\n                                Avitii Lending System does not provide financial advice when concluding the credit\r\n                                agreement and\r\n                                therefore does not assume any responsibility in connection with this.\r\n                                Both the borrower and the lender confirm compliance with the country's applicable laws\r\n                                and\r\n                                regulations for private loans between private individuals.\r\n                                Borrower as well as lender, provides using Avitii Lending System\r\n                                consent to information including, loan history as well as profile data,\r\n                                address, photo id, social media shared and registered at Credit-List.net\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"font-weight-bold\" i18n>Acceptance deadline</div>\r\n                            <div i18n>\r\n                                Loan offers offered on the Avitii Lending System must be considered as an open offer,\r\n                                for any\r\n                                borrower profile on the website. It is the individual private loan provider who, based\r\n                                on the\r\n                                borrower's information, makes the final decision on the loan implementation.\r\n                                Loan offers are considered as P2P loans, where any acceptance of loan offers is binding\r\n                                on the\r\n                                borrower. The lender as well as the borrower can stay updated at any time with the terms\r\n                                of\r\n                                agreements on the Avitii Lending Systems website.\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"font-weight-bold\" i18n>Prerequisites</div>\r\n                            <div i18n>\r\n                                Credit rating: As a borrower, you declare in good faith that your information entered at\r\n                                all\r\n                                times is correct, that at the time of entering into the loan you have not been declared\r\n                                unfit to\r\n                                take care of yourself or your finances. At the same time, you declare not to be under\r\n                                compulsory\r\n                                dissolution, debt restructuring, or otherwise declared insolvent.\r\n                                Money laundering: Avitii Lending System is a dissemination platform, and is therefore\r\n                                out of\r\n                                responsibility. Private lender enters into loan agreement with private borrowers. As a\r\n                                borrower\r\n                                on the website, you must in principle always provide private information on an ongoing\r\n                                basis, at\r\n                                the request of Avittii Lending Systems. If you do not provide the necessary correct\r\n                                information,\r\n                                the Avitii Lending System may exclude you from using the Website.\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"font-weight-bold\" i18n>Loan terms</div>\r\n                            The borrower must at all times be aware that he or she has the finances to take out offered\r\n                            loans. In addition to the principal, the opportunity to bear interest expenses, fees and\r\n                            other\r\n                            expenses in connection with redemption.\r\n\r\n                            <div i18n>The borrower must at all times confirm their creditworthiness, as well as they are\r\n                                not\r\n                                over-mortgaged for the applicable period. The borrower must at all times comply with the\r\n                                applicable rules for repayment. In the event of late payment or otherwise default, it is\r\n                                up\r\n                                to the lender to impose additional expenses. The borrower confirms that he or she is\r\n                                solely\r\n                                responsible for finding a solution to repay the loan / debt.</div>\r\n                            <div i18n>\r\n                                The borrower confirms with this agreement that he agrees that the lender can at any time\r\n                                transfer the loan to a third party for recovery.\r\n                            </div>\r\n                            <div i18n>\r\n                                Receipt for repayment or remission must be notified in writing by endorsement on this\r\n                                loan\r\n                                document.\r\n                            </div>\r\n\r\n                            <div i18n>\r\n                                In the event of late payment, 5 days from the payment date are generally given to find a\r\n                                solution yourself. In case the borrower fails to comply with the repayment within the 5\r\n                                days, the lender is entitled to impose a 65% fee on the amount lent, valid from the date\r\n                                of\r\n                                payment. After another 5 days, the debt will be transferred to recovery.\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"font-weight-bold\" i18n>Fraud</div>\r\n                            <div i18n>\r\n                                Borrowers who take out loans fraudulently, or in some other way by giving incorrect\r\n                                information\r\n                                and thus force themselves on loans that they are unable to repay or should have\r\n                                foreseen, not\r\n                                being able to repay will be considered fraud.\r\n                                279 CRIMINAL ACT Fraud For fraud, a person is punished who, in order to obtain gain or\r\n                                other\r\n                                unjustified gain, by unlawfully causing, corroborating or exploiting an error,\r\n                                determines\r\n                                another for an act or omission, whereby the person or person for whom the act is\r\n                                inflicted or\r\n                                the omission becomes decisive, a loss of property.\r\n                            </div>\r\n\r\n                        </li>\r\n\r\n\r\n                    </ol>\r\n                    <hr>\r\n                    <h5>E-Signature</h5>\r\n                    <hr>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-6 col-12 d-none\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"eSignatureBorrowersName\" i18n>Name</label>\r\n                                <input type=\"text\" formControlName=\"eSignatureBorrowersName\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureBorrowersName.errors }\" />\r\n                                <div *ngIf=\"submitted && f.eSignatureBorrowersName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.eSignatureBorrowersName.errors.required\" i18n>Name is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-12 d-none\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"eSignatureBorrowersPassportNumber\" i18n>Passport or Driving Licence\r\n                                    Number</label>\r\n                                <input type=\"text\" formControlName=\"eSignatureBorrowersPassportNumber\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureBorrowersPassportNumber.errors }\" />\r\n                                <div *ngIf=\"submitted && f.eSignatureBorrowersPassportNumber.errors\"\r\n                                    class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.eSignatureBorrowersPassportNumber.errors.required\" i18n>Passport or\r\n                                        Driving\r\n                                        Licence Number is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-12\">\r\n                            <div class=\"form-check-inline\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input name=\"loanAgreementCondition\" id=\"loanAgreementCondition\" type=\"checkbox\"\r\n                                        class=\"custom-control-input\" [value]=\"true\"\r\n                                        (change)=\"clicked2LoanAgreementCondition($event)\"\r\n                                        [checked]=\"f.loanAgreementCondition.value\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanAgreementCondition.errors }\">\r\n                                    <label for=\"loanAgreementCondition\" class=\"custom-control-label\">\r\n                                        Agree to the above terms & conditions for Loan Agreement.\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"card-footer\">\r\n\r\n                    <button type=\"button\" class=\"btn btn-success float-right\"\r\n                        (click)=\"clickedOnVerifiedSignLoanContract()\" i18n>\r\n                        SUBMIT\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<!-- addSession section -->";
      /***/
    },

    /***/
    "p9Sh":
    /*!**************************************************************!*\
      !*** ./src/app/borrower/get-a-loan/get-a-loan.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function p9Sh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtYS1sb2FuLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "qfzN":
    /*!***********************************************************************!*\
      !*** ./src/app/borrower/browse-sessions/browse-sessions.component.ts ***!
      \***********************************************************************/

    /*! exports provided: BrowseSessionsComponent */

    /***/
    function qfzN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowseSessionsComponent", function () {
        return BrowseSessionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_browse_sessions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./browse-sessions.component.html */
      "OuU8");
      /* harmony import */


      var _browse_sessions_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./browse-sessions.component.css */
      "lWgQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sessions.service */
      "BZV/");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _borrower_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../borrower.component */
      "mtiP");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /*import { ServiceTypesService } from 'src/app/services/service-types.service';*/


      var _webpack_require__ = __webpack_require__(
      /*! country-list */
      "pHmk"),
          overwrite = _webpack_require__.overwrite,
          getNames = _webpack_require__.getNames;

      overwrite([{
        code: 'US',
        name: 'USA'
      }]);

      var BrowseSessionsComponent = /*#__PURE__*/function () {
        function BrowseSessionsComponent(userService, socketService, formBuilder, sessionsService, alertService, utilityService, dialog, authenticationService) {
          _classCallCheck(this, BrowseSessionsComponent);

          this.userService = userService;
          this.socketService = socketService;
          this.formBuilder = formBuilder;
          this.sessionsService = sessionsService;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.dialog = dialog;
          this.authenticationService = authenticationService;
          this.ParentServicesTypes = null;
          this.countrylist = null;
          this.countrylist = getNames();
          /*
            this.serviceTypesService.getServiceTypesChildAll()
              .pipe(first())
              .subscribe(
                data => {
                  ////console.log('data => ', data)
                  if (data && data['success']) {
                    //alert(JSON.stringify( data));
                    this.ParentServicesTypes = data["data"];
                    //this.alertService.success(data['message'], true);
                    this.loading = false;
                    //this.element_btn_click_addServiceTypes_skills_verification.click();
                  } else {
                    //alert(JSON.stringify(data['message']));
                    this.alertService.error(data['message']);
                    this.loading = false;
                  }
                },
                error => {
                  let errorMsg2show = "";
                  this.ParentServicesTypes = [];
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
                  this.loading = false;
                });
          */
        }

        _createClass(BrowseSessionsComponent, [{
          key: "check4applyToSession",
          value: function check4applyToSession(sessionObj) {
            if (sessionObj && sessionObj.sessionAppliedByBorrowers) {
              if (lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](sessionObj.sessionAppliedByBorrowers, {
                "borrowerId": this.authenticationService.currentUserValue._id
              }).length > 0) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.browseSessionForm = this.formBuilder.group({
              services4search: [''],
              location4search: [''],
              generaldata4search: ['']
            });
            this.sessionsService.getSessionAllWithSessionApply(this.authenticationService.currentUserValue._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this25.allSessionsData = data['data'];

                _this25.userService.proccessAllAppUsersCollections(_this25.utilityService._.uniq(_this25.utilityService._.map(_this25.utilityService._.flattenDepth(_this25.utilityService._.map(_this25.utilityService._.values(_this25.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //this.alertService.success(data['message'], true);


                _this25.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this25.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {} //this.alertService.error(errorMsg2show);


              _this25.loading = false;
            });
            this.sessionsService.getUpdatesForSessionAllByBorrowerId().subscribe(function (data) {
              if (data && data['success']) {
                var _keyPairedMapObj = _this25.utilityService._.mapKeys(_this25.allSessionsData, "_id");

                for (var _items in data['data']) {
                  var _currentObj = data['data'][_items];
                  _keyPairedMapObj[_currentObj._id] = _currentObj;
                }

                _this25.allSessionsData = _this25.utilityService._.values(_keyPairedMapObj);
                _this25.loading = false;
              } else {
                _this25.loading = false;
              }
            }, function (error) {
              _this25.loading = false;
            });
            this.sessionsService.getSessionLengthByService(null, null, null, null, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this25.allSessionsCount = data['data']; //this.alertService.success(data['message'], true);

                _this25.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this25.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {} //this.alertService.error(errorMsg2show);


              _this25.loading = false;
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.browseSessionForm.controls;
          }
        }, {
          key: "sessionSearchByService",
          value: function sessionSearchByService() {
            var _this26 = this;

            var services = this.browseSessionForm.get('services4search').value;
            var location = this.browseSessionForm.get('location4search').value;
            var generaldata4search = this.browseSessionForm.get('generaldata4search').value;
            var useAndTrueOrFalse = false;
            this.allSessionsData = [];
            this.sessionsService.getSessionAllByService(services, location, generaldata4search, generaldata4search, useAndTrueOrFalse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this26.allSessionsData = data['data'];

                _this26.userService.proccessAllAppUsersCollections(_this26.utilityService._.uniq(_this26.utilityService._.map(_this26.utilityService._.flattenDepth(_this26.utilityService._.map(_this26.utilityService._.values(_this26.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //this.alertService.success(data['message'], true);


                _this26.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this26.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {} //this.alertService.error(errorMsg2show);


              _this26.loading = false;
            });
          }
        }, {
          key: "applyToSession",
          value: function applyToSession(sessionObj) {
            var _this27 = this;

            //console.log('179', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_10__["ModalApplySession"], {
              backdropClass: 'custom-dialog-backdrop-class',
              panelClass: 'custom-dialog-panel-class',
              data: {
                sessionObj: sessionObj,
                borrowerId: this.authenticationService.currentUserValue._id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              var _currentSessionApply = null;

              if (result) {
                if (result.data) {
                  _currentSessionApply = result.data.sessionApply;

                  if (_currentSessionApply) {
                    if (!_currentSessionApply._id) {
                      _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
                    }

                    _currentSessionApply.status = result.data.status || src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending;

                    _this27.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending:
                        _currentSessionApply.createdBy = _this27.authenticationService.currentUserValue._id;

                        _this27.socketService.setSessionApply(true, _currentSessionApply);

                        break;

                      default:
                        _this27.socketService.updateSessionApply(true, _currentSessionApply, _this27.authenticationService.currentUserValue);

                        break;
                    }

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Accepted:
                        _this27.alertService.success("Updated. Session is available under My Sessionss ->Accepted tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending:
                        _this27.alertService.success("Applied. Session is available under My Sessionss->Pending tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Rejected:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoingWithRefund:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Suspended:
                        _this27.alertService.success("Updated. Session is available under My Sessionss->Rejected tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Completed:
                        _this27.alertService.success("Updated. Session is available under My Sessionss->Completed tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Active:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Ongoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].OngoingInitiated:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].AwaitingForApproval:
                        _this27.alertService.success("Updated. Session is available under My Sessionss->Ongoing tab.", true);

                        break;

                      default:
                        break;
                    }
                  }
                }
              } //console.log(`252 :: bsc :: Dialog result: ${JSON.stringify(result)}`);

            });
          }
        }, {
          key: "showAppliedToSession",
          value: function showAppliedToSession(sessionObj) {
            var _proccessedSessionObj = null;

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_12__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](sessionObj.sessionAppliedByBorrowers, {
                  "borrowerId": this.authenticationService.currentUserValue._id
                });
                break;

              default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](sessionObj);
                break;
            } //console.log('214', this.authenticationService.currentUserValue);


            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_10__["ModalAppliedSessionDisplay"], {
              backdropClass: 'custom-dialog-backdrop-class',
              panelClass: 'custom-dialog-panel-class',
              data: {
                sessionObj: _proccessedSessionObj,
                borrowerId: this.authenticationService.currentUserValue._id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {//console.log(`191 :: bcs :: Dialog result: ${JSON.stringify(result)}`);
            });
          }
        }]);

        return BrowseSessionsComponent;
      }();

      BrowseSessionsComponent.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_13__["SocketioService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_5__["SessionsService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      };

      BrowseSessionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-browse-sessions',
        template: _raw_loader_browse_sessions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        styles: [_browse_sessions_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_13__["SocketioService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_5__["SessionsService"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])], BrowseSessionsComponent);
      /***/
    },

    /***/
    "sxVe":
    /*!*****************************************************!*\
      !*** ./src/app/borrower/footer/footer.component.ts ***!
      \*****************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function sxVe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "LiEQ");
      /* harmony import */


      var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.css */
      "Zvop");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FooterComponent);
      /***/
    },

    /***/
    "t1JT":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/room/room.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function t1JT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>room works!</p>\r\n";
      /***/
    },

    /***/
    "wFWH":
    /*!******************************************************!*\
      !*** ./src/app/users-income-expense-verify.guard.ts ***!
      \******************************************************/

    /*! exports provided: UsersIncomeExpenseVerifyGuard */

    /***/
    function wFWH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersIncomeExpenseVerifyGuard", function () {
        return UsersIncomeExpenseVerifyGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var UsersIncomeExpenseVerifyGuard = /*#__PURE__*/function () {
        function UsersIncomeExpenseVerifyGuard(alertService, router, authenticationService) {
          _classCallCheck(this, UsersIncomeExpenseVerifyGuard);

          this.alertService = alertService;
          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(UsersIncomeExpenseVerifyGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser) {
              var _currentUserRole = '';

              try {
                _currentUserRole = currentUser.role;
              } catch (ex) {}

              if (!currentUser.isUsersIncomeAndExpenseProofVerified) {
                this.router.navigate([_currentUserRole + '/home']);
                this.alertService.error("Income proof documents and mothly expenses verification is still pending. Please update to access this feature.", true);
                return false;
              } // authorised so return true	


              return true;
            } // not logged in so redirect to login page with the return url


            var paramobj = this.router.getCurrentNavigation().extras.state;

            if (paramobj) {
              paramobj.returnUrl = state.url;
            }

            this.router.navigate(['/login'], {
              state: paramobj
            });
            return false;
          }
        }]);

        return UsersIncomeExpenseVerifyGuard;
      }();

      UsersIncomeExpenseVerifyGuard.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      };

      UsersIncomeExpenseVerifyGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], UsersIncomeExpenseVerifyGuard);
      /***/
    }
  }]);
})();
//# sourceMappingURL=borrower-borrower-module-es5.js.map