(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "7ZPZ":
/*!***************************************************!*\
  !*** ./src/app/services/service-types.service.ts ***!
  \***************************************************/
/*! exports provided: ServiceTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypesService", function() { return ServiceTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let ServiceTypesService = class ServiceTypesService {
    constructor(http) {
        this.http = http;
        this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/';
    }
    addNewServiceTypes(serviceTypes) {
        return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/addnew', serviceTypes);
    }
    getServiceTypesById(id) {
        return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getbyid', { serviceTypesId: id });
    }
    getServiceTypesAll() {
        return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getall', {});
    }
    updateServiceTypesById(serviceTypes) {
        return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/update/byid', serviceTypes);
    }
    getServiceTypesParentAll() {
        return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getall/parents', {});
    }
    getServiceTypesChildAll() {
        return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getall/child', {});
    }
    deleteServiceTypesById(documentId, deletedBy) {
        return this.http.post(this.baseurl + 'api/post/user/servicetypes-blocked/byid', { documentId: documentId, deletedBy: deletedBy });
    }
};
ServiceTypesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ServiceTypesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ServiceTypesService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map