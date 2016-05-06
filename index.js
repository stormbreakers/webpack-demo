/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "D:\\wamp\\www\\other\\imagemagick\\demo";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _http = __webpack_require__(2);

	var _http2 = _interopRequireDefault(_http);

	var _fs = __webpack_require__(3);

	var _fs2 = _interopRequireDefault(_fs);

	var _bluebird = __webpack_require__(4);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	var _bodyParser = __webpack_require__(5);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _route = __webpack_require__(6);

	var _route2 = _interopRequireDefault(_route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    var app = (0, _express2.default)();
	    // let http = require('http');
	    // let fs = require('fs');
	    // let Promise = require('bluebird');
	    // let moment = require('moment');
	    app.use(_express2.default.static(__dirname + '/app/'));

	    app.use(function (req, res, next) {
	        res.setHeader('Access-Control-Allow-Origin', '*');
	        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	        res.setHeader('Access-Control-Allow-Credentials', true);
	        next();
	    });

	    // let bodyParser = require('body-parser');
	    app.use(_bodyParser2.default.urlencoded({ extended: true }));
	    app.use(_bodyParser2.default.json());

	    (0, _route2.default)(app);
	    // app.get('*', function (req, res) {
	    //     res.send('Hello Joy');
	    // });

	    app.listen(3000);
	    console.log("App listening on port 3000");
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("bluebird");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Route;
	function Route(app) {
	    app.get('*', function (req, res) {
	        res.send('Hello Joy');
	    });
	}
	// module.exports = function Route(app) {
	//     app.get('*', function (req, res) {
	//         res.send('Hello Joy');
	//     });
	// }

/***/ }
/******/ ]);