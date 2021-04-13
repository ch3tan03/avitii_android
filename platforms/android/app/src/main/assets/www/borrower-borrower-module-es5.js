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


      __webpack_exports__["default"] = "<!-- addSession section -->\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-3 col-12\">\r\n                <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row no-gutters align-items-center\">\r\n                            <div class=\"col mr-2\">\r\n                                <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                                    EMI (Monthly)\r\n                                </div>\r\n                                <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                                    kr {{_calculatedMonthlyAmountForEMI}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-auto\">\r\n                                <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row no-gutters align-items-center\">\r\n                            <div class=\"col mr-2\">\r\n                                <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                                    Loan Amount\r\n                                </div>\r\n                                <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                                    kr {{f.loanAmount.value}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-auto\">\r\n                                <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card border-left-primary shadow py-2\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row no-gutters align-items-center\">\r\n                            <div class=\"col mr-2\">\r\n                                <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                                    Total Loan\r\n                                </div>\r\n                                <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                                    kr {{utilityService.returnRoundedNumber(_calculatedMonthlyAmountForEMI*f.loanTenureInMonths.value)}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-auto\">\r\n                                <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xl-9 col-12\">\r\n                <div class=\"card shadow mb-4\">\r\n                    <!-- Card Header - Dropdown -->\r\n                    <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                        <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Get A Loan</h6>\r\n                    </div>\r\n                    <!-- Card Body -->\r\n                    <div class=\"card-body\">\r\n                        <form [formGroup]=\"addSessionForm\" class=\"theme-form\">\r\n\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-xl-12 col-12\">\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"loanType\" i18n>Loan Type</label>\r\n                                        <select formControlName=\"loanType\" class=\"custom-select\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanType.errors }\">\r\n                                            <option value=\"\" selected disabled > Choose Loan Type</option>\r\n                                            <option *ngFor=\"let item of _.values(utilityService.ParentLoanTypes);\"\r\n                                                [ngValue]=\"item._id\" i18n>\r\n                                                {{item.name}}</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"submitted && f.loanType.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.loanType.errors.required\" i18n>Loan type is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                                        <input type=\"number\" min=\"0\" formControlName=\"loanAmount\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanAmount.errors }\"\r\n                                            (change)=\"calculateMonthlyAmountForEMI()\"\r\n                                            (keyup)=\"calculateMonthlyAmountForEMI()\" />\r\n                                        <div *ngIf=\"submitted && f.loanAmount.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.loanAmount.errors.required\" i18n>Loan Amount is required</div>\r\n                                            <div *ngIf=\"f.loanAmount.errors.min\" i18n>value must be greater than 1</div>\r\n                                            <div *ngIf=\"f.loanAmount.errors.max\" i18n>value must be less than\r\n                                                {{currentUserMaxLoanAmount}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 small text-primary mt-n3 mb-3\">\r\n\r\n                                </div>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                                        <input type=\"number\" formControlName=\"loanTenureInMonths\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanTenureInMonths.errors }\"\r\n                                            (change)=\"calculateMonthlyAmountForEMI()\"\r\n                                            (keyup)=\"calculateMonthlyAmountForEMI()\" />\r\n                                        <div *ngIf=\"submitted && f.loanTenureInMonths.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.loanTenureInMonths.errors.required\" i18n>Loan Tenure is\r\n                                                required\r\n                                            </div>\r\n                                            <div *ngIf=\"f.loanTenureInMonths.errors.min\" i18n>value must be greater than\r\n                                                3</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                                        <input type=\"number\" formControlName=\"loanInterestRate\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanInterestRate.errors }\"\r\n                                            (change)=\"calculateMonthlyAmountForEMI()\"\r\n                                            (keyup)=\"calculateMonthlyAmountForEMI()\" />\r\n                                        <div *ngIf=\"submitted && f.loanInterestRate.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.loanInterestRate.errors.required\" i18n>Interest Rate is\r\n                                                required\r\n                                            </div>\r\n                                            <div *ngIf=\"f.loanInterestRate.errors.min\" i18n>minimum permitted interest rate is {{loanInterestRateMin}}\r\n                                            </div>\r\n                                            <div *ngIf=\"f.loanInterestRate.errors.max\" i18n>maximum permitted interest rate is {{loanInterestRateMax}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <!--\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"form-group mb-0\">\r\n                                        <label for=\"loanStartDateTimeCustomised\" i18n>Start on</label>\r\n                                        <input type=\"date\" formControlName=\"loanStartDateTimeCustomised\"\r\n                                            class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanStartDateTimeCustomised.errors }\"\r\n                                            [max]=\"maxDate\" [min]=\"minDate\" />\r\n                                        <div *ngIf=\"submitted && f.loanStartDateTimeCustomised.errors\"\r\n                                            class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.required\" i18n>Start Date\r\n                                                Time is required\r\n                                            </div>\r\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.date\" i18n>Invalid Date\r\n                                                format.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            -->\r\n                                <!--\r\n                                        <div class=\"col-xl-12 col-12\">\r\n                                            <label for=\"loanEndDateTimeCustomised\" i18n>Ends on</label>\r\n                                            <input [readonly]=\"true\" type=\"datetime-local\"\r\n                                                formControlName=\"loanEndDateTimeCustomised\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.loanEndDateTimeCustomised.errors }\"\r\n                                                [max]=\"maxDate\" [min]=\"minDate\" />\r\n                                            <div *ngIf=\"submitted && f.loanEndDateTimeCustomised.errors\"\r\n                                                class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.required\" i18n>End Date Time is\r\n                                                    required\r\n                                                </div>\r\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.date\" i18n>Invalid Date format.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        -->\r\n                                <div class=\"col-xl-12 mt-3\">\r\n                                    <div for=\"loanRepaymentType\" class=\"mb-2\" i18n>How to give the money</div>\r\n                                   \r\n                                        \r\n                                        <div class=\"form-check-inline\" *ngFor=\"let item of _.values( utilityService.LoanRepaymentTypes);\">\r\n                                           \r\n                                            <div class=\"custom-control custom-checkbox\">\r\n                                                <input name=\"service\" id=\"services_{{item._id}}\"\r\n                                                    type=\"checkbox\" class=\"custom-control-input\"\r\n                                                    value=\"{{item._id}}\"\r\n                                                    (change)=\"onLoanRepaymentTypeChange($event)\"\r\n                                                    [checked]=\"onInitSetLoanRepaymentTypeValue(item._id)\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanRepaymentType.errors }\">\r\n                                                <label for=\"services_{{item._id}}\"\r\n                                                    class=\"custom-control-label\">{{item.name}}</label>\r\n                                            </div>\r\n                                       \r\n                                    </div>\r\n                                        <div *ngIf=\"submitted && f.loanRepaymentType.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.loanRepaymentType.errors.required\">Payment option required\r\n                                            </div>\r\n                                        </div>\r\n                                   \r\n                                </div>\r\n\r\n                                <div class=\"col-xl-12 mt-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"comment\" i18n>Description:</label>\r\n                                        <textarea class=\"form-control\" formControlName=\"loanDescription\" rows=\"2\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanDescription.errors }\">\r\n                                            </textarea>\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && f.loanDescription.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.loanDescription.errors.required\" i18n>Description is\r\n                                            required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12 text-center\">\r\n                                    <hr>\r\n                                    <button type=\"button\" (click)=\"onaddSessionUpdateSubmit()\" [disabled]=\"loading\"\r\n                                        class=\"btn btn-primary\" i18n>Submit</button>\r\n                                    <img *ngIf=\"loading\" class=\"pl-3\"\r\n                                        src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n \r\n<!-- addSession section -->";
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


      __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<!-- <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n        <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\r\n        <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Profile</a>\r\n    </div> -->\r\n\r\n<div [ngSwitch]=\"authenticationService.currentUserValue.role\" class=\"d-none\">\r\n    <div *ngSwitchCase=\"Role.Borrower\">\r\n        <div class=\"jumbotron\"\r\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted || !authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\r\n            <div class=\"text-black-50 h2 font-weight-lighter\">\r\n                Welome, Your profile has been verified succesfully. Your need to submit your\r\n                <span class=\"badge badge-danger\">Bank Details</span> and\r\n                <span class=\"badge badge-danger\">Income Proof Documents</span> to access the loan market.\r\n            </div>\r\n            <hr>\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\">\r\n                    Profile and personal document verification\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/profile\"></i>\r\n                    </span>\r\n                </li>\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\">\r\n                    Bank details submission\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/bank-details\"></i>\r\n                    </span>\r\n                </li>\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\">\r\n                    Income Proof Documents and Mothly Expenses\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/income-proof\"></i>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"Role.Lender\">\r\n        <div class=\"jumbotron\"\r\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\r\n            <div class=\"text-black-50 h2 font-weight-lighter\">\r\n                Welome, Your profile has been verified succesfully. Your need to submit your\r\n                <span class=\"badge badge-danger\">Bank Details</span> to access the Loan Market.\r\n            </div>\r\n            <hr>\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\">\r\n                    Profile and personal document verification\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/lender/profile\"></i>\r\n                    </span>\r\n                </li>\r\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\">\r\n                    Bank details submission\r\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\r\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\r\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\r\n                            routerLink=\"/borrower/bank-details\"></i>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-primary shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">\r\n                            My Level\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\r\n                            {{utilityService.returnStringWithReplacing_(authenticationService.currentUserValue.userType)}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-warning shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">\r\n                            Member since\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                            {{authenticationService.currentUserValue.userVerifiedOn | date:'dd-MMM-YYYY'}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-success shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">\r\n                            Paid Contracts\r\n                        </div>\r\n                        <div class=\"row no-gutters align-items-center\">\r\n                            <div class=\"col-auto\">\r\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{allMyPaidContractCount}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col\">\r\n                                        <div class=\"progress progress-sm mr-2\">\r\n                                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                        </div>\r\n                                    </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Pending Requests Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card border-left-secondary shadow h-100\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-secondary text-uppercase mb-1\">\r\n                            Paid Loans</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{allMyPaidLoanCount}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-primary text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                    Active Loan</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyActiveLoanCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-warning text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                    Disbursed Loans</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyDisbursedLoanCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-success text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                    UnSigned contracts</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyUnSignedContractLoanCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-secondary text-white shadow\">\r\n            <div class=\"card-body dashobard-card\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                    Profit Overview</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyProfitOverviewCount}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\">Active Loans</h6>\r\n\r\n            </div>\r\n\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive table-billing-history\">\r\n                    <table class=\"table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\">Type</th>\r\n                                <th scope=\"col\">Lender Name</th>\r\n                                <th scope=\"col\">Amount</th>\r\n                                <th scope=\"col\">Refund</th>\r\n                                <th scope=\"col\">Next EMI</th>\r\n                                <th scope=\"col\">Status</th>\r\n                                <th scope=\"col\">#</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['accepted']:checkCreatedByUserId:checkCreatedByT\">\r\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\r\n                                <td class=\"text-capitalize\">\r\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\r\n                                    true,'firstName')}}</td>\r\n                                <td>{{LoanObj.loanAmount}}</td>\r\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\r\n                                    LoanObj.loanTenureInMonths)}}</td>\r\n                                <td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\r\n                                <td>\r\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\r\n                                        <a>\r\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-danger\">Pending</span>\r\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-success\">Paid</span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\r\n                                        <span class=\"badge badge-primary\">Details</span>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-primary\">Unsigned Contracts</h6>\r\n\r\n            </div>\r\n\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive table-billing-history\">\r\n                    <table class=\"table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\">Type</th>\r\n                                <th scope=\"col\">Lender Name</th>\r\n                                <th scope=\"col\">Amount</th>\r\n                                <th scope=\"col\">Refund</th>\r\n                                <th scope=\"col\">Next EMI</th>\r\n                                <th scope=\"col\">Status</th>\r\n                                <th scope=\"col\">#</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['ongoing_accepted']:checkCreatedByUserId:checkCreatedByT\">\r\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\r\n                                <td class=\"text-capitalize\">\r\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\r\n                                    true,'firstName')}}</td>\r\n                                <td>{{LoanObj.loanAmount}}</td>\r\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\r\n                                    LoanObj.loanTenureInMonths)}}</td>\r\n                                <td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\r\n                                <td>\r\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\r\n                                        <a>\r\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-danger\">Pending</span>\r\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\r\n                                                class=\"badge badge-success\">Paid</span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\r\n                                        <span class=\"badge badge-primary\">Details</span>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--\r\n    <div class=\"row d-none\">\r\n    \r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"row\">\r\n    \r\n                <div class=\"col-xl-12 col-md-6 mb-3\">\r\n                    <div class=\"card shadow-sm\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col text-center border-right\">\r\n                                    <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Wallet\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        ${{fundService.totalFund4currentUser}}</div>\r\n                                </div>\r\n    \r\n                                <div class=\"col text-center\">\r\n                                    <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Sessions\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{allSessionsCount}}/{{allSessionsTodayCount}}</div>\r\n                                </div>\r\n    \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"col-xl-12 col-md-6 mb-3\">\r\n    \r\n                    <section class=\"blog-sidebar pt-0\">\r\n                        <div class=\"row pl-0 pr-0\">\r\n                            <div class=\"col-lg-12\">\r\n                                 <div>\r\n                                    <h5 class=\"blog-title\">upcoming sessions</h5>\r\n                                    <div class=\"sidebar-container\">\r\n                                        <div *ngFor=\"let item of utilityService._.values(allSessionsTodayList);\" class=\"post-container d-flex\">\r\n                                            <div class=\"w-35 m-r-25\">\r\n                                                <img alt=\"\" class=\"img-fluid\" src=\"/assets/img/na.png\">\r\n                                                <div class=\"badge badge-blue\">\r\n                                                    {{item.location}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div>\r\n                                                <h5 class=\"post-head\">{{item.sessionSubject}}</h5>\r\n                                                <h6 class=\"date\">{{item.loanStartDateTime | date:'medium'}}</h6>\r\n                                                <div class=\"mt-3\">\r\n                                                    <i class=\"icon-video-camera fa-lg mr-3\" (click)=\"clickedOnSessionChatVideo(item, true)\"></i>\r\n                                                    <i class=\"icon-comment\" (click)=\"clickedOnSessionChatVideo(item, false)\"></i>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"mt-2 text-center blog-agency no-item\">\r\n                                            <img src=\"assets/img/noresult.png\" style=\"height: 60px;\">\r\n                                            <h5 class=\"mt-3 font-weight-normal\">Looks like you don't have any counselling Session today</h5>\r\n                                        </div>\r\n    \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n    \r\n            </div>\r\n    \r\n        </div>\r\n    \r\n        <div class=\"col-xl-8 col-12\">\r\n    \r\n            <section class=\"agency blog blog-sec blog-sidebar sider p-0\">\r\n    \r\n                <div class=\"h6 mb-3\">\r\n    \r\n                    LATEST SESSIONS\r\n                   \r\n                </div>\r\n                <div class=\"card shadow-sm mb-4\" *ngFor=\"let session of allSessionsData\">\r\n                    <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n                        {{session.sessionSubject}}\r\n                    </div>\r\n                    <div class=\"card-body px-md-3 px-1 small\">\r\n                         <div class=\"row\">               \r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <p class=\"para2\" [class.show_more]=\"!session._id\">\r\n                                {{session.loanDescription}}\r\n                            </p>\r\n                        </div>          \r\n                        <div class=\"col-xl-6 col-6 border-right mb-2\">\r\n                            <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{session.loanStartDateTime | date:'MMM d, h:mm a'}}\r\n                        </div>\r\n                       \r\n                        <div class=\"col-xl-6 col-6\">\r\n                            <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\r\n                            \r\n                            {{session.location}}\r\n                        </div>\r\n                      \r\n                    </div>\r\n                    </div>\r\n                    <div class=\"card-footer bg-white\">\r\n                        <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span>\r\n                        <a *ngIf=\"!check4applyToSession(session)\" class=\"btn btn-success  text-capitalize btn-sm float-right text-white\" (click)=\"applyToSession(session)\">Apply</a>\r\n                        <a *ngIf=\"check4applyToSession(session)\" class=\"btn btn-primary text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(session)\"> Details</a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div *ngIf=\"!allSessionsData\">\r\n                    <div class=\"content_loader\"></div>\r\n                    <div class=\"content_loader\"></div>\r\n                </div>\r\n    \r\n            </section>\r\n        </div>\r\n    </div>\r\n    -->";
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
    "4tmY":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/modal/modal-applied-session-display.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tmY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2 mat-dialog-title class=\"text-primary\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-11 col-10\">\r\n            <h4 class=\"text-black-50\">\r\n                Lenders Requests for {{utilityService.returnLoanType(LoanObj.loanType)}} of kr {{LoanObj.loanAmount}}\r\n            </h4>\r\n        </div>\r\n        <div class=\"col-xl-1 col-2\">\r\n\r\n            <i class=\"icon-close float-right\" mat-button mat-dialog-close></i>\r\n\r\n        </div>\r\n    </div>\r\n</h2>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12\">\r\n            <div id=\"accordion\">\r\n                <div class=\"card shadow-sm mb-3\" *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers;\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"collapsed card-link\" data-toggle=\"collapse\"\r\n                            [attr.href]=\"'#collapse_' + LoanApplyObj.borrowerId\">\r\n                            {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\r\n                            false,'firstName')}}\r\n                            <label class=\"badge font-weight-light text-capitalize text-cap\"\r\n                                [ngClass]=\"{'badge-success': (LoanApplyObj.status==SessionStatus.Accepted || LoanApplyObj.status==SessionStatus.Active || LoanApplyObj.status==SessionStatus.Completed || LoanApplyObj.status==SessionStatus.OngoingInitiated  || LoanApplyObj.status==SessionStatus.OngoingAccepted  || LoanApplyObj.status==SessionStatus.Ongoing), 'badge-danger': (LoanApplyObj.status==SessionStatus.Rejected || LoanApplyObj.status==SessionStatus.RejectedOngoing || LoanApplyObj.status==SessionStatus.Suspended), 'badge-info': ( LoanApplyObj.status==null || LoanApplyObj.status=='' || LoanApplyObj.status==SessionStatus.Pending)}\">{{\r\n                                utilityService.returnStringWithReplacing_(LoanApplyObj.status || SessionStatus.Pending)\r\n                                | titlecase }}</label>\r\n                            <label class=\"badge badge-info font-weight-light text-capitalize text-cap float-right\">\r\n                                #{{LoanApplyObj.loanApplyNumber}}\r\n                            </label>\r\n                        </a>\r\n                    </div>\r\n                    <div [attr.id]=\"'collapse_' + LoanApplyObj.borrowerId\" class=\"collapse show\"\r\n                        data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-6 col-12\">\r\n                                    <h5 class=\"card-title\" i18n>Proposed Amount: <badge class=\"badge badge-primary\">\r\n                                            {{LoanApplyObj.proposedLoanAmount || 'NA'}}</badge>\r\n                                    </h5>\r\n                                </div>\r\n                                <div class=\"col-xl-6 col-12\">\r\n                                    <h5 *ngIf=\"LoanApplyObj.loanInsuranceRequired\" class=\"card-title float-right\" i18n>Applied for Insurance with Amount: <badge\r\n                                            class=\"badge badge-primary\">\r\n                                            {{LoanApplyObj.loanInsuranceAmount || 'NA'}}</badge>\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\">\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionIdForLoanAmountPaidByLender\" i18n>TransactionId/Payment\r\n                                            Ref. ID</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.transactionIdForLoanAmountPaidByLender}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionOnForLoanAmountPaidByLender\" i18n>Transaction\r\n                                            Date</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.transactionOnForLoanAmountPaidByLender | date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"createdOnForLoanAmountPaidByLender\" i18n>Updated On</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.createdOnForLoanAmountPaidByLender | date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12\">\r\n                                    <p class=\"mb-2\" for=\"transactionDescriptionForLoanAmountPaidByLender\" i18n>\r\n                                        Description:</p>\r\n                                    <div class=\"text-black-50\" i18n>\r\n                                        {{LoanApplyObj.transactionDescriptionForLoanAmountPaidByLender}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionOnForLoanAmountPaidByLenderConfirmByBorrower\"\r\n                                            i18n>Transaction\r\n                                            Date</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.transactionOnForLoanAmountPaidByLenderConfirmByBorrower |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"createdOnForLoanAmountPaidByLender\" i18n>Updated On</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObj.createdOnForLoanAmountPaidByLenderConfirmByBorrower |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <p class=\"mb-2\"\r\n                                        for=\"transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower\" i18n>\r\n                                        Description:</p>\r\n                                    <div class=\"text-black-50\" i18n>\r\n                                        {{LoanApplyObj.transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\"\r\n                                *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower && LoanApplyObj.isLoanAmountPaidByLender && returnSessionApplyStatus(LoanApplyObj)==SessionStatus.Accepted && LoanApplyObj.borrowerId==authenticationService.currentUserValue._id\">\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"form-check-inline\">\r\n                                            <div class=\"custom-control custom-checkbox\">\r\n                                                <input\r\n                                                    [(ngModel)]=\"LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower\"\r\n                                                    name=\"isLoanAmountPaidByLenderConfirmByBorrower\"\r\n                                                    id=\"isLoanAmountPaidByLenderConfirmByBorrower\" type=\"checkbox\"\r\n                                                    class=\"custom-control-input\" [value]=\"true\"\r\n                                                    [checked]=\"LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                                <label for=\"isLoanAmountPaidByLenderConfirmByBorrower\"\r\n                                                    class=\"custom-control-label\" i18n>\r\n                                                    Is Loan Amount Received </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group\">\r\n\r\n                                        <label for=\"transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised\"\r\n                                            i18n>\r\n                                            Transaction Completion Date\r\n                                        </label>\r\n                                        <input type=\"date\"\r\n                                            [(ngModel)]=\"transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised\"\r\n                                            class=\"form-control\" />\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"usr\" i18n>Transaction Description</label>\r\n                                        <input type=\"transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower\"\r\n                                            class=\"form-control\" placeholder=\"Description\"\r\n                                            [(ngModel)]=\"LoanApplyObjCurrent.transactionDescriptionForLoanAmountPaidByLenderConfirmByBorrower\">\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <hr>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <button class=\"btn btn-primary btn-sm float-right\"\r\n                                        (click)=\"paymentDoneByLenderConfirmByBorrower(LoanApplyObj)\" i18n>\r\n                                        <i class=\"icon-cloud-up\"></i>&nbsp;Update\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender\">\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"installmentKey\" i18n>Installment For</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.installmentKey}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionIdForLoanAmountPaidToLender\" i18n>TransactionId/Payment\r\n                                            Ref.\r\n                                            ID</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionOnForLoanAmountPaidToLender\" i18n>Transaction\r\n                                            Date</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"createdOnForLoanAmountPaidToLender\" i18n>Updated On</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <p class=\"mb-2\" for=\"transactionDescriptionForLoanAmountPaidToLender\" i18n>\r\n                                        Note:</p>\r\n                                    <div class=\"text-black-50\" i18n>\r\n                                        {{LoanApplyObjCurrent4Installment.transactionDescriptionForLoanAmountPaidToLender}}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"transactionOnForLoanAmountPaidToLenderConfirmByLender\"\r\n                                            i18n>Confirmation: Transaction Date</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLenderConfirmByLender\r\n                                            |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"createdOnForLoanAmountPaidToLenderConfirmByLender\"\r\n                                            i18n>Confirmation: Updated On</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLenderConfirmByLender\r\n                                            |\r\n                                            date:'dd-MMM-YYYY'}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <p class=\"mb-2\" for=\"transactionDescriptionForLoanAmountPaidToLenderConfirmByLender\"\r\n                                        i18n>\r\n                                        Confirmation: Note:</p>\r\n                                    <div class=\"text-black-50\" i18n>\r\n                                        {{LoanApplyObjCurrent4Installment.transactionDescriptionForLoanAmountPaidToLenderConfirmByLender}}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <button class=\"btn btn-primary btn-sm float-right\"\r\n                                        (click)=\"LoanApplyObjCurrent4Installment={};\" i18n>\r\n                                        <i class=\"icon-eye\"></i>&nbsp;Hide\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\"\r\n                                *ngIf=\"!LoanApplyObj.isLoanAmountPaidByBorrower && LoanApplyObjCurrent4Installment.installmentKey && !LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender && returnSessionApplyStatus(LoanApplyObj)==SessionStatus.Accepted  && LoanApplyObj.borrowerId==authenticationService.currentUserValue._id\">\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group border-right\">\r\n                                        <label for=\"installmentKey\" i18n>Installment For</label>\r\n                                        <h4 class=\"text-primary\" i18n>\r\n                                            {{LoanApplyObjCurrent4Installment.installmentKey}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"transactionIdForLoanAmountPaidToLender\" i18n>TransactionId/Payment\r\n                                            Ref. ID</label>\r\n                                        <input type=\"text\" class=\"form-control\"\r\n                                            placeholder=\"TransactionId/Payment Ref. ID\"\r\n                                            [(ngModel)]=\"LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-4 col-12\">\r\n                                    <div class=\"form-group\">\r\n\r\n                                        <label for=\"transactionOnForLoanAmountPaidToLenderCustomised\" i18n>\r\n                                            Transaction Date\r\n                                        </label>\r\n                                        <input type=\"date\"\r\n                                            [(ngModel)]=\"transactionOnForLoanAmountPaidToLenderCustomised\"\r\n                                            class=\"form-control\" />\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"transactionDescriptionForLoanAmountPaidToLender\" i18n>Note.</label>\r\n                                        <input type=\"transactionDescriptionForLoanAmountPaidToLender\"\r\n                                            class=\"form-control\" placeholder=\"Description\"\r\n                                            [(ngModel)]=\"LoanApplyObjCurrent4Installment.transactionDescriptionForLoanAmountPaidToLender\">\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <hr>\r\n                                <div class=\"col-xl-12 col-12\">\r\n                                    <button class=\"btn btn-primary btn-sm float-right\"\r\n                                        (click)=\"paymentDoneToLender(LoanApplyObj)\" i18n>\r\n                                        <i class=\"icon-cloud-up\"></i>&nbsp;Update\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12 col-12 mt-3\">\r\n                                    <div class=\"table-responsive table shadow-sm\">\r\n                                        <table class=\"table mb-0\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th scope=\"col\" i18n>EMI Date</th>\r\n                                                    <th scope=\"col\" i18n>Payment</th>\r\n                                                    <th *ngIf=\"returnSessionApplyStatus(LoanApplyObj)==SessionStatus.Accepted\"\r\n                                                        scope=\"col\" i18n>\r\n                                                        <!-- && LoanApplyObj.borrowerId==authenticationService.currentUserValue._id-->\r\n                                                        Payment Status\r\n                                                    </th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr\r\n                                                    *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                                                    <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                                        | date:'dd-MMM-YYYY'}}</td>\r\n                                                    <td *ngIf=\"!LoanApplyObj.calculatedMonthlyAmountForEMI\">kr\r\n                                                        {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n                                                    <td *ngIf=\"LoanApplyObj.calculatedMonthlyAmountForEMI\">kr\r\n                                                        <span\r\n                                                            style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\r\n                                                            {{LoanObj.calculatedMonthlyAmountForEMI}}\r\n                                                        </span>\r\n                                                        &nbsp;\r\n                                                        <span>\r\n                                                            {{LoanApplyObj.calculatedMonthlyAmountForEMI}}\r\n                                                        </span>\r\n                                                    </td>\r\n                                                    <td\r\n                                                        *ngIf=\"returnSessionApplyStatus(LoanApplyObj)==SessionStatus.Accepted\">\r\n                                                        <!--&& LoanApplyObj.borrowerId==authenticationService.currentUserValue._id-->\r\n                                                        <div\r\n                                                            *ngIf=\"!returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && LoanApplyObj.borrowerId==authenticationService.currentUserValue._id\">\r\n                                                            <div class=\"form-check-inline\">\r\n                                                                <div class=\"custom-control custom-checkbox\">\r\n                                                                    <!--[disabled]=\"LoanApplyObjCurrentCheckBoxes.visibleKeys['isLoanAmountPaidByBorrower_isEnable'+i]\"-->\r\n                                                                    <input\r\n                                                                        [(ngModel)]=\"LoanApplyObjCurrentCheckBoxes['isLoanAmountPaidByBorrower_'+i]\"\r\n                                                                        name=\"isLoanAmountPaidByBorrower\"\r\n                                                                        id=\"isLoanAmountPaidByBorrower_{{i}}\"\r\n                                                                        type=\"checkbox\" class=\"custom-control-input\"\r\n                                                                        [value]=\"true\"\r\n                                                                        (change)=\"initiateLoanAmountPaidByBorrower($event, LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_'+i))\"\r\n                                                                        [checked]=\"LoanApplyObjCurrentCheckBoxes['isLoanAmountPaidByBorrower_'+i]\">\r\n                                                                    <label for=\"isLoanAmountPaidByBorrower_{{i}}\"\r\n                                                                        class=\"custom-control-label\" i18n>\r\n                                                                        Is Amount Transfered? </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div\r\n                                                            *ngIf=\"(returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i))  && LoanApplyObj.borrowerId==authenticationService.currentUserValue._id) || (returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && LoanApplyObj.lenderId==authenticationService.currentUserValue._id)\">\r\n                                                            <i class=\"icon-check\"></i>&nbsp;\r\n                                                            Paid{{returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender(LoanApplyObj,\r\n                                                            utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i))?'\r\n                                                            & Verified':''}}\r\n                                                            &nbsp;<i class=\"icon-eye\"\r\n                                                                (click)=\"viewCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i))\"></i>&nbsp;\r\n                                                        </div>\r\n                                                        <div\r\n                                                            *ngIf=\"!returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i))  && LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\r\n                                                            <i class=\"icon-close\"></i>&nbsp;Not Paid\r\n                                                        </div>\r\n                                                        <div\r\n                                                            *ngIf=\"returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && !returnT4IfCurrentInstallmentAlreadyPaidConfirmByLender(LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrower_isEnable'+i)) && LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\r\n                                                            <div class=\"form-check-inline\">\r\n                                                                <div class=\"custom-control custom-checkbox\">\r\n                                                                    <!--[disabled]=\"LoanApplyObjCurrentCheckBoxes.visibleKeys['isLoanAmountPaidByBorrower_isEnable'+i]\"-->\r\n                                                                    <input\r\n                                                                        [(ngModel)]=\"LoanApplyObjCurrentCheckBoxes['isLoanAmountPaidByBorrowerConfirmByLender_'+i]\"\r\n                                                                        name=\"isLoanAmountPaidByBorrowerConfirmByLender\"\r\n                                                                        id=\"isLoanAmountPaidByBorrowerConfirmByLender_{{i}}\"\r\n                                                                        type=\"checkbox\" class=\"custom-control-input\"\r\n                                                                        [value]=\"true\"\r\n                                                                        (change)=\"initiateLoanAmountPaidByBorrowerConfirmByLender($event, LoanApplyObj, utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1),('isLoanAmountPaidByBorrowerConfirmByLender_'+i))\"\r\n                                                                        [checked]=\"LoanApplyObjCurrentCheckBoxes['isLoanAmountPaidByBorrowerConfirmByLender_'+i]\">\r\n                                                                    <label\r\n                                                                        for=\"isLoanAmountPaidByBorrowerConfirmByLender_{{i}}\"\r\n                                                                        class=\"custom-control-label\" i18n>\r\n                                                                        Is Amount Received? </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"row\" [ngClass]=\"{ 'd-none': ready2Refund }\"\r\n                                [ngSwitch]=\"returnSessionApplyStatus(LoanApplyObj)\">\r\n                                <!-- the same view can be shown in more than one case -->\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Pending\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Rejected)\">Reject</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Accepted)\">Accept</button>\r\n                                    -->\r\n                                    <button class=\"btn btn-primary btn-sm float-right mr-2\"\r\n                                        (click)=\"clickedOnSessionChatVideo(LoanObj, false)\"><i\r\n                                            class=\"icon-comments\"></i>&nbsp;Chat</button>\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Accepted\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.RejectedOngoing)\">Reject</button> &nbsp;\r\n                                    <button class=\"btn btn-info btn-sm\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.RejectedOngoingWithRefund)\">Apply\r\n                                        for Refund</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.OngoingInitiated)\">Proceed for\r\n                                        Execution</button>\r\n                                        -->\r\n                                    <a class=\"btn btn-success btn-sm float-left ml-2\" target=\"_blank\"\r\n                                        [href]=\"returnUrl4downloadCOntractPDF(LoanApplyObj._id)\" download><i\r\n                                            class=\"icon-cloud-down\"></i>&nbsp;Download Contract</a>\r\n                                    <button class=\"btn btn-primary btn-sm float-right\"\r\n                                        (click)=\"clickedOnSessionChatVideo(LoanObj, false)\"><i\r\n                                            class=\"icon-comments\"></i>&nbsp;Chat</button>\r\n                                </div>\r\n\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingInitiated\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.RejectedOngoing)\">Reject</button>\r\n                                    <button [disabled]=\"true\" class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.OngoingAccepted)\">Proceed for\r\n                                        Execution</button>\r\n                                    -->\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingAccepted\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.RejectedOngoing)\">Reject</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Ongoing)\">Proceed for\r\n                                        Execution</button>\r\n                                    -->\r\n                                    <button *ngIf=\"LoanApplyObj.createdBy!=authenticationService.currentUserValue._id\"\r\n                                        class=\"btn btn-success btn-sm float-right\"\r\n                                        (click)=\"closeDialog(LoanApplyObj, SessionStatus.Accepted)\">\r\n                                        Proceed for Contract Sign\r\n                                        {{LoanApplyObj.createdBy}}-{{authenticationService.currentUserValue._id}}\r\n                                    </button>\r\n                                    <button class=\"btn btn-primary btn-sm float-right mr-2\"\r\n                                        (click)=\"clickedOnSessionChatVideo(LoanObj, false)\"><i\r\n                                            class=\"icon-comments\"></i>&nbsp;Chat</button>\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Ongoing\">\r\n                                    <!--\r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Suspended)\">Reject</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Completed)\">Completed</button>\r\n                                    -->\r\n                                </div>\r\n                                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Completed\">\r\n                                    <button mat-button mat-dialog-close class=\"btn btn-success btn-sm float-right\"\r\n                                        (click)=\"addNewRatings(LoanApplyObj)\">Rate Now</button>\r\n                                </div>\r\n                                <!--default case when there are no matches -->\r\n                                <div class=\"col-xl-12\" *ngSwitchDefault>\r\n                                    <!-- \r\n                                    <button class=\"btn btn-danger btn-sm float-left\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Rejected)\">Reject</button>\r\n                                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Accepted)\">Accept</button>\r\n                                -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--<button *ngIf=\"!check4SessionApplyStatus(LoanApplyObj)\" class=\"btn btn-success btn-sm float-right\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.Accepted)\">Accept</button>\r\n                        <button *ngIf=\"check4SessionApplyStatus(LoanApplyObj)\" class=\"btn btn-success btn-sm float-right mr-2\" (click)=\"closeDialog(LoanApplyObj, SessionStatus.OngoingInitiated)\">Proceed for Execution</button>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</mat-dialog-content>\r\n\r\n<!-- <mat-dialog-actions align=\"end\">\r\n    <button class=\"btn btn-primary btn-sm float-right\" mat-button mat-dialog-close>\r\n        <i class=\"icon-close\"></i> CLOSE\r\n    </button>\r\n</mat-dialog-actions> -->\r\n\r\n\r\n\r\n\r\n<!--\r\n<div class=\"row\" [ngClass]=\"{ 'd-none': !userInitiatedForPayment }\">\r\n    <div class=\"col-xl-12 text-center\">\r\n        <app-payment></app-payment>\r\n    </div>\r\n</div>\r\n<div class=\"row\" [ngClass]=\"{ 'd-none': !ready2Refund }\">\r\n    <div class=\"col-xl-12\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 text-center\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"mb-3 font-weight-bold\">\r\n                            Paid Amount:&nbsp;\r\n                        </label>\r\n                        <label class=\"mb-3\">\r\n                            {{refundObj.amount}}\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"mb-3 font-weight-bold\">\r\n                            Refund Charges:&nbsp;\r\n                        </label>\r\n                        <label class=\"mb-3\">\r\n                            {{refundObj.cancellationCharges}}\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"mb-3 font-weight-bold\">\r\n                            Amount to be refunded:&nbsp;\r\n                        </label>\r\n                        <label class=\"mb-3\">\r\n                            {{refundObj.finalAmount2Refund}}\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-danger btn-sm\" (click)=\"ready2Refund=false\">Cancel</button> &nbsp;\r\n                        <button class=\"btn btn-success btn-sm\" (click)=\"finalSubmissionForRefund()\">Refund</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n-->";
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


      __webpack_exports__["default"] = "<section class=\"tab-product  p-b-0\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-lg-12\">\r\n            <ul class=\"nav nav-justified nav-material nav-tabs\" id=\"top-tab\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-home\" \r\n                    id=\"top-home-tab\" role=\"tab\" (click)=\"SessionStatusTypeFilter=[SessionStatus.Pending,SessionStatus.OngoingAccepted];checkCreatedByUserId=authenticationService.currentUserValue._id;checkCreatedByT=true;\">Received\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-sent\" id=\"profile-sent-tab\"\r\n                        role=\"tab\" (click)=\"SessionStatusTypeFilter=[SessionStatus.OngoingAccepted,SessionStatus.Rejected, SessionStatus.RejectedOngoing, SessionStatus.Suspended, SessionStatus.RejectedOngoingWithRefund];checkCreatedByUserId=authenticationService.currentUserValue._id;checkCreatedByT=false\">Sent\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link active show\" data-toggle=\"tab\" href=\"#top-active\"\r\n                        id=\"profile-active-tab\" role=\"tab\"\r\n                        (click)=\"SessionStatusTypeFilter=[SessionStatus.Accepted];checkCreatedByUserId=null;checkCreatedByT=false;\">Active\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a aria-selected=\"false\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-profile\" id=\"profile-top-tab\"\r\n                        role=\"tab\" (click)=\"SessionStatusTypeFilter=[SessionStatus.Completed];checkCreatedByUserId=null;checkCreatedByT=false;\">Paid\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-profile\"\r\n                        id=\"profile-top-tab\" role=\"tab\"\r\n                        (click)=\"SessionStatusTypeFilter=[SessionStatus.RejectedOngoing, SessionStatus.Suspended];checkCreatedByUserId=null;checkCreatedByT=false;\">Unpaid\r\n                        \r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-contact\"\r\n                        id=\"contact-top-tab\" role=\"tab\"\r\n                        (click)=\"SessionStatusTypeFilter=[SessionStatus.Rejected,SessionStatus.RejectedOngoingWithRefund];checkCreatedByUserId=null;checkCreatedByT=false;\">Inkasso\r\n                        Cases\r\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                    </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li>\r\n                <!-- <li class=\"nav-item\"><a aria-selected=\"true\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-review\" id=\"review-top-tab\" role=\"tab\" (click)=\"SessionStatusTypeFilter=[SessionStatus.Completed]\">Completed \r\n                    <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\r\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\r\n                        </a>\r\n                    <div class=\"material-border\"></div>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\r\n    <!-- ;-->\r\n    <div class=\"card shadow-sm mb-4\" *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : (SessionStatusTypeFilter.length>0 ? SessionStatusTypeFilter:['accepted']):checkCreatedByUserId:checkCreatedByT:(SessionStatusTypeFilter.indexOf(SessionStatus.Pending)>-1)\">\r\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n            {{utilityService.returnLoanType(LoanObj.loanType)}}\r\n        </div>\r\n        <div class=\"card-body px-md-3 px-1 small\">\r\n            <div class=\"row\">\r\n               \r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group border-right\">\r\n                        <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                        <h4 class=\"text-primary\">\r\n                            {{LoanObj.loanAmount}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                        <h4 class=\"text-primary\">\r\n                            {{LoanObj.loanTenureInMonths}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group border-right\">\r\n                        <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                        <h4 class=\"text-primary\">\r\n                            {{LoanObj.loanInterestRate}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group border-right\">\r\n                        <label for=\"loanStartDateTime\" i18n>Start Date</label>\r\n                        <h4 class=\"text-primary\" i18n>\r\n                            {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-4 col-12\">\r\n                    <div class=\"form-group\">\r\n                        <p class=\"mb-2\" i18n>How to give the money</p>\r\n\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            BANK\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            Cash\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            Revolut\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            Paypal\r\n                        </span>\r\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\r\n                            class=\"badge font-weight-light text-uppercase badge-success\">\r\n                            Skrill\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-12\">\r\n                    <p class=\"mb-2\" i18n>Description:</p>\r\n                    <div class=\"text-black-50\" i18n>\r\n                        {{LoanObj.loanDescription}}\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card-footer bg-white\">\r\n            <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{LoanObj.sessionType}}</span>\r\n            <div class=\"row\" [ngSwitch]=\"returnSessionApplyStatus(utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\r\n                <!-- the same view can be shown in more than one case -->\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Pending\">\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                    -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Accepted\">\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                    -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingInitiated\">\r\n                    <!--\r\n                    <button *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right\" (click)=\"sessionApplyOngoingCheck(LoanObj, utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\r\n                        Proceed for Execution\r\n                    </button>\r\n                -->\r\n                <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingAccepted\">\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm text-capitalize float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">\r\n                        Details\r\n                    </a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm text-capitalize float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> <i class=\"icon-check fa-lg text-white\"></i>\r\n                        Proceed for Contract Sign\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Ongoing\">\r\n                   <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">\r\n                        Details\r\n                    </a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> <i class=\"icon-check fa-lg text-white\"></i>\r\n                        Proceed for Execution\r\n                    </a>\r\n                -->\r\n                <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                </div>\r\n                <!--default case when there are no matches -->\r\n                <div class=\"col-xl-12\" *ngSwitchDefault>\r\n                    <!--\r\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm text-capitalize float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Apply</a>\r\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Details</a>\r\n                    -->\r\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mt-5 text-center blog-agency no-item\">\r\n        <img src=\"assets/img/noresult.png\">\r\n        <h2 class=\"text-black-50\">No Data Found</h2>\r\n    </div>\r\n</section>";
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
            //console.log('data => ', data)
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
                _proccessedSessionObj.sessionAppliedByBorrowers = _sessionObj.sessionAppliedByLenders;
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
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("25 :: co :: Dialog result: ".concat(JSON.stringify(result)));
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

      var BorrowNowComponent = /*#__PURE__*/function () {
        function BorrowNowComponent(socketService, utilityService, socketioService, alertService, appRouterService, formBuilder, authenticationService, userService, contactService) {
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
          this.loading = false;
          this.LoanObj = {};
          this.loanId = null;
          this.loanApplyId = null;
          this.submitted = false;
          this.borrowerUserObj = null;
          this.lenderUserObj = null;
          this.headerMessage2show = "";
          this.userClickedOnSignLoanContract = false;
          var paramobj = history.state;

          if (paramobj) {
            this.loanId = paramobj['loanId'];
            delete history.state['loanId'];
            this.loanApplyId = paramobj['loanApplyId'];
            delete history.state['loanApplyId'];

            if (this.loanApplyId) {
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
            this.returnHeaderTitleForPage();
            this.borrowNowForm = this.formBuilder.group({
              eSignatureBorrowersPassportNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              eSignatureBorrowersName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              loanInsuranceRequired: [false],
              loanInsuranceAmount: [0],
              proposedLoanAmount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.LoanObj.loanAmount)],
              loanApplyNumber: [null],
              loanInsuranceCreatedOn: [null],
              calculatedMonthlyAmountForEMI: [null]
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
              calculatedMonthlyAmountForEMI: [_userObj.calculatedMonthlyAmountForEMI || null]
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
                if (this.borrowNowForm.get('proposedLoanAmount').value <= this.LoanObj.loanAmount) {
                  this.alertService.error("amount must be hight than kr " + this.LoanObj.loanAmount);
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
              }
            }

            this.userClickedOnSignLoanContract = true;
            this.returnHeaderTitleForPage();
          }
        }, {
          key: "returnAllowedAmountForLenderDependOnUserType",
          value: function returnAllowedAmountForLenderDependOnUserType() {
            var maxLoanAmountForLender = null;

            if (this.lenderUserObj.userType) {
              maxLoanAmountForLender = this.utilityService.LoanAmountMaxTypes[this.lenderUserObj.userType].amount;
            } else {
              maxLoanAmountForLender = this.utilityService.LoanAmountMaxTypes[src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["UserType"].new_lender].amount;
            }

            return maxLoanAmountForLender;
          }
        }, {
          key: "clickedOnVerifiedSignLoanContract",
          value: function clickedOnVerifiedSignLoanContract() {
            var _this3 = this;

            this.submitted = true;

            if (this.borrowNowForm.invalid) {
              return;
            }

            if (this.borrowNowForm.get('eSignatureBorrowersPassportNumber').value != this.borrowerUserObj.myPassportNumber) {
              this.alertService.error("Passport Number miss match. Please enter proper number");
              return;
            }

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
                _currentSessionApply.status = _currentSessionApply.status || src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].OngoingAccepted;
              }

              this.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);

              switch (_currentSessionApply.status) {
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Pending:
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].OngoingAccepted:
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

              var _currentContactObj = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, this.utilityService.returnLoanType(this.LoanObj.loanType) + " - " + this.borrowerUserObj.firstName, this.LoanObj._id, _currentSessionApply._id, _adminUsersArray, null, null);

              this.socketService.sendEventToAddNewContact(_currentContactObj); //#endregion create chat group

              switch (_currentSessionApply.status) {
                case src_app_models_role__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].Accepted:
                  this.alertService.success("Updated. Loan contract is available under My Contract->Accepted tab.", true); //#region print PDF signed contract

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
                  this.alertService.success("Updated. Loan contract is available under My Contract->Completed tab.", true);
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

            this.appRouterService.appRouteToPath("/borrower/my-contract");
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
        }];
      };

      BorrowNowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-borrow-now',
        template: _raw_loader_borrow_now_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_borrow_now_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__["SocketioService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_11__["SocketioService"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_9__["AppRouterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"]])], BorrowNowComponent);
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
    "Ccej":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/borrower.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ccej(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\r\n    <app-header></app-header>\r\n</div>\r\n\r\n<div class=\"wrapper-outlet\">\r\n    <div class=\"container-fluid  pt-3\">\r\n        <!--<button class=\"btn btn-primary\" (click)=\"applyToSession()\">Open dialog</button>-->\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- <app-footer></app-footer> -->";
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

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(userService, socketService, formBuilder, sessionsService, alertService, utilityService, dialog, authenticationService, fundService, router, contactService, _cdr) {
          var _this4 = this;

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
          this.checkIfCurrentUserUpdatedBankDetailsOrNot();
          this.checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot();
          this.checkCreatedByUserId = null;
          this.checkCreatedByT = null;
          var _obj2Save = {}; //#region get count for allMyActiveLoanCount i.e. status set to accepted

          _obj2Save = {
            borrowerId: this.authenticationService.currentUserValue._id,
            status: src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"].Accepted
          };
          this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyActiveLoanCount').subscribe(function (data) {
            //console.log('data => ', data)
            if (data && data['success']) {
              _this4.allMyActiveLoanCount = data['data'];
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this4.loading = false;
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


            _this4.loading = false;
          }); //#endregion get count for allMyActiveLoanCount i.e. status set to accepted
          //#region get count for allMyDisbursedLoanCount i.e. status set to accepted and loan amount paid by lender

          _obj2Save = {
            borrowerId: this.authenticationService.currentUserValue._id,
            status: src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"].Accepted,
            isLoanAmountPaidByLender: true
          };
          this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyDisbursedLoanCount').subscribe(function (data) {
            //console.log('data => ', data)
            if (data && data['success']) {
              _this4.allMyDisbursedLoanCount = data['data'];
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this4.loading = false;
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


            _this4.loading = false;
          }); //#endregion get count for allMyDisbursedLoanCount i.e. status set to accepted and loan amount paid by lender
          //#region get count for allMyUnSignedContractLoanCount i.e. status set to OngoingAccepted

          _obj2Save = {
            borrowerId: this.authenticationService.currentUserValue._id,
            status: src_app_models__WEBPACK_IMPORTED_MODULE_13__["SessionStatus"].OngoingAccepted
          };
          this.socketService.getSessionApplyCountByQuery(false, _obj2Save, true, 'sessions_response_get_session_apply_count_by_query_allMyUnSignedContractLoanCount').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (data) {
            //console.log('data => ', data)
            if (data && data['success']) {
              _this4.allMyUnSignedContractLoanCount = data['data'];
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this4.loading = false;
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


            _this4.loading = false;
          }); //#endregion get count for allMyUnSignedContractLoanCount i.e. status set to OngoingAccepted

          this.sessionsService.getSessionAllByBorrowerId(this.authenticationService.currentUserValue._id, null, null, null, true, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (data) {
            //console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              _this4.allSessionsData = data['data'];

              _this4.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();

              _this4.userService.proccessAllAppUsersCollections(_this4.utilityService._.uniq(_this4.utilityService._.map(_this4.utilityService._.flattenDepth(_this4.utilityService._.map(_this4.utilityService._.values(_this4.allSessionsData), "sessionAppliedByBorrowers"), 1), 'lenderId'))); //this.alertService.success(data['message'], true);


              _this4.loading = false; //this.element_btn_click_addSession_skills_verification.click();
            } else {
              //alert(JSON.stringify(data['message']));
              //this.alertService.error(data['message']);
              _this4.loading = false;
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


            _this4.loading = false;
          });
          this.sessionsService.getUpdatesForSessionAllByBorrowerId().subscribe(function (data) {
            if (data && data['success']) {
              var _keyPairedMapObj = _this4.utilityService._.mapKeys(_this4.allSessionsData, "_id");

              for (var _items in data['data']) {
                var _currentObj = data['data'][_items];
                _keyPairedMapObj[_currentObj._id] = _currentObj;
              }

              _this4.allSessionsData = _this4.utilityService._.values(_keyPairedMapObj);

              _this4.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();

              _this4.loading = false;
            } else {
              _this4.loading = false;
            }
          }, function (error) {
            _this4.loading = false;
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
          key: "checkIfCurrentUserUpdatedBankDetailsOrNot",
          value: function checkIfCurrentUserUpdatedBankDetailsOrNot() {
            var _this5 = this;

            this.userService.getUserById(this.authenticationService.currentUserValue._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (data) {
              //console.log('data => ', data)
              if (data && data['success']) {
                if (data["data"]["bankName"] || data["data"]["accountNumber"]) {
                  _this5.authenticationService.currentUserValue.isUsersBankDetailsSubmitted = true;

                  _this5.authenticationService.sendCurrentUserObj(_this5.authenticationService.currentUserValue);
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

              _this5.loading = false;
            });
          }
        }, {
          key: "checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot",
          value: function checkIfCurrentUserUpdatedAndVerifiedIncomeAndExpenseDetailsOrNot() {
            var _this6 = this;

            this.userService.getUserIncomeExpenseDetailsByUserId(this.authenticationService.currentUserValue._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (data) {
              //console.log('data => ', data)
              if (data && data['success']) {
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

                        _LoanObj.nextInstallment = installment.loanStartDateTime;
                        break;
                      }
                    }
                  }
                }

                this.allSessionsData[item] = _LoanObj;
              }
            }
          }
        }, {
          key: "sessionApplyOngoingCheck",
          value: function sessionApplyOngoingCheck(sessionObj, sessionApply) {
            console.log('179', this.authenticationService.currentUserValue);
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
              }

              console.log("163 :: myc :: Dialog result: ".concat(JSON.stringify(result)));
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
            }

            console.log('214', this.authenticationService.currentUserValue);
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
                  console.log("86 :: msc :: Dialog result: ".concat(JSON.stringify(result)));

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
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](sessionObj.sessionAppliedByLenders, {
                  "lenderId": this.authenticationService.currentUserValue._id
                });
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
        }

        _createClass(MySessionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            (function ($) {
              try {
                $('.tooltip-info').tooltip();
              } catch (ex) {
                console.log('48', ex.message);
              }
            })(jQuery);

            this.sessionsService.getSessionAllByBorrowerId(this.authenticationService.currentUserValue._id, null, null, null, true, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              //console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this8.allSessionsData = data['data'];

                _this8.userService.proccessAllAppUsersCollections(_this8.utilityService._.uniq(_this8.utilityService._.map(_this8.utilityService._.flattenDepth(_this8.utilityService._.map(_this8.utilityService._.values(_this8.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //this.alertService.success(data['message'], true);


                _this8.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this8.loading = false;
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


              _this8.loading = false;
            });
            this.sessionsService.getUpdatesForSessionAllByBorrowerId().subscribe(function (data) {
              if (data && data['success']) {
                var _keyPairedMapObj = _this8.utilityService._.mapKeys(_this8.allSessionsData, "_id");

                for (var _items in data['data']) {
                  var _currentObj = data['data'][_items];
                  _keyPairedMapObj[_currentObj._id] = _currentObj;
                }

                _this8.allSessionsData = _this8.utilityService._.values(_keyPairedMapObj);
                _this8.loading = false;
              } else {
                _this8.loading = false;
              }
            }, function (error) {
              _this8.loading = false;
            });
          }
        }, {
          key: "showAppliedToSession",
          value: function showAppliedToSession(sessionObj) {
            var _this9 = this;

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

            console.log('214', this.authenticationService.currentUserValue);
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
                  console.log("86 :: msc :: Dialog result: ".concat(JSON.stringify(result)));

                  if (result.data.status && result.data.sessionApply) {
                    var _loanApplyId = result.data.sessionApply._id;
                    var _status = result.data.status; //initiate payment here
                    //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);

                    var _allowed2CreateContactForSessionT = false;

                    switch (_status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Accepted:
                        //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                        _this9.proccedAppliedToSession(sessionObj, _loanApplyId);

                        break;
                    }
                  }

                  if (result.data.updatedSessionObj) {
                    var _keyPairedMapObj = _this9.utilityService._.mapKeys(_this9.allSessionsData, "_id");

                    _keyPairedMapObj[result.data.updatedSessionObj._id] = result.data.updatedSessionObj;
                    _this9.allSessionsData = _this9.utilityService._.values(_keyPairedMapObj);

                    _this9._cdr.detectChanges();
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
            var _this10 = this;

            console.log('179', this.authenticationService.currentUserValue);
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

                    _currentSessionApply.status = result.data.status || src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending;

                    _this10.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending:
                        _currentSessionApply.createdBy = _this10.authenticationService.currentUserValue._id;

                        _this10.socketService.setSessionApply(true, _currentSessionApply);

                        break;

                      default:
                        _this10.socketService.updateSessionApply(true, _currentSessionApply, _this10.authenticationService.currentUserValue);

                        break;
                    }

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Accepted:
                        _this10.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending:
                        _this10.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Rejected:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoingWithRefund:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Suspended:
                        _this10.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Completed:
                        _this10.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Active:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Ongoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].OngoingInitiated:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].OngoingAccepted:
                        _this10.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);

                        break;

                      default:
                        break;
                    }
                  }
                }
              }

              console.log("163 :: myc :: Dialog result: ".concat(JSON.stringify(result)));
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


      __webpack_exports__["default"] = ".wrapper:focus {\r\n    outline: 0;\r\n}\r\n\r\n.clash-card {\r\n    background: white;\r\n    display: inline-block;\r\n    margin: auto;\r\n    border-radius: 19px;\r\n    position: relative;\r\n    text-align: center;\r\n    box-shadow: -1px 15px 30px -12px black;\r\n}\r\n\r\n.clash-card__image {\r\n    position: relative;\r\n    height: 230px;\r\n    margin-bottom: 35px;\r\n    border-top-left-radius: 14px;\r\n    border-top-right-radius: 14px;\r\n}\r\n\r\n.clash-card__image--barbarian {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg');\r\n}\r\n\r\n.clash-card__image--barbarian img {\r\n    width: 400px;\r\n    position: absolute;\r\n    top: -65px;\r\n    left: -70px;\r\n}\r\n\r\n.clash-card__image--archer {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg');\r\n}\r\n\r\n.clash-card__image--archer img {\r\n    width: 400px;\r\n    position: absolute;\r\n    top: -34px;\r\n    left: -37px;\r\n}\r\n\r\n.clash-card__image--giant {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg');\r\n}\r\n\r\n.clash-card__image--giant img {\r\n    width: 340px;\r\n    position: absolute;\r\n    top: -30px;\r\n    left: -25px;\r\n}\r\n\r\n.clash-card__image--goblin {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg');\r\n}\r\n\r\n.clash-card__image--goblin img {\r\n    width: 370px;\r\n    position: absolute;\r\n    top: -21px;\r\n    left: -37px;\r\n}\r\n\r\n.clash-card__image--wizard {\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg');\r\n}\r\n\r\n.clash-card__image--wizard img {\r\n    width: 345px;\r\n    position: absolute;\r\n    top: -28px;\r\n    left: -10px;\r\n}\r\n\r\n.clash-card__level {\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.clash-card__level--barbarian {\r\n    color: #ec9b3b;\r\n}\r\n\r\n.clash-card__level--archer {\r\n    color: #ee5487;\r\n}\r\n\r\n.clash-card__level--giant {\r\n    color: #f6901a;\r\n}\r\n\r\n.clash-card__level--goblin {\r\n    color: #82bb30;\r\n}\r\n\r\n.clash-card__level--wizard {\r\n    color: #4facff;\r\n}\r\n\r\n.clash-card__unit-name {\r\n    font-size: 26px;\r\n    color: black;\r\n    font-weight: 900;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.clash-card__unit-description {\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.clash-card__unit-stats--barbarian {\r\n    background: #ec9b3b;\r\n}\r\n\r\n.clash-card__unit-stats--barbarian .one-third {\r\n    border-right: 1px solid #bd7c2f;\r\n}\r\n\r\n.clash-card__unit-stats--archer {\r\n    background: #ee5487;\r\n}\r\n\r\n.clash-card__unit-stats--archer .one-third {\r\n    border-right: 1px solid #d04976;\r\n}\r\n\r\n.clash-card__unit-stats--giant {\r\n    background: #f6901a;\r\n}\r\n\r\n.clash-card__unit-stats--giant .one-third {\r\n    border-right: 1px solid #de7b09;\r\n}\r\n\r\n.clash-card__unit-stats--goblin {\r\n    background: #82bb30;\r\n}\r\n\r\n.clash-card__unit-stats--goblin .one-third {\r\n    border-right: 1px solid #71a32a;\r\n}\r\n\r\n.clash-card__unit-stats--wizard {\r\n    background: #4facff;\r\n}\r\n\r\n.clash-card__unit-stats--wizard .one-third {\r\n    border-right: 1px solid #309eff;\r\n}\r\n\r\n.clash-card__unit-stats {\r\n    color: white;\r\n    font-weight: 700;\r\n    border-bottom-left-radius: 14px;\r\n    border-bottom-right-radius: 14px;\r\n}\r\n\r\n.clash-card__unit-stats .one-third {\r\n    width: 33%;\r\n    float: left;\r\n    padding: 10px 5px;\r\n}\r\n\r\n.clash-card__unit-stats sup {\r\n    position: absolute;\r\n    bottom: 4px;\r\n    font-size: 45%;\r\n    margin-left: 2px;\r\n}\r\n\r\n.clash-card__unit-stats .stat {\r\n    position: relative;\r\n    font-size: 20px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.clash-card__unit-stats .stat-value {\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n\r\n.clash-card__unit-stats .no-border {\r\n    border-right: none;\r\n}\r\n\r\n.clearfix:after {\r\n    visibility: hidden;\r\n    display: block;\r\n    font-size: 0;\r\n    content: \" \";\r\n    clear: both;\r\n    height: 0;\r\n}\r\n\r\n.slick-prev {\r\n    left: 100px;\r\n    z-index: 999;\r\n}\r\n\r\n.slick-next {\r\n    right: 100px;\r\n    z-index: 999;\r\n}\r\n\r\n.month {\r\n    font-size: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tbWFya2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUZBQXVGO0FBQzNGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUZBQW1GO0FBQ3ZGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoibG9hbi1tYXJrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggMTVweCAzMHB4IC0xMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX19pbWFnZS0tYmFyYmFyaWFuIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL2JhcmJhcmlhbi1iZy5qcGcnKTtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1iYXJiYXJpYW4gaW1nIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTY1cHg7XHJcbiAgICBsZWZ0OiAtNzBweDtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1hcmNoZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvYXJjaGVyLWJnLmpwZycpO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWFyY2hlciBpbWcge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMzRweDtcclxuICAgIGxlZnQ6IC0zN3B4O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWdpYW50IHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL2dpYW50LWJnLmpwZycpO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWdpYW50IGltZyB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgbGVmdDogLTI1cHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX19pbWFnZS0tZ29ibGluIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL2dvYmxpbi1iZy5qcGcnKTtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS1nb2JsaW4gaW1nIHtcclxuICAgIHdpZHRoOiAzNzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTIxcHg7XHJcbiAgICBsZWZ0OiAtMzdweDtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2ltYWdlLS13aXphcmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvd2l6YXJkLWJnLmpwZycpO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLXdpemFyZCBpbWcge1xyXG4gICAgd2lkdGg6IDM0NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjhweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fbGV2ZWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX19sZXZlbC0tYmFyYmFyaWFuIHtcclxuICAgIGNvbG9yOiAjZWM5YjNiO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fbGV2ZWwtLWFyY2hlciB7XHJcbiAgICBjb2xvcjogI2VlNTQ4NztcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2xldmVsLS1naWFudCB7XHJcbiAgICBjb2xvcjogI2Y2OTAxYTtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX2xldmVsLS1nb2JsaW4ge1xyXG4gICAgY29sb3I6ICM4MmJiMzA7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX19sZXZlbC0td2l6YXJkIHtcclxuICAgIGNvbG9yOiAjNGZhY2ZmO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1iYXJiYXJpYW4ge1xyXG4gICAgYmFja2dyb3VuZDogI2VjOWIzYjtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWJhcmJhcmlhbiAub25lLXRoaXJkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiZDdjMmY7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1hcmNoZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VlNTQ4NztcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWFyY2hlciAub25lLXRoaXJkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkMDQ5NzY7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1naWFudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjY5MDFhO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tZ2lhbnQgLm9uZS10aGlyZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGU3YjA5O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tZ29ibGluIHtcclxuICAgIGJhY2tncm91bmQ6ICM4MmJiMzA7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1nb2JsaW4gLm9uZS10aGlyZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzFhMzJhO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0td2l6YXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZmFjZmY7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS13aXphcmQgLm9uZS10aGlyZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzA5ZWZmO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTRweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyAub25lLXRoaXJkIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyBzdXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDQ1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzIC5zdGF0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLnN0YXQtdmFsdWUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX191bml0LXN0YXRzIC5uby1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpY2stcHJldiB7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLnNsaWNrLW5leHQge1xyXG4gICAgcmlnaHQ6IDEwMHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubW9udGgge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbn0iXX0= */";
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


      __webpack_exports__["default"] = "  <!--copyright start-->\r\n  <div class=\"agency copyright\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"link-horizontal\">\r\n                    <ul>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\">Privacy Policy</a>\r\n                        </li>\r\n\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\">Terms of Use</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/faqs\" routerLinkActive=\"active\">FAQs</a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div>\r\n                    <h6 class=\"copyright-text text-white text-right\">© 2020 Avitii Lender System\r\n\r\n                    </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!--copyright end-->\r\n  \r\n ";
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
          var _this11 = this;

          _classCallCheck(this, GetALoanComponent);

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
          }

          this.currentUserRoleType = this.authenticationService.currentUserValue.userType;
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
                //console.log('data => ', data)
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this11.showEditingForm(data["data"]); //this.alertService.success(data['message'], true);


                  _this11.loading = false; //this.element_btn_click_addSession_skills_verification.click();
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this11.alertService.error(data['message']);

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
                } catch (ex) {}

                _this11.alertService.error(errorMsg2show);

                _this11.loading = false;
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
            var _loanInterestRateValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)];

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
              loanTenureInMonths: [_userObj.loanTenureInMonths || 3, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(3)]],
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
            var _loanInterestRateValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)];

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
              loanTenureInMonths: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(3)]],
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
            var _this12 = this;

            this.submitted = true;

            if (this.addSessionForm.invalid) {
              return;
            }

            var _loanStartDateTime = this.addSessionForm.get('loanStartDateTimeCustomised').value;
            var _loanEndDateTime = this.addSessionForm.get('loanEndDateTimeCustomised').value;
            /*
                if (!_loanStartDateTime || moment(_loanStartDateTime).isBefore(moment().add(1, 'd'))) {
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
                  _this12.alertService.success('Loan Request Updated successfully', true);

                  _this12.appRouterService.appRouter(_this12.authenticationService.currentUserValue);
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this12.alertService.error(data['message']);

                  _this12.loading = false;
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

                _this12.alertService.error(errorMsg2show);

                _this12.loading = false;
              });
            } else {
              this.sessionsService.addNewSession(this.addSessionForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this12.alertService.success('Loan Request added in loan market. Lenders request will be visible under receivers tab.', true);

                  _this12.appRouterService.appRouter(_this12.authenticationService.currentUserValue);
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this12.alertService.error(data['message']);

                  _this12.loading = false;
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

                _this12.alertService.error(errorMsg2show);

                _this12.loading = false;
              });
            }
          }
        }, {
          key: "date",
          value: function date(ev) {
            console.log(this.minDate);
            console.log(ev.target.value);
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


      __webpack_exports__["default"] = "<div class=\"row\">\r\n\r\n    <!-- <div class=\"col-xl-4 col-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 collection-filter\">\r\n               \r\n                <div class=\"collection-filter-block\">\r\n                  \r\n                    <div class=\"collection-mobile-back\"><span class=\"filter-back\"><i aria-hidden=\"true\"\r\n                                class=\"fa fa-angle-left\"></i> back</span>\r\n                    </div>\r\n                    <div class=\"collection-collapse-block open\">\r\n                        <h3 class=\"collapse-block-title\">Services</h3>\r\n                        <div class=\"collection-collapse-block-content\">\r\n                            <div class=\"collection-brand-filter\">\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\" *ngFor=\"let item of utilityService.ServicesTypes; let i = index\">\r\n                                    <input class=\"custom-control-input\" id=\"{{item.value}}\" type=\"radio\">\r\n                                    <label class=\"custom-control-label\" for=\"{{item.value}}\">{{item.name}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                   \r\n                    <div class=\"collection-collapse-block open\">\r\n                        <h3 class=\"collapse-block-title\">Type</h3>\r\n                        <div class=\"collection-collapse-block-content\">\r\n                            <div class=\"collection-brand-filter\">\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"zara\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"zara\">Instant</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"vera-moda\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"vera-moda\">Scheduled</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"forever-21\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"forever-21\">All</label>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n              \r\n                    <div class=\"collection-collapse-block border-0 open\">\r\n                        <h3 class=\"collapse-block-title\">price</h3>\r\n                        <div class=\"collection-collapse-block-content\">\r\n                            <div class=\"collection-brand-filter\">\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"hundred\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"hundred\">$10 - $100</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"twohundred\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"twohundred\">$100 - $200</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"threehundred\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"threehundred\">$200 - $300</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"fourhundred\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"fourhundred\">$300 - $400</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"fourhundredabove\" type=\"checkbox\">\r\n                                    <label class=\"custom-control-label\" for=\"fourhundredabove\">$400 above</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div> -->\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-xl-12 col-12\">\r\n                <form class=\"bg-pink border p-4 shadow-sm\" [formGroup]=\"browseSessionForm\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-xl-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n\r\n                                    <div class=\"input-group\">\r\n                                        <input formControlName=\"generaldata4search\" type=\"text\" class=\"form-control\" placeholder=\"Find Sessions\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <button class=\"btn btn-secondary\" data-toggle=\"collapse\" data-target=\"#filter-menus\"><i class=\"icon-filter\"></i></button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row collapse\" id=\"filter-menus\">\r\n                                <div class=\"col-xl-6 mt-2\">\r\n                                    <select formControlName=\"services4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\r\n                                        <option value=\"\" selected>Service Type</option>\r\n                                        <option *ngFor=\"let item of ParentServicesTypes\"\r\n                                            [ngValue]=\"item._id\">\r\n                                            {{item.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mt-2\">\r\n                                    <select formControlName=\"location4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\r\n                                        <option value=\"\" selected>Choose Location</option>\r\n                                        <option *ngFor=\"let location of countrylist\" [ngValue]=\"location\">\r\n                                            {{location}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-xl-2\">\r\n                            <button class=\"btn btn-outline-primary btn-block h-100 mt-md-0 mt-2\" (click)=\"sessionSearchByService()\">\r\n                                <i class=\"icon-search\"></i> SEARCH\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <section class=\"agency blog blog-sec blog-sidebar sider p-0\">\r\n\r\n            <div class=\"h6 mb-3\">\r\n\r\n                SESSION RESULT\r\n                <!--\r\n                <div class=\"btn-group btn-group-toggle btn-group-sm float-right\" data-toggle=\"buttons\">\r\n                    <label class=\"btn btn-secondary active\">\r\n                        <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> USA\r\n                    </label>\r\n                    <label class=\"btn btn-secondary\">\r\n                        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Worldwide\r\n                    </label>\r\n            </div>\r\n        -->\r\n                <!-- <span class=\"float-right custom-switch floar-right\">\r\n\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\">\r\n                    <label class=\"custom-control-label\" for=\"customSwitch1\">USA</label>\r\n                </span> -->\r\n            </div>\r\n            <cdk-virtual-scroll-viewport itemSize=\"50\" class=\"ngfor-viewport\">\r\n                <div  *cdkVirtualFor=\"let session of allSessionsData\" class=\"ngfor-item card shadow-sm mb-4\">\r\n                    <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n                        {{session.sessionSubject}}\r\n                    </div>\r\n                    <div class=\"card-body px-md-3 px-1 small\">\r\n                         <div class=\"row\">               \r\n                        <div class=\"col-xl-12 col-12\">\r\n                            <p class=\"para2\" [class.show_more]=\"!session._id\">\r\n                                {{session.loanDescription}}\r\n                            </p>\r\n                        </div>          \r\n                        <div class=\"col-xl-6 col-6 border-right mb-2\">\r\n                            <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{session.loanStartDateTime | date:'MMM d, h:mm a'}}\r\n                        </div>\r\n                       \r\n                        <div class=\"col-xl-6 col-6\">\r\n                            <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\r\n                            \r\n                            {{session.location}}\r\n                        </div>\r\n                      \r\n                    </div>\r\n                    </div>\r\n                    <div class=\"card-footer bg-white\">\r\n                        <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span>\r\n                        <a *ngIf=\"!check4applyToSession(session)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"applyToSession(session)\">Apply</a>\r\n\r\n                        <a *ngIf=\"check4applyToSession(session)\" class=\"btn btn-primary text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(session)\"> Details</a>\r\n\r\n                    </div>\r\n                </div>\r\n                \r\n             \r\n                <div *ngIf=\"!allSessionsData\">\r\n                    <div class=\"content_loader\"></div>\r\n                    <div class=\"content_loader\"></div>\r\n                </div>\r\n            </cdk-virtual-scroll-viewport>\r\n            \r\n\r\n           \r\n        </section>\r\n    </div>\r\n\r\n</div>";
      /***/
    },

    /***/
    "VLNz":
    /*!*************************************************!*\
      !*** ./src/app/borrower/borrower.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function VLNz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrapper-outlet{\r\n    background-color: #f8f9fc;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvcnJvd2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiYm9ycm93ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLW91dGxldHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmM7XHJcbn0iXX0= */";
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

      var LoanMarketComponent = /*#__PURE__*/function () {
        function LoanMarketComponent(userService, dialog, socketService, utilityService, alertService, router, authenticationService) {
          var _this13 = this;

          _classCallCheck(this, LoanMarketComponent);

          this.userService = userService;
          this.dialog = dialog;
          this.socketService = socketService;
          this.utilityService = utilityService;
          this.alertService = alertService;
          this.router = router;
          this.authenticationService = authenticationService;
          this.subscription = this.socketService.getLoanMarketDataForBorrower().subscribe(function (_allLoanMarketData) {
            if (_allLoanMarketData) {
              _this13.allLoanMarketData = _allLoanMarketData["data"];
            } else {
              _this13.allLoanMarketData = [];
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

            if (loanMarket) {
              var _list_of_pending_or_accepted_loans = lodash__WEBPACK_IMPORTED_MODULE_10__["filter"](loanMarket.sessionAppliedByBorrowers, function (e) {
                if (e) {
                  switch (e.status) {
                    case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Pending:
                    case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Accepted:
                    case src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].OngoingAccepted:
                      return true;
                      break;

                    default:
                      return false;
                      break;
                  }
                }
              });

              var _list_of_pending_or_accepted_loans_by_me = lodash__WEBPACK_IMPORTED_MODULE_10__["filter"](loanMarket.sessionAppliedByBorrowers, function (e) {
                if (e) {
                  if (e.borrowerId == _currentUserId) {
                    //already applied then why to come here
                    return true;
                  } else {
                    return false;
                  }
                }
              });

              if (_list_of_pending_or_accepted_loans_by_me.length > 0) {
                return true;
              } else {
                return !!(_list_of_pending_or_accepted_loans.length >= loanMarket.loanMaxBorrower);
              }
            } else {
              return false;
            }
          }
        }, {
          key: "usersProfile",
          value: function usersProfile(userObj) {
            var _this14 = this;

            //#region fetch creator id
            this.userService.getUserById(userObj._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                console.log('84', _this14.authenticationService.currentUserValue);

                var dialogRef = _this14.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__["PublicProfileComponent"], {
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

                dialogRef.afterClosed().subscribe(function (result) {
                  console.log("99 :: msc :: Dialog result: ".concat(JSON.stringify(result)));
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

              _this14.alertService.error(errorMsg2show);
            }); //#endregion fetch creator id
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
        }];
      };

      LoanMarketComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loan-market',
        template: _raw_loader_loan_market_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loan_market_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_14__["UserService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_9__["SocketioService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])], LoanMarketComponent);
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


      var src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/service-types.service */
      "7ZPZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _borrower_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../borrower.component */
      "mtiP");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/services/add-funds.service */
      "3gPe");
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/services/notification.service */
      "OC8m");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, authenticationService, alertService, sessionsService, dialog, serviceTypesService, socketService, fundService, utilityService, notificationService) {
          var _this15 = this;

          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.alertService = alertService;
          this.sessionsService = sessionsService;
          this.dialog = dialog;
          this.serviceTypesService = serviceTypesService;
          this.socketService = socketService;
          this.fundService = fundService;
          this.utilityService = utilityService;
          this.notificationService = notificationService;
          this.ParentServicesTypes = null;
          this.authenticationService.currentUser.subscribe(function (x) {
            _this15.currentUser = x;

            if (!_this15.currentUser) {
              return;
            }

            fundService.getFundsCountForRequestedUser(_this15.currentUser._id);
            fundService.getSessionSpentCountForRequestedUser(_this15.currentUser._id);

            _this15.sessionsService.getSessionAllWithSessionApply(_this15.authenticationService.currentUserValue._id).subscribe(function (data) {
              //console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this15.allSessionsData = data['data']; //this.alertService.success(data['message'], true);

                _this15.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this15.loading = false;
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


              _this15.loading = false;
            });
          });
          this.sessionsService.getSessionInstastTypeAdded().subscribe(function (data) {
            if (data && data['success']) {
              if (!_this15.allInstantSessionsData) {
                _this15.allInstantSessionsData = [];
              }

              var _currentSessionObj = data['data'];

              var _existingSessionObjKryPair = lodash__WEBPACK_IMPORTED_MODULE_8__["mapKeys"](lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_this15.allInstantSessionsData), '_id');

              if (lodash__WEBPACK_IMPORTED_MODULE_8__["keys"](_existingSessionObjKryPair).length > 0) {
                delete _existingSessionObjKryPair[_currentSessionObj._id];
              }

              _existingSessionObjKryPair[_currentSessionObj._id] = _currentSessionObj;
              _this15.allInstantSessionsData = lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_existingSessionObjKryPair);
            } else {//this.alertService.error(data['message']);
            }
          }, function (error) {});
          this.socketService.getCurrentAppliedSessionObj().subscribe(function (data) {
            if (data) {
              if (!_this15.allInstantSessionsData) {
                _this15.allInstantSessionsData = [];
              }

              var _existingSessionObjKryPair = lodash__WEBPACK_IMPORTED_MODULE_8__["mapKeys"](lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_this15.allInstantSessionsData), '_id');

              delete _existingSessionObjKryPair[data];
              _this15.allInstantSessionsData = lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_existingSessionObjKryPair);
            } else {//this.alertService.error(data['message']);
            }
          }, function (error) {});
          this.socketService.getSessionUpdates().subscribe(function (data) {
            if (data && data['success']) {
              if (!_this15.allSessionsData) {
                _this15.allSessionsData = [];
              }

              var _currentSessionObj = data['data'];

              var _existingSessionObjKryPair = lodash__WEBPACK_IMPORTED_MODULE_8__["mapKeys"](lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_this15.allSessionsData), '_id');

              if (lodash__WEBPACK_IMPORTED_MODULE_8__["keys"](_existingSessionObjKryPair).length > 0) {
                delete _existingSessionObjKryPair[_currentSessionObj._id];
              }

              _existingSessionObjKryPair[_currentSessionObj._id] = _currentSessionObj;
              _this15.allSessionsData = lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_existingSessionObjKryPair);
            } else {//this.alertService.error(data['message']);
            }
          }, function (error) {});
          this.serviceTypesService.getServiceTypesChildAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["first"])()).subscribe(function (data) {
            //console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              _this15.ParentServicesTypes = data["data"]; //this.alertService.success(data['message'], true);

              _this15.loading = false; //this.element_btn_click_addServiceTypes_skills_verification.click();
            } else {
              //alert(JSON.stringify(data['message']));
              _this15.alertService.error(data['message']);

              _this15.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";
            _this15.ParentServicesTypes = [];

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

            _this15.loading = false;
          });
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
            var _this16 = this;

            console.log('179', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_13__["ModalApplySession"], {
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
                    if (!_this16.allInstantSessionsData) {
                      _this16.allInstantSessionsData = [];
                    }

                    var _existingSessionObjKryPair = lodash__WEBPACK_IMPORTED_MODULE_8__["mapKeys"](lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_this16.allInstantSessionsData), '_id');

                    if (lodash__WEBPACK_IMPORTED_MODULE_8__["keys"](_existingSessionObjKryPair).length > 0) {
                      delete _existingSessionObjKryPair[_currentSessionApply.loanId];
                    }

                    _this16.allInstantSessionsData = lodash__WEBPACK_IMPORTED_MODULE_8__["values"](_existingSessionObjKryPair);

                    if (!_currentSessionApply._id) {
                      _currentSessionApply._id = _currentSessionApply.loanId + '__' + _currentSessionApply.borrowerId;
                    }

                    _currentSessionApply.status = result.data.status || src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Pending;

                    _this16.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Pending:
                        _this16.socketService.setSessionApply(true, _currentSessionApply);

                        break;

                      default:
                        _this16.socketService.updateSessionApply(true, _currentSessionApply, _this16.authenticationService.currentUserValue);

                        break;
                    }

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Accepted:
                        _this16.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Pending:
                        _this16.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Rejected:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].RejectedOngoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].RejectedOngoingWithRefund:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Suspended:
                        _this16.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Completed:
                        _this16.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Active:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].Ongoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].OngoingInitiated:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_5__["SessionStatus"].OngoingAccepted:
                        _this16.alertService.success("Updated. Session is available under My Sessions->Ongoing tab.", true);

                        break;

                      default:
                        break;
                    }
                  }
                }
              }

              console.log("211 :: headerc :: Dialog result: ".concat(JSON.stringify(result)));
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
            }

            console.log('214', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_13__["ModalAppliedSessionDisplay"], {
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
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("238 :: hc :: Dialog result: ".concat(JSON.stringify(result)));
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.router.navigate(['/logout']);
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
          type: src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_11__["ServiceTypesService"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_14__["SocketioService"]
        }, {
          type: src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_15__["AddFundsService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]
        }, {
          type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_services_sessions_service__WEBPACK_IMPORTED_MODULE_7__["SessionsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_11__["ServiceTypesService"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_14__["SocketioService"], src_app_services_add_funds_service__WEBPACK_IMPORTED_MODULE_15__["AddFundsService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"]])], HeaderComponent);
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


      __webpack_exports__["default"] = "<!-- <section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\r\n    <div class=\"card shadow-sm mb-4\" *ngFor=\"let LoanMarket of allLoanMarketData\">\r\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\r\n            {{LoanMarket.LoanMarketubject}}\r\n        </div>\r\n        <div class=\"card-body px-md-3 px-1 small\">\r\n             <div class=\"row\">               \r\n            <div class=\"col-xl-12 col-12\">\r\n                <p class=\"para2\" [class.show_more]=\"!LoanMarket._id\">\r\n                    {{LoanMarket.loanAmount}}\r\n                </p>\r\n            </div>          \r\n            <div class=\"col-xl-6 col-6 border-right mb-2\">\r\n                <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{LoanMarket.loanStartDateTime | date:'MMM d, h:mm a'}}\r\n            </div>\r\n            <div class=\"col-xl-6 col-6\">\r\n                <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\r\n                {{LoanMarket.location}}\r\n            </div>\r\n          \r\n        </div>\r\n        </div>\r\n        <div class=\"card-footer bg-white\">\r\n            <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{LoanMarket.LoanMarketType}}</span>\r\n          \r\n            <a class=\"btn btn-primary text-capitalize  btn-sm float-right text-white\" (click)=\"showAppliedToLoanMarket(LoanMarket)\">Details</a>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"mt-5 text-center blog-agency no-item\">\r\n        <img src=\"assets/img/noresult.png\">\r\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\r\n    </div>\r\n</section> -->\r\n\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-4 col-12 d-flex align-items-stretch mb-4\" *ngFor=\"let LoanMarket of allLoanMarketData\">\r\n\r\n        <div class=\"clash-card wizard w-100\">\r\n\r\n            <div class=\"clash-card__level clash-card__level--wizard mt-3\">{{(LoanMarket.createdByUserObj.userType ||\r\n                \"\").replace(\"_\", \" \")}}</div>\r\n            <div class=\"clash-card__unit-name text-capitalize\">{{(LoanMarket.loanType || \"\").replace(\"_\", \" \")}}</div>\r\n            <div class=\"clash-card__unit-description\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"Created By\">\r\n                        <div (click)=\"usersProfile(LoanMarket.createdByUserObj)\">\r\n                            <i class=\"icon icon-user\"></i>\r\n                        </div>\r\n                        <div class=\"text-black-50 small\">\r\n                            {{LoanMarket.createdByUserObj.firstName}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"Max Applicants\">\r\n                        <div>\r\n                            <i class=\"icon icon-check-box\"></i>\r\n                        </div>\r\n                        <div class=\"text-black-50 small\">\r\n                            {{LoanMarket.loanMaxBorrower}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-4 col-4 \" data-toggle=\"tooltip\" title=\"Created On\">\r\n                        <div>\r\n                            <i class=\"icon icon-time\"></i>\r\n                        </div>\r\n                        <div class=\"text-black-50 small\">\r\n                            {{LoanMarket.loanStartDateTime | date:'MMM d, yy'}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mt-2\">\r\n                        <div class=\"text-black-50 small mb-1\">\r\n                            Payment Methods\r\n                        </div>\r\n\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('bank')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            BANK\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('cash')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            Cash\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('revolut')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            Revolut\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('paypal')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                            Paypal\r\n                        </span>\r\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('skrill')>-1\"\r\n                            class=\"badge font-weight-light text-uppercase badge-success\">\r\n                            Skrill\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\"\r\n                class=\"btn btn-outline-secondary btn-sm mb-2\" (click)=\"navigate2LoanProccess(LoanMarket._id)\">Borrow\r\n                Now</button>\r\n\r\n            <button *ngIf=\"returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\"\r\n                class=\"btn btn-outline-primary btn-sm mb-2\"><i class=\"icon icon-check-box\"></i> Contract Signed</button>\r\n\r\n            <div class=\"clash-card__unit-stats clash-card__unit-stats--wizard clearfix\">\r\n                <div class=\"one-third\">\r\n                    <div class=\"stat\">{{LoanMarket.loanAmount}}</div>\r\n                    <div class=\"stat-value\">Amount</div>\r\n                </div>\r\n\r\n                <div class=\"one-third\">\r\n                    <div class=\"stat\">\r\n                        {{utilityService.returnRoundedNumber(LoanMarket.calculatedMonthlyAmountForEMI*LoanMarket.loanTenureInMonths)}}\r\n                    </div>\r\n                    <div class=\"stat-value\">Refund</div>\r\n                </div>\r\n\r\n                <div class=\"one-third no-border\">\r\n                    <div class=\"stat\">{{LoanMarket.loanTenureInMonths}} <sub\r\n                            class=\"month\">{{LoanMarket.loanTenureInMonths>1?'Months':'Month'}}</sub></div>\r\n                    <div class=\"stat-value\">Duration</div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- end clash-card goblin-->\r\n\r\n\r\n    </div>\r\n    <!-- <div class=\"mt-5 text-center blog-agency no-item\">\r\n        <img src=\"assets/img/noresult.png\">\r\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\r\n    </div> -->\r\n</div>";
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


      __webpack_exports__["default"] = "<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion navbar_side_panel\" id=\"accordionSidebar\">\r\n\r\n    <!-- Sidebar - Brand -->\r\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\">\r\n        <img class=\"img-fluid\" src=\"/assets/img/avitii-logo.png\">\r\n    </a>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider my-0\">\r\n\r\n    <!-- Nav Item - Dashboard -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\">\r\n            {{currentUser.firstName}} \r\n            <span class=\"badge badge-success float-right font-weight-lighter text-capitalize\" [textContent]=\"currentUser.role\"> Borrower</span>\r\n         </a>\r\n    </li>\r\n    \r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <!-- <div class=\"sidebar-heading\">\r\n        Interface\r\n    </div> -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/borrower\">\r\n            <i class=\"icon icon-home\"></i>\r\n            <span>Dashboard</span></a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/borrower/loan-market\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-shopping-cart\"></i>\r\n            <span>Loan Market</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/borrower/make-a-loan\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-money\"></i>\r\n            <span>Get a Loan</span></a>\r\n    </li>\r\n    <!-- Nav Item - Pages Collapse Menu -->\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n            <i class=\"icon icon-bag\"></i>\r\n            <span>My Contracts</span>\r\n        </a>\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            \r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">My Offers</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">Paid Contracts</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">Unpaid Contracts</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">Inkasso cases</a>\r\n           \r\n            </div>\r\n        </div>\r\n    </li> -->\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/borrower/my-contract\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-bag\"></i>\r\n            <span>My Contracts</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/borrower/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-comments\"></i>\r\n            <span>Messages</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/borrower/calendar\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-calendar\"></i>\r\n            <span>Calendar</span></a>\r\n    </li>\r\n\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/borrower/ratings\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-star\"></i>\r\n            <span>My Ratings</span></a>\r\n    </li> -->\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <!-- <div class=\"sidebar-heading\">\r\n        Addons\r\n    </div> -->\r\n\r\n    <!-- Nav Item - Pages Collapse Menu -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\r\n            <i class=\"icon icon-settings\"></i>\r\n            <span>Settings</span>\r\n        </a>\r\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            \r\n                <a class=\"collapse-item\" routerLink=\"/borrower/profile\" routerLinkActive=\"active\">My Profile</a>\r\n                <a class=\"collapse-item\" routerLink=\"/borrower/update-password\" routerLinkActive=\"active\">Change Password</a>\r\n                <a class=\"collapse-item\" routerLink=\"/borrower/bank-details\" routerLinkActive=\"active\">Bank Details</a>\r\n                <a class=\"collapse-item\" routerLink=\"/borrower/income-proof\" routerLinkActive=\"active\">Income Proof</a>\r\n                <a class=\"collapse-item\" routerLink=\"/borrower/my-subscriptions\" routerLinkActive=\"active\">My Subscriptions</a>\r\n               \r\n            </div>\r\n        </div>\r\n    </li>\r\n\r\n \r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/logout\">\r\n            <i class=\"icon icon-flickr-alt\"></i>\r\n            <span>Logout</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <!-- <hr class=\"sidebar-divider d-none d-md-block\">\r\n\r\n\r\n    <div class=\"text-center d-none d-md-inline\">\r\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n    </div> -->\r\n\r\n\r\n</ul>\r\n\r\n\r\n<!-- Nav Start [ngClass]=\"{'dark position-relative' : (router.url!='/')}\"-->\r\n<header id=\"custom-header-nav\" class=\"ecommerce nav-fix shadow-sm p-0 hide-lg\">\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <nav>\r\n                <div class=\"responsive-btn ml-1\">\r\n                    <a class=\"toggle-nav\"><i aria-hidden=\"true\" class=\"icon-align-center\"></i></a>\r\n                </div>\r\n                <a class=\"logo-light\" routerLink=\"/home\">\r\n                    <img class=\"img-fluid\" src=\"/assets/img/avitii-logo-purple.png\"></a>\r\n\r\n                <!-- <div class=\"navbar navbar_side_panel m-l-auto p-1 btn-back\" id=\"togglebtn\">\r\n                 <div class=\"responsive-btn\">\r\n                        <h5 class=\"btn-back\">back</h5>\r\n                    </div> \r\n                    <ul class=\"main-menu\">\r\n                        <li><a routerLink=\"/lender\">Home</a></li>\r\n\r\n                        <li><a routerLink=\"/lender/search-consulatnt\" routerLinkActive=\"active\">Search</a></li>\r\n                        <li><a routerLink=\"/lender/my-contract\" routerLinkActive=\"active\">My Contract</a></li>\r\n                        <li><a routerLink=\"/lender/make-a-loan\" routerLinkActive=\"active\"><i class=\"icon-plus\"></i>\r\n                                Make a Loan</a></li>\r\n\r\n                    </ul>\r\n                </div> -->\r\n                <div class=\"top-header-right mr-1\">\r\n                    <ul>\r\n\r\n                        <!-- <li class=\"cart\">\r\n                            <a aria-expanded=\"false\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n                                <i class=\"icon-comment-alt\"></i>\r\n                            </a>\r\n\r\n                        </li>\r\n                        <li class=\"cart\">\r\n                            <a aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\" id=\"dropdownMenuButton1\">\r\n                                <i class=\"icon-bell bell\"></i>\r\n                                <span *ngIf=\"(utilityService._.keys(notificationService.appNotifications).length)>0\"\r\n                                    class=\"badge badge-primary bell-count\"\r\n                                    [textContent]=\"utilityService._.keys(notificationService.appNotifications).length\"></span>\r\n                            </a>\r\n                            <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\"\r\n                                x-placement=\"bottom-end\"\r\n                                style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                <ul class=\"shopping-cart list-group list-group-flush\">\r\n                                    <li class=\"list-group-item\"\r\n                                        *ngFor=\"let notification of utilityService._.values(notificationService.appNotifications)\">\r\n                                        <div class=\"pb-2\">\r\n                                            <div class=\"mb-1\">{{notification.message}}&nbsp;<a\r\n                                                    class=\"float-lg-right font-large text-danger\"\r\n                                                    (click)=\"notificationService.check4Notification(notification)\"><i\r\n                                                        class=\"icon-close\" style=\"font-size: 0.6rem;\"></i></a></div>\r\n                                            <div class=\"font-weight-light small mb-1\">{{notification.description}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n\r\n\r\n                                    <li class=\"no-item text-center\">\r\n                                        <h4 class=\"my-4 font-weight-normal\">No Notifications</h4>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li> -->\r\n                        <li class=\"cart\">\r\n                            <a aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\" id=\"dropdownMenuButton1\">\r\n                                <!-- <img class=\"userimg mt-n2\" src=\"/assets/img/user-default.png\"> -->\r\n                                <i class=\"icon icon-user\"></i>\r\n                            </a>\r\n                            <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\"\r\n                                x-placement=\"bottom-end\"\r\n                                style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                <ul class=\"shopping-cart\">\r\n                                    <li>\r\n                                        <a class=\"h6 d-block\" routerLink=\"/lender\">\r\n                                            {{currentUser.firstName}}\r\n                                            <span class=\"badge badge-primary float-right\"\r\n                                                [textContent]=\"currentUser.role\"> Borrower</span>\r\n                                        </a>\r\n                                    </li>\r\n\r\n                                    <!-- <li>\r\n                                        <a class=\"d-block\" routerLink=\"/lender/wallet\">Wallet\r\n                                            <span\r\n                                                class=\"badge badge-success float-right\">${{fundService.totalFund4currentUser}}</span>\r\n                                        </a>\r\n                                    </li> -->\r\n                                    <li><a routerLink=\"/lender/profile\">Profile</a></li>\r\n                                    <hr>\r\n                                    <li>\r\n                                        <a routerLink=\"/logout\">Logout</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                \r\n                <div class=\"sidebar_overlay navbar_side_panel btn-back\" style=\"display: none;\"></div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n\r\n</header>\r\n<!-- Nav end-->";
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


      __webpack_exports__["default"] = "<form [formGroup]=\"borrowNowForm\" class=\"theme-form\">\r\n<!-- addSession section -->\r\n<div class=\"row\" *ngIf=\"!userClickedOnSignLoanContract\">\r\n    <div class=\"col-xl-3 col-12\">\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            EMI (Monthly)\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr {{LoanObj.calculatedMonthlyAmountForEMI}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            Loan Amount\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr {{LoanObj.loanAmount}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\r\n                            Total Loan\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\r\n                            kr\r\n                            {{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI*LoanObj.loanTenureInMonths)}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-9 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h5 class=\"m-0 font-weight-bold text-primary\" i18n>{{headerMessage2show}}</h5>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <div class=\"theme-form\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-4 col-12 border-right\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanType\" i18n>Loan Type</label>\r\n                                <h4 class=\"text-primary\" i18n>\r\n                                    {{utilityService.returnLoanType(LoanObj.loanType)}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12 border-right\">\r\n                            <div class=\"form-group \">\r\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanAmount}}\r\n                                </h4>\r\n                            </div>\r\n                            <div class=\"form-group bg-light2 p-2\">\r\n                                <label for=\"proposedLoanAmount\" i18n>\r\n                                    Propose a new loan amount <sub>(Optional) & amount must be hight than kr {{LoanObj.loanAmount}}</sub></label>\r\n                                <input type=\"number\" formControlName=\"proposedLoanAmount\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.proposedLoanAmount.errors }\" placeholder=\"Enter New Amount\"/>\r\n                                <div *ngIf=\"submitted && f.proposedLoanAmount.errors\"\r\n                                    class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.proposedLoanAmount.errors.required\" i18n>\r\n                                        Proposed Loan Amount is required\r\n                                    </div>\r\n                                    <div *ngIf=\"f.proposedLoanAmount.min.required\" i18n>\r\n                                        amount must be hight than kr {{LoanObj.loanAmount}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanTenureInMonths}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12 border-right\">\r\n                            <div class=\"form-group \">\r\n                                <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanInterestRate}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12 border-right\">\r\n                            <div class=\"form-group \">\r\n                                <label for=\"loanStartDateTime\" i18n>Start Date</label>\r\n                                <h4 class=\"text-primary\" i18n>\r\n                                    {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <p class=\"mb-2\" i18n>How to give the money</p>\r\n\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                    BANK\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                    Cash\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                    Revolut\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                    Paypal\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase badge-success\">\r\n                                    Skrill\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12\">\r\n                            <p class=\"mb-2\" i18n>Description:</p>\r\n                            <div class=\"text-black-50\" i18n>\r\n                                {{LoanObj.loanDescription}}\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-xl-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"proposedLoanAmount\" i18n>\r\n                                    Propose a new loan amount <sub>(Optional) & amount must be hight than kr {{LoanObj.loanAmount}}</sub></label>\r\n                                <input type=\"number\" formControlName=\"proposedLoanAmount\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.proposedLoanAmount.errors }\" />\r\n                                <div *ngIf=\"submitted && f.proposedLoanAmount.errors\"\r\n                                    class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.proposedLoanAmount.errors.required\" i18n>\r\n                                        Proposed Loan Amount is required\r\n                                    </div>\r\n                                    <div *ngIf=\"f.proposedLoanAmount.min.required\" i18n>\r\n                                        amount must be hight than kr {{LoanObj.loanAmount}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"col-xl-12 col-12 mt-3\">\r\n                            <div class=\"table-responsive table-billing-history\">\r\n                                <table class=\"table mb-0\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th scope=\"col\">EMI Date</th>\r\n                                            <th scope=\"col\">Payment</th>\r\n\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                                            <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                                | date:'dd-MMM-YYYY'}}</td>\r\n                                            <td>kr {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button *ngIf=\"!userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\r\n                    (click)=\"clickedOnSignLoanContract()\" i18n>\r\n                    Sign Loan Contract\r\n                </button>\r\n                <button *ngIf=\"userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\r\n                    (click)=\"resetClickedOnSignLoanContract()\" i18n>\r\n                    Cancel\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"row\" *ngIf=\"userClickedOnSignLoanContract\">\r\n\r\n    <div class=\"col-xl-12 col-12\">\r\n        <div class=\"card shadow mb-4\">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Loan Contract</h5>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <div class=\"theme-form\">\r\n                    <div class=\"row mb-3\">\r\n                        <div class=\"col-xl-12 col-12\" *ngIf=\"lenderUserObj && borrowerUserObj\">\r\n\r\n                            <table class=\"table table table-bordered  shadow-sm\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th style=\"width: 20%;\">#</th>\r\n\r\n                                        <th style=\"width: 40%;\">Borrower</th>\r\n                                        <th style=\"width: 40%;\">Lender</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\">\r\n                                                NAME</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\r\n                                                {{borrowerUserObj.firstName}}&nbsp;{{borrowerUserObj.lastName}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\r\n                                                {{lenderUserObj.firstName}}&nbsp;{{lenderUserObj.lastName}}\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\">\r\n                                                Address</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{borrowerUserObj.address}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{lenderUserObj.address}}\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\">\r\n                                                Passport Number</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{borrowerUserObj.myPassportNumber}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{lenderUserObj.myPassportNumber}}\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\">\r\n                                                DL Number</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{borrowerUserObj.myDLNumber}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"mb-0 font-weight-bold text-primary\">\r\n                                                {{lenderUserObj.myDLNumber}}\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"text-black-50 text-uppercase\">\r\n                                                Payment Method</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\">\r\n                                                BANK\r\n\r\n                                                <label for=\"borrowerBankName\" i18n>Bank Name</label>\r\n                                                <h4 class=\"text-primary\" i18n>\r\n                                                    {{borrowerUserObj.bankName}}\r\n                                                </h4>\r\n                                                <label for=\"borrowerRegNumber\" i18n>Reg nr</label>\r\n                                                <h4 class=\"text-primary\" i18n>\r\n                                                    {{borrowerUserObj.regNumber}}\r\n                                                </h4>\r\n                                                <label for=\"borrowerAccountNumber\" i18n>Account Number</label>\r\n                                                <h4 class=\"text-primary\" i18n>\r\n                                                    {{borrowerUserObj.accountNumber}}\r\n                                                </h4>\r\n                                                <label for=\"borrowerMobilePayment\" i18n>Mobile payment</label>\r\n                                                <h4 class=\"text-primary\" i18n>\r\n                                                    {{borrowerUserObj.mobilePayment}}\r\n                                                </h4>\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                                class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                                Cash\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\">\r\n\r\n                                                Revolut:\r\n                                                {{borrowerUserObj.revolutWalletID}}\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\">\r\n                                                Paypal ID: {{borrowerUserObj.paypalWalletID}}\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\">\r\n                                                Skrill: {{borrowerUserObj.skrillWalletID}}\r\n                                            </div>\r\n\r\n\r\n                                        </td>\r\n\r\n                                        <td>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\">\r\n                                                BANK\r\n\r\n                                                <div class=\"text-black-50\" i18n>Bank Name</div>\r\n                                                <div class=\"font-weight-bold text-primary mb-1\">\r\n                                                    {{lenderUserObj.bankName}}\r\n                                                </div>\r\n                                                <div for=\"lenderRegNumber\" i18n>Reg Number</div>\r\n                                                <div class=\"font-weight-bold text-primary mb-1\">\r\n                                                    {{lenderUserObj.regNumber}}\r\n                                                </div>\r\n                                                <div for=\"lenderAccountNumber\" i18n>Account Number</div>\r\n                                                <div class=\"font-weight-bold text-primary mb-1\">\r\n                                                    {{lenderUserObj.accountNumber}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                                class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\r\n                                                Cash\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\">\r\n\r\n                                                Revolut:\r\n                                                {{lenderUserObj.revolutWalletID}}\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\">\r\n                                                Paypal ID: {{lenderUserObj.paypalWalletID}}\r\n                                            </div>\r\n                                            <div *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\">\r\n                                                Skrill: {{lenderUserObj.skrillWalletID}}\r\n                                            </div>\r\n\r\n\r\n                                        </td>\r\n\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row mb-3\">\r\n                        <div class=\"col-xl-4 col-12 \">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label for=\"loanType\" i18n>Loan Type</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{utilityService.returnLoanType(LoanObj.loanType)}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\" *ngIf=\"!f.proposedLoanAmount.value\">\r\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanAmount}}\r\n                                </h4>\r\n                            </div>\r\n                            <div class=\"card shadow-sm p-2\" *ngIf=\"f.proposedLoanAmount.value\">\r\n                                <label for=\"loanAmount\" i18n>Loan Amount/Proposed Loan Amount</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    <span style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\r\n                                        {{LoanObj.loanAmount}}\r\n                                       </span>\r\n                                       / \r\n                                       <span>\r\n                                        {{f.proposedLoanAmount.value}}\r\n                                       </span>\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Tenure in Months</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanTenureInMonths}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Interest(%) Rate (per month)</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanInterestRate}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Start Date</label>\r\n                                <h4 class=\"text-primary\">\r\n                                    {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-12\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n\r\n                                <label class=\"mb-3\" i18n>Payment Method</label>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                    BANK\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                    Cash\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                    Revolut\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\r\n                                    Paypal\r\n                                </span>\r\n                                <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\r\n                                    class=\"badge font-weight-light text-uppercase badge-success w-20\">\r\n                                    Skrill\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12 mt-3\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Description</label>\r\n\r\n                                <div class=\"text-black-50\">\r\n                                    {{LoanObj.loanDescription}}\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-xl-12 mt-3\" *ngIf=\"f.loanInsuranceRequired.value\">\r\n                            <div class=\"card shadow-sm p-2\">\r\n                                <label i18n>Applied for Insurance with Amount</label>\r\n                                <div class=\"text-black-50\">\r\n                                    {{f.loanInsuranceAmount.value}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-xl-12 col-12 mt-3\">\r\n                            <div class=\"table-responsive table shadow-sm\">\r\n                                <table class=\"table mb-0\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th scope=\"col\" i18n>EMI Date</th>\r\n                                            <th scope=\"col\" i18n>Payment</th>\r\n\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                                            <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                                | date:'dd-MMM-YYYY'}}</td>\r\n                                            <td *ngIf=\"!f.calculatedMonthlyAmountForEMI.value\">kr {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n                                            <td *ngIf=\"f.calculatedMonthlyAmountForEMI.value\">kr \r\n                                               <span style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\r\n                                                {{LoanObj.calculatedMonthlyAmountForEMI}}\r\n                                               </span>\r\n                                               &nbsp; \r\n                                               <span>\r\n                                                {{f.calculatedMonthlyAmountForEMI.value}}\r\n                                               </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"card shadow mb-4\">\r\n           \r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Terms & Conditions</h5>\r\n            </div>\r\n          \r\n            <div class=\"card-body\">\r\n                <ol class=\"terms ml-n4\">\r\n                    <li >\r\n                        <div class=\"font-weight-bold\" i18n>Scope</div>\r\n                        <div i18n>\r\n                            These loan terms apply to all loan agreements entered into between the borrower and the lender\r\n                            through the Avitii Lending System. Avitii Lending System acts solely as a dissemination platform\r\n                            and cannot be held liable of any kind, either by the lender or the borrower.\r\n                            By signing the loan agreement, you have accepted these loan terms, which deal with you and the\r\n                            borrower. You are at all times subject to the terms of use of the Avitii Lending System.\r\n                            Deviations from the loan terms must be agreed in writing, and in the event of a discrepancy\r\n                            between the loan terms and your agreement, the loan agreement will take precedence.\r\n                            Avitii Lending System does not provide financial advice when concluding the credit agreement and\r\n                            therefore does not assume any responsibility in connection with this.\r\n                            Both the borrower and the lender confirm compliance with the country's applicable laws and\r\n                            regulations for private loans between private individuals.\r\n                            Borrower as well as lender, provides using Avitii Lending System\r\n                            consent to information including, loan history as well as profile data,\r\n                            address, photo id, social media shared and registered at Credit-List.net\r\n                        </div>\r\n                       \r\n                    </li>\r\n                    <li >\r\n                        <div class=\"font-weight-bold\" i18n>Acceptance deadline</div>\r\n                        <div i18n>\r\n                        Loan offers offered on the Avitii Lending System must be considered as an open offer, for any\r\n                        borrower profile on the website. It is the individual private loan provider who, based on the\r\n                        borrower's information, makes the final decision on the loan implementation.\r\n                        Loan offers are considered as P2P loans, where any acceptance of loan offers is binding on the\r\n                        borrower. The lender as well as the borrower can stay updated at any time with the terms of\r\n                        agreements on the Avitii Lending Systems website.\r\n                    </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"font-weight-bold\" i18n>Prerequisites</div>\r\n                        <div i18n>\r\n                            Credit rating: As a borrower, you declare in good faith that your information entered at all\r\n                            times is correct, that at the time of entering into the loan you have not been declared unfit to\r\n                            take care of yourself or your finances. At the same time, you declare not to be under compulsory\r\n                            dissolution, debt restructuring, or otherwise declared insolvent.\r\n                            Money laundering: Avitii Lending System is a dissemination platform, and is therefore out of\r\n                            responsibility. Private lender enters into loan agreement with private borrowers. As a borrower\r\n                            on the website, you must in principle always provide private information on an ongoing basis, at\r\n                            the request of Avittii Lending Systems. If you do not provide the necessary correct information,\r\n                            the Avitii Lending System may exclude you from using the Website.\r\n                        </div>\r\n                     \r\n                    </li>\r\n                    <li>\r\n                        <div class=\"font-weight-bold\" i18n>Loan terms</div>\r\n                        The borrower must at all times be aware that he or she has the finances to take out offered\r\n                        loans. In addition to the principal, the opportunity to bear interest expenses, fees and other\r\n                        expenses in connection with redemption.\r\n\r\n                        <div i18n>The borrower must at all times confirm their creditworthiness, as well as they are not\r\n                            over-mortgaged for the applicable period. The borrower must at all times comply with the\r\n                            applicable rules for repayment. In the event of late payment or otherwise default, it is up\r\n                            to the lender to impose additional expenses. The borrower confirms that he or she is solely\r\n                            responsible for finding a solution to repay the loan / debt.</div>\r\n                        <div i18n>\r\n                            The borrower confirms with this agreement that he agrees that the lender can at any time\r\n                            transfer the loan to a third party for recovery.\r\n                        </div>\r\n                        <div i18n>\r\n                            Receipt for repayment or remission must be notified in writing by endorsement on this loan\r\n                            document.\r\n                        </div>\r\n\r\n                        <div i18n>\r\n                            In the event of late payment, 5 days from the payment date are generally given to find a\r\n                            solution yourself. In case the borrower fails to comply with the repayment within the 5\r\n                            days, the lender is entitled to impose a 65% fee on the amount lent, valid from the date of\r\n                            payment. After another 5 days, the debt will be transferred to recovery.\r\n                        </div>\r\n\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"font-weight-bold\" i18n>Fraud</div>\r\n                        <div i18n>\r\n                            Borrowers who take out loans fraudulently, or in some other way by giving incorrect information\r\n                            and thus force themselves on loans that they are unable to repay or should have foreseen, not\r\n                            being able to repay will be considered fraud.\r\n                             279 CRIMINAL ACT Fraud For fraud, a person is punished who, in order to obtain gain or other\r\n                            unjustified gain, by unlawfully causing, corroborating or exploiting an error, determines\r\n                            another for an act or omission, whereby the person or person for whom the act is inflicted or\r\n                            the omission becomes decisive, a loss of property.\r\n                        </div>\r\n                       \r\n                    </li>\r\n\r\n\r\n                </ol>\r\n                <hr>\r\n                <h5>E-Signature</h5>\r\n                <hr>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-6 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"eSignatureBorrowersName\" i18n>Name</label>\r\n                                <input type=\"text\" formControlName=\"eSignatureBorrowersName\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureBorrowersName.errors }\" />\r\n                                <div *ngIf=\"submitted && f.eSignatureBorrowersName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.eSignatureBorrowersName.errors.required\" i18n>Name is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"eSignatureBorrowersPassportNumber\" i18n>Passport or Driving Licence\r\n                                    Number</label>\r\n                                <input type=\"text\" formControlName=\"eSignatureBorrowersPassportNumber\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureBorrowersPassportNumber.errors }\" />\r\n                                <div *ngIf=\"submitted && f.eSignatureBorrowersPassportNumber.errors\"\r\n                                    class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.eSignatureBorrowersPassportNumber.errors.required\" i18n>Passport or Driving\r\n                                        Licence Number is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n            </div>\r\n            <div class=\"card-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-success float-right\" (click)=\"clickedOnVerifiedSignLoanContract()\"\r\n                    i18n>\r\n                    SUBMIT\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</form>\r\n<!-- addSession section -->";
      /***/
    },

    /***/
    "mtiP":
    /*!************************************************!*\
      !*** ./src/app/borrower/borrower.component.ts ***!
      \************************************************/

    /*! exports provided: BorrowerComponent, ModalApplySession, ModalAppliedSessionDisplay */

    /***/
    function mtiP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BorrowerComponent", function () {
        return BorrowerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalApplySession", function () {
        return ModalApplySession;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalAppliedSessionDisplay", function () {
        return ModalAppliedSessionDisplay;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_borrower_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./borrower.component.html */
      "Ccej");
      /* harmony import */


      var _borrower_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./borrower.component.css */
      "VLNz");
      /* harmony import */


      var _raw_loader_modal_modal_apply_session_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! raw-loader!./modal/modal-apply-session.html */
      "njGU");
      /* harmony import */


      var _raw_loader_modal_modal_applied_session_display_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! raw-loader!./modal/modal-applied-session-display.html */
      "4tmY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/internal/operators/first */
      "XoMe");
      /* harmony import */


      var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _models_role__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../models/role */
      "z56L");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services */
      "o0su");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/contact.service */
      "3ITz");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _services_utility_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/utility.service */
      "A1CT");
      /* harmony import */


      var _socketio_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../socketio.service */
      "bgkY");

      var BorrowerComponent = /*#__PURE__*/function () {
        function BorrowerComponent(dialog) {
          _classCallCheck(this, BorrowerComponent);

          this.dialog = dialog;
        }

        _createClass(BorrowerComponent, [{
          key: "applyToSession",
          value: function applyToSession() {
            var dialogRef = this.dialog.open(ModalApplySession, {
              backdropClass: 'cdk-overlay-transparent-backdrop',
              hasBackdrop: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("25 :: co :: Dialog result: ".concat(JSON.stringify(result)));
            });
          }
        }]);

        return BorrowerComponent;
      }();

      BorrowerComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }];
      };

      BorrowerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-borrower',
        template: _raw_loader_borrower_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_borrower_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }) // export class BorrowerComponent implements OnInit {
      //   constructor() { }
      //   ngOnInit() {
      //   }
      // }
      , Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])], BorrowerComponent); //#region modal popup for apply LoanObj

      var ModalApplySession = /*#__PURE__*/function () {
        function ModalApplySession(dialogRef, data, utilityService) {
          _classCallCheck(this, ModalApplySession);

          this.dialogRef = dialogRef;
          this.data = data;
          this.utilityService = utilityService;
          this.arrayItems = [0];
          this.SessionStatus = _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"];
          this.editing = false;
          this.SessionExecutionType = _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionExecutionType"];
          this.LoanObj = data.sessionObj;

          if (!data.LoanApplyObj) {
            this.LoanApplyObj = {};
            this.LoanApplyObj.loanId = this.LoanObj._id;
            this.LoanApplyObj.loanAmount = this.LoanObj.loanAmount;
            this.LoanApplyObj.borrowerId = data.borrowerId;
            this.LoanApplyObj.sessionExecutionType = _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionExecutionType"].FixedPrice;
            this.LoanApplyObj.mileStoneProposal = [];
            this.LoanApplyObj.mileStoneProposal.push({
              "milestones": null,
              "milestonesProposal": null
            });
          } else {
            this.LoanApplyObj = data.LoanApplyObj;
            this.editing = true;
          }
        }

        _createClass(ModalApplySession, [{
          key: "addMilestones",
          value: function addMilestones() {
            if (this.arrayItems.length < 5) {
              this.LoanApplyObj.mileStoneProposal.push({
                "milestones": null,
                "milestonesProposal": null
              });
              this.arrayItems.push(this.arrayItems.length);
            }
          }
        }, {
          key: "returnSessionApplyStatus",
          value: function returnSessionApplyStatus(LoanApplyObj) {
            var _currentStatus = _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Pending;

            try {
              if (LoanApplyObj.status == _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Pending || LoanApplyObj.status == 'Pending' || LoanApplyObj.status == '' || LoanApplyObj.status == null || typeof LoanApplyObj.status == 'undefined') {
                _currentStatus = _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Pending;
              } else {
                _currentStatus = LoanApplyObj.status;
              }
            } catch (ex) {}

            try {
              if (LoanApplyObj.status != _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Pending && LoanApplyObj.status != _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Rejected && LoanApplyObj.status != _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].RejectedOngoing) {
                this.anySingleDataIsApproved = true;
              }
            } catch (ex) {}

            return _currentStatus;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close({
              event: 'close',
              data: {}
            });
          }
        }]);

        return ModalApplySession;
      }();

      ModalApplySession.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"]
        }];
      };

      ModalApplySession = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'modal-apply-session',
        template: _raw_loader_modal_modal_apply_session_html__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object, _services_utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"]])], ModalApplySession); //#endregion modal popup for apply LoanObj
      //#region modal popup for display applied sessions

      var ModalAppliedSessionDisplay = /*#__PURE__*/function () {
        function ModalAppliedSessionDisplay(alertService, socketService, dialogRef, data, userService, utilityService, dialog, router, authenticationService, contactService) {
          _classCallCheck(this, ModalAppliedSessionDisplay);

          this.alertService = alertService;
          this.socketService = socketService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.userService = userService;
          this.utilityService = utilityService;
          this.dialog = dialog;
          this.router = router;
          this.authenticationService = authenticationService;
          this.contactService = contactService;
          this.SessionStatus = _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"];
          this.arrayItems = [0];
          this.anySingleDataIsApproved = false; //public payPalConfig?: IPayPalConfig;

          this.userInitiatedForPayment = false;
          this.SessionExecutionType = _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionExecutionType"];
          this.refundObj = {};
          this.ready2Refund = false;
          this.alreadyInitiatedForPayment = false;
          this.transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised = null;
          this.LoanApplyObjCurrentCheckBoxes = {};
          this.transactionOnForLoanAmountPaidToLenderCustomised = null;
          this.alreadyVisibleForPayment = false;
          this.LoanObj = data.sessionObj;
          this.LoanApplyObjCurrent = {};
          this.LoanApplyObjCurrentCheckBoxes = {};
          this.LoanApplyObjCurrentCheckBoxes.visibleKeys = {};
          this.LoanApplyObjCurrent4Installment = {};
        }

        _createClass(ModalAppliedSessionDisplay, [{
          key: "paymentDoneByLenderConfirmByBorrower",
          value: function paymentDoneByLenderConfirmByBorrower(LoanApplyObj) {
            var _this17 = this;

            this.LoanApplyObjCurrent._id = LoanApplyObj._id;

            if (this.transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised) {
              this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidByLenderConfirmByBorrowerCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD'));
            }

            if (!this.LoanApplyObjCurrent.isLoanAmountPaidByLenderConfirmByBorrower || !this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower) {
              this.alertService.error("All data is required");
              return;
            }

            if (this.utilityService.moment(this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower).isAfter(this.utilityService.moment())) {
              this.alertService.error("Future date is not allowed");
              return;
            }

            if (this.utilityService.moment(this.LoanApplyObjCurrent.transactionOnForLoanAmountPaidByLenderConfirmByBorrower).isBefore(this.utilityService.moment(this.LoanObj.loanStartDateTime))) {
              this.alertService.error("Transaction date must be newer than loan created date");
              return;
            }

            this.LoanApplyObjCurrent.createdOnForLoanAmountPaidByLenderConfirmByBorrower = this.utilityService._.now();
            this.socketService.sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, this.LoanApplyObjCurrent).pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(function (details) {
              if (details && details["success"]) {
                _this17.dialogRef.close({
                  event: 'close',
                  data: {
                    updatedSessionObj: details["data"]
                  }
                });
              }
            });
            this.LoanApplyObjCurrent = {};
          }
        }, {
          key: "paymentDoneToLender",
          value: function paymentDoneToLender(LoanApplyObj) {
            var _this18 = this;

            var _past_days_allowed4payment = 15;
            var _future_days_allowed4payment = 7; //this.LoanApplyObjCurrent4Installment.loanTenureInMonths = this.LoanObj.loanTenureInMonths;
            //this.LoanApplyObjCurrent4Installment.installmentKey = null;
            //this.LoanApplyObjCurrent4Installment._id = LoanApplyObj._id;

            if (this.transactionOnForLoanAmountPaidToLenderCustomised) {
              this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender = Date.parse(this.utilityService.moment(this.transactionOnForLoanAmountPaidToLenderCustomised, 'YYYY-MM-DD').format('YYYY-MM-DD 00:00:00 A'));
            }

            if (!this.LoanApplyObjCurrent4Installment.transactionIdForLoanAmountPaidToLender || !this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender) {
              this.alertService.error("All data is required");
              return;
            }

            if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isAfter(this.utilityService.moment(this.LoanApplyObjCurrent4Installment.installmentKey).add('D', _future_days_allowed4payment))) {
              this.alertService.error("Future date is not allowed");
              return;
            }

            if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidByLender).isAfter(this.utilityService.moment().add('D', -1 * _past_days_allowed4payment))) {
              this.alertService.error("Historic date is not allowed");
              return;
            }

            if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidByLender).isBefore(this.utilityService.moment().add('D'))) {
              this.alertService.error("Future date is not allowed");
              return;
            }

            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
              var _old_installmentKey = null;

              for (var index in LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
                if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index]) {
                  _old_installmentKey = LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[index].installmentKey;
                }
              }

              if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isBefore(this.utilityService.moment(_old_installmentKey))) {
                this.alertService.error("Transaction date must be newer than last installment date");
                return;
              }
            } else {
              if (this.utilityService.moment(this.LoanApplyObjCurrent4Installment.transactionOnForLoanAmountPaidToLender).isBefore(this.utilityService.moment(this.LoanObj.loanStartDateTime))) {
                this.alertService.error("Transaction date must be newer than loan created date");
                return;
              }
            }

            this.LoanApplyObjCurrent4Installment.createdOnForLoanAmountPaidToLender = this.utilityService._.now();

            var _loanTenureInMonths = parseInt(this.LoanObj.loanTenureInMonths);

            var _installmentKey = this.LoanApplyObjCurrent4Installment.installmentKey; //delete this.LoanApplyObjCurrent4Installment.installmentKey;

            this.socketService.sendEventForLoanAmountPaidToLenderWithUpdateAll(LoanApplyObj.loanId, LoanApplyObj._id, this.authenticationService.currentUserValue._id, _installmentKey, _loanTenureInMonths, this.LoanApplyObjCurrent4Installment).pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(function (details) {
              if (details && details["success"]) {
                _this18.dialogRef.close({
                  event: 'close',
                  data: {
                    updatedSessionObj: details["data"]
                  }
                });
              }
            });
            this.LoanApplyObjCurrent4Installment = {};
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
          key: "viewCurrentInstallmentAlreadyPaid",
          value: function viewCurrentInstallmentAlreadyPaid(LoanApplyObj, currentRowDate, _key) {
            var _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');

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
        }, {
          key: "initiateLoanAmountPaidByBorrower",
          value: function initiateLoanAmountPaidByBorrower(event, LoanApplyObj, currentRowDate, _key) {
            if (LoanApplyObj) {
              var _installmentKey = null;

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
              } else {
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
        }, {
          key: "returnT4IfCurrentInstallmentAlreadyPaid",
          value: function returnT4IfCurrentInstallmentAlreadyPaid(LoanApplyObj, currentRowDate, _key) {
            var _installmentKey = this.utilityService.moment(currentRowDate).format('DD-MMM-YYYY');

            if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower) {
              if (LoanApplyObj.installmentWiseLoanAmountPaidByBorrower[_installmentKey]) {
                return true;
              }
            }
            /*
            if (_key) {
                    if (!this.LoanApplyObjCurrentCheckBoxes.visibleKeys) {
                this.LoanApplyObjCurrentCheckBoxes.visibleKeys = {};
              }
              if (this.utilityService._.keys(this.LoanApplyObjCurrentCheckBoxes.visibleKeys).length>0) {
                this.LoanApplyObjCurrentCheckBoxes.visibleKeys[_key] = true;
              }
            }
            */


            return false;
          }
        }, {
          key: "returnUrl4downloadCOntractPDF",
          value: function returnUrl4downloadCOntractPDF(sessionApplyId) {
            var Url4downloadCOntractPDF = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + '/signed_pdf_contract/' + sessionApplyId + '.pdf';
            return Url4downloadCOntractPDF;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeDialog",
          value: function closeDialog(_sessionApply, _status) {
            var _loanId = _sessionApply.loanId;
            var _sessionPrice = 0;
            var _loanApplyId = _sessionApply._id;
            var _endUserId = this.endUserId;
            var _transactiActionType = null;

            switch (_status) {
              case _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Accepted:
                //#region handle LoanObj accepted
                //_sessionPrice = this.LoanObj.loanAmount;
                //initiate payment here
                //_transactiActionType = TransactionActionType.session_accepted;
                //this.initiateForPaymentForLender(_loanId, _loanApplyId, _sessionApply, _status, _sessionPrice, _endUserId, _transactiActionType);
                this.dialogRef.close({
                  event: 'close',
                  data: {
                    sessionApply: _sessionApply,
                    status: _status
                  }
                }); //#endregion handle LoanObj accepted

                break;

              case _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Ongoing:
                //#region handle LoanObj accepted
                //#endregion handle LoanObj accepted
                break;

              case _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].RejectedOngoingWithRefund:
                this.ready2Refund = false; //#region handle LoanObj rejected with refund
                //#endregion handle LoanObj rejected with refund  

                break;

              default:
                this.dialogRef.close({
                  event: 'close',
                  data: {
                    sessionApply: _sessionApply,
                    status: _status
                  }
                });
                break;
            }
          }
        }, {
          key: "returnSessionApplyStatus",
          value: function returnSessionApplyStatus(LoanApplyObj) {
            var _currentStatus = _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Pending;

            try {
              if (LoanApplyObj.status == _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Pending || LoanApplyObj.status == 'Pending' || LoanApplyObj.status == '' || LoanApplyObj.status == null || typeof LoanApplyObj.status == 'undefined') {
                _currentStatus = _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Pending;
              } else {
                _currentStatus = LoanApplyObj.status;
              }
            } catch (ex) {}

            try {
              if (LoanApplyObj.status != _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Pending && LoanApplyObj.status != _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].Rejected && LoanApplyObj.status != _models_role__WEBPACK_IMPORTED_MODULE_10__["SessionStatus"].RejectedOngoing) {
                this.anySingleDataIsApproved = true;
              }
            } catch (ex) {}

            return _currentStatus;
          }
        }, {
          key: "clickedOnSessionChatVideo",
          value: function clickedOnSessionChatVideo(sessionObj, AVTrueChatFalse) {
            var _contactId = this.contactService.returnContactIdForSession(sessionObj._id, sessionObj.sessionAppliedByBorrowers[0]._id);

            var _parentRouting = '';

            switch (this.authenticationService.currentUserValue.role) {
              case _models_role__WEBPACK_IMPORTED_MODULE_10__["Role"].Borrower:
                _parentRouting = 'borrower';
                break;

              case _models_role__WEBPACK_IMPORTED_MODULE_10__["Role"].Lender:
                _parentRouting = 'lender';
                break;

              case _models_role__WEBPACK_IMPORTED_MODULE_10__["Role"].Admin:
                _parentRouting = 'admin';
                break;
            }

            this.dialogRef.close({
              event: 'close',
              data: {}
            });
            this.router.navigate(['/' + _parentRouting + '/messages'], {
              state: {
                contactId: _contactId,
                AVTrueChatFalse: AVTrueChatFalse
              }
            });
          }
        }]);

        return ModalAppliedSessionDisplay;
      }();

      ModalAppliedSessionDisplay.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_11__["AlertService"]
        }, {
          type: _socketio_service__WEBPACK_IMPORTED_MODULE_15__["SocketioService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]
        }, {
          type: _services_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"]
        }];
      };

      ModalAppliedSessionDisplay = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'modal-applied-session-display',
        template: _raw_loader_modal_modal_applied_session_display_html__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_11__["AlertService"], _socketio_service__WEBPACK_IMPORTED_MODULE_15__["SocketioService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object, _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _services_utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"], _services_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"]])], ModalAppliedSessionDisplay); //#endregion modal popup for display applied sessions

      /***/
    },

    /***/
    "njGU":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrower/modal/modal-apply-session.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function njGU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2 mat-dialog-title class=\"text-primary\">\r\n    {{utilityService.returnLoanType(LoanObj.loanType)}}\r\n</h2>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group \">\r\n                <label for=\"loanAmount\" i18n>Loan Amount</label>\r\n                <h4 class=\"text-primary\">\r\n                    {{LoanObj.loanAmount}}\r\n                </h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group\">\r\n                <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\r\n                <h4 class=\"text-primary\">\r\n                    {{LoanObj.loanTenureInMonths}}\r\n                </h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group \">\r\n                <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\r\n                <h4 class=\"text-primary\">\r\n                    {{LoanObj.loanInterestRate}}\r\n                </h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group \">\r\n                <label for=\"loanStartDateTime\" i18n>Start Date</label>\r\n                <h4 class=\"text-primary\" i18n>\r\n                    {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\r\n                </h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 col-12\">\r\n            <div class=\"form-group\">\r\n                <div>\r\n                    <label for=\"loanStartDateTime\" i18n>Payment Method</label>\r\n                </div>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\" class=\"badge  mr-2 badge-success\">\r\n                    BANK\r\n                </span>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\" class=\"badge  mr-2 badge-success\">\r\n                    Cash\r\n                </span>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\r\n                    class=\"badge  mr-2 badge-success\">\r\n                    Revolut\r\n                </span>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\" class=\"badge  mr-2 badge-success\">\r\n                    Paypal\r\n                </span>\r\n                <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\" class=\"badge  badge-success\">\r\n                    Skrill\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-12\">\r\n            <p class=\"mb-2\" i18n>Description:</p>\r\n            <div class=\"text-black-50\" i18n>\r\n                {{LoanObj.loanDescription}}\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-12 col-12 mt-3\">\r\n            <div class=\"table-responsive table shadow-sm\">\r\n                <table class=\"table mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th scope=\"col\" i18n>EMI Date</th>\r\n                            <th scope=\"col\" i18n>Payment</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\r\n                            <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\r\n                                | date:'dd-MMM-YYYY'}}</td>\r\n                            <td>kr {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n      \r\n    </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions align=\"end\">\r\n    <button class=\"btn btn-primary btn-sm float-right\" mat-button mat-dialog-close>\r\n        <i class=\"icon-close\"></i> CLOSE\r\n    </button>\r\n</mat-dialog-actions>";
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
                  //console.log('data => ', data)
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
            var _this19 = this;

            this.browseSessionForm = this.formBuilder.group({
              services4search: [''],
              location4search: [''],
              generaldata4search: ['']
            });
            this.sessionsService.getSessionAllWithSessionApply(this.authenticationService.currentUserValue._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              //console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this19.allSessionsData = data['data'];

                _this19.userService.proccessAllAppUsersCollections(_this19.utilityService._.uniq(_this19.utilityService._.map(_this19.utilityService._.flattenDepth(_this19.utilityService._.map(_this19.utilityService._.values(_this19.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //this.alertService.success(data['message'], true);


                _this19.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this19.loading = false;
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


              _this19.loading = false;
            });
            this.sessionsService.getUpdatesForSessionAllByBorrowerId().subscribe(function (data) {
              if (data && data['success']) {
                var _keyPairedMapObj = _this19.utilityService._.mapKeys(_this19.allSessionsData, "_id");

                for (var _items in data['data']) {
                  var _currentObj = data['data'][_items];
                  _keyPairedMapObj[_currentObj._id] = _currentObj;
                }

                _this19.allSessionsData = _this19.utilityService._.values(_keyPairedMapObj);
                _this19.loading = false;
              } else {
                _this19.loading = false;
              }
            }, function (error) {
              _this19.loading = false;
            });
            this.sessionsService.getSessionLengthByService(null, null, null, null, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              //console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this19.allSessionsCount = data['data']; //this.alertService.success(data['message'], true);

                _this19.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this19.loading = false;
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


              _this19.loading = false;
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
            var _this20 = this;

            var services = this.browseSessionForm.get('services4search').value;
            var location = this.browseSessionForm.get('location4search').value;
            var generaldata4search = this.browseSessionForm.get('generaldata4search').value;
            var useAndTrueOrFalse = false;
            this.allSessionsData = [];
            this.sessionsService.getSessionAllByService(services, location, generaldata4search, generaldata4search, useAndTrueOrFalse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              //console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this20.allSessionsData = data['data'];

                _this20.userService.proccessAllAppUsersCollections(_this20.utilityService._.uniq(_this20.utilityService._.map(_this20.utilityService._.flattenDepth(_this20.utilityService._.map(_this20.utilityService._.values(_this20.allSessionsData), "sessionAppliedByBorrowers"), 1), 'borrowerId'))); //this.alertService.success(data['message'], true);


                _this20.loading = false; //this.element_btn_click_addSession_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                //this.alertService.error(data['message']);
                _this20.loading = false;
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


              _this20.loading = false;
            });
          }
        }, {
          key: "applyToSession",
          value: function applyToSession(sessionObj) {
            var _this21 = this;

            console.log('179', this.authenticationService.currentUserValue);
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

                    _this21.socketService.sendCurrentAppliedSessionObj(_currentSessionApply.loanId);

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending:
                        _currentSessionApply.createdBy = _this21.authenticationService.currentUserValue._id;

                        _this21.socketService.setSessionApply(true, _currentSessionApply);

                        break;

                      default:
                        _this21.socketService.updateSessionApply(true, _currentSessionApply, _this21.authenticationService.currentUserValue);

                        break;
                    }

                    switch (_currentSessionApply.status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Accepted:
                        _this21.alertService.success("Updated. Session is available under My Sessionss ->Accepted tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Pending:
                        _this21.alertService.success("Applied. Session is available under My Sessionss->Pending tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Rejected:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].RejectedOngoingWithRefund:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Suspended:
                        _this21.alertService.success("Updated. Session is available under My Sessionss->Rejected tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Completed:
                        _this21.alertService.success("Updated. Session is available under My Sessionss->Completed tab.", true);

                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Active:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].Ongoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].OngoingInitiated:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"].OngoingAccepted:
                        _this21.alertService.success("Updated. Session is available under My Sessionss->Ongoing tab.", true);

                        break;

                      default:
                        break;
                    }
                  }
                }
              }

              console.log("252 :: bsc :: Dialog result: ".concat(JSON.stringify(result)));
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
            }

            console.log('214', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(_borrower_component__WEBPACK_IMPORTED_MODULE_10__["ModalAppliedSessionDisplay"], {
              backdropClass: 'custom-dialog-backdrop-class',
              panelClass: 'custom-dialog-panel-class',
              data: {
                sessionObj: _proccessedSessionObj,
                borrowerId: this.authenticationService.currentUserValue._id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("191 :: bcs :: Dialog result: ".concat(JSON.stringify(result)));
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


            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
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