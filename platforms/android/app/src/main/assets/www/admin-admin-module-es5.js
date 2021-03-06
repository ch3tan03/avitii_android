(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "+5Dj":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/loan-payment/loan-payment.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  \n    <div class=\"col-xl-12 col-md-12 mb-4\">\n        <div class=\"card shadow h-100\">\n            <div class=\"card-header\">\n                <div class=\"font-weight-bold text-primary\" i18n>\n                    Loan Pending Payment\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 col-12 mb-4\">\n                        <div class=\"view view-cascade gradient-card-header white\">\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                                class=\"row-border hover table table-striped table-responsive-md btn-table\">\n                                <thead>\n                                    <tr>\n                                        <th scope=\"col\" class=\"d-none\" i18n>ID</th>\n                                        <th scope=\"col\" i18n>Type</th>\n                                        <th scope=\"col\" i18n>Borrower Name</th>\n                                        <th scope=\"col\" i18n>Lender Name</th>\n                                        <th scope=\"col\" i18n>Amount</th>\n                                        <th scope=\"col\" i18n>Last EMI</th>\n                                        <th scope=\"col\" i18n>View</th>\n                                        <th scope=\"col\" class=\"text-right\" >#</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let LoanObj of utilityService._.values(PaymentTransactionDetailsArray)\">\n                                        <td class=\"d-none\" >{{LoanObj._id}}</td>\n                                        <td  class=\"text-capitalize\">{{(LoanObj.loanType || \"\").replace(\"_\", \" \")}}</td>\n                                        <td  class=\"text-capitalize\">\n                                            {{LoanObj.nextInstallmentLenderFirstName}}\n                                        </td>\n                                        <td  class=\"text-capitalize\">\n                                            {{LoanObj.nextInstallmentBorrowerFirstName}}\n                                        </td>\n                                        <td >{{LoanObj.loanAmount}}</td>\n                                        <td >\n                                            {{LoanObj.nextInstallment | date:'dd-MMM-YYYY'}}\n                                        </td>\n                                        <td >\n                                            <a class=\"btn btn-success text-capitalize btn-sm float-right text-white\" (click)=\"showAppliedToSession(LoanObj)\"> Details</a>\n                                        </td>\n                                        <td></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "+Q42":
    /*!************************************************************************!*\
      !*** ./src/app/admin/service-types-add/service-types-add.component.ts ***!
      \************************************************************************/

    /*! exports provided: ServiceTypesAddComponent */

    /***/
    function Q42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceTypesAddComponent", function () {
        return ServiceTypesAddComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_service_types_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./service-types-add.component.html */
      "ShmR");
      /* harmony import */


      var _service_types_add_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service-types-add.component.css */
      "Dx9I");
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


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/service-types.service */
      "7ZPZ");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");

      var ServiceTypesAddComponent = /*#__PURE__*/function () {
        function ServiceTypesAddComponent(formBuilder, authenticationService, serviceTypesService, alertService, appRouterService, utilityService, route) {
          var _this2 = this;

          _classCallCheck(this, ServiceTypesAddComponent);

          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.serviceTypesService = serviceTypesService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.utilityService = utilityService;
          this.route = route;
          this.loading = false;
          this.editing = false;
          this.submitted = false;
          this.fileData = null;
          this.previewUrl = null;
          this.ParentServicesTypes = null;
          this.fileUploadProgress = null;
          this.uploadedFilePath = null;
          this.arrayItems = [0];
          this.currentSkill = '';
          this.SessionStatus = src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"]; // redirect to home if already logged in

          if (!this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter('');
          }

          this.initForm();
          this.serviceTypesService.getServiceTypesParentAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
            ////console.log('data => ', data)
            if (data && data['success']) {
              //alert(JSON.stringify( data));
              _this2.ParentServicesTypes = data["data"]; //this.alertService.success(data['message'], true);

              _this2.loading = false; //this.element_btn_click_addServiceTypes_skills_verification.click();
            } else {
              //alert(JSON.stringify(data['message']));
              _this2.alertService.error(data['message']);

              _this2.loading = false;
            }
          }, function (error) {
            _this2.ParentServicesTypes = [];
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
          });
          this.sub = this.route.queryParams.subscribe(function (params) {
            _this2.loanId = params['id'];

            if (_this2.loanId) {
              _this2.serviceTypesService.getServiceTypesById(_this2.loanId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
                ////console.log('data => ', data)
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this2.showEditingForm(data["data"]); //this.alertService.success(data['message'], true);


                  _this2.loading = false; //this.element_btn_click_addServiceTypes_skills_verification.click();
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this2.alertService.error(data['message']);

                  _this2.loading = false;
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
              });
            }
          });
        }

        _createClass(ServiceTypesAddComponent, [{
          key: "showEditingForm",
          value: function showEditingForm(_userObj) {
            this.editing = true;
            this.addServiceTypesForm = this.formBuilder.group({
              name: [_userObj.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              rateType: [_userObj.rateType || 'per_hour', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              description: [_userObj.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              parentServicesTypesId: [_userObj.parentServicesTypesId || ''],
              feeFromUserFixedAmount: [_userObj.feeFromUserFixedAmount || 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              serviceFeeFromUserFixedAmount: [_userObj.serviceFeeFromUserFixedAmount || 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              feeToConsultFixedAmount: [_userObj.feeToConsultFixedAmount || 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              commisionToProtalFixedAmount: [_userObj.commisionToProtalFixedAmount || 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              serviceFeeFromUserPercentage: [_userObj.serviceFeeFromUserPercentage || 0],
              feeToConsultPercentage: [_userObj.feeToConsultPercentage || 0],
              commisionToProtalPercentage: [_userObj.commisionToProtalPercentage || 0],
              skillTags: this.formBuilder.array(_userObj.skillTags || [], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              _id: [_userObj._id || ''],
              createdOn: [_userObj.createdOn || ''],
              updatedOn: [_userObj.updatedOn || ''],
              isDeleted: [_userObj.isDeleted || false],
              createdBy: [_userObj.createdBy || ''],
              deletedBy: [_userObj.deletedBy || ''],
              updatedBy: [this.authenticationService.currentUserValue._id || '']
            });
            this._sessionType = _userObj.sessionType;
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.addServiceTypesForm = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              rateType: ['per_hour', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              parentServicesTypesId: [''],
              feeFromUserFixedAmount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              serviceFeeFromUserFixedAmount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              feeToConsultFixedAmount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              commisionToProtalFixedAmount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              serviceFeeFromUserPercentage: [0],
              feeToConsultPercentage: [0],
              commisionToProtalPercentage: [0],
              skillTags: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              _id: [''],
              createdOn: [''],
              updatedOn: [''],
              isDeleted: [false],
              createdBy: [''],
              deletedBy: [''],
              updatedBy: ['']
            });
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.addServiceTypesForm.controls;
          }
        }, {
          key: "onaddServiceTypesUpdateSubmit",
          value: function onaddServiceTypesUpdateSubmit() {
            var _this3 = this;

            this.submitted = true;

            if (this.addServiceTypesForm.invalid) {
              return;
            }

            var _feeFromUserFixedAmount = this.addServiceTypesForm.value["feeFromUserFixedAmount"];
            var _feeToConsultFixedAmount = this.addServiceTypesForm.value["feeToConsultFixedAmount"];
            var _commisionToProtalFixedAmount = this.addServiceTypesForm.value["commisionToProtalFixedAmount"];

            if (_feeFromUserFixedAmount != _feeToConsultFixedAmount + _commisionToProtalFixedAmount) {
              this.alertService.error("Please check Amounts, User charges must be equal to addition of consult and portal fees");
              return;
            }

            if (this.loanId) {
              this.serviceTypesService.updateServiceTypesById(this.addServiceTypesForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this3.alertService.success('ServiceTypes Updated successfully', true);

                  _this3.appRouterService.appRouteToPath('/admin/services');
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this3.alertService.error(data['message']);

                  _this3.loading = false;
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
            } else {
              this.serviceTypesService.addNewServiceTypes(this.addServiceTypesForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this3.alertService.success('ServiceTypes Added successfully', true);

                  _this3.appRouterService.appRouteToPath('/admin/services');
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this3.alertService.error(data['message']);

                  _this3.loading = false;
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
          }
        }, {
          key: "skillTags",
          get: function get() {
            return this.addServiceTypesForm.get('skillTags');
          }
        }, {
          key: "addItem",
          value: function addItem(item) {
            if (!item) {
              return;
            }

            item = lodash__WEBPACK_IMPORTED_MODULE_10__["toLower"](lodash__WEBPACK_IMPORTED_MODULE_10__["trim"](item));

            if (this.arrayItems.indexOf(item) > -1) {
              return;
            }

            this.arrayItems.push(item);
            this.skillTags.push(this.formBuilder.control(item));
          }
        }, {
          key: "removeItem",
          value: function removeItem() {
            this.arrayItems.pop();
            this.skillTags.removeAt(this.skillTags.length - 1);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.arrayItems = [];
          }
        }]);

        return ServiceTypesAddComponent;
      }();

      ServiceTypesAddComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_8__["ServiceTypesService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_7__["AppRouterService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }];
      };

      ServiceTypesAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-types-add',
        template: _raw_loader_service_types_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_types_add_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_8__["ServiceTypesService"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_7__["AppRouterService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]])], ServiceTypesAddComponent);
      /***/
    },

    /***/
    "0Em7":
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminRoutingModule */

    /***/
    function Em7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
        return AdminRoutingModule;
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


      var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin.component */
      "TRGY");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "gY7f");
      /* harmony import */


      var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/services.component */
      "WLd7");
      /* harmony import */


      var _service_types_add_service_types_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./service-types-add/service-types-add.component */
      "+Q42");
      /* harmony import */


      var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-management/user-management.component */
      "OcPW");
      /* harmony import */


      var _payment_transactions_payment_transactions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./payment-transactions/payment-transactions.component */
      "yVJR");
      /* harmony import */


      var _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../shared/profile/profile.component */
      "uJHj");
      /* harmony import */


      var _borrower_earnings_borrower_earnings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./borrower-earnings/borrower-earnings.component */
      "rCAk");
      /* harmony import */


      var _models_role__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../models/role */
      "z56L");
      /* harmony import */


      var _components_guards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../components/_guards */
      "CRXG");
      /* harmony import */


      var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./add-user/add-user.component */
      "4pOR");
      /* harmony import */


      var _user_levels_user_levels_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./user-levels/user-levels.component */
      "6pX3");
      /* harmony import */


      var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./blogs/blogs.component */
      "AvT8");
      /* harmony import */


      var _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./../shared/messages/messages.component */
      "rflR");
      /* harmony import */


      var _loan_payment_loan_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./loan-payment/loan-payment.component */
      "dEW4");
      /* harmony import */


      var _partners_partners_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./partners/partners.component */
      "hu3n");
      /* harmony import */


      var _customer_review_customer_review_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./customer-review/customer-review.component */
      "yxQR");
      /* harmony import */


      var _user_management_pending_user_management_pending_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./user-management-pending/user-management-pending.component */
      "joR3");

      var routes = [{
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [{
          path: '',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
        }, {
          path: 'services',
          component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit]
          }
        }, {
          path: 'servicesadd',
          component: _service_types_add_service_types_add_component__WEBPACK_IMPORTED_MODULE_7__["ServiceTypesAddComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit]
          }
        }, {
          path: 'users',
          component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__["UserManagementComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].usersAddEdit, _models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit]
          }
        }, {
          path: 'pending-users',
          component: _user_management_pending_user_management_pending_component__WEBPACK_IMPORTED_MODULE_21__["UserManagementPendingComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].usersAddEdit, _models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit]
          }
        }, {
          path: 'add-user',
          component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__["AddUserComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].usersAddEdit, _models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit]
          }
        }, {
          path: 'admin-users',
          component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__["UserManagementComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit]
          }
        }, {
          path: 'add-admin-user',
          component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__["AddUserComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit]
          }
        }, {
          path: 'payments',
          component: _payment_transactions_payment_transactions_component__WEBPACK_IMPORTED_MODULE_9__["PaymentTransactionsComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].borrowerPayments]
          }
        }, {
          path: 'profile',
          component: _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
        }, {
          path: 'earnings',
          component: _borrower_earnings_borrower_earnings_component__WEBPACK_IMPORTED_MODULE_11__["BorrowerEarningsComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].earningTransactions]
          }
        }, {
          path: 'user-levels',
          component: _user_levels_user_levels_component__WEBPACK_IMPORTED_MODULE_15__["UserLevelsComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].borrowerPayments]
          }
        }, {
          path: 'blogs',
          component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_16__["BlogsComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].borrowerPayments]
          }
        }, {
          path: 'customer-review',
          component: _customer_review_customer_review_component__WEBPACK_IMPORTED_MODULE_20__["CustomerReviewComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].borrowerPayments]
          }
        }, {
          path: 'partners',
          component: _partners_partners_component__WEBPACK_IMPORTED_MODULE_19__["PartnersComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].borrowerPayments]
          }
        }, {
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          path: 'messages',
          component: _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"]
        }, {
          path: 'loan-pay',
          component: _loan_payment_loan_payment_component__WEBPACK_IMPORTED_MODULE_18__["LoanPaymentComponent"],
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          data: {
            appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].borrowerPayments]
          }
        }]
      }, // otherwise redirect to home
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }];

      var AdminRoutingModule = function AdminRoutingModule() {
        _classCallCheck(this, AdminRoutingModule);
      };

      AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      })], AdminRoutingModule);
      /***/
    },

    /***/
    "165m":
    /*!*******************************************************************************!*\
      !*** ./src/app/admin/payment-transactions/payment-transactions.component.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXRyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "37Rf":
    /*!***************************************************!*\
      !*** ./src/app/admin/footer/footer.component.css ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Rf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "footer {\n    padding: 0px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgcGFkZGluZzogMHB4IDA7XG59Il19 */";
      /***/
    },

    /***/
    "4pOR":
    /*!******************************************************!*\
      !*** ./src/app/admin/add-user/add-user.component.ts ***!
      \******************************************************/

    /*! exports provided: AddUserComponent */

    /***/
    function pOR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
        return AddUserComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "u6Hf");
      /* harmony import */


      var _add_user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-user.component.css */
      "z929");
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


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var _models_hearAboutUs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../models/hearAboutUs */
      "TFt9");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY"); //import { MustMatch } from '../_helpers/must-match-validator';


      var uploadAPI = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/api/post/upload/assetdata';
      var uploadAccessUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/';

      var AddUserComponent = /*#__PURE__*/function () {
        function AddUserComponent(http, formBuilder, router, authenticationService, userService, alertService, appRouterService, route, socketService) {
          var _this4 = this;

          _classCallCheck(this, AddUserComponent);

          this.http = http;
          this.formBuilder = formBuilder;
          this.router = router;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.route = route;
          this.socketService = socketService;
          this.AppAccessPermissions = [];
          this.editing = false;
          this.loading = false;
          this.submitted = false;
          this.Role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"];
          this.Roles = Object.keys(src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"]);
          this.HearAboutUs = Object.keys(_models_hearAboutUs__WEBPACK_IMPORTED_MODULE_10__["HearAboutUs"]);
          this.fileData4Profile = null;
          this.fileData = null;
          this.previewUrl = null;
          this.fileUploadProgress = null;
          this.uploadedFilePath = null;
          this.myProfileFiles = [];
          this.selfProfileUrlPendingForUpload = false;
          this.userId = null;
          this.now = new Date();
          this.year = this.now.getFullYear();
          this.month = this.now.getMonth();
          this.day = this.now.getDate();
          this.hours = this.now.getHours();
          this.minutes = this.now.getMinutes();
          this.minDate = moment__WEBPACK_IMPORTED_MODULE_7__({
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hours,
            minute: this.minutes
          }).add(1, 'hour').format('MM/DD/YYYY hh:mm A');
          this.maxDate = moment__WEBPACK_IMPORTED_MODULE_7__({
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hours,
            minute: this.minutes
          }).add(1, 'month').format('MM/DD/YYYY hh:mm A');

          for (var index in src_app_models__WEBPACK_IMPORTED_MODULE_9__["AppAccessPermissions"]) {
            var obj = {
              name: index,
              value: src_app_models__WEBPACK_IMPORTED_MODULE_9__["AppAccessPermissions"][index]
            };
            this.AppAccessPermissions.push(obj);
          }

          this.showInitForm();
          var paramobj = history.state;

          if (paramobj) {
            this.userId = paramobj['userId'];
            delete history.state['userId'];
          }

          if (this.userId) {
            this.userService.getUserById(this.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                _this4.showEditingForm(data["data"]);

                _this4.loading = false;
                _this4.isOtpSent = true;
                _this4.editing = true;
              } else {
                //alert(JSON.stringify(data['message']));
                _this4.alertService.error(data['message']);

                _this4.loading = false;
                _this4.isOtpSent = false;

                _this4.appRouterService.appRouter('');
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

              _this4.alertService.error(errorMsg2show);

              _this4.loading = false;
              _this4.isOtpSent = false;

              _this4.appRouterService.appRouter('');
            });
          }
        }

        _createClass(AddUserComponent, [{
          key: "showEditingForm",
          value: function showEditingForm(_userObj) {
            this.element_btn_click_profile_basic_details = document.getElementById('btn_click_profile_basic_details');
            this.element_btn_click_profile_skills_verification = document.getElementById('btn_click_profile_skills_verification');
            this.registerForm = this.formBuilder.group({
              password: [_userObj.password || 'avitii@987', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
              role: [_userObj.role || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              firstName: [_userObj.firstName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              lastName: [_userObj.lastName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              userName: [_userObj.userName || ''],
              mobileNo: [_userObj.mobileNo || ''],
              emailAddress: [_userObj.emailAddress || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              gender: [_userObj.gender || ''],
              country: [_userObj.country || ''],
              _id: [_userObj._id || ''],
              acceptnewUpdates: [_userObj.acceptnewUpdates || ''],
              acceptTerms: [_userObj.acceptTerms || ''],
              birthDate: [_userObj.birthDate || ''],
              nationality: [_userObj.nationality || ''],
              residence: [_userObj.residence || ''],
              birthPlace: [_userObj.birthPlace || ''],
              promoCode: [_userObj.promoCode || ''],
              education: [_userObj.education || ''],
              educationCertification: [{}],
              creditCards: [{}],
              skillSets: this.formBuilder.array(_userObj.skillSets || [], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
              academicDocuments: this.formBuilder.array(_userObj.academicDocuments || []),
              appPermissions: this.formBuilder.array(_userObj.appPermissions || []),
              myProfileMedia: this.formBuilder.array(_userObj.myProfileMedia || []),
              myProfileDetails: [_userObj.myProfileDetails || ''],
              employmentVerifications: this.formBuilder.array(_userObj.employmentVerifications || []),
              externalAppLinks: this.formBuilder.array(_userObj.externalAppLinks || [], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
              hearAboutUs: [_userObj.hearAboutUs || ''],
              app_doc_type: [_userObj.app_doc_type || ''],
              selfProfileUrl: [_userObj.selfProfileUrl || '']
            }, {// validator: MustMatch('password', 'confirmPassword'),
              // validate: EmailValidator('emailAddress')
            });
            this._role = _userObj.role || src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin;
            this.onClickRoleChange(this._role);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showInitForm",
          value: function showInitForm() {
            var _this5 = this;

            this.element_btn_click_profile_basic_details = document.getElementById('btn_click_profile_basic_details');
            this.element_btn_click_profile_skills_verification = document.getElementById('btn_click_profile_skills_verification');
            this.registerForm = this.formBuilder.group({
              password: ['avitii@987', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
              role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              userName: [''],
              mobileNo: [''],
              emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              gender: [''],
              country: [''],
              _id: [''],
              acceptnewUpdates: [''],
              birthDate: [''],
              nationality: [''],
              residence: [''],
              birthPlace: [''],
              promoCode: [''],
              education: [''],
              educationCertification: [{}],
              creditCards: [{}],
              skillSets: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
              academicDocuments: this.formBuilder.array([]),
              appPermissions: this.formBuilder.array([]),
              myProfileMedia: this.formBuilder.array([]),
              myProfileDetails: [''],
              employmentVerifications: this.formBuilder.array([]),
              externalAppLinks: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
              hearAboutUs: [''],
              app_doc_type: [''],
              selfProfileUrl: ['']
            }, {// validator: MustMatch('password', 'confirmPassword'),
              // validate: EmailValidator('emailAddress')
            });
            this._role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin;
            this.sub = this.route.queryParams.subscribe(function (params) {
              var _data = params['id'];

              switch (_data) {
                case "ct":
                  _this5._role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Borrower;
                  break;

                case "cr":
                  _this5._role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Lender;
                  break;

                case 'ad':
                  _this5._role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin;
                  break;

                default:
                  break;
              }

              _this5.onClickRoleChange(_this5._role);
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
            var _this6 = this;

            this.isOtpSent = false;

            if (!this.isOtpSent) {
              this.submitted = true; //console.log('inside Submit ' + this.registerForm.invalid);
              // stop here if form is invalid
              //(this.registerForm.controls.mobileNo.invalid || this.registerForm.controls.firstName.invalid || this.registerForm.controls.lastName.invalid || this.registerForm.controls.emailAddress.invalid)

              if (this.registerForm.controls.emailAddress.invalid) {
                return;
              } //console.log('inside');


              this.loading = true; //console.log("Reg Data => ", this.registerForm.value);

              this.registerForm.get('userName').setValue(this.registerForm.get('emailAddress').value);
              var _jsonData2send = this.registerForm.value; //delete _jsonData2send['selfProfileUrl'];

              this.userService.sendOtp2user(_jsonData2send).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                //console.log('data => ', data)
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this6.alertService.success('Verified!', true);

                  _this6.loading = false;
                  _this6.isOtpSent = true;
                  _this6.submitted = false;
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this6.alertService.error(data['message']);

                  _this6.loading = false;
                  _this6.isOtpSent = false;
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

                _this6.alertService.error(errorMsg2show);

                _this6.loading = false;
                _this6.isOtpSent = false;
              });
            }
          }
        }, {
          key: "onSubmitRegisterUser",
          value: function onSubmitRegisterUser() {
            var _this7 = this;

            if (this.selfProfileUrlPendingForUpload) {
              this.alertService.error("Please wait upload is in progress");
              return;
            }

            if (!this.isOtpSent) {
              this.alertService.error("Please Enter & Verify Email Id First");
              return;
            }

            this.submitted = true; // stop here if form is invalid
            //(this.registerForm.controls.password.invalid || this.registerForm.controls.confirmPassword.invalid || this.registerForm.controls.acceptTerms.invalid || this.registerForm.controls.otp.invalid) 

            if (this.registerForm.controls.mobileNo.invalid || this.registerForm.controls.firstName.invalid || this.registerForm.controls.lastName.invalid || this.registerForm.controls.emailAddress.invalid) {
              return;
            } //console.log('inside');


            this.loading = true; //console.log("Reg Data => ", this.registerForm.value);

            this.registerForm.get('userName').setValue(this.registerForm.get('emailAddress').value);
            var _jsonData2send = this.registerForm.value; //delete _jsonData2send['selfProfileUrl'];

            if (!this.editing) {
              this.socketService.addNewUser(_jsonData2send).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                //console.log('data => ', data)
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this7.loading = false;

                  _this7.alertService.success('user added successfully', true); //this.appRouterService.appRouter(this.authenticationService.currentUserValue);


                  _this7.router.navigate(['/admin/faculty/']);
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this7.alertService.error(data['message']);

                  _this7.loading = false;
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

                _this7.alertService.error(errorMsg2show);

                _this7.loading = false;
              });
            } else {
              this.userService.updateUserById(_jsonData2send).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                if (data && data['success']) {
                  //alert(JSON.stringify( data));
                  _this7.alertService.success('user Updated successfully', true); //this.appRouterService.appRouter(this.authenticationService.currentUserValue);


                  _this7.router.navigate(['/admin/faculty/']);
                } else {
                  //alert(JSON.stringify(data['message']));
                  _this7.alertService.error(data['message']);

                  _this7.loading = false;
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

                _this7.alertService.error(errorMsg2show);

                _this7.loading = false;
              });
            }
          }
        }, {
          key: "onSelectMyProfileMedia",
          value: function onSelectMyProfileMedia(event) {
            var _this$myProfileFiles;

            //console.log('371 :: Added', event);
            (_this$myProfileFiles = this.myProfileFiles).push.apply(_this$myProfileFiles, _toConsumableArray(event.addedFiles)); //console.log('373', this.myProfileFiles);

          }
        }, {
          key: "onRemoveMyProfileMedia",
          value: function onRemoveMyProfileMedia(event) {
            //console.log('378 :: Removed', event);
            this.myProfileFiles.splice(this.myProfileFiles.indexOf(event), 1);
          }
        }, {
          key: "onUploadMyProfileMedia",
          value: function onUploadMyProfileMedia() {
            var _this8 = this;

            if (!this.isOtpSent) {
              this.alertService.error("Please Enter & Verify Email Id First");
              return;
            }

            if (this.fileUploadProgress) {
              this.alertService.error("Upload still in progress. Please try again later");
              return;
            }

            var checkArray = this.registerForm.get('myProfileMedia');

            if (checkArray.length >= 10) {
              this.alertService.error("Upload MAX limit reached.");
              return;
            }

            for (var _index in this.myProfileFiles) {
              var currentFile = this.myProfileFiles[_index];

              if (!currentFile) {
                this.alertService.error("Select file first.");
                continue;
              }

              if (!this.registerForm.get('_id').value) {
                var _id = this.registerForm.get('emailAddress').value + '_' + lodash__WEBPACK_IMPORTED_MODULE_14__["now"]();

                this.registerForm.get('_id').setValue(_id);
              }

              var formData = new FormData();
              formData.append('files', currentFile);
              formData.append('documentId', this.registerForm.get('_id').value);
              this.fileUploadProgress = '0%';
              this.http.post(uploadAPI, formData, {
                reportProgress: true,
                observe: 'events'
              }).subscribe(function (events) {
                if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress) {
                  _this8.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%'; //console.log(this.fileUploadProgress);
                } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response) {
                  _this8.fileUploadProgress = ''; //console.log(events.body);
                  //alert('SUCCESS !!');

                  _this8.alertService.success('Uploaded successfully', true);

                  var _uploadedUrl = events.body["data"].path;

                  if (lodash__WEBPACK_IMPORTED_MODULE_14__["startsWith"](_uploadedUrl, '/')) {
                    _uploadedUrl = _uploadedUrl.substr(1);
                  }

                  _this8.uploadedFilePath = uploadAccessUrl + '' + _uploadedUrl;

                  _this8.onMyProfileMediaUpdate(true, null, _this8.uploadedFilePath);
                }
              });
            }
          }
        }, {
          key: "onMyProfileMediaUpdate",
          value: function onMyProfileMediaUpdate(_addT, _index, _url) {
            var checkArray = this.registerForm.get('myProfileMedia');

            if (lodash__WEBPACK_IMPORTED_MODULE_14__["isNaN"](parseInt(_index))) {
              //_index=0;
              _index = checkArray.length;
            }

            if (_addT) {
              checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_url));
            } else {
              if (parseInt(_index) >= 0) {
                checkArray.removeAt(_index);
              } else {
                var i = 0;
                checkArray.controls.forEach(function (item) {
                  if (item.value == _url) {
                    checkArray.removeAt(i);
                    return;
                  }

                  i++;
                });
              }
            }
          }
        }, {
          key: "openFileUploaderForProfile",
          value: function openFileUploaderForProfile() {
            this.element_ctrlUploadProfile = document.getElementById('ctrlUploadProfile');
            this.element_ctrlUploadProfile.click();
          }
        }, {
          key: "fileProgressForProfile",
          value: function fileProgressForProfile(fileInput) {
            this.fileData4Profile = fileInput.target.files[0];
            this.previewForProfile();
          }
        }, {
          key: "previewForProfile",
          value: function previewForProfile() {
            var _this9 = this;

            // Show preview 
            var mimeType = this.fileData4Profile.type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(this.fileData4Profile);

            reader.onload = function (_event) {
              //this.registerForm.get('selfProfileUrl').setValue(reader.result);
              _this9.imgSelfProfileUrl = reader.result;
              _this9.selfProfileUrlPendingForUpload = true;
            };
          }
        }, {
          key: "onUploadForProfile",
          value: function onUploadForProfile() {
            var _this10 = this;

            if (!this.isOtpSent) {
              this.alertService.error("Please Enter & Verify Email Id First");
              return;
            }

            if (this.fileUploadProgress) {
              this.alertService.error("Upload still in progress. Please try again later");
              return;
            }

            if (!this.fileData4Profile) {
              this.alertService.error("Select file first.");
              return;
            }

            var mimeType = this.fileData4Profile.type;

            if (mimeType.match(/image\/*/) == null) {
              this.alertService.error("Select Image file only.");
              return;
            }

            if (!this.registerForm.get('_id').value) {
              var _id = this.registerForm.get('emailAddress').value + '_' + lodash__WEBPACK_IMPORTED_MODULE_14__["now"]();

              this.registerForm.get('_id').setValue(_id);
            }

            var formData = new FormData();
            formData.append('files', this.fileData4Profile);
            formData.append('documentId', this.registerForm.get('_id').value);
            this.fileUploadProgress = '0%';
            this.http.post(uploadAPI, formData, {
              reportProgress: true,
              observe: 'events'
            }).subscribe(function (events) {
              if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress) {
                _this10.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%'; //console.log(this.fileUploadProgress);
              } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response) {
                _this10.fileUploadProgress = ''; //console.log(events.body);
                //alert('SUCCESS !!');

                _this10.alertService.success('Uploaded successfully', true);

                var _uploadedUrl = events.body["data"].path;

                if (lodash__WEBPACK_IMPORTED_MODULE_14__["startsWith"](_uploadedUrl, '/')) {
                  _uploadedUrl = _uploadedUrl.substr(1);
                }

                _this10.uploadedFilePath = uploadAccessUrl + '' + _uploadedUrl;

                _this10.registerForm.get('selfProfileUrl').setValue(_this10.uploadedFilePath);

                _this10.selfProfileUrlPendingForUpload = false;
              }
            });
          }
        }, {
          key: "clickOnGoToNext",
          value: function clickOnGoToNext(_step) {
            switch (_step) {
              case 2:
                this.element_btn_click_profile_skills_verification.click();
                break;
            }
          }
        }, {
          key: "onClickGenderChange",
          value: function onClickGenderChange(_gender) {
            if (_gender) {//this.registerForm.get('gender').setValue(_gender);
            }
          }
        }, {
          key: "onAddRemoveEducationDetails",
          value: function onAddRemoveEducationDetails(education, addTremoveFalse) {
            var checkArray = this.registerForm.get('education');

            if (addTremoveFalse) {
              if (education) {
                if (checkArray.value.indexOf(education) == -1) {
                  checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](education));
                }
              }

              this.education = null;
            } else {
              var i = 0;
              checkArray.controls.forEach(function (item) {
                if (item.value == education) {
                  checkArray.removeAt(i);
                  return;
                }

                i++;
              });
            }
          }
        }, {
          key: "onAddRemoveAchievementsDetails",
          value: function onAddRemoveAchievementsDetails(achievements, addTremoveFalse) {
            var checkArray = this.registerForm.get('achievements');

            if (addTremoveFalse) {
              if (achievements) {
                if (checkArray.value.indexOf(achievements) == -1) {
                  checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](achievements));
                }
              }

              this.achievements = null;
            } else {
              var i = 0;
              checkArray.controls.forEach(function (item) {
                if (item.value == achievements) {
                  checkArray.removeAt(i);
                  return;
                }

                i++;
              });
            }
          }
        }, {
          key: "onCheckboxChange",
          value: function onCheckboxChange(e) {
            var checkArray = this.registerForm.get('appPermissions');

            if (e.target.checked) {
              checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](e.target.value));
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
          key: "onSkillSetsChange",
          value: function onSkillSetsChange(skill, addedTremovedF) {
            var checkArray = this.registerForm.get('appPermissions');

            if (addedTremovedF) {
              checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](skill));
            } else {
              var i = 0;
              checkArray.controls.forEach(function (item) {
                if (item.value == skill) {
                  checkArray.removeAt(i);
                  return;
                }

                i++;
              });
            }
          }
        }, {
          key: "onInitSetCheckedValue",
          value: function onInitSetCheckedValue(skill) {
            var checkArray = this.registerForm.get('appPermissions');
            return checkArray.value.indexOf(skill) > -1;
          }
        }, {
          key: "returnT4CurrentUserIsSAdmin",
          value: function returnT4CurrentUserIsSAdmin() {
            try {
              if (this.authenticationService.currentUserValue.appPermissions && this.authenticationService.currentUserValue.appPermissions.indexOf(src_app_models__WEBPACK_IMPORTED_MODULE_9__["AppAccessPermissions"].adminAddEdit) > -1) {
                return true;
              }
            } catch (ex) {}

            return false;
          }
        }]);

        return AddUserComponent;
      }();

      AddUserComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_11__["AppRouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_15__["SocketioService"]
        }];
      };

      AddUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-user',
        template: _raw_loader_add_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"], src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_11__["AppRouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_15__["SocketioService"]])], AddUserComponent);
      /***/
    },

    /***/
    "6pX3":
    /*!************************************************************!*\
      !*** ./src/app/admin/user-levels/user-levels.component.ts ***!
      \************************************************************/

    /*! exports provided: UserLevelsComponent */

    /***/
    function pX3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserLevelsComponent", function () {
        return UserLevelsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_levels_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-levels.component.html */
      "utD7");
      /* harmony import */


      var _user_levels_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-levels.component.css */
      "AyFQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var uploadAPI = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/api/post/upload/assetdata';
      var uploadAccessUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/';

      var UserLevelsComponent = /*#__PURE__*/function () {
        function UserLevelsComponent(http, formBuilder, authenticationService, userService, alertService, appRouterService, utilityService, _cdr, dialog) {
          _classCallCheck(this, UserLevelsComponent);

          this.http = http;
          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.utilityService = utilityService;
          this._cdr = _cdr;
          this.dialog = dialog;
          this.allUserLevelsDataLenders = [];
          this.allUserLevelsDataBorrower = [];
          this.loading = false;
          this.submitted = false;
          this.SessionStatus = src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"];
          this.userObj = null;
          this.Role = src_app_models__WEBPACK_IMPORTED_MODULE_6__["Role"];
          this.currentObj = null;
          this.actionButtons0Add1Edit2Delete = 0;
          this.userObj = this.authenticationService.currentUserValue;
          this.initForm();
          this.fetchAllUserLevelsByUserId();
        }

        _createClass(UserLevelsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fetchAllUserLevelsByUserId",
          value: function fetchAllUserLevelsByUserId() {
            var _this11 = this;

            this.userService.getUserLevelsAll(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this11.allUserLevelsDataLenders = lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](data["data"], {
                  'role': src_app_models__WEBPACK_IMPORTED_MODULE_6__["Role"].Lender
                });
                _this11.allUserLevelsDataBorrower = lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](data["data"], {
                  'role': src_app_models__WEBPACK_IMPORTED_MODULE_6__["Role"].Borrower
                }); //this.alertService.success(data['message'], true);

                _this11.loading = false;

                _this11._cdr.detectChanges();
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

              _this11.appRouterService.appRouter('');
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.userUserLevelsForm.controls;
          }
        }, {
          key: "onUserLevelsUpdateSubmit",
          value: function onUserLevelsUpdateSubmit() {
            var _this12 = this;

            this.submitted = true;

            if (this.userUserLevelsForm.invalid) {
              this.alertService.error("Please Provide all data");
              return;
            }

            this.userService.addUpdateUserUserLevels(this.userUserLevelsForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this12.alertService.success('User Level Updated successfully', true);

                _this12.fetchAllUserLevelsByUserId();

                _this12.submitted = false;

                _this12.closeDialog(); //this.appRouterService.appRouter(this.userObj);

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

              _this12.loading = false; //this.closeDialog();
            });
          }
        }, {
          key: "showEditingFormUserLevels",
          value: function showEditingFormUserLevels(_userObj) {
            /*
                  name: [{value:_userObj.name || '', disabled: this.actionButtons0Add1Edit2Delete==2}, Validators.required],
                  description: [{value:_userObj.description || '', disabled: this.actionButtons0Add1Edit2Delete==2}],
                  role: [{value:_userObj.role || '', disabled: this.actionButtons0Add1Edit2Delete!=0}, Validators.required],
                  minimumContract: [{value:_userObj.minimumContract || null, disabled: this.actionButtons0Add1Edit2Delete==2}, [Validators.required, Validators.min(1)]],
                  minimumSpent: [{value:_userObj.minimumSpent || null, disabled: this.actionButtons0Add1Edit2Delete==2}, [Validators.required, Validators.min(1)]],
            */
            this.userUserLevelsForm = this.formBuilder.group({
              _id: [_userObj._id || ''],
              name: [_userObj.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              description: [_userObj.description || ''],
              role: [_userObj.role || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              minimumContract: [_userObj.minimumContract || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
              minimumSpent: [_userObj.minimumSpent || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
              status: [_userObj.status || src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Approved],
              createdOn: [_userObj.createdOn || null],
              updatedOn: [_userObj.updatedOn || null],
              isDeleted: [_userObj.isDeleted || false],
              createdBy: [_userObj.createdBy || this.authenticationService.currentUserValue._id],
              deletedBy: [_userObj.deletedBy || ''],
              updatedBy: [this.authenticationService.currentUserValue._id]
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.userUserLevelsForm = this.formBuilder.group({
              _id: [''],
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              description: [''],
              role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              minimumContract: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
              minimumSpent: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
              status: [src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Approved],
              createdOn: [null],
              updatedOn: [null],
              isDeleted: [false],
              createdBy: [this.authenticationService.currentUserValue._id],
              deletedBy: [''],
              updatedBy: []
            });
          }
        }, {
          key: "EditShowLevelForm",
          value: function EditShowLevelForm(_userObj) {
            this.actionButtons0Add1Edit2Delete = 1;
            this.initForm();
            this.showEditingFormUserLevels(_userObj);
            $("#userLevelModal").modal('show');
          }
        }, {
          key: "DeleteShowLevelForm",
          value: function DeleteShowLevelForm(_userObj) {
            this.currentObj = _userObj;
            this.actionButtons0Add1Edit2Delete = 2;
            this.initForm();
            this.showEditingFormUserLevels(_userObj);
            $("#userLevelModal").modal('show');
          }
        }, {
          key: "DeleteData",
          value: function DeleteData() {
            this.actionButtons0Add1Edit2Delete = 2;
            this.initForm();
            this.showEditingFormUserLevels(this.currentObj);
            this.userUserLevelsForm.get("isDeleted").setValue(true);
            this.userUserLevelsForm.get("deletedBy").setValue(this.authenticationService.currentUserValue._id);

            var _temp_allPartnersData = lodash__WEBPACK_IMPORTED_MODULE_11__["mapKeys"](this.allUserLevelsDataBorrower, '_id');

            delete _temp_allPartnersData[this.currentObj._id];
            this.allUserLevelsDataBorrower = lodash__WEBPACK_IMPORTED_MODULE_11__["values"](_temp_allPartnersData);
            _temp_allPartnersData = lodash__WEBPACK_IMPORTED_MODULE_11__["mapKeys"](this.allUserLevelsDataLenders, '_id');
            delete _temp_allPartnersData[this.currentObj._id];
            this.allUserLevelsDataLenders = lodash__WEBPACK_IMPORTED_MODULE_11__["values"](_temp_allPartnersData);
            this.onUserLevelsUpdateSubmit();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.currentObj = null;
            this.actionButtons0Add1Edit2Delete = 0;
            this.initForm();
            $("#userLevelModal").modal('hide');
          }
        }]);

        return UserLevelsComponent;
      }();

      UserLevelsComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      };

      UserLevelsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-levels',
        template: _raw_loader_user_levels_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_levels_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])], UserLevelsComponent);
      /***/
    },

    /***/
    "7ZPZ":
    /*!***************************************************!*\
      !*** ./src/app/services/service-types.service.ts ***!
      \***************************************************/

    /*! exports provided: ServiceTypesService */

    /***/
    function ZPZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceTypesService", function () {
        return ServiceTypesService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ServiceTypesService = /*#__PURE__*/function () {
        function ServiceTypesService(http) {
          _classCallCheck(this, ServiceTypesService);

          this.http = http;
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/';
        }

        _createClass(ServiceTypesService, [{
          key: "addNewServiceTypes",
          value: function addNewServiceTypes(serviceTypes) {
            return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/addnew', serviceTypes);
          }
        }, {
          key: "getServiceTypesById",
          value: function getServiceTypesById(id) {
            return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getbyid', {
              serviceTypesId: id
            });
          }
        }, {
          key: "getServiceTypesAll",
          value: function getServiceTypesAll() {
            return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getall', {});
          }
        }, {
          key: "updateServiceTypesById",
          value: function updateServiceTypesById(serviceTypes) {
            return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/update/byid', serviceTypes);
          }
        }, {
          key: "getServiceTypesParentAll",
          value: function getServiceTypesParentAll() {
            return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getall/parents', {});
          }
        }, {
          key: "getServiceTypesChildAll",
          value: function getServiceTypesChildAll() {
            return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getall/child', {});
          }
        }, {
          key: "deleteServiceTypesById",
          value: function deleteServiceTypesById(documentId, deletedBy) {
            return this.http.post(this.baseurl + 'api/post/user/servicetypes-blocked/byid', {
              documentId: documentId,
              deletedBy: deletedBy
            });
          }
        }]);

        return ServiceTypesService;
      }();

      ServiceTypesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      ServiceTypesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ServiceTypesService);
      /***/
    },

    /***/
    "ABg6":
    /*!**************************************************!*\
      !*** ./src/app/admin/header/header.component.ts ***!
      \**************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function ABg6(module, __webpack_exports__, __webpack_require__) {
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
      "wJwY");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "hP8I");
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


      var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/messages.service */
      "Hzbo");
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/notification.service */
      "OC8m");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, authenticationService, utilityService, notificationService, messagesService) {
          var _this13 = this;

          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.utilityService = utilityService;
          this.notificationService = notificationService;
          this.messagesService = messagesService;
          this.TransactionActionType = src_app_models__WEBPACK_IMPORTED_MODULE_5__["TransactionActionType"];
          this.messagesService.getAllMyContacts();
          this.authenticationService.currentUser.subscribe(function (x) {
            return _this13.currentUser = x;
          });
        }

        _createClass(HeaderComponent, [{
          key: "logout",
          value: function logout() {
            this.router.navigate(['/logout']);
          }
        }, {
          key: "navigate2State",
          value: function navigate2State(state) {
            var stateObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            state = state ? state : '/logout';

            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            };

            this.router.onSameUrlNavigation = 'reload';

            if (!stateObj) {
              this.router.navigate([state]);
            } else {
              this.router.navigate([state], {
                state: stateObj
              });
            }
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
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]
        }, {
          type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
        }, {
          type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_7__["MessagesService"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"], src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_7__["MessagesService"]])], HeaderComponent);
      /***/
    },

    /***/
    "AvT8":
    /*!************************************************!*\
      !*** ./src/app/admin/blogs/blogs.component.ts ***!
      \************************************************/

    /*! exports provided: BlogsComponent */

    /***/
    function AvT8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogsComponent", function () {
        return BlogsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blogs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blogs.component.html */
      "XQ+j");
      /* harmony import */


      var _blogs_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blogs.component.css */
      "LOaD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_shared_media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/media-preview/media-preview.component */
      "tZK8");

      var uploadAPI = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/api/post/upload/assetdata';
      var uploadAccessUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/';

      var BlogsComponent = /*#__PURE__*/function () {
        function BlogsComponent(http, formBuilder, authenticationService, userService, alertService, appRouterService, utilityService, _cdr, dialog) {
          _classCallCheck(this, BlogsComponent);

          this.http = http;
          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.utilityService = utilityService;
          this._cdr = _cdr;
          this.dialog = dialog;
          this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '0',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [{
              "class": 'arial',
              name: 'Arial'
            }, {
              "class": 'times-new-roman',
              name: 'Times New Roman'
            }, {
              "class": 'calibri',
              name: 'Calibri'
            }, {
              "class": 'comic-sans-ms',
              name: 'Comic Sans MS'
            }],
            customClasses: [{
              name: 'quote',
              "class": 'quote'
            }, {
              name: 'redText',
              "class": 'redText'
            }, {
              name: 'titleText',
              "class": 'titleText',
              tag: 'h1'
            }],
            uploadUrl: 'v1/image',

            /*upload: (file: File) => { ... }*/
            uploadWithCredentials: false,
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
          };
          this.fileData4blogsDocument = null;
          this.fileData4blogsDocumentPendingForUpload = false;
          this.loading = false;
          this.submitted = false;
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
          this.currentObj = null;
          this.actionButtons0Add1Edit2Delete = 0;
          this.userObj = this.authenticationService.currentUserValue;
          this.initForm();
          this.fetchAllBlogsByUserId();
        }

        _createClass(BlogsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fetchAllBlogsByUserId",
          value: function fetchAllBlogsByUserId() {
            var _this14 = this;

            this.userService.getBlogsAll(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this14.allBlogsData = data["data"]; //this.alertService.success(data['message'], true);

                _this14.loading = false;
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

              _this14.alertService.error(errorMsg2show);

              _this14.loading = false;

              _this14.appRouterService.appRouter('');
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.userBlogsForm.controls;
          }
        }, {
          key: "onBlogsUpdateSubmit",
          value: function onBlogsUpdateSubmit() {
            var _this15 = this;

            this.submitted = true;

            if (this.userBlogsForm.invalid) {
              this.alertService.error("Please Provide all data");
              return;
            }

            if (this.fileData4blogsDocumentPendingForUpload) {
              this.alertService.error('Please upload document first');
              return;
            }

            this.userService.addUpdateUserBlogs(this.userBlogsForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this15.alertService.success('Blog Updated successfully', true);

                _this15.fetchAllBlogsByUserId();

                _this15.submitted = false;

                _this15.closeDialog(); //this.appRouterService.appRouter(this.userObj);

              } else {
                //alert(JSON.stringify(data['message']));
                _this15.alertService.error(data['message']);

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
              } catch (ex) {}

              _this15.alertService.error(errorMsg2show);

              _this15.loading = false; //this.closeDialog();
            });
          }
        }, {
          key: "showEditingFormBlogs",
          value: function showEditingFormBlogs(_userObj) {
            this.userBlogsForm = this.formBuilder.group({
              _id: [_userObj._id || ''],
              title: [_userObj.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              description: [_userObj.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              blogsDocument: [_userObj.blogsDocument || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              status: [_userObj.status || src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending],
              createdOn: [_userObj.createdOn || null],
              updatedOn: [_userObj.updatedOn || null],
              isDeleted: [_userObj.isDeleted || false],
              createdBy: [_userObj.createdBy || this.authenticationService.currentUserValue._id],
              deletedBy: [_userObj.deletedBy || ''],
              updatedBy: [this.authenticationService.currentUserValue._id]
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.userBlogsForm = this.formBuilder.group({
              _id: [''],
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              blogsDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              status: [src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending],
              createdOn: [''],
              updatedOn: [''],
              isDeleted: [false],
              createdBy: [this.authenticationService.currentUserValue._id || ''],
              deletedBy: [''],
              updatedBy: ['']
            });
          }
        }, {
          key: "onfileProgressForBlogsDocument",
          value: function onfileProgressForBlogsDocument(fileInput) {
            this.fileData4blogsDocument = fileInput.target.files[0];
            this.previewForBlogsDocument();
          }
        }, {
          key: "previewForBlogsDocument",
          value: function previewForBlogsDocument() {
            var _this16 = this;

            // Show preview 
            var mimeType = this.fileData4blogsDocument.type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(this.fileData4blogsDocument);

            reader.onload = function (_event) {
              _this16.userBlogsForm.get('blogsDocument').setValue(reader.result);

              _this16.fileData4blogsDocumentPendingForUpload = true;
            };
          }
        }, {
          key: "onUploadForBlogsDocument",
          value: function onUploadForBlogsDocument() {
            var _this17 = this;

            if (!this.fileData4blogsDocument) {
              this.alertService.error("Select file first.");
              return;
            }

            var mimeType = this.fileData4blogsDocument.type;

            if (mimeType.match(/image\/*/) == null) {
              this.alertService.error("Select Image file only.");
              return;
            }

            var formData = new FormData();
            formData.append('files', this.fileData4blogsDocument);
            formData.append('documentId', this.userObj._id + '__blogs');
            this.fileUploadProgress = '0%';
            this.http.post(uploadAPI, formData, {
              reportProgress: true,
              observe: 'events'
            }).subscribe(function (events) {
              if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].UploadProgress) {
                _this17.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%'; //console.log(this.fileUploadProgress);
              } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].Response) {
                _this17.fileUploadProgress = ''; //console.log(events.body);
                //alert('SUCCESS !!');

                _this17.fileData4Profile = null;

                _this17.alertService.success('Uploaded successfully', true);

                var _uploadedUrl = events.body["data"].path;

                if (lodash__WEBPACK_IMPORTED_MODULE_11__["startsWith"](_uploadedUrl, '/')) {
                  _uploadedUrl = _uploadedUrl.substr(1);
                }

                _this17.uploadedFilePath = uploadAccessUrl + '' + _uploadedUrl;

                _this17.userBlogsForm.get('blogsDocument').setValue(_this17.uploadedFilePath);

                _this17.fileData4blogsDocumentPendingForUpload = false;
              }
            });
          }
        }, {
          key: "mediaPreviewModel",
          value: function mediaPreviewModel(mediaSrc, mimeType) {
            //console.log('411', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(src_app_shared_media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_14__["MediaPreviewComponent"], {
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
            dialogRef.afterClosed().subscribe(function (result) {//console.log(`426 :: msc :: Dialog result: ${JSON.stringify(result)}`);
            });
          }
        }, {
          key: "EditShowBlogsForm",
          value: function EditShowBlogsForm(_userObj) {
            this.actionButtons0Add1Edit2Delete = 1;
            this.initForm();
            this.showEditingFormBlogs(_userObj);
            $("#blogModal").modal('show');
          }
        }, {
          key: "DeleteShowBlogsForm",
          value: function DeleteShowBlogsForm(_userObj) {
            this.currentObj = _userObj;
            this.actionButtons0Add1Edit2Delete = 2;
            this.initForm();
            this.showEditingFormBlogs(_userObj);
            $("#blogModal").modal('show');
          }
        }, {
          key: "DeleteData",
          value: function DeleteData() {
            this.actionButtons0Add1Edit2Delete = 2;
            this.initForm();
            this.showEditingFormBlogs(this.currentObj);
            this.userBlogsForm.get("isDeleted").setValue(true);
            this.userBlogsForm.get("deletedBy").setValue(this.authenticationService.currentUserValue._id);

            var _temp_allPartnersData = lodash__WEBPACK_IMPORTED_MODULE_11__["mapKeys"](this.allBlogsData, '_id');

            delete _temp_allPartnersData[this.currentObj._id];
            this.allBlogsData = lodash__WEBPACK_IMPORTED_MODULE_11__["values"](_temp_allPartnersData);
            this.onBlogsUpdateSubmit();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.currentObj = null;
            this.actionButtons0Add1Edit2Delete = 0;
            this.initForm();
            $("#blogModal").modal('hide');
          }
        }]);

        return BlogsComponent;
      }();

      BlogsComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      };

      BlogsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blogs',
        template: _raw_loader_blogs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blogs_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])], BlogsComponent);
      /***/
    },

    /***/
    "AyFQ":
    /*!*************************************************************!*\
      !*** ./src/app/admin/user-levels/user-levels.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function AyFQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxldmVscy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "B5sM":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/partners/partners.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function B5sM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-3\">\n    <div class=\"col-xl-6\">\n      <h4 class=\"text-primary\" i18n>Partners</h4>\n    </div>\n    <div class=\"col-xl-6\">\n      <button class=\"btn btn-success btn-sm float-right\" data-toggle=\"modal\" data-target=\"#blogModal\" i18n>New</button>\n    </div>\n  </div>\n  \n  <table class=\"table table-striped table-bordered\">\n    <thead>\n      <tr>\n        <th i18n>Title</th>\n        <th i18n>Domain Link</th>\n        <th i18n>Description</th>\n        <!--<th>Status</th>-->\n        <th i18n>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let obj2show of allPartnersData\">\n        <td>{{obj2show.title}}</td>\n        <td>{{obj2show.domainLink}}</td>\n        <td>{{obj2show.description}}</td>\n        <!--<td class=\"text-capitalize text-cap\">\n            <span class=\"badge\" [ngClass]=\"{'badge-success': (obj2show.status==SessionStatus.Approved || obj2show.status==SessionStatus.Accepted || obj2show.status==SessionStatus.Active || obj2show.status==SessionStatus.Completed || obj2show.status==SessionStatus.OngoingInitiated  || obj2show.status==SessionStatus.AwaitingForApproval  || obj2show.status==SessionStatus.Ongoing), 'badge-danger': (obj2show.status==SessionStatus.Rejected || obj2show.status==SessionStatus.RejectedOngoing || obj2show.status==SessionStatus.Suspended), 'badge-info': ( obj2show.status==null || obj2show.status=='' || obj2show.status==SessionStatus.Pending)}\">\n                {{obj2show.status}}\n            </span>\n        </td>\n      -->\n        <td>\n          <label title=\"Preview\" (click)=\"mediaPreviewModel(obj2show.refDocument, 'image')\">\n            <i class=\"icon-eye m-2 text-success\"></i>\n          </label>\n          <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Edit\" (click)=\"EditShowPartnersForm(obj2show)\">\n            <i class=\"icon-pencil\"></i>\n          </button>\n          <button class=\"btn btn-danger btn-sm btn-xs\" data-title=\"Delete\" (click)=\"DeleteShowPartnersForm(obj2show)\">\n            <i class=\"icon-trash\"></i>\n          </button>\n        </td>\n      </tr>\n  \n    </tbody>\n  </table>\n  <div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"blogModal\">\n    <div class=\"modal-dialog modal-dialog-centered  modal-lg\">\n      <div class=\"modal-content\">\n  \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-primary\" i18n>New Partners</h4>\n          <button type=\"button\" class=\"close\" (click)=\"closeDialog()\">&times;</button>\n        </div>\n  \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <form [formGroup]=\"userPartnersForm\">\n            <div class=\"row mb-3\">\n              <div class=\"col-xl-12\">\n                <div class=\"form-group\">\n                  <label for=\"title\" i18n>Partners Title</label>\n                  <input [disabled]=\"actionButtons0Add1Edit2Delete==2\" type=\"text\" formControlName=\"title\"\n                    class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" />\n                  <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.title.errors.required\" i18n>Partners Title is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xl-12\">\n                <div class=\"form-group\">\n                  <label for=\"domainLink\" i18n>Partners Domain Link</label>\n                  <input [disabled]=\"actionButtons0Add1Edit2Delete==2\" type=\"url\" formControlName=\"domainLink\"\n                    class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.domainLink.errors }\" />\n                  <div *ngIf=\"submitted && f.domainLink.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.domainLink.errors.required\" i18n>Partners Domain Link is required</div>\n                  </div>\n                </div>\n              </div>\n              \n              <div class=\"col-xl-12\">\n                <div class=\"form-group\">\n                  <label for=\"description\" i18n>Contents</label>\n                  <textarea [disabled]=\"actionButtons0Add1Edit2Delete==2\" type=\"number\" formControlName=\"description\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" cols=\"40\" rows=\"5\"\n                    class=\"form-control\"></textarea>\n                  <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.description.errors.required\">\n                      Contents is required\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xl-12\">\n                <div class=\"form-group\">\n                  <label for=\"refDocument\" i18n>Image Cover &nbsp;</label>\n  \n                  <img *ngIf=\"f.refDocument.value\" [src]=\"f.refDocument.value\" class=\"border img-fluid mb-3\"\n                    height=\"50\" width=\"50\" />\n  \n  \n                  <input [disabled]=\"actionButtons0Add1Edit2Delete==2\" *ngIf=\"!fileData4refDocumentPendingForUpload\"\n                    id=\"ctrlUploadrefDocument\" type=\"file\" name=\"image\" accept=\"image/*\"\n                    (change)=\"onfileProgressForPartnersDocument($event)\">\n                  <i *ngIf=\"fileData4refDocumentPendingForUpload\" class=\"icon-upload m-2 cursor-pointer text-success\"\n                    (click)=\"onUploadForPartnersDocument()\" i18n>\n                    Upload\n                  </i>\n                  <div *ngIf=\"submitted && f.refDocument.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.refDocument.errors.required\" i18n>Image Cover is required\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xl-12\" [ngSwitch]=\"actionButtons0Add1Edit2Delete\">\n                <button *ngSwitchCase=\"0\" class=\"btn btn-success btn-sm float-right\" (click)=\"onPartnersUpdateSubmit()\" i18n>\n                  <i class=\"icon icon-plus\"></i>\n                  ADD\n                </button>\n                <button *ngSwitchCase=\"1\" class=\"btn btn-success btn-sm float-right\" (click)=\"onPartnersUpdateSubmit()\">\n                  <i class=\"icon icon-pencil\"></i>\n                  Edit\n                </button>\n                <button *ngSwitchCase=\"2\" class=\"btn btn-success btn-sm float-right\" i18n (click)=\"DeleteData()\">\n                  <i class=\"icon icon-trash\"></i>\n                  Delete\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n  \n      </div>\n    </div>\n  </div>";
      /***/
    },

    /***/
    "Dx9I":
    /*!*************************************************************************!*\
      !*** ./src/app/admin/service-types-add/service-types-add.component.css ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function Dx9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLXR5cGVzLWFkZC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "FiyT":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function FiyT(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Subscription_1 = __webpack_require__(
      /*! ./Subscription */
      "zB/H");

      var SubjectSubscription = function (_super) {
        __extends(SubjectSubscription, _super);

        function SubjectSubscription(subject, subscriber) {
          var _this = _super.call(this) || this;

          _this.subject = subject;
          _this.subscriber = subscriber;
          _this.closed = false;
          return _this;
        }

        SubjectSubscription.prototype.unsubscribe = function () {
          if (this.closed) {
            return;
          }

          this.closed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = null;

          if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
          }

          var subscriberIndex = observers.indexOf(this.subscriber);

          if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
          }
        };

        return SubjectSubscription;
      }(Subscription_1.Subscription);

      exports.SubjectSubscription = SubjectSubscription; //# sourceMappingURL=SubjectSubscription.js.map

      /***/
    },

    /***/
    "GCkI":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GCkI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\n    <div class=\"col-xl-12 col-md-12 mb-4\">\n        <div class=\"card shadow h-100\">\n            <div class=\"card-header\">\n                <div class=\"font-weight-bold text-primary\" i18n>User Management</div>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n\n                    <div class=\"col-xl-12 col-12 mb-4\">\n                        <div class=\"view view-cascade gradient-card-header white\">\n                            <table datatable [dtOptions]=\"dtOptions\"\n                                class=\"row-border hover table table-striped table-responsive-md btn-table\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"d-none\" i18n>ID</th>\n                                        <th i18n>Email</th>\n                                        <th i18n>Full Name</th>\n                                        <th i18n>Role</th>\n                                        <!--<th i18n>Mobile</th>-->\n                                        <th i18n>Verified</th>\n                                        <th i18n>Status</th>\n                                        <th class=\"text-right\" i18n>Actions</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentTransactionDetailsArray)\">\n                                        <td class=\"d-none\">{{obj._id}}</td>\n                                        <td>{{obj.emailAddress}}</td>\n                                        <td>{{obj.firstName}}&nbsp;{{obj.middleName}}&nbsp;{{obj.lastName}}</td>\n                                        <td class=\"text-capitalize\">{{obj.role}}</td>\n                                        <!--<td>{{obj.mobileNo}}</td>-->\n                                        <td>\n                                            <div\n                                                *ngIf=\"returnT4CurrentUserAllowedToShow(obj.role) && obj._id != authenticationService.currentUserValue._id\">\n                                                <div *ngIf=\"!obj.isDeleted\">\n                                                    <span [ngSwitch]=\"obj.isVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\">Blocked</i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\">Verified</i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-danger font-weight-light\">Pending</i>\n                                                    </span>\n                                                    <!--\n                                                <span i18n *ngIf=\"!obj.isVerified\"\n                                                    class=\"btn text-white badge badge-danger font-weight-light\">\n                                                    Pending\n                                                </span>\n                                                <span i18n *ngIf=\"obj.isVerified\"\n                                                    class=\"badge badge-success font-weight-light\">\n                                                    Approved\n                                                </span>\n                                            -->\n                                                </div>\n                                                <div *ngIf=\"obj.isDeleted\">\n                                                    <span class=\"btn text-white badge badge-danger font-weight-light\"\n                                                        i18n>\n                                                        Deleted\n                                                    </span>\n                                                </div>\n                                            </div>\n                                        </td>\n                                        <td>\n                                            <div *ngIf=\"!obj.isDeleted\">\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.myPassportMedia).length>0\">\n                                                    <span [ngSwitch]=\"obj.myPassportMediaVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">Passport </i>\n                                                    </span>\n                                                </div>\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.myDLMedia).length>0\">\n                                                    <span [ngSwitch]=\"obj.myDLMediaVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">DL </i>\n                                                    </span>\n                                                </div>\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.myHICardMedia).length>0\">\n                                                    <span [ngSwitch]=\"obj.myHICardMediaVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">HI </i>\n                                                    </span>\n                                                </div>\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.myRKIMedia).length>0\">\n                                                    <span [ngSwitch]=\"obj.myRKIMediaVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">RKI</i>\n                                                    </span>\n                                                </div>\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.externalAppLinks).length>0\">\n                                                    <span [ngSwitch]=\"obj.externalAppLinksVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">Facebook</i>\n                                                    </span>\n                                                </div>\n\n\n                                            </div>\n                                        </td>\n                                        <td class=\"text-left\">\n                                            <div\n                                                *ngIf=\"!obj.isDeleted && returnT4CurrentUserAllowedToShow(obj.role) && obj._id != authenticationService.currentUserValue._id\">\n                                                <button *ngIf=\"obj.isVerified==1 && returnT4CurrentUserIsSAdmin()\"\n                                                    class=\"btn btn-success btn-sm btn-xs mr-1\"\n                                                    (click)=\"navigate2EditUser(obj._id)\" data-title=\"Edit\">\n                                                    <i class=\"icon-pencil\"></i>\n                                                </button>\n                                                <button class=\"btn btn-success btn-sm btn-xs mr-1\"\n                                                    (click)=\"usersProfile(obj)\" data-title=\"View User Details\">\n                                                    <i class=\"icon-user\"></i>\n                                                </button>\n\n                                                <button *ngIf=\"obj.role==Role.Borrower\"\n                                                    class=\"btn btn-success btn-sm btn-xs mr-1\"\n                                                    (click)=\"usersIncomeExpenseDetails(obj)\"\n                                                    data-title=\"Income Proof and Monthly Expenses Details\">\n                                                    <i class=\"icon-receipt\"></i>\n                                                </button>\n\n                                                <button *ngIf=\"obj.isVerified==1\"\n                                                    class=\"btn btn-warning btn-sm btn-xs mr-1\" data-title=\"Block User\"\n                                                    (click)=\"usersRestrictionModal(obj, 2)\">\n                                                    <i class=\"icon-lock\"></i>\n                                                </button>\n                                                <button *ngIf=\"!obj.isVerified || obj.isVerified==2\"\n                                                    class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Verify User\"\n                                                    (click)=\"usersRestrictionModal(obj, 1)\">\n                                                    <i class=\"icon-unlock\"></i>\n                                                </button>\n\n\n                                                <button class=\"btn btn-danger btn-sm btn-xs\"\n                                                    (click)=\"deleteUserById(obj._id)\" data-title=\"Delete\">\n                                                    <i class=\"icon-trash\"></i>\n                                                </button>\n                                            </div>\n                                        </td>\n                                    </tr>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "JU3h":
    /*!**************************************************!*\
      !*** ./src/app/admin/footer/footer.component.ts ***!
      \**************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function JU3h(module, __webpack_exports__, __webpack_require__) {
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
      "XUcl");
      /* harmony import */


      var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.css */
      "37Rf");
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
    "KKo0":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/home/home.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function KKo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2 class=\"about-font-header mb-4 text-primary font-weight-light\">Welcome Admin!<span class=\"block-span\"></span></h2>\n\n<div class=\"row\">\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-primary text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Active Loan Amount\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.totalLoanAmountActive ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card  bg-warning text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                           Total Lent Amount\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.totalLoanAmountLent ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-success text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total Refunded Amount\n                        </div>\n                        <div class=\"row no-gutters align-items-center\">\n                            <div class=\"col-auto\">\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">\n                                    {{authenticationService.currentUserAdminDashboardDataDetails.totalLoanAmountPaid ||0}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-secondary text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Loan Refund %\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.loanRefundInPer ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- First Row Ended -->\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-primary text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total Not Paid Amount\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.totalLoanAmountUnpaid ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card  bg-warning text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total Loan Amount Inkasso\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.totalLoanAmountUnpaidInkasso ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-success text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Interest Rate (AVG)\n                        </div>\n                        <div class=\"row no-gutters align-items-center\">\n                            <div class=\"col-auto\">\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">\n                                    {{authenticationService.currentUserAdminDashboardDataDetails.AvgLoanInterestRate ||0}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-secondary text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Loan Amount (AVG)\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.AvgLoanAmount ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Second Row Ended -->\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-primary text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total Lenders\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.totalLenderUsers ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card  bg-warning text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total Borrowers\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.totalBorrowerUsers ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-success text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total Blocked Users\n                        </div>\n                        <div class=\"row no-gutters align-items-center\">\n                            <div class=\"col-auto\">\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">\n                                    {{authenticationService.currentUserAdminDashboardDataDetails.totalBlockedUsers ||0}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-secondary text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total InActive Users (Last 15 Days)\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.totalInActiveUsers ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Third Row Ended -->\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-primary text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total Paying Lenders\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.totalUniquePayingLenders ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card  bg-warning text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total Paying Borrowers\n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            {{authenticationService.currentUserAdminDashboardDataDetails.totalUniquePayingBorrowers ||0}}\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-success text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\" i18n>\n                            Total Insurance Purchases (QTY)\n                        </div>\n                        <div class=\"row no-gutters align-items-center\">\n                            <div class=\"col-auto\">\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">\n                                    {{authenticationService.currentUserAdminDashboardDataDetails.totalNumberLoanInsuranceTaken ||0}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\n        <div class=\"card bg-secondary text-white shadow h-100\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\n                            \n                        </div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\n                            \n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Fourth Row Ended -->   \n</div>\n\n\n";
      /***/
    },

    /***/
    "LOaD":
    /*!*************************************************!*\
      !*** ./src/app/admin/blogs/blogs.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function LOaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9ncy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Mxlh":
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function Mxlh(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var ObjectUnsubscribedErrorImpl = function () {
        function ObjectUnsubscribedErrorImpl() {
          Error.call(this);
          this.message = 'object unsubscribed';
          this.name = 'ObjectUnsubscribedError';
          return this;
        }

        ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
        return ObjectUnsubscribedErrorImpl;
      }();

      exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl; //# sourceMappingURL=ObjectUnsubscribedError.js.map

      /***/
    },

    /***/
    "OcPW":
    /*!********************************************************************!*\
      !*** ./src/app/admin/user-management/user-management.component.ts ***!
      \********************************************************************/

    /*! exports provided: UserManagementComponent */

    /***/
    function OcPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () {
        return UserManagementComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-management.component.html */
      "GCkI");
      /* harmony import */


      var _user_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-management.component.css */
      "nyuw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/public-profile/public-profile.component */
      "bLZ2");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_models_role__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/role */
      "z56L");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var src_app_shared_income_proof_income_proof_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/income-proof/income-proof.component */
      "KRlv");
      /* harmony import */


      var src_app_shared_user_restriction_details_user_restriction_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/user-restriction-details/user-restriction-details.component */
      "arha");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var that;

      var UserManagementComponent = /*#__PURE__*/function () {
        function UserManagementComponent(dialog, socketService, alertService, utilityService, authenticationService, router, elementRef, userService) {
          _classCallCheck(this, UserManagementComponent);

          this.dialog = dialog;
          this.socketService = socketService;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.authenticationService = authenticationService;
          this.router = router;
          this.elementRef = elementRef;
          this.userService = userService;
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          this.dtOptions = {};
          this.PaymentTransactionDetailsArray = null;
          this.loading = false;
          this.Role = src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["Role"];
          this.recordsTotal = 0;
          this.nextPageIndex = 0;
          this.totalPages = 0;
          this.limit4Filtered = 0;
          this.recordsFiltered = 0; //this.getAllUsersWithRequestData();
        }

        _createClass(UserManagementComponent, [{
          key: "getAllUsersWithRequestData",
          value: function getAllUsersWithRequestData() {
            var _this18 = this;

            var _skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var dataTablesParameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var returnOnlyPendingT = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var _data = {};
            this.socketService.getAllUsersWithRequestData(_data, _skip, dataTablesParameters, returnOnlyPendingT).subscribe(function (data) {
              if (data && data['success']) {
                //this.PaymentTransactionDetailsArray = this.utilityService._.uniq(this.utilityService._.union((this.PaymentTransactionDetailsArray || []), data["data"]));
                _this18.PaymentTransactionDetailsArray = data["data"];
                _this18.recordsTotal = data['metaData']['totalDocs'] || 0;
                _this18.nextPageIndex = data['metaData']['nextPage'] || 0;
                _this18.totalPages = data['metaData']['totalPages'] || 0;
                _this18.limit4Filtered = data['metaData']['limit'] || 0;
                _this18.recordsFiltered = data['metaData']['recordsFiltered'] || _this18.recordsTotal;

                if (callback) {
                  callback({
                    recordsTotal: _this18.recordsTotal || 0,
                    recordsFiltered: _this18.recordsFiltered || 0,
                    data: []
                  });
                } else {
                  _this18.populateUsersDataInTable();
                } //this.rerender();


                _this18.loading = false;
              } else {
                _this18.alertService.error(data['message']);

                _this18.loading = false;
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

              _this18.alertService.error(errorMsg2show);

              _this18.loading = false;
            });
          }
        }, {
          key: "updateUsersVerificationStatus",
          value: function updateUsersVerificationStatus(_userId, _isVerified) {
            var _this19 = this;

            this.alertService.success("Please wait while we updating status of user");
            this.socketService.updateUsersVerificationStatus(_userId, _isVerified).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                var i = 0;

                _this19.PaymentTransactionDetailsArray.forEach(function (item) {
                  if (item._id == data["data"]["_id"]) {
                    _this19.PaymentTransactionDetailsArray.splice(i, 1, data["data"]);

                    return;
                  }

                  i++;
                });

                _this19.populateUsersDataInTable();
                /*let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                usersObjArr[data["data"]["_id"]] = data["data"]
                this.PaymentTransactionDetailsArray = usersObjArr;
                this.populateUsersDataInTable();*/
                //this.rerender();


                _this19.alertService.success(data['message']);

                _this19.loading = false;
              } else {
                _this19.alertService.error(data['message']);

                _this19.loading = false;
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

              _this19.alertService.error(errorMsg2show);

              _this19.loading = false;
            });
          }
        }, {
          key: "deleteUserById",
          value: function deleteUserById(_userId) {
            var _this20 = this;

            this.alertService.success("Please wait while we deleting user");
            this.socketService.deleteUserById(_userId, this.authenticationService.currentUserValue._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                var i = 0;

                _this20.PaymentTransactionDetailsArray.forEach(function (item) {
                  if (item._id == _userId) {
                    _this20.PaymentTransactionDetailsArray.splice(i, 1, null);

                    return;
                  }

                  i++;
                });

                _this20.populateUsersDataInTable();
                /*
                let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                delete usersObjArr[_userId];
                this.PaymentTransactionDetailsArray = usersObjArr;
                this.populateUsersDataInTable();
                */
                //this.rerender();


                _this20.alertService.success(data['message']);

                _this20.loading = false;
              } else {
                _this20.alertService.error(data['message']);

                _this20.loading = false;
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

              _this20.alertService.error(errorMsg2show);

              _this20.loading = false;
            });
          }
        }, {
          key: "usersProfile",
          value: function usersProfile(userObj) {
            var _this21 = this;

            //console.log('95', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__["PublicProfileComponent"], {
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                userObj: userObj,
                adminViewT: true
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result && result.data) {
                var i = 0;

                _this21.PaymentTransactionDetailsArray.forEach(function (item) {
                  if (item._id == result.data["_id"]) {
                    _this21.PaymentTransactionDetailsArray.splice(i, 1, result.data);

                    return;
                  }

                  i++;
                });
                /*
                let _userId = result.data._id;
                let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                delete usersObjArr[_userId];
                usersObjArr[_userId] = result.data;
                this.PaymentTransactionDetailsArray = usersObjArr;
                */

              } //console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);

            });
          }
        }, {
          key: "returnT4CurrentUserIsSAdmin",
          value: function returnT4CurrentUserIsSAdmin() {
            try {
              if (this.authenticationService.currentUserValue.appPermissions && this.authenticationService.currentUserValue.appPermissions.indexOf(src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["AppAccessPermissions"].adminAddEdit) > -1) {
                return true;
              }
            } catch (ex) {}

            return false;
          }
        }, {
          key: "returnT4CurrentUserAllowedToShow",
          value: function returnT4CurrentUserAllowedToShow(currentUserRole) {
            if (this.returnT4CurrentUserIsSAdmin()) {
              return true;
            }

            if (currentUserRole != src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["Role"].Admin) {
              return true;
            }

            return false;
          }
        }, {
          key: "navigate2EditUser",
          value: function navigate2EditUser(userId) {
            this.router.navigate(['/admin/add-user'], {
              state: {
                userId: userId
              }
            });
          } //#region datatable actions

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.populateUsersDataInTable();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();

            if (this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.querySelector('.paginate_button.next')) {
              this.elementRef.nativeElement.querySelector('.paginate_button.next').removeEventListener('click', this.paginateButtonNext);
              this.elementRef.nativeElement.querySelector('.paginate_button.last').removeEventListener('click', this.paginateButtonNext);
            }
          }
        }, {
          key: "populateUsersDataInTable",
          value: function populateUsersDataInTable() {
            that = this; //this.destroyTable();

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 100,
              serverSide: true,
              processing: false,
              ajax: function ajax(dataTablesParameters, callback) {
                that.getAllUsersWithRequestData(that.nextPageIndex || 1, callback, dataTablesParameters);
                /*
                        if ((dataTablesParameters.start + dataTablesParameters.length) < that.utilityService._.keys(that.PaymentTransactionDetailsArray).length) {
                          //No Action here
                          callback({
                            recordsTotal: that.recordsTotal || 0,
                            recordsFiltered: that.utilityService._.keys(that.PaymentTransactionDetailsArray).length || 0,
                            data: [],
                          });
                
                          //that.getAllUsersWithRequestData((that.nextPageIndex || 1), callback, dataTablesParameters);
                        } else {
                          that.getAllUsersWithRequestData((that.nextPageIndex || 1), callback, dataTablesParameters);
                          //that.dtTrigger.next();
                          //that.rerender();
                        }
                        */

                /*{"draw":3,"columns":[{"data":0,"name":"_id","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":1,"name":"emailAddress","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":2,"name":"firstName","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":3,"name":"role","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":4,"name":"mobileNo","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":5,"name":"verified","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":6,"name":"actions","searchable":false,"orderable":false,"search":{"value":"","regex":false}}],"order":[{"column":0,"dir":"asc"}],"start":0,"length":100,"search":{"value":"oo","regex":false}}*/
              },
              columns: [{
                "data": 0,
                "name": "_id",
                "searchable": true,
                "orderable": true
              }, {
                "data": 1,
                "name": "emailAddress",
                "searchable": true,
                "orderable": true
              }, {
                "data": 2,
                "name": "firstName",
                "searchable": true,
                "orderable": true
              }, {
                "data": 3,
                "name": "role",
                "searchable": true,
                "orderable": true
              }, {
                "data": 4,
                "name": "mobileNo",
                "searchable": true,
                "orderable": true
              }, {
                "data": 5,
                "name": "verified",
                "searchable": true,
                "orderable": true
              }, {
                "data": 6,
                "name": "actions",
                "searchable": false,
                "orderable": false
              }]
              /*
                    drawCallback: () => {
                      if (this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.querySelector('.paginate_button.next')) {
                        this.elementRef.nativeElement.querySelector('.paginate_button.next')
                          .addEventListener('click', this.paginateButtonNext);
                        this.elementRef.nativeElement.querySelector('.paginate_button.last')
                          .addEventListener('click', this.paginateButtonNext);
                      }
                    }
                    */

            }; //this.dtTrigger.next();
            //this.rerender();
          }
        }, {
          key: "paginateButtonNext",
          value: function paginateButtonNext() {
            that.getAllUsersWithRequestData(that.nextPageIndex || 1);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.columns().every(function () {
                  var that = this;
                  $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                      that.search(this['value']).draw();
                    }
                  });
                });
              });
            }
          }
        }, {
          key: "rerender",
          value: function rerender() {
            var _this22 = this;

            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy(); // Call the dtTrigger to rerender again

                _this22.dtTrigger.next();
              });
            }
          }
        }, {
          key: "destroyTable",
          value: function destroyTable() {
            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy();
              });
            }
          }
        }, {
          key: "onClick",
          value: function onClick(event) {} //#endregion datatable actions

        }, {
          key: "usersIncomeExpenseDetails",
          value: function usersIncomeExpenseDetails(userObj) {
            //console.log('241', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(src_app_shared_income_proof_income_proof_component__WEBPACK_IMPORTED_MODULE_14__["IncomeProofComponent"], {
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                userObj: userObj,
                isOpenedInModel: true,
                adminViewT: true
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {//console.log(`256 :: msc :: Dialog result: ${JSON.stringify(result)}`);
            });
          }
        }, {
          key: "usersRestrictionModal",
          value: function usersRestrictionModal(userObj, isVerified) {
            var _this23 = this;

            var dialogRef = this.dialog.open(src_app_shared_user_restriction_details_user_restriction_details_component__WEBPACK_IMPORTED_MODULE_15__["UserRestrictionDetailsComponent"], {
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                userObj: userObj,
                adminViewT: true,
                isVerified: isVerified,
                isOpenedInModel: true
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result && result.data && result.data["_id"]) {
                var i = 0;

                _this23.PaymentTransactionDetailsArray.forEach(function (item) {
                  if (item._id == result.data["_id"]) {
                    _this23.PaymentTransactionDetailsArray.splice(i, 1, result.data);

                    return;
                  }

                  i++;
                });
                /*
                        let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                        usersObjArr[result.data["_id"]] = result.data;
                        this.PaymentTransactionDetailsArray = usersObjArr;
                        */


                _this23.populateUsersDataInTable();
              } //console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);

            });
          }
        }]);

        return UserManagementComponent;
      }();

      UserManagementComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]
        }];
      };

      UserManagementComponent.propDecorators = {
        datatableElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTableDirective"], {
            "static": false
          }]
        }]
      };
      UserManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-management',
        template: _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]])], UserManagementComponent);
      /***/
    },

    /***/
    "PGjB":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/payment-transactions/payment-transactions.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PGjB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12 col-md-12 mb-4\">\n        <div class=\"card shadow h-100\">\n            <div class=\"card-body p-3\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 mb-4\">\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\" i18n>Payment Transactions</div>\n                    </div>\n                    <div class=\"col-xl-12 col-12 mb-4\">\n                        <div class=\"view view-cascade gradient-card-header white\">\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                            class=\"row-border hover table table-striped table-responsive-md btn-table\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"d-none\" i18n>ID</th>\n                                        <th i18n>Initiated By</th>\n                                        <th i18n>Type</th>\n                                        <th i18n>Date Time</th>\n                                        <th i18n>Amount</th>\n                                        <th *ngIf=\"transactionActionType==TransactionActionType.insurance_purchase\" i18n>Loan Type</th>\n                                        <th *ngIf=\"transactionActionType==TransactionActionType.insurance_purchase\" i18n>Loan Amount</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentTransactionDetailsArray)\">\n                                        <td class=\"d-none\">{{obj._id}}</td>\n                                        <td>{{obj.transactionInitiatedByUser[0].emailAddress}}</td>\n                                        <td>{{ utilityService.returnStringWithReplacing_(obj.transactionActionType) | titlecase }}</td>\n                                        <td>{{(utilityService._.get( obj,'transactionDetailsObj.create_time') || obj.createdOn) | date:'dd-MMM-YYYY' }}</td>\n                                        <td>{{obj.amount}}</td>\n                                        <td *ngIf=\"transactionActionType==TransactionActionType.insurance_purchase\" class=\"text-capitalize\">\n                                            {{(obj.sessionObj.loanType || \"\").replace(\"_\", \" \")}}\n                                        </td>\n                                        <td *ngIf=\"transactionActionType==TransactionActionType.insurance_purchase\">{{obj.sessionObj.loanAmount}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "SL0s":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function SL0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n    <app-header></app-header>\n</div>\n\n<div class=\"wrapper-outlet\">\n    <div class=\"container-fluid  pt-3\">\n        <router-outlet ></router-outlet>\n    </div>\n   \n</div>\n\n<!-- <app-footer></app-footer> -->\n\t";
      /***/
    },

    /***/
    "ShmR":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/service-types-add/service-types-add.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ShmR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- addServiceTypes section -->\n<section class=\"addServiceTypes-page section-b-space pt-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n           \n            <div class=\"col-xl-12\">\n                <form [formGroup]=\"addServiceTypesForm\" class=\"theme-form\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-12\">\n                                    <h5 class=\"blog-head font-600\" i18n>New Service Type</h5>\n                                    <hr>\n                                </div>\n\n                                <div class=\"col-xl-12 mb-3\">\n                                    <label for=\"sessionType\" i18n>Parent Service Type</label>\n                                    <select [disabled]=\"editing\" formControlName=\"parentServicesTypesId\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.parentServicesTypesId.errors }\">\n                                        <option [ngValue]=\"''\" i18n>[Choose to Set As Parent category]</option>\n                                        <option *ngFor=\"let item of ParentServicesTypes; let i = index\"\n                                            [ngValue]=\"item._id\">\n                                            {{item.name}}</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-12 mb-3\">\n                                    <label for=\"name\" i18n>Title</label>\n                                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.name.errors.required\" i18n>Name is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-12 mb-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"description\" i18n>Description:</label>\n                                        <textarea class=\"form-control\" formControlName=\"description\" rows=\"5\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\">\n                                    </textarea>\n                                    </div>\n                                    <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.description.errors.required\" i18n>Description is required\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6 mb-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"feeFromUserFixedAmount\" i18n>Charges for User:</label>\n                                        <input class=\"form-control\" formControlName=\"feeFromUserFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.feeFromUserFixedAmount.errors }\" />\n                                    </div>\n\n                                    <div *ngIf=\"submitted && f.feeFromUserFixedAmount.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.feeFromUserFixedAmount.errors.required\" i18n>Charges for User is required\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6 mb-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"serviceFeeFromUserFixedAmount\" i18n>Service Charges:</label>\n                                        <input class=\"form-control\" formControlName=\"serviceFeeFromUserFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.serviceFeeFromUserFixedAmount.errors }\" />\n                                    </div>\n                                    <div *ngIf=\"submitted && f.serviceFeeFromUserFixedAmount.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.serviceFeeFromUserFixedAmount.errors.required\" i18n>Service Charges is required\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6 mb-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"feeToConsultFixedAmount\" i18n>Consult Fees:</label>\n                                        <input class=\"form-control\" formControlName=\"feeToConsultFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.feeToConsultFixedAmount.errors }\" />\n                                    </div>\n                                    <div *ngIf=\"submitted && f.feeToConsultFixedAmount.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.feeToConsultFixedAmount.errors.required\" i18n>Consult Fees is required\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6 mb-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"commisionToProtalFixedAmount\" i18n>Portal Commision:</label>\n                                        <input class=\"form-control\" formControlName=\"commisionToProtalFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.commisionToProtalFixedAmount.errors }\" />\n                                    </div>\n                                    <div *ngIf=\"submitted && f.commisionToProtalFixedAmount.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.commisionToProtalFixedAmount.errors.required\" i18n>Portal Commision is required\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-xl-12\">\n                                    <label i18n>Related Keywords:</label>\n                                    <div class=\"input-group mb-2\">\n                                        <input class=\"form-control\" [(ngModel)]=\"currentSkill\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"type one keyword at a time and click add button\" />\n                                        <div class=\"input-group-append\">\n                                          <button class=\"btn btn-success\" (click)=\"addItem(currentSkill)\" i18n>Add</button>\n                                        </div>\n                                      </div>\n                                                                         \n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-2\" *ngFor=\"let arrayItem of arrayItems; let i=index\">\n                                    <label [for]=\"arrayItem\" class=\"array-item-title\">\n                                        {{arrayItem}}</label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xl-12 text-center\">\n                                    <hr>\n                                    <button type=\"button\" (click)=\"onaddServiceTypesUpdateSubmit()\" [disabled]=\"loading\" class=\"btn btn-primary\" i18n>Submit</button>\n                                    <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                    />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- addServiceTypes section -->";
      /***/
    },

    /***/
    "TRGY":
    /*!******************************************!*\
      !*** ./src/app/admin/admin.component.ts ***!
      \******************************************/

    /*! exports provided: AdminComponent */

    /***/
    function TRGY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin.component.html */
      "SL0s");
      /* harmony import */


      var _admin_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin.component.css */
      "yP50");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent() {
          _classCallCheck(this, AdminComponent);
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminComponent;
      }();

      AdminComponent.ctorParameters = function () {
        return [];
      };

      AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AdminComponent);
      /***/
    },

    /***/
    "TxCC":
    /*!*************************************************************************!*\
      !*** ./src/app/admin/borrower-earnings/borrower-earnings.component.css ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function TxCC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3Jyb3dlci1lYXJuaW5ncy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "VPIQ":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customer-review/customer-review.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VPIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-3\">\n    <div class=\"col-xl-6\">\n      <h4 class=\"text-primary\" i18n>Customer Review</h4>\n    </div>\n    <div class=\"col-xl-6\">\n      <button class=\"btn btn-success btn-sm float-right\" data-toggle=\"modal\" data-target=\"#blogModal\" i18n>New</button>\n    </div>\n  </div>\n  \n  <table class=\"table table-striped table-bordered\">\n    <thead>\n      <tr>\n        <th i18n>Customer Name</th>\n        <th i18n>Comments</th>\n        <!--<th i18n>Status</th>-->\n        <th i18n>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let obj2show of allCustomerReviewData\">\n        <td>{{obj2show.title}}</td>\n        <td>{{obj2show.description}}</td>\n        <!--<td class=\"text-capitalize text-cap\">\n            <span class=\"badge\" [ngClass]=\"{'badge-success': (obj2show.status==SessionStatus.Approved || obj2show.status==SessionStatus.Accepted || obj2show.status==SessionStatus.Active || obj2show.status==SessionStatus.Completed || obj2show.status==SessionStatus.OngoingInitiated  || obj2show.status==SessionStatus.AwaitingForApproval  || obj2show.status==SessionStatus.Ongoing), 'badge-danger': (obj2show.status==SessionStatus.Rejected || obj2show.status==SessionStatus.RejectedOngoing || obj2show.status==SessionStatus.Suspended), 'badge-info': ( obj2show.status==null || obj2show.status=='' || obj2show.status==SessionStatus.Pending)}\">\n                {{obj2show.status}}\n            </span>\n        </td>\n      -->\n        <td>\n          <label title=\"Preview\" (click)=\"mediaPreviewModel(obj2show.refDocument, 'image')\">\n            <i class=\"icon-eye m-2 text-success\"></i>\n          </label>\n          <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Edit\" (click)=\"EditShowCustomerReviewForm(obj2show)\">\n            <i class=\"icon-pencil\"></i>\n          </button>\n          <button class=\"btn btn-danger btn-sm btn-xs\" data-title=\"Delete\" (click)=\"DeleteShowCustomerReviewForm(obj2show)\">\n            <i class=\"icon-trash\"></i>\n          </button>\n        </td>\n      </tr>\n  \n    </tbody>\n  </table>\n  <div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"blogModal\">\n    <div class=\"modal-dialog modal-dialog-centered  modal-lg\">\n      <div class=\"modal-content\">\n  \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-primary\" i18n>New Customer Review</h4>\n          <button type=\"button\" class=\"close\" (click)=\"closeDialog()\">&times;</button>\n        </div>\n  \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <form [formGroup]=\"userCustomerReviewForm\">\n            <div class=\"row mb-3\">\n              <div class=\"col-xl-12\">\n                <div class=\"form-group\">\n                  <label for=\"title\" i18n>Customer Name</label>\n                  <input [disabled]=\"actionButtons0Add1Edit2Delete==2\" type=\"text\" formControlName=\"title\"\n                    class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" />\n                  <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.title.errors.required\" i18n>Customer Name is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xl-12\">\n                <div class=\"form-group\">\n                  <label for=\"description\" i18n>Comments</label>\n                  <textarea [disabled]=\"actionButtons0Add1Edit2Delete==2\" type=\"number\" formControlName=\"description\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" cols=\"40\" rows=\"5\"\n                    class=\"form-control\"></textarea>\n                  <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.description.errors.required\" i18n>\n                      Comments is required\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xl-12\">\n                <div class=\"form-group\">\n                  <label for=\"refDocument\" i18n>Image Cover &nbsp;</label>\n  \n                  <img *ngIf=\"f.refDocument.value\" [src]=\"f.refDocument.value\" class=\"border img-fluid mb-3\"\n                    height=\"50\" width=\"50\" />\n  \n  \n                  <input [disabled]=\"actionButtons0Add1Edit2Delete==2\" *ngIf=\"!fileData4refDocumentPendingForUpload\"\n                    id=\"ctrlUploadrefDocument\" type=\"file\" name=\"image\" accept=\"image/*\"\n                    (change)=\"onfileProgressForCustomerReviewDocument($event)\">\n                  <i *ngIf=\"fileData4refDocumentPendingForUpload\" class=\"icon-upload m-2 cursor-pointer text-success\"\n                    (click)=\"onUploadForCustomerReviewDocument()\" i18n>\n                    Upload\n                  </i>\n                  <div *ngIf=\"submitted && f.refDocument.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.refDocument.errors.required\" i18n>Image Cover is required\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xl-12\" [ngSwitch]=\"actionButtons0Add1Edit2Delete\">\n                <button *ngSwitchCase=\"0\" class=\"btn btn-success btn-sm float-right\" (click)=\"onCustomerReviewUpdateSubmit()\">\n                  <i class=\"icon icon-plus\"></i>\n                  ADD\n                </button>\n                <button i18n *ngSwitchCase=\"1\" class=\"btn btn-success btn-sm float-right\" (click)=\"onCustomerReviewUpdateSubmit()\">\n                  <i class=\"icon icon-pencil\"></i>\n                  Edit\n                </button>\n                <button *ngSwitchCase=\"2\" i18n class=\"btn btn-success btn-sm float-right\" (click)=\"DeleteData()\">\n                  <i class=\"icon icon-trash\"></i>\n                  Delete\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n  \n      </div>\n    </div>\n  </div>";
      /***/
    },

    /***/
    "VQQu":
    /*!***********************************************!*\
      !*** ./src/app/admin/home/home.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function VQQu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "WLd7":
    /*!******************************************************!*\
      !*** ./src/app/admin/services/services.component.ts ***!
      \******************************************************/

    /*! exports provided: ServicesComponent */

    /***/
    function WLd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
        return ServicesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./services.component.html */
      "nKMk");
      /* harmony import */


      var _services_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services.component.css */
      "cghJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/service-types.service */
      "7ZPZ");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");

      var ServicesComponent = /*#__PURE__*/function () {
        function ServicesComponent(serviceTypesService, alertService, utilityService, authenticationService) {
          _classCallCheck(this, ServicesComponent);

          this.serviceTypesService = serviceTypesService;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.authenticationService = authenticationService;
          this.ParentServicesTypes = null;
          this.loading = false;
          this.loadServiceTypesService();
        }

        _createClass(ServicesComponent, [{
          key: "loadServiceTypesService",
          value: function loadServiceTypesService() {
            var _this24 = this;

            this.serviceTypesService.getServiceTypesParentAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this24.ParentServicesTypes = data["data"]; //this.alertService.success(data['message'], true);

                _this24.loading = false; //this.element_btn_click_addServiceTypes_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                _this24.alertService.error(data['message']);

                _this24.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";
              _this24.ParentServicesTypes = [];

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
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "deleteById",
          value: function deleteById(documentId) {
            var _this25 = this;

            var deletedBy = this.authenticationService.currentUserValue._id;
            this.serviceTypesService.deleteServiceTypesById(documentId, deletedBy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                _this25.loadServiceTypesService();

                _this25.alertService.success(data['message'], true);

                _this25.loading = false; //this.element_btn_click_addServiceTypes_skills_verification.click();
              } else {
                //alert(JSON.stringify(data['message']));
                _this25.alertService.error(data['message']);

                _this25.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";
              _this25.ParentServicesTypes = [];

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {}

              _this25.alertService.error(errorMsg2show);

              _this25.loading = false;
            });
          }
        }]);

        return ServicesComponent;
      }();

      ServicesComponent.ctorParameters = function () {
        return [{
          type: src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_6__["ServiceTypesService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }];
      };

      ServicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-services',
        template: _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_services_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_6__["ServiceTypesService"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])], ServicesComponent);
      /***/
    },

    /***/
    "XQ+j":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/blogs/blogs.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function XQJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-3\">\n  <div class=\"col-xl-6\">\n    <h4 class=\"text-primary\" i18n>Blogs</h4>\n  </div>\n  <div class=\"col-xl-6\">\n    <button class=\"btn btn-success btn-sm float-right\" data-toggle=\"modal\" data-target=\"#blogModal\" i18n>New</button>\n  </div>\n</div>\n\n<table class=\"table table-striped table-bordered\">\n  <thead>\n    <tr>\n      <th i18n>Title</th>\n      <th i18n>Description</th>\n      <!--<th>Status</th>-->\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let obj2show of allBlogsData\">\n      <td>{{obj2show.title}}</td>\n      <!--<td>{{obj2show.description}}</td>-->\n      <td><span [innerHTML]=\"obj2show.description\"></span></td>\n      <!--<td class=\"text-capitalize text-cap\">\n          <span class=\"badge\" [ngClass]=\"{'badge-success': (obj2show.status==SessionStatus.Approved || obj2show.status==SessionStatus.Accepted || obj2show.status==SessionStatus.Active || obj2show.status==SessionStatus.Completed || obj2show.status==SessionStatus.OngoingInitiated  || obj2show.status==SessionStatus.AwaitingForApproval  || obj2show.status==SessionStatus.Ongoing), 'badge-danger': (obj2show.status==SessionStatus.Rejected || obj2show.status==SessionStatus.RejectedOngoing || obj2show.status==SessionStatus.Suspended), 'badge-info': ( obj2show.status==null || obj2show.status=='' || obj2show.status==SessionStatus.Pending)}\">\n              {{obj2show.status}}\n          </span>\n      </td>\n    -->\n      <td>\n        <label title=\"Preview\" (click)=\"mediaPreviewModel(obj2show.blogsDocument, 'image')\">\n          <i class=\"icon-eye m-2 text-success\"></i>\n        </label>\n        <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Edit\" (click)=\"EditShowBlogsForm(obj2show)\">\n          <i class=\"icon-pencil\"></i>\n        </button>\n        <button class=\"btn btn-danger btn-sm btn-xs\" data-title=\"Delete\" (click)=\"DeleteShowBlogsForm(obj2show)\">\n          <i class=\"icon-trash\"></i>\n        </button>\n      </td>\n    </tr>\n\n  </tbody>\n</table>\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"blogModal\">\n  <div class=\"modal-dialog modal-dialog-centered  modal-lg\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title text-primary\" i18n>New Blog</h4>\n        <button type=\"button\" class=\"close\" (click)=\"closeDialog()\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <form [formGroup]=\"userBlogsForm\">\n          <div class=\"row mb-3\">\n            <div class=\"col-xl-12\">\n              <div class=\"form-group\">\n                <label for=\"title\" i18n>Blog Title</label>\n                <input [disabled]=\"actionButtons0Add1Edit2Delete==2\" type=\"text\" formControlName=\"title\"\n                  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" />\n                <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.title.errors.required\">Blog Title is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-12\">\n              <div class=\"form-group\">\n                <label for=\"description\" i18n>Contents</label>\n              \n                <angular-editor [disabled]=\"actionButtons0Add1Edit2Delete==2\" formControlName=\"description\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\"\n                  [config]=\"editorConfig\"></angular-editor>\n                \n              <!--\n                <textarea [hidden]=\"true\" [disabled]=\"actionButtons0Add1Edit2Delete==2\" type=\"number\" formControlName=\"description\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" cols=\"40\" rows=\"5\"\n                  class=\"form-control\"></textarea>\n              -->\n                <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.description.errors.required\" i18n>\n                    Contents is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-12\">\n              <div class=\"form-group\">\n                <label for=\"blogsDocument\" i18n>Image Cover &nbsp;</label>\n\n                <img *ngIf=\"f.blogsDocument.value\" [src]=\"f.blogsDocument.value\" class=\"border img-fluid mb-3\"\n                  height=\"50\" width=\"50\" />\n\n\n                <input [disabled]=\"actionButtons0Add1Edit2Delete==2\" *ngIf=\"!fileData4blogsDocumentPendingForUpload\"\n                  id=\"ctrlUploadblogsDocument\" type=\"file\" name=\"image\" accept=\"image/*\"\n                  (change)=\"onfileProgressForBlogsDocument($event)\">\n                <i *ngIf=\"fileData4blogsDocumentPendingForUpload\" class=\"icon-upload m-2 cursor-pointer text-success\"\n                  (click)=\"onUploadForBlogsDocument()\" i18n>\n                  Upload\n                </i>\n                <div *ngIf=\"submitted && f.blogsDocument.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.blogsDocument.errors.required\" i18n>Image Cover is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-12\" [ngSwitch]=\"actionButtons0Add1Edit2Delete\">\n              <button *ngSwitchCase=\"0\" class=\"btn btn-success btn-sm float-right\" (click)=\"onBlogsUpdateSubmit()\" i18n>\n                <i class=\"icon icon-plus\"></i>\n                ADD\n              </button>\n              <button *ngSwitchCase=\"1\" class=\"btn btn-success btn-sm float-right\" (click)=\"onBlogsUpdateSubmit()\" i18n>\n                <i class=\"icon icon-pencil\"></i>\n                Edit\n              </button>\n              <button *ngSwitchCase=\"2\" class=\"btn btn-success btn-sm float-right\" (click)=\"DeleteData()\" i18n>\n                <i class=\"icon icon-trash\"></i>\n                Delete\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "XUcl":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/footer/footer.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function XUcl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!--copyright start-->\n  <div class=\"agency copyright\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"link-horizontal\">\n                    <ul>\n                        <li>\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Privacy Policy</a>\n                        </li>\n\n                        <li>\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\" i18n>Terms of Use</a>\n                        </li>\n                        <li>\n                            <a class=\"copyright-text\" routerLink=\"/faqs\" routerLinkActive=\"active\" i18n>FAQs</a>\n                        </li>\n                        \n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div>\n                    <h6 class=\"copyright-text text-white text-right\" i18n>?? 2020 Avitii Lender System\n\n                    </h6>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  <!--copyright end-->\n  \n ";
      /***/
    },

    /***/
    "cghJ":
    /*!*******************************************************!*\
      !*** ./src/app/admin/services/services.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function cghJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "dEW4":
    /*!**************************************************************!*\
      !*** ./src/app/admin/loan-payment/loan-payment.component.ts ***!
      \**************************************************************/

    /*! exports provided: LoanPaymentComponent */

    /***/
    function dEW4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoanPaymentComponent", function () {
        return LoanPaymentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loan_payment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loan-payment.component.html */
      "+5Dj");
      /* harmony import */


      var _loan_payment_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loan-payment.component.css */
      "wWmZ");
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


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var src_app_borrower_borrower_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/borrower/borrower.component */
      "mtiP");

      var LoanPaymentComponent = /*#__PURE__*/function () {
        function LoanPaymentComponent(dialog, socketService, alertService, utilityService, authenticationService, router, elementRef, userService, _cdr) {
          var _this26 = this;

          _classCallCheck(this, LoanPaymentComponent);

          this.dialog = dialog;
          this.socketService = socketService;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.authenticationService = authenticationService;
          this.router = router;
          this.elementRef = elementRef;
          this.userService = userService;
          this._cdr = _cdr;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.dtOptions = {};
          this.PaymentTransactionDetailsArray = null;
          this.loading = false;
          this.Role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"];
          var _data = {
            status: ['unpaid']
          };
          this.socketService.getSessionApplyAllByQuery(false, _data, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(function (data) {
            if (data && data['success']) {
              _this26.PaymentTransactionDetailsArray = data["data"];

              _this26.populateUsersDataInTable(); //this.rerender();


              var _dataObj = lodash__WEBPACK_IMPORTED_MODULE_13__["flattenDepth"](lodash__WEBPACK_IMPORTED_MODULE_13__["map"](lodash__WEBPACK_IMPORTED_MODULE_13__["values"](_this26.PaymentTransactionDetailsArray), "sessionAppliedByBorrowers"), 1);

              var _allUsersArray = lodash__WEBPACK_IMPORTED_MODULE_13__["map"](lodash__WEBPACK_IMPORTED_MODULE_13__["uniq"](lodash__WEBPACK_IMPORTED_MODULE_13__["union"](lodash__WEBPACK_IMPORTED_MODULE_13__["map"](_dataObj, 'borrowerId'), lodash__WEBPACK_IMPORTED_MODULE_13__["map"](_dataObj, 'lenderId'))), '_id');

              _this26.userService.proccessAllAppUsersCollections(_allUsersArray);

              _this26.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();

              setTimeout(function () {
                _this26.calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower();
              }, 3000);
              _this26.loading = false;
            } else {
              _this26.alertService.error(data['message']);

              _this26.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";
            _this26.PaymentTransactionDetailsArray = [];

            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) {}

            _this26.alertService.error(errorMsg2show);

            _this26.loading = false;
          });
        } //#region datatable actions


        _createClass(LoanPaymentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.populateUsersDataInTable();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();

            if (this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.querySelector('.paginate_button.next')) {
              this.elementRef.nativeElement.querySelector('.paginate_button.next').removeEventListener('click');
            }
          }
        }, {
          key: "populateUsersDataInTable",
          value: function populateUsersDataInTable() {
            var _this27 = this;

            this.destroyTable();
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10,
              drawCallback: function drawCallback() {
                _this27.elementRef.nativeElement.querySelector('.paginate_button.next').addEventListener('click', _this27.onClick.bind(_this27));
              }
            };
            this.dtTrigger.next();
            this.rerender();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.columns().every(function () {
                  var that = this;
                  $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                      that.search(this['value']).draw();
                    }
                  });
                });
              });
            }
          }
        }, {
          key: "rerender",
          value: function rerender() {
            var _this28 = this;

            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy(); // Call the dtTrigger to rerender again

                _this28.dtTrigger.next();
              });
            }
          }
        }, {
          key: "destroyTable",
          value: function destroyTable() {
            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy();
              });
            }
          }
        }, {
          key: "onClick",
          value: function onClick(event) {} //#endregion datatable actions

        }, {
          key: "calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower",
          value: function calculateAndStoreLocalNextEMIDateOfAppliedLoansForBorrower() {
            for (var item in this.PaymentTransactionDetailsArray) {
              var _LoanObj = this.PaymentTransactionDetailsArray[item];

              if (_LoanObj) {
                _LoanObj.nextInstallment = null;
                var _proccessedSessionObj = null;

                switch (this.authenticationService.currentUserValue.role) {
                  case src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Borrower:
                    _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_13__["cloneDeep"](_LoanObj);
                    _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_13__["filter"](_LoanObj.sessionAppliedByBorrowers, {
                      "borrowerId": {
                        "_id": this.authenticationService.currentUserValue._id
                      }
                    });
                    break;

                  case src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Lender:
                    _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_13__["cloneDeep"](_LoanObj);
                    _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_13__["filter"](_LoanObj.sessionAppliedByBorrowers, {
                      "lenderId": {
                        "_id": this.authenticationService.currentUserValue._id
                      }
                    }); //_sessionAppliedByLenders

                    break;

                  default:
                    _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_13__["cloneDeep"](_LoanObj);
                    break;
                }

                for (var indexOuter in _proccessedSessionObj.sessionAppliedByBorrowers) {
                  var LoanApplyObj = _proccessedSessionObj.sessionAppliedByBorrowers[indexOuter];

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
                            if (!_LoanObj.nextInstallmentBorrowerFirstName) {
                              _LoanObj.nextInstallmentBorrowerFirstName = this.userService.returnUsersObjFromLocal(null, false, 'firstName', _LoanObj.nextInstallmentBorrowerId);
                            }

                            break;
                          }
                        }

                        _LoanObj.nextInstallment = installment.loanStartDateTime;
                        _LoanObj.nextInstallmentBorrowerId = LoanApplyObj.borrowerId._id;
                        _LoanObj.nextInstallmentBorrowerFirstName = this.userService.returnUsersObjFromLocal(null, false, 'firstName', _LoanObj.nextInstallmentBorrowerId);
                        _LoanObj.nextInstallmentLenderId = LoanApplyObj.lenderId._id;
                        _LoanObj.nextInstallmentLenderFirstName = this.userService.returnUsersObjFromLocal(null, false, 'firstName', _LoanObj.nextInstallmentLenderId);
                        break;
                      }
                    }
                  }
                }

                this.PaymentTransactionDetailsArray[item] = _LoanObj;
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

            return false;
          }
        }, {
          key: "showAppliedToSession",
          value: function showAppliedToSession(sessionObj) {
            var _this29 = this;

            var _proccessedSessionObj = null;

            switch (this.authenticationService.currentUserValue.role) {
              case src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Borrower:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_13__["cloneDeep"](sessionObj);
                _proccessedSessionObj.sessionAppliedByBorrowers = lodash__WEBPACK_IMPORTED_MODULE_13__["filter"](sessionObj.sessionAppliedByBorrowers, {
                  "lenderId": {
                    "_id": this.authenticationService.currentUserValue._id
                  }
                });
                break;

              default:
                _proccessedSessionObj = lodash__WEBPACK_IMPORTED_MODULE_13__["cloneDeep"](sessionObj);
                break;
            } //console.log('214', this.authenticationService.currentUserValue);


            var dialogRef = this.dialog.open(src_app_borrower_borrower_component__WEBPACK_IMPORTED_MODULE_14__["ModalAppliedSessionDisplay"], {
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
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                if (result.data) {
                  if (result.data.status && result.data.sessionApply) {
                    var _loanId = result.data.sessionApply.loanId;
                    var _sessionPrice = result.data.sessionApply.loanAmount;
                    var _loanApplyId = result.data.sessionApply._id; //let _borrowerId = result.data.sessionApply.borrowerId._id;

                    var _transactionId = result.data.transactionId;
                    var _status = result.data.status; //initiate payment here
                    //this.socketService.setSessionApplyUpdateStatus(false, _loanId, _loanApplyId, _status, this.authenticationService.currentUserValue._id, _transactionId);

                    var _allowed2CreateContactForSessionT = false;

                    switch (_status) {
                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].Accepted:
                        //this.alertService.success("Updated. Session is available under My Sessions->Accepted tab.", true);
                        //this.proccedAppliedToSession(sessionObj, _loanApplyId);
                        _allowed2CreateContactForSessionT = true;
                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].Pending:
                        //this.alertService.success("Added. Session is available under My Sessions->Pending tab.", true);
                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].Rejected:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].RejectedOngoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].RejectedOngoingWithRefund:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].Suspended:
                        //this.alertService.success("Updated. Session is available under My Sessions->Rejected tab.", true);
                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].Completed:
                        //this.alertService.success("Updated. Session is available under My Sessions->Completed tab.", true);
                        break;

                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].Active:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].Ongoing:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].OngoingInitiated:
                      case src_app_models__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].AwaitingForApproval:
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
                    var _keyPairedMapObj = _this29.utilityService._.mapKeys(_this29.PaymentTransactionDetailsArray, "_id");

                    _keyPairedMapObj[result.data.updatedSessionObj._id] = result.data.updatedSessionObj;
                    _this29.PaymentTransactionDetailsArray = _this29.utilityService._.values(_keyPairedMapObj);

                    var _dataObj = lodash__WEBPACK_IMPORTED_MODULE_13__["flattenDepth"](lodash__WEBPACK_IMPORTED_MODULE_13__["map"](lodash__WEBPACK_IMPORTED_MODULE_13__["values"](_this29.PaymentTransactionDetailsArray), "sessionAppliedByBorrowers"), 1);

                    var _allUsersArray = lodash__WEBPACK_IMPORTED_MODULE_13__["map"](lodash__WEBPACK_IMPORTED_MODULE_13__["uniq"](lodash__WEBPACK_IMPORTED_MODULE_13__["union"](lodash__WEBPACK_IMPORTED_MODULE_13__["map"](_dataObj, 'borrowerId'), lodash__WEBPACK_IMPORTED_MODULE_13__["map"](_dataObj, 'lenderId'))), '_id');

                    _this29.userService.proccessAllAppUsersCollections(_allUsersArray);

                    _this29._cdr.detectChanges();
                  }
                }
              } //console.log(`129 :: Dialog result: ${JSON.stringify(result)}`);

            });
          }
        }]);

        return LoanPaymentComponent;
      }();

      LoanPaymentComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__["SocketioService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      LoanPaymentComponent.propDecorators = {
        datatableElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], {
            "static": false
          }]
        }]
      };
      LoanPaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loan-payment',
        template: _raw_loader_loan_payment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loan_payment_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_12__["SocketioService"], src_app_services__WEBPACK_IMPORTED_MODULE_10__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"], src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], src_app_services__WEBPACK_IMPORTED_MODULE_10__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], LoanPaymentComponent);
      /***/
    },

    /***/
    "dapA":
    /*!*********************************************************************!*\
      !*** ./src/app/admin/customer-review/customer-review.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function dapA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "ds6q":
    /*!***********************************************!*\
      !*** ./node_modules/rxjs/internal/Subject.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function ds6q(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics2 = function extendStatics(d, b) {
          _extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics2(d, b);
        };

        return function (d, b) {
          _extendStatics2(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Observable_1 = __webpack_require__(
      /*! ./Observable */
      "Q1FS");

      var Subscriber_1 = __webpack_require__(
      /*! ./Subscriber */
      "FWf1");

      var Subscription_1 = __webpack_require__(
      /*! ./Subscription */
      "zB/H");

      var ObjectUnsubscribedError_1 = __webpack_require__(
      /*! ./util/ObjectUnsubscribedError */
      "Mxlh");

      var SubjectSubscription_1 = __webpack_require__(
      /*! ./SubjectSubscription */
      "FiyT");

      var rxSubscriber_1 = __webpack_require__(
      /*! ../internal/symbol/rxSubscriber */
      "p//D");

      var SubjectSubscriber = function (_super) {
        __extends(SubjectSubscriber, _super);

        function SubjectSubscriber(destination) {
          var _this = _super.call(this, destination) || this;

          _this.destination = destination;
          return _this;
        }

        return SubjectSubscriber;
      }(Subscriber_1.Subscriber);

      exports.SubjectSubscriber = SubjectSubscriber;

      var Subject = function (_super) {
        __extends(Subject, _super);

        function Subject() {
          var _this = _super.call(this) || this;

          _this.observers = [];
          _this.closed = false;
          _this.isStopped = false;
          _this.hasError = false;
          _this.thrownError = null;
          return _this;
        }

        Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
          return new SubjectSubscriber(this);
        };

        Subject.prototype.lift = function (operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
        };

        Subject.prototype.next = function (value) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          }

          if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();

            for (var i = 0; i < len; i++) {
              copy[i].next(value);
            }
          }
        };

        Subject.prototype.error = function (err) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          }

          this.hasError = true;
          this.thrownError = err;
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].error(err);
          }

          this.observers.length = 0;
        };

        Subject.prototype.complete = function () {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          }

          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].complete();
          }

          this.observers.length = 0;
        };

        Subject.prototype.unsubscribe = function () {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
        };

        Subject.prototype._trySubscribe = function (subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          } else {
            return _super.prototype._trySubscribe.call(this, subscriber);
          }
        };

        Subject.prototype._subscribe = function (subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
          } else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
          } else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
          }
        };

        Subject.prototype.asObservable = function () {
          var observable = new Observable_1.Observable();
          observable.source = this;
          return observable;
        };

        Subject.create = function (destination, source) {
          return new AnonymousSubject(destination, source);
        };

        return Subject;
      }(Observable_1.Observable);

      exports.Subject = Subject;

      var AnonymousSubject = function (_super) {
        __extends(AnonymousSubject, _super);

        function AnonymousSubject(destination, source) {
          var _this = _super.call(this) || this;

          _this.destination = destination;
          _this.source = source;
          return _this;
        }

        AnonymousSubject.prototype.next = function (value) {
          var destination = this.destination;

          if (destination && destination.next) {
            destination.next(value);
          }
        };

        AnonymousSubject.prototype.error = function (err) {
          var destination = this.destination;

          if (destination && destination.error) {
            this.destination.error(err);
          }
        };

        AnonymousSubject.prototype.complete = function () {
          var destination = this.destination;

          if (destination && destination.complete) {
            this.destination.complete();
          }
        };

        AnonymousSubject.prototype._subscribe = function (subscriber) {
          var source = this.source;

          if (source) {
            return this.source.subscribe(subscriber);
          } else {
            return Subscription_1.Subscription.EMPTY;
          }
        };

        return AnonymousSubject;
      }(Subject);

      exports.AnonymousSubject = AnonymousSubject; //# sourceMappingURL=Subject.js.map

      /***/
    },

    /***/
    "gY7f":
    /*!**********************************************!*\
      !*** ./src/app/admin/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function gY7f(module, __webpack_exports__, __webpack_require__) {
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
      "KKo0");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "VQQu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/contact.service */
      "3ITz");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(authenticationService, contactService, socketService, userService) {
          _classCallCheck(this, HomeComponent);

          this.authenticationService = authenticationService;
          this.contactService = contactService;
          this.socketService = socketService;
          this.userService = userService;
          this.getAdminDashboardDataOnLogin();
          var _adminUsersArray = [];

          _adminUsersArray.push(this.authenticationService.currentUserValue._id);

          var _currentContactObjAll = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, 'System', 'app-system-group', 'app-system-group', _adminUsersArray, null, null, [src_app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin, src_app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Borrower, src_app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Lender], true);

          this.socketService.sendEventToAddNewContact(_currentContactObjAll);

          var _currentContactObjLender = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, 'Avitii Lending(L)', 'app-system-group-lenders', 'app-system-group-lenders', _adminUsersArray, null, null, [src_app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin, src_app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Lender], true);

          this.socketService.sendEventToAddNewContact(_currentContactObjLender);

          var _currentContactObjBorrower = this.contactService.returnContactJsonData(this.authenticationService.currentUserValue._id, 'Avitii Lending(B)', 'app-system-group-borrower', 'app-system-group-borrower', _adminUsersArray, null, null, [src_app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin, src_app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Borrower], true);

          this.socketService.sendEventToAddNewContact(_currentContactObjBorrower);
        }

        _createClass(HomeComponent, [{
          key: "getAdminDashboardDataOnLogin",
          value: function getAdminDashboardDataOnLogin() {
            var _this30 = this;

            this.userService.getAdminDashboardDataOnLogin(this.authenticationService.currentUserValue._id, this.authenticationService.currentUserValue.role).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                _this30.authenticationService.currentUserAdminDashboardDataDetails = data['data'];
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
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_8__["SocketioService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_8__["SocketioService"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"]])], HomeComponent);
      /***/
    },

    /***/
    "gmSr":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/borrower-earnings/borrower-earnings.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gmSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12 col-md-12 mb-4\">\n        <div class=\"card shadow h-100\">\n            <div class=\"card-body p-3\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 mb-4\">\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\" i18n>Borrower's Earning</div>\n                    </div>\n                    <div class=\"col-xl-12 col-12 mb-4\">\n                        <div class=\"view view-cascade gradient-card-header white\">\n                            <table class=\"table table-striped table-responsive-md btn-table\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"d-none\">ID</th>\n                                        <th i18n>Borrower</th>\n                                        <th i18n>$Amount (Pending)</th>\n                                        <th i18n>Total Transactions</th>\n                                        <th i18n>Actions</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentBorrowerDetailsArray); let i = index\">\n                                        <td class=\"d-none\">{{obj._id}}</td>\n                                        <td>{{obj._id}}</td>\n                                        <td>{{obj.totalPayment4CurrentUser}}</td>\n                                        <td>{{obj.totalCountOfTransactions}}</td>\n                                        <td>\n                                            <div *ngIf=\"obj.totalPayment4CurrentUser>0\">\n                                                <i *ngIf=\"!editingIdCtrl[i]\" class=\"icon-pencil-alt m-2 text-danger\" (click)=\"editingIdCtrl[i]=true;\">\n                                                </i>\n                                                <input *ngIf=\"editingIdCtrl[i]\" name=\"transactionId\" [(ngModel)]=\"transactionIdCtrl[i]\">\n                                                <i *ngIf=\"editingIdCtrl[i]\" class=\"icon-check-box m-2 text-success\" (click)=\"updateTransactionIdDoPaymentForBorrower(i, transactionIdCtrl[i], obj)\">\n                                                </i>\n                                                <i *ngIf=\"editingIdCtrl[i]\" class=\"icon-close m-2 text-danger\" (click)=\"editingIdCtrl[i]=false;\">\n                                                </i>\n                                            </div>\n                                            <div *ngIf=\"obj.totalPayment4CurrentUser<=0\">\n                                                ###\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "hP8I":
    /*!***************************************************!*\
      !*** ./src/app/admin/header/header.component.css ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function hP8I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "nav {\n    padding: 0;\n}\nheader img{\n    height: 3.3rem;\n}\nheader nav ul .mega-menu .mega-menu-container {\n\n    min-width: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgcGFkZGluZzogMDtcbn1cbmhlYWRlciBpbWd7XG4gICAgaGVpZ2h0OiAzLjNyZW07XG59XG5oZWFkZXIgbmF2IHVsIC5tZWdhLW1lbnUgLm1lZ2EtbWVudS1jb250YWluZXIge1xuXG4gICAgbWluLXdpZHRoOiBhdXRvO1xufVxuIl19 */";
      /***/
    },

    /***/
    "hu3n":
    /*!******************************************************!*\
      !*** ./src/app/admin/partners/partners.component.ts ***!
      \******************************************************/

    /*! exports provided: PartnersComponent */

    /***/
    function hu3n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartnersComponent", function () {
        return PartnersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_partners_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./partners.component.html */
      "B5sM");
      /* harmony import */


      var _partners_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./partners.component.css */
      "lHgj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_shared_media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/media-preview/media-preview.component */
      "tZK8");

      var uploadAPI = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/api/post/upload/assetdata';
      var uploadAccessUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/';

      var PartnersComponent = /*#__PURE__*/function () {
        function PartnersComponent(http, formBuilder, authenticationService, userService, alertService, appRouterService, utilityService, _cdr, dialog) {
          _classCallCheck(this, PartnersComponent);

          this.http = http;
          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.utilityService = utilityService;
          this._cdr = _cdr;
          this.dialog = dialog;
          this.fileData4refDocument = null;
          this.fileData4refDocumentPendingForUpload = false;
          this.loading = false;
          this.submitted = false;
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
          this.currentObj = null;
          this.actionButtons0Add1Edit2Delete = 0;
          this.userObj = this.authenticationService.currentUserValue;
          this.initForm();
          this.fetchAllPartnersByUserId();
        }

        _createClass(PartnersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fetchAllPartnersByUserId",
          value: function fetchAllPartnersByUserId() {
            var _this31 = this;

            this.userService.getPartnersAll(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this31.allPartnersData = data["data"]; //this.alertService.success(data['message'], true);

                _this31.loading = false;
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

              _this31.alertService.error(errorMsg2show);

              _this31.loading = false;

              _this31.appRouterService.appRouter('');
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.userPartnersForm.controls;
          }
        }, {
          key: "onPartnersUpdateSubmit",
          value: function onPartnersUpdateSubmit() {
            var _this32 = this;

            this.submitted = true;

            if (this.userPartnersForm.invalid) {
              this.alertService.error("Please Provide all data");
              return;
            }

            if (this.fileData4refDocumentPendingForUpload) {
              this.alertService.error('Please upload document first');
              return;
            }

            this.userService.addUpdateUserPartners(this.userPartnersForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this32.alertService.success('Data Updated successfully', true);

                _this32.fetchAllPartnersByUserId();

                _this32.submitted = false;

                _this32.closeDialog(); //this.appRouterService.appRouter(this.userObj);

              } else {
                //alert(JSON.stringify(data['message']));
                _this32.alertService.error(data['message']);

                _this32.loading = false;
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

              _this32.alertService.error(errorMsg2show);

              _this32.loading = false; //this.closeDialog();
            });
          }
        }, {
          key: "showEditingFormPartners",
          value: function showEditingFormPartners(_userObj) {
            this.userPartnersForm = this.formBuilder.group({
              _id: [_userObj._id || ''],
              title: [_userObj.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              domainLink: [_userObj.domainLink || ''],
              description: [_userObj.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              refDocument: [_userObj.refDocument || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              status: [_userObj.status || src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending],
              createdOn: [_userObj.createdOn || null],
              updatedOn: [_userObj.updatedOn || null],
              isDeleted: [_userObj.isDeleted || false],
              createdBy: [_userObj.createdBy || this.authenticationService.currentUserValue._id],
              deletedBy: [_userObj.deletedBy || ''],
              updatedBy: [this.authenticationService.currentUserValue._id]
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.userPartnersForm = this.formBuilder.group({
              _id: [''],
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              domainLink: [''],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              refDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              status: [src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending],
              createdOn: [''],
              updatedOn: [''],
              isDeleted: [false],
              createdBy: [this.authenticationService.currentUserValue._id || ''],
              deletedBy: [''],
              updatedBy: ['']
            });
          }
        }, {
          key: "onfileProgressForPartnersDocument",
          value: function onfileProgressForPartnersDocument(fileInput) {
            this.fileData4refDocument = fileInput.target.files[0];
            this.previewForPartnersDocument();
          }
        }, {
          key: "previewForPartnersDocument",
          value: function previewForPartnersDocument() {
            var _this33 = this;

            // Show preview 
            var mimeType = this.fileData4refDocument.type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(this.fileData4refDocument);

            reader.onload = function (_event) {
              _this33.userPartnersForm.get('refDocument').setValue(reader.result);

              _this33.fileData4refDocumentPendingForUpload = true;
            };
          }
        }, {
          key: "onUploadForPartnersDocument",
          value: function onUploadForPartnersDocument() {
            var _this34 = this;

            if (!this.fileData4refDocument) {
              this.alertService.error("Select file first.");
              return;
            }

            var mimeType = this.fileData4refDocument.type;

            if (mimeType.match(/image\/*/) == null) {
              this.alertService.error("Select Image file only.");
              return;
            }

            var formData = new FormData();
            formData.append('files', this.fileData4refDocument);
            formData.append('documentId', this.userObj._id + '__partners');
            this.fileUploadProgress = '0%';
            this.http.post(uploadAPI, formData, {
              reportProgress: true,
              observe: 'events'
            }).subscribe(function (events) {
              if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].UploadProgress) {
                _this34.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%'; //console.log(this.fileUploadProgress);
              } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].Response) {
                _this34.fileUploadProgress = ''; //console.log(events.body);
                //alert('SUCCESS !!');

                _this34.fileData4Profile = null;

                _this34.alertService.success('Uploaded successfully', true);

                var _uploadedUrl = events.body["data"].path;

                if (lodash__WEBPACK_IMPORTED_MODULE_11__["startsWith"](_uploadedUrl, '/')) {
                  _uploadedUrl = _uploadedUrl.substr(1);
                }

                _this34.uploadedFilePath = uploadAccessUrl + '' + _uploadedUrl;

                _this34.userPartnersForm.get('refDocument').setValue(_this34.uploadedFilePath);

                _this34.fileData4refDocumentPendingForUpload = false;
              }
            });
          }
        }, {
          key: "mediaPreviewModel",
          value: function mediaPreviewModel(mediaSrc, mimeType) {
            //console.log('411', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(src_app_shared_media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_14__["MediaPreviewComponent"], {
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
            dialogRef.afterClosed().subscribe(function (result) {//console.log(`426 :: msc :: Dialog result: ${JSON.stringify(result)}`);
            });
          }
        }, {
          key: "EditShowPartnersForm",
          value: function EditShowPartnersForm(_userObj) {
            this.actionButtons0Add1Edit2Delete = 1;
            this.initForm();
            this.showEditingFormPartners(_userObj);
            $("#blogModal").modal('show');
          }
        }, {
          key: "DeleteShowPartnersForm",
          value: function DeleteShowPartnersForm(_userObj) {
            this.currentObj = _userObj;
            this.actionButtons0Add1Edit2Delete = 2;
            this.initForm();
            this.showEditingFormPartners(_userObj);
            $("#blogModal").modal('show');
          }
        }, {
          key: "DeleteData",
          value: function DeleteData() {
            this.actionButtons0Add1Edit2Delete = 2;
            this.initForm();
            this.showEditingFormPartners(this.currentObj);
            this.userPartnersForm.get("isDeleted").setValue(true);
            this.userPartnersForm.get("deletedBy").setValue(this.authenticationService.currentUserValue._id);

            var _temp_allPartnersData = lodash__WEBPACK_IMPORTED_MODULE_11__["mapKeys"](this.allPartnersData, '_id');

            delete _temp_allPartnersData[this.currentObj._id];
            this.allPartnersData = lodash__WEBPACK_IMPORTED_MODULE_11__["values"](_temp_allPartnersData);
            this.onPartnersUpdateSubmit();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.currentObj = null;
            this.actionButtons0Add1Edit2Delete = 0;
            this.initForm();
            $("#blogModal").modal('hide');
          }
        }]);

        return PartnersComponent;
      }();

      PartnersComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      };

      PartnersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-partners',
        template: _raw_loader_partners_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_partners_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])], PartnersComponent);
      /***/
    },

    /***/
    "jkDv":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /*! exports provided: AdminModule */

    /***/
    function jkDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
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


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-routing.module */
      "0Em7");
      /* harmony import */


      var _admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin.component */
      "TRGY");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "gY7f");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./header/header.component */
      "ABg6");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./footer/footer.component */
      "JU3h");
      /* harmony import */


      var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/services.component */
      "WLd7");
      /* harmony import */


      var _service_types_add_service_types_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./service-types-add/service-types-add.component */
      "+Q42");
      /* harmony import */


      var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./user-management/user-management.component */
      "OcPW");
      /* harmony import */


      var _payment_transactions_payment_transactions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./payment-transactions/payment-transactions.component */
      "yVJR");
      /* harmony import */


      var _borrower_earnings_borrower_earnings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./borrower-earnings/borrower-earnings.component */
      "rCAk");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./add-user/add-user.component */
      "4pOR");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _user_levels_user_levels_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./user-levels/user-levels.component */
      "6pX3");
      /* harmony import */


      var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./blogs/blogs.component */
      "AvT8");
      /* harmony import */


      var _loan_payment_loan_payment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./loan-payment/loan-payment.component */
      "dEW4");
      /* harmony import */


      var _customer_review_customer_review_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./customer-review/customer-review.component */
      "yxQR");
      /* harmony import */


      var _partners_partners_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./partners/partners.component */
      "hu3n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @kolkov/angular-editor */
      "mUB+");
      /* harmony import */


      var _user_management_pending_user_management_pending_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./user-management-pending/user-management-pending.component */
      "joR3");

      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"], _service_types_add_service_types_add_component__WEBPACK_IMPORTED_MODULE_11__["ServiceTypesAddComponent"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"], _payment_transactions_payment_transactions_component__WEBPACK_IMPORTED_MODULE_13__["PaymentTransactionsComponent"], _borrower_earnings_borrower_earnings_component__WEBPACK_IMPORTED_MODULE_14__["BorrowerEarningsComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__["AddUserComponent"], _user_levels_user_levels_component__WEBPACK_IMPORTED_MODULE_18__["UserLevelsComponent"], _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_19__["BlogsComponent"], _loan_payment_loan_payment_component__WEBPACK_IMPORTED_MODULE_20__["LoanPaymentComponent"], _customer_review_customer_review_component__WEBPACK_IMPORTED_MODULE_21__["CustomerReviewComponent"], _partners_partners_component__WEBPACK_IMPORTED_MODULE_22__["PartnersComponent"], _user_management_pending_user_management_pending_component__WEBPACK_IMPORTED_MODULE_25__["UserManagementPendingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_17__["DataTablesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_24__["AngularEditorModule"]]
      })], AdminModule);
      /***/
    },

    /***/
    "joR3":
    /*!************************************************************************************!*\
      !*** ./src/app/admin/user-management-pending/user-management-pending.component.ts ***!
      \************************************************************************************/

    /*! exports provided: UserManagementPendingComponent */

    /***/
    function joR3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementPendingComponent", function () {
        return UserManagementPendingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_management_pending_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-management-pending.component.html */
      "xwQy");
      /* harmony import */


      var _user_management_pending_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-management-pending.component.css */
      "o7O4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/public-profile/public-profile.component */
      "bLZ2");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_models_role__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/role */
      "z56L");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var src_app_shared_income_proof_income_proof_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/income-proof/income-proof.component */
      "KRlv");
      /* harmony import */


      var src_app_shared_user_restriction_details_user_restriction_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/user-restriction-details/user-restriction-details.component */
      "arha");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var that;

      var UserManagementPendingComponent = /*#__PURE__*/function () {
        function UserManagementPendingComponent(dialog, socketService, alertService, utilityService, authenticationService, router, elementRef, userService) {
          _classCallCheck(this, UserManagementPendingComponent);

          this.dialog = dialog;
          this.socketService = socketService;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.authenticationService = authenticationService;
          this.router = router;
          this.elementRef = elementRef;
          this.userService = userService;
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          this.dtOptions = {};
          this.PaymentTransactionDetailsArray = null;
          this.loading = false;
          this.Role = src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["Role"];
          this.recordsTotal = 0;
          this.nextPageIndex = 0;
          this.totalPages = 0;
          this.limit4Filtered = 0;
          this.recordsFiltered = 0; //this.getAllUsersWithRequestData();
        }

        _createClass(UserManagementPendingComponent, [{
          key: "getAllUsersWithRequestData",
          value: function getAllUsersWithRequestData() {
            var _this35 = this;

            var _skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var dataTablesParameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var returnOnlyPendingT = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            var _data = {};
            this.socketService.getAllUsersWithRequestData(_data, _skip, dataTablesParameters, returnOnlyPendingT).subscribe(function (data) {
              if (data && data['success']) {
                //this.PaymentTransactionDetailsArray = this.utilityService._.uniq(this.utilityService._.union((this.PaymentTransactionDetailsArray || []), data["data"]));
                _this35.PaymentTransactionDetailsArray = data["data"];
                _this35.recordsTotal = data['metaData']['totalDocs'] || 0;
                _this35.nextPageIndex = data['metaData']['nextPage'] || 0;
                _this35.totalPages = data['metaData']['totalPages'] || 0;
                _this35.limit4Filtered = data['metaData']['limit'] || 0;
                _this35.recordsFiltered = data['metaData']['recordsFiltered'] || _this35.recordsTotal;

                if (callback) {
                  callback({
                    recordsTotal: _this35.recordsTotal || 0,
                    recordsFiltered: _this35.recordsFiltered || 0,
                    data: []
                  });
                } else {
                  _this35.populateUsersDataInTable();
                } //this.rerender();


                _this35.loading = false;
              } else {
                _this35.alertService.error(data['message']);

                _this35.loading = false;
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

              _this35.alertService.error(errorMsg2show);

              _this35.loading = false;
            });
          }
        }, {
          key: "updateUsersVerificationStatus",
          value: function updateUsersVerificationStatus(_userId, _isVerified) {
            var _this36 = this;

            this.alertService.success("Please wait while we updating status of user");
            this.socketService.updateUsersVerificationStatus(_userId, _isVerified).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                var i = 0;

                _this36.PaymentTransactionDetailsArray.forEach(function (item) {
                  if (item._id == data["data"]["_id"]) {
                    _this36.PaymentTransactionDetailsArray.splice(i, 1, data["data"]);

                    return;
                  }

                  i++;
                });

                _this36.populateUsersDataInTable();
                /*let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                usersObjArr[data["data"]["_id"]] = data["data"]
                this.PaymentTransactionDetailsArray = usersObjArr;
                this.populateUsersDataInTable();*/
                //this.rerender();


                _this36.alertService.success(data['message']);

                _this36.loading = false;
              } else {
                _this36.alertService.error(data['message']);

                _this36.loading = false;
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

              _this36.alertService.error(errorMsg2show);

              _this36.loading = false;
            });
          }
        }, {
          key: "deleteUserById",
          value: function deleteUserById(_userId) {
            var _this37 = this;

            this.alertService.success("Please wait while we deleting user");
            this.socketService.deleteUserById(_userId, this.authenticationService.currentUserValue._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                var i = 0;

                _this37.PaymentTransactionDetailsArray.forEach(function (item) {
                  if (item._id == _userId) {
                    _this37.PaymentTransactionDetailsArray.splice(i, 1, null);

                    return;
                  }

                  i++;
                });

                _this37.populateUsersDataInTable();
                /*
                let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                delete usersObjArr[_userId];
                this.PaymentTransactionDetailsArray = usersObjArr;
                this.populateUsersDataInTable();
                */
                //this.rerender();


                _this37.alertService.success(data['message']);

                _this37.loading = false;
              } else {
                _this37.alertService.error(data['message']);

                _this37.loading = false;
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

              _this37.alertService.error(errorMsg2show);

              _this37.loading = false;
            });
          }
        }, {
          key: "usersProfile",
          value: function usersProfile(userObj) {
            var _this38 = this;

            //console.log('95', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__["PublicProfileComponent"], {
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                userObj: userObj,
                adminViewT: true
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result && result.data) {
                var i = 0;

                _this38.PaymentTransactionDetailsArray.forEach(function (item) {
                  if (item._id == result.data["_id"]) {
                    _this38.PaymentTransactionDetailsArray.splice(i, 1, result.data);

                    return;
                  }

                  i++;
                });
                /*
                let _userId = result.data._id;
                let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                delete usersObjArr[_userId];
                usersObjArr[_userId] = result.data;
                this.PaymentTransactionDetailsArray = usersObjArr;
                */

              } //console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);

            });
          }
        }, {
          key: "returnT4CurrentUserIsSAdmin",
          value: function returnT4CurrentUserIsSAdmin() {
            try {
              if (this.authenticationService.currentUserValue.appPermissions && this.authenticationService.currentUserValue.appPermissions.indexOf(src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["AppAccessPermissions"].adminAddEdit) > -1) {
                return true;
              }
            } catch (ex) {}

            return false;
          }
        }, {
          key: "returnT4CurrentUserAllowedToShow",
          value: function returnT4CurrentUserAllowedToShow(currentUserRole) {
            if (this.returnT4CurrentUserIsSAdmin()) {
              return true;
            }

            if (currentUserRole != src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["Role"].Admin) {
              return true;
            }

            return false;
          }
        }, {
          key: "navigate2EditUser",
          value: function navigate2EditUser(userId) {
            this.router.navigate(['/admin/add-user'], {
              state: {
                userId: userId
              }
            });
          } //#region datatable actions

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.populateUsersDataInTable();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();

            if (this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.querySelector('.paginate_button.next')) {
              this.elementRef.nativeElement.querySelector('.paginate_button.next').removeEventListener('click', this.paginateButtonNext);
              this.elementRef.nativeElement.querySelector('.paginate_button.last').removeEventListener('click', this.paginateButtonNext);
            }
          }
        }, {
          key: "populateUsersDataInTable",
          value: function populateUsersDataInTable() {
            that = this; //this.destroyTable();

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 100,
              serverSide: true,
              processing: false,
              ajax: function ajax(dataTablesParameters, callback) {
                that.getAllUsersWithRequestData(that.nextPageIndex || 1, callback, dataTablesParameters);
                /*
                        if ((dataTablesParameters.start + dataTablesParameters.length) < that.utilityService._.keys(that.PaymentTransactionDetailsArray).length) {
                          //No Action here
                          callback({
                            recordsTotal: that.recordsTotal || 0,
                            recordsFiltered: that.utilityService._.keys(that.PaymentTransactionDetailsArray).length || 0,
                            data: [],
                          });
                
                          //that.getAllUsersWithRequestData((that.nextPageIndex || 1), callback, dataTablesParameters);
                        } else {
                          that.getAllUsersWithRequestData((that.nextPageIndex || 1), callback, dataTablesParameters);
                          //that.dtTrigger.next();
                          //that.rerender();
                        }
                        */

                /*{"draw":3,"columns":[{"data":0,"name":"_id","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":1,"name":"emailAddress","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":2,"name":"firstName","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":3,"name":"role","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":4,"name":"mobileNo","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":5,"name":"verified","searchable":true,"orderable":true,"search":{"value":"","regex":false}},{"data":6,"name":"actions","searchable":false,"orderable":false,"search":{"value":"","regex":false}}],"order":[{"column":0,"dir":"asc"}],"start":0,"length":100,"search":{"value":"oo","regex":false}}*/
              },
              columns: [{
                "data": 0,
                "name": "_id",
                "searchable": true,
                "orderable": true
              }, {
                "data": 1,
                "name": "emailAddress",
                "searchable": true,
                "orderable": true
              }, {
                "data": 2,
                "name": "firstName",
                "searchable": true,
                "orderable": true
              }, {
                "data": 3,
                "name": "role",
                "searchable": true,
                "orderable": true
              }, {
                "data": 4,
                "name": "mobileNo",
                "searchable": true,
                "orderable": true
              }, {
                "data": 5,
                "name": "verified",
                "searchable": true,
                "orderable": true
              }, {
                "data": 6,
                "name": "actions",
                "searchable": false,
                "orderable": false
              }]
              /*
                    drawCallback: () => {
                      if (this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.querySelector('.paginate_button.next')) {
                        this.elementRef.nativeElement.querySelector('.paginate_button.next')
                          .addEventListener('click', this.paginateButtonNext);
                        this.elementRef.nativeElement.querySelector('.paginate_button.last')
                          .addEventListener('click', this.paginateButtonNext);
                      }
                    }
                    */

            }; //this.dtTrigger.next();
            //this.rerender();
          }
        }, {
          key: "paginateButtonNext",
          value: function paginateButtonNext() {
            that.getAllUsersWithRequestData(that.nextPageIndex || 1);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.columns().every(function () {
                  var that = this;
                  $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                      that.search(this['value']).draw();
                    }
                  });
                });
              });
            }
          }
        }, {
          key: "rerender",
          value: function rerender() {
            var _this39 = this;

            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy(); // Call the dtTrigger to rerender again

                _this39.dtTrigger.next();
              });
            }
          }
        }, {
          key: "destroyTable",
          value: function destroyTable() {
            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy();
              });
            }
          }
        }, {
          key: "onClick",
          value: function onClick(event) {} //#endregion datatable actions

        }, {
          key: "usersIncomeExpenseDetails",
          value: function usersIncomeExpenseDetails(userObj) {
            //console.log('241', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(src_app_shared_income_proof_income_proof_component__WEBPACK_IMPORTED_MODULE_14__["IncomeProofComponent"], {
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                userObj: userObj,
                isOpenedInModel: true,
                adminViewT: true
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {//console.log(`256 :: msc :: Dialog result: ${JSON.stringify(result)}`);
            });
          }
        }, {
          key: "usersRestrictionModal",
          value: function usersRestrictionModal(userObj, isVerified) {
            var _this40 = this;

            var dialogRef = this.dialog.open(src_app_shared_user_restriction_details_user_restriction_details_component__WEBPACK_IMPORTED_MODULE_15__["UserRestrictionDetailsComponent"], {
              maxWidth: '100vw',
              maxHeight: '100vh',
              height: '100%',
              width: '100%',
              hasBackdrop: true,
              data: {
                userObj: userObj,
                adminViewT: true,
                isVerified: isVerified,
                isOpenedInModel: true
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result && result.data && result.data["_id"]) {
                var i = 0;

                _this40.PaymentTransactionDetailsArray.forEach(function (item) {
                  if (item._id == result.data["_id"]) {
                    _this40.PaymentTransactionDetailsArray.splice(i, 1, result.data);

                    return;
                  }

                  i++;
                });
                /*
                        let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                        usersObjArr[result.data["_id"]] = result.data;
                        this.PaymentTransactionDetailsArray = usersObjArr;
                        */


                _this40.populateUsersDataInTable();
              } //console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);

            });
          }
        }]);

        return UserManagementPendingComponent;
      }();

      UserManagementPendingComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]
        }];
      };

      UserManagementPendingComponent.propDecorators = {
        datatableElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTableDirective"], {
            "static": false
          }]
        }]
      };
      UserManagementPendingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-management-pending',
        template: _raw_loader_user_management_pending_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_management_pending_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]])], UserManagementPendingComponent);
      /***/
    },

    /***/
    "lHgj":
    /*!*******************************************************!*\
      !*** ./src/app/admin/partners/partners.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function lHgj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVycy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "mUB+":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js ***!
      \********************************************************************************************/

    /*! exports provided: AngularEditorComponent, AngularEditorModule, AngularEditorService, AngularEditorToolbarComponent, ??a */

    /***/
    function mUB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularEditorComponent", function () {
        return AngularEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularEditorModule", function () {
        return AngularEditorModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularEditorService", function () {
        return AngularEditorService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularEditorToolbarComponent", function () {
        return AngularEditorToolbarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??a", function () {
        return AeSelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var _c0 = ["editor"];
      var _c1 = ["editorWrapper"];
      var _c2 = ["editorToolbar"];

      function AngularEditorComponent_angular_editor_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "angular-editor-toolbar", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("execute", function AngularEditorComponent_angular_editor_toolbar_2_Template_angular_editor_toolbar_execute_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r6.executeCommand($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", ctx_r1.id)("uploadUrl", ctx_r1.config.uploadUrl)("upload", ctx_r1.config.upload)("showToolbar", ctx_r1.config.showToolbar !== undefined ? ctx_r1.config.showToolbar : true)("fonts", ctx_r1.getFonts())("customClasses", ctx_r1.config.customClasses)("defaultFontName", ctx_r1.config.defaultFontName)("defaultFontSize", ctx_r1.config.defaultFontSize)("hiddenButtons", ctx_r1.config.toolbarHiddenButtons);
        }
      }

      function AngularEditorComponent_angular_editor_toolbar_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "angular-editor-toolbar", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("execute", function AngularEditorComponent_angular_editor_toolbar_9_Template_angular_editor_toolbar_execute_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r9.executeCommand($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", ctx_r4.id)("uploadUrl", ctx_r4.config.uploadUrl)("upload", ctx_r4.config.upload)("showToolbar", ctx_r4.config.showToolbar !== undefined ? ctx_r4.config.showToolbar : true)("fonts", ctx_r4.getFonts())("customClasses", ctx_r4.config.customClasses)("defaultFontName", ctx_r4.config.defaultFontName)("defaultFontSize", ctx_r4.config.defaultFontSize)("hiddenButtons", ctx_r4.config.toolbarHiddenButtons);
        }
      }

      var _c3 = ["fileInput"];

      function AngularEditorToolbarComponent_div_0_div_55_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ae-select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r5.customClassId = $event;
          })("change", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r7.setCustomClass(ctx_r7.customClassId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r3.customClassList)("ngModel", ctx_r3.customClassId)("disabled", ctx_r3.htmlMode)("hidden", ctx_r3.isButtonHidden("customClasses"));
        }
      }

      function AngularEditorToolbarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.triggerCommand("undo");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.triggerCommand("redo");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.triggerCommand("bold");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.triggerCommand("italic");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r13.triggerCommand("underline");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.triggerCommand("strikeThrough");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r15.triggerCommand("subscript");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.triggerCommand("superscript");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r17.triggerCommand("justifyLeft");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.triggerCommand("justifyCenter");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.triggerCommand("justifyRight");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.triggerCommand("justifyFull");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r21.triggerCommand("indent");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.triggerCommand("outdent");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.triggerCommand("insertUnorderedList");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.triggerCommand("insertOrderedList");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "ae-select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.block = $event;
          })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.triggerCommand(ctx_r26.block);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ae-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.fontName = $event;
          })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.setFontName(ctx_r28.fontName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "ae-select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r29.fontSize = $event;
          })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r30.setFontSize(ctx_r30.fontSize);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "input", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](46);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r31.insertColor(_r1.value, "textColor");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](46);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r32.focus();
            return _r1.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "input", 38, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](51);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r33.insertColor(_r2.value, "backgroundColor");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](51);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r34.focus();
            return _r2.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, AngularEditorToolbarComponent_div_0_div_55_Template, 2, 4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r35.insertUrl();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r36.triggerCommand("unlink");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "input", 51, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r37.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](62);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r38.focus();
            return _r4.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r39.insertVideo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r40.triggerCommand("insertHorizontalRule");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r41.triggerCommand("removeFormat");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r42.triggerCommand("toggleEditorMode");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx_r0.isButtonHidden("undo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx_r0.isButtonHidden("redo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "bold-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("bold"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "italic-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("italic"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "underline-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("underline"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "strikeThrough-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("strikeThrough"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "subscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("subscript"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "superscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("superscript"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "justifyLeft-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyLeft"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "justifyCenter-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyCenter"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "justifyRight-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyRight"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "justifyFull-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyFull"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "indent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("indent"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "outdent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("outdent"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "insertUnorderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertUnorderedList"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "insertOrderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertOrderedList"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r0.headings)("ngModel", ctx_r0.block)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("heading"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r0.fonts)("ngModel", ctx_r0.fontName)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r0.fontSizes)("ngModel", ctx_r0.fontSize)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontSize"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "foregroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("textColor"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "backgroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("backgroundColor"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0._customClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "link-" + ctx_r0.id)("disabled", ctx_r0.isLinkButtonDisabled)("hidden", ctx_r0.isButtonHidden("link"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "unlink-" + ctx_r0.id)("disabled", ctx_r0.htmlMode || !ctx_r0.linkSelected)("hidden", ctx_r0.isButtonHidden("unlink"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "insertImage-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertImage"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "insertVideo-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertVideo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "insertHorizontalRule-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertHorizontalRule"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "clearFormatting-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("removeFormat"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "toggleEditorMode-" + ctx_r0.id)("hidden", ctx_r0.isButtonHidden("toggleEditorMode"));
        }
      }

      var _c4 = ["labelButton"];

      var _c5 = function _c5(a0, a1) {
        return {
          "selected": a0,
          "focused": a1
        };
      };

      function AeSelectComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AeSelectComponent_button_8_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var item_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r5.optionSelect(item_r3, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](2, _c5, item_r3.value === ctx_r1.value, i_r4 === ctx_r1.optionId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r3.label, " ");
        }
      }

      function AeSelectComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "No items for select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c6 = function _c6(a0) {
        return {
          "ae-expanded": a0
        };
      };

      var AngularEditorService = /*#__PURE__*/function () {
        function AngularEditorService(http, doc) {
          var _this41 = this;

          _classCallCheck(this, AngularEditorService);

          this.http = http;
          this.doc = doc;
          /**
           * save selection when the editor is focussed out
           */

          this.saveSelection = function () {
            if (_this41.doc.getSelection) {
              var sel = _this41.doc.getSelection();

              if (sel.getRangeAt && sel.rangeCount) {
                _this41.savedSelection = sel.getRangeAt(0);
                _this41.selectedText = sel.toString();
              }
            } else if (_this41.doc.getSelection && _this41.doc.createRange) {
              _this41.savedSelection = document.createRange();
            } else {
              _this41.savedSelection = null;
            }
          };
        }
        /**
         * Executed command from editor header buttons exclude toggleEditorMode
         * @param command string from triggerCommand
         */


        _createClass(AngularEditorService, [{
          key: "executeCommand",
          value: function executeCommand(command) {
            var commands = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre'];

            if (commands.includes(command)) {
              this.doc.execCommand('formatBlock', false, command);
              return;
            }

            this.doc.execCommand(command, false, null);
          }
          /**
           * Create URL link
           * @param url string from UI prompt
           */

        }, {
          key: "createLink",
          value: function createLink(url) {
            if (!url.includes('http')) {
              this.doc.execCommand('createlink', false, url);
            } else {
              var newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + '</a>';
              this.insertHtml(newUrl);
            }
          }
          /**
           * insert color either font or background
           *
           * @param color color to be inserted
           * @param where where the color has to be inserted either text/background
           */

        }, {
          key: "insertColor",
          value: function insertColor(color, where) {
            var restored = this.restoreSelection();

            if (restored) {
              if (where === 'textColor') {
                this.doc.execCommand('foreColor', false, color);
              } else {
                this.doc.execCommand('hiliteColor', false, color);
              }
            }
          }
          /**
           * Set font name
           * @param fontName string
           */

        }, {
          key: "setFontName",
          value: function setFontName(fontName) {
            this.doc.execCommand('fontName', false, fontName);
          }
          /**
           * Set font size
           * @param fontSize string
           */

        }, {
          key: "setFontSize",
          value: function setFontSize(fontSize) {
            this.doc.execCommand('fontSize', false, fontSize);
          }
          /**
           * Create raw HTML
           * @param html HTML string
           */

        }, {
          key: "insertHtml",
          value: function insertHtml(html) {
            var isHTMLInserted = this.doc.execCommand('insertHTML', false, html);

            if (!isHTMLInserted) {
              throw new Error('Unable to perform the operation');
            }
          }
          /**
           * restore selection when the editor is focused in
           *
           * saved selection when the editor is focused out
           */

        }, {
          key: "restoreSelection",
          value: function restoreSelection() {
            if (this.savedSelection) {
              if (this.doc.getSelection) {
                var sel = this.doc.getSelection();
                sel.removeAllRanges();
                sel.addRange(this.savedSelection);
                return true;
              } else if (this.doc.getSelection
              /*&& this.savedSelection.select*/
              ) {
                // this.savedSelection.select();
                return true;
              }
            } else {
              return false;
            }
          }
          /**
           * setTimeout used for execute 'saveSelection' method in next event loop iteration
           */

        }, {
          key: "executeInNextQueueIteration",
          value: function executeInNextQueueIteration(callbackFn) {
            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e2;
            setTimeout(callbackFn, timeout);
          }
          /** check any selection is made or not */

        }, {
          key: "checkSelection",
          value: function checkSelection() {
            var selectedText = this.savedSelection.toString();

            if (selectedText.length === 0) {
              throw new Error('No Selection Made');
            }

            return true;
          }
          /**
           * Upload file to uploadUrl
           * @param file The file
           */

        }, {
          key: "uploadImage",
          value: function uploadImage(file) {
            var uploadData = new FormData();
            uploadData.append('file', file, file.name);
            return this.http.post(this.uploadUrl, uploadData, {
              reportProgress: true,
              observe: 'events',
              withCredentials: this.uploadWithCredentials
            });
          }
          /**
           * Insert image with Url
           * @param imageUrl The imageUrl.
           */

        }, {
          key: "insertImage",
          value: function insertImage(imageUrl) {
            this.doc.execCommand('insertImage', false, imageUrl);
          }
        }, {
          key: "setDefaultParagraphSeparator",
          value: function setDefaultParagraphSeparator(separator) {
            this.doc.execCommand('defaultParagraphSeparator', false, separator);
          }
        }, {
          key: "createCustomClass",
          value: function createCustomClass(customClass) {
            var newTag = this.selectedText;

            if (customClass) {
              var tagName = customClass.tag ? customClass.tag : 'span';
              newTag = '<' + tagName + ' class="' + customClass["class"] + '">' + this.selectedText + '</' + tagName + '>';
            }

            this.insertHtml(newTag);
          }
        }, {
          key: "insertVideo",
          value: function insertVideo(videoUrl) {
            if (videoUrl.match('www.youtube.com')) {
              this.insertYouTubeVideoTag(videoUrl);
            }

            if (videoUrl.match('vimeo.com')) {
              this.insertVimeoVideoTag(videoUrl);
            }
          }
        }, {
          key: "insertYouTubeVideoTag",
          value: function insertYouTubeVideoTag(videoUrl) {
            var id = videoUrl.split('v=')[1];
            var imageUrl = "https://img.youtube.com/vi/".concat(id, "/0.jpg");
            var thumbnail = "\n      <div style='position: relative'>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"click to watch\"/>\n          <img style='position: absolute; left:200px; top:140px'\n          src=\"https://img.icons8.com/color/96/000000/youtube-play.png\"/>\n        </a>\n      </div>");
            this.insertHtml(thumbnail);
          }
        }, {
          key: "insertVimeoVideoTag",
          value: function insertVimeoVideoTag(videoUrl) {
            var _this42 = this;

            var sub = this.http.get("https://vimeo.com/api/oembed.json?url=".concat(videoUrl)).subscribe(function (data) {
              var imageUrl = data.thumbnail_url_with_play_button;
              var thumbnail = "<div>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"").concat(data.title, "\"/>\n        </a>\n      </div>");

              _this42.insertHtml(thumbnail);

              sub.unsubscribe();
            });
          }
        }, {
          key: "nextNode",
          value: function nextNode(node) {
            if (node.hasChildNodes()) {
              return node.firstChild;
            } else {
              while (node && !node.nextSibling) {
                node = node.parentNode;
              }

              if (!node) {
                return null;
              }

              return node.nextSibling;
            }
          }
        }, {
          key: "getRangeSelectedNodes",
          value: function getRangeSelectedNodes(range, includePartiallySelectedContainers) {
            var node = range.startContainer;
            var endNode = range.endContainer;
            var rangeNodes = []; // Special case for a range that is contained within a single node

            if (node === endNode) {
              rangeNodes = [node];
            } else {
              // Iterate nodes until we hit the end container
              while (node && node !== endNode) {
                rangeNodes.push(node = this.nextNode(node));
              } // Add partially selected nodes at the start of the range


              node = range.startContainer;

              while (node && node !== range.commonAncestorContainer) {
                rangeNodes.unshift(node);
                node = node.parentNode;
              }
            } // Add ancestors of the range container, if required


            if (includePartiallySelectedContainers) {
              node = range.commonAncestorContainer;

              while (node) {
                rangeNodes.push(node);
                node = node.parentNode;
              }
            }

            return rangeNodes;
          }
        }, {
          key: "getSelectedNodes",
          value: function getSelectedNodes() {
            var nodes = [];

            if (this.doc.getSelection) {
              var sel = this.doc.getSelection();

              for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
              }
            }

            return nodes;
          }
        }, {
          key: "replaceWithOwnChildren",
          value: function replaceWithOwnChildren(el) {
            var parent = el.parentNode;

            while (el.hasChildNodes()) {
              parent.insertBefore(el.firstChild, el);
            }

            parent.removeChild(el);
          }
        }, {
          key: "removeSelectedElements",
          value: function removeSelectedElements(tagNames) {
            var _this43 = this;

            var tagNamesArray = tagNames.toLowerCase().split(',');
            this.getSelectedNodes().forEach(function (node) {
              if (node.nodeType === 1 && tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
                // Remove the node and replace it with its children
                _this43.replaceWithOwnChildren(node);
              }
            });
          }
        }]);

        return AngularEditorService;
      }();

      AngularEditorService.??fac = function AngularEditorService_Factory(t) {
        return new (t || AngularEditorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      AngularEditorService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AngularEditorService,
        factory: AngularEditorService.??fac
      });

      AngularEditorService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AngularEditorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();

      var angularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: 'auto',
        minHeight: '0',
        maxHeight: 'auto',
        width: 'auto',
        minWidth: '0',
        translate: 'yes',
        enableToolbar: true,
        showToolbar: true,
        placeholder: 'Enter text here...',
        defaultParagraphSeparator: '',
        defaultFontName: '',
        defaultFontSize: '',
        fonts: [{
          "class": 'arial',
          name: 'Arial'
        }, {
          "class": 'times-new-roman',
          name: 'Times New Roman'
        }, {
          "class": 'calibri',
          name: 'Calibri'
        }, {
          "class": 'comic-sans-ms',
          name: 'Comic Sans MS'
        }],
        uploadUrl: 'v1/image',
        uploadWithCredentials: false,
        sanitize: true,
        toolbarPosition: 'top',
        outline: true
        /*toolbarHiddenButtons: [
          ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
          ['heading', 'fontName', 'fontSize', 'color'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
          ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
          ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
          ['link', 'unlink', 'image', 'video']
        ]*/

      };

      function isDefined(value) {
        return value !== undefined && value !== null;
      }

      var AngularEditorComponent = /*#__PURE__*/function () {
        function AngularEditorComponent(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
          _classCallCheck(this, AngularEditorComponent);

          this.r = r;
          this.editorService = editorService;
          this.doc = doc;
          this.sanitizer = sanitizer;
          this.cdRef = cdRef;
          this.autoFocus = autoFocus;
          this.modeVisual = true;
          this.showPlaceholder = false;
          this.disabled = false;
          this.focused = false;
          this.touched = false;
          this.changed = false;
          this.id = '';
          this.config = angularEditorConfig;
          this.placeholder = '';
          this.viewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** emits `blur` event when focused out from the textarea */
          // eslint-disable-next-line @angular-eslint/no-output-native, @angular-eslint/no-output-rename

          this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** emits `focus` event when focused in to the textarea */
          // eslint-disable-next-line @angular-eslint/no-output-rename, @angular-eslint/no-output-native

          this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.tabindex = -1;
          var parsedTabIndex = Number(defaultTabIndex);
          this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
        }

        _createClass(AngularEditorComponent, [{
          key: "onFocus",
          value: function onFocus() {
            this.focus();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : angularEditorConfig.toolbarPosition;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (isDefined(this.autoFocus)) {
              this.focus();
            }
          }
        }, {
          key: "onPaste",
          value: function onPaste(event) {
            if (this.config.rawPaste) {
              event.preventDefault();
              var text = event.clipboardData.getData('text/plain');
              document.execCommand('insertHTML', false, text);
              return text;
            }
          }
          /**
           * Executed command from editor header buttons
           * @param command string from triggerCommand
           */

        }, {
          key: "executeCommand",
          value: function executeCommand(command) {
            this.focus();

            if (command === 'focus') {
              return;
            }

            if (command === 'toggleEditorMode') {
              this.toggleEditorMode(this.modeVisual);
            } else if (command !== '') {
              if (command === 'clear') {
                this.editorService.removeSelectedElements(this.getCustomTags());
                this.onContentChange(this.textArea.nativeElement);
              } else if (command === 'default') {
                this.editorService.removeSelectedElements('h1,h2,h3,h4,h5,h6,p,pre');
                this.onContentChange(this.textArea.nativeElement);
              } else {
                this.editorService.executeCommand(command);
              }

              this.exec();
            }
          }
          /**
           * focus event
           */

        }, {
          key: "onTextAreaFocus",
          value: function onTextAreaFocus(event) {
            var _this44 = this;

            if (this.focused) {
              event.stopPropagation();
              return;
            }

            this.focused = true;
            this.focusEvent.emit(event);

            if (!this.touched || !this.changed) {
              this.editorService.executeInNextQueueIteration(function () {
                _this44.configure();

                _this44.touched = true;
              });
            }
          }
          /**
           * @description fires when cursor leaves textarea
           */

        }, {
          key: "onTextAreaMouseOut",
          value: function onTextAreaMouseOut(event) {
            this.editorService.saveSelection();
          }
          /**
           * blur event
           */

        }, {
          key: "onTextAreaBlur",
          value: function onTextAreaBlur(event) {
            /**
             * save selection if focussed out
             */
            this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);

            if (typeof this.onTouched === 'function') {
              this.onTouched();
            }

            if (event.relatedTarget !== null) {
              var parent = event.relatedTarget.parentElement;

              if (!parent.classList.contains('angular-editor-toolbar-set') && !parent.classList.contains('ae-picker')) {
                this.blurEvent.emit(event);
                this.focused = false;
              }
            }
          }
          /**
           *  focus the text area when the editor is focused
           */

        }, {
          key: "focus",
          value: function focus() {
            if (this.modeVisual) {
              this.textArea.nativeElement.focus();
            } else {
              var sourceText = this.doc.getElementById('sourceText' + this.id);
              sourceText.focus();
              this.focused = true;
            }
          }
          /**
           * Executed from the contenteditable section while the input property changes
           * @param element html element from contenteditable
           */

        }, {
          key: "onContentChange",
          value: function onContentChange(element) {
            var html = '';

            if (this.modeVisual) {
              html = element.innerHTML;
            } else {
              html = element.innerText;
            }

            if (!html || html === '<br>') {
              html = '';
            }

            if (typeof this.onChange === 'function') {
              this.onChange(this.config.sanitize || this.config.sanitize === undefined ? this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, html) : html);

              if (!html !== this.showPlaceholder) {
                this.togglePlaceholder(this.showPlaceholder);
              }
            }

            this.changed = true;
          }
          /**
           * Set the function to be called
           * when the control receives a change event.
           *
           * @param fn a function
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (e) {
              return e === '<br>' ? fn('') : fn(e);
            };
          }
          /**
           * Set the function to be called
           * when the control receives a touch event.
           *
           * @param fn a function
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Write a new value to the element.
           *
           * @param value value to be executed when there is a change in contenteditable
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if ((!value || value === '<br>' || value === '') !== this.showPlaceholder) {
              this.togglePlaceholder(this.showPlaceholder);
            }

            if (value === undefined || value === '' || value === '<br>') {
              value = null;
            }

            this.refreshView(value);
          }
          /**
           * refresh view/HTML of the editor
           *
           * @param value html string from the editor
           */

        }, {
          key: "refreshView",
          value: function refreshView(value) {
            var normalizedValue = value === null ? '' : value;
            this.r.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
            return;
          }
          /**
           * toggles placeholder based on input string
           *
           * @param value A HTML string from the editor
           */

        }, {
          key: "togglePlaceholder",
          value: function togglePlaceholder(value) {
            if (!value) {
              this.r.addClass(this.editorWrapper.nativeElement, 'show-placeholder');
              this.showPlaceholder = true;
            } else {
              this.r.removeClass(this.editorWrapper.nativeElement, 'show-placeholder');
              this.showPlaceholder = false;
            }
          }
          /**
           * Implements disabled state for this element
           *
           * @param isDisabled Disabled flag
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            var div = this.textArea.nativeElement;
            var action = isDisabled ? 'addClass' : 'removeClass';
            this.r[action](div, 'disabled');
            this.disabled = isDisabled;
          }
          /**
           * toggles editor mode based on bToSource bool
           *
           * @param bToSource A boolean value from the editor
           */

        }, {
          key: "toggleEditorMode",
          value: function toggleEditorMode(bToSource) {
            var _this45 = this;

            var oContent;
            var editableElement = this.textArea.nativeElement;

            if (bToSource) {
              oContent = this.r.createText(editableElement.innerHTML);
              this.r.setProperty(editableElement, 'innerHTML', '');
              this.r.setProperty(editableElement, 'contentEditable', false);
              var oPre = this.r.createElement('pre');
              this.r.setStyle(oPre, 'margin', '0');
              this.r.setStyle(oPre, 'outline', 'none');
              var oCode = this.r.createElement('code');
              this.r.setProperty(oCode, 'id', 'sourceText' + this.id);
              this.r.setStyle(oCode, 'display', 'block');
              this.r.setStyle(oCode, 'white-space', 'pre-wrap');
              this.r.setStyle(oCode, 'word-break', 'keep-all');
              this.r.setStyle(oCode, 'outline', 'none');
              this.r.setStyle(oCode, 'margin', '0');
              this.r.setStyle(oCode, 'background-color', '#fff5b9');
              this.r.setProperty(oCode, 'contentEditable', true);
              this.r.appendChild(oCode, oContent);
              this.focusInstance = this.r.listen(oCode, 'focus', function (event) {
                return _this45.onTextAreaFocus(event);
              });
              this.blurInstance = this.r.listen(oCode, 'blur', function (event) {
                return _this45.onTextAreaBlur(event);
              });
              this.r.appendChild(oPre, oCode);
              this.r.appendChild(editableElement, oPre); // ToDo move to service

              this.doc.execCommand('defaultParagraphSeparator', false, 'div');
              this.modeVisual = false;
              this.viewMode.emit(false);
              oCode.focus();
            } else {
              if (this.doc.querySelectorAll) {
                this.r.setProperty(editableElement, 'innerHTML', editableElement.innerText);
              } else {
                oContent = this.doc.createRange();
                oContent.selectNodeContents(editableElement.firstChild);
                this.r.setProperty(editableElement, 'innerHTML', oContent.toString());
              }

              this.r.setProperty(editableElement, 'contentEditable', true);
              this.modeVisual = true;
              this.viewMode.emit(true);
              this.onContentChange(editableElement);
              editableElement.focus();
            }

            this.editorToolbar.setEditorMode(!this.modeVisual);
          }
          /**
           * toggles editor buttons when cursor moved or positioning
           *
           * Send a node array from the contentEditable of the editor
           */

        }, {
          key: "exec",
          value: function exec() {
            this.editorToolbar.triggerButtons();
            var userSelection;

            if (this.doc.getSelection) {
              userSelection = this.doc.getSelection();
              this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
            }

            var a = userSelection.focusNode;
            var els = [];

            while (a && a.id !== 'editor') {
              els.unshift(a);
              a = a.parentNode;
            }

            this.editorToolbar.triggerBlocks(els);
          }
        }, {
          key: "configure",
          value: function configure() {
            this.editorService.uploadUrl = this.config.uploadUrl;
            this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;

            if (this.config.defaultParagraphSeparator) {
              this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
            }

            if (this.config.defaultFontName) {
              this.editorService.setFontName(this.config.defaultFontName);
            }

            if (this.config.defaultFontSize) {
              this.editorService.setFontSize(this.config.defaultFontSize);
            }
          }
        }, {
          key: "getFonts",
          value: function getFonts() {
            var fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
            return fonts.map(function (x) {
              return {
                label: x.name,
                value: x.name
              };
            });
          }
        }, {
          key: "getCustomTags",
          value: function getCustomTags() {
            var tags = ['span'];
            this.config.customClasses.forEach(function (x) {
              if (x.tag !== undefined) {
                if (!tags.includes(x.tag)) {
                  tags.push(x.tag);
                }
              }
            });
            return tags.join(',');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.blurInstance) {
              this.blurInstance();
            }

            if (this.focusInstance) {
              this.focusInstance();
            }
          }
        }, {
          key: "filterStyles",
          value: function filterStyles(html) {
            html = html.replace('position: fixed;', '');
            return html;
          }
        }]);

        return AngularEditorComponent;
      }();

      AngularEditorComponent.??fac = function AngularEditorComponent_Factory(t) {
        return new (t || AngularEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](AngularEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????injectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????injectAttribute"]('autofocus'));
      };

      AngularEditorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AngularEditorComponent,
        selectors: [["angular-editor"]],
        viewQuery: function AngularEditorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c2, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.textArea = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.editorWrapper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.editorToolbar = _t.first);
          }
        },
        hostVars: 1,
        hostBindings: function AngularEditorComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function AngularEditorComponent_focus_HostBindingHandler() {
              return ctx.onFocus();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("tabindex", ctx.tabindex);
          }
        },
        inputs: {
          id: "id",
          config: "config",
          placeholder: "placeholder",
          tabIndex: "tabIndex"
        },
        outputs: {
          viewMode: "viewMode",
          blurEvent: "blur",
          focusEvent: "focus",
          html: "html"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return AngularEditorComponent;
          }),
          multi: true
        }, AngularEditorService])],
        decls: 10,
        vars: 19,
        consts: [[1, "angular-editor"], ["angularEditor", ""], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute", 4, "ngIf"], [1, "angular-editor-wrapper"], ["editorWrapper", ""], [1, "angular-editor-textarea", 3, "input", "focus", "blur", "click", "keyup", "mouseout", "paste"], ["editor", ""], [1, "angular-editor-placeholder"], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute"], ["editorToolbar", ""]],
        template: function AngularEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AngularEditorComponent_angular_editor_toolbar_2_Template, 2, 9, "angular-editor-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function AngularEditorComponent_Template_div_input_5_listener($event) {
              return ctx.onContentChange($event.target);
            })("focus", function AngularEditorComponent_Template_div_focus_5_listener($event) {
              return ctx.onTextAreaFocus($event);
            })("blur", function AngularEditorComponent_Template_div_blur_5_listener($event) {
              return ctx.onTextAreaBlur($event);
            })("click", function AngularEditorComponent_Template_div_click_5_listener() {
              return ctx.exec();
            })("keyup", function AngularEditorComponent_Template_div_keyup_5_listener() {
              return ctx.exec();
            })("mouseout", function AngularEditorComponent_Template_div_mouseout_5_listener($event) {
              return ctx.onTextAreaMouseOut($event);
            })("paste", function AngularEditorComponent_Template_div_paste_5_listener($event) {
              return ctx.onPaste($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AngularEditorComponent_angular_editor_toolbar_9_Template, 2, 9, "angular-editor-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", ctx.config.width)("min-width", ctx.config.minWidth);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.config.toolbarPosition === "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("height", ctx.config.height)("min-height", ctx.config.minHeight)("max-height", ctx.config.maxHeight)("outline", ctx.config.outline === false ? "none" : undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("contenteditable", ctx.config.editable)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("translate", ctx.config.translate)("spellcheck", ctx.config.spellcheck);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.placeholder || ctx.config["placeholder"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.config.toolbarPosition === "bottom");
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], AngularEditorToolbarComponent];
        },
        styles: ["@charset \"UTF-8\";\n@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse[_ngcontent-%COMP%]{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:\"\uF000\"}.fa-music[_ngcontent-%COMP%]:before{content:\"\uF001\"}.fa-search[_ngcontent-%COMP%]:before{content:\"\uF002\"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:\"\uF003\"}.fa-heart[_ngcontent-%COMP%]:before{content:\"\uF004\"}.fa-star[_ngcontent-%COMP%]:before{content:\"\uF005\"}.fa-star-o[_ngcontent-%COMP%]:before{content:\"\uF006\"}.fa-user[_ngcontent-%COMP%]:before{content:\"\uF007\"}.fa-film[_ngcontent-%COMP%]:before{content:\"\uF008\"}.fa-th-large[_ngcontent-%COMP%]:before{content:\"\uF009\"}.fa-th[_ngcontent-%COMP%]:before{content:\"\uF00A\"}.fa-th-list[_ngcontent-%COMP%]:before{content:\"\uF00B\"}.fa-check[_ngcontent-%COMP%]:before{content:\"\uF00C\"}.fa-close[_ngcontent-%COMP%]:before, .fa-remove[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:\"\uF00D\"}.fa-search-plus[_ngcontent-%COMP%]:before{content:\"\uF00E\"}.fa-search-minus[_ngcontent-%COMP%]:before{content:\"\uF010\"}.fa-power-off[_ngcontent-%COMP%]:before{content:\"\uF011\"}.fa-signal[_ngcontent-%COMP%]:before{content:\"\uF012\"}.fa-cog[_ngcontent-%COMP%]:before, .fa-gear[_ngcontent-%COMP%]:before{content:\"\uF013\"}.fa-trash-o[_ngcontent-%COMP%]:before{content:\"\uF014\"}.fa-home[_ngcontent-%COMP%]:before{content:\"\uF015\"}.fa-file-o[_ngcontent-%COMP%]:before{content:\"\uF016\"}.fa-clock-o[_ngcontent-%COMP%]:before{content:\"\uF017\"}.fa-road[_ngcontent-%COMP%]:before{content:\"\uF018\"}.fa-download[_ngcontent-%COMP%]:before{content:\"\uF019\"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:\"\uF01A\"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:\"\uF01B\"}.fa-inbox[_ngcontent-%COMP%]:before{content:\"\uF01C\"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:\"\uF01D\"}.fa-repeat[_ngcontent-%COMP%]:before, .fa-rotate-right[_ngcontent-%COMP%]:before{content:\"\uF01E\"}.fa-refresh[_ngcontent-%COMP%]:before{content:\"\uF021\"}.fa-list-alt[_ngcontent-%COMP%]:before{content:\"\uF022\"}.fa-lock[_ngcontent-%COMP%]:before{content:\"\uF023\"}.fa-flag[_ngcontent-%COMP%]:before{content:\"\uF024\"}.fa-headphones[_ngcontent-%COMP%]:before{content:\"\uF025\"}.fa-volume-off[_ngcontent-%COMP%]:before{content:\"\uF026\"}.fa-volume-down[_ngcontent-%COMP%]:before{content:\"\uF027\"}.fa-volume-up[_ngcontent-%COMP%]:before{content:\"\uF028\"}.fa-qrcode[_ngcontent-%COMP%]:before{content:\"\uF029\"}.fa-barcode[_ngcontent-%COMP%]:before{content:\"\uF02A\"}.fa-tag[_ngcontent-%COMP%]:before{content:\"\uF02B\"}.fa-tags[_ngcontent-%COMP%]:before{content:\"\uF02C\"}.fa-book[_ngcontent-%COMP%]:before{content:\"\uF02D\"}.fa-bookmark[_ngcontent-%COMP%]:before{content:\"\uF02E\"}.fa-print[_ngcontent-%COMP%]:before{content:\"\uF02F\"}.fa-camera[_ngcontent-%COMP%]:before{content:\"\uF030\"}.fa-font[_ngcontent-%COMP%]:before{content:\"\uF031\"}.fa-bold[_ngcontent-%COMP%]:before{content:\"\uF032\"}.fa-italic[_ngcontent-%COMP%]:before{content:\"\uF033\"}.fa-text-height[_ngcontent-%COMP%]:before{content:\"\uF034\"}.fa-text-width[_ngcontent-%COMP%]:before{content:\"\uF035\"}.fa-align-left[_ngcontent-%COMP%]:before{content:\"\uF036\"}.fa-align-center[_ngcontent-%COMP%]:before{content:\"\uF037\"}.fa-align-right[_ngcontent-%COMP%]:before{content:\"\uF038\"}.fa-align-justify[_ngcontent-%COMP%]:before{content:\"\uF039\"}.fa-list[_ngcontent-%COMP%]:before{content:\"\uF03A\"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:\"\uF03B\"}.fa-indent[_ngcontent-%COMP%]:before{content:\"\uF03C\"}.fa-video-camera[_ngcontent-%COMP%]:before{content:\"\uF03D\"}.fa-image[_ngcontent-%COMP%]:before, .fa-photo[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:\"\uF03E\"}.fa-pencil[_ngcontent-%COMP%]:before{content:\"\uF040\"}.fa-map-marker[_ngcontent-%COMP%]:before{content:\"\uF041\"}.fa-adjust[_ngcontent-%COMP%]:before{content:\"\uF042\"}.fa-tint[_ngcontent-%COMP%]:before{content:\"\uF043\"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:\"\uF044\"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:\"\uF045\"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:\"\uF046\"}.fa-arrows[_ngcontent-%COMP%]:before{content:\"\uF047\"}.fa-step-backward[_ngcontent-%COMP%]:before{content:\"\uF048\"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:\"\uF049\"}.fa-backward[_ngcontent-%COMP%]:before{content:\"\uF04A\"}.fa-play[_ngcontent-%COMP%]:before{content:\"\uF04B\"}.fa-pause[_ngcontent-%COMP%]:before{content:\"\uF04C\"}.fa-stop[_ngcontent-%COMP%]:before{content:\"\uF04D\"}.fa-forward[_ngcontent-%COMP%]:before{content:\"\uF04E\"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:\"\uF050\"}.fa-step-forward[_ngcontent-%COMP%]:before{content:\"\uF051\"}.fa-eject[_ngcontent-%COMP%]:before{content:\"\uF052\"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:\"\uF053\"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:\"\uF054\"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:\"\uF055\"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:\"\uF056\"}.fa-times-circle[_ngcontent-%COMP%]:before{content:\"\uF057\"}.fa-check-circle[_ngcontent-%COMP%]:before{content:\"\uF058\"}.fa-question-circle[_ngcontent-%COMP%]:before{content:\"\uF059\"}.fa-info-circle[_ngcontent-%COMP%]:before{content:\"\uF05A\"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:\"\uF05B\"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05C\"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05D\"}.fa-ban[_ngcontent-%COMP%]:before{content:\"\uF05E\"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF060\"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF061\"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF062\"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF063\"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:\"\uF064\"}.fa-expand[_ngcontent-%COMP%]:before{content:\"\uF065\"}.fa-compress[_ngcontent-%COMP%]:before{content:\"\uF066\"}.fa-plus[_ngcontent-%COMP%]:before{content:\"\uF067\"}.fa-minus[_ngcontent-%COMP%]:before{content:\"\uF068\"}.fa-asterisk[_ngcontent-%COMP%]:before{content:\"\uF069\"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:\"\uF06A\"}.fa-gift[_ngcontent-%COMP%]:before{content:\"\uF06B\"}.fa-leaf[_ngcontent-%COMP%]:before{content:\"\uF06C\"}.fa-fire[_ngcontent-%COMP%]:before{content:\"\uF06D\"}.fa-eye[_ngcontent-%COMP%]:before{content:\"\uF06E\"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:\"\uF070\"}.fa-exclamation-triangle[_ngcontent-%COMP%]:before, .fa-warning[_ngcontent-%COMP%]:before{content:\"\uF071\"}.fa-plane[_ngcontent-%COMP%]:before{content:\"\uF072\"}.fa-calendar[_ngcontent-%COMP%]:before{content:\"\uF073\"}.fa-random[_ngcontent-%COMP%]:before{content:\"\uF074\"}.fa-comment[_ngcontent-%COMP%]:before{content:\"\uF075\"}.fa-magnet[_ngcontent-%COMP%]:before{content:\"\uF076\"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:\"\uF077\"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:\"\uF078\"}.fa-retweet[_ngcontent-%COMP%]:before{content:\"\uF079\"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:\"\uF07A\"}.fa-folder[_ngcontent-%COMP%]:before{content:\"\uF07B\"}.fa-folder-open[_ngcontent-%COMP%]:before{content:\"\uF07C\"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:\"\uF07D\"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:\"\uF07E\"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:\"\uF080\"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:\"\uF081\"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:\"\uF082\"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:\"\uF083\"}.fa-key[_ngcontent-%COMP%]:before{content:\"\uF084\"}.fa-cogs[_ngcontent-%COMP%]:before, .fa-gears[_ngcontent-%COMP%]:before{content:\"\uF085\"}.fa-comments[_ngcontent-%COMP%]:before{content:\"\uF086\"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:\"\uF087\"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:\"\uF088\"}.fa-star-half[_ngcontent-%COMP%]:before{content:\"\uF089\"}.fa-heart-o[_ngcontent-%COMP%]:before{content:\"\uF08A\"}.fa-sign-out[_ngcontent-%COMP%]:before{content:\"\uF08B\"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:\"\uF08C\"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:\"\uF08D\"}.fa-external-link[_ngcontent-%COMP%]:before{content:\"\uF08E\"}.fa-sign-in[_ngcontent-%COMP%]:before{content:\"\uF090\"}.fa-trophy[_ngcontent-%COMP%]:before{content:\"\uF091\"}.fa-github-square[_ngcontent-%COMP%]:before{content:\"\uF092\"}.fa-upload[_ngcontent-%COMP%]:before{content:\"\uF093\"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:\"\uF094\"}.fa-phone[_ngcontent-%COMP%]:before{content:\"\uF095\"}.fa-square-o[_ngcontent-%COMP%]:before{content:\"\uF096\"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:\"\uF097\"}.fa-phone-square[_ngcontent-%COMP%]:before{content:\"\uF098\"}.fa-twitter[_ngcontent-%COMP%]:before{content:\"\uF099\"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:\"\uF09A\"}.fa-github[_ngcontent-%COMP%]:before{content:\"\uF09B\"}.fa-unlock[_ngcontent-%COMP%]:before{content:\"\uF09C\"}.fa-credit-card[_ngcontent-%COMP%]:before{content:\"\uF09D\"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:\"\uF09E\"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:\"\uF0A0\"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:\"\uF0A1\"}.fa-bell[_ngcontent-%COMP%]:before{content:\"\uF0F3\"}.fa-certificate[_ngcontent-%COMP%]:before{content:\"\uF0A3\"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:\"\uF0A4\"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:\"\uF0A5\"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:\"\uF0A6\"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:\"\uF0A7\"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:\"\uF0A8\"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:\"\uF0A9\"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:\"\uF0AA\"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:\"\uF0AB\"}.fa-globe[_ngcontent-%COMP%]:before{content:\"\uF0AC\"}.fa-wrench[_ngcontent-%COMP%]:before{content:\"\uF0AD\"}.fa-tasks[_ngcontent-%COMP%]:before{content:\"\uF0AE\"}.fa-filter[_ngcontent-%COMP%]:before{content:\"\uF0B0\"}.fa-briefcase[_ngcontent-%COMP%]:before{content:\"\uF0B1\"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:\"\uF0B2\"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:\"\uF0C0\"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:\"\uF0C1\"}.fa-cloud[_ngcontent-%COMP%]:before{content:\"\uF0C2\"}.fa-flask[_ngcontent-%COMP%]:before{content:\"\uF0C3\"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:\"\uF0C4\"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:\"\uF0C5\"}.fa-paperclip[_ngcontent-%COMP%]:before{content:\"\uF0C6\"}.fa-floppy-o[_ngcontent-%COMP%]:before, .fa-save[_ngcontent-%COMP%]:before{content:\"\uF0C7\"}.fa-square[_ngcontent-%COMP%]:before{content:\"\uF0C8\"}.fa-bars[_ngcontent-%COMP%]:before, .fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before{content:\"\uF0C9\"}.fa-list-ul[_ngcontent-%COMP%]:before{content:\"\uF0CA\"}.fa-list-ol[_ngcontent-%COMP%]:before{content:\"\uF0CB\"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:\"\uF0CC\"}.fa-underline[_ngcontent-%COMP%]:before{content:\"\uF0CD\"}.fa-table[_ngcontent-%COMP%]:before{content:\"\uF0CE\"}.fa-magic[_ngcontent-%COMP%]:before{content:\"\uF0D0\"}.fa-truck[_ngcontent-%COMP%]:before{content:\"\uF0D1\"}.fa-pinterest[_ngcontent-%COMP%]:before{content:\"\uF0D2\"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:\"\uF0D3\"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0D4\"}.fa-google-plus[_ngcontent-%COMP%]:before{content:\"\uF0D5\"}.fa-money[_ngcontent-%COMP%]:before{content:\"\uF0D6\"}.fa-caret-down[_ngcontent-%COMP%]:before{content:\"\uF0D7\"}.fa-caret-up[_ngcontent-%COMP%]:before{content:\"\uF0D8\"}.fa-caret-left[_ngcontent-%COMP%]:before{content:\"\uF0D9\"}.fa-caret-right[_ngcontent-%COMP%]:before{content:\"\uF0DA\"}.fa-columns[_ngcontent-%COMP%]:before{content:\"\uF0DB\"}.fa-sort[_ngcontent-%COMP%]:before, .fa-unsorted[_ngcontent-%COMP%]:before{content:\"\uF0DC\"}.fa-sort-desc[_ngcontent-%COMP%]:before, .fa-sort-down[_ngcontent-%COMP%]:before{content:\"\uF0DD\"}.fa-sort-asc[_ngcontent-%COMP%]:before, .fa-sort-up[_ngcontent-%COMP%]:before{content:\"\uF0DE\"}.fa-envelope[_ngcontent-%COMP%]:before{content:\"\uF0E0\"}.fa-linkedin[_ngcontent-%COMP%]:before{content:\"\uF0E1\"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:\"\uF0E2\"}.fa-gavel[_ngcontent-%COMP%]:before, .fa-legal[_ngcontent-%COMP%]:before{content:\"\uF0E3\"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:\"\uF0E4\"}.fa-comment-o[_ngcontent-%COMP%]:before{content:\"\uF0E5\"}.fa-comments-o[_ngcontent-%COMP%]:before{content:\"\uF0E6\"}.fa-bolt[_ngcontent-%COMP%]:before, .fa-flash[_ngcontent-%COMP%]:before{content:\"\uF0E7\"}.fa-sitemap[_ngcontent-%COMP%]:before{content:\"\uF0E8\"}.fa-umbrella[_ngcontent-%COMP%]:before{content:\"\uF0E9\"}.fa-clipboard[_ngcontent-%COMP%]:before, .fa-paste[_ngcontent-%COMP%]:before{content:\"\uF0EA\"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:\"\uF0EB\"}.fa-exchange[_ngcontent-%COMP%]:before{content:\"\uF0EC\"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:\"\uF0ED\"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:\"\uF0EE\"}.fa-user-md[_ngcontent-%COMP%]:before{content:\"\uF0F0\"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:\"\uF0F1\"}.fa-suitcase[_ngcontent-%COMP%]:before{content:\"\uF0F2\"}.fa-bell-o[_ngcontent-%COMP%]:before{content:\"\uF0A2\"}.fa-coffee[_ngcontent-%COMP%]:before{content:\"\uF0F4\"}.fa-cutlery[_ngcontent-%COMP%]:before{content:\"\uF0F5\"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:\"\uF0F6\"}.fa-building-o[_ngcontent-%COMP%]:before{content:\"\uF0F7\"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:\"\uF0F8\"}.fa-ambulance[_ngcontent-%COMP%]:before{content:\"\uF0F9\"}.fa-medkit[_ngcontent-%COMP%]:before{content:\"\uF0FA\"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:\"\uF0FB\"}.fa-beer[_ngcontent-%COMP%]:before{content:\"\uF0FC\"}.fa-h-square[_ngcontent-%COMP%]:before{content:\"\uF0FD\"}.fa-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0FE\"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:\"\uF100\"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:\"\uF101\"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:\"\uF102\"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:\"\uF103\"}.fa-angle-left[_ngcontent-%COMP%]:before{content:\"\uF104\"}.fa-angle-right[_ngcontent-%COMP%]:before{content:\"\uF105\"}.fa-angle-up[_ngcontent-%COMP%]:before{content:\"\uF106\"}.fa-angle-down[_ngcontent-%COMP%]:before{content:\"\uF107\"}.fa-desktop[_ngcontent-%COMP%]:before{content:\"\uF108\"}.fa-laptop[_ngcontent-%COMP%]:before{content:\"\uF109\"}.fa-tablet[_ngcontent-%COMP%]:before{content:\"\uF10A\"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:\"\uF10B\"}.fa-circle-o[_ngcontent-%COMP%]:before{content:\"\uF10C\"}.fa-quote-left[_ngcontent-%COMP%]:before{content:\"\uF10D\"}.fa-quote-right[_ngcontent-%COMP%]:before{content:\"\uF10E\"}.fa-spinner[_ngcontent-%COMP%]:before{content:\"\uF110\"}.fa-circle[_ngcontent-%COMP%]:before{content:\"\uF111\"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:\"\uF112\"}.fa-github-alt[_ngcontent-%COMP%]:before{content:\"\uF113\"}.fa-folder-o[_ngcontent-%COMP%]:before{content:\"\uF114\"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:\"\uF115\"}.fa-smile-o[_ngcontent-%COMP%]:before{content:\"\uF118\"}.fa-frown-o[_ngcontent-%COMP%]:before{content:\"\uF119\"}.fa-meh-o[_ngcontent-%COMP%]:before{content:\"\uF11A\"}.fa-gamepad[_ngcontent-%COMP%]:before{content:\"\uF11B\"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:\"\uF11C\"}.fa-flag-o[_ngcontent-%COMP%]:before{content:\"\uF11D\"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:\"\uF11E\"}.fa-terminal[_ngcontent-%COMP%]:before{content:\"\uF120\"}.fa-code[_ngcontent-%COMP%]:before{content:\"\uF121\"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:\"\uF122\"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:\"\uF123\"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:\"\uF124\"}.fa-crop[_ngcontent-%COMP%]:before{content:\"\uF125\"}.fa-code-fork[_ngcontent-%COMP%]:before{content:\"\uF126\"}.fa-chain-broken[_ngcontent-%COMP%]:before, .fa-unlink[_ngcontent-%COMP%]:before{content:\"\uF127\"}.fa-question[_ngcontent-%COMP%]:before{content:\"\uF128\"}.fa-info[_ngcontent-%COMP%]:before{content:\"\uF129\"}.fa-exclamation[_ngcontent-%COMP%]:before{content:\"\uF12A\"}.fa-superscript[_ngcontent-%COMP%]:before{content:\"\uF12B\"}.fa-subscript[_ngcontent-%COMP%]:before{content:\"\uF12C\"}.fa-eraser[_ngcontent-%COMP%]:before{content:\"\uF12D\"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:\"\uF12E\"}.fa-microphone[_ngcontent-%COMP%]:before{content:\"\uF130\"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:\"\uF131\"}.fa-shield[_ngcontent-%COMP%]:before{content:\"\uF132\"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:\"\uF133\"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:\"\uF134\"}.fa-rocket[_ngcontent-%COMP%]:before{content:\"\uF135\"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:\"\uF136\"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:\"\uF137\"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:\"\uF138\"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:\"\uF139\"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:\"\uF13A\"}.fa-html5[_ngcontent-%COMP%]:before{content:\"\uF13B\"}.fa-css3[_ngcontent-%COMP%]:before{content:\"\uF13C\"}.fa-anchor[_ngcontent-%COMP%]:before{content:\"\uF13D\"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:\"\uF13E\"}.fa-bullseye[_ngcontent-%COMP%]:before{content:\"\uF140\"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:\"\uF141\"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:\"\uF142\"}.fa-rss-square[_ngcontent-%COMP%]:before{content:\"\uF143\"}.fa-play-circle[_ngcontent-%COMP%]:before{content:\"\uF144\"}.fa-ticket[_ngcontent-%COMP%]:before{content:\"\uF145\"}.fa-minus-square[_ngcontent-%COMP%]:before{content:\"\uF146\"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:\"\uF147\"}.fa-level-up[_ngcontent-%COMP%]:before{content:\"\uF148\"}.fa-level-down[_ngcontent-%COMP%]:before{content:\"\uF149\"}.fa-check-square[_ngcontent-%COMP%]:before{content:\"\uF14A\"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:\"\uF14B\"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:\"\uF14C\"}.fa-share-square[_ngcontent-%COMP%]:before{content:\"\uF14D\"}.fa-compass[_ngcontent-%COMP%]:before{content:\"\uF14E\"}.fa-caret-square-o-down[_ngcontent-%COMP%]:before, .fa-toggle-down[_ngcontent-%COMP%]:before{content:\"\uF150\"}.fa-caret-square-o-up[_ngcontent-%COMP%]:before, .fa-toggle-up[_ngcontent-%COMP%]:before{content:\"\uF151\"}.fa-caret-square-o-right[_ngcontent-%COMP%]:before, .fa-toggle-right[_ngcontent-%COMP%]:before{content:\"\uF152\"}.fa-eur[_ngcontent-%COMP%]:before, .fa-euro[_ngcontent-%COMP%]:before{content:\"\uF153\"}.fa-gbp[_ngcontent-%COMP%]:before{content:\"\uF154\"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:\"\uF155\"}.fa-inr[_ngcontent-%COMP%]:before, .fa-rupee[_ngcontent-%COMP%]:before{content:\"\uF156\"}.fa-cny[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before{content:\"\uF157\"}.fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before, .fa-ruble[_ngcontent-%COMP%]:before{content:\"\uF158\"}.fa-krw[_ngcontent-%COMP%]:before, .fa-won[_ngcontent-%COMP%]:before{content:\"\uF159\"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:\"\uF15A\"}.fa-file[_ngcontent-%COMP%]:before{content:\"\uF15B\"}.fa-file-text[_ngcontent-%COMP%]:before{content:\"\uF15C\"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:\"\uF15D\"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:\"\uF15E\"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:\"\uF160\"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:\"\uF161\"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:\"\uF162\"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:\"\uF163\"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:\"\uF164\"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:\"\uF165\"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:\"\uF166\"}.fa-youtube[_ngcontent-%COMP%]:before{content:\"\uF167\"}.fa-xing[_ngcontent-%COMP%]:before{content:\"\uF168\"}.fa-xing-square[_ngcontent-%COMP%]:before{content:\"\uF169\"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:\"\uF16A\"}.fa-dropbox[_ngcontent-%COMP%]:before{content:\"\uF16B\"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:\"\uF16C\"}.fa-instagram[_ngcontent-%COMP%]:before{content:\"\uF16D\"}.fa-flickr[_ngcontent-%COMP%]:before{content:\"\uF16E\"}.fa-adn[_ngcontent-%COMP%]:before{content:\"\uF170\"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:\"\uF171\"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:\"\uF172\"}.fa-tumblr[_ngcontent-%COMP%]:before{content:\"\uF173\"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:\"\uF174\"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF175\"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF176\"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF177\"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF178\"}.fa-apple[_ngcontent-%COMP%]:before{content:\"\uF179\"}.fa-windows[_ngcontent-%COMP%]:before{content:\"\uF17A\"}.fa-android[_ngcontent-%COMP%]:before{content:\"\uF17B\"}.fa-linux[_ngcontent-%COMP%]:before{content:\"\uF17C\"}.fa-dribbble[_ngcontent-%COMP%]:before{content:\"\uF17D\"}.fa-skype[_ngcontent-%COMP%]:before{content:\"\uF17E\"}.fa-foursquare[_ngcontent-%COMP%]:before{content:\"\uF180\"}.fa-trello[_ngcontent-%COMP%]:before{content:\"\uF181\"}.fa-female[_ngcontent-%COMP%]:before{content:\"\uF182\"}.fa-male[_ngcontent-%COMP%]:before{content:\"\uF183\"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:\"\uF184\"}.fa-sun-o[_ngcontent-%COMP%]:before{content:\"\uF185\"}.fa-moon-o[_ngcontent-%COMP%]:before{content:\"\uF186\"}.fa-archive[_ngcontent-%COMP%]:before{content:\"\uF187\"}.fa-bug[_ngcontent-%COMP%]:before{content:\"\uF188\"}.fa-vk[_ngcontent-%COMP%]:before{content:\"\uF189\"}.fa-weibo[_ngcontent-%COMP%]:before{content:\"\uF18A\"}.fa-renren[_ngcontent-%COMP%]:before{content:\"\uF18B\"}.fa-pagelines[_ngcontent-%COMP%]:before{content:\"\uF18C\"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:\"\uF18D\"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:\"\uF18E\"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:\"\uF190\"}.fa-caret-square-o-left[_ngcontent-%COMP%]:before, .fa-toggle-left[_ngcontent-%COMP%]:before{content:\"\uF191\"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:\"\uF192\"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:\"\uF193\"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:\"\uF194\"}.fa-try[_ngcontent-%COMP%]:before, .fa-turkish-lira[_ngcontent-%COMP%]:before{content:\"\uF195\"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:\"\uF196\"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:\"\uF197\"}.fa-slack[_ngcontent-%COMP%]:before{content:\"\uF198\"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:\"\uF199\"}.fa-wordpress[_ngcontent-%COMP%]:before{content:\"\uF19A\"}.fa-openid[_ngcontent-%COMP%]:before{content:\"\uF19B\"}.fa-bank[_ngcontent-%COMP%]:before, .fa-institution[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:\"\uF19C\"}.fa-graduation-cap[_ngcontent-%COMP%]:before, .fa-mortar-board[_ngcontent-%COMP%]:before{content:\"\uF19D\"}.fa-yahoo[_ngcontent-%COMP%]:before{content:\"\uF19E\"}.fa-google[_ngcontent-%COMP%]:before{content:\"\uF1A0\"}.fa-reddit[_ngcontent-%COMP%]:before{content:\"\uF1A1\"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:\"\uF1A2\"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:\"\uF1A3\"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:\"\uF1A4\"}.fa-delicious[_ngcontent-%COMP%]:before{content:\"\uF1A5\"}.fa-digg[_ngcontent-%COMP%]:before{content:\"\uF1A6\"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:\"\uF1A7\"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:\"\uF1A8\"}.fa-drupal[_ngcontent-%COMP%]:before{content:\"\uF1A9\"}.fa-joomla[_ngcontent-%COMP%]:before{content:\"\uF1AA\"}.fa-language[_ngcontent-%COMP%]:before{content:\"\uF1AB\"}.fa-fax[_ngcontent-%COMP%]:before{content:\"\uF1AC\"}.fa-building[_ngcontent-%COMP%]:before{content:\"\uF1AD\"}.fa-child[_ngcontent-%COMP%]:before{content:\"\uF1AE\"}.fa-paw[_ngcontent-%COMP%]:before{content:\"\uF1B0\"}.fa-spoon[_ngcontent-%COMP%]:before{content:\"\uF1B1\"}.fa-cube[_ngcontent-%COMP%]:before{content:\"\uF1B2\"}.fa-cubes[_ngcontent-%COMP%]:before{content:\"\uF1B3\"}.fa-behance[_ngcontent-%COMP%]:before{content:\"\uF1B4\"}.fa-behance-square[_ngcontent-%COMP%]:before{content:\"\uF1B5\"}.fa-steam[_ngcontent-%COMP%]:before{content:\"\uF1B6\"}.fa-steam-square[_ngcontent-%COMP%]:before{content:\"\uF1B7\"}.fa-recycle[_ngcontent-%COMP%]:before{content:\"\uF1B8\"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:\"\uF1B9\"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:\"\uF1BA\"}.fa-tree[_ngcontent-%COMP%]:before{content:\"\uF1BB\"}.fa-spotify[_ngcontent-%COMP%]:before{content:\"\uF1BC\"}.fa-deviantart[_ngcontent-%COMP%]:before{content:\"\uF1BD\"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:\"\uF1BE\"}.fa-database[_ngcontent-%COMP%]:before{content:\"\uF1C0\"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:\"\uF1C1\"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:\"\uF1C2\"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:\"\uF1C3\"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:\"\uF1C4\"}.fa-file-image-o[_ngcontent-%COMP%]:before, .fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before{content:\"\uF1C5\"}.fa-file-archive-o[_ngcontent-%COMP%]:before, .fa-file-zip-o[_ngcontent-%COMP%]:before{content:\"\uF1C6\"}.fa-file-audio-o[_ngcontent-%COMP%]:before, .fa-file-sound-o[_ngcontent-%COMP%]:before{content:\"\uF1C7\"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:\"\uF1C8\"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:\"\uF1C9\"}.fa-vine[_ngcontent-%COMP%]:before{content:\"\uF1CA\"}.fa-codepen[_ngcontent-%COMP%]:before{content:\"\uF1CB\"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:\"\uF1CC\"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before{content:\"\uF1CD\"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:\"\uF1CE\"}.fa-ra[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before{content:\"\uF1D0\"}.fa-empire[_ngcontent-%COMP%]:before, .fa-ge[_ngcontent-%COMP%]:before{content:\"\uF1D1\"}.fa-git-square[_ngcontent-%COMP%]:before{content:\"\uF1D2\"}.fa-git[_ngcontent-%COMP%]:before{content:\"\uF1D3\"}.fa-hacker-news[_ngcontent-%COMP%]:before, .fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before{content:\"\uF1D4\"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:\"\uF1D5\"}.fa-qq[_ngcontent-%COMP%]:before{content:\"\uF1D6\"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:\"\uF1D7\"}.fa-paper-plane[_ngcontent-%COMP%]:before, .fa-send[_ngcontent-%COMP%]:before{content:\"\uF1D8\"}.fa-paper-plane-o[_ngcontent-%COMP%]:before, .fa-send-o[_ngcontent-%COMP%]:before{content:\"\uF1D9\"}.fa-history[_ngcontent-%COMP%]:before{content:\"\uF1DA\"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:\"\uF1DB\"}.fa-header[_ngcontent-%COMP%]:before{content:\"\uF1DC\"}.fa-paragraph[_ngcontent-%COMP%]:before{content:\"\uF1DD\"}.fa-sliders[_ngcontent-%COMP%]:before{content:\"\uF1DE\"}.fa-share-alt[_ngcontent-%COMP%]:before{content:\"\uF1E0\"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:\"\uF1E1\"}.fa-bomb[_ngcontent-%COMP%]:before{content:\"\uF1E2\"}.fa-futbol-o[_ngcontent-%COMP%]:before, .fa-soccer-ball-o[_ngcontent-%COMP%]:before{content:\"\uF1E3\"}.fa-tty[_ngcontent-%COMP%]:before{content:\"\uF1E4\"}.fa-binoculars[_ngcontent-%COMP%]:before{content:\"\uF1E5\"}.fa-plug[_ngcontent-%COMP%]:before{content:\"\uF1E6\"}.fa-slideshare[_ngcontent-%COMP%]:before{content:\"\uF1E7\"}.fa-twitch[_ngcontent-%COMP%]:before{content:\"\uF1E8\"}.fa-yelp[_ngcontent-%COMP%]:before{content:\"\uF1E9\"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:\"\uF1EA\"}.fa-wifi[_ngcontent-%COMP%]:before{content:\"\uF1EB\"}.fa-calculator[_ngcontent-%COMP%]:before{content:\"\uF1EC\"}.fa-paypal[_ngcontent-%COMP%]:before{content:\"\uF1ED\"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:\"\uF1EE\"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:\"\uF1F0\"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:\"\uF1F1\"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:\"\uF1F2\"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:\"\uF1F3\"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:\"\uF1F4\"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:\"\uF1F5\"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:\"\uF1F6\"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:\"\uF1F7\"}.fa-trash[_ngcontent-%COMP%]:before{content:\"\uF1F8\"}.fa-copyright[_ngcontent-%COMP%]:before{content:\"\uF1F9\"}.fa-at[_ngcontent-%COMP%]:before{content:\"\uF1FA\"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:\"\uF1FB\"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:\"\uF1FC\"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:\"\uF1FD\"}.fa-area-chart[_ngcontent-%COMP%]:before{content:\"\uF1FE\"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:\"\uF200\"}.fa-line-chart[_ngcontent-%COMP%]:before{content:\"\uF201\"}.fa-lastfm[_ngcontent-%COMP%]:before{content:\"\uF202\"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:\"\uF203\"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:\"\uF204\"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:\"\uF205\"}.fa-bicycle[_ngcontent-%COMP%]:before{content:\"\uF206\"}.fa-bus[_ngcontent-%COMP%]:before{content:\"\uF207\"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:\"\uF208\"}.fa-angellist[_ngcontent-%COMP%]:before{content:\"\uF209\"}.fa-cc[_ngcontent-%COMP%]:before{content:\"\uF20A\"}.fa-ils[_ngcontent-%COMP%]:before, .fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before{content:\"\uF20B\"}.fa-meanpath[_ngcontent-%COMP%]:before{content:\"\uF20C\"}.fa-buysellads[_ngcontent-%COMP%]:before{content:\"\uF20D\"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:\"\uF20E\"}.fa-dashcube[_ngcontent-%COMP%]:before{content:\"\uF210\"}.fa-forumbee[_ngcontent-%COMP%]:before{content:\"\uF211\"}.fa-leanpub[_ngcontent-%COMP%]:before{content:\"\uF212\"}.fa-sellsy[_ngcontent-%COMP%]:before{content:\"\uF213\"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:\"\uF214\"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:\"\uF215\"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:\"\uF216\"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:\"\uF217\"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF218\"}.fa-diamond[_ngcontent-%COMP%]:before{content:\"\uF219\"}.fa-ship[_ngcontent-%COMP%]:before{content:\"\uF21A\"}.fa-user-secret[_ngcontent-%COMP%]:before{content:\"\uF21B\"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:\"\uF21C\"}.fa-street-view[_ngcontent-%COMP%]:before{content:\"\uF21D\"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:\"\uF21E\"}.fa-venus[_ngcontent-%COMP%]:before{content:\"\uF221\"}.fa-mars[_ngcontent-%COMP%]:before{content:\"\uF222\"}.fa-mercury[_ngcontent-%COMP%]:before{content:\"\uF223\"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:\"\uF224\"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:\"\uF225\"}.fa-venus-double[_ngcontent-%COMP%]:before{content:\"\uF226\"}.fa-mars-double[_ngcontent-%COMP%]:before{content:\"\uF227\"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:\"\uF228\"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:\"\uF229\"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:\"\uF22A\"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:\"\uF22B\"}.fa-neuter[_ngcontent-%COMP%]:before{content:\"\uF22C\"}.fa-genderless[_ngcontent-%COMP%]:before{content:\"\uF22D\"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:\"\uF230\"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:\"\uF231\"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:\"\uF232\"}.fa-server[_ngcontent-%COMP%]:before{content:\"\uF233\"}.fa-user-plus[_ngcontent-%COMP%]:before{content:\"\uF234\"}.fa-user-times[_ngcontent-%COMP%]:before{content:\"\uF235\"}.fa-bed[_ngcontent-%COMP%]:before, .fa-hotel[_ngcontent-%COMP%]:before{content:\"\uF236\"}.fa-viacoin[_ngcontent-%COMP%]:before{content:\"\uF237\"}.fa-train[_ngcontent-%COMP%]:before{content:\"\uF238\"}.fa-subway[_ngcontent-%COMP%]:before{content:\"\uF239\"}.fa-medium[_ngcontent-%COMP%]:before{content:\"\uF23A\"}.fa-y-combinator[_ngcontent-%COMP%]:before, .fa-yc[_ngcontent-%COMP%]:before{content:\"\uF23B\"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:\"\uF23C\"}.fa-opencart[_ngcontent-%COMP%]:before{content:\"\uF23D\"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:\"\uF23E\"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before{content:\"\uF240\"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF241\"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:\"\uF242\"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:\"\uF243\"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:\"\uF244\"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:\"\uF245\"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:\"\uF246\"}.fa-object-group[_ngcontent-%COMP%]:before{content:\"\uF247\"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:\"\uF248\"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:\"\uF249\"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:\"\uF24A\"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:\"\uF24B\"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:\"\uF24C\"}.fa-clone[_ngcontent-%COMP%]:before{content:\"\uF24D\"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:\"\uF24E\"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:\"\uF250\"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:\"\uF251\"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:\"\uF252\"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:\"\uF253\"}.fa-hourglass[_ngcontent-%COMP%]:before{content:\"\uF254\"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:\"\uF255\"}.fa-hand-paper-o[_ngcontent-%COMP%]:before, .fa-hand-stop-o[_ngcontent-%COMP%]:before{content:\"\uF256\"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:\"\uF257\"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:\"\uF258\"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:\"\uF259\"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:\"\uF25A\"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:\"\uF25B\"}.fa-trademark[_ngcontent-%COMP%]:before{content:\"\uF25C\"}.fa-registered[_ngcontent-%COMP%]:before{content:\"\uF25D\"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:\"\uF25E\"}.fa-gg[_ngcontent-%COMP%]:before{content:\"\uF260\"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:\"\uF261\"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:\"\uF262\"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:\"\uF263\"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:\"\uF264\"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:\"\uF265\"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:\"\uF266\"}.fa-safari[_ngcontent-%COMP%]:before{content:\"\uF267\"}.fa-chrome[_ngcontent-%COMP%]:before{content:\"\uF268\"}.fa-firefox[_ngcontent-%COMP%]:before{content:\"\uF269\"}.fa-opera[_ngcontent-%COMP%]:before{content:\"\uF26A\"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:\"\uF26B\"}.fa-television[_ngcontent-%COMP%]:before, .fa-tv[_ngcontent-%COMP%]:before{content:\"\uF26C\"}.fa-contao[_ngcontent-%COMP%]:before{content:\"\uF26D\"}.fa-500px[_ngcontent-%COMP%]:before{content:\"\uF26E\"}.fa-amazon[_ngcontent-%COMP%]:before{content:\"\uF270\"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:\"\uF271\"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:\"\uF272\"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:\"\uF273\"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:\"\uF274\"}.fa-industry[_ngcontent-%COMP%]:before{content:\"\uF275\"}.fa-map-pin[_ngcontent-%COMP%]:before{content:\"\uF276\"}.fa-map-signs[_ngcontent-%COMP%]:before{content:\"\uF277\"}.fa-map-o[_ngcontent-%COMP%]:before{content:\"\uF278\"}.fa-map[_ngcontent-%COMP%]:before{content:\"\uF279\"}.fa-commenting[_ngcontent-%COMP%]:before{content:\"\uF27A\"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:\"\uF27B\"}.fa-houzz[_ngcontent-%COMP%]:before{content:\"\uF27C\"}.fa-vimeo[_ngcontent-%COMP%]:before{content:\"\uF27D\"}.fa-black-tie[_ngcontent-%COMP%]:before{content:\"\uF27E\"}.fa-fonticons[_ngcontent-%COMP%]:before{content:\"\uF280\"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:\"\uF281\"}.fa-edge[_ngcontent-%COMP%]:before{content:\"\uF282\"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:\"\uF283\"}.fa-codiepie[_ngcontent-%COMP%]:before{content:\"\uF284\"}.fa-modx[_ngcontent-%COMP%]:before{content:\"\uF285\"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:\"\uF286\"}.fa-usb[_ngcontent-%COMP%]:before{content:\"\uF287\"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:\"\uF288\"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:\"\uF289\"}.fa-scribd[_ngcontent-%COMP%]:before{content:\"\uF28A\"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:\"\uF28B\"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28C\"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:\"\uF28D\"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28E\"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:\"\uF290\"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:\"\uF291\"}.fa-hashtag[_ngcontent-%COMP%]:before{content:\"\uF292\"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:\"\uF293\"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:\"\uF294\"}.fa-percent[_ngcontent-%COMP%]:before{content:\"\uF295\"}.fa-gitlab[_ngcontent-%COMP%]:before{content:\"\uF296\"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:\"\uF297\"}.fa-wpforms[_ngcontent-%COMP%]:before{content:\"\uF298\"}.fa-envira[_ngcontent-%COMP%]:before{content:\"\uF299\"}.fa-universal-access[_ngcontent-%COMP%]:before{content:\"\uF29A\"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:\"\uF29B\"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:\"\uF29C\"}.fa-blind[_ngcontent-%COMP%]:before{content:\"\uF29D\"}.fa-audio-description[_ngcontent-%COMP%]:before{content:\"\uF29E\"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:\"\uF2A0\"}.fa-braille[_ngcontent-%COMP%]:before{content:\"\uF2A1\"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before, .fa-asl-interpreting[_ngcontent-%COMP%]:before{content:\"\uF2A3\"}.fa-deaf[_ngcontent-%COMP%]:before, .fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before{content:\"\uF2A4\"}.fa-glide[_ngcontent-%COMP%]:before{content:\"\uF2A5\"}.fa-glide-g[_ngcontent-%COMP%]:before{content:\"\uF2A6\"}.fa-sign-language[_ngcontent-%COMP%]:before, .fa-signing[_ngcontent-%COMP%]:before{content:\"\uF2A7\"}.fa-low-vision[_ngcontent-%COMP%]:before{content:\"\uF2A8\"}.fa-viadeo[_ngcontent-%COMP%]:before{content:\"\uF2A9\"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:\"\uF2AA\"}.fa-snapchat[_ngcontent-%COMP%]:before{content:\"\uF2AB\"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:\"\uF2AC\"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:\"\uF2AD\"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:\"\uF2AE\"}.fa-first-order[_ngcontent-%COMP%]:before{content:\"\uF2B0\"}.fa-yoast[_ngcontent-%COMP%]:before{content:\"\uF2B1\"}.fa-themeisle[_ngcontent-%COMP%]:before{content:\"\uF2B2\"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:\"\uF2B3\"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:\"\uF2B4\"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:\"\uF2B5\"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:\"\uF2B6\"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:\"\uF2B7\"}.fa-linode[_ngcontent-%COMP%]:before{content:\"\uF2B8\"}.fa-address-book[_ngcontent-%COMP%]:before{content:\"\uF2B9\"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:\"\uF2BA\"}.fa-address-card[_ngcontent-%COMP%]:before, .fa-vcard[_ngcontent-%COMP%]:before{content:\"\uF2BB\"}.fa-address-card-o[_ngcontent-%COMP%]:before, .fa-vcard-o[_ngcontent-%COMP%]:before{content:\"\uF2BC\"}.fa-user-circle[_ngcontent-%COMP%]:before{content:\"\uF2BD\"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:\"\uF2BE\"}.fa-user-o[_ngcontent-%COMP%]:before{content:\"\uF2C0\"}.fa-id-badge[_ngcontent-%COMP%]:before{content:\"\uF2C1\"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:\"\uF2C2\"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:\"\uF2C3\"}.fa-quora[_ngcontent-%COMP%]:before{content:\"\uF2C4\"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:\"\uF2C5\"}.fa-telegram[_ngcontent-%COMP%]:before{content:\"\uF2C6\"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before{content:\"\uF2C7\"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF2C8\"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:\"\uF2C9\"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:\"\uF2CA\"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:\"\uF2CB\"}.fa-shower[_ngcontent-%COMP%]:before{content:\"\uF2CC\"}.fa-bath[_ngcontent-%COMP%]:before, .fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before{content:\"\uF2CD\"}.fa-podcast[_ngcontent-%COMP%]:before{content:\"\uF2CE\"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:\"\uF2D0\"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:\"\uF2D1\"}.fa-window-restore[_ngcontent-%COMP%]:before{content:\"\uF2D2\"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:\"\uF2D3\"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:\"\uF2D4\"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:\"\uF2D5\"}.fa-grav[_ngcontent-%COMP%]:before{content:\"\uF2D6\"}.fa-etsy[_ngcontent-%COMP%]:before{content:\"\uF2D7\"}.fa-imdb[_ngcontent-%COMP%]:before{content:\"\uF2D8\"}.fa-ravelry[_ngcontent-%COMP%]:before{content:\"\uF2D9\"}.fa-eercast[_ngcontent-%COMP%]:before{content:\"\uF2DA\"}.fa-microchip[_ngcontent-%COMP%]:before{content:\"\uF2DB\"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:\"\uF2DC\"}.fa-superpowers[_ngcontent-%COMP%]:before{content:\"\uF2DD\"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:\"\uF2DE\"}.fa-meetup[_ngcontent-%COMP%]:before{content:\"\uF2E0\"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]){display:inline-block}.angular-editor[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]     [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]     blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]     p{margin-bottom:0}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.show-placeholder[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:block}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5;pointer-events:none}"]
      });

      AngularEditorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: AngularEditorService
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['autofocus']
          }]
        }];
      };

      AngularEditorComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        html: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        textArea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['editor', {
            "static": true
          }]
        }],
        editorWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['editorWrapper', {
            "static": true
          }]
        }],
        editorToolbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['editorToolbar']
        }],
        viewMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        blurEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['blur']
        }],
        focusEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['focus']
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.tabindex']
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focus']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AngularEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'angular-editor',
            template: "<div\n     class=\"angular-editor\"\n     #angularEditor\n     [style.width]=\"config.width\"\n     [style.minWidth]=\"config.minWidth\"\n>\n     <angular-editor-toolbar\n          *ngIf=\"config.toolbarPosition === 'top'\"\n          #editorToolbar\n          [id]=\"id\"\n          [uploadUrl]=\"config.uploadUrl\"\n          [upload]=\"config.upload\"\n          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n          [fonts]=\"getFonts()\"\n          [customClasses]=\"config.customClasses\"\n          [defaultFontName]=\"config.defaultFontName\"\n          [defaultFontSize]=\"config.defaultFontSize\"\n          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n          (execute)=\"executeCommand($event)\"\n     ></angular-editor-toolbar>\n\n     <div\n          class=\"angular-editor-wrapper\"\n          #editorWrapper\n     >\n          <div\n               #editor\n               class=\"angular-editor-textarea\"\n               [attr.contenteditable]=\"config.editable\"\n               [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n               [attr.translate]=\"config.translate\"\n               [attr.spellcheck]=\"config.spellcheck\"\n               [style.height]=\"config.height\"\n               [style.minHeight]=\"config.minHeight\"\n               [style.maxHeight]=\"config.maxHeight\"\n               [style.outline]=\"config.outline === false ? 'none': undefined\"\n               (input)=\"onContentChange($event.target)\"\n               (focus)=\"onTextAreaFocus($event)\"\n               (blur)=\"onTextAreaBlur($event)\"\n               (click)=\"exec()\"\n               (keyup)=\"exec()\"\n               (mouseout)=\"onTextAreaMouseOut($event)\"\n               (paste)=\"onPaste($event)\"\n          >\n          </div>\n          <span class=\"angular-editor-placeholder\">{{ placeholder || config['placeholder'] }}</span>\n     </div>\n     <angular-editor-toolbar\n          *ngIf=\"config.toolbarPosition === 'bottom'\"\n          #editorToolbar\n          [id]=\"id\"\n          [uploadUrl]=\"config.uploadUrl\"\n          [upload]=\"config.upload\"\n          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n          [fonts]=\"getFonts()\"\n          [customClasses]=\"config.customClasses\"\n          [defaultFontName]=\"config.defaultFontName\"\n          [defaultFontSize]=\"config.defaultFontSize\"\n          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n          (execute)=\"executeCommand($event)\"\n     ></angular-editor-toolbar>\n</div>\n",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                return AngularEditorComponent;
              }),
              multi: true
            }, AngularEditorService],
            styles: ["@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]){display:inline-block}.angular-editor{position:relative}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: AngularEditorService
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['autofocus']
            }]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          viewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['blur']
          }],
          focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['focus']
          }],
          tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
          }],
          html: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          textArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['editor', {
              "static": true
            }]
          }],
          editorWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['editorWrapper', {
              "static": true
            }]
          }],
          editorToolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['editorToolbar']
          }]
        });
      })();

      var AngularEditorToolbarComponent = /*#__PURE__*/function () {
        function AngularEditorToolbarComponent(r, editorService, er, doc) {
          _classCallCheck(this, AngularEditorToolbarComponent);

          this.r = r;
          this.editorService = editorService;
          this.er = er;
          this.doc = doc;
          this.htmlMode = false;
          this.linkSelected = false;
          this.block = 'default';
          this.fontName = 'Times New Roman';
          this.fontSize = '3';
          this.headings = [{
            label: 'Heading 1',
            value: 'h1'
          }, {
            label: 'Heading 2',
            value: 'h2'
          }, {
            label: 'Heading 3',
            value: 'h3'
          }, {
            label: 'Heading 4',
            value: 'h4'
          }, {
            label: 'Heading 5',
            value: 'h5'
          }, {
            label: 'Heading 6',
            value: 'h6'
          }, {
            label: 'Heading 7',
            value: 'h7'
          }, {
            label: 'Paragraph',
            value: 'p'
          }, {
            label: 'Predefined',
            value: 'pre'
          }, {
            label: 'Standard',
            value: 'div'
          }, {
            label: 'default',
            value: 'default'
          }];
          this.fontSizes = [{
            label: '1',
            value: '1'
          }, {
            label: '2',
            value: '2'
          }, {
            label: '3',
            value: '3'
          }, {
            label: '4',
            value: '4'
          }, {
            label: '5',
            value: '5'
          }, {
            label: '6',
            value: '6'
          }, {
            label: '7',
            value: '7'
          }];
          this.customClassId = '-1';
          this.customClassList = [{
            label: '',
            value: ''
          }]; // uploadUrl: string;

          this.tagMap = {
            BLOCKQUOTE: 'indent',
            A: 'link'
          };
          this.select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];
          this.buttons = ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList', 'link'];
          this.fonts = [{
            label: '',
            value: ''
          }];
          this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(AngularEditorToolbarComponent, [{
          key: "customClasses",
          set: function set(classes) {
            if (classes) {
              this._customClasses = classes;
              this.customClassList = this._customClasses.map(function (x, i) {
                return {
                  label: x.name,
                  value: i.toString()
                };
              });
              this.customClassList.unshift({
                label: 'Clear Class',
                value: '-1'
              });
            }
          }
        }, {
          key: "defaultFontName",
          set: function set(value) {
            if (value) {
              this.fontName = value;
            }
          }
        }, {
          key: "defaultFontSize",
          set: function set(value) {
            if (value) {
              this.fontSize = value;
            }
          }
        }, {
          key: "isLinkButtonDisabled",
          get: function get() {
            return this.htmlMode || !Boolean(this.editorService.selectedText);
          }
          /**
           * Trigger command from editor header buttons
           * @param command string from toolbar buttons
           */

        }, {
          key: "triggerCommand",
          value: function triggerCommand(command) {
            this.execute.emit(command);
          }
          /**
           * highlight editor buttons when cursor moved or positioning
           */

        }, {
          key: "triggerButtons",
          value: function triggerButtons() {
            var _this46 = this;

            if (!this.showToolbar) {
              return;
            }

            this.buttons.forEach(function (e) {
              var result = _this46.doc.queryCommandState(e);

              var elementById = _this46.doc.getElementById(e + '-' + _this46.id);

              if (result) {
                _this46.r.addClass(elementById, 'active');
              } else {
                _this46.r.removeClass(elementById, 'active');
              }
            });
          }
          /**
           * trigger highlight editor buttons when cursor moved or positioning in block
           */

        }, {
          key: "triggerBlocks",
          value: function triggerBlocks(nodes) {
            var _this47 = this;

            if (!this.showToolbar) {
              return;
            }

            this.linkSelected = nodes.findIndex(function (x) {
              return x.nodeName === 'A';
            }) > -1;
            var found = false;
            this.select.forEach(function (y) {
              var node = nodes.find(function (x) {
                return x.nodeName === y;
              });

              if (node !== undefined && y === node.nodeName) {
                if (found === false) {
                  _this47.block = node.nodeName.toLowerCase();
                  found = true;
                }
              } else if (found === false) {
                _this47.block = 'default';
              }
            });
            found = false;

            if (this._customClasses) {
              this._customClasses.forEach(function (y, index) {
                var node = nodes.find(function (x) {
                  if (x instanceof Element) {
                    return x.className === y["class"];
                  }
                });

                if (node !== undefined) {
                  if (found === false) {
                    _this47.customClassId = index.toString();
                    found = true;
                  }
                } else if (found === false) {
                  _this47.customClassId = '-1';
                }
              });
            }

            Object.keys(this.tagMap).map(function (e) {
              var elementById = _this47.doc.getElementById(_this47.tagMap[e] + '-' + _this47.id);

              var node = nodes.find(function (x) {
                return x.nodeName === e;
              });

              if (node !== undefined && e === node.nodeName) {
                _this47.r.addClass(elementById, 'active');
              } else {
                _this47.r.removeClass(elementById, 'active');
              }
            });
            this.foreColour = this.doc.queryCommandValue('ForeColor');
            this.fontSize = this.doc.queryCommandValue('FontSize');
            this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
            this.backColor = this.doc.queryCommandValue('backColor');
          }
          /**
           * insert URL link
           */

        }, {
          key: "insertUrl",
          value: function insertUrl() {
            var url = 'https:\/\/';
            var selection = this.editorService.savedSelection;

            if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
              var parent = selection.commonAncestorContainer.parentElement;

              if (parent.href !== '') {
                url = parent.href;
              }
            }

            url = prompt('Insert URL link', url);

            if (url && url !== '' && url !== 'https://') {
              this.editorService.createLink(url);
            }
          }
          /**
           * insert Video link
           */

        }, {
          key: "insertVideo",
          value: function insertVideo() {
            this.execute.emit('');
            var url = prompt('Insert Video link', "https://");

            if (url && url !== '' && url !== "https://") {
              this.editorService.insertVideo(url);
            }
          }
          /** insert color */

        }, {
          key: "insertColor",
          value: function insertColor(color, where) {
            this.editorService.insertColor(color, where);
            this.execute.emit('');
          }
          /**
           * set font Name/family
           * @param foreColor string
           */

        }, {
          key: "setFontName",
          value: function setFontName(foreColor) {
            this.editorService.setFontName(foreColor);
            this.execute.emit('');
          }
          /**
           * set font Size
           * @param fontSize string
           */

        }, {
          key: "setFontSize",
          value: function setFontSize(fontSize) {
            this.editorService.setFontSize(fontSize);
            this.execute.emit('');
          }
          /**
           * toggle editor mode (WYSIWYG or SOURCE)
           * @param m boolean
           */

        }, {
          key: "setEditorMode",
          value: function setEditorMode(m) {
            var toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);

            if (m) {
              this.r.addClass(toggleEditorModeButton, 'active');
            } else {
              this.r.removeClass(toggleEditorModeButton, 'active');
            }

            this.htmlMode = m;
          }
          /**
           * Upload image when file is selected.
           */

        }, {
          key: "onFileChanged",
          value: function onFileChanged(event) {
            var _this48 = this;

            var file = event.target.files[0];

            if (file.type.includes('image/')) {
              if (this.upload) {
                this.upload(file).subscribe(function () {
                  return _this48.watchUploadImage;
                });
              } else if (this.uploadUrl) {
                this.editorService.uploadImage(file).subscribe(function () {
                  return _this48.watchUploadImage;
                });
              } else {
                var reader = new FileReader();

                reader.onload = function (e) {
                  var fr = e.currentTarget;

                  _this48.editorService.insertImage(fr.result.toString());
                };

                reader.readAsDataURL(file);
              }
            }
          }
        }, {
          key: "watchUploadImage",
          value: function watchUploadImage(response, event) {
            var imageUrl = response.body.imageUrl;
            this.editorService.insertImage(imageUrl);
            event.srcElement.value = null;
          }
          /**
           * Set custom class
           */

        }, {
          key: "setCustomClass",
          value: function setCustomClass(classId) {
            if (classId === '-1') {
              this.execute.emit('clear');
            } else {
              this.editorService.createCustomClass(this._customClasses[+classId]);
            }
          }
        }, {
          key: "isButtonHidden",
          value: function isButtonHidden(name) {
            if (!name) {
              return false;
            }

            if (!(this.hiddenButtons instanceof Array)) {
              return false;
            }

            var result;

            var _iterator = _createForOfIteratorHelper(this.hiddenButtons),
                _step2;

            try {
              for (_iterator.s(); !(_step2 = _iterator.n()).done;) {
                var arr = _step2.value;

                if (arr instanceof Array) {
                  result = arr.find(function (item) {
                    return item === name;
                  });
                }

                if (result) {
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return result !== undefined;
          }
        }, {
          key: "focus",
          value: function focus() {
            this.execute.emit('focus');
            console.log('focused');
          }
        }]);

        return AngularEditorToolbarComponent;
      }();

      AngularEditorToolbarComponent.??fac = function AngularEditorToolbarComponent_Factory(t) {
        return new (t || AngularEditorToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](AngularEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      AngularEditorToolbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AngularEditorToolbarComponent,
        selectors: [["angular-editor-toolbar"]],
        viewQuery: function AngularEditorToolbarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c3, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.myInputFile = _t.first);
          }
        },
        inputs: {
          fonts: "fonts",
          customClasses: "customClasses",
          defaultFontName: "defaultFontName",
          defaultFontSize: "defaultFontSize",
          id: "id",
          uploadUrl: "uploadUrl",
          upload: "upload",
          showToolbar: "showToolbar",
          hiddenButtons: "hiddenButtons"
        },
        outputs: {
          execute: "execute"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "angular-editor-toolbar", 4, "ngIf"], [1, "angular-editor-toolbar"], [1, "angular-editor-toolbar-set"], ["type", "button", "title", "Undo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-undo"], ["type", "button", "title", "Redo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-repeat"], ["type", "button", "title", "Bold", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-bold"], ["type", "button", "title", "Italic", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-italic"], ["type", "button", "title", "Underline", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-underline"], ["type", "button", "title", "Strikethrough", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-strikethrough"], ["type", "button", "title", "Subscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-subscript"], ["type", "button", "title", "Superscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-superscript"], ["type", "button", "title", "Justify Left", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-left"], ["type", "button", "title", "Justify Center", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-center"], ["type", "button", "title", "Justify Right", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-right"], ["type", "button", "title", "Justify Full", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-justify"], ["type", "button", "title", "Indent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-indent"], ["type", "button", "title", "Outdent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-outdent"], ["type", "button", "title", "Unordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ul"], ["type", "button", "title", "Ordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ol"], ["tabindex", "-1", 1, "select-heading", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font-size", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["type", "color", 2, "display", "none", 3, "change"], ["fgInput", ""], ["type", "button", "title", "Text Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "foreground"], [1, "fa", "fa-font"], ["bgInput", ""], ["type", "button", "title", "Background Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "background"], ["class", "angular-editor-toolbar-set", 4, "ngIf"], ["type", "button", "title", "Insert Link", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-link"], ["type", "button", "title", "Unlink", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-chain-broken"], ["accept", "image/*", "type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], ["type", "button", "title", "Insert Image", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-image"], ["type", "button", "title", "Insert Video", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-video-camera"], ["type", "button", "title", "Horizontal Line", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-minus"], ["type", "button", "title", "Clear Formatting", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-remove"], ["type", "button", "title", "HTML Code", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "hidden", "click"], [1, "fa", "fa-code"], ["tabindex", "-1", 1, "select-custom-style", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"]],
        template: function AngularEditorToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AngularEditorToolbarComponent_div_0_Template, 75, 83, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showToolbar);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], AeSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]];
        },
        styles: ["@charset \"UTF-8\";\n@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse[_ngcontent-%COMP%]{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:\"\uF000\"}.fa-music[_ngcontent-%COMP%]:before{content:\"\uF001\"}.fa-search[_ngcontent-%COMP%]:before{content:\"\uF002\"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:\"\uF003\"}.fa-heart[_ngcontent-%COMP%]:before{content:\"\uF004\"}.fa-star[_ngcontent-%COMP%]:before{content:\"\uF005\"}.fa-star-o[_ngcontent-%COMP%]:before{content:\"\uF006\"}.fa-user[_ngcontent-%COMP%]:before{content:\"\uF007\"}.fa-film[_ngcontent-%COMP%]:before{content:\"\uF008\"}.fa-th-large[_ngcontent-%COMP%]:before{content:\"\uF009\"}.fa-th[_ngcontent-%COMP%]:before{content:\"\uF00A\"}.fa-th-list[_ngcontent-%COMP%]:before{content:\"\uF00B\"}.fa-check[_ngcontent-%COMP%]:before{content:\"\uF00C\"}.fa-close[_ngcontent-%COMP%]:before, .fa-remove[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:\"\uF00D\"}.fa-search-plus[_ngcontent-%COMP%]:before{content:\"\uF00E\"}.fa-search-minus[_ngcontent-%COMP%]:before{content:\"\uF010\"}.fa-power-off[_ngcontent-%COMP%]:before{content:\"\uF011\"}.fa-signal[_ngcontent-%COMP%]:before{content:\"\uF012\"}.fa-cog[_ngcontent-%COMP%]:before, .fa-gear[_ngcontent-%COMP%]:before{content:\"\uF013\"}.fa-trash-o[_ngcontent-%COMP%]:before{content:\"\uF014\"}.fa-home[_ngcontent-%COMP%]:before{content:\"\uF015\"}.fa-file-o[_ngcontent-%COMP%]:before{content:\"\uF016\"}.fa-clock-o[_ngcontent-%COMP%]:before{content:\"\uF017\"}.fa-road[_ngcontent-%COMP%]:before{content:\"\uF018\"}.fa-download[_ngcontent-%COMP%]:before{content:\"\uF019\"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:\"\uF01A\"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:\"\uF01B\"}.fa-inbox[_ngcontent-%COMP%]:before{content:\"\uF01C\"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:\"\uF01D\"}.fa-repeat[_ngcontent-%COMP%]:before, .fa-rotate-right[_ngcontent-%COMP%]:before{content:\"\uF01E\"}.fa-refresh[_ngcontent-%COMP%]:before{content:\"\uF021\"}.fa-list-alt[_ngcontent-%COMP%]:before{content:\"\uF022\"}.fa-lock[_ngcontent-%COMP%]:before{content:\"\uF023\"}.fa-flag[_ngcontent-%COMP%]:before{content:\"\uF024\"}.fa-headphones[_ngcontent-%COMP%]:before{content:\"\uF025\"}.fa-volume-off[_ngcontent-%COMP%]:before{content:\"\uF026\"}.fa-volume-down[_ngcontent-%COMP%]:before{content:\"\uF027\"}.fa-volume-up[_ngcontent-%COMP%]:before{content:\"\uF028\"}.fa-qrcode[_ngcontent-%COMP%]:before{content:\"\uF029\"}.fa-barcode[_ngcontent-%COMP%]:before{content:\"\uF02A\"}.fa-tag[_ngcontent-%COMP%]:before{content:\"\uF02B\"}.fa-tags[_ngcontent-%COMP%]:before{content:\"\uF02C\"}.fa-book[_ngcontent-%COMP%]:before{content:\"\uF02D\"}.fa-bookmark[_ngcontent-%COMP%]:before{content:\"\uF02E\"}.fa-print[_ngcontent-%COMP%]:before{content:\"\uF02F\"}.fa-camera[_ngcontent-%COMP%]:before{content:\"\uF030\"}.fa-font[_ngcontent-%COMP%]:before{content:\"\uF031\"}.fa-bold[_ngcontent-%COMP%]:before{content:\"\uF032\"}.fa-italic[_ngcontent-%COMP%]:before{content:\"\uF033\"}.fa-text-height[_ngcontent-%COMP%]:before{content:\"\uF034\"}.fa-text-width[_ngcontent-%COMP%]:before{content:\"\uF035\"}.fa-align-left[_ngcontent-%COMP%]:before{content:\"\uF036\"}.fa-align-center[_ngcontent-%COMP%]:before{content:\"\uF037\"}.fa-align-right[_ngcontent-%COMP%]:before{content:\"\uF038\"}.fa-align-justify[_ngcontent-%COMP%]:before{content:\"\uF039\"}.fa-list[_ngcontent-%COMP%]:before{content:\"\uF03A\"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:\"\uF03B\"}.fa-indent[_ngcontent-%COMP%]:before{content:\"\uF03C\"}.fa-video-camera[_ngcontent-%COMP%]:before{content:\"\uF03D\"}.fa-image[_ngcontent-%COMP%]:before, .fa-photo[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:\"\uF03E\"}.fa-pencil[_ngcontent-%COMP%]:before{content:\"\uF040\"}.fa-map-marker[_ngcontent-%COMP%]:before{content:\"\uF041\"}.fa-adjust[_ngcontent-%COMP%]:before{content:\"\uF042\"}.fa-tint[_ngcontent-%COMP%]:before{content:\"\uF043\"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:\"\uF044\"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:\"\uF045\"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:\"\uF046\"}.fa-arrows[_ngcontent-%COMP%]:before{content:\"\uF047\"}.fa-step-backward[_ngcontent-%COMP%]:before{content:\"\uF048\"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:\"\uF049\"}.fa-backward[_ngcontent-%COMP%]:before{content:\"\uF04A\"}.fa-play[_ngcontent-%COMP%]:before{content:\"\uF04B\"}.fa-pause[_ngcontent-%COMP%]:before{content:\"\uF04C\"}.fa-stop[_ngcontent-%COMP%]:before{content:\"\uF04D\"}.fa-forward[_ngcontent-%COMP%]:before{content:\"\uF04E\"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:\"\uF050\"}.fa-step-forward[_ngcontent-%COMP%]:before{content:\"\uF051\"}.fa-eject[_ngcontent-%COMP%]:before{content:\"\uF052\"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:\"\uF053\"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:\"\uF054\"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:\"\uF055\"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:\"\uF056\"}.fa-times-circle[_ngcontent-%COMP%]:before{content:\"\uF057\"}.fa-check-circle[_ngcontent-%COMP%]:before{content:\"\uF058\"}.fa-question-circle[_ngcontent-%COMP%]:before{content:\"\uF059\"}.fa-info-circle[_ngcontent-%COMP%]:before{content:\"\uF05A\"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:\"\uF05B\"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05C\"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05D\"}.fa-ban[_ngcontent-%COMP%]:before{content:\"\uF05E\"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF060\"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF061\"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF062\"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF063\"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:\"\uF064\"}.fa-expand[_ngcontent-%COMP%]:before{content:\"\uF065\"}.fa-compress[_ngcontent-%COMP%]:before{content:\"\uF066\"}.fa-plus[_ngcontent-%COMP%]:before{content:\"\uF067\"}.fa-minus[_ngcontent-%COMP%]:before{content:\"\uF068\"}.fa-asterisk[_ngcontent-%COMP%]:before{content:\"\uF069\"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:\"\uF06A\"}.fa-gift[_ngcontent-%COMP%]:before{content:\"\uF06B\"}.fa-leaf[_ngcontent-%COMP%]:before{content:\"\uF06C\"}.fa-fire[_ngcontent-%COMP%]:before{content:\"\uF06D\"}.fa-eye[_ngcontent-%COMP%]:before{content:\"\uF06E\"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:\"\uF070\"}.fa-exclamation-triangle[_ngcontent-%COMP%]:before, .fa-warning[_ngcontent-%COMP%]:before{content:\"\uF071\"}.fa-plane[_ngcontent-%COMP%]:before{content:\"\uF072\"}.fa-calendar[_ngcontent-%COMP%]:before{content:\"\uF073\"}.fa-random[_ngcontent-%COMP%]:before{content:\"\uF074\"}.fa-comment[_ngcontent-%COMP%]:before{content:\"\uF075\"}.fa-magnet[_ngcontent-%COMP%]:before{content:\"\uF076\"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:\"\uF077\"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:\"\uF078\"}.fa-retweet[_ngcontent-%COMP%]:before{content:\"\uF079\"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:\"\uF07A\"}.fa-folder[_ngcontent-%COMP%]:before{content:\"\uF07B\"}.fa-folder-open[_ngcontent-%COMP%]:before{content:\"\uF07C\"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:\"\uF07D\"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:\"\uF07E\"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:\"\uF080\"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:\"\uF081\"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:\"\uF082\"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:\"\uF083\"}.fa-key[_ngcontent-%COMP%]:before{content:\"\uF084\"}.fa-cogs[_ngcontent-%COMP%]:before, .fa-gears[_ngcontent-%COMP%]:before{content:\"\uF085\"}.fa-comments[_ngcontent-%COMP%]:before{content:\"\uF086\"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:\"\uF087\"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:\"\uF088\"}.fa-star-half[_ngcontent-%COMP%]:before{content:\"\uF089\"}.fa-heart-o[_ngcontent-%COMP%]:before{content:\"\uF08A\"}.fa-sign-out[_ngcontent-%COMP%]:before{content:\"\uF08B\"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:\"\uF08C\"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:\"\uF08D\"}.fa-external-link[_ngcontent-%COMP%]:before{content:\"\uF08E\"}.fa-sign-in[_ngcontent-%COMP%]:before{content:\"\uF090\"}.fa-trophy[_ngcontent-%COMP%]:before{content:\"\uF091\"}.fa-github-square[_ngcontent-%COMP%]:before{content:\"\uF092\"}.fa-upload[_ngcontent-%COMP%]:before{content:\"\uF093\"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:\"\uF094\"}.fa-phone[_ngcontent-%COMP%]:before{content:\"\uF095\"}.fa-square-o[_ngcontent-%COMP%]:before{content:\"\uF096\"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:\"\uF097\"}.fa-phone-square[_ngcontent-%COMP%]:before{content:\"\uF098\"}.fa-twitter[_ngcontent-%COMP%]:before{content:\"\uF099\"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:\"\uF09A\"}.fa-github[_ngcontent-%COMP%]:before{content:\"\uF09B\"}.fa-unlock[_ngcontent-%COMP%]:before{content:\"\uF09C\"}.fa-credit-card[_ngcontent-%COMP%]:before{content:\"\uF09D\"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:\"\uF09E\"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:\"\uF0A0\"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:\"\uF0A1\"}.fa-bell[_ngcontent-%COMP%]:before{content:\"\uF0F3\"}.fa-certificate[_ngcontent-%COMP%]:before{content:\"\uF0A3\"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:\"\uF0A4\"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:\"\uF0A5\"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:\"\uF0A6\"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:\"\uF0A7\"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:\"\uF0A8\"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:\"\uF0A9\"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:\"\uF0AA\"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:\"\uF0AB\"}.fa-globe[_ngcontent-%COMP%]:before{content:\"\uF0AC\"}.fa-wrench[_ngcontent-%COMP%]:before{content:\"\uF0AD\"}.fa-tasks[_ngcontent-%COMP%]:before{content:\"\uF0AE\"}.fa-filter[_ngcontent-%COMP%]:before{content:\"\uF0B0\"}.fa-briefcase[_ngcontent-%COMP%]:before{content:\"\uF0B1\"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:\"\uF0B2\"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:\"\uF0C0\"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:\"\uF0C1\"}.fa-cloud[_ngcontent-%COMP%]:before{content:\"\uF0C2\"}.fa-flask[_ngcontent-%COMP%]:before{content:\"\uF0C3\"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:\"\uF0C4\"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:\"\uF0C5\"}.fa-paperclip[_ngcontent-%COMP%]:before{content:\"\uF0C6\"}.fa-floppy-o[_ngcontent-%COMP%]:before, .fa-save[_ngcontent-%COMP%]:before{content:\"\uF0C7\"}.fa-square[_ngcontent-%COMP%]:before{content:\"\uF0C8\"}.fa-bars[_ngcontent-%COMP%]:before, .fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before{content:\"\uF0C9\"}.fa-list-ul[_ngcontent-%COMP%]:before{content:\"\uF0CA\"}.fa-list-ol[_ngcontent-%COMP%]:before{content:\"\uF0CB\"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:\"\uF0CC\"}.fa-underline[_ngcontent-%COMP%]:before{content:\"\uF0CD\"}.fa-table[_ngcontent-%COMP%]:before{content:\"\uF0CE\"}.fa-magic[_ngcontent-%COMP%]:before{content:\"\uF0D0\"}.fa-truck[_ngcontent-%COMP%]:before{content:\"\uF0D1\"}.fa-pinterest[_ngcontent-%COMP%]:before{content:\"\uF0D2\"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:\"\uF0D3\"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0D4\"}.fa-google-plus[_ngcontent-%COMP%]:before{content:\"\uF0D5\"}.fa-money[_ngcontent-%COMP%]:before{content:\"\uF0D6\"}.fa-caret-down[_ngcontent-%COMP%]:before{content:\"\uF0D7\"}.fa-caret-up[_ngcontent-%COMP%]:before{content:\"\uF0D8\"}.fa-caret-left[_ngcontent-%COMP%]:before{content:\"\uF0D9\"}.fa-caret-right[_ngcontent-%COMP%]:before{content:\"\uF0DA\"}.fa-columns[_ngcontent-%COMP%]:before{content:\"\uF0DB\"}.fa-sort[_ngcontent-%COMP%]:before, .fa-unsorted[_ngcontent-%COMP%]:before{content:\"\uF0DC\"}.fa-sort-desc[_ngcontent-%COMP%]:before, .fa-sort-down[_ngcontent-%COMP%]:before{content:\"\uF0DD\"}.fa-sort-asc[_ngcontent-%COMP%]:before, .fa-sort-up[_ngcontent-%COMP%]:before{content:\"\uF0DE\"}.fa-envelope[_ngcontent-%COMP%]:before{content:\"\uF0E0\"}.fa-linkedin[_ngcontent-%COMP%]:before{content:\"\uF0E1\"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:\"\uF0E2\"}.fa-gavel[_ngcontent-%COMP%]:before, .fa-legal[_ngcontent-%COMP%]:before{content:\"\uF0E3\"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:\"\uF0E4\"}.fa-comment-o[_ngcontent-%COMP%]:before{content:\"\uF0E5\"}.fa-comments-o[_ngcontent-%COMP%]:before{content:\"\uF0E6\"}.fa-bolt[_ngcontent-%COMP%]:before, .fa-flash[_ngcontent-%COMP%]:before{content:\"\uF0E7\"}.fa-sitemap[_ngcontent-%COMP%]:before{content:\"\uF0E8\"}.fa-umbrella[_ngcontent-%COMP%]:before{content:\"\uF0E9\"}.fa-clipboard[_ngcontent-%COMP%]:before, .fa-paste[_ngcontent-%COMP%]:before{content:\"\uF0EA\"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:\"\uF0EB\"}.fa-exchange[_ngcontent-%COMP%]:before{content:\"\uF0EC\"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:\"\uF0ED\"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:\"\uF0EE\"}.fa-user-md[_ngcontent-%COMP%]:before{content:\"\uF0F0\"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:\"\uF0F1\"}.fa-suitcase[_ngcontent-%COMP%]:before{content:\"\uF0F2\"}.fa-bell-o[_ngcontent-%COMP%]:before{content:\"\uF0A2\"}.fa-coffee[_ngcontent-%COMP%]:before{content:\"\uF0F4\"}.fa-cutlery[_ngcontent-%COMP%]:before{content:\"\uF0F5\"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:\"\uF0F6\"}.fa-building-o[_ngcontent-%COMP%]:before{content:\"\uF0F7\"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:\"\uF0F8\"}.fa-ambulance[_ngcontent-%COMP%]:before{content:\"\uF0F9\"}.fa-medkit[_ngcontent-%COMP%]:before{content:\"\uF0FA\"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:\"\uF0FB\"}.fa-beer[_ngcontent-%COMP%]:before{content:\"\uF0FC\"}.fa-h-square[_ngcontent-%COMP%]:before{content:\"\uF0FD\"}.fa-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0FE\"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:\"\uF100\"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:\"\uF101\"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:\"\uF102\"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:\"\uF103\"}.fa-angle-left[_ngcontent-%COMP%]:before{content:\"\uF104\"}.fa-angle-right[_ngcontent-%COMP%]:before{content:\"\uF105\"}.fa-angle-up[_ngcontent-%COMP%]:before{content:\"\uF106\"}.fa-angle-down[_ngcontent-%COMP%]:before{content:\"\uF107\"}.fa-desktop[_ngcontent-%COMP%]:before{content:\"\uF108\"}.fa-laptop[_ngcontent-%COMP%]:before{content:\"\uF109\"}.fa-tablet[_ngcontent-%COMP%]:before{content:\"\uF10A\"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:\"\uF10B\"}.fa-circle-o[_ngcontent-%COMP%]:before{content:\"\uF10C\"}.fa-quote-left[_ngcontent-%COMP%]:before{content:\"\uF10D\"}.fa-quote-right[_ngcontent-%COMP%]:before{content:\"\uF10E\"}.fa-spinner[_ngcontent-%COMP%]:before{content:\"\uF110\"}.fa-circle[_ngcontent-%COMP%]:before{content:\"\uF111\"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:\"\uF112\"}.fa-github-alt[_ngcontent-%COMP%]:before{content:\"\uF113\"}.fa-folder-o[_ngcontent-%COMP%]:before{content:\"\uF114\"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:\"\uF115\"}.fa-smile-o[_ngcontent-%COMP%]:before{content:\"\uF118\"}.fa-frown-o[_ngcontent-%COMP%]:before{content:\"\uF119\"}.fa-meh-o[_ngcontent-%COMP%]:before{content:\"\uF11A\"}.fa-gamepad[_ngcontent-%COMP%]:before{content:\"\uF11B\"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:\"\uF11C\"}.fa-flag-o[_ngcontent-%COMP%]:before{content:\"\uF11D\"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:\"\uF11E\"}.fa-terminal[_ngcontent-%COMP%]:before{content:\"\uF120\"}.fa-code[_ngcontent-%COMP%]:before{content:\"\uF121\"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:\"\uF122\"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:\"\uF123\"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:\"\uF124\"}.fa-crop[_ngcontent-%COMP%]:before{content:\"\uF125\"}.fa-code-fork[_ngcontent-%COMP%]:before{content:\"\uF126\"}.fa-chain-broken[_ngcontent-%COMP%]:before, .fa-unlink[_ngcontent-%COMP%]:before{content:\"\uF127\"}.fa-question[_ngcontent-%COMP%]:before{content:\"\uF128\"}.fa-info[_ngcontent-%COMP%]:before{content:\"\uF129\"}.fa-exclamation[_ngcontent-%COMP%]:before{content:\"\uF12A\"}.fa-superscript[_ngcontent-%COMP%]:before{content:\"\uF12B\"}.fa-subscript[_ngcontent-%COMP%]:before{content:\"\uF12C\"}.fa-eraser[_ngcontent-%COMP%]:before{content:\"\uF12D\"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:\"\uF12E\"}.fa-microphone[_ngcontent-%COMP%]:before{content:\"\uF130\"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:\"\uF131\"}.fa-shield[_ngcontent-%COMP%]:before{content:\"\uF132\"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:\"\uF133\"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:\"\uF134\"}.fa-rocket[_ngcontent-%COMP%]:before{content:\"\uF135\"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:\"\uF136\"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:\"\uF137\"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:\"\uF138\"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:\"\uF139\"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:\"\uF13A\"}.fa-html5[_ngcontent-%COMP%]:before{content:\"\uF13B\"}.fa-css3[_ngcontent-%COMP%]:before{content:\"\uF13C\"}.fa-anchor[_ngcontent-%COMP%]:before{content:\"\uF13D\"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:\"\uF13E\"}.fa-bullseye[_ngcontent-%COMP%]:before{content:\"\uF140\"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:\"\uF141\"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:\"\uF142\"}.fa-rss-square[_ngcontent-%COMP%]:before{content:\"\uF143\"}.fa-play-circle[_ngcontent-%COMP%]:before{content:\"\uF144\"}.fa-ticket[_ngcontent-%COMP%]:before{content:\"\uF145\"}.fa-minus-square[_ngcontent-%COMP%]:before{content:\"\uF146\"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:\"\uF147\"}.fa-level-up[_ngcontent-%COMP%]:before{content:\"\uF148\"}.fa-level-down[_ngcontent-%COMP%]:before{content:\"\uF149\"}.fa-check-square[_ngcontent-%COMP%]:before{content:\"\uF14A\"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:\"\uF14B\"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:\"\uF14C\"}.fa-share-square[_ngcontent-%COMP%]:before{content:\"\uF14D\"}.fa-compass[_ngcontent-%COMP%]:before{content:\"\uF14E\"}.fa-caret-square-o-down[_ngcontent-%COMP%]:before, .fa-toggle-down[_ngcontent-%COMP%]:before{content:\"\uF150\"}.fa-caret-square-o-up[_ngcontent-%COMP%]:before, .fa-toggle-up[_ngcontent-%COMP%]:before{content:\"\uF151\"}.fa-caret-square-o-right[_ngcontent-%COMP%]:before, .fa-toggle-right[_ngcontent-%COMP%]:before{content:\"\uF152\"}.fa-eur[_ngcontent-%COMP%]:before, .fa-euro[_ngcontent-%COMP%]:before{content:\"\uF153\"}.fa-gbp[_ngcontent-%COMP%]:before{content:\"\uF154\"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:\"\uF155\"}.fa-inr[_ngcontent-%COMP%]:before, .fa-rupee[_ngcontent-%COMP%]:before{content:\"\uF156\"}.fa-cny[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before{content:\"\uF157\"}.fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before, .fa-ruble[_ngcontent-%COMP%]:before{content:\"\uF158\"}.fa-krw[_ngcontent-%COMP%]:before, .fa-won[_ngcontent-%COMP%]:before{content:\"\uF159\"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:\"\uF15A\"}.fa-file[_ngcontent-%COMP%]:before{content:\"\uF15B\"}.fa-file-text[_ngcontent-%COMP%]:before{content:\"\uF15C\"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:\"\uF15D\"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:\"\uF15E\"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:\"\uF160\"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:\"\uF161\"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:\"\uF162\"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:\"\uF163\"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:\"\uF164\"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:\"\uF165\"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:\"\uF166\"}.fa-youtube[_ngcontent-%COMP%]:before{content:\"\uF167\"}.fa-xing[_ngcontent-%COMP%]:before{content:\"\uF168\"}.fa-xing-square[_ngcontent-%COMP%]:before{content:\"\uF169\"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:\"\uF16A\"}.fa-dropbox[_ngcontent-%COMP%]:before{content:\"\uF16B\"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:\"\uF16C\"}.fa-instagram[_ngcontent-%COMP%]:before{content:\"\uF16D\"}.fa-flickr[_ngcontent-%COMP%]:before{content:\"\uF16E\"}.fa-adn[_ngcontent-%COMP%]:before{content:\"\uF170\"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:\"\uF171\"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:\"\uF172\"}.fa-tumblr[_ngcontent-%COMP%]:before{content:\"\uF173\"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:\"\uF174\"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF175\"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF176\"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF177\"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF178\"}.fa-apple[_ngcontent-%COMP%]:before{content:\"\uF179\"}.fa-windows[_ngcontent-%COMP%]:before{content:\"\uF17A\"}.fa-android[_ngcontent-%COMP%]:before{content:\"\uF17B\"}.fa-linux[_ngcontent-%COMP%]:before{content:\"\uF17C\"}.fa-dribbble[_ngcontent-%COMP%]:before{content:\"\uF17D\"}.fa-skype[_ngcontent-%COMP%]:before{content:\"\uF17E\"}.fa-foursquare[_ngcontent-%COMP%]:before{content:\"\uF180\"}.fa-trello[_ngcontent-%COMP%]:before{content:\"\uF181\"}.fa-female[_ngcontent-%COMP%]:before{content:\"\uF182\"}.fa-male[_ngcontent-%COMP%]:before{content:\"\uF183\"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:\"\uF184\"}.fa-sun-o[_ngcontent-%COMP%]:before{content:\"\uF185\"}.fa-moon-o[_ngcontent-%COMP%]:before{content:\"\uF186\"}.fa-archive[_ngcontent-%COMP%]:before{content:\"\uF187\"}.fa-bug[_ngcontent-%COMP%]:before{content:\"\uF188\"}.fa-vk[_ngcontent-%COMP%]:before{content:\"\uF189\"}.fa-weibo[_ngcontent-%COMP%]:before{content:\"\uF18A\"}.fa-renren[_ngcontent-%COMP%]:before{content:\"\uF18B\"}.fa-pagelines[_ngcontent-%COMP%]:before{content:\"\uF18C\"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:\"\uF18D\"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:\"\uF18E\"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:\"\uF190\"}.fa-caret-square-o-left[_ngcontent-%COMP%]:before, .fa-toggle-left[_ngcontent-%COMP%]:before{content:\"\uF191\"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:\"\uF192\"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:\"\uF193\"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:\"\uF194\"}.fa-try[_ngcontent-%COMP%]:before, .fa-turkish-lira[_ngcontent-%COMP%]:before{content:\"\uF195\"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:\"\uF196\"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:\"\uF197\"}.fa-slack[_ngcontent-%COMP%]:before{content:\"\uF198\"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:\"\uF199\"}.fa-wordpress[_ngcontent-%COMP%]:before{content:\"\uF19A\"}.fa-openid[_ngcontent-%COMP%]:before{content:\"\uF19B\"}.fa-bank[_ngcontent-%COMP%]:before, .fa-institution[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:\"\uF19C\"}.fa-graduation-cap[_ngcontent-%COMP%]:before, .fa-mortar-board[_ngcontent-%COMP%]:before{content:\"\uF19D\"}.fa-yahoo[_ngcontent-%COMP%]:before{content:\"\uF19E\"}.fa-google[_ngcontent-%COMP%]:before{content:\"\uF1A0\"}.fa-reddit[_ngcontent-%COMP%]:before{content:\"\uF1A1\"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:\"\uF1A2\"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:\"\uF1A3\"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:\"\uF1A4\"}.fa-delicious[_ngcontent-%COMP%]:before{content:\"\uF1A5\"}.fa-digg[_ngcontent-%COMP%]:before{content:\"\uF1A6\"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:\"\uF1A7\"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:\"\uF1A8\"}.fa-drupal[_ngcontent-%COMP%]:before{content:\"\uF1A9\"}.fa-joomla[_ngcontent-%COMP%]:before{content:\"\uF1AA\"}.fa-language[_ngcontent-%COMP%]:before{content:\"\uF1AB\"}.fa-fax[_ngcontent-%COMP%]:before{content:\"\uF1AC\"}.fa-building[_ngcontent-%COMP%]:before{content:\"\uF1AD\"}.fa-child[_ngcontent-%COMP%]:before{content:\"\uF1AE\"}.fa-paw[_ngcontent-%COMP%]:before{content:\"\uF1B0\"}.fa-spoon[_ngcontent-%COMP%]:before{content:\"\uF1B1\"}.fa-cube[_ngcontent-%COMP%]:before{content:\"\uF1B2\"}.fa-cubes[_ngcontent-%COMP%]:before{content:\"\uF1B3\"}.fa-behance[_ngcontent-%COMP%]:before{content:\"\uF1B4\"}.fa-behance-square[_ngcontent-%COMP%]:before{content:\"\uF1B5\"}.fa-steam[_ngcontent-%COMP%]:before{content:\"\uF1B6\"}.fa-steam-square[_ngcontent-%COMP%]:before{content:\"\uF1B7\"}.fa-recycle[_ngcontent-%COMP%]:before{content:\"\uF1B8\"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:\"\uF1B9\"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:\"\uF1BA\"}.fa-tree[_ngcontent-%COMP%]:before{content:\"\uF1BB\"}.fa-spotify[_ngcontent-%COMP%]:before{content:\"\uF1BC\"}.fa-deviantart[_ngcontent-%COMP%]:before{content:\"\uF1BD\"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:\"\uF1BE\"}.fa-database[_ngcontent-%COMP%]:before{content:\"\uF1C0\"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:\"\uF1C1\"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:\"\uF1C2\"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:\"\uF1C3\"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:\"\uF1C4\"}.fa-file-image-o[_ngcontent-%COMP%]:before, .fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before{content:\"\uF1C5\"}.fa-file-archive-o[_ngcontent-%COMP%]:before, .fa-file-zip-o[_ngcontent-%COMP%]:before{content:\"\uF1C6\"}.fa-file-audio-o[_ngcontent-%COMP%]:before, .fa-file-sound-o[_ngcontent-%COMP%]:before{content:\"\uF1C7\"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:\"\uF1C8\"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:\"\uF1C9\"}.fa-vine[_ngcontent-%COMP%]:before{content:\"\uF1CA\"}.fa-codepen[_ngcontent-%COMP%]:before{content:\"\uF1CB\"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:\"\uF1CC\"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before{content:\"\uF1CD\"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:\"\uF1CE\"}.fa-ra[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before{content:\"\uF1D0\"}.fa-empire[_ngcontent-%COMP%]:before, .fa-ge[_ngcontent-%COMP%]:before{content:\"\uF1D1\"}.fa-git-square[_ngcontent-%COMP%]:before{content:\"\uF1D2\"}.fa-git[_ngcontent-%COMP%]:before{content:\"\uF1D3\"}.fa-hacker-news[_ngcontent-%COMP%]:before, .fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before{content:\"\uF1D4\"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:\"\uF1D5\"}.fa-qq[_ngcontent-%COMP%]:before{content:\"\uF1D6\"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:\"\uF1D7\"}.fa-paper-plane[_ngcontent-%COMP%]:before, .fa-send[_ngcontent-%COMP%]:before{content:\"\uF1D8\"}.fa-paper-plane-o[_ngcontent-%COMP%]:before, .fa-send-o[_ngcontent-%COMP%]:before{content:\"\uF1D9\"}.fa-history[_ngcontent-%COMP%]:before{content:\"\uF1DA\"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:\"\uF1DB\"}.fa-header[_ngcontent-%COMP%]:before{content:\"\uF1DC\"}.fa-paragraph[_ngcontent-%COMP%]:before{content:\"\uF1DD\"}.fa-sliders[_ngcontent-%COMP%]:before{content:\"\uF1DE\"}.fa-share-alt[_ngcontent-%COMP%]:before{content:\"\uF1E0\"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:\"\uF1E1\"}.fa-bomb[_ngcontent-%COMP%]:before{content:\"\uF1E2\"}.fa-futbol-o[_ngcontent-%COMP%]:before, .fa-soccer-ball-o[_ngcontent-%COMP%]:before{content:\"\uF1E3\"}.fa-tty[_ngcontent-%COMP%]:before{content:\"\uF1E4\"}.fa-binoculars[_ngcontent-%COMP%]:before{content:\"\uF1E5\"}.fa-plug[_ngcontent-%COMP%]:before{content:\"\uF1E6\"}.fa-slideshare[_ngcontent-%COMP%]:before{content:\"\uF1E7\"}.fa-twitch[_ngcontent-%COMP%]:before{content:\"\uF1E8\"}.fa-yelp[_ngcontent-%COMP%]:before{content:\"\uF1E9\"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:\"\uF1EA\"}.fa-wifi[_ngcontent-%COMP%]:before{content:\"\uF1EB\"}.fa-calculator[_ngcontent-%COMP%]:before{content:\"\uF1EC\"}.fa-paypal[_ngcontent-%COMP%]:before{content:\"\uF1ED\"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:\"\uF1EE\"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:\"\uF1F0\"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:\"\uF1F1\"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:\"\uF1F2\"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:\"\uF1F3\"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:\"\uF1F4\"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:\"\uF1F5\"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:\"\uF1F6\"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:\"\uF1F7\"}.fa-trash[_ngcontent-%COMP%]:before{content:\"\uF1F8\"}.fa-copyright[_ngcontent-%COMP%]:before{content:\"\uF1F9\"}.fa-at[_ngcontent-%COMP%]:before{content:\"\uF1FA\"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:\"\uF1FB\"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:\"\uF1FC\"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:\"\uF1FD\"}.fa-area-chart[_ngcontent-%COMP%]:before{content:\"\uF1FE\"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:\"\uF200\"}.fa-line-chart[_ngcontent-%COMP%]:before{content:\"\uF201\"}.fa-lastfm[_ngcontent-%COMP%]:before{content:\"\uF202\"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:\"\uF203\"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:\"\uF204\"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:\"\uF205\"}.fa-bicycle[_ngcontent-%COMP%]:before{content:\"\uF206\"}.fa-bus[_ngcontent-%COMP%]:before{content:\"\uF207\"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:\"\uF208\"}.fa-angellist[_ngcontent-%COMP%]:before{content:\"\uF209\"}.fa-cc[_ngcontent-%COMP%]:before{content:\"\uF20A\"}.fa-ils[_ngcontent-%COMP%]:before, .fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before{content:\"\uF20B\"}.fa-meanpath[_ngcontent-%COMP%]:before{content:\"\uF20C\"}.fa-buysellads[_ngcontent-%COMP%]:before{content:\"\uF20D\"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:\"\uF20E\"}.fa-dashcube[_ngcontent-%COMP%]:before{content:\"\uF210\"}.fa-forumbee[_ngcontent-%COMP%]:before{content:\"\uF211\"}.fa-leanpub[_ngcontent-%COMP%]:before{content:\"\uF212\"}.fa-sellsy[_ngcontent-%COMP%]:before{content:\"\uF213\"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:\"\uF214\"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:\"\uF215\"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:\"\uF216\"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:\"\uF217\"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF218\"}.fa-diamond[_ngcontent-%COMP%]:before{content:\"\uF219\"}.fa-ship[_ngcontent-%COMP%]:before{content:\"\uF21A\"}.fa-user-secret[_ngcontent-%COMP%]:before{content:\"\uF21B\"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:\"\uF21C\"}.fa-street-view[_ngcontent-%COMP%]:before{content:\"\uF21D\"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:\"\uF21E\"}.fa-venus[_ngcontent-%COMP%]:before{content:\"\uF221\"}.fa-mars[_ngcontent-%COMP%]:before{content:\"\uF222\"}.fa-mercury[_ngcontent-%COMP%]:before{content:\"\uF223\"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:\"\uF224\"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:\"\uF225\"}.fa-venus-double[_ngcontent-%COMP%]:before{content:\"\uF226\"}.fa-mars-double[_ngcontent-%COMP%]:before{content:\"\uF227\"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:\"\uF228\"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:\"\uF229\"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:\"\uF22A\"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:\"\uF22B\"}.fa-neuter[_ngcontent-%COMP%]:before{content:\"\uF22C\"}.fa-genderless[_ngcontent-%COMP%]:before{content:\"\uF22D\"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:\"\uF230\"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:\"\uF231\"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:\"\uF232\"}.fa-server[_ngcontent-%COMP%]:before{content:\"\uF233\"}.fa-user-plus[_ngcontent-%COMP%]:before{content:\"\uF234\"}.fa-user-times[_ngcontent-%COMP%]:before{content:\"\uF235\"}.fa-bed[_ngcontent-%COMP%]:before, .fa-hotel[_ngcontent-%COMP%]:before{content:\"\uF236\"}.fa-viacoin[_ngcontent-%COMP%]:before{content:\"\uF237\"}.fa-train[_ngcontent-%COMP%]:before{content:\"\uF238\"}.fa-subway[_ngcontent-%COMP%]:before{content:\"\uF239\"}.fa-medium[_ngcontent-%COMP%]:before{content:\"\uF23A\"}.fa-y-combinator[_ngcontent-%COMP%]:before, .fa-yc[_ngcontent-%COMP%]:before{content:\"\uF23B\"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:\"\uF23C\"}.fa-opencart[_ngcontent-%COMP%]:before{content:\"\uF23D\"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:\"\uF23E\"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before{content:\"\uF240\"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF241\"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:\"\uF242\"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:\"\uF243\"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:\"\uF244\"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:\"\uF245\"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:\"\uF246\"}.fa-object-group[_ngcontent-%COMP%]:before{content:\"\uF247\"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:\"\uF248\"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:\"\uF249\"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:\"\uF24A\"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:\"\uF24B\"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:\"\uF24C\"}.fa-clone[_ngcontent-%COMP%]:before{content:\"\uF24D\"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:\"\uF24E\"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:\"\uF250\"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:\"\uF251\"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:\"\uF252\"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:\"\uF253\"}.fa-hourglass[_ngcontent-%COMP%]:before{content:\"\uF254\"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:\"\uF255\"}.fa-hand-paper-o[_ngcontent-%COMP%]:before, .fa-hand-stop-o[_ngcontent-%COMP%]:before{content:\"\uF256\"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:\"\uF257\"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:\"\uF258\"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:\"\uF259\"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:\"\uF25A\"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:\"\uF25B\"}.fa-trademark[_ngcontent-%COMP%]:before{content:\"\uF25C\"}.fa-registered[_ngcontent-%COMP%]:before{content:\"\uF25D\"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:\"\uF25E\"}.fa-gg[_ngcontent-%COMP%]:before{content:\"\uF260\"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:\"\uF261\"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:\"\uF262\"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:\"\uF263\"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:\"\uF264\"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:\"\uF265\"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:\"\uF266\"}.fa-safari[_ngcontent-%COMP%]:before{content:\"\uF267\"}.fa-chrome[_ngcontent-%COMP%]:before{content:\"\uF268\"}.fa-firefox[_ngcontent-%COMP%]:before{content:\"\uF269\"}.fa-opera[_ngcontent-%COMP%]:before{content:\"\uF26A\"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:\"\uF26B\"}.fa-television[_ngcontent-%COMP%]:before, .fa-tv[_ngcontent-%COMP%]:before{content:\"\uF26C\"}.fa-contao[_ngcontent-%COMP%]:before{content:\"\uF26D\"}.fa-500px[_ngcontent-%COMP%]:before{content:\"\uF26E\"}.fa-amazon[_ngcontent-%COMP%]:before{content:\"\uF270\"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:\"\uF271\"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:\"\uF272\"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:\"\uF273\"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:\"\uF274\"}.fa-industry[_ngcontent-%COMP%]:before{content:\"\uF275\"}.fa-map-pin[_ngcontent-%COMP%]:before{content:\"\uF276\"}.fa-map-signs[_ngcontent-%COMP%]:before{content:\"\uF277\"}.fa-map-o[_ngcontent-%COMP%]:before{content:\"\uF278\"}.fa-map[_ngcontent-%COMP%]:before{content:\"\uF279\"}.fa-commenting[_ngcontent-%COMP%]:before{content:\"\uF27A\"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:\"\uF27B\"}.fa-houzz[_ngcontent-%COMP%]:before{content:\"\uF27C\"}.fa-vimeo[_ngcontent-%COMP%]:before{content:\"\uF27D\"}.fa-black-tie[_ngcontent-%COMP%]:before{content:\"\uF27E\"}.fa-fonticons[_ngcontent-%COMP%]:before{content:\"\uF280\"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:\"\uF281\"}.fa-edge[_ngcontent-%COMP%]:before{content:\"\uF282\"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:\"\uF283\"}.fa-codiepie[_ngcontent-%COMP%]:before{content:\"\uF284\"}.fa-modx[_ngcontent-%COMP%]:before{content:\"\uF285\"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:\"\uF286\"}.fa-usb[_ngcontent-%COMP%]:before{content:\"\uF287\"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:\"\uF288\"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:\"\uF289\"}.fa-scribd[_ngcontent-%COMP%]:before{content:\"\uF28A\"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:\"\uF28B\"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28C\"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:\"\uF28D\"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28E\"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:\"\uF290\"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:\"\uF291\"}.fa-hashtag[_ngcontent-%COMP%]:before{content:\"\uF292\"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:\"\uF293\"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:\"\uF294\"}.fa-percent[_ngcontent-%COMP%]:before{content:\"\uF295\"}.fa-gitlab[_ngcontent-%COMP%]:before{content:\"\uF296\"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:\"\uF297\"}.fa-wpforms[_ngcontent-%COMP%]:before{content:\"\uF298\"}.fa-envira[_ngcontent-%COMP%]:before{content:\"\uF299\"}.fa-universal-access[_ngcontent-%COMP%]:before{content:\"\uF29A\"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:\"\uF29B\"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:\"\uF29C\"}.fa-blind[_ngcontent-%COMP%]:before{content:\"\uF29D\"}.fa-audio-description[_ngcontent-%COMP%]:before{content:\"\uF29E\"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:\"\uF2A0\"}.fa-braille[_ngcontent-%COMP%]:before{content:\"\uF2A1\"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before, .fa-asl-interpreting[_ngcontent-%COMP%]:before{content:\"\uF2A3\"}.fa-deaf[_ngcontent-%COMP%]:before, .fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before{content:\"\uF2A4\"}.fa-glide[_ngcontent-%COMP%]:before{content:\"\uF2A5\"}.fa-glide-g[_ngcontent-%COMP%]:before{content:\"\uF2A6\"}.fa-sign-language[_ngcontent-%COMP%]:before, .fa-signing[_ngcontent-%COMP%]:before{content:\"\uF2A7\"}.fa-low-vision[_ngcontent-%COMP%]:before{content:\"\uF2A8\"}.fa-viadeo[_ngcontent-%COMP%]:before{content:\"\uF2A9\"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:\"\uF2AA\"}.fa-snapchat[_ngcontent-%COMP%]:before{content:\"\uF2AB\"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:\"\uF2AC\"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:\"\uF2AD\"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:\"\uF2AE\"}.fa-first-order[_ngcontent-%COMP%]:before{content:\"\uF2B0\"}.fa-yoast[_ngcontent-%COMP%]:before{content:\"\uF2B1\"}.fa-themeisle[_ngcontent-%COMP%]:before{content:\"\uF2B2\"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:\"\uF2B3\"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:\"\uF2B4\"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:\"\uF2B5\"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:\"\uF2B6\"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:\"\uF2B7\"}.fa-linode[_ngcontent-%COMP%]:before{content:\"\uF2B8\"}.fa-address-book[_ngcontent-%COMP%]:before{content:\"\uF2B9\"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:\"\uF2BA\"}.fa-address-card[_ngcontent-%COMP%]:before, .fa-vcard[_ngcontent-%COMP%]:before{content:\"\uF2BB\"}.fa-address-card-o[_ngcontent-%COMP%]:before, .fa-vcard-o[_ngcontent-%COMP%]:before{content:\"\uF2BC\"}.fa-user-circle[_ngcontent-%COMP%]:before{content:\"\uF2BD\"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:\"\uF2BE\"}.fa-user-o[_ngcontent-%COMP%]:before{content:\"\uF2C0\"}.fa-id-badge[_ngcontent-%COMP%]:before{content:\"\uF2C1\"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:\"\uF2C2\"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:\"\uF2C3\"}.fa-quora[_ngcontent-%COMP%]:before{content:\"\uF2C4\"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:\"\uF2C5\"}.fa-telegram[_ngcontent-%COMP%]:before{content:\"\uF2C6\"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before{content:\"\uF2C7\"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF2C8\"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:\"\uF2C9\"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:\"\uF2CA\"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:\"\uF2CB\"}.fa-shower[_ngcontent-%COMP%]:before{content:\"\uF2CC\"}.fa-bath[_ngcontent-%COMP%]:before, .fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before{content:\"\uF2CD\"}.fa-podcast[_ngcontent-%COMP%]:before{content:\"\uF2CE\"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:\"\uF2D0\"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:\"\uF2D1\"}.fa-window-restore[_ngcontent-%COMP%]:before{content:\"\uF2D2\"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:\"\uF2D3\"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:\"\uF2D4\"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:\"\uF2D5\"}.fa-grav[_ngcontent-%COMP%]:before{content:\"\uF2D6\"}.fa-etsy[_ngcontent-%COMP%]:before{content:\"\uF2D7\"}.fa-imdb[_ngcontent-%COMP%]:before{content:\"\uF2D8\"}.fa-ravelry[_ngcontent-%COMP%]:before{content:\"\uF2D9\"}.fa-eercast[_ngcontent-%COMP%]:before{content:\"\uF2DA\"}.fa-microchip[_ngcontent-%COMP%]:before{content:\"\uF2DB\"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:\"\uF2DC\"}.fa-superpowers[_ngcontent-%COMP%]:before{content:\"\uF2DD\"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:\"\uF2DE\"}.fa-meetup[_ngcontent-%COMP%]:before{content:\"\uF2E0\"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]), .select-button[_ngcontent-%COMP%]{display:inline-block}.select-button.disabled[_ngcontent-%COMP%]{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}"]
      });

      AngularEditorToolbarComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: AngularEditorService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };

      AngularEditorToolbarComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        uploadUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        upload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showToolbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fonts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultFontName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hiddenButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        execute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        myInputFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileInput', {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AngularEditorToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'angular-editor-toolbar',
            template: "<div class=\"angular-editor-toolbar\" *ngIf=\"showToolbar\">\n  <div class=\"angular-editor-toolbar-set\">\n    <button type=\"button\" title=\"Undo\" class=\"angular-editor-button\" (click)=\"triggerCommand('undo')\"\n            [hidden]=\"isButtonHidden('undo')\" tabindex=\"-1\"><i\n      class='fa fa-undo'></i></button>\n    <button type=\"button\" title=\"Redo\" class=\"angular-editor-button\" (click)=\"triggerCommand('redo')\"\n            [hidden]=\"isButtonHidden('redo')\" tabindex=\"-1\"><i\n      class='fa fa-repeat'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'bold-'+id\" type=\"button\" title=\"Bold\" class=\"angular-editor-button\" (click)=\"triggerCommand('bold')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('bold')\" tabindex=\"-1\"><i class='fa fa-bold'></i></button>\n    <button [id]=\"'italic-'+id\" type=\"button\" title=\"Italic\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('italic')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('italic')\" tabindex=\"-1\"><i class='fa fa-italic'></i>\n    </button>\n    <button [id]=\"'underline-'+id\" type=\"button\" title=\"Underline\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('underline')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('underline')\"\n            tabindex=\"-1\"><i class='fa fa-underline'></i></button>\n    <button [id]=\"'strikeThrough-'+id\" type=\"button\" title=\"Strikethrough\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('strikeThrough')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('strikeThrough')\"\n            tabindex=\"-1\"><i class='fa fa-strikethrough'></i></button>\n    <button [id]=\"'subscript-'+id\" type=\"button\" title=\"Subscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('subscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('subscript')\"\n            tabindex=\"-1\"><i class='fa fa-subscript'></i></button>\n    <button [id]=\"'superscript-'+id\" type=\"button\" title=\"Superscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('superscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('superscript')\"\n            tabindex=\"-1\"><i class='fa fa-superscript'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'justifyLeft-'+id\" type=\"button\" title=\"Justify Left\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyLeft')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyLeft')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-left'></i></button>\n    <button [id]=\"'justifyCenter-'+id\" type=\"button\" title=\"Justify Center\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyCenter')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyCenter')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-center'></i></button>\n    <button [id]=\"'justifyRight-'+id\" type=\"button\" title=\"Justify Right\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyRight')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyRight')\"\n            tabindex=\"-1\">\n      <i class='fa fa-align-right'></i></button>\n    <button [id]=\"'justifyFull-'+id\" type=\"button\" title=\"Justify Full\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyFull')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyFull')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-justify'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'indent-'+id\" type=\"button\" title=\"Indent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('indent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('indent')\" tabindex=\"-1\"><i\n      class='fa fa-indent'></i></button>\n    <button [id]=\"'outdent-'+id\" type=\"button\" title=\"Outdent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('outdent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('outdent')\" tabindex=\"-1\"><i\n      class='fa fa-outdent'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'insertUnorderedList-'+id\" type=\"button\" title=\"Unordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertUnorderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertUnorderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ul'></i></button>\n    <button [id]=\"'insertOrderedList-'+id\" type=\"button\" title=\"Ordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertOrderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertOrderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ol'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-heading\" [options]=\"headings\"\n               [(ngModel)]=\"block\"\n               (change)=\"triggerCommand(block)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('heading')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font\" [options]=\"fonts\"\n               [(ngModel)]=\"fontName\"\n               (change)=\"setFontName(fontName)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontName')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font-size\" [options]=\"fontSizes\"\n               [(ngModel)]=\"fontSize\"\n               (change)=\"setFontSize(fontSize)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontSize')\"\n               tabindex=\"-1\">\n    </ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(fgInput.value, 'textColor')\"\n      #fgInput>\n    <button [id]=\"'foregroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; fgInput.click()\"\n            title=\"Text Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('textColor')\" tabindex=\"-1\"><span\n      class=\"color-label foreground\"><i class=\"fa fa-font\"></i></span>\n    </button>\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(bgInput.value, 'backgroundColor')\"\n      #bgInput>\n    <button [id]=\"'backgroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; bgInput.click()\"\n            title=\"Background Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('backgroundColor')\" tabindex=\"-1\"><span\n      class=\"color-label background\"><i class=\"fa fa-font\"></i></span>\n    </button>\n  </div>\n  <div *ngIf=\"_customClasses\" class=\"angular-editor-toolbar-set\">\n    <ae-select class=\"select-custom-style\" [options]=\"customClassList\"\n               [(ngModel)]=\"customClassId\"\n               (change)=\"setCustomClass(customClassId)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('customClasses')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'link-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"insertUrl()\"\n            title=\"Insert Link\" [disabled]=\"isLinkButtonDisabled\" [hidden]=\"isButtonHidden('link')\" tabindex=\"-1\">\n      <i class=\"fa fa-link\"></i>\n    </button>\n    <button [id]=\"'unlink-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"triggerCommand('unlink')\"\n            title=\"Unlink\" [disabled]=\"htmlMode || !linkSelected\" [hidden]=\"isButtonHidden('unlink')\" tabindex=\"-1\">\n      <i class=\"fa fa-chain-broken\"></i>\n    </button>\n    <input\n      style=\"display: none\"\n      accept=\"image/*\"\n      type=\"file\" (change)=\"onFileChanged($event)\"\n      #fileInput>\n    <button [id]=\"'insertImage-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); fileInput.click()\"\n            title=\"Insert Image\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertImage')\" tabindex=\"-1\"><i class=\"fa fa-image\"></i>\n    </button>\n    <button [id]=\"'insertVideo-'+id\" type=\"button\" class=\"angular-editor-button\"\n            (click)=\"insertVideo()\" title=\"Insert Video\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertVideo')\"\n            tabindex=\"-1\"><i\n      class=\"fa fa-video-camera\"></i></button>\n    <button [id]=\"'insertHorizontalRule-'+id\" type=\"button\" title=\"Horizontal Line\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertHorizontalRule')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertHorizontalRule')\" tabindex=\"-1\"><i\n      class=\"fa fa-minus\"></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'clearFormatting-'+id\" type=\"button\" title=\"Clear Formatting\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('removeFormat')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('removeFormat')\"\n            tabindex=\"-1\"><i class='fa fa-remove'></i>\n    </button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'toggleEditorMode-'+id\" type=\"button\" title=\"HTML Code\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('toggleEditorMode')\" [hidden]=\"isButtonHidden('toggleEditorMode')\" tabindex=\"-1\"><i\n      class='fa fa-code'></i></button>\n  </div>\n</div>\n",
            styles: ["@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]),.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: AngularEditorService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, {
          fonts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          customClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          defaultFontName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          defaultFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          uploadUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showToolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hiddenButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          myInputFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput', {
              "static": true
            }]
          }]
        });
      })();

      var AeSelectComponent = /*#__PURE__*/function () {
        function AeSelectComponent(elRef, r) {
          _classCallCheck(this, AeSelectComponent);

          this.elRef = elRef;
          this.r = r;
          this.options = [];
          this.disabled = false;
          this.optionId = 0;
          this.opened = false;
          this.hidden = 'inline-block'; // eslint-disable-next-line @angular-eslint/no-output-native, @angular-eslint/no-output-rename

          this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          this.onChange = function () {};

          this.onTouched = function () {};
        }

        _createClass(AeSelectComponent, [{
          key: "label",
          get: function get() {
            return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
          }
        }, {
          key: "value",
          get: function get() {
            return this.selectedOption.value;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedOption = this.options[0];

            if (isDefined(this.isHidden) && this.isHidden) {
              this.hide();
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            this.hidden = 'none';
          }
        }, {
          key: "optionSelect",
          value: function optionSelect(option, event) {
            event.stopPropagation();
            this.setValue(option.value);
            this.onChange(this.selectedOption.value);
            this.changeEvent.emit(this.selectedOption.value);
            this.onTouched();
            this.opened = false;
          }
        }, {
          key: "toggleOpen",
          value: function toggleOpen(event) {
            // event.stopPropagation();
            if (this.disabled) {
              return;
            }

            this.opened = !this.opened;
          }
        }, {
          key: "onClick",
          value: function onClick($event) {
            if (!this.elRef.nativeElement.contains($event.target)) {
              this.close();
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.opened = false;
          }
        }, {
          key: "isOpen",
          get: function get() {
            return this.opened;
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (!value || typeof value !== 'string') {
              return;
            }

            this.setValue(value);
          }
        }, {
          key: "setValue",
          value: function setValue(value) {
            var index = 0;
            var selectedEl = this.options.find(function (el, i) {
              index = i;
              return el.value === value;
            });

            if (selectedEl) {
              this.selectedOption = selectedEl;
              this.optionId = index;
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.labelButton.nativeElement.disabled = isDisabled;
            var div = this.labelButton.nativeElement;
            var action = isDisabled ? 'addClass' : 'removeClass';
            this.r[action](div, 'disabled');
            this.disabled = isDisabled;
          }
        }, {
          key: "handleKeyDown",
          value: function handleKeyDown($event) {
            if (!this.opened) {
              return;
            } // console.log($event.key);
            // if (KeyCode[$event.key]) {


            switch ($event.key) {
              case 'ArrowDown':
                this._handleArrowDown($event);

                break;

              case 'ArrowUp':
                this._handleArrowUp($event);

                break;

              case 'Space':
                this._handleSpace($event);

                break;

              case 'Enter':
                this._handleEnter($event);

                break;

              case 'Tab':
                this._handleTab($event);

                break;

              case 'Escape':
                this.close();
                $event.preventDefault();
                break;

              case 'Backspace':
                this._handleBackspace();

                break;
            } // } else if ($event.key && $event.key.length === 1) {
            // this._keyPress$.next($event.key.toLocaleLowerCase());
            // }

          }
        }, {
          key: "_handleArrowDown",
          value: function _handleArrowDown($event) {
            if (this.optionId < this.options.length - 1) {
              this.optionId++;
            }
          }
        }, {
          key: "_handleArrowUp",
          value: function _handleArrowUp($event) {
            if (this.optionId >= 1) {
              this.optionId--;
            }
          }
        }, {
          key: "_handleSpace",
          value: function _handleSpace($event) {}
        }, {
          key: "_handleEnter",
          value: function _handleEnter($event) {
            this.optionSelect(this.options[this.optionId], $event);
          }
        }, {
          key: "_handleTab",
          value: function _handleTab($event) {}
        }, {
          key: "_handleBackspace",
          value: function _handleBackspace() {}
        }]);

        return AeSelectComponent;
      }();

      AeSelectComponent.??fac = function AeSelectComponent_Factory(t) {
        return new (t || AeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      AeSelectComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AeSelectComponent,
        selectors: [["ae-select"]],
        viewQuery: function AeSelectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c4, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.labelButton = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function AeSelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AeSelectComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveDocument"])("keydown", function AeSelectComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeyDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx.hidden);
          }
        },
        inputs: {
          options: "options",
          isHidden: ["hidden", "isHidden"]
        },
        outputs: {
          changeEvent: "change"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return AeSelectComponent;
          }),
          multi: true
        }])],
        decls: 10,
        vars: 7,
        consts: [[1, "ae-font", "ae-picker", 3, "ngClass"], ["tabindex", "0", "type", "button", "role", "button", 1, "ae-picker-label", 3, "tabIndex", "click"], ["labelButton", ""], ["viewBox", "0 0 18 18"], ["points", "7 11 9 13 11 11 7 11", 1, "ae-stroke"], ["points", "7 7 9 5 11 7 7 7", 1, "ae-stroke"], [1, "ae-picker-options"], ["tabindex", "-1", "type", "button", "role", "button", "class", "ae-picker-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-item", 3, "ngClass", "click"], [1, "dropdown-item"]],
        template: function AeSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AeSelectComponent_Template_button_click_1_listener($event) {
              return ctx.toggleOpen($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "polygon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "polygon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, AeSelectComponent_button_8_Template, 2, 5, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AeSelectComponent_span_9_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c6, ctx.isOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("tabIndex", -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.label, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.options.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".ae-font.ae-picker{color:#444}.ae-font.ae-picker,.ae-font .ae-picker-label{display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;height:100%;padding-left:8px;padding-right:10px;line-height:26px;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(90deg,#fff,#fff)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"],
        encapsulation: 2
      });

      AeSelectComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      AeSelectComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['hidden']
        }],
        hidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.display']
        }],
        changeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['change']
        }],
        labelButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['labelButton', {
            "static": true
          }]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event']]
        }],
        handleKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AeSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ae-select',
            template: "<span class=\"ae-font ae-picker\" [ngClass]=\"{'ae-expanded':isOpen}\">\n  <button [tabIndex]=\"-1\" #labelButton tabindex=\"0\" type=\"button\" role=\"button\" class=\"ae-picker-label\" (click)=\"toggleOpen($event);\">{{label}}\n    <svg viewBox=\"0 0 18 18\">\n     <!-- <use x=\"0\" y=\"0\" xlink:href=\"../assets/icons.svg#hom\"></use>-->\n      <polygon class=\"ae-stroke\" points=\"7 11 9 13 11 11 7 11\"></polygon>\n      <polygon class=\"ae-stroke\" points=\"7 7 9 5 11 7 7 7\"></polygon>\n    </svg>\n  </button>\n  <span class=\"ae-picker-options\">\n    <button tabindex=\"-1\" type=\"button\" role=\"button\" class=\"ae-picker-item\"\n          *ngFor=\"let item of options; let i = index\"\n          [ngClass]=\"{'selected': item.value === value, 'focused': i === optionId}\"\n          (click)=\"optionSelect(item, $event)\">\n          {{item.label}}\n    </button>\n    <span class=\"dropdown-item\" *ngIf=\"!options.length\">No items for select</span>\n  </span>\n</span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                return AeSelectComponent;
              }),
              multi: true
            }],
            styles: [".ae-font.ae-picker{color:#444}.ae-font.ae-picker,.ae-font .ae-picker-label{display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;height:100%;padding-left:8px;padding-right:10px;line-height:26px;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(90deg,#fff,#fff)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
          }],
          changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['change']
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
          }],
          handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          isHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hidden']
          }],
          labelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['labelButton', {
              "static": true
            }]
          }]
        });
      })();

      var AngularEditorModule = function AngularEditorModule() {
        _classCallCheck(this, AngularEditorModule);
      };

      AngularEditorModule.??fac = function AngularEditorModule_Factory(t) {
        return new (t || AngularEditorModule)();
      };

      AngularEditorModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AngularEditorModule
      });
      AngularEditorModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AngularEditorModule, {
          declarations: function declarations() {
            return [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]];
          },
          exports: function exports() {
            return [AngularEditorComponent, AngularEditorToolbarComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AngularEditorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
            exports: [AngularEditorComponent, AngularEditorToolbarComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of angular-editor
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=kolkov-angular-editor.js.map

      /***/

    },

    /***/
    "nKMk":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/services/services.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function nKMk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12 col-md-12 mb-4\">\n        <div class=\"card shadow h-100\">\n            <div class=\"card-body p-3\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 mb-4\">\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\" i18n>Service Types</div>\n                    </div>\n                    <div class=\"col-xl-12 col-12 mb-4\">\n                        <div class=\"view view-cascade gradient-card-header white\">\n                            <table class=\"table table-striped table-responsive-md btn-table\">\n                                <thead>\n                                    <tr>\n                                        <th i18n>Type</th>\n                                        <th i18n>Charges</th>\n                                        <th i18n>Service Charges</th>\n                                        <th i18n>Consult Fees</th>\n                                        <th i18n>Portal Commision</th>\n                                        <th i18n>Sub Types</th>\n                                        <th>#</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let obj of ParentServicesTypes\">\n                                        <td>{{obj.name}}</td>\n                                        <td>{{obj.feeFromUserFixedAmount}}</td>\n                                        <td>{{obj.serviceFeeFromUserFixedAmount}}</td>\n                                        <td>{{obj.feeToConsultFixedAmount}}</td>\n                                        <td>{{obj.commisionToProtalFixedAmount}}</td>\n                                        <td>\n                                            <table class=\"table table-responsive-md btn-table\">\n                                                <tbody>\n                                                    <tr *ngFor=\"let objInner of obj.childServicesTypes\">\n                                                        <td>{{objInner.name}}</td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" (click)=\"deleteById(obj._id)\" class=\"btn btn-outline-primary btn-sm m-0 waves-effect\">Delete</button>\n                                          \n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "nyuw":
    /*!*********************************************************************!*\
      !*** ./src/app/admin/user-management/user-management.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function nyuw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "o7O4":
    /*!*************************************************************************************!*\
      !*** ./src/app/admin/user-management-pending/user-management-pending.component.css ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function o7O4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1hbmFnZW1lbnQtcGVuZGluZy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "rCAk":
    /*!************************************************************************!*\
      !*** ./src/app/admin/borrower-earnings/borrower-earnings.component.ts ***!
      \************************************************************************/

    /*! exports provided: BorrowerEarningsComponent */

    /***/
    function rCAk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BorrowerEarningsComponent", function () {
        return BorrowerEarningsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_borrower_earnings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./borrower-earnings.component.html */
      "gmSr");
      /* harmony import */


      var _borrower_earnings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./borrower-earnings.component.css */
      "TxCC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/internal/operators/first */
      "XoMe");
      /* harmony import */


      var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_models_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/role */
      "z56L");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");

      var BorrowerEarningsComponent = /*#__PURE__*/function () {
        function BorrowerEarningsComponent(socketService, alertService, utilityService, authenticationService) {
          var _this49 = this;

          _classCallCheck(this, BorrowerEarningsComponent);

          this.socketService = socketService;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.authenticationService = authenticationService;
          this.PaymentBorrowerDetailsArray = {};
          this.loading = false;
          this.transactionIdCtrl = [];
          this.editingIdCtrl = {};
          this.authenticationService.currentUser.subscribe(function (x) {
            return _this49.currentUser = x;
          });
          this.callLatestPaymentDetails();
        }

        _createClass(BorrowerEarningsComponent, [{
          key: "callLatestPaymentDetails",
          value: function callLatestPaymentDetails() {
            var _this50 = this;

            var _data = {};
            this.socketService.getAllBorrowerPaymentTransactionDetails(_data).pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                _this50.PaymentBorrowerDetailsArray = data["data"];
                _this50.loading = false;
              } else {
                _this50.alertService.error(data['message']);

                _this50.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";
              _this50.PaymentBorrowerDetailsArray = [];

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {}

              _this50.alertService.error(errorMsg2show);

              _this50.loading = false;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateTransactionIdDoPaymentForBorrower",
          value: function updateTransactionIdDoPaymentForBorrower(index, transactionId, obj) {
            var _this51 = this;

            if (index > -1 && transactionId && obj) {
              this.editingIdCtrl[index] = false;
              var _msg2show = "";
              var _borrowerId = obj._id;

              var _loanApplyIdArray = this.utilityService._.map(obj.sessionApplyInfo, '_id');

              var _amount = obj.totalPayment4CurrentUser * -1;

              var _transactionActionType = src_app_models_role__WEBPACK_IMPORTED_MODULE_8__["TransactionActionType"].paid_to_consulatant;

              var _transactionIdArray = this.utilityService._.uniq(this.utilityService._.flattenDepth(this.utilityService._.map(obj.sessionApplyInfo, 'transactionIdArray'), 1));

              var _transactionDocumentIdArray = this.utilityService._.uniq(this.utilityService._.flattenDepth(this.utilityService._.map(obj.sessionApplyInfo, 'transactionDocumentIdArray'), 1));

              var _Obj2Save = {
                borrowerId: _borrowerId,
                transactionId: transactionId,
                transactionActionType: _transactionActionType,
                userId: this.currentUser._id,
                transactionDetailsObj: null,
                amount: _amount,
                loanId: null,
                loanApplyIdArray: _loanApplyIdArray,
                status: null,
                updatedBy: this.currentUser._id,
                transactionIdArray: _transactionIdArray,
                transactionDocumentIdArray: _transactionDocumentIdArray
              };
              this.socketService.adminPaidToBorrowerUpdateInTransactions(_Obj2Save).pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
                if (data && data['success']) {
                  _this51.callLatestPaymentDetails();

                  _this51.loading = false;
                } else {
                  _this51.alertService.error(data['message']);

                  _this51.loading = false;
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

                _this51.alertService.error(errorMsg2show);

                _this51.loading = false;
              });
              _msg2show = "Request Queued => Borrower : " + _borrowerId + ", TransactionId : " + transactionId + ", Paid : " + obj.totalPayment4CurrentUser;
              this.alertService.success(_msg2show);
            } else {
              this.alertService.success("All values required.");
            }
          }
        }]);

        return BorrowerEarningsComponent;
      }();

      BorrowerEarningsComponent.ctorParameters = function () {
        return [{
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]
        }];
      };

      BorrowerEarningsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-borrower-earnings',
        template: _raw_loader_borrower_earnings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_borrower_earnings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])], BorrowerEarningsComponent);
      /***/
    },

    /***/
    "u6Hf":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-user/add-user.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function u6Hf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- register section -->\n<div class=\"row pt-0\">\n    <div class=\"col-xl-12 col-12\">\n        <form [formGroup]=\"registerForm\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header d-none\">\n                </div>\n                <div class=\"card-body\">\n                    <div id=\"profile_basic_details\">\n                        <div class=\"form-row mb-2  mb-3\">\n                            <div class=\"col-xl-3\">\n                                <div>\n                                    <img id=\"imgSelfProfileUrl\" [src]=\"f.selfProfileUrl.value || imgSelfProfileUrl\" onerror=\"this.src='./assets/img/nouser.png';\" class=\"img-fluid\" />\n                                </div>\n                                <div class=\"text-center\">\n                                    <i class=\"icon-pencil-alt m-2 text-success\" (click)=\"openFileUploaderForProfile()\">\n                                        <input id=\"ctrlUploadProfile\" hidden type=\"file\" name=\"image\" accept=\"image/*\"\n                                            (change)=\"fileProgressForProfile($event)\">\n                                    </i>\n                                    <i *ngIf=\"selfProfileUrlPendingForUpload\" class=\"icon-upload m-2 text-success\" (click)=\"onUploadForProfile()\">\n                                    </i>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-9\">\n                                <div class=\"form-row mb-3\">\n                                    <div class=\"col-xl-6\">\n                                        <label for=\"firstName\" i18n>First Name</label>\n                                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xl-6\">\n                                        <label for=\"lastName\" i18n>Last Name</label>\n                                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.lastName.errors.required\" i18n>Last Name is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-row mb-3\">\n                                    <div class=\"col-xl-12\">\n                                        <div class=\"card mb-3\">\n                                            <div class=\"card-body\">\n                                                <label for=\"emailAddress\" i18n>\n                                                    Email Id <sub>Please verify if email id exists before\n                                                        saving the users details</sub>\n                                                    <i *ngIf=\"isOtpSent\" class=\"icon-check-box m-2 text-success\">\n                                                    </i>\n                                                </label>\n                                                <div class=\"input-group mb-3\">\n                                                    <input [readonly]=\"isOtpSent || editing\" type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\" required />\n                                                    <div class=\"input-group-append\">\n                                                        <button *ngIf=\"!isOtpSent && !editing\" class=\"btn btn-primary\" (click)=\"onVerifySendOtp()\">Verify</button>\n                                                    </div>\n                                                </div>\n                                                <div class=\"mt-2\" *ngIf=\"isOtpSent\" >\n                                                    <strong>Default Password: avitii@987 </strong> User can reset his/her password later.\n                                                </div>\n                                                <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\n                                                    <div *ngIf=\"f.emailAddress.errors.required\" i18n>Email is required</div>\n                                                    <div *ngIf=\"f.emailAddress.errors.email\" i18n>Invalid Email format.</div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xl-12\">\n                                        <label for=\"mobileNo\" i18n>\n                                            <i class=\"icon-mobile text-success\"></i>\n                                            WhatsApp Number</label>\n                                        <input type=\"number\" formControlName=\"mobileNo\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.mobileNo.errors }\" />\n                                        <div *ngIf=\"submitted && f.mobileNo.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.mobileNo.errors.required\" i18n>WhatsApp Number is required\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\" *ngIf=\"f.role.value==Role.Admin\">\n                                    <div class=\"col-xl-12 mt-3\">\n                                        <p class=\"font-weight-bold\" i18n>App Permissions </p>\n                                        <div class=\"row\">\n                                            <div class=\"col-xl-6 mb-2\" *ngFor=\"let data of AppAccessPermissions; let i=index\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-xl-6\">\n                                                        <label>{{data.name}}</label>\n                                                    </div>\n                                                    <div class=\"col-xl-6\">\n                                                        <div class=\"btn-group btn-group btn-group-sm\">\n                                                            <button type=\"button\" class=\"btn\" (click)=\"onSkillSetsChange(data.value,true)\" [ngClass]=\"{ 'btn-success': onInitSetCheckedValue(data.value)==true, 'btn-outline-success':onInitSetCheckedValue(data.value)==false}\" i18n>\n                                                                Yes\n                                                            </button>\n                                                            <button type=\"button\" class=\"btn\" (click)=\"onSkillSetsChange(data.value,false)\" [ngClass]=\"{ 'btn-danger': onInitSetCheckedValue(data.value)==false, 'btn-outline-danger':onInitSetCheckedValue(data.value)==true}\" i18n>\n                                                                No\n                                                            </button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div *ngIf=\"submitted && f.appPermissions.errors\" class=\"error\">\n                                            <div *ngIf=\"f.appPermissions.errors.required\" class=\"text-red\" i18n>atleast one permission is required\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xl-12\">\n                                        <div class=\"badge badge-primary font-weight-normal m-2\" *ngFor=\"let educationItem of f.education.value\">\n                                            <span [textContent]=\"educationItem\"> </span> &nbsp;\n                                            <i class=\"icon-trash\" (click)=\"onAddRemoveEducationDetails(educationItem, false)\">\n                                            </i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-12 text-center\">\n                            <button type=\"button\" (click)=\"onSubmitRegisterUser()\" [disabled]=\"loading\" class=\"btn btn-primary float-right\" i18n>Save</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!-- register section -->";
      /***/
    },

    /***/
    "utD7":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-levels/user-levels.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function utD7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-3\">\n  <div class=\"col-xl-6\">\n    <h4 class=\"text-primary\" i18n>User Levels</h4>\n  </div>\n  <div class=\"col-xl-6\">\n    <button class=\"btn btn-success btn-sm float-right\" data-toggle=\"modal\" data-target=\"#userLevelModal\">New</button>\n  </div>\n</div>\n<div class=\"card mb-3\">\n  <div class=\"card-header\" i18n>Lenders</div>\n  <div class=\"card-body p-0\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th i18n>User Level Name</th>\n          <th i18n>Amount Spent</th>\n          <th i18n>Contracts</th>\n          <th i18n>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let obj2show of allUserLevelsDataLenders\">\n          <td>{{obj2show.name}}</td>\n          <td>{{obj2show.minimumSpent}}</td>\n          <td>{{obj2show.minimumContract}}</td>\n          <td>\n            <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Edit\" (click)=\"EditShowLevelForm(obj2show)\">\n              <i class=\"icon-pencil\"></i>\n            </button>\n            <button class=\"btn btn-danger btn-sm btn-xs\" data-title=\"Delete\" (click)=\"DeleteShowLevelForm(obj2show)\">\n              <i class=\"icon-trash\"></i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\" i18n>Borrowers</div>\n  <div class=\"card-body p-0\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th i18n>User Level Name</th>\n          <th i18n>Amount Spent</th>\n          <th i18n>Contracts</th>\n          <th i18n>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let obj2show of allUserLevelsDataBorrower\">\n          <td>{{obj2show.name}}</td>\n          <td>{{obj2show.minimumSpent}}</td>\n          <td>{{obj2show.minimumContract}}</td>\n          <td>\n            <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Edit\" (click)=\"EditShowLevelForm(obj2show)\">\n              <i class=\"icon-pencil\"></i>\n            </button>\n            <button class=\"btn btn-danger btn-sm btn-xs\" data-title=\"Delete\" (click)=\"DeleteShowLevelForm(obj2show)\">\n              <i class=\"icon-trash\"></i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"userLevelModal\">\n  <div class=\"modal-dialog modal-dialog-centered  modal-lg\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title text-primary\" i18n>New User Level</h4>\n        <button type=\"button\" class=\"close\" (click)=\"closeDialog()\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <form [formGroup]=\"userUserLevelsForm\">\n          <div class=\"row mb-3\">\n            <div class=\"col-xl-12\">\n              <label for=\"role\" i18n>User Type</label>\n              <div class=\"form-group\">\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input [disabled]=\"!!(actionButtons0Add1Edit2Delete!=0)\" name=\"role\" id=\"user_role_0\" type=\"radio\" class=\"custom-control-input\" [value]=\"Role.Lender\"\n                    formControlName=\"role\" [ngClass]=\"{ 'is-invalid': submitted && f.role.errors }\">\n                  <label for=\"user_role_0\" class=\"custom-control-label\">{{Role.Lender}}</label>\n                </div>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input [disabled]=\"!!(actionButtons0Add1Edit2Delete!=0)\" name=\"role\" id=\"user_role_1\" type=\"radio\" class=\"custom-control-input\" [value]=\"Role.Borrower\"\n                    formControlName=\"role\" [ngClass]=\"{ 'is-invalid': submitted && f.role.errors }\">\n                  <label for=\"user_role_1\" class=\"custom-control-label\">{{Role.Borrower}}</label>\n                </div>\n\n                <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.role.required\" i18n>User Type Name is required</div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-xl-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" i18n>User Level Name</label>\n                <input [disabled]=\"!!(actionButtons0Add1Edit2Delete==2)\" type=\"text\" formControlName=\"name\" class=\"form-control\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"\n                  placeholder=\"e.g. Good Lender, Best Borrower etc\" />\n                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.name.errors.required\" i18n>User Level Name is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-12\">\n              <div class=\"form-group\">\n                <label for=\"minimumSpent\" i18n>Min. Amount Spent</label>\n                <input [disabled]=\"actionButtons0Add1Edit2Delete==2\" type=\"number\" formControlName=\"minimumSpent\" class=\"form-control\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.minimumSpent.errors }\" />\n                <div *ngIf=\"submitted && f.minimumSpent.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.minimumSpent.errors.required\" i18n>Min. Amount Spent is required</div>\n                  <div *ngIf=\"f.minimumSpent.errors.min\" i18n>Amount must be non zero</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-12\">\n              <div class=\"form-group\">\n                <label for=\"minimumContract\" i18n>Number of contracts</label>\n                <input [disabled]=\"actionButtons0Add1Edit2Delete==2\" type=\"number\" formControlName=\"minimumContract\" class=\"form-control\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.minimumContract.errors }\" />\n                <div *ngIf=\"submitted && f.minimumContract.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.minimumContract.errors.required\">Number of contracts is required</div>\n                  <div *ngIf=\"f.minimumContract.errors.min\">Amount must be non zero</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-12\" [ngSwitch]=\"actionButtons0Add1Edit2Delete\">\n              <button *ngSwitchCase=\"0\" class=\"btn btn-success btn-sm float-right\" (click)=\"onUserLevelsUpdateSubmit()\" i18n>\n                <i class=\"icon icon-plus\"></i>\n                ADD\n              </button>\n              <button *ngSwitchCase=\"1\" class=\"btn btn-success btn-sm float-right\" (click)=\"onUserLevelsUpdateSubmit()\" i18n>\n                <i class=\"icon icon-pencil\"></i>\n                Edit\n              </button>\n              <button *ngSwitchCase=\"2\" class=\"btn btn-success btn-sm float-right\" i18n (click)=\"DeleteData()\">\n                <i class=\"icon icon-trash\"></i>\n                Delete\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "wJwY":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/header/header.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function wJwY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul  class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion navbar_side_panel\" id=\"accordionSidebar\">\n\n    <!-- Sidebar - Brand -->\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\">\n        <img class=\"img-fluid\" src=\"./assets/img/avitii-logo.png\">\n    </a>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\">\n  \n    <!-- Nav Item - Dashboard -->\n    <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/admin\">\n            <i class=\"icon icon-home\"></i>\n            <span i18n>Dashboard</span>\n            <!--\n            <span>&nbsp;{{authenticationService.currentUserValue.lastLoginTime | date:'dd-MMM-YYYY HH:mm'}}</span>\n            -->\n        </a>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <!-- <div class=\"sidebar-heading\">\n        Interface\n    </div> -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin/users\" routerLinkActive=\"active\">\n            <i class=\"icon icon-user\"></i>\n            <span i18n>User Mangement</span></a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin/pending-users\" routerLinkActive=\"active\">\n            <i class=\"icon icon-user\"></i>\n            <span i18n>Pending User's</span></a>\n    </li>\n    <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin/add-user\" routerLinkActive=\"active\">\n            <i class=\"icon icon-bag\"></i>\n            <span>Add User</span></a>\n    </li> -->\n   \n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n            <i class=\"icon icon-credit-card\"></i>\n            <span i18n>Transactions</span>\n        </a>\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n               \n                <a class=\"collapse-item\" (click)=\"navigate2State('/admin/payments',{'transactionActionType':TransactionActionType.plan_purchase})\" routerLinkActive=\"active\" i18n>Plan Purchase</a>\n                <a class=\"collapse-item\" (click)=\"navigate2State('/admin/payments',{'transactionActionType':TransactionActionType.insurance_purchase})\" routerLinkActive=\"active\" i18n>Insurance Purchase</a>\n              \n            </div>\n        </div>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin/loan-pay\" routerLinkActive=\"active\">\n            <i class=\"icon icon-money\"></i>\n            <span i18n>Pending Loans</span></a>\n    </li>\n \n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin/messages\" routerLinkActive=\"active\">\n            <i class=\"icon icon-comments\"></i>\n            <span i18n>Messages</span>\n            <span *ngIf=\"messagesService.returnTotalPendingMessagesForUser()>0\" class=\"badge badge-light float-right font-weight-lighter text-capitalize\" i18n> {{messagesService.returnTotalPendingMessagesForUser()}}</span>\n        </a>\n          \n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin/user-levels\" routerLinkActive=\"active\">\n            <i class=\"icon icon-medall-alt\"></i>\n            <span i18n>User Levels</span></a>\n    </li>\n\n    \n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin/blogs\" routerLinkActive=\"active\">\n            <i class=\"icon icon-clipboard\"></i>\n            <span i18n>Blogs</span></a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin/customer-review\" routerLinkActive=\"active\">\n            <i class=\"icon icon-clipboard\"></i>\n            <span i18n>Customer Review</span></a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin/partners\" routerLinkActive=\"active\">\n            <i class=\"icon icon-clipboard\"></i>\n            <span i18n>Partners</span></a>\n    </li>\n \n    <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\n            <i class=\"icon icon-comments\"></i>\n            <span>Messages</span></a>\n    </li>\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"/lender/messages\" routerLinkActive=\"active\">\n            <i class=\"icon icon-calendar\"></i>\n            <span>Calendar</span></a>\n    </li>\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"/lender/messages\" routerLinkActive=\"active\">\n            <i class=\"icon icon-star\"></i>\n            <span>My Ratings</span></a>\n    </li> -->\n\n    <!-- <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\n            <i class=\"icon icon-settings\"></i>\n            <span>Settings</span>\n        </a>\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n             \n                <a class=\"collapse-item\" routerLink=\"/lender/profile\">My Profile</a>\n                <a class=\"collapse-item\" href=\"register.html\">Change Password</a>\n                <a class=\"collapse-item\" href=\"forgot-password.html\">Bank Details</a>\n                <a class=\"collapse-item\" href=\"forgot-password.html\">Payment Agreement</a>\n               \n            </div>\n        </div>\n    </li> -->\n\n \n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/logout\">\n            <i class=\"icon icon-flickr-alt\"></i>\n            <span i18n>Logout</span></a>\n    </li>\n\n    <!-- Divider -->\n    <!-- <hr class=\"sidebar-divider d-none d-md-block\"> -->\n\n    <!-- Sidebar Toggler (Sidebar) -->\n    <!-- <div class=\"text-center d-none d-md-inline\">\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n    </div> -->\n\n\n</ul>\n\n<div class=\"sidebar_overlay navbar_side_panel btn-back\" ></div>\n\n\n\n\n<!-- Nav Start [ngClass]=\"{'dark position-relative' : (router.url!='/')}\"-->\n<header id=\"custom-header-nav\" class=\"ecommerce nav-fix shadow-sm p-0 hide-lg\">\n    \n        <div class=\"row\">\n            <div class=\"col\">\n                <nav>\n                    <div class=\"responsive-btn ml-1\">\n                        <a class=\"toggle-nav\"><i aria-hidden=\"true\" class=\"icon-align-center\"></i></a>\n                    </div>\n                    <a class=\"logo-light\" routerLink=\"/home\">\n                        <img class=\"img-fluid\" src=\"./assets/img/avitii-logo-purple.png\"></a>\n\n                    <!-- <div class=\"navbar navbar_side_panel m-l-auto p-1 btn-back\" id=\"togglebtn\">\n                     <div class=\"responsive-btn\">\n                            <h5 class=\"btn-back\">back</h5>\n                        </div> \n                        <ul class=\"main-menu\">\n                            <li><a routerLink=\"/lender\">Home</a></li>\n\n                            <li><a routerLink=\"/lender/search-consulatnt\" routerLinkActive=\"active\">Search</a></li>\n                            <li><a routerLink=\"/lender/my-contract\" routerLinkActive=\"active\">My Contract</a></li>\n                            <li><a routerLink=\"/lender/make-a-loan\" routerLinkActive=\"active\"><i class=\"icon-plus\"></i>\n                                    Make a Loan</a></li>\n\n                        </ul>\n                    </div> -->\n                    <div class=\"top-header-right mr-1\">\n                        <ul>\n\n                            <!-- <li class=\"cart\">\n                                <a aria-expanded=\"false\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\n                                    <i class=\"icon-comment-alt\"></i>\n                                </a>\n\n                            </li>\n                            <li class=\"cart\">\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\" id=\"dropdownMenuButton1\">\n                                    <i class=\"icon-bell bell\"></i>\n                                    <span *ngIf=\"(utilityService._.keys(notificationService.appNotifications).length)>0\"\n                                        class=\"badge badge-primary bell-count\"\n                                        [textContent]=\"utilityService._.keys(notificationService.appNotifications).length\"></span>\n                                </a>\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\"\n                                    x-placement=\"bottom-end\"\n                                    style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\n                                    <ul class=\"shopping-cart list-group list-group-flush\">\n                                        <li class=\"list-group-item\"\n                                            *ngFor=\"let notification of utilityService._.values(notificationService.appNotifications)\">\n                                            <div class=\"pb-2\">\n                                                <div class=\"mb-1\">{{notification.message}}&nbsp;<a\n                                                        class=\"float-lg-right font-large text-danger\"\n                                                        (click)=\"notificationService.check4Notification(notification)\"><i\n                                                            class=\"icon-close\" style=\"font-size: 0.6rem;\"></i></a></div>\n                                                <div class=\"font-weight-light small mb-1\">{{notification.description}}\n                                                </div>\n                                            </div>\n                                        </li>\n\n\n                                        <li class=\"no-item text-center\">\n                                            <h4 class=\"my-4 font-weight-normal\">No Notifications</h4>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </li> -->\n                            <li class=\"cart\">\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\"  id=\"dropdownMenuButton1\">\n                                    <!-- <img class=\"userimg mt-n2\" src=\"./assets/img/user-default.png\"> -->\n                                    <i class=\"icon icon-user\"></i>\n                                </a>\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\"\n                                    x-placement=\"bottom-end\"\n                                    style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\n                                    <ul class=\"shopping-cart\">\n                                        <li>\n                                            <a class=\"h6 d-block\" routerLink=\"/lender\">\n                                                {{currentUser.firstName}}\n                                                <span class=\"badge badge-primary float-right\"\n                                                    [textContent]=\"currentUser.role\" i18n> Borrower</span>\n                                            </a>\n                                        </li>\n\n                                        <!-- <li>\n                                            <a class=\"d-block\" routerLink=\"/lender/wallet\">Wallet\n                                                <span\n                                                    class=\"badge badge-success float-right\">${{fundService.totalFund4currentUser}}</span>\n                                            </a>\n                                        </li> -->\n                                        <li><a routerLink=\"/lender/profile\" i18n>Profile</a></li>\n                                        <hr>\n                                        <li>\n                                            <a routerLink=\"/logout\" i18n>Logout</a>\n                                        </li>\n                                    </ul>\n                                </div>\n\n                            </li>\n                        </ul>\n                    </div>\n                    \n                    <div class=\"sidebar_overlay navbar_side_panel btn-back\" style=\"display: none;\"></div>\n                </nav>\n            </div>\n        </div>\n   \n</header>\n<!-- Nav end-->";
      /***/
    },

    /***/
    "wWmZ":
    /*!***************************************************************!*\
      !*** ./src/app/admin/loan-payment/loan-payment.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function wWmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLXBheW1lbnQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "xwQy":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management-pending/user-management-pending.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xwQy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\n    <div class=\"col-xl-12 col-md-12 mb-4\">\n        <div class=\"card shadow h-100\">\n            <div class=\"card-header\">\n                <div class=\"font-weight-bold text-primary\" i18n>User Management</div>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n\n                    <div class=\"col-xl-12 col-12 mb-4\">\n                        <div class=\"view view-cascade gradient-card-header white\">\n                            <table datatable [dtOptions]=\"dtOptions\"\n                                class=\"row-border hover table table-striped table-responsive-md btn-table\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"d-none\" i18n>ID</th>\n                                        <th i18n>Email</th>\n                                        <th i18n>Full Name</th>\n                                        <th i18n>Role</th>\n                                        <!--<th i18n>Mobile</th>-->\n                                        <th i18n>Verified</th>\n                                        <th i18n>Status</th>\n                                        <th class=\"text-right\" i18n>Actions</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentTransactionDetailsArray)\">\n                                        <td class=\"d-none\">{{obj._id}}</td>\n                                        <td>{{obj.emailAddress}}</td>\n                                        <td>{{obj.firstName}}&nbsp;{{obj.middleName}}&nbsp;{{obj.lastName}}</td>\n                                        <td class=\"text-capitalize\">{{obj.role}}</td>\n                                        <!--<td>{{obj.mobileNo}}</td>-->\n                                        <td>\n                                            <div\n                                                *ngIf=\"returnT4CurrentUserAllowedToShow(obj.role) && obj._id != authenticationService.currentUserValue._id\">\n                                                <div *ngIf=\"!obj.isDeleted\">\n                                                    <span [ngSwitch]=\"obj.isVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\">Blocked</i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\">Verified</i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-danger font-weight-light\">Pending</i>\n                                                    </span>\n                                                    <!--\n                                                <span i18n *ngIf=\"!obj.isVerified\"\n                                                    class=\"btn text-white badge badge-danger font-weight-light\">\n                                                    Pending\n                                                </span>\n                                                <span i18n *ngIf=\"obj.isVerified\"\n                                                    class=\"badge badge-success font-weight-light\">\n                                                    Approved\n                                                </span>\n                                            -->\n                                                </div>\n                                                <div *ngIf=\"obj.isDeleted\">\n                                                    <span class=\"btn text-white badge badge-danger font-weight-light\"\n                                                        i18n>\n                                                        Deleted\n                                                    </span>\n                                                </div>\n                                            </div>\n                                        </td>\n                                        <td>\n                                            <div *ngIf=\"!obj.isDeleted\">\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.myPassportMedia).length>0\">\n                                                    <span [ngSwitch]=\"obj.myPassportMediaVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">Passport </i>\n                                                    </span>\n                                                </div>\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.myDLMedia).length>0\">\n                                                    <span [ngSwitch]=\"obj.myDLMediaVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">DL </i>\n                                                    </span>\n                                                </div>\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.myHICardMedia).length>0\">\n                                                    <span [ngSwitch]=\"obj.myHICardMediaVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">HI </i>\n                                                    </span>\n                                                </div>\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.myRKIMedia).length>0\">\n                                                    <span [ngSwitch]=\"obj.myRKIMediaVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">RKI</i>\n                                                    </span>\n                                                </div>\n                                                <div style=\"display: inline;margin-right: 2px;\" *ngIf=\"utilityService._.keys(obj.externalAppLinks).length>0\">\n                                                    <span [ngSwitch]=\"obj.externalAppLinksVerified\" i18n>\n                                                        <i *ngSwitchCase=\"2\"\n                                                            class=\"badge badge-danger font-weight-light\"></i>\n                                                        <i *ngSwitchCase=\"1\"\n                                                            class=\"badge badge-success font-weight-light\"></i>\n                                                        <i *ngSwitchDefault\n                                                            class=\"badge badge-secondary font-weight-light\">Facebook</i>\n                                                    </span>\n                                                </div>\n\n\n                                            </div>\n                                        </td>\n                                        <td class=\"text-left\">\n                                            <div\n                                                *ngIf=\"!obj.isDeleted && returnT4CurrentUserAllowedToShow(obj.role) && obj._id != authenticationService.currentUserValue._id\">\n                                                <button *ngIf=\"obj.isVerified==1 && returnT4CurrentUserIsSAdmin()\"\n                                                    class=\"btn btn-success btn-sm btn-xs mr-1\"\n                                                    (click)=\"navigate2EditUser(obj._id)\" data-title=\"Edit\">\n                                                    <i class=\"icon-pencil\"></i>\n                                                </button>\n                                                <button class=\"btn btn-success btn-sm btn-xs mr-1\"\n                                                    (click)=\"usersProfile(obj)\" data-title=\"View User Details\">\n                                                    <i class=\"icon-user\"></i>\n                                                </button>\n\n                                                <button *ngIf=\"obj.role==Role.Borrower\"\n                                                    class=\"btn btn-success btn-sm btn-xs mr-1\"\n                                                    (click)=\"usersIncomeExpenseDetails(obj)\"\n                                                    data-title=\"Income Proof and Monthly Expenses Details\">\n                                                    <i class=\"icon-receipt\"></i>\n                                                </button>\n\n                                                <button *ngIf=\"obj.isVerified==1\"\n                                                    class=\"btn btn-warning btn-sm btn-xs mr-1\" data-title=\"Block User\"\n                                                    (click)=\"usersRestrictionModal(obj, 2)\">\n                                                    <i class=\"icon-lock\"></i>\n                                                </button>\n                                                <button *ngIf=\"!obj.isVerified || obj.isVerified==2\"\n                                                    class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Verify User\"\n                                                    (click)=\"usersRestrictionModal(obj, 1)\">\n                                                    <i class=\"icon-unlock\"></i>\n                                                </button>\n\n\n                                                <button class=\"btn btn-danger btn-sm btn-xs\"\n                                                    (click)=\"deleteUserById(obj._id)\" data-title=\"Delete\">\n                                                    <i class=\"icon-trash\"></i>\n                                                </button>\n                                            </div>\n                                        </td>\n                                    </tr>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "yP50":
    /*!*******************************************!*\
      !*** ./src/app/admin/admin.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function yP50(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "yVJR":
    /*!******************************************************************************!*\
      !*** ./src/app/admin/payment-transactions/payment-transactions.component.ts ***!
      \******************************************************************************/

    /*! exports provided: PaymentTransactionsComponent */

    /***/
    function yVJR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentTransactionsComponent", function () {
        return PaymentTransactionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payment_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payment-transactions.component.html */
      "PGjB");
      /* harmony import */


      var _payment_transactions_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payment-transactions.component.css */
      "165m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/socketio.service */
      "bgkY");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_role__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/role */
      "z56L");

      var PaymentTransactionsComponent = /*#__PURE__*/function () {
        function PaymentTransactionsComponent(socketService, alertService, utilityService, elementRef) {
          var _this52 = this;

          _classCallCheck(this, PaymentTransactionsComponent);

          this.socketService = socketService;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.elementRef = elementRef;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.dtOptions = {};
          this.PaymentTransactionDetailsArray = null;
          this.loading = false;
          this.transactionActionType = null;
          this.TransactionActionType = src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["TransactionActionType"];
          var paramobj = history.state;

          if (paramobj) {
            this.transactionActionType = paramobj['transactionActionType'];
            delete history.state['transactionActionType'];
          }

          if (!this.transactionActionType) {
            this.transactionActionType = [src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["TransactionActionType"].plan_purchase];
          }

          var _data = {
            transactionActionType: this.transactionActionType
          };
          this.socketService.getAllPaymentTransactionDetails(_data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            if (data && data['success']) {
              _this52.PaymentTransactionDetailsArray = data["data"];

              _this52.populateUsersDataInTable(); //this.rerender();


              _this52.loading = false;
            } else {
              _this52.alertService.error(data['message']);

              _this52.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";
            _this52.PaymentTransactionDetailsArray = [];

            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) {}

            _this52.alertService.error(errorMsg2show);

            _this52.loading = false;
          });
        } //#region datatable actions


        _createClass(PaymentTransactionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.populateUsersDataInTable();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();

            if (this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.querySelector('.paginate_button.next')) {
              this.elementRef.nativeElement.querySelector('.paginate_button.next').removeEventListener('click');
            }
          }
        }, {
          key: "populateUsersDataInTable",
          value: function populateUsersDataInTable() {
            var _this53 = this;

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10,
              drawCallback: function drawCallback() {
                _this53.elementRef.nativeElement.querySelector('.paginate_button.next').addEventListener('click', _this53.onClick.bind(_this53));
              }
            };
            this.dtTrigger.next();
            this.rerender();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.columns().every(function () {
                  var that = this;
                  $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                      that.search(this['value']).draw();
                    }
                  });
                });
              });
            }
          }
        }, {
          key: "rerender",
          value: function rerender() {
            var _this54 = this;

            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy(); // Call the dtTrigger to rerender again

                _this54.dtTrigger.next();
              });
            }
          }
        }, {
          key: "onClick",
          value: function onClick(event) {}
        }]);

        return PaymentTransactionsComponent;
      }();

      PaymentTransactionsComponent.ctorParameters = function () {
        return [{
          type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_7__["SocketioService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      PaymentTransactionsComponent.propDecorators = {
        datatableElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], {
            "static": false
          }]
        }]
      };
      PaymentTransactionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment-transactions',
        template: _raw_loader_payment_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_transactions_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_socketio_service__WEBPACK_IMPORTED_MODULE_7__["SocketioService"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])], PaymentTransactionsComponent);
      /***/
    },

    /***/
    "yxQR":
    /*!********************************************************************!*\
      !*** ./src/app/admin/customer-review/customer-review.component.ts ***!
      \********************************************************************/

    /*! exports provided: CustomerReviewComponent */

    /***/
    function yxQR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerReviewComponent", function () {
        return CustomerReviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_customer_review_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./customer-review.component.html */
      "VPIQ");
      /* harmony import */


      var _customer_review_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./customer-review.component.css */
      "dapA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/app-router.service */
      "KHIh");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_shared_media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/media-preview/media-preview.component */
      "tZK8");

      var uploadAPI = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/api/post/upload/assetdata';
      var uploadAccessUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/';

      var CustomerReviewComponent = /*#__PURE__*/function () {
        function CustomerReviewComponent(http, formBuilder, authenticationService, userService, alertService, appRouterService, utilityService, _cdr, dialog) {
          _classCallCheck(this, CustomerReviewComponent);

          this.http = http;
          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.alertService = alertService;
          this.appRouterService = appRouterService;
          this.utilityService = utilityService;
          this._cdr = _cdr;
          this.dialog = dialog;
          this.fileData4refDocument = null;
          this.fileData4refDocumentPendingForUpload = false;
          this.loading = false;
          this.submitted = false;
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
          this.currentObj = null;
          this.actionButtons0Add1Edit2Delete = 0;
          this.userObj = this.authenticationService.currentUserValue;
          this.initForm();
          this.fetchAllCustomerReviewByUserId();
        }

        _createClass(CustomerReviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fetchAllCustomerReviewByUserId",
          value: function fetchAllCustomerReviewByUserId() {
            var _this55 = this;

            this.userService.getCustomerReviewAll(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              ////console.log('data => ', data)
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this55.allCustomerReviewData = data["data"]; //this.alertService.success(data['message'], true);

                _this55.loading = false;
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

              _this55.alertService.error(errorMsg2show);

              _this55.loading = false;

              _this55.appRouterService.appRouter('');
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.userCustomerReviewForm.controls;
          }
        }, {
          key: "onCustomerReviewUpdateSubmit",
          value: function onCustomerReviewUpdateSubmit() {
            var _this56 = this;

            this.submitted = true;

            if (this.userCustomerReviewForm.invalid) {
              this.alertService.error("Please Provide all data");
              return;
            }

            if (this.fileData4refDocumentPendingForUpload) {
              this.alertService.error('Please upload document first');
              return;
            }

            this.userService.addUpdateUserCustomerReview(this.userCustomerReviewForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                //alert(JSON.stringify( data));
                _this56.alertService.success('Customer Review Updated successfully', true);

                _this56.fetchAllCustomerReviewByUserId();

                _this56.submitted = false;

                _this56.closeDialog(); //this.appRouterService.appRouter(this.userObj);

              } else {
                //alert(JSON.stringify(data['message']));
                _this56.alertService.error(data['message']);

                _this56.loading = false;
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

              _this56.alertService.error(errorMsg2show);

              _this56.loading = false; //this.closeDialog();
            });
          }
        }, {
          key: "showEditingFormCustomerReview",
          value: function showEditingFormCustomerReview(_userObj) {
            this.userCustomerReviewForm = this.formBuilder.group({
              _id: [_userObj._id || ''],
              title: [_userObj.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              description: [_userObj.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              refDocument: [_userObj.refDocument || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              status: [_userObj.status || src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending],
              createdOn: [_userObj.createdOn || null],
              updatedOn: [_userObj.updatedOn || null],
              isDeleted: [_userObj.isDeleted || false],
              createdBy: [_userObj.createdBy || this.authenticationService.currentUserValue._id],
              deletedBy: [_userObj.deletedBy || ''],
              updatedBy: [this.authenticationService.currentUserValue._id]
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.userCustomerReviewForm = this.formBuilder.group({
              _id: [''],
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              refDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              status: [src_app_models__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].Pending],
              createdOn: [''],
              updatedOn: [''],
              isDeleted: [false],
              createdBy: [this.authenticationService.currentUserValue._id || ''],
              deletedBy: [''],
              updatedBy: ['']
            });
          }
        }, {
          key: "onfileProgressForCustomerReviewDocument",
          value: function onfileProgressForCustomerReviewDocument(fileInput) {
            this.fileData4refDocument = fileInput.target.files[0];
            this.previewForCustomerReviewDocument();
          }
        }, {
          key: "previewForCustomerReviewDocument",
          value: function previewForCustomerReviewDocument() {
            var _this57 = this;

            // Show preview 
            var mimeType = this.fileData4refDocument.type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(this.fileData4refDocument);

            reader.onload = function (_event) {
              _this57.userCustomerReviewForm.get('refDocument').setValue(reader.result);

              _this57.fileData4refDocumentPendingForUpload = true;
            };
          }
        }, {
          key: "onUploadForCustomerReviewDocument",
          value: function onUploadForCustomerReviewDocument() {
            var _this58 = this;

            if (!this.fileData4refDocument) {
              this.alertService.error("Select file first.");
              return;
            }

            var mimeType = this.fileData4refDocument.type;

            if (mimeType.match(/image\/*/) == null) {
              this.alertService.error("Select Image file only.");
              return;
            }

            var formData = new FormData();
            formData.append('files', this.fileData4refDocument);
            formData.append('documentId', this.userObj._id + '__customerReview');
            this.fileUploadProgress = '0%';
            this.http.post(uploadAPI, formData, {
              reportProgress: true,
              observe: 'events'
            }).subscribe(function (events) {
              if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].UploadProgress) {
                _this58.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%'; //console.log(this.fileUploadProgress);
              } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].Response) {
                _this58.fileUploadProgress = ''; //console.log(events.body);
                //alert('SUCCESS !!');

                _this58.fileData4Profile = null;

                _this58.alertService.success('Uploaded successfully', true);

                var _uploadedUrl = events.body["data"].path;

                if (lodash__WEBPACK_IMPORTED_MODULE_11__["startsWith"](_uploadedUrl, '/')) {
                  _uploadedUrl = _uploadedUrl.substr(1);
                }

                _this58.uploadedFilePath = uploadAccessUrl + '' + _uploadedUrl;

                _this58.userCustomerReviewForm.get('refDocument').setValue(_this58.uploadedFilePath);

                _this58.fileData4refDocumentPendingForUpload = false;
              }
            });
          }
        }, {
          key: "mediaPreviewModel",
          value: function mediaPreviewModel(mediaSrc, mimeType) {
            //console.log('411', this.authenticationService.currentUserValue);
            var dialogRef = this.dialog.open(src_app_shared_media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_14__["MediaPreviewComponent"], {
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
            dialogRef.afterClosed().subscribe(function (result) {//console.log(`426 :: msc :: Dialog result: ${JSON.stringify(result)}`);
            });
          }
        }, {
          key: "EditShowCustomerReviewForm",
          value: function EditShowCustomerReviewForm(_userObj) {
            this.actionButtons0Add1Edit2Delete = 1;
            this.initForm();
            this.showEditingFormCustomerReview(_userObj);
            $("#blogModal").modal('show');
          }
        }, {
          key: "DeleteShowCustomerReviewForm",
          value: function DeleteShowCustomerReviewForm(_userObj) {
            this.currentObj = _userObj;
            this.actionButtons0Add1Edit2Delete = 2;
            this.initForm();
            this.showEditingFormCustomerReview(_userObj);
            $("#blogModal").modal('show');
          }
        }, {
          key: "DeleteData",
          value: function DeleteData() {
            this.actionButtons0Add1Edit2Delete = 2;
            this.initForm();
            this.showEditingFormCustomerReview(this.currentObj);
            this.userCustomerReviewForm.get("isDeleted").setValue(true);
            this.userCustomerReviewForm.get("deletedBy").setValue(this.authenticationService.currentUserValue._id);

            var _temp_allPartnersData = lodash__WEBPACK_IMPORTED_MODULE_11__["mapKeys"](this.allCustomerReviewData, '_id');

            delete _temp_allPartnersData[this.currentObj._id];
            this.allCustomerReviewData = lodash__WEBPACK_IMPORTED_MODULE_11__["values"](_temp_allPartnersData);
            this.onCustomerReviewUpdateSubmit();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.currentObj = null;
            this.actionButtons0Add1Edit2Delete = 0;
            this.initForm();
            $("#blogModal").modal('hide');
          }
        }]);

        return CustomerReviewComponent;
      }();

      CustomerReviewComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      };

      CustomerReviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-review',
        template: _raw_loader_customer_review_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_review_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_8__["AppRouterService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])], CustomerReviewComponent);
      /***/
    },

    /***/
    "z929":
    /*!*******************************************************!*\
      !*** ./src/app/admin/add-user/add-user.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function z929(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map