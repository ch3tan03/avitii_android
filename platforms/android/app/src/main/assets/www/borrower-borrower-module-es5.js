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


      __webpack_exports__["default"] = "<!-- addSession section -->\n\n<div class=\"row\">\n    <div class=\"col-xl-3 col-12\">\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            Loan Amount\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                            kr {{f.loanAmount.value}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card border-left-primary shadow py-2 mb-3\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            EMI (Monthly)\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                            kr {{_calculatedMonthlyAmountForEMI}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card border-left-primary shadow py-2\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            Total Loan\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                            kr\n                            {{utilityService.returnRoundedNumber(_calculatedMonthlyAmountForEMI*f.loanTenureInMonths.value)}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-9 col-12\">\n        <div class=\"card shadow mb-4\">\n            <!-- Card Header - Dropdown -->\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Get A Loan</h6>\n            </div>\n            <!-- Card Body -->\n            <div class=\"card-body\">\n                <form [formGroup]=\"addSessionForm\" class=\"theme-form\">\n\n                    <div class=\"row\">\n\n                        <div class=\"col-xl-12 col-12\">\n\n                            <div class=\"form-group\">\n                                <label for=\"loanType\" i18n>Loan Type</label>\n                                <select formControlName=\"loanType\" class=\"custom-select\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanType.errors }\">\n                                    <option value=\"\" selected disabled> Choose Loan Type</option>\n                                    <option *ngFor=\"let item of _.values(utilityService.ParentLoanTypes);\"\n                                        [ngValue]=\"item._id\" >\n                                        {{item.name}}</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.loanType.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanType.errors.required\" i18n>Loan type is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 col-12\">\n                            <div class=\"form-group\">\n                                <label for=\"loanAmount\" i18n>Loan Amount</label>\n                                <input type=\"number\" min=\"0\" formControlName=\"loanAmount\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanAmount.errors }\"\n                                    (change)=\"calculateMonthlyAmountForEMI()\" (keyup)=\"calculateMonthlyAmountForEMI()\"\n                                    pattern=\"^[1-9]\\d*$\" />\n                                <div *ngIf=\"submitted && f.loanAmount.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanAmount.errors.required\" i18n>Loan Amount is required</div>\n                                    <div *ngIf=\"f.loanAmount.errors.min\" i18n>value must be greater than 1</div>\n                                    <div *ngIf=\"f.loanAmount.errors.max\" i18n>value must be less than\n                                        {{currentUserMaxLoanAmount}}</div>\n                                    <div *ngIf=\"f.loanAmount.errors.pattern\" i18n>value should be a valid number</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 small text-primary mt-n3 mb-3\">\n\n                        </div>\n                        <div class=\"col-xl-12 col-12\">\n                            <div class=\"form-group\">\n                                <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\n                                <input type=\"number\" formControlName=\"loanTenureInMonths\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanTenureInMonths.errors }\"\n                                    (change)=\"calculateMonthlyAmountForEMI()\" (keyup)=\"calculateMonthlyAmountForEMI()\"\n                                    pattern=\"^[1-9]\\d*$\" />\n                                <div *ngIf=\"submitted && f.loanTenureInMonths.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.required\" i18n>Loan Tenure is\n                                        required\n                                    </div>\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.min\" i18n>value must be greater than\n                                        3</div>\n                                    <div *ngIf=\"f.loanTenureInMonths.errors.pattern\" i18n>value should be a valid number\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-12 col-12\">\n                            <div class=\"form-group\">\n                                <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\n                                <input type=\"number\" formControlName=\"loanInterestRate\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanInterestRate.errors }\"\n                                    (change)=\"calculateMonthlyAmountForEMI()\"\n                                    (keyup)=\"calculateMonthlyAmountForEMI()\" />\n                                <div *ngIf=\"submitted && f.loanInterestRate.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.loanInterestRate.errors.required\" i18n>Interest Rate is\n                                        required\n                                    </div>\n                                    <div *ngIf=\"f.loanInterestRate.errors.min\" i18n>\n                                        min interest rate of {{loanInterestRateMin}}%\n                                    </div>\n                                    <div *ngIf=\"f.loanInterestRate.errors.max\" i18n>\n                                        max interest rate of {{loanInterestRateMax}}% (remember to check  the rules for your country)\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--\n                                <div class=\"col-xl-12 col-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"loanStartDateTimeCustomised\" i18n>Start on</label>\n                                        <input type=\"date\" formControlName=\"loanStartDateTimeCustomised\"\n                                            class=\"form-control\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.loanStartDateTimeCustomised.errors }\"\n                                            [max]=\"maxDate\" [min]=\"minDate\" />\n                                        <div *ngIf=\"submitted && f.loanStartDateTimeCustomised.errors\"\n                                            class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.required\" i18n>Start Date\n                                                Time is required\n                                            </div>\n                                            <div *ngIf=\"f.loanStartDateTimeCustomised.errors.date\" i18n>Invalid Date\n                                                format.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            -->\n                        <!--\n                                        <div class=\"col-xl-12 col-12\">\n                                            <label for=\"loanEndDateTimeCustomised\" i18n>Ends on</label>\n                                            <input [readonly]=\"true\" type=\"datetime-local\"\n                                                formControlName=\"loanEndDateTimeCustomised\" class=\"form-control\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.loanEndDateTimeCustomised.errors }\"\n                                                [max]=\"maxDate\" [min]=\"minDate\" />\n                                            <div *ngIf=\"submitted && f.loanEndDateTimeCustomised.errors\"\n                                                class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.required\" i18n>End Date Time is\n                                                    required\n                                                </div>\n                                                <div *ngIf=\"f.loanEndDateTimeCustomised.errors.date\" i18n>Invalid Date format.\n                                                </div>\n                                            </div>\n                                        </div>\n                                        -->\n                        <div class=\"col-xl-12 mb-3\">\n                            <div for=\"loanRepaymentType\" class=\"mb-2\" i18n>How to give the money</div>\n\n                            <div class=\"form-check-inline\"\n                                *ngFor=\"let item of _.values( utilityService.LoanRepaymentTypes);\">\n\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input name=\"service\" id=\"services_{{item._id}}\" type=\"checkbox\"\n                                        class=\"custom-control-input\" value=\"{{item._id}}\"\n                                        (change)=\"onLoanRepaymentTypeChange($event)\"\n                                        [checked]=\"onInitSetLoanRepaymentTypeValue(item._id)\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanRepaymentType.errors }\">\n                                    <label for=\"services_{{item._id}}\"\n                                        class=\"custom-control-label\">{{item.name}}</label>\n                                </div>\n\n                            </div>\n                            <div *ngIf=\"submitted && f.loanRepaymentType.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.loanRepaymentType.errors.required\">Payment option required\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"col-xl-12 mb-3\">\n                            <div class=\"form-group\">\n                                <label for=\"comment\" i18n>Description:</label>\n                                <textarea class=\"form-control\" formControlName=\"loanDescription\" rows=\"2\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.loanDescription.errors }\">\n                                            </textarea>\n                            </div>\n                            <div *ngIf=\"submitted && f.loanDescription.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.loanDescription.errors.required\" i18n>Description is\n                                    required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xl-12 text-center\">\n                            <hr>\n                            <button type=\"button\" (click)=\"onaddSessionUpdateSubmit()\" [disabled]=\"loading\"\n                                class=\"btn btn-primary\" i18n>Submit</button>\n                            <img *ngIf=\"loading\" class=\"pl-3\"\n                                src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- addSession section -->";
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


      __webpack_exports__["default"] = "<!-- Page Heading -->\n<!-- <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n        <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\n        <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Profile</a>\n    </div> -->\n\n<div [ngSwitch]=\"authenticationService.currentUserValue.role\">\n    <div *ngSwitchCase=\"Role.Borrower\">\n        <div class=\"jumbotron\"\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted || !authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\n            <div class=\"text-black-50 h2 font-weight-lighter\" i18n>\n                Welome, Your profile has been verified succesfully. Your need to submit your\n                <span class=\"badge badge-danger\" >Bank Details</span> and\n                <span class=\"badge badge-danger\" >Income Proof Documents</span> to access the loan market.\n            </div>\n            <hr>\n            <ul class=\"list-unstyled\">\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Profile and personal document verification\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/borrower/profile\"></i>\n                    </span>\n                </li>\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Bank details submission\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/borrower/bank-details\"></i>\n                    </span>\n                </li>\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Income Proof Documents and Mothly Expenses\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersIncomeAndExpenseProofVerified\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/borrower/income-proof\"></i>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div *ngSwitchCase=\"Role.Lender\">\n        <div class=\"jumbotron\"\n            *ngIf=\"!authenticationService.currentUserValue.isVerified || !authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\n            <div class=\"text-black-50 h2 font-weight-lighter\" i18n>\n                Welome, Your profile has been verified succesfully. Your need to submit your\n                <span class=\"badge badge-danger\">Bank Details</span> to access the Loan Market.\n            </div>\n            <hr>\n            <ul class=\"list-unstyled\">\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Profile and personal document verification\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isVerified\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/lender/profile\"></i>\n                    </span>\n                </li>\n                <li class=\"d-flex align-items-center justify-content-center mb-3 h4\" i18n>\n                    Bank details submission\n                    <span [ngSwitch]=\"authenticationService.currentUserValue.isUsersBankDetailsSubmitted\">\n                        <i *ngSwitchCase=\"true\" class=\"icon icon-check-box text-success ml-3\"></i>\n                        <i *ngSwitchDefault class=\"icon icon-pencil-alt text-danger ml-3\"\n                            routerLink=\"/lender/bank-details\"></i>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card border-left-warning shadow h-100\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\" i18n>\n                            Member since\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            {{authenticationService.currentUserValue.userVerifiedOn | date:'dd-MMM-YYYY'}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card border-left-primary shadow h-100\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                            My Level\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\n                            <!--{{utilityService.returnStringWithReplacing_(authenticationService.currentUserValue.userType)}}-->\n                            {{authenticationService.returnUserTypeForUserFromSuppliedUserLevel(authenticationService.currentUserValue.userType)}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card border-left-success shadow h-100\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\" i18n>\n                            Paid Contracts\n                        </div>\n                        <div class=\"row no-gutters align-items-center\">\n                            <div class=\"col-auto\">\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{allMyPaidContractCount}}\n                                </div>\n                            </div>\n                            <!-- <div class=\"col\">\n                                            <div class=\"progress progress-sm mr-2\">\n                                                <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                            </div>\n                                        </div> -->\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Pending Requests Card Example -->\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card border-left-secondary shadow h-100\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-secondary text-uppercase mb-1\" i18n>\n                            Paid Loans</div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{allMyPaidLoanCount}}</div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-primary text-white shadow\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                    Active Loan</div>\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyActiveLoanCount}}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-success text-white shadow\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                    UnSigned contracts</div>\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyUnSignedContractLoanCount}}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-warning text-white shadow\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                    Disbursed Loans</div>\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyDisbursedLoanCount}}</div>\n            </div>\n        </div>\n    </div>\n    <!--\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-secondary text-white shadow\">\n            <div class=\"card-body dashobard-card\">\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\n                    Profit Overview</div>\n                <div class=\"h5 mb-0 font-weight-bold\">{{allMyProfitOverviewCount}}</div>\n            </div>\n        </div>\n    </div>\n-->\n</div>\n\n<div class=\"row\">\n\n    <div class=\"col-xl-12 col-12\">\n        <div class=\"card shadow mb-4\">\n\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Active Loans</h6>\n\n            </div>\n\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive table-billing-history\">\n                    <table class=\"table mb-0\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" i18n>Type</th>\n                                <th scope=\"col\">\n                                    {{Role.Lender!=authenticationService.currentUserValue.role?'Lender\n                                    Name':'Borrower Name'}}\n                                </th>\n                                <th scope=\"col\" i18n>Amount</th>\n                                <th scope=\"col\" i18n>Refund</th>\n                                <th scope=\"col\" i18n>Next EMI</th>\n                                <th scope=\"col\" i18n>Status</th>\n                                <th scope=\"col\">#</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <!--New Data table from Sessions Apply-->\n                            <tr\n                            *ngFor=\"let LoanApplyObj of utilityService._.values( allSessionApplyData) | mySessionsFilter : 'status' : ['accepted']:checkCreatedByUserId:checkCreatedByT\">\n                            <td class=\"text-capitalize\">{{(LoanApplyObj.sessionForBorrower.loanType ||\n                                \"\").replace(\"_\", \" \")}}</td>\n                            <td class=\"text-capitalize\">\n                                {{userService.returnUsersObjFromLocal(null,\n                                null,'firstName',\n                                (LoanApplyObj.lenderId!=authenticationService.currentUserValue._id?LoanApplyObj.lenderId:LoanApplyObj.borrowerId))}}\n                            </td>\n                            <td>{{LoanApplyObj.loanAmount || LoanApplyObj.sessionForBorrower.loanAmount}}</td>\n                            <td>{{utilityService.returnRoundedNumber((LoanApplyObj.calculatedMonthlyAmountForEMI ||\n                                LoanApplyObj.sessionForBorrower.calculatedMonthlyAmountForEMI) *\n                                LoanApplyObj.sessionForBorrower.loanTenureInMonths)}}</td>\n                            <td>{{LoanApplyObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\n                            <td>\n                                <div *ngIf=\"LoanApplyObj.lenderId!=authenticationService.currentUserValue._id\">\n                                    <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\n                                        <span class=\"badge badge-danger\" i18n>\n                                            Pending\n                                        </span>\n                                    </a>\n                                    <a\n                                        *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                        <span class=\"badge badge-warning\" i18n>\n                                            Money Sent\n                                        </span>\n                                    </a>\n                                    <a\n                                        *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                        <span class=\"badge badge-success\" i18n>\n                                            Received Money\n                                        </span>\n                                    </a>\n                                </div>\n                                <div *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\n                                    <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\n                                        <span\n                                            *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\"\n                                            class=\"badge badge-danger\" i18n>\n                                            Money Not Sent\n                                        </span>\n                                    </a>\n                                    <a\n                                    *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                    <span class=\"badge badge-warning\" i18n>\n                                        Money Sent\n                                    </span>\n                                    </a>\n                                    <a\n                                        *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                        <span class=\"badge badge-success\" i18n>\n                                            Money Sent\n                                        </span>\n                                    </a>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"LoanApplyObj.lenderId!=authenticationService.currentUserValue._id\">\n                                    <a (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj)\"\n                                        *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && !LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower\">\n                                        <span class=\"badge badge-success\" i18n>is Money Received?</span>\n                                    </a>\n                                    <a *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender && LoanApplyObj.isLoanAmountPaidByLenderConfirmByBorrower && LoanApplyObj.nextInstallment && !LoanApplyObj.isLoanAmountPaidByBorrower\">\n                                       <!--\n                                        <span (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj, LoanApplyObj.nextInstallment)\" class=\"badge badge-success\">is Installment Money Transfered?</span>\n                                    -->\n                                    <div class=\"form-check-inline\">\n                                        <div class=\"custom-control custom-checkbox\">\n                                            <input name=\"isLoanAmountPaidByBorrower\" id=\"isLoanAmountPaidByBorrower\" type=\"checkbox\"\n                                                class=\"custom-control-input\" [value]=\"true\"\n                                                (change)=\"LoanMoneyTransferStatusChange($event, LoanApplyObj.sessionForBorrower, LoanApplyObj, LoanApplyObj.nextInstallment)\"\n                                                [checked]=\"LoanApplyObj.isLoanAmountPaidByBorrower\">\n                                            <label for=\"isLoanAmountPaidByBorrower\" class=\"custom-control-label\" i18n>\n                                                Installment Money Transfered\n                                            </label>\n                                        </div>\n                                    </div>\n                                    </a>\n                                </div>\n                                <div *ngIf=\"LoanApplyObj.lenderId==authenticationService.currentUserValue._id\">\n                                    <a *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\">\n                                       <!--\n                                        <span (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj)\" class=\"badge badge-success\">\n                                            is Money Transfered?\n                                        </span>\n                                    -->\n                                        <div class=\"form-check-inline\">\n                                            <div class=\"custom-control custom-checkbox\">\n                                                <input name=\"isLoanAmountPaidByLender\" id=\"isLoanAmountPaidByLender\" type=\"checkbox\"\n                                                    class=\"custom-control-input\" [value]=\"true\"\n                                                    (change)=\"LoanMoneyTransferStatusChange($event, LoanApplyObj.sessionForBorrower, LoanApplyObj)\"\n                                                    [checked]=\"LoanApplyObj.isLoanAmountPaidByLender\">\n                                                <label for=\"isLoanAmountPaidByLender\" class=\"custom-control-label\" i18n>\n                                                    Money Transfered\n                                                </label>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <a (click)=\"LoanMoneyTransferStatusModel(LoanApplyObj.sessionForBorrower, LoanApplyObj, null, true)\"\n                                        *ngIf=\"!LoanApplyObj.isLoanAmountPaidByBorrower && LoanApplyObj.installmentWiseLoanAmountPaidByBorrower\">\n                                        <span class=\"badge badge-success\" i18n>is Installment Money Received?&nbsp;</span>\n                                        <span\n                                            *ngFor=\"let installmentObj of LoanApplyObj.installmentWiseLoanAmountPaidByBorrower\">\n                                            <i *nfIf=\"installmentObj.createdOnForLoanAmountPaidToLender && !installmentObj.createdOnForLoanAmountPaidToLenderConfirmByLender\">*</i>\n                                        </span>\n                                    </a>\n\n\n                                </div>\n                            </td>\n                        </tr>\n                            <!--New Data table from Session Apply-->\n\n                            <!--Old Data table from Sessions-->\n                            <!--\n                            <tr\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['accepted']:checkCreatedByUserId:checkCreatedByT\">\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\n                                <td class=\"text-capitalize\">\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\n                                    true,'firstName')}}</td>\n                                <td>{{LoanObj.loanAmount}}</td>\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\n                                    LoanObj.loanTenureInMonths)}}</td>\n                                <td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>\n                                <td>\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\n                                        <a>\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-danger\">Pending</span>\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-success\">Received Money</span>\n                                        </a>\n                                    </div>\n                                </td>\n                                <td>\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\n                                        <span class=\"badge badge-primary\">Details</span>\n                                    </a>\n                                </td>\n                            </tr>\n                        -->\n                            <!--Old Data table from Sessions-->\n                            <tr class=\"mt-2 text-center no-item\">\n\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-12 col-12\">\n        <div class=\"card shadow mb-4\">\n\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Unsigned Contracts</h6>\n\n            </div>\n\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive table-billing-history\">\n                    <table class=\"table mb-0\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" i18n>Type</th>\n                                <th scope=\"col\" i18n>Lender Name</th>\n                                <th scope=\"col\" i18n>Amount</th>\n                                <th scope=\"col\" i18n>Refund</th>\n                                <!--<th scope=\"col\">Next EMI</th>-->\n                                <th scope=\"col\" i18n>Application Date</th>\n                                <th scope=\"col\" i18n>Status</th>\n                                <th scope=\"col\">#</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['awaiting_for_approval']:checkCreatedByUserId:checkCreatedByT\">\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\n                                <td class=\"text-capitalize\">\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\n                                    true,'firstName')}}</td>\n                                <td>{{LoanObj.loanAmount}}</td>\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\n                                    LoanObj.loanTenureInMonths)}}</td>\n                                <!--<td>{{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}</td>-->\n                                <td>{{LoanObj.applicationDate | datePretty}}</td>\n                                <td>\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\n                                        <a>\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-danger\" i18n>Pending</span>\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-success\" i18n>Received Money</span>\n                                        </a>\n                                    </div>\n                                </td>\n                                <td>\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\n                                        <span class=\"badge badge-primary\" i18n>Details</span>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr class=\"mt-2 text-center no-item\">\n\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-12 col-12\">\n        <div class=\"card shadow mb-4\">\n\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\" i18n>Paid Loans</h6>\n\n            </div>\n\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive table-billing-history\">\n                    <table class=\"table mb-0\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" i18n>Type</th>\n                                <th scope=\"col\" i18n>Lender Name</th>\n                                <th scope=\"col\" i18n>Amount</th>\n                                <th scope=\"col\" i18n>Refund</th>\n                                <th scope=\"col\" i18n>Status</th>\n                                <th scope=\"col\">#</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr\n                                *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : ['paid','completed']:checkCreatedByUserId:checkCreatedByT\">\n                                <td class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\n                                <td class=\"text-capitalize\">\n                                    {{userService.returnUsersObjFromLocal(LoanObj.sessionAppliedByBorrowers,\n                                    true,'firstName')}}</td>\n                                <td>{{LoanObj.loanAmount}}</td>\n                                <td>{{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI *\n                                    LoanObj.loanTenureInMonths)}}</td>\n                                <td>\n                                    <div *ngFor=\"let LoanApplyObj of LoanObj.sessionAppliedByBorrowers\">\n                                        <a>\n                                            <span *ngIf=\"!LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-danger\" i18n>Pending</span>\n                                            <span *ngIf=\"LoanApplyObj.isLoanAmountPaidByLender\"\n                                                class=\"badge badge-success\" i18n>Received Money</span>\n                                        </a>\n                                    </div>\n                                </td>\n                                <td>\n                                    <a (click)=\"showAppliedToSession(LoanObj)\">\n                                        <span class=\"badge badge-primary\" i18n>Details</span>\n                                    </a>\n                                </td>\n                            </tr>\n                            <tr class=\"mt-2 text-center no-item\">\n\n                                <h5 class=\"my-4 font-weight-normal\" i18n>No Data Found.</h5>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--\n    <div class=\"row d-none\">\n    \n        <div class=\"col-xl-4 col-12\">\n            <div class=\"row\">\n    \n                <div class=\"col-xl-12 col-md-6 mb-3\">\n                    <div class=\"card shadow-sm\">\n                        <div class=\"card-body\">\n                            <div class=\"row no-gutters align-items-center\">\n                                <div class=\"col text-center border-right\">\n                                    <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Wallet\n                                    </div>\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                                        ${{fundService.totalFund4currentUser}}</div>\n                                </div>\n    \n                                <div class=\"col text-center\">\n                                    <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">My Sessions\n                                    </div>\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                                        {{allSessionsCount}}/{{allSessionsTodayCount}}</div>\n                                </div>\n    \n                            </div>\n                        </div>\n                    </div>\n                </div>\n    \n                <div class=\"col-xl-12 col-md-6 mb-3\">\n    \n                    <section class=\"blog-sidebar pt-0\">\n                        <div class=\"row pl-0 pr-0\">\n                            <div class=\"col-lg-12\">\n                                 <div>\n                                    <h5 class=\"blog-title\">upcoming sessions</h5>\n                                    <div class=\"sidebar-container\">\n                                        <div *ngFor=\"let item of utilityService._.values(allSessionsTodayList);\" class=\"post-container d-flex\">\n                                            <div class=\"w-35 m-r-25\">\n                                                <img alt=\"\" class=\"img-fluid\" src=\"./assets/img/na.png\">\n                                                <div class=\"badge badge-blue\">\n                                                    {{item.location}}\n                                                </div>\n                                            </div>\n                                            <div>\n                                                <h5 class=\"post-head\">{{item.sessionSubject}}</h5>\n                                                <h6 class=\"date\">{{item.loanStartDateTime | date:'medium'}}</h6>\n                                                <div class=\"mt-3\">\n                                                    <i class=\"icon-video-camera fa-lg mr-3\" (click)=\"clickedOnSessionChatVideo(item, true)\"></i>\n                                                    <i class=\"icon-comment\" (click)=\"clickedOnSessionChatVideo(item, false)\"></i>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"mt-2 text-center blog-agency no-item\">\n                                            <img src=\"assets/img/noresult.png\" style=\"height: 60px;\">\n                                            <h5 class=\"mt-3 font-weight-normal\">Looks like you don't have any counselling Session today</h5>\n                                        </div>\n    \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </section>\n                </div>\n    \n            </div>\n    \n        </div>\n    \n        <div class=\"col-xl-8 col-12\">\n    \n            <section class=\"agency blog blog-sec blog-sidebar sider p-0\">\n    \n                <div class=\"h6 mb-3\">\n    \n                    LATEST SESSIONS\n                   \n                </div>\n                <div class=\"card shadow-sm mb-4\" *ngFor=\"let session of allSessionsData\">\n                    <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\n                        {{session.sessionSubject}}\n                    </div>\n                    <div class=\"card-body px-md-3 px-1 small\">\n                         <div class=\"row\">               \n                        <div class=\"col-xl-12 col-12\">\n                            <p class=\"para2\" [class.show_more]=\"!session._id\">\n                                {{session.loanDescription}}\n                            </p>\n                        </div>          \n                        <div class=\"col-xl-6 col-6 border-right mb-2\">\n                            <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{session.loanStartDateTime | date:'MMM d, h:mm a'}}\n                        </div>\n                       \n                        <div class=\"col-xl-6 col-6\">\n                            <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\n                            \n                            {{session.location}}\n                        </div>\n                      \n                    </div>\n                    </div>\n                    <div class=\"card-footer bg-white\">\n                        <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span>\n                        <a *ngIf=\"!check4applyToSession(session)\" class=\"btn btn-success  text-capitalize btn-sm float-right text-white\" (click)=\"applyToSession(session)\">Apply</a>\n                        <a *ngIf=\"check4applyToSession(session)\" class=\"btn btn-primary text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(session)\"> Details</a>\n                    </div>\n                </div>\n                \n                <div *ngIf=\"!allSessionsData\">\n                    <div class=\"content_loader\"></div>\n                    <div class=\"content_loader\"></div>\n                </div>\n    \n            </section>\n        </div>\n    </div>\n    -->";
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


      __webpack_exports__["default"] = "<section class=\"tab-product  p-b-0\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-lg-12\">\n            <ul class=\"nav nav-justified nav-material nav-tabs\" id=\"top-tab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='received', 'show': selectedTab=='received'}\"\n                        data-toggle=\"tab\" href=\"#top-home\" id=\"top-home-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('received');\" i18n>My Contracts\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalPendingContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='sent', 'show': selectedTab=='sent'}\" data-toggle=\"tab\"\n                        href=\"#top-sent\" id=\"profile-sent-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('sent')\" i18n>Sent\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalSentContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='canceled', 'show': selectedTab=='canceled'}\"\n                        data-toggle=\"tab\" href=\"#top-canceled\" id=\"profile-canceled-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('canceled')\" i18n>Cancelled\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalCanceledContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Cancelled contracts\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='active', 'show': selectedTab=='active'}\" data-toggle=\"tab\"\n                        href=\"#top-active\" id=\"profile-active-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('active')\" i18n>Active\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalActiveContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\">\n                    <a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='paid', 'show': selectedTab=='paid'}\" data-toggle=\"tab\"\n                        href=\"#top-profile\" id=\"profile-top-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('paid')\" i18n>Paid\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalPaidContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='unpaid', 'show': selectedTab=='unpaid'}\" data-toggle=\"tab\"\n                        href=\"#top-profile\" id=\"profile-top-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('unpaid')\" i18n>Unpaid\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalUnPaidContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <li class=\"nav-item\"><a aria-selected=\"false\" class=\"nav-link\"\n                        [ngClass]=\"{ 'active': selectedTab=='inkasso', 'show': selectedTab=='inkasso'}\"\n                        data-toggle=\"tab\" href=\"#top-contact\" id=\"contact-top-tab\" role=\"tab\"\n                        (click)=\"setFilteresOfMySessionDependsOnTab('inkasso')\" i18n>Inkasso\n\n                        &nbsp;\n                        <span class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            {{authenticationService.currentUserLoanTypeWiseCountDetails.totalInkassoContract || 0}}\n                        </span>\n                        <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                    </a>\n                    <div class=\"material-border\"></div>\n                </li>\n                <!-- <li class=\"nav-item\"><a aria-selected=\"true\" class=\"nav-link\" data-toggle=\"tab\" href=\"#top-review\" id=\"review-top-tab\" role=\"tab\" (click)=\"SessionStatusTypeFilter=[SessionStatus.Completed]\">Completed \n                    <i class=\"icon-info-alt small ml-1 tooltip-info\" data-toggle=\"tooltip\"\n                            title=\"Your applied loans those are accepted by LoanObj creator\"></i>\n                        </a>\n                    <div class=\"material-border\"></div>\n                </li> -->\n            </ul>\n        </div>\n    </div>\n</section>\n\n<section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\n    <!-- ;-->\n    <div class=\"card shadow-sm mb-4\"\n        *ngFor=\"let LoanObj of allSessionsData | mySessionsFilter : 'sessionAppliedByBorrowers[0].status' : (SessionStatusTypeFilter.length>0 ? SessionStatusTypeFilter:['accepted']):checkCreatedByUserId:checkCreatedByT:(SessionStatusTypeFilter.indexOf(SessionStatus.Pending)>-1)\">\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\n            <span class=\"float-left\">{{utilityService.returnLoanType(LoanObj.loanType)}}</span>\n            <span class=\"float-right cursor-pointer\" (click)=\"usersProfile(LoanObj.createdByUserObj)\">\n                <i class=\"icon icon-user\"></i>\n                {{LoanObj.createdByUserObj.firstName}}\n                <i *ngIf=\"authenticationService.currentUserValue._id==LoanObj.createdByUserObj._id\">*</i>\n            </span>\n        </div>\n        <div class=\"card-body px-md-3 px-1 small\">\n            <div class=\"row\">\n\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group border-right\">\n                        <label for=\"loanAmount\" i18n>Loan Amount</label>\n                        <h4 class=\"text-primary\">\n                            {{LoanObj.loanAmount}}\n                        </h4>\n                    </div>\n                </div>\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group  border-right\">\n                        <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\n                        <h4 class=\"text-primary\">\n                            {{LoanObj.loanTenureInMonths}}\n                        </h4>\n                    </div>\n                </div>\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group\">\n                        <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\n                        <h4 class=\"text-primary\">\n                            {{LoanObj.loanInterestRate}}\n                        </h4>\n                    </div>\n                </div>\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group border-right\">\n                        <label for=\"loanStartDateTime\" i18n>Start Date</label>\n                        <h4 class=\"text-primary\" i18n>\n                            {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\n                        </h4>\n                    </div>\n                </div>\n                <div class=\"col-xl-4 col-12\">\n                    <div class=\"form-group  border-right\">\n                        <p class=\"mb-2\" i18n>How to give the money</p>\n\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            BANK\n                        </span>\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            Cash\n                        </span>\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            Revolut\n                        </span>\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                            Paypal\n                        </span>\n                        <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\n                            class=\"badge font-weight-light text-uppercase badge-success\">\n                            Skrill\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-xl-12\">\n                    <p class=\"mb-2\" i18n>Description:</p>\n                    <div class=\"text-black-50\" >\n                        {{LoanObj.loanDescription}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"card-footer bg-white\">\n            <span\n                class=\"badge badge-success font-weight-normal text-capitalize btn float-left\">{{LoanObj.sessionType}}</span>\n            <div class=\"row\"\n                [ngSwitch]=\"returnSessionApplyStatus(utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\n                <!-- the same view can be shown in more than one case -->\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Pending\">\n                    <!--\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\n                    -->\n\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"btn btn-primary text-capitalize btn-sm text-white\" title=\"Received Requests/Total Applicants\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\n                    <a *ngIf=\"LoanObj.createdByUserObj._id==authenticationService.currentUserValue._id\"\n                        class=\"btn btn-danger text-capitalize btn-sm float-right text-white mr-2\"><i class=\"icon icon-trash\"\n                            (click)=\"deleteSessionById(LoanObj._id)\"></i></a>\n                    \n                    \n                </div>\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Accepted\">\n                    <!--\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">APPLY</a>\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\n                    -->\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.OngoingInitiated\">\n                    <!--\n                    <button *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right\" (click)=\"sessionApplyOngoingCheck(LoanObj, utilityService._.first(LoanObj.sessionAppliedByBorrowers))\">\n                        Proceed for Execution\n                    </button>\n                -->\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.AwaitingForApproval\">\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\"\n                        class=\"btn btn-success btn-sm text-capitalize float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\">\n                        Details\n                    </a>\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\"\n                        class=\"btn btn-success btn-sm text-capitalize float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> <i class=\"icon-check fa-lg text-white\"></i>\n                        Proceed for Contract Sign\n                    </a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n                <div class=\"col-xl-12\" *ngSwitchCase=\"SessionStatus.Ongoing\">\n                    <!--\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">\n                        Details\n                    </a>\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> <i class=\"icon-check fa-lg text-white\"></i>\n                        Proceed for Execution\n                    </a>\n                -->\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n                <!--default case when there are no matches -->\n                <div class=\"col-xl-12\" *ngSwitchDefault>\n                    <!--\n                    <a *ngIf=\"!check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm text-capitalize float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Apply</a>\n                    <a *ngIf=\"check4applyToSession(LoanObj, checkCreatedByT)\" class=\"btn btn-success btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\">Details</a>\n                    -->\n                    <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\"\n                        (click)=\"showAppliedToSession(LoanObj)\" i18n> Details</a>\n                    <label *ngIf=\"LoanObj.loanMaxBorrower\"\n                        class=\"abs-center btn btn-primary text-capitalize btn-sm text-white\">\n                        {{ _.keys(LoanObj.sessionAppliedByBorrowers).length || 0}}/{{LoanObj.loanMaxBorrower}}\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mt-5 text-center blog-agency no-item\">\n        <!-- <img src=\"assets/img/noresult.png\"> -->\n        <!--\n        <div class=\"spinner-border text-success mb-4\"></div>\n        <h2 class=\"text-black-50\">Hold on updating Loan Data</h2>\n        -->\n    </div>\n</section>";
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


      __webpack_exports__["default"] = ".container_read {\n    height: 70px;\n    overflow: hidden;\n  }\n  \n  .show_more {\n    overflow: visible;\n    height: auto;\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfcmVhZCB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5zaG93X21vcmUge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gICJdfQ== */";
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


      __webpack_exports__["default"] = ".wrapper:focus {\n    outline: 0;\n}\n\n.clash-card {\n    background: white;\n    display: inline-block;\n    margin: auto;\n    border-radius: 19px;\n    position: relative;\n    text-align: center;\n    box-shadow: -1px 15px 30px -12px black;\n}\n\n.clash-card__image {\n    position: relative;\n    height: 230px;\n    margin-bottom: 35px;\n    border-top-left-radius: 14px;\n    border-top-right-radius: 14px;\n}\n\n.clash-card__image--barbarian {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg');\n}\n\n.clash-card__image--barbarian img {\n    width: 400px;\n    position: absolute;\n    top: -65px;\n    left: -70px;\n}\n\n.clash-card__image--archer {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg');\n}\n\n.clash-card__image--archer img {\n    width: 400px;\n    position: absolute;\n    top: -34px;\n    left: -37px;\n}\n\n.clash-card__image--giant {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg');\n}\n\n.clash-card__image--giant img {\n    width: 340px;\n    position: absolute;\n    top: -30px;\n    left: -25px;\n}\n\n.clash-card__image--goblin {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg');\n}\n\n.clash-card__image--goblin img {\n    width: 370px;\n    position: absolute;\n    top: -21px;\n    left: -37px;\n}\n\n.clash-card__image--wizard {\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg');\n}\n\n.clash-card__image--wizard img {\n    width: 345px;\n    position: absolute;\n    top: -28px;\n    left: -10px;\n}\n\n.clash-card__level {\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 700;\n    margin-bottom: 3px;\n}\n\n.clash-card__level--barbarian {\n    color: #ec9b3b;\n}\n\n.clash-card__level--archer {\n    color: #ee5487;\n}\n\n.clash-card__level--giant {\n    color: #f6901a;\n}\n\n.clash-card__level--goblin {\n    color: #82bb30;\n}\n\n.clash-card__level--wizard {\n    color: #4facff;\n}\n\n.clash-card__unit-name {\n    font-size: 26px;\n    color: black;\n    font-weight: 900;\n    margin-bottom: 5px;\n}\n\n.clash-card__unit-description {\n    padding: 5px;\n    margin-bottom: 10px;\n}\n\n.clash-card__unit-stats--barbarian {\n    background: #ec9b3b;\n}\n\n.clash-card__unit-stats--barbarian .one-third {\n    border-right: 1px solid #bd7c2f;\n}\n\n.clash-card__unit-stats--archer {\n    background: #ee5487;\n}\n\n.clash-card__unit-stats--archer .one-third {\n    border-right: 1px solid #d04976;\n}\n\n.clash-card__unit-stats--giant {\n    background: #f6901a;\n}\n\n.clash-card__unit-stats--giant .one-third {\n    border-right: 1px solid #de7b09;\n}\n\n.clash-card__unit-stats--goblin {\n    background: #82bb30;\n}\n\n.clash-card__unit-stats--goblin .one-third {\n    border-right: 1px solid #71a32a;\n}\n\n.clash-card__unit-stats--wizard {\n    background: #4facff;\n}\n\n.clash-card__unit-stats--wizard .one-third {\n    border-right: 1px solid #309eff;\n}\n\n.clash-card__unit-stats {\n    color: white;\n    font-weight: 700;\n    border-bottom-left-radius: 14px;\n    border-bottom-right-radius: 14px;\n}\n\n.clash-card__unit-stats .one-third {\n    width: 33%;\n    float: left;\n    padding: 10px 5px;\n}\n\n.clash-card__unit-stats sup {\n    position: absolute;\n    bottom: 4px;\n    font-size: 45%;\n    margin-left: 2px;\n}\n\n.clash-card__unit-stats .stat {\n    position: relative;\n    font-size: 20px;\n    margin-bottom: 5px;\n}\n\n.clash-card__unit-stats .stat-value {\n    text-transform: uppercase;\n    font-weight: 400;\n    font-size: 12px;\n}\n\n.clash-card__unit-stats .no-border {\n    border-right: none;\n}\n\n.clearfix:after {\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0;\n}\n\n.slick-prev {\n    left: 100px;\n    z-index: 999;\n}\n\n.slick-next {\n    right: 100px;\n    z-index: 999;\n}\n\n.month {\n    font-size: 8px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tbWFya2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUZBQXVGO0FBQzNGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUZBQW1GO0FBQ3ZGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoibG9hbi1tYXJrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4uY2xhc2gtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogLTFweCAxNXB4IDMwcHggLTEycHggYmxhY2s7XG59XG5cbi5jbGFzaC1jYXJkX19pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNHB4O1xufVxuXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWJhcmJhcmlhbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvYmFyYmFyaWFuLWJnLmpwZycpO1xufVxuXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWJhcmJhcmlhbiBpbWcge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNjVweDtcbiAgICBsZWZ0OiAtNzBweDtcbn1cblxuLmNsYXNoLWNhcmRfX2ltYWdlLS1hcmNoZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL2FyY2hlci1iZy5qcGcnKTtcbn1cblxuLmNsYXNoLWNhcmRfX2ltYWdlLS1hcmNoZXIgaW1nIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTM0cHg7XG4gICAgbGVmdDogLTM3cHg7XG59XG5cbi5jbGFzaC1jYXJkX19pbWFnZS0tZ2lhbnQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL2dpYW50LWJnLmpwZycpO1xufVxuXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWdpYW50IGltZyB7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IC0yNXB4O1xufVxuXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWdvYmxpbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvZ29ibGluLWJnLmpwZycpO1xufVxuXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWdvYmxpbiBpbWcge1xuICAgIHdpZHRoOiAzNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjFweDtcbiAgICBsZWZ0OiAtMzdweDtcbn1cblxuLmNsYXNoLWNhcmRfX2ltYWdlLS13aXphcmQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTk1NjEyL3dpemFyZC1iZy5qcGcnKTtcbn1cblxuLmNsYXNoLWNhcmRfX2ltYWdlLS13aXphcmQgaW1nIHtcbiAgICB3aWR0aDogMzQ1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI4cHg7XG4gICAgbGVmdDogLTEwcHg7XG59XG5cbi5jbGFzaC1jYXJkX19sZXZlbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5jbGFzaC1jYXJkX19sZXZlbC0tYmFyYmFyaWFuIHtcbiAgICBjb2xvcjogI2VjOWIzYjtcbn1cblxuLmNsYXNoLWNhcmRfX2xldmVsLS1hcmNoZXIge1xuICAgIGNvbG9yOiAjZWU1NDg3O1xufVxuXG4uY2xhc2gtY2FyZF9fbGV2ZWwtLWdpYW50IHtcbiAgICBjb2xvcjogI2Y2OTAxYTtcbn1cblxuLmNsYXNoLWNhcmRfX2xldmVsLS1nb2JsaW4ge1xuICAgIGNvbG9yOiAjODJiYjMwO1xufVxuXG4uY2xhc2gtY2FyZF9fbGV2ZWwtLXdpemFyZCB7XG4gICAgY29sb3I6ICM0ZmFjZmY7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWJhcmJhcmlhbiB7XG4gICAgYmFja2dyb3VuZDogI2VjOWIzYjtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWJhcmJhcmlhbiAub25lLXRoaXJkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmQ3YzJmO1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tYXJjaGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWU1NDg3O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tYXJjaGVyIC5vbmUtdGhpcmQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkMDQ5NzY7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1naWFudCB7XG4gICAgYmFja2dyb3VuZDogI2Y2OTAxYTtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWdpYW50IC5vbmUtdGhpcmQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZTdiMDk7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1nb2JsaW4ge1xuICAgIGJhY2tncm91bmQ6ICM4MmJiMzA7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzLS1nb2JsaW4gLm9uZS10aGlyZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcxYTMyYTtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLXdpemFyZCB7XG4gICAgYmFja2dyb3VuZDogIzRmYWNmZjtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLXdpemFyZCAub25lLXRoaXJkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzA5ZWZmO1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTRweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTRweDtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLm9uZS10aGlyZCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgc3VwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgZm9udC1zaXplOiA0NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLnN0YXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyAuc3RhdC12YWx1ZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLm5vLWJvcmRlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDA7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpY2stcHJldiB7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uc2xpY2stbmV4dCB7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLm1vbnRoIHtcbiAgICBmb250LXNpemU6IDhweDtcbn1cblxuIl19 */";
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


      __webpack_exports__["default"] = "  <!--copyright start-->\n  <div class=\"agency copyright\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"link-horizontal\">\n                    <ul>\n                        <li>\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Privacy Policy</a>\n                        </li>\n\n                        <li>\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Terms of Use</a>\n                        </li>\n                        <li>\n                            <a class=\"copyright-text\" routerLink=\"/faqs\" routerLinkActive=\"active\" i18n>FAQs</a>\n                        </li>\n                        \n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div>\n                    <h6 class=\"copyright-text text-white text-right\" i18n>© 2020 Avitii Lender System\n\n                    </h6>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  <!--copyright end-->\n  \n ";
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


      __webpack_exports__["default"] = "nav {\n    padding: 0;\n}\nheader img{\n    height: 3.3rem;\n}\nheader nav ul .mega-menu .mega-menu-container {\n\n    min-width: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgcGFkZGluZzogMDtcbn1cbmhlYWRlciBpbWd7XG4gICAgaGVpZ2h0OiAzLjNyZW07XG59XG5oZWFkZXIgbmF2IHVsIC5tZWdhLW1lbnUgLm1lZ2EtbWVudS1jb250YWluZXIge1xuXG4gICAgbWluLXdpZHRoOiBhdXRvO1xufVxuIl19 */";
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


      __webpack_exports__["default"] = "<div class=\"row\">\n\n    <!-- <div class=\"col-xl-4 col-12\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 collection-filter\">\n               \n                <div class=\"collection-filter-block\">\n                  \n                    <div class=\"collection-mobile-back\"><span class=\"filter-back\"><i aria-hidden=\"true\"\n                                class=\"fa fa-angle-left\"></i> back</span>\n                    </div>\n                    <div class=\"collection-collapse-block open\">\n                        <h3 class=\"collapse-block-title\">Services</h3>\n                        <div class=\"collection-collapse-block-content\">\n                            <div class=\"collection-brand-filter\">\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\" *ngFor=\"let item of utilityService.ServicesTypes; let i = index\">\n                                    <input class=\"custom-control-input\" id=\"{{item.value}}\" type=\"radio\">\n                                    <label class=\"custom-control-label\" for=\"{{item.value}}\">{{item.name}}</label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                   \n                    <div class=\"collection-collapse-block open\">\n                        <h3 class=\"collapse-block-title\">Type</h3>\n                        <div class=\"collection-collapse-block-content\">\n                            <div class=\"collection-brand-filter\">\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\n                                    <input class=\"custom-control-input\" id=\"zara\" type=\"checkbox\">\n                                    <label class=\"custom-control-label\" for=\"zara\">Instant</label>\n                                </div>\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\n                                    <input class=\"custom-control-input\" id=\"vera-moda\" type=\"checkbox\">\n                                    <label class=\"custom-control-label\" for=\"vera-moda\">Scheduled</label>\n                                </div>\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\n                                    <input class=\"custom-control-input\" id=\"forever-21\" type=\"checkbox\">\n                                    <label class=\"custom-control-label\" for=\"forever-21\">All</label>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n              \n                    <div class=\"collection-collapse-block border-0 open\">\n                        <h3 class=\"collapse-block-title\">price</h3>\n                        <div class=\"collection-collapse-block-content\">\n                            <div class=\"collection-brand-filter\">\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\n                                    <input class=\"custom-control-input\" id=\"hundred\" type=\"checkbox\">\n                                    <label class=\"custom-control-label\" for=\"hundred\">$10 - $100</label>\n                                </div>\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\n                                    <input class=\"custom-control-input\" id=\"twohundred\" type=\"checkbox\">\n                                    <label class=\"custom-control-label\" for=\"twohundred\">$100 - $200</label>\n                                </div>\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\n                                    <input class=\"custom-control-input\" id=\"threehundred\" type=\"checkbox\">\n                                    <label class=\"custom-control-label\" for=\"threehundred\">$200 - $300</label>\n                                </div>\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\n                                    <input class=\"custom-control-input\" id=\"fourhundred\" type=\"checkbox\">\n                                    <label class=\"custom-control-label\" for=\"fourhundred\">$300 - $400</label>\n                                </div>\n                                <div class=\"custom-control custom-checkbox collection-filter-checkbox\">\n                                    <input class=\"custom-control-input\" id=\"fourhundredabove\" type=\"checkbox\">\n                                    <label class=\"custom-control-label\" for=\"fourhundredabove\">$400 above</label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n\n        </div>\n\n    </div> -->\n\n    <div class=\"col-xl-12 col-12\">\n        <div class=\"row mb-3\">\n            <div class=\"col-xl-12 col-12\">\n                <form class=\"bg-pink border p-4 shadow-sm\" [formGroup]=\"browseSessionForm\">\n                    <div class=\"form-row\">\n                        <div class=\"col-xl-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-12\">\n\n                                    <div class=\"input-group\">\n                                        <input formControlName=\"generaldata4search\" type=\"text\" class=\"form-control\" placeholder=\"Find Sessions\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-secondary\" data-toggle=\"collapse\" data-target=\"#filter-menus\"><i class=\"icon-filter\"></i></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row collapse\" id=\"filter-menus\">\n                                <div class=\"col-xl-6 mt-2\">\n                                    <select formControlName=\"services4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\n                                        <option value=\"\" selected i18n>Service Type</option>\n                                        <option *ngFor=\"let item of ParentServicesTypes\"\n                                            [ngValue]=\"item._id\">\n                                            {{item.name}}</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-6 mt-2\">\n                                    <select formControlName=\"location4search\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\n                                        <option value=\"\" selected i18n>Choose Location</option>\n                                        <option *ngFor=\"let location of countrylist\" [ngValue]=\"location\">\n                                            {{location}}</option>\n                                    </select>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"col-xl-2\">\n                            <button class=\"btn btn-outline-primary btn-block h-100 mt-md-0 mt-2\" (click)=\"sessionSearchByService()\" i18n>\n                                <i class=\"icon-search\"></i> SEARCH\n                            </button>\n                        </div>\n\n                    </div>\n\n                </form>\n            </div>\n        </div>\n        <section class=\"agency blog blog-sec blog-sidebar sider p-0\">\n\n            <div class=\"h6 mb-3\" i18n>\n\n                SESSION RESULT\n                <!--\n                <div class=\"btn-group btn-group-toggle btn-group-sm float-right\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-secondary active\">\n                        <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> USA\n                    </label>\n                    <label class=\"btn btn-secondary\">\n                        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Worldwide\n                    </label>\n            </div>\n        -->\n                <!-- <span class=\"float-right custom-switch floar-right\">\n\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\">\n                    <label class=\"custom-control-label\" for=\"customSwitch1\">USA</label>\n                </span> -->\n            </div>\n            <cdk-virtual-scroll-viewport itemSize=\"50\" class=\"ngfor-viewport\">\n                <div  *cdkVirtualFor=\"let session of allSessionsData\" class=\"ngfor-item card shadow-sm mb-4\">\n                    <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\n                        {{session.sessionSubject}}\n                    </div>\n                    <div class=\"card-body px-md-3 px-1 small\">\n                         <div class=\"row\">               \n                        <div class=\"col-xl-12 col-12\">\n                            <p class=\"para2\" [class.show_more]=\"!session._id\">\n                                {{session.loanDescription}}\n                            </p>\n                        </div>          \n                        <div class=\"col-xl-6 col-6 border-right mb-2\">\n                            <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{session.loanStartDateTime | date:'MMM d, h:mm a'}}\n                        </div>\n                       \n                        <div class=\"col-xl-6 col-6\">\n                            <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\n                            \n                            {{session.location}}\n                        </div>\n                      \n                    </div>\n                    </div>\n                    <div class=\"card-footer bg-white\">\n                        <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{session.sessionType}}</span>\n                        <a *ngIf=\"!check4applyToSession(session)\" class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"applyToSession(session)\" i18n>Apply</a>\n\n                        <a *ngIf=\"check4applyToSession(session)\" class=\"btn btn-primary text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(session)\" i18n> Details</a>\n\n                    </div>\n                </div>\n                \n             \n                <div *ngIf=\"!allSessionsData\">\n                    <div class=\"content_loader\"></div>\n                    <div class=\"content_loader\"></div>\n                </div>\n            </cdk-virtual-scroll-viewport>\n            \n\n           \n        </section>\n    </div>\n\n</div>";
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


      __webpack_exports__["default"] = "footer {\n    padding: 0px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgcGFkZGluZzogMHB4IDA7XG59Il19 */";
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


      __webpack_exports__["default"] = "<!-- <section class=\"agency blog blog-sec blog-sidebar sider p-0 mt-4\">\n    <div class=\"card shadow-sm mb-4\" *ngFor=\"let LoanMarket of allLoanMarketData\">\n        <div class=\"bg-white blog-title card-header mb-0 text-capitalize\">\n            {{LoanMarket.LoanMarketubject}}\n        </div>\n        <div class=\"card-body px-md-3 px-1 small\">\n             <div class=\"row\">               \n            <div class=\"col-xl-12 col-12\">\n                <p class=\"para2\" [class.show_more]=\"!LoanMarket._id\">\n                    {{LoanMarket.loanAmount}}\n                </p>\n            </div>          \n            <div class=\"col-xl-6 col-6 border-right mb-2\">\n                <i aria-hidden=\"true\" class=\"icon-timer mr-2\"></i> {{LoanMarket.loanStartDateTime | date:'MMM d, h:mm a'}}\n            </div>\n            <div class=\"col-xl-6 col-6\">\n                <i aria-hidden=\"true\" class=\"icon-location-pin m-r-10\"></i>\n                {{LoanMarket.location}}\n            </div>\n          \n        </div>\n        </div>\n        <div class=\"card-footer bg-white\">\n            <span class=\"badge badge-success font-weight-normal text-capitalize btn float-left\" >{{LoanMarket.LoanMarketType}}</span>\n          \n            <a class=\"btn btn-primary text-capitalize  btn-sm float-right text-white\" (click)=\"showAppliedToLoanMarket(LoanMarket)\">Details</a>\n        </div>\n    </div>\n\n\n    <div class=\"mt-5 text-center blog-agency no-item\">\n        <img src=\"assets/img/noresult.png\">\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\n    </div>\n</section> -->\n\n\n<div class=\"row\">\n    <div class=\"col-xl-12 col-12 align-items-stretch\">\n        <button i18n *ngIf=\"this.searchFilterObj\" class=\"btn btn-xs btn-danger float-right mb-3 mt-n2 ml-2\" (click)=\"cleanSearchFilter()\">\n            <i class=\"icon icon-trash\"></i> Reset\n        </button>\n        <button i18n class=\"btn btn-xs btn-success float-right mb-3 mt-n2\"  (click)=\"showSearchPanel()\"> \n            <i class=\"icon icon-filter\"></i> Filter\n        </button>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xl-4 col-12 d-flex align-items-stretch mb-4\"\n        *ngFor=\"let LoanMarket of allLoanMarketData | sortArrayByUpdatedOn:'loanStartDateTime':true\">\n       \n        <div class=\"clash-card wizard w-100\">\n            <div class=\"product-image\" *ngIf=\"(!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)) || (returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket))\">\n                <span class=\"onsale-section\" *ngIf=\"returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\"><span class=\"onsale\" i18n>Contract Signed</span></span>\n\n                <span class=\"onsale-section\"  *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\"><span class=\"onsale\" i18n>Cancelled</span></span>\n              </div>\n\n             \n\n\n            <div class=\"clash-card__level clash-card__level--wizard mt-3\">\n                <!--{{(LoanMarket.createdByUserObj.userType || \"\").replace(\"_\", \" \")}}-->\n                {{authenticationService.returnUserTypeForUserFromSuppliedUserLevel(LoanMarket.createdByUserObj.userType)}}\n            </div>\n            <div class=\"clash-card__unit-name text-capitalize\">{{(LoanMarket.loanType || \"\").replace(\"_\", \" \")}}</div>\n            <div class=\"clash-card__unit-description\">\n                <div class=\"row\">\n                    <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"Created By\">\n                        <div (click)=\"usersProfile(LoanMarket.createdByUserObj)\">\n                            <!--<i class=\"icon icon-user\"></i>-->\n                            <span\n                                class=\"flag-icon flag-icon-{{utilityService.returnCountryCodeFromName(LoanMarket.createdByUserObj.country)}} flag-icon-squared\"></span>\n                        </div>\n                        <div class=\"text-black-50 small\">\n                            {{LoanMarket.createdByUserObj.firstName}}\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-4 border-right\" data-toggle=\"tooltip\" title=\"Max Applicants\">\n                        <div>\n                            <i class=\"icon icon-check-box\"></i>\n                        </div>\n                        <div class=\"text-black-50 small\">\n                            {{ _.keys(LoanMarket.sessionAppliedByBorrowers).length || 0}}/{{LoanMarket.loanMaxBorrower}}\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-4 \" data-toggle=\"tooltip\" title=\"Created On\">\n                        <div>\n                            <i class=\"icon icon-time\"></i>\n                        </div>\n                        <div class=\"text-black-50 small\">\n                            {{LoanMarket.loanStartDateTime | date:'MMM d, yy'}}\n                        </div>\n                    </div>\n                    <div class=\"col-xl-12 col-12 mt-2\">\n                        <div class=\"text-black-50 small mb-1\" i18n>\n                            Payment Methods\n                        </div>\n\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('bank')>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                            BANK\n                        </span>\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('cash')>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                            Cash\n                        </span>\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('revolut')>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                            Revolut\n                        </span>\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('paypal')>-1\"\n                            class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                            Paypal\n                        </span>\n                        <span *ngIf=\"LoanMarket.loanRepaymentType.indexOf('skrill')>-1\"\n                            class=\"badge font-weight-light text-uppercase badge-success\" i18n>\n                            Skrill\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <button\n                *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && !utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\"\n                class=\"btn btn-success btn-sm mb-2\" (click)=\"navigate2LoanProccess(LoanMarket._id)\" i18n>\n                Borrow Now\n            </button>\n            <button\n                *ngIf=\"!returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket) && utilityService.returnTIfSuppliedDateIsNotFromCurrentMonth(LoanMarket.loanStartDateTime)\" i18n\n                class=\"btn btn-danger btn-sm mb-2\" disabled>\n                Cancelled\n            </button>\n            <button *ngIf=\"returnT4DisableLoanBorrowOrLendIfAlreadyAccepted(LoanMarket)\"\n                class=\"btn btn-primary btn-sm mb-2\" i18n><i class=\"icon icon-check-box\"></i>\n                Contract Signed\n            </button>\n\n            <div class=\"clash-card__unit-stats clash-card__unit-stats--wizard clearfix\">\n                <div class=\"one-third\">\n                    <div class=\"stat\">{{LoanMarket.loanAmount}}</div>\n                    <div class=\"stat-value\" i18n>Amount</div>\n                </div>\n\n                <div class=\"one-third\">\n                    <div class=\"stat\">\n                        {{utilityService.returnRoundedNumber(LoanMarket.calculatedMonthlyAmountForEMI*LoanMarket.loanTenureInMonths)}}\n                    </div>\n                    <div class=\"stat-value\" i18n>Refund</div>\n                </div>\n\n                <div class=\"one-third no-border\">\n                    <div class=\"stat\">{{LoanMarket.loanTenureInMonths}} <sub\n                            class=\"month\">{{LoanMarket.loanTenureInMonths>1?'Months':'Month'}}</sub></div>\n                    <div class=\"stat-value\" i18n>Duration</div>\n                </div>\n\n            </div>\n\n        </div>\n        <!-- end clash-card goblin-->\n\n\n    </div>\n    <!-- <div class=\"mt-5 text-center blog-agency no-item\">\n        <img src=\"assets/img/noresult.png\">\n        <h2 class=\"mt-4 font-weight-normal\">No Data Found</h2>\n    </div> -->\n</div>";
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


      __webpack_exports__["default"] = ".ngfor-viewport {\n    height: 80vh;\n \n  }\n  \n\n  \n\n  @media (max-width: 767.98px) { \n    .ngfor-item {\n      max-height: 290px;\n      margin-bottom: 15px;\n    }\n    a.btn.btn-apply-session{\n      width: 100%;\n      margin-top: 11px;\n    }\n    p.para2{\n      overflow: hidden;\n      text-overflow: ellipsis; \n    }\n  }\n  \n\n  \n\n  @media (min-width: 767.98px) {\n    .ngfor-item {\n      max-height: 200px;\n      margin-bottom: 20px !important;\n    }\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZS1zZXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTs7RUFFZDs7Ozs7RUFLQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsV0FBVztNQUNYLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLHVCQUF1QjtJQUN6QjtFQUNGOzs7OztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsOEJBQThCO0lBQ2hDO0dBQ0QiLCJmaWxlIjoiYnJvd3NlLXNlc3Npb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmdmb3Itdmlld3BvcnQge1xuICAgIGhlaWdodDogODB2aDtcbiBcbiAgfVxuICBcblxuICBcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHsgXG4gICAgLm5nZm9yLWl0ZW0ge1xuICAgICAgbWF4LWhlaWdodDogMjkwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICBhLmJ0bi5idG4tYXBwbHktc2Vzc2lvbntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICB9XG4gICAgcC5wYXJhMntcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLm5nZm9yLWl0ZW0ge1xuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgfSJdfQ== */";
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


      __webpack_exports__["default"] = "<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion navbar_side_panel\" id=\"accordionSidebar\">\n\n    <!-- Sidebar - Brand -->\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\">\n        <img class=\"img-fluid\" src=\"./assets/img/avitii-logo.png\">\n    </a>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\">\n    <!-- <div class=\"d-inline text-white text-center mt-2\">\n        <a class=\"mr-1 small text-white\" href=\"/en\">English</a> |\n        <a href=\"/da\" class=\"ml-1 small text-white\">Dansk</a>\n    </div> -->\n    <!-- Nav Item - Dashboard -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\">\n            {{currentUser.firstName}} \n            <span class=\"badge badge-success float-right font-weight-lighter text-capitalize\" [textContent]=\"currentUser.role\" i18n> Borrower</span>\n         </a>\n    </li>\n    \n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <!-- <div class=\"sidebar-heading\">\n        Interface\n    </div> -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/borrower\">\n            <i class=\"icon icon-home\"></i>\n            <span i18n>Dashboard</span></a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/borrower/loan-market\" routerLinkActive=\"active\">\n            <i class=\"icon icon-shopping-cart\"></i>\n            <span i18n>Loan Market</span></a>\n    </li>\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\"\n        (click)=\"showAlert()\"\n       \n        routerLinkActive=\"active\">\n            <i class=\"icon icon-money\"></i>\n            <span i18n>Get a Loan</span></a>\n    </li>\n     <!-- routerLink=\"/borrower/make-a-loan\"  -->\n     \n    <!-- Nav Item - Pages Collapse Menu -->\n    <!-- <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n            <i class=\"icon icon-bag\"></i>\n            <span>My Contracts</span>\n        </a>\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n            \n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">My Offers</a>\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">Paid Contracts</a>\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">Unpaid Contracts</a>\n                <a class=\"collapse-item\" (click)=\"navigate2State('/borrower/my-contract')\" routerLinkActive=\"active\">Inkasso cases</a>\n           \n            </div>\n        </div>\n    </li> -->\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/borrower/my-contract\" routerLinkActive=\"active\">\n            <i class=\"icon icon-bag\"></i>\n            <span i18n>My Contracts</span></a>\n    </li>\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"/borrower/messages\" routerLinkActive=\"active\">\n            <i class=\"icon icon-comments\"></i>\n            <span i18n>Messages</span>\n            <span *ngIf=\"messagesService.returnTotalPendingMessagesForUser()>0\" class=\"badge badge-light float-right font-weight-lighter text-capitalize\" i18n> {{messagesService.returnTotalPendingMessagesForUser()}}</span>\n        </a>\n    </li>\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"/borrower/calendar\" routerLinkActive=\"active\">\n            <i class=\"icon icon-calendar\"></i>\n            <span i18n>Calendar</span></a>\n    </li>\n\n    <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/borrower/ratings\" routerLinkActive=\"active\">\n            <i class=\"icon icon-star\"></i>\n            <span>My Ratings</span></a>\n    </li> -->\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <!-- <div class=\"sidebar-heading\">\n        Addons\n    </div> -->\n\n    <!-- Nav Item - Pages Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" data-toggle=\"collapse\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\n            <i class=\"icon icon-settings\"></i>\n            <span i18n>Settings</span>\n        </a>\n        <div id=\"collapsePages\" class=\"collapse show\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n            \n                <a class=\"collapse-item\" routerLink=\"/borrower/profile\" routerLinkActive=\"active\" i18n>My Profile</a>\n                <a class=\"collapse-item\" routerLink=\"/borrower/update-password\" routerLinkActive=\"active\" i18n>Change Password</a>\n                <a class=\"collapse-item\" routerLink=\"/borrower/bank-details\" routerLinkActive=\"active\" i18n>Bank Details</a>\n                <a class=\"collapse-item\" routerLink=\"/borrower/income-proof\" routerLinkActive=\"active\" i18n>Income Proof</a>\n                <a class=\"collapse-item\" routerLink=\"/borrower/my-subscriptions\" routerLinkActive=\"active\" i18n>My Subscriptions</a>\n               \n            </div>\n        </div>\n    </li>\n\n \n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/logout\">\n            <i class=\"icon icon-flickr-alt\"></i>\n            <span i18n>Logout</span></a>\n    </li>\n\n    <!-- Divider -->\n    <!-- <hr class=\"sidebar-divider d-none d-md-block\">\n\n\n    <div class=\"text-center d-none d-md-inline\">\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n    </div> -->\n\n\n</ul>\n\n\n";
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


      __webpack_exports__["default"] = "<form [formGroup]=\"borrowNowForm\" class=\"theme-form\">\n    <!-- addSession section -->\n    <div class=\"row\" *ngIf=\"!userClickedOnSignLoanContract\">\n        <div class=\"col-xl-3 col-12\">\n            <div class=\"card border-left-primary shadow py-2 mb-3\">\n                <div class=\"card-body\">\n                    <div class=\"row no-gutters align-items-center\">\n                        <div class=\"col mr-2\">\n                            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                                EMI (Monthly)\n                            </div>\n                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\" >\n                                kr {{LoanObj.calculatedMonthlyAmountForEMI}}\n                            </div>\n                        </div>\n                        <div class=\"col-auto\">\n                            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card border-left-primary shadow py-2 mb-3\">\n                <div class=\"card-body\">\n                    <div class=\"row no-gutters align-items-center\">\n                        <div class=\"col mr-2\">\n                            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                                Loan Amount\n                            </div>\n                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                                kr {{LoanObj.loanAmount}}\n                            </div>\n                        </div>\n                        <div class=\"col-auto\">\n                            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card border-left-primary shadow py-2 mb-3\">\n                <div class=\"card-body\">\n                    <div class=\"row no-gutters align-items-center\">\n                        <div class=\"col mr-2\">\n                            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\" i18n>\n                                Total Loan\n                            </div>\n                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\" i18n>\n                                kr\n                                {{utilityService.returnRoundedNumber(LoanObj.calculatedMonthlyAmountForEMI*LoanObj.loanTenureInMonths)}}\n                            </div>\n                        </div>\n                        <div class=\"col-auto\">\n                            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-9 col-12\">\n            <div class=\"card shadow mb-4\">\n                <!-- Card Header - Dropdown -->\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                    <span class=\"float-left\">\n                        <h5 class=\"m-0 font-weight-bold text-primary\" i18n>{{headerMessage2show}}</h5>\n                    </span>\n                    <span>\n                        <div (click)=\"usersProfile(LoanObj.createdByUserObj)\">\n                            <i class=\"icon icon-user\"></i>\n                        </div>\n                    </span>\n                </div>\n                <!-- Card Body -->\n                <div class=\"card-body\">\n                    <div class=\"theme-form\">\n                        <div class=\"row\">\n                            <div class=\"col-xl-4 col-12 border-right\">\n                                <div class=\"form-group\">\n                                    <label for=\"loanType\" i18n>Loan Type</label>\n                                    <h4 class=\"text-primary\" >\n                                        {{utilityService.returnLoanType(LoanObj.loanType)}}\n                                    </h4>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-4 col-12 border-right\">\n                                <div class=\"form-group \">\n                                    <label for=\"loanAmount\" i18n>Loan Amount</label>\n                                    <h4 class=\"text-primary\">\n                                        {{LoanObj.loanAmount}}\n                                    </h4>\n                                </div>\n                                <div class=\"form-group bg-light2 p-2\">\n                                    <label for=\"proposedLoanAmount\" i18n>\n                                        Propose a new loan amount <sub>(Optional) & amount must be hight than kr\n                                            {{LoanObj.loanAmount}}</sub></label>\n                                    <input type=\"number\" formControlName=\"proposedLoanAmount\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.proposedLoanAmount.errors }\"\n                                        placeholder=\"Enter New Amount\" />\n                                    <div *ngIf=\"submitted && f.proposedLoanAmount.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.proposedLoanAmount.errors.required\" i18n>\n                                            Proposed Loan Amount is required\n                                        </div>\n                                        <div *ngIf=\"f.proposedLoanAmount.min.required\" i18n>\n                                            amount must be hight than kr {{LoanObj.loanAmount}}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-4 col-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"loanTenureInMonths\" i18n>Tenure in Months</label>\n                                    <h4 class=\"text-primary\">\n                                        {{LoanObj.loanTenureInMonths}}\n                                    </h4>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-4 col-12 border-right\">\n                                <div class=\"form-group \">\n                                    <label for=\"loanInterestRate\" i18n>Interest(%) Rate (per month)</label>\n                                    <h4 class=\"text-primary\">\n                                        {{LoanObj.loanInterestRate}}\n                                    </h4>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-4 col-12 border-right\">\n                                <div class=\"form-group \">\n                                    <label for=\"loanStartDateTime\" i18n>Start Date</label>\n                                    <h4 class=\"text-primary\" >\n                                        {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\n                                    </h4>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-4 col-12\">\n                                <div class=\"form-group\">\n                                    <p class=\"mb-2\" i18n>How to give the money</p>\n\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                                        BANK\n                                    </span>\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                                        Cash\n                                    </span>\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                                        Revolut\n                                    </span>\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                                        Paypal\n                                    </span>\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase badge-success\" i18n>\n                                        Skrill\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-12\">\n                                <p class=\"mb-2\" i18n>Description:</p>\n                                <div class=\"text-black-50\" i18n>\n                                    {{LoanObj.loanDescription}}\n                                </div>\n                            </div>\n                            <!-- <div class=\"col-xl-12\">\n                            <div class=\"form-group\">\n                                <label for=\"proposedLoanAmount\" i18n>\n                                    Propose a new loan amount <sub>(Optional) & amount must be hight than kr {{LoanObj.loanAmount}}</sub></label>\n                                <input type=\"number\" formControlName=\"proposedLoanAmount\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.proposedLoanAmount.errors }\" />\n                                <div *ngIf=\"submitted && f.proposedLoanAmount.errors\"\n                                    class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.proposedLoanAmount.errors.required\" i18n>\n                                        Proposed Loan Amount is required\n                                    </div>\n                                    <div *ngIf=\"f.proposedLoanAmount.min.required\" i18n>\n                                        amount must be hight than kr {{LoanObj.loanAmount}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n                            <div class=\"col-xl-12 col-12 mt-3\">\n                                <div class=\"table-responsive table-billing-history\">\n                                    <table class=\"table mb-0\">\n                                        <thead>\n                                            <tr>\n                                                <th scope=\"col\" i18n>EMI Date</th>\n                                                <th scope=\"col\" i18n>Payment</th>\n\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr\n                                                *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\n                                                <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\n                                                    | date:'dd-MMM-YYYY'}}</td>\n                                                <td>kr {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\n\n                                            </tr>\n\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <button *ngIf=\"!userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\n                        (click)=\"clickedOnSignLoanContract()\" i18n>\n                        Sign Loan Contract\n                    </button>\n                    <button *ngIf=\"userClickedOnSignLoanContract\" type=\"button\" class=\"btn btn-primary float-right\"\n                        (click)=\"resetClickedOnSignLoanContract()\" i18n>\n                        Cancel\n                    </button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"row\" *ngIf=\"userClickedOnSignLoanContract\">\n\n        <div class=\"col-xl-12 col-12\">\n            <div class=\"card shadow mb-4\">\n                <!-- Card Header - Dropdown -->\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                    <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Loan Contract</h5>\n                </div>\n                <!-- Card Body -->\n                <div class=\"card-body\">\n                    <div class=\"theme-form\">\n                        <div class=\"row mb-3\">\n                            <div class=\"col-xl-12 col-12\" *ngIf=\"lenderUserObj && borrowerUserObj\">\n\n                                <table class=\"table table table-bordered  shadow-sm\">\n                                    <thead>\n                                        <tr>\n                                            <th style=\"width: 20%;\">#</th>\n\n                                            <th style=\"width: 40%;\" i18n>Borrower</th>\n                                            <th style=\"width: 40%;\" i18n>Lender</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\n                                                    NAME</div>\n                                            </td>\n                                            <td>\n                                                <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\n                                                    {{borrowerUserObj.firstName}}&nbsp;{{borrowerUserObj.lastName}}\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <div class=\"mb-0 font-weight-bold text-primary text-uppercase\">\n                                                    {{lenderUserObj.firstName}}&nbsp;{{lenderUserObj.lastName}}\n                                                </div>\n                                            </td>\n                                        </tr>\n\n                                        <tr>\n                                            <td>\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\n                                                    Address</div>\n                                            </td>\n                                            <td>\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\n                                                    {{borrowerUserObj.address}}\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\n                                                    {{lenderUserObj.address}}\n                                                </div>\n                                            </td>\n                                        </tr>\n\n                                        <tr>\n                                            <td>\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\n                                                    Passport Number</div>\n                                            </td>\n                                            <td>\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\n                                                    {{borrowerUserObj.myPassportNumber}}\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\n                                                    {{lenderUserObj.myPassportNumber}}\n                                                </div>\n                                            </td>\n                                        </tr>\n\n                                        <tr>\n                                            <td>\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\n                                                    DL Number</div>\n                                            </td>\n                                            <td>\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\n                                                    {{borrowerUserObj.myDLNumber}}\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <div class=\"mb-0 font-weight-bold text-primary\">\n                                                    {{lenderUserObj.myDLNumber}}\n                                                </div>\n                                            </td>\n                                        </tr>\n\n                                        <tr>\n                                            <td>\n                                                <div class=\"text-black-50 text-uppercase\" i18n>\n                                                    Payment Method</div>\n                                            </td>\n                                            <td>\n                                                <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\">\n                                                    BANK\n\n                                                    <label for=\"borrowerBankName\" i18n>Bank Name</label>\n                                                    <h4 class=\"text-primary\" >\n                                                        {{borrowerUserObj.bankName}}\n                                                    </h4>\n                                                    <label for=\"borrowerRegNumber\" i18n>Reg nr</label>\n                                                    <h4 class=\"text-primary\" >\n                                                        {{borrowerUserObj.regNumber}}\n                                                    </h4>\n                                                    <label for=\"borrowerAccountNumber\" i18n>Account Number</label>\n                                                    <h4 class=\"text-primary\" >\n                                                        {{borrowerUserObj.accountNumber}}\n                                                    </h4>\n                                                    <!--\n                                                <label for=\"borrowerMobilePayment\" i18n>Mobile payment</label>\n                                                <h4 class=\"text-primary\" i18n>\n                                                    {{borrowerUserObj.mobilePayment}}\n                                                </h4>\n                                            -->\n                                                </div>\n                                                <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\" i18n>\n                                                    Cash\n                                                </div>\n                                                <div\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\" i18n>\n\n                                                    Revolut:\n                                                    {{borrowerUserObj.revolutWalletID}}\n                                                </div>\n                                                <div\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\" i18n>\n                                                    Paypal ID: {{borrowerUserObj.paypalWalletID}}\n                                                </div>\n                                                <div\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\" i18n>\n                                                    Skrill: {{borrowerUserObj.skrillWalletID}}\n                                                </div>\n\n\n                                            </td>\n\n                                            <td>\n                                                <div *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\" i18n>\n                                                    BANK\n\n                                                    <div class=\"text-black-50\" >Bank Name</div>\n                                                    <div class=\"font-weight-bold text-primary mb-1\">\n                                                        {{lenderUserObj.bankName}}\n                                                    </div>\n                                                    <div for=\"lenderRegNumber\" >Reg Number</div>\n                                                    <div class=\"font-weight-bold text-primary mb-1\">\n                                                        {{lenderUserObj.regNumber}}\n                                                    </div>\n                                                    <div for=\"lenderAccountNumber\" >Account Number</div>\n                                                    <div class=\"font-weight-bold text-primary mb-1\">\n                                                        {{lenderUserObj.accountNumber}}\n                                                    </div>\n                                                </div>\n                                                <div *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                                                    class=\"badge font-weight-light text-uppercase mr-2 badge-success\">\n                                                    Cash\n                                                </div>\n                                                <div\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\" >\n\n                                                    Revolut:\n                                                    {{lenderUserObj.revolutWalletID}}\n                                                </div>\n                                                <div\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\">\n                                                    Paypal ID: {{lenderUserObj.paypalWalletID}}\n                                                </div>\n                                                <div\n                                                    *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\">\n                                                    Skrill: {{lenderUserObj.skrillWalletID}}\n                                                </div>\n\n\n                                            </td>\n\n                                        </tr>\n\n                                    </tbody>\n                                </table>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row mb-3\">\n                            <div class=\"col-xl-4 col-12 \">\n                                <div class=\"card shadow-sm p-2\">\n                                    <label for=\"loanType\" i18n>Loan Type</label>\n                                    <h4 class=\"text-primary\">\n                                        {{utilityService.returnLoanType(LoanObj.loanType)}}\n                                    </h4>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-4 col-12\">\n                                <div class=\"card shadow-sm p-2\" *ngIf=\"!f.proposedLoanAmount.value\">\n                                    <label for=\"loanAmount\" i18n>Loan Amount</label>\n                                    <h4 class=\"text-primary\">\n                                        {{LoanObj.loanAmount}}\n                                    </h4>\n                                </div>\n                                <div class=\"card shadow-sm p-2\" *ngIf=\"f.proposedLoanAmount.value\">\n                                    <label for=\"loanAmount\" i18n>Loan Amount/Proposed Loan Amount</label>\n                                    <h4 class=\"text-primary\">\n                                        <span\n                                            style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\n                                            {{LoanObj.loanAmount}}\n                                        </span>\n                                        /\n                                        <span>\n                                            {{f.proposedLoanAmount.value}}\n                                        </span>\n                                    </h4>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-4 col-12\">\n                                <div class=\"card shadow-sm p-2\">\n                                    <label i18n>Tenure in Months</label>\n                                    <h4 class=\"text-primary\">\n                                        {{LoanObj.loanTenureInMonths}}\n                                    </h4>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xl-4 col-12\">\n                                <div class=\"card shadow-sm p-2\">\n                                    <label i18n>Interest(%) Rate (per month)</label>\n                                    <h4 class=\"text-primary\">\n                                        {{LoanObj.loanInterestRate}}\n                                    </h4>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-4 col-12\">\n                                <div class=\"card shadow-sm p-2\">\n                                    <label i18n>Start Date</label>\n                                    <h4 class=\"text-primary\">\n                                        {{LoanObj.loanStartDateTime | date:'dd-MMM-YYYY'}}\n                                    </h4>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-4 col-12\">\n                                <div class=\"card shadow-sm p-2\">\n\n                                    <label class=\"mb-3\" i18n>Payment Method</label>\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('bank',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\n                                        BANK\n                                    </span>\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('cash',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\n                                        Cash\n                                    </span>\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('revolut',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\n                                        Revolut\n                                    </span>\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('paypal',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase mr-2 badge-success w-20\">\n                                        Paypal\n                                    </span>\n                                    <span *ngIf=\"utilityService.returnLoanRepaymentType('skrill',LoanObj)>-1\"\n                                        class=\"badge font-weight-light text-uppercase badge-success w-20\">\n                                        Skrill\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-12 mt-3\">\n                                <div class=\"card shadow-sm p-2\">\n                                    <label i18n>Description</label>\n\n                                    <div class=\"text-black-50\">\n                                        {{LoanObj.loanDescription}}\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"col-xl-12 mt-3\" *ngIf=\"f.loanInsuranceRequired.value\">\n                                <div class=\"card shadow-sm p-2\">\n                                    <label i18n>Applied for Insurance with Amount</label>\n                                    <div class=\"text-black-50\">\n                                        {{f.loanInsuranceAmount.value}}\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-xl-12 col-12 mt-3\">\n                                <div class=\"table-responsive table shadow-sm\">\n                                    <table class=\"table mb-0\">\n                                        <thead>\n                                            <tr>\n                                                <th scope=\"col\" i18n>EMI Date</th>\n                                                <th scope=\"col\" i18n>Payment</th>\n\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr\n                                                *ngFor=\"let in of utilityService.counter(LoanObj.loanTenureInMonths) ;let i = index\">\n                                                <td>{{utilityService.returnDateWithAddingMonths(LoanObj.loanStartDateTime,i+1)\n                                                    | date:'dd-MMM-YYYY'}}</td>\n                                                <td *ngIf=\"(!f.calculatedMonthlyAmountForEMI.value) || (f.calculatedMonthlyAmountForEMI.value ==LoanObj.calculatedMonthlyAmountForEMI)\">kr\n                                                    {{LoanObj.calculatedMonthlyAmountForEMI}}</td>\n                                                <td *ngIf=\"(f.calculatedMonthlyAmountForEMI.value) && (f.calculatedMonthlyAmountForEMI.value !=LoanObj.calculatedMonthlyAmountForEMI)\">kr\n                                                    <span\n                                                        style=\"-webkit-text-decoration-line: line-through;text-decoration-line: line-through;\">\n                                                        {{LoanObj.calculatedMonthlyAmountForEMI}}\n                                                    </span>\n                                                    &nbsp;\n                                                    <span>\n                                                        {{f.calculatedMonthlyAmountForEMI.value}}\n                                                    </span>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"card shadow mb-4\">\n\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                    <h5 class=\"m-0 font-weight-bold text-primary\" i18n>Terms & Conditions</h5>\n                </div>\n\n                <div class=\"card-body\">\n                    <ol class=\"terms ml-n4\">\n                        <li>\n                            <div class=\"font-weight-bold\" i18n>Scope</div>\n                            <div i18n>\n                                These loan terms apply to all loan agreements entered into between the borrower and the\n                                lender\n                                through the Avitii Lending System. Avitii Lending System acts solely as a dissemination\n                                platform\n                                and cannot be held liable of any kind, either by the lender or the borrower.\n                                By signing the loan agreement, you have accepted these loan terms, which deal with you\n                                and the\n                                borrower. You are at all times subject to the terms of use of the Avitii Lending System.\n                                Deviations from the loan terms must be agreed in writing, and in the event of a\n                                discrepancy\n                                between the loan terms and your agreement, the loan agreement will take precedence.\n                                Avitii Lending System does not provide financial advice when concluding the credit\n                                agreement and\n                                therefore does not assume any responsibility in connection with this.\n                                Both the borrower and the lender confirm compliance with the country's applicable laws\n                                and\n                                regulations for private loans between private individuals.\n                                Borrower as well as lender, provides using Avitii Lending System\n                                consent to information including, loan history as well as profile data,\n                                address, photo id, social media shared and registered at Credit-List.net\n                            </div>\n\n                        </li>\n                        <li>\n                            <div class=\"font-weight-bold\" i18n>Acceptance deadline</div>\n                            <div i18n>\n                                Loan offers offered on the Avitii Lending System must be considered as an open offer,\n                                for any\n                                borrower profile on the website. It is the individual private loan provider who, based\n                                on the\n                                borrower's information, makes the final decision on the loan implementation.\n                                Loan offers are considered as P2P loans, where any acceptance of loan offers is binding\n                                on the\n                                borrower. The lender as well as the borrower can stay updated at any time with the terms\n                                of\n                                agreements on the Avitii Lending Systems website.\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"font-weight-bold\" i18n>Prerequisites</div>\n                            <div i18n>\n                                Credit rating: As a borrower, you declare in good faith that your information entered at\n                                all\n                                times is correct, that at the time of entering into the loan you have not been declared\n                                unfit to\n                                take care of yourself or your finances. At the same time, you declare not to be under\n                                compulsory\n                                dissolution, debt restructuring, or otherwise declared insolvent.\n                                Money laundering: Avitii Lending System is a dissemination platform, and is therefore\n                                out of\n                                responsibility. Private lender enters into loan agreement with private borrowers. As a\n                                borrower\n                                on the website, you must in principle always provide private information on an ongoing\n                                basis, at\n                                the request of Avittii Lending Systems. If you do not provide the necessary correct\n                                information,\n                                the Avitii Lending System may exclude you from using the Website.\n                            </div>\n\n                        </li>\n                        <li>\n                            <div class=\"font-weight-bold\" i18n>Loan terms</div>\n                            The borrower must at all times be aware that he or she has the finances to take out offered\n                            loans. In addition to the principal, the opportunity to bear interest expenses, fees and\n                            other\n                            expenses in connection with redemption.\n\n                            <div i18n>The borrower must at all times confirm their creditworthiness, as well as they are\n                                not\n                                over-mortgaged for the applicable period. The borrower must at all times comply with the\n                                applicable rules for repayment. In the event of late payment or otherwise default, it is\n                                up\n                                to the lender to impose additional expenses. The borrower confirms that he or she is\n                                solely\n                                responsible for finding a solution to repay the loan / debt.</div>\n                            <div i18n>\n                                The borrower confirms with this agreement that he agrees that the lender can at any time\n                                transfer the loan to a third party for recovery.\n                            </div>\n                            <div i18n>\n                                Receipt for repayment or remission must be notified in writing by endorsement on this\n                                loan\n                                document.\n                            </div>\n\n                            <div i18n>\n                                In the event of late payment, 5 days from the payment date are generally given to find a\n                                solution yourself. In case the borrower fails to comply with the repayment within the 5\n                                days, the lender is entitled to impose a 65% fee on the amount lent, valid from the date\n                                of\n                                payment. After another 5 days, the debt will be transferred to recovery.\n                            </div>\n\n                        </li>\n                        <li>\n                            <div class=\"font-weight-bold\" i18n>Fraud</div>\n                            <div i18n>\n                                Borrowers who take out loans fraudulently, or in some other way by giving incorrect\n                                information\n                                and thus force themselves on loans that they are unable to repay or should have\n                                foreseen, not\n                                being able to repay will be considered fraud.\n                                279 CRIMINAL ACT Fraud For fraud, a person is punished who, in order to obtain gain or\n                                other\n                                unjustified gain, by unlawfully causing, corroborating or exploiting an error,\n                                determines\n                                another for an act or omission, whereby the person or person for whom the act is\n                                inflicted or\n                                the omission becomes decisive, a loss of property.\n                            </div>\n\n                        </li>\n\n\n                    </ol>\n                    <hr>\n                    <h5>E-Signature</h5>\n                    <hr>\n\n                    <div class=\"row\">\n                        <div class=\"col-xl-6 col-12 d-none\">\n                            <div class=\"form-group\">\n                                <label for=\"eSignatureBorrowersName\" i18n>Name</label>\n                                <input type=\"text\" formControlName=\"eSignatureBorrowersName\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureBorrowersName.errors }\" />\n                                <div *ngIf=\"submitted && f.eSignatureBorrowersName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.eSignatureBorrowersName.errors.required\" i18n>Name is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6 col-12 d-none\">\n                            <div class=\"form-group\">\n                                <label for=\"eSignatureBorrowersPassportNumber\" i18n>Passport or Driving Licence\n                                    Number</label>\n                                <input type=\"text\" formControlName=\"eSignatureBorrowersPassportNumber\"\n                                    class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.eSignatureBorrowersPassportNumber.errors }\" />\n                                <div *ngIf=\"submitted && f.eSignatureBorrowersPassportNumber.errors\"\n                                    class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.eSignatureBorrowersPassportNumber.errors.required\" i18n>Passport or\n                                        Driving\n                                        Licence Number is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6 col-12\">\n                            <div class=\"form-check-inline\">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input name=\"loanAgreementCondition\" id=\"loanAgreementCondition\" type=\"checkbox\"\n                                        class=\"custom-control-input\" [value]=\"true\"\n                                        (change)=\"clicked2LoanAgreementCondition($event)\"\n                                        [checked]=\"f.loanAgreementCondition.value\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.loanAgreementCondition.errors }\">\n                                    <label for=\"loanAgreementCondition\" class=\"custom-control-label\">\n                                        Agree to the above terms & conditions for Loan Agreement.\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"card-footer\">\n\n                    <button type=\"button\" class=\"btn btn-success float-right\"\n                        (click)=\"clickedOnVerifiedSignLoanContract()\" i18n>\n                        SUBMIT\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n<!-- addSession section -->";
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


      __webpack_exports__["default"] = "<p>room works!</p>\n";
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