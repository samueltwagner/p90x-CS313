(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cms-header></cms-header>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-edit/contact-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-edit/contact-edit.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <form id=\"contact-edit\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <label for=\"name\">Name</label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            name=\"name\"\n            class=\"form-control required\"\n            size=\"120\"\n            max=\"120\"\n            [ngModel]=\"contact?.name\"\n            #name=\"ngModel\"\n            required>\n        </div>\n\n        <div class=\"col-sm-12 form-group\">\n          <label for=\"email\">Email</label>\n          <input\n            type=\"text\"\n            id=\"email\"\n            name=\"email\"\n            class=\"form-control required\"\n            size=\"120\"\n            max=\"255\"\n            [ngModel]=\"contact?.email\"\n            #email=\"ngModel\"\n            required\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\">\n\n            <div class=\"alert alert-danger\" *ngIf=\"!email.valid && email.dirty\" >\n              Enter a valid email address.\n            </div>\n        </div>\n\n        <div class=\"col-sm-12 form-group\">\n          <label for=\"phone\">Phone</label>\n          <input\n            type=\"text\"\n            id=\"phone\"\n            name=\"phone\"\n            class=\"form-control invalid\"\n            size=\"150\"\n            max=\"255\"\n            [ngModel]=\"contact?.phone\"\n            #phone=\"ngModel\"\n            pattern=\"^\\D*([2-9]\\d{2})(\\D*)([2-9]\\d{2})(\\D*)(\\d{4})\\D*\">\n            <div class=\"alert alert-danger\" *ngIf=\"!phone.valid && phone.dirty\" >\n              Enter a valid phone number.\n            </div>\n        </div>\n\n        <div class=\"col-sm-12 form-group\">\n          <label for=\"imageUrl\">Image URL</label>\n          <input\n            type=\"text\"\n            id=\"imageUrl\"\n            name=\"imageUrl\"\n            class=\"form-control\"\n            size=\"150\"\n            max=\"255\"\n            #imageUrl=\"ngModel\"\n            [ngModel]=\"contact?.imageUrl\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"groupList\">Group contacts</label>\n\n        <div class=\"row\" id=\"groupList\" style=\"min-height: 3rem;\" \n             dnd-droppable\n             [dropZones]=\"['contactGroup']\" \n             (onDropSuccess)=\"addToGroup($event)\">\n\n          <div *ngFor=\"let contact of groupContacts; let i = index\">\n            <div>\n              <cms-contact-item class=\"col-sm-11\" [contact]=\"contact\"></cms-contact-item>\n              <button class=\"btn btn-danger col-sm-2 deleteButton\" (click)=\"onRemoveItem(i)\">X</button>\n            </div>\n          </div>\n          <span class=\"dragMsg\" *ngIf=\"groupContacts?.length < 1\">Drag contacts in group here</span>\n        </div>\n      </div>\n\n      <div class=\"alert alert-danger\" *ngIf=\"!name.valid && name.touched || !email.valid && email.touched\" >\n        The Name and Email are required!\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">Save</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-item/contact-item.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-item/contact-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a  class=\"list-group-item clearfix\" \n    [routerLink]=\"[contact.id]\" \n    routerLinkActive=\"active\" \n    (click)=\"onSelected()\">\n    <div class=\"pull-left\">\n        <h4 class=\"list-group-item-heading\">{{ contact?.name }}</h4>\n    </div>\n    <span class=\"pull-right\">\n        <img  *ngIf=\"contact?.imageUrl\" [src]=\"contact?.imageUrl\" alt=\"{{ contact?.name }}\" class=\"img-responsive\" style=\"max-height: 50px;\">\n    </span>\n</a>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-list/contact-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-list/contact-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-group\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <div class=\"row\">\n              <span class=\"title pad-left-right\">Contacts</span>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-group pull-left pad-left-right col-xs-7\">\n                <input\n                 type=\"text\" \n                 #searchBox \n                 (keyup)=\"onKeyPress(searchBox.value)\"\n                 class=\"form-control\"\n                 placeholder=\"Enter search value\">\n                <div class=\"glyphicon glyphicon glyphicon-search input-group-addon\" (click)=\"search(searchBox.value)\"></div>\n              </div>\n              <div class=\"pull-right pad-left-right\">\n                <a class=\"btn btn-success\" [routerLink]=\"['new']\">New Contact</a>\n              </div>\n            </div>\n        </div>       \n        <div class=\"panel-body\">\n            <cms-contact-item \n            *ngFor=\"let contact of contacts | contactsFilter: term\" \n            [contact]=\"contact\" \n            dnd-draggable\n            [dragEnabled]=\"true\"\n            [dragData]=\"contact\"\n            [dropZones]=\"['contactGroup']\">\n            </cms-contact-item>\n            <!-- <cms-contact-item *ngFor=\"let contact of contacts\" \n            [contact]=\"contact\"\n            (click)=\"onSelected(contact)\"></cms-contact-item> -->\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts-detail/contacts-detail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts-detail/contacts-detail.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-group\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"> \n            <h4><strong> {{contact?.name}}</strong></h4>   \n            <a class=\"btn btn-info pull-right\" style=\"margin: 2px\" [routerLink]=\"['/contact' , contact?.id, 'edit']\">Edit</a>\n            <a class=\"btn btn-danger pull-right\" style=\"margin: 2px\" (click)=\"onDelete()\">Delete</a>\n            <img [src]=\"contact.imageUrl\" alt=\"{{contact.name}}\" class=\"img-responsive\">\n        </div>          \n        <div class=\"panel-body\">\n            <p><strong>Email: </strong> {{contact?.email}}</p>\n            <p><strong>Phone: </strong> {{contact?.phone}}</p>\n        </div>\n        <div class=\"panel-body\" *ngFor=\"let groupContact of contact?.group\">\n            <div>{{ groupContact?.name }}</div>\n            <div>{{ groupContact?.email }}</div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-5\">\n        <cms-contact-list></cms-contact-list>\n    </div>\n    <div class=\"col-md-4\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-detail/document-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-detail/document-detail.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\" xmlns=\"http://www.w3.org/1999/html\">\n    <div class=\"panel-heading\">\n      <div class=\"row pad-all\">\n        <h4 class=\"title margin-left-right\">{{document?.name}}</h4>\n        <div class=\"row pull-right margin-left-right\">\n          <a class=\"btn btn-primary\" (click)=\"onView()\">View</a>\n          <a class=\"btn btn-info\" [routerLink]=\"['/documents' , document?.id, 'edit']\">Edit</a>\n          <a class=\"btn btn-danger\" (click)=\"onDelete()\">Delete</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"pad-left-right\">\n        <div class=\"row\">\n          <label>Description:</label>\n          <span class=\"label-value\"> {{ document?.description }}</span>\n        </div>\n        <br>\n        <div class=\"row\">\n          <label>URL:</label>\n          <span class=\"label-value\"> {{ document?.url }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-edit/document-edit.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-edit/document-edit.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <form id=\"document-edit\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n\n        <div class=\"col-sm-12 form-group\">\n          <label for=\"name\">Document title</label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            name=\"name\"\n            class=\"form-control\"\n            size=\"120\"\n            max=\"120\"\n            required\n            #name=\"ngModel\"\n            [ngModel]=\"document?.name\">\n        </div>\n\n        <div class=\"col-sm-12 form-group\">\n          <label for=\"description\">Document description</label>\n          <input\n            type=\"text\"\n            id=\"description\"\n            name=\"description\"\n            class=\"form-control\"\n            size=\"120\"\n            max=\"255\"\n            [ngModel]=\"document?.description\">\n        </div>\n\n        <div class=\"col-sm-12 form-group\">\n          <label for=\"url\">Document URL</label>\n          <input\n            type=\"text\"\n            name=\"url\"\n            id=\"documentUrl\"\n            class=\"form-control\"\n            size=\"150\"\n            max=\"255\"\n            #url=\"ngModel\"\n            [ngModel]=\"document?.url\"\n            required>\n        </div>\n      </div>\n\n      <div class=\"alert alert-danger\" *ngIf=\"!f.valid\" >\n        The Document title and URL are required fields\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">Save</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n        </div>\n      </div>\n\n    </form>\n\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-item/document-item.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-item/document-item.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"list-group-item clearfix documentDiv\"\n [routerLink]=\"document.id\" \n routerLinkActive=\"active\" \n style=\"cursor:ponter;\">{{ document.name }}</a>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-list/document-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-list/document-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <div class=\"row pad-left-right\">\n        <span class=\"pull-left title\">Documents</span>\n        <a class=\"btn btn-success pull-right\"  \n          style=\"cursor: pointer;\" \n          [routerLink]=\"['new']\">Add Document</a>\n      </div>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"center-panel\">\n        <cms-document-item \n        *ngFor=\"let documentElement of documents\"\n        [document]=\"documentElement\"\n        ></cms-document-item>\n      </div>\n    </div>\n  </div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-view/document-view.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-view/document-view.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>document-view works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/documents.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/documents/documents.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-5\">\n        <cms-document-list></cms-document-list>\n    </div>\n    <div class=\"col-md-4\">\n       <router-outlet></router-outlet>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" (click)=\"collapsed = !collapsed\">\n                          <span class=\"icon-bar\" *ngFor=\"let iconBar of [1, 2, 3]\"></span>\n                        </button>\n                        <a routerLink=\"/\" class=\"navbar-brand\">WeLearn CMS</a>\n                      </div>\n                <div class=\"navbar-collapse\" [class.collapse]=\"collapsed\" (window:resize)=\"collapsed = true\">\n                <ul class=\"nav navbar-nav\">\n                    <li routerLinkActive=\"active\"><a routerLink=\"/documents\">Documents</a></li>\n                    <li routerLinkActive=\"active\"><a routerLink=\"/messages\">Messages</a></li>\n                    <li routerLinkActive=\"active\"><a routerLink=\"/contact\">Contacts</a></li>\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <!-- add cms directive in the li below -->\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" role=\"button\">User <span class=\"caret\"></span></a>\n                         <ul class=\"dropdown-menu\">\n                             <li><a href=\"#\">Save Data</a></li>\n                             <li><a href=\"#\">Fetch Data</a></li>\n                         </ul>\n                    </li>\n                </ul>\n            </div>\n        </div>\n</nav>\n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/message-edit/message-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/message-edit/message-edit.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n        <form id=\"document-edit\">\n            <div class=\"row\">\n\n                <div class=\"col-sm-12 form-group\">\n                    <label for=\"subject\">Subject</label>\n                    <input type=\"text\" \n                    id=\"subject\" \n                    class=\"form-control\"\n                    size=\"120\"\n                    max=\"120\" #subjectInput>\n                </div>\n\n                <div class=\"col-sm-12 form-group\">\n                    <label for=\"message\">Message</label>\n                    <input type=\"text\" \n                    id=\"message\" \n                    class=\"form-control\"\n                    size=\"120\"\n                    max=\"255\" #messageInput>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button class=\"btn btn-success\" type=\"button\" (click)=\"onSendMessage()\" >Send</button>\n                    <button class=\"btn btn-danger\" type=\"button\" (click)=\"onClearMessage()\">Clear</button>\n                </div>\n            </div>\n\n        </form>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/message-item/message-item.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/message-item/message-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"list-group-item clearfix\">\n    <div>\n        <div class='row'>\n            <span class='messageHeader'> {{ messageSender }}</span>\n        </div>\n        <div class='messageText'>{{ message?.msgText }}</div>\n    </div>\n</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/message-list/message-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/message-list/message-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-5\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <div class=\"row pad-left-right\">\n                    <span class=\"title pull-left\">Messages</span>\n                </div>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                        <cms-message-item \n                        *ngFor=\"let currentMessage of messages\" \n                        [message]=\"currentMessage\">\n                        </cms-message-item>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-footer\">\n                <cms-message-edit (messageSent)=\"onAddMessage($event)\"></cms-message-edit>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>messages works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documents/documents.component */ "./src/app/documents/documents.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documents/document-edit/document-edit.component */ "./src/app/documents/document-edit/document-edit.component.ts");
/* harmony import */ var _documents_document_detail_document_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documents/document-detail/document-detail.component */ "./src/app/documents/document-detail/document-detail.component.ts");
/* harmony import */ var _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contact-edit/contact-edit.component */ "./src/app/contacts/contact-edit/contact-edit.component.ts");
/* harmony import */ var _contacts_contacts_detail_contacts_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contacts-detail/contacts-detail.component */ "./src/app/contacts/contacts-detail/contacts-detail.component.ts");
/* harmony import */ var _messages_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/message-list/message-list.component */ "./src/app/messages/message-list/message-list.component.ts");











const appRoutes = [
    { path: '', redirectTo: '/documents', pathMatch: 'full' },
    { path: 'documents', component: _documents_documents_component__WEBPACK_IMPORTED_MODULE_4__["DocumentsComponent"], children: [
            { path: 'new', component: _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_6__["DocumentEditComponent"] },
            { path: ':id', component: _documents_document_detail_document_detail_component__WEBPACK_IMPORTED_MODULE_7__["DocumentDetailComponent"] },
            { path: ':id/edit', component: _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_6__["DocumentEditComponent"] },
        ] },
    { path: 'messages', component: _messages_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_10__["MessageListComponent"] },
    { path: 'contact', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"], children: [
            { path: 'new', component: _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_8__["ContactEditComponent"] },
            { path: ':id', component: _contacts_contacts_detail_contacts_detail_component__WEBPACK_IMPORTED_MODULE_9__["ContactsDetailComponent"] },
            { path: ':id/edit', component: _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_8__["ContactEditComponent"] },
        ] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cms';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _contacts_contacts_detail_contacts_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contacts-detail/contacts-detail.component */ "./src/app/contacts/contacts-detail/contacts-detail.component.ts");
/* harmony import */ var _contacts_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contact-item/contact-item.component */ "./src/app/contacts/contact-item/contact-item.component.ts");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/dropdown.directive.ts");
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./documents/documents.component */ "./src/app/documents/documents.component.ts");
/* harmony import */ var _documents_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./documents/document-list/document-list.component */ "./src/app/documents/document-list/document-list.component.ts");
/* harmony import */ var _documents_document_item_document_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./documents/document-item/document-item.component */ "./src/app/documents/document-item/document-item.component.ts");
/* harmony import */ var _documents_document_detail_document_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./documents/document-detail/document-detail.component */ "./src/app/documents/document-detail/document-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _messages_message_edit_message_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messages/message-edit/message-edit.component */ "./src/app/messages/message-edit/message-edit.component.ts");
/* harmony import */ var _messages_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messages/message-item/message-item.component */ "./src/app/messages/message-item/message-item.component.ts");
/* harmony import */ var _messages_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./messages/message-list/message-list.component */ "./src/app/messages/message-list/message-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _documents_document_view_document_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./documents/document-view/document-view.component */ "./src/app/documents/document-view/document-view.component.ts");
/* harmony import */ var _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./documents/document-edit/document-edit.component */ "./src/app/documents/document-edit/document-edit.component.ts");
/* harmony import */ var _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contacts/contact-edit/contact-edit.component */ "./src/app/contacts/contact-edit/contact-edit.component.ts");
/* harmony import */ var ng2_dnd__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-dnd */ "./node_modules/ng2-dnd/ng2-dnd.js");
/* harmony import */ var _contacts_contacts_filter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contacts/contacts-filter.pipe */ "./src/app/contacts/contacts-filter.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"],
            _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"],
            _contacts_contacts_detail_contacts_detail_component__WEBPACK_IMPORTED_MODULE_8__["ContactsDetailComponent"],
            _contacts_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_9__["ContactItemComponent"],
            _dropdown_directive__WEBPACK_IMPORTED_MODULE_10__["DropdownDirective"],
            _documents_documents_component__WEBPACK_IMPORTED_MODULE_11__["DocumentsComponent"],
            _documents_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_12__["DocumentListComponent"],
            _documents_document_item_document_item_component__WEBPACK_IMPORTED_MODULE_13__["DocumentItemComponent"],
            _documents_document_detail_document_detail_component__WEBPACK_IMPORTED_MODULE_14__["DocumentDetailComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"],
            _messages_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_17__["MessageItemComponent"],
            _messages_message_edit_message_edit_component__WEBPACK_IMPORTED_MODULE_16__["MessageEditComponent"],
            _messages_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_18__["MessageListComponent"],
            _documents_document_view_document_view_component__WEBPACK_IMPORTED_MODULE_20__["DocumentViewComponent"],
            _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_21__["DocumentEditComponent"],
            _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_22__["ContactEditComponent"],
            _contacts_contacts_filter_pipe__WEBPACK_IMPORTED_MODULE_24__["ContactsFilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
            ng2_dnd__WEBPACK_IMPORTED_MODULE_23__["DndModule"].forRoot()
        ],
        //providers: [],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contacts/contact-edit/contact-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-edit/contact-edit.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.required.ng-invalid {\n  border: 1px solid red;\n}\n\n.invalid.ng-invalid.ng-dirty {\n  border: 1px solid red;\n}\n\n.pad-left-right{\n  padding-left:.1rem;\n}\n\n.deleteButton {\n  margin-top: 1.5rem;\n  margin-left: -1.2rem;\n  width: 3.4rem;\n}\n\n.buttonDiv {\n  margin-top: 1.5rem;\n}\n\n.groupDiv {\n  min-height: 6rem;\n  border: solid thin lightgrey;\n}\n\n.dragMsg {\n  font-size: 2rem;\n  color: darkgrey;\n  margin-left: 3rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdC1lZGl0L2NvbnRhY3QtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdC1lZGl0L2NvbnRhY3QtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucmVxdWlyZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmludmFsaWQubmctaW52YWxpZC5uZy1kaXJ0eSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLnBhZC1sZWZ0LXJpZ2h0e1xuICBwYWRkaW5nLWxlZnQ6LjFyZW07XG59XG5cbi5kZWxldGVCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMS4ycmVtO1xuICB3aWR0aDogMy40cmVtO1xufVxuXG4uYnV0dG9uRGl2IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uZ3JvdXBEaXYge1xuICBtaW4taGVpZ2h0OiA2cmVtO1xuICBib3JkZXI6IHNvbGlkIHRoaW4gbGlnaHRncmV5O1xufVxuXG4uZHJhZ01zZyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IGRhcmtncmV5O1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/contacts/contact-edit/contact-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-edit/contact-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contacts/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact.model */ "./src/app/contacts/contact.model.ts");





let ContactEditComponent = class ContactEditComponent {
    constructor(contactService, router, route) {
        this.contactService = contactService;
        this.router = router;
        this.route = route;
        this.contact = null;
        this.groupContacts = [];
        this.editMode = false;
        this.hasGroup = false;
        this.invalidGroupContact = false;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = params['id'];
            if (this.id == null || this.id == undefined) {
                return this.editMode = false;
            }
            this.originalContact = this.contactService.getContact(this.id);
            if (this.originalContact == null || this.originalContact == undefined) {
                return;
            }
            this.editMode = true;
            this.contact = JSON.parse(JSON.stringify(this.originalContact));
        });
    }
    onSubmit(form) {
        // get values from form’s fields
        const value = form.value;
        const newContact = new _contact_model__WEBPACK_IMPORTED_MODULE_4__["Contact"]('', value.name, value.email, value.phone, value.imageUrl, this.groupContacts);
        if (this.editMode == true) {
            this.contactService.updateContact(this.originalContact, newContact);
        }
        else {
            this.contactService.addContact(newContact);
        }
        this.router.navigate(['/contact']);
    }
    onCancel() {
        this.router.navigate(['/contact']);
    }
    isInvalidContact(newContact) {
        if (!newContact) {
            return true;
        }
        if (newContact.id === this.contact.id) {
            return true;
        }
        for (let i = 0; i < this.groupContacts.length; i++) {
            if (newContact.id === this.groupContacts[i].id) {
                return true;
            }
        }
        return false;
    }
    addToGroup($event) {
        const selectedContact = $event.dragData;
        this.invalidGroupContact = this.isInvalidContact(selectedContact);
        if (this.invalidGroupContact) {
            return;
        }
        this.groupContacts.push(selectedContact);
        this.invalidGroupContact = false;
    }
    onRemoveItem(idx) {
        if (idx < 0 || idx >= this.groupContacts.length) {
            return;
        }
        this.groupContacts.splice(idx, 1);
        this.invalidGroupContact = false;
    }
};
ContactEditComponent.ctorParameters = () => [
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ContactEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-contact-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-edit/contact-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-edit.component.css */ "./src/app/contacts/contact-edit/contact-edit.component.css")).default]
    })
], ContactEditComponent);



/***/ }),

/***/ "./src/app/contacts/contact-item/contact-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-item/contact-item.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtaXRlbS9jb250YWN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/contacts/contact-item/contact-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-item/contact-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactItemComponent", function() { return ContactItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactItemComponent = class ContactItemComponent {
    constructor() {
        this.contactSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSelected() {
        this.contactSelected.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactItemComponent.prototype, "contact", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactItemComponent.prototype, "contactSelected", void 0);
ContactItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-contact-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-item/contact-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-item.component.css */ "./src/app/contacts/contact-item/contact-item.component.css")).default]
    })
], ContactItemComponent);



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#title {\n    font-size: 2em;\n    font-weight: bold;\n}\n\n#button {\n    text-decoration: none;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdGxlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2J1dHRvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contacts/contact.service.ts");



let ContactListComponent = class ContactListComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.selectedContactEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contacts = [];
    }
    ngOnInit() {
        this.contacts = this.contactService.getContacts();
        this.subscription = this.contactService.contactListChangedEvent
            .subscribe((contactsList) => {
            this.contacts = contactsList;
        });
        this.contactService.contactListChangedEvent
            .subscribe((contacts) => {
            this.contacts = contacts;
        });
    }
    onKeyPress(value) {
        this.term = value;
    }
};
ContactListComponent.ctorParameters = () => [
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactListComponent.prototype, "selectedContactEvent", void 0);
ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-contact-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-list/contact-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contacts/contact-list/contact-list.component.css")).default]
    })
], ContactListComponent);



/***/ }),

/***/ "./src/app/contacts/contact.model.ts":
/*!*******************************************!*\
  !*** ./src/app/contacts/contact.model.ts ***!
  \*******************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Contact {
    constructor(id, name, email, phone, imageUrl, group) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.group = group;
    }
}


/***/ }),

/***/ "./src/app/contacts/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


// import { MOCKCONTACTS } from './MOCKCONTACTS';


let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
        this.contactListChangedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // contactChangedEvent = new EventEmitter<Contact[]>();
        // contactSelectedEvent = new EventEmitter<Contact>();
        this.contacts = [];
        this.fetchContacts();
        this.maxContactId = this.getMaxId();
    }
    fetchContacts() {
        return this.http
            .get('https://samueltwagner-cms.firebaseio.com/contacts.json')
            .subscribe((contacts) => {
            this.contacts = contacts;
            this.maxContactId = this.getMaxId();
            this.contacts.sort((a, b) => (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0);
            this.contactListChangedEvent.next(this.contacts.slice());
        }, (error) => {
            console.log(error);
        });
    }
    storeContacts() {
        this.contacts = JSON.parse(JSON.stringify(this.contacts));
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'json' });
        this.http
            .put('https://samueltwagner-cms.firebaseio.com/contacts.json', this.contacts, { headers: header })
            .subscribe((returnedContacts) => {
            this.contactListChangedEvent.next(returnedContacts.slice());
        });
    }
    getContact(id) {
        for (const contact of this.contacts) {
            if (contact.id === id) {
                return contact;
            }
        }
        return null;
    }
    getContacts() {
        return this.contacts.slice();
    }
    getMaxId() {
        let maxId = 0;
        for (let contact of this.contacts) {
            let currentId = +contact.id;
            if (currentId > maxId) {
                maxId = currentId;
            }
            return maxId;
        }
    }
    addContact(newContact) {
        if (!newContact) {
            return;
        }
        else {
            this.maxContactId++;
            newContact.id = String(this.maxContactId);
            this.contacts.push(newContact);
            this.storeContacts();
        }
    }
    updateContact(originalContact, newContact) {
        if (!originalContact || !newContact) {
            return;
        }
        const pos = this.contacts.indexOf(originalContact);
        if (pos < 0) {
            console.log("No negative indexes");
            return;
        }
        newContact.id = originalContact.id;
        this.contacts[pos] = newContact;
        this.storeContacts();
    }
    deleteContact(contact) {
        if (contact === null || contact === undefined) {
            return;
        }
        const pos = this.contacts.indexOf(contact);
        if (pos < 0) {
            return;
        }
        this.contacts.splice(pos, 1);
        this.storeContacts();
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ContactService);



/***/ }),

/***/ "./src/app/contacts/contacts-detail/contacts-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/contacts/contacts-detail/contacts-detail.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button a {\n    text-decoration: none;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMtZGV0YWlsL2NvbnRhY3RzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy1kZXRhaWwvY29udGFjdHMtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contacts/contacts-detail/contacts-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contacts-detail/contacts-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsDetailComponent", function() { return ContactsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contacts/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ContactsDetailComponent = class ContactsDetailComponent {
    //inject from service
    constructor(contactService, router, route) {
        this.contactService = contactService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = params.id;
            this.contact = this.contactService.getContact(this.id);
        });
    }
    ;
    onDelete() {
        this.contactService.deleteContact(this.contact);
        this.router.navigate(['/contact'], { relativeTo: this.route });
    }
};
ContactsDetailComponent.ctorParameters = () => [
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ContactsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-contacts-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts-detail/contacts-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts-detail.component.css */ "./src/app/contacts/contacts-detail/contacts-detail.component.css")).default]
    })
], ContactsDetailComponent);



/***/ }),

/***/ "./src/app/contacts/contacts-filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: ContactsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsFilterPipe", function() { return ContactsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactsFilterPipe = class ContactsFilterPipe {
    transform(contacts, term) {
        let filteredArray = [];
        if (term && term.length > 0) {
            filteredArray = contacts.filter((contact) => contact.name.toLowerCase().includes(term.toLowerCase()));
        }
        if (filteredArray.length < 1) {
            return contacts;
        }
        return filteredArray;
    }
};
ContactsFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'contactsFilter'
    })
], ContactsFilterPipe);



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.service */ "./src/app/contacts/contact.service.ts");



let ContactsComponent = class ContactsComponent {
    // selectedContact: Contact;
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        // this.contactService.contactSelectedEvent.subscribe(
        //   (contact: Contact) => {
        //     this.selectedContact = contact;
        //   }
        // )
    }
};
ContactsComponent.ctorParameters = () => [
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }
];
ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")).default]
    })
], ContactsComponent);



/***/ }),

/***/ "./src/app/documents/document-detail/document-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/documents/document-detail/document-detail.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n    font-weight: bold;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  \n  .margin-left-right{\n    margin-left:1rem;\n    margin-right:1rem;\n  }\n  \n  .pad-left-right{\n    margin-left:1rem;\n    margin-right:1rem;\n  }\n  \n  .btn {\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50LWRldGFpbC9kb2N1bWVudC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUY7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kb2N1bWVudHMvZG9jdW1lbnQtZGV0YWlsL2RvY3VtZW50LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgfVxuICBcbiAgLm1hcmdpbi1sZWZ0LXJpZ2h0e1xuICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OjFyZW07XG4gIH1cbiAgXG4gIC5wYWQtbGVmdC1yaWdodHtcbiAgICBtYXJnaW4tbGVmdDoxcmVtO1xuICAgIG1hcmdpbi1yaWdodDoxcmVtO1xuICB9XG4gIFxuLmJ0biB7XG4gIG1hcmdpbjogMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/documents/document-detail/document-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/documents/document-detail/document-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: DocumentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDetailComponent", function() { return DocumentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _documents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../documents.service */ "./src/app/documents/documents.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_wind_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/wind-ref.service */ "./src/app/wind-ref.service.ts");





let DocumentDetailComponent = class DocumentDetailComponent {
    constructor(documentService, windowRefService, router, route) {
        this.documentService = documentService;
        this.windowRefService = windowRefService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = params["id"];
            this.document = this.documentService.getDocument(this.id);
        });
        this.nativeWindow = this.windowRefService.getNativeWindow();
    }
    onView() {
        if (this.document.url) {
            this.nativeWindow.open(this.document.url);
        }
    }
    onDelete() {
        this.documentService.deleteDocument(this.document);
        this.router.navigate(['/documents'], { relativeTo: this.route });
    }
};
DocumentDetailComponent.ctorParameters = () => [
    { type: _documents_service__WEBPACK_IMPORTED_MODULE_2__["DocumentsService"] },
    { type: src_app_wind_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindRefService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DocumentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-document-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-detail/document-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-detail.component.css */ "./src/app/documents/document-detail/document-detail.component.css")).default]
    })
], DocumentDetailComponent);



/***/ }),

/***/ "./src/app/documents/document-edit/document-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-edit/document-edit.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50LWVkaXQvZG9jdW1lbnQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50LWVkaXQvZG9jdW1lbnQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/documents/document-edit/document-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documents/document-edit/document-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentEditComponent", function() { return DocumentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _document_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../document.model */ "./src/app/documents/document.model.ts");
/* harmony import */ var _documents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../documents.service */ "./src/app/documents/documents.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DocumentEditComponent = class DocumentEditComponent {
    constructor(documentService, router, route) {
        this.documentService = documentService;
        this.router = router;
        this.route = route;
        this.editMode = false;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = params['id'];
            if (this.id == null || this.id == undefined) {
                return this.editMode = false;
            }
            // this.originalDocument = this.documentService.getDocument(this.id);
            if (this.originalDocument == null || this.originalDocument == undefined) {
                return;
            }
            this.editMode = true;
            this.document = JSON.parse(JSON.stringify(this.originalDocument));
        });
    }
    onSubmit(form) {
        // get values from form’s fields
        const value = form.value;
        const newDocument = new _document_model__WEBPACK_IMPORTED_MODULE_2__["Document"]('', '', value.name, value.description, value.url, null);
        if (this.editMode == true) {
            this.documentService.updateDocument(this.originalDocument, newDocument);
        }
        else {
            this.documentService.addDocument(newDocument);
        }
        this.router.navigate(['/documents'], { relativeTo: this.route });
    }
    onCancel() {
        this.router.navigate(['/documents'], { relativeTo: this.route });
    }
};
DocumentEditComponent.ctorParameters = () => [
    { type: _documents_service__WEBPACK_IMPORTED_MODULE_3__["DocumentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DocumentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-document-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-edit/document-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-edit.component.css */ "./src/app/documents/document-edit/document-edit.component.css")).default]
    })
], DocumentEditComponent);



/***/ }),

/***/ "./src/app/documents/document-item/document-item.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-item/document-item.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".documentDiv {\n    width: 9rem;\n    height: 11rem;\n    margin: 2px;\n    font-size: 1.3rem;\n    border: solid thin darkgrey;\n    float: left;\n    padding: .25rem\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50LWl0ZW0vZG9jdW1lbnQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1g7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy9kb2N1bWVudC1pdGVtL2RvY3VtZW50LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb2N1bWVudERpdiB7XG4gICAgd2lkdGg6IDlyZW07XG4gICAgaGVpZ2h0OiAxMXJlbTtcbiAgICBtYXJnaW46IDJweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBib3JkZXI6IHNvbGlkIHRoaW4gZGFya2dyZXk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogLjI1cmVtXG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/documents/document-item/document-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documents/document-item/document-item.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentItemComponent", function() { return DocumentItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DocumentItemComponent = class DocumentItemComponent {
    constructor() {
        this.documentSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSelected() {
        this.documentSelected.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DocumentItemComponent.prototype, "document", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DocumentItemComponent.prototype, "documentSelected", void 0);
DocumentItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-document-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-item/document-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-item.component.css */ "./src/app/documents/document-item/document-item.component.css")).default]
    })
], DocumentItemComponent);



/***/ }),

/***/ "./src/app/documents/document-list/document-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-list/document-list.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.center-panel {\n    margin-left: auto;\n    margin-right: auto;\n    width: 38rem;\n  }\n  \n  .title {\n    font-size: 2.5rem;\n    font-weight: bold;\n  }\n  \n  .pad-left-right{\n    padding-left:1rem;\n    padding-right:1rem;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRzL2RvY3VtZW50LWxpc3QvZG9jdW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kb2N1bWVudHMvZG9jdW1lbnQtbGlzdC9kb2N1bWVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jZW50ZXItcGFuZWwge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMzhyZW07XG4gIH1cbiAgXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5wYWQtbGVmdC1yaWdodHtcbiAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OjFyZW07XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/documents/document-list/document-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documents/document-list/document-list.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function() { return DocumentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _documents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../documents.service */ "./src/app/documents/documents.service.ts");



let DocumentListComponent = class DocumentListComponent {
    constructor(documentsService) {
        this.documentsService = documentsService;
        this.selectedDocumentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.documents = [];
    }
    ngOnInit() {
        this.documentsService.getDocuments();
        this.subscription = this.documentsService.documentListChangedEvent
            .subscribe((documentList) => {
            this.documents = documentList;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
DocumentListComponent.ctorParameters = () => [
    { type: _documents_service__WEBPACK_IMPORTED_MODULE_2__["DocumentsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DocumentListComponent.prototype, "selectedDocumentEvent", void 0);
DocumentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-document-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-list/document-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-list.component.css */ "./src/app/documents/document-list/document-list.component.css")).default]
    })
], DocumentListComponent);



/***/ }),

/***/ "./src/app/documents/document-view/document-view.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-view/document-view.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy9kb2N1bWVudC12aWV3L2RvY3VtZW50LXZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/documents/document-view/document-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documents/document-view/document-view.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentViewComponent", function() { return DocumentViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DocumentViewComponent = class DocumentViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
DocumentViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-document-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/document-view/document-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-view.component.css */ "./src/app/documents/document-view/document-view.component.css")).default]
    })
], DocumentViewComponent);



/***/ }),

/***/ "./src/app/documents/document.model.ts":
/*!*********************************************!*\
  !*** ./src/app/documents/document.model.ts ***!
  \*********************************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Document {
    constructor(_id, id, name, description, url, children) {
        this._id = _id;
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.children = children;
    }
}


/***/ }),

/***/ "./src/app/documents/documents.component.css":
/*!***************************************************!*\
  !*** ./src/app/documents/documents.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy9kb2N1bWVudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/documents/documents.component.ts":
/*!**************************************************!*\
  !*** ./src/app/documents/documents.component.ts ***!
  \**************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _documents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documents.service */ "./src/app/documents/documents.service.ts");



let DocumentsComponent = class DocumentsComponent {
    // selectedDocument: Document;
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    ngOnInit() {
        // this.documentsService.documentSelectedEvent.subscribe(
        //   (document: Document) => {
        //     this.selectedDocument = document;
        //   }
        // )
    }
};
DocumentsComponent.ctorParameters = () => [
    { type: _documents_service__WEBPACK_IMPORTED_MODULE_2__["DocumentsService"] }
];
DocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-documents',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./documents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/documents/documents.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./documents.component.css */ "./src/app/documents/documents.component.css")).default]
    })
], DocumentsComponent);



/***/ }),

/***/ "./src/app/documents/documents.service.ts":
/*!************************************************!*\
  !*** ./src/app/documents/documents.service.ts ***!
  \************************************************/
/*! exports provided: DocumentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsService", function() { return DocumentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let DocumentsService = class DocumentsService {
    constructor(http) {
        this.http = http;
        this.documentListChangedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.documents = [];
    }
    sortAndSend() {
        this.documents.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.documentListChangedEvent.next(this.documents.slice());
    }
    //GET
    getDocuments() {
        this.http.get('http://localhost:3000/documents')
            .subscribe((documentData) => {
            this.documents = documentData.documents;
            this.sortAndSend();
        }, (error) => {
            console.log(error);
        });
    }
    getDocument(documentId) {
        for (const document of this.documents) {
            if (document.id === documentId) {
                return document;
            }
        }
        return null;
    }
    //POST
    addDocument(newDocument) {
        if (!newDocument) {
            return;
        }
        else {
            newDocument.id = "";
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
            //add to database
            this.http.post('http://localhost:3000/documents', document, { headers: headers })
                .subscribe((responseData) => {
                //add new document to documents
                this.documents.push(responseData.document);
                this.sortAndSend();
            });
        }
    }
    //PUT/UPDATE
    updateDocument(originalDocument, newDocument) {
        if (!originalDocument || !newDocument) {
            return;
        }
        const pos = this.documents.findIndex(d => d.id === originalDocument.id);
        if (pos < 0) {
            return;
        }
        newDocument.id = originalDocument.id;
        newDocument._id = originalDocument._id;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        //update database
        this.http.put('http://localhost:3000/documents/' + originalDocument.id, newDocument, { headers: headers })
            .subscribe((response) => {
            this.documents[pos] = newDocument;
            this.sortAndSend();
        });
    }
    //DELETE
    deleteDocument(document) {
        if (!document) {
            return;
        }
        const pos = this.documents.findIndex(d => d.id === document.id);
        if (pos < 0) {
            return;
        }
    }
};
DocumentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DocumentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DocumentsService);

//   fetchDocuments() {
//     return this.http
//       .get<Document[]>(
//         'https://samueltwagner-cms.firebaseio.com/documents.json'
//       )
//       .subscribe((documents: Document[]) => {
//         this.documents = documents;
//         this.maxDocumentId = this.getMaxId();
//         this.documents.sort((a, b) => (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0);
//         this.documentListChangedEvent.next(this.documents.slice());
//         },
//       (error: any) => {
//         console.log(error);
//         }
//       )
//   }
//   storeDocuments() {
//     this.documents = JSON.parse(JSON.stringify(this.documents));
//     const header = new HttpHeaders({'Content-Type': 'json'});
//     this.http
//       .put('https://samueltwagner-cms.firebaseio.com/documents.json', this.documents, {headers: header})
//       .subscribe((returnedDocuments: Document[]) => {
//         this.documentListChangedEvent.next(returnedDocuments.slice());
//       });
//   }
//     getMaxId(): number {
//       let maxId = 0;
//       for (let document of this.documents) {
//         let currentId = +document.id;
//           if (currentId > maxId) {
//             maxId = currentId;
//           }
//           return maxId;
//       }
//     }
//     updateDocument(originalDocument: Document, newDocument: Document){
//       if (!originalDocument  ||  !newDocument){
//         return;
//       }
//       const pos = this.documents.indexOf(originalDocument);
//       if ( pos < 0 ){
//         console.log("No negative indexes");
//         return;
//       }
//       newDocument.id = originalDocument.id;
//       this.documents[pos] = newDocument;
//       this.storeDocuments();
//     }
//     deleteDocument(document: Document) {
//       if (document === null || document === undefined) {
//         return;
//       }
//       const pos = this.documents.indexOf(document);
//       if (pos < 0) {
//         return;
//       }
//       this.documents.splice(pos, 1);
//       this.storeDocuments();
//     }
// }


/***/ }),

/***/ "./src/app/dropdown.directive.ts":
/*!***************************************!*\
  !*** ./src/app/dropdown.directive.ts ***!
  \***************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownDirective = class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DropdownDirective.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[cmsDropdown]'
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/messages/message-edit/message-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/messages/message-edit/message-edit.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2UtZWRpdC9tZXNzYWdlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/messages/message-edit/message-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/messages/message-edit/message-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEditComponent", function() { return MessageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_messages_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/messages/message.model */ "./src/app/messages/message.model.ts");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages.service */ "./src/app/messages/messages.service.ts");
/* harmony import */ var src_app_contacts_contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/contacts/contact.model */ "./src/app/contacts/contact.model.ts");





let MessageEditComponent = class MessageEditComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.messageSent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentSender = new src_app_contacts_contact_model__WEBPACK_IMPORTED_MODULE_4__["Contact"]('', '101', 'Sam Wagner', 'wag12006@byui.edu', '843-729-3894', null);
    }
    ngOnInit() {
    }
    onSendMessage() {
        const subjectInput = this.subjectInputRef.nativeElement.value;
        const messageInput = this.messageInputRef.nativeElement.value;
        const newMessage = new src_app_messages_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]("1", subjectInput, messageInput, null, null);
        this.messagesService.addMessage(newMessage);
    }
    onClearMessage() {
        this.subjectInputRef.nativeElement.value = '';
        this.messageInputRef.nativeElement.value = '';
    }
};
MessageEditComponent.ctorParameters = () => [
    { type: _messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subjectInput', { static: false })
], MessageEditComponent.prototype, "subjectInputRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageInput', { static: false })
], MessageEditComponent.prototype, "messageInputRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MessageEditComponent.prototype, "messageSent", void 0);
MessageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-message-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/message-edit/message-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message-edit.component.css */ "./src/app/messages/message-edit/message-edit.component.css")).default]
    })
], MessageEditComponent);



/***/ }),

/***/ "./src/app/messages/message-item/message-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/messages/message-item/message-item.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".messageHeader {\n    background-color: azure;\n    border: solid thin black;\n    border-radius: 10px;\n    padding: 0.4rem;\n    font-size: 1.5rem;\n}\n\n.messageText {\n    border-radius: 10px;\n    padding: 5px;\n    margin-top: .25rem;\n    margin-left: 1rem;\n    font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1pdGVtL21lc3NhZ2UtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlLWl0ZW0vbWVzc2FnZS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZUhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG4gICAgYm9yZGVyOiBzb2xpZCB0aGluIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMC40cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubWVzc2FnZVRleHQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/messages/message-item/message-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/messages/message-item/message-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return MessageItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_contacts_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/contacts/contact.service */ "./src/app/contacts/contact.service.ts");



let MessageItemComponent = class MessageItemComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.messageSender = "Sam";
    }
    ngOnInit() {
        let contact = this.contactService.getContact(this.message.sender);
        this.messageSender = contact.name;
    }
};
MessageItemComponent.ctorParameters = () => [
    { type: src_app_contacts_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageItemComponent.prototype, "message", void 0);
MessageItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-message-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/message-item/message-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message-item.component.css */ "./src/app/messages/message-item/message-item.component.css")).default]
    })
], MessageItemComponent);



/***/ }),

/***/ "./src/app/messages/message-list/message-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/messages/message-list/message-list.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n    font-size: 2.5rem;\n    font-weight: bold;\n}\n\n.pad-left-right {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1saXN0L21lc3NhZ2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlLWxpc3QvbWVzc2FnZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGFkLWxlZnQtcmlnaHQge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/messages/message-list/message-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/messages/message-list/message-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messages.service */ "./src/app/messages/messages.service.ts");
/* harmony import */ var src_app_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/contacts/contact.service */ "./src/app/contacts/contact.service.ts");




let MessageListComponent = class MessageListComponent {
    constructor(messagesService, contactService) {
        this.messagesService = messagesService;
        this.contactService = contactService;
        this.messages = [];
        this.contactService.fetchContacts();
        this.messagesService.fetchMessages();
    }
    ngOnInit() {
        this.messages = this.messagesService.getMessages();
        this.messagesService.messageChangeEvent.subscribe((messages) => {
            this.messages = messages;
        });
    }
    onAddMessage(message) {
        this.messages.push(message);
    }
};
MessageListComponent.ctorParameters = () => [
    { type: _messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] },
    { type: src_app_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }
];
MessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-message-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/message-list/message-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message-list.component.css */ "./src/app/messages/message-list/message-list.component.css")).default]
    })
], MessageListComponent);



/***/ }),

/***/ "./src/app/messages/message.model.ts":
/*!*******************************************!*\
  !*** ./src/app/messages/message.model.ts ***!
  \*******************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Message {
    constructor(_id, id, subject, msgText, sender) {
        this._id = _id;
        this.id = id;
        this.subject = subject;
        this.msgText = msgText;
        this.sender = sender;
    }
}


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessagesComponent = class MessagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cms-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")).default]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/messages/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/messages/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


// import { MOCKMESSAGES } from './MOCKMESSAGES';

let MessagesService = class MessagesService {
    constructor(http) {
        this.http = http;
        this.messageChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.messages = [];
        // this.messages = MOCKMESSAGES;
        this.fetchMessages();
        this.maxMessageId = this.getMaxId();
    }
    fetchMessages() {
        return this.http
            .get('https://samueltwagner-cms.firebaseio.com/messages.json')
            .subscribe((messages) => {
            this.messages = messages;
            this.maxMessageId = this.getMaxId();
            this.messages.sort((a, b) => (a.id < b.id) ? 1 : (a.id > b.id) ? -1 : 0);
            this.messageChangeEvent.next(this.messages.slice());
        }, (error) => {
            console.log(error);
        });
    }
    storeMessages() {
        this.messages = JSON.parse(JSON.stringify(this.messages));
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'json' });
        this.http
            .put('https://samueltwagner-cms.firebaseio.com/messages.json', this.messages, { headers: header })
            .subscribe((returnedMessages) => {
            this.messageChangeEvent.next(returnedMessages.slice());
        });
    }
    getMessage(messageId) {
        for (const message of this.messages) {
            if (message.id === messageId) {
                return message;
            }
            return null;
        }
    }
    getMaxId() {
        let maxId = 0;
        for (let message of this.messages) {
            let currentId = +message.id;
            if (currentId > maxId) {
                maxId = currentId;
            }
            return maxId;
        }
    }
    getMessages() {
        return this.messages.slice();
    }
    addMessage(message) {
        if (!message) {
            return;
        }
        else {
            this.maxMessageId++;
            message.id = String(this.maxMessageId);
            this.messages.push(message);
            this.storeMessages();
        }
    }
};
MessagesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessagesService);



/***/ }),

/***/ "./src/app/wind-ref.service.ts":
/*!*************************************!*\
  !*** ./src/app/wind-ref.service.ts ***!
  \*************************************/
/*! exports provided: WindRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindRefService", function() { return WindRefService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WindRefService = class WindRefService {
    constructor() { }
    getNativeWindow() {
        return window;
    }
};
WindRefService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WindRefService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/swagner/Desktop/CIT366FullStack/CIT366/cms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map