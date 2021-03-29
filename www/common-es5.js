(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
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
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map