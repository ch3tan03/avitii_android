(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/cheta/Documents/cordova/avitii_android/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0MYx":
    /*!********************************************************!*\
      !*** ./src/app/home/blog-view/blog-view.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function MYx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLXZpZXcuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
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
      "yxfS");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "sx49");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, authenticationService) {
          var _this = this;

          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.authenticationService.currentUser.subscribe(function (x) {
            return _this.currentUser = x;
          });
        }

        _createClass(HeaderComponent, [{
          key: "navigate2State",
          value: function navigate2State(state) {
            state = state ? state : '/logout';
            this.router.navigate([state]);
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
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])], HeaderComponent);
      /***/
    },

    /***/
    "2hxB":
    /*!********************************!*\
      !*** ./src/app/models/user.ts ***!
      \********************************/

    /*! exports provided: User, Session */

    /***/
    function hxB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Session", function () {
        return Session;
      });
      /* harmony import */


      var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./role */
      "z56L");

      var User = function User() {
        _classCallCheck(this, User);

        this.app_doc_type = _role__WEBPACK_IMPORTED_MODULE_0__["AppDocumentType"].user_profile;
      };

      var Session = function Session() {
        _classCallCheck(this, Session);
      };
      /***/

    },

    /***/
    "3LUQ":
    /*!*******************************************!*\
      !*** ./src/app/services/alert.service.ts ***!
      \*******************************************/

    /*! exports provided: AlertService */

    /***/
    function LUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); // import {MatSnackBar} from '@angular/material/snack-bar';


      var AlertService = /*#__PURE__*/function () {
        function AlertService(router) {
          var _this2 = this;

          _classCallCheck(this, AlertService);

          this.router = router;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.keepAfterNavigationChange = false; // clear alert message on route change

          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              if (_this2.keepAfterNavigationChange) {
                // only keep for a single location change
                _this2.keepAfterNavigationChange = false;
              } else {
                // clear alert
                _this2.subject.next();
              }
            }
          });
        }

        _createClass(AlertService, [{
          key: "success",
          value: function success(message) {
            var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            //     this._snackBar.open(message, 'X', {
            //       duration: 2000,
            //       panelClass: "text-success"
            //     });          
            // return;
            this.keepAfterNavigationChange = keepAfterNavigationChange;
            this.subject.next({
              type: 'success',
              text: message
            });
          }
        }, {
          key: "error",
          value: function error(message) {
            var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            // this._snackBar.open(message, 'X', {
            //     duration: 4000,
            //     panelClass: "text-danger"
            //   });
            //   return;
            this.keepAfterNavigationChange = keepAfterNavigationChange;
            this.subject.next({
              type: 'error',
              text: message
            });
          }
        }, {
          key: "getMessage",
          value: function getMessage() {
            return this.subject.asObservable();
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AlertService);
      /***/
    },

    /***/
    "A1CT":
    /*!*********************************************!*\
      !*** ./src/app/services/utility.service.ts ***!
      \*********************************************/

    /*! exports provided: UtilityService */

    /***/
    function A1CT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
        return UtilityService;
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


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var country_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! country-list */
      "pHmk");
      /* harmony import */


      var country_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(country_list__WEBPACK_IMPORTED_MODULE_4__);

      Object(country_list__WEBPACK_IMPORTED_MODULE_4__["overwrite"])([{
        code: 'US',
        name: 'USA'
      }]);

      var UtilityService = /*#__PURE__*/function () {
        function UtilityService() {
          _classCallCheck(this, UtilityService);

          this.Countries = ['USA', 'INDIA'];
          this.Locations = ['USA', 'INDIA'];
          this.ParentLoanTypes = {
            "private_loan": {
              "_id": "private_loan",
              "name": "Private Loan"
            },
            "education_loan": {
              "_id": "education_loan",
              "name": "Education Loan"
            },
            "investment_loan": {
              "_id": "investment_loan",
              "name": "Investment Loan"
            },
            "corporate_loan": {
              "_id": "corporate_loan",
              "name": "Corporate Loan"
            }
          };
          this.LoanAmountMaxTypes = {
            "new_lender": {
              "_id": "new_lender",
              "name": "New Lender (maximum loan per user-> 3000)",
              "amount": 3000
            },
            "good_lender": {
              "_id": "good_lender",
              "name": "Good Lender (maximum loan per user-> 5000)",
              "amount": 5000
            },
            "expert_lender": {
              "_id": "expert_lender",
              "name": "Expert Lender (maximum loan per user-> 10000)",
              "amount": 10000
            },
            "super_lender": {
              "_id": "super_lender",
              "name": "Super Lender (maximum loan per user-> 25000)",
              "amount": 25000
            },
            "proff_lender": {
              "_id": "proff_lender",
              "name": "Proff. Lender (maximum loan per user-> 50000)",
              "amount": 50000
            }
          };
          this.LoanBorrowersTypes = {
            "new_borrower": {
              "_id": "new_borrower",
              "name": "New Borrower"
            },
            "risky_borrower": {
              "_id": "risky_borrower",
              "name": "Risky Borrower"
            },
            "between_borrower": {
              "_id": "between_borrower",
              "name": "Between Borrower"
            },
            "good_borrower": {
              "_id": "good_borrower",
              "name": "Good Borrower"
            },
            "super_borrower": {
              "_id": "super_borrower",
              "name": "Super Borrower"
            }
          };
          this.LoanRepaymentTypes = {
            "bank": {
              "_id": "bank",
              "name": "Bank"
            },
            "revolut": {
              "_id": "revolut",
              "name": "Revolut"
            },
            "skrill": {
              "_id": "skrill",
              "name": "Skrill"
            },
            "paypal": {
              "_id": "paypal",
              "name": "Paypal"
            },
            "cash": {
              "_id": "cash",
              "name": "Cash (local only)"
            }
          };
          this.AppPlanTypes = {
            "trial_plan": {
              "_id": "trial_plan",
              "name": "Trial Plan",
              "amount": 0,
              'expiryInMonth': 3
            },
            "paid_plan4lender": {
              "_id": "paid_plan4lender",
              "name": "Paid Plan",
              "amount": 25,
              'expiryInMonth': 1
            },
            "paid_plan4borrower": {
              "_id": "paid_plan4borrower",
              "name": "Paid Plan",
              "amount": 5,
              'expiryInMonth': 1
            }
          };
          this.InsuranceTypes = {
            "20_5000": {
              "_id": "20_5000",
              "name": "20% of amounts lent up to 5000 ddk"
            }
          };
          this._ = lodash__WEBPACK_IMPORTED_MODULE_2__;
          this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
        }

        _createClass(UtilityService, [{
          key: "returnStringWithReplacing_",
          value: function returnStringWithReplacing_(_string) {
            if (_string) {
              return _string.replace(/_/g, ' ');
            }

            return _string;
          }
        }, {
          key: "returnDateWithAddingMonths",
          value: function returnDateWithAddingMonths(date, i) {
            //return moment(date).add(i,"month");
            return moment__WEBPACK_IMPORTED_MODULE_3__(date).add(i, "month").startOf('month');
          }
        }, {
          key: "returnEpochDateWithAddingMonths",
          value: function returnEpochDateWithAddingMonths(date, i) {
            //return moment(date).add(i,"month");
            var epochDate = null;
            epochDate = moment__WEBPACK_IMPORTED_MODULE_3__(date).add(i, "month").valueOf();
            return epochDate;
          }
        }, {
          key: "counter",
          value: function counter(i) {
            return new Array(i);
          }
        }, {
          key: "createString",
          value: function createString(letter, length) {
            var word = '';
            letter = letter ? letter : '';

            for (var i = 0; i < length; i++) {
              word = word + '*';
            }

            return word;
          }
        }, {
          key: "returnTIfNowIsInBetweenSupplied",
          value: function returnTIfNowIsInBetweenSupplied(_now1, _now2) {
            var _calculated_now1 = moment__WEBPACK_IMPORTED_MODULE_3__(_now1).add(-30, 'minute');

            var _calculated_now2 = moment__WEBPACK_IMPORTED_MODULE_3__(_now2);

            var _calculated_now = moment__WEBPACK_IMPORTED_MODULE_3__(lodash__WEBPACK_IMPORTED_MODULE_2__["now"]());

            var _isValidDateT = false;

            if (_now1 && _now2) {
              _isValidDateT = _calculated_now.isBetween(_calculated_now1, _calculated_now2);
            }

            if (_isValidDateT) {
              return 1;
            } else {
              if (_calculated_now.isBefore(_calculated_now2)) {
                return 2;
              } else {
                return 0;
              }
            }
          }
        }, {
          key: "randomString",
          value: function randomString(len, charSet) {
            charSet = charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            charSet = charSet.toString();
            var randomString = "";

            for (var i = 0; i < len; i++) {
              var randomPoz = Math.floor(Math.random() * charSet.length);
              randomString += charSet.substring(randomPoz, randomPoz + 1);
            }

            return randomString;
          }
        }, {
          key: "returnRoundedNumber",
          value: function returnRoundedNumber(num) {
            return Math.round(num * 100 + Number.EPSILON) / 100;
          }
        }, {
          key: "_returnT_4undefined",
          value: function _returnT_4undefined(_obj, _ignore_bitT) {
            if ((typeof _obj == 'undefined' || _obj == null || _obj == '' || typeof _obj == 'string' && _obj != '' && _obj.trim() == '' || _obj == "undefined" || _obj == "null" || _obj == 'NaN' || lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"](_obj) || lodash__WEBPACK_IMPORTED_MODULE_2__["isNaN"](_obj) || lodash__WEBPACK_IMPORTED_MODULE_2__["isNull"](_obj) || _obj == [] || typeof _obj === 'object' && Object.keys(_obj).length == 0) && (!_ignore_bitT || _ignore_bitT && _obj !== false && _obj !== 0)) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "returnLoanType",
          value: function returnLoanType(loanType) {
            var _returnLoanType = null;

            try {
              if (loanType) {
                _returnLoanType = this.ParentLoanTypes[loanType].name;
              }
            } catch (ex) {}

            return _returnLoanType;
          }
        }, {
          key: "returnLoanRepaymentType",
          value: function returnLoanRepaymentType(loanRepaymentType, LoanObj) {
            if (LoanObj) {
              var _returnLoanRepaymentType = -1;

              try {
                if (loanRepaymentType) {
                  _returnLoanRepaymentType = LoanObj.loanRepaymentType.indexOf(loanRepaymentType);
                } else {
                  _returnLoanRepaymentType = -1;
                }
              } catch (ex) {}

              return _returnLoanRepaymentType;
            }
          }
        }, {
          key: "fnCalculateMonthlyAmountForEMI",
          value: function fnCalculateMonthlyAmountForEMI(loanAmount, loanTenureInMonths, loanInterestRate) {
            //this._calculatedMonthlyAmountForEMI = loanAmount * loanInterestRate * (((1 + loanInterestRate) ^ loanTenureInMonths) / ((1 + loanInterestRate) ^ (loanTenureInMonths - 1)));
            var _calculatedMonthlyAmountForEMI = (loanAmount + loanAmount * loanInterestRate * loanTenureInMonths / 100) / loanTenureInMonths;

            _calculatedMonthlyAmountForEMI = this.returnRoundedNumber(_calculatedMonthlyAmountForEMI);
            return _calculatedMonthlyAmountForEMI;
          }
        }, {
          key: "returnCountryCodeFromName",
          value: function returnCountryCodeFromName(countryName) {
            if (countryName) {
              return lodash__WEBPACK_IMPORTED_MODULE_2__["toLower"](Object(country_list__WEBPACK_IMPORTED_MODULE_4__["getCode"])(countryName));
            }
          }
        }, {
          key: "returnCountryNames",
          value: function returnCountryNames() {
            return Object(country_list__WEBPACK_IMPORTED_MODULE_4__["getNames"])();
          }
        }, {
          key: "returnTIfSuppliedDateIsNotFromCurrentMonth",
          value: function returnTIfSuppliedDateIsNotFromCurrentMonth(date) {
            //return moment(date).add(i,"month");
            var currentMonthsStart = moment__WEBPACK_IMPORTED_MODULE_3__().startOf('month');
            return moment__WEBPACK_IMPORTED_MODULE_3__(date).isBefore(moment__WEBPACK_IMPORTED_MODULE_3__(currentMonthsStart));
          }
        }, {
          key: "returnSortedObjectArray",
          value: function returnSortedObjectArray(objArray, fieldsArray2Sort) {
            //objArray.sort(fieldSorter(['field1', '-field2']));
            ////objArray.sort(fieldSorter(['field1', '-field2', 'field3'])); // alternative
            return objArray.sort(this.fieldSorter(fieldsArray2Sort));
          }
        }, {
          key: "fieldSorter",
          value: function fieldSorter(fields) {
            return function (a, b) {
              return fields.map(function (o) {
                var dir = 1;

                if (o[0] === '-') {
                  dir = -1;
                  o = o.substring(1);
                }

                if (a[o] > b[o]) return dir;
                if (a[o] < b[o]) return -dir;
                return 0;
              }).reduce(function firstNonZeroValue(p, n) {
                return p ? p : n;
              }, 0);
            };
          }
        }, {
          key: "checkWhetherPlanExpiryIsInFuture",
          value: function checkWhetherPlanExpiryIsInFuture(userMemberShipExpireOn) {
            if (userMemberShipExpireOn) {
              return moment__WEBPACK_IMPORTED_MODULE_3__().isBefore(moment__WEBPACK_IMPORTED_MODULE_3__(userMemberShipExpireOn));
            }

            return false;
          }
        }]);

        return UtilityService;
      }();

      UtilityService.ctorParameters = function () {
        return [];
      };

      UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UtilityService);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        apiUrl: 'https://avitii-lending.com/endpoint',
        serverUrl: 'https://avitii-lending.com/endpoint',
        SOCKET_ENDPOINT: 'https://avitii-lending.com',
        apiTimeout: 60000,
        STRIP_PAYMENT_Publishable_key: 'pk_live_51ITXbXEpOok5VoBk8Cs1qYisy80xTcbR2qgZLsy0phv6RpdrZw5TWM1S5TpddNJLs7wb3UDAIhxoSlOy8ajQJOIb00PlBzBvk0',
        STRIP_PAYMENT_Secret_key_UAT: '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',
        isPaymentTestMode: false
      };
      /***/
    },

    /***/
    "BE8n":
    /*!*****************************************************!*\
      !*** ./src/app/components/_helpers/fake-backend.ts ***!
      \*****************************************************/

    /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

    /***/
    function BE8n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
        return FakeBackendInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
        return fakeBackendProvider;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var FakeBackendInterceptor = /*#__PURE__*/function () {
        function FakeBackendInterceptor() {
          _classCallCheck(this, FakeBackendInterceptor);
        }

        _createClass(FakeBackendInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // array in local storage for registered users
            var users = JSON.parse(localStorage.getItem('users')) || []; // wrap in delayed observable to simulate server api call

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
              // authenticate
              if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                  return user.userName === request.body.userName && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                  // if login details are valid return 200 OK with user details and fake jwt token
                  var user = filteredUsers[0];
                  var body = {
                    id: user.id,
                    role: user.role,
                    userName: user.userName,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: 'fake-jwt-token'
                  };
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                    status: 200,
                    body: body
                  }));
                } else {
                  // else return 400 bad request
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                    error: {
                      message: 'Email or Password is incorrect'
                    }
                  });
                }
              } // get users


              if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                    status: 200,
                    body: users
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                    status: 401,
                    error: {
                      message: 'Unauthorised'
                    }
                  });
                }
              } // get user by id


              if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  // find user by id in users array
                  var urlParts = request.url.split('/');
                  var id = parseInt(urlParts[urlParts.length - 1]);
                  var matchedUsers = users.filter(function (user) {
                    return user.id === id;
                  });

                  var _user2 = matchedUsers.length ? matchedUsers[0] : null;

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                    status: 200,
                    body: _user2
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                    status: 401,
                    error: {
                      message: 'Unauthorised'
                    }
                  });
                }
              } // register user


              if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser = request.body; // validation

                var duplicateUser = users.filter(function (user) {
                  return user.userName === newUser.userName;
                }).length;

                if (duplicateUser) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                    error: {
                      message: 'userName "' + newUser.userName + '" is already taken'
                    }
                  });
                } // save new user


                newUser.id = users.length + 1;
                users.push(newUser); ////Local storage please rome this

                localStorage.setItem('users', JSON.stringify(users)); // respond 200 OK

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                  status: 200
                }));
              } // delete user


              if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  // find user by id in users array
                  var _urlParts = request.url.split('/');

                  var _id2 = parseInt(_urlParts[_urlParts.length - 1]);

                  for (var i = 0; i < users.length; i++) {
                    var _user3 = users[i];

                    if (_user3.id === _id2) {
                      // delete user
                      users.splice(i, 1);
                      localStorage.setItem('users', JSON.stringify(users));
                      break;
                    }
                  } // respond 200 OK


                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                    status: 200
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                    status: 401,
                    error: {
                      message: 'Unauthorised'
                    }
                  });
                }
              } // pass through any requests not handled above


              return next.handle(request);
            })) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
          }
        }]);

        return FakeBackendInterceptor;
      }();

      FakeBackendInterceptor.ctorParameters = function () {
        return [];
      };

      FakeBackendInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FakeBackendInterceptor);
      var fakeBackendProvider = {
        // use fake backend in place of Http service for backend-less development
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: FakeBackendInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    "BZV/":
    /*!**********************************************!*\
      !*** ./src/app/services/sessions.service.ts ***!
      \**********************************************/

    /*! exports provided: SessionsService */

    /***/
    function BZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsService", function () {
        return SessionsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../socketio.service */
      "bgkY");

      var SessionsService = /*#__PURE__*/function () {
        function SessionsService(socketioService) {
          _classCallCheck(this, SessionsService);

          this.socketioService = socketioService;
        }

        _createClass(SessionsService, [{
          key: "addNewSession",
          value: function addNewSession(session) {
            this.socketioService.emitEventWithNameAndData('sessions_request_addnew', session);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_added');
          }
        }, {
          key: "getSessionInstastTypeAdded",
          value: function getSessionInstastTypeAdded() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'instant_sessions_response_added');
          }
        }, {
          key: "getSessionNewAdded",
          value: function getSessionNewAdded() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_added');
          }
        }, {
          key: "getSessionUpdated",
          value: function getSessionUpdated() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_updatebyid');
          }
        }, {
          key: "getSessionAll",
          value: function getSessionAll() {
            this.socketioService.emitEventWithNameAndData('sessions_request_getall', {});
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_getall');
          }
        }, {
          key: "getSessionById",
          value: function getSessionById(id) {
            this.socketioService.emitEventWithNameAndData('sessions_request_getbyid', {
              loanId: id
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_getbyid');
          }
        }, {
          key: "getSessionAllWithSessionApply",
          value: function getSessionAllWithSessionApply(_borrowerId) {
            this.socketioService.emitEventWithNameAndData('sessions_request_withappliedsessions', {
              borrowerId: _borrowerId
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_withappliedsessions');
          }
        }, {
          key: "updateSessionById",
          value: function updateSessionById(session) {
            this.socketioService.emitEventWithNameAndData('sessions_request_updatebyid', session);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_updatebyid');
          }
        }, {
          key: "deleteSessionById",
          value: function deleteSessionById(sessionId, _deletedBy) {
            this.socketioService.emitEventWithNameAndData('sessions_request_deletebyid', sessionId, _deletedBy);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_deletebyid');
          }
        }, {
          key: "getSessionAllByService",
          value: function getSessionAllByService(services, location, sessionSubject, loanDescription, useAndTrueOrFalse) {
            var _data2search = {
              services: services,
              location: location,
              sessionSubject: sessionSubject,
              loanDescription: loanDescription
            };

            if (!services) {
              delete _data2search.services;
            }

            if (!location) {
              delete _data2search.location;
            }

            if (!sessionSubject) {
              delete _data2search.sessionSubject;
            }

            if (!loanDescription) {
              delete _data2search.loanDescription;
            }

            this.socketioService.getSessionAllByQuery(false, {
              data2search: _data2search,
              useAndTrueOrFalse: useAndTrueOrFalse
            }, null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_getall_bysearch');
          }
        }, {
          key: "getSessionLengthByService",
          value: function getSessionLengthByService(services, location, sessionSubject, loanDescription, useAndTrueOrFalse) {
            var _data2search = {
              services: services,
              location: location,
              sessionSubject: sessionSubject,
              loanDescription: loanDescription
            };

            if (!services) {
              delete _data2search.services;
            }

            if (!location) {
              delete _data2search.location;
            }

            if (!sessionSubject) {
              delete _data2search.sessionSubject;
            }

            if (!loanDescription) {
              delete _data2search.loanDescription;
            }

            this.socketioService.getSessionCountByQuery(false, {
              data2search: _data2search,
              useAndTrueOrFalse: useAndTrueOrFalse
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_getlength_bysearch');
          }
        }, {
          key: "getSessionAllByBorrowerId",
          value: function getSessionAllByBorrowerId(borrowerId, loanId, loanApplyId, status, useAndTrueOrFalse, emitThisEvent) {
            this.socketioService.emitEventWithNameAndData('sessions_request_getall_byborrowerid', {
              borrowerId: borrowerId,
              loanId: loanId,
              loanApplyId: loanApplyId,
              useAndTrueOrFalse: useAndTrueOrFalse,
              emitThisEvent: emitThisEvent,
              status: status
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_getall_byborrowerid');
          }
        }, {
          key: "getSessionAllByLenderId",
          value: function getSessionAllByLenderId(lenderId, loanId, loanApplyId, status, useAndTrueOrFalse, emitThisEvent) {
            this.socketioService.emitEventWithNameAndData('sessions_request_getall_bylenderid', {
              lenderId: lenderId,
              loanId: loanId,
              loanApplyId: loanApplyId,
              useAndTrueOrFalse: useAndTrueOrFalse,
              emitThisEvent: emitThisEvent,
              status: status
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'sessions_response_getall_bylenderid');
          }
        }, {
          key: "getUpdatesForSessionAllByBorrowerId",
          value: function getUpdatesForSessionAllByBorrowerId() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'response_updated_sessions_byborrowerid');
          }
        }, {
          key: "getUpdatesForSessionAllByLenderId",
          value: function getUpdatesForSessionAllByLenderId() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socketioService.socket, 'response_updated_sessions_bylenderid');
          }
        }]);

        return SessionsService;
      }();

      SessionsService.ctorParameters = function () {
        return [{
          type: _socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"]
        }];
      };

      SessionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"]])], SessionsService);
      /*
      baseurl = environment.apiUrl + '/';
      constructor(private http: HttpClient) { }
      
      addNewSession(session: Session) {
        return this.http.post(this.baseurl + 'api/post/session/addnew', session);
      }
      
      getSessionById(id: string) {
        return this.http.post(this.baseurl + 'api/post/session/getbyid', { loanId: id });
      }
      
      getSessionAll() {
        return this.http.post(this.baseurl + 'api/post/session/getall', {});
      }
      
      getSessionAllWithSessionApply(_borrowerId: string) {
        return this.http.post(this.baseurl + 'api/post/session/getall/withappliedsessions', { borrowerId: _borrowerId });
      }
      
      updateSessionById(session: Session) {
        return this.http.post(this.baseurl + 'api/post/session/update/byid', session);
      }
      
      getSessionAllByService(services: string, location: string, sessionSubject: string, loanDescription: string, useAndTrueOrFalse: boolean) {
        return this.http.post(this.baseurl + 'api/post/session/getall/bysearch', { data2search: { services: services, location: location, sessionSubject: sessionSubject, loanDescription: loanDescription }, useAndTrueOrFalse: useAndTrueOrFalse });
      }
      
      getSessionLengthByService(services: string, location: string, sessionSubject: string, loanDescription: string, useAndTrueOrFalse: boolean) {
        return this.http.post(this.baseurl + 'api/post/session/getlength/bysearch', { data2search: { services: services, location: location, sessionSubject: sessionSubject, loanDescription: loanDescription }, useAndTrueOrFalse: useAndTrueOrFalse });
      }
      
      getSessionAllByBorrowerId(borrowerId: string, useAndTrueOrFalse: boolean) {
        return this.http.post(this.baseurl + 'api/post/session/getall/byborrowerid', {  borrowerId: borrowerId, useAndTrueOrFalse: useAndTrueOrFalse });
      }
      }
      */

      /***/
    },

    /***/
    "CRXG":
    /*!*********************************************!*\
      !*** ./src/app/components/_guards/index.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard, NoAuthGuard */

    /***/
    function CRXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "a3XI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /* harmony import */


      var _noauth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./noauth.guard */
      "uoM9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function () {
        return _noauth_guard__WEBPACK_IMPORTED_MODULE_1__["NoAuthGuard"];
      });
      /***/

    },

    /***/
    "DKgV":
    /*!****************************************************!*\
      !*** ./src/app/components/faqs/faqs.component.css ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function DKgV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXFzLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "E+1o":
    /*!****************************************************************!*\
      !*** ./src/app/components/disclaimer/disclaimer.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function E1o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjbGFpbWVyLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "E8lZ":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function E8lZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<section class=\"resume schedule pt-3 pb-4\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"cal-time\">\n                <div class=\"time\">\n                    <h2 class=\"title-text pt-1\" i18n>Sign Up</h2>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- register section -->\n<section class=\"register-page section-b-space pt-0\">\n    <div class=\"row\">\n        <div class=\"col-lg-8 offset-lg-2\">\n            <form [formGroup]=\"registerForm\" class=\"theme-form\">\n                <div class=\"tab-content theme-card shadow-sm\">\n                    <div class=\"tab-pane active\" id=\"reg_basic_details\">\n                        <div class=\"form-row\">\n                            <div class=\"col-md-12 text-center mb-2\">\n                                <div class=\"btn-group shadow mb-3\">\n                                    <button type=\"button\" class=\"btn\" (click)=\"onClickRoleChange('borrower')\"\n                                        [ngClass]=\"{ 'btn-app1-theme text-white': f.role.value=='borrower', 'btn-outline-info': f.role.value!='borrower'}\"\n                                        i18n>\n                                        I'm A Borrower\n                                    </button>\n                                    <button type=\"button\" class=\"btn\" (click)=\"onClickRoleChange('lender')\"\n                                        [ngClass]=\"{ 'btn-app1-theme text-white': f.role.value=='lender', 'btn-outline-info': f.role.value!='lender'}\"\n                                        i18n>\n                                        I'm A Lender\n                                    </button>\n                                </div>\n                                <hr>\n                            </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"col-md-6\">\n                                <label for=\"firstName\" i18n>First Name</label>\n                                <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.firstName.errors.required\" i18n>First Name is required</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label for=\"lastName\" i18n>Last Name</label>\n                                <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.lastName.errors.required\" i18n>Last Name is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"col-md-6\">\n                                <label for=\"mobileNo\" i18n>\n                                    <i class=\"fab fa-whatsapp text-success\"></i>\n                                    Mobile Number</label>\n                                <input type=\"text\" formControlName=\"mobileNo\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.mobileNo.errors }\" />\n                                <div *ngIf=\"submitted && f.mobileNo.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.mobileNo.errors.required\" i18n>Mobile Number is required</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label for=\"emailAddress\" i18n>Email<span class=\"small\"> (Link will be sent for\n                                        verification)</span></label>\n                                <input type=\"email\" formControlName=\"emailAddress\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\"\n                                    pattern=\"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$\" />\n                                <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.emailAddress.errors.required\" i18n>Email is required</div>\n                                    <div *ngIf=\"f.emailAddress.errors.email || f.emailAddress.errors.pattern\" i18n>\n                                        Invalid Email format.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <!-- <div class=\"col-md-12\">\n                                <div class=\"text-gray\" i18n>\n                                    Verification link will be sent on mail, to complete your registration please click on mail link when received.\n                                </div>\n                                <hr>\n                            </div> -->\n                            <div class=\"col-md-6\">\n                                <label for=\"password\" i18n>Password</label>\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.password.errors.required\" i18n>Password is required</div>\n                                    <div *ngIf=\"f.password.errors.minlength\" i18n>Password must be at least 6 characters\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label i18n>Confirm Password</label>\n                                <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                                <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.confirmPassword.errors.required\" i18n>\n                                        Confirm Password is required\n                                    </div>\n                                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\" i18n>\n                                        Passwords must match\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-12 mb-3\">\n                                <label for=\"hearAboutUs\" i18n>From where you hear about us?</label>\n                                <select formControlName=\"hearAboutUs\" class=\"custom-select\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.hearAboutUs.errors }\">\n                                    <option value=\"\" selected disabled i18n>Choose</option>\n                                    <option *ngFor=\"let hearAboutUs of hearAboutUslist\" [ngValue]=\"hearAboutUs\">\n                                        {{hearAboutUs}}</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.hearAboutUs.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.hearAboutUs.errors.required\" i18n>Hear About Us is required</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"custom-control custom-checkbox\">\n\n                                    <input type=\"checkbox\" [value]=\"true\" formControlName=\"acceptTerms\"\n                                        class=\"custom-control-input\" id=\"defaultUnchecked\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\" />\n                                    <label class=\"custom-control-label\" for=\"defaultUnchecked\" i18n>I accept the general\n                                        <a class=\"text-primary\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" for=\"defaultUnchecked\" >\n                                            Terms Of Use and Privacy Policy.\n                                        </a>\n                                    </label>\n                                </div>\n                                <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.acceptTerms.errors.required\" i18n> is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <hr>\n                                <button type=\"button\" (click)=\"onSubmitVerifyRegisterUser()\" [disabled]=\"loading\"\n                                    class=\"btn btn-default primary-btn  radius-0\" i18n>Submit</button>\n                                <img *ngIf=\"loading\" class=\"pl-3\"\n                                    src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</section>\n<!-- register section -->\n";
      /***/
    },

    /***/
    "G2Gn":
    /*!*********************************************************!*\
      !*** ./src/app/components/contact/contact.component.ts ***!
      \*********************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function G2Gn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact.component.html */
      "jmJk");
      /* harmony import */


      var _contact_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact.component.css */
      "WE7b");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/internal/operators/first */
      "XoMe");
      /* harmony import */


      var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(userService, alertService, formBuilder, router) {
          _classCallCheck(this, ContactComponent);

          this.userService = userService;
          this.alertService = alertService;
          this.formBuilder = formBuilder;
          this.router = router;
          this.contactUsUsersData = {};
          this.submitted = false;
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.contactUsForm = this.formBuilder.group({
              userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              phoneNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
              subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.contactUsForm.controls;
          }
        }, {
          key: "sendMailForContactUs",
          value: function sendMailForContactUs() {
            var _this3 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.contactUsForm.invalid) {
              return;
            }

            this.loading = true;
            this.userService.sendMailForContactUs(this.contactUsForm.value).pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this3.alertService.success(data['message'], true);

                _this3.loading = false;
                _this3.submitted = false;

                _this3.router.navigate(['/']);
              } else {
                //alert(JSON.stringify(data['message']));
                _this3.alertService.error(data['message'], true);

                _this3.loading = false;
                _this3.submitted = false;
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

              _this3.alertService.error(errorMsg2show);

              _this3.loading = false;
            });
          }
        }]);

        return ContactComponent;
      }();

      ContactComponent.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], ContactComponent);
      /***/
    },

    /***/
    "GpEA":
    /*!********************************************************!*\
      !*** ./src/app/components/footer/footer.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function GpEA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "footer {\n    padding: 0px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgcGFkZGluZzogMHB4IDA7XG59Il19 */";
      /***/
    },

    /***/
    "H8gG":
    /*!**********************************************!*\
      !*** ./src/app/components/_helpers/index.ts ***!
      \**********************************************/

    /*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */

    /***/
    function H8gG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error.interceptor */
      "s4Db");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"];
      });
      /* harmony import */


      var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jwt.interceptor */
      "T0NU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"];
      });
      /* harmony import */


      var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fake-backend */
      "BE8n");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
        return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
        return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"];
      });
      /***/

    },

    /***/
    "I/yB":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/disclaimer/disclaimer.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IYB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"resume schedule pt-3 pb-3\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"cal-time\">\n                    <div class=\"time\">\n                        <h2 class=\"title-text pt-1\" i18n>Terms Of Service</h2>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- faq section -->\n<section class=\"saas2 faq testimonial-bg py-2\" id=\"faq\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"faq-block\">\n                    <h3 class=\"mb-3\" i18n>MEMBERSHIP WITH US:</h3>\n                    <ul style=\"list-style: circle;\" >\n                        <li  i18n>When you choose to create a profile through our system, you also confirm that you will comply with all our conditions, which apply to all our customers. It is important that our system is safe for all partners.</li>\n                        <li  i18n>From the moment you sign up, your registration is binding when you have logged in to your profile for the first time.</li>\n                        <li  i18n>We store data to maintain the safety of Avitii Lending users</li>\n                        <li  i18n>We have the right to edit the ads if we believe the ads are misleading.</li>\n                        <li  i18n>We exchange data with credit-list.net, in order to assess the creditworthiness of the borrowers. A world wide credit list which ensures a safe experience at Avitii Lending</li>\n                        <li  i18n>We remove ads if we find inappropriate content.</li>\n                        <li  i18n>If there is an offensive or junk behavior, then we can exclude a user</li>\n                        <li  i18n>Violation of membership conditions can result in a ban on your IP address.</li>\n                        <li  i18n>You must be 18 years of age and with a valid photo ID to create a profile with us.</li>\n                        <li  i18n>They are a community, so remember you can help keep Avitii Lending safe by \"report user\" under their profile. In this way, we make sure that Avitii Lending works as a community</li>\n                        </ul>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</section>\n<!-- end faq section -->\n\n<section class=\"resume schedule pt-3 pb-3\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"cal-time\">\n                    <div class=\"time\">\n                        <h2 class=\"title-text pt-1\" i18n>Privacy Policy</h2>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- faq section -->\n<section class=\"saas1 faq testimonial-bg py-2\" id=\"faq\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"faq-block\">\n                    <div>\n                        <!-- <h3 class=\"frequent-text\">TERMS OF SERVICE</h3> -->\n                        <p i18n>\n                            We respect the intellectual property rights of others and ask you to do the same. We have adopted an Intellectual Property Policy regarding third-party claims that your material infringes the rights of others. We respond to all valid notices of such infringement, and our policy is to suspend or terminate the services of repeat infringers.\n                          \n                        </p>\n                        <br>\n                        <p i18n>\n                            We have implemented technical and organizational measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, or disclosure. However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your personal information for improper purposes. You provide your personal information at your own risk.\n                        </p>\n                        <br>\n                        <p i18n>\n                            You are responsible for safeguarding your password and for restricting access to the Services from your compatible mobile devices and computer(s). You will immediately notify us of any unauthorized use of your password or avitii Account or any other breach of security. Notwithstanding, in the event of any dispute between two or more parties as to account ownership, we will be the sole arbiter of such dispute in our sole discretion. Our decision (which may include termination or suspension of any avitii Services subject to dispute) will be final and binding on all parties.\n                        </p>\n                        <h6 class=\"link\" i18n>Still have a question? Reach out to us: <a>support@avitii.com</a></h6>\n                        <br>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</section>\n<!-- end faq section -->\n\n<app-footer></app-footer>";
      /***/
    },

    /***/
    "KHIh":
    /*!************************************************!*\
      !*** ./src/app/services/app-router.service.ts ***!
      \************************************************/

    /*! exports provided: AppRouterService */

    /***/
    function KHIh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRouterService", function () {
        return AppRouterService;
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


      var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models */
      "VHTt");

      var AppRouterService = /*#__PURE__*/function () {
        function AppRouterService(authenticationService, router) {
          _classCallCheck(this, AppRouterService);

          this.authenticationService = authenticationService;
          this.router = router;
        }

        _createClass(AppRouterService, [{
          key: "onInitRouteOnHomeIfLoggedin",
          value: function onInitRouteOnHomeIfLoggedin() {
            if (this.authenticationService.currentUserValue) {
              this.appRouter(this.authenticationService.currentUserValue);
            }
          }
        }, {
          key: "appRouter",
          value: function appRouter(_user) {
            var _currentUserRole = '';

            try {
              _currentUserRole = _user.role;
            } catch (ex) {}

            switch (_currentUserRole) {
              // case Role.Business:
              //   this.router.navigate(['/business']);
              //   break;
              // case Role.Invester:
              //   this.router.navigate(['/invester']);
              //   break;
              case _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin:
                this.router.navigate(['/admin']);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Lender:
                this.router.navigate(['/lender']);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Borrower:
                this.router.navigate(['/borrower']);
                break;

              case 'Register':
              case 'register':
                this.router.navigate(['/register']);
                break;

              default:
                this.router.navigate(['/']);
                break;
            }
          }
        }, {
          key: "appRouterRoleWise",
          value: function appRouterRoleWise(_user, _path) {
            _path = _path ? _path : '';
            var _currentUserRole = '';

            try {
              _currentUserRole = _user.role;
            } catch (ex) {}

            switch (_currentUserRole) {
              case _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin:
                this.router.navigate(['/admin/' + _path]);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Lender:
                this.router.navigate(['/lender/' + _path]);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Borrower:
                this.router.navigate(['/borrower/' + _path]);
                break;

              case 'Register':
              case 'register':
                this.router.navigate(['/register']);
                break;

              default:
                this.router.navigate(['/']);
                break;
            }
          }
        }, {
          key: "appRouteToPath",
          value: function appRouteToPath(_path) {
            var _this4 = this;

            var _stateObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var delayedT = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (delayedT) {
              if (_stateObj) {
                setTimeout(function () {
                  _this4.router.navigate([_path], {
                    state: _stateObj
                  });
                }, 500);
              } else {
                setTimeout(function () {
                  _this4.router.navigate([_path]);
                }, 500);
              }
            } else {
              if (_stateObj) {
                this.router.navigate([_path], {
                  state: _stateObj
                });
              } else {
                this.router.navigate([_path]);
              }
            }
          }
        }]);

        return AppRouterService;
      }();

      AppRouterService.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AppRouterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AppRouterService);
      /***/
    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
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
      "WwN9");
      /* harmony import */


      var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.css */
      "GpEA");
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
    "O5bD":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function O5bD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<section class=\"login-page section-b-space pt-2\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 offset-lg-3 mt-5\">\n              \n                <div class=\"theme-card mt-5 mt-md-2\">\n                    <div class=\"text-center\">\n                        <h2 class=\"title-text pt-1\" i18n>Sign In</h2>\n                    </div>\n                  \n                    <hr>\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"theme-form\">\n                            <div class=\"form-group\">\n                                <label for=\"userName\" i18n>Email</label>\n                                <input type=\"email\" formControlName=\"userName\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\"\n                                    autocomplete=\"userName\" />\n                                <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.userName.errors.required\" i18n>Email is required</div>\n                                    <div *ngIf=\"f.userName.errors.email\" i18n>Email must be valid</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"password\" i18n>Password</label>\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                                    autocomplete=\"current-password\" />\n                                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.password.errors.required\" i18n>Password is required</div>\n                                </div>\n\n                            </div>\n                            <div class=\"form-group\">\n                                <button type=\"submit\" [disabled]=\"loading\"\n                                    class=\"btn btn-default primary-btn radius-0 float-right\" i18n>Sign\n                                    in <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></span></button>\n                                    \n                                <p class=\"font-small blue-text d-flex justify-content-start\">\n                                    <a routerLink=\"/forgotpassword\" routerLinkActive=\"active\"\n                                        class=\"blue-text ml-1\" i18n>Forgot Password?</a>\n                                </p>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n";
      /***/
    },

    /***/
    "OC8m":
    /*!**************************************************!*\
      !*** ./src/app/services/notification.service.ts ***!
      \**************************************************/

    /*! exports provided: NotificationService */

    /***/
    function OC8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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


      var _socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../socketio.service */
      "bgkY");
      /* harmony import */


      var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utility.service */
      "A1CT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _sessions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sessions.service */
      "BZV/");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(socketService, utilityService, location, router, sessionsService) {
          var _this5 = this;

          _classCallCheck(this, NotificationService);

          this.socketService = socketService;
          this.utilityService = utilityService;
          this.location = location;
          this.router = router;
          this.sessionsService = sessionsService;
          this.appNotifications = {};
          this.chatNotifications = {};
          router.events.subscribe(function (val) {
            if (location.path() != "") {
              _this5.route = location.path();
            } else {
              _this5.route = "Home";
            } ////console.log("26 :: path :: " + this.route);

          });
        }

        _createClass(NotificationService, [{
          key: "appNotificationsListner",
          value: function appNotificationsListner() {
            var _this6 = this;

            this.socketService.getNewMessageToRoomAll().subscribe(function (_currentChatObj) {
              if (_currentChatObj) {//this.chatNotifications[_currentChatObj._id] = _currentChatObj;
              }
            });
            this.socketService.getAppNotificationWithCustomData().subscribe(function (data) {
              if (data && data['success']) {
                if (data['data']['_id']) {
                  _this6.appNotifications[data['data']['_id']] = data['data'];

                  _this6.check4Notification(data['data'], true);
                } else {
                  if (_this6.utilityService._.first(_this6.utilityService._.values(data['data']))) {
                    if (_this6.utilityService._.first(_this6.utilityService._.values(data['data']))['_id']) {
                      _this6.appNotifications = _this6.utilityService._.merge(_this6.utilityService._.mapKeys(_this6.utilityService._.values(_this6.appNotifications), '_id'), _this6.utilityService._.mapKeys(_this6.utilityService._.values(data['data']), '_id'));

                      for (var _items in data['data']) {
                        var currentNotificationObj = data['data'][_items];

                        _this6.check4Notification(currentNotificationObj, true);
                      }
                    }
                  }
                }
              } else {}
            }, function (error) {});
          }
        }, {
          key: "check4Notification",
          value: function check4Notification(notification, _doNotCleanNotificationT) {
            if (notification && notification.additionalData) {
              this.socketService.requestUpdateAppNotificationForViewedByUser(notification._id);
              var category = notification.additionalData.category;
              var action = notification.additionalData.action;
              var loanId = notification.additionalData.loanId;
              var loanApplyId = notification.additionalData.loanApplyId;

              switch (category) {
                case 'session_apply':
                  switch (action) {
                    case 'added_new':
                      this.decideActionOnSessionApplyDependsOnCurrentPage(loanId, loanApplyId);
                      break;

                    case 'updated':
                      this.decideActionOnSessionApplyDependsOnCurrentPage(loanId, loanApplyId);
                      break;
                  }

                  break;

                case 'sessions':
                  switch (action) {
                    case 'added_new':
                      this.decideActionOnSessionDependsOnCurrentPage(loanId, loanApplyId);
                      break;

                    case 'updated':
                      this.decideActionOnSessionDependsOnCurrentPage(loanId, loanApplyId);
                      break;
                  }

                  break;
              }

              this.playSound();

              if (!_doNotCleanNotificationT) {
                delete this.appNotifications[notification._id];
              }
            }
          }
        }, {
          key: "decideActionOnSessionDependsOnCurrentPage",
          value: function decideActionOnSessionDependsOnCurrentPage(loanId, loanApplyId) {
            var _obj2Save = {
              "_id": loanId
            };

            switch (this.route) {
              case '/lender':
                this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                break;

              case '/lender/search-consulatnt':
                this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                break;

              case '/lender/mysessions':
                this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                break;

              case '/lender/sessionview':
                this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                break;

              case '/borrower':
                this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_byborrowerid');
                break;

              case '/borrower/browse':
                this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
                break;

              case '/borrower/mysessions':
                this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
                break;

              case '/borrower/earnings':
                this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
                break;

              default:
                if (this.route.indexOf('lender') > -1) {
                  this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                } else {
                  this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
                }

                break;
            }
          }
        }, {
          key: "decideActionOnSessionApplyDependsOnCurrentPage",
          value: function decideActionOnSessionApplyDependsOnCurrentPage(loanId, loanApplyId) {
            var _obj2Save = {
              "_id": loanId
            };

            switch (this.route) {
              case '/lender':
                this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                break;

              case '/lender/search-consulatnt':
                this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                break;

              case '/lender/mysessions':
                this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                break;

              case '/lender/sessionview':
                this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                break;

              case '/borrower':
                this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
                break;

              case '/borrower/browse':
                this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
                break;

              case '/borrower/mysessions':
                this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
                break;

              case '/borrower/earnings':
                this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
                break;

              default:
                if (this.route.indexOf('lender') > -1) {
                  this.socketService.getSessionAllByQuery(false, _obj2Save, 'response_updated_sessions_bylenderid');
                } else {
                  this.sessionsService.getSessionAllByBorrowerId(null, loanId, loanApplyId, null, true, 'response_updated_sessions_byborrowerid');
                }

                break;
            }
          }
        }, {
          key: "playSound",
          value: function playSound() {
            var sound = "./../assets/img/sound.mp3";
            sound && new Audio(sound).play();
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ctorParameters = function () {
        return [{
          type: _socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketioService"]
        }, {
          type: _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _sessions_service__WEBPACK_IMPORTED_MODULE_6__["SessionsService"]
        }];
      };

      NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketioService"], _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _sessions_service__WEBPACK_IMPORTED_MODULE_6__["SessionsService"]])], NotificationService);
      /***/
    },

    /***/
    "PxG9":
    /*!***************************************************************!*\
      !*** ./src/app/components/disclaimer/disclaimer.component.ts ***!
      \***************************************************************/

    /*! exports provided: DisclaimerComponent */

    /***/
    function PxG9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function () {
        return DisclaimerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_disclaimer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./disclaimer.component.html */
      "I/yB");
      /* harmony import */


      var _disclaimer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./disclaimer.component.css */
      "E+1o");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DisclaimerComponent = /*#__PURE__*/function () {
        function DisclaimerComponent() {
          _classCallCheck(this, DisclaimerComponent);
        }

        _createClass(DisclaimerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DisclaimerComponent;
      }();

      DisclaimerComponent.ctorParameters = function () {
        return [];
      };

      DisclaimerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-disclaimer',
        template: _raw_loader_disclaimer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_disclaimer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DisclaimerComponent);
      /***/
    },

    /***/
    "QC9C":
    /*!*****************************************************!*\
      !*** ./src/app/components/alert/alert.component.ts ***!
      \*****************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function QC9C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./alert.component.html */
      "VqP8");
      /* harmony import */


      var _alert_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alert.component.css */
      "nwjo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(alertService) {
          _classCallCheck(this, AlertComponent);

          this.alertService = alertService;
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.subscription = this.alertService.getMessage().subscribe(function (message) {
              _this7.message = message;
              setTimeout(function () {
                return _this7.message = null;
              }, 10000);
            });
          }
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            this.message = null; //data-dismiss="alert"
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//this.subscription.unsubscribe();
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }];
      };

      AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])], AlertComponent);
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/authentication.service */
      "ej43");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./models */
      "VHTt");
      /* harmony import */


      var _socketio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./socketio.service */
      "bgkY");
      /* harmony import */


      var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/notification.service */
      "OC8m");
      /* harmony import */


      var _services_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/utility.service */
      "A1CT");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authenticationService, socketService, utilityService, notificationService) {
          var _this8 = this;

          _classCallCheck(this, AppComponent);

          this.authenticationService = authenticationService;
          this.socketService = socketService;
          this.utilityService = utilityService;
          this.notificationService = notificationService;
          this.subscription = this.authenticationService.getCurrentUserObj().subscribe(function (_currentUser) {
            if (_currentUser) {
              _this8.currentUser = _currentUser;

              _this8.socketService.setupSocketConnection(_this8.currentUser._id);

              if (_this8.currentUser.role) {
                _this8.socketService.sendEventToJoinChatRoom(_models__WEBPACK_IMPORTED_MODULE_5__["AppRooms"]['my_app_main_room_for_' + _this8.currentUser.role], _this8.currentUser._id);
              }
            } else {
              _this8.currentUser = null;
            }

            _this8.notificationService.appNotificationsListner();
          });
          this.authenticationService.initCurrentUserObj();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//	document.styleSheets[0].disabled = true;
            //	document.styleSheets[1].disabled = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // unsubscribe to ensure no memory leaks
            this.subscription.unsubscribe();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _socketio_service__WEBPACK_IMPORTED_MODULE_6__["SocketioService"]
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
        }, {
          type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _socketio_service__WEBPACK_IMPORTED_MODULE_6__["SocketioService"], _services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])], AppComponent);
      /***/
    },

    /***/
    "T0NU":
    /*!********************************************************!*\
      !*** ./src/app/components/_helpers/jwt.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function T0NU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
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


      var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add authorization header with jwt token if available
            var currentUser = this.authenticationService.currentUserValue; //alert('14 :: JWT ::'+JSON.stringify(currentUser));

            if (currentUser && currentUser.token) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      };

      JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], JwtInterceptor);
      /***/
    },

    /***/
    "TFt9":
    /*!***************************************!*\
      !*** ./src/app/models/hearAboutUs.ts ***!
      \***************************************/

    /*! exports provided: HearAboutUs */

    /***/
    function TFt9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HearAboutUs", function () {
        return HearAboutUs;
      });

      var HearAboutUs;

      (function (HearAboutUs) {
        HearAboutUs["GoogleAdWords"] = "GoogleAdWords";
        HearAboutUs["OnlineAdvert"] = "OnlineAdvert";
        HearAboutUs["Website"] = "Website";
        HearAboutUs["Radio"] = "Radio";
      })(HearAboutUs || (HearAboutUs = {}));
      /***/

    },

    /***/
    "VHTt":
    /*!*********************************!*\
      !*** ./src/app/models/index.ts ***!
      \*********************************/

    /*! exports provided: User, Session, Role, AppAccessPermissions, ContactRole, SessionTypes, AppDocumentType, SessionStatus, PaymentMethod, SessionExecutionType, AppRooms, TransactionActionType, UserType, MediaTypes */

    /***/
    function VHTt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user */
      "2hxB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return _user__WEBPACK_IMPORTED_MODULE_0__["User"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Session", function () {
        return _user__WEBPACK_IMPORTED_MODULE_0__["Session"];
      });
      /* harmony import */


      var _role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role */
      "z56L");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["Role"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppAccessPermissions", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["AppAccessPermissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ContactRole", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["ContactRole"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SessionTypes", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["SessionTypes"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppDocumentType", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["AppDocumentType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SessionStatus", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["SessionStatus"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PaymentMethod", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SessionExecutionType", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["SessionExecutionType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppRooms", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["AppRooms"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TransactionActionType", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["TransactionActionType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserType", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["UserType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaTypes", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["MediaTypes"];
      });
      /***/

    },

    /***/
    "VqP8":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function VqP8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"alert-notify\" *ngIf=\"message\" [ngClass]=\"{ 'alert alert-dismissible': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n\n    <button type=\"button\" class=\"close mt-n1\" data-dismiss=\"alert\">&times;</button>\n    {{message.text}}\n\n</div> -->\n\n\n<div *ngIf=\"message\" class=\"alert alert-dismissibl alert-notify shadow\" [ngClass]=\"{ 'alert alert-dismissible': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\" (click)=\"hidePopup()\">\n        <i class=\"icon icon-close\"></i>\n    </button>\n    <span>\n    {{message.text}}</span>\n</div>";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-alert></app-alert>\t\t\n<router-outlet></router-outlet>  \n";
      /***/
    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "O5bD");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "mDuy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, route, authenticationService, alertService, appRouterService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.authenticationService = authenticationService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.loading = false;
          this.submitted = false;
          this.paramobj = null;
          this.paramobj = history.state; // redirect to home if already logged in

          this.appRouterService.onInitRouteOnHomeIfLoggedin();
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /*
                   this.route.paramMap
                   .pipe(map(() => window.history.state))
                   .subscribe(state => {
                  
                 });
                */
            this.loginForm = this.formBuilder.group({
              userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            }

            this.loading = true;
            this.authenticationService.login(this.f.userName.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
              if (!data['isVerified']) {
                data['isRegisteredAllowed2EditProfile'] = true;

                _this9.appRouterService.appRouterRoleWise(data, 'profile');
              } else {
                if (_this9.paramobj && _this9.paramobj.returnUrl) {
                  _this9.appRouterService.appRouteToPath(_this9.paramobj.returnUrl, _this9.paramobj);

                  return;
                }

                _this9.appRouterService.appRouter(data);
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

              _this9.alertService.error(errorMsg2show);

              _this9.loading = false;
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"]])], LoginComponent);
      /***/
    },

    /***/
    "WE7b":
    /*!**********************************************************!*\
      !*** ./src/app/components/contact/contact.component.css ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function WE7b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "WwN9":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WwN9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--footer start-->\n<footer class=\"saas2 footer2\" id=\"contact\">\n    <div class=\"container footer-padding\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"logo-sec\">\n                    <!-- <div class=\"footer-title mobile-title p-t-0\">\n                        <h3 class=\"text-white\">About Us</h3>\n                    </div> -->\n                    <div class=\"footer-contant\">\n                        <!-- <img alt=\"\" class=\"img-fluid footer-logo\" src=\".../assets/images/logo/1.png\"> -->\n                        <div class=\"footer-para mt-4\">\n                            <h6 class=\"text-white footer-headings\" i18n>About Us</h6>\n                            <h6 class=\"text-white para-address\" i18n>Avitii System is a program for private lenders. But our system allows a private lender to keep their investment in professional and secure system. Create a user today and invite your patrons into the system. In this way, you can in future get private loans to hit new heights and keep track of all payments and absences.</h6>\n                            \n                        </div>\n                        \n                       \n                    </div>\n                </div>\n            </div>\n\n            <!-- <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                \n                <div class=\"footer-title mobile-title\">\n                    <h3 class=\"text-white\">Product</h3>\n                </div>\n                <div class=\"footer-contant\">\n                    <h5 class=\"footer-headings\">Product</h5>\n                    <div>\n                        <ul class=\"footer-lists\">\n                            <li>\n                                <a href=\"#\">Discover features</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">CMS integration</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Lenders</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Free trials and demo</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">What Next ?</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div> -->\n\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <!-- <div class=\"footer-title mobile-title\">\n                    <h3 class=\"text-white\">Company</h3>\n                </div> -->\n                <div class=\"footer-contant\">\n                    <h5 class=\"footer-headings mt-2\" i18n>Important Links</h5>\n                    <div>\n                        <ul class=\"footer-lists\">\n                            <li>\n                                <a routerLink=\"/contact\" routerLinkActive=\"active\" i18n>Contact Us</a>\n                            </li>\n                            <li>\n                                <a routerLink=\"/faqs\" routerLinkActive=\"active\" i18n>FAQs</a>\n                            </li>\n                            <li>\n                                <a routerLink=\"/faqs\" routerLinkActive=\"active\" i18n>Terms of Use</a>\n                            </li>\n                            <li>\n                                <a routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Privact policy</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n               \n                 <!-- <div class=\"footer-title mobile-title\">\n                    <h3 class=\"text-white\">Subscribe our newsletter</h3>\n                </div> -->\n                <div class=\"logo-sec\">\n                <div class=\"footer-contant\">\n                    <!-- <h5 class=\"footer-headings\">Subscribe our newsletter</h5>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" id=\"usr\" placeholder=\"email address\" type=\"text\"/>\n                        <a href=\"\"><i aria-hidden=\"true\" class=\"fa fa-paper-plane\"></i></a>\n                    </div> -->\n                    <h5 class=\"footer-headings mt-2 mb-3\" i18n>Follow Us</h5>\n                    <ul class=\"d-d-flex footer-social social\">\n                        <li class=\"footer-social-list\">\n                            <a href=\"https://www.facebook.com/Avitii-Lendingcom-335980597324970/\" target=\"_blank\" i18n><i aria-hidden=\"true\" class=\"icon icon-facebook\"></i> Facebook</a>\n                        </li>\n                        \n                    </ul>\n                    <div class=\"mt-5\">\n                        <h4 class=\"text-white Unice-text\" i18n>Avitii Lender System</h4>\n                        <h6 class=\"text-white Unice-copyright-text\" i18n>© 2020 All Rights Reserved</h6>\n                    </div>\n                </div>\n                </div> \n            </div>\n        </div>\n    </div>\n</footer>\n<!--footer end-->\n\n\n ";
      /***/
    },

    /***/
    "XC3f":
    /*!***********************************************************!*\
      !*** ./src/app/components/register/register.component.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XC3f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "E8lZ");
      /* harmony import */


      var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.css */
      "woRh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var _models_hearAboutUs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../models/hearAboutUs */
      "TFt9");
      /* harmony import */


      var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../_helpers/must-match-validator */
      "nDMU");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formBuilder, router, authenticationService, userService, utilityService, alertService, appRouterService, route) {
          _classCallCheck(this, RegisterComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.utilityService = utilityService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.route = route;
          this.loading = false;
          this.submitted = false;
          this.Role = src_app_models__WEBPACK_IMPORTED_MODULE_8__["Role"];
          this.Roles = Object.keys(src_app_models__WEBPACK_IMPORTED_MODULE_8__["Role"]);
          this.HearAboutUs = Object.keys(_models_hearAboutUs__WEBPACK_IMPORTED_MODULE_9__["HearAboutUs"]);
          this.hearAboutUslist = ["Facebook", "Google", "Instagram", "YouTube", "Friend"];

          if (this.utilityService._.keys(this.authenticationService.allUserLevelsDataLenders).length <= 0 || this.utilityService._.keys(this.authenticationService.allUserLevelsDataBorrower).length <= 0) {
            this.authenticationService.fetchAllUserLevelsByUserId();
          } // redirect to home if already logged in


          if (this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter(this.authenticationService.currentUserValue);
          }
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.element_btn_click_reg_basic_details = document.getElementById('btn_click_reg_basic_details');
            this.element_btn_click_reg_email_verification = document.getElementById('btn_click_reg_email_verification');
            this.registerForm = this.formBuilder.group({
              role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              userName: [''],
              emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              confirmEmailAddress: [''],
              otp: [''],
              userType: [''],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              acceptnewUpdates: [''],
              acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].requiredTrue],
              birthDate: [''],
              nationality: [''],
              residence: [''],
              birthPlace: [''],
              promoCode: [''],
              mobileNo: [''],
              hearAboutUs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              app_doc_type: [src_app_models__WEBPACK_IMPORTED_MODULE_8__["AppDocumentType"].user_profile]
            }, {
              validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_10__["MustMatch"])('password', 'confirmPassword')
            });
            this._role = src_app_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Borrower; //Role.Lender;

            this.sub = this.route.queryParams.subscribe(function (params) {
              var _data = params['id'];
              var _id = params["k"];

              if (_id) {
                //#region user came here to complete registration, login and send to profile page
                _this10.authenticationService.autologin4registration(_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                  data['isRegisteredAllowed2EditProfile'] = true;

                  _this10.appRouterService.appRouterRoleWise(data, 'profile');
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

                  _this10.alertService.error(errorMsg2show);

                  _this10.loading = false;
                }); //#endregion user came here to complete registration, login and send to profile page

              }

              switch (_data) {
                case "ct":
                  _this10._role = src_app_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Borrower;
                  break;

                case "cr":
                  _this10._role = src_app_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Lender;
                  break;

                case 'ad':
                  _this10._role = src_app_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin;
                  break;

                default:
                  _this10._role = src_app_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Borrower; //Role.Lender;

                  break;
              }

              _this10.onClickRoleChange(_this10._role);
            });
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "onClickRoleChange",
          value: function onClickRoleChange(_role) {
            if (_role) {
              this.registerForm.get('role').setValue(_role);
            }
          }
        }, {
          key: "onVerifySendOtp",
          value: function onVerifySendOtp() {
            var _this11 = this;

            this.isOtpSent = false;

            if (!this.isOtpSent) {
              this.submitted = true; //console.log('inside Submit ' + this.registerForm.invalid);
              // stop here if form is invalid

              if (this.registerForm.controls.firstName.invalid || this.registerForm.controls.lastName.invalid || this.registerForm.controls.emailAddress.invalid) {
                return;
              } //console.log('inside');


              this.loading = true; //console.log("Reg Data => ", this.registerForm.value);

              this.registerForm.get('emailAddress').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
              this.registerForm.get('userName').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
              this.userService.sendOtp2user(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                //console.log('data => ', data)
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this11.alertService.success(data['message'], true);

                  _this11.loading = false;
                  _this11.isOtpSent = true;

                  _this11.element_btn_click_reg_email_verification.click();
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this11.alertService.error(data['message']);

                  _this11.loading = false;
                  _this11.isOtpSent = false;
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
                _this11.isOtpSent = false;
              });
            }
          }
        }, {
          key: "onSubmitRegisterUser",
          value: function onSubmitRegisterUser() {
            var _this12 = this;

            if (this.isOtpSent) {
              this.submitted = true; //console.log('inside onSubmitRegisterUser ' + (this.registerForm.invalid && this.registerForm.controls.password.invalid && this.registerForm.controls.confirmPassword.invalid && this.registerForm.controls.acceptTerms.invalid && this.registerForm.controls.otp.invalid));
              // stop here if form is invalid

              if (this.registerForm.controls.password.invalid || this.registerForm.controls.confirmPassword.invalid || this.registerForm.controls.acceptTerms.invalid || this.registerForm.controls.otp.invalid) {
                return;
              } //console.log('inside');


              this.loading = true; //console.log("Reg Data => ", this.registerForm.value);

              this.registerForm.get('emailAddress').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
              this.registerForm.get('userName').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
              this.userService.verifyOtpAndRegister(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                //console.log('data => ', data)
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this12.alertService.success('Registration successful', true);

                  _this12.router.navigate(['/login']);
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
              this.alertService.error("Please Verify Email first");
            }
          }
        }, {
          key: "onSubmitVerifyRegisterUser",
          value: function onSubmitVerifyRegisterUser() {
            var _this13 = this;

            this.submitted = true;
            this.loading = true;

            if (this.utilityService._.keys(this.authenticationService.allUserLevelsDataLenders).length <= 0 || this.utilityService._.keys(this.authenticationService.allUserLevelsDataBorrower).length <= 0) {
              this.authenticationService.fetchAllUserLevelsByUserId(); //this.alertService.error("Please wait");

              setTimeout(function () {
                _this13.onSubmitVerifyRegisterUser();
              }, 2000);
              return;
            }

            if (this.registerForm.invalid) {
              this.loading = false;
              this.alertService.error("Please Provide all data");
              return;
            } //console.log("Reg Data => ", this.registerForm.value);


            this.registerForm.get('emailAddress').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
            this.registerForm.get('userName').setValue(this.utilityService._.trim(this.utilityService._.toLower(this.registerForm.get('emailAddress').value)));
            var _userType = null;

            switch (this.registerForm.get('role').value) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Lender:
                //this.registerForm.get('userType').setValue(UserType.new_lender);
                this.registerForm.get('userType').setValue(this.authenticationService.allUserLevelsDataLenders[0]._id);
                break;

              case src_app_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Borrower:
                //this.registerForm.get('userType').setValue(UserType.new_borrower);
                this.registerForm.get('userType').setValue(this.authenticationService.allUserLevelsDataBorrower[0]._id);
                break;
            }

            this.userService.verifyUserAndRegister(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
              //console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this13.alertService.success('Registration initiated. Sent Verification link on email, please click on link to complete registration proccess.', true);

                _this13.router.navigate(['/login']);
              } else {
                //alert(JSON.stringify(data['message']));
                _this13.alertService.error(data['message']);

                _this13.loading = false;
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

              _this13.alertService.error(errorMsg2show);

              _this13.loading = false;
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_11__["AppRouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_11__["AppRouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], RegisterComponent); //https://avittii.herokuapp.com/#/register?k=d54db449-9b76-47cd-8441-7f08e1685fc1
      //http://localhost:4200/#/register?k=d54db449-9b76-47cd-8441-7f08e1685fc1

      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngui_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngui/common */
      "ZWWZ");
      /* harmony import */


      var _components_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/_helpers */
      "H8gG");
      /* harmony import */


      var _services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/utility.service */
      "A1CT");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/alert/alert.component */
      "QC9C");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./logout/logout.component */
      "n1B2");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/forgot-password/forgot-password.component */
      "nAxv");
      /* harmony import */


      var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/faqs/faqs.component */
      "ytmU");
      /* harmony import */


      var _components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/disclaimer/disclaimer.component */
      "PxG9");
      /* harmony import */


      var _socketio_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./socketio.service */
      "bgkY");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var stripe_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! stripe-angular */
      "CnOO");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! angular-datatables */
      "njyG"); //import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
      // used to create fake backend
      //import { fakeBackendProvider } from './components/_helpers';
      //import { routing }        from './app.routing';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_19__["FaqsComponent"], _components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_20__["DisclaimerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayModule"], stripe_angular__WEBPACK_IMPORTED_MODULE_25__["StripeModule"].forRoot(""), angular_datatables__WEBPACK_IMPORTED_MODULE_26__["DataTablesModule"], _ngui_common__WEBPACK_IMPORTED_MODULE_5__["NguiListModule"], _ngui_common__WEBPACK_IMPORTED_MODULE_5__["NguiInviewModule"], _ngui_common__WEBPACK_IMPORTED_MODULE_5__["NguiUtilsModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _components_helpers__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _components_helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"],
          multi: true
        }, _services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"], _socketio_service__WEBPACK_IMPORTED_MODULE_21__["SocketioService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBar"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "a3XI":
    /*!**************************************************!*\
      !*** ./src/app/components/_guards/auth.guard.ts ***!
      \**************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function a3XI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser) {
              // check if route is restricted by role
              //currentUser.appPermissions
              if (route.data && route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                //alert('1')
                this.router.navigate(['/']);
                return false;
              }

              if (route.data && route.data.appPermissions && lodash__WEBPACK_IMPORTED_MODULE_4__["intersection"](route.data.appPermissions, currentUser.appPermissions).length == 0) {
                // role not authorised so redirect to home page
                //alert('1')
                this.router.navigate(['/']);
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

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AuthGuard);
      /***/
    },

    /***/
    "bgkY":
    /*!*************************************!*\
      !*** ./src/app/socketio.service.ts ***!
      \*************************************/

    /*! exports provided: SocketioService */

    /***/
    function bgkY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocketioService", function () {
        return SocketioService;
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


      var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/utility.service */
      "A1CT");

      var SocketioService = /*#__PURE__*/function () {
        function SocketioService(utilityService) {
          _classCallCheck(this, SocketioService);

          this.utilityService = utilityService;
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/';
          this.currentUsersRooms = []; //#region Session Applied by current user

          this.currentAppliedSession = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion Session Applied by current user
          //#region Online User List

          this.currentOnlineUsersListObj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion Online User List
          //#region User Role List

          this.currentRoleWiseUsersListObj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion Online User List
          //#region Session Count

          this.currentSessionCount = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion Session Count
          //#region Session Apply

          this.currentSessionApply = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion Session Count
          //#region Session All

          this.currentSessionAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion Session All  
          //#region New User Joined Chat Room

          this.newUserJoinedRoomAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion New User Joined Chat Room
          //#region Old User left Chat Room

          this.oldUserLeftRoomAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion Old User left Chat Room
          //#region recd new message in Chat Room

          this.NewMessageToRoomAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion recd new message in Chat Room
          //#region recd new message in Chat Room

          this.OldMessageToRoomAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //#endregion recd new message in Chat Room
          //#region send status of socket connected or disconnected

          this.SocketConnectionStatus = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          window["baseurl"] = this.baseurl;
        }

        _createClass(SocketioService, [{
          key: "sendCurrentAppliedSessionObj",
          value: function sendCurrentAppliedSessionObj(user) {
            this.currentAppliedSession.next(user);
          }
        }, {
          key: "clearCurrentAppliedSessionObj",
          value: function clearCurrentAppliedSessionObj() {
            this.currentAppliedSession.next();
          }
        }, {
          key: "initCurrentAppliedSessionObj",
          value: function initCurrentAppliedSessionObj() {
            this.sendCurrentAppliedSessionObj({});
          }
        }, {
          key: "getCurrentAppliedSessionObj",
          value: function getCurrentAppliedSessionObj() {
            return this.currentAppliedSession.asObservable();
          }
        }, {
          key: "sendCurrentOnlineUsersListObj",
          value: function sendCurrentOnlineUsersListObj(user) {
            this.currentOnlineUsersListObj.next(user);
          }
        }, {
          key: "clearCurrentOnlineUsersListObj",
          value: function clearCurrentOnlineUsersListObj() {
            this.currentOnlineUsersListObj.next();
          }
        }, {
          key: "initCurrentOnlineUsersListObj",
          value: function initCurrentOnlineUsersListObj() {
            this.sendCurrentOnlineUsersListObj(this.onlineUsersList);
          }
        }, {
          key: "getCurrentOnlineUsersListObj",
          value: function getCurrentOnlineUsersListObj() {
            return this.currentOnlineUsersListObj.asObservable();
          }
        }, {
          key: "sendCurrentRoleWiseUsersListObj",
          value: function sendCurrentRoleWiseUsersListObj(user) {
            this.currentRoleWiseUsersListObj.next(user);
          }
        }, {
          key: "clearCurrentRoleWiseUsersListObj",
          value: function clearCurrentRoleWiseUsersListObj() {
            this.currentRoleWiseUsersListObj.next();
          }
        }, {
          key: "initCurrentRoleWiseUsersListObj",
          value: function initCurrentRoleWiseUsersListObj() {
            this.sendCurrentRoleWiseUsersListObj(this.onlineUsersList);
          }
        }, {
          key: "getcurrentRoleWiseUsersListObj",
          value: function getcurrentRoleWiseUsersListObj() {
            return this.currentRoleWiseUsersListObj.asObservable();
          }
        }, {
          key: "sendCurrentSessionCount",
          value: function sendCurrentSessionCount(user) {
            this.currentSessionCount.next(user);
          }
        }, {
          key: "clearSessionCount",
          value: function clearSessionCount() {
            this.currentSessionCount.next();
          }
        }, {
          key: "initCurrentSessionCount",
          value: function initCurrentSessionCount() {
            this.sendCurrentSessionCount(this.sessionCount);
          }
        }, {
          key: "getCurrentSessionCount",
          value: function getCurrentSessionCount() {
            return this.currentSessionCount.asObservable();
          }
        }, {
          key: "sendCurrentSessionApply",
          value: function sendCurrentSessionApply(sessionApply) {
            this.currentSessionApply.next(sessionApply);
          }
        }, {
          key: "clearSessionApply",
          value: function clearSessionApply() {
            this.currentSessionApply.next();
          }
        }, {
          key: "initCurrentSessionApply",
          value: function initCurrentSessionApply() {
            this.sendCurrentSessionApply(this.sessionApply);
          }
        }, {
          key: "getCurrentSessionApply",
          value: function getCurrentSessionApply() {
            return this.currentSessionApply.asObservable();
          }
        }, {
          key: "sendCurrentSessionAll",
          value: function sendCurrentSessionAll(user) {
            this.currentSessionAll.next(user);
          }
        }, {
          key: "clearSessionAll",
          value: function clearSessionAll() {
            this.currentSessionAll.next();
          }
        }, {
          key: "initCurrentSessionAll",
          value: function initCurrentSessionAll() {
            this.sendCurrentSessionAll(this.allSessionsData);
          }
        }, {
          key: "getCurrentSessionAll",
          value: function getCurrentSessionAll() {
            return this.currentSessionAll.asObservable();
          }
        }, {
          key: "sendUserJoinedRoomAll",
          value: function sendUserJoinedRoomAll(user) {
            this.newUserJoinedRoomAll.next(user);
          }
        }, {
          key: "clearUserJoinedRoomAll",
          value: function clearUserJoinedRoomAll() {
            this.newUserJoinedRoomAll.next();
          }
        }, {
          key: "initUserJoinedRoomAll",
          value: function initUserJoinedRoomAll() {
            this.sendUserJoinedRoomAll(this.newUserJoinedRoomData);
          }
        }, {
          key: "getUserJoinedRoomAll",
          value: function getUserJoinedRoomAll() {
            return this.newUserJoinedRoomAll.asObservable();
          }
        }, {
          key: "sendUserLeftRoomAll",
          value: function sendUserLeftRoomAll(user) {
            this.oldUserLeftRoomAll.next(user);
          }
        }, {
          key: "clearUserLeftRoomAll",
          value: function clearUserLeftRoomAll() {
            this.oldUserLeftRoomAll.next();
          }
        }, {
          key: "initUserLeftRoomAll",
          value: function initUserLeftRoomAll() {
            this.sendUserLeftRoomAll(this.oldUserLeftRoomData);
          }
        }, {
          key: "getUserLeftRoomAll",
          value: function getUserLeftRoomAll() {
            return this.oldUserLeftRoomAll.asObservable();
          }
        }, {
          key: "sendNewMessageToRoomAll",
          value: function sendNewMessageToRoomAll(user) {
            this.NewMessageToRoomAll.next(user);
          }
        }, {
          key: "clearNewMessageToRoomAll",
          value: function clearNewMessageToRoomAll() {
            this.NewMessageToRoomAll.next();
          }
        }, {
          key: "initNewMessageToRoomAll",
          value: function initNewMessageToRoomAll() {
            this.sendNewMessageToRoomAll(this.NewMessageToRoomAllData);
          }
        }, {
          key: "getNewMessageToRoomAll",
          value: function getNewMessageToRoomAll() {
            return this.NewMessageToRoomAll.asObservable();
          }
        }, {
          key: "sendOldMessageToRoomAll",
          value: function sendOldMessageToRoomAll(user) {
            this.OldMessageToRoomAll.next(user);
          }
        }, {
          key: "clearOldMessageToRoomAll",
          value: function clearOldMessageToRoomAll() {
            this.OldMessageToRoomAll.next();
          }
        }, {
          key: "initOldMessageToRoomAll",
          value: function initOldMessageToRoomAll() {
            this.sendOldMessageToRoomAll(this.OldMessageToRoomAllData);
          }
        }, {
          key: "getOldMessageToRoomAll",
          value: function getOldMessageToRoomAll() {
            return this.OldMessageToRoomAll.asObservable();
          }
        }, {
          key: "sendSocketConnectionStatus",
          value: function sendSocketConnectionStatus(isConnected) {
            this.SocketConnectionStatus.next(isConnected);
          }
        }, {
          key: "clearSocketConnectionStatus",
          value: function clearSocketConnectionStatus() {
            this.SocketConnectionStatus.next();
          }
        }, {
          key: "initSocketConnectionStatus",
          value: function initSocketConnectionStatus() {//this.sendSocketConnectionStatus(false);
          }
        }, {
          key: "getSocketConnectionStatus",
          value: function getSocketConnectionStatus() {
            return this.SocketConnectionStatus.asObservable();
          } //#endregion send status of socket connected or disconnected
          //#region handle events from server in single end point

        }, {
          key: "setupSocketConnectionIfNotExists",
          value: function setupSocketConnectionIfNotExists(_user_id) {
            if (_user_id) {
              try {
                if (!this.socket || this.socket && !this.socket.connected) {
                  this.setupSocketConnection(_user_id);
                }
              } catch (ex) {
                this.setupSocketConnection(_user_id);
              }
            }
          }
        }, {
          key: "setupSocketConnection",
          value: function setupSocketConnection(_user_id) {
            var _this14 = this;

            //console.log("231 :: SOCKET Connection init");
            this.currentUserId = _user_id;
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SOCKET_ENDPOINT, {
              query: "user_id=" + _user_id + ""
            });
            this.socket.once('disconnected', function () {//this.sendSocketConnectionStatus(false);
              //console.log("235 :: disconnected");
            });
            this.socket.on('send_user_online_list', function (result) {
              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              } //console.log('Received a message from websocket service');


              _this14.sendCurrentOnlineUsersListObj(data);
            });
            this.socket.on('send_user_role_wise_list', function (result) {
              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              } //console.log('Received a message from websocket service');


              _this14.sendCurrentOnlineUsersListObj(data);
            });
            this.socket.on('sessions_response_getlength_bysearch', function (result) {
              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              } //console.log('140 :: Received a message from websocket service');


              _this14.sendCurrentSessionCount(data);
            });
            this.socket.on('sessions_response_getall_bysearch', function (result) {
              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              } //console.log('Received a message from websocket service :: sessions_response_getall_bysearch');


              _this14.sendCurrentSessionAll(data);
            });
            this.socket.on('send_session_apply_by_session_id', function (result) {
              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              } //console.log('Received a message from websocket service');


              _this14.sendCurrentSessionApply(data);
            });
            this.socket.on('connected_successfully', function (result) {
              _this14.sendSocketConnectionStatus(true);

              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              }

              _this14.currentUsersRooms = _this14.utilityService._.union(_this14.currentUsersRooms, [_this14.currentUserId, src_app_models__WEBPACK_IMPORTED_MODULE_4__["AppRooms"].my_app_main_room]);

              for (var _item in _this14.currentUsersRooms) {
                _this14.sendEventToJoinChatRoom(_this14.currentUsersRooms[_item], _this14.currentUserId);
              } //console.log('149 :: Received a message from websocket service :: connected_successfully', data);

            });
            this.socket.on('new_user_joined_room', function (result) {
              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              } //console.log('161 :: Received a message from websocket service', data);


              _this14.sendUserJoinedRoomAll(data);
            });
            this.socket.on('user_left_room', function (result) {
              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              } //console.log('166 :: Received a message from websocket service', data);


              _this14.sendUserLeftRoomAll(data);
            });
            this.socket.on('new_message_in_room', function (result) {
              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              } //console.log('166 :: Received a message from websocket service', data);


              _this14.sendNewMessageToRoomAll(data);
            });
            this.socket.on('get_all_old_chat_of_room', function (result) {
              var data = null;

              if (result) {
                if (result['success'] == true || result['success'] == false) {
                  data = result['data'];
                } else {
                  data = result;
                }
              } //console.log('171 :: Received a message from websocket service', data);


              _this14.sendOldMessageToRoomAll(data);
            });
          } //#endregion handle events from server in single end point
          //#region route client event to send server

        }, {
          key: "sendSocketDisconnectEvent",
          value: function sendSocketDisconnectEvent() {
            this.socket.emit('end');
          }
        }, {
          key: "getUserOnlineList",
          value: function getUserOnlineList(_sendDataOnlyMeFalseToAllTrue, _obj2Use4Filter, useAndTrueOrFalse) {
            this.socket.emit('get_user_online_list', _sendDataOnlyMeFalseToAllTrue, _obj2Use4Filter, useAndTrueOrFalse);
          }
        }, {
          key: "getUserRoleWiseList",
          value: function getUserRoleWiseList(_sendDataOnlyMeFalseToAllTrue, _obj2Use4Filter, useAndTrueOrFalse) {
            this.socket.emit('get_user_by_role_list', _sendDataOnlyMeFalseToAllTrue, _obj2Use4Filter, useAndTrueOrFalse);
          }
        }, {
          key: "getSessionCountByQuery",
          value: function getSessionCountByQuery(_sendDataOnlyMeFalseToAllTrue, _obj2Save) {
            this.socket.emit('sessions_request_getlength_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
          }
        }, {
          key: "getByIdSessions",
          value: function getByIdSessions(loanId) {
            this.socket.emit("request_sessions_getbyid", loanId);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_sessions_getbyid');
          }
        }, {
          key: "setSessionApply",
          value: function setSessionApply(_sendDataOnlyMeFalseToAllTrue, _obj2Save) {
            this.socket.emit('set_session_apply_by_borrower', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
          }
        }, {
          key: "updateSessionApply",
          value: function updateSessionApply(_sendDataOnlyMeFalseToAllTrue, _obj2Save, _updatedByUserObj) {
            var _updatedBy = _updatedByUserObj._id;

            switch (_updatedByUserObj.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Lender:
                this.socket.emit('update_session_apply_by_lender', _sendDataOnlyMeFalseToAllTrue, _obj2Save, _updatedByUserObj, _updatedBy);
                break;

              case src_app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Borrower:
                this.socket.emit('update_session_apply_by_borrower', _sendDataOnlyMeFalseToAllTrue, _obj2Save, _updatedByUserObj, _updatedBy);
                break;
            }
          }
        }, {
          key: "getSessionApplyBySelf",
          value: function getSessionApplyBySelf() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'get_session_apply_by_borrower');
          }
        }, {
          key: "getSessionApplyBySessionId",
          value: function getSessionApplyBySessionId(_sendDataOnlyMeFalseToAllTrue, _loanId) {
            this.socket.emit('get_session_apply_by_session_id', _sendDataOnlyMeFalseToAllTrue, _loanId);
          }
        }, {
          key: "getSessionAllByQuery",
          value: function getSessionAllByQuery(_sendDataOnlyMeFalseToAllTrue, _obj2Save, emitThisEvent) {
            this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, false, emitThisEvent);
          }
        }, {
          key: "setSessionApplyUpdateStatus",
          value: function setSessionApplyUpdateStatus(_sendDataOnlyMeFalseToAllTrue, _loanId, _loanApplyId, _status, _updatedBy, _transactionId) {
            var _obj2Save = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              status: _status,
              updatedBy: _updatedBy,
              transactionId: _transactionId
            };
            this.socket.emit('set_session_apply_status_updated_by_lender', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
          }
        }, {
          key: "setSessionUpdateStatus",
          value: function setSessionUpdateStatus(_sendDataOnlyMeFalseToAllTrue, _loanId, _loanApplyId, _status, _updatedBy) {
            var _obj2Save = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              status: _status,
              updatedBy: _updatedBy
            };
            this.socket.emit('set_session_status_updated_by_lender', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
          }
        }, {
          key: "setSessionUpdateStatusForTransaction",
          value: function setSessionUpdateStatusForTransaction(_sendDataOnlyMeFalseToAllTrue, _loanId, _loanApplyId, _status, _updatedBy, _transactionId) {
            var _obj2Save = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              status: _status,
              updatedBy: _updatedBy,
              transactionId: _transactionId
            };
            this.socket.emit('set_session_add_transactions_updated_by_lender', _sendDataOnlyMeFalseToAllTrue, _obj2Save);
          }
        }, {
          key: "sendEventToJoinChatRoom",
          value: function sendEventToJoinChatRoom(_roomId, _userId) {
            var _roomIdArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            this.currentUsersRooms.push(_roomId);
            this.socket.emit('join_room', {
              roomId: _roomId,
              userId: _userId,
              roomIdArr: _roomIdArr
            });
            this.requestAppNotificationWithCustomData(_roomId, [_userId]);
          }
        }, {
          key: "sendEventToLeaveChatRoom",
          value: function sendEventToLeaveChatRoom(_roomId, _userId) {
            this.currentUsersRooms = this.utilityService._.without(this.currentUsersRooms, _roomId);
            this.socket.emit('leave_room', {
              roomId: _roomId,
              userId: _userId
            });
          }
        }, {
          key: "sendEventWithMessageChatRoom",
          value: function sendEventWithMessageChatRoom(_roomId, _userId, _message, createdByUserObj) {
            this.socket.emit('message_in_room', {
              roomId: _roomId,
              userId: _userId,
              message: _message
            }, createdByUserObj);
          }
        }, {
          key: "sendEventToGetAllChatOfRoom",
          value: function sendEventToGetAllChatOfRoom(_roomId, skip) {
            this.socket.emit('get_all_old_chat_of_room', {
              roomId: _roomId,
              skip: skip
            });
          }
        }, {
          key: "sendEventToUpdateChatReceivedByUserOfRoom",
          value: function sendEventToUpdateChatReceivedByUserOfRoom(_roomId, userId) {
            this.socket.emit('update_chat_received_by_user_of_room', {
              roomId: _roomId,
              userId: userId
            });
          }
        }, {
          key: "sendEventToUpdateChatReadByUserOfRoom",
          value: function sendEventToUpdateChatReadByUserOfRoom(_roomId, userId) {
            this.socket.emit('update_chat_read_by_user_of_room', {
              roomId: _roomId,
              userId: userId
            });
          }
        }, {
          key: "emitEventWithNameAndData",
          value: function emitEventWithNameAndData(_eventName) {
            if (this.socket) {
              var _this$socket;

              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              (_this$socket = this.socket).emit.apply(_this$socket, [_eventName].concat(args));
            }
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers(_data) {
            this.socket.emit("user_getall", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'user_getall_list');
          }
        }, {
          key: "getAllMyContacts",
          value: function getAllMyContacts(_userId, role) {
            var skip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            this.socket.emit("request_contact_getall", _userId, role, skip);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_contact_getall');
          }
        }, {
          key: "getByIdMyContacts",
          value: function getByIdMyContacts(_data) {
            this.socket.emit("request_contact_getbyid", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_contact_getbyid');
          }
        }, {
          key: "getByIdMyContactsPendingMessages",
          value: function getByIdMyContactsPendingMessages(_roomIdArr, userId) {
            this.socket.emit("request_contact_pending_messages", _roomIdArr, userId);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_contact_pending_messages');
          }
        }, {
          key: "sendEventToGetAllChatOfRoomWithPromise",
          value: function sendEventToGetAllChatOfRoomWithPromise(_roomId, skip) {
            this.socket.emit('get_all_old_chat_of_room', {
              roomId: _roomId,
              skip: skip
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'set_all_old_chat_of_room');
          }
        }, {
          key: "sendEventToSaveCurrentTransaction",
          value: function sendEventToSaveCurrentTransaction(_transactiActionType, _transactionId, _userId, _transactionObj) {
            var _data = {
              transactionId: _transactionId,
              transactionActionType: _transactiActionType,
              createdBy: _userId,
              transactionObj: _transactionObj
            };
            this.socket.emit("recd_new_transaction", _data);
          }
        }, {
          key: "listenForUpdateStatusOfCurrentTransaction",
          value: function listenForUpdateStatusOfCurrentTransaction() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'added_recd_new_transaction');
          }
        }, {
          key: "sendEventToSaveCurrentTransactionDetails",
          value: function sendEventToSaveCurrentTransactionDetails(_transactiActionType, _transactionId, _userId, _transactionDetailsObj, _amount) {
            var _data = {
              transactionId: _transactionId,
              transactionActionType: _transactiActionType,
              createdBy: _userId,
              transactionDetailsObj: _transactionDetailsObj,
              amount: _amount
            };
            this.socket.emit("recd_new_transaction_details", _data);
          }
        }, {
          key: "listenForUpdateStatusOfCurrentTransactionDetails",
          value: function listenForUpdateStatusOfCurrentTransactionDetails() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'added_new_transaction_details');
          }
        }, {
          key: "sendEventToAddNewContact",
          value: function sendEventToAddNewContact(_contactObj) {
            this.socket.emit('recd_new_contact', _contactObj, this.currentUserId);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'added_by_self_recd_new_contact');
          }
        }, {
          key: "listenEventToAddNewContact",
          value: function listenEventToAddNewContact() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'added_recd_new_contact');
          }
        }, {
          key: "getAllPaymentTransactionDetails",
          value: function getAllPaymentTransactionDetails(_data) {
            this.socket.emit("request_transaction_details", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_transaction_details');
          }
        }, {
          key: "getAllBorrowerPaymentTransactionDetails",
          value: function getAllBorrowerPaymentTransactionDetails(_data) {
            this.socket.emit("request_borrower_payment_transaction_details", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_borrower_payment_transaction_details');
          }
        }, {
          key: "getAllUsersWithRequestData",
          value: function getAllUsersWithRequestData(_data, skip, dataTablesParameters) {
            this.socket.emit("request_user_getall", _data, skip, dataTablesParameters);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_user_getall');
          }
        }, {
          key: "updateUsersVerificationStatus",
          value: function updateUsersVerificationStatus(_userId, _isVerified) {
            this.socket.emit("request_user_update_verification", _userId, _isVerified);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_user_update_verification');
          }
        }, {
          key: "responseRecdSelfUserProfileUpdates",
          value: function responseRecdSelfUserProfileUpdates() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_recd_self_user_profile_updates');
          }
        }, {
          key: "requestTestTranslation",
          value: function requestTestTranslation(string2Translate, languageCode2Translate) {
            this.socket.emit("request_text_translation", string2Translate, languageCode2Translate);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_text_translation');
          }
        }, {
          key: "getSessionAllTodaysDateAcceptedOnly",
          value: function getSessionAllTodaysDateAcceptedOnly(_user_id, _role) {
            this.socket.emit("request_sessions_get_all_accepted_today", _user_id, _role);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_sessions_get_all_accepted_today');
          }
        }, {
          key: "addNewRatingReview",
          value: function addNewRatingReview(_obj2Save) {
            this.socket.emit("request_rating_addnew", _obj2Save);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_rating_added');
          }
        }, {
          key: "getByIdRatingReviewe",
          value: function getByIdRatingReviewe(_ratingId) {
            this.socket.emit("request_rating_getbyid", _ratingId);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_rating_getbyid');
          }
        }, {
          key: "getByLoanIdRatingReviewe",
          value: function getByLoanIdRatingReviewe(_obj2Save) {
            this.socket.emit("request_rating_getby_loanid", _obj2Save);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_rating_getby_loanid');
          }
        }, {
          key: "getByQuerySummaryRatingReviewe",
          value: function getByQuerySummaryRatingReviewe(_obj2Save) {
            this.socket.emit("request_get_ratings_summary_by_query", _obj2Save);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_get_ratings_summary_by_query');
          }
        }, {
          key: "deductAmountFromWallet",
          value: function deductAmountFromWallet(_fundsObj, _transactionDetails) {
            this.socket.emit("request_deduct_amount_from_wallet", _fundsObj, _transactionDetails);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_deduct_amount_from_wallet');
          }
        }, {
          key: "sendEventToUpdateCurrentSessionExecutionDetails",
          value: function sendEventToUpdateCurrentSessionExecutionDetails(_loanId, _loanApplyId, _userId, _loanStartDateTime, _loanEndDateTime, _duration, _updatedOn, _status, _transactionId, _transactiActionType, _transactionDetailsObj) {
            var _data = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              status: _status,
              updatedBy: _userId,
              loanStartDateTime: _loanStartDateTime,
              loanEndDateTime: _loanEndDateTime,
              duration: _duration,
              updatedOn: _updatedOn,
              transactionId: _transactionId,
              transactionActionType: _transactiActionType,
              transactionDetailsObj: _transactionDetailsObj
            };
            this.socket.emit("request_session_session_apply_update_for_execution_time", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_session_session_apply_update_for_execution_time');
          }
        }, {
          key: "getSessionUpdates",
          value: function getSessionUpdates() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_session_updates_for_single_session');
          }
        }, {
          key: "getAppNotificationWithCustomData",
          value: function getAppNotificationWithCustomData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_app_notification_with_custom_data');
          }
        }, {
          key: "requestAppNotificationWithCustomData",
          value: function requestAppNotificationWithCustomData(_roomId, notifyRoomExceptUserIds) {
            this.socket.emit("request_app_notification_with_custom_data", _roomId, notifyRoomExceptUserIds);
          }
        }, {
          key: "requestUpdateAppNotificationForViewedByUser",
          value: function requestUpdateAppNotificationForViewedByUser(notificationId) {
            this.socket.emit("request_update_app_notification_for_viewed_by_user", notificationId, this.currentUserId);
          }
        }, {
          key: "getUpdatesForSessionAllByLenderId",
          value: function getUpdatesForSessionAllByLenderId() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_updated_sessions_bylenderid');
          }
        }, {
          key: "adminPaidToBorrowerUpdateInTransactions",
          value: function adminPaidToBorrowerUpdateInTransactions(_Obj2Save) {
            this.socket.emit("set_transactions_paid_to_borrower", _Obj2Save);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_transactions_paid_to_borrower');
          }
        }, {
          key: "deleteUserById",
          value: function deleteUserById(_id, _user_id) {
            this.socket.emit('user_delete_by_id', {
              _id: _id,
              user_id: _user_id
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'user_delete_by_id');
          }
        }, {
          key: "sendEventToRejectSessionWithRefundRequest",
          value: function sendEventToRejectSessionWithRefundRequest(_loanId, _loanApplyId, _userId, _status) {
            var _data = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              status: _status,
              updatedBy: _userId
            };
            this.socket.emit("request_session_session_apply_reject_with_refund", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_session_session_apply_reject_with_refund');
          }
        }, {
          key: "sendEventToRejectSessionWithRefundRequestWiUpdateAll",
          value: function sendEventToRejectSessionWithRefundRequestWiUpdateAll(_loanId, _loanApplyId, _userId, _status, _transactionId, amount, cancellationCharges, finalAmount2Refund, _captureId, _id) {
            var _data = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              status: _status,
              updatedBy: _userId,
              transactionId: _transactionId,
              amount: amount,
              cancellationCharges: cancellationCharges,
              finalAmount2Refund: finalAmount2Refund,
              captureId: _captureId,
              _id: _id
            };
            this.socket.emit("request_session_session_apply_reject_with_refund_submit_request_and_update_all", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_session_session_apply_reject_with_refund_submit_request_and_update_all');
          }
        }, {
          key: "sendEventForLoanAmountPaidByLenderWithUpdateAll",
          value: function sendEventForLoanAmountPaidByLenderWithUpdateAll(_loanId, _loanApplyId, _userId, _LoanApplyObjCurrent) {
            var _data = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              updatedBy: _userId,
              LoanApplyObjCurrent: _LoanApplyObjCurrent,
              _id: _loanApplyId
            };
            this.socket.emit("request_session_session_apply_loan_amount_paid_by_lender_update_and_broadcast", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_session_session_apply_loan_amount_paid_by_lender_update_and_broadcast');
          }
        }, {
          key: "sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll",
          value: function sendEventForLoanAmountPaidByLenderConfirmByBorrowerWithUpdateAll(_loanId, _loanApplyId, _userId, _LoanApplyObjCurrent) {
            var _data = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              updatedBy: _userId,
              LoanApplyObjCurrent: _LoanApplyObjCurrent,
              _id: _loanApplyId
            };
            this.socket.emit("request_session_session_apply_loan_amount_paid_by_lender_update_and_broadcast", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_session_session_apply_loan_amount_paid_by_lender_update_and_broadcast');
          }
        }, {
          key: "sendEventForLoanAmountPaidToLenderWithUpdateAll",
          value: function sendEventForLoanAmountPaidToLenderWithUpdateAll(_loanId, _loanApplyId, _userId, _installmentKey, _loanTenureInMonths, _LoanApplyObjCurrent) {
            var _data = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              updatedBy: _userId,
              LoanApplyObjCurrent: _LoanApplyObjCurrent,
              _id: _loanApplyId,
              installmentKey: _installmentKey,
              loanTenureInMonths: _loanTenureInMonths
            };
            this.socket.emit("request_session_session_apply_loan_amount_paid_to_lender_update_and_broadcast", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_session_session_apply_loan_amount_paid_to_lender_update_and_broadcast');
          }
        }, {
          key: "sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll",
          value: function sendEventForLoanAmountPaidToLenderConfirmByLenderWithUpdateAll(_loanId, _loanApplyId, _userId, _installmentKey, _loanTenureInMonths, _LoanApplyObjCurrent) {
            var _data = {
              loanId: _loanId,
              loanApplyId: _loanApplyId,
              updatedBy: _userId,
              LoanApplyObjCurrent: _LoanApplyObjCurrent,
              _id: _loanApplyId,
              installmentKey: _installmentKey,
              loanTenureInMonths: _loanTenureInMonths
            };
            this.socket.emit("request_session_session_apply_loan_amount_paid_to_lender_update_and_broadcast", _data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_session_session_apply_loan_amount_paid_to_lender_update_and_broadcast');
          }
        }, {
          key: "addNewUser",
          value: function addNewUser(obj2use) {
            this.socket.emit('request_user_add_new', obj2use);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_user_add_new');
          }
        }, {
          key: "createNewOrderForPayment",
          value: function createNewOrderForPayment(obj2use) {
            this.socket.emit('request_order_for_paymentr_add_new', obj2use);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'response_order_for_paymentr_add_new');
          }
        }, {
          key: "getLoanMarketDataForBorrower",
          value: function getLoanMarketDataForBorrower() {
            var emitThisEvent = 'sessions_response_getall_bysearch_from_borrower';
            var _sendDataOnlyMeFalseToAllTrue = false;
            var _obj2Save = {
              isLoanRequested: false,
              status: 'pending',
              isDeleted: false
            };
            this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, true, emitThisEvent);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'sessions_response_getall_bysearch_from_borrower');
          }
        }, {
          key: "getLoanMarketDataForLender",
          value: function getLoanMarketDataForLender() {
            var emitThisEvent = 'sessions_response_getall_bysearch_from_lender';
            var _sendDataOnlyMeFalseToAllTrue = false;
            var _obj2Save = {
              isLoanRequested: true,
              status: 'pending',
              isDeleted: false
            };
            this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, true, emitThisEvent);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'sessions_response_getall_bysearch_from_lender');
          }
        }, {
          key: "getLoanMarketDataForSearch",
          value: function getLoanMarketDataForSearch(_obj2Save, emitThisEvent) {
            emitThisEvent = emitThisEvent ? emitThisEvent : 'sessions_response_getall_bysearch_from_borrower';
            var _sendDataOnlyMeFalseToAllTrue = false;
            this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, true, emitThisEvent);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'sessions_response_getall_bysearch_from_borrower');
          }
        }, {
          key: "getLoanMarketDataById",
          value: function getLoanMarketDataById(loanId) {
            var emitThisEvent = 'sessions_response_getall_bysearch_by_id';
            var _sendDataOnlyMeFalseToAllTrue = false;
            var _obj2Save = {
              isDeleted: false,
              _id: loanId
            };
            this.socket.emit('sessions_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, true, emitThisEvent);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'sessions_response_getall_bysearch_by_id');
          }
        }, {
          key: "getSessionApplyCountByQuery",
          value: function getSessionApplyCountByQuery(_sendDataOnlyMeFalseToAllTrue, _obj2Save, useAndTrueOrFalse, emitThisEvent) {
            emitThisEvent = emitThisEvent ? emitThisEvent : 'sessions_response_get_session_apply_count_by_query';
            this.socket.emit('sessions_request_get_session_apply_count_by_query', _sendDataOnlyMeFalseToAllTrue, _obj2Save, useAndTrueOrFalse, emitThisEvent);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, emitThisEvent);
          } //#endregion route client event to send server

        }, {
          key: "sendEventToCheckLastPaymentReturnedSuccessOrFailed",
          value: function sendEventToCheckLastPaymentReturnedSuccessOrFailed(PaymentObj) {
            this.socket.emit("recd_to_check_last_payment_status", PaymentObj);
          }
        }, {
          key: "listenForUpdateStatusOfLastPayment",
          value: function listenForUpdateStatusOfLastPayment() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'recd_confirmation_of_last_payment_status');
          }
        }, {
          key: "getSessionApplyAllByQuery",
          value: function getSessionApplyAllByQuery(_sendDataOnlyMeFalseToAllTrue, _obj2Save, emitThisEvent) {
            var useAndTrueOrFalse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            this.socket.emit('session_apply_request_getall_bysearch', _sendDataOnlyMeFalseToAllTrue, _obj2Save, useAndTrueOrFalse, emitThisEvent);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.socket, 'session_apply_response_getall_bysearch');
          }
        }]);

        return SocketioService;
      }();

      SocketioService.ctorParameters = function () {
        return [{
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }];
      };

      SocketioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])], SocketioService);
      /***/
    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var _socketio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../socketio.service */
      "bgkY");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./user.service */
      "qfBg");
      /* harmony import */


      var _utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./utility.service */
      "A1CT");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http, socketService, userService, utilityService) {
          var _this15 = this;

          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.socketService = socketService;
          this.userService = userService;
          this.utilityService = utilityService;
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/';
          this.currentUserLoanTypeWiseCountDetails = {};
          this.currentUserAdminDashboardDataDetails = {};
          this.allUserLevelsDataLenders = [];
          this.allUserLevelsDataBorrower = [];
          this.currentUserSubjectObject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); //this.socketService.setupSocketConnectionIfNotExists(this.utilityService.randomString(30, null));

          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
          this.socketService.SocketConnectionStatus.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (status) {
            if (status) {
              _this15.socketService.responseRecdSelfUserProfileUpdates().pipe().subscribe(function (data) {
                if (data && data['success']) {
                  _this15.sendCurrentUserObj(data["data"]);
                }
              }, function (error) {
                var errorMsg2show = ""; //this.PaymentTransactionDetailsArray = [];

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

              _this15.fetchAllUserLevelsByUserId();

              _this15.fetchAllUserLevelsByUpdateEvent();
            }
          });
        }

        _createClass(AuthenticationService, [{
          key: "returnUserTypeForUserFromSuppliedUserLevel",
          value: function returnUserTypeForUserFromSuppliedUserLevel(userType) {
            if (lodash__WEBPACK_IMPORTED_MODULE_5__["keys"](this.allUserLevelsDataLenders).lengtg <= 0 || lodash__WEBPACK_IMPORTED_MODULE_5__["keys"](this.allUserLevelsDataBorrower)) {
              lodash__WEBPACK_IMPORTED_MODULE_5__["throttle"](function () {
                this.fetchAllUserLevelsByUserId();
              }, 5000);
            }

            var allUserLevelsDataMerged = lodash__WEBPACK_IMPORTED_MODULE_5__["union"](this.allUserLevelsDataLenders, this.allUserLevelsDataBorrower);

            if (lodash__WEBPACK_IMPORTED_MODULE_5__["keys"](allUserLevelsDataMerged).length > 0) {
              var userLevelsName = null;

              if (userType) {
                var userLevelsDataObj = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](allUserLevelsDataMerged, {
                  '_id': userType
                })[0];

                if (userLevelsDataObj && userLevelsDataObj._id) {
                  userLevelsName = userLevelsDataObj.name;
                } else {
                  userLevelsName = null;
                }
              }

              if (userLevelsName) {
                return userLevelsName;
              }
            }

            return (userType || "").replace("_", " ");
          }
        }, {
          key: "sendCurrentUserObj",
          value: function sendCurrentUserObj(user) {
            this.currentUserSubjectObject.next(user);
            this.currentUserSubject.next(user);
          }
        }, {
          key: "clearCurrentUserObj",
          value: function clearCurrentUserObj() {
            this.currentUserSubjectObject.next();
            this.currentUserSubject.next(null);
          }
        }, {
          key: "initCurrentUserObj",
          value: function initCurrentUserObj() {
            this.sendCurrentUserObj(JSON.parse(localStorage.getItem('currentUser')));
          }
        }, {
          key: "getCurrentUserObj",
          value: function getCurrentUserObj() {
            return this.currentUserSubjectObject.asObservable();
          }
        }, {
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login(userName, password) {
            var _this16 = this;

            var _url2use = this.baseurl + 'api/post/user/admin/login'; //`${environment.apiUrl}/users/authenticate`;


            return this.http.post(_url2use, {
              userName: userName,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiTimeout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                var base = _this16.http.get(_this16.baseurl + 'session', {
                  headers: {
                    Authorization: "Bearer ".concat(user.token)
                  }
                }); ////Local storage please rome this 
                //console.log('35', base);


                localStorage.setItem('currentUser', JSON.stringify(user));

                _this16.sendCurrentUserObj(user);
              }

              return user;
            }));
          }
        }, {
          key: "autologin4registration",
          value: function autologin4registration(_id) {
            var _this17 = this;

            var _url2use = this.baseurl + 'api/post/user/admin/login4registration'; //`${environment.apiUrl}/users/authenticate`;


            return this.http.post(_url2use, {
              _id: _id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiTimeout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                var base = _this17.http.get(_this17.baseurl + 'session', {
                  headers: {
                    Authorization: "Bearer ".concat(user.token)
                  }
                }); ////Local storage please rome this 
                //console.log('35', base);


                localStorage.setItem('currentUser', JSON.stringify(user));

                _this17.sendCurrentUserObj(user);
              }

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            this.socketService.sendSocketDisconnectEvent();
            localStorage.removeItem('currentUser');
            this.clearCurrentUserObj();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initCurrentUserObj();
          }
        }, {
          key: "generateReport4SignedContract",
          value: function generateReport4SignedContract(LoanObjData) {
            var _url2use = this.baseurl + 'api/post/app/report/signed_contract';

            return this.http.post(_url2use, LoanObjData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiTimeout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              // login successful if there's a jwt token in the response
              return data;
            }));
          }
        }, {
          key: "fetchAllUserLevelsByUpdateEvent",
          value: function fetchAllUserLevelsByUpdateEvent() {
            var _this18 = this;

            this.userService.getAddUpdateUserUserLevels().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                _this18.fetchAllUserLevelsByUserId();
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
            });
          }
        }, {
          key: "fetchAllUserLevelsByUserId",
          value: function fetchAllUserLevelsByUserId() {
            var _this19 = this;

            this.userService.getUserLevelsAll(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this19.allUserLevelsDataLenders = _this19.utilityService.returnSortedObjectArray(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](data["data"], {
                  'role': src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"].Lender
                }), ['minimumContract']);
                _this19.allUserLevelsDataBorrower = _this19.utilityService.returnSortedObjectArray(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](data["data"], {
                  'role': src_app_models__WEBPACK_IMPORTED_MODULE_7__["Role"].Borrower
                }), ['minimumContract']); //this.allUserLevelsDataLenders = _.filter(data["data"], { 'role': Role.Lender });
                //this.allUserLevelsDataBorrower = _.filter(data["data"], { 'role': Role.Borrower });
                //this.alertService.success(data['message'], true);
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
            });
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _socketio_service__WEBPACK_IMPORTED_MODULE_8__["SocketioService"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }, {
          type: _utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _socketio_service__WEBPACK_IMPORTED_MODULE_8__["SocketioService"], _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]])], AuthenticationService);
      /***/
    },

    /***/
    "eqE8":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eqE8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<section class=\"resume schedule pt-3 pb-4\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"cal-time\">\n                    <div class=\"time\">\n                        <h2 class=\"title-text pt-1\" i18n>Reset Password</h2>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"login-page section-b-space pt-2\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 offset-lg-3 mt-5\">\n                <div class=\"theme-card\">\n                    <form [formGroup]=\"forgotPasswordForm\">\n                        <div id=\"reset_password_user_name\" *ngIf=\"!isOtpSent\">\n\n                            <div class=\"theme-form\">\n                                <p class=\"text-center mb-3\" i18n>\n                                    Please enter your email address and we'll send you a link to reset your password.\n                                </p>\n                                <div class=\"form-group\">\n                                    <input type=\"email\" formControlName=\"userName\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\"\n                                        autocomplete=\"userName\" placeholder=\"Enter Your Email\" />\n                                    <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.userName.errors.required\" i18n>Email is required</div>\n                                        <div *ngIf=\"f.userName.errors.email\" i18n>Email must be valid</div>\n                                    </div>\n                                </div>\n                                <div class=\"text-center\">\n                                    <button type=\"button\" (click)=\"onforgotPasswordSendOtp()\" [disabled]=\"loading\"\n                                        class=\"btn primary-btn btn-default radius-0 text-center\" i18n>Submit</button>\n                                </div>\n                                <img *ngIf=\"loading\" class=\"pl-3\"\n                                    src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                            </div>\n                        </div>\n                        <div id=\"reset_password_verification\" *ngIf=\"isOtpSent\">\n                            <div class=\"form-row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"text-gray\" i18n>\n                                        OTP has been sent your Email ID. Please enter OTP received in below OTP Field.\n                                    </div>\n                                    <hr>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <label i18n>OTP</label>\n                                    <input type=\"text\" formControlName=\"otp\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.otp.errors }\" />\n                                    <div *ngIf=\"submitted && f.otp.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.otp.errors.required\">OTP is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label for=\"password\" i18n>New Password</label>\n                                    <input type=\"text\" formControlName=\"password\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.password.errors.required\" i18n>Password is required</div>\n                                        <div *ngIf=\"f.password.errors.minlength\" i18n>Password must be at least 6 characters\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label i18n>Confirm Password</label>\n                                    <input type=\"text\" formControlName=\"confirmPassword\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                                    <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.confirmPassword.errors.required\" i18n>\n                                            Confirm Password is required\n                                        </div>\n                                        <div *ngIf=\"f.confirmPassword.errors.mustMatch\" i18n>\n                                            Passwords must match\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12 text-center\">\n                                    <hr>\n                                    <button type=\"button\" (click)=\"onSubmitResetPasswordOfUser()\" [disabled]=\"loading\"\n                                        class=\"btn btn-primary btn-lg\" i18n>Submit</button>\n                                    <img *ngIf=\"loading\" class=\"pl-3\"\n                                        src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n";
      /***/
    },

    /***/
    "ivMw":
    /*!**************************************************************************!*\
      !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function ivMw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "jmJk":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jmJk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"resume schedule pt-3 pb-4\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"cal-time\">\n                    <div class=\"time\">\n                        <h2 class=\"title-text pt-1\" i18n>Get In Touch With Us</h2>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<footer class=\"event contact set-relative p-b-0\" id=\"contact\">\n    <div class=\"container p-b-100\">\n        <div class=\"row\">\n            <div class=\"col-md-10 offset-md-1\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"title title3\">\n                            <div class=\"main-title\">\n                                <h2 class=\" text-black-50\" i18n>Partnership</h2>\n                            </div>\n\n                            <P class=\"text-black-50\" >partner@avitii-lending.com</P>\n\n\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"title title3\">\n                            <div class=\"main-title\">\n                                <h2 class=\" text-black-50\" i18n>Lender Support</h2>\n                            </div>\n\n                            <P class=\"text-black-50\" >lender@avitii-lending.com</P>\n\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"title title3\">\n                            <div class=\"main-title\">\n                                <h2 class=\" text-black-50\" i18n>Borrower Support</h2>\n                            </div>\n                            <div class=\"sub-title\">\n                                <P class=\"text-black-50\">borrower@avitii-lending.com </P>\n\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"col-xl-5 offset-xl-1 col-md-6 p-r-0 map\">\n                <div class=\"iframe-container border-0\">\n                  \n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.801736539438!2d-0.08865598482088188!3d51.51685327963669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cacece87517%3A0xe550bb3ead047ff2!2s65%20London%20Wall%2C%20London%20EC2M%205TU%2C%20UK!5e0!3m2!1sen!2sin!4v1616149104126!5m2!1sen!2sin\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n                </div>\n            </div>\n            <div class=\"col-xl-5 p-l-0 col-md-6 set-z-index form-footer\">\n                <div class=\"bg-white\">\n\n                    <form [formGroup]=\"contactUsForm\" (ngSubmit)=\"sendMailForContactUs()\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"name\" i18n>Name *</label>\n                                    <input formControlName=\"userName\" class=\"form-control\" id=\"name\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\">\n                                    <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.userName.errors.required\" i18n>required</div>\n                                        <div *ngIf=\"f.userName.errors.email\" i18n>must be valid</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"Phone\" i18n>Phone *</label>\n                                    <input formControlName=\"phoneNo\" class=\"form-control\" id=\"Phone\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.phoneNo.errors }\">\n                                    <div *ngIf=\"submitted && f.phoneNo.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.phoneNo.errors.required\" i18n>required</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"Email\" i18n>Email *</label>\n                                    <input formControlName=\"emailAddress\" class=\"form-control\" id=\"Email\" type=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\">\n                                    <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.emailAddress.errors.required\" i18n>required</div>\n                                        <div *ngIf=\"f.emailAddress.errors.email\" i18n>must be valid</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"Subject\" i18n>Subject *</label>\n                                    <input formControlName=\"subject\" class=\"form-control\" id=\"Subject\" type=\"text\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"Message\" i18n>Message *</label>\n                            <textarea formControlName=\"message\" class=\"form-control\" id=\"Message\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.message.errors }\">\n                                </textarea>\n                            <div *ngIf=\"submitted && f.message.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.message.errors.required\" i18n>required</div>\n                            </div>\n                        </div>\n                        <div class=\"text-center\">\n                            <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-default primary-btn m-0-auto\" i18n>Send\n                                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></span>\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n<app-footer></app-footer>";
      /***/
    },

    /***/
    "k/Fl":
    /*!*******************************************************!*\
      !*** ./src/app/home/blog-view/blog-view.component.ts ***!
      \*******************************************************/

    /*! exports provided: BlogViewComponent */

    /***/
    function kFl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogViewComponent", function () {
        return BlogViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blog_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blog-view.component.html */
      "u1AE");
      /* harmony import */


      var _blog_view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blog-view.component.css */
      "0MYx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");

      var BlogViewComponent = /*#__PURE__*/function () {
        function BlogViewComponent(alertService, userService, route, socketService, utilityService) {
          var _this20 = this;

          _classCallCheck(this, BlogViewComponent);

          this.alertService = alertService;
          this.userService = userService;
          this.route = route;
          this.socketService = socketService;
          this.utilityService = utilityService;
          this.blogsData = {};
          this.loading = false;
          this.route.queryParams.subscribe(function (params) {
            var documentId = params['id'];

            _this20.socketService.setupSocketConnectionIfNotExists(_this20.utilityService.randomString(30, null));

            setTimeout(function () {
              _this20.fetchBlogById(documentId);
            }, 3000);
          });
        }

        _createClass(BlogViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            var documentId = this.route.snapshot.params.id;
            this.socketService.setupSocketConnectionIfNotExists(this.utilityService.randomString(30, null));
            setTimeout(function () {
              _this21.fetchBlogById(documentId);
            }, 3000);
          }
        }, {
          key: "fetchBlogById",
          value: function fetchBlogById(documentId) {
            var _this22 = this;

            if (!documentId) {
              return;
            }

            this.userService.getBlogsById(documentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this22.blogsData = data["data"]; //this.alertService.success(data['message'], true);

                _this22.loading = false;
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

              _this22.alertService.error(errorMsg2show);

              _this22.loading = false;
            });
          }
        }]);

        return BlogViewComponent;
      }();

      BlogViewComponent.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_8__["SocketioService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]
        }];
      };

      BlogViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog-view',
        template: _raw_loader_blog_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_8__["SocketioService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]])], BlogViewComponent);
      /***/
    },

    /***/
    "mDuy":
    /*!******************************************************!*\
      !*** ./src/app/components/login/login.component.css ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function mDuy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "nav {\n    padding: 10px 0;\n}\n\nfooter {\n    padding: 0px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbmZvb3RlciB7XG4gICAgcGFkZGluZzogMHB4IDA7XG59Il19 */";
      /***/
    },

    /***/
    "n1B2":
    /*!********************************************!*\
      !*** ./src/app/logout/logout.component.ts ***!
      \********************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function n1B2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./logout.component.html */
      "r6bu");
      /* harmony import */


      var _logout_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logout.component.css */
      "vd7c");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(router, authenticationService) {
          _classCallCheck(this, LogoutComponent);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authenticationService.logout();
            this.router.navigate(['/login']);
          }
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }];
      };

      LogoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout',
        template: _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logout_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])], LogoutComponent);
      /***/
    },

    /***/
    "nAxv":
    /*!*************************************************************************!*\
      !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function nAxv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "eqE8");
      /* harmony import */


      var _forgot_password_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.component.css */
      "ivMw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../_helpers/must-match-validator */
      "nDMU");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(formBuilder, route, userService, alertService, appRouterService, router) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.userService = userService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.router = router;
          this.loading = false;
          this.submitted = false; // redirect to home if already logged in

          this.appRouterService.onInitRouteOnHomeIfLoggedin();
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.forgotPasswordForm = this.formBuilder.group({
              userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
              emailAddress: [''],
              otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }, {
              validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_9__["MustMatch"])('password', 'confirmPassword')
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.forgotPasswordForm.controls;
          }
        }, {
          key: "onforgotPasswordSendOtp",
          value: function onforgotPasswordSendOtp() {
            var _this23 = this;

            this.isOtpSent = false;

            if (!this.isOtpSent) {
              this.submitted = true; //console.log('inside Submit ' + this.forgotPasswordForm.invalid);
              // stop here if form is invalid

              if (this.forgotPasswordForm.controls.userName.invalid) {
                return;
              }

              this.forgotPasswordForm.get('emailAddress').setValue(this.forgotPasswordForm.get('userName').value); //console.log('inside');

              this.loading = true; //console.log("Reg Data => ", this.forgotPasswordForm.value);

              this.userService.resetPasswordSendOtp2user(this.forgotPasswordForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                //console.log('data => ', data)
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this23.alertService.success(data['message'], true);

                  _this23.loading = false;
                  _this23.isOtpSent = true;
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this23.alertService.error(data['message']);

                  _this23.loading = false;
                  _this23.isOtpSent = false;
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

                _this23.alertService.error(errorMsg2show);

                _this23.loading = false;
                _this23.isOtpSent = false;
              });
            }
          }
        }, {
          key: "onSubmitResetPasswordOfUser",
          value: function onSubmitResetPasswordOfUser() {
            var _this24 = this;

            if (this.isOtpSent) {
              this.submitted = true; //console.log('inside onSubmitRegisterUser ' + (this.forgotPasswordForm.invalid && this.forgotPasswordForm.controls.password.invalid && this.forgotPasswordForm.controls.confirmPassword.invalid && this.forgotPasswordForm.controls.acceptTerms.invalid && this.forgotPasswordForm.controls.otp.invalid));
              // stop here if form is invalid

              if (this.forgotPasswordForm.controls.password.invalid || this.forgotPasswordForm.controls.confirmPassword.invalid || this.forgotPasswordForm.controls.otp.invalid) {
                return;
              } //console.log('inside');


              this.loading = true; //console.log("Reg Data => ", this.forgotPasswordForm.value);

              this.forgotPasswordForm.get('userName').setValue(this.forgotPasswordForm.get('emailAddress').value);
              this.userService.resetPasswordVerifyOtpAndUpdate(this.forgotPasswordForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                //console.log('data => ', data)
                if (data && data['success']) {
                  //alert(JSON.stringify( data));//, {state:{ data} }
                  _this24.alertService.success('Password reset successfully', true);

                  _this24.router.navigate(['/login']);
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this24.alertService.error(data['message']);

                  _this24.loading = false;
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

                _this24.alertService.error(errorMsg2show);

                _this24.loading = false;
              });
            } else {
              this.alertService.error("Please Verify Email first");
            }
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ForgotPasswordComponent);
      /***/
    },

    /***/
    "nDMU":
    /*!*************************************************************!*\
      !*** ./src/app/components/_helpers/must-match-validator.ts ***!
      \*************************************************************/

    /*! exports provided: MustMatch */

    /***/
    function nDMU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
        return MustMatch;
      }); // custom validator to check that two fields match


      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "nwjo":
    /*!******************************************************!*\
      !*** ./src/app/components/alert/alert.component.css ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function nwjo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".alert-notify{\n    position: fixed;\n     /* left: 50%;\n    transform: translateX(-50%); */\n    z-index: 1200;\n     right: 7px; \n    bottom: -10px;\n    /* font-size: 12px; */\n  }\n  /* .alert-notify.alert-success {\n    background-color: #32a737;\n    border-color: #81C784;\n    color: white !important;\n  } */\n  .alert {\n    border: 0;\nmin-width: 300px;\n    color: #FFFFFF;\n    padding: 10px 15px;\n    font-size: 14px;\n}\n  .container .alert {\n    border-radius: 4px;\n}\n  .navbar .alert {\n    border-radius: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 85px;\n    width: 100%;\n    z-index: 3;\n}\n  .navbar:not(.navbar-transparent) .alert {\n    top: 70px;\n}\n  .alert span[data-notify=\"icon\"] {\n    font-size: 30px;\n    display: block;\n    left: 15px;\n    position: absolute;\n    top: 50%;\n    margin-top: -15px;\n}\n  .alert i.icon-close {\n    font-size: 12px !important;\n    color: #4d4d4d;\n    font-weight: bold;\n}\n  .alert button.close {\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    margin-top: -13px;\n    z-index: 1033;\n    background-color: #FFFFFF;\n    display: block;\n    border-radius: 50%;\n    opacity: .4;\n    line-height: 9px;\n    width: 25px;\n    height: 25px;\n    outline: 0 !important;\n    text-align: center;\n    padding: 3px;\n    font-weight: 300;\n}\n  .alert button.close:hover {\n    opacity: .55;\n}\n  .alert .close~span {\n    display: block;\n    max-width: 89%;\n}\n  .alert[data-notify=\"container\"] {\n    padding: 10px 10px 10px 20px;\n    border-radius: 4px;\n}\n  .alert.alert-with-icon {\n    padding-left: 65px;\n}\n  .alert-primary {\n    background-color: #4091e2;\n}\n  .alert-info {\n    background-color: #63d8f1;\n}\n  .alert-success {\n    background-color: #1cc88a!important\n}\n  .alert-warning {\n    background-color: #ffbc67;\n}\n  .alert-danger {\n    background-color: #fc727a;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0tBQ2Q7a0NBQzZCO0lBQzlCLGFBQWE7S0FDWixVQUFVO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtFQUN2QjtFQUNBOzs7O0tBSUc7RUFJSDtJQUNFLFNBQVM7QUFDYixnQkFBZ0I7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7RUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtFQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtBQUNkO0VBRUE7SUFDSSxTQUFTO0FBQ2I7RUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0FBQ3JCO0VBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtFQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0VBRUE7SUFDSSxZQUFZO0FBQ2hCO0VBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjtFQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0QjtFQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0VBRUE7SUFDSSx5QkFBeUI7QUFDN0I7RUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtFQUVBO0lBQ0k7QUFDSjtFQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0VBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1ub3RpZnl7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAvKiBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyAqL1xuICAgIHotaW5kZXg6IDEyMDA7XG4gICAgIHJpZ2h0OiA3cHg7IFxuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgLyogZm9udC1zaXplOiAxMnB4OyAqL1xuICB9XG4gIC8qIC5hbGVydC1ub3RpZnkuYWxlcnQtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyYTczNztcbiAgICBib3JkZXItY29sb3I6ICM4MUM3ODQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH0gKi9cblxuXG5cbiAgLmFsZXJ0IHtcbiAgICBib3JkZXI6IDA7XG5taW4td2lkdGg6IDMwMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250YWluZXIgLmFsZXJ0IHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5uYXZiYXIgLmFsZXJ0IHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogODVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG4ubmF2YmFyOm5vdCgubmF2YmFyLXRyYW5zcGFyZW50KSAuYWxlcnQge1xuICAgIHRvcDogNzBweDtcbn1cblxuLmFsZXJ0IHNwYW5bZGF0YS1ub3RpZnk9XCJpY29uXCJdIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGVmdDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5hbGVydCBpLmljb24tY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWxlcnQgYnV0dG9uLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTEzcHg7XG4gICAgei1pbmRleDogMTAzMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBsaW5lLWhlaWdodDogOXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYWxlcnQgYnV0dG9uLmNsb3NlOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuNTU7XG59XG5cbi5hbGVydCAuY2xvc2V+c3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA4OSU7XG59XG5cbi5hbGVydFtkYXRhLW5vdGlmeT1cImNvbnRhaW5lclwiXSB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hbGVydC5hbGVydC13aXRoLWljb24ge1xuICAgIHBhZGRpbmctbGVmdDogNjVweDtcbn1cblxuLmFsZXJ0LXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDkxZTI7XG59XG5cbi5hbGVydC1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNkOGYxO1xufVxuXG4uYWxlcnQtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYzg4YSFpbXBvcnRhbnRcbn1cblxuLmFsZXJ0LXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJjNjc7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYzcyN2E7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "o0su":
    /*!***********************************!*\
      !*** ./src/app/services/index.ts ***!
      \***********************************/

    /*! exports provided: AlertService, AuthenticationService, UserService */

    /***/
    function o0su(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"];
      });
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"];
      });
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user.service */
      "qfBg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"];
      });
      /***/

    },

    /***/
    "qcfa":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/faqs/faqs.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function qcfa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"resume schedule pt-3 pb-4\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"cal-time\">\n                    <div class=\"time\">\n                        <h2 class=\"title-text pt-1\" i18n>FAQs</h2>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- faq section -->\n<section class=\"saas1 faq testimonial-bg\" id=\"faq\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"faq-block\">\n                    <div>\n                        <h3 class=\"frequent-text\" i18n>Frequently Asked Questions</h3>\n                        <h6 i18n>Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun\n                            and\n                            functional. Clean aesthetics supported by a strong concept is what we stand for.</h6>\n                        <div class=\"accordion faq\" id=\"accordionExample\">\n\n                            <ul class=\"nav nav-tabs nav-justified my-4\">\n                                <li class=\"nav-item\">\n                                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#general-faqs\" i18n>General questions</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#borrower-faqs\" i18n>For Borrowers</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#lender-faqs\" i18n>For Lenders</a>\n                                </li>\n                              </ul>\n                              \n                              <!-- Tab panes -->\n                              <div class=\"tab-content\">\n                                <div class=\"tab-pane container active\" id=\"general-faqs\">\n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse1\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            How much can I borrow?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse1\">\n                                            <div class=\"card-body\" i18n>\n                                                Once you have created your profile as a borrower, you can fill in your expenses and income within the budget section. Based on these figures, the system tells you how much money you can afford to borrow from us.\n        \n        \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse2\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            Can I repay my loan early?\n        \n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse2\">\n                                            <div class=\"card-body\" i18n>\n                                                You can always pay off your loans earlier and even get a smaller discount if you choose this option.\n        \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse3\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            Does the lender offer refinancing?\n        \n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse3\">\n                                            <div class=\"card-body\" i18n>\n                                                Many lenders choose to keep the same lenders. If their terms are good, one can always borrow from the same lender again.\n        \n                                            </div>\n                                        </div>\n                                    </div>\n                               \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse4\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            When should I apply?\n        \n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse4\">\n                                            <div class=\"card-body\" i18n>\n                                                You can always apply for money on the website as long as you have no debt, but the payment date will always be the next payment date.\n        \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane container fade\" id=\"borrower-faqs\">\n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse5\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            Can anyone become a borrower on avitii?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse5\">\n                                            <div class=\"card-body\" i18n>\n                                                All it takes to become a borrower, is your ability to solve problems in a given domain in addition to having the heart of a good teacher (the ability to explain how problems are solved)\n        \n        \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse6\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            You need to sign up to borrow money?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse6\">\n                                            <div class=\"card-body\" i18n>\n                                                Once you have created your profile and filled it out, you can apply for money. Remember to fill it all out to be able to get the best deals, the more you tell about yourself, the cheaper loans you can apply for.\n                                            </div>\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse7\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            What types of loans can one apply for?\n        \n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse7\">\n                                            <div class=\"card-body\" i18n>\n                                                You can search for different loans on the website. You can choose to make your own application or you can search for money on a lender application. We have divided them into several groups such as normal loans, business loans, investment loans, etc.\n        \n        \n                                            </div>\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse8\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            Why should I use Avitii lending?\n        \n        \n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse8\">\n                                            <div class=\"card-body\" i18n>\n                                                Avitii-lending offers an alternative to other loan options, here you have the opportunity to borrow from individuals and companies. Avitii offers a platform that is open to everyone and can be used by everyone.\n        \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse9\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            What is the interest rate?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse9\">\n                                            <div class=\"card-body\" i18n>\n                                                Avitii-lending works to ensure that there is freedom to enter into the agreements that you want, so as a borrower, you need to look for the lender who has the best terms to get the best loans. We do not interfere in the agreements between two partners, but we set some guidelines that everyone must follow to provide the best possible security.\n        \n                                            </div>\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse9\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            How do I repay my loan?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse9\">\n                                            <div class=\"card-body\" i18n>\n                                                Once you have taken out a loan on the website, you sign a contract with the lender, this agreement is binding and can be used in court if the agreement is not kept. 1-3 days before the payment date, you will receive an e-mail or text message with instructions on how and which account you should pay your loan to. Avitii-lending does not receive or borrow money, everything goes between the users of the website.\n                                            </div>\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse9\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            How much should I apply for?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse9\">\n                                            <div class=\"card-body\" i18n>\n                                                The system is locked into the budget section and therefore depends on your income. We have developed a system to help people borrow money, while at the same time not being able to borrow more than you can afford.\n                                            </div>\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse9\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            How quickly is my loan financed?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse9\">\n                                            <div class=\"card-body\" i18n>\n                                                Avitii-lending does not lend money on the website, everything goes between private individuals, so it depends a lot on when the borrower has time, how much they have filled out their profile, which makes it easier for a lender to make a quick decision. But it also depends on how much time a lender invests in this business.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane container fade\" id=\"lender-faqs\">\n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse9\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            You need to sign up to lend money?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse9\">\n                                            <div class=\"card-body\" i18n>\n                                                Once you have created your profile and filled it out, you can borrow money. Once you have completed your profile, choose which package solution is best for you as a lender. The larger package you choose, the more information you have available when deciding who to lend. This can ensure you a better basis for your choices and secure your money as an investment\n                                            </div>\n                                        </div>\n                                    </div>\n        \n        \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse9\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            What types of loans can I make?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse9\">\n                                            <div class=\"card-body\" i18n>\n                                                You can make various loans on the website. On the website you can make a lender application. We have divided them into several groups such as normal loans, business loans, investment loans, etc.\n                                            </div>\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse9\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            Why should I use Avitii lending?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse9\">\n                                            <div class=\"card-body\" i18n>\n                                                Avitii-lending offers an alternative to other loan options, here you have the opportunity to lend to individuals and companies. Avitii offers a platform that is open to everyone and can be used by everyone.\n                                            </div>\n                                        </div>\n                                    </div>\n        \n        \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse9\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            What is the interest rate?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse9\">\n                                            <div class=\"card-body\" i18n>\n                                                Avitii-lending works to ensure that there is freedom to enter into the agreements that you want, so as a lender, you need to look for the borrower who has the best terms to get the best loans. We do not interfere in the agreements between two partners, but we set some guidelines that everyone must follow to provide the best possible security.\n                                            </div>\n                                        </div>\n                                    </div>\n        \n        \n                                    <div class=\"card\">\n                                        <div aria-expanded=\"false\" class=\"card-header collapsed\" data-target=\"#collapse9\"\n                                             data-toggle=\"collapse\"\n                                             role=\"heading\" i18n>\n                                            <a>\n                                                <div class=\"icon icon-angle-right rotate\"></div>\n                                            </a>\n                                            How do you get your loans repaid?\n                                        </div>\n                                        <div class=\"collapse\" data-parent=\"#accordionExample\" id=\"collapse9\">\n                                            <div class=\"card-body\" i18n>\n                                                Once you have given a loan on the site, you sign a contract with the borrower. This agreement is binding and can be used in court if the agreement is not kept. 1-3 days before the payment date, the system sends an e-mail or text message with instructions on how and to which account the borrower should pay your loan. Avitii-lending does not receive or borrow money, everything goes between the users of the website, so they must therefore pay directly to your account as a lender.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                              </div>\n\n                          \n\n                           \n\n                        </div>\n                        <h6 class=\"link\" i18n>If you can not find answers to your questions contacts us through <a>support@avitii-lending.com</a> or     \n                            Submit enquiry through Contact us. </h6>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"faq-img-block\">\n                    <img alt=\"faq-person\" class=\"img-fluid\" src=\"./assets/img/faq-img.png\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- end faq section -->\n\n\n<app-footer></app-footer>";
      /***/
    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../socketio.service */
      "bgkY");
      /* harmony import */


      var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utility.service */
      "A1CT");
      /* harmony import */


      var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/internal/observable/fromEvent */
      "q7YW");
      /* harmony import */


      var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__); //import { Socket } from 'ngx-socket-io';


      var UserService = /*#__PURE__*/function () {
        function UserService(http, socketioService, utilityService) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.socketioService = socketioService;
          this.utilityService = utilityService;
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/';
          this.allAppUsersCollections = {};
          this.latestUserIdArrayMissingFromLocal = [];
        }

        _createClass(UserService, [{
          key: "getAll",
          value: function getAll(user) {
            var _role = null; //var _result=this.http.post<any>(`http://localhost:4444/api/get/user/getall`,{})
            //.pipe(user => {
            // login successful if there's a jwt token in the response
            //alert(JSON.stringify(user))
            //return user;
            //});
            //alert(JSON.stringify( _result));
            //return this.http.get<User[]>(`http://localhost:4444/api/get/user/getall`, null);
            //return this.http.get<User[]>(`${environment.apiUrl}/users`);
            ////this.socket.emit('user_getall', _role);
            ////var _result = this.socket.fromEvent<User[]>('user_getall_list');
            //alert(JSON.stringify( _result));
            ////return _result;

            return this.http.post(this.baseurl + 'api/post/user/getall', user, {});
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get(this.baseurl + 'users/' + id);
          }
        }, {
          key: "register",
          value: function register(user) {
            //console.log(user);
            return this.http.post(this.baseurl + 'api/post/user/admin/register', user); //return this.http.post(`http://localhost:4444/api/user/register`, user);
            //return this.http.post(`${environment.apiUrl}/api/user/register`, user);
            //return this.http.post(`${environment.apiUrl}/users/register`, user);
          }
        }, {
          key: "sendOtp2user",
          value: function sendOtp2user(user) {
            return this.http.post(this.baseurl + 'api/post/users/sendotp', user);
          }
        }, {
          key: "verifyOtpAndRegister",
          value: function verifyOtpAndRegister(user) {
            user["serverUrl"] = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;
            return this.http.post(this.baseurl + 'api/post/users/verifyotp', user);
          }
        }, {
          key: "verifyUserAndRegister",
          value: function verifyUserAndRegister(user) {
            user["serverUrl"] = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;
            return this.http.post(this.baseurl + 'api/post/users/verifyuserandregister', user);
          }
        }, {
          key: "resetPasswordSendOtp2user",
          value: function resetPasswordSendOtp2user(user) {
            return this.http.post(this.baseurl + 'api/post/users/resetpassword/sendotp', user);
          }
        }, {
          key: "resetPasswordVerifyOtpAndUpdate",
          value: function resetPasswordVerifyOtpAndUpdate(user) {
            return this.http.post(this.baseurl + 'api/post/users/resetpassword/verifyotp', user);
          }
        }, {
          key: "update",
          value: function update(user) {
            return this.http.put(this.baseurl + 'users/' + user._id, user);
          }
        }, {
          key: "delete",
          value: function _delete(_id, _user_id) {
            ////this.socket.emit('user_delete_by_id', { _id: _id, user_id: _user_id });
            ////var _result = this.socket.fromEvent<User[]>('user_delete_by_id');
            //alert(JSON.stringify( _result));
            ////return _result;
            //return this.http.delete(`${environment.apiUrl}/users/${id}`);
            return;
          }
        }, {
          key: "getUserById",
          value: function getUserById(id) {
            return this.http.post(this.baseurl + 'api/post/user/getbyid', {
              userId: id
            });
          }
        }, {
          key: "updateUserById",
          value: function updateUserById(user) {
            return this.http.post(this.baseurl + 'api/post/user/update/byid', user);
          }
        }, {
          key: "updateUserByIdFromAdmin",
          value: function updateUserByIdFromAdmin(user, updatedBy) {
            return this.http.post(this.baseurl + 'api/post/user/admin/update/byid', {
              user: user,
              updatedBy: updatedBy
            });
          }
        }, {
          key: "authenticateAndLoginUser",
          value: function authenticateAndLoginUser(userName, password) {
            return this.http.post(this.baseurl + 'api/post/user/admin/login', {
              userName: userName,
              password: password
            });
          }
        }, {
          key: "sendMailForContactUs",
          value: function sendMailForContactUs(contactedUsersObj) {
            return this.http.post(this.baseurl + 'api/post/app/contactus', contactedUsersObj);
          }
        }, {
          key: "sendMailForAnyReason",
          value: function sendMailForAnyReason(toEmailId, subject, body) {
            var _message = {
              toEmailId: toEmailId,
              subject: subject,
              body: body
            };
            return this.http.post(this.baseurl + 'api/post/app/sendmail', _message);
          }
        }, {
          key: "proccessAllAppUsersCollections",
          value: function proccessAllAppUsersCollections(userIdArray) {
            var _this25 = this;

            if (userIdArray && Object.keys(userIdArray).length > 0) {
              if (!this.latestUserIdArrayMissingFromLocal) {
                this.latestUserIdArrayMissingFromLocal = [];
              }

              var existingUserIdArray = this.utilityService._.map(this.allAppUsersCollections, "userId");

              this.latestUserIdArrayMissingFromLocal = this.utilityService._.difference(userIdArray, existingUserIdArray);

              if (this.utilityService._.keys(existingUserIdArray).length == 0 || this.latestUserIdArrayMissingFromLocal.length > 0) {
                this.alreadySubscribedForUsersArray = false;
              }

              if (!this.alreadySubscribedForUsersArray) {
                this.alreadySubscribedForUsersArray = true;
                this.getAppUsersCollections(userIdArray).subscribe(function (result) {
                  var data = null;

                  if (result) {
                    if (result['success'] == true || result['success'] == false) {
                      data = result['data'];
                    } else {
                      data = result;
                    }
                  }

                  if (data) {
                    _this25.allAppUsersCollections = _this25.utilityService._.merge(_this25.allAppUsersCollections, _this25.utilityService._.mapKeys(data, '_id'));
                  }
                });
              }
            } else {//this.getAppUsersCollections(userIdArray);
            }
          }
        }, {
          key: "getAppUsersCollections",
          value: function getAppUsersCollections(userIdArray) {
            this.socketioService.emitEventWithNameAndData('request_user_getall_get_user_id', userIdArray);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_getall_by_user_id');
          }
        }, {
          key: "addUpdateUserProfilePortFolio",
          value: function addUpdateUserProfilePortFolio(userPortFolio) {
            this.socketioService.emitEventWithNameAndData('request_user_add_update_portfolio_data', userPortFolio);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_add_update_portfolio_data');
          }
        }, {
          key: "getUserProfilePortFolioById",
          value: function getUserProfilePortFolioById(portFolioId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_id_portfolio_data', portFolioId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_id_portfolio_data');
          }
        }, {
          key: "getUserProfilePortFolioByUserId",
          value: function getUserProfilePortFolioByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_portfolio_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_portfolio_data');
          }
        }, {
          key: "resetExistingUsersPasswordByUserId",
          value: function resetExistingUsersPasswordByUserId(_userId, _userName, _password, _password2update, _role) {
            var newUser = {
              _id: _userId,
              userName: _userName,
              password: _password,
              role: _role,
              password2update: _password2update
            };
            this.socketioService.emitEventWithNameAndData('request_user_to_reset_existing_password', newUser);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_to_reset_existing_password');
          }
        }, {
          key: "addUpdateUserIncomeDetails",
          value: function addUpdateUserIncomeDetails(userIncomeDetails) {
            this.socketioService.emitEventWithNameAndData('request_user_add_update_user_income_details_data', userIncomeDetails);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_add_update_user_income_details_data');
          }
        }, {
          key: "getUserIncomeDetailsById",
          value: function getUserIncomeDetailsById(userIncomeDetailsId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_id_user_income_details_data', userIncomeDetailsId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_id_user_income_details_data');
          }
        }, {
          key: "getUserIncomeDetailsByUserId",
          value: function getUserIncomeDetailsByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_income_details_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_user_income_details_data');
          }
        }, {
          key: "addUpdateUserExpenseDetails",
          value: function addUpdateUserExpenseDetails(userExpenseDetails) {
            this.socketioService.emitEventWithNameAndData('request_user_add_update_user_expense_details_data', userExpenseDetails);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_add_update_user_expense_details_data');
          }
        }, {
          key: "getUserExpenseDetailsById",
          value: function getUserExpenseDetailsById(userExpenseDetailsId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_id_user_expense_details_data', userExpenseDetailsId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_id_user_expense_details_data');
          }
        }, {
          key: "getUserExpenseDetailsByUserId",
          value: function getUserExpenseDetailsByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_expense_details_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_user_expense_details_data');
          }
        }, {
          key: "returnUsersObjFromLocal",
          value: function returnUsersObjFromLocal(sessionAppliedByBorrowers, lenderTrue, returnOnlyThisKey) {
            var userId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            if (sessionAppliedByBorrowers || userId) {
              if (this.allAppUsersCollections && this.utilityService._.keys(this.allAppUsersCollections).length > 0 || userId) {
                if (!userId) {
                  var _obj = this.utilityService._.first(sessionAppliedByBorrowers);

                  if (_obj) {
                    if (lenderTrue) {
                      userId = _obj.lenderId;
                    } else {
                      userId = _obj.borrowerId;
                    }
                  }
                }

                if (userId) {
                  var userObj = this.utilityService._.filter(this.allAppUsersCollections, {
                    "_id": userId
                  })[0];

                  if (userObj) {
                    if (returnOnlyThisKey) {
                      return userObj[returnOnlyThisKey];
                    } else {
                      return userObj;
                    }
                  }
                }
              }
            }
          }
        }, {
          key: "updateUsersIncomeVerificationStatus",
          value: function updateUsersIncomeVerificationStatus(_documentId, _status2update, _updatedBy) {
            this.socketioService.emitEventWithNameAndData("request_user_update_income_verification", _documentId, _status2update, _updatedBy);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_update_income_verification');
          }
        }, {
          key: "updateUsersExpenseVerificationStatus",
          value: function updateUsersExpenseVerificationStatus(_documentId, _status2update, _updatedBy) {
            this.socketioService.emitEventWithNameAndData("request_user_update_expense_verification", _documentId, _status2update, _updatedBy);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_update_expense_verification');
          }
        }, {
          key: "getUserIncomeExpenseDetailsByUserId",
          value: function getUserIncomeExpenseDetailsByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_income_expense_details_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_user_income_expense_details_data');
          }
        }, {
          key: "getUserLoanTypeWiseCountDetailsByUserId",
          value: function getUserLoanTypeWiseCountDetailsByUserId(userId, role) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_loan_type_wise_count_details_data', userId, role);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_loan_type_wise_count_details_data');
          }
        }, {
          key: "getAdminDashboardDataOnLogin",
          value: function getAdminDashboardDataOnLogin(userId, role) {
            this.socketioService.emitEventWithNameAndData('request_to_get_admin_dashboard_details_data', userId, role);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_to_get_admin_dashboard_details_data');
          }
        }, {
          key: "getUsersDashboardData",
          value: function getUsersDashboardData(userId, role) {
            this.socketioService.emitEventWithNameAndData('request_to_get_users_dashboard_details_data', userId, role);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_to_get_users_dashboard_details_data');
          }
        }, {
          key: "addUpdateUserBlogs",
          value: function addUpdateUserBlogs(blogs) {
            this.socketioService.emitEventWithNameAndData('request_user_add_update_blogs_data', blogs);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_add_update_blogs_data');
          }
        }, {
          key: "getBlogsById",
          value: function getBlogsById(blogsId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_id_blogs_data', blogsId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_id_blogs_data');
          }
        }, {
          key: "getBlogsByUserId",
          value: function getBlogsByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_blogs_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_blogs_data');
          }
        }, {
          key: "updateBlogsStatus",
          value: function updateBlogsStatus(_documentId, _status2update, _updatedBy) {
            this.socketioService.emitEventWithNameAndData("request_user_update_blogs_verification", _documentId, _status2update, _updatedBy);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_update_blogs_verification');
          }
        }, {
          key: "getBlogsAll",
          value: function getBlogsAll(_skip) {
            this.socketioService.emitEventWithNameAndData("request_user_getall_blogs", _skip);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_getall_blogs');
          }
        }, {
          key: "getBlogsAllByQuery",
          value: function getBlogsAllByQuery(_skip) {
            this.socketioService.emitEventWithNameAndData("request_user_getall_blogs", _skip);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_getall_blogs');
          }
        }, {
          key: "addUpdateUserUserLevels",
          value: function addUpdateUserUserLevels(userLevels) {
            this.socketioService.emitEventWithNameAndData('request_user_add_update_user_levels_data', userLevels);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_add_update_user_levels_data');
          }
        }, {
          key: "getAddUpdateUserUserLevels",
          value: function getAddUpdateUserUserLevels() {
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_add_update_user_levels_data');
          }
        }, {
          key: "getUserLevelsById",
          value: function getUserLevelsById(userLevelsId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_id_user_levels_data', userLevelsId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_id_user_levels_data');
          }
        }, {
          key: "getUserLevelsByUserId",
          value: function getUserLevelsByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_levels_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_user_levels_data');
          }
        }, {
          key: "updateUserLevelsStatus",
          value: function updateUserLevelsStatus(_documentId, _status2update, _updatedBy) {
            this.socketioService.emitEventWithNameAndData("request_user_update_user_levels_verification", _documentId, _status2update, _updatedBy);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_update_user_levels_verification');
          }
        }, {
          key: "getUserLevelsAll",
          value: function getUserLevelsAll(_skip) {
            this.socketioService.emitEventWithNameAndData("request_user_getall_user_levels", _skip);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_getall_user_levels');
          }
        }, {
          key: "getUserLevelsAllByQuery",
          value: function getUserLevelsAllByQuery(_skip) {
            this.socketioService.emitEventWithNameAndData("request_user_getall_user_levels", _skip);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_getall_user_levels');
          }
        }, {
          key: "updateUsersDataKeyVerificationStatus",
          value: function updateUsersDataKeyVerificationStatus(_userId, _verifiedKey, _isVerified) {
            this.socketioService.emitEventWithNameAndData("request_user_internal_key_update_verification", _userId, _verifiedKey, _isVerified);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_internal_key_update_verification');
          }
        }, {
          key: "addUpdateUserRestrictionDetails",
          value: function addUpdateUserRestrictionDetails(userUserRestrictionDetails) {
            this.socketioService.emitEventWithNameAndData('request_user_add_update_user_restriction_details_data', userUserRestrictionDetails);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_add_update_user_restriction_details_data');
          }
        }, {
          key: "getUserRestrictionDetailsById",
          value: function getUserRestrictionDetailsById(userUserRestrictionDetailsId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_id_user_restriction_details_data', userUserRestrictionDetailsId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_id_user_restriction_details_data');
          }
        }, {
          key: "getUserRestrictionDetailsByUserId",
          value: function getUserRestrictionDetailsByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_restriction_details_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_user_restriction_details_data');
          }
        }, {
          key: "updateUserRestrictionVerificationStatus",
          value: function updateUserRestrictionVerificationStatus(_documentId, _status2update, _updatedBy) {
            this.socketioService.emitEventWithNameAndData("request_user_update_restriction_verification", _documentId, _status2update, _updatedBy);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_update_restriction_verification');
          }
        }, {
          key: "getUserRestrictionExpenseDetailsByUserId",
          value: function getUserRestrictionExpenseDetailsByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_user_restriction_expense_details_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_user_restriction_expense_details_data');
          }
        }, {
          key: "addUpdateUserPartners",
          value: function addUpdateUserPartners(partners) {
            this.socketioService.emitEventWithNameAndData('request_user_add_update_partners_data', partners);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_add_update_partners_data');
          }
        }, {
          key: "getPartnersById",
          value: function getPartnersById(partnersId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_id_partners_data', partnersId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_id_partners_data');
          }
        }, {
          key: "getPartnersByUserId",
          value: function getPartnersByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_partners_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_partners_data');
          }
        }, {
          key: "updatePartnersStatus",
          value: function updatePartnersStatus(_documentId, _status2update, _updatedBy) {
            this.socketioService.emitEventWithNameAndData("request_user_update_partners_verification", _documentId, _status2update, _updatedBy);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_update_partners_verification');
          }
        }, {
          key: "getPartnersAll",
          value: function getPartnersAll(_skip) {
            this.socketioService.emitEventWithNameAndData("request_user_getall_partners", _skip);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_getall_partners');
          }
        }, {
          key: "getPartnersAllByQuery",
          value: function getPartnersAllByQuery(_skip) {
            this.socketioService.emitEventWithNameAndData("request_user_getall_partners", _skip);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_getall_partners');
          }
        }, {
          key: "addUpdateUserCustomerReview",
          value: function addUpdateUserCustomerReview(customerReview) {
            this.socketioService.emitEventWithNameAndData('request_user_add_update_customerReview_data', customerReview);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_add_update_customerReview_data');
          }
        }, {
          key: "getCustomerReviewById",
          value: function getCustomerReviewById(customerReviewId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_id_customerReview_data', customerReviewId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_id_customerReview_data');
          }
        }, {
          key: "getCustomerReviewByUserId",
          value: function getCustomerReviewByUserId(userId) {
            this.socketioService.emitEventWithNameAndData('request_user_get_by_userid_customerReview_data', userId);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_get_by_userid_customerReview_data');
          }
        }, {
          key: "updateCustomerReviewStatus",
          value: function updateCustomerReviewStatus(_documentId, _status2update, _updatedBy) {
            this.socketioService.emitEventWithNameAndData("request_user_update_customerReview_verification", _documentId, _status2update, _updatedBy);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_update_customerReview_verification');
          }
        }, {
          key: "getCustomerReviewAll",
          value: function getCustomerReviewAll(_skip) {
            this.socketioService.emitEventWithNameAndData("request_user_getall_customerReview", _skip);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_getall_customerReview');
          }
        }, {
          key: "getCustomerReviewAllByQuery",
          value: function getCustomerReviewAllByQuery(_skip) {
            this.socketioService.emitEventWithNameAndData("request_user_getall_customerReview", _skip);
            return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.socketioService.socket, 'response_user_getall_customerReview');
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"]
        }, {
          type: _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"], _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]])], UserService);
      /***/
    },

    /***/
    "r6bu":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function r6bu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "s4Db":
    /*!**********************************************************!*\
      !*** ./src/app/components/_helpers/error.interceptor.ts ***!
      \**********************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function s4Db(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this26 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              switch (err.status) {
                case 401:
                  // auto logout if 401 response returned from api
                  _this26.authenticationService.logout();

                  location.reload(true);
                  break;

                case 400:
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                    error: {
                      message: 'Email or Password is incorrect'
                    }
                  });
                  break;
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ctorParameters = function () {
        return [{
          type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      };

      ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], ErrorInterceptor);
      /***/
    },

    /***/
    "sx49":
    /*!********************************************************!*\
      !*** ./src/app/components/header/header.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function sx49(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "nav {\n    padding: 10px 0;\n}\n\nheader nav ul .mega-menu .mega-menu-container {\n\n    min-width: auto;\n}\n\nheader nav ul li>a {\n    color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbmhlYWRlciBuYXYgdWwgLm1lZ2EtbWVudSAubWVnYS1tZW51LWNvbnRhaW5lciB7XG5cbiAgICBtaW4td2lkdGg6IGF1dG87XG59XG5cbmhlYWRlciBuYXYgdWwgbGk+YSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "u1AE":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/blog-view/blog-view.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function u1AE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"resume schedule  pt-3 pb-4\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"cal-time\">\n                    <div class=\"time\">\n                        <h2 class=\"title-text pt-1\">{{blogsData.title}}</h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-7\">\n            <!--<p class=\"subscribe-sub-head mb-3\">{{blogsData.description}}</p>-->\n            <p class=\"subscribe-sub-head mb-3\" [innerHTML]=\"blogsData.description\"></p>\n        </div>\n        <div class=\"col-lg-5\">\n            <img class=\"img-fluid\" [src]=\"blogsData.blogsDocument\" />\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "uoM9":
    /*!****************************************************!*\
      !*** ./src/app/components/_guards/noauth.guard.ts ***!
      \****************************************************/

    /*! exports provided: NoAuthGuard */

    /***/
    function uoM9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function () {
        return NoAuthGuard;
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

      var NoAuthGuard = /*#__PURE__*/function () {
        function NoAuthGuard(router, authenticationService) {
          _classCallCheck(this, NoAuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(NoAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (!currentUser) {
              // check if route is restricted by role
              if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                //alert('1')
                this.router.navigate(['/']);
                return false;
              } // authorised so return true	


              return true;
            } // not logged in so redirect to login page with the return url
            // this.router.navigate(['/lender']);


            switch (currentUser.role) {
              case 'Admin':
                this.router.navigate(['/admin']);
                break;

              case 'lender':
                this.router.navigate(['/lender']);
                break;

              case 'borrower':
                this.router.navigate(['/borrower']);
                break;

              default:
                this.router.navigate(['/']);
                break;
            }

            return false;
          }
        }]);

        return NoAuthGuard;
      }();

      NoAuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      };

      NoAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], NoAuthGuard);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./models */
      "VHTt");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./logout/logout.component */
      "n1B2");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");
      /* harmony import */


      var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/forgot-password/forgot-password.component */
      "nAxv");
      /* harmony import */


      var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/faqs/faqs.component */
      "ytmU");
      /* harmony import */


      var _components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/disclaimer/disclaimer.component */
      "PxG9");
      /* harmony import */


      var _components_guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/_guards */
      "CRXG");
      /* harmony import */


      var _home_blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./home/blog-view/blog-view.component */
      "k/Fl");

      var routes = [//DO NOT CHNAGE below routing This will be our final structure for page restrictions as per roles

      /* {
         path: 'invester',
         canActivate: [AuthGuard],
         data: { roles: [Role.Admin] },
         loadChildren: () => import('./invester/invester.module').then(m => m.InvesterModule)
       },
       {
         path: 'business',
         canActivate: [AuthGuard],
         data: { roles: [Role.Business] },
         loadChildren: () => import('./business/business.module').then(m => m.BusinessModule)
       }
       ,*/
      {
        path: '',
        canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_11__["NoAuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("default~admin-admin-module~borrower-borrower-module~home-home-module~lender-lender-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: 'borrower',
        canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        data: {
          roles: [_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Borrower]
        },
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | borrower-borrower-module */
          [__webpack_require__.e("default~admin-admin-module~borrower-borrower-module~home-home-module~lender-lender-module"), __webpack_require__.e("default~borrower-borrower-module~lender-lender-module"), __webpack_require__.e("borrower-borrower-module")]).then(__webpack_require__.bind(null,
          /*! ./borrower/borrower.module */
          "0OUo")).then(function (m) {
            return m.BorrowerModule;
          });
        }
      }, {
        path: 'lender',
        canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        data: {
          roles: [_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Lender]
        },
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lender-lender-module */
          [__webpack_require__.e("default~admin-admin-module~borrower-borrower-module~home-home-module~lender-lender-module"), __webpack_require__.e("default~borrower-borrower-module~lender-lender-module"), __webpack_require__.e("lender-lender-module")]).then(__webpack_require__.bind(null,
          /*! ./lender/lender.module */
          "e25r")).then(function (m) {
            return m.LenderModule;
          });
        }
      }, {
        path: 'admin',
        canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        //  data: { roles: [Role.Admin] },
        data: {
          roles: [_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin]
        },
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | admin-admin-module */
          [__webpack_require__.e("default~admin-admin-module~borrower-borrower-module~home-home-module~lender-lender-module"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null,
          /*! ./admin/admin.module */
          "jkDv")).then(function (m) {
            return m.AdminModule;
          });
        }
      }, {
        path: 'login',
        canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_11__["NoAuthGuard"]],
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'register',
        canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_11__["NoAuthGuard"]],
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
      }, {
        path: 'forgotpassword',
        canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_11__["NoAuthGuard"]],
        component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]
      }, {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
      }, {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
      }, {
        path: 'faqs',
        component: _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__["FaqsComponent"]
      }, {
        path: 'disclaimer',
        component: _components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_10__["DisclaimerComponent"]
      }, {
        path: 'blog/:id',
        component: _home_blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_12__["BlogViewComponent"]
      }, // otherwise redirect to home
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          useHash: true
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vd7c":
    /*!*********************************************!*\
      !*** ./src/app/logout/logout.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function vd7c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "woRh":
    /*!************************************************************!*\
      !*** ./src/app/components/register/register.component.css ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function woRh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "nav {\n    padding: 10px 0;\n}\n\nfooter {\n    padding: 0px 0;\n}\n\ninput, .register-page .theme-card .theme-form textarea {\n\n    padding: 10px 20px;\n    margin-bottom: 20px !important;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsOEJBQThCOztBQUVsQyIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbmZvb3RlciB7XG4gICAgcGFkZGluZzogMHB4IDA7XG59XG5cbmlucHV0LCAucmVnaXN0ZXItcGFnZSAudGhlbWUtY2FyZCAudGhlbWUtZm9ybSB0ZXh0YXJlYSB7XG5cbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICBcbn0iXX0= */";
      /***/
    },

    /***/
    "ytmU":
    /*!***************************************************!*\
      !*** ./src/app/components/faqs/faqs.component.ts ***!
      \***************************************************/

    /*! exports provided: FaqsComponent */

    /***/
    function ytmU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqsComponent", function () {
        return FaqsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_faqs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./faqs.component.html */
      "qcfa");
      /* harmony import */


      var _faqs_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faqs.component.css */
      "DKgV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FaqsComponent = /*#__PURE__*/function () {
        function FaqsComponent() {
          _classCallCheck(this, FaqsComponent);
        }

        _createClass(FaqsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FaqsComponent;
      }();

      FaqsComponent.ctorParameters = function () {
        return [];
      };

      FaqsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faqs',
        template: _raw_loader_faqs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faqs_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FaqsComponent);
      /***/
    },

    /***/
    "yxfS":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function yxfS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Nav Start [ngClass]=\"{'dark position-relative' : (router.url!='/')}\"-->\n<header class=\"agency bg-gradient-color custom-scroll\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <nav>\n                    <a class=\"logo-light m-r-auto\" routerLink=\"/home\">\n                        <img class=\"img-fluid\" src=\"./assets/img/avitii-logo.png\"></a>\n                    <div class=\"responsive-btn\">\n                        <a class=\"toggle-nav\" ><i aria-hidden=\"true\" class=\"icon-align-center text-white\"></i></a>\n                    </div>\n                    <div class=\"navbar m-l-auto btn-back\" id=\"togglebtn\">\n                        <div class=\"responsive-btn\">\n                            <h5 class=\"btn-back\" i18n>back</h5>\n                        </div>\n                        <ul class=\"main-menu\">\n                            <!-- <li><a routerLink=\"/vcmeet\" routerLinkActive=\"active\">vcmeet</a></li> -->\n                            <li><a routerLink=\"/home\" i18n>Home</a></li>\n                            \n                            <li><a routerLink=\"/our-history\" routerLinkActive=\"active\" i18n>Our History</a></li>\n                            <li><a routerLink=\"/about\" routerLinkActive=\"active\" i18n>About</a></li>\n                            <li><a routerLink=\"/contact\" routerLinkActive=\"active\" i18n>Contact</a></li>\n                            <div class=\"d-inline\" *ngIf=\"!currentUser\">\n                                <li *ngIf=\"router.url!='/login'\"><a routerLink=\"/../login\" routerLinkActive=\"active\" i18n>Login</a></li>\n                                <li *ngIf=\"router.url!='/register'\"><a routerLink=\"/../register\" routerLinkActive=\"active\" i18n>Register</a></li>\n    \n                            </div>\n                           \n                            <li class=\"mega-menu\" *ngIf=\"currentUser\">\n                                <a class=\"dropdown\" i18n>Account <i class=\"fas fa-angle-down\"></i></a>\n                                <div class=\"mega-menu-container\">\n                                    <div class=\"container\">\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-12\">\n                                                <div class=\"menu-container\">\n                                                    <div class=\"text-center\">\n\n                                                        <a class=\"menu-head d-block\" data-target=\".demo2\"\n                                                            data-toggle=\"collapse\" href=\"#\"><img\n                                                            src=\"./assets/img/user-default.png\" class=\"rounded\">\n                                                            {{currentUser.firstName}}</a>\n\n                                                    </div>\n\n                                                    <ul>\n                                                       \n                                                        <li><a href=\"header-light.html\" i18n>Profile</a></li>\n                                                        <li><a (click)=\"logout()\" i18n>Logout</a></li>\n\n                                                    </ul>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <div class=\"d-inline text-white\">\n                                <a class=\"mr-1 small text-white\" href=\"/en\">English</a> |\n                                <a href=\"/da\" class=\"ml-1 small text-white\">Dansk</a>\n                            </div>\n\n                        </ul>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n</header>\n<!-- Nav end-->";
      /***/
    },

    /***/
    "z56L":
    /*!********************************!*\
      !*** ./src/app/models/role.ts ***!
      \********************************/

    /*! exports provided: Role, AppAccessPermissions, ContactRole, SessionTypes, AppDocumentType, SessionStatus, PaymentMethod, SessionExecutionType, AppRooms, TransactionActionType, UserType, MediaTypes */

    /***/
    function z56L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return Role;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppAccessPermissions", function () {
        return AppAccessPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactRole", function () {
        return ContactRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionTypes", function () {
        return SessionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppDocumentType", function () {
        return AppDocumentType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionStatus", function () {
        return SessionStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentMethod", function () {
        return PaymentMethod;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionExecutionType", function () {
        return SessionExecutionType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRooms", function () {
        return AppRooms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionActionType", function () {
        return TransactionActionType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserType", function () {
        return UserType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaTypes", function () {
        return MediaTypes;
      });

      var Role;

      (function (Role) {
        Role["Business"] = "Business";
        Role["Invester"] = "Invester";
        Role["Lender"] = "lender";
        Role["Borrower"] = "borrower";
        Role["Admin"] = "Admin";
      })(Role || (Role = {}));

      ;
      var AppAccessPermissions;

      (function (AppAccessPermissions) {
        AppAccessPermissions["adminAddEdit"] = "admin_user_add_edit";
        AppAccessPermissions["usersAddEdit"] = "users_add_edit";
        AppAccessPermissions["borrowerPayments"] = "borrower_payments";
        AppAccessPermissions["earningTransactions"] = "earning_transactions";
      })(AppAccessPermissions || (AppAccessPermissions = {}));

      ;
      var ContactRole;

      (function (ContactRole) {
        ContactRole["Guest"] = "guest";
        ContactRole["Member"] = "member";
        ContactRole["Admin"] = "admin";
      })(ContactRole || (ContactRole = {}));

      ;
      var SessionTypes;

      (function (SessionTypes) {
        SessionTypes["Instant"] = "instant";
        SessionTypes["Scheduled"] = "scheduled";
        SessionTypes["Restricted"] = "restricted";
      })(SessionTypes || (SessionTypes = {}));

      ;
      var AppDocumentType;

      (function (AppDocumentType) {
        AppDocumentType["user_profile"] = "user_profile";
        AppDocumentType["app_funds"] = "app_funds";
        AppDocumentType["diversification"] = "diversification";
      })(AppDocumentType || (AppDocumentType = {}));

      ;
      var SessionStatus;

      (function (SessionStatus) {
        SessionStatus["Pending"] = "pending";
        SessionStatus["Accepted"] = "accepted";
        SessionStatus["Approved"] = "approved";
        SessionStatus["Rejected"] = "rejected";
        SessionStatus["RejectedOngoing"] = "rejected_ongoing";
        SessionStatus["RejectedOngoingWithRefund"] = "rejected_ongoing_with_refund";
        SessionStatus["Active"] = "active";
        SessionStatus["Completed"] = "completed";
        SessionStatus["Suspended"] = "suspended";
        SessionStatus["Canceled"] = "canceled";
        SessionStatus["Ongoing"] = "ongoing";
        SessionStatus["OngoingInitiated"] = "ongoing_initiated";
        SessionStatus["OngoingAccepted"] = "ongoing_accepted";
        SessionStatus["AwaitingForApproval"] = "awaiting_for_approval";
        SessionStatus["Unpaid"] = "unpaid";
        SessionStatus["Inkasso"] = "inkasso";
      })(SessionStatus || (SessionStatus = {}));

      ;
      var PaymentMethod;

      (function (PaymentMethod) {
        PaymentMethod["Wallet"] = "wallet";
        PaymentMethod["Online"] = "online";
        PaymentMethod["refund"] = "refund";
      })(PaymentMethod || (PaymentMethod = {}));

      ;
      var SessionExecutionType;

      (function (SessionExecutionType) {
        SessionExecutionType["FixedPrice"] = "fixed_price";
        SessionExecutionType["Milestones"] = "milestones";
      })(SessionExecutionType || (SessionExecutionType = {}));

      ;
      var AppRooms;

      (function (AppRooms) {
        AppRooms["my_app_main_room"] = "my_app_main_room";
        AppRooms["my_app_main_room_for_Business"] = "my_app_main_room_for_Business";
        AppRooms["my_app_main_room_for_Invester"] = "my_app_main_room_for_Invester";
        AppRooms["my_app_main_room_for_lender"] = "my_app_main_room_for_lender";
        AppRooms["my_app_main_room_for_borrower"] = "my_app_main_room_for_borrower";
        AppRooms["my_app_main_room_for_Admin"] = "my_app_main_room_for_Admin";
      })(AppRooms || (AppRooms = {}));

      ;
      var TransactionActionType;

      (function (TransactionActionType) {
        TransactionActionType["funds_add"] = "funds_add";
        TransactionActionType["paid_to_consulatant"] = "paid_to_consulatant";
        TransactionActionType["session_accepted"] = "session_accepted";
        TransactionActionType["session_extended"] = "session_extended";
        TransactionActionType["session_ongoing"] = "session_ongoing";
        TransactionActionType["insurance_purchase"] = "insurance_purchase";
        TransactionActionType["plan_purchase"] = "plan_purchase";
      })(TransactionActionType || (TransactionActionType = {}));

      var UserType;

      (function (UserType) {
        UserType["new_lender"] = "new_lender";
        UserType["good_lender"] = "good_lender";
        UserType["expert_lender"] = "expert_lender";
        UserType["super_lender"] = "super_lender";
        UserType["proff_lender"] = "proff_lender";
        UserType["new_borrower"] = "new_borrower";
        UserType["risky_borrower"] = "risky_borrower";
        UserType["between_borrower"] = "between_borrower";
        UserType["good_borrower"] = "good_borrower";
        UserType["super_borrower"] = "super_borrower";
      })(UserType || (UserType = {}));

      ;
      var MediaTypes;

      (function (MediaTypes) {
        MediaTypes["image"] = "image";
        MediaTypes["video"] = "video";
        MediaTypes["audio"] = "audio";
        MediaTypes["pdf"] = "pdf";
        MediaTypes["xls"] = "xls";
        MediaTypes["other"] = "other";
      })(MediaTypes || (MediaTypes = {}));

      ;
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map