(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["background_popup"],{

/***/ "./src/common/constant.js":
/*!********************************!*\
  !*** ./src/common/constant.js ***!
  \********************************/
/*! exports provided: APP_STATUS, INSPECTOR_STATUS, RECORDER_STATUS, PLAYER_STATUS, PLAYER_MODE, CONTENT_SCRIPT_STATUS, TEST_CASE_STATUS, LAST_SCREENSHOT_FILE_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_STATUS", function() { return APP_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSPECTOR_STATUS", function() { return INSPECTOR_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECORDER_STATUS", function() { return RECORDER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_STATUS", function() { return PLAYER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_MODE", function() { return PLAYER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_SCRIPT_STATUS", function() { return CONTENT_SCRIPT_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_CASE_STATUS", function() { return TEST_CASE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_SCREENSHOT_FILE_NAME", function() { return LAST_SCREENSHOT_FILE_NAME; });

var mk = function mk(list) {
  return list.reduce(function (prev, key) {
    prev[key] = key;
    return prev;
  }, {});
};

var APP_STATUS = mk(['NORMAL', 'INSPECTOR', 'RECORDER', 'PLAYER']);

var INSPECTOR_STATUS = mk(['PENDING', 'INSPECTING', 'STOPPED']);

var RECORDER_STATUS = mk(['PENDING', 'RECORDING', 'STOPPED']);

var PLAYER_STATUS = mk(['PLAYING', 'PAUSED', 'STOPPED']);

var PLAYER_MODE = mk(['TEST_CASE', 'TEST_SUITE']);

var CONTENT_SCRIPT_STATUS = mk(['NORMAL', 'RECORDING', 'INSPECTING', 'PLAYING']);

var TEST_CASE_STATUS = mk(['NORMAL', 'SUCCESS', 'ERROR']);

var LAST_SCREENSHOT_FILE_NAME = '__lastscreenshot';

/***/ }),

/***/ "./src/common/ipc/ipc_bg_cs.js":
/*!*************************************!*\
  !*** ./src/common/ipc/ipc_bg_cs.js ***!
  \*************************************/
/*! exports provided: openBgWithCs, csInit, bgInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBgWithCs", function() { return openBgWithCs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csInit", function() { return csInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgInit", function() { return bgInit; });
/* harmony import */ var _ipc_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ipc_promise */ "./src/common/ipc/ipc_promise.js");
/* harmony import */ var _ipc_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ipc_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ipc_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ipc_cache */ "./src/common/ipc/ipc_cache.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../log */ "./src/common/log.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/common/utils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };







var TIMEOUT = -1;

// Note: `cuid` is a kind of unique id so that you can create multiple
// ipc promise instances between the same two end points
var openBgWithCs = function openBgWithCs(cuid) {
  var wrap = function wrap(str) {
    return str + '_' + cuid;
  };

  // factory function to generate ipc promise instance for background
  // `tabId` is needed to identify which tab to send messages to
  var ipcBg = function ipcBg(tabId) {
    var bgListeners = [];

    // `sender` contains tab info. Background may need this to store the corresponding
    // relationship between tabId and ipc instance
    var addSender = function addSender(obj, sender) {
      if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return obj;

      obj.sender = sender;
      return obj;
    };

    _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.onMessage.addListener(function (req, sender, sendResponse) {
      bgListeners.forEach(function (listener) {
        return listener(req, sender, sendResponse);
      });
      return true;
    });

    return _ipc_promise__WEBPACK_IMPORTED_MODULE_0___default()({
      timeout: TIMEOUT,
      ask: function ask(uid, cmd, args) {
        _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.tabs.sendMessage(tabId, {
          type: wrap('BG_ASK_CS'),
          uid: uid,
          cmd: cmd,
          args: args
        });
      },
      onAnswer: function onAnswer(fn) {
        bgListeners.push(function (req, sender, response) {
          if (req.type !== wrap('CS_ANSWER_BG')) return;
          fn(req.uid, req.err, addSender(req.data, sender));
        });
      },
      onAsk: function onAsk(fn) {
        bgListeners.push(function (req, sender, response) {
          if (req.type !== wrap('CS_ASK_BG')) return;
          fn(req.uid, req.cmd, addSender(req.args, sender));
        });
      },
      answer: function answer(uid, err, data) {
        _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.tabs.sendMessage(tabId, {
          type: wrap('BG_ANSWER_CS'),
          uid: uid,
          err: err,
          data: data
        });
      },
      destroy: function destroy() {
        bgListeners = [];
      }
    });
  };

  // factory function to generate ipc promise for content scripts
  var ipcCs = function ipcCs(checkReady) {
    var csListeners = [];

    _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.onMessage.addListener(function (req, sender, sendResponse) {
      csListeners.forEach(function (listener) {
        return listener(req, sender, sendResponse);
      });
      return true;
    });

    return _ipc_promise__WEBPACK_IMPORTED_MODULE_0___default()({
      timeout: TIMEOUT,
      checkReady: checkReady,
      ask: function ask(uid, cmd, args) {
        // log('cs ask', uid, cmd, args)
        _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.sendMessage({
          type: wrap('CS_ASK_BG'),
          uid: uid,
          cmd: cmd,
          args: args
        });
      },
      onAnswer: function onAnswer(fn) {
        csListeners.push(function (req, sender, response) {
          if (req.type !== wrap('BG_ANSWER_CS')) return;
          fn(req.uid, req.err, req.data);
        });
      },
      onAsk: function onAsk(fn) {
        csListeners.push(function (req, sender, response) {
          if (req.type !== wrap('BG_ASK_CS')) return;
          fn(req.uid, req.cmd, req.args);
        });
      },
      answer: function answer(uid, err, data) {
        _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.sendMessage({
          type: wrap('CS_ANSWER_BG'),
          uid: uid,
          err: err,
          data: data
        });
      },
      destroy: function destroy() {
        csListeners = [];
      }
    });
  };

  return {
    ipcCs: ipcCs,
    ipcBg: ipcBg
  };
};

// Helper function to init ipc promise instance for content scripts
// The idea here is to send CONNECT message to background when initializing
var csInit = function csInit() {
  var cuid = '' + Math.floor(Math.random() * 10000);

  Object(_log__WEBPACK_IMPORTED_MODULE_3__["default"])('sending Connect...');

  // Note: Ext.extension.getURL is available in content script, but not injected js
  // We use it here to detect whether it is loaded by content script or injected
  // Calling runtime.sendMessage in injected js will cause an uncatchable exception
  if (!_web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.extension.getURL) return;

  // try this process in case we're in none-src frame
  try {
    // let connected     = false
    // const checkReady  = () => {
    //   if (connected)  return Promise.resolve(true)
    //   return Promise.reject(new Error('cs not connected with bg yet'))
    // }
    var reconnect = function reconnect() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["withTimeout"])(500, function () {
        return _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.sendMessage({
          type: 'RECONNECT'
        }).then(function (cuid) {
          Object(_log__WEBPACK_IMPORTED_MODULE_3__["default"])('got existing cuid', cuid);
          if (cuid) return openBgWithCs(cuid).ipcCs();
          throw new Error('failed to reconnect');
        });
      });
    };
    var connectBg = function connectBg() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["withTimeout"])(1000, function () {
        return _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.sendMessage({
          type: 'CONNECT',
          cuid: cuid
        }).then(function (done) {
          if (done) return openBgWithCs(cuid).ipcCs();
          throw new Error('not done');
        });
      });
    };
    var tryConnect = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["retry"])(connectBg, {
      shouldRetry: function shouldRetry() {
        return true;
      },
      retryInterval: 0,
      timeout: 5000
    });

    // Note: Strategy here
    // 1. Try to recover connection with background (get the existing cuid)
    // 2. If cuid not found, try to create new connection (cuid) with background
    // 3. Both of these two steps above are async, but this api itself is synchronous,
    //    so we have to create a mock API and return it first
    return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["mockAPIWith"])(function () {
      return reconnect().catch(function () {
        return tryConnect();
      }).catch(function (e) {
        _log__WEBPACK_IMPORTED_MODULE_3__["default"].error('Failed to create cs ipc');
        throw e;
      });
    }, {
      ask: function ask() {
        return Promise.reject(new Error('mock ask'));
      },
      onAsk: function onAsk() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _log__WEBPACK_IMPORTED_MODULE_3__["default"].apply(undefined, ['mock onAsk'].concat(args));
      },
      destroy: function destroy() {}
    }, ['ask']);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_3__["default"].error(e.stack);
  }
};

// Helper function to init ipc promise instance for background
// it accepts a `fn` function to handle CONNECT message from content scripts
var bgInit = function bgInit(fn) {
  _web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.onMessage.addListener(function (req, sender, sendResponse) {
    switch (req.type) {
      case 'CONNECT':
        {
          if (req.cuid) {
            fn(sender.tab.id, req.cuid, openBgWithCs(req.cuid).ipcBg(sender.tab.id));
            sendResponse(true);
          }
          break;
        }

      case 'RECONNECT':
        {
          var cuid = Object(_ipc_cache__WEBPACK_IMPORTED_MODULE_1__["getIpcCache"])().getCuid(sender.tab.id);

          if (cuid) {
            Object(_ipc_cache__WEBPACK_IMPORTED_MODULE_1__["getIpcCache"])().enable(sender.tab.id);
          }

          sendResponse(cuid || null);
          break;
        }
    }

    return true;
  });
};

/***/ }),

/***/ "./src/common/ipc/ipc_cache.js":
/*!*************************************!*\
  !*** ./src/common/ipc/ipc_cache.js ***!
  \*************************************/
/*! exports provided: IpcCache, getIpcCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcCache", function() { return IpcCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIpcCache", function() { return getIpcCache; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/common/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var IpcCache = function () {
  function IpcCache() {
    _classCallCheck(this, IpcCache);

    this.cache = {};
  }

  _createClass(IpcCache, [{
    key: 'get',
    value: function get(tabId) {
      var _this = this;

      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      var before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["until"])('ipc by tab id', function () {
        var ipcObj = _this.cache[tabId];
        var enabled = ipcObj && ipcObj.status === 1;
        var ipc = ipcObj && ipcObj.ipc;

        return {
          pass: enabled && !!ipc && (before === Infinity || before > ipcObj.timestamp),
          result: ipc
        };
      }, 100, timeout);
    }
  }, {
    key: 'set',
    value: function set(tabId, ipc, cuid) {
      this.cache[tabId] = {
        ipc: ipc,
        cuid: cuid,
        status: 1,
        timestamp: new Date().getTime()
      };
    }
  }, {
    key: 'setStatus',
    value: function setStatus(tabId, status) {
      var updateTimestamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var found = this.cache[tabId];
      if (!found) return false;

      found.status = status;

      if (updateTimestamp) {
        found.timestamp = new Date().getTime();
      }

      return true;
    }
  }, {
    key: 'enable',
    value: function enable(tabId) {
      return this.setStatus(tabId, 1, true);
    }
  }, {
    key: 'disable',
    value: function disable(tabId) {
      return this.setStatus(tabId, 0);
    }
  }, {
    key: 'getCuid',
    value: function getCuid(tabId) {
      var found = this.cache[tabId];
      if (!found) return null;
      return found.cuid;
    }
  }, {
    key: 'del',
    value: function del(tabId) {
      delete this.cache[tabId];
    }
  }]);

  return IpcCache;
}();

var instance = void 0;

function getIpcCache() {
  if (instance) return instance;
  instance = new IpcCache();
  return instance;
}

/***/ }),

/***/ "./src/common/ipc/ipc_promise.js":
/*!***************************************!*\
  !*** ./src/common/ipc/ipc_promise.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../utils */ "./src/common/utils.js"),
    retry = _require.retry;

var TO_BE_REMOVED = false;

var log = function log(msg) {
  if (console && console.log) console.log(msg);
};

var transformError = function transformError(err) {
  if (err instanceof Error) {
    return {
      isError: true,
      name: err.name,
      message: err.message,
      stack: err.stack
    };
  }

  return err;
};

// Note: The whole idea of ipc promise is about transforming the callback style
// ipc communication API to a Promise style
//
// eg. Orignial:    `chrome.runtime.sendMessage({}, () => {})`
//     ipcPromise:  `ipc.ask({}).then(() => {})`
//
// The benifit is
// 1. You can chain this promise with others
// 2. Create kind of connected channels between two ipc ends
//
// This is a generic interface to define a ipc promise utility
// All you need to declare is 4 functions
//
// e.g.
// ```
// ipcPromise({
//   ask: function (uid, cmd, args) { ... },
//   answer: function (uid, err, data) { ... },
//   onAsk: function (fn) { ... },
//   onAnswer: function (fn) { ... },
// })
// ```
function ipcPromise(options) {
  var ask = options.ask;
  var answer = options.answer;
  var timeout = options.timeout;
  var onAnswer = options.onAnswer;
  var onAsk = options.onAsk;
  var userDestroy = options.destroy;
  var checkReady = options.checkReady || function () {
    return Promise.resolve(true);
  };

  var askCache = {};
  var unhandledAsk = [];
  var markUnhandled = function markUnhandled(uid, cmd, args) {
    unhandledAsk.push({ uid: uid, cmd: cmd, args: args });
  };
  var handler = markUnhandled;

  var runHandlers = function runHandlers(handlers, cmd, args, resolve, reject) {
    for (var i = 0, len = handlers.length; i < len; i++) {
      var res;

      try {
        res = handlers[i](cmd, args);
      } catch (e) {
        return reject(e);
      }

      if (res !== undefined) {
        return resolve(res);
      }
    }
    // Note: DO NOT resolve anything if all handlers return undefined
  };

  // both for ask and unhandledAsk
  timeout = timeout || -1;

  onAnswer(function (uid, err, data) {
    if (uid && askCache[uid] === TO_BE_REMOVED) {
      delete askCache[uid];
      return;
    }

    if (!uid || !askCache[uid]) {
      // log('ipcPromise: response uid invalid: ' + uid);
      return;
    }

    var resolve = askCache[uid][0];
    var reject = askCache[uid][1];

    delete askCache[uid];

    if (err) {
      reject(transformError(err));
    } else {
      resolve(data);
    }
  });

  onAsk(function (uid, cmd, args) {
    if (timeout > 0) {
      setTimeout(function () {
        var found = unhandledAsk && unhandledAsk.find(function (item) {
          return item.uid === uid;
        });

        if (!found) return;

        answer(uid, new Error('ipcPromise: answer timeout ' + timeout + ' for cmd "' + cmd + '", args "' + args + '"'));
      }, timeout);
    }

    if (handler === markUnhandled) {
      markUnhandled(uid, cmd, args);
      return;
    }

    return new Promise(function (resolve, reject) {
      runHandlers(handler, cmd, args, resolve, reject);
    }).then(function (data) {
      // note: handler doens't handle the cmd => return undefined, should wait for timeout
      if (data === undefined) return markUnhandled(uid, cmd, args);
      answer(uid, null, data);
    }, function (err) {
      answer(uid, transformError(err), null);
    });
  });

  var wrapAsk = function wrapAsk(cmd, args, timeoutToOverride) {
    var uid = 'ipcp_' + new Date() * 1 + '_' + Math.round(Math.random() * 1000);
    var finalTimeout = timeoutToOverride || timeout;

    // Note: make it possible to disable timeout
    if (finalTimeout > 0) {
      setTimeout(function () {
        var reject;

        if (askCache && askCache[uid]) {
          reject = askCache[uid][1];
          askCache[uid] = TO_BE_REMOVED;
          reject(new Error('ipcPromise: onAsk timeout ' + finalTimeout + ' for cmd "' + cmd + '", args "' + args + '"'));
        }
      }, finalTimeout);
    }

    ask(uid, cmd, args || []);

    return new Promise(function (resolve, reject) {
      askCache[uid] = [resolve, reject];
    });
  };

  var wrapOnAsk = function wrapOnAsk(fn) {
    if (Array.isArray(handler)) {
      handler.push(fn);
    } else {
      handler = [fn];
    }

    var ps = unhandledAsk.map(function (task) {
      return new Promise(function (resolve, reject) {
        runHandlers(handler, task.cmd, task.args, resolve, reject);
      }).then(function (data) {
        // note: handler doens't handle the cmd => return undefined, should wait for timeout
        if (data === undefined) return;
        answer(task.uid, null, data);
        return task.uid;
      }, function (err) {
        answer(task.uid, err, null);
        return task.uid;
      });
    });

    Promise.all(ps).then(function (uids) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = uids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var uid = _step.value;

          if (uid === undefined) continue;

          var index = unhandledAsk.findIndex(function (item) {
            return item.uid === uid;
          });

          unhandledAsk.splice(index, 1);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  };

  var destroy = function destroy(noReject) {
    userDestroy && userDestroy();

    ask = null;
    answer = null;
    onAnswer = null;
    onAsk = null;
    unhandledAsk = null;

    if (!noReject) {
      Object.keys(askCache).forEach(function (uid) {
        var tuple = askCache[uid];
        var reject = tuple[1];
        reject && reject(new Error('IPC Promise has been Destroyed.'));
        delete askCache[uid];
      });
    }
  };

  var waitForReady = function waitForReady(checkReady, fn) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var makeSureReady = retry(checkReady, {
        shouldRetry: function shouldRetry() {
          return true;
        },
        retryInterval: 100,
        timeout: 5000
      });

      return makeSureReady().then(function () {
        return fn.apply(undefined, args);
      });
    };
  };

  return {
    ask: waitForReady(checkReady, wrapAsk),
    onAsk: wrapOnAsk,
    destroy: destroy
  };
}

ipcPromise.serialize = function (obj) {
  return {
    ask: function ask(cmd, args, timeout) {
      return obj.ask(cmd, JSON.stringify(args), timeout);
    },

    onAsk: function onAsk(fn) {
      return obj.onAsk(function (cmd, args) {
        return fn(cmd, JSON.parse(args));
      });
    },

    destroy: obj.destroy
  };
};

module.exports = ipcPromise;

/***/ }),

/***/ "./src/common/log.js":
/*!***************************!*\
  !*** ./src/common/log.js ***!
  \***************************/
/*! exports provided: logFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logFactory", function() { return logFactory; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var logFactory = function logFactory(enabled) {
  var isEnabled = !!enabled;

  var obj = ['log', 'info', 'warn', 'error'].reduce(function (prev, method) {
    prev[method] = function () {
      var _console;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (!isEnabled) return;
      (_console = console)[method].apply(_console, [new Date().toISOString(), ' - '].concat(args));
    };
    return prev;
  }, {});

  return _extends(obj.log, obj, {
    enable: function enable() {
      isEnabled = true;
    },
    disable: function disable() {
      isEnabled = false;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (logFactory("development" !== 'production'));

/***/ }),

/***/ "./src/common/screenshot_man.js":
/*!**************************************!*\
  !*** ./src/common/screenshot_man.js ***!
  \**************************************/
/*! exports provided: ScreenshotMan, getScreenshotMan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenshotMan", function() { return ScreenshotMan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenshotMan", function() { return getScreenshotMan; });
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





var ScreenshotMan = function (_FileMan) {
  _inherits(ScreenshotMan, _FileMan);

  function ScreenshotMan() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ScreenshotMan);

    return _possibleConstructorReturn(this, (ScreenshotMan.__proto__ || Object.getPrototypeOf(ScreenshotMan)).call(this, _extends({}, opts, { baseDir: 'screenshots' })));
  }

  _createClass(ScreenshotMan, [{
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
      if (!_web_extension__WEBPACK_IMPORTED_MODULE_2___default.a.isFirefox()) return Promise.resolve(_get(ScreenshotMan.prototype.__proto__ || Object.getPrototypeOf(ScreenshotMan.prototype), 'getLink', this).call(this, fileName) + '?' + new Date().getTime());

      // Note: Except for Chrome, the filesystem API we use is a polyfill from idb.filesystem.js
      // idb.filesystem.js works great but the only problem is that you can't use 'filesystem:' schema to retrieve that file
      // so here, we have to convert the file to data url
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].readFile(this.__filePath(fileName), 'DataURL');
    }
  }]);

  return ScreenshotMan;
}(_file_man__WEBPACK_IMPORTED_MODULE_1__["default"]);

var man = void 0;

function getScreenshotMan() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (opts) {
    man = new ScreenshotMan(opts);
  }

  if (!man) {
    throw new Error('screenshot manager not initialized');
  }

  return man;
}

/***/ }),

/***/ "./src/common/storage/ext_storage.js":
/*!*******************************************!*\
  !*** ./src/common/storage/ext_storage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var local = _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.storage.local;

/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get(key) {
    return local.get(key).then(function (obj) {
      return obj[key];
    });
  },

  set: function set(key, value) {
    return local.set(_defineProperty({}, key, value)).then(function () {
      return true;
    });
  },

  remove: function remove(key) {
    return local.remove(key).then(function () {
      return true;
    });
  },

  clear: function clear() {
    return local.clear().then(function () {
      return true;
    });
  },

  addListener: function addListener(fn) {
    _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.storage.onChanged.addListener(function (changes, areaName) {
      var list = Object.keys(changes).map(function (key) {
        return _extends({}, changes[key], { key: key });
      });
      fn(list);
    });
  }
});

/***/ }),

/***/ "./src/common/storage/index.js":
/*!*************************************!*\
  !*** ./src/common/storage/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ext_storage */ "./src/common/storage/ext_storage.js");



/* harmony default export */ __webpack_exports__["default"] = (_ext_storage__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaXBjL2lwY19iZ19jcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2lwYy9pcGNfY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pcGMvaXBjX3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zY3JlZW5zaG90X21hbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0b3JhZ2UvZXh0X3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdG9yYWdlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1rIiwibGlzdCIsInJlZHVjZSIsInByZXYiLCJrZXkiLCJBUFBfU1RBVFVTIiwiSU5TUEVDVE9SX1NUQVRVUyIsIlJFQ09SREVSX1NUQVRVUyIsIlBMQVlFUl9TVEFUVVMiLCJQTEFZRVJfTU9ERSIsIkNPTlRFTlRfU0NSSVBUX1NUQVRVUyIsIlRFU1RfQ0FTRV9TVEFUVVMiLCJMQVNUX1NDUkVFTlNIT1RfRklMRV9OQU1FIiwiVElNRU9VVCIsIm9wZW5CZ1dpdGhDcyIsImN1aWQiLCJ3cmFwIiwic3RyIiwiaXBjQmciLCJ0YWJJZCIsImJnTGlzdGVuZXJzIiwiYWRkU2VuZGVyIiwib2JqIiwic2VuZGVyIiwiRXh0IiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicmVxIiwic2VuZFJlc3BvbnNlIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwiaXBjUHJvbWlzZSIsInRpbWVvdXQiLCJhc2siLCJ1aWQiLCJjbWQiLCJhcmdzIiwidGFicyIsInNlbmRNZXNzYWdlIiwidHlwZSIsIm9uQW5zd2VyIiwiZm4iLCJwdXNoIiwicmVzcG9uc2UiLCJlcnIiLCJkYXRhIiwib25Bc2siLCJhbnN3ZXIiLCJkZXN0cm95IiwiaXBjQ3MiLCJjaGVja1JlYWR5IiwiY3NMaXN0ZW5lcnMiLCJjc0luaXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb2ciLCJleHRlbnNpb24iLCJnZXRVUkwiLCJyZWNvbm5lY3QiLCJ3aXRoVGltZW91dCIsInRoZW4iLCJFcnJvciIsImNvbm5lY3RCZyIsImRvbmUiLCJ0cnlDb25uZWN0IiwicmV0cnkiLCJzaG91bGRSZXRyeSIsInJldHJ5SW50ZXJ2YWwiLCJtb2NrQVBJV2l0aCIsImNhdGNoIiwiZXJyb3IiLCJlIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YWNrIiwiYmdJbml0IiwidGFiIiwiaWQiLCJnZXRJcGNDYWNoZSIsImdldEN1aWQiLCJlbmFibGUiLCJJcGNDYWNoZSIsImNhY2hlIiwiYmVmb3JlIiwiSW5maW5pdHkiLCJ1bnRpbCIsImlwY09iaiIsImVuYWJsZWQiLCJzdGF0dXMiLCJpcGMiLCJwYXNzIiwidGltZXN0YW1wIiwicmVzdWx0IiwiRGF0ZSIsImdldFRpbWUiLCJ1cGRhdGVUaW1lc3RhbXAiLCJmb3VuZCIsInNldFN0YXR1cyIsImluc3RhbmNlIiwicmVxdWlyZSIsIlRPX0JFX1JFTU9WRUQiLCJtc2ciLCJjb25zb2xlIiwidHJhbnNmb3JtRXJyb3IiLCJpc0Vycm9yIiwibmFtZSIsIm1lc3NhZ2UiLCJvcHRpb25zIiwidXNlckRlc3Ryb3kiLCJyZXNvbHZlIiwiYXNrQ2FjaGUiLCJ1bmhhbmRsZWRBc2siLCJtYXJrVW5oYW5kbGVkIiwiaGFuZGxlciIsInJ1bkhhbmRsZXJzIiwiaGFuZGxlcnMiLCJpIiwibGVuIiwibGVuZ3RoIiwicmVzIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsImZpbmQiLCJpdGVtIiwid3JhcEFzayIsInRpbWVvdXRUb092ZXJyaWRlIiwicm91bmQiLCJmaW5hbFRpbWVvdXQiLCJ3cmFwT25Bc2siLCJBcnJheSIsImlzQXJyYXkiLCJwcyIsIm1hcCIsInRhc2siLCJhbGwiLCJ1aWRzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJub1JlamVjdCIsIk9iamVjdCIsImtleXMiLCJ0dXBsZSIsIndhaXRGb3JSZWFkeSIsIm1ha2VTdXJlUmVhZHkiLCJzZXJpYWxpemUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwibG9nRmFjdG9yeSIsImlzRW5hYmxlZCIsIm1ldGhvZCIsInRvSVNPU3RyaW5nIiwiZGlzYWJsZSIsInByb2Nlc3MiLCJTY3JlZW5zaG90TWFuIiwib3B0cyIsImJhc2VEaXIiLCJmaWxlTmFtZSIsImJsb2IiLCJmcyIsIndyaXRlRmlsZSIsIl9fZmlsZVBhdGgiLCJyZWFkRmlsZSIsImlzRmlyZWZveCIsIkZpbGVNYW4iLCJtYW4iLCJnZXRTY3JlZW5zaG90TWFuIiwibG9jYWwiLCJzdG9yYWdlIiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJyZW1vdmUiLCJjbGVhciIsIm9uQ2hhbmdlZCIsImNoYW5nZXMiLCJhcmVhTmFtZSIsIkV4dFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsS0FBSyxTQUFMQSxFQUFLLENBQUNDLElBQUQ7QUFBQSxTQUFVQSxLQUFLQyxNQUFMLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDOUNELFNBQUtDLEdBQUwsSUFBWUEsR0FBWjtBQUNBLFdBQU9ELElBQVA7QUFDRCxHQUhvQixFQUdsQixFQUhrQixDQUFWO0FBQUEsQ0FBWDs7QUFLTyxJQUFNRSxhQUFhTCxHQUFHLENBQzNCLFFBRDJCLEVBRTNCLFdBRjJCLEVBRzNCLFVBSDJCLEVBSTNCLFFBSjJCLENBQUgsQ0FBbkI7O0FBT0EsSUFBTU0sbUJBQW1CTixHQUFHLENBQ2pDLFNBRGlDLEVBRWpDLFlBRmlDLEVBR2pDLFNBSGlDLENBQUgsQ0FBekI7O0FBTUEsSUFBTU8sa0JBQWtCUCxHQUFHLENBQ2hDLFNBRGdDLEVBRWhDLFdBRmdDLEVBR2hDLFNBSGdDLENBQUgsQ0FBeEI7O0FBTUEsSUFBTVEsZ0JBQWdCUixHQUFHLENBQzlCLFNBRDhCLEVBRTlC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QUFELEVBQVM7QUFDZixXQUFPd0ssTUFBTUssTUFBTixDQUFhN0ssR0FBYixFQUFrQjBELElBQWxCLENBQXVCO0FBQUEsYUFBTSxJQUFOO0FBQUEsS0FBdkIsQ0FBUDtBQUNELEdBWFk7O0FBYWJvSCxTQUFPLGlCQUFNO0FBQ1gsV0FBT04sTUFBTU0sS0FBTixHQUFjcEgsSUFBZCxDQUFtQjtBQUFBLGFBQU0sSUFBTjtBQUFBLEtBQW5CLENBQVA7QUFDRCxHQWZZOztBQWlCYm5DLGVBQWEscUJBQUNlLEVBQUQsRUFBUTtBQUNuQmxCLHlEQUFHQSxDQUFDcUosT0FBSixDQUFZTSxTQUFaLENBQXNCeEosV0FBdEIsQ0FBa0MsVUFBQ3lKLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUN2RCxVQUFNcEwsT0FBTzZJLE9BQU9DLElBQVAsQ0FBWXFDLE9BQVosRUFBcUI5QyxHQUFyQixDQUF5QjtBQUFBLDRCQUFhOEMsUUFBUWhMLEdBQVIsQ0FBYixJQUEyQkEsUUFBM0I7QUFBQSxPQUF6QixDQUFiO0FBQ0FzQyxTQUFHekMsSUFBSDtBQUNELEtBSEQ7QUFJRDtBQXRCWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVlcUwsbUhBQWYsRSIsImZpbGUiOiJiYWNrZ3JvdW5kX3BvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IG1rID0gKGxpc3QpID0+IGxpc3QucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcclxuICBwcmV2W2tleV0gPSBrZXk7XHJcbiAgcmV0dXJuIHByZXZcclxufSwge30pXHJcblxyXG5leHBvcnQgY29uc3QgQVBQX1NUQVRVUyA9IG1rKFtcclxuICAnTk9STUFMJyxcclxuICAnSU5TUEVDVE9SJyxcclxuICAnUkVDT1JERVInLFxyXG4gICdQTEFZRVInXHJcbl0pXHJcblxyXG5leHBvcnQgY29uc3QgSU5TUEVDVE9SX1NUQVRVUyA9IG1rKFtcclxuICAnUEVORElORycsXHJcbiAgJ0lOU1BFQ1RJTkcnLFxyXG4gICdTVE9QUEVEJ1xyXG5dKVxyXG5cclxuZXhwb3J0IGNvbnN0IFJFQ09SREVSX1NUQVRVUyA9IG1rKFtcclxuICAnUEVORElORycsXHJcbiAgJ1JFQ09SRElORycsXHJcbiAgJ1NUT1BQRUQnXHJcbl0pXHJcblxyXG5leHBvcnQgY29uc3QgUExBWUVSX1NUQVRVUyA9IG1rKFtcclxuICAnUExBWUlORycsXHJcbiAgJ1BBVVNFRCcsXHJcbiAgJ1NUT1BQRUQnXHJcbl0pXHJcblxyXG5leHBvcnQgY29uc3QgUExBWUVSX01PREUgPSBtayhbXHJcbiAgJ1RFU1RfQ0FTRScsXHJcbiAgJ1RFU1RfU1VJVEUnXHJcbl0pXHJcblxyXG5leHBvcnQgY29uc3QgQ09OVEVOVF9TQ1JJUFRfU1RBVFVTID0gbWsoW1xyXG4gICdOT1JNQUwnLFxyXG4gICdSRUNPUkRJTkcnLFxyXG4gICdJTlNQRUNUSU5HJyxcclxuICAnUExBWUlORydcclxuXSlcclxuXHJcbmV4cG9ydCBjb25zdCBURVNUX0NBU0VfU1RBVFVTID0gbWsoW1xyXG4gICdOT1JNQUwnLFxyXG4gICdTVUNDRVNTJyxcclxuICAnRVJST1InXHJcbl0pXHJcblxyXG5leHBvcnQgY29uc3QgTEFTVF9TQ1JFRU5TSE9UX0ZJTEVfTkFNRSA9ICdfX2xhc3RzY3JlZW5zaG90J1xyXG4iLCJpbXBvcnQgaXBjUHJvbWlzZSBmcm9tICcuL2lwY19wcm9taXNlJ1xyXG5pbXBvcnQgeyBnZXRJcGNDYWNoZSB9IGZyb20gJy4vaXBjX2NhY2hlJ1xyXG5pbXBvcnQgRXh0IGZyb20gJy4uL3dlYl9leHRlbnNpb24nXHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vbG9nJ1xyXG5pbXBvcnQgeyByZXRyeSwgd2l0aFRpbWVvdXQsIG1vY2tBUElXaXRoIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCBUSU1FT1VUID0gLTFcclxuXHJcbi8vIE5vdGU6IGBjdWlkYCBpcyBhIGtpbmQgb2YgdW5pcXVlIGlkIHNvIHRoYXQgeW91IGNhbiBjcmVhdGUgbXVsdGlwbGVcclxuLy8gaXBjIHByb21pc2UgaW5zdGFuY2VzIGJldHdlZW4gdGhlIHNhbWUgdHdvIGVuZCBwb2ludHNcclxuZXhwb3J0IGNvbnN0IG9wZW5CZ1dpdGhDcyA9IChjdWlkKSA9PiB7XHJcbiAgY29uc3Qgd3JhcCA9IChzdHIpID0+IHN0ciArICdfJyArIGN1aWRcclxuXHJcbiAgLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBpcGMgcHJvbWlzZSBpbnN0YW5jZSBmb3IgYmFja2dyb3VuZFxyXG4gIC8vIGB0YWJJZGAgaXMgbmVlZGVkIHRvIGlkZW50aWZ5IHdoaWNoIHRhYiB0byBzZW5kIG1lc3NhZ2VzIHRvXHJcbiAgY29uc3QgaXBjQmcgPSAodGFiSWQpID0+IHtcclxuICAgIGxldCBiZ0xpc3RlbmVycyA9IFtdXHJcblxyXG4gICAgLy8gYHNlbmRlcmAgY29udGFpbnMgdGFiIGluZm8uIEJhY2tncm91bmQgbWF5IG5lZWQgdGhpcyB0byBzdG9yZSB0aGUgY29ycmVzcG9uZGluZ1xyXG4gICAgLy8gcmVsYXRpb25zaGlwIGJldHdlZW4gdGFiSWQgYW5kIGlwYyBpbnN0YW5jZVxyXG4gICAgY29uc3QgYWRkU2VuZGVyID0gKG9iaiwgc2VuZGVyKSA9PiB7XHJcbiAgICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSAgcmV0dXJuIG9ialxyXG5cclxuICAgICAgb2JqLnNlbmRlciAgPSBzZW5kZXJcclxuICAgICAgcmV0dXJuIG9ialxyXG4gICAgfVxyXG5cclxuICAgIEV4dC5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gICAgICBiZ0xpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gaXBjUHJvbWlzZSh7XHJcbiAgICAgIHRpbWVvdXQ6IFRJTUVPVVQsXHJcbiAgICAgIGFzazogZnVuY3Rpb24gKHVpZCwgY21kLCBhcmdzKSB7XHJcbiAgICAgICAgRXh0LnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcclxuICAgICAgICAgIHR5cGU6IHdyYXAoJ0JHX0FTS19DUycpLFxyXG4gICAgICAgICAgdWlkLFxyXG4gICAgICAgICAgY21kLFxyXG4gICAgICAgICAgYXJnc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQW5zd2VyOiBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICBiZ0xpc3RlbmVycy5wdXNoKChyZXEsIHNlbmRlciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXEudHlwZSAhPT0gd3JhcCgnQ1NfQU5TV0VSX0JHJykpICByZXR1cm5cclxuICAgICAgICAgIGZuKHJlcS51aWQsIHJlcS5lcnIsIGFkZFNlbmRlcihyZXEuZGF0YSwgc2VuZGVyKSlcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvbkFzazogZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgYmdMaXN0ZW5lcnMucHVzaCgocmVxLCBzZW5kZXIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVxLnR5cGUgIT09IHdyYXAoJ0NTX0FTS19CRycpKSAgcmV0dXJuXHJcbiAgICAgICAgICBmbihyZXEudWlkLCByZXEuY21kLCBhZGRTZW5kZXIocmVxLmFyZ3MsIHNlbmRlcikpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgYW5zd2VyOiBmdW5jdGlvbiAodWlkLCBlcnIsIGRhdGEpIHtcclxuICAgICAgICBFeHQudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xyXG4gICAgICAgICAgdHlwZTogd3JhcCgnQkdfQU5TV0VSX0NTJyksXHJcbiAgICAgICAgICB1aWQsXHJcbiAgICAgICAgICBlcnIsXHJcbiAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGJnTGlzdGVuZXJzID0gW11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgaXBjIHByb21pc2UgZm9yIGNvbnRlbnQgc2NyaXB0c1xyXG4gIGNvbnN0IGlwY0NzID0gKGNoZWNrUmVhZHkpID0+IHtcclxuICAgIGxldCBjc0xpc3RlbmVycyA9IFtdXHJcblxyXG4gICAgRXh0LnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNzTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkpXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBpcGNQcm9taXNlKHtcclxuICAgICAgdGltZW91dDogVElNRU9VVCxcclxuICAgICAgY2hlY2tSZWFkeTogY2hlY2tSZWFkeSxcclxuICAgICAgYXNrOiBmdW5jdGlvbiAodWlkLCBjbWQsIGFyZ3MpIHtcclxuICAgICAgICAvLyBsb2coJ2NzIGFzaycsIHVpZCwgY21kLCBhcmdzKVxyXG4gICAgICAgIEV4dC5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgIHR5cGU6IHdyYXAoJ0NTX0FTS19CRycpLFxyXG4gICAgICAgICAgdWlkLFxyXG4gICAgICAgICAgY21kLFxyXG4gICAgICAgICAgYXJnc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQW5zd2VyOiBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICBjc0xpc3RlbmVycy5wdXNoKChyZXEsIHNlbmRlciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXEudHlwZSAhPT0gd3JhcCgnQkdfQU5TV0VSX0NTJykpICByZXR1cm5cclxuICAgICAgICAgIGZuKHJlcS51aWQsIHJlcS5lcnIsIHJlcS5kYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQXNrOiBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICBjc0xpc3RlbmVycy5wdXNoKChyZXEsIHNlbmRlciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXEudHlwZSAhPT0gd3JhcCgnQkdfQVNLX0NTJykpICByZXR1cm5cclxuICAgICAgICAgIGZuKHJlcS51aWQsIHJlcS5jbWQsIHJlcS5hcmdzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFuc3dlcjogZnVuY3Rpb24gKHVpZCwgZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgRXh0LnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgdHlwZTogd3JhcCgnQ1NfQU5TV0VSX0JHJyksXHJcbiAgICAgICAgICB1aWQsXHJcbiAgICAgICAgICBlcnIsXHJcbiAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNzTGlzdGVuZXJzID0gW11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpcGNDcyxcclxuICAgIGlwY0JnXHJcbiAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gaW5pdCBpcGMgcHJvbWlzZSBpbnN0YW5jZSBmb3IgY29udGVudCBzY3JpcHRzXHJcbi8vIFRoZSBpZGVhIGhlcmUgaXMgdG8gc2VuZCBDT05ORUNUIG1lc3NhZ2UgdG8gYmFja2dyb3VuZCB3aGVuIGluaXRpYWxpemluZ1xyXG5leHBvcnQgY29uc3QgY3NJbml0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1aWQgPSAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKVxyXG5cclxuICBsb2coJ3NlbmRpbmcgQ29ubmVjdC4uLicpXHJcblxyXG4gIC8vIE5vdGU6IEV4dC5leHRlbnNpb24uZ2V0VVJMIGlzIGF2YWlsYWJsZSBpbiBjb250ZW50IHNjcmlwdCwgYnV0IG5vdCBpbmplY3RlZCBqc1xyXG4gIC8vIFdlIHVzZSBpdCBoZXJlIHRvIGRldGVjdCB3aGV0aGVyIGl0IGlzIGxvYWRlZCBieSBjb250ZW50IHNjcmlwdCBvciBpbmplY3RlZFxyXG4gIC8vIENhbGxpbmcgcnVudGltZS5zZW5kTWVzc2FnZSBpbiBpbmplY3RlZCBqcyB3aWxsIGNhdXNlIGFuIHVuY2F0Y2hhYmxlIGV4Y2VwdGlvblxyXG4gIGlmICghRXh0LmV4dGVuc2lvbi5nZXRVUkwpIHJldHVyblxyXG5cclxuICAvLyB0cnkgdGhpcyBwcm9jZXNzIGluIGNhc2Ugd2UncmUgaW4gbm9uZS1zcmMgZnJhbWVcclxuICB0cnkge1xyXG4gICAgLy8gbGV0IGNvbm5lY3RlZCAgICAgPSBmYWxzZVxyXG4gICAgLy8gY29uc3QgY2hlY2tSZWFkeSAgPSAoKSA9PiB7XHJcbiAgICAvLyAgIGlmIChjb25uZWN0ZWQpICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXHJcbiAgICAvLyAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2NzIG5vdCBjb25uZWN0ZWQgd2l0aCBiZyB5ZXQnKSlcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IHJlY29ubmVjdCAgID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoNTAwLCAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEV4dC5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgIHR5cGU6ICdSRUNPTk5FQ1QnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihjdWlkID0+IHtcclxuICAgICAgICAgIGxvZygnZ290IGV4aXN0aW5nIGN1aWQnLCBjdWlkKVxyXG4gICAgICAgICAgaWYgKGN1aWQpIHJldHVybiBvcGVuQmdXaXRoQ3MoY3VpZCkuaXBjQ3MoKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gcmVjb25uZWN0JylcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29ubmVjdEJnICAgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB3aXRoVGltZW91dCgxMDAwLCAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEV4dC5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgIHR5cGU6ICdDT05ORUNUJyxcclxuICAgICAgICAgIGN1aWQ6IGN1aWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRvbmUgPT4ge1xyXG4gICAgICAgICAgaWYgKGRvbmUpIHJldHVybiBvcGVuQmdXaXRoQ3MoY3VpZCkuaXBjQ3MoKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgZG9uZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHRyeUNvbm5lY3QgPSByZXRyeShjb25uZWN0QmcsIHtcclxuICAgICAgc2hvdWxkUmV0cnk6ICgpID0+IHRydWUsXHJcbiAgICAgIHJldHJ5SW50ZXJ2YWw6IDAsXHJcbiAgICAgIHRpbWVvdXQ6IDUwMDBcclxuICAgIH0pXHJcblxyXG4gICAgLy8gTm90ZTogU3RyYXRlZ3kgaGVyZVxyXG4gICAgLy8gMS4gVHJ5IHRvIHJlY292ZXIgY29ubmVjdGlvbiB3aXRoIGJhY2tncm91bmQgKGdldCB0aGUgZXhpc3RpbmcgY3VpZClcclxuICAgIC8vIDIuIElmIGN1aWQgbm90IGZvdW5kLCB0cnkgdG8gY3JlYXRlIG5ldyBjb25uZWN0aW9uIChjdWlkKSB3aXRoIGJhY2tncm91bmRcclxuICAgIC8vIDMuIEJvdGggb2YgdGhlc2UgdHdvIHN0ZXBzIGFib3ZlIGFyZSBhc3luYywgYnV0IHRoaXMgYXBpIGl0c2VsZiBpcyBzeW5jaHJvbm91cyxcclxuICAgIC8vICAgIHNvIHdlIGhhdmUgdG8gY3JlYXRlIGEgbW9jayBBUEkgYW5kIHJldHVybiBpdCBmaXJzdFxyXG4gICAgcmV0dXJuIG1vY2tBUElXaXRoKFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlY29ubmVjdCgpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRyeUNvbm5lY3QoKSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBsb2cuZXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgY3MgaXBjJylcclxuICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYXNrOiAoKSA9PiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ21vY2sgYXNrJykpLFxyXG4gICAgICAgIG9uQXNrOiAoLi4uYXJncykgPT4geyBsb2coJ21vY2sgb25Bc2snLCAuLi5hcmdzKSB9LFxyXG4gICAgICAgIGRlc3Ryb3k6ICgpID0+IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIFsnYXNrJ11cclxuICAgIClcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBsb2cuZXJyb3IoZS5zdGFjaylcclxuICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBpbml0IGlwYyBwcm9taXNlIGluc3RhbmNlIGZvciBiYWNrZ3JvdW5kXHJcbi8vIGl0IGFjY2VwdHMgYSBgZm5gIGZ1bmN0aW9uIHRvIGhhbmRsZSBDT05ORUNUIG1lc3NhZ2UgZnJvbSBjb250ZW50IHNjcmlwdHNcclxuZXhwb3J0IGNvbnN0IGJnSW5pdCA9IChmbikgPT4ge1xyXG4gIEV4dC5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gICAgc3dpdGNoIChyZXEudHlwZSkge1xyXG4gICAgICBjYXNlICdDT05ORUNUJzoge1xyXG4gICAgICAgIGlmIChyZXEuY3VpZCkge1xyXG4gICAgICAgICAgZm4oc2VuZGVyLnRhYi5pZCwgcmVxLmN1aWQsIG9wZW5CZ1dpdGhDcyhyZXEuY3VpZCkuaXBjQmcoc2VuZGVyLnRhYi5pZCkpXHJcbiAgICAgICAgICBzZW5kUmVzcG9uc2UodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSAnUkVDT05ORUNUJzoge1xyXG4gICAgICAgIGNvbnN0IGN1aWQgPSBnZXRJcGNDYWNoZSgpLmdldEN1aWQoc2VuZGVyLnRhYi5pZClcclxuXHJcbiAgICAgICAgaWYgKGN1aWQpIHtcclxuICAgICAgICAgIGdldElwY0NhY2hlKCkuZW5hYmxlKHNlbmRlci50YWIuaWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZW5kUmVzcG9uc2UoY3VpZCB8fCBudWxsKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgdW50aWwgfSBmcm9tICcuLi91dGlscydcclxuXHJcbmV4cG9ydCBjbGFzcyBJcGNDYWNoZSB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy5jYWNoZSA9IHt9XHJcbiAgfVxyXG5cclxuICBnZXQgKHRhYklkLCB0aW1lb3V0ID0gMjAwMCwgYmVmb3JlID0gSW5maW5pdHkpIHtcclxuICAgIHJldHVybiB1bnRpbCgnaXBjIGJ5IHRhYiBpZCcsICgpID0+IHtcclxuICAgICAgY29uc3QgaXBjT2JqICA9IHRoaXMuY2FjaGVbdGFiSWRdXHJcbiAgICAgIGNvbnN0IGVuYWJsZWQgPSBpcGNPYmogJiYgaXBjT2JqLnN0YXR1cyA9PT0gMVxyXG4gICAgICBjb25zdCBpcGMgICAgID0gaXBjT2JqICYmIGlwY09iai5pcGNcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFzczogICBlbmFibGVkICYmICEhaXBjICYmIChiZWZvcmUgPT09IEluZmluaXR5IHx8IGJlZm9yZSA+IGlwY09iai50aW1lc3RhbXApLFxyXG4gICAgICAgIHJlc3VsdDogaXBjXHJcbiAgICAgIH1cclxuICAgIH0sIDEwMCwgdGltZW91dClcclxuICB9XHJcblxyXG4gIHNldCAodGFiSWQsIGlwYywgY3VpZCkge1xyXG4gICAgdGhpcy5jYWNoZVt0YWJJZF0gPSB7XHJcbiAgICAgIGlwYyxcclxuICAgICAgY3VpZCxcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0dXMgKHRhYklkLCBzdGF0dXMsIHVwZGF0ZVRpbWVzdGFtcCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBmb3VuZCA9IHRoaXMuY2FjaGVbdGFiSWRdXHJcbiAgICBpZiAoIWZvdW5kKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICBmb3VuZC5zdGF0dXMgPSBzdGF0dXNcclxuXHJcbiAgICBpZiAodXBkYXRlVGltZXN0YW1wKSB7XHJcbiAgICAgIGZvdW5kLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGVuYWJsZSAodGFiSWQpIHtcclxuICAgIHJldHVybiB0aGlzLnNldFN0YXR1cyh0YWJJZCwgMSwgdHJ1ZSlcclxuICB9XHJcblxyXG4gIGRpc2FibGUgKHRhYklkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0dXModGFiSWQsIDApXHJcbiAgfVxyXG5cclxuICBnZXRDdWlkICh0YWJJZCkge1xyXG4gICAgY29uc3QgZm91bmQgPSB0aGlzLmNhY2hlW3RhYklkXVxyXG4gICAgaWYgKCFmb3VuZCkgcmV0dXJuIG51bGxcclxuICAgIHJldHVybiBmb3VuZC5jdWlkXHJcbiAgfVxyXG5cclxuICBkZWwgKHRhYklkKSB7XHJcbiAgICBkZWxldGUgdGhpcy5jYWNoZVt0YWJJZF1cclxuICB9XHJcbn1cclxuXHJcbmxldCBpbnN0YW5jZVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElwY0NhY2hlICgpIHtcclxuICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZVxyXG4gIGluc3RhbmNlID0gbmV3IElwY0NhY2hlKClcclxuICByZXR1cm4gaW5zdGFuY2VcclxufVxyXG4iLCJjb25zdCB7IHJldHJ5IH0gPSByZXF1aXJlKCcuLi91dGlscycpXHJcblxyXG52YXIgVE9fQkVfUkVNT1ZFRCA9IGZhbHNlO1xyXG5cclxudmFyIGxvZyA9IGZ1bmN0aW9uIChtc2cpIHtcclxuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmxvZykgY29uc29sZS5sb2cobXNnKTtcclxufTtcclxuXHJcbnZhciB0cmFuc2Zvcm1FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcclxuICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzRXJyb3I6IHRydWUsXHJcbiAgICAgIG5hbWU6IGVyci5uYW1lLFxyXG4gICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcclxuICAgICAgc3RhY2s6IGVyci5zdGFja1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVyclxyXG59XHJcblxyXG4vLyBOb3RlOiBUaGUgd2hvbGUgaWRlYSBvZiBpcGMgcHJvbWlzZSBpcyBhYm91dCB0cmFuc2Zvcm1pbmcgdGhlIGNhbGxiYWNrIHN0eWxlXHJcbi8vIGlwYyBjb21tdW5pY2F0aW9uIEFQSSB0byBhIFByb21pc2Ugc3R5bGVcclxuLy9cclxuLy8gZWcuIE9yaWduaWFsOiAgICBgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe30sICgpID0+IHt9KWBcclxuLy8gICAgIGlwY1Byb21pc2U6ICBgaXBjLmFzayh7fSkudGhlbigoKSA9PiB7fSlgXHJcbi8vXHJcbi8vIFRoZSBiZW5pZml0IGlzXHJcbi8vIDEuIFlvdSBjYW4gY2hhaW4gdGhpcyBwcm9taXNlIHdpdGggb3RoZXJzXHJcbi8vIDIuIENyZWF0ZSBraW5kIG9mIGNvbm5lY3RlZCBjaGFubmVscyBiZXR3ZWVuIHR3byBpcGMgZW5kc1xyXG4vL1xyXG4vLyBUaGlzIGlzIGEgZ2VuZXJpYyBpbnRlcmZhY2UgdG8gZGVmaW5lIGEgaXBjIHByb21pc2UgdXRpbGl0eVxyXG4vLyBBbGwgeW91IG5lZWQgdG8gZGVjbGFyZSBpcyA0IGZ1bmN0aW9uc1xyXG4vL1xyXG4vLyBlLmcuXHJcbi8vIGBgYFxyXG4vLyBpcGNQcm9taXNlKHtcclxuLy8gICBhc2s6IGZ1bmN0aW9uICh1aWQsIGNtZCwgYXJncykgeyAuLi4gfSxcclxuLy8gICBhbnN3ZXI6IGZ1bmN0aW9uICh1aWQsIGVyciwgZGF0YSkgeyAuLi4gfSxcclxuLy8gICBvbkFzazogZnVuY3Rpb24gKGZuKSB7IC4uLiB9LFxyXG4vLyAgIG9uQW5zd2VyOiBmdW5jdGlvbiAoZm4pIHsgLi4uIH0sXHJcbi8vIH0pXHJcbi8vIGBgYFxyXG5mdW5jdGlvbiBpcGNQcm9taXNlIChvcHRpb25zKSB7XHJcbiAgdmFyIGFzayAgICAgICAgID0gb3B0aW9ucy5hc2tcclxuICB2YXIgYW5zd2VyICAgICAgPSBvcHRpb25zLmFuc3dlclxyXG4gIHZhciB0aW1lb3V0ICAgICA9IG9wdGlvbnMudGltZW91dFxyXG4gIHZhciBvbkFuc3dlciAgICA9IG9wdGlvbnMub25BbnN3ZXJcclxuICB2YXIgb25Bc2sgICAgICAgPSBvcHRpb25zLm9uQXNrXHJcbiAgdmFyIHVzZXJEZXN0cm95ID0gb3B0aW9ucy5kZXN0cm95XHJcbiAgdmFyIGNoZWNrUmVhZHkgID0gb3B0aW9ucy5jaGVja1JlYWR5IHx8IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKSB9XHJcblxyXG4gIHZhciBhc2tDYWNoZSA9IHt9XHJcbiAgdmFyIHVuaGFuZGxlZEFzayA9IFtdXHJcbiAgdmFyIG1hcmtVbmhhbmRsZWQgPSBmdW5jdGlvbiAodWlkLCBjbWQsIGFyZ3MpIHtcclxuICAgIHVuaGFuZGxlZEFzay5wdXNoKHsgdWlkOiB1aWQsIGNtZDogY21kLCBhcmdzOiBhcmdzIH0pO1xyXG4gIH1cclxuICB2YXIgaGFuZGxlciA9IG1hcmtVbmhhbmRsZWRcclxuXHJcbiAgdmFyIHJ1bkhhbmRsZXJzID0gKGhhbmRsZXJzLCBjbWQsIGFyZ3MsIHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIHZhciByZXNcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzID0gaGFuZGxlcnNbaV0oY21kLCBhcmdzKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIE5vdGU6IERPIE5PVCByZXNvbHZlIGFueXRoaW5nIGlmIGFsbCBoYW5kbGVycyByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvLyBib3RoIGZvciBhc2sgYW5kIHVuaGFuZGxlZEFza1xyXG4gIHRpbWVvdXQgPSB0aW1lb3V0IHx8IC0xO1xyXG5cclxuICBvbkFuc3dlcihmdW5jdGlvbiAodWlkLCBlcnIsIGRhdGEpIHtcclxuICAgIGlmICh1aWQgJiYgYXNrQ2FjaGVbdWlkXSA9PT0gVE9fQkVfUkVNT1ZFRCkge1xyXG4gICAgICBkZWxldGUgYXNrQ2FjaGVbdWlkXTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdWlkIHx8ICFhc2tDYWNoZVt1aWRdKSB7XHJcbiAgICAgIC8vIGxvZygnaXBjUHJvbWlzZTogcmVzcG9uc2UgdWlkIGludmFsaWQ6ICcgKyB1aWQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlc29sdmUgPSBhc2tDYWNoZVt1aWRdWzBdO1xyXG4gICAgdmFyIHJlamVjdCAgPSBhc2tDYWNoZVt1aWRdWzFdO1xyXG5cclxuICAgIGRlbGV0ZSBhc2tDYWNoZVt1aWRdO1xyXG5cclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmVqZWN0KHRyYW5zZm9ybUVycm9yKGVycikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgb25Bc2soZnVuY3Rpb24gKHVpZCwgY21kLCBhcmdzKSB7XHJcbiAgICBpZiAodGltZW91dCA+IDApIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZvdW5kID0gdW5oYW5kbGVkQXNrICYmIHVuaGFuZGxlZEFzay5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS51aWQgPT09IHVpZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFmb3VuZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBhbnN3ZXIodWlkLCBuZXcgRXJyb3IoJ2lwY1Byb21pc2U6IGFuc3dlciB0aW1lb3V0ICcgKyB0aW1lb3V0ICsgJyBmb3IgY21kIFwiJyArIGNtZCArICdcIiwgYXJncyBcIicgICsgYXJncyArICdcIicpKTtcclxuICAgICAgfSwgdGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhbmRsZXIgPT09IG1hcmtVbmhhbmRsZWQpIHtcclxuICAgICAgbWFya1VuaGFuZGxlZCh1aWQsIGNtZCwgYXJncyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBydW5IYW5kbGVycyhoYW5kbGVyLCBjbWQsIGFyZ3MsIHJlc29sdmUsIHJlamVjdClcclxuICAgIH0pXHJcbiAgICAudGhlbihcclxuICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyBub3RlOiBoYW5kbGVyIGRvZW5zJ3QgaGFuZGxlIHRoZSBjbWQgPT4gcmV0dXJuIHVuZGVmaW5lZCwgc2hvdWxkIHdhaXQgZm9yIHRpbWVvdXRcclxuICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSAgcmV0dXJuIG1hcmtVbmhhbmRsZWQodWlkLCBjbWQsIGFyZ3MpO1xyXG4gICAgICAgIGFuc3dlcih1aWQsIG51bGwsIGRhdGEpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpICB7IGFuc3dlcih1aWQsIHRyYW5zZm9ybUVycm9yKGVyciksIG51bGwpIH1cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciB3cmFwQXNrID0gZnVuY3Rpb24gKGNtZCwgYXJncywgdGltZW91dFRvT3ZlcnJpZGUpIHtcclxuICAgIHZhciB1aWQgPSAnaXBjcF8nICsgbmV3IERhdGUoKSAqIDEgKyAnXycgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcclxuICAgIHZhciBmaW5hbFRpbWVvdXQgPSB0aW1lb3V0VG9PdmVycmlkZSB8fCB0aW1lb3V0XHJcblxyXG4gICAgLy8gTm90ZTogbWFrZSBpdCBwb3NzaWJsZSB0byBkaXNhYmxlIHRpbWVvdXRcclxuICAgIGlmIChmaW5hbFRpbWVvdXQgPiAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWplY3Q7XHJcblxyXG4gICAgICAgIGlmIChhc2tDYWNoZSAmJiBhc2tDYWNoZVt1aWRdKSB7XHJcbiAgICAgICAgICByZWplY3QgPSBhc2tDYWNoZVt1aWRdWzFdO1xyXG4gICAgICAgICAgYXNrQ2FjaGVbdWlkXSA9IFRPX0JFX1JFTU9WRUQ7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdpcGNQcm9taXNlOiBvbkFzayB0aW1lb3V0ICcgKyBmaW5hbFRpbWVvdXQgKyAnIGZvciBjbWQgXCInICsgY21kICsgJ1wiLCBhcmdzIFwiJyAgKyBhcmdzICsgJ1wiJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZmluYWxUaW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBhc2sodWlkLCBjbWQsIGFyZ3MgfHwgW10pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIGFza0NhY2hlW3VpZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFyIHdyYXBPbkFzayA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlcikpIHtcclxuICAgICAgaGFuZGxlci5wdXNoKGZuKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGFuZGxlciA9IFtmbl1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHMgPSB1bmhhbmRsZWRBc2subWFwKGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgcnVuSGFuZGxlcnMoaGFuZGxlciwgdGFzay5jbWQsIHRhc2suYXJncywgcmVzb2x2ZSwgcmVqZWN0KVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgLy8gbm90ZTogaGFuZGxlciBkb2Vucyd0IGhhbmRsZSB0aGUgY21kID0+IHJldHVybiB1bmRlZmluZWQsIHNob3VsZCB3YWl0IGZvciB0aW1lb3V0XHJcbiAgICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSAgcmV0dXJuO1xyXG4gICAgICAgICAgYW5zd2VyKHRhc2sudWlkLCBudWxsLCBkYXRhKTtcclxuICAgICAgICAgIHJldHVybiB0YXNrLnVpZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgIGFuc3dlcih0YXNrLnVpZCwgZXJyLCBudWxsKTtcclxuICAgICAgICAgIHJldHVybiB0YXNrLnVpZDtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBQcm9taXNlLmFsbChwcykudGhlbihmdW5jdGlvbiAodWlkcykge1xyXG4gICAgICBmb3IgKHZhciB1aWQgb2YgdWlkcykge1xyXG4gICAgICAgIGlmICh1aWQgPT09IHVuZGVmaW5lZCkgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSB1bmhhbmRsZWRBc2suZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS51aWQgPT09IHVpZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdW5oYW5kbGVkQXNrLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhciBkZXN0cm95ID0gZnVuY3Rpb24gKG5vUmVqZWN0KSB7XHJcbiAgICB1c2VyRGVzdHJveSAmJiB1c2VyRGVzdHJveSgpO1xyXG5cclxuICAgIGFzayA9IG51bGw7XHJcbiAgICBhbnN3ZXIgPSBudWxsO1xyXG4gICAgb25BbnN3ZXIgPSBudWxsO1xyXG4gICAgb25Bc2sgPSBudWxsO1xyXG4gICAgdW5oYW5kbGVkQXNrID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIW5vUmVqZWN0KSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGFza0NhY2hlKS5mb3JFYWNoKGZ1bmN0aW9uICh1aWQpIHtcclxuICAgICAgICB2YXIgdHVwbGUgPSBhc2tDYWNoZVt1aWRdO1xyXG4gICAgICAgIHZhciByZWplY3QgPSB0dXBsZVsxXTtcclxuICAgICAgICByZWplY3QgJiYgcmVqZWN0KG5ldyBFcnJvcignSVBDIFByb21pc2UgaGFzIGJlZW4gRGVzdHJveWVkLicpKTtcclxuICAgICAgICBkZWxldGUgYXNrQ2FjaGVbdWlkXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIHdhaXRGb3JSZWFkeSA9IGZ1bmN0aW9uIChjaGVja1JlYWR5LCBmbikge1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1ha2VTdXJlUmVhZHkgPSByZXRyeShjaGVja1JlYWR5LCB7XHJcbiAgICAgICAgc2hvdWxkUmV0cnk6ICgpID0+IHRydWUsXHJcbiAgICAgICAgcmV0cnlJbnRlcnZhbDogMTAwLFxyXG4gICAgICAgIHRpbWVvdXQ6IDUwMDBcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiBtYWtlU3VyZVJlYWR5KCkudGhlbigoKSA9PiBmbiguLi5hcmdzKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhc2s6IHdhaXRGb3JSZWFkeShjaGVja1JlYWR5LCB3cmFwQXNrKSxcclxuICAgIG9uQXNrOiB3cmFwT25Bc2ssXHJcbiAgICBkZXN0cm95OiBkZXN0cm95XHJcbiAgfTtcclxufVxyXG5cclxuaXBjUHJvbWlzZS5zZXJpYWxpemUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFzazogZnVuY3Rpb24gKGNtZCwgYXJncywgdGltZW91dCkge1xyXG4gICAgICByZXR1cm4gb2JqLmFzayhjbWQsIEpTT04uc3RyaW5naWZ5KGFyZ3MpLCB0aW1lb3V0KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Bc2s6IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICByZXR1cm4gb2JqLm9uQXNrKGZ1bmN0aW9uIChjbWQsIGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gZm4oY21kLCBKU09OLnBhcnNlKGFyZ3MpKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3k6IG9iai5kZXN0cm95XHJcbiAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaXBjUHJvbWlzZTtcclxuIiwiXHJcbmV4cG9ydCBjb25zdCBsb2dGYWN0b3J5ID0gKGVuYWJsZWQpID0+IHtcclxuICBsZXQgaXNFbmFibGVkID0gISFlbmFibGVkXHJcblxyXG4gIGNvbnN0IG9iaiA9IFsnbG9nJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLnJlZHVjZSgocHJldiwgbWV0aG9kKSA9PiB7XHJcbiAgICBwcmV2W21ldGhvZF0gPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuXHJcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSgobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSwgJyAtICcsIC4uLmFyZ3MpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJldlxyXG4gIH0sIHt9KVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmoubG9nLCBvYmosIHtcclxuICAgIGVuYWJsZTogICAoKSA9PiB7IGlzRW5hYmxlZCA9IHRydWUgfSxcclxuICAgIGRpc2FibGU6ICAoKSA9PiB7IGlzRW5hYmxlZCA9IGZhbHNlIH1cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dGYWN0b3J5KFxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcclxuKVxyXG4iLCJpbXBvcnQgZnMgZnJvbSAnLi9maWxlc3lzdGVtJ1xyXG5pbXBvcnQgRmlsZU1hbiBmcm9tICcuL2ZpbGVfbWFuJ1xyXG5pbXBvcnQgRXh0IGZyb20gJy4vd2ViX2V4dGVuc2lvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5zaG90TWFuIGV4dGVuZHMgRmlsZU1hbiB7XHJcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xyXG4gICAgc3VwZXIoeyAuLi5vcHRzLCBiYXNlRGlyOiAnc2NyZWVuc2hvdHMnIH0pXHJcbiAgfVxyXG5cclxuICB3cml0ZSAoZmlsZU5hbWUsIGJsb2IpIHtcclxuICAgIHJldHVybiBmcy53cml0ZUZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lLCB0cnVlKSwgYmxvYilcclxuICB9XHJcblxyXG4gIHJlYWQgKGZpbGVOYW1lKSB7XHJcbiAgICByZXR1cm4gZnMucmVhZEZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSwgJ0FycmF5QnVmZmVyJylcclxuICB9XHJcblxyXG4gIHJlYWRBc0RhdGFVUkwgKGZpbGVOYW1lKSB7XHJcbiAgICByZXR1cm4gZnMucmVhZEZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSwgJ0RhdGFVUkwnKVxyXG4gIH1cclxuXHJcbiAgZ2V0TGluayAoZmlsZU5hbWUpIHtcclxuICAgIGlmICghRXh0LmlzRmlyZWZveCgpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN1cGVyLmdldExpbmsoZmlsZU5hbWUpICsgJz8nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXHJcblxyXG4gICAgLy8gTm90ZTogRXhjZXB0IGZvciBDaHJvbWUsIHRoZSBmaWxlc3lzdGVtIEFQSSB3ZSB1c2UgaXMgYSBwb2x5ZmlsbCBmcm9tIGlkYi5maWxlc3lzdGVtLmpzXHJcbiAgICAvLyBpZGIuZmlsZXN5c3RlbS5qcyB3b3JrcyBncmVhdCBidXQgdGhlIG9ubHkgcHJvYmxlbSBpcyB0aGF0IHlvdSBjYW4ndCB1c2UgJ2ZpbGVzeXN0ZW06JyBzY2hlbWEgdG8gcmV0cmlldmUgdGhhdCBmaWxlXHJcbiAgICAvLyBzbyBoZXJlLCB3ZSBoYXZlIHRvIGNvbnZlcnQgdGhlIGZpbGUgdG8gZGF0YSB1cmxcclxuICAgIHJldHVybiBmcy5yZWFkRmlsZSh0aGlzLl9fZmlsZVBhdGgoZmlsZU5hbWUpLCAnRGF0YVVSTCcpXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgbWFuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyZWVuc2hvdE1hbiAob3B0cyA9IHt9KSB7XHJcbiAgaWYgKG9wdHMpIHtcclxuICAgIG1hbiA9IG5ldyBTY3JlZW5zaG90TWFuKG9wdHMpXHJcbiAgfVxyXG5cclxuICBpZiAoIW1hbikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdzY3JlZW5zaG90IG1hbmFnZXIgbm90IGluaXRpYWxpemVkJylcclxuICB9XHJcblxyXG4gIHJldHVybiBtYW5cclxufVxyXG4iLCJpbXBvcnQgRXh0IGZyb20gJy4uL3dlYl9leHRlbnNpb24nXHJcblxyXG5jb25zdCBsb2NhbCA9IEV4dC5zdG9yYWdlLmxvY2FsXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0OiAoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gbG9jYWwuZ2V0KGtleSkudGhlbihvYmogPT4gb2JqW2tleV0pXHJcbiAgfSxcclxuXHJcbiAgc2V0OiAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsLnNldCh7W2tleV06IHZhbHVlfSkudGhlbigoKSA9PiB0cnVlKVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZTogKGtleSkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsLnJlbW92ZShrZXkpLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICB9LFxyXG5cclxuICBjbGVhcjogKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsLmNsZWFyKCkudGhlbigoKSA9PiB0cnVlKVxyXG4gIH0sXHJcblxyXG4gIGFkZExpc3RlbmVyOiAoZm4pID0+IHtcclxuICAgIEV4dC5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLm1hcChrZXkgPT4gKHsgLi4uY2hhbmdlc1trZXldLCBrZXkgfSkpXHJcbiAgICAgIGZuKGxpc3QpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IEV4dFN0b3JhZ2UgZnJvbSAnLi9leHRfc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dFN0b3JhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==