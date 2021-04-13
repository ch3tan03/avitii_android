(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
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
            //console.log('data => ', data)
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
                //console.log('data => ', data)
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
          canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
          path: 'messages',
          component: _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"]
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


      __webpack_exports__["default"] = "footer {\r\n    padding: 0px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMDtcclxufSJdfQ== */";
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
              this.submitted = true;
              console.log('inside Submit ' + this.registerForm.invalid); // stop here if form is invalid
              //(this.registerForm.controls.mobileNo.invalid || this.registerForm.controls.firstName.invalid || this.registerForm.controls.lastName.invalid || this.registerForm.controls.emailAddress.invalid)

              if (this.registerForm.controls.emailAddress.invalid) {
                return;
              }

              console.log('inside');
              this.loading = true;
              console.log("Reg Data => ", this.registerForm.value);
              this.registerForm.get('userName').setValue(this.registerForm.get('emailAddress').value);
              var _jsonData2send = this.registerForm.value; //delete _jsonData2send['selfProfileUrl'];

              this.userService.sendOtp2user(_jsonData2send).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                console.log('data => ', data);

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
            }

            console.log('inside');
            this.loading = true;
            console.log("Reg Data => ", this.registerForm.value);
            this.registerForm.get('userName').setValue(this.registerForm.get('emailAddress').value);
            var _jsonData2send = this.registerForm.value; //delete _jsonData2send['selfProfileUrl'];

            if (!this.editing) {
              this.socketService.addNewUser(_jsonData2send).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                console.log('data => ', data);

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

            console.log('371 :: Added', event);

            (_this$myProfileFiles = this.myProfileFiles).push.apply(_this$myProfileFiles, _toConsumableArray(event.addedFiles));

            console.log('373', this.myProfileFiles);
          }
        }, {
          key: "onRemoveMyProfileMedia",
          value: function onRemoveMyProfileMedia(event) {
            console.log('378 :: Removed', event);
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
                  _this8.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                  console.log(_this8.fileUploadProgress);
                } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response) {
                  _this8.fileUploadProgress = '';
                  console.log(events.body); //alert('SUCCESS !!');

                  _this8.alertService.success('Uploaded Successfully !!', true);

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
                _this10.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                console.log(_this10.fileUploadProgress);
              } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response) {
                _this10.fileUploadProgress = '';
                console.log(events.body); //alert('SUCCESS !!');

                _this10.alertService.success('Uploaded Successfully !!', true);

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
              //console.log('data => ', data)
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

                _this12.initForm(); //this.appRouterService.appRouter(this.userObj);

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
        }, {
          key: "showEditingFormUserLevels",
          value: function showEditingFormUserLevels(_userObj) {
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


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/notification.service */
      "OC8m");
      /* harmony import */


      var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/utility.service */
      "A1CT");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, authenticationService, utilityService, notificationService) {
          var _this13 = this;

          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.utilityService = utilityService;
          this.notificationService = notificationService;
          this.TransactionActionType = src_app_models__WEBPACK_IMPORTED_MODULE_5__["TransactionActionType"];
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
                $('.navbar').css("right", "0px");
                $('.navbar').show();
              });
              $('.btn-back').on('click', function (e) {
                $('.navbar').css("right", "-350px");
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
          type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
        }, {
          type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])], HeaderComponent);
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
              //console.log('data => ', data)
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

                _this15.initForm(); //this.appRouterService.appRouter(this.userObj);

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

              _this15.loading = false;
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
                _this17.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                console.log(_this17.fileUploadProgress);
              } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].Response) {
                _this17.fileUploadProgress = '';
                console.log(events.body); //alert('SUCCESS !!');

                _this17.fileData4Profile = null;

                _this17.alertService.success('Uploaded Successfully !!', true);

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
            console.log('411', this.authenticationService.currentUserValue);
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
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("426 :: msc :: Dialog result: ".concat(JSON.stringify(result)));
            });
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


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  \r\n    <div class=\"col-xl-12 col-md-12 mb-4\">\r\n        <div class=\"card shadow h-100\">\r\n            <div class=\"card-header\">\r\n                <div class=\"font-weight-bold text-primary\" i18n>User Management</div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    \r\n                    <div class=\"col-xl-12 col-12 mb-4\">\r\n                        <div class=\"view view-cascade gradient-card-header white\">\r\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                                class=\"row-border hover table table-striped table-responsive-md btn-table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"d-none\" i18n>ID</th>\r\n                                        <th i18n>Email</th>\r\n                                        <th i18n>Name</th>\r\n                                        <th i18n>Role</th>\r\n                                        <th i18n>Mobile</th>\r\n                                        <th i18n>Verified</th>\r\n                                        <th class=\"text-right\" i18n>Actions</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentTransactionDetailsArray)\">\r\n                                        <td class=\"d-none\" i18n>{{obj._id}}</td>\r\n                                        <td i18n>{{obj.emailAddress}}</td>\r\n                                        <td i18n>{{obj.firstName}}</td>\r\n                                        <td i18n>{{obj.role}}</td>\r\n                                        <td i18n>{{obj.mobileNo}}</td>\r\n                                        <td>\r\n                                            <div\r\n                                                *ngIf=\"returnT4CurrentUserAllowedToShow(obj.role) && obj._id != authenticationService.currentUserValue._id\">\r\n\r\n\r\n                                                <span *ngIf=\"!obj.isVerified\"\r\n                                                    (click)=\"updateUsersVerificationStatus(obj, true)\"\r\n                                                    class=\"btn text-white badge badge-danger font-weight-light\">\r\n                                                    Pending\r\n                                                </span>\r\n                                                <span *ngIf=\"obj.isVerified\"\r\n                                                    class=\"badge badge-success font-weight-light\">\r\n                                                    Approved\r\n                                                </span>\r\n                                                \r\n\r\n                                            </div>\r\n                                        </td>\r\n                                        <td class=\"text-left\">\r\n                                            <div\r\n                                                *ngIf=\"returnT4CurrentUserAllowedToShow(obj.role) && obj._id != authenticationService.currentUserValue._id\">\r\n                                                <button *ngIf=\"obj.isVerified && returnT4CurrentUserIsSAdmin()\"\r\n                                                    class=\"btn btn-success btn-sm btn-xs mr-1\" (click)=\"navigate2EditUser(obj._id)\" data-title=\"Edit\">\r\n                                                    <i class=\"icon-pencil\"></i>\r\n                                                </button>\r\n                                                <button class=\"btn btn-success btn-sm btn-xs mr-1\" (click)=\"usersProfile(obj)\" data-title=\"View User Details\">\r\n                                                    <i class=\"icon-user\"></i>\r\n                                                </button>\r\n                                                \r\n                                                <button class=\"btn btn-success btn-sm btn-xs mr-1\" (click)=\"usersIncomeExpenseDetails(obj)\" data-title=\"Income Proof and Monthly Expenses Details\">\r\n                                                    <i class=\"icon-receipt\"></i>\r\n                                                </button>\r\n\r\n                                                <button class=\"btn btn-warning btn-sm btn-xs mr-1\" data-title=\"Block User\" *ngIf=\"obj.isVerified\" (click)=\"updateUsersVerificationStatus(obj, false)\">\r\n                                                    <i class=\"icon-lock\"></i>\r\n                                                </button>\r\n\r\n\r\n                                                <button class=\"btn btn-danger btn-sm btn-xs\" (click)=\"deleteUserById(obj._id)\" data-title=\"Delete\">\r\n                                                    <i class=\"icon-trash\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
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


      __webpack_exports__["default"] = "<h2 class=\"about-font-header mb-4 text-primary font-weight-light\">Welcome Admin!<span class=\"block-span\"></span></h2>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-primary text-white shadow h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                            Total Loans\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 text-capitalize text-cap\">\r\n                         0\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card  bg-warning text-white shadow h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                           Total Revenue\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                            0\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-success text-white shadow h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                            Total Lenders\r\n                        </div>\r\n                        <div class=\"row no-gutters align-items-center\">\r\n                            <div class=\"col-auto\">\r\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">0\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col\">\r\n                                            <div class=\"progress progress-sm mr-2\">\r\n                                                <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Pending Requests Card Example -->\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-secondary text-white shadow h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                            Total Borrowers</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">0</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-3 col-6 mb-4\">\r\n        <div class=\"card bg-primary text-white shadow\">\r\n            <div class=\"card-body\">\r\n                <div class=\"text-xs font-weight-bold text-uppercase mb-1\">\r\n                    Total Messages</div>\r\n                <div class=\"h5 mb-0 font-weight-bold\">0</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n   \r\n\r\n   \r\n</div>\r\n\r\n\r\n";
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

      var UserManagementComponent = /*#__PURE__*/function () {
        function UserManagementComponent(dialog, socketService, alertService, utilityService, authenticationService, router, elementRef) {
          var _this18 = this;

          _classCallCheck(this, UserManagementComponent);

          this.dialog = dialog;
          this.socketService = socketService;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.authenticationService = authenticationService;
          this.router = router;
          this.elementRef = elementRef;
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          this.dtOptions = {};
          this.PaymentTransactionDetailsArray = null;
          this.loading = false;
          var _data = {};
          this.socketService.getAllUsersWithRequestData(_data, 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
            if (data && data['success']) {
              _this18.PaymentTransactionDetailsArray = data["data"];

              _this18.populateUsersDataInTable(); //this.rerender();


              _this18.loading = false;
            } else {
              _this18.alertService.error(data['message']);

              _this18.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";
            _this18.PaymentTransactionDetailsArray = [];

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

        _createClass(UserManagementComponent, [{
          key: "updateUsersVerificationStatus",
          value: function updateUsersVerificationStatus(_userId, _isVerified) {
            var _this19 = this;

            this.alertService.success("Please wait while we updating status of user");
            this.socketService.updateUsersVerificationStatus(_userId, _isVerified).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                var usersObjArr = _this19.utilityService._.mapKeys(_this19.PaymentTransactionDetailsArray, '_id');

                usersObjArr[data["data"]["_id"]] = data["data"];
                _this19.PaymentTransactionDetailsArray = usersObjArr;

                _this19.populateUsersDataInTable(); //this.rerender();


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
                var usersObjArr = _this20.utilityService._.mapKeys(_this20.PaymentTransactionDetailsArray, '_id');

                delete usersObjArr[_userId];
                _this20.PaymentTransactionDetailsArray = usersObjArr;

                _this20.populateUsersDataInTable(); //this.rerender();


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

            console.log('95', this.authenticationService.currentUserValue);
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
                var _userId = result.data._id;

                var usersObjArr = _this21.utilityService._.mapKeys(_this21.PaymentTransactionDetailsArray, '_id');

                delete usersObjArr[_userId];
                usersObjArr[_userId] = result.data;
                _this21.PaymentTransactionDetailsArray = usersObjArr;
              }

              console.log("105 :: msc :: Dialog result: ".concat(JSON.stringify(result)));
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
              this.elementRef.nativeElement.querySelector('.paginate_button.next').removeEventListener('click');
            }
          }
        }, {
          key: "populateUsersDataInTable",
          value: function populateUsersDataInTable() {
            var _this22 = this;

            this.destroyTable();
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10,
              drawCallback: function drawCallback() {
                _this22.elementRef.nativeElement.querySelector('.paginate_button.next').addEventListener('click', _this22.onClick.bind(_this22));
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
            var _this23 = this;

            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy(); // Call the dtTrigger to rerender again

                _this23.dtTrigger.next();
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
            console.log('241', this.authenticationService.currentUserValue);
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
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("256 :: msc :: Dialog result: ".concat(JSON.stringify(result)));
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
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])], UserManagementComponent);
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


      __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xl-12 col-md-12 mb-4\">\r\n        <div class=\"card shadow h-100\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12 mb-4\">\r\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\">Payment Transactions</div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mb-4\">\r\n                        <div class=\"view view-cascade gradient-card-header white\">\r\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                            class=\"row-border hover table table-striped table-responsive-md btn-table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"d-none\">ID</th>\r\n                                        <th>Initiated By</th>\r\n                                        <th>Type</th>\r\n                                        <th>Date Time</th>\r\n                                        <th>Amount</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentTransactionDetailsArray)\">\r\n                                        <td class=\"d-none\">{{obj._id}}</td>\r\n                                        <td>{{obj.transactionInitiatedByUser[0].emailAddress}}</td>\r\n                                        <td>{{ utilityService.returnStringWithReplacing_(obj.transactionActionType) | titlecase }}</td>\r\n                                        <td>{{(utilityService._.get( obj,'transactionDetailsObj.create_time') || obj.createdOn) | date:'dd-MMM-YYYY' }}</td>\r\n                                        <td>{{obj.amount}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
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


      __webpack_exports__["default"] = "<div>\r\n    <app-header></app-header>\r\n</div>\r\n\r\n<div class=\"wrapper-outlet\">\r\n    <div class=\"container-fluid  pt-3\">\r\n        <router-outlet ></router-outlet>\r\n    </div>\r\n   \r\n</div>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n\t";
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


      __webpack_exports__["default"] = "<!-- addServiceTypes section -->\r\n<section class=\"addServiceTypes-page section-b-space pt-0\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n           \r\n            <div class=\"col-xl-12\">\r\n                <form [formGroup]=\"addServiceTypesForm\" class=\"theme-form\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <h5 class=\"blog-head font-600\">New Service Type</h5>\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-xl-12 mb-3\">\r\n                                    <label for=\"sessionType\">Parent Service Type</label>\r\n                                    <select [disabled]=\"editing\" formControlName=\"parentServicesTypesId\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.parentServicesTypesId.errors }\">\r\n                                        <option [ngValue]=\"''\">[Choose to Set As Parent category]</option>\r\n                                        <option *ngFor=\"let item of ParentServicesTypes; let i = index\"\r\n                                            [ngValue]=\"item._id\">\r\n                                            {{item.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-xl-12 mb-3\">\r\n                                    <label for=\"name\">Title</label>\r\n                                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.name.errors.required\">Name is required</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"description\">Description:</label>\r\n                                        <textarea class=\"form-control\" formControlName=\"description\" rows=\"5\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\">\r\n                                    </textarea>\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.description.errors.required\">Description is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"feeFromUserFixedAmount\">Charges for User:</label>\r\n                                        <input class=\"form-control\" formControlName=\"feeFromUserFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.feeFromUserFixedAmount.errors }\" />\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"submitted && f.feeFromUserFixedAmount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.feeFromUserFixedAmount.errors.required\">Charges for User is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"serviceFeeFromUserFixedAmount\">Service Charges:</label>\r\n                                        <input class=\"form-control\" formControlName=\"serviceFeeFromUserFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.serviceFeeFromUserFixedAmount.errors }\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && f.serviceFeeFromUserFixedAmount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.serviceFeeFromUserFixedAmount.errors.required\">Service Charges is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"feeToConsultFixedAmount\">Consult Fees:</label>\r\n                                        <input class=\"form-control\" formControlName=\"feeToConsultFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.feeToConsultFixedAmount.errors }\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && f.feeToConsultFixedAmount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.feeToConsultFixedAmount.errors.required\">Consult Fees is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"commisionToProtalFixedAmount\">Portal Commision:</label>\r\n                                        <input class=\"form-control\" formControlName=\"commisionToProtalFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.commisionToProtalFixedAmount.errors }\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && f.commisionToProtalFixedAmount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.commisionToProtalFixedAmount.errors.required\">Portal Commision is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <label for=\"\">Related Keywords:</label>\r\n                                    <div class=\"input-group mb-2\">\r\n                                        <input class=\"form-control\" [(ngModel)]=\"currentSkill\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"type one keyword at a time and click add button\" />\r\n                                        <div class=\"input-group-append\">\r\n                                          <button class=\"btn btn-success\" (click)=\"addItem(currentSkill)\">Add</button>\r\n                                        </div>\r\n                                      </div>\r\n                                                                         \r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-2\" *ngFor=\"let arrayItem of arrayItems; let i=index\">\r\n                                    <label [for]=\"arrayItem\" class=\"array-item-title\">\r\n                                        {{arrayItem}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12 text-center\">\r\n                                    <hr>\r\n                                    <button type=\"button\" (click)=\"onaddServiceTypesUpdateSubmit()\" [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\r\n                                    <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- addServiceTypes section -->";
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
              //console.log('data => ', data)
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
              //console.log('data => ', data)
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


      __webpack_exports__["default"] = "<div class=\"row mb-3\">\r\n  <div class=\"col-xl-6\">\r\n    <h4 class=\"text-primary\">Blogs</h4>\r\n  </div>\r\n  <div class=\"col-xl-6\">\r\n    <button class=\"btn btn-success btn-sm float-right\" data-toggle=\"modal\" data-target=\"#blogModal\">New</button>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-striped table-bordered\">\r\n  <thead>\r\n    <tr>\r\n      <th>Title</th>\r\n      <th>Description</th>\r\n      <!--<th>Status</th>-->\r\n      <th>Actions</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let obj2show of allBlogsData\">\r\n      <td>{{obj2show.title}}</td>\r\n      <td>{{obj2show.description}}</td>\r\n      <!--<td class=\"text-capitalize text-cap\">\r\n          <span class=\"badge\" [ngClass]=\"{'badge-success': (obj2show.status==SessionStatus.Approved || obj2show.status==SessionStatus.Accepted || obj2show.status==SessionStatus.Active || obj2show.status==SessionStatus.Completed || obj2show.status==SessionStatus.OngoingInitiated  || obj2show.status==SessionStatus.OngoingAccepted  || obj2show.status==SessionStatus.Ongoing), 'badge-danger': (obj2show.status==SessionStatus.Rejected || obj2show.status==SessionStatus.RejectedOngoing || obj2show.status==SessionStatus.Suspended), 'badge-info': ( obj2show.status==null || obj2show.status=='' || obj2show.status==SessionStatus.Pending)}\">\r\n              {{obj2show.status}}\r\n          </span>\r\n      </td>\r\n    -->\r\n      <td>\r\n          <label title=\"Preview\"\r\n              (click)=\"mediaPreviewModel(obj2show.blogsDocument, 'image')\">\r\n              <i class=\"icon-eye m-2 text-success\"></i>\r\n          </label>\r\n      </td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n<div class=\"modal fade\" id=\"blogModal\">\r\n  <div class=\"modal-dialog modal-dialog-centered  modal-lg\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title text-primary\">New Blog</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"userBlogsForm\">\r\n          <div class=\"row mb-3\">\r\n            <div class=\"col-xl-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Blog Title</label>\r\n                <input type=\"text\" formControlName=\"title\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" />\r\n                <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.title.errors.required\">Blog Title is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"description\">Contents</label>\r\n                <textarea type=\"number\" formControlName=\"description\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" cols=\"40\" rows=\"5\" class=\"form-control\"></textarea>\r\n                <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.description.errors.required\">\r\n                    Contents is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"blogsDocument\">Image Cover &nbsp;</label>\r\n\r\n                <img *ngIf=\"f.blogsDocument.value\" [src]=\"f.blogsDocument.value\"\r\n                  class=\"border img-fluid mb-3\" height=\"50\" width=\"50\" />\r\n\r\n                <input *ngIf=\"!fileData4blogsDocumentPendingForUpload\"\r\n                  id=\"ctrlUploadblogsDocument\" type=\"file\" name=\"image\" accept=\"image/*\"\r\n                  (change)=\"onfileProgressForBlogsDocument($event)\">\r\n                <i *ngIf=\"fileData4blogsDocumentPendingForUpload\"\r\n                  class=\"icon-upload m-2 cursor-pointer text-success\" (click)=\"onUploadForBlogsDocument()\">\r\n                  Upload\r\n                </i>\r\n                <div *ngIf=\"submitted && f.blogsDocument.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.blogsDocument.errors.required\">Image Cover is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-12\">\r\n              <button class=\"btn btn-success btn-sm float-right\" (click)=\"onBlogsUpdateSubmit()\">\r\n                <i class=\"icon icon-plus\"></i>\r\n                ADD\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>";
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


      __webpack_exports__["default"] = "  <!--copyright start-->\r\n  <div class=\"agency copyright\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"link-horizontal\">\r\n                    <ul>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\">Privacy Policy</a>\r\n                        </li>\r\n\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\">Terms of Use</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/faqs\" routerLinkActive=\"active\">FAQs</a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div>\r\n                    <h6 class=\"copyright-text text-white text-right\">© 2020 Avitii Lender System\r\n\r\n                    </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!--copyright end-->\r\n  \r\n ";
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

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HomeComponent);
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


      __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xl-12 col-md-12 mb-4\">\r\n        <div class=\"card shadow h-100\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12 mb-4\">\r\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\">Borrower's Earning</div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mb-4\">\r\n                        <div class=\"view view-cascade gradient-card-header white\">\r\n                            <table class=\"table table-striped table-responsive-md btn-table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"d-none\">ID</th>\r\n                                        <th>Borrower</th>\r\n                                        <th>$Amount (Pending)</th>\r\n                                        <th>Total Transactions</th>\r\n                                        <th>Actions</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentBorrowerDetailsArray); let i = index\">\r\n                                        <td class=\"d-none\">{{obj._id}}</td>\r\n                                        <td>{{obj._id}}</td>\r\n                                        <td>{{obj.totalPayment4CurrentUser}}</td>\r\n                                        <td>{{obj.totalCountOfTransactions}}</td>\r\n                                        <td>\r\n                                            <div *ngIf=\"obj.totalPayment4CurrentUser>0\">\r\n                                                <i *ngIf=\"!editingIdCtrl[i]\" class=\"icon-pencil-alt m-2 text-danger\" (click)=\"editingIdCtrl[i]=true;\">\r\n                                                </i>\r\n                                                <input *ngIf=\"editingIdCtrl[i]\" name=\"transactionId\" [(ngModel)]=\"transactionIdCtrl[i]\">\r\n                                                <i *ngIf=\"editingIdCtrl[i]\" class=\"icon-check-box m-2 text-success\" (click)=\"updateTransactionIdDoPaymentForBorrower(i, transactionIdCtrl[i], obj)\">\r\n                                                </i>\r\n                                                <i *ngIf=\"editingIdCtrl[i]\" class=\"icon-close m-2 text-danger\" (click)=\"editingIdCtrl[i]=false;\">\r\n                                                </i>\r\n                                            </div>\r\n                                            <div *ngIf=\"obj.totalPayment4CurrentUser<=0\">\r\n                                                ###\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
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


      __webpack_exports__["default"] = "nav {\r\n    padding: 0;\r\n}\r\nheader img{\r\n    height: 3.3rem;\r\n}\r\nheader nav ul .mega-menu .mega-menu-container {\r\n\r\n    min-width: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmhlYWRlciBpbWd7XHJcbiAgICBoZWlnaHQ6IDMuM3JlbTtcclxufVxyXG5oZWFkZXIgbmF2IHVsIC5tZWdhLW1lbnUgLm1lZ2EtbWVudS1jb250YWluZXIge1xyXG5cclxuICAgIG1pbi13aWR0aDogYXV0bztcclxufVxyXG4iXX0= */";
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

      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"], _service_types_add_service_types_add_component__WEBPACK_IMPORTED_MODULE_11__["ServiceTypesAddComponent"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"], _payment_transactions_payment_transactions_component__WEBPACK_IMPORTED_MODULE_13__["PaymentTransactionsComponent"], _borrower_earnings_borrower_earnings_component__WEBPACK_IMPORTED_MODULE_14__["BorrowerEarningsComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__["AddUserComponent"], _user_levels_user_levels_component__WEBPACK_IMPORTED_MODULE_18__["UserLevelsComponent"], _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_19__["BlogsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_17__["DataTablesModule"]]
      })], AdminModule);
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


      __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xl-12 col-md-12 mb-4\">\r\n        <div class=\"card shadow h-100\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12 mb-4\">\r\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\">Service Types</div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mb-4\">\r\n                        <div class=\"view view-cascade gradient-card-header white\">\r\n                            <table class=\"table table-striped table-responsive-md btn-table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Type</th>\r\n                                        <th>Charges</th>\r\n                                        <th>Service Charges</th>\r\n                                        <th>Consult Fees</th>\r\n                                        <th>Portal Commision</th>\r\n                                        <th>Sub Types</th>\r\n                                        <th>#</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let obj of ParentServicesTypes\">\r\n                                        <td>{{obj.name}}</td>\r\n                                        <td>{{obj.feeFromUserFixedAmount}}</td>\r\n                                        <td>{{obj.serviceFeeFromUserFixedAmount}}</td>\r\n                                        <td>{{obj.feeToConsultFixedAmount}}</td>\r\n                                        <td>{{obj.commisionToProtalFixedAmount}}</td>\r\n                                        <td>\r\n                                            <table class=\"table table-responsive-md btn-table\">\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let objInner of obj.childServicesTypes\">\r\n                                                        <td>{{objInner.name}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </td>\r\n                                        <td>\r\n                                            <button type=\"button\" (click)=\"deleteById(obj._id)\" class=\"btn btn-outline-primary btn-sm m-0 waves-effect\">Delete</button>\r\n                                          \r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
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
          var _this26 = this;

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
            return _this26.currentUser = x;
          });
          this.callLatestPaymentDetails();
        }

        _createClass(BorrowerEarningsComponent, [{
          key: "callLatestPaymentDetails",
          value: function callLatestPaymentDetails() {
            var _this27 = this;

            var _data = {};
            this.socketService.getAllBorrowerPaymentTransactionDetails(_data).pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              if (data && data['success']) {
                _this27.PaymentBorrowerDetailsArray = data["data"];
                _this27.loading = false;
              } else {
                _this27.alertService.error(data['message']);

                _this27.loading = false;
              }
            }, function (error) {
              var errorMsg2show = "";
              _this27.PaymentBorrowerDetailsArray = [];

              try {
                if (error && error.error && error.error.message) {
                  errorMsg2show = error.error.message;
                } else if (error && error.message) {
                  errorMsg2show = error.message;
                } else {
                  errorMsg2show = error;
                }
              } catch (ex) {}

              _this27.alertService.error(errorMsg2show);

              _this27.loading = false;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateTransactionIdDoPaymentForBorrower",
          value: function updateTransactionIdDoPaymentForBorrower(index, transactionId, obj) {
            var _this28 = this;

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
                  _this28.callLatestPaymentDetails();

                  _this28.loading = false;
                } else {
                  _this28.alertService.error(data['message']);

                  _this28.loading = false;
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

                _this28.alertService.error(errorMsg2show);

                _this28.loading = false;
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


      __webpack_exports__["default"] = "<!-- register section -->\r\n<div class=\"row pt-0\">\r\n    <div class=\"col-xl-12 col-12\">\r\n        <form [formGroup]=\"registerForm\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header d-none\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div id=\"profile_basic_details\">\r\n                        <div class=\"form-row mb-2  mb-3\">\r\n                            <div class=\"col-xl-3\">\r\n                                <div>\r\n                                    <img id=\"imgSelfProfileUrl\" [src]=\"f.selfProfileUrl.value || imgSelfProfileUrl\" onerror=\"this.src='/assets/img/nouser.png';\" class=\"img-fluid\" />\r\n                                </div>\r\n                                <div class=\"text-center\">\r\n                                    <i class=\"icon-pencil-alt m-2 text-success\" (click)=\"openFileUploaderForProfile()\">\r\n                                        <input id=\"ctrlUploadProfile\" hidden type=\"file\" name=\"image\" accept=\"image/*\"\r\n                                            (change)=\"fileProgressForProfile($event)\">\r\n                                    </i>\r\n                                    <i *ngIf=\"selfProfileUrlPendingForUpload\" class=\"icon-upload m-2 text-success\" (click)=\"onUploadForProfile()\">\r\n                                    </i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-9\">\r\n                                <div class=\"form-row mb-3\">\r\n                                    <div class=\"col-xl-6\">\r\n                                        <label for=\"firstName\">First Name</label>\r\n                                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xl-6\">\r\n                                        <label for=\"lastName\">Last Name</label>\r\n                                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row mb-3\">\r\n                                    <div class=\"col-xl-12\">\r\n                                        <div class=\"card mb-3\">\r\n                                            <div class=\"card-body\">\r\n                                                <label for=\"emailAddress\">\r\n                                                    Email Id <sub>Please verify if email id exists before\r\n                                                        saving the users details</sub>\r\n                                                    <i *ngIf=\"isOtpSent\" class=\"icon-check-box m-2 text-success\">\r\n                                                    </i>\r\n                                                </label>\r\n                                                <div class=\"input-group mb-3\">\r\n                                                    <input [readonly]=\"isOtpSent || editing\" type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\" required />\r\n                                                    <div class=\"input-group-append\">\r\n                                                        <button *ngIf=\"!isOtpSent && !editing\" class=\"btn btn-primary\" (click)=\"onVerifySendOtp()\">Verify</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"mt-2\" *ngIf=\"isOtpSent\">\r\n                                                    <strong>Default Password: avitii@987 </strong> User can reset his/her password later.\r\n                                                </div>\r\n                                                <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.emailAddress.errors.required\">Email is required</div>\r\n                                                    <div *ngIf=\"f.emailAddress.errors.email\">Invalid Email format.</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xl-12\">\r\n                                        <label for=\"mobileNo\">\r\n                                            <i class=\"icon-mobile text-success\"></i>\r\n                                            WhatsApp Number</label>\r\n                                        <input type=\"number\" formControlName=\"mobileNo\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.mobileNo.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.mobileNo.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.mobileNo.errors.required\">WhatsApp Number is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"f.role.value==Role.Admin\">\r\n                                    <div class=\"col-xl-12 mt-3\">\r\n                                        <p class=\"font-weight-bold\">App Permissions </p>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xl-6 mb-2\" *ngFor=\"let data of AppAccessPermissions; let i=index\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xl-6\">\r\n                                                        <label>{{data.name}}</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-6\">\r\n                                                        <div class=\"btn-group btn-group btn-group-sm\">\r\n                                                            <button type=\"button\" class=\"btn\" (click)=\"onSkillSetsChange(data.value,true)\" [ngClass]=\"{ 'btn-success': onInitSetCheckedValue(data.value)==true, 'btn-outline-success':onInitSetCheckedValue(data.value)==false}\">\r\n                                                                Yes\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn\" (click)=\"onSkillSetsChange(data.value,false)\" [ngClass]=\"{ 'btn-danger': onInitSetCheckedValue(data.value)==false, 'btn-outline-danger':onInitSetCheckedValue(data.value)==true}\">\r\n                                                                No\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"submitted && f.appPermissions.errors\" class=\"error\">\r\n                                            <div *ngIf=\"f.appPermissions.errors.required\" class=\"text-red\">atleast one permission is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xl-12\">\r\n                                        <div class=\"badge badge-primary font-weight-normal m-2\" *ngFor=\"let educationItem of f.education.value\">\r\n                                            <span [textContent]=\"educationItem\"> </span> &nbsp;\r\n                                            <i class=\"icon-trash\" (click)=\"onAddRemoveEducationDetails(educationItem, false)\">\r\n                                            </i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-12 text-center\">\r\n                            <button type=\"button\" (click)=\"onSubmitRegisterUser()\" [disabled]=\"loading\" class=\"btn btn-primary float-right\">Save</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- register section -->";
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


      __webpack_exports__["default"] = "<div class=\"row mb-3\">\r\n  <div class=\"col-xl-6\">\r\n    <h4 class=\"text-primary\">User Levels</h4>\r\n  </div>\r\n  <div class=\"col-xl-6\">\r\n    <button class=\"btn btn-success btn-sm float-right\" data-toggle=\"modal\" data-target=\"#userLevelModal\">New</button>\r\n  </div>\r\n</div>\r\n<div class=\"card mb-3\">\r\n  <div class=\"card-header\">Lenders</div>\r\n  <div class=\"card-body p-0\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>User Level Name</th>\r\n          <th>Amount Spent</th>\r\n          <th>Contracts</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n\r\n        <tr *ngFor=\"let obj2show of allUserLevelsDataLenders\">\r\n          <td>{{obj2show.name}}</td>\r\n          <td>{{obj2show.minimumSpent}}</td>\r\n          <td>{{obj2show.minimumContract}}</td>\r\n          <td>\r\n            <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Edit\">\r\n              <i class=\"icon-pencil\"></i>\r\n            </button>\r\n\r\n            <button class=\"btn btn-danger btn-sm btn-xs\" data-title=\"Delete\">\r\n              <i class=\"icon-trash\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">Borrowers</div>\r\n  <div class=\"card-body p-0\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>User Level Name</th>\r\n          <th>Amount Spent</th>\r\n          <th>Contracts</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let obj2show of allUserLevelsDataBorrower\">\r\n          <td>{{obj2show.name}}</td>\r\n          <td>{{obj2show.minimumSpent}}</td>\r\n          <td>{{obj2show.minimumContract}}</td>\r\n          <td>\r\n            <button class=\"btn btn-success btn-sm btn-xs mr-1\" data-title=\"Edit\">\r\n              <i class=\"icon-pencil\"></i>\r\n            </button>\r\n            <button class=\"btn btn-danger btn-sm btn-xs\" data-title=\"Delete\">\r\n              <i class=\"icon-trash\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"userLevelModal\">\r\n  <div class=\"modal-dialog modal-dialog-centered  modal-lg\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title text-primary\">New User Level</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"userUserLevelsForm\">\r\n          <div class=\"row mb-3\">\r\n            <div class=\"col-xl-12\">\r\n              <label for=\"role\">User Type</label>\r\n              <div class=\"form-group\">\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input name=\"role\" id=\"user_role_0\" type=\"radio\" class=\"custom-control-input\" [value]=\"Role.Lender\"\r\n                    formControlName=\"role\" [ngClass]=\"{ 'is-invalid': submitted && f.role.errors }\">\r\n                  <label for=\"user_role_0\" class=\"custom-control-label\">{{Role.Lender}}</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input name=\"role\" id=\"user_role_1\" type=\"radio\" class=\"custom-control-input\" [value]=\"Role.Borrower\"\r\n                    formControlName=\"role\" [ngClass]=\"{ 'is-invalid': submitted && f.role.errors }\">\r\n                  <label for=\"user_role_1\" class=\"custom-control-label\">{{Role.Borrower}}</label>\r\n                </div>\r\n\r\n                <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.role.required\">User Type Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-xl-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">User Level Name</label>\r\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"\r\n                  placeholder=\"e.g. Good Lender, Best Borrower etc\" />\r\n                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.name.errors.required\">User Level Name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"minimumSpent\">Min. Amount Spent</label>\r\n                <input type=\"number\" formControlName=\"minimumSpent\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.minimumSpent.errors }\" />\r\n                <div *ngIf=\"submitted && f.minimumSpent.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.minimumSpent.errors.required\">Min. Amount Spent is required</div>\r\n                  <div *ngIf=\"f.minimumSpent.errors.min\">Amount must be non zero</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"minimumContract\">Number of contracts</label>\r\n                <input type=\"number\" formControlName=\"minimumContract\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.minimumContract.errors }\" />\r\n                <div *ngIf=\"submitted && f.minimumContract.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.minimumContract.errors.required\">Number of contracts is required</div>\r\n                  <div *ngIf=\"f.minimumContract.errors.min\">Amount must be non zero</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-12\">\r\n              <button class=\"btn btn-success btn-sm float-right\" (click)=\"onUserLevelsUpdateSubmit()\">\r\n                <i class=\"icon icon-plus\"></i>\r\n                ADD\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>";
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


      __webpack_exports__["default"] = "<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\r\n\r\n    <!-- Sidebar - Brand -->\r\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\">\r\n        <img class=\"img-fluid\" src=\"/assets/img/avitii-logo.png\">\r\n    </a>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider my-0\">\r\n\r\n    <!-- Nav Item - Dashboard -->\r\n    <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/admin\">\r\n            <i class=\"icon icon-home\"></i>\r\n            <span>Dashboard</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <!-- <div class=\"sidebar-heading\">\r\n        Interface\r\n    </div> -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin/users\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-user\"></i>\r\n            <span>User Mangement</span></a>\r\n    </li>\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin/add-user\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-bag\"></i>\r\n            <span>Add User</span></a>\r\n    </li> -->\r\n   \r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n            <i class=\"icon icon-credit-card\"></i>\r\n            <span>Transactions</span>\r\n        </a>\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n               \r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/admin/payments',{'transactionActionType':TransactionActionType.plan_purchase})\" routerLinkActive=\"active\">Plan Purchase</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/admin/payments',{'transactionActionType':TransactionActionType.insurance_purchase})\" routerLinkActive=\"active\">Insurance Purchase</a>\r\n              \r\n            </div>\r\n        </div>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-comments\"></i>\r\n            <span>Messages</span></a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin/user-levels\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-medall-alt\"></i>\r\n            <span>User Levels</span></a>\r\n    </li>\r\n\r\n    \r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin/blogs\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-clipboard\"></i>\r\n            <span>Blogs</span></a>\r\n    </li>\r\n\r\n \r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-comments\"></i>\r\n            <span>Messages</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-calendar\"></i>\r\n            <span>Calendar</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-star\"></i>\r\n            <span>My Ratings</span></a>\r\n    </li> -->\r\n\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\r\n            <i class=\"icon icon-settings\"></i>\r\n            <span>Settings</span>\r\n        </a>\r\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n             \r\n                <a class=\"collapse-item\" routerLink=\"/lender/profile\">My Profile</a>\r\n                <a class=\"collapse-item\" href=\"register.html\">Change Password</a>\r\n                <a class=\"collapse-item\" href=\"forgot-password.html\">Bank Details</a>\r\n                <a class=\"collapse-item\" href=\"forgot-password.html\">Payment Agreement</a>\r\n               \r\n            </div>\r\n        </div>\r\n    </li> -->\r\n\r\n \r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/logout\">\r\n            <i class=\"icon icon-flickr-alt\"></i>\r\n            <span>Logout</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <!-- <hr class=\"sidebar-divider d-none d-md-block\"> -->\r\n\r\n    <!-- Sidebar Toggler (Sidebar) -->\r\n    <!-- <div class=\"text-center d-none d-md-inline\">\r\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n    </div> -->\r\n\r\n\r\n</ul>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Nav Start [ngClass]=\"{'dark position-relative' : (router.url!='/')}\"-->\r\n<header id=\"custom-header-nav\" class=\"ecommerce nav-fix shadow-sm p-0 d-none\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <nav>\r\n                    <a class=\"logo-light m-r-auto\" routerLink=\"/home\">\r\n                        <img class=\"img-fluid\" src=\"/assets/img/avitii-logo.png\"></a>\r\n\r\n                    <div class=\"navbar m-l-auto p-1 btn-back\" id=\"togglebtn\">\r\n                        <div class=\"responsive-btn\">\r\n                            <h5 class=\"btn-back\">back</h5>\r\n                        </div>\r\n                        <ul class=\"main-menu\">\r\n                            <li><a routerLink=\"/admin\">Home</a></li>\r\n                            <!-- <li><a routerLink=\"/admin/services\" routerLinkActive=\"active\">Services</a></li>\r\n                            <li><a routerLink=\"/admin/servicesadd\" routerLinkActive=\"active\">Services<i class=\"icon-plus m-2 text-success\"></i></a></li> -->\r\n                            <li><a routerLink=\"/admin/users\" routerLinkActive=\"active\">User Mangement</a></li>\r\n                            <li><a routerLink=\"/admin/add-user\" routerLinkActive=\"active\">User<i class=\"icon-plus m-2 text-success\"></i></a></li>\r\n                            <li><a routerLink=\"/admin/payments\" routerLinkActive=\"active\">Transactions</a></li>\r\n                            <li><a routerLink=\"/admin/earnings\" routerLinkActive=\"active\">Payments</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"top-header-right mr-1\">\r\n                        <ul>\r\n\r\n                            <li class=\"cart  d-none\">\r\n                                <a aria-expanded=\"false\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n                                    <i class=\"icon-comment-alt\"></i>\r\n                                </a>\r\n\r\n                            </li>\r\n                            <li class=\"cart\">\r\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\" id=\"dropdownMenuButton1\">\r\n                                    <i class=\"icon-bell bell\"></i>\r\n                                    <span *ngIf=\"(utilityService._.keys(notificationService.appNotifications).length)>0\" class=\"badge badge-primary bell-count\" [textContent]=\"utilityService._.keys(notificationService.appNotifications).length\"></span>\r\n                                </a>\r\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                    <ul class=\"shopping-cart\">\r\n                                        <li *ngFor=\"let notification of utilityService._.values(notificationService.appNotifications)\">\r\n                                            <div class=\"pb-2\">\r\n                                                <div class=\"mb-1\">{{notification.message}}</div>\r\n                                                <div class=\"font-weight-light small mb-1\">{{notification.description}}</div>\r\n                                                <button class=\"btn btn-secondary btn-sm\" (click)=\"notificationService.check4Notification(notification)\">View</button>\r\n                                            </div>\r\n                                        </li>\r\n\r\n\r\n\r\n                                    </ul>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"cart\">\r\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\" id=\"dropdownMenuButton1\">\r\n                                    <img class=\"userimg mt-n2\" src=\"/assets/img/user-default.png\">\r\n                                </a>\r\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                    <ul class=\"shopping-cart\">\r\n                                        <li>\r\n                                            <a class=\"h6 d-block\" routerLink=\"/admin\">\r\n                                                {{currentUser.firstName}}\r\n                                                <span class=\"badge badge-primary float-right\"\r\n                                                    [textContent]=\"currentUser.role\"></span>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li><a routerLink=\"/admin/profile\">Profile</a></li>\r\n                                        <hr>\r\n                                        <li>\r\n                                            <a (click)=\"logout()\">Logout</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"responsive-btn\">\r\n                        <a class=\"toggle-nav\"><i aria-hidden=\"true\" class=\"icon-align-center text-white\"></i></a>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- Nav end-->";
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
          var _this29 = this;

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
              _this29.PaymentTransactionDetailsArray = data["data"];

              _this29.populateUsersDataInTable(); //this.rerender();


              _this29.loading = false;
            } else {
              _this29.alertService.error(data['message']);

              _this29.loading = false;
            }
          }, function (error) {
            var errorMsg2show = "";
            _this29.PaymentTransactionDetailsArray = [];

            try {
              if (error && error.error && error.error.message) {
                errorMsg2show = error.error.message;
              } else if (error && error.message) {
                errorMsg2show = error.message;
              } else {
                errorMsg2show = error;
              }
            } catch (ex) {}

            _this29.alertService.error(errorMsg2show);

            _this29.loading = false;
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
            var _this30 = this;

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10,
              drawCallback: function drawCallback() {
                _this30.elementRef.nativeElement.querySelector('.paginate_button.next').addEventListener('click', _this30.onClick.bind(_this30));
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
            var _this31 = this;

            if (this.datatableElement && this.datatableElement.dtInstance) {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy(); // Call the dtTrigger to rerender again

                _this31.dtTrigger.next();
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