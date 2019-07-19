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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"csv_editor": 0
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
/******/ 	deferredModules.push(["./src/csv_editor.js","vendor","background_csv_editor_popup_vision_editor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/csv_editor.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/csv_editor.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".csv-editor {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .csv-editor .react-codemirror2 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    position: relative;\n    border-bottom: 1px solid #ccc; }\n    .csv-editor .react-codemirror2 .CodeMirror {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      height: auto;\n      font-size: 13px; }\n  .csv-editor .csv-actions {\n    height: 60px;\n    line-height: 60px;\n    text-align: center;\n    background: #f0f0f0; }\n    .csv-editor .csv-actions button {\n      margin-right: 10px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/common/csv_man.js":
/*!*******************************!*\
  !*** ./src/common/csv_man.js ***!
  \*******************************/
/*! exports provided: CSVMan, getCSVMan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVMan", function() { return CSVMan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCSVMan", function() { return getCSVMan; });
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filesystem */ "./src/common/filesystem.js");
/* harmony import */ var _file_man__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file_man */ "./src/common/file_man.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CSVMan = function (_FileMan) {
  _inherits(CSVMan, _FileMan);

  function CSVMan() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CSVMan);

    return _possibleConstructorReturn(this, (CSVMan.__proto__ || Object.getPrototypeOf(CSVMan)).call(this, _extends({}, opts, { baseDir: 'spreadsheets' })));
  }

  _createClass(CSVMan, [{
    key: 'getLink',
    value: function getLink(fileName) {
      if (!_web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.isFirefox()) return Promise.resolve(_get(CSVMan.prototype.__proto__ || Object.getPrototypeOf(CSVMan.prototype), 'getLink', this).call(this, fileName) + '?' + new Date().getTime());

      // Note: Except for Chrome, the filesystem API we use is a polyfill from idb.filesystem.js
      // idb.filesystem.js works great but the only problem is that you can't use 'filesystem:' schema to retrieve that file
      // so here, we have to convert the file to data url
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].readFile(this.__filePath(fileName), 'DataURL');
    }
  }]);

  return CSVMan;
}(_file_man__WEBPACK_IMPORTED_MODULE_1__["default"]);

var man = void 0;

function getCSVMan() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (opts) {
    man = new CSVMan(opts);
  }

  if (!man) {
    throw new Error('csv manager not initialized');
  }

  return man;
}

/***/ }),

/***/ "./src/csv_editor.js":
/*!***************************!*\
  !*** ./src/csv_editor.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-codemirror2 */ "./node_modules/react-codemirror2/index.js");
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_lib_codemirror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/lib/codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror_lib_codemirror__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/addon/edit/matchbrackets */ "./node_modules/codemirror/addon/edit/matchbrackets.js");
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/addon/edit/closebrackets */ "./node_modules/codemirror/addon/edit/closebrackets.js");
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _csv_editor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./csv_editor.scss */ "./src/csv_editor.scss");
/* harmony import */ var _csv_editor_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_csv_editor_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_csv_man__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/csv_man */ "./src/common/csv_man.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/utils */ "./src/common/utils.js");






var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var csvMan = Object(_common_csv_man__WEBPACK_IMPORTED_MODULE_12__["getCSVMan"])();
var rootEl = document.getElementById('root');
var render = function render() {
  return react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App, null), rootEl);
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      csvFile: null,
      ready: false,
      sourceText: '',
      sourceTextModified: ''
    }, _this.onChangeEditSource = function (editor, data, text) {
      _this.setState({
        sourceTextModified: text
      });
    }, _this.saveCSV = function () {
      return csvMan.overwrite(_this.state.csvFile, _this.state.sourceTextModified).then(function () {
        return antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success('Successfully saved');
      }, function (e) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Error: ' + e.message);
        throw e;
      });
    }, _this.onClickSave = function () {
      return _this.saveCSV();
    }, _this.onClickSaveClose = function () {
      return _this.saveCSV().then(function () {
        return setTimeout(function () {
          return window.close();
        }, 300);
      });
    }, _this.onClickCancel = function () {
      window.close();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var queryObj = Object(_common_utils__WEBPACK_IMPORTED_MODULE_13__["parseQuery"])(window.location.search);
      var csvFile = queryObj.csv;

      if (!csvFile) return;

      document.title = csvFile + ' - Kantu CSV Editor';

      csvMan.read(csvFile).then(function (text) {
        _this2.setState({
          csvFile: csvFile,
          ready: true,
          sourceText: text,
          sourceTextModified: text
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.state.ready) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('div', null);

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        'div',
        { className: 'csv-editor' },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_codemirror2__WEBPACK_IMPORTED_MODULE_4__["UnControlled"], {
          ref: function ref(el) {
            _this3.codeMirror = el;
          },
          value: this.state.sourceText,
          onChange: this.onChangeEditSource,
          options: {
            lineNumbers: true,
            matchBrackets: true,
            autoCloseBrackets: true
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          'div',
          { className: 'csv-actions' },
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a,
            { type: 'primary', onClick: this.onClickSaveClose },
            'Save & Close'
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a,
            { onClick: this.onClickSave },
            'Save'
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a,
            { onClick: this.onClickCancel },
            'Cancel'
          )
        )
      );
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

render();

/***/ }),

/***/ "./src/csv_editor.scss":
/*!*****************************!*\
  !*** ./src/csv_editor.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/postcss-loader/lib!../node_modules/sass-loader/lib/loader.js!./csv_editor.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/csv_editor.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzdl9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2Nzdl9tYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzdl9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzdl9lZGl0b3Iuc2Nzcz8xN2VhIl0sIm5hbWVzIjpbIkNTVk1hbiIsIm9wdHMiLCJiYXNlRGlyIiwiZmlsZU5hbWUiLCJFeHQiLCJpc0ZpcmVmb3giLCJQcm9taXNlIiwicmVzb2x2ZSIsIkRhdGUiLCJnZXRUaW1lIiwiZnMiLCJyZWFkRmlsZSIsIl9fZmlsZVBhdGgiLCJGaWxlTWFuIiwibWFuIiwiZ2V0Q1NWTWFuIiwiRXJyb3IiLCJjc3ZNYW4iLCJyb290RWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiUmVhY3RET00iLCJBcHAiLCJzdGF0ZSIsImNzdkZpbGUiLCJyZWFkeSIsInNvdXJjZVRleHQiLCJzb3VyY2VUZXh0TW9kaWZpZWQiLCJvbkNoYW5nZUVkaXRTb3VyY2UiLCJlZGl0b3IiLCJkYXRhIiwidGV4dCIsInNldFN0YXRlIiwic2F2ZUNTViIsIm92ZXJ3cml0ZSIsInRoZW4iLCJzdWNjZXNzIiwiZXJyb3IiLCJlIiwibWVzc2FnZSIsIm9uQ2xpY2tTYXZlIiwib25DbGlja1NhdmVDbG9zZSIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJjbG9zZSIsIm9uQ2xpY2tDYW5jZWwiLCJxdWVyeU9iaiIsInBhcnNlUXVlcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsImNzdiIsInRpdGxlIiwicmVhZCIsImNvZGVNaXJyb3IiLCJlbCIsImxpbmVOdW1iZXJzIiwibWF0Y2hCcmFja2V0cyIsImF1dG9DbG9zZUJyYWNrZXRzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QVMsS0FBS0QsV0FBdEI7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtLLGFBQXRCO0FBQUE7QUFBQTtBQUhGO0FBWkYsT0FERjtBQW9CRDs7OztFQWhGZWEsNENBQUtBLENBQUNDLFM7O0FBbUZ4QnZDLFM7Ozs7Ozs7Ozs7O0FDdEdBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdSQUErSTtBQUNySyw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7QUFDckU7QUFDQTtBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiY3N2X2VkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjc3ZfZWRpdG9yXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvY3N2X2VkaXRvci5qc1wiLFwidmVuZG9yXCIsXCJiYWNrZ3JvdW5kX2Nzdl9lZGl0b3JfcG9wdXBfdmlzaW9uX2VkaXRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jc3YtZWRpdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY3N2LWVkaXRvciAucmVhY3QtY29kZW1pcnJvcjIge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzsgfVxcbiAgICAuY3N2LWVkaXRvciAucmVhY3QtY29kZW1pcnJvcjIgLkNvZGVNaXJyb3Ige1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDsgfVxcbiAgLmNzdi1lZGl0b3IgLmNzdi1hY3Rpb25zIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwOyB9XFxuICAgIC5jc3YtZWRpdG9yIC5jc3YtYWN0aW9ucyBidXR0b24ge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBmcyBmcm9tICcuL2ZpbGVzeXN0ZW0nXHJcbmltcG9ydCBGaWxlTWFuIGZyb20gJy4vZmlsZV9tYW4nXHJcbmltcG9ydCBFeHQgZnJvbSAnLi93ZWJfZXh0ZW5zaW9uJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENTVk1hbiBleHRlbmRzIEZpbGVNYW4ge1xyXG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcclxuICAgIHN1cGVyKHsgLi4ub3B0cywgYmFzZURpcjogJ3NwcmVhZHNoZWV0cycgfSlcclxuICB9XHJcblxyXG4gIGdldExpbmsgKGZpbGVOYW1lKSB7XHJcbiAgICBpZiAoIUV4dC5pc0ZpcmVmb3goKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdXBlci5nZXRMaW5rKGZpbGVOYW1lKSArICc/JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxyXG5cclxuICAgIC8vIE5vdGU6IEV4Y2VwdCBmb3IgQ2hyb21lLCB0aGUgZmlsZXN5c3RlbSBBUEkgd2UgdXNlIGlzIGEgcG9seWZpbGwgZnJvbSBpZGIuZmlsZXN5c3RlbS5qc1xyXG4gICAgLy8gaWRiLmZpbGVzeXN0ZW0uanMgd29ya3MgZ3JlYXQgYnV0IHRoZSBvbmx5IHByb2JsZW0gaXMgdGhhdCB5b3UgY2FuJ3QgdXNlICdmaWxlc3lzdGVtOicgc2NoZW1hIHRvIHJldHJpZXZlIHRoYXQgZmlsZVxyXG4gICAgLy8gc28gaGVyZSwgd2UgaGF2ZSB0byBjb252ZXJ0IHRoZSBmaWxlIHRvIGRhdGEgdXJsXHJcbiAgICByZXR1cm4gZnMucmVhZEZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSwgJ0RhdGFVUkwnKVxyXG4gIH1cclxufVxyXG5cclxubGV0IG1hblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENTVk1hbiAob3B0cyA9IHt9KSB7XHJcbiAgaWYgKG9wdHMpIHtcclxuICAgIG1hbiA9IG5ldyBDU1ZNYW4ob3B0cylcclxuICB9XHJcblxyXG4gIGlmICghbWFuKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzdiBtYW5hZ2VyIG5vdCBpbml0aWFsaXplZCcpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWFuXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBtZXNzYWdlLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBVbkNvbnRyb2xsZWQgYXMgQ29kZU1pcnJvciB9IGZyb20gJ3JlYWN0LWNvZGVtaXJyb3IyJ1xyXG5pbXBvcnQgJ2NvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3InXHJcbmltcG9ydCAnY29kZW1pcnJvci9tb2RlL2phdmFzY3JpcHQvamF2YXNjcmlwdCdcclxuaW1wb3J0ICdjb2RlbWlycm9yL2FkZG9uL2VkaXQvbWF0Y2hicmFja2V0cydcclxuaW1wb3J0ICdjb2RlbWlycm9yL2FkZG9uL2VkaXQvY2xvc2VicmFja2V0cydcclxuaW1wb3J0ICdjb2RlbWlycm9yL2xpYi9jb2RlbWlycm9yLmNzcydcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcbmltcG9ydCAnLi9jc3ZfZWRpdG9yLnNjc3MnXHJcblxyXG5pbXBvcnQgeyBnZXRDU1ZNYW4gfSBmcm9tICcuL2NvbW1vbi9jc3ZfbWFuJ1xyXG5pbXBvcnQgeyBwYXJzZVF1ZXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMnXHJcblxyXG5jb25zdCBjc3ZNYW4gPSBnZXRDU1ZNYW4oKVxyXG5jb25zdCByb290RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5jb25zdCByZW5kZXIgPSAoKSA9PiBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsKVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGNzdkZpbGU6IG51bGwsXHJcbiAgICByZWFkeTogZmFsc2UsXHJcbiAgICBzb3VyY2VUZXh0OiAnJyxcclxuICAgIHNvdXJjZVRleHRNb2RpZmllZDogJydcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlRWRpdFNvdXJjZSA9IChlZGl0b3IsIGRhdGEsIHRleHQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzb3VyY2VUZXh0TW9kaWZpZWQ6IHRleHRcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzYXZlQ1NWID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGNzdk1hbi5vdmVyd3JpdGUodGhpcy5zdGF0ZS5jc3ZGaWxlLCB0aGlzLnN0YXRlLnNvdXJjZVRleHRNb2RpZmllZClcclxuICAgIC50aGVuKFxyXG4gICAgICAoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSBzYXZlZCcpLFxyXG4gICAgICBlID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKCdFcnJvcjogJyArIGUubWVzc2FnZSlcclxuICAgICAgICB0aHJvdyBlXHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tTYXZlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZUNTVigpXHJcbiAgfVxyXG5cclxuICBvbkNsaWNrU2F2ZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZUNTVigpXHJcbiAgICAudGhlbigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5jbG9zZSgpLCAzMDApKVxyXG4gIH1cclxuXHJcbiAgb25DbGlja0NhbmNlbCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5jbG9zZSgpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICBjb25zdCBxdWVyeU9iaiA9IHBhcnNlUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaClcclxuICAgIGNvbnN0IGNzdkZpbGUgID0gcXVlcnlPYmouY3N2XHJcblxyXG4gICAgaWYgKCFjc3ZGaWxlKSByZXR1cm5cclxuXHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGNzdkZpbGUgKyAnIC0gS2FudHUgQ1NWIEVkaXRvcidcclxuXHJcbiAgICBjc3ZNYW4ucmVhZChjc3ZGaWxlKVxyXG4gICAgLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGNzdkZpbGUsXHJcbiAgICAgICAgcmVhZHk6IHRydWUsXHJcbiAgICAgICAgc291cmNlVGV4dDogdGV4dCxcclxuICAgICAgICBzb3VyY2VUZXh0TW9kaWZpZWQ6IHRleHRcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnJlYWR5KSAgcmV0dXJuIDxkaXYgLz5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdi1lZGl0b3JcIj5cclxuICAgICAgICA8Q29kZU1pcnJvclxyXG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuY29kZU1pcnJvciA9IGVsIH19XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zb3VyY2VUZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VFZGl0U291cmNlfVxyXG4gICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgICAgICAgICAgbWF0Y2hCcmFja2V0czogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b0Nsb3NlQnJhY2tldHM6IHRydWVcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3YtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1NhdmVDbG9zZX0+U2F2ZSAmYW1wOyBDbG9zZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tTYXZlfT5TYXZlPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DbGlja0NhbmNlbH0+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxucmVuZGVyKClcclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jc3ZfZWRpdG9yLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jc3ZfZWRpdG9yLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jc3ZfZWRpdG9yLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=