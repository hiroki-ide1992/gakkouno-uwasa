/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/app.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/top/topCategory.ts":
/*!************************************!*\
  !*** ./src/api/top/topCategory.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CategoryData = [\r\n    {\r\n        link: \"toshi\",\r\n        thumb: \"thumb1.jpg\",\r\n        alt: \"都市伝説\",\r\n        frame: \"frame_red.png\",\r\n        border: \"red\",\r\n        title: \"h2_title1.svg\",\r\n        text: \"\\u77E5\\u30E9\\u30BA\\u3001\\u77E5\\u30E9\\u30BA\\u3001\\u30D2\\u30C8\\u30AB\\u30E9\\u30D2\\u30C8\\u30D8\\u3001\\u753A\\u30AB\\u30E9\\u753A\\u30D8\\u3001\\n    \\u5642\\u30EF\\u4F1D\\u627F\\u30C8\\u30CA\\u30EA\\u3001\\u30AB\\u30B5\\u30CA\\u30EA\\u3001\\u30AB\\u30B5\\u30CA\\u30EA\\u3001\\u900F\\u660E\\u30C8\\u30CA\\u30EB\\u3001\\n    \\u5E7E\\u661F\\u971C\\u3001\\u8AB0\\u30E2\\u30AB\\u30EC\\u30E2\\u30AC\\u7956\\u30CE\\u30B3\\u30B3\\u30ED\\u30F2\\u77E5\\u30E9\\u30BA\\u3001\\n    \\u30EF\\u30BF\\u30B7\\u30CF\\u3001\\u771F\\u30CE\\u6050\\u6016\\u30F2\\u6B64\\u51E6\\u30CB\\u6B8B\\u30B9\"\r\n    },\r\n    {\r\n        link: \"uma\",\r\n        thumb: \"thumb2.jpg\",\r\n        alt: \"UMA\",\r\n        frame: \"frame_pink.png\",\r\n        border: \"pink\",\r\n        title: \"h2_title2.svg\",\r\n        text: \"\\n    \\u3007\\u6708\\u00D7\\u65E5\\u3001\\u307E\\u305F\\u3042\\u306E\\u5834\\u6240\\u3067\\u5F7C\\u3068\\u4F1A\\u3063\\u305F<br>\\n    \\u4F1A\\u3063\\u305F\\u3068\\u8A00\\u3046\\u304C\\u305F\\u3060\\u898B\\u3066\\u3044\\u305F\\u3060\\u3051\\u306A\\u306E\\u3060\\u3001\\u304A\\u4E92\\u3044\\u306B<br>\\n    \\u5F7C\\u306E\\u5927\\u304D\\u306A\\u773C\\u306B\\u306F\\u3044\\u3064\\u3082\\u79C1\\u304C\\u6620\\u3063\\u3066\\u3044\\u308B\\u3001\\u3060\\u304C\\u5F7C\\u306E\\u773C\\u306B\\u79C1\\u306F\\u6620\\u3063\\u3066\\u3044\\u308B\\u3060\\u308D\\u3046\\u304B\\uFF1F<br>\\n    \\u4E8B\\u306E\\u771F\\u76F8\\u3092\\u79C1\\u306F\\u4ECA\\u65E5\\u78BA\\u304B\\u3081\\u306B\\u884C\\u304F\\u3064\\u3082\\u308A\\u3060\\n\"\r\n    },\r\n    {\r\n        link: \"spot\",\r\n        thumb: \"thumb3.jpg\",\r\n        alt: \"心霊スポット\",\r\n        frame: \"frame_blue.png\",\r\n        border: \"blue\",\r\n        title: \"h2_title3.svg\",\r\n        text: \"\\u4E00\\u3064\\u3001\\u7ACB\\u3061\\u5165\\u308B\\u3079\\u304B\\u3089\\u305A<br>\\n    \\u4E00\\u3064\\u3001\\u5F8C\\u308D\\u3092\\u632F\\u308A\\u5411\\u304F\\u3079\\u304B\\u3089\\u305A<br>\\n    \\u4E00\\u3064\\u3001\\u4ED6\\u4EBA\\u306B\\u8A71\\u3059\\u3079\\u304B\\u3089\\u305A<br>\\n    \\u4E00\\u3064\\u3001\\u2026\\u2026\\u3092\\u2026\\u3076\\u2026\\u2026\\u3089\\u2026\\n    \"\r\n    }\r\n];\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryData);\r\n\n\n//# sourceURL=webpack:///./src/api/top/topCategory.ts?");

/***/ }),

/***/ "./src/img/common/icon_topage.svg":
/*!****************************************!*\
  !*** ./src/img/common/icon_topage.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/icon_topage.svg\";\n\n//# sourceURL=webpack:///./src/img/common/icon_topage.svg?");

/***/ }),

/***/ "./src/img/common/logo1-light.png":
/*!****************************************!*\
  !*** ./src/img/common/logo1-light.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/logo1-light.png\";\n\n//# sourceURL=webpack:///./src/img/common/logo1-light.png?");

/***/ }),

/***/ "./src/img/common/logo1.png":
/*!**********************************!*\
  !*** ./src/img/common/logo1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/logo1.png\";\n\n//# sourceURL=webpack:///./src/img/common/logo1.png?");

/***/ }),

/***/ "./src/img/common/nav_close_back.png":
/*!*******************************************!*\
  !*** ./src/img/common/nav_close_back.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/nav_close_back.png\";\n\n//# sourceURL=webpack:///./src/img/common/nav_close_back.png?");

/***/ }),

/***/ "./src/img/common/nav_close_front.png":
/*!********************************************!*\
  !*** ./src/img/common/nav_close_front.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/nav_close_front.png\";\n\n//# sourceURL=webpack:///./src/img/common/nav_close_front.png?");

/***/ }),

/***/ "./src/img/common/nav_open_back.png":
/*!******************************************!*\
  !*** ./src/img/common/nav_open_back.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/nav_open_back.png\";\n\n//# sourceURL=webpack:///./src/img/common/nav_open_back.png?");

/***/ }),

/***/ "./src/img/common/nav_open_front.png":
/*!*******************************************!*\
  !*** ./src/img/common/nav_open_front.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/nav_open_front.png\";\n\n//# sourceURL=webpack:///./src/img/common/nav_open_front.png?");

/***/ }),

/***/ "./src/img/common/to_top.png":
/*!***********************************!*\
  !*** ./src/img/common/to_top.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/to_top.png\";\n\n//# sourceURL=webpack:///./src/img/common/to_top.png?");

/***/ }),

/***/ "./src/img/top sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/img/top sync ^\.\/.*$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./bridge1\": \"./src/img/top/bridge1.png\",\n\t\"./bridge1.png\": \"./src/img/top/bridge1.png\",\n\t\"./bridge2\": \"./src/img/top/bridge2.png\",\n\t\"./bridge2.png\": \"./src/img/top/bridge2.png\",\n\t\"./frame_blue\": \"./src/img/top/frame_blue.png\",\n\t\"./frame_blue.png\": \"./src/img/top/frame_blue.png\",\n\t\"./frame_pink\": \"./src/img/top/frame_pink.png\",\n\t\"./frame_pink.png\": \"./src/img/top/frame_pink.png\",\n\t\"./frame_red\": \"./src/img/top/frame_red.png\",\n\t\"./frame_red.png\": \"./src/img/top/frame_red.png\",\n\t\"./h2_title1.svg\": \"./src/img/top/h2_title1.svg\",\n\t\"./h2_title2.svg\": \"./src/img/top/h2_title2.svg\",\n\t\"./h2_title3.svg\": \"./src/img/top/h2_title3.svg\",\n\t\"./hero1.jpg\": \"./src/img/top/hero1.jpg\",\n\t\"./hero2.jpg\": \"./src/img/top/hero2.jpg\",\n\t\"./step1\": \"./src/img/top/step1.png\",\n\t\"./step1.png\": \"./src/img/top/step1.png\",\n\t\"./step2\": \"./src/img/top/step2.png\",\n\t\"./step2.png\": \"./src/img/top/step2.png\",\n\t\"./step3\": \"./src/img/top/step3.png\",\n\t\"./step3.png\": \"./src/img/top/step3.png\",\n\t\"./thumb1.jpg\": \"./src/img/top/thumb1.jpg\",\n\t\"./thumb2.jpg\": \"./src/img/top/thumb2.jpg\",\n\t\"./thumb3.jpg\": \"./src/img/top/thumb3.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img/top sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/img/top_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/img/top/bridge1.png":
/*!*********************************!*\
  !*** ./src/img/top/bridge1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/bridge1.png\";\n\n//# sourceURL=webpack:///./src/img/top/bridge1.png?");

/***/ }),

/***/ "./src/img/top/bridge2.png":
/*!*********************************!*\
  !*** ./src/img/top/bridge2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/bridge2.png\";\n\n//# sourceURL=webpack:///./src/img/top/bridge2.png?");

/***/ }),

/***/ "./src/img/top/frame_blue.png":
/*!************************************!*\
  !*** ./src/img/top/frame_blue.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/frame_blue.png\";\n\n//# sourceURL=webpack:///./src/img/top/frame_blue.png?");

/***/ }),

/***/ "./src/img/top/frame_pink.png":
/*!************************************!*\
  !*** ./src/img/top/frame_pink.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/frame_pink.png\";\n\n//# sourceURL=webpack:///./src/img/top/frame_pink.png?");

/***/ }),

/***/ "./src/img/top/frame_red.png":
/*!***********************************!*\
  !*** ./src/img/top/frame_red.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/frame_red.png\";\n\n//# sourceURL=webpack:///./src/img/top/frame_red.png?");

/***/ }),

/***/ "./src/img/top/h2_title1.svg":
/*!***********************************!*\
  !*** ./src/img/top/h2_title1.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/h2_title1.svg\";\n\n//# sourceURL=webpack:///./src/img/top/h2_title1.svg?");

/***/ }),

/***/ "./src/img/top/h2_title2.svg":
/*!***********************************!*\
  !*** ./src/img/top/h2_title2.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/h2_title2.svg\";\n\n//# sourceURL=webpack:///./src/img/top/h2_title2.svg?");

/***/ }),

/***/ "./src/img/top/h2_title3.svg":
/*!***********************************!*\
  !*** ./src/img/top/h2_title3.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/h2_title3.svg\";\n\n//# sourceURL=webpack:///./src/img/top/h2_title3.svg?");

/***/ }),

/***/ "./src/img/top/hero1.jpg":
/*!*******************************!*\
  !*** ./src/img/top/hero1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/hero1.jpg\";\n\n//# sourceURL=webpack:///./src/img/top/hero1.jpg?");

/***/ }),

/***/ "./src/img/top/hero2.jpg":
/*!*******************************!*\
  !*** ./src/img/top/hero2.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/hero2.jpg\";\n\n//# sourceURL=webpack:///./src/img/top/hero2.jpg?");

/***/ }),

/***/ "./src/img/top/step1.png":
/*!*******************************!*\
  !*** ./src/img/top/step1.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/step1.png\";\n\n//# sourceURL=webpack:///./src/img/top/step1.png?");

/***/ }),

/***/ "./src/img/top/step2.png":
/*!*******************************!*\
  !*** ./src/img/top/step2.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/step2.png\";\n\n//# sourceURL=webpack:///./src/img/top/step2.png?");

/***/ }),

/***/ "./src/img/top/step3.png":
/*!*******************************!*\
  !*** ./src/img/top/step3.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/step3.png\";\n\n//# sourceURL=webpack:///./src/img/top/step3.png?");

/***/ }),

/***/ "./src/img/top/thumb1.jpg":
/*!********************************!*\
  !*** ./src/img/top/thumb1.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/thumb1.jpg\";\n\n//# sourceURL=webpack:///./src/img/top/thumb1.jpg?");

/***/ }),

/***/ "./src/img/top/thumb2.jpg":
/*!********************************!*\
  !*** ./src/img/top/thumb2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/thumb2.jpg\";\n\n//# sourceURL=webpack:///./src/img/top/thumb2.jpg?");

/***/ }),

/***/ "./src/img/top/thumb3.jpg":
/*!********************************!*\
  !*** ./src/img/top/thumb3.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/thumb3.jpg\";\n\n//# sourceURL=webpack:///./src/img/top/thumb3.jpg?");

/***/ }),

/***/ "./src/js/app.tsx":
/*!************************!*\
  !*** ./src/js/app.tsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _page_Top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/Top */ \"./src/js/page/Top.tsx\");\n/* harmony import */ var _page_toshi_toshi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/toshi/toshi */ \"./src/js/page/toshi/toshi.tsx\");\n/* harmony import */ var _page_uma_uma__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/uma/uma */ \"./src/js/page/uma/uma.tsx\");\n/* harmony import */ var _page_spot_spot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/spot/spot */ \"./src/js/page/spot/spot.tsx\");\n/* React\r\n-----------------------------*/\r\n\r\n\r\n\r\n/* AOS\r\n---------------------------- */\r\n\r\naos__WEBPACK_IMPORTED_MODULE_3___default.a.init();\r\n/* SCSS\r\n---------------------------- */\r\n\r\n/* Component\r\n---------------------------- */\r\n\r\n\r\n\r\n\r\nreact_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"](react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null,\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], { exact: true, path: '/', component: _page_Top__WEBPACK_IMPORTED_MODULE_5__[\"default\"] }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], { path: '/toshi', component: _page_toshi_toshi__WEBPACK_IMPORTED_MODULE_6__[\"default\"] }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], { path: '/uma', component: _page_uma_uma__WEBPACK_IMPORTED_MODULE_7__[\"default\"] }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], { path: '/spot', component: _page_spot_spot__WEBPACK_IMPORTED_MODULE_8__[\"default\"] })), document.querySelector('#root'));\r\n\n\n//# sourceURL=webpack:///./src/js/app.tsx?");

/***/ }),

/***/ "./src/js/component/atMenu.tsx":
/*!*************************************!*\
  !*** ./src/js/component/atMenu.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _component_logo1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/logo1 */ \"./src/js/component/logo1.tsx\");\n/* harmony import */ var _img_common_nav_close_front_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/common/nav_close_front.png */ \"./src/img/common/nav_close_front.png\");\n/* harmony import */ var _img_common_nav_close_front_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_common_nav_close_front_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_common_nav_close_back_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/common/nav_close_back.png */ \"./src/img/common/nav_close_back.png\");\n/* harmony import */ var _img_common_nav_close_back_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_common_nav_close_back_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_common_nav_open_front_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/common/nav_open_front.png */ \"./src/img/common/nav_open_front.png\");\n/* harmony import */ var _img_common_nav_open_front_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_common_nav_open_front_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _img_common_nav_open_back_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/common/nav_open_back.png */ \"./src/img/common/nav_open_back.png\");\n/* harmony import */ var _img_common_nav_open_back_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_common_nav_open_back_png__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n/* Content\r\n---------------------------- */\r\n\r\n/* Image\r\n---------------------------- */\r\n\r\n\r\n\r\n\r\nvar AtMenu = function (_a) {\r\n    var page = _a.page, list = _a.list, menuLogo = _a.menuLogo, id = _a.id;\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false), open = _b[0], setOpen = _b[1];\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"nav\", { className: \"atMenu \" + (open ? \"active\" : \"\") + \" \" + page },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atMenu__trigger\", id: \"Menu\", onClick: function () { return setOpen(!open); } },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"close\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"atMenu__front\", src: _img_common_nav_close_front_png__WEBPACK_IMPORTED_MODULE_3___default.a, alt: \"\\u4E00\\u89A7\" }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"atMenu__back\", src: _img_common_nav_close_back_png__WEBPACK_IMPORTED_MODULE_4___default.a, alt: \"\" })),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"open\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"atMenu__front\", src: _img_common_nav_open_front_png__WEBPACK_IMPORTED_MODULE_5___default.a, alt: \"\\u9589\\u3058\\u308B\" }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"atMenu__back\", src: _img_common_nav_open_back_png__WEBPACK_IMPORTED_MODULE_6___default.a, alt: \"\" }))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atMenu__cover\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atMenu__cover2\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"atMenu__category\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { src: __webpack_require__(\"./src/img/top sync recursive ^\\\\.\\\\/.*$\")(\"./\" + menuLogo), alt: \"\" })),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", { className: \"atMenu__list\" }, list.map(function (data, index) {\r\n                        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", { key: index, className: \"atMenu__item\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: page + data.index, className: \"atMenu__link \" + (index === id ? \"active\" : \"\"), onClick: function () { return setOpen(!open); } }, data.title)));\r\n                    })),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atMenu__logo\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: \"/\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_logo1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))))))));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AtMenu);\r\n\n\n//# sourceURL=webpack:///./src/js/component/atMenu.tsx?");

/***/ }),

/***/ "./src/js/component/audio.tsx":
/*!************************************!*\
  !*** ./src/js/component/audio.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nvar number = Math.floor(Math.random() * 5);\r\nvar Audio = function () {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false), paly = _a[0], setPlay = _a[1];\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", { className: \"valueBtn \" + (paly ? \"\" : \"off\"), onClick: function () { return setPlay(!paly); } },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"valueBtn__radius\" })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_player__WEBPACK_IMPORTED_MODULE_1___default.a, { url: __webpack_require__(\"./src/music sync recursive ^\\\\.\\\\/.*\\\\.mp3$\")(\"./\" + number + \".mp3\"), playing: paly, volume: 0.1, className: 'topAudio', loop: true })));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Audio);\r\n\n\n//# sourceURL=webpack:///./src/js/component/audio.tsx?");

/***/ }),

/***/ "./src/js/component/fooger.tsx":
/*!*************************************!*\
  !*** ./src/js/component/fooger.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _logo1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo1 */ \"./src/js/component/logo1.tsx\");\n/* harmony import */ var _img_common_to_top_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/common/to_top.png */ \"./src/img/common/to_top.png\");\n/* harmony import */ var _img_common_to_top_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_common_to_top_png__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n/* Component\r\n---------------------------- */\r\n\r\n/* Image\r\n---------------------------- */\r\n\r\nvar Footer = function () {\r\n    /* Footerまでスクロールすると画像が飛び出る\r\n    --------------------------------------------- */\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false), viewToTop = _a[0], setViewToTop = _a[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        window.onscroll = function () {\r\n            var check = window.pageYOffset;\r\n            var docHeight = document.body.clientHeight;\r\n            var dispHeight = window.innerHeight;\r\n            var distance = 0;\r\n            if (check >= docHeight - dispHeight + distance) {\r\n                setViewToTop(true);\r\n            }\r\n            else {\r\n                setViewToTop(false);\r\n            }\r\n        };\r\n    }, []);\r\n    /* トップへ戻るを押したときの処理\r\n    --------------------------------------------- */\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false), isClick = _b[0], setisClick = _b[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var pagetopBtn = document.querySelector('.toTop');\r\n        pagetopBtn.addEventListener('click', function () {\r\n            /* アニメーションを開始しつつimgタグの\"click\"クラスを付与 */\r\n            setisClick(true);\r\n            setTimeout(function () {\r\n                window.scrollTo({\r\n                    top: 0,\r\n                    behavior: \"smooth\"\r\n                });\r\n            }, 600);\r\n            /* アニメーションが終わった後にimgタグの\"click\"クラスを外す */\r\n            setTimeout(function () {\r\n                setisClick(false);\r\n            }, 1000);\r\n        });\r\n    }, []);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"footer\", { className: \"footer\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"footer__inner\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"footer__logo\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: \"/\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_logo1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"footer__credit\" },\r\n                \"BGM\\u63D0\\u4F9B\\uFF1A\\u7518\\u8336\\u306E\\u97F3\\u697D\\u5DE5\\u623F\",\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", { className: \"br\" }),\r\n                \" \",\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"a\", { href: \"https://amachamusic.chagasi.com/\", target: \"_blank\" }, \"https://amachamusic.chagasi.com/\"),\r\n                \" \"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"toTop \" + (viewToTop ? \"active\" : \"\") },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"\" + (isClick ? \"click\" : \"\"), src: _img_common_to_top_png__WEBPACK_IMPORTED_MODULE_3___default.a }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null,\r\n                    \"\\u4E0A\\u30CB\",\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", { className: \"br\" }),\r\n                    \"\\u623B\\u30EB\",\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", { className: \"br\" }),\r\n                    \"\\u602A\\uFF1F\")))));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\r\n\n\n//# sourceURL=webpack:///./src/js/component/fooger.tsx?");

/***/ }),

/***/ "./src/js/component/iconToNext.tsx":
/*!*****************************************!*\
  !*** ./src/js/component/iconToNext.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_common_icon_topage_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/common/icon_topage.svg */ \"./src/img/common/icon_topage.svg\");\n/* harmony import */ var _img_common_icon_topage_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_common_icon_topage_svg__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n/* Component\r\n---------------------------- */\r\nvar IconToNext = function () {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"iconToNext\", src: _img_common_icon_topage_svg__WEBPACK_IMPORTED_MODULE_1___default.a, alt: \"\" })));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconToNext);\r\n\n\n//# sourceURL=webpack:///./src/js/component/iconToNext.tsx?");

/***/ }),

/***/ "./src/js/component/logo1.tsx":
/*!************************************!*\
  !*** ./src/js/component/logo1.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_common_logo1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/common/logo1.png */ \"./src/img/common/logo1.png\");\n/* harmony import */ var _img_common_logo1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_common_logo1_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_common_logo1_light_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/common/logo1-light.png */ \"./src/img/common/logo1-light.png\");\n/* harmony import */ var _img_common_logo1_light_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_common_logo1_light_png__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n/* Component\r\n---------------------------- */\r\nvar Logo1 = function () {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"logo1\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"logo1__front\", src: _img_common_logo1_png__WEBPACK_IMPORTED_MODULE_1___default.a, alt: \"\" }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"logo1__back\", src: _img_common_logo1_light_png__WEBPACK_IMPORTED_MODULE_2___default.a, alt: \"\" }))));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo1);\r\n\n\n//# sourceURL=webpack:///./src/js/component/logo1.tsx?");

/***/ }),

/***/ "./src/js/module/changeTop.ts":
/*!************************************!*\
  !*** ./src/js/module/changeTop.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ChangeTop = function () {\r\n    window.scrollTo(0, 0);\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangeTop);\r\n\n\n//# sourceURL=webpack:///./src/js/module/changeTop.ts?");

/***/ }),

/***/ "./src/js/module/swiperConfig.tsx":
/*!****************************************!*\
  !*** ./src/js/module/swiperConfig.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\r\nvar swiperConfig = function (setPage) {\r\n    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.swiper-container', {\r\n        slidesPerGroup: 1,\r\n        speed: 500,\r\n        autoHeight: true\r\n    });\r\n    /* スワイプした時に現在のページを書き換える */\r\n    swiper.on('slideChange', function () {\r\n        setPage(swiper.activeIndex + 1);\r\n    });\r\n    /* 初期表示設定 何故か一度0から移動しないと初期スライドを0番目に設定できない */\r\n    swiper.slideTo(1);\r\n    swiper.slideTo(0);\r\n    setPage(1);\r\n    /* 送りボタンを押したときの挙動 */\r\n    var prevBtn = document.querySelector('.-prev');\r\n    var nextBtn = document.querySelector('.-next');\r\n    prevBtn.addEventListener('click', function (e) { swiper.slidePrev(); });\r\n    nextBtn.addEventListener('click', function (e) { swiper.slideNext(); });\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (swiperConfig);\r\n\n\n//# sourceURL=webpack:///./src/js/module/swiperConfig.tsx?");

/***/ }),

/***/ "./src/js/page/Top.tsx":
/*!*****************************!*\
  !*** ./src/js/page/Top.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-document-meta */ \"./node_modules/react-document-meta/dist/index.js\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_document_meta__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_top_topCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/top/topCategory */ \"./src/api/top/topCategory.ts\");\n/* harmony import */ var _img_top_step1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/top/step1.png */ \"./src/img/top/step1.png\");\n/* harmony import */ var _img_top_step1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_top_step1_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_top_step2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/top/step2.png */ \"./src/img/top/step2.png\");\n/* harmony import */ var _img_top_step2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_top_step2_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _img_top_step3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/top/step3.png */ \"./src/img/top/step3.png\");\n/* harmony import */ var _img_top_step3_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_top_step3_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _img_top_bridge2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/top/bridge2.png */ \"./src/img/top/bridge2.png\");\n/* harmony import */ var _img_top_bridge2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_top_bridge2_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _component_logo1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/logo1 */ \"./src/js/component/logo1.tsx\");\n/* harmony import */ var _component_iconToNext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/iconToNext */ \"./src/js/component/iconToNext.tsx\");\n/* harmony import */ var _component_audio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/audio */ \"./src/js/component/audio.tsx\");\n/* harmony import */ var _component_fooger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/fooger */ \"./src/js/component/fooger.tsx\");\n/* harmony import */ var _module_changeTop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../module/changeTop */ \"./src/js/module/changeTop.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\n\r\n\r\n\r\n/* Data\r\n---------------------------- */\r\n\r\n/* Image\r\n---------------------------- */\r\n\r\n\r\n\r\n\r\n/* Component\r\n---------------------------- */\r\n\r\n\r\n\r\n\r\n/* Module\r\n---------------------------- */\r\n\r\nvar Top = function () {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false), isSP = _a[0], setIsSP = _a[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        window.addEventListener('resize', function () {\r\n            var width = window.innerWidth;\r\n            width < 768 ? setIsSP(true) : setIsSP(false);\r\n        });\r\n    });\r\n    /* 手のアニメーション\r\n    ------------------------------------------ */\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        /* 要素取得 */\r\n        var steps = document.querySelectorAll('.hero__step > .step');\r\n        var stepBox = document.querySelector('.hero__step');\r\n        var count = 0;\r\n        /* 1秒毎に手を表示 */\r\n        var interval = setInterval(function () {\r\n            if (count <= 2) {\r\n                stepBox.classList.remove('animate__fadeOutDown');\r\n                steps[count].classList.add('active');\r\n                count += 1;\r\n            }\r\n            else if (count === 3) {\r\n                stepBox.classList.add('animate__fadeOutDown');\r\n                for (var i = 0; i < count; i++) {\r\n                    steps[i].classList.remove('active');\r\n                }\r\n                count = 0;\r\n            }\r\n        }, 1000);\r\n        return function () { return clearInterval(interval); };\r\n    }, []);\r\n    /* ページを読み込み時にトップへ\r\n    ------------------------- */\r\n    Object(_module_changeTop__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\r\n    /* meta情報\r\n    ------------------------- */\r\n    var meta = {\r\n        title: '学校のうわさ',\r\n        meta: {\r\n            property: {\r\n                'og:title': '学校のうわさ',\r\n                'og:site_name': '学校のうわさ',\r\n                'twitter:title': '学校のうわさ',\r\n            }\r\n        }\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_document_meta__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, meta),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"header\", { className: \"hero\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", { className: \"hero__heading animate__animated animate__rubberBand\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_logo1__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"hero__step\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { id: \"step1\", className: \"step\", src: _img_top_step1_png__WEBPACK_IMPORTED_MODULE_4___default.a, alt: \"\" }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { id: \"step2\", className: \"step\", src: _img_top_step2_png__WEBPACK_IMPORTED_MODULE_5___default.a, alt: \"\" }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { id: \"step3\", className: \"step\", src: _img_top_step3_png__WEBPACK_IMPORTED_MODULE_6___default.a, alt: \"\" }))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"main\", null, \r\n            /* メインのテンプレート\r\n            \"api/top/topCategory.ts\" のデータを基にそれぞれのセクションを生成している\r\n            --------------------------------------------- */\r\n            _api_top_topCategory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (data, index) {\r\n                var count = index + 1;\r\n                return (count % 2 == 0 ?\r\n                    /* 右側テンプレート */\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", { key: index, className: \"section\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"section__inner\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: data.link + \"#0\", className: \"topCategoryLink\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row row--spColumnReverse\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col7-lg col12-md\" },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topLead\", \"data-aos\": \"fade-up-right\", \"data-aos-duration\": \"2000\", \"data-aos-once\": \"true\", \"data-aos-anchor-placement\": \"top-bottom\" },\r\n                                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"topLead__title\" },\r\n                                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { src: __webpack_require__(\"./src/img/top sync recursive ^\\\\.\\\\/.*$\")(\"./\" + data.title), alt: data.alt })),\r\n                                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\", dangerouslySetInnerHTML: { __html: data.text } }),\r\n                                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topLead__toPage\" },\r\n                                                \"\\u4E00\\u89A7\\u30F2\\u898B\\u30EB\",\r\n                                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)))),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col5-lg\" },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topThumb\", \"data-aos\": \"flip-right\", \"data-aos-duration\": \"1500\", \"data-aos-once\": \"true\", \"data-aos-anchor-placement\": \"top-center\" },\r\n                                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topThumb__back\" },\r\n                                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { src: __webpack_require__(\"./src/img/top sync recursive ^\\\\.\\\\/.*$\")(\"./\" + data.frame), alt: \"\" })),\r\n                                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topThumb__front topThumb__front--right topThumb__front--\" + data.border },\r\n                                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { src: __webpack_require__(\"./src/img/top sync recursive ^\\\\.\\\\/.*$\")(\"./\" + data.thumb), alt: data.alt })))))),\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topBridge\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"topBridge__left\", src: _img_top_bridge2_png__WEBPACK_IMPORTED_MODULE_7___default.a, alt: \"\" }))))\r\n                    :\r\n                        /* 左側テンプレート */\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", { key: index, className: \"section\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"section__inner\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: data.link + \"#0\", className: \"topCategoryLink\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row row--spColumn\" },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col5-lg col12-md\" },\r\n                                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topThumb\", \"data-aos\": \"flip-left\", \"data-aos-duration\": \"1500\", \"data-aos-once\": \"true\", \"data-aos-anchor-placement\": \"top-center\" },\r\n                                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topThumb__back\" },\r\n                                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { src: __webpack_require__(\"./src/img/top sync recursive ^\\\\.\\\\/.*$\")(\"./\" + data.frame), alt: \"\" })),\r\n                                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topThumb__front topThumb__front--\" + data.border },\r\n                                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { src: __webpack_require__(\"./src/img/top sync recursive ^\\\\.\\\\/.*$\")(\"./\" + data.thumb), alt: data.alt })))),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col7-lg col12-md\" },\r\n                                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topLead\", \"data-aos\": \"fade-up-left\", \"data-aos-duration\": \"2000\", \"data-aos-once\": \"true\", \"data-aos-anchor-placement\": \"top-bottom\" },\r\n                                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"topLead__title\" },\r\n                                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { src: __webpack_require__(\"./src/img/top sync recursive ^\\\\.\\\\/.*$\")(\"./\" + data.title), alt: data.alt })),\r\n                                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\", dangerouslySetInnerHTML: { __html: data.text } }),\r\n                                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topLead__toPage\" },\r\n                                                    \"\\u4E00\\u89A7\\u30F2\\u898B\\u30EB\",\r\n                                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)))))),\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"topBridge\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", { className: \"topBridge__right\", src: \"/img/bridge1.png\", alt: \"\" })))));\r\n            })),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_audio__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_fooger__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null))));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Top);\r\n\n\n//# sourceURL=webpack:///./src/js/page/Top.tsx?");

/***/ }),

/***/ "./src/js/page/spot/0_hachioji.tsx":
/*!*****************************************!*\
  !*** ./src/js/page/spot/0_hachioji.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_iconToNext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/iconToNext */ \"./src/js/component/iconToNext.tsx\");\n/* harmony import */ var _module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/swiperConfig */ \"./src/js/module/swiperConfig.tsx\");\n\r\n\r\n\r\n/* Swiper設定\r\n---------------------------- */\r\n\r\nvar Hachioji = react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"](function (_a) {\r\n    var anime = _a.anime;\r\n    /* Swiperの設定\r\n    ---------------------------- */\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1), page = _b[0], setPage = _b[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        Object(_module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(setPage);\r\n    }, []);\r\n    /* Page数の設定\r\n    ---------------------------- */\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(), pages = _c[0], setPages = _c[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var count = document.querySelectorAll('.swiper-slide').length;\r\n        setPages(count);\r\n    }, []);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"animate__animated \" + (anime ? \"animate__fadeIn\" : \"\") },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-container\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { id: \"SW\", className: \"swiper-wrapper\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons-inner\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -prev\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-current\" },\r\n                        page,\r\n                        \"/\",\r\n                        pages,\r\n                        \" \",\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, \"Page\")),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -next\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)))))));\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hachioji);\r\n\n\n//# sourceURL=webpack:///./src/js/page/spot/0_hachioji.tsx?");

/***/ }),

/***/ "./src/js/page/spot/spot.tsx":
/*!***********************************!*\
  !*** ./src/js/page/spot/spot.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-document-meta */ \"./node_modules/react-document-meta/dist/index.js\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_document_meta__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_atMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/atMenu */ \"./src/js/component/atMenu.tsx\");\n/* harmony import */ var _component_fooger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/fooger */ \"./src/js/component/fooger.tsx\");\n/* harmony import */ var _0_hachioji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./0_hachioji */ \"./src/js/page/spot/0_hachioji.tsx\");\n/* harmony import */ var _module_changeTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/changeTop */ \"./src/js/module/changeTop.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\n\r\n\r\n\r\n/* Component\r\n---------------------------- */\r\n\r\n\r\n/* Page\r\n---------------------------- */\r\n\r\n/* Module\r\n---------------------------- */\r\n\r\nvar Spot = function () {\r\n    /* ページのID生成\r\n    ---------------------------- */\r\n    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useLocation\"])();\r\n    var param = location.hash;\r\n    var string = param.replace(\"#\", \"\");\r\n    var id = Number(string);\r\n    /* ページを切り替えるたびにアニメーションを発動\r\n    ------------------------- */\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false), anime = _a[0], setAnime = _a[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        setAnime(true);\r\n        var interval = setTimeout(function () {\r\n            setAnime(false);\r\n        }, 900);\r\n    }, [param]);\r\n    /* ページを読み込み時にトップへ\r\n    ------------------------- */\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        Object(_module_changeTop__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n    }, [param]);\r\n    /* メニューリスト\r\n    ------------------------- */\r\n    var MenuData = [\r\n        {\r\n            index: \"#0\",\r\n            title: \"八王子城\"\r\n        }\r\n    ];\r\n    /* meta情報\r\n    ------------------------- */\r\n    var meta = {\r\n        title: '心霊スポット｜学校のうわさ',\r\n        description: 'TEST',\r\n        meta: {\r\n            property: {\r\n                'og:title': '心霊スポット｜学校のうわさ',\r\n                'og:site_name': '心霊スポット｜学校のうわさ',\r\n                'twitter:title': '心霊スポット｜学校のうわさ',\r\n            }\r\n        }\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_document_meta__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, meta),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atCover atCover--spot\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_atMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { page: \"spot\", menuLogo: \"h2_title3.svg\", list: MenuData, id: id }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"header\", { className: \"atHero atHero--spot animate__animated \" + (anime ? \"animate__flipInX\" : \"\") },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atHero__inner\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", { className: \"atHero__h1\" }, MenuData[id].title))),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"main\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", { className: \"section\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"section__inner\" }, id === 0 ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_0_hachioji__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { anime: anime }) : \"\")))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_fooger__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spot);\r\n\n\n//# sourceURL=webpack:///./src/js/page/spot/spot.tsx?");

/***/ }),

/***/ "./src/js/page/toshi/0_kuchisake.tsx":
/*!*******************************************!*\
  !*** ./src/js/page/toshi/0_kuchisake.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_iconToNext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/iconToNext */ \"./src/js/component/iconToNext.tsx\");\n/* harmony import */ var _module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/swiperConfig */ \"./src/js/module/swiperConfig.tsx\");\n\r\n\r\n\r\n\r\nvar Kuchisake = react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"](function (_a) {\r\n    var anime = _a.anime;\r\n    /* Swiperの設定\r\n    ---------------------------- */\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1), page = _b[0], setPage = _b[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        Object(_module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(setPage);\r\n    }, []);\r\n    /* Page数の設定\r\n      ---------------------------- */\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(), pages = _c[0], setPages = _c[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var count = document.querySelectorAll('.swiper-slide').length;\r\n        setPages(count);\r\n    }, []);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"animate__animated \" + (anime ? \"animate__fadeIn\" : \"\") },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-container\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { id: \"SW\", className: \"swiper-wrapper\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: \"-font20-lg -font14-md\" }, \"\\u4E8B\\u4EF6\\u30D5\\u30A1\\u30A4\\u30EB 1\"),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u53E3\\u304C\\u88C2\\u3051\\u305F\\u5C0F\\u5B66\\u751F\\u306E\\u6B7B\\u4F53\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" },\r\n                                        \"1984\\u5E746\\u670822\\u65E5\\u3001\\u4F4F\\u5B85\\u8857\\u306E\\u8DEF\\u5730\\u3067\\u5C0F\\u5B665\\u5E74\\u751F\\u306E\\u7537\\u5150\\u306E\\u907A\\u4F53\\u304C\\u767A\\u898B\\u3055\\u308C\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u6B7B\\u56E0\\u306F\\u51FA\\u8840\\u591A\\u91CF\\u306B\\u3088\\u308B\\u30B7\\u30E7\\u30C3\\u30AF\\u6B7B\\u3067\\u3001\\u907A\\u4F53\\u306E\\u69D8\\u5B50\\u306F\\u3001\\u7121\\u6B8B\\u306B\\u3082\\u53E3\\u304C\\u5203\\u7269\\u306B\\u3088\\u3063\\u3066\\u8033\\u5143\\u307E\\u3067\\u88C2\\u304B\\u308C\\u3066\\u3044\\u305F\\u3068\\u3044\\u3046\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u307E\\u305F\\u5947\\u5999\\u306A\\u3053\\u3068\\u306B\\u3001\\u6B7B\\u4EA1\\u63A8\\u5B9A\\u6642\\u523B\\u306F\\u4E0B\\u6821\\u6642\\u9593\\u306E16\\u6642\\u524D\\u5F8C\\u3068\\u4EBA\\u6C17\\u306E\\u591A\\u3044\\u6642\\u9593\\u5E2F\\u3067\\u3042\\u3063\\u305F\\u306B\\u3082\\u95A2\\u308F\\u3089\\u305A\\u76EE\\u6483\\u8005\\u306F\\uFF10\\u3060\\u3063\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305D\\u308C\\u3069\\u3053\\u308D\\u304B\\u73FE\\u5834\\u304B\\u3089\\u306F\\u72AF\\u4EBA\\u306E\\u75D5\\u8DE1\\u304C\\u4F55\\u3082\\u767A\\u898B\\u3055\\u308C\\u306A\\u304B\\u3063\\u305F\\u306E\\u3060\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305F\\u3060\\u4E00\\u3064\\u3001\\u8840\\u306B\\u67D3\\u307E\\u3063\\u305F\\u5927\\u3070\\u3055\\u307F\\u3092\\u9664\\u3044\\u3066\\u2026\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u2026\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u540C\\u5E747\\u67086\\u65E5\\u3001\\u307E\\u305F\\u540C\\u69D8\\u306E\\u4E8B\\u4EF6\\u304C\\u8D77\\u304D\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u4ECA\\u5EA6\\u306E\\u88AB\\u5BB3\\u8005\\u306F\\u5C0F\\u5B666\\u5E74\\u751F\\u306E\\u5973\\u5150\\u3067\\u3001\\u6B7B\\u4EA1\\u6642\\u523B\\u3082\\u540C\\u305816\\u6642\\u524D\\u5F8C\\u3067\\u3042\\u308A\\u3001\\u6B7B\\u56E0\\u3082\\u540C\\u3058\\u304F\\u53E3\\u3092\\u5F15\\u304D\\u88C2\\u304B\\u308C\\u305F\\u3053\\u3068\\u306B\\u3088\\u308B\\u51FA\\u8840\\u6B7B\\u3060\\u3063\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3053\\u306E\\u77ED\\u671F\\u9593\\u3067\\u306E\\u60E8\\u3044\\u6BBA\\u4EBA\\u4E8B\\u4EF6\\u306F\\u793E\\u4F1A\\u7684\\u306B\\u5927\\u304D\\u306A\\u53CD\\u97FF\\u3092\\u547C\\u3073\\u3001\\u5404\\u5730\\u306E\\u30E1\\u30C7\\u30A3\\u30A2\\u304B\\u3089\\u306F\\u3001\\u4E00\\u9023\\u306E\\u72AF\\u884C\\u306F\\u30B7\\u30EA\\u30A2\\u30EB\\u30AD\\u30E9\\u30FC\\u306E\\u3082\\u306E\\u3068\\u3057\\u3066\\u5927\\u3005\\u7684\\u306B\\u5831\\u9053\\u3055\\u308C\\u3001\\u5168\\u56FD\\u306E\\u5C0F\\u4E2D\\u5B66\\u6821\\u3067\\u306F\\u96C6\\u56E3\\u4E0B\\u6821\\u304C\\u5B9F\\u65BD\\u3055\\u308C\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3057\\u304B\\u3057\\u305D\\u306E\\u53CD\\u97FF\\u3068\\u306F\\u88CF\\u8179\\u306B\\u3001\\u8B66\\u5BDF\\u306E\\u635C\\u67FB\\u306F\\u4E00\\u5411\\u306B\\u9032\\u5C55\\u3057\\u3066\\u3044\\u306A\\u3044\\u69D8\\u5B50\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: \"-font20-lg -font14-md\" }, \"\\u4E8B\\u4EF6\\u30D5\\u30A1\\u30A4\\u30EB 2\"),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u8003\\u5BDF\\u30FB\\u691C\\u8A3C\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" },\r\n                                        \"\\u79C1\\u306F\\u305D\\u308C\\u305E\\u308C\\u306E\\u5C0F\\u5B66\\u751F\\u304C\\u6BBA\\u5BB3\\u3055\\u308C\\u305F\\u73FE\\u5834\\u306B\\u3001\\u6BBA\\u5BB3\\u6642\\u523B\\u3068\\u540C\\u3058\\u6642\\u9593\\u306B\\u884C\\u3063\\u3066\\u307F\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3069\\u3061\\u3089\\u3082\\u9591\\u9759\\u306A\\u4F4F\\u5B85\\u5730\\u3060\\u3063\\u305F\\u304C\\u3001\\u5915\\u65B9\\u306E\\u6642\\u9593\\u306B\\u306F\\u8CB7\\u3044\\u7269\\u5E30\\u308A\\u306E\\u4E3B\\u5A66\\u3084\\u3001\\u6687\\u3092\\u6301\\u3066\\u4F59\\u3057\\u305F\\u5927\\u5B66\\u751F\\u306A\\u3069\\u304C\\u6B69\\u3044\\u3066\\u304A\\u308A\\u3001\\u3068\\u3066\\u3082\\u6BBA\\u4EBA\\u4E8B\\u4EF6\\u304C\\u8D77\\u304D\\u308B\\u3088\\u3046\\u306A\\u96F0\\u56F2\\u6C17\\u3067\\u306F\\u306A\\u3044\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u4E0D\\u8B39\\u614E\\u3067\\u306F\\u3042\\u308B\\u304C\\u3001\\u3082\\u3057\\u79C1\\u304C\\u72AF\\u884C\\u3092\\u884C\\u3046\\u3068\\u3057\\u305F\\u3089\\u3001\\u9593\\u9055\\u3044\\u306A\\u304F\\u3053\\u306E\\u5834\\u6240\\u3001\\u3053\\u306E\\u6642\\u9593\\u3092\\u9078\\u3093\\u3060\\u308A\\u306F\\u3057\\u306A\\u3044\\u3060\\u308D\\u3046\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305D\\u308C\\u306B\\u3082\\u3046\\u4E00\\u3064\\u4E0D\\u53EF\\u89E3\\u306A\\u3053\\u3068\\u304C\\u3042\\u308B\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u76F8\\u624B\\u304C\\u5C0F\\u5B66\\u751F\\u3068\\u306F\\u3044\\u3048\\u3001\\u306F\\u3055\\u307F\\u3067\\u4EBA\\u306E\\u53E3\\u3092\\u5207\\u308A\\u88C2\\u304F\\u306E\\u306F\\u5BB9\\u6613\\u306A\\u3053\\u3068\\u3067\\u306F\\u306A\\u3044\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u5207\\u308A\\u88C2\\u304B\\u308C\\u305F\\u672C\\u4EBA\\u306F\\u5947\\u58F0\\u3092\\u4E0A\\u3052\\u62B5\\u6297\\u3059\\u308B\\u3060\\u308D\\u3046\\u3057\\u3001\\u4F55\\u3088\\u308A\\u6642\\u9593\\u304C\\u639B\\u304B\\u308B\\u3060\\u308D\\u3046\\u2026\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3044\\u3063\\u305F\\u3044\\u3053\\u306E\\u72B6\\u6CC1\\u306E\\u4E2D\\u3001\\u3069\\u3046\\u3084\\u3063\\u3066\\u3042\\u3093\\u306A\\u60E8\\u3044\\u6BBA\\u4EBA\\u3092\\u4EBA\\u77E5\\u308C\\u305A\\u884C\\u3046\\u3053\\u3068\\u304C\\u51FA\\u6765\\u305F\\u306E\\u3060\\u308D\\u3046\\u304B\\uFF1F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u8ABF\\u3079\\u308C\\u3070\\u8ABF\\u3079\\u308B\\u307B\\u3069\\u3001\\u8B0E\\u304C\\u6DF1\\u307E\\u308B\\u3070\\u304B\\u308A\\u3067\\u3042\\u308B\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u79C1\\u306F\\u4E00\\u901A\\u308A\\u8FBA\\u308A\\u3092\\u8ABF\\u3079\\u305F\\u5F8C\\u3001\\u8DEF\\u5730\\u306B\\u7F6E\\u304B\\u308C\\u305F\\u732E\\u82B1\\u306B\\u624B\\u3092\\u6DFB\\u3048\\u3001\\u5E30\\u5B85\\u3057\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u79C1\\u306F\\u3053\\u306E\\u4E00\\u9023\\u306E\\u4E8B\\u4EF6\\u306F\\u201D\\u4EBA\\u201D\\u306E\\u4ED5\\u696D\\u3067\\u306A\\u304F\\u3001\\u4F55\\u304B\\u3082\\u3063\\u3068\\u4E0D\\u6C17\\u5473\\u3067\\u3001\\u5927\\u304D\\u306A\\u529B\\u306B\\u3088\\u308B\\u8005\\u306E\\u4ED5\\u696D\\u306B\\u611F\\u3058\\u3066\\u306A\\u3089\\u306A\\u3044\\u3002\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: \"-font20-lg -font14-md\" }, \"\\u4E8B\\u4EF6\\u30D5\\u30A1\\u30A4\\u30EB 3\"),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u751F\\u5B58\\u8005\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text mb30-lg mb30-md\" },\r\n                                        \"\\u540C\\u5E748\\u670819\\u65E5\\u3001\\u4E8B\\u4EF6\\u306F\\u5927\\u304D\\u304F\\u52D5\\u3044\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u306A\\u3093\\u3068\\u72AF\\u4EBA\\u306E\\u76EE\\u6483\\u8005\\u304C\\u73FE\\u308C\\u305F\\u306E\\u3060\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3044\\u3084\\u3001\\u6B63\\u78BA\\u306B\\u8A00\\u3046\\u3068\\u201D\\u76EE\\u6483\\u8005\\u201D\\u3067\\u306F\\u306A\\u304F\\u201D\\u751F\\u5B58\\u8005\\u201D\\u3068\\u3044\\u3046\\u8868\\u73FE\\u304C\\u6B63\\u3057\\u3044\\u3060\\u308D\\u3046\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305D\\u3046\\u3001\\u76EE\\u6483\\u8005\\u306F\\u5C0F\\u5B66\\u751F\\uFF15\\u5E74\\u751F\\u306E\\u7537\\u5150\\u3060\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u7CBE\\u795E\\u7684\\u306A\\u30B7\\u30E7\\u30C3\\u30AF\\u304C\\u5927\\u304D\\u304F\\u3001\\u5F7C\\u306F\\u4E8B\\u4EF6\\u5F8C\\u304B\\u3089\\u305A\\u3063\\u3068\\u5165\\u9662\\u3057\\u3066\\u3044\\u308B\\u305D\\u3046\\u306A\\u306E\\u3060\\u304C\\u3001\\u79C1\\u304B\\u3089\\u306E\\u4E8B\\u4EF6\\u5F53\\u6642\\u306B\\u95A2\\u3059\\u308B\\u8CEA\\u554F\\u306B\\u52C7\\u6C17\\u3092\\u3082\\u3063\\u3066\\u7B54\\u3048\\u3066\\u304F\\u308C\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305D\\u306E\\u5185\\u5BB9\\u306F\\u3053\\u3046\\u3060\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u5F7C\\u306F\\u590F\\u4F11\\u307F\\u4E2D\\u306B\\u5C0F\\u5B66\\u6821\\u306EPTA\\u4E3B\\u5C0E\\u306B\\u3088\\u308B\\u7279\\u5225\\u6388\\u696D\\u306B\\u53C2\\u52A0\\u3057\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u6388\\u696D\\u306E\\u5185\\u5BB9\\u306F\\u300C\\u7802\\u7CD6\\u3092\\u6EB6\\u304B\\u3057\\u3066\\u3079\\u3063\\u3053\\u3046\\u98F4\\u3092\\u4F5C\\u308D\\u3046\\u266A\\u300D\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305D\\u306E\\u5F8C\\u3001\\u6388\\u696D\\u3092\\u7D42\\u3048\\u305F\\u5F7C\\u306F\\u4E00\\u7DD2\\u306B\\u53C2\\u52A0\\u3057\\u3066\\u3044\\u305F\\u53CB\\u4EBA\\u3068\\u305D\\u306E\\u307E\\u307E\\u6821\\u5EAD\\u3067\\u904A\\u3073\\u3001\\u5915\\u65B9\\u306B\\u306A\\u3063\\u3066\\u5E30\\u5B85\\u3059\\u308B\\u3053\\u3068\\u3068\\u306A\\u3063\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u9053\\u3059\\u304C\\u3089\\u904A\\u3073\\u75B2\\u308C\\u3066\\u3044\\u305F\\u5F7C\\u306F\\u304A\\u8179\\u304C\\u3059\\u3044\\u305F\\u306E\\u3067\\u3001\\u663C\\u9593\\u306E\\u6388\\u696D\\u3067\\u4F5C\\u3063\\u305F\\u201D\\u3079\\u3063\\u3053\\u3046\\u98F4\\u201D\\u306E\\u4F59\\u308A\\u3092\\u307B\\u304A\\u3070\\u308A\\u306A\\u304C\\u3089\\u6B69\\u3066\\u3044\\u305F\\u305D\\u3046\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3059\\u308B\\u3068\\u590F\\u306E\\u5915\\u65B9\\u3060\\u3068\\u8A00\\u3046\\u306E\\u306B\\u3001\\u7A81\\u7136\\u3042\\u305F\\u308A\\u304C\\u6697\\u304F\\u306A\\u308A\\u3001\\u4E0D\\u601D\\u8B70\\u306B\\u601D\\u3063\\u3066\\u7A7A\\u3092\\u898B\\u4E0A\\u3052\\u3066\\u3044\\u305F\\u3089\\u3001\\u5F8C\\u308D\\u304B\\u3089\\u58F0\\u3092\\u639B\\u3051\\u3089\\u308C\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u632F\\u308A\\u8FD4\\u308B\\u3068\\u305D\\u3053\\u306B\\u306F\\u3001\\u771F\\u3063\\u8D64\\u306A\\u30ED\\u30F3\\u30B0\\u30B3\\u30FC\\u30C8\\u3068\\u5927\\u304D\\u306A\\u30DE\\u30B9\\u30AF\\u3092\\u3057\\u305F\\u3001\\u9AEA\\u306E\\u9577\\u3044\\u5973\\u304C\\u7ACB\\u3063\\u3066\\u304A\\u308A\\u3001\\u7A81\\u7136\\u3053\\u3046\\u5C0B\\u306D\\u3066\\u304D\\u305F\\u2026\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null)),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text -colorRed -font30-lg -font25-md mt20-lg mb20-lg mt20-md mb20-md\" }, \"\\u79C1\\u2026\\u304D\\u308C\\u3044\\uFF1F\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" },\r\n                                        \"\\u5F7C\\u306F\\u305D\\u306E\\u59FF\\u3001\\u8A00\\u52D5\\u306B\\u4E0D\\u6C17\\u5473\\u3055\\u3092\\u611F\\u3058\\u3064\\u3064\\u3082\\u9069\\u5F53\\u306B\\u300C\\u30AD\\u30EC\\u30A4\\u300D\\u3068\\u7B54\\u3048\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3059\\u308B\\u3068\\u5973\\u306E\\u4EBA\\u306F\\u4F55\\u3082\\u8A00\\u308F\\u305A\\u305F\\u3060\\u9854\\u3092\\u4FEF\\u304D\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3086\\u3063\\u304F\\u308A\\u3068\\u4E21\\u624B\\u3092\\u8033\\u306B\\u6DFB\\u3048\\u3066\\u30DE\\u30B9\\u30AF\\u5916\\u3057\\u305F\\u304B\\u3068\\u601D\\u3046\\u3068\\u7A81\\u7136\\u9854\\u3092\\u4E0A\\u3052\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text -colorRed -font30-lg -font25-md mt20-lg mb20-lg mt20-md mb20-md\" }, \"\\u30B3\\u30EC\\u30C7\\u30E2\\u3001\\u30AD\\u30EC\\u30A4\\uFF1F\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" },\r\n                                        \"\\u2026\\u305D\\u306E\\u6642\\u5F7C\\u304C\\u898B\\u305F\\u5973\\u306E\\u9854\\u306F\\u3001\\u8033\\u5143\\u307E\\u3067\\u53E3\\u304C\\u88C2\\u3051\\u3066\\u304A\\u308A\\u3001\\u4EBA\\u306E\\u7269\\u3068\\u306F\\u601D\\u3048\\u306A\\u3044\\u92ED\\u3044\\u6B6F\\u304C\\u3073\\u3063\\u3057\\u308A\\u3068\\u751F\\u3048\\u3066\\u3044\\u305F\\u305D\\u3046\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u8EAB\\u306E\\u5371\\u967A\\u3092\\u5BDF\\u77E5\\u3057\\u305F\\u5F7C\\u306F\\u3001\\u3059\\u3050\\u306B\\u305D\\u306E\\u5834\\u304B\\u3089\\u5168\\u901F\\u529B\\u3067\\u9003\\u3052\\u51FA\\u3057\\u305F\\u306E\\u3060\\u304C\\u3001\\u5973\\u306F\\u305D\\u306E\\u83EF\\u5962\\u306A\\u898B\\u305F\\u76EE\\u3068\\u306F\\u88CF\\u8179\\u306B\\u7269\\u51C4\\u3044\\u901F\\u3055\\u3067\\u8FFD\\u3044\\u304B\\u3051\\u3066\\u304D\\u3066\\u3001\\u5F7C\\u306F\\u7269\\u306E\\u6570\\u79D2\\u8DB3\\u3089\\u305A\\u3067\\u56DE\\u308A\\u8FBC\\u307E\\u308C\\u3066\\u3057\\u307E\\u3063\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305D\\u3057\\u3066\\u6050\\u6016\\u3067\\u56FA\\u307E\\u308B\\u5F7C\\u306B\\u3001\\u5973\\u304C\\u4F55\\u51E6\\u304B\\u3089\\u3068\\u3082\\u306A\\u304F\\u5927\\u3070\\u3055\\u307F\\u3092\\u53D6\\u308A\\u51FA\\u3057\\u3066\\u306B\\u3058\\u308A\\u5BC4\\u3063\\u3066\\u304D\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u5F7C\\u306F\\u4F55\\u3068\\u304B\\u6700\\u5F8C\\u306E\\u529B\\u3092\\u632F\\u308A\\u7D5E\\u308A\\u3001\\u5168\\u8EAB\\u3092\\u596E\\u3044\\u7ACB\\u305F\\u305B\\u3066\\u300C\\u52A9\\u3051\\u3066\\u30FC\\uFF01\\u300D\\u3068\\u5927\\u304D\\u306A\\u58F0\\u3067\\u52A9\\u3051\\u3092\\u547C\\u3093\\u3060\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3059\\u308B\\u3068\\u4E0D\\u601D\\u8B70\\u306A\\u3053\\u3068\\u304C\\u8D77\\u304D\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3055\\u3063\\u304D\\u307E\\u3067\\u3053\\u3061\\u3089\\u306B\\u8FEB\\u3063\\u3066\\u3044\\u305F\\u5973\\u306E\\u8DB3\\u304C\\u6B62\\u307E\\u308A\\u3001\\u4E0B\\u3092\\u5411\\u3044\\u3066\\u4F55\\u304B\\u3092\\u898B\\u3064\\u3081\\u3066\\u3044\\u308B\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305D\\u306E\\u8996\\u7DDA\\u306E\\u5148\\u3092\\u8FFD\\u3046\\u3068\\u3001\\u5730\\u9762\\u306B\\u843D\\u3061\\u3066\\u3044\\u308B\\u98DF\\u3079\\u639B\\u3051\\u306E\\u201C\\u3079\\u3063\\u3053\\u3046\\u98F4\\u201D\\u304C\\u898B\\u3048\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u6050\\u3089\\u304F\\u53EB\\u3093\\u3060\\u969B\\u306B\\u3001\\u53E3\\u306B\\u5165\\u3063\\u3066\\u3044\\u305F\\u3082\\u306E\\u304C\\u98DB\\u3073\\u51FA\\u3057\\u3066\\u3044\\u305F\\u306E\\u3060\\u308D\\u3046\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u5973\\u306F\\u305D\\u306E\\u3079\\u3063\\u3053\\u3046\\u98F4\\u3092\\u3057\\u3070\\u3089\\u304F\\u898B\\u3066\\u3044\\u305F\\u304B\\u3068\\u601D\\u3046\\u3068\\u3001\\u7A81\\u7136\\u5730\\u3079\\u305F\\u306B\\u9019\\u3044\\u3064\\u304F\\u3070\\u308A\\u305D\\u306E\\u98F4\\u3092\\u7121\\u6211\\u5922\\u4E2D\\u3067\\u98DF\\u3079\\u59CB\\u3081\\u305F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u7A81\\u7136\\u306E\\u72B6\\u6CC1\\u306B\\u56F0\\u60D1\\u3057\\u305F\\u5F7C\\u3060\\u3063\\u305F\\u304C\\u3001\\u5973\\u304C\\u3079\\u3063\\u3053\\u3046\\u98F4\\u306B\\u6C17\\u3092\\u53D6\\u3089\\u308C\\u3066\\u3044\\u308B\\u305D\\u306E\\u9699\\u306B\\u3001\\u9019\\u3044\\u3064\\u304F\\u3070\\u308A\\u306A\\u304C\\u3089\\u3082\\u4F55\\u3068\\u304B\\u8FD1\\u304F\\u306E\\u30B3\\u30F3\\u30D3\\u30CB\\u3078\\u99C8\\u3051\\u8FBC\\u307F\\u52A9\\u304B\\u3063\\u305F\\u305D\\u3046\\u3060\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u2026\\u3069\\u3046\\u3060\\u308D\\u3046\\uFF1F \",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3068\\u3066\\u3082\\u306B\\u308F\\u304B\\u306B\\u306F\\u4FE1\\u3058\\u3089\\u308C\\u306A\\u3044\\u8A71\\u3067\\u3001\\u533B\\u8005\\u3084\\u89AA\\u5FA1\\u3055\\u3093\\u306E\\u8A71\\u3067\\u306F\\u3001\\u6050\\u6016\\u306B\\u3088\\u308B\\u30D1\\u30CB\\u30C3\\u30AF\\u3067\\u3042\\u3089\\u306C\\u5984\\u60F3\\u3092\\u62B1\\u3044\\u3066\\u3044\\u308B\\u306E\\u3060\\u308D\\u3046\\u2026\\u3068\\u8A00\\u3063\\u3066\\u3044\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3057\\u304B\\u3057\\u79C1\\u306F\\u305D\\u3046\\u306F\\u601D\\u3048\\u306A\\u304B\\u3063\\u305F\\u3001\\u6839\\u62E0\\u306F\\u7121\\u3044\\u304C\\u3001\\u79C1\\u306B\\u306F\\u308F\\u304B\\u308B\\u306E\\u3060\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u5F7C\\u306F\\u672C\\u5F53\\u306B\\u3042\\u3063\\u305F\\u3053\\u3068\\u3092\\u8A71\\u3057\\u3066\\u3044\\u308B\\u3002\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: \"-font20-lg -font14-md\" }, \"\\u4E8B\\u4EF6\\u30D5\\u30A1\\u30A4\\u30EB 4\"),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u7D42\\u606F\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" },\r\n                                        \"\\u76EE\\u6483\\u8005\\u306E\\u5831\\u544A\\u304B\\u30891\\u5E74\\u307B\\u3069\\u7D4C\\u904E\\u3057\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u8B66\\u5BDF\\u306E\\u635C\\u67FB\\u306F\\u76F8\\u5909\\u308F\\u3089\\u305A\\u9032\\u5C55\\u306F\\u306A\\u3044\\u304C\\u3001\\u7D9A\\u3044\\u3066\\u3044\\u308B\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305D\\u3057\\u3066\\u4F8B\\u306E\\u76EE\\u6483\\u8005\\u4EE5\\u964D\\u3001\\u4E8B\\u4EF6\\u304C\\u30D4\\u30BF\\u30EA\\u3068\\u6B62\\u3093\\u3060\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u72AF\\u4EBA\\u304C\\u8B66\\u6212\\u3057\\u3066\\u3044\\u308B\\u306E\\u304B\\uFF1F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u6216\\u3044\\u306F\\u4F55\\u304B\\u3057\\u3089\\u306E\\u76EE\\u7684\\u304C\\u9054\\u6210\\u3055\\u308C\\u305F\\u306E\\u304B\\uFF1F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u771F\\u76F8\\u306F\\u5B9A\\u304B\\u3067\\u306F\\u306A\\u3044\\u304C\\u3001\\u514E\\u3082\\u89D2\\u3042\\u306E\\u60E8\\u3044\\u6BBA\\u4EBA\\u306E\\u88AB\\u5BB3\\u8005\\u304C\\u51FA\\u3066\\u3044\\u306A\\u3044\\u306E\\u306F\\u5E78\\u3044\\u3067\\u3042\\u308B\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u4E16\\u9593\\u306E\\u4EBA\\u3005\\u306F\\u3001\\u3053\\u306E\\u4E00\\u9023\\u306E\\u4E8B\\u4EF6\\u306B\\u5BFE\\u3057\\u3001\\u5F53\\u521D\\u306F\\u6050\\u6016\\u3084\\u54C0\\u308C\\u307F\\u3092\\u62B1\\u3044\\u3066\\u3044\\u305F\\u304C\\u3001\\u305D\\u306E\\u611F\\u899A\\u306F\\u6642\\u3068\\u5171\\u306B\\u8584\\u308C\\u3001\\u611F\\u8208\\u3060\\u3051\\u304C\\u4E00\\u90E8\\u306E\\u4EBA\\u3005\\u306E\\u4E2D\\u306B\\u6B8B\\u3063\\u305F\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u5642\\u3084\\u61B6\\u6E2C\\u304C\\u4EA4\\u5DEE\\u3057\\u3001\\u4E8B\\u4EF6\\u306E\\u95C7\\u306F\\u3088\\u308A\\u6DF1\\u304F\\u6DF7\\u6C8C\\u3092\\u5897\\u3057\\u3066\\u3044\\u304F\\u4E2D\\u3001\\u4ECA\\u72AF\\u4EBA\\u306E\\u5973\\u306F\\u3053\\u3046\\u547C\\u3070\\u308C\\u3001\\u53D7\\u3051\\u7D99\\u304C\\u308C\\u3066\\u3044\\u308B\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text -colorRed -font30-lg -font25-md mt20-lg mb20-lg mt20-md mb20-md\" }, \"\\u53E3\\u88C2\\u3051\\u5973\"))))))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons-inner\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -prev\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-current\" },\r\n                        page,\r\n                        \"/\",\r\n                        pages,\r\n                        \" \",\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, \"Page\")),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -next\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)))))));\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kuchisake);\r\n\n\n//# sourceURL=webpack:///./src/js/page/toshi/0_kuchisake.tsx?");

/***/ }),

/***/ "./src/js/page/toshi/1_senen.tsx":
/*!***************************************!*\
  !*** ./src/js/page/toshi/1_senen.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_iconToNext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/iconToNext */ \"./src/js/component/iconToNext.tsx\");\n/* harmony import */ var _module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/swiperConfig */ \"./src/js/module/swiperConfig.tsx\");\n\r\n\r\n\r\n/* Swiper設定\r\n---------------------------- */\r\n\r\nvar Senen = react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"](function (_a) {\r\n    var anime = _a.anime;\r\n    /* Swiperの設定\r\n    ---------------------------- */\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1), page = _b[0], setPage = _b[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        Object(_module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(setPage);\r\n    }, []);\r\n    /* Page数の設定\r\n      ---------------------------- */\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(), pages = _c[0], setPages = _c[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var count = document.querySelectorAll('.swiper-slide').length;\r\n        setPages(count);\r\n    }, []);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"animate__animated \" + (anime ? \"animate__fadeIn\" : \"\") },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-container\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { id: \"SW\", className: \"swiper-wrapper\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"\\u304A\\u672D\\u306B\\u96A0\\u3055\\u308C\\u305F\\u79D8\\u5BC6\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" },\r\n                                        \"\\u6211\\u3005\\u304C\\u666E\\u6BB5\\u304B\\u3089\\u4F7F\\u7528\\u3059\\u308B\\u304A\\u672D\\u306B\\u306F\\u3001\\u69D8\\u3005\\u306A\\u79D8\\u5BC6\\u304C\\u96A0\\u3055\\u308C\\u3066\\u3044\\u308B\\u3053\\u3068\\u306F\\u3054\\u5B58\\u77E5\\u3060\\u308D\\u3046\\u304B\\uFF1F\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u6709\\u540D\\u306A\\u6240\\u3067\\u8A00\\u3046\\u3068\\u300C\\u30CB\\u30FB\\u30DB\\u30FB\\u30F3\\u300D\\u306E\\uFF13\\u6587\\u5B57\\u304C\\u3001\\u5404\\u304A\\u672D\\u306E\\u8868\\u3068\\u88CF\\u306B\\u305D\\u308C\\u305E\\u308C\\u5C0F\\u3055\\u304F\\u5370\\u5B57\\u3055\\u308C\\u3066\\u3044\\u308B\\u3053\\u3068\\u3060\\u304C\\u3001 \\u305D\\u306E\\u4ED6\\u306B\\u3082\\u3001\\u8089\\u773C\\u3067\\u306F\\u307B\\u307C\\u8AAD\\u3081\\u306A\\u3044\\\"\\u30DE\\u30A4\\u30AF\\u30ED\\u6587\\u5B57\\\"\\u3084\\u3001\\u7D19\\u306E\\u8868\\u9762\\u306B\\u308F\\u305A\\u304B\\u306A\\u51F9\\u51F8\\u3092\\u65BD\\u3059\\u3053\\u3068\\u3067\\u6587\\u5B57\\u3092\\u6D6E\\u304B\\u3073\\u4E0A\\u304C\\u3089\\u305B\\u308B\\\"\\u6F5C\\u50CF\\\"\\u306A\\u3069\\u304C\\u3042\\u308B\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u305D\\u3057\\u3066\\u7279\\u7B46\\u3059\\u3079\\u304D\\u304C\\\"\\u8096\\u50CF\\u753B\\\"\\u3060\\u3001\\u3053\\u306E\\u8096\\u50CF\\u753B\\u306F\\u4F55\\u3068\\\"\\u70B9\\\"\\u3068\\\"\\u7DDA\\\"\\u3092\\u7D44\\u307F\\u5408\\u308F\\u305B\\u3066\\u8868\\u73FE\\u3055\\u308C\\u3066\\u304A\\u308A\\u3001\\u5C02\\u9580\\u5BB6\\u304C\\u624B\\u30671\\u672C1\\u672C\\u5F6B\\u3063\\u305F\\u3082\\u306E\\u3092\\u5370\\u5237\\u3057\\u3066\\u3044\\u308B\\u3002\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n                                        \"\\u3053\\u3053\\u307E\\u3067\\u306E\\u624B\\u9593\\u3092\\u304B\\u3051\\u308B\\u7406\\u7531\\u306F\\u8A00\\u3046\\u307E\\u3067\\u3082\\u306A\\u304F\\u507D\\u672D\\u306E\\u88FD\\u9020\\u9632\\u6B62\\u3067\\u3042\\u308B\\u304C\\u3001\\u5B9F\\u306F\\u304A\\u672D\\u306B\\u306F\\u3053\\u3046\\u3044\\u3063\\u305F\\u8868\\u306E\\u79D8\\u5BC6\\u3068\\u306F\\u9055\\u3046\",\r\n                                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: \"-colorRed\" }, \"\\u88CF\\u306E\\u79D8\\u5BC6\"),\r\n                                        \"\\u3082\\u5B58\\u5728\\u3059\\u308B\\u3089\\u3057\\u3044\\u2026\\u3064\\u3065\\u304F\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons-inner\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -prev\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-current\" },\r\n                        page,\r\n                        \"/\",\r\n                        pages,\r\n                        \" \",\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, \"Page\")),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -next\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)))))));\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Senen);\r\n\n\n//# sourceURL=webpack:///./src/js/page/toshi/1_senen.tsx?");

/***/ }),

/***/ "./src/js/page/toshi/toshi.tsx":
/*!*************************************!*\
  !*** ./src/js/page/toshi/toshi.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-document-meta */ \"./node_modules/react-document-meta/dist/index.js\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_document_meta__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_atMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/atMenu */ \"./src/js/component/atMenu.tsx\");\n/* harmony import */ var _component_fooger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/fooger */ \"./src/js/component/fooger.tsx\");\n/* harmony import */ var _0_kuchisake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./0_kuchisake */ \"./src/js/page/toshi/0_kuchisake.tsx\");\n/* harmony import */ var _1_senen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./1_senen */ \"./src/js/page/toshi/1_senen.tsx\");\n/* harmony import */ var _module_changeTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../module/changeTop */ \"./src/js/module/changeTop.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\n\r\n\r\n\r\n/* Component\r\n---------------------------- */\r\n\r\n\r\n/* Page\r\n---------------------------- */\r\n\r\n\r\n/* Module\r\n---------------------------- */\r\n\r\nvar Toshi = function () {\r\n    /* ページのID生成\r\n    ---------------------------- */\r\n    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useLocation\"])();\r\n    var param = location.hash;\r\n    var string = param.replace(\"#\", \"\");\r\n    var id = Number(string);\r\n    /* ページを切り替えるたびにアニメーションを発動\r\n    ------------------------- */\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false), anime = _a[0], setAnime = _a[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        setAnime(true);\r\n        var interval = setTimeout(function () {\r\n            setAnime(false);\r\n        }, 900);\r\n    }, [param]);\r\n    /* ページを読み込み時にトップへ\r\n    ------------------------- */\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        Object(_module_changeTop__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n    }, [param]);\r\n    /* メニューリスト\r\n    ------------------------- */\r\n    var MenuData = [\r\n        {\r\n            index: \"#0\",\r\n            title: \"口裂け女\"\r\n        },\r\n        {\r\n            index: \"#1\",\r\n            title: \"千円札の謎\"\r\n        }\r\n    ];\r\n    /* meta情報\r\n    ------------------------- */\r\n    var meta = {\r\n        title: '都市伝説｜学校のうわさ',\r\n        description: 'TEST',\r\n        meta: {\r\n            property: {\r\n                'og:title': '都市伝説｜学校のうわさ',\r\n                'og:site_name': '都市伝説｜学校のうわさ',\r\n                'twitter:title': '都市伝説｜学校のうわさ',\r\n            }\r\n        }\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_document_meta__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, meta),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atCover atCover--toshi\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_atMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { page: \"toshi\", menuLogo: \"h2_title1.svg\", list: MenuData, id: id }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"header\", { className: \"atHero atHero--toshi animate__animated \" + (anime ? \"animate__flipInX\" : \"\") },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atHero__inner\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", { className: \"atHero__h1\" }, MenuData[id].title))),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"main\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", { className: \"section\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"section__inner\" },\r\n                            id === 0 ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_0_kuchisake__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { anime: anime }) : \"\",\r\n                            id === 1 ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_1_senen__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { anime: anime }) : \"\")))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_fooger__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toshi);\r\n\n\n//# sourceURL=webpack:///./src/js/page/toshi/toshi.tsx?");

/***/ }),

/***/ "./src/js/page/uma/0_tuchinoko.tsx":
/*!*****************************************!*\
  !*** ./src/js/page/uma/0_tuchinoko.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_iconToNext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/iconToNext */ \"./src/js/component/iconToNext.tsx\");\n/* harmony import */ var _module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/swiperConfig */ \"./src/js/module/swiperConfig.tsx\");\n\r\n\r\n\r\n/* Swiper設定\r\n---------------------------- */\r\n\r\nvar Tuchinoko = react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"](function (_a) {\r\n    var anime = _a.anime;\r\n    /* Swiperの設定\r\n    ---------------------------- */\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1), page = _b[0], setPage = _b[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        Object(_module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(setPage);\r\n    }, []);\r\n    /* Page数の設定\r\n    ---------------------------- */\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(), pages = _c[0], setPages = _c[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var count = document.querySelectorAll('.swiper-slide').length;\r\n        setPages(count);\r\n    }, []);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"animate__animated \" + (anime ? \"animate__fadeIn\" : \"\") },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-container\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { id: \"SW\", className: \"swiper-wrapper\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons-inner\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -prev\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-current\" },\r\n                        page,\r\n                        \"/\",\r\n                        pages,\r\n                        \" \",\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, \"Page\")),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -next\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)))))));\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tuchinoko);\r\n\n\n//# sourceURL=webpack:///./src/js/page/uma/0_tuchinoko.tsx?");

/***/ }),

/***/ "./src/js/page/uma/1_bigfood.tsx":
/*!***************************************!*\
  !*** ./src/js/page/uma/1_bigfood.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_iconToNext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/iconToNext */ \"./src/js/component/iconToNext.tsx\");\n/* harmony import */ var _module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/swiperConfig */ \"./src/js/module/swiperConfig.tsx\");\n\r\n\r\n\r\n\r\nvar Bigfood = react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"](function (_a) {\r\n    var anime = _a.anime;\r\n    /* Swiperの設定\r\n    ---------------------------- */\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1), page = _b[0], setPage = _b[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        Object(_module_swiperConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(setPage);\r\n    }, []);\r\n    /* Page数の設定\r\n      ---------------------------- */\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(), pages = _c[0], setPages = _c[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var count = document.querySelectorAll('.swiper-slide').length;\r\n        setPages(count);\r\n    }, []);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"animate__animated \" + (anime ? \"animate__fadeIn\" : \"\") },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-container\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { id: \"SW\", className: \"swiper-wrapper\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-slide\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"row\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col12-lg col12-md\" },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"borderBox\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", { className: \"h2\" }, \"coming soon\"),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", { className: \"text\" }, \"coming soon\"))))))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-buttons-inner\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -prev\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-current\" },\r\n                        page,\r\n                        \"/\",\r\n                        pages,\r\n                        \" \",\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, \"Page\")),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"swiper-button -next\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_iconToNext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)))))));\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bigfood);\r\n\n\n//# sourceURL=webpack:///./src/js/page/uma/1_bigfood.tsx?");

/***/ }),

/***/ "./src/js/page/uma/uma.tsx":
/*!*********************************!*\
  !*** ./src/js/page/uma/uma.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-document-meta */ \"./node_modules/react-document-meta/dist/index.js\");\n/* harmony import */ var react_document_meta__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_document_meta__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_atMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/atMenu */ \"./src/js/component/atMenu.tsx\");\n/* harmony import */ var _component_fooger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/fooger */ \"./src/js/component/fooger.tsx\");\n/* harmony import */ var _0_tuchinoko__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./0_tuchinoko */ \"./src/js/page/uma/0_tuchinoko.tsx\");\n/* harmony import */ var _1_bigfood__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./1_bigfood */ \"./src/js/page/uma/1_bigfood.tsx\");\n/* harmony import */ var _module_changeTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../module/changeTop */ \"./src/js/module/changeTop.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\n\r\n\r\n\r\n/* Component\r\n---------------------------- */\r\n\r\n\r\n/* Page\r\n---------------------------- */\r\n\r\n\r\n/* Module\r\n---------------------------- */\r\n\r\nvar Uma = function () {\r\n    /* ページのID生成\r\n    ---------------------------- */\r\n    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useLocation\"])();\r\n    var param = location.hash;\r\n    var string = param.replace(\"#\", \"\");\r\n    var id = Number(string);\r\n    /* ページを切り替えるたびにアニメーションを発動\r\n    ------------------------- */\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false), anime = _a[0], setAnime = _a[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        setAnime(true);\r\n        var interval = setTimeout(function () {\r\n            setAnime(false);\r\n        }, 900);\r\n    }, [param]);\r\n    /* ページを読み込み時にトップへ\r\n    ------------------------- */\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        Object(_module_changeTop__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n    }, [param]);\r\n    /* メニューリスト\r\n    ------------------------- */\r\n    var MenuData = [\r\n        {\r\n            index: \"#0\",\r\n            title: \"ツチノコ\"\r\n        },\r\n        {\r\n            index: \"#1\",\r\n            title: \"ビッグフッド\"\r\n        }\r\n    ];\r\n    /* meta情報\r\n    ------------------------- */\r\n    var meta = {\r\n        title: 'UMA｜学校のうわさ',\r\n        description: 'TEST',\r\n        meta: {\r\n            property: {\r\n                'og:title': 'UMA｜学校のうわさ',\r\n                'og:site_name': 'UMA｜学校のうわさ',\r\n                'twitter:title': 'UMA｜学校のうわさ',\r\n            }\r\n        }\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_document_meta__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, meta),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atCover atCover--uma\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_atMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { page: \"uma\", menuLogo: \"h2_title2.svg\", list: MenuData, id: id }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"header\", { className: \"atHero atHero--uma animate__animated \" + (anime ? \"animate__flipInX\" : \"\") },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"atHero__inner\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", { className: \"atHero__h1\" }, MenuData[id].title))),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"main\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", { className: \"section\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"section__inner\" },\r\n                            id === 0 ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_0_tuchinoko__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { anime: anime }) : \"\",\r\n                            id === 1 ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_1_bigfood__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { anime: anime }) : \"\")))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_component_fooger__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uma);\r\n\n\n//# sourceURL=webpack:///./src/js/page/uma/uma.tsx?");

/***/ }),

/***/ "./src/music sync recursive ^\\.\\/.*\\.mp3$":
/*!**************************************!*\
  !*** ./src/music sync ^\.\/.*\.mp3$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./0.mp3\": \"./src/music/0.mp3\",\n\t\"./1.mp3\": \"./src/music/1.mp3\",\n\t\"./2.mp3\": \"./src/music/2.mp3\",\n\t\"./3.mp3\": \"./src/music/3.mp3\",\n\t\"./4.mp3\": \"./src/music/4.mp3\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/music sync recursive ^\\\\.\\\\/.*\\\\.mp3$\";\n\n//# sourceURL=webpack:///./src/music_sync_^\\.\\/.*\\.mp3$?");

/***/ }),

/***/ "./src/music/0.mp3":
/*!*************************!*\
  !*** ./src/music/0.mp3 ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/0.mp3\";\n\n//# sourceURL=webpack:///./src/music/0.mp3?");

/***/ }),

/***/ "./src/music/1.mp3":
/*!*************************!*\
  !*** ./src/music/1.mp3 ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/1.mp3\";\n\n//# sourceURL=webpack:///./src/music/1.mp3?");

/***/ }),

/***/ "./src/music/2.mp3":
/*!*************************!*\
  !*** ./src/music/2.mp3 ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/2.mp3\";\n\n//# sourceURL=webpack:///./src/music/2.mp3?");

/***/ }),

/***/ "./src/music/3.mp3":
/*!*************************!*\
  !*** ./src/music/3.mp3 ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/3.mp3\";\n\n//# sourceURL=webpack:///./src/music/3.mp3?");

/***/ }),

/***/ "./src/music/4.mp3":
/*!*************************!*\
  !*** ./src/music/4.mp3 ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/img/4.mp3\";\n\n//# sourceURL=webpack:///./src/music/4.mp3?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });