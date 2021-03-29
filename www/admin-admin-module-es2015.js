(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "+Q42":
/*!************************************************************************!*\
  !*** ./src/app/admin/service-types-add/service-types-add.component.ts ***!
  \************************************************************************/
/*! exports provided: ServiceTypesAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypesAddComponent", function() { return ServiceTypesAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_types_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-types-add.component.html */ "ShmR");
/* harmony import */ var _service_types_add_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-types-add.component.css */ "Dx9I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/service-types.service */ "7ZPZ");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models */ "VHTt");













let ServiceTypesAddComponent = class ServiceTypesAddComponent {
    constructor(formBuilder, authenticationService, serviceTypesService, alertService, appRouterService, utilityService, route) {
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
        this.SessionStatus = src_app_models__WEBPACK_IMPORTED_MODULE_12__["SessionStatus"];
        // redirect to home if already logged in
        if (!this.authenticationService.currentUserValue) {
            this.appRouterService.appRouter('');
        }
        this.initForm();
        this.serviceTypesService.getServiceTypesParentAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.ParentServicesTypes = data["data"];
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
            this.ParentServicesTypes = [];
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
        this.sub = this.route.queryParams.subscribe(params => {
            this.loanId = params['id'];
            if (this.loanId) {
                this.serviceTypesService.getServiceTypesById(this.loanId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(data => {
                    //console.log('data => ', data)
                    if (data && data['success']) {
                        //alert(JSON.stringify( data));
                        this.showEditingForm(data["data"]);
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
        });
    }
    showEditingForm(_userObj) {
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
            updatedBy: [this.authenticationService.currentUserValue._id || ''],
        });
        this._sessionType = _userObj.sessionType;
    }
    initForm() {
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
            updatedBy: [''],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.addServiceTypesForm.controls; }
    onaddServiceTypesUpdateSubmit() {
        this.submitted = true;
        if (this.addServiceTypesForm.invalid) {
            return;
        }
        let _feeFromUserFixedAmount = this.addServiceTypesForm.value["feeFromUserFixedAmount"];
        let _feeToConsultFixedAmount = this.addServiceTypesForm.value["feeToConsultFixedAmount"];
        let _commisionToProtalFixedAmount = this.addServiceTypesForm.value["commisionToProtalFixedAmount"];
        if (_feeFromUserFixedAmount != (_feeToConsultFixedAmount + _commisionToProtalFixedAmount)) {
            this.alertService.error("Please check Amounts, User charges must be equal to addition of consult and portal fees");
            return;
        }
        if (this.loanId) {
            this.serviceTypesService.updateServiceTypesById(this.addServiceTypesForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(data => {
                if (data && data['success']) {
                    //alert(JSON.stringify( data));
                    this.alertService.success('ServiceTypes Updated successfully', true);
                    this.appRouterService.appRouteToPath('/admin/services');
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
            this.serviceTypesService.addNewServiceTypes(this.addServiceTypesForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(data => {
                if (data && data['success']) {
                    //alert(JSON.stringify( data));
                    this.alertService.success('ServiceTypes Added successfully', true);
                    this.appRouterService.appRouteToPath('/admin/services');
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
    get skillTags() {
        return this.addServiceTypesForm.get('skillTags');
    }
    addItem(item) {
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
    removeItem() {
        this.arrayItems.pop();
        this.skillTags.removeAt(this.skillTags.length - 1);
    }
    ngOnInit() {
        this.arrayItems = [];
    }
};
ServiceTypesAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_8__["ServiceTypesService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_7__["AppRouterService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
];
ServiceTypesAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-types-add',
        template: _raw_loader_service_types_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_types_add_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_8__["ServiceTypesService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_7__["AppRouterService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]])
], ServiceTypesAddComponent);



/***/ }),

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "TRGY");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "gY7f");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "WLd7");
/* harmony import */ var _service_types_add_service_types_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service-types-add/service-types-add.component */ "+Q42");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-management/user-management.component */ "OcPW");
/* harmony import */ var _payment_transactions_payment_transactions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-transactions/payment-transactions.component */ "yVJR");
/* harmony import */ var _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../shared/profile/profile.component */ "uJHj");
/* harmony import */ var _borrower_earnings_borrower_earnings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./borrower-earnings/borrower-earnings.component */ "rCAk");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/role */ "z56L");
/* harmony import */ var _components_guards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/_guards */ "CRXG");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-user/add-user.component */ "4pOR");















const routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            {
                path: 'services',
                component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
                canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
                data: {
                    appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit],
                }
            },
            {
                path: 'servicesadd',
                component: _service_types_add_service_types_add_component__WEBPACK_IMPORTED_MODULE_7__["ServiceTypesAddComponent"],
                canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
                data: {
                    appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit],
                }
            },
            {
                path: 'users',
                component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__["UserManagementComponent"],
                canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
                data: {
                    appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].usersAddEdit, _models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit],
                }
            },
            {
                path: 'add-user',
                component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__["AddUserComponent"],
                canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
                data: {
                    appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].usersAddEdit, _models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit],
                }
            }, {
                path: 'admin-users',
                component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_8__["UserManagementComponent"],
                canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
                data: {
                    appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit],
                }
            },
            {
                path: 'add-admin-user',
                component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__["AddUserComponent"],
                canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
                data: {
                    appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].adminAddEdit],
                }
            },
            {
                path: 'payments',
                component: _payment_transactions_payment_transactions_component__WEBPACK_IMPORTED_MODULE_9__["PaymentTransactionsComponent"],
                canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
                data: {
                    appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].borrowerPayments],
                }
            },
            {
                path: 'profile',
                component: _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            },
            {
                path: 'earnings',
                component: _borrower_earnings_borrower_earnings_component__WEBPACK_IMPORTED_MODULE_11__["BorrowerEarningsComponent"],
                canActivate: [_components_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
                data: {
                    appPermissions: [_models_role__WEBPACK_IMPORTED_MODULE_12__["AppAccessPermissions"].earningTransactions],
                }
            },
        ]
    },
    // otherwise redirect to home
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "165m":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/payment-transactions/payment-transactions.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXRyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "37Rf":
/*!***************************************************!*\
  !*** ./src/app/admin/footer/footer.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\r\n    padding: 0px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMDtcclxufSJdfQ== */");

/***/ }),

/***/ "4pOR":
/*!******************************************************!*\
  !*** ./src/app/admin/add-user/add-user.component.ts ***!
  \******************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-user.component.html */ "u6Hf");
/* harmony import */ var _add_user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user.component.css */ "z929");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var _models_hearAboutUs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/hearAboutUs */ "TFt9");
/* harmony import */ var src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/app-router.service */ "KHIh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");











//import { MustMatch } from '../_helpers/must-match-validator';






const uploadAPI = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/api/post/upload/assetdata';
const uploadAccessUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl + '/';
let AddUserComponent = class AddUserComponent {
    constructor(http, formBuilder, router, authenticationService, userService, alertService, appRouterService, route, socketService) {
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
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_7__({ year: this.year, month: this.month, day: this.day, hour: this.hours, minute: this.minutes }).add(1, 'hour').format('MM/DD/YYYY hh:mm A');
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_7__({ year: this.year, month: this.month, day: this.day, hour: this.hours, minute: this.minutes }).add(1, 'month').format('MM/DD/YYYY hh:mm A');
        for (let index in src_app_models__WEBPACK_IMPORTED_MODULE_9__["AppAccessPermissions"]) {
            let obj = {
                name: index,
                value: src_app_models__WEBPACK_IMPORTED_MODULE_9__["AppAccessPermissions"][index]
            };
            this.AppAccessPermissions.push(obj);
        }
        this.showInitForm();
        let paramobj = history.state;
        if (paramobj) {
            this.userId = paramobj['userId'];
            delete history.state['userId'];
        }
        if (this.userId) {
            this.userService.getUserById(this.userId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe(data => {
                if (data && data['success']) {
                    this.showEditingForm(data["data"]);
                    this.loading = false;
                    this.isOtpSent = true;
                    this.editing = true;
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
    }
    showEditingForm(_userObj) {
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
        }, {
        // validator: MustMatch('password', 'confirmPassword'),
        // validate: EmailValidator('emailAddress')
        });
        this._role = _userObj.role || src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin;
        this.onClickRoleChange(this._role);
    }
    ngOnInit() {
    }
    showInitForm() {
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
        }, {
        // validator: MustMatch('password', 'confirmPassword'),
        // validate: EmailValidator('emailAddress')
        });
        this._role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin;
        this.sub = this.route.queryParams.subscribe(params => {
            let _data = params['id'];
            switch (_data) {
                case "ct":
                    this._role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Borrower;
                    break;
                case "cr":
                    this._role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Lender;
                    break;
                case 'ad':
                    this._role = src_app_models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin;
                    break;
                default:
                    break;
            }
            this.onClickRoleChange(this._role);
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onClickRoleChange(_role) {
        if (_role) {
            this.registerForm.get('role').setValue(_role);
        }
    }
    onVerifySendOtp() {
        this.isOtpSent = false;
        if (!this.isOtpSent) {
            this.submitted = true;
            console.log('inside Submit ' + this.registerForm.invalid);
            // stop here if form is invalid
            //(this.registerForm.controls.mobileNo.invalid || this.registerForm.controls.firstName.invalid || this.registerForm.controls.lastName.invalid || this.registerForm.controls.emailAddress.invalid)
            if (this.registerForm.controls.emailAddress.invalid) {
                return;
            }
            console.log('inside');
            this.loading = true;
            console.log("Reg Data => ", this.registerForm.value);
            this.registerForm.get('userName').setValue(this.registerForm.get('emailAddress').value);
            let _jsonData2send = this.registerForm.value;
            //delete _jsonData2send['selfProfileUrl'];
            this.userService.sendOtp2user(_jsonData2send)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe(data => {
                console.log('data => ', data);
                if (data && data['success']) {
                    //alert(JSON.stringify( data));
                    this.alertService.success('Verified!', true);
                    this.loading = false;
                    this.isOtpSent = true;
                    this.submitted = false;
                }
                else {
                    //alert(JSON.stringify(data['message']));
                    this.alertService.error(data['message']);
                    this.loading = false;
                    this.isOtpSent = false;
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
            });
        }
    }
    onSubmitRegisterUser() {
        if (this.selfProfileUrlPendingForUpload) {
            this.alertService.error("Please wait upload is in progress");
            return;
        }
        if (!this.isOtpSent) {
            this.alertService.error("Please Enter & Verify Email Id First");
            return;
        }
        this.submitted = true;
        // stop here if form is invalid
        //(this.registerForm.controls.password.invalid || this.registerForm.controls.confirmPassword.invalid || this.registerForm.controls.acceptTerms.invalid || this.registerForm.controls.otp.invalid) 
        if (this.registerForm.controls.mobileNo.invalid || this.registerForm.controls.firstName.invalid || this.registerForm.controls.lastName.invalid || this.registerForm.controls.emailAddress.invalid) {
            return;
        }
        console.log('inside');
        this.loading = true;
        console.log("Reg Data => ", this.registerForm.value);
        this.registerForm.get('userName').setValue(this.registerForm.get('emailAddress').value);
        let _jsonData2send = this.registerForm.value;
        //delete _jsonData2send['selfProfileUrl'];
        if (!this.editing) {
            this.socketService.addNewUser(_jsonData2send)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe(data => {
                console.log('data => ', data);
                if (data && data['success']) {
                    //alert(JSON.stringify( data));
                    this.loading = false;
                    this.alertService.success('user added successfully', true);
                    //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
                    this.router.navigate(['/admin/faculty/']);
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
            this.userService.updateUserById(_jsonData2send)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe(data => {
                if (data && data['success']) {
                    //alert(JSON.stringify( data));
                    this.alertService.success('user Updated successfully', true);
                    //this.appRouterService.appRouter(this.authenticationService.currentUserValue);
                    this.router.navigate(['/admin/faculty/']);
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
        if (!this.isOtpSent) {
            this.alertService.error("Please Enter & Verify Email Id First");
            return;
        }
        if (this.fileUploadProgress) {
            this.alertService.error("Upload still in progress. Please try again later");
            return;
        }
        const checkArray = this.registerForm.get('myProfileMedia');
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
            if (!this.registerForm.get('_id').value) {
                let _id = this.registerForm.get('emailAddress').value + '_' + lodash__WEBPACK_IMPORTED_MODULE_14__["now"]();
                this.registerForm.get('_id').setValue(_id);
            }
            const formData = new FormData();
            formData.append('files', currentFile);
            formData.append('documentId', this.registerForm.get('_id').value);
            this.fileUploadProgress = '0%';
            this.http.post(uploadAPI, formData, {
                reportProgress: true,
                observe: 'events'
            }).subscribe(events => {
                if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress) {
                    this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                    console.log(this.fileUploadProgress);
                }
                else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response) {
                    this.fileUploadProgress = '';
                    console.log(events.body);
                    //alert('SUCCESS !!');
                    this.alertService.success('Uploaded Successfully !!', true);
                    let _uploadedUrl = events.body["data"].path;
                    if (lodash__WEBPACK_IMPORTED_MODULE_14__["startsWith"](_uploadedUrl, '/')) {
                        _uploadedUrl = _uploadedUrl.substr(1);
                    }
                    this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
                    this.onMyProfileMediaUpdate(true, null, this.uploadedFilePath);
                }
            });
        }
    }
    onMyProfileMediaUpdate(_addT, _index, _url) {
        const checkArray = this.registerForm.get('myProfileMedia');
        if (lodash__WEBPACK_IMPORTED_MODULE_14__["isNaN"](parseInt(_index))) {
            //_index=0;
            _index = checkArray.length;
        }
        if (_addT) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_url));
        }
        else {
            if (parseInt(_index) >= 0) {
                checkArray.removeAt(_index);
            }
            else {
                let i = 0;
                checkArray.controls.forEach((item) => {
                    if (item.value == _url) {
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
            //this.registerForm.get('selfProfileUrl').setValue(reader.result);
            this.imgSelfProfileUrl = reader.result;
            this.selfProfileUrlPendingForUpload = true;
        };
    }
    onUploadForProfile() {
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
            let _id = this.registerForm.get('emailAddress').value + '_' + lodash__WEBPACK_IMPORTED_MODULE_14__["now"]();
            this.registerForm.get('_id').setValue(_id);
        }
        const formData = new FormData();
        formData.append('files', this.fileData4Profile);
        formData.append('documentId', this.registerForm.get('_id').value);
        this.fileUploadProgress = '0%';
        this.http.post(uploadAPI, formData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(events => {
            if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress) {
                this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                console.log(this.fileUploadProgress);
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response) {
                this.fileUploadProgress = '';
                console.log(events.body);
                //alert('SUCCESS !!');
                this.alertService.success('Uploaded Successfully !!', true);
                let _uploadedUrl = events.body["data"].path;
                if (lodash__WEBPACK_IMPORTED_MODULE_14__["startsWith"](_uploadedUrl, '/')) {
                    _uploadedUrl = _uploadedUrl.substr(1);
                }
                this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
                this.registerForm.get('selfProfileUrl').setValue(this.uploadedFilePath);
                this.selfProfileUrlPendingForUpload = false;
            }
        });
    }
    clickOnGoToNext(_step) {
        switch (_step) {
            case 2:
                this.element_btn_click_profile_skills_verification.click();
                break;
        }
    }
    onClickGenderChange(_gender) {
        if (_gender) {
            //this.registerForm.get('gender').setValue(_gender);
        }
    }
    onAddRemoveEducationDetails(education, addTremoveFalse) {
        const checkArray = this.registerForm.get('education');
        if (addTremoveFalse) {
            if (education) {
                if (checkArray.value.indexOf(education) == -1) {
                    checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](education));
                }
            }
            this.education = null;
        }
        else {
            let i = 0;
            checkArray.controls.forEach((item) => {
                if (item.value == education) {
                    checkArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    onAddRemoveAchievementsDetails(achievements, addTremoveFalse) {
        const checkArray = this.registerForm.get('achievements');
        if (addTremoveFalse) {
            if (achievements) {
                if (checkArray.value.indexOf(achievements) == -1) {
                    checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](achievements));
                }
            }
            this.achievements = null;
        }
        else {
            let i = 0;
            checkArray.controls.forEach((item) => {
                if (item.value == achievements) {
                    checkArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    onCheckboxChange(e) {
        const checkArray = this.registerForm.get('appPermissions');
        if (e.target.checked) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](e.target.value));
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
    onSkillSetsChange(skill, addedTremovedF) {
        const checkArray = this.registerForm.get('appPermissions');
        if (addedTremovedF) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](skill));
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
        const checkArray = this.registerForm.get('appPermissions');
        return (checkArray.value.indexOf(skill) > -1);
    }
    returnT4CurrentUserIsSAdmin() {
        try {
            if (this.authenticationService.currentUserValue.appPermissions && this.authenticationService.currentUserValue.appPermissions.indexOf(src_app_models__WEBPACK_IMPORTED_MODULE_9__["AppAccessPermissions"].adminAddEdit) > -1) {
                return true;
            }
        }
        catch (ex) {
        }
        return false;
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_11__["AppRouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_15__["SocketioService"] }
];
AddUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-user',
        template: _raw_loader_add_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        src_app_services_app_router_service__WEBPACK_IMPORTED_MODULE_11__["AppRouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_socketio_service__WEBPACK_IMPORTED_MODULE_15__["SocketioService"]])
], AddUserComponent);



/***/ }),

/***/ "ABg6":
/*!**************************************************!*\
  !*** ./src/app/admin/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "wJwY");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "hP8I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");








let HeaderComponent = class HeaderComponent {
    constructor(router, authenticationService, utilityService, notificationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.utilityService = utilityService;
        this.notificationService = notificationService;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    logout() {
        this.router.navigate(['/logout']);
    }
    navigate2State(state) {
        state = (state ? state : '/logout');
        this.router.navigate([state]);
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
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"],
        src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
], HeaderComponent);



/***/ }),

/***/ "Dx9I":
/*!*************************************************************************!*\
  !*** ./src/app/admin/service-types-add/service-types-add.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLXR5cGVzLWFkZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "GCkI":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12 col-md-12 mb-4\">\r\n        <div class=\"card shadow h-100\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12 mb-4\">\r\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\" i18n>Users</div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mb-4\">\r\n                        <div class=\"view view-cascade gradient-card-header white\">\r\n                            <table class=\"table table-striped table-responsive-md btn-table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"d-none\" i18n>ID</th>\r\n                                        <th i18n>Email</th>\r\n                                        <th i18n>Name</th>\r\n                                        <th i18n>Role</th>\r\n                                        <th i18n>Mobile</th>\r\n                                        <th i18n>Verified</th>\r\n                                        <th i18n>#</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <!---->\r\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentTransactionDetailsArray)\">\r\n                                        <td class=\"d-none\" i18n>{{obj._id}}</td>\r\n                                        <td i18n>{{obj.emailAddress}}</td>\r\n                                        <td i18n>{{obj.firstName}}</td>\r\n                                        <td i18n>{{obj.role}}</td>\r\n                                        <td i18n>{{obj.mobileno}}</td>\r\n                                        <td>\r\n                                            <div\r\n                                                *ngIf=\"returnT4CurrentUserAllowedToShow(obj.role) && obj._id != authenticationService.currentUserValue._id\">\r\n                                               \r\n                                              \r\n                                                <span *ngIf=\"!obj.isVerified\"\r\n                                                (click)=\"updateUsersVerificationStatus(obj, true)\" class=\"btn text-white badge badge-warning font-weight-light\">\r\n                                                    Approve\r\n                                                </span>\r\n                                                <span *ngIf=\"obj.isVerified\"  class=\"badge badge-success font-weight-light\">Approved</span>\r\n                                              \r\n                                                \r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div\r\n                                                *ngIf=\"returnT4CurrentUserAllowedToShow(obj.role) && obj._id != authenticationService.currentUserValue._id\">\r\n                                                <button *ngIf=\"obj.isVerified && returnT4CurrentUserIsSAdmin()\"\r\n                                                    class=\"btn btn-link btn-sm\" (click)=\"navigate2EditUser(obj._id)\">\r\n                                                    <i class=\"icon-pencil m-2 text-success\"></i>\r\n                                                </button>\r\n                                                <button class=\"btn btn-link btn-sm\" (click)=\"usersProfile(obj)\">\r\n                                                    <i class=\"icon-user text-success\"></i>\r\n                                                </button>\r\n                                                <button class=\"btn btn-link btn-sm\" (click)=\"deleteUserById(obj._id)\">\r\n                                                    <i class=\"icon-trash m-2 text-danger\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "JU3h":
/*!**************************************************!*\
  !*** ./src/app/admin/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "XUcl");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "37Rf");
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

/***/ "KKo0":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--section start-->\r\n<section class=\"agency format service-bg\" id=\"home-admin\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 offset-lg-1\">\r\n                <div class=\"center-text\">\r\n                    <div class=\"format-container\">\r\n                        <div class=\"format-head-text\">\r\n                            <h2 class=\"about-font-header\">Welcome Admin!<span class=\"block-span\"></span></h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--section end-->");

/***/ }),

/***/ "OcPW":
/*!********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-management.component.html */ "GCkI");
/* harmony import */ var _user_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management.component.css */ "nyuw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/public-profile/public-profile.component */ "bLZ2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/role */ "z56L");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












let UserManagementComponent = class UserManagementComponent {
    constructor(dialog, socketService, alertService, utilityService, authenticationService, router) {
        this.dialog = dialog;
        this.socketService = socketService;
        this.alertService = alertService;
        this.utilityService = utilityService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.PaymentTransactionDetailsArray = null;
        this.loading = false;
        let _data = {};
        this.socketService.getAllUsersWithRequestData(_data, 0)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                this.PaymentTransactionDetailsArray = data["data"];
                this.loading = false;
            }
            else {
                this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            this.PaymentTransactionDetailsArray = [];
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
    ngOnInit() {
    }
    updateUsersVerificationStatus(_userId, _isVerified) {
        this.alertService.success("Please wait while we updating status of user");
        this.socketService.updateUsersVerificationStatus(_userId, _isVerified)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                usersObjArr[data["data"]["_id"]] = data["data"];
                this.PaymentTransactionDetailsArray = usersObjArr;
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
    deleteUserById(_userId) {
        this.alertService.success("Please wait while we deleting user");
        this.socketService.deleteUserById(_userId, this.authenticationService.currentUserValue._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                let usersObjArr = this.utilityService._.mapKeys(this.PaymentTransactionDetailsArray, '_id');
                delete usersObjArr[_userId];
                this.PaymentTransactionDetailsArray = usersObjArr;
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
    usersProfile(userObj) {
        console.log('95', this.authenticationService.currentUserValue);
        const dialogRef = this.dialog.open(src_app_shared_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__["PublicProfileComponent"], {
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
        dialogRef.afterClosed().subscribe(result => {
            console.log(`105 :: msc :: Dialog result: ${JSON.stringify(result)}`);
        });
    }
    returnT4CurrentUserIsSAdmin() {
        try {
            if (this.authenticationService.currentUserValue.appPermissions && this.authenticationService.currentUserValue.appPermissions.indexOf(src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["AppAccessPermissions"].adminAddEdit) > -1) {
                return true;
            }
        }
        catch (ex) {
        }
        return false;
    }
    returnT4CurrentUserAllowedToShow(currentUserRole) {
        if (this.returnT4CurrentUserIsSAdmin()) {
            return true;
        }
        if (currentUserRole != src_app_models_role__WEBPACK_IMPORTED_MODULE_10__["Role"].Admin) {
            return true;
        }
        return false;
    }
    navigate2EditUser(userId) {
        this.router.navigate(['/admin/add-user'], { state: { userId: userId } });
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
UserManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-management',
        template: _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
        src_app_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
], UserManagementComponent);



/***/ }),

/***/ "PGjB":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/payment-transactions/payment-transactions.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12 col-md-12 mb-4\">\r\n        <div class=\"card shadow h-100\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12 mb-4\">\r\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\">Payment Transactions</div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mb-4\">\r\n                        <div class=\"view view-cascade gradient-card-header white\">\r\n                            <table class=\"table table-striped table-responsive-md btn-table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"d-none\">ID</th>\r\n                                        <th>Initiated By</th>\r\n                                        <th>Type</th>\r\n                                        <th>Date Time</th>\r\n                                        <th>$Amount</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentTransactionDetailsArray)\">\r\n                                        <td class=\"d-none\">{{obj._id}}</td>\r\n                                        <td>{{obj.transactionInitiatedByUser[0].emailAddress}}</td>\r\n                                        <td>{{ utilityService.returnStringWithReplacing_(obj.transactionActionType) | titlecase }}</td>\r\n                                        <td>{{utilityService._.get( obj,'transactionDetailsObj.create_time') || obj.createdOn }}</td>\r\n                                        <td>{{obj.amount}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "SL0s":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <app-header></app-header>\r\n</div>\r\n\r\n<div class=\"wrapper-outlet\">\r\n    <div class=\"container-fluid  pt-3\">\r\n        <router-outlet ></router-outlet>\r\n    </div>\r\n   \r\n</div>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n\t");

/***/ }),

/***/ "ShmR":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/service-types-add/service-types-add.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- addServiceTypes section -->\r\n<section class=\"addServiceTypes-page section-b-space pt-0\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n           \r\n            <div class=\"col-xl-12\">\r\n                <form [formGroup]=\"addServiceTypesForm\" class=\"theme-form\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <h5 class=\"blog-head font-600\">New Service Type</h5>\r\n                                    <hr>\r\n                                </div>\r\n\r\n                                <div class=\"col-xl-12 mb-3\">\r\n                                    <label for=\"sessionType\">Parent Service Type</label>\r\n                                    <select [disabled]=\"editing\" formControlName=\"parentServicesTypesId\" class=\"custom-select\" [ngClass]=\"{ 'is-invalid': submitted && f.parentServicesTypesId.errors }\">\r\n                                        <option [ngValue]=\"''\">[Choose to Set As Parent category]</option>\r\n                                        <option *ngFor=\"let item of ParentServicesTypes; let i = index\"\r\n                                            [ngValue]=\"item._id\">\r\n                                            {{item.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-xl-12 mb-3\">\r\n                                    <label for=\"name\">Title</label>\r\n                                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.name.errors.required\">Name is required</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-12 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"description\">Description:</label>\r\n                                        <textarea class=\"form-control\" formControlName=\"description\" rows=\"5\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\">\r\n                                    </textarea>\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.description.errors.required\">Description is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"feeFromUserFixedAmount\">Charges for User:</label>\r\n                                        <input class=\"form-control\" formControlName=\"feeFromUserFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.feeFromUserFixedAmount.errors }\" />\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"submitted && f.feeFromUserFixedAmount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.feeFromUserFixedAmount.errors.required\">Charges for User is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"serviceFeeFromUserFixedAmount\">Service Charges:</label>\r\n                                        <input class=\"form-control\" formControlName=\"serviceFeeFromUserFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.serviceFeeFromUserFixedAmount.errors }\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && f.serviceFeeFromUserFixedAmount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.serviceFeeFromUserFixedAmount.errors.required\">Service Charges is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"feeToConsultFixedAmount\">Consult Fees:</label>\r\n                                        <input class=\"form-control\" formControlName=\"feeToConsultFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.feeToConsultFixedAmount.errors }\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && f.feeToConsultFixedAmount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.feeToConsultFixedAmount.errors.required\">Consult Fees is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xl-6 mb-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"commisionToProtalFixedAmount\">Portal Commision:</label>\r\n                                        <input class=\"form-control\" formControlName=\"commisionToProtalFixedAmount\" min=\"0\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && f.commisionToProtalFixedAmount.errors }\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && f.commisionToProtalFixedAmount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.commisionToProtalFixedAmount.errors.required\">Portal Commision is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12\">\r\n                                    <label for=\"\">Related Keywords:</label>\r\n                                    <div class=\"input-group mb-2\">\r\n                                        <input class=\"form-control\" [(ngModel)]=\"currentSkill\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"type one keyword at a time and click add button\" />\r\n                                        <div class=\"input-group-append\">\r\n                                          <button class=\"btn btn-success\" (click)=\"addItem(currentSkill)\">Add</button>\r\n                                        </div>\r\n                                      </div>\r\n                                                                         \r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-2\" *ngFor=\"let arrayItem of arrayItems; let i=index\">\r\n                                    <label [for]=\"arrayItem\" class=\"array-item-title\">\r\n                                        {{arrayItem}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-12 text-center\">\r\n                                    <hr>\r\n                                    <button type=\"button\" (click)=\"onaddServiceTypesUpdateSubmit()\" [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\r\n                                    <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- addServiceTypes section -->");

/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "SL0s");
/* harmony import */ var _admin_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component.css */ "yP50");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent.ctorParameters = () => [];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AdminComponent);



/***/ }),

/***/ "TxCC":
/*!*************************************************************************!*\
  !*** ./src/app/admin/borrower-earnings/borrower-earnings.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3Jyb3dlci1lYXJuaW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VQQu":
/*!***********************************************!*\
  !*** ./src/app/admin/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "WLd7":
/*!******************************************************!*\
  !*** ./src/app/admin/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./services.component.html */ "nKMk");
/* harmony import */ var _services_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.component.css */ "cghJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/service-types.service */ "7ZPZ");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");








let ServicesComponent = class ServicesComponent {
    constructor(serviceTypesService, alertService, utilityService, authenticationService) {
        this.serviceTypesService = serviceTypesService;
        this.alertService = alertService;
        this.utilityService = utilityService;
        this.authenticationService = authenticationService;
        this.ParentServicesTypes = null;
        this.loading = false;
        this.loadServiceTypesService();
    }
    loadServiceTypesService() {
        this.serviceTypesService.getServiceTypesParentAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                //alert(JSON.stringify( data));
                this.ParentServicesTypes = data["data"];
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
            this.ParentServicesTypes = [];
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
    ngOnInit() {
    }
    deleteById(documentId) {
        let deletedBy = this.authenticationService.currentUserValue._id;
        this.serviceTypesService.deleteServiceTypesById(documentId, deletedBy)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            //console.log('data => ', data)
            if (data && data['success']) {
                this.loadServiceTypesService();
                this.alertService.success(data['message'], true);
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
            this.ParentServicesTypes = [];
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
ServicesComponent.ctorParameters = () => [
    { type: src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_6__["ServiceTypesService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
ServicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-services',
        template: _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_services_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_service_types_service__WEBPACK_IMPORTED_MODULE_6__["ServiceTypesService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], ServicesComponent);



/***/ }),

/***/ "XUcl":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/footer/footer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!--copyright start-->\r\n  <div class=\"agency copyright\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"link-horizontal\">\r\n                    <ul>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\">Privacy Policy</a>\r\n                        </li>\r\n\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/disclaimer\" routerLinkActive=\"active\">Terms of Use</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"copyright-text\" routerLink=\"/faqs\" routerLinkActive=\"active\">FAQs</a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div>\r\n                    <h6 class=\"copyright-text text-white text-right\">© 2020 Avitii Lender System\r\n\r\n                    </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!--copyright end-->\r\n  \r\n ");

/***/ }),

/***/ "cghJ":
/*!*******************************************************!*\
  !*** ./src/app/admin/services/services.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "gY7f":
/*!**********************************************!*\
  !*** ./src/app/admin/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "KKo0");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "VQQu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "gmSr":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/borrower-earnings/borrower-earnings.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12 col-md-12 mb-4\">\r\n        <div class=\"card shadow h-100\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12 mb-4\">\r\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\">Borrower's Earning</div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mb-4\">\r\n                        <div class=\"view view-cascade gradient-card-header white\">\r\n                            <table class=\"table table-striped table-responsive-md btn-table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"d-none\">ID</th>\r\n                                        <th>Borrower</th>\r\n                                        <th>$Amount (Pending)</th>\r\n                                        <th>Total Transactions</th>\r\n                                        <th>Actions</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let obj of utilityService._.values(PaymentBorrowerDetailsArray); let i = index\">\r\n                                        <td class=\"d-none\">{{obj._id}}</td>\r\n                                        <td>{{obj._id}}</td>\r\n                                        <td>{{obj.totalPayment4CurrentUser}}</td>\r\n                                        <td>{{obj.totalCountOfTransactions}}</td>\r\n                                        <td>\r\n                                            <div *ngIf=\"obj.totalPayment4CurrentUser>0\">\r\n                                                <i *ngIf=\"!editingIdCtrl[i]\" class=\"icon-pencil-alt m-2 text-danger\" (click)=\"editingIdCtrl[i]=true;\">\r\n                                                </i>\r\n                                                <input *ngIf=\"editingIdCtrl[i]\" name=\"transactionId\" [(ngModel)]=\"transactionIdCtrl[i]\">\r\n                                                <i *ngIf=\"editingIdCtrl[i]\" class=\"icon-check-box m-2 text-success\" (click)=\"updateTransactionIdDoPaymentForBorrower(i, transactionIdCtrl[i], obj)\">\r\n                                                </i>\r\n                                                <i *ngIf=\"editingIdCtrl[i]\" class=\"icon-close m-2 text-danger\" (click)=\"editingIdCtrl[i]=false;\">\r\n                                                </i>\r\n                                            </div>\r\n                                            <div *ngIf=\"obj.totalPayment4CurrentUser<=0\">\r\n                                                ###\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "hP8I":
/*!***************************************************!*\
  !*** ./src/app/admin/header/header.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\r\n    padding: 0;\r\n}\r\nheader img{\r\n    height: 3.3rem;\r\n}\r\nheader nav ul .mega-menu .mega-menu-container {\r\n\r\n    min-width: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmhlYWRlciBpbWd7XHJcbiAgICBoZWlnaHQ6IDMuM3JlbTtcclxufVxyXG5oZWFkZXIgbmF2IHVsIC5tZWdhLW1lbnUgLm1lZ2EtbWVudS1jb250YWluZXIge1xyXG5cclxuICAgIG1pbi13aWR0aDogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.component */ "TRGY");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "gY7f");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "ABg6");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "JU3h");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "WLd7");
/* harmony import */ var _service_types_add_service_types_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service-types-add/service-types-add.component */ "+Q42");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-management/user-management.component */ "OcPW");
/* harmony import */ var _payment_transactions_payment_transactions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment-transactions/payment-transactions.component */ "yVJR");
/* harmony import */ var _borrower_earnings_borrower_earnings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./borrower-earnings/borrower-earnings.component */ "rCAk");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-user/add-user.component */ "4pOR");

















let AdminModule = class AdminModule {
};
AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"], _service_types_add_service_types_add_component__WEBPACK_IMPORTED_MODULE_11__["ServiceTypesAddComponent"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"], _payment_transactions_payment_transactions_component__WEBPACK_IMPORTED_MODULE_13__["PaymentTransactionsComponent"], _borrower_earnings_borrower_earnings_component__WEBPACK_IMPORTED_MODULE_14__["BorrowerEarningsComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__["AddUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
        ]
    })
], AdminModule);



/***/ }),

/***/ "nKMk":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/services/services.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12 col-md-12 mb-4\">\r\n        <div class=\"card shadow h-100\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12 mb-4\">\r\n                        <div class=\"font-weight-bold mb-1 text-cm-blue\">Service Types</div>\r\n                    </div>\r\n                    <div class=\"col-xl-12 col-12 mb-4\">\r\n                        <div class=\"view view-cascade gradient-card-header white\">\r\n                            <table class=\"table table-striped table-responsive-md btn-table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Type</th>\r\n                                        <th>Charges</th>\r\n                                        <th>Service Charges</th>\r\n                                        <th>Consult Fees</th>\r\n                                        <th>Portal Commision</th>\r\n                                        <th>Sub Types</th>\r\n                                        <th>#</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let obj of ParentServicesTypes\">\r\n                                        <td>{{obj.name}}</td>\r\n                                        <td>{{obj.feeFromUserFixedAmount}}</td>\r\n                                        <td>{{obj.serviceFeeFromUserFixedAmount}}</td>\r\n                                        <td>{{obj.feeToConsultFixedAmount}}</td>\r\n                                        <td>{{obj.commisionToProtalFixedAmount}}</td>\r\n                                        <td>\r\n                                            <table class=\"table table-responsive-md btn-table\">\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let objInner of obj.childServicesTypes\">\r\n                                                        <td>{{objInner.name}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </td>\r\n                                        <td>\r\n                                            <button type=\"button\" (click)=\"deleteById(obj._id)\" class=\"btn btn-outline-primary btn-sm m-0 waves-effect\">Delete</button>\r\n                                          \r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "nyuw":
/*!*********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "rCAk":
/*!************************************************************************!*\
  !*** ./src/app/admin/borrower-earnings/borrower-earnings.component.ts ***!
  \************************************************************************/
/*! exports provided: BorrowerEarningsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowerEarningsComponent", function() { return BorrowerEarningsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_borrower_earnings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./borrower-earnings.component.html */ "gmSr");
/* harmony import */ var _borrower_earnings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./borrower-earnings.component.css */ "TxCC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/first */ "XoMe");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/role */ "z56L");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");










let BorrowerEarningsComponent = class BorrowerEarningsComponent {
    constructor(socketService, alertService, utilityService, authenticationService) {
        this.socketService = socketService;
        this.alertService = alertService;
        this.utilityService = utilityService;
        this.authenticationService = authenticationService;
        this.PaymentBorrowerDetailsArray = {};
        this.loading = false;
        this.transactionIdCtrl = [];
        this.editingIdCtrl = {};
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.callLatestPaymentDetails();
    }
    callLatestPaymentDetails() {
        let _data = {};
        this.socketService.getAllBorrowerPaymentTransactionDetails(_data)
            .pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                this.PaymentBorrowerDetailsArray = data["data"];
                this.loading = false;
            }
            else {
                this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            this.PaymentBorrowerDetailsArray = [];
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
    ngOnInit() {
    }
    updateTransactionIdDoPaymentForBorrower(index, transactionId, obj) {
        if (index > -1 && transactionId && obj) {
            this.editingIdCtrl[index] = false;
            let _msg2show = "";
            let _borrowerId = obj._id;
            let _loanApplyIdArray = this.utilityService._.map(obj.sessionApplyInfo, '_id');
            let _amount = (obj.totalPayment4CurrentUser) * (-1);
            let _transactionActionType = src_app_models_role__WEBPACK_IMPORTED_MODULE_8__["TransactionActionType"].paid_to_consulatant;
            let _transactionIdArray = this.utilityService._.uniq(this.utilityService._.flattenDepth(this.utilityService._.map(obj.sessionApplyInfo, 'transactionIdArray'), 1));
            let _transactionDocumentIdArray = this.utilityService._.uniq(this.utilityService._.flattenDepth(this.utilityService._.map(obj.sessionApplyInfo, 'transactionDocumentIdArray'), 1));
            let _Obj2Save = {
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
            this.socketService.adminPaidToBorrowerUpdateInTransactions(_Obj2Save)
                .pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_7__["first"])())
                .subscribe(data => {
                if (data && data['success']) {
                    this.callLatestPaymentDetails();
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
            _msg2show = "Request Queued => Borrower : " + _borrowerId + ", TransactionId : " + transactionId + ", Paid : " + obj.totalPayment4CurrentUser;
            this.alertService.success(_msg2show);
        }
        else {
            this.alertService.success("All values required.");
        }
    }
};
BorrowerEarningsComponent.ctorParameters = () => [
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
];
BorrowerEarningsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-borrower-earnings',
        template: _raw_loader_borrower_earnings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_borrower_earnings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
        src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
], BorrowerEarningsComponent);



/***/ }),

/***/ "u6Hf":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-user/add-user.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- register section -->\r\n<div class=\"row pt-0\">\r\n    <div class=\"col-xl-12 col-12\">\r\n        <form [formGroup]=\"registerForm\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header d-none\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div id=\"profile_basic_details\">\r\n                        <div class=\"form-row mb-2  mb-3\">\r\n                            <div class=\"col-xl-3\">\r\n                                <div>\r\n                                    <img id=\"imgSelfProfileUrl\" [src]=\"f.selfProfileUrl.value || imgSelfProfileUrl\" onerror=\"this.src='/assets/img/nouser.png';\" class=\"img-fluid\" />\r\n                                </div>\r\n                                <div class=\"text-center\">\r\n                                    <i class=\"icon-pencil-alt m-2 text-success\" (click)=\"openFileUploaderForProfile()\">\r\n                                        <input id=\"ctrlUploadProfile\" hidden type=\"file\" name=\"image\" accept=\"image/*\"\r\n                                            (change)=\"fileProgressForProfile($event)\">\r\n                                    </i>\r\n                                    <i *ngIf=\"selfProfileUrlPendingForUpload\" class=\"icon-upload m-2 text-success\" (click)=\"onUploadForProfile()\">\r\n                                    </i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-9\">\r\n                                <div class=\"form-row mb-3\">\r\n                                    <div class=\"col-xl-6\">\r\n                                        <label for=\"firstName\">First Name</label>\r\n                                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xl-6\">\r\n                                        <label for=\"lastName\">Last Name</label>\r\n                                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row mb-3\">\r\n                                    <div class=\"col-xl-12\">\r\n                                        <div class=\"card mb-3\">\r\n                                            <div class=\"card-body\">\r\n                                                <label for=\"emailAddress\">\r\n                                                    Email Id <sub>Please verify if email id exists before\r\n                                                        saving the users details</sub>\r\n                                                    <i *ngIf=\"isOtpSent\" class=\"icon-check-box m-2 text-success\">\r\n                                                    </i>\r\n                                                </label>\r\n                                                <div class=\"input-group mb-3\">\r\n                                                    <input [readonly]=\"isOtpSent || editing\" type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\" required />\r\n                                                    <div class=\"input-group-append\">\r\n                                                        <button *ngIf=\"!isOtpSent && !editing\" class=\"btn btn-primary\" (click)=\"onVerifySendOtp()\">Verify</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"mt-2\" *ngIf=\"isOtpSent\">\r\n                                                    <strong>Default Password: avitii@987 </strong> User can reset his/her password later.\r\n                                                </div>\r\n                                                <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.emailAddress.errors.required\">Email is required</div>\r\n                                                    <div *ngIf=\"f.emailAddress.errors.email\">Invalid Email format.</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xl-12\">\r\n                                        <label for=\"mobileNo\">\r\n                                            <i class=\"icon-mobile text-success\"></i>\r\n                                            WhatsApp Number</label>\r\n                                        <input type=\"number\" formControlName=\"mobileNo\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.mobileNo.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.mobileNo.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.mobileNo.errors.required\">WhatsApp Number is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"f.role.value==Role.Admin\">\r\n                                    <div class=\"col-xl-12 mt-3\">\r\n                                        <p class=\"font-weight-bold\">App Permissions </p>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xl-6 mb-2\" *ngFor=\"let data of AppAccessPermissions; let i=index\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xl-6\">\r\n                                                        <label>{{data.name}}</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-6\">\r\n                                                        <div class=\"btn-group btn-group btn-group-sm\">\r\n                                                            <button type=\"button\" class=\"btn\" (click)=\"onSkillSetsChange(data.value,true)\" [ngClass]=\"{ 'btn-success': onInitSetCheckedValue(data.value)==true, 'btn-outline-success':onInitSetCheckedValue(data.value)==false}\">\r\n                                                                Yes\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn\" (click)=\"onSkillSetsChange(data.value,false)\" [ngClass]=\"{ 'btn-danger': onInitSetCheckedValue(data.value)==false, 'btn-outline-danger':onInitSetCheckedValue(data.value)==true}\">\r\n                                                                No\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"submitted && f.appPermissions.errors\" class=\"error\">\r\n                                            <div *ngIf=\"f.appPermissions.errors.required\" class=\"text-red\">atleast one permission is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xl-12\">\r\n                                        <div class=\"badge badge-primary font-weight-normal m-2\" *ngFor=\"let educationItem of f.education.value\">\r\n                                            <span [textContent]=\"educationItem\"> </span> &nbsp;\r\n                                            <i class=\"icon-trash\" (click)=\"onAddRemoveEducationDetails(educationItem, false)\">\r\n                                            </i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-12 text-center\">\r\n                            <button type=\"button\" (click)=\"onSubmitRegisterUser()\" [disabled]=\"loading\" class=\"btn btn-primary float-right\">Save</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- register section -->");

/***/ }),

/***/ "wJwY":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/header/header.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\r\n\r\n    <!-- Sidebar - Brand -->\r\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\">\r\n        <img class=\"img-fluid\" src=\"/assets/img/avitii-logo.png\">\r\n    </a>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider my-0\">\r\n\r\n    <!-- Nav Item - Dashboard -->\r\n    <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/admin\">\r\n            <i class=\"icon icon-home\"></i>\r\n            <span>Dashboard</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <!-- <div class=\"sidebar-heading\">\r\n        Interface\r\n    </div> -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin/users\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-shopping-cart\"></i>\r\n            <span>User Mangement</span></a>\r\n    </li>\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin/add-user\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-bag\"></i>\r\n            <span>Add User</span></a>\r\n    </li> -->\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin/payments\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-money\"></i>\r\n            <span>Transactions</span></a>\r\n    </li>\r\n\r\n    \r\n    <!-- Nav Item - Pages Collapse Menu -->\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n            <i class=\"icon icon-bag\"></i>\r\n            <span>My Contracts</span>\r\n        </a>\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n               \r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/lender/my-contract')\" routerLinkActive=\"active\">My Offers</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/lender/my-contract')\" routerLinkActive=\"active\">Paid Contracts</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/lender/my-contract')\" routerLinkActive=\"active\">Unpaid Contracts</a>\r\n                <a class=\"collapse-item\" (click)=\"navigate2State('/lender/my-contract')\" routerLinkActive=\"active\">Inkasso cases</a>\r\n           \r\n            </div>\r\n        </div>\r\n    </li> -->\r\n\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-comments\"></i>\r\n            <span>Messages</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-calendar\"></i>\r\n            <span>Calendar</span></a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n            <i class=\"icon icon-star\"></i>\r\n            <span>My Ratings</span></a>\r\n    </li> -->\r\n\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\r\n            <i class=\"icon icon-settings\"></i>\r\n            <span>Settings</span>\r\n        </a>\r\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\r\n            <div class=\"bg-white py-2 collapse-inner rounded\">\r\n             \r\n                <a class=\"collapse-item\" routerLink=\"/lender/profile\">My Profile</a>\r\n                <a class=\"collapse-item\" href=\"register.html\">Change Password</a>\r\n                <a class=\"collapse-item\" href=\"forgot-password.html\">Bank Details</a>\r\n                <a class=\"collapse-item\" href=\"forgot-password.html\">Payment Agreement</a>\r\n               \r\n            </div>\r\n        </div>\r\n    </li> -->\r\n\r\n \r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/logout\">\r\n            <i class=\"icon icon-flickr-alt\"></i>\r\n            <span>Logout</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <!-- <hr class=\"sidebar-divider d-none d-md-block\"> -->\r\n\r\n    <!-- Sidebar Toggler (Sidebar) -->\r\n    <!-- <div class=\"text-center d-none d-md-inline\">\r\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n    </div> -->\r\n\r\n\r\n</ul>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Nav Start [ngClass]=\"{'dark position-relative' : (router.url!='/')}\"-->\r\n<header id=\"custom-header-nav\" class=\"ecommerce nav-fix shadow-sm p-0 d-none\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <nav>\r\n                    <a class=\"logo-light m-r-auto\" routerLink=\"/home\">\r\n                        <img class=\"img-fluid\" src=\"/assets/img/avitii-logo.png\"></a>\r\n\r\n                    <div class=\"navbar m-l-auto p-1 btn-back\" id=\"togglebtn\">\r\n                        <div class=\"responsive-btn\">\r\n                            <h5 class=\"btn-back\">back</h5>\r\n                        </div>\r\n                        <ul class=\"main-menu\">\r\n                            <li><a routerLink=\"/admin\">Home</a></li>\r\n                            <!-- <li><a routerLink=\"/admin/services\" routerLinkActive=\"active\">Services</a></li>\r\n                            <li><a routerLink=\"/admin/servicesadd\" routerLinkActive=\"active\">Services<i class=\"icon-plus m-2 text-success\"></i></a></li> -->\r\n                            <li><a routerLink=\"/admin/users\" routerLinkActive=\"active\">User Mangement</a></li>\r\n                            <li><a routerLink=\"/admin/add-user\" routerLinkActive=\"active\">User<i class=\"icon-plus m-2 text-success\"></i></a></li>\r\n                            <li><a routerLink=\"/admin/payments\" routerLinkActive=\"active\">Transactions</a></li>\r\n                            <li><a routerLink=\"/admin/earnings\" routerLinkActive=\"active\">Payments</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"top-header-right mr-1\">\r\n                        <ul>\r\n\r\n                            <li class=\"cart  d-none\">\r\n                                <a aria-expanded=\"false\" routerLink=\"/lender/messages\" routerLinkActive=\"active\">\r\n                                    <i class=\"icon-comment-alt\"></i>\r\n                                </a>\r\n\r\n                            </li>\r\n                            <li class=\"cart\">\r\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\" id=\"dropdownMenuButton1\">\r\n                                    <i class=\"icon-bell bell\"></i>\r\n                                    <span *ngIf=\"(utilityService._.keys(notificationService.appNotifications).length)>0\" class=\"badge badge-primary bell-count\" [textContent]=\"utilityService._.keys(notificationService.appNotifications).length\"></span>\r\n                                </a>\r\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                    <ul class=\"shopping-cart\">\r\n                                        <li *ngFor=\"let notification of utilityService._.values(notificationService.appNotifications)\">\r\n                                            <div class=\"pb-2\">\r\n                                                <div class=\"mb-1\">{{notification.message}}</div>\r\n                                                <div class=\"font-weight-light small mb-1\">{{notification.description}}</div>\r\n                                                <button class=\"btn btn-secondary btn-sm\" (click)=\"notificationService.check4Notification(notification)\">View</button>\r\n                                            </div>\r\n                                        </li>\r\n\r\n\r\n\r\n                                    </ul>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"cart\">\r\n                                <a aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\" id=\"dropdownMenuButton1\">\r\n                                    <img class=\"userimg mt-n2\" src=\"/assets/img/user-default.png\">\r\n                                </a>\r\n                                <div aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(46px, 47px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                    <ul class=\"shopping-cart\">\r\n                                        <li>\r\n                                            <a class=\"h6 d-block\" routerLink=\"/admin\">\r\n                                                {{currentUser.firstName}}\r\n                                                <span class=\"badge badge-primary float-right\"\r\n                                                    [textContent]=\"currentUser.role\"></span>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li><a routerLink=\"/admin/profile\">Profile</a></li>\r\n                                        <hr>\r\n                                        <li>\r\n                                            <a (click)=\"logout()\">Logout</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"responsive-btn\">\r\n                        <a class=\"toggle-nav\"><i aria-hidden=\"true\" class=\"icon-align-center text-white\"></i></a>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- Nav end-->");

/***/ }),

/***/ "yP50":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "yVJR":
/*!******************************************************************************!*\
  !*** ./src/app/admin/payment-transactions/payment-transactions.component.ts ***!
  \******************************************************************************/
/*! exports provided: PaymentTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTransactionsComponent", function() { return PaymentTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-transactions.component.html */ "PGjB");
/* harmony import */ var _payment_transactions_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-transactions.component.css */ "165m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");








let PaymentTransactionsComponent = class PaymentTransactionsComponent {
    constructor(socketService, alertService, utilityService) {
        this.socketService = socketService;
        this.alertService = alertService;
        this.utilityService = utilityService;
        this.PaymentTransactionDetailsArray = null;
        this.loading = false;
        let _data = {};
        this.socketService.getAllPaymentTransactionDetails(_data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            if (data && data['success']) {
                this.PaymentTransactionDetailsArray = data["data"];
                this.loading = false;
            }
            else {
                this.alertService.error(data['message']);
                this.loading = false;
            }
        }, error => {
            let errorMsg2show = "";
            this.PaymentTransactionDetailsArray = [];
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
    ngOnInit() {
    }
};
PaymentTransactionsComponent.ctorParameters = () => [
    { type: src_app_socketio_service__WEBPACK_IMPORTED_MODULE_7__["SocketioService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
];
PaymentTransactionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment-transactions',
        template: _raw_loader_payment_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_transactions_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_socketio_service__WEBPACK_IMPORTED_MODULE_7__["SocketioService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]])
], PaymentTransactionsComponent);



/***/ }),

/***/ "z929":
/*!*******************************************************!*\
  !*** ./src/app/admin/add-user/add-user.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map