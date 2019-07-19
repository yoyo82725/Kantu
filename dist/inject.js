/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ext/inject.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/ipc/cs_postmessage.js":
/*!******************************************!*\
  !*** ./src/common/ipc/cs_postmessage.js ***!
  \******************************************/
/*! exports provided: postMessage, onMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMessage", function() { return postMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMessage", function() { return onMessage; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TYPE = 'SELENIUM_IDE_CS_MSG';

var postMessage = function postMessage(targetWin, myWin, payload) {
  var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '*';
  var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 60000;

  return new Promise(function (resolve, reject) {
    if (!targetWin || !targetWin.postMessage) {
      throw new Error('csPostMessage: targetWin is not a window', targetWin);
    }

    if (!myWin || !myWin.addEventListener || !myWin.removeEventListener) {
      throw new Error('csPostMessage: myWin is not a window', myWin);
    }

    var secret = Math.random();
    var type = TYPE;

    // Note: create a listener with a corresponding secret every time
    var onMsg = function onMsg(e) {
      if (e.data && e.data.type === TYPE && !e.data.isRequest && e.data.secret === secret) {
        myWin.removeEventListener('message', onMsg);
        var _e$data = e.data,
            _payload = _e$data.payload,
            error = _e$data.error;


        if (error) return reject(new Error(error));
        if (_payload !== undefined) return resolve(_payload);

        reject(new Error('csPostMessage: No payload nor error found'));
      }
    };

    myWin.addEventListener('message', onMsg);

    // Note:
    // * `type` to make sure we check our own msg only
    // * `secret` is for 1 to 1 relationship between a msg and a listener
    // * `payload` is the real data you want to send
    // * `isRequest` is to mark that it's not an answer to some previous request
    targetWin.postMessage({
      type: type,
      secret: secret,
      payload: payload,
      isRequest: true
    }, target);

    setTimeout(function () {
      reject(new Error('csPostMessage: timeout ' + timeout + ' ms'));
    }, timeout);
  });
};

var onMessage = function onMessage(win, fn) {
  if (!win || !win.addEventListener || !win.removeEventListener) {
    throw new Error('csOnMessage: not a window', win);
  }

  var onMsg = function onMsg(e) {
    // Note: only respond to msg with `isRequest` as true
    if (e && e.data && e.data.type === TYPE && e.data.isRequest && e.data.secret) {
      var tpl = {
        type: TYPE,
        secret: e.data.secret

        // Note: wrapped with a new Promise to catch any exception during the execution of fn
      };new Promise(function (resolve, reject) {
        var ret = void 0;

        try {
          ret = fn(e.data.payload, {
            source: e.source
          });
        } catch (err) {
          reject(err);
        }

        // Note: only resolve if returned value is not undefined. With this, we can have multiple
        // listeners added to onMessage, and each one takes care of what it really cares
        if (ret !== undefined) {
          resolve(ret);
        }
      }).then(function (res) {
        e.source.postMessage(_extends({}, tpl, {
          payload: res
        }), '*');
      }, function (err) {
        e.source.postMessage(_extends({}, tpl, {
          error: err.message
        }), '*');
      });
    }
  };

  win.addEventListener('message', onMsg);
  return function () {
    return win.removeEventListener('message', onMsg);
  };
};

/***/ }),

/***/ "./src/ext/inject.js":
/*!***************************!*\
  !*** ./src/ext/inject.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_ipc_cs_postmessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/ipc/cs_postmessage */ "./src/common/ipc/cs_postmessage.js");


var clone = function clone(data) {
  var str = JSON.stringify(data);
  if (str === undefined) return undefined;
  return JSON.parse(str);
};

Object(_common_ipc_cs_postmessage__WEBPACK_IMPORTED_MODULE_0__["onMessage"])(window, function (_ref) {
  var cmd = _ref.cmd,
      args = _ref.args;

  switch (cmd) {
    case 'INJECT_READY':
      {
        document.body.setAttribute('data-injected', 'done');
        return true;
      }

    case 'INJECT_RUN_EVAL':
      {
        // Note: clone the data in case it contains some Object that can't be passed via postMessage (eg. HTMLDocument)
        // eslint-disable-next-line no-eval
        return { result: clone(window.eval(args.code)) };
      }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pcGMvY3NfcG9zdG1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dC9pbmplY3QuanMiXSwibmFtZXMiOlsiVFlQRSIsInBvc3RNZXNzYWdlIiwidGFyZ2V0V2luIiwibXlXaW4iLCJwYXlsb2FkIiwidGFyZ2V0IiwidGltZW91dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlY3JldCIsIk1hdGgiLCJyYW5kb20iLCJ0eXBlIiwib25Nc2ciLCJlIiwiZGF0YSIsImlzUmVxdWVzdCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsIm9uTWVzc2FnZSIsIndpbiIsImZuIiwidHBsIiwicmV0Iiwic291cmNlIiwiZXJyIiwidGhlbiIsInJlcyIsIm1lc3NhZ2UiLCJjbG9uZSIsInN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsIndpbmRvdyIsImNtZCIsImFyZ3MiLCJkb2N1bWVudCIsImJvZHkiLCJzZXRBdHRyaWJ1dGUiLCJyZXN1bHQiLCJldmFsIiwiY29kZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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S0FBS0MsU0FBTCxDQUFlbEIsSUFBZixDQUFaO0FBQ0EsTUFBSWdCLFFBQVFiLFNBQVosRUFBd0IsT0FBT0EsU0FBUDtBQUN4QixTQUFPYyxLQUFLRSxLQUFMLENBQVdILEdBQVgsQ0FBUDtBQUNELENBSkQ7O0FBTUFYLDRFQUFTQSxDQUFDZSxNQUFWLEVBQWtCLGdCQUFtQjtBQUFBLE1BQWhCQyxHQUFnQixRQUFoQkEsR0FBZ0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ25DLFVBQVFELEdBQVI7QUFDRSxTQUFLLGNBQUw7QUFBcUI7QUFDbkJFLGlCQUFTQyxJQUFULENBQWNDLFlBQWQsQ0FBMkIsZUFBM0IsRUFBNEMsTUFBNUM7QUFDQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFLLGlCQUFMO0FBQXdCO0FBQ3RCO0FBQ0E7QUFDQSxlQUFPLEVBQUVDLFFBQVFYLE1BQU1LLE9BQU9PLElBQVAsQ0FBWUwsS0FBS00sSUFBakIsQ0FBTixDQUFWLEVBQVA7QUFDRDtBQVZIO0FBWUQsQ0FiRCxFIiwiZmlsZSI6ImluamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2V4dC9pbmplY3QuanNcIik7XG4iLCJcclxuY29uc3QgVFlQRSA9ICdTRUxFTklVTV9JREVfQ1NfTVNHJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RNZXNzYWdlID0gKHRhcmdldFdpbiwgbXlXaW4sIHBheWxvYWQsIHRhcmdldCA9ICcqJywgdGltZW91dCA9IDYwMDAwKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghdGFyZ2V0V2luIHx8ICF0YXJnZXRXaW4ucG9zdE1lc3NhZ2UpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjc1Bvc3RNZXNzYWdlOiB0YXJnZXRXaW4gaXMgbm90IGEgd2luZG93JywgdGFyZ2V0V2luKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghbXlXaW4gfHwgIW15V2luLmFkZEV2ZW50TGlzdGVuZXIgfHwgIW15V2luLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjc1Bvc3RNZXNzYWdlOiBteVdpbiBpcyBub3QgYSB3aW5kb3cnLCBteVdpbilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWNyZXQgID0gTWF0aC5yYW5kb20oKVxyXG4gICAgY29uc3QgdHlwZSAgICA9IFRZUEVcclxuXHJcbiAgICAvLyBOb3RlOiBjcmVhdGUgYSBsaXN0ZW5lciB3aXRoIGEgY29ycmVzcG9uZGluZyBzZWNyZXQgZXZlcnkgdGltZVxyXG4gICAgY29uc3Qgb25Nc2cgICA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmRhdGEgJiYgZS5kYXRhLnR5cGUgPT09IFRZUEUgJiYgIWUuZGF0YS5pc1JlcXVlc3QgJiYgZS5kYXRhLnNlY3JldCA9PT0gc2VjcmV0KSB7XHJcbiAgICAgICAgbXlXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG4gICAgICAgIGNvbnN0IHsgcGF5bG9hZCwgZXJyb3IgfSA9IGUuZGF0YVxyXG5cclxuICAgICAgICBpZiAoZXJyb3IpICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoZXJyb3IpKVxyXG4gICAgICAgIGlmIChwYXlsb2FkICE9PSB1bmRlZmluZWQpICByZXR1cm4gcmVzb2x2ZShwYXlsb2FkKVxyXG5cclxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdjc1Bvc3RNZXNzYWdlOiBObyBwYXlsb2FkIG5vciBlcnJvciBmb3VuZCcpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbXlXaW4uYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG5cclxuICAgIC8vIE5vdGU6XHJcbiAgICAvLyAqIGB0eXBlYCB0byBtYWtlIHN1cmUgd2UgY2hlY2sgb3VyIG93biBtc2cgb25seVxyXG4gICAgLy8gKiBgc2VjcmV0YCBpcyBmb3IgMSB0byAxIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIGEgbXNnIGFuZCBhIGxpc3RlbmVyXHJcbiAgICAvLyAqIGBwYXlsb2FkYCBpcyB0aGUgcmVhbCBkYXRhIHlvdSB3YW50IHRvIHNlbmRcclxuICAgIC8vICogYGlzUmVxdWVzdGAgaXMgdG8gbWFyayB0aGF0IGl0J3Mgbm90IGFuIGFuc3dlciB0byBzb21lIHByZXZpb3VzIHJlcXVlc3RcclxuICAgIHRhcmdldFdpbi5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIHNlY3JldCxcclxuICAgICAgcGF5bG9hZCxcclxuICAgICAgaXNSZXF1ZXN0OiB0cnVlXHJcbiAgICB9LCB0YXJnZXQpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoYGNzUG9zdE1lc3NhZ2U6IHRpbWVvdXQgJHt0aW1lb3V0fSBtc2ApKVxyXG4gICAgfSwgdGltZW91dClcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb25NZXNzYWdlID0gKHdpbiwgZm4pID0+IHtcclxuICBpZiAoIXdpbiB8fCAhd2luLmFkZEV2ZW50TGlzdGVuZXIgfHwgIXdpbi5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzT25NZXNzYWdlOiBub3QgYSB3aW5kb3cnLCB3aW4pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbk1zZyA9IChlKSA9PiB7XHJcbiAgICAvLyBOb3RlOiBvbmx5IHJlc3BvbmQgdG8gbXNnIHdpdGggYGlzUmVxdWVzdGAgYXMgdHJ1ZVxyXG4gICAgaWYgKGUgJiYgZS5kYXRhICYmIGUuZGF0YS50eXBlID09PSBUWVBFICYmIGUuZGF0YS5pc1JlcXVlc3QgJiYgZS5kYXRhLnNlY3JldCkge1xyXG4gICAgICBjb25zdCB0cGwgPSB7XHJcbiAgICAgICAgdHlwZTogVFlQRSxcclxuICAgICAgICBzZWNyZXQ6IGUuZGF0YS5zZWNyZXRcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTm90ZTogd3JhcHBlZCB3aXRoIGEgbmV3IFByb21pc2UgdG8gY2F0Y2ggYW55IGV4Y2VwdGlvbiBkdXJpbmcgdGhlIGV4ZWN1dGlvbiBvZiBmblxyXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IHJldDtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJldCA9IGZuKGUuZGF0YS5wYXlsb2FkLCB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogZS5zb3VyY2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm90ZTogb25seSByZXNvbHZlIGlmIHJldHVybmVkIHZhbHVlIGlzIG5vdCB1bmRlZmluZWQuIFdpdGggdGhpcywgd2UgY2FuIGhhdmUgbXVsdGlwbGVcclxuICAgICAgICAvLyBsaXN0ZW5lcnMgYWRkZWQgdG8gb25NZXNzYWdlLCBhbmQgZWFjaCBvbmUgdGFrZXMgY2FyZSBvZiB3aGF0IGl0IHJlYWxseSBjYXJlc1xyXG4gICAgICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihcclxuICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIC4uLnRwbCxcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzXHJcbiAgICAgICAgICB9LCAnKicpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIC4uLnRwbCxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlXHJcbiAgICAgICAgICB9LCAnKicpXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW4uYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG4gIHJldHVybiAoKSA9PiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG59XHJcbiIsImltcG9ydCB7IG9uTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi9pcGMvY3NfcG9zdG1lc3NhZ2UnXHJcblxyXG5jb25zdCBjbG9uZSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3Qgc3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICBpZiAoc3RyID09PSB1bmRlZmluZWQpICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKVxyXG59XHJcblxyXG5vbk1lc3NhZ2Uod2luZG93LCAoeyBjbWQsIGFyZ3MgfSkgPT4ge1xyXG4gIHN3aXRjaCAoY21kKSB7XHJcbiAgICBjYXNlICdJTkpFQ1RfUkVBRFknOiB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLWluamVjdGVkJywgJ2RvbmUnKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0lOSkVDVF9SVU5fRVZBTCc6IHtcclxuICAgICAgLy8gTm90ZTogY2xvbmUgdGhlIGRhdGEgaW4gY2FzZSBpdCBjb250YWlucyBzb21lIE9iamVjdCB0aGF0IGNhbid0IGJlIHBhc3NlZCB2aWEgcG9zdE1lc3NhZ2UgKGVnLiBIVE1MRG9jdW1lbnQpXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXHJcbiAgICAgIHJldHVybiB7IHJlc3VsdDogY2xvbmUod2luZG93LmV2YWwoYXJncy5jb2RlKSkgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==