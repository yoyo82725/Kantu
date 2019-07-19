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
/******/ 		"vision_editor": 0
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
/******/ 	deferredModules.push(["./src/vision_editor.js","vendor","background_csv_editor_popup_vision_editor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/vision_man.js":
/*!**********************************!*\
  !*** ./src/common/vision_man.js ***!
  \**********************************/
/*! exports provided: VisionMan, getVisionMan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionMan", function() { return VisionMan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisionMan", function() { return getVisionMan; });
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





var VisionMan = function (_FileMan) {
  _inherits(VisionMan, _FileMan);

  function VisionMan() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, VisionMan);

    return _possibleConstructorReturn(this, (VisionMan.__proto__ || Object.getPrototypeOf(VisionMan)).call(this, _extends({}, opts, { baseDir: 'visions' })));
  }

  _createClass(VisionMan, [{
    key: 'write',
    value: function write(fileName, blob) {
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].writeFile(this.__filePath(fileName, true), blob);
    }
  }, {
    key: 'read',
    value: function read(fileName) {
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].readFile(this.__filePath(fileName), 'ArrayBuffer');
    }
  }, {
    key: 'readAsDataURL',
    value: function readAsDataURL(fileName) {
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].readFile(this.__filePath(fileName), 'DataURL');
    }
  }, {
    key: 'getLink',
    value: function getLink(fileName) {
      if (!_web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.isFirefox()) return Promise.resolve(_get(VisionMan.prototype.__proto__ || Object.getPrototypeOf(VisionMan.prototype), 'getLink', this).call(this, fileName));

      // Note: Except for Chrome, the filesystem API we use is a polyfill from idb.filesystem.js
      // idb.filesystem.js works great but the only problem is that you can't use 'filesystem:' schema to retrieve that file
      // so here, we have to convert the file to data url
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].readFile(this.__filePath(fileName), 'DataURL');
    }
  }]);

  return VisionMan;
}(_file_man__WEBPACK_IMPORTED_MODULE_1__["default"]);

var man = void 0;

function getVisionMan() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (opts) {
    man = new VisionMan(opts);
  }

  if (!man) {
    throw new Error('vision manager not initialized');
  }

  return man;
}

/***/ }),

/***/ "./src/vision_editor.js":
/*!******************************!*\
  !*** ./src/vision_editor.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_vision_man__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/vision_man */ "./src/common/vision_man.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils */ "./src/common/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var visionMan = Object(_common_vision_man__WEBPACK_IMPORTED_MODULE_2__["getVisionMan"])();
var rootEl = document.getElementById('root');
var render = function render() {
  return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), rootEl);
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
      ready: false,
      imageUrl: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var queryObj = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["parseQuery"])(window.location.search);
      var visionFile = queryObj.vision;

      if (!visionFile) return;

      document.title = visionFile + ' - Kantu Vision Viewer';

      visionMan.getLink(visionFile).then(function (link) {
        _this2.setState({
          imageUrl: link,
          ready: true
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.ready) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'vision-editor' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: this.state.imageUrl })
      );
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

render();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi92aXNpb25fbWFuLmpzIiwid2VicGFjazovLy8uL3NyYy92aXNpb25fZWRpdG9yLmpzIl0sIm5hbWVzIjpbIlZpc2lvbk1hbiIsIm9wdHMiLCJiYXNlRGlyIiwiZmlsZU5hbWUiLCJibG9iIiwiZnMiLCJ3cml0ZUZpbGUiLCJfX2ZpbGVQYXRoIiwicmVhZEZpbGUiLCJFeHQiLCJpc0ZpcmVmb3giLCJQcm9taXNlIiwicmVzb2x2ZSIsIkZpbGVNYW4iLCJtYW4iLCJnZXRWaXNpb25NYW4iLCJFcnJvciIsInZpc2lvbk1hbiIsInJvb3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJSZWFjdERPTSIsIkFwcCIsInN0YXRlIiwicmVhZHkiLCJpbWFnZVVybCIsInF1ZXJ5T2JqIiwicGFyc2VRdWVyeSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwidmlzaW9uRmlsZSIsInZpc2lvbiIsInRpdGxlIiwiZ2V0TGluayIsInRoZW4iLCJzZXRTdGF0ZSIsImxpbmsiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtB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QU8sS0FERDtBQUVOQyxnQkFBVTtBQUZKLEs7Ozs7O3dDQUthO0FBQUE7O0FBQ25CLFVBQU1DLFdBQWNDLGdFQUFVQSxDQUFDQyxPQUFPQyxRQUFQLENBQWdCQyxNQUEzQixDQUFwQjtBQUNBLFVBQU1DLGFBQWNMLFNBQVNNLE1BQTdCOztBQUVBLFVBQUksQ0FBQ0QsVUFBTCxFQUFpQjs7QUFFakJiLGVBQVNlLEtBQVQsR0FBaUJGLGFBQWEsd0JBQTlCOztBQUVBZixnQkFBVWtCLE9BQVYsQ0FBa0JILFVBQWxCLEVBQ0NJLElBREQsQ0FDTSxnQkFBUTtBQUNaLGVBQUtDLFFBQUwsQ0FBYztBQUNaWCxvQkFBVVksSUFERTtBQUVaYixpQkFBVTtBQUZFLFNBQWQ7QUFJRCxPQU5EO0FBT0Q7Ozs2QkFFUztBQUNSLFVBQUksQ0FBQyxLQUFLRCxLQUFMLENBQVdDLEtBQWhCLEVBQXdCLE9BQU8sdUVBQVA7O0FBRXhCLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxlQUFmO0FBQ0UsNEVBQUssS0FBSyxLQUFLRCxLQUFMLENBQVdFLFFBQXJCO0FBREYsT0FERjtBQUtEOzs7O0VBL0JlYSw0Q0FBS0EsQ0FBQ0MsUzs7QUFrQ3hCbkIsUyIsImZpbGUiOiJ2aXNpb25fZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInZpc2lvbl9lZGl0b3JcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy92aXNpb25fZWRpdG9yLmpzXCIsXCJ2ZW5kb3JcIixcImJhY2tncm91bmRfY3N2X2VkaXRvcl9wb3B1cF92aXNpb25fZWRpdG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IGZzIGZyb20gJy4vZmlsZXN5c3RlbSdcclxuaW1wb3J0IEZpbGVNYW4gZnJvbSAnLi9maWxlX21hbidcclxuaW1wb3J0IEV4dCBmcm9tICcuL3dlYl9leHRlbnNpb24nXHJcblxyXG5leHBvcnQgY2xhc3MgVmlzaW9uTWFuIGV4dGVuZHMgRmlsZU1hbiB7XHJcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xyXG4gICAgc3VwZXIoeyAuLi5vcHRzLCBiYXNlRGlyOiAndmlzaW9ucycgfSlcclxuICB9XHJcblxyXG4gIHdyaXRlIChmaWxlTmFtZSwgYmxvYikge1xyXG4gICAgcmV0dXJuIGZzLndyaXRlRmlsZSh0aGlzLl9fZmlsZVBhdGgoZmlsZU5hbWUsIHRydWUpLCBibG9iKVxyXG4gIH1cclxuXHJcbiAgcmVhZCAoZmlsZU5hbWUpIHtcclxuICAgIHJldHVybiBmcy5yZWFkRmlsZSh0aGlzLl9fZmlsZVBhdGgoZmlsZU5hbWUpLCAnQXJyYXlCdWZmZXInKVxyXG4gIH1cclxuXHJcbiAgcmVhZEFzRGF0YVVSTCAoZmlsZU5hbWUpIHtcclxuICAgIHJldHVybiBmcy5yZWFkRmlsZSh0aGlzLl9fZmlsZVBhdGgoZmlsZU5hbWUpLCAnRGF0YVVSTCcpXHJcbiAgfVxyXG5cclxuICBnZXRMaW5rIChmaWxlTmFtZSkge1xyXG4gICAgaWYgKCFFeHQuaXNGaXJlZm94KCkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3VwZXIuZ2V0TGluayhmaWxlTmFtZSkpXHJcblxyXG4gICAgLy8gTm90ZTogRXhjZXB0IGZvciBDaHJvbWUsIHRoZSBmaWxlc3lzdGVtIEFQSSB3ZSB1c2UgaXMgYSBwb2x5ZmlsbCBmcm9tIGlkYi5maWxlc3lzdGVtLmpzXHJcbiAgICAvLyBpZGIuZmlsZXN5c3RlbS5qcyB3b3JrcyBncmVhdCBidXQgdGhlIG9ubHkgcHJvYmxlbSBpcyB0aGF0IHlvdSBjYW4ndCB1c2UgJ2ZpbGVzeXN0ZW06JyBzY2hlbWEgdG8gcmV0cmlldmUgdGhhdCBmaWxlXHJcbiAgICAvLyBzbyBoZXJlLCB3ZSBoYXZlIHRvIGNvbnZlcnQgdGhlIGZpbGUgdG8gZGF0YSB1cmxcclxuICAgIHJldHVybiBmcy5yZWFkRmlsZSh0aGlzLl9fZmlsZVBhdGgoZmlsZU5hbWUpLCAnRGF0YVVSTCcpXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgbWFuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmlzaW9uTWFuIChvcHRzID0ge30pIHtcclxuICBpZiAob3B0cykge1xyXG4gICAgbWFuID0gbmV3IFZpc2lvbk1hbihvcHRzKVxyXG4gIH1cclxuXHJcbiAgaWYgKCFtYW4pIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndmlzaW9uIG1hbmFnZXIgbm90IGluaXRpYWxpemVkJylcclxuICB9XHJcblxyXG4gIHJldHVybiBtYW5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5pbXBvcnQgeyBnZXRWaXNpb25NYW4gfSBmcm9tICcuL2NvbW1vbi92aXNpb25fbWFuJ1xyXG5pbXBvcnQgeyBwYXJzZVF1ZXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMnXHJcblxyXG5jb25zdCB2aXNpb25NYW4gPSBnZXRWaXNpb25NYW4oKVxyXG5jb25zdCByb290RWwgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5jb25zdCByZW5kZXIgICAgPSAoKSA9PiBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsKVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHJlYWR5OiBmYWxzZSxcclxuICAgIGltYWdlVXJsOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICBjb25zdCBxdWVyeU9iaiAgICA9IHBhcnNlUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaClcclxuICAgIGNvbnN0IHZpc2lvbkZpbGUgID0gcXVlcnlPYmoudmlzaW9uXHJcblxyXG4gICAgaWYgKCF2aXNpb25GaWxlKSByZXR1cm5cclxuXHJcbiAgICBkb2N1bWVudC50aXRsZSA9IHZpc2lvbkZpbGUgKyAnIC0gS2FudHUgVmlzaW9uIFZpZXdlcidcclxuXHJcbiAgICB2aXNpb25NYW4uZ2V0TGluayh2aXNpb25GaWxlKVxyXG4gICAgLnRoZW4obGluayA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGltYWdlVXJsOiBsaW5rLFxyXG4gICAgICAgIHJlYWR5OiAgICB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5yZWFkeSkgIHJldHVybiA8ZGl2IC8+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb24tZWRpdG9yXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VVcmx9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxucmVuZGVyKClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==