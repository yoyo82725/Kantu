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
/******/ 		"background": 0
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
/******/ 	deferredModules.push(["./src/ext/bg.js","vendor","background_csv_editor_popup_vision_editor","background_popup"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./imagesearch-testextension/src/ts/image-helper.ts":
/*!**********************************************************!*\
  !*** ./imagesearch-testextension/src/ts/image-helper.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_helper_1 = __webpack_require__(/*! ./math-helper */ "./imagesearch-testextension/src/ts/math-helper.ts");
/**
 * Implements common image operations
 */
class ImageHelper {
    /**
     * Loads an image asynchronously from given URL.
     * @param url Image URL
     * @returns Promise object
     */
    static loadImageAsync(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject();
            };
            img.src = url;
        });
    }
    /**
     * Loads an image data asynchronously from given URL.
     * @param url Image URL
     * @returns Promise object with ImageData
     */
    static loadImageDataAsync(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const img = yield this.loadImageAsync(url);
            return this.convertImageToImageData(img);
        });
    }
    /**
     * Converts image data to data URL.
     * @param imageData Input image data.
     * @returns Data URL.
     */
    static convertImageDataToDataUrl(imageData) {
        const canvas = document.createElement("canvas");
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Cannot acquire 2D context.");
        }
        context.putImageData(imageData, 0, 0);
        return canvas.toDataURL();
    }
    /**
     * Converts image element to image data.
     * @param img Input image element.
     * @returns Image data.
     */
    static convertImageToImageData(img) {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Cannot acquire 2D context.");
        }
        context.drawImage(img, 0, 0);
        return context.getImageData(0, 0, canvas.width, canvas.height);
    }
    /**
     * Adds some noise to input image.
     * @param imageData Input image data.
     * @returns Noise applied image data.
     */
    static distortImage(imageData) {
        const canvas = document.createElement("canvas");
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Cannot acquire 2D context.");
        }
        context.putImageData(imageData, 0, 0);
        const size = canvas.width * canvas.height;
        const iterations = Math.max(10, Math.floor(size * 0.01 * Math.random()));
        for (let i = 0; i < iterations; ++i) {
            const x = math_helper_1.MathHelper.randomRange(0, canvas.width);
            const y = math_helper_1.MathHelper.randomRange(0, canvas.height);
            const w = math_helper_1.MathHelper.randomRange(1, 20) / 10;
            const h = math_helper_1.MathHelper.randomRange(1, 20) / 10;
            context.fillStyle = math_helper_1.MathHelper.randomColor();
            context.fillRect(x, y, w, h);
        }
        return context.getImageData(0, 0, canvas.width, canvas.height);
    }
    /**
     * Gets a part of given image data.
     * @param imageData Input image data.
     * @param region Region in input image data.
     * @returns Image data in given region.
     */
    static getImageDataRegion(imageData, region) {
        const canvas = document.createElement("canvas");
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Cannot acquire 2D context.");
        }
        context.putImageData(imageData, 0, 0);
        return context.getImageData(region.left, region.top, region.right - region.left, region.bottom - region.top);
    }
}
exports.ImageHelper = ImageHelper;


/***/ }),

/***/ "./imagesearch-testextension/src/ts/job.ts":
/*!*************************************************!*\
  !*** ./imagesearch-testextension/src/ts/job.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Manages Job lifecycle.
 */
class JobFactory {
    /**
     * Creates a new job with a unique identifier.
     * @param type Job type.
     * @param args Job argument.
     * @returns Created job.
     */
    static create(type, args) {
        const id = JobFactory.nextId++;
        const job = {
            id,
            type,
            startTime: performance.now(),
            finishTime: 0,
            args,
            result: undefined
        };
        return job;
    }
    /**
     * Completes a job with given result.
     * @param request Previously started job.
     * @param result Job result.
     * @returns Job with result data.
     */
    static complete(request, result) {
        const job = {
            id: request.id,
            type: request.type,
            startTime: request.startTime,
            finishTime: performance.now(),
            args: request.args,
            result: result
        };
        return job;
    }
}
JobFactory.nextId = 1;
exports.JobFactory = JobFactory;


/***/ }),

/***/ "./imagesearch-testextension/src/ts/math-helper.ts":
/*!*********************************************************!*\
  !*** ./imagesearch-testextension/src/ts/math-helper.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implements common mathematics operations.
 */
class MathHelper {
    /**
     * Generates a random number within given range.
     * @param minValue Minimum value (including).
     * @param maxValue Maximum value (excluding).
     * @returns Generated random number.
     */
    static randomRange(minValue, maxValue) {
        return Math.floor(minValue + Math.random() * (maxValue - minValue));
    }
    /**
     * Generates random CSS color with alpha.
     * @returns Generated random color.
     */
    static randomColor() {
        const r = MathHelper.randomRange(0, 256);
        const g = MathHelper.randomRange(0, 256);
        const b = MathHelper.randomRange(0, 256);
        const a = MathHelper.randomRange(1, 256) / 256;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}
exports.MathHelper = MathHelper;


/***/ }),

/***/ "./imagesearch-testextension/src/ts/worker-connection.ts":
/*!***************************************************************!*\
  !*** ./imagesearch-testextension/src/ts/worker-connection.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const job_1 = __webpack_require__(/*! ./job */ "./imagesearch-testextension/src/ts/job.ts");
/**
 * Wrapper for enqueued jobs.
 */
class JobQueueItem {
    /**
     * Constructs a new instance.
     * @param type Job type.
     * @param data Job data.
     * @param callback Job completion callback.
     */
    constructor(type, data, callback) {
        this.jobObject = job_1.JobFactory.create(type, data);
        this.callback = callback;
    }
    /**
     * Underlying job object.
     */
    get job() {
        return this.jobObject;
    }
}
/**
 * Provides a connection between the worker and window.
 */
class WorkerConnection {
    /**
     * Constructs a new connection instance.
     * @param workerUrl Worker script URL
     * @param messageHandler Event handler delegate for generic messages.
     */
    constructor(workerUrl, messageHandler) {
        this.queue = new Array();
        this.messageHandler = messageHandler;
        this.worker = new Worker(workerUrl);
        this.worker.onmessage = this.handleWorkerCallback.bind(this);
    }
    /**
     * Worker event message handler
     * @param e Message event.
     */
    handleWorkerCallback(e) {
        const msg = e.data;
        if (msg.type === 1 /* Job */) {
            const job = msg.data;
            let callback = undefined;
            for (let i = 0; i < this.queue.length; ++i) {
                const entry = this.queue[i];
                if (entry.job.id === job.id) {
                    callback = entry.callback;
                    this.queue.splice(i, 1);
                    break;
                }
            }
            const elapsedTime = Math.max(0, job.finishTime - job.startTime);
            console.log(`Job #${job.id} completed in ${elapsedTime.toFixed(0)} ms (excluding callback overhead).`);
            if (callback) {
                callback(job.result);
            }
        }
        else {
            this.messageHandler(msg);
        }
    }
    /**
     * Sends a message to the worker.
     * @param msg Message to be sent.
     */
    postMessage(msg) {
        this.worker.postMessage(msg);
    }
    /**
     * Enqueues a job with a callback for sending the worker.
     * @param type Job type.
     * @param data Job data.
     * @param callback Job completion callback.
     */
    postJob(type, data, callback) {
        const item = new JobQueueItem(type, data, callback);
        this.queue.push(item);
        this.postMessage({
            type: 1 /* Job */,
            data: item.job
        });
    }
    /**
     * Enqueues a job with a Promise object for sending the worker.
     * @param type Job type.
     * @param data Job data.
     * @returns Promise object for job completion in worker.
     */
    postJobAsync(type, data) {
        const self = this;
        return new Promise((resolve, reject) => {
            self.postJob(type, data, (result) => {
                resolve(result);
            });
        });
    }
}
exports.WorkerConnection = WorkerConnection;


/***/ }),

/***/ "./src/common/capture_screenshot.js":
/*!******************************************!*\
  !*** ./src/common/capture_screenshot.js ***!
  \******************************************/
/*! exports provided: imageSizeFromDataURI, getScreenshotRatio, scaleDataURI, captureScreen, createCaptureScreenWithCachedScreenshotRatio, saveScreen, captureFullScreen, captureScreenInSelectionSimple, captureScreenInSelection, captureClientAPI, saveFullScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageSizeFromDataURI", function() { return imageSizeFromDataURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenshotRatio", function() { return getScreenshotRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleDataURI", function() { return scaleDataURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureScreen", function() { return captureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCaptureScreenWithCachedScreenshotRatio", function() { return createCaptureScreenWithCachedScreenshotRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveScreen", function() { return saveScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureFullScreen", function() { return captureFullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureScreenInSelectionSimple", function() { return captureScreenInSelectionSimple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureScreenInSelection", function() { return captureScreenInSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureClientAPI", function() { return captureClientAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFullScreen", function() { return saveFullScreen; });
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filesystem */ "./src/common/filesystem.js");
/* harmony import */ var _common_screenshot_man__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/screenshot_man */ "./src/common/screenshot_man.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






function getActiveTabInfo() {
  return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.getLastFocused().then(function (win) {
    return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ active: true, windowId: win.id }).then(function (tabs) {
      return tabs[0];
    });
  });
}

function imageSizeFromDataURI(dataURI) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.src = dataURI;
  });
}

function getScreenshotRatio(dataURI, tabId, devicePixelRatio) {
  return Promise.all([imageSizeFromDataURI(dataURI), _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId)]).then(function (tuple) {
    var _tuple = _slicedToArray(tuple, 2),
        size = _tuple[0],
        tab = _tuple[1];

    return tab.width * devicePixelRatio / size.width;
  });
}

function scaleDataURI(dataURI, scale) {
  if (scale === 1) return Promise.resolve(dataURI);

  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.src = dataURI;
  }).then(function (img) {
    var canvas = createCanvas(img.naturalWidth, img.naturalHeight, scale);
    return drawOnCanvas({
      canvas: canvas,
      dataURI: dataURI,
      x: 0,
      y: 0,
      width: img.naturalWidth * scale,
      height: img.naturalHeight * scale
    }).then(function () {
      return canvas.toDataURL();
    });
  });
}

function captureScreen(tabId, presetScreenshotRatio) {
  var is2ndArgFunction = typeof presetScreenshotRatio === 'function';
  var hasScreenshotRatio = presetScreenshotRatio && !is2ndArgFunction;
  var pDataURI = _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.captureVisibleTab(null, { format: 'png' });
  var pRatio = hasScreenshotRatio ? Promise.resolve(presetScreenshotRatio) : pDataURI.then(function (dataURI) {
    return getScreenshotRatio(dataURI, tabId, window.devicePixelRatio);
  });

  return Promise.all([pDataURI, pRatio]).then(function (tuple) {
    var _tuple2 = _slicedToArray(tuple, 2),
        dataURI = _tuple2[0],
        screenshotRatio = _tuple2[1];
    // Note: leak the info about screenshotRatio on purpose


    if (!hasScreenshotRatio && is2ndArgFunction) presetScreenshotRatio(screenshotRatio);
    if (screenshotRatio === 1) return dataURI;
    return scaleDataURI(dataURI, screenshotRatio);
  });
}

function createCaptureScreenWithCachedScreenshotRatio() {
  var screenshotRatio = void 0;

  return function (tabId) {
    return captureScreen(tabId, screenshotRatio || function (ratio) {
      screenshotRatio = ratio;
    });
  };
}

function captureScreenBlob(tabId) {
  return captureScreen(tabId).then(_common_utils__WEBPACK_IMPORTED_MODULE_3__["dataURItoBlob"]);
}

function saveScreen(tabId, fileName) {
  return captureScreenBlob(tabId).then(function (screenBlob) {
    return Object(_common_screenshot_man__WEBPACK_IMPORTED_MODULE_2__["getScreenshotMan"])().overwrite(fileName, screenBlob).then(function (url) {
      return {
        url: url,
        fileName: fileName
      };
    });
  });
}

function pCompose(list) {
  return list.reduce(function (prev, fn) {
    return prev.then(fn);
  }, Promise.resolve());
}

function getAllScrollOffsets(_ref) {
  var pageWidth = _ref.pageWidth,
      pageHeight = _ref.pageHeight,
      windowWidth = _ref.windowWidth,
      windowHeight = _ref.windowHeight,
      _ref$topPadding = _ref.topPadding,
      topPadding = _ref$topPadding === undefined ? 150 : _ref$topPadding;

  var topPad = windowHeight > topPadding ? topPadding : 0;
  var xStep = windowWidth;
  var yStep = windowHeight - topPad;
  var result = [];

  // Note: bottom comes first so that when we render those screenshots one by one to the final canvas,
  // those at top will overwrite top padding part of those at bottom, it is useful if that page has some fixed header
  for (var y = pageHeight - windowHeight; y > -1 * yStep; y -= yStep) {
    for (var x = 0; x < pageWidth; x += xStep) {
      result.push({ x: x, y: y });
    }
  }

  return result;
}

function getAllScrollOffsetsForRect(_ref2, _ref3) {
  var x = _ref2.x,
      y = _ref2.y,
      width = _ref2.width,
      height = _ref2.height;
  var pageWidth = _ref3.pageWidth,
      pageHeight = _ref3.pageHeight,
      windowWidth = _ref3.windowWidth,
      windowHeight = _ref3.windowHeight,
      originalX = _ref3.originalX,
      originalY = _ref3.originalY,
      _ref3$topPadding = _ref3.topPadding,
      topPadding = _ref3$topPadding === undefined ? 150 : _ref3$topPadding;

  var topPad = windowHeight > topPadding ? topPadding : 0;
  var xStep = windowWidth;
  var yStep = windowHeight - topPad;
  var result = [];

  for (var sy = y + height - windowHeight; sy > y - yStep; sy -= yStep) {
    for (var sx = x; sx < x + width; sx += xStep) {
      result.push({ x: sx, y: sy });
    }
  }

  if (result.length === 0) {
    result.push({ x: x, y: y + height - windowHeight });
  }

  return result;
}

function createCanvas(width, height) {
  var pixelRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var canvas = document.createElement('canvas');
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  return canvas;
}

function drawOnCanvas(_ref4) {
  var canvas = _ref4.canvas,
      dataURI = _ref4.dataURI,
      x = _ref4.x,
      y = _ref4.y,
      width = _ref4.width,
      height = _ref4.height;

  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height, x, y, width || image.width, height || image.height);
      resolve({
        x: x,
        y: y,
        width: width,
        height: height
      });
    };

    image.src = dataURI;
  });
}

function withPageInfo(startCapture, endCapture, callback) {
  return startCapture().then(function (pageInfo) {
    // Note: in case sender contains any non-serializable data
    delete pageInfo.sender;

    return callback(pageInfo).then(function (result) {
      endCapture(pageInfo);
      return result;
    });
  });
}

function captureFullScreen(tabId) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : captureClientAPI,
      startCapture = _ref5.startCapture,
      scrollPage = _ref5.scrollPage,
      endCapture = _ref5.endCapture;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var opts = _extends({
    blob: false
  }, options);

  return withPageInfo(startCapture, endCapture, function (pageInfo) {
    var devicePixelRatio = pageInfo.devicePixelRatio;

    // Note: cut down page width and height
    // reference: https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element/11585939#11585939
    var maxSide = Math.floor(32767 / devicePixelRatio);
    pageInfo.pageWidth = Math.min(maxSide, pageInfo.pageWidth);
    pageInfo.pageHeight = Math.min(maxSide, pageInfo.pageHeight);

    var captureScreen = createCaptureScreenWithCachedScreenshotRatio();
    var canvas = createCanvas(pageInfo.pageWidth, pageInfo.pageHeight, devicePixelRatio);
    var scrollOffsets = getAllScrollOffsets(pageInfo);
    var todos = scrollOffsets.map(function (offset, i) {
      return function () {
        return scrollPage(offset, { index: i, total: scrollOffsets.length }).then(function (realOffset) {
          return captureScreen(tabId).then(function (dataURI) {
            return drawOnCanvas({
              canvas: canvas,
              dataURI: dataURI,
              x: realOffset.x * devicePixelRatio,
              y: realOffset.y * devicePixelRatio,
              width: pageInfo.windowWidth * devicePixelRatio,
              height: pageInfo.windowHeight * devicePixelRatio
            });
          });
        });
      };
    });
    var convert = opts.blob ? _common_utils__WEBPACK_IMPORTED_MODULE_3__["dataURItoBlob"] : function (x) {
      return x;
    };

    return pCompose(todos).then(function () {
      return convert(canvas.toDataURL());
    });
  });
}

function captureScreenInSelectionSimple(tabId, _ref6) {
  var rect = _ref6.rect,
      devicePixelRatio = _ref6.devicePixelRatio;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var opts = _extends({
    blob: false
  }, options);
  var convert = opts.blob ? _common_utils__WEBPACK_IMPORTED_MODULE_3__["dataURItoBlob"] : function (x) {
    return x;
  };
  var ratio = devicePixelRatio;
  var canvas = createCanvas(rect.width, rect.height, ratio);

  return captureScreen(tabId).then(function (dataURI) {
    return drawOnCanvas({
      canvas: canvas,
      dataURI: dataURI,
      x: -1 * rect.x * devicePixelRatio,
      y: -1 * rect.y * devicePixelRatio
    });
  }).then(function () {
    return convert(canvas.toDataURL());
  });
}

function captureScreenInSelection(tabId, _ref7, _ref8) {
  var rect = _ref7.rect,
      devicePixelRatio = _ref7.devicePixelRatio;
  var startCapture = _ref8.startCapture,
      scrollPage = _ref8.scrollPage,
      endCapture = _ref8.endCapture;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var opts = _extends({
    blob: false
  }, options);
  var convert = opts.blob ? _common_utils__WEBPACK_IMPORTED_MODULE_3__["dataURItoBlob"] : function (x) {
    return x;
  };
  var ratio = devicePixelRatio;

  return withPageInfo(startCapture, endCapture, function (pageInfo) {
    var maxSide = Math.floor(32767 / ratio);
    pageInfo.pageWidth = Math.min(maxSide, pageInfo.pageWidth);
    pageInfo.pageHeight = Math.min(maxSide, pageInfo.pageHeight);

    var captureScreen = createCaptureScreenWithCachedScreenshotRatio();
    var canvas = createCanvas(rect.width, rect.height, ratio);
    var scrollOffsets = getAllScrollOffsetsForRect(rect, pageInfo);
    var todos = scrollOffsets.map(function (offset, i) {
      return function () {
        return scrollPage(offset, { index: i, total: scrollOffsets.length }).then(function (realOffset) {
          return captureScreen(tabId).then(function (dataURI) {
            return drawOnCanvas({
              canvas: canvas,
              dataURI: dataURI,
              x: (realOffset.x - rect.x) * devicePixelRatio,
              y: (realOffset.y - rect.y) * devicePixelRatio,
              width: pageInfo.windowWidth * devicePixelRatio,
              height: pageInfo.windowHeight * devicePixelRatio
            });
          });
        });
      };
    });

    return pCompose(todos).then(function () {
      return convert(canvas.toDataURL());
    });
  });
}

var captureClientAPI = {
  getPageInfo: function getPageInfo() {
    var body = document.body;
    var widths = [document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth, body ? body.scrollWidth : 0, body ? body.offsetWidth : 0];
    var heights = [document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, body ? body.scrollHeight : 0, body ? body.offsetHeight : 0];

    var data = {
      pageWidth: Math.max.apply(Math, widths),
      pageHeight: Math.max.apply(Math, heights),
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      hasBody: !!body,
      originalX: window.scrollX,
      originalY: window.scrollY,
      originalOverflowStyle: document.documentElement.style.overflow,
      originalBodyOverflowYStyle: body && body.style.overflowY,
      devicePixelRatio: window.devicePixelRatio
    };

    return data;
  },
  startCapture: function startCapture() {
    var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref9$hideScrollbar = _ref9.hideScrollbar,
        hideScrollbar = _ref9$hideScrollbar === undefined ? true : _ref9$hideScrollbar;

    var body = document.body;
    var pageInfo = captureClientAPI.getPageInfo();

    // Note: try to make pages with bad scrolling work, e.g., ones with
    // `body { overflow-y: scroll; }` can break `window.scrollTo`
    if (body) {
      body.style.overflowY = 'visible';
    }

    if (hideScrollbar) {
      // Disable all scrollbars. We'll restore the scrollbar state when we're done
      // taking the screenshots.
      document.documentElement.style.overflow = 'hidden';
    }

    return Promise.resolve(pageInfo);
  },
  scrollPage: function scrollPage(_ref10) {
    var x = _ref10.x,
        y = _ref10.y;

    window.scrollTo(x, y);

    return Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["delay"])(function () {
      return {
        x: window.scrollX,
        y: window.scrollY
      };
    }, 100);
  },
  endCapture: function endCapture(pageInfo) {
    var originalX = pageInfo.originalX,
        originalY = pageInfo.originalY,
        hasBody = pageInfo.hasBody,
        originalOverflowStyle = pageInfo.originalOverflowStyle,
        originalBodyOverflowYStyle = pageInfo.originalBodyOverflowYStyle;


    if (hasBody) {
      document.body.style.overflowY = originalBodyOverflowYStyle;
    }

    document.documentElement.style.overflow = originalOverflowStyle;
    window.scrollTo(originalX, originalY);

    return Promise.resolve(true);
  }
};

function saveFullScreen(tabId, fileName, clientAPI) {
  return captureFullScreen(tabId, clientAPI, { blob: true }).then(function (screenBlob) {
    return Object(_common_screenshot_man__WEBPACK_IMPORTED_MODULE_2__["getScreenshotMan"])().overwrite(fileName, screenBlob).then(function (url) {
      return {
        url: url,
        fileName: fileName
      };
    });
  });
}

/***/ }),

/***/ "./src/common/clipboard.js":
/*!*********************************!*\
  !*** ./src/common/clipboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

var setStyle = function setStyle($dom, obj) {
  Object.keys(obj).forEach(function (key) {
    $dom.style[key] = obj[key];
  });
};

var createTextarea = function createTextarea() {
  // [legacy code] Used to use textarea for copy/paste
  //
  // const $input = document.createElement('textarea')
  // // Note: Firefox requires 'contenteditable' attribute, even on textarea element
  // // without it, execCommand('paste') won't work in Firefox
  // // reference: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#Browser-specific_considerations_2
  // $input.setAttribute('contenteditable', true)
  // $input.id = 'clipboard_textarea'

  // Note: 2018-09-01, Firefox 61.0.2: Only able to paste clipboard into textarea for one time.
  // Switching to contenteditable div works fine
  var $input = document.createElement('div');
  $input.setAttribute('contenteditable', true);
  $input.id = 'clipboard_textarea';

  setStyle($input, {
    position: 'aboslute',
    top: '-9999px',
    left: '-9999px'
  });

  document.body.appendChild($input);
  return $input;
};

var getTextArea = function getTextArea() {
  var $el = document.getElementById('clipboard_textarea');
  if ($el) return $el;
  return createTextarea();
};

var withInput = function withInput(fn) {
  var $input = getTextArea();
  var ret = void 0;

  try {
    ret = fn($input);
  } catch (e) {
    console.error(e);
  } finally {
    $input.innerHTML = '';
  }

  return ret;
};

var api = {
  set: function set(text) {
    withInput(function ($input) {
      $input.innerText = text;
      $input.focus();
      document.execCommand('selectAll', false, null);
      document.execCommand('copy');
    });
  },
  get: function get() {
    return withInput(function ($input) {
      $input.blur();
      $input.focus();

      var res = document.execCommand('paste');

      if (res) {
        return $input.innerText;
      }

      return 'no luck';
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/common/debugger.js":
/*!********************************!*\
  !*** ./src/common/debugger.js ***!
  \********************************/
/*! exports provided: withDebugger, setFileInputFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDebugger", function() { return withDebugger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFileInputFiles", function() { return setFileInputFiles; });
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/common/utils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var PROTOCOL_VERSION = '1.2';
var ClEANUP_TIMEOUT = 0;

var withDebugger = function () {
  var state = {
    connected: null,
    cleanupTimer: null
  };

  var setState = function setState(obj) {
    _extends(state, obj);
  };

  var cancelCleanup = function cancelCleanup() {
    if (state.cleanupTimer) clearTimeout(state.cleanupTimer);
    setState({ cleanupTimer: null });
  };

  var isSameDebuggee = function isSameDebuggee(a, b) {
    return a && b && a.tabId && b.tabId && a.tabId === b.tabId;
  };

  return function (debuggee, fn) {
    var attach = function attach(debuggee) {
      if (isSameDebuggee(state.connected, debuggee)) {
        cancelCleanup();
        return Promise.resolve();
      }

      return detach(state.connected).then(function () {
        return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.attach(debuggee, PROTOCOL_VERSION);
      }).then(function () {
        return setState({ connected: debuggee });
      });
    };
    var detach = function detach(debuggee) {
      if (!debuggee) return Promise.resolve();

      return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.detach(debuggee).then(function () {
        if (state.cleanupTimer) clearTimeout(state.cleanupTimer);

        setState({
          connected: null,
          cleanupTimer: null
        });
      }, function (e) {
        return console.error('error in detach', e.stack);
      });
    };
    var scheduleDetach = function scheduleDetach() {
      var timer = setTimeout(function () {
        return detach(debuggee);
      }, ClEANUP_TIMEOUT);
      setState({ cleanupTimer: timer });
    };
    var sendCommand = function sendCommand(cmd, params) {
      return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.sendCommand(debuggee, cmd, params);
    };
    var onEvent = function onEvent(callback) {
      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.onEvent.addListener(callback);
    };
    var onDetach = function onDetach(callback) {
      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.debugger.onDetach.addListener(callback);
    };

    return new Promise(function (resolve, reject) {
      var done = function done(error, result) {
        scheduleDetach();

        if (error) return reject(error);else return resolve(result);
      };

      return attach(debuggee).then(function () {
        fn({ sendCommand: sendCommand, onEvent: onEvent, onDetach: onDetach, done: done });
      }, function (e) {
        return reject(e);
      });
    });
  };
}();

var __getDocument = function __getDocument(_ref) {
  var sendCommand = _ref.sendCommand,
      done = _ref.done;
  return function () {
    return sendCommand('DOM.getDocument').then(function (obj) {
      return obj.root;
    });
  };
};

var __querySelector = function __querySelector(_ref2) {
  var sendCommand = _ref2.sendCommand,
      done = _ref2.done;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["partial"])(function (selector, nodeId) {
    return sendCommand('DOM.querySelector', { nodeId: nodeId, selector: selector }).then(function (res) {
      return res && res.nodeId;
    });
  });
};

var __setFileInputFiles = function __setFileInputFiles(_ref3) {
  var sendCommand = _ref3.sendCommand,
      done = _ref3.done;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["partial"])(function (files, nodeId) {
    return sendCommand('DOM.setFileInputFiles', { nodeId: nodeId, files: files }).then(function () {
      return true;
    });
  });
};

var setFileInputFiles = function setFileInputFiles(_ref4) {
  var tabId = _ref4.tabId,
      selector = _ref4.selector,
      files = _ref4.files;

  return withDebugger({ tabId: tabId }, function (api) {
    var go = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["composePromiseFn"])(__setFileInputFiles(api)(files), __querySelector(api)(selector), function (node) {
      return node.nodeId;
    }, __getDocument(api));

    return go().then(function (res) {
      return api.done(null, res);
    });
  });
};

/***/ }),

/***/ "./src/common/download_man.js":
/*!************************************!*\
  !*** ./src/common/download_man.js ***!
  \************************************/
/*! exports provided: DownloadMan, getDownloadMan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadMan", function() { return DownloadMan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownloadMan", function() { return getDownloadMan; });
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./src/common/log.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/common/utils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var DownloadMan = function () {
  function DownloadMan() {
    var _this = this;

    _classCallCheck(this, DownloadMan);

    this.activeDownloads = [];
    this.eventsBound = false;

    this.filterActiveDownloads = function (predicate) {
      _this.activeDownloads = _this.activeDownloads.filter(predicate);

      if (_this.activeDownloads.length === 0) {
        _this.unbindEvents();
      }
    };

    this.createdListener = function (downloadItem) {
      if (!_this.isActive()) return;
      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])('download on created', downloadItem);

      var item = _this.activeDownloads.find(function (item) {
        return !item.id;
      });
      if (!item) return;

      // Note: 3 things to do on download created
      // 1. record download id
      // 2. Start timer for timeout
      // 3. Start interval timer for count down message
      _extends(item, _extends({
        id: downloadItem.id
      }, !item.wait && item.timeout > 0 ? {} : {
        timeoutTimer: setTimeout(function () {
          item.reject(new Error('download timeout ' + item.timeout / 1000 + 's'));
          _this.filterActiveDownloads(function (d) {
            return item.uid !== d.uid;
          });
        }, item.timeout),

        countDownTimer: setInterval(function () {
          if (!_this.countDownHandler) return;

          var _item$past = item.past,
              past = _item$past === undefined ? 0 : _item$past;

          var newPast = past + 1000;

          _this.countDownHandler({
            total: item.timeout,
            past: newPast
          });
          _extends(item, { past: newPast });
        }, 1000)
      }));
    };

    this.changedListener = function (downloadDelta) {
      if (!_this.isActive()) return;
      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])('download on changed', downloadDelta);

      var item = _this.findById(downloadDelta.id);
      if (!item) return;

      if (downloadDelta.state) {
        var fn = function fn() {};
        var done = false;

        switch (downloadDelta.state.current) {
          case 'complete':
            fn = function fn() {
              return item.resolve(true);
            };
            done = true;
            break;

          case 'interrupted':
            fn = function fn() {
              return item.reject(new Error('download interrupted'));
            };
            done = true;
            break;
        }

        // Remove this download item from our todo list if it's done
        if (done) {
          clearTimeout(item.timeoutTimer);
          clearInterval(item.countDownTimer);
          _this.filterActiveDownloads(function (item) {
            return item.id !== downloadDelta.id;
          });
        }

        // resolve or reject that promise object
        fn();
      }
    };

    this.determineFileNameListener = function (downloadItem, suggest) {
      if (!_this.isActive()) return;

      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])('download on determine', downloadItem);

      var item = _this.findById(downloadItem.id);
      if (!item) return;

      var tmpName = item.fileName.trim();
      var fileName = tmpName === '' || tmpName === '*' ? null : tmpName;

      if (fileName) {
        return suggest({
          filename: fileName,
          conflictAction: 'uniquify'
        });
      }
    };
  }

  _createClass(DownloadMan, [{
    key: 'isActive',


    /*
     * Private methods
     */

    value: function isActive() {
      return this.activeDownloads.length > 0;
    }
  }, {
    key: 'findById',
    value: function findById(id) {
      return this.activeDownloads.find(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      if (this.eventsBound) return;

      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onCreated.addListener(this.createdListener);
      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onChanged.addListener(this.changedListener);

      // Note: only chrome supports api `chrome.downloads.onDeterminingFilename`
      if (_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename) {
        _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename.addListener(this.determineFileNameListener);
      }

      this.eventsBound = true;
    }
  }, {
    key: 'unbindEvents',
    value: function unbindEvents() {
      if (!this.eventsBound) return;

      if (_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onCreated.removeListener) {
        _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onCreated.removeListener(this.createdListener);
      }

      if (_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onChanged.removeListener) {
        _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onChanged.removeListener(this.changedListener);
      }

      if (_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename && _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename.removeListener) {
        _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.downloads.onDeterminingFilename.removeListener(this.determineFileNameListener);
      }

      this.eventsBound = false;
    }

    /*
     * Public methods
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.activeDownloads.forEach(function (item) {
        if (item.timeoutTimer) clearTimeout(item.timeoutTimer);
        if (item.countDownTimer) clearInterval(item.countDownTimer);
      });
      this.activeDownloads = [];
      this.unbindEvents();
    }
  }, {
    key: 'prepareDownload',
    value: function prepareDownload(fileName) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var downloadToCreate = this.activeDownloads.find(function (item) {
        return !item.id;
      });
      if (downloadToCreate) throw new Error('only one not-created download allowed at a time');

      this.bindEvents();

      var opts = _extends({
        timeoutForStart: 10000,
        timeout: 60000,
        wait: false
      }, options);

      var promise = new Promise(function (resolve, reject) {
        var uid = Math.floor(Math.random() * 1000) + new Date() * 1;

        // Note: we need to cache promise object, so have to wait for next tick
        setTimeout(function () {
          _this2.activeDownloads.push({
            uid: uid,
            resolve: resolve,
            reject: reject,
            fileName: fileName,
            promise: promise,
            timeoutForStart: opts.timeoutForStart,
            timeout: opts.timeout,
            wait: opts.wait
          });
        }, 0);
      });

      return promise;
    }
  }, {
    key: 'waitForDownloadIfAny',
    value: function waitForDownloadIfAny() {
      var _this3 = this;

      var downloadToCreate = this.activeDownloads.find(function (item) {
        return !item.id;
      });
      if (downloadToCreate) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["until"])('download start', function () {
          return {
            pass: !!downloadToCreate.id,
            result: true
          };
        }, 50, downloadToCreate.timeoutForStart).then(function () {
          return _this3.waitForDownloadIfAny();
        });
      }

      // Note: check if id exists, because it means this download item is created
      var downloadToComplete = this.activeDownloads.find(function (item) {
        return item.wait && item.id;
      });
      if (!downloadToComplete) return Promise.resolve(true);
      return downloadToComplete.promise.then(function () {
        return _this3.waitForDownloadIfAny();
      });
    }
  }, {
    key: 'onCountDown',
    value: function onCountDown(fn) {
      this.countDownHandler = fn;
    }
  }, {
    key: 'hasPendingDownload',
    value: function hasPendingDownload() {
      var downloadToCreate = this.activeDownloads.find(function (item) {
        return !item.id;
      });
      return !!downloadToCreate;
    }
  }]);

  return DownloadMan;
}();

var getDownloadMan = function () {
  var instance = void 0;

  return function () {
    if (!instance) {
      instance = new DownloadMan();
    }

    return instance;
  };
}();

/***/ }),

/***/ "./src/common/imagesearch/adaptor.ts":
/*!*******************************************!*\
  !*** ./src/common/imagesearch/adaptor.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const worker_connection_1 = __webpack_require__(/*! ../../../imagesearch-testextension/src/ts/worker-connection */ "./imagesearch-testextension/src/ts/worker-connection.ts");
const image_helper_1 = __webpack_require__(/*! ../../../imagesearch-testextension/src/ts/image-helper */ "./imagesearch-testextension/src/ts/image-helper.ts");
let isModuleReady = false;
let worker = new worker_connection_1.WorkerConnection("/worker.js", workerMessageHandler);
/**
 * Listens regular messages from the worker.
 * @param msg Received worker message.
 */
function workerMessageHandler(msg) {
    switch (msg.type) {
        case 0 /* Init */:
            isModuleReady = true;
            break;
        default:
            console.error("Unsupported worker message: ", msg);
            break;
    }
}
/**
 * Schedules a template matching task for the web worker.
 * @param image Image where the search will be running.
 * @param pattern Image which will searched.
 * @param minSimilarity Minimum similarity score to accept a match.
 * @param allowSizeVariation Allows size variation during image search.
 * @returns Promise object with matches regions.
 */
function postImageSearchAsync(image, pattern, minSimilarity, allowSizeVariation) {
    const jobData = {
        image,
        pattern,
        options: {
            minSimilarity,
            allowSizeVariation,
            enableGreenPinkBoxes: false,
            requireGreenPinkBoxes: false
        }
    };
    return worker.postJobAsync(2 /* ImageSearch */, jobData);
}
function searchImageBestOne(req) {
    return searchImage(req)
        .then(results => results[0]);
}
exports.searchImageBestOne = searchImageBestOne;
function searchImage(req) {
    if (!isModuleReady) {
        throw new Error('Module is not ready yet.');
    }
    const minSimilarity = Math.max(0.1, Math.min(1.0, req.minSimilarity));
    const { allowSizeVariation } = req;
    return Promise.all([
        image_helper_1.ImageHelper.loadImageDataAsync(req.targetImageUrl),
        image_helper_1.ImageHelper.loadImageDataAsync(req.patternImageUrl)
    ])
        .then(([screenshotImageData, patternImageData]) => {
        return postImageSearchAsync(screenshotImageData, patternImageData, minSimilarity, allowSizeVariation)
            .then(result => {
            const { containsGreenPinkBoxes, errorCode, regions } = result;
            return regions.map(r => ({
                left: r.matchedRect.left / req.scaleDownRatio + req.offsetX,
                top: r.matchedRect.top / req.scaleDownRatio + req.offsetY,
                width: r.matchedRect.width / req.scaleDownRatio,
                height: r.matchedRect.height / req.scaleDownRatio,
                score: r.score
            }));
        });
    });
}
exports.searchImage = searchImage;


/***/ }),

/***/ "./src/common/resize_window.js":
/*!*************************************!*\
  !*** ./src/common/resize_window.js ***!
  \*************************************/
/*! exports provided: resizeWindow, resizeViewport, resizeViewportOfTab, getWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeWindow", function() { return resizeWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeViewport", function() { return resizeViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeViewportOfTab", function() { return resizeViewportOfTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowSize", function() { return getWindowSize; });
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/common/utils.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ "./src/common/log.js");




var calcOffset = function calcOffset(screenTotal, screenOffset, oldOffset, oldSize, newSize) {
  var preferStart = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  var isCloserToStart = preferStart || oldOffset < screenTotal - oldOffset - oldSize;

  Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])('calcOffset', screenTotal, oldOffset, oldSize, newSize, preferStart);

  if (isCloserToStart) {
    return oldOffset;

    // Note: comment out a smarter position for now
    // if (newSize < oldSize) {
    //   return oldOffset
    // }

    // if (newSize < oldSize + oldOffset - screenOffset) {
    //   return oldSize + oldOffset - newSize
    // }

    // return screenOffset
  }

  if (!isCloserToStart) {
    var oldEndOffset = screenOffset + screenTotal - oldOffset - oldSize;

    return oldSize + oldOffset - newSize;

    // Note: comment out a smarter position for now
    // if (newSize < oldSize) {
    //   return oldSize + oldOffset - newSize
    // }

    // if (newSize < oldSize + oldEndOffset) {
    //   return oldOffset
    // }

    // return screenOffset + screenTotal - newSize
  }
};

// winSize.width
// winSize.height
function resizeWindow(winId, winSize) {
  var sw = screen.availWidth;
  var sh = screen.availHeight;
  var sl = screen.availLeft;
  var st = screen.availTop;

  return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(winId).then(function (win) {
    var lastLeft = win.left;
    var lastTop = win.top;
    var lastWidth = win.width;
    var lastHeight = win.height;

    return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(winId, winSize).then(function (win) {
      var left = calcOffset(sw, sl, lastLeft, lastWidth, win.width);
      var top = calcOffset(sh, st, lastTop, lastHeight, win.height, true);

      _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(winId, { left: left, top: top });

      var actual = {
        width: win.width,
        height: win.height
      };

      return {
        actual: actual,
        desired: winSize,
        diff: ['width', 'height'].filter(function (key) {
          return actual[key] !== winSize[key];
        })
      };
    });
  });
}

// pureViewportSize.width
// pureViewportSize.height
// referenceViewportWindowSize.window.width
// referenceViewportWindowSize.window.height
// referenceViewportWindowSize.viewport.width
// referenceViewportWindowSize.viewport.height
function resizeViewport(winId, pureViewportSize) {
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var maxRetry = 2;
  Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])('resizeViewport, ROUND', count);

  return getWindowSize(winId).then(function (currentSize) {
    Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])('currentSize!!!!');
    logWindowSize(currentSize);

    var dx = currentSize.window.width - currentSize.viewport.width;
    var dy = currentSize.window.height - currentSize.viewport.height;

    var newWinSize = {
      width: dx + pureViewportSize.width,
      height: dy + pureViewportSize.height
    };

    Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])('size set to', newWinSize);
    return resizeWindow(winId, newWinSize).then(function () {
      return getWindowSize(winId);
    }).then(function (newSize) {
      Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])('newSize!!!!');
      logWindowSize(newSize);

      var data = {
        actual: newSize.viewport,
        desired: pureViewportSize,
        diff: ['width', 'height'].filter(function (key) {
          return newSize.viewport[key] !== pureViewportSize[key];
        })
      };

      if (data.diff.length === 0 || count >= maxRetry) {
        return data;
      }

      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, 0).then(function () {
        return resizeViewport(winId, pureViewportSize, count + 1);
      });
    });
  });
}

function resizeViewportOfTab(tabId, pureViewportSize) {
  return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId).then(function (tab) {
    return resizeViewport(tab.windowId, pureViewportSize);
  });
}

// size.window.width
// size.window.height
// size.window.left
// size.window.top
// size.viewport.wdith
// size.viewport.height
function getWindowSize(winId) {
  return _web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(winId, { populate: true }).then(function (win) {
    var tab = win.tabs.find(function (tab) {
      return tab.active;
    });

    return {
      window: {
        width: win.width,
        height: win.height,
        left: win.left,
        top: win.top
      },
      viewport: {
        width: tab.width,
        height: tab.height
      }
    };
  });
}

function logWindowSize(winSize) {
  Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])(winSize.window, winSize.viewport);
  Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])('dx = ', winSize.window.width - winSize.viewport.width);
  Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])('dy = ', winSize.window.height - winSize.viewport.height);
}

/***/ }),

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

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_web_extension__WEBPACK_IMPORTED_MODULE_0__);


var platform = _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.isFirefox() ? 'firefox' : 'chrome';

/* harmony default export */ __webpack_exports__["default"] = ({
  urlAfterUpgrade: 'https://a9t9.com/kantu/web-automation/' + platform + '/whatsnew',
  urlAfterInstall: 'https://a9t9.com/kantu/web-automation/' + platform + '/welcome',
  urlAfterUninstall: 'https://a9t9.com/kantu/web-automation/' + platform + '/why'
});

/***/ }),

/***/ "./src/ext/bg.js":
/*!***********************!*\
  !*** ./src/ext/bg.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _common_web_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_web_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_ipc_ipc_bg_cs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/ipc/ipc_bg_cs */ "./src/common/ipc/ipc_bg_cs.js");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constant */ "./src/common/constant.js");
/* harmony import */ var _common_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/log */ "./src/common/log.js");
/* harmony import */ var _common_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/clipboard */ "./src/common/clipboard.js");
/* harmony import */ var _common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/capture_screenshot */ "./src/common/capture_screenshot.js");
/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/storage */ "./src/common/storage/index.js");
/* harmony import */ var _common_debugger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/debugger */ "./src/common/debugger.js");
/* harmony import */ var _common_download_man__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/download_man */ "./src/common/download_man.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var _common_screenshot_man__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/screenshot_man */ "./src/common/screenshot_man.js");
/* harmony import */ var _common_imagesearch_adaptor_ts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/imagesearch/adaptor.ts */ "./src/common/imagesearch/adaptor.ts");
/* harmony import */ var _common_imagesearch_adaptor_ts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_imagesearch_adaptor_ts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_vision_man__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/vision_man */ "./src/common/vision_man.js");
/* harmony import */ var _common_resize_window__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/resize_window */ "./src/common/resize_window.js");
/* harmony import */ var _common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/ipc/ipc_cache */ "./src/common/ipc/ipc_cache.js");
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


















// Note: in Ubuntu, you have to take some delay after activating some tab, otherwise there are chances
// Chrome still think the panel is the window you want to take screenshot, and weird enough in Ubuntu,
// You can't take screenshot of tabs with 'chrome-extension://' schema, even if it's your own extension
var SCREENSHOT_DELAY = /Linux/i.test(window.navigator.userAgent) ? 200 : 0;

var state = {
  status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].NORMAL,
  tabIds: {
    lastInspect: null,
    lastRecord: null,
    toInspect: null,
    firstRecord: null,
    toRecord: null,
    lastPlay: null,
    firstPlay: null,
    toPlay: null,
    panel: null
  },
  pullback: false,
  // Note: heartBeatSecret = -1, means no heart beat available, and panel should not retry on heart beat lost
  heartBeatSecret: 0
};

var updateHeartBeatSecret = function updateHeartBeatSecret() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled;

  if (disabled) {
    state.heartBeatSecret = -1;
  } else {
    state.heartBeatSecret = (Math.max(0, state.heartBeatSecret) + 1) % 10000;
  }
};

var createTab = function createTab(url) {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.create({ url: url, active: true });
};

var activateTab = function activateTab(tabId, focusWindow) {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId).then(function (tab) {
    var p = focusWindow ? _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(tab.windowId, { focused: true }) : Promise.resolve();

    return p.then(function () {
      return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.update(tab.id, { active: true });
    }).then(function () {
      return tab;
    });
  });
};

var getTab = function getTab(tabId) {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId);
};

// Generate function to get ipc based on tabIdName and some error message
var genGetTabIpc = function genGetTabIpc(tabIdName, purpose) {
  return function () {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

    var tabId = state.tabIds[tabIdName];

    if (!tabId) {
      return Promise.reject(new Error('No tab for ' + purpose + ' yet'));
    }

    return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId).then(function (tab) {
      if (!tab) {
        throw new Error('The ' + purpose + ' tab seems to be closed');
      }

      return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tab.id, timeout, before).catch(function (e) {
        throw new Error('No ipc available for the ' + purpose + ' tab');
      });
    });
  };
};

var getRecordTabIpc = genGetTabIpc('toRecord', 'recording');

var getPlayTabIpc = genGetTabIpc('toPlay', 'playing commands');

var getPanelTabIpc = genGetTabIpc('panel', 'dashboard');

// Get the current tab for play, if url provided, it will be loaded in the tab
var getPlayTab = function getPlayTab(url) {
  // Note: update error message to be more user friendly. But the original message is kept as comment
  // const theError  = new Error('Either a played tab or a url must be provided to start playing')
  var theError = new Error('No connection to browser tab');

  Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('getPlayTab', url, state.tabIds.toPlay);

  var createOne = function createOne(url) {
    if (!url) throw theError;

    return createTab(url).then(function (tab) {
      state.tabIds.lastPlay = state.tabIds.toPlay;
      state.tabIds.toPlay = state.tabIds.firstPlay = tab.id;
      return tab;
    });
  };

  if (!state.tabIds.toPlay && !url) {
    throw theError;
  }

  if (!state.tabIds.toPlay) {
    return createOne(url);
  }

  return getTab(state.tabIds.toPlay).then(function (tab) {
    if (!url) {
      return tab;
    }

    // Note: must disable ipcCache manually here, so that further messages
    // won't be sent the old ipc
    Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().disable(tab.id);

    return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.update(tab.id, { url: url });
  }, function () {
    return createOne(url);
  });
};

var showPanelWindow = function showPanelWindow() {
  return activateTab(state.tabIds.panel, true).catch(function () {
    _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config').then(function (config) {
      config = config || {};
      return (config.size || {})[config.showSidebar ? 'with_sidebar' : 'standard'];
    }).then(function (size) {
      size = size || {
        width: 850,
        height: 775
      };

      _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.create({
        type: 'popup',
        url: _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.extension.getURL('popup.html'),
        width: size.width,
        height: size.height
      }).then(function (win) {
        if (!_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.isFirefox()) return;

        // Refer to https://bugzilla.mozilla.org/show_bug.cgi?id=1425829
        // Firefox New popup window appears blank until right-click
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(win.id, {
            width: size.width + 1,
            height: size.height + 1
          });
        }, 1000);
      });

      return true;
    });
  });
};

var withPanelIpc = function withPanelIpc() {
  return showPanelWindow().then(function () {
    return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["until"])('panel tab id recorded', function () {
      return {
        pass: state.tabIds.panel
      };
    });
  }).then(function () {
    return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, 2000);
  }).then(function () {
    return getPanelTabIpc(2000);
  });
};

var showBadge = function showBadge(options) {
  var _clear$text$color$bli = _extends({
    clear: false,
    text: '',
    color: '#ff0000',
    blink: 0
  }, options || {}),
      clear = _clear$text$color$bli.clear,
      text = _clear$text$color$bli.text,
      color = _clear$text$color$bli.color,
      blink = _clear$text$color$bli.blink;

  if (clear) {
    return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: '' });
  }

  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeBackgroundColor({ color: color });
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: text });

  if (blink) {
    setTimeout(function () {
      _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.getBadgeText({}).then(function (curText) {
        if (curText !== text) return false;
        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: '' });
      });
    }, blink);
  }

  return true;
};

var toggleRecordingBadge = function toggleRecordingBadge(isRecording, options) {
  return showBadge(_extends({
    color: '#ff0000',
    text: 'R'
  }, options || {}, {
    clear: !isRecording
  }));
};

var toggleInspectingBadge = function toggleInspectingBadge(isInspecting, options) {
  return showBadge(_extends({
    color: '#ffa800',
    text: 'S'
  }, options || {}, {
    clear: !isInspecting
  }));
};

var togglePlayingBadge = function togglePlayingBadge(isPlaying, options) {
  return showBadge(_extends({
    color: '#14c756',
    text: 'P'
  }, options || {}, {
    clear: !isPlaying
  }));
};

var isUpgradeViewed = function isUpgradeViewed() {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.storage.local.get('upgrade_not_viewed').then(function (obj) {
    return obj['upgrade_not_viewed'] !== 'not_viewed';
  });
};

var notifyRecordCommand = function notifyRecordCommand(command) {
  var notifId = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["uid"])();

  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.create(notifId, {
    type: 'basic',
    iconUrl: './logo.png',
    title: 'Record command!',
    message: function () {
      var list = [];

      list.push('command: ' + command.cmd);
      if (command.target) list.push('target: ' + command.target);
      if (command.value) list.push('value: ' + command.value);

      return list.join('\n');
    }()
  });

  // Note: close record notifications right away, so that notifications won't be stacked
  setTimeout(function () {
    _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.clear(notifId).catch(function (e) {
      return _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error(e);
    });
  }, 2000);
};

var notifyAutoPause = function notifyAutoPause() {
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.create({
    type: 'basic',
    iconUrl: './logo.png',
    title: 'Replay paused!',
    message: 'Auto paused by command'
  });
};

var notifyBreakpoint = function notifyBreakpoint() {
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.create({
    type: 'basic',
    iconUrl: './logo.png',
    title: 'Replay paused!',
    message: 'Auto paused by breakpoint'
  });
};

var notifyEcho = function notifyEcho(text) {
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.notifications.create({
    type: 'basic',
    iconUrl: './logo.png',
    title: 'Echo',
    message: text
  });
};

var closeAllWindows = function closeAllWindows() {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.getAll().then(function (wins) {
    return Promise.all(wins.map(function (win) {
      return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.remove(win.id);
    }));
  });
};

var isTimeToBackup = function isTimeToBackup() {
  return _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config').then(function (config) {
    var enableAutoBackup = config.enableAutoBackup,
        lastBackupActionTime = config.lastBackupActionTime,
        autoBackupInterval = config.autoBackupInterval;


    if (!enableAutoBackup) {
      return {
        timeout: false,
        remain: -1
      };
    }

    var diff = new Date() * 1 - (lastBackupActionTime || 0);
    return {
      timeout: diff > autoBackupInterval * 24 * 3600000,
      remain: diff
    };
  });
};

var notifyPanelAboutActiveTab = function notifyPanelAboutActiveTab(activeTabId) {
  Promise.all([_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(activeTabId), getPanelTabIpc().catch(function () {
    return null;
  })]).then(function (tuple) {
    var _tuple = _slicedToArray(tuple, 2),
        tab = _tuple[0],
        panelIpc = _tuple[1];

    if (!panelIpc) return;
    if (tab.url.indexOf(_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.extension.getURL('')) !== -1) return;

    if (!tab.title || tab.title.trim().length === 0) {
      return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
        return notifyPanelAboutActiveTab(activeTabId);
      }, 200);
    }

    return panelIpc.ask('UPDATE_ACTIVE_TAB', {
      url: tab.url,
      title: tab.title
    });
  });
};

var isTabActiveAndFocused = function isTabActiveAndFocused(tabId) {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(tabId).then(function (tab) {
    if (!tab.active) return false;

    switch (state.status) {
      case _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].NORMAL:
        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.get(tab.windowId).then(function (win) {
          return win.focused;
        });

      case _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].PLAYER:
        return tabId === state.tabIds.toPlay;

      case _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].RECORDER:
        return tabId === state.tabIds.toRecord;

      default:
        throw new Error('isTabActiveAndFocused: unknown app status, \'' + state.status + '\'');
    }
  }).catch(function (e) {
    return false;
  });
};

var bindEvents = function bindEvents() {
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.onClicked.addListener(function () {
    isUpgradeViewed().then(function (isViewed) {
      if (isViewed) {
        return showPanelWindow();
      } else {
        _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: '' });
        _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.storage.local.set({
          upgrade_not_viewed: ''
        });
        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.create({
          url: _config__WEBPACK_IMPORTED_MODULE_10__["default"].urlAfterUpgrade
        });
      }
    });
  });

  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (!tab.active) return;

    isTabActiveAndFocused(tabId).then(function (isFocused) {
      if (!isFocused) return;
      return notifyPanelAboutActiveTab(tabId);
    });
  });

  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.onFocusChanged.addListener(function (windowId) {
    _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ windowId: windowId, active: true }).then(function (tabs) {
      if (tabs.length === 0) return;

      Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tabs[0].id, 100).then(function (ipc) {
        return ipc.ask('TAB_ACTIVATED', {});
      }, function (e) {
        return 'Comment: ingore this error';
      });
    });
  });

  // Note: set the activated tab as the one to play
  _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.onActivated.addListener(function (activeInfo) {
    if (activeInfo.tabId === state.tabIds.panel) return;

    Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(activeInfo.tabId, 100).then(function (ipc) {
      return ipc.ask('TAB_ACTIVATED', {});
    }, function (e) {
      return 'Comment: ingore this error';
    });

    notifyPanelAboutActiveTab(activeInfo.tabId);

    switch (state.status) {
      case _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].NORMAL:
        // Note: In Firefox, without this delay of 100ms, `tab.url` will still be 'about:config'
        // so have to wait for the url to take effect
        setTimeout(function () {
          _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(activeInfo.tabId).then(function (tab) {
            if (tab.url.indexOf(_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.extension.getURL('')) !== -1) return;

            Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('in tab activated, set toPlay to ', activeInfo);
            state.tabIds.lastPlay = state.tabIds.toPlay;
            state.tabIds.toPlay = state.tabIds.firstPlay = activeInfo.tabId;
          });
        }, 100);

        break;

      case _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].RECORDER:
        {
          // Note: three things to do when switch tab in recording
          // 1. set the new tab to RECORDING status,
          // 2. and the original one back to NORMAL status
          // 3. commit a `selectWindow` command
          //
          // Have to wait for the new tab establish connection with background
          Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(activeInfo.tabId, 5000)
          // Note: wait for 1 second, expecting commands from original page to be committed
          .then(function (ipc) {
            return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
              return ipc;
            }, 1000);
          }).then(function (ipc) {
            return ipc.ask('SET_STATUS', {
              status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].RECORDING
            });
          }).then(function () {
            // Note: set the original tab to NORMAL status
            // only if the new tab is set to RECORDING status
            return getRecordTabIpc().then(function (ipc) {
              ipc.ask('SET_STATUS', {
                status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].NORMAL
              });
            });
          }).then(function () {
            // Note: get window locator & update recording tab
            var oldTabId = state.tabIds.firstRecord;
            var newTabId = activeInfo.tabId;

            return Promise.all([_common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(oldTabId), _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(newTabId)]).then(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                  oldTab = _ref3[0],
                  newTab = _ref3[1];

              var result = [];

              // update recording tab
              state.tabIds.toRecord = activeInfo.tabId;

              if (oldTab.windowId === newTab.windowId) {
                result.push('tab=' + (newTab.index - oldTab.index));
              }

              result.push('title=' + newTab.title);

              return {
                target: result[0],
                targetOptions: result
              };
            });
          }).then(function (data) {
            // Note: commit the `selectWindow` command
            var command = _extends({
              cmd: 'selectWindow'
            }, data);

            return getPanelTabIpc().then(function (panelIpc) {
              return panelIpc.ask('RECORD_ADD_COMMAND', command);
            }).then(function () {
              return notifyRecordCommand(command);
            });
          }).catch(function (e) {
            _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error(e.stack);
          });

          break;
        }
    }
  });
};

// usage:
// 1. set tabId for inspector:  `setInspectorTabId(someTabId)`
// 2. clear tabId for inspector: `setInspectorTabId(null, true)`
var setInspectorTabId = function setInspectorTabId(tabId, shouldRemove, noNotify) {
  state.tabIds.lastInspect = state.tabIds.toInspect;

  if (tabId) {
    state.tabIds.toInspect = tabId;
    return Promise.resolve(true);
  } else if (shouldRemove) {
    if (state.tabIds.toInspect) {
      state.tabIds.toInspect = null;

      if (noNotify) return Promise.resolve(true);

      return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(state.tabIds.toInspect).then(function (ipc) {
        return ipc.ask('STOP_INSPECTING');
      }).catch(function (e) {
        return Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])(e.stack);
      });
    }
    return Promise.resolve(true);
  }
};

var startSendingTimeoutStatus = function startSendingTimeoutStatus(timeout) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'wait';

  var past = 0;

  if (state.timer) clearInterval(state.timer);
  state.timer = setInterval(function () {
    past += 1000;

    getPanelTabIpc().then(function (panelIpc) {
      panelIpc.ask('TIMEOUT_STATUS', {
        type: type,
        past: past,
        total: timeout
      });
    });

    if (past >= timeout) {
      clearInterval(state.timer);
    }
  }, 1000);

  return function () {
    return clearInterval(state.timer);
  };
};

// Processor for all message background could receive
// All messages from panel starts with 'PANEL_'
// All messages from content script starts with 'CS_'
var onRequest = function onRequest(cmd, args) {
  if (cmd !== 'CS_ACTIVATE_ME') {
    Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('onAsk', cmd, args);
  }

  switch (cmd) {
    // Mark the tab as panel.
    case 'I_AM_PANEL':
      state.tabIds.panel = args.sender.tab.id;

      // Note: when the panel first open first, it could be marked as the tab to play
      // That's something we don't want to happen
      if (state.tabIds.toPlay === args.sender.tab.id) {
        Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('I am panel, set toPlay to null');
        state.tabIds.toPlay = state.tabIds.firstPlay = state.tabIds.lastPlay;
      }

      return true;

    case 'PANEL_TIME_FOR_BACKUP':
      return isTimeToBackup().then(function (obj) {
        return obj.timeout;
      });

    case 'PANEL_START_RECORDING':
      Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('Start to record...');
      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].RECORDER;
      toggleRecordingBadge(true);
      return true;

    case 'PANEL_STOP_RECORDING':
      Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('Stop recording...');

      getRecordTabIpc().then(function (ipc) {
        ipc.ask('SET_STATUS', {
          status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].NORMAL
        });
      });

      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].NORMAL;
      state.tabIds.lastRecord = state.tabIds.toRecord;
      state.tabIds.toRecord = null;
      state.tabIds.firstRecord = null;

      toggleRecordingBadge(false);
      return true;

    case 'PANEL_TRY_TO_RECORD_OPEN_COMMAND':
      {
        if (state.status !== _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].RECORDER) {
          throw new Error('Not in recorder mode');
        }

        // Well, `getPlayTab` is actually 'get current active tab'
        return getPlayTab().then(function (tab) {
          Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('PANEL_TRY_TO_RECORD_OPEN_COMMAND', tab);

          if (!/^(https?:|file:)/.test(tab.url)) {
            throw new Error('Not a valid url to record as open command');
          }

          state.tabIds.toRecord = state.tabIds.firstRecord = tab.id;

          getPanelTabIpc().then(function (panelIpc) {
            var command = {
              cmd: 'open',
              target: tab.url
            };

            panelIpc.ask('RECORD_ADD_COMMAND', command);
            notifyRecordCommand(command);
          });

          return true;
        });
      }

    case 'PANEL_START_INSPECTING':
      Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('start to inspect...');
      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].INSPECTOR;
      toggleInspectingBadge(true);
      return true;

    case 'PANEL_STOP_INSPECTING':
      Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('start to inspect...');
      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].NORMAL;

      toggleInspectingBadge(false);
      return setInspectorTabId(null, true);

    case 'PANEL_START_PLAYING':
      {
        Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('start to play...');
        state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].PLAYER;

        togglePlayingBadge(true);
        // Note: reset download manager to clear any previous downloads
        Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__["getDownloadMan"])().reset();

        if (state.timer) clearInterval(state.timer);

        return true;
        // .catch(e => {
        //   togglePlayingBadge(false)
        //   throw e
        // })
      }

    case 'PANEL_HEART_BEAT':
      {
        return state.heartBeatSecret;
      }

    case 'PANEL_RUN_COMMAND':
      {
        if (state.timer) clearInterval(state.timer);

        var shouldWaitForDownloadAfterRun = function shouldWaitForDownloadAfterRun(command) {
          Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('shouldWaitForDownloadAfterRun', command);
          if (command.cmd === 'click') return true;
          return false;
        };
        var checkHeartBeat = function checkHeartBeat(timeout, before) {
          updateHeartBeatSecret();

          return getPlayTabIpc(timeout, before).then(function (ipc) {
            return ipc.ask('HEART_BEAT', { timeout: timeout, before: before });
          }).catch(function (e) {
            _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error('at least I catched it', e.message);
            throw new Error('heart beat error thrown');
          });
        };
        var shoudWaitForCommand = function shoudWaitForCommand(command) {
          Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('shoudWaitForCommand', command);
          return (/andWait/i.test(command.cmd) || command.cmd === 'open'
          );
        };

        // Note: There are several versions of runCommandXXX here. One by one, they have a better tolerence of error
        // 1. runCommand:
        //      Run a command, and wait until we can confirm that command is completed (e.g.  xxxAndWait)
        //
        // 2. runCommandWithRetry:
        //      Enhance runCommand with retry mechanism, only retry when element is not found
        //
        // 3. runCommandWithClosureAndErrorProcess:
        //      Include `args` in closure, and take care of `errorIgnore`
        //
        // 4. runWithHeartBeat:
        //      Run a heart beat check along with `runCommandWithClosureAndErrorProcess`.
        //      Heart beat check requires cs Ipc must be created before heart beat check starts.
        //      With this, we can ensure the page is not closed or refreshed
        //
        // 5. runWithHeartBeatRetry:
        //      Run `runWithHeartBeat` with retry mechanism. only retry when it's a 'lost heart beat' error
        //      When closed/refresh is detected, it will try to send same command to that tab again.
        //

        var runCommand = function runCommand(args, retryInfo) {
          return getPlayTabIpc().then(function (ipc) {
            // Note: each command keeps target page's status as PLAYING
            ipc.ask('SET_STATUS', { status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].PLAYING });

            var gotHeartBeat = false;

            var innerCheckHeartBeat = function innerCheckHeartBeat() {
              // Note: ignore any exception when checking heart beat
              // possible exception: no tab for play, no ipc
              return checkHeartBeat().then(function () {
                gotHeartBeat = true;
              }, function (e) {
                _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error(e);return null;
              });
            };

            // res format: { data, isIFrame }
            var wait = function wait(res) {
              var shouldWait = shoudWaitForCommand(args.command);
              var shouldResetIpc = !res.isIFrame && (/AndWait/i.test(args.command.cmd) || args.command.cmd === 'refresh');
              if (!shouldWait) return Promise.resolve(res.data);

              Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('wait!!!!', res);
              var timeoutPageLoad = (res.data && res.data.extra && res.data.extra.timeoutPageLoad || 60) * 1000;
              var timeoutHeartbeat = (res.data && res.data.extra && res.data.extra.timeoutElement || 10) * 1000;

              // Note: for clickAndWait etc.,  must disable ipc to avoid
              // any further message (like heart beat) to be sent to the original ipc
              if (shouldResetIpc) {
                Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().disable(state.tabIds.toPlay);
              }

              // Note: put some delay here because there are cases when next command's
              // heart beat request is answered by previous page
              return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, 2000)
              // A standlone `checkHeartBeat to make sure we don't have to wait until's
              // first interval to pass the check
              .then(function () {
                return innerCheckHeartBeat();
              }).then(function () {
                return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["until"])('player tab heart beat check', function () {
                  innerCheckHeartBeat();

                  return {
                    pass: gotHeartBeat,
                    result: true
                  };
                }, 100, timeoutHeartbeat).catch(function (e) {
                  var cmd = args.command.cmd;

                  var isAndWait = /AndWait/.test(cmd);

                  if (isAndWait) {
                    var instead = cmd.replace('AndWait', '');
                    throw new Error('\'' + cmd + '\' failed. No page load event detected after ' + timeoutHeartbeat / 1000 + ' seconds. Try \'' + instead + '\' instead.');
                  } else {
                    throw new Error(cmd + '\' failed. No page load event detected after ' + timeoutHeartbeat / 1000 + ' seconds.');
                  }
                });
              })
              // Note: must get the new ipc here.
              // The previous ipc is useless after a new page load
              .then(function () {
                return getPlayTabIpc();
              }).then(function (ipc) {
                // Note: send timeout status to dashboard once we get the heart beat
                // and start to wait for dom ready
                var clear = startSendingTimeoutStatus(timeoutPageLoad);
                return ipc.ask('DOM_READY', {}, timeoutPageLoad).then(function () {
                  clear();
                  ipc.ask('HACK_ALERT', {});
                }, function () {
                  clear();
                  throw new Error('page load ' + timeoutPageLoad / 1000 + ' seconds time out');
                });
              }).then(function () {
                return res.data;
              });
            };

            // Note: clear timer whenever we execute a new command, and it's not a retry
            if (state.timer && retryInfo.retryCount === 0) clearInterval(state.timer);

            // Note: -1 will disable ipc timeout for 'pause' command
            var ipcTimeout = function () {
              switch (args.command.cmd) {
                case 'open':
                  return (args.command.extra && args.command.extra.timeoutPageLoad || 60) * 1000;
                case 'pause':
                  return -1;
                default:
                  return null;
              }
            }();

            return ipc.ask('DOM_READY', {}).then(function () {
              return ipc.ask('RUN_COMMAND', {
                command: _extends({}, args.command, {
                  extra: _extends({}, args.command.extra || {}, {
                    retryInfo: retryInfo
                  })
                })
              }, ipcTimeout);
            }).then(wait);
          }).catch(function (e) {
            _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error('all catched by runCommand - ' + e.message);
            throw e;
          });
        };

        var timeout = args.command.extra.timeoutElement * 1000;
        var runCommandWithRetry = function runCommandWithRetry() {
          // Note: add timerSecret to ensure it won't clear timer that is not created by this function call
          var timerSecret = Math.random();
          state.timerSecret = timerSecret;

          var fn = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["retry"])(runCommand, {
            timeout: timeout,
            shouldRetry: function shouldRetry(e) {
              Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('runCommandWithRetry - shouldRetry', e.message);

              return e.message && (e.message.indexOf('timeout reached when looking for') !== -1 || e.message.indexOf('element is found but not visible yet') !== -1 || e.message.indexOf('IPC Promise has been destroyed') !== -1);
            },
            onFirstFail: function onFirstFail(e) {
              var title = e && e.message && e.message.indexOf('element is found but not visible yet') !== -1 ? 'Tag waiting' // All use Tag Waiting for now  // 'Visible waiting'
              : 'Tag waiting';

              startSendingTimeoutStatus(timeout, title);
            },
            onFinal: function onFinal(err, data) {
              Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('onFinal', err, data);
              if (state.timer && state.timerSecret === timerSecret) clearInterval(state.timer);
            }
          });

          return fn.apply(undefined, arguments);
        };

        var runCommandWithClosureAndErrorProcess = function runCommandWithClosureAndErrorProcess() {
          return runCommandWithRetry(args).catch(function (e) {
            // Note: if variable !ERRORIGNORE is set to true,
            // it will just log errors instead of a stop of whole macro
            if (args.command.extra && args.command.extra.errorIgnore) {
              return {
                log: {
                  error: e.message
                }
              };
            }

            throw e;
          });
        };

        var runWithHeartBeat = function runWithHeartBeat() {
          var infiniteCheckHeartBeat = function () {
            var startTime = new Date().getTime();
            var stop = false;

            var fn = function fn() {
              Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('starting heart beat');
              // Note: do not check heart beat when
              // 1. it's a 'open' command, which is supposed to reconnect ipc
              // 2. it's going to download files, which will kind of reload page and reconnect ipc
              if (shoudWaitForCommand(args.command) || Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__["getDownloadMan"])().hasPendingDownload()) {
                updateHeartBeatSecret({ disabled: true });
                return new Promise(function () {});
              }

              if (stop) return Promise.resolve();

              return checkHeartBeat(100, startTime).then(function () {
                return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, 1000).then(fn);
              }, function (e) {
                _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error('lost heart beart!!', e.stack);
                throw new Error('lost heart beat when running command');
              });
            };
            fn.stop = function () {
              Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('stopping heart beat');
              stop = true;
            };

            return fn;
          }();

          return Promise.race([runCommandWithClosureAndErrorProcess().then(function (data) {
            infiniteCheckHeartBeat.stop();
            return data;
          }).catch(function (e) {
            infiniteCheckHeartBeat.stop();
            throw e;
          }), infiniteCheckHeartBeat()]);
        };

        var runWithHeartBeatRetry = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["retry"])(runWithHeartBeat, {
          timeout: timeout,
          shouldRetry: function shouldRetry(e) {
            Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('runWithHeartBeatRetry - shouldRetry', e.message);
            return e && e.message && e.message.indexOf('lost heart beat when running command') !== -1;
          }
        });

        var runEternally = function runEternally() {
          return new Promise(function (resolve, reject) {
            var p = runWithHeartBeatRetry().then(function (data) {
              if (shouldWaitForDownloadAfterRun(args.command)) {
                // Note: wait for download to either be create or completed
                return Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__["getDownloadMan"])().waitForDownloadIfAny().then(function () {
                  return data;
                });
              }

              return data;
            }).then(function (data) {
              // Note: use bg to set pageUrl, so that we can be sure that this `pageUrl` is 100% correct
              return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(state.tabIds.toPlay).then(function (tab) {
                return _extends({}, data, { pageUrl: tab.url });
              }).catch(function (e) {
                _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error('Error in fetching play tab url');
                return data;
              });
            });

            resolve(p);
          });
        };

        var prepare = function prepare() {
          return getPlayTab()
          // Note: catch any error, and make it run 'getPlayTab(args.url)' instead
          .catch(function (e) {
            return { id: -1 };
          }).then(function (tab) {
            Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('after first getPlayTab', tab);
            var openUrlInTab = function openUrlInTab() {
              var _args$command = args.command,
                  cmd = _args$command.cmd,
                  target = _args$command.target;

              if (cmd !== 'open') throw new Error('no play tab found');

              return getPlayTab(target).then(function (tab) {
                return { tab: tab, hasOpenedUrl: true };
              });
            };

            return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tab.id, 100).then(function (ipc) {
              // Note: test if the ipc is still active,
              // if it's not, try to open url as if that ipc doesn't exist at all
              // return ipc.ask('HEART_BEAT', {}, 500)
              // .then(() => ({ tab, hasOpenedUrl: false }))
              // .catch(openUrlInTab)
              return { tab: tab, hasOpenedUrl: false };
            }, function (e) {
              return openUrlInTab();
            });
          }).then(function (_ref4) {
            var tab = _ref4.tab,
                hasOpenedUrl = _ref4.hasOpenedUrl;

            // const p = args.shouldNotActivateTab ? Promise.resolve() : activateTab(tab.id, true)
            var p = Promise.resolve();

            // Note: wait for tab to confirm it has loaded
            return p.then(function () {
              return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tab.id, 6000 * 10);
            }).then(function (ipc) {
              var p = !hasOpenedUrl ? Promise.resolve() : ipc.ask('MARK_NO_COMMANDS_YET', {});
              return p.then(function () {
                return ipc.ask('SET_STATUS', { status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].PLAYING });
              });
            });
          });
        };

        return prepare().then(runEternally).catch(function (e) {
          _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error('catched by runEternally', e.stack);

          if (e && e.message && (e.message.indexOf('lost heart beat when running command') !== -1 || e.message.indexOf('Could not establish connection') !== -1)) {
            return runEternally();
          }
          throw e;
        });
      }

    case 'PANEL_STOP_PLAYING':
      {
        togglePlayingBadge(false);
        state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].NORMAL;

        // Note: reset download manager to clear any previous downloads
        Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__["getDownloadMan"])().reset();

        // Note: reset firstPlay to current toPlay when stopped playing
        // userful for playing loop (reset firstPlay after each loop)
        state.tabIds.firstPlay = state.tabIds.toPlay;

        if (state.timer) clearInterval(state.timer);

        // Note: let cs know that it should exit playing mode
        return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(state.tabIds.toPlay).then(function (ipc) {
          return ipc.ask('SET_STATUS', { status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].NORMAL });
        });
      }

    // corresponding to the 'find' functionality on dashboard panel
    // It will find either the last play tab or record tab to look for the passed in locator
    case 'PANEL_HIGHLIGHT_DOM':
      {
        return Promise.all([getRecordTabIpc().then(function (ipc) {
          return { ipc: ipc, type: 'record' };
        }).catch(function () {
          return null;
        }), getPlayTabIpc().then(function (ipc) {
          return { ipc: ipc, type: 'play' };
        }).catch(function () {
          return null;
        })]).then(function (tuple) {
          if (!tuple[0] && !tuple[1]) {
            throw new Error('No where to look for the dom');
          }

          return tuple.filter(function (x) {
            return !!x;
          });
        }).then(function (list) {
          return Promise.all(list.map(function (_ref5) {
            var ipc = _ref5.ipc,
                type = _ref5.type;

            return ipc.ask('FIND_DOM', { locator: args.locator }).then(function (result) {
              return { result: result, type: type, ipc: ipc };
            });
          }));
        }).then(function (list) {
          var foundedList = list.filter(function (x) {
            return x.result;
          });

          if (foundedList.length === 0) {
            throw new Error('DOM not found');
          }

          var item = foundedList.length === 2 ? foundedList.find(function (item) {
            return item.type === args.lastOperation;
          }) : foundedList[0];

          var tabId = state.tabIds[item.type === 'record' ? 'lastRecord' : 'toPlay'];

          return activateTab(tabId, true).then(function () {
            return item.ipc.ask('HIGHLIGHT_DOM', { locator: args.locator });
          });
        });
      }

    case 'PANEL_HIGHLIGHT_RECT':
      {
        return getPlayTabIpc().then(function (ipc) {
          return ipc.ask('HIGHLIGHT_RECT', args);
        });
      }

    case 'PANEL_HIGHLIGHT_RECTS':
      {
        return getPlayTabIpc().then(function (ipc) {
          return ipc.ask('HIGHLIGHT_RECTS', args);
        });
      }

    case 'PANEL_RESIZE_WINDOW':
      {
        if (!state.tabIds.panel) {
          throw new Error('Panel not available');
        }

        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(state.tabIds.panel).then(function (tab) {
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.update(tab.windowId, Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["pick"])(['width', 'height'], _extends({}, args.size, {
            width: args.size.width,
            height: args.size.height
          })));
        });
      }

    case 'PANEL_UPDATE_BADGE':
      {
        var dict = {
          play: togglePlayingBadge,
          record: toggleRecordingBadge,
          inspect: toggleInspectingBadge
        };
        var fn = dict[args.type];

        if (!fn) {
          throw new Error('unknown type for updating badge, \'' + args.type + '\'');
        }

        return fn(!args.clear, args);
      }

    case 'PANEL_NOTIFY_AUTO_PAUSE':
      {
        notifyAutoPause();
        return true;
      }

    case 'PANEL_NOTIFY_BREAKPOINT':
      {
        notifyBreakpoint();
        return true;
      }

    case 'PANEL_NOTIFY_ECHO':
      {
        notifyEcho(args.text);
        return true;
      }

    case 'PANEL_CLOSE_ALL_WINDOWS':
      {
        closeAllWindows();
        return true;
      }

    case 'PANEL_CURRENT_PLAY_TAB_INFO':
      {
        return getPlayTab().then(function (tab) {
          return {
            url: tab.url,
            title: tab.title
          };
        });
      }

    case 'PANEL_BRING_PLAYING_WINDOW_TO_FOREGROUND':
      {
        return getPlayTab().then(function (tab) {
          return activateTab(tab.id, true);
        }).catch(function (e) {
          return showPanelWindow();
        }).then(function () {
          return true;
        });
      }

    case 'PANEL_RESIZE_PLAY_TAB':
      {
        return getPlayTab().then(function (tab) {
          return Object(_common_resize_window__WEBPACK_IMPORTED_MODULE_14__["resizeViewportOfTab"])(tab.id, args);
        });
      }

    case 'PANEL_SELECT_AREA_ON_CURRENT_PAGE':
      {
        return getPlayTabIpc().then(function (ipc) {
          activateTab(state.tabIds.toPlay, true);
          return ipc.ask('SELECT_SCREEN_AREA');
        }).catch(function (e) {
          _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error(e.stack);
          throw new Error('Not able to take screenshot on the current tab');
        });
      }

    case 'PANEL_CLEAR_VISION_RECTS_ON_PLAYING_PAGE':
      {
        return getPlayTabIpc().then(function (ipc) {
          return ipc.ask('CLEAR_VISION_RECTS');
        });
      }

    case 'PANEL_SEARCH_VISION_ON_PLAYING_PAGE':
      {
        var visionFileName = args.visionFileName,
            minSimilarity = args.minSimilarity,
            _args$searchArea = args.searchArea,
            searchArea = _args$searchArea === undefined ? 'full' : _args$searchArea,
            storedImageRect = args.storedImageRect,
            command = args.command;

        var patternDpi = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["dpiFromFileName"])(visionFileName) || 96;
        var screenDpi = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["getScreenDpi"])();
        var dpiScale = patternDpi / screenDpi;
        var man = Object(_common_vision_man__WEBPACK_IMPORTED_MODULE_13__["getVisionMan"])();
        var getPatternImage = function getPatternImage(fileName) {
          return man.exists(fileName).then(function (existed) {
            if (!existed) throw new Error(command + ': No input image found for file name \'' + fileName + '\'');
            return man.readAsDataURL(fileName);
          });
        };
        var saveDataUrlToLastScreenshot = function saveDataUrlToLastScreenshot(dataUrl) {
          return Object(_common_screenshot_man__WEBPACK_IMPORTED_MODULE_11__["getScreenshotMan"])().overwrite(Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["ensureExtName"])('.png', _common_constant__WEBPACK_IMPORTED_MODULE_3__["LAST_SCREENSHOT_FILE_NAME"]), Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["dataURItoBlob"])(dataUrl)).then(function () {
            getPanelTabIpc().then(function (panelIpc) {
              return panelIpc.ask('RESTORE_SCREENSHOTS');
            });
          });
        };
        var getTargetImage = function getTargetImage() {
          var capture = function capture(ipc, tabId) {
            switch (searchArea) {
              case 'viewport':
                return Promise.all([ipc.ask('SCREENSHOT_PAGE_INFO'), Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__["captureScreen"])(tabId)]).then(function (_ref6) {
                  var _ref7 = _slicedToArray(_ref6, 2),
                      pageInfo = _ref7[0],
                      dataUrl = _ref7[1];

                  saveDataUrlToLastScreenshot(dataUrl);

                  return {
                    offset: {
                      x: pageInfo.originalX,
                      y: pageInfo.originalY
                    },
                    dataUrl: dataUrl
                  };
                });

              case 'full':
                {
                  return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__["captureFullScreen"])(tabId, {
                    startCapture: function startCapture() {
                      return ipc.ask('START_CAPTURE_FULL_SCREENSHOT', {});
                    },
                    endCapture: function endCapture(pageInfo) {
                      return ipc.ask('END_CAPTURE_FULL_SCREENSHOT', { pageInfo: pageInfo });
                    },
                    scrollPage: function scrollPage(offset) {
                      return ipc.ask('SCROLL_PAGE', { offset: offset });
                    }
                  }).then(function (dataUrl) {
                    saveDataUrlToLastScreenshot(dataUrl);
                    return { dataUrl: dataUrl, offset: { x: 0, y: 0 } };
                  });
                }

              default:
                {
                  if (/^element:/i.test(searchArea)) {
                    if (!storedImageRect) {
                      throw new Error('!storedImageRect should not be empty');
                    }

                    var _man = Object(_common_screenshot_man__WEBPACK_IMPORTED_MODULE_11__["getScreenshotMan"])();
                    var fileName = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["ensureExtName"])('.png', _common_constant__WEBPACK_IMPORTED_MODULE_3__["LAST_SCREENSHOT_FILE_NAME"]);

                    return _man.readAsDataURL(fileName).then(function (dataUrl) {
                      return {
                        dataUrl: dataUrl,
                        offset: {
                          x: storedImageRect.x,
                          y: storedImageRect.y
                        }
                      };
                    });
                  }

                  throw new Error('Unsupported searchArea \'' + searchArea + '\'');
                }
            }
          };

          return getPlayTabIpc().then(function (ipc) {
            var toPlayTabId = state.tabIds.toPlay;

            Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('getTargetImage tabIds', state.tabIds, toPlayTabId);

            return activateTab(toPlayTabId, true).then(function () {
              return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, SCREENSHOT_DELAY);
            }).then(function () {
              return capture(ipc, toPlayTabId);
            }).then(function (obj) {
              return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__["scaleDataURI"])(obj.dataUrl, dpiScale).then(function (dataUrl) {
                return {
                  dataUrl: dataUrl,
                  offset: obj.offset
                };
              });
            });
          });
        };

        if (minSimilarity < 0.1 || minSimilarity > 1.0) {
          throw new Error('confidence should be between 0.1 and 1.0');
        }

        return Promise.all([getPatternImage(visionFileName), getTargetImage()]).then(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
              patternImageUrl = _ref9[0],
              targetImageInfo = _ref9[1];

          var targetImageUrl = targetImageInfo.dataUrl;
          var offset = targetImageInfo.offset;

          return Object(_common_imagesearch_adaptor_ts__WEBPACK_IMPORTED_MODULE_12__["searchImage"])({
            patternImageUrl: patternImageUrl,
            targetImageUrl: targetImageUrl,
            minSimilarity: minSimilarity,
            allowSizeVariation: true,
            scaleDownRatio: dpiScale * window.devicePixelRatio,
            offsetX: offset.x || 0,
            offsetY: offset.y || 0
          });
        });
      }

    case 'PANEL_TIMEOUT_STATUS':
      {
        startSendingTimeoutStatus(args.timeout, args.type);
        return true;
      }

    case 'PANEL_CLEAR_TIMEOUT_STATUS':
      {
        clearInterval(state.timer);
        return true;
      }

    case 'CS_STORE_SCREENSHOT_IN_SELECTION':
      {
        var rect = args.rect,
            devicePixelRatio = args.devicePixelRatio,
            fileName = args.fileName;

        var tabId = args.sender.tab.id;

        return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tabId).then(function (ipc) {
          return activateTab(state.tabIds.toPlay, true).then(function () {
            return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, SCREENSHOT_DELAY);
          }).then(function () {
            return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__["captureScreenInSelection"])(state.tabIds.toPlay, { rect: rect, devicePixelRatio: devicePixelRatio }, {
              startCapture: function startCapture() {
                return ipc.ask('START_CAPTURE_FULL_SCREENSHOT', { hideScrollbar: false });
              },
              endCapture: function endCapture(pageInfo) {
                return ipc.ask('END_CAPTURE_FULL_SCREENSHOT', { pageInfo: pageInfo });
              },
              scrollPage: function scrollPage(offset) {
                return ipc.ask('SCROLL_PAGE', { offset: offset });
              }
            });
          }).then(function (dataUrl) {
            var man = Object(_common_screenshot_man__WEBPACK_IMPORTED_MODULE_11__["getScreenshotMan"])();

            return man.overwrite(fileName, Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["dataURItoBlob"])(dataUrl)).then(function () {
              getPanelTabIpc().then(function (panelIpc) {
                return panelIpc.ask('RESTORE_SCREENSHOTS');
              });

              return fileName;
            });
          });
        });
      }

    case 'CS_SCREEN_AREA_SELECTED':
      {
        var _rect = args.rect,
            _devicePixelRatio = args.devicePixelRatio;

        var _tabId = args.sender.tab.id;

        Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('CS_SCREEN_AREA_SELECTED', _rect, _devicePixelRatio, _tabId);

        return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__["captureScreenInSelectionSimple"])(args.sender.tab.id, { rect: _rect, devicePixelRatio: _devicePixelRatio }).then(function (dataUrl) {
          Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('CS_SCREEN_AREA_SELECTED', 'got reuslt', dataUrl.length);
          return withPanelIpc().then(function (panelIpc) {
            return panelIpc.ask('ADD_VISION_IMAGE', { dataUrl: dataUrl });
          });
        }).catch(function (e) {
          _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error(e.stack);
          throw e;
        });
      }

    case 'CS_DONE_INSPECTING':
      Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('done inspecting...');
      state.status = _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].NORMAL;

      toggleInspectingBadge(false);
      setInspectorTabId(null, true, true);
      activateTab(state.tabIds.panel, true);

      return getPanelTabIpc().then(function (panelIpc) {
        return panelIpc.ask('INSPECT_RESULT', args);
      });

    // It's used for inspecting. The first tab which sends a CS_ACTIVATE_ME event
    // on mouse over event will be the one for us to inspect
    case 'CS_ACTIVATE_ME':
      // log('CS_ACTIVATE_ME state.status', state.status)

      switch (state.status) {
        case _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].INSPECTOR:
          if (!state.tabIds.toInspect) {
            state.tabIds.toInspect = args.sender.tab.id;

            setTimeout(function () {
              Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(state.tabIds.toInspect).then(function (ipc) {
                return ipc.ask('SET_STATUS', {
                  status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].INSPECTING
                });
              });
            }, 0);

            return true;
          }
          break;
      }
      return false;

    case 'CS_RECORD_ADD_COMMAND':
      {
        var pullbackTimeout = 1000;
        var isFirst = false;

        if (state.status !== _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].RECORDER) {
          return false;
        }

        if (!state.tabIds.toRecord) {
          isFirst = true;
          state.tabIds.toRecord = state.tabIds.firstRecord = args.sender.tab.id;
        }

        if (state.tabIds.toRecord !== args.sender.tab.id) {
          return false;
        }

        // Note: if receive a pullback cmd, we need to set the flag,
        // and strip Wait from any xxxAndWait command
        if (args.cmd === 'pullback') {
          state.pullback = true;
          setTimeout(function () {
            state.pullback = false;
          }, pullbackTimeout * 2);
          return false;
        }

        setTimeout(function () {
          Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(state.tabIds.toRecord).then(function (ipc) {
            return ipc.ask('SET_STATUS', {
              status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].RECORDING
            });
          });
        }, 0);

        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, pullbackTimeout).then(function () {
          return getPanelTabIpc();
        }).then(function (panelIpc) {
          if (isFirst) {
            panelIpc.ask('RECORD_ADD_COMMAND', {
              cmd: 'open',
              target: args.url
            });
          }

          // Note: remove AndWait from commands if we got a pullback
          if (state.pullback) {
            args.cmd = args.cmd.replace('AndWait', '');
            state.pullback = false;
          }

          return panelIpc.ask('RECORD_ADD_COMMAND', args);
        }).then(function () {
          return _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config');
        }).then(function (config) {
          if (config.recordNotification && state.status === _common_constant__WEBPACK_IMPORTED_MODULE_3__["APP_STATUS"].RECORDER) {
            notifyRecordCommand(args);
          }
        }).then(function () {
          return true;
        });
      }

    case 'CS_CLOSE_OTHER_TABS':
      {
        var _tabId2 = args.sender.tab.id;

        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(_tabId2).then(function (tab) {
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ windowId: tab.windowId }).then(function (tabs) {
            return tabs.filter(function (t) {
              return t.id !== _tabId2;
            });
          }).then(function (tabs) {
            return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.remove(tabs.map(function (t) {
              return t.id;
            }));
          });
        }).then(function () {
          return true;
        });
      }

    case 'CS_SELECT_WINDOW':
      {
        var oldTablId = args.sender.tab.id;

        var _splitIntoTwo = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["splitIntoTwo"])('=', args.target),
            _splitIntoTwo2 = _slicedToArray(_splitIntoTwo, 2),
            type = _splitIntoTwo2[0],
            locator = _splitIntoTwo2[1];

        if (!locator) {
          throw new Error('invalid window locator, \'' + args.target + '\'');
        }

        var pGetTabs = void 0;

        switch (type.toLowerCase()) {
          case 'title':
            pGetTabs = _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ title: locator });
            break;

          case 'tab':
            {
              if (/^\s*open\s*$/i.test(locator)) {
                pGetTabs = _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.create({ url: args.value }).then(function (tab) {
                  return [tab];
                });
              } else {
                var offset = parseInt(locator, 10);

                if (isNaN(offset)) {
                  throw new Error('invalid tab offset, \'' + locator + '\'');
                }

                pGetTabs = _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.get(state.tabIds.firstPlay).then(function (tab) {
                  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({
                    windowId: tab.windowId,
                    index: tab.index + offset
                  });
                });
              }

              break;
            }

          default:
            throw new Error('window locator type \'' + type + '\' not supported');
        }

        return pGetTabs.then(function (tabs) {
          if (tabs.length === 0) {
            throw new Error('failed to find the tab with locator \'' + args.target + '\'');
          }
          return tabs[0];
        }).then(function (tab) {
          Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('selectWindow, got tab', tab);

          return Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(tab.id, 10000).catch(function (e) {
            if (/tab=\s*open\s*/i.test(args.target)) {
              throw new Error('To open a new tab, a valid URL is needed');
            }
            throw e;
          }).then(function (ipc) {
            Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('selectWindow, got ipc', ipc);

            return ipc.ask('DOM_READY', {}).then(function () {
              ipc.ask('SET_STATUS', {
                status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].PLAYING
              });

              return true;
            });
          }).then(function () {
            // Note: set the original tab to NORMAL status
            // only if the new tab is set to PLAYING status
            Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('selectWindow, set orignial to normal');

            Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().get(oldTablId).then(function (ipc) {
              return ipc.ask('SET_STATUS', {
                status: _common_constant__WEBPACK_IMPORTED_MODULE_3__["CONTENT_SCRIPT_STATUS"].NORMAL
              });
            });
          }).then(function () {
            state.tabIds.lastPlay = state.tabIds.toPlay;
            state.tabIds.toPlay = tab.id;
            return activateTab(tab.id);
          });
        }).catch(function (e) {
          _common_log__WEBPACK_IMPORTED_MODULE_4__["default"].error(e.stack);
          throw e;
        });
      }

    case 'CS_CAPTURE_SCREENSHOT':
      return activateTab(state.tabIds.toPlay, true).then(function () {
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, SCREENSHOT_DELAY);
      }).then(function () {
        return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__["saveScreen"])(state.tabIds.toPlay, args.fileName);
      });

    case 'CS_CAPTURE_FULL_SCREENSHOT':
      return activateTab(state.tabIds.toPlay, true).then(function () {
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {}, SCREENSHOT_DELAY);
      }).then(getPlayTabIpc).then(function (ipc) {
        return Object(_common_capture_screenshot__WEBPACK_IMPORTED_MODULE_6__["saveFullScreen"])(state.tabIds.toPlay, args.fileName, {
          startCapture: function startCapture() {
            return ipc.ask('START_CAPTURE_FULL_SCREENSHOT', {});
          },
          endCapture: function endCapture(pageInfo) {
            return ipc.ask('END_CAPTURE_FULL_SCREENSHOT', { pageInfo: pageInfo });
          },
          scrollPage: function scrollPage(offset) {
            return ipc.ask('SCROLL_PAGE', { offset: offset });
          }
        });
      });

    case 'CS_TIMEOUT_STATUS':
      return getPanelTabIpc().then(function (ipc) {
        return ipc.ask('TIMEOUT_STATUS', args);
      });

    case 'CS_DELETE_ALL_COOKIES':
      {
        var url = args.url;


        return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.cookies.getAll({ url: url }).then(function (cookies) {
          var ps = cookies.map(function (c) {
            return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.cookies.remove({
              url: '' + url + c.path,
              name: c.name
            });
          });

          return Promise.all(ps);
        });
      }

    case 'CS_SET_FILE_INPUT_FILES':
      {
        return Object(_common_debugger__WEBPACK_IMPORTED_MODULE_8__["setFileInputFiles"])({
          tabId: args.sender.tab.id,
          selector: args.selector,
          files: args.files
        });
      }

    case 'CS_ON_DOWNLOAD':
      {
        var p = Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__["getDownloadMan"])().prepareDownload(args.fileName, {
          wait: !!args.wait,
          timeout: args.timeout,
          timeoutForStart: args.timeoutForStart
        });
        return true;
      }

    case 'CS_INVOKE':
      {
        return _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config').then(function (config) {
          var isTestCase = !!args.testCase;
          var isTestSuite = !!args.testSuite;
          var from = args.testCase && args.testCase.from || args.testSuite && args.testSuite.from;

          switch (from) {
            case 'bookmark':
              {
                if (!config.allowRunFromBookmark) {
                  throw new Error('To run macro / test suite from bookmarks, enable it in kantu settings first');
                }
                break;
              }

            case 'html':
              {
                if (!isTestSuite) {
                  throw new Error('not allowed to run from local file');
                }

                var isFileSchema = /^file:\/\//.test(args.sender.url);
                var isHttpSchema = /^https?:\/\//.test(args.sender.url);

                if (isFileSchema && !config.allowRunFromFileSchema) {
                  throw new Error('To run test suite from local file, enable it in kantu settings first');
                }

                if (isHttpSchema && !config.allowRunFromHttpSchema) {
                  throw new Error('To run test suite from public website, enable it in kantu settings first');
                }

                break;
              }

            default:
              throw new Error('unknown source not allowed');
          }

          return withPanelIpc().then(function (panelIpc) {
            if (args.testCase) {
              return panelIpc.ask('RUN_TEST_CASE', {
                testCase: args.testCase,
                options: args.options
              });
            }

            if (args.testSuite) {
              return panelIpc.ask('RUN_TEST_SUITE', {
                testSuite: args.testSuite,
                options: args.options
              });
            }

            return true;
          });
        });
      }

    case 'CS_IMPORT_HTML_AND_INVOKE':
      {
        return _common_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get('config').then(function (config) {
          var isFileSchema = /^file:\/\//.test(args.sender.url);
          var isHttpSchema = /^https?:\/\//.test(args.sender.url);

          if (isFileSchema && !config.allowRunFromFileSchema) {
            throw new Error('To run macro from local file, enable it in kantu settings first');
          }

          if (isHttpSchema && !config.allowRunFromHttpSchema) {
            throw new Error('To run macro from public website, enable it in kantu settings first');
          }

          return withPanelIpc().then(function (panelIpc) {
            return panelIpc.ask('IMPORT_HTML_AND_RUN', args);
          });
        });
      }

    case 'CS_ADD_LOG':
      {
        return getPanelTabIpc().then(function (ipc) {
          return ipc.ask('ADD_LOG', args);
        });
      }

    case 'SET_CLIPBOARD':
      {
        _common_clipboard__WEBPACK_IMPORTED_MODULE_5__["default"].set(args.value);
        return true;
      }

    case 'GET_CLIPBOARD':
      {
        return _common_clipboard__WEBPACK_IMPORTED_MODULE_5__["default"].get();
      }

    default:
      return 'unknown';
  }
};

var initIPC = function initIPC() {
  Object(_common_ipc_ipc_bg_cs__WEBPACK_IMPORTED_MODULE_2__["bgInit"])(function (tabId, cuid, ipc) {
    Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('connect cs ipc', tabId, cuid, ipc);
    Object(_common_ipc_ipc_cache__WEBPACK_IMPORTED_MODULE_15__["getIpcCache"])().set(tabId, ipc, cuid);
    ipc.onAsk(onRequest);
  });
};

var initOnInstalled = function initOnInstalled() {
  if (typeof process !== 'undefined' && "development" === 'production') {
    _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.runtime.setUninstallURL(_config__WEBPACK_IMPORTED_MODULE_10__["default"].urlAfterUninstall);

    _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.runtime.onInstalled.addListener(function (_ref10) {
      var reason = _ref10.reason;

      switch (reason) {
        case 'install':
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.create({
            url: _config__WEBPACK_IMPORTED_MODULE_10__["default"].urlAfterInstall
          });

        case 'update':
          _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeText({ text: 'NEW' });
          _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.browserAction.setBadgeBackgroundColor({ color: '#4444FF' });
          return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.storage.local.set({
            upgrade_not_viewed: 'not_viewed'
          });
      }
    });
  }
};

var initPlayTab = function initPlayTab() {
  return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.windows.getCurrent().then(function (window) {
    return _common_web_extension__WEBPACK_IMPORTED_MODULE_0___default.a.tabs.query({ active: true, windowId: window.id }).then(function (tabs) {
      if (!tabs || !tabs.length) return false;
      Object(_common_log__WEBPACK_IMPORTED_MODULE_4__["default"])('in initPlayTab, set toPlay to', tabs[0]);
      state.tabIds.lastPlay = state.tabIds.toPlay;
      state.tabIds.toPlay = tabs[0].id;
      return true;
    });
  });
};

var initDownloadMan = function initDownloadMan() {
  Object(_common_download_man__WEBPACK_IMPORTED_MODULE_9__["getDownloadMan"])().onCountDown(function (data) {
    getPanelTabIpc().then(function (panelIpc) {
      panelIpc.ask('TIMEOUT_STATUS', _extends({}, data, {
        type: 'download'
      }));
    });
  });
};

bindEvents();
initIPC();
initOnInstalled();
initPlayTab();
initDownloadMan();

window.clip = _common_clipboard__WEBPACK_IMPORTED_MODULE_5__["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzZWFyY2gtdGVzdGV4dGVuc2lvbi9zcmMvdHMvaW1hZ2UtaGVscGVyLnRzIiwid2VicGFjazovLy8uL2ltYWdlc2VhcmNoLXRlc3RleHRlbnNpb24vc3JjL3RzL2pvYi50cyIsIndlYnBhY2s6Ly8vLi9pbWFnZXNlYXJjaC10ZXN0ZXh0ZW5zaW9uL3NyYy90cy9tYXRoLWhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9pbWFnZXNlYXJjaC10ZXN0ZXh0ZW5zaW9uL3NyYy90cy93b3JrZXItY29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NhcHR1cmVfc2NyZWVuc2hvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlYnVnZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG93bmxvYWRfbWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1hZ2VzZWFyY2gvYWRhcHRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3Jlc2l6ZV93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi92aXNpb25fbWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dC9iZy5qcyJdLCJuYW1lcyI6WyJnZXRBY3RpdmVUYWJJbmZvIiwiRXh0Iiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwidGhlbiIsInRhYnMiLCJxdWVyeSIsImFjdGl2ZSIsIndpbmRvd0lkIiwid2luIiwiaWQiLCJpbWFnZVNpemVGcm9tRGF0YVVSSSIsImRhdGFVUkkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltZyIsIkltYWdlIiwib25sb2FkIiwid2lkdGgiLCJuYXR1cmFsV2lkdGgiLCJoZWlnaHQiLCJuYXR1cmFsSGVpZ2h0Iiwic3JjIiwiZ2V0U2NyZWVuc2hvdFJhdGlvIiwidGFiSWQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiYWxsIiwiZ2V0IiwidHVwbGUiLCJzaXplIiwidGFiIiwic2NhbGVEYXRhVVJJIiwic2NhbGUiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJkcmF3T25DYW52YXMiLCJ4IiwieSIsInRvRGF0YVVSTCIsImNhcHR1cmVTY3JlZW4iLCJwcmVzZXRTY3JlZW5zaG90UmF0aW8iLCJpczJuZEFyZ0Z1bmN0aW9uIiwiaGFzU2NyZWVuc2hvdFJhdGlvIiwicERhdGFVUkkiLCJjYXB0dXJlVmlzaWJsZVRhYiIsImZvcm1hdCIsInBSYXRpbyIsIndpbmRvdyIsInNjcmVlbnNob3RSYXRpbyIsImNyZWF0ZUNhcHR1cmVTY3JlZW5XaXRoQ2FjaGVkU2NyZWVuc2hvdFJhdGlvIiwicmF0aW8iLCJjYXB0dXJlU2NyZWVuQmxvYiIsImRhdGFVUkl0b0Jsb2IiLCJzYXZlU2NyZWVuIiwiZmlsZU5hbWUiLCJnZXRTY3JlZW5zaG90TWFuIiwib3ZlcndyaXRlIiwic2NyZWVuQmxvYiIsInVybCIsInBDb21wb3NlIiwibGlzdCIsInJlZHVjZSIsInByZXYiLCJmbiIsImdldEFsbFNjcm9sbE9mZnNldHMiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJ0b3BQYWRkaW5nIiwidG9wUGFkIiwieFN0ZXAiLCJ5U3RlcCIsInJlc3VsdCIsInB1c2giLCJnZXRBbGxTY3JvbGxPZmZzZXRzRm9yUmVjdCIsIm9yaWdpbmFsWCIsIm9yaWdpbmFsWSIsInN5Iiwic3giLCJsZW5ndGgiLCJwaXhlbFJhdGlvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW1hZ2UiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwid2l0aFBhZ2VJbmZvIiwic3RhcnRDYXB0dXJlIiwiZW5kQ2FwdHVyZSIsImNhbGxiYWNrIiwicGFnZUluZm8iLCJzZW5kZXIiLCJjYXB0dXJlRnVsbFNjcmVlbiIsImNhcHR1cmVDbGllbnRBUEkiLCJzY3JvbGxQYWdlIiwib3B0aW9ucyIsIm9wdHMiLCJibG9iIiwibWF4U2lkZSIsIk1hdGgiLCJmbG9vciIsIm1pbiIsInNjcm9sbE9mZnNldHMiLCJ0b2RvcyIsIm1hcCIsIm9mZnNldCIsImkiLCJpbmRleCIsInRvdGFsIiwicmVhbE9mZnNldCIsImNvbnZlcnQiLCJjYXB0dXJlU2NyZWVuSW5TZWxlY3Rpb25TaW1wbGUiLCJyZWN0IiwiY2FwdHVyZVNjcmVlbkluU2VsZWN0aW9uIiwiZ2V0UGFnZUluZm8iLCJib2R5Iiwid2lkdGhzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0cyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImRhdGEiLCJtYXgiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJoYXNCb2R5Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJvcmlnaW5hbE92ZXJmbG93U3R5bGUiLCJzdHlsZSIsIm92ZXJmbG93Iiwib3JpZ2luYWxCb2R5T3ZlcmZsb3dZU3R5bGUiLCJvdmVyZmxvd1kiLCJoaWRlU2Nyb2xsYmFyIiwic2Nyb2xsVG8iLCJkZWxheSIsInNhdmVGdWxsU2NyZWVuIiwiY2xpZW50QVBJIiwic2V0U3R5bGUiLCIkZG9tIiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJjcmVhdGVUZXh0YXJlYSIsIiRpbnB1dCIsInNldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImFwcGVuZENoaWxkIiwiZ2V0VGV4dEFyZWEiLCIkZWwiLCJnZXRFbGVtZW50QnlJZCIsIndpdGhJbnB1dCIsInJldCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJpbm5lckhUTUwiLCJhcGkiLCJzZXQiLCJ0ZXh0IiwiaW5uZXJUZXh0IiwiZm9jdXMiLCJleGVjQ29tbWFuZCIsImJsdXIiLCJyZXMiLCJQUk9UT0NPTF9WRVJTSU9OIiwiQ2xFQU5VUF9USU1FT1VUIiwid2l0aERlYnVnZ2VyIiwic3RhdGUiLCJjb25uZWN0ZWQiLCJjbGVhbnVwVGltZXIiLCJzZXRTdGF0ZSIsImNhbmNlbENsZWFudXAiLCJjbGVhclRpbWVvdXQiLCJpc1NhbWVEZWJ1Z2dlZSIsImEiLCJiIiwiZGVidWdnZWUiLCJhdHRhY2giLCJkZXRhY2giLCJkZWJ1Z2dlciIsInN0YWNrIiwic2NoZWR1bGVEZXRhY2giLCJ0aW1lciIsInNldFRpbWVvdXQiLCJzZW5kQ29tbWFuZCIsImNtZCIsInBhcmFtcyIsIm9uRXZlbnQiLCJhZGRMaXN0ZW5lciIsIm9uRGV0YWNoIiwiZG9uZSIsIl9fZ2V0RG9jdW1lbnQiLCJyb290IiwiX19xdWVyeVNlbGVjdG9yIiwicGFydGlhbCIsInNlbGVjdG9yIiwibm9kZUlkIiwiX19zZXRGaWxlSW5wdXRGaWxlcyIsImZpbGVzIiwic2V0RmlsZUlucHV0RmlsZXMiLCJnbyIsImNvbXBvc2VQcm9taXNlRm4iLCJub2RlIiwiRG93bmxvYWRNYW4iLCJhY3RpdmVEb3dubG9hZHMiLCJldmVudHNCb3VuZCIsImZpbHRlckFjdGl2ZURvd25sb2FkcyIsInByZWRpY2F0ZSIsImZpbHRlciIsInVuYmluZEV2ZW50cyIsImNyZWF0ZWRMaXN0ZW5lciIsImRvd25sb2FkSXRlbSIsImlzQWN0aXZlIiwibG9nIiwiaXRlbSIsImZpbmQiLCJ3YWl0IiwidGltZW91dCIsInRpbWVvdXRUaW1lciIsIkVycm9yIiwidWlkIiwiZCIsImNvdW50RG93blRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjb3VudERvd25IYW5kbGVyIiwicGFzdCIsIm5ld1Bhc3QiLCJjaGFuZ2VkTGlzdGVuZXIiLCJkb3dubG9hZERlbHRhIiwiZmluZEJ5SWQiLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsImRldGVybWluZUZpbGVOYW1lTGlzdGVuZXIiLCJzdWdnZXN0IiwidG1wTmFtZSIsInRyaW0iLCJmaWxlbmFtZSIsImNvbmZsaWN0QWN0aW9uIiwiZG93bmxvYWRzIiwib25DcmVhdGVkIiwib25DaGFuZ2VkIiwib25EZXRlcm1pbmluZ0ZpbGVuYW1lIiwicmVtb3ZlTGlzdGVuZXIiLCJkb3dubG9hZFRvQ3JlYXRlIiwiYmluZEV2ZW50cyIsInRpbWVvdXRGb3JTdGFydCIsInByb21pc2UiLCJyYW5kb20iLCJEYXRlIiwidW50aWwiLCJwYXNzIiwid2FpdEZvckRvd25sb2FkSWZBbnkiLCJkb3dubG9hZFRvQ29tcGxldGUiLCJnZXREb3dubG9hZE1hbiIsImluc3RhbmNlIiwiY2FsY09mZnNldCIsInNjcmVlblRvdGFsIiwic2NyZWVuT2Zmc2V0Iiwib2xkT2Zmc2V0Iiwib2xkU2l6ZSIsIm5ld1NpemUiLCJwcmVmZXJTdGFydCIsImlzQ2xvc2VyVG9TdGFydCIsIm9sZEVuZE9mZnNldCIsInJlc2l6ZVdpbmRvdyIsIndpbklkIiwid2luU2l6ZSIsInN3Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsInNoIiwiYXZhaWxIZWlnaHQiLCJzbCIsImF2YWlsTGVmdCIsInN0IiwiYXZhaWxUb3AiLCJsYXN0TGVmdCIsImxhc3RUb3AiLCJsYXN0V2lkdGgiLCJsYXN0SGVpZ2h0IiwidXBkYXRlIiwiYWN0dWFsIiwiZGVzaXJlZCIsImRpZmYiLCJyZXNpemVWaWV3cG9ydCIsInB1cmVWaWV3cG9ydFNpemUiLCJjb3VudCIsIm1heFJldHJ5IiwiZ2V0V2luZG93U2l6ZSIsImxvZ1dpbmRvd1NpemUiLCJjdXJyZW50U2l6ZSIsImR4Iiwidmlld3BvcnQiLCJkeSIsIm5ld1dpblNpemUiLCJyZXNpemVWaWV3cG9ydE9mVGFiIiwicG9wdWxhdGUiLCJWaXNpb25NYW4iLCJiYXNlRGlyIiwiZnMiLCJ3cml0ZUZpbGUiLCJfX2ZpbGVQYXRoIiwicmVhZEZpbGUiLCJpc0ZpcmVmb3giLCJGaWxlTWFuIiwibWFuIiwiZ2V0VmlzaW9uTWFuIiwicGxhdGZvcm0iLCJ1cmxBZnRlclVwZ3JhZGUiLCJ1cmxBZnRlckluc3RhbGwiLCJ1cmxBZnRlclVuaW5zdGFsbCIsIlNDUkVFTlNIT1RfREVMQVkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3RhdHVzIiwiQyIsIk5PUk1BTCIsInRhYklkcyIsImxhc3RJbnNwZWN0IiwibGFzdFJlY29yZCIsInRvSW5zcGVjdCIsImZpcnN0UmVjb3JkIiwidG9SZWNvcmQiLCJsYXN0UGxheSIsImZpcnN0UGxheSIsInRvUGxheSIsInBhbmVsIiwicHVsbGJhY2siLCJoZWFydEJlYXRTZWNyZXQiLCJ1cGRhdGVIZWFydEJlYXRTZWNyZXQiLCJkaXNhYmxlZCIsImNyZWF0ZVRhYiIsImNyZWF0ZSIsImFjdGl2YXRlVGFiIiwiZm9jdXNXaW5kb3ciLCJwIiwiZm9jdXNlZCIsImdldFRhYiIsImdlbkdldFRhYklwYyIsInRhYklkTmFtZSIsInB1cnBvc2UiLCJiZWZvcmUiLCJJbmZpbml0eSIsImdldElwY0NhY2hlIiwiY2F0Y2giLCJnZXRSZWNvcmRUYWJJcGMiLCJnZXRQbGF5VGFiSXBjIiwiZ2V0UGFuZWxUYWJJcGMiLCJnZXRQbGF5VGFiIiwidGhlRXJyb3IiLCJjcmVhdGVPbmUiLCJkaXNhYmxlIiwic2hvd1BhbmVsV2luZG93Iiwic3RvcmFnZSIsImNvbmZpZyIsInNob3dTaWRlYmFyIiwidHlwZSIsImV4dGVuc2lvbiIsImdldFVSTCIsIndpdGhQYW5lbElwYyIsInNob3dCYWRnZSIsImNsZWFyIiwiY29sb3IiLCJibGluayIsImJyb3dzZXJBY3Rpb24iLCJzZXRCYWRnZVRleHQiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImdldEJhZGdlVGV4dCIsImN1clRleHQiLCJ0b2dnbGVSZWNvcmRpbmdCYWRnZSIsImlzUmVjb3JkaW5nIiwidG9nZ2xlSW5zcGVjdGluZ0JhZGdlIiwiaXNJbnNwZWN0aW5nIiwidG9nZ2xlUGxheWluZ0JhZGdlIiwiaXNQbGF5aW5nIiwiaXNVcGdyYWRlVmlld2VkIiwibG9jYWwiLCJub3RpZnlSZWNvcmRDb21tYW5kIiwiY29tbWFuZCIsIm5vdGlmSWQiLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsInRpdGxlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiam9pbiIsIm5vdGlmeUF1dG9QYXVzZSIsIm5vdGlmeUJyZWFrcG9pbnQiLCJub3RpZnlFY2hvIiwiY2xvc2VBbGxXaW5kb3dzIiwiZ2V0QWxsIiwid2lucyIsInJlbW92ZSIsImlzVGltZVRvQmFja3VwIiwiZW5hYmxlQXV0b0JhY2t1cCIsImxhc3RCYWNrdXBBY3Rpb25UaW1lIiwiYXV0b0JhY2t1cEludGVydmFsIiwicmVtYWluIiwibm90aWZ5UGFuZWxBYm91dEFjdGl2ZVRhYiIsImFjdGl2ZVRhYklkIiwicGFuZWxJcGMiLCJpbmRleE9mIiwiYXNrIiwiaXNUYWJBY3RpdmVBbmRGb2N1c2VkIiwiUExBWUVSIiwiUkVDT1JERVIiLCJvbkNsaWNrZWQiLCJpc1ZpZXdlZCIsInVwZ3JhZGVfbm90X3ZpZXdlZCIsIm9uVXBkYXRlZCIsImNoYW5nZUluZm8iLCJpc0ZvY3VzZWQiLCJvbkZvY3VzQ2hhbmdlZCIsImlwYyIsIm9uQWN0aXZhdGVkIiwiYWN0aXZlSW5mbyIsIlJFQ09SRElORyIsIm9sZFRhYklkIiwibmV3VGFiSWQiLCJvbGRUYWIiLCJuZXdUYWIiLCJ0YXJnZXRPcHRpb25zIiwic2V0SW5zcGVjdG9yVGFiSWQiLCJzaG91bGRSZW1vdmUiLCJub05vdGlmeSIsInN0YXJ0U2VuZGluZ1RpbWVvdXRTdGF0dXMiLCJvblJlcXVlc3QiLCJhcmdzIiwiSU5TUEVDVE9SIiwicmVzZXQiLCJzaG91bGRXYWl0Rm9yRG93bmxvYWRBZnRlclJ1biIsImNoZWNrSGVhcnRCZWF0Iiwic2hvdWRXYWl0Rm9yQ29tbWFuZCIsInJ1bkNvbW1hbmQiLCJyZXRyeUluZm8iLCJQTEFZSU5HIiwiZ290SGVhcnRCZWF0IiwiaW5uZXJDaGVja0hlYXJ0QmVhdCIsInNob3VsZFdhaXQiLCJzaG91bGRSZXNldElwYyIsImlzSUZyYW1lIiwidGltZW91dFBhZ2VMb2FkIiwiZXh0cmEiLCJ0aW1lb3V0SGVhcnRiZWF0IiwidGltZW91dEVsZW1lbnQiLCJpc0FuZFdhaXQiLCJpbnN0ZWFkIiwicmVwbGFjZSIsInJldHJ5Q291bnQiLCJpcGNUaW1lb3V0IiwicnVuQ29tbWFuZFdpdGhSZXRyeSIsInRpbWVyU2VjcmV0IiwicmV0cnkiLCJzaG91bGRSZXRyeSIsIm9uRmlyc3RGYWlsIiwib25GaW5hbCIsImVyciIsInJ1bkNvbW1hbmRXaXRoQ2xvc3VyZUFuZEVycm9yUHJvY2VzcyIsImVycm9ySWdub3JlIiwicnVuV2l0aEhlYXJ0QmVhdCIsImluZmluaXRlQ2hlY2tIZWFydEJlYXQiLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwic3RvcCIsImhhc1BlbmRpbmdEb3dubG9hZCIsInJhY2UiLCJydW5XaXRoSGVhcnRCZWF0UmV0cnkiLCJydW5FdGVybmFsbHkiLCJwYWdlVXJsIiwicHJlcGFyZSIsIm9wZW5VcmxJblRhYiIsImhhc09wZW5lZFVybCIsImxvY2F0b3IiLCJmb3VuZGVkTGlzdCIsImxhc3RPcGVyYXRpb24iLCJwaWNrIiwiZGljdCIsInBsYXkiLCJyZWNvcmQiLCJpbnNwZWN0IiwidmlzaW9uRmlsZU5hbWUiLCJtaW5TaW1pbGFyaXR5Iiwic2VhcmNoQXJlYSIsInN0b3JlZEltYWdlUmVjdCIsInBhdHRlcm5EcGkiLCJkcGlGcm9tRmlsZU5hbWUiLCJzY3JlZW5EcGkiLCJnZXRTY3JlZW5EcGkiLCJkcGlTY2FsZSIsImdldFBhdHRlcm5JbWFnZSIsImV4aXN0cyIsImV4aXN0ZWQiLCJyZWFkQXNEYXRhVVJMIiwic2F2ZURhdGFVcmxUb0xhc3RTY3JlZW5zaG90IiwiZGF0YVVybCIsImVuc3VyZUV4dE5hbWUiLCJnZXRUYXJnZXRJbWFnZSIsImNhcHR1cmUiLCJ0b1BsYXlUYWJJZCIsInBhdHRlcm5JbWFnZVVybCIsInRhcmdldEltYWdlSW5mbyIsInRhcmdldEltYWdlVXJsIiwic2VhcmNoSW1hZ2UiLCJhbGxvd1NpemVWYXJpYXRpb24iLCJzY2FsZURvd25SYXRpbyIsIm9mZnNldFgiLCJvZmZzZXRZIiwiSU5TUEVDVElORyIsInB1bGxiYWNrVGltZW91dCIsImlzRmlyc3QiLCJyZWNvcmROb3RpZmljYXRpb24iLCJ0Iiwib2xkVGFibElkIiwic3BsaXRJbnRvVHdvIiwicEdldFRhYnMiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlSW50IiwiaXNOYU4iLCJjb29raWVzIiwicHMiLCJjIiwicGF0aCIsIm5hbWUiLCJwcmVwYXJlRG93bmxvYWQiLCJpc1Rlc3RDYXNlIiwidGVzdENhc2UiLCJpc1Rlc3RTdWl0ZSIsInRlc3RTdWl0ZSIsImZyb20iLCJhbGxvd1J1bkZyb21Cb29rbWFyayIsImlzRmlsZVNjaGVtYSIsImlzSHR0cFNjaGVtYSIsImFsbG93UnVuRnJvbUZpbGVTY2hlbWEiLCJhbGxvd1J1bkZyb21IdHRwU2NoZW1hIiwiY2xpcGJvYXJkIiwiaW5pdElQQyIsImJnSW5pdCIsImN1aWQiLCJvbkFzayIsImluaXRPbkluc3RhbGxlZCIsInByb2Nlc3MiLCJydW50aW1lIiwic2V0VW5pbnN0YWxsVVJMIiwib25JbnN0YWxsZWQiLCJyZWFzb24iLCJpbml0UGxheVRhYiIsImdldEN1cnJlbnQiLCJpbml0RG93bmxvYWRNYW4iLCJvbkNvdW50RG93biIsImNsaXAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QixPQUFPLEtBQVA7QUFDNUIrSSxpRUFBR0EsQ0FBQywrQkFBSixFQUFxQzNOLEtBQUssQ0FBTCxDQUFyQztBQUNBNkssWUFBTXVKLE1BQU4sQ0FBYU0sUUFBYixHQUF3QjdKLE1BQU11SixNQUFOLENBQWFRLE1BQXJDO0FBQ0EvSixZQUFNdUosTUFBTixDQUFhUSxNQUFiLEdBQXNCNVUsS0FBSyxDQUFMLEVBQVFLLEVBQTlCO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0FQTSxDQUFQO0FBUUQsR0FWTSxDQUFQO0FBV0QsQ0FaRDs7QUFjQSxJQUFNc2lCLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QnhTLDZFQUFjQSxHQUFHeVMsV0FBakIsQ0FBNkIsZ0JBQVE7QUFDbkMxTSxxQkFBaUJuVyxJQUFqQixDQUFzQixvQkFBWTtBQUNoQ3laLGVBQVNFLEdBQVQsQ0FBYSxnQkFBYixlQUNLaFMsSUFETDtBQUVFaVAsY0FBTTtBQUZSO0FBSUQsS0FMRDtBQU1ELEdBUEQ7QUFRRCxDQVREOztBQVdBakg7QUFDQXFTO0FBQ0FJO0FBQ0FNO0FBQ0FFOztBQUVBaGdCLE9BQU9rZ0IsSUFBUCxHQUFjZix5REFBZCxDIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYmFja2dyb3VuZFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2V4dC9iZy5qc1wiLFwidmVuZG9yXCIsXCJiYWNrZ3JvdW5kX2Nzdl9lZGl0b3JfcG9wdXBfdmlzaW9uX2VkaXRvclwiLFwiYmFja2dyb3VuZF9wb3B1cFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG1hdGhfaGVscGVyXzEgPSByZXF1aXJlKFwiLi9tYXRoLWhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEltcGxlbWVudHMgY29tbW9uIGltYWdlIG9wZXJhdGlvbnNcclxuICovXHJcbmNsYXNzIEltYWdlSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYW4gaW1hZ2UgYXN5bmNocm9ub3VzbHkgZnJvbSBnaXZlbiBVUkwuXHJcbiAgICAgKiBAcGFyYW0gdXJsIEltYWdlIFVSTFxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxvYWRJbWFnZUFzeW5jKHVybCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhbiBpbWFnZSBkYXRhIGFzeW5jaHJvbm91c2x5IGZyb20gZ2l2ZW4gVVJMLlxyXG4gICAgICogQHBhcmFtIHVybCBJbWFnZSBVUkxcclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugb2JqZWN0IHdpdGggSW1hZ2VEYXRhXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsb2FkSW1hZ2VEYXRhQXN5bmModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0geWllbGQgdGhpcy5sb2FkSW1hZ2VBc3luYyh1cmwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0SW1hZ2VUb0ltYWdlRGF0YShpbWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBpbWFnZSBkYXRhIHRvIGRhdGEgVVJMLlxyXG4gICAgICogQHBhcmFtIGltYWdlRGF0YSBJbnB1dCBpbWFnZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgRGF0YSBVUkwuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjb252ZXJ0SW1hZ2VEYXRhVG9EYXRhVXJsKGltYWdlRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2VEYXRhLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYWNxdWlyZSAyRCBjb250ZXh0LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgICAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBpbWFnZSBlbGVtZW50IHRvIGltYWdlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gaW1nIElucHV0IGltYWdlIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBJbWFnZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29udmVydEltYWdlVG9JbWFnZURhdGEoaW1nKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBpbWcubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcubmF0dXJhbEhlaWdodDtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFjcXVpcmUgMkQgY29udGV4dC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgc29tZSBub2lzZSB0byBpbnB1dCBpbWFnZS5cclxuICAgICAqIEBwYXJhbSBpbWFnZURhdGEgSW5wdXQgaW1hZ2UgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIE5vaXNlIGFwcGxpZWQgaW1hZ2UgZGF0YS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpc3RvcnRJbWFnZShpbWFnZURhdGEpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlRGF0YS53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2VEYXRhLmhlaWdodDtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFjcXVpcmUgMkQgY29udGV4dC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGNhbnZhcy53aWR0aCAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IE1hdGgubWF4KDEwLCBNYXRoLmZsb29yKHNpemUgKiAwLjAxICogTWF0aC5yYW5kb20oKSkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgKytpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBtYXRoX2hlbHBlcl8xLk1hdGhIZWxwZXIucmFuZG9tUmFuZ2UoMCwgY2FudmFzLndpZHRoKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IG1hdGhfaGVscGVyXzEuTWF0aEhlbHBlci5yYW5kb21SYW5nZSgwLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgY29uc3QgdyA9IG1hdGhfaGVscGVyXzEuTWF0aEhlbHBlci5yYW5kb21SYW5nZSgxLCAyMCkgLyAxMDtcclxuICAgICAgICAgICAgY29uc3QgaCA9IG1hdGhfaGVscGVyXzEuTWF0aEhlbHBlci5yYW5kb21SYW5nZSgxLCAyMCkgLyAxMDtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBtYXRoX2hlbHBlcl8xLk1hdGhIZWxwZXIucmFuZG9tQ29sb3IoKTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBwYXJ0IG9mIGdpdmVuIGltYWdlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gaW1hZ2VEYXRhIElucHV0IGltYWdlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gcmVnaW9uIFJlZ2lvbiBpbiBpbnB1dCBpbWFnZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgSW1hZ2UgZGF0YSBpbiBnaXZlbiByZWdpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbWFnZURhdGFSZWdpb24oaW1hZ2VEYXRhLCByZWdpb24pIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlRGF0YS53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2VEYXRhLmhlaWdodDtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFjcXVpcmUgMkQgY29udGV4dC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0SW1hZ2VEYXRhKHJlZ2lvbi5sZWZ0LCByZWdpb24udG9wLCByZWdpb24ucmlnaHQgLSByZWdpb24ubGVmdCwgcmVnaW9uLmJvdHRvbSAtIHJlZ2lvbi50b3ApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSW1hZ2VIZWxwZXIgPSBJbWFnZUhlbHBlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE1hbmFnZXMgSm9iIGxpZmVjeWNsZS5cclxuICovXHJcbmNsYXNzIEpvYkZhY3Rvcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGpvYiB3aXRoIGEgdW5pcXVlIGlkZW50aWZpZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBKb2IgdHlwZS5cclxuICAgICAqIEBwYXJhbSBhcmdzIEpvYiBhcmd1bWVudC5cclxuICAgICAqIEByZXR1cm5zIENyZWF0ZWQgam9iLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlKHR5cGUsIGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpZCA9IEpvYkZhY3RvcnkubmV4dElkKys7XHJcbiAgICAgICAgY29uc3Qgam9iID0ge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgc3RhcnRUaW1lOiBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgICAgICAgZmluaXNoVGltZTogMCxcclxuICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAgcmVzdWx0OiB1bmRlZmluZWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBqb2I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbXBsZXRlcyBhIGpvYiB3aXRoIGdpdmVuIHJlc3VsdC5cclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFByZXZpb3VzbHkgc3RhcnRlZCBqb2IuXHJcbiAgICAgKiBAcGFyYW0gcmVzdWx0IEpvYiByZXN1bHQuXHJcbiAgICAgKiBAcmV0dXJucyBKb2Igd2l0aCByZXN1bHQgZGF0YS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNvbXBsZXRlKHJlcXVlc3QsIHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0IGpvYiA9IHtcclxuICAgICAgICAgICAgaWQ6IHJlcXVlc3QuaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHJlcXVlc3QudHlwZSxcclxuICAgICAgICAgICAgc3RhcnRUaW1lOiByZXF1ZXN0LnN0YXJ0VGltZSxcclxuICAgICAgICAgICAgZmluaXNoVGltZTogcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgICAgICAgIGFyZ3M6IHJlcXVlc3QuYXJncyxcclxuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBqb2I7XHJcbiAgICB9XHJcbn1cclxuSm9iRmFjdG9yeS5uZXh0SWQgPSAxO1xyXG5leHBvcnRzLkpvYkZhY3RvcnkgPSBKb2JGYWN0b3J5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSW1wbGVtZW50cyBjb21tb24gbWF0aGVtYXRpY3Mgb3BlcmF0aW9ucy5cclxuICovXHJcbmNsYXNzIE1hdGhIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiBnaXZlbiByYW5nZS5cclxuICAgICAqIEBwYXJhbSBtaW5WYWx1ZSBNaW5pbXVtIHZhbHVlIChpbmNsdWRpbmcpLlxyXG4gICAgICogQHBhcmFtIG1heFZhbHVlIE1heGltdW0gdmFsdWUgKGV4Y2x1ZGluZykuXHJcbiAgICAgKiBAcmV0dXJucyBHZW5lcmF0ZWQgcmFuZG9tIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJhbmRvbVJhbmdlKG1pblZhbHVlLCBtYXhWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pblZhbHVlICsgTWF0aC5yYW5kb20oKSAqIChtYXhWYWx1ZSAtIG1pblZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyByYW5kb20gQ1NTIGNvbG9yIHdpdGggYWxwaGEuXHJcbiAgICAgKiBAcmV0dXJucyBHZW5lcmF0ZWQgcmFuZG9tIGNvbG9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmFuZG9tQ29sb3IoKSB7XHJcbiAgICAgICAgY29uc3QgciA9IE1hdGhIZWxwZXIucmFuZG9tUmFuZ2UoMCwgMjU2KTtcclxuICAgICAgICBjb25zdCBnID0gTWF0aEhlbHBlci5yYW5kb21SYW5nZSgwLCAyNTYpO1xyXG4gICAgICAgIGNvbnN0IGIgPSBNYXRoSGVscGVyLnJhbmRvbVJhbmdlKDAsIDI1Nik7XHJcbiAgICAgICAgY29uc3QgYSA9IE1hdGhIZWxwZXIucmFuZG9tUmFuZ2UoMSwgMjU2KSAvIDI1NjtcclxuICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthfSlgO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWF0aEhlbHBlciA9IE1hdGhIZWxwZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGpvYl8xID0gcmVxdWlyZShcIi4vam9iXCIpO1xyXG4vKipcclxuICogV3JhcHBlciBmb3IgZW5xdWV1ZWQgam9icy5cclxuICovXHJcbmNsYXNzIEpvYlF1ZXVlSXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBKb2IgdHlwZS5cclxuICAgICAqIEBwYXJhbSBkYXRhIEpvYiBkYXRhLlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIEpvYiBjb21wbGV0aW9uIGNhbGxiYWNrLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBkYXRhLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuam9iT2JqZWN0ID0gam9iXzEuSm9iRmFjdG9yeS5jcmVhdGUodHlwZSwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVbmRlcmx5aW5nIGpvYiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGdldCBqb2IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuam9iT2JqZWN0O1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgd29ya2VyIGFuZCB3aW5kb3cuXHJcbiAqL1xyXG5jbGFzcyBXb3JrZXJDb25uZWN0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIG5ldyBjb25uZWN0aW9uIGluc3RhbmNlLlxyXG4gICAgICogQHBhcmFtIHdvcmtlclVybCBXb3JrZXIgc2NyaXB0IFVSTFxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2VIYW5kbGVyIEV2ZW50IGhhbmRsZXIgZGVsZWdhdGUgZm9yIGdlbmVyaWMgbWVzc2FnZXMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHdvcmtlclVybCwgbWVzc2FnZUhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLnF1ZXVlID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlciA9IG1lc3NhZ2VIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMud29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJVcmwpO1xyXG4gICAgICAgIHRoaXMud29ya2VyLm9ubWVzc2FnZSA9IHRoaXMuaGFuZGxlV29ya2VyQ2FsbGJhY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV29ya2VyIGV2ZW50IG1lc3NhZ2UgaGFuZGxlclxyXG4gICAgICogQHBhcmFtIGUgTWVzc2FnZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgaGFuZGxlV29ya2VyQ2FsbGJhY2soZSkge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IGUuZGF0YTtcclxuICAgICAgICBpZiAobXNnLnR5cGUgPT09IDEgLyogSm9iICovKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpvYiA9IG1zZy5kYXRhO1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWV1ZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLnF1ZXVlW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmpvYi5pZCA9PT0gam9iLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBlbnRyeS5jYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkVGltZSA9IE1hdGgubWF4KDAsIGpvYi5maW5pc2hUaW1lIC0gam9iLnN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBKb2IgIyR7am9iLmlkfSBjb21wbGV0ZWQgaW4gJHtlbGFwc2VkVGltZS50b0ZpeGVkKDApfSBtcyAoZXhjbHVkaW5nIGNhbGxiYWNrIG92ZXJoZWFkKS5gKTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhqb2IucmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gbXNnIE1lc3NhZ2UgdG8gYmUgc2VudC5cclxuICAgICAqL1xyXG4gICAgcG9zdE1lc3NhZ2UobXNnKSB7XHJcbiAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UobXNnKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5xdWV1ZXMgYSBqb2Igd2l0aCBhIGNhbGxiYWNrIGZvciBzZW5kaW5nIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBKb2IgdHlwZS5cclxuICAgICAqIEBwYXJhbSBkYXRhIEpvYiBkYXRhLlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIEpvYiBjb21wbGV0aW9uIGNhbGxiYWNrLlxyXG4gICAgICovXHJcbiAgICBwb3N0Sm9iKHR5cGUsIGRhdGEsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBKb2JRdWV1ZUl0ZW0odHlwZSwgZGF0YSwgY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMucXVldWUucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgdHlwZTogMSAvKiBKb2IgKi8sXHJcbiAgICAgICAgICAgIGRhdGE6IGl0ZW0uam9iXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVucXVldWVzIGEgam9iIHdpdGggYSBQcm9taXNlIG9iamVjdCBmb3Igc2VuZGluZyB0aGUgd29ya2VyLlxyXG4gICAgICogQHBhcmFtIHR5cGUgSm9iIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBKb2IgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugb2JqZWN0IGZvciBqb2IgY29tcGxldGlvbiBpbiB3b3JrZXIuXHJcbiAgICAgKi9cclxuICAgIHBvc3RKb2JBc3luYyh0eXBlLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5wb3N0Sm9iKHR5cGUsIGRhdGEsIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Xb3JrZXJDb25uZWN0aW9uID0gV29ya2VyQ29ubmVjdGlvbjtcclxuIiwiaW1wb3J0IEV4dCBmcm9tICcuL3dlYl9leHRlbnNpb24nXHJcbmltcG9ydCBmcyBmcm9tICcuL2ZpbGVzeXN0ZW0nXHJcbmltcG9ydCB7IGdldFNjcmVlbnNob3RNYW4gfSBmcm9tICcuLi9jb21tb24vc2NyZWVuc2hvdF9tYW4nXHJcbmltcG9ydCB7IGRlbGF5LCBkYXRhVVJJdG9CbG9iIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJ1xyXG5cclxuZnVuY3Rpb24gZ2V0QWN0aXZlVGFiSW5mbyAoKSB7XHJcbiAgcmV0dXJuIEV4dC53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAudGhlbih3aW4gPT4ge1xyXG4gICAgcmV0dXJuIEV4dC50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCB3aW5kb3dJZDogd2luLmlkIH0pXHJcbiAgICAudGhlbih0YWJzID0+IHRhYnNbMF0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlU2l6ZUZyb21EYXRhVVJJIChkYXRhVVJJKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXHJcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKHtcclxuICAgICAgICB3aWR0aDogaW1nLm5hdHVyYWxXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGltZy5uYXR1cmFsSGVpZ2h0XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpbWcuc3JjID0gZGF0YVVSSVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JlZW5zaG90UmF0aW8gKGRhdGFVUkksIHRhYklkLCBkZXZpY2VQaXhlbFJhdGlvKSB7XHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgIGltYWdlU2l6ZUZyb21EYXRhVVJJKGRhdGFVUkkpLFxyXG4gICAgRXh0LnRhYnMuZ2V0KHRhYklkKVxyXG4gIF0pXHJcbiAgLnRoZW4odHVwbGUgPT4ge1xyXG4gICAgY29uc3QgW3NpemUsIHRhYl0gPSB0dXBsZVxyXG4gICAgcmV0dXJuIHRhYi53aWR0aCAqIGRldmljZVBpeGVsUmF0aW8gLyBzaXplLndpZHRoXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlRGF0YVVSSSAoZGF0YVVSSSwgc2NhbGUpIHtcclxuICBpZiAoc2NhbGUgPT09IDEpICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGFVUkkpXHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgcmVzb2x2ZShpbWcpXHJcbiAgICB9XHJcbiAgICBpbWcuc3JjID0gZGF0YVVSSVxyXG4gIH0pXHJcbiAgLnRoZW4oaW1nID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGNyZWF0ZUNhbnZhcyhpbWcubmF0dXJhbFdpZHRoLCBpbWcubmF0dXJhbEhlaWdodCwgc2NhbGUpXHJcbiAgICByZXR1cm4gZHJhd09uQ2FudmFzKHtcclxuICAgICAgY2FudmFzLFxyXG4gICAgICBkYXRhVVJJLFxyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICB3aWR0aDogIGltZy5uYXR1cmFsV2lkdGggKiBzY2FsZSxcclxuICAgICAgaGVpZ2h0OiBpbWcubmF0dXJhbEhlaWdodCAqIHNjYWxlXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gY2FudmFzLnRvRGF0YVVSTCgpKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlU2NyZWVuICh0YWJJZCwgcHJlc2V0U2NyZWVuc2hvdFJhdGlvKSB7XHJcbiAgY29uc3QgaXMybmRBcmdGdW5jdGlvbiAgICA9IHR5cGVvZiBwcmVzZXRTY3JlZW5zaG90UmF0aW8gPT09ICdmdW5jdGlvbidcclxuICBjb25zdCBoYXNTY3JlZW5zaG90UmF0aW8gID0gcHJlc2V0U2NyZWVuc2hvdFJhdGlvICYmICFpczJuZEFyZ0Z1bmN0aW9uXHJcbiAgY29uc3QgcERhdGFVUkkgID0gRXh0LnRhYnMuY2FwdHVyZVZpc2libGVUYWIobnVsbCwgeyBmb3JtYXQ6ICdwbmcnIH0pXHJcbiAgY29uc3QgcFJhdGlvICAgID0gaGFzU2NyZWVuc2hvdFJhdGlvICA/IFByb21pc2UucmVzb2x2ZShwcmVzZXRTY3JlZW5zaG90UmF0aW8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBEYXRhVVJJLnRoZW4oZGF0YVVSSSA9PiBnZXRTY3JlZW5zaG90UmF0aW8oZGF0YVVSSSwgdGFiSWQsIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKSlcclxuXHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtwRGF0YVVSSSwgcFJhdGlvXSlcclxuICAudGhlbih0dXBsZSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YVVSSSwgc2NyZWVuc2hvdFJhdGlvXSA9IHR1cGxlXHJcbiAgICAvLyBOb3RlOiBsZWFrIHRoZSBpbmZvIGFib3V0IHNjcmVlbnNob3RSYXRpbyBvbiBwdXJwb3NlXHJcbiAgICBpZiAoIWhhc1NjcmVlbnNob3RSYXRpbyAmJiBpczJuZEFyZ0Z1bmN0aW9uKSBwcmVzZXRTY3JlZW5zaG90UmF0aW8oc2NyZWVuc2hvdFJhdGlvKVxyXG4gICAgaWYgKHNjcmVlbnNob3RSYXRpbyA9PT0gMSkgIHJldHVybiBkYXRhVVJJXHJcbiAgICByZXR1cm4gc2NhbGVEYXRhVVJJKGRhdGFVUkksIHNjcmVlbnNob3RSYXRpbylcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FwdHVyZVNjcmVlbldpdGhDYWNoZWRTY3JlZW5zaG90UmF0aW8gKCkge1xyXG4gIGxldCBzY3JlZW5zaG90UmF0aW9cclxuXHJcbiAgcmV0dXJuICh0YWJJZCkgPT4ge1xyXG4gICAgcmV0dXJuIGNhcHR1cmVTY3JlZW4odGFiSWQsIHNjcmVlbnNob3RSYXRpbyB8fCBmdW5jdGlvbiAocmF0aW8pIHsgc2NyZWVuc2hvdFJhdGlvID0gcmF0aW8gfSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5CbG9iICh0YWJJZCkge1xyXG4gIHJldHVybiBjYXB0dXJlU2NyZWVuKHRhYklkKS50aGVuKGRhdGFVUkl0b0Jsb2IpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2NyZWVuICh0YWJJZCwgZmlsZU5hbWUpIHtcclxuICByZXR1cm4gY2FwdHVyZVNjcmVlbkJsb2IodGFiSWQpXHJcbiAgLnRoZW4oc2NyZWVuQmxvYiA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2NyZWVuc2hvdE1hbigpLm92ZXJ3cml0ZShmaWxlTmFtZSwgc2NyZWVuQmxvYilcclxuICAgIC50aGVuKHVybCA9PiAoe1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGZpbGVOYW1lXHJcbiAgICB9KSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwQ29tcG9zZSAobGlzdCkge1xyXG4gIHJldHVybiBsaXN0LnJlZHVjZSgocHJldiwgZm4pID0+IHtcclxuICAgIHJldHVybiBwcmV2LnRoZW4oZm4pXHJcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFsbFNjcm9sbE9mZnNldHMgKHsgcGFnZVdpZHRoLCBwYWdlSGVpZ2h0LCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0LCB0b3BQYWRkaW5nID0gMTUwIH0pIHtcclxuICBjb25zdCB0b3BQYWQgID0gd2luZG93SGVpZ2h0ID4gdG9wUGFkZGluZyA/IHRvcFBhZGRpbmcgOiAwXHJcbiAgY29uc3QgeFN0ZXAgICA9IHdpbmRvd1dpZHRoXHJcbiAgY29uc3QgeVN0ZXAgICA9IHdpbmRvd0hlaWdodCAtIHRvcFBhZFxyXG4gIGNvbnN0IHJlc3VsdCAgPSBbXVxyXG5cclxuICAvLyBOb3RlOiBib3R0b20gY29tZXMgZmlyc3Qgc28gdGhhdCB3aGVuIHdlIHJlbmRlciB0aG9zZSBzY3JlZW5zaG90cyBvbmUgYnkgb25lIHRvIHRoZSBmaW5hbCBjYW52YXMsXHJcbiAgLy8gdGhvc2UgYXQgdG9wIHdpbGwgb3ZlcndyaXRlIHRvcCBwYWRkaW5nIHBhcnQgb2YgdGhvc2UgYXQgYm90dG9tLCBpdCBpcyB1c2VmdWwgaWYgdGhhdCBwYWdlIGhhcyBzb21lIGZpeGVkIGhlYWRlclxyXG4gIGZvciAobGV0IHkgPSBwYWdlSGVpZ2h0IC0gd2luZG93SGVpZ2h0OyB5ID4gLTEgKiB5U3RlcDsgeSAtPSB5U3RlcCkge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBwYWdlV2lkdGg7IHggKz0geFN0ZXApIHtcclxuICAgICAgcmVzdWx0LnB1c2goeyB4LCB5IH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFsbFNjcm9sbE9mZnNldHNGb3JSZWN0IChcclxuICB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSxcclxuICB7IHBhZ2VXaWR0aCwgcGFnZUhlaWdodCwgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCwgb3JpZ2luYWxYLCBvcmlnaW5hbFksIHRvcFBhZGRpbmcgPSAxNTAgfVxyXG4pIHtcclxuICBjb25zdCB0b3BQYWQgID0gd2luZG93SGVpZ2h0ID4gdG9wUGFkZGluZyA/IHRvcFBhZGRpbmcgOiAwXHJcbiAgY29uc3QgeFN0ZXAgICA9IHdpbmRvd1dpZHRoXHJcbiAgY29uc3QgeVN0ZXAgICA9IHdpbmRvd0hlaWdodCAtIHRvcFBhZFxyXG4gIGNvbnN0IHJlc3VsdCAgPSBbXVxyXG5cclxuICBmb3IgKGxldCBzeSA9IHkgKyBoZWlnaHQgLSB3aW5kb3dIZWlnaHQ7IHN5ID4geSAtIHlTdGVwOyBzeSAtPSB5U3RlcCkge1xyXG4gICAgZm9yIChsZXQgc3ggPSB4OyBzeCA8IHggKyB3aWR0aDsgc3ggKz0geFN0ZXApIHtcclxuICAgICAgcmVzdWx0LnB1c2goeyB4OiBzeCwgeTogc3kgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXN1bHQucHVzaCh7IHg6IHgsIHk6IHkgKyBoZWlnaHQgLSB3aW5kb3dIZWlnaHQgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FudmFzICh3aWR0aCwgaGVpZ2h0LCBwaXhlbFJhdGlvID0gMSkge1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgY2FudmFzLndpZHRoICA9IHdpZHRoICogcGl4ZWxSYXRpb1xyXG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBwaXhlbFJhdGlvXHJcbiAgcmV0dXJuIGNhbnZhc1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3T25DYW52YXMgKHsgY2FudmFzLCBkYXRhVVJJLCB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0pIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxyXG5cclxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCB4LCB5LCB3aWR0aCB8fCBpbWFnZS53aWR0aCwgaGVpZ2h0IHx8IGltYWdlLmhlaWdodClcclxuICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGltYWdlLnNyYyA9IGRhdGFVUklcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3aXRoUGFnZUluZm8gKHN0YXJ0Q2FwdHVyZSwgZW5kQ2FwdHVyZSwgY2FsbGJhY2spIHtcclxuICByZXR1cm4gc3RhcnRDYXB0dXJlKClcclxuICAudGhlbihwYWdlSW5mbyA9PiB7XHJcbiAgICAvLyBOb3RlOiBpbiBjYXNlIHNlbmRlciBjb250YWlucyBhbnkgbm9uLXNlcmlhbGl6YWJsZSBkYXRhXHJcbiAgICBkZWxldGUgcGFnZUluZm8uc2VuZGVyXHJcblxyXG4gICAgcmV0dXJuIGNhbGxiYWNrKHBhZ2VJbmZvKVxyXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgZW5kQ2FwdHVyZShwYWdlSW5mbylcclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUZ1bGxTY3JlZW4gKHRhYklkLCB7IHN0YXJ0Q2FwdHVyZSwgc2Nyb2xsUGFnZSwgZW5kQ2FwdHVyZSB9ID0gY2FwdHVyZUNsaWVudEFQSSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY29uc3Qgb3B0cyA9IHtcclxuICAgIGJsb2I6IGZhbHNlLFxyXG4gICAgLi4ub3B0aW9uc1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdpdGhQYWdlSW5mbyhzdGFydENhcHR1cmUsIGVuZENhcHR1cmUsIHBhZ2VJbmZvID0+IHtcclxuICAgIGNvbnN0IGRldmljZVBpeGVsUmF0aW8gPSBwYWdlSW5mby5kZXZpY2VQaXhlbFJhdGlvXHJcblxyXG4gICAgLy8gTm90ZTogY3V0IGRvd24gcGFnZSB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgICAvLyByZWZlcmVuY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwODE0ODMvbWF4aW11bS1zaXplLW9mLWEtY2FudmFzLWVsZW1lbnQvMTE1ODU5MzkjMTE1ODU5MzlcclxuICAgIGNvbnN0IG1heFNpZGUgICAgICAgPSBNYXRoLmZsb29yKDMyNzY3IC8gZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgIHBhZ2VJbmZvLnBhZ2VXaWR0aCAgPSBNYXRoLm1pbihtYXhTaWRlLCBwYWdlSW5mby5wYWdlV2lkdGgpXHJcbiAgICBwYWdlSW5mby5wYWdlSGVpZ2h0ID0gTWF0aC5taW4obWF4U2lkZSwgcGFnZUluZm8ucGFnZUhlaWdodClcclxuXHJcbiAgICBjb25zdCBjYXB0dXJlU2NyZWVuID0gY3JlYXRlQ2FwdHVyZVNjcmVlbldpdGhDYWNoZWRTY3JlZW5zaG90UmF0aW8oKVxyXG4gICAgY29uc3QgY2FudmFzICAgICAgICA9IGNyZWF0ZUNhbnZhcyhwYWdlSW5mby5wYWdlV2lkdGgsIHBhZ2VJbmZvLnBhZ2VIZWlnaHQsIGRldmljZVBpeGVsUmF0aW8pXHJcbiAgICBjb25zdCBzY3JvbGxPZmZzZXRzID0gZ2V0QWxsU2Nyb2xsT2Zmc2V0cyhwYWdlSW5mbylcclxuICAgIGNvbnN0IHRvZG9zICAgICAgICAgPSBzY3JvbGxPZmZzZXRzLm1hcCgob2Zmc2V0LCBpKSA9PiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBzY3JvbGxQYWdlKG9mZnNldCwgeyBpbmRleDogaSwgdG90YWw6IHNjcm9sbE9mZnNldHMubGVuZ3RoIH0pXHJcbiAgICAgIC50aGVuKHJlYWxPZmZzZXQgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYXB0dXJlU2NyZWVuKHRhYklkKVxyXG4gICAgICAgIC50aGVuKGRhdGFVUkkgPT4gZHJhd09uQ2FudmFzKHtcclxuICAgICAgICAgIGNhbnZhcyxcclxuICAgICAgICAgIGRhdGFVUkksXHJcbiAgICAgICAgICB4OiAgICAgIHJlYWxPZmZzZXQueCAqIGRldmljZVBpeGVsUmF0aW8sXHJcbiAgICAgICAgICB5OiAgICAgIHJlYWxPZmZzZXQueSAqIGRldmljZVBpeGVsUmF0aW8sXHJcbiAgICAgICAgICB3aWR0aDogIHBhZ2VJbmZvLndpbmRvd1dpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyxcclxuICAgICAgICAgIGhlaWdodDogcGFnZUluZm8ud2luZG93SGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpb1xyXG4gICAgICAgIH0pKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGNvbnZlcnQgPSBvcHRzLmJsb2IgPyBkYXRhVVJJdG9CbG9iIDogeCA9PiB4XHJcblxyXG4gICAgcmV0dXJuIHBDb21wb3NlKHRvZG9zKVxyXG4gICAgLnRoZW4oKCkgPT4gY29udmVydChjYW52YXMudG9EYXRhVVJMKCkpKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlU2NyZWVuSW5TZWxlY3Rpb25TaW1wbGUgKHRhYklkLCB7IHJlY3QsIGRldmljZVBpeGVsUmF0aW8gfSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY29uc3Qgb3B0cyA9IHtcclxuICAgIGJsb2I6IGZhbHNlLFxyXG4gICAgLi4ub3B0aW9uc1xyXG4gIH1cclxuICBjb25zdCBjb252ZXJ0ID0gb3B0cy5ibG9iID8gZGF0YVVSSXRvQmxvYiA6IHggPT4geFxyXG4gIGNvbnN0IHJhdGlvICAgPSBkZXZpY2VQaXhlbFJhdGlvXHJcbiAgY29uc3QgY2FudmFzICA9IGNyZWF0ZUNhbnZhcyhyZWN0LndpZHRoLCByZWN0LmhlaWdodCwgcmF0aW8pXHJcblxyXG4gIHJldHVybiBjYXB0dXJlU2NyZWVuKHRhYklkKVxyXG4gIC50aGVuKGRhdGFVUkkgPT4gZHJhd09uQ2FudmFzKHtcclxuICAgIGNhbnZhcyxcclxuICAgIGRhdGFVUkksXHJcbiAgICB4OiAgICAgIC0xICogcmVjdC54ICogZGV2aWNlUGl4ZWxSYXRpbyxcclxuICAgIHk6ICAgICAgLTEgKiByZWN0LnkgKiBkZXZpY2VQaXhlbFJhdGlvXHJcbiAgfSkpXHJcbiAgLnRoZW4oKCkgPT4gY29udmVydChjYW52YXMudG9EYXRhVVJMKCkpKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZVNjcmVlbkluU2VsZWN0aW9uICh0YWJJZCwgeyByZWN0LCBkZXZpY2VQaXhlbFJhdGlvIH0sIHsgc3RhcnRDYXB0dXJlLCBzY3JvbGxQYWdlLCBlbmRDYXB0dXJlIH0sIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IG9wdHMgPSB7XHJcbiAgICBibG9iOiBmYWxzZSxcclxuICAgIC4uLm9wdGlvbnNcclxuICB9XHJcbiAgY29uc3QgY29udmVydCA9IG9wdHMuYmxvYiA/IGRhdGFVUkl0b0Jsb2IgOiB4ID0+IHhcclxuICBjb25zdCByYXRpbyAgID0gZGV2aWNlUGl4ZWxSYXRpb1xyXG5cclxuICByZXR1cm4gd2l0aFBhZ2VJbmZvKHN0YXJ0Q2FwdHVyZSwgZW5kQ2FwdHVyZSwgcGFnZUluZm8gPT4ge1xyXG4gICAgY29uc3QgbWF4U2lkZSAgICAgICA9IE1hdGguZmxvb3IoMzI3NjcgLyByYXRpbylcclxuICAgIHBhZ2VJbmZvLnBhZ2VXaWR0aCAgPSBNYXRoLm1pbihtYXhTaWRlLCBwYWdlSW5mby5wYWdlV2lkdGgpXHJcbiAgICBwYWdlSW5mby5wYWdlSGVpZ2h0ID0gTWF0aC5taW4obWF4U2lkZSwgcGFnZUluZm8ucGFnZUhlaWdodClcclxuXHJcbiAgICBjb25zdCBjYXB0dXJlU2NyZWVuID0gY3JlYXRlQ2FwdHVyZVNjcmVlbldpdGhDYWNoZWRTY3JlZW5zaG90UmF0aW8oKVxyXG4gICAgY29uc3QgY2FudmFzICAgICAgICA9IGNyZWF0ZUNhbnZhcyhyZWN0LndpZHRoLCByZWN0LmhlaWdodCwgcmF0aW8pXHJcbiAgICBjb25zdCBzY3JvbGxPZmZzZXRzID0gZ2V0QWxsU2Nyb2xsT2Zmc2V0c0ZvclJlY3QocmVjdCwgcGFnZUluZm8pXHJcbiAgICBjb25zdCB0b2RvcyAgICAgICAgID0gc2Nyb2xsT2Zmc2V0cy5tYXAoKG9mZnNldCwgaSkgPT4gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gc2Nyb2xsUGFnZShvZmZzZXQsIHsgaW5kZXg6IGksIHRvdGFsOiBzY3JvbGxPZmZzZXRzLmxlbmd0aCB9KVxyXG4gICAgICAudGhlbihyZWFsT2Zmc2V0ID0+IHtcclxuICAgICAgICByZXR1cm4gY2FwdHVyZVNjcmVlbih0YWJJZClcclxuICAgICAgICAudGhlbihkYXRhVVJJID0+IGRyYXdPbkNhbnZhcyh7XHJcbiAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICBkYXRhVVJJLFxyXG4gICAgICAgICAgeDogICAgICAocmVhbE9mZnNldC54IC0gcmVjdC54KSAqIGRldmljZVBpeGVsUmF0aW8sXHJcbiAgICAgICAgICB5OiAgICAgIChyZWFsT2Zmc2V0LnkgLSByZWN0LnkpICogZGV2aWNlUGl4ZWxSYXRpbyxcclxuICAgICAgICAgIHdpZHRoOiAgcGFnZUluZm8ud2luZG93V2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvLFxyXG4gICAgICAgICAgaGVpZ2h0OiBwYWdlSW5mby53aW5kb3dIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvXHJcbiAgICAgICAgfSkpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBwQ29tcG9zZSh0b2RvcylcclxuICAgIC50aGVuKCgpID0+IGNvbnZlcnQoY2FudmFzLnRvRGF0YVVSTCgpKSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2FwdHVyZUNsaWVudEFQSSA9IHtcclxuICBnZXRQYWdlSW5mbzogKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuICAgIGNvbnN0IHdpZHRocyA9IFtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLFxyXG4gICAgICBib2R5ID8gYm9keS5vZmZzZXRXaWR0aCA6IDBcclxuICAgIF1cclxuICAgIGNvbnN0IGhlaWdodHMgPSBbXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsXHJcbiAgICAgIGJvZHkgPyBib2R5Lm9mZnNldEhlaWdodCA6IDBcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBwYWdlV2lkdGg6ICAgIE1hdGgubWF4KC4uLndpZHRocyksXHJcbiAgICAgIHBhZ2VIZWlnaHQ6ICAgTWF0aC5tYXgoLi4uaGVpZ2h0cyksXHJcbiAgICAgIHdpbmRvd1dpZHRoOiAgd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgIHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICBoYXNCb2R5OiAgICAgICEhYm9keSxcclxuICAgICAgb3JpZ2luYWxYOiAgICB3aW5kb3cuc2Nyb2xsWCxcclxuICAgICAgb3JpZ2luYWxZOiAgICB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgb3JpZ2luYWxPdmVyZmxvd1N0eWxlOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3csXHJcbiAgICAgIG9yaWdpbmFsQm9keU92ZXJmbG93WVN0eWxlOiBib2R5ICYmIGJvZHkuc3R5bGUub3ZlcmZsb3dZLFxyXG4gICAgICBkZXZpY2VQaXhlbFJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSxcclxuICBzdGFydENhcHR1cmU6ICh7IGhpZGVTY3JvbGxiYXIgPSB0cnVlIH0gPSB7fSkgPT4ge1xyXG4gICAgY29uc3QgYm9keSAgICAgID0gZG9jdW1lbnQuYm9keVxyXG4gICAgY29uc3QgcGFnZUluZm8gID0gY2FwdHVyZUNsaWVudEFQSS5nZXRQYWdlSW5mbygpXHJcblxyXG4gICAgLy8gTm90ZTogdHJ5IHRvIG1ha2UgcGFnZXMgd2l0aCBiYWQgc2Nyb2xsaW5nIHdvcmssIGUuZy4sIG9uZXMgd2l0aFxyXG4gICAgLy8gYGJvZHkgeyBvdmVyZmxvdy15OiBzY3JvbGw7IH1gIGNhbiBicmVhayBgd2luZG93LnNjcm9sbFRvYFxyXG4gICAgaWYgKGJvZHkpIHtcclxuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAndmlzaWJsZSdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZVNjcm9sbGJhcikge1xyXG4gICAgICAvLyBEaXNhYmxlIGFsbCBzY3JvbGxiYXJzLiBXZSdsbCByZXN0b3JlIHRoZSBzY3JvbGxiYXIgc3RhdGUgd2hlbiB3ZSdyZSBkb25lXHJcbiAgICAgIC8vIHRha2luZyB0aGUgc2NyZWVuc2hvdHMuXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwYWdlSW5mbylcclxuICB9LFxyXG4gIHNjcm9sbFBhZ2U6ICh7IHgsIHkgfSkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHgsIHkpXHJcblxyXG4gICAgcmV0dXJuIGRlbGF5KCgpID0+ICh7XHJcbiAgICAgIHg6IHdpbmRvdy5zY3JvbGxYLFxyXG4gICAgICB5OiB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgfSksIDEwMClcclxuICB9LFxyXG4gIGVuZENhcHR1cmU6IChwYWdlSW5mbykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBvcmlnaW5hbFgsIG9yaWdpbmFsWSwgaGFzQm9keSxcclxuICAgICAgb3JpZ2luYWxPdmVyZmxvd1N0eWxlLFxyXG4gICAgICBvcmlnaW5hbEJvZHlPdmVyZmxvd1lTdHlsZVxyXG4gICAgfSA9IHBhZ2VJbmZvXHJcblxyXG4gICAgaWYgKGhhc0JvZHkpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBvcmlnaW5hbEJvZHlPdmVyZmxvd1lTdHlsZVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IG9yaWdpbmFsT3ZlcmZsb3dTdHlsZVxyXG4gICAgd2luZG93LnNjcm9sbFRvKG9yaWdpbmFsWCwgb3JpZ2luYWxZKVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRnVsbFNjcmVlbiAodGFiSWQsIGZpbGVOYW1lLCBjbGllbnRBUEkpIHtcclxuICByZXR1cm4gY2FwdHVyZUZ1bGxTY3JlZW4odGFiSWQsIGNsaWVudEFQSSwgeyBibG9iOiB0cnVlIH0pXHJcbiAgLnRoZW4oc2NyZWVuQmxvYiA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2NyZWVuc2hvdE1hbigpLm92ZXJ3cml0ZShmaWxlTmFtZSwgc2NyZWVuQmxvYilcclxuICAgIC50aGVuKHVybCA9PiAoe1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGZpbGVOYW1lXHJcbiAgICB9KSlcclxuICB9KVxyXG59XHJcbiIsIlxyXG5jb25zdCBzZXRTdHlsZSA9ICgkZG9tLCBvYmopID0+IHtcclxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcclxuICAgICRkb20uc3R5bGVba2V5XSA9IG9ialtrZXldXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGV4dGFyZWEgPSAoKSA9PiB7XHJcbiAgLy8gW2xlZ2FjeSBjb2RlXSBVc2VkIHRvIHVzZSB0ZXh0YXJlYSBmb3IgY29weS9wYXN0ZVxyXG4gIC8vXHJcbiAgLy8gY29uc3QgJGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gIC8vIC8vIE5vdGU6IEZpcmVmb3ggcmVxdWlyZXMgJ2NvbnRlbnRlZGl0YWJsZScgYXR0cmlidXRlLCBldmVuIG9uIHRleHRhcmVhIGVsZW1lbnRcclxuICAvLyAvLyB3aXRob3V0IGl0LCBleGVjQ29tbWFuZCgncGFzdGUnKSB3b24ndCB3b3JrIGluIEZpcmVmb3hcclxuICAvLyAvLyByZWZlcmVuY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvSW50ZXJhY3Rfd2l0aF90aGVfY2xpcGJvYXJkI0Jyb3dzZXItc3BlY2lmaWNfY29uc2lkZXJhdGlvbnNfMlxyXG4gIC8vICRpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpXHJcbiAgLy8gJGlucHV0LmlkID0gJ2NsaXBib2FyZF90ZXh0YXJlYSdcclxuXHJcbiAgLy8gTm90ZTogMjAxOC0wOS0wMSwgRmlyZWZveCA2MS4wLjI6IE9ubHkgYWJsZSB0byBwYXN0ZSBjbGlwYm9hcmQgaW50byB0ZXh0YXJlYSBmb3Igb25lIHRpbWUuXHJcbiAgLy8gU3dpdGNoaW5nIHRvIGNvbnRlbnRlZGl0YWJsZSBkaXYgd29ya3MgZmluZVxyXG4gIGNvbnN0ICRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgJGlucHV0LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSlcclxuICAkaW5wdXQuaWQgPSAnY2xpcGJvYXJkX3RleHRhcmVhJ1xyXG5cclxuICBzZXRTdHlsZSgkaW5wdXQsIHtcclxuICAgIHBvc2l0aW9uOiAnYWJvc2x1dGUnLFxyXG4gICAgdG9wOiAnLTk5OTlweCcsXHJcbiAgICBsZWZ0OiAnLTk5OTlweCdcclxuICB9KVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRpbnB1dClcclxuICByZXR1cm4gJGlucHV0XHJcbn1cclxuXHJcbmNvbnN0IGdldFRleHRBcmVhID0gKCkgPT4ge1xyXG4gIGNvbnN0ICRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGlwYm9hcmRfdGV4dGFyZWEnKVxyXG4gIGlmICgkZWwpICByZXR1cm4gJGVsXHJcbiAgcmV0dXJuIGNyZWF0ZVRleHRhcmVhKClcclxufVxyXG5cclxuY29uc3Qgd2l0aElucHV0ID0gKGZuKSA9PiB7XHJcbiAgY29uc3QgJGlucHV0ID0gZ2V0VGV4dEFyZWEoKVxyXG4gIGxldCByZXRcclxuXHJcbiAgdHJ5IHtcclxuICAgIHJldCA9IGZuKCRpbnB1dClcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgfSBmaW5hbGx5IHtcclxuICAgICRpbnB1dC5pbm5lckhUTUwgPSAnJ1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG5jb25zdCBhcGkgPSB7XHJcbiAgc2V0OiAodGV4dCkgPT4ge1xyXG4gICAgd2l0aElucHV0KCRpbnB1dCA9PiB7XHJcbiAgICAgICRpbnB1dC5pbm5lclRleHQgPSB0ZXh0XHJcbiAgICAgICRpbnB1dC5mb2N1cygpXHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzZWxlY3RBbGwnLCBmYWxzZSwgbnVsbClcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdldDogKCkgPT4ge1xyXG4gICAgcmV0dXJuIHdpdGhJbnB1dCgkaW5wdXQgPT4ge1xyXG4gICAgICAkaW5wdXQuYmx1cigpXHJcbiAgICAgICRpbnB1dC5mb2N1cygpXHJcblxyXG4gICAgICBjb25zdCByZXMgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgncGFzdGUnKVxyXG5cclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHJldHVybiAkaW5wdXQuaW5uZXJUZXh0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAnbm8gbHVjaydcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlcclxuIiwiaW1wb3J0IEV4dCBmcm9tICcuL3dlYl9leHRlbnNpb24nXHJcbmltcG9ydCB7IHBhcnRpYWwsIGNvbXBvc2VQcm9taXNlRm4gfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuY29uc3QgUFJPVE9DT0xfVkVSU0lPTiA9ICcxLjInXHJcbmNvbnN0IENsRUFOVVBfVElNRU9VVCA9IDBcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoRGVidWdnZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgY29ubmVjdGVkOiBudWxsLFxyXG4gICAgY2xlYW51cFRpbWVyOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRTdGF0ZSA9IChvYmopID0+IHtcclxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIG9iailcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbmNlbENsZWFudXAgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhdGUuY2xlYW51cFRpbWVyKSBjbGVhclRpbWVvdXQoc3RhdGUuY2xlYW51cFRpbWVyKVxyXG4gICAgc2V0U3RhdGUoeyBjbGVhbnVwVGltZXI6IG51bGwgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzU2FtZURlYnVnZ2VlID0gKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBhICYmIGIgJiYgYS50YWJJZCAmJiBiLnRhYklkICYmIGEudGFiSWQgPT09IGIudGFiSWRcclxuICB9XHJcblxyXG4gIHJldHVybiAoZGVidWdnZWUsIGZuKSA9PiB7XHJcbiAgICBjb25zdCBhdHRhY2ggPSAoZGVidWdnZWUpID0+IHtcclxuICAgICAgaWYgKGlzU2FtZURlYnVnZ2VlKHN0YXRlLmNvbm5lY3RlZCwgZGVidWdnZWUpKSB7XHJcbiAgICAgICAgY2FuY2VsQ2xlYW51cCgpXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBkZXRhY2goc3RhdGUuY29ubmVjdGVkKVxyXG4gICAgICAudGhlbigoKSA9PiBFeHQuZGVidWdnZXIuYXR0YWNoKGRlYnVnZ2VlLCBQUk9UT0NPTF9WRVJTSU9OKSlcclxuICAgICAgLnRoZW4oKCkgPT4gc2V0U3RhdGUoeyBjb25uZWN0ZWQ6IGRlYnVnZ2VlIH0pKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGV0YWNoID0gKGRlYnVnZ2VlKSA9PiB7XHJcbiAgICAgIGlmICghZGVidWdnZWUpICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuXHJcbiAgICAgIHJldHVybiBFeHQuZGVidWdnZXIuZGV0YWNoKGRlYnVnZ2VlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmNsZWFudXBUaW1lcikgY2xlYXJUaW1lb3V0KHN0YXRlLmNsZWFudXBUaW1lcilcclxuXHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY29ubmVjdGVkOiBudWxsLFxyXG4gICAgICAgICAgY2xlYW51cFRpbWVyOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgZSA9PiBjb25zb2xlLmVycm9yKCdlcnJvciBpbiBkZXRhY2gnLCBlLnN0YWNrKSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNjaGVkdWxlRGV0YWNoID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gZGV0YWNoKGRlYnVnZ2VlKSwgQ2xFQU5VUF9USU1FT1VUKVxyXG4gICAgICBzZXRTdGF0ZSh7IGNsZWFudXBUaW1lcjogdGltZXIgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRDb21tYW5kID0gKGNtZCwgcGFyYW1zKSA9PiB7XHJcbiAgICAgIHJldHVybiBFeHQuZGVidWdnZXIuc2VuZENvbW1hbmQoZGVidWdnZWUsIGNtZCwgcGFyYW1zKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25FdmVudCA9IChjYWxsYmFjaykgPT4ge1xyXG4gICAgICBFeHQuZGVidWdnZXIub25FdmVudC5hZGRMaXN0ZW5lcihjYWxsYmFjaylcclxuICAgIH1cclxuICAgIGNvbnN0IG9uRGV0YWNoID0gKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgIEV4dC5kZWJ1Z2dlci5vbkRldGFjaC5hZGRMaXN0ZW5lcihjYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBkb25lID0gKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICBzY2hlZHVsZURldGFjaCgpXHJcblxyXG4gICAgICAgIGlmIChlcnJvcikgIHJldHVybiByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgZWxzZSAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXR0YWNoKGRlYnVnZ2VlKS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGZuKHsgc2VuZENvbW1hbmQsIG9uRXZlbnQsIG9uRGV0YWNoLCBkb25lIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlID0+IHJlamVjdChlKVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH1cclxufSkoKVxyXG5cclxuY29uc3QgX19nZXREb2N1bWVudCA9ICh7IHNlbmRDb21tYW5kLCBkb25lIH0pID0+ICgpID0+IHtcclxuICByZXR1cm4gc2VuZENvbW1hbmQoJ0RPTS5nZXREb2N1bWVudCcpXHJcbiAgLnRoZW4ob2JqID0+IG9iai5yb290KVxyXG59XHJcblxyXG5jb25zdCBfX3F1ZXJ5U2VsZWN0b3IgPSAoeyBzZW5kQ29tbWFuZCwgZG9uZSB9KSA9PiBwYXJ0aWFsKChzZWxlY3Rvciwgbm9kZUlkKSA9PiB7XHJcbiAgcmV0dXJuIHNlbmRDb21tYW5kKCdET00ucXVlcnlTZWxlY3RvcicsIHsgbm9kZUlkLCBzZWxlY3RvciB9KVxyXG4gIC50aGVuKHJlcyA9PiByZXMgJiYgcmVzLm5vZGVJZClcclxufSlcclxuXHJcbmNvbnN0IF9fc2V0RmlsZUlucHV0RmlsZXMgPSAoeyBzZW5kQ29tbWFuZCwgZG9uZSB9KSA9PiBwYXJ0aWFsKChmaWxlcywgbm9kZUlkKSA9PiB7XHJcbiAgcmV0dXJuIHNlbmRDb21tYW5kKCdET00uc2V0RmlsZUlucHV0RmlsZXMnLCB7IG5vZGVJZCwgZmlsZXMgfSlcclxuICAudGhlbigoKSA9PiB0cnVlKVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEZpbGVJbnB1dEZpbGVzID0gKHsgdGFiSWQsIHNlbGVjdG9yLCBmaWxlcyB9KSA9PiB7XHJcbiAgcmV0dXJuIHdpdGhEZWJ1Z2dlcih7IHRhYklkIH0sIGFwaSA9PiB7XHJcbiAgICBjb25zdCBnbyA9IGNvbXBvc2VQcm9taXNlRm4oXHJcbiAgICAgIF9fc2V0RmlsZUlucHV0RmlsZXMoYXBpKShmaWxlcyksXHJcbiAgICAgIF9fcXVlcnlTZWxlY3RvcihhcGkpKHNlbGVjdG9yKSxcclxuICAgICAgbm9kZSA9PiBub2RlLm5vZGVJZCxcclxuICAgICAgX19nZXREb2N1bWVudChhcGkpXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIGdvKCkudGhlbihyZXMgPT4gYXBpLmRvbmUobnVsbCwgcmVzKSlcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCBFeHQgZnJvbSAnLi93ZWJfZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgbG9nIGZyb20gJy4vbG9nJ1xyXG5pbXBvcnQgeyB1bnRpbCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgY2xhc3MgRG93bmxvYWRNYW4ge1xyXG4gIGFjdGl2ZURvd25sb2FkcyA9IFtdXHJcbiAgZXZlbnRzQm91bmQgPSBmYWxzZVxyXG5cclxuICAvKlxyXG4gICAqIFByaXZhdGUgbWV0aG9kc1xyXG4gICAqL1xyXG5cclxuICBpc0FjdGl2ZSAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEb3dubG9hZHMubGVuZ3RoID4gMFxyXG4gIH1cclxuXHJcbiAgZmluZEJ5SWQgKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEb3dubG9hZHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyQWN0aXZlRG93bmxvYWRzID0gKHByZWRpY2F0ZSkgPT4ge1xyXG4gICAgdGhpcy5hY3RpdmVEb3dubG9hZHMgPSB0aGlzLmFjdGl2ZURvd25sb2Fkcy5maWx0ZXIocHJlZGljYXRlKVxyXG5cclxuICAgIGlmICh0aGlzLmFjdGl2ZURvd25sb2Fkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy51bmJpbmRFdmVudHMoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlZExpc3RlbmVyID0gKGRvd25sb2FkSXRlbSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpICByZXR1cm5cclxuICAgIGxvZygnZG93bmxvYWQgb24gY3JlYXRlZCcsIGRvd25sb2FkSXRlbSlcclxuXHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5hY3RpdmVEb3dubG9hZHMuZmluZChpdGVtID0+ICFpdGVtLmlkKVxyXG4gICAgaWYgKCFpdGVtKSAgcmV0dXJuXHJcblxyXG4gICAgLy8gTm90ZTogMyB0aGluZ3MgdG8gZG8gb24gZG93bmxvYWQgY3JlYXRlZFxyXG4gICAgLy8gMS4gcmVjb3JkIGRvd25sb2FkIGlkXHJcbiAgICAvLyAyLiBTdGFydCB0aW1lciBmb3IgdGltZW91dFxyXG4gICAgLy8gMy4gU3RhcnQgaW50ZXJ2YWwgdGltZXIgZm9yIGNvdW50IGRvd24gbWVzc2FnZVxyXG4gICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7XHJcbiAgICAgIGlkOiBkb3dubG9hZEl0ZW0uaWQsXHJcbiAgICAgIC4uLighaXRlbS53YWl0ICYmIGl0ZW0udGltZW91dCA+IDAgPyB7fSA6IHtcclxuICAgICAgICB0aW1lb3V0VGltZXI6IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaXRlbS5yZWplY3QobmV3IEVycm9yKGBkb3dubG9hZCB0aW1lb3V0ICR7aXRlbS50aW1lb3V0IC8gMTAwMH1zYCkpXHJcbiAgICAgICAgICB0aGlzLmZpbHRlckFjdGl2ZURvd25sb2FkcyhkID0+IGl0ZW0udWlkICE9PSBkLnVpZClcclxuICAgICAgICB9LCBpdGVtLnRpbWVvdXQpLFxyXG5cclxuICAgICAgICBjb3VudERvd25UaW1lcjogc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmNvdW50RG93bkhhbmRsZXIpICByZXR1cm5cclxuXHJcbiAgICAgICAgICBjb25zdCB7IHBhc3QgPSAwIH0gPSBpdGVtXHJcbiAgICAgICAgICBjb25zdCBuZXdQYXN0ID0gcGFzdCArIDEwMDBcclxuXHJcbiAgICAgICAgICB0aGlzLmNvdW50RG93bkhhbmRsZXIoe1xyXG4gICAgICAgICAgICB0b3RhbDogaXRlbS50aW1lb3V0LFxyXG4gICAgICAgICAgICBwYXN0OiBuZXdQYXN0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7IHBhc3Q6IG5ld1Bhc3QgfSlcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNoYW5nZWRMaXN0ZW5lciA9IChkb3dubG9hZERlbHRhKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgIHJldHVyblxyXG4gICAgbG9nKCdkb3dubG9hZCBvbiBjaGFuZ2VkJywgZG93bmxvYWREZWx0YSlcclxuXHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5maW5kQnlJZChkb3dubG9hZERlbHRhLmlkKVxyXG4gICAgaWYgKCFpdGVtKSAgcmV0dXJuXHJcblxyXG4gICAgaWYgKGRvd25sb2FkRGVsdGEuc3RhdGUpIHtcclxuICAgICAgbGV0IGZuID0gKCkgPT4ge31cclxuICAgICAgbGV0IGRvbmUgPSBmYWxzZVxyXG5cclxuICAgICAgc3dpdGNoIChkb3dubG9hZERlbHRhLnN0YXRlLmN1cnJlbnQpIHtcclxuICAgICAgICBjYXNlICdjb21wbGV0ZSc6XHJcbiAgICAgICAgICBmbiA9ICgpID0+IGl0ZW0ucmVzb2x2ZSh0cnVlKVxyXG4gICAgICAgICAgZG9uZSA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgIGNhc2UgJ2ludGVycnVwdGVkJzpcclxuICAgICAgICAgIGZuID0gKCkgPT4gaXRlbS5yZWplY3QobmV3IEVycm9yKCdkb3dubG9hZCBpbnRlcnJ1cHRlZCcpKVxyXG4gICAgICAgICAgZG9uZSA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlbW92ZSB0aGlzIGRvd25sb2FkIGl0ZW0gZnJvbSBvdXIgdG9kbyBsaXN0IGlmIGl0J3MgZG9uZVxyXG4gICAgICBpZiAoZG9uZSkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChpdGVtLnRpbWVvdXRUaW1lcilcclxuICAgICAgICBjbGVhckludGVydmFsKGl0ZW0uY291bnREb3duVGltZXIpXHJcbiAgICAgICAgdGhpcy5maWx0ZXJBY3RpdmVEb3dubG9hZHMoaXRlbSA9PiBpdGVtLmlkICE9PSBkb3dubG9hZERlbHRhLmlkKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXNvbHZlIG9yIHJlamVjdCB0aGF0IHByb21pc2Ugb2JqZWN0XHJcbiAgICAgIGZuKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRldGVybWluZUZpbGVOYW1lTGlzdGVuZXIgPSAoZG93bmxvYWRJdGVtLCBzdWdnZXN0KSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgIHJldHVyblxyXG5cclxuICAgIGxvZygnZG93bmxvYWQgb24gZGV0ZXJtaW5lJywgZG93bmxvYWRJdGVtKVxyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmZpbmRCeUlkKGRvd25sb2FkSXRlbS5pZClcclxuICAgIGlmICghaXRlbSkgIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHRtcE5hbWUgICA9IGl0ZW0uZmlsZU5hbWUudHJpbSgpXHJcbiAgICBjb25zdCBmaWxlTmFtZSAgPSB0bXBOYW1lID09PSAnJyB8fCB0bXBOYW1lID09PSAnKicgPyBudWxsIDogdG1wTmFtZVxyXG5cclxuICAgIGlmIChmaWxlTmFtZSkge1xyXG4gICAgICByZXR1cm4gc3VnZ2VzdCh7XHJcbiAgICAgICAgZmlsZW5hbWU6IGZpbGVOYW1lLFxyXG4gICAgICAgIGNvbmZsaWN0QWN0aW9uOiAndW5pcXVpZnknXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kRXZlbnRzICgpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50c0JvdW5kKSByZXR1cm5cclxuXHJcbiAgICBFeHQuZG93bmxvYWRzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcih0aGlzLmNyZWF0ZWRMaXN0ZW5lcilcclxuICAgIEV4dC5kb3dubG9hZHMub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMuY2hhbmdlZExpc3RlbmVyKVxyXG5cclxuICAgIC8vIE5vdGU6IG9ubHkgY2hyb21lIHN1cHBvcnRzIGFwaSBgY2hyb21lLmRvd25sb2Fkcy5vbkRldGVybWluaW5nRmlsZW5hbWVgXHJcbiAgICBpZiAoRXh0LmRvd25sb2Fkcy5vbkRldGVybWluaW5nRmlsZW5hbWUpIHtcclxuICAgICAgRXh0LmRvd25sb2Fkcy5vbkRldGVybWluaW5nRmlsZW5hbWUuYWRkTGlzdGVuZXIodGhpcy5kZXRlcm1pbmVGaWxlTmFtZUxpc3RlbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRzQm91bmQgPSB0cnVlXHJcbiAgfVxyXG5cclxuICB1bmJpbmRFdmVudHMgKCkge1xyXG4gICAgaWYgKCF0aGlzLmV2ZW50c0JvdW5kKSAgcmV0dXJuXHJcblxyXG4gICAgaWYgKEV4dC5kb3dubG9hZHMub25DcmVhdGVkLnJlbW92ZUxpc3RlbmVyKSB7XHJcbiAgICAgIEV4dC5kb3dubG9hZHMub25DcmVhdGVkLnJlbW92ZUxpc3RlbmVyKHRoaXMuY3JlYXRlZExpc3RlbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChFeHQuZG93bmxvYWRzLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcikge1xyXG4gICAgICBFeHQuZG93bmxvYWRzLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLmNoYW5nZWRMaXN0ZW5lcilcclxuICAgIH1cclxuXHJcbiAgICBpZiAoRXh0LmRvd25sb2Fkcy5vbkRldGVybWluaW5nRmlsZW5hbWUgJiYgRXh0LmRvd25sb2Fkcy5vbkRldGVybWluaW5nRmlsZW5hbWUucmVtb3ZlTGlzdGVuZXIpIHtcclxuICAgICAgRXh0LmRvd25sb2Fkcy5vbkRldGVybWluaW5nRmlsZW5hbWUucmVtb3ZlTGlzdGVuZXIodGhpcy5kZXRlcm1pbmVGaWxlTmFtZUxpc3RlbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRzQm91bmQgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBQdWJsaWMgbWV0aG9kc1xyXG4gICAqL1xyXG5cclxuICByZXNldCAoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZURvd25sb2Fkcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoaXRlbS50aW1lb3V0VGltZXIpIGNsZWFyVGltZW91dChpdGVtLnRpbWVvdXRUaW1lcilcclxuICAgICAgaWYgKGl0ZW0uY291bnREb3duVGltZXIpIGNsZWFySW50ZXJ2YWwoaXRlbS5jb3VudERvd25UaW1lcilcclxuICAgIH0pXHJcbiAgICB0aGlzLmFjdGl2ZURvd25sb2FkcyA9IFtdXHJcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpXHJcbiAgfVxyXG5cclxuICBwcmVwYXJlRG93bmxvYWQgKGZpbGVOYW1lLCBvcHRpb25zID0ge30pIHtcclxuICAgIGNvbnN0IGRvd25sb2FkVG9DcmVhdGUgPSB0aGlzLmFjdGl2ZURvd25sb2Fkcy5maW5kKGl0ZW0gPT4gIWl0ZW0uaWQpXHJcbiAgICBpZiAoZG93bmxvYWRUb0NyZWF0ZSkgdGhyb3cgbmV3IEVycm9yKCdvbmx5IG9uZSBub3QtY3JlYXRlZCBkb3dubG9hZCBhbGxvd2VkIGF0IGEgdGltZScpXHJcblxyXG4gICAgdGhpcy5iaW5kRXZlbnRzKClcclxuXHJcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgIHRpbWVvdXRGb3JTdGFydDogMTAwMDAsXHJcbiAgICAgIHRpbWVvdXQ6IDYwMDAwLFxyXG4gICAgICB3YWl0OiBmYWxzZVxyXG4gICAgfSwgb3B0aW9ucylcclxuXHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCB1aWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIG5ldyBEYXRlKCkgKiAxXHJcblxyXG4gICAgICAvLyBOb3RlOiB3ZSBuZWVkIHRvIGNhY2hlIHByb21pc2Ugb2JqZWN0LCBzbyBoYXZlIHRvIHdhaXQgZm9yIG5leHQgdGlja1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZURvd25sb2Fkcy5wdXNoKHtcclxuICAgICAgICAgIHVpZCxcclxuICAgICAgICAgIHJlc29sdmUsXHJcbiAgICAgICAgICByZWplY3QsXHJcbiAgICAgICAgICBmaWxlTmFtZSxcclxuICAgICAgICAgIHByb21pc2UsXHJcbiAgICAgICAgICB0aW1lb3V0Rm9yU3RhcnQ6ICBvcHRzLnRpbWVvdXRGb3JTdGFydCxcclxuICAgICAgICAgIHRpbWVvdXQ6ICAgICAgICAgIG9wdHMudGltZW91dCxcclxuICAgICAgICAgIHdhaXQ6ICAgICAgICAgICAgIG9wdHMud2FpdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIDApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBwcm9taXNlXHJcbiAgfVxyXG5cclxuICB3YWl0Rm9yRG93bmxvYWRJZkFueSAoKSB7XHJcbiAgICBjb25zdCBkb3dubG9hZFRvQ3JlYXRlID0gdGhpcy5hY3RpdmVEb3dubG9hZHMuZmluZChpdGVtID0+ICFpdGVtLmlkKVxyXG4gICAgaWYgKGRvd25sb2FkVG9DcmVhdGUpIHtcclxuICAgICAgcmV0dXJuIHVudGlsKCdkb3dubG9hZCBzdGFydCcsICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGFzczogISFkb3dubG9hZFRvQ3JlYXRlLmlkLFxyXG4gICAgICAgICAgcmVzdWx0OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA1MCwgZG93bmxvYWRUb0NyZWF0ZS50aW1lb3V0Rm9yU3RhcnQpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMud2FpdEZvckRvd25sb2FkSWZBbnkoKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RlOiBjaGVjayBpZiBpZCBleGlzdHMsIGJlY2F1c2UgaXQgbWVhbnMgdGhpcyBkb3dubG9hZCBpdGVtIGlzIGNyZWF0ZWRcclxuICAgIGNvbnN0IGRvd25sb2FkVG9Db21wbGV0ZSA9IHRoaXMuYWN0aXZlRG93bmxvYWRzLmZpbmQoaXRlbSA9PiBpdGVtLndhaXQgJiYgaXRlbS5pZClcclxuICAgIGlmICghZG93bmxvYWRUb0NvbXBsZXRlKSAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gICAgcmV0dXJuIGRvd25sb2FkVG9Db21wbGV0ZS5wcm9taXNlLnRoZW4oKCkgPT4gdGhpcy53YWl0Rm9yRG93bmxvYWRJZkFueSgpKVxyXG4gIH1cclxuXHJcbiAgb25Db3VudERvd24gKGZuKSB7XHJcbiAgICB0aGlzLmNvdW50RG93bkhhbmRsZXIgPSBmblxyXG4gIH1cclxuXHJcbiAgaGFzUGVuZGluZ0Rvd25sb2FkICgpIHtcclxuICAgIGNvbnN0IGRvd25sb2FkVG9DcmVhdGUgPSB0aGlzLmFjdGl2ZURvd25sb2Fkcy5maW5kKGl0ZW0gPT4gIWl0ZW0uaWQpXHJcbiAgICByZXR1cm4gISFkb3dubG9hZFRvQ3JlYXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RG93bmxvYWRNYW4gPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBpbnN0YW5jZVxyXG5cclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICBpbnN0YW5jZSA9IG5ldyBEb3dubG9hZE1hbigpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlXHJcbiAgfVxyXG59KSgpXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHdvcmtlcl9jb25uZWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW1hZ2VzZWFyY2gtdGVzdGV4dGVuc2lvbi9zcmMvdHMvd29ya2VyLWNvbm5lY3Rpb25cIik7XHJcbmNvbnN0IGltYWdlX2hlbHBlcl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2ltYWdlc2VhcmNoLXRlc3RleHRlbnNpb24vc3JjL3RzL2ltYWdlLWhlbHBlclwiKTtcclxubGV0IGlzTW9kdWxlUmVhZHkgPSBmYWxzZTtcclxubGV0IHdvcmtlciA9IG5ldyB3b3JrZXJfY29ubmVjdGlvbl8xLldvcmtlckNvbm5lY3Rpb24oXCIvd29ya2VyLmpzXCIsIHdvcmtlck1lc3NhZ2VIYW5kbGVyKTtcclxuLyoqXHJcbiAqIExpc3RlbnMgcmVndWxhciBtZXNzYWdlcyBmcm9tIHRoZSB3b3JrZXIuXHJcbiAqIEBwYXJhbSBtc2cgUmVjZWl2ZWQgd29ya2VyIG1lc3NhZ2UuXHJcbiAqL1xyXG5mdW5jdGlvbiB3b3JrZXJNZXNzYWdlSGFuZGxlcihtc2cpIHtcclxuICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcclxuICAgICAgICBjYXNlIDAgLyogSW5pdCAqLzpcclxuICAgICAgICAgICAgaXNNb2R1bGVSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbnN1cHBvcnRlZCB3b3JrZXIgbWVzc2FnZTogXCIsIG1zZyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBTY2hlZHVsZXMgYSB0ZW1wbGF0ZSBtYXRjaGluZyB0YXNrIGZvciB0aGUgd2ViIHdvcmtlci5cclxuICogQHBhcmFtIGltYWdlIEltYWdlIHdoZXJlIHRoZSBzZWFyY2ggd2lsbCBiZSBydW5uaW5nLlxyXG4gKiBAcGFyYW0gcGF0dGVybiBJbWFnZSB3aGljaCB3aWxsIHNlYXJjaGVkLlxyXG4gKiBAcGFyYW0gbWluU2ltaWxhcml0eSBNaW5pbXVtIHNpbWlsYXJpdHkgc2NvcmUgdG8gYWNjZXB0IGEgbWF0Y2guXHJcbiAqIEBwYXJhbSBhbGxvd1NpemVWYXJpYXRpb24gQWxsb3dzIHNpemUgdmFyaWF0aW9uIGR1cmluZyBpbWFnZSBzZWFyY2guXHJcbiAqIEByZXR1cm5zIFByb21pc2Ugb2JqZWN0IHdpdGggbWF0Y2hlcyByZWdpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gcG9zdEltYWdlU2VhcmNoQXN5bmMoaW1hZ2UsIHBhdHRlcm4sIG1pblNpbWlsYXJpdHksIGFsbG93U2l6ZVZhcmlhdGlvbikge1xyXG4gICAgY29uc3Qgam9iRGF0YSA9IHtcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBwYXR0ZXJuLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbWluU2ltaWxhcml0eSxcclxuICAgICAgICAgICAgYWxsb3dTaXplVmFyaWF0aW9uLFxyXG4gICAgICAgICAgICBlbmFibGVHcmVlblBpbmtCb3hlczogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlcXVpcmVHcmVlblBpbmtCb3hlczogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHdvcmtlci5wb3N0Sm9iQXN5bmMoMiAvKiBJbWFnZVNlYXJjaCAqLywgam9iRGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gc2VhcmNoSW1hZ2VCZXN0T25lKHJlcSkge1xyXG4gICAgcmV0dXJuIHNlYXJjaEltYWdlKHJlcSlcclxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHJlc3VsdHNbMF0pO1xyXG59XHJcbmV4cG9ydHMuc2VhcmNoSW1hZ2VCZXN0T25lID0gc2VhcmNoSW1hZ2VCZXN0T25lO1xyXG5mdW5jdGlvbiBzZWFyY2hJbWFnZShyZXEpIHtcclxuICAgIGlmICghaXNNb2R1bGVSZWFkeSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxlIGlzIG5vdCByZWFkeSB5ZXQuJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtaW5TaW1pbGFyaXR5ID0gTWF0aC5tYXgoMC4xLCBNYXRoLm1pbigxLjAsIHJlcS5taW5TaW1pbGFyaXR5KSk7XHJcbiAgICBjb25zdCB7IGFsbG93U2l6ZVZhcmlhdGlvbiB9ID0gcmVxO1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICBpbWFnZV9oZWxwZXJfMS5JbWFnZUhlbHBlci5sb2FkSW1hZ2VEYXRhQXN5bmMocmVxLnRhcmdldEltYWdlVXJsKSxcclxuICAgICAgICBpbWFnZV9oZWxwZXJfMS5JbWFnZUhlbHBlci5sb2FkSW1hZ2VEYXRhQXN5bmMocmVxLnBhdHRlcm5JbWFnZVVybClcclxuICAgIF0pXHJcbiAgICAgICAgLnRoZW4oKFtzY3JlZW5zaG90SW1hZ2VEYXRhLCBwYXR0ZXJuSW1hZ2VEYXRhXSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwb3N0SW1hZ2VTZWFyY2hBc3luYyhzY3JlZW5zaG90SW1hZ2VEYXRhLCBwYXR0ZXJuSW1hZ2VEYXRhLCBtaW5TaW1pbGFyaXR5LCBhbGxvd1NpemVWYXJpYXRpb24pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbnNHcmVlblBpbmtCb3hlcywgZXJyb3JDb2RlLCByZWdpb25zIH0gPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHJldHVybiByZWdpb25zLm1hcChyID0+ICh7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiByLm1hdGNoZWRSZWN0LmxlZnQgLyByZXEuc2NhbGVEb3duUmF0aW8gKyByZXEub2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgIHRvcDogci5tYXRjaGVkUmVjdC50b3AgLyByZXEuc2NhbGVEb3duUmF0aW8gKyByZXEub2Zmc2V0WSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiByLm1hdGNoZWRSZWN0LndpZHRoIC8gcmVxLnNjYWxlRG93blJhdGlvLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiByLm1hdGNoZWRSZWN0LmhlaWdodCAvIHJlcS5zY2FsZURvd25SYXRpbyxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiByLnNjb3JlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2VhcmNoSW1hZ2UgPSBzZWFyY2hJbWFnZTtcclxuIiwiaW1wb3J0IEV4dCBmcm9tICcuL3dlYl9leHRlbnNpb24nXHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IGxvZyBmcm9tICcuL2xvZydcclxuXHJcbmNvbnN0IGNhbGNPZmZzZXQgPSAoc2NyZWVuVG90YWwsIHNjcmVlbk9mZnNldCwgb2xkT2Zmc2V0LCBvbGRTaXplLCBuZXdTaXplLCBwcmVmZXJTdGFydCA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgaXNDbG9zZXJUb1N0YXJ0ID0gcHJlZmVyU3RhcnQgfHwgb2xkT2Zmc2V0IDwgKHNjcmVlblRvdGFsIC0gb2xkT2Zmc2V0IC0gb2xkU2l6ZSlcclxuXHJcbiAgbG9nKCdjYWxjT2Zmc2V0Jywgc2NyZWVuVG90YWwsIG9sZE9mZnNldCwgb2xkU2l6ZSwgbmV3U2l6ZSwgcHJlZmVyU3RhcnQpXHJcblxyXG4gIGlmIChpc0Nsb3NlclRvU3RhcnQpIHtcclxuICAgIHJldHVybiBvbGRPZmZzZXRcclxuXHJcbiAgICAvLyBOb3RlOiBjb21tZW50IG91dCBhIHNtYXJ0ZXIgcG9zaXRpb24gZm9yIG5vd1xyXG4gICAgLy8gaWYgKG5ld1NpemUgPCBvbGRTaXplKSB7XHJcbiAgICAvLyAgIHJldHVybiBvbGRPZmZzZXRcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAobmV3U2l6ZSA8IG9sZFNpemUgKyBvbGRPZmZzZXQgLSBzY3JlZW5PZmZzZXQpIHtcclxuICAgIC8vICAgcmV0dXJuIG9sZFNpemUgKyBvbGRPZmZzZXQgLSBuZXdTaXplXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHNjcmVlbk9mZnNldFxyXG4gIH1cclxuXHJcbiAgaWYgKCFpc0Nsb3NlclRvU3RhcnQpIHtcclxuICAgIGNvbnN0IG9sZEVuZE9mZnNldCA9IHNjcmVlbk9mZnNldCArIHNjcmVlblRvdGFsIC0gb2xkT2Zmc2V0IC0gb2xkU2l6ZVxyXG5cclxuICAgIHJldHVybiBvbGRTaXplICsgb2xkT2Zmc2V0IC0gbmV3U2l6ZVxyXG5cclxuICAgIC8vIE5vdGU6IGNvbW1lbnQgb3V0IGEgc21hcnRlciBwb3NpdGlvbiBmb3Igbm93XHJcbiAgICAvLyBpZiAobmV3U2l6ZSA8IG9sZFNpemUpIHtcclxuICAgIC8vICAgcmV0dXJuIG9sZFNpemUgKyBvbGRPZmZzZXQgLSBuZXdTaXplXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKG5ld1NpemUgPCBvbGRTaXplICsgb2xkRW5kT2Zmc2V0KSB7XHJcbiAgICAvLyAgIHJldHVybiBvbGRPZmZzZXRcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZXR1cm4gc2NyZWVuT2Zmc2V0ICsgc2NyZWVuVG90YWwgLSBuZXdTaXplXHJcbiAgfVxyXG59XHJcblxyXG4vLyB3aW5TaXplLndpZHRoXHJcbi8vIHdpblNpemUuaGVpZ2h0XHJcbmV4cG9ydCBmdW5jdGlvbiByZXNpemVXaW5kb3cgKHdpbklkLCB3aW5TaXplKSB7XHJcbiAgY29uc3Qgc3cgICAgPSBzY3JlZW4uYXZhaWxXaWR0aFxyXG4gIGNvbnN0IHNoICAgID0gc2NyZWVuLmF2YWlsSGVpZ2h0XHJcbiAgY29uc3Qgc2wgICAgPSBzY3JlZW4uYXZhaWxMZWZ0XHJcbiAgY29uc3Qgc3QgICAgPSBzY3JlZW4uYXZhaWxUb3BcclxuXHJcbiAgcmV0dXJuIEV4dC53aW5kb3dzLmdldCh3aW5JZClcclxuICAudGhlbih3aW4gPT4ge1xyXG4gICAgY29uc3QgbGFzdExlZnQgICAgPSB3aW4ubGVmdFxyXG4gICAgY29uc3QgbGFzdFRvcCAgICAgPSB3aW4udG9wXHJcbiAgICBjb25zdCBsYXN0V2lkdGggICA9IHdpbi53aWR0aFxyXG4gICAgY29uc3QgbGFzdEhlaWdodCAgPSB3aW4uaGVpZ2h0XHJcblxyXG4gICAgcmV0dXJuIEV4dC53aW5kb3dzLnVwZGF0ZSh3aW5JZCwgd2luU2l6ZSlcclxuICAgIC50aGVuKHdpbiA9PiB7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSBjYWxjT2Zmc2V0KHN3LCBzbCwgbGFzdExlZnQsIGxhc3RXaWR0aCwgd2luLndpZHRoKVxyXG4gICAgICBjb25zdCB0b3AgID0gY2FsY09mZnNldChzaCwgc3QsIGxhc3RUb3AsIGxhc3RIZWlnaHQsIHdpbi5oZWlnaHQsIHRydWUpXHJcblxyXG4gICAgICBFeHQud2luZG93cy51cGRhdGUod2luSWQsIHsgbGVmdCwgdG9wIH0pXHJcblxyXG4gICAgICBjb25zdCBhY3R1YWwgPSB7XHJcbiAgICAgICAgd2lkdGg6ICB3aW4ud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW4uaGVpZ2h0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWN0dWFsLFxyXG4gICAgICAgIGRlc2lyZWQ6ICB3aW5TaXplLFxyXG4gICAgICAgIGRpZmY6ICAgICBbJ3dpZHRoJywgJ2hlaWdodCddLmZpbHRlcihrZXkgPT4gYWN0dWFsW2tleV0gIT09IHdpblNpemVba2V5XSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG4vLyBwdXJlVmlld3BvcnRTaXplLndpZHRoXHJcbi8vIHB1cmVWaWV3cG9ydFNpemUuaGVpZ2h0XHJcbi8vIHJlZmVyZW5jZVZpZXdwb3J0V2luZG93U2l6ZS53aW5kb3cud2lkdGhcclxuLy8gcmVmZXJlbmNlVmlld3BvcnRXaW5kb3dTaXplLndpbmRvdy5oZWlnaHRcclxuLy8gcmVmZXJlbmNlVmlld3BvcnRXaW5kb3dTaXplLnZpZXdwb3J0LndpZHRoXHJcbi8vIHJlZmVyZW5jZVZpZXdwb3J0V2luZG93U2l6ZS52aWV3cG9ydC5oZWlnaHRcclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZVZpZXdwb3J0ICh3aW5JZCwgcHVyZVZpZXdwb3J0U2l6ZSwgY291bnQgPSAxKSB7XHJcbiAgY29uc3QgbWF4UmV0cnkgPSAyXHJcbiAgbG9nKCdyZXNpemVWaWV3cG9ydCwgUk9VTkQnLCBjb3VudClcclxuXHJcbiAgcmV0dXJuIGdldFdpbmRvd1NpemUod2luSWQpXHJcbiAgLnRoZW4oY3VycmVudFNpemUgPT4ge1xyXG4gICAgbG9nKCdjdXJyZW50U2l6ZSEhISEnKVxyXG4gICAgbG9nV2luZG93U2l6ZShjdXJyZW50U2l6ZSlcclxuXHJcbiAgICBjb25zdCBkeCA9IGN1cnJlbnRTaXplLndpbmRvdy53aWR0aCAtIGN1cnJlbnRTaXplLnZpZXdwb3J0LndpZHRoXHJcbiAgICBjb25zdCBkeSA9IGN1cnJlbnRTaXplLndpbmRvdy5oZWlnaHQgLSBjdXJyZW50U2l6ZS52aWV3cG9ydC5oZWlnaHRcclxuXHJcbiAgICBjb25zdCBuZXdXaW5TaXplID0ge1xyXG4gICAgICB3aWR0aDogIGR4ICsgcHVyZVZpZXdwb3J0U2l6ZS53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBkeSArIHB1cmVWaWV3cG9ydFNpemUuaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKCdzaXplIHNldCB0bycsIG5ld1dpblNpemUpXHJcbiAgICByZXR1cm4gcmVzaXplV2luZG93KHdpbklkLCBuZXdXaW5TaXplKVxyXG4gICAgLnRoZW4oKCkgPT4gZ2V0V2luZG93U2l6ZSh3aW5JZCkpXHJcbiAgICAudGhlbihuZXdTaXplID0+IHtcclxuICAgICAgbG9nKCduZXdTaXplISEhIScpXHJcbiAgICAgIGxvZ1dpbmRvd1NpemUobmV3U2l6ZSlcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgYWN0dWFsOiAgIG5ld1NpemUudmlld3BvcnQsXHJcbiAgICAgICAgZGVzaXJlZDogIHB1cmVWaWV3cG9ydFNpemUsXHJcbiAgICAgICAgZGlmZjogICAgIFsnd2lkdGgnLCAnaGVpZ2h0J10uZmlsdGVyKGtleSA9PiBuZXdTaXplLnZpZXdwb3J0W2tleV0gIT09IHB1cmVWaWV3cG9ydFNpemVba2V5XSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRhdGEuZGlmZi5sZW5ndGggPT09IDAgfHwgY291bnQgPj0gbWF4UmV0cnkpIHtcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGVsYXkoKCkgPT4ge30sIDApXHJcbiAgICAgIC50aGVuKCgpID0+IHJlc2l6ZVZpZXdwb3J0KHdpbklkLCBwdXJlVmlld3BvcnRTaXplLCBjb3VudCArIDEpKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplVmlld3BvcnRPZlRhYiAodGFiSWQsIHB1cmVWaWV3cG9ydFNpemUpIHtcclxuICByZXR1cm4gRXh0LnRhYnMuZ2V0KHRhYklkKVxyXG4gIC50aGVuKHRhYiA9PiByZXNpemVWaWV3cG9ydCh0YWIud2luZG93SWQsIHB1cmVWaWV3cG9ydFNpemUpKVxyXG59XHJcblxyXG4vLyBzaXplLndpbmRvdy53aWR0aFxyXG4vLyBzaXplLndpbmRvdy5oZWlnaHRcclxuLy8gc2l6ZS53aW5kb3cubGVmdFxyXG4vLyBzaXplLndpbmRvdy50b3BcclxuLy8gc2l6ZS52aWV3cG9ydC53ZGl0aFxyXG4vLyBzaXplLnZpZXdwb3J0LmhlaWdodFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93U2l6ZSAod2luSWQpIHtcclxuICByZXR1cm4gRXh0LndpbmRvd3MuZ2V0KHdpbklkLCB7IHBvcHVsYXRlOiB0cnVlIH0pXHJcbiAgLnRoZW4od2luID0+IHtcclxuICAgIGNvbnN0IHRhYiA9IHdpbi50YWJzLmZpbmQodGFiID0+IHRhYi5hY3RpdmUpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgd2lkdGg6ICB3aW4ud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW4uaGVpZ2h0LFxyXG4gICAgICAgIGxlZnQ6ICAgd2luLmxlZnQsXHJcbiAgICAgICAgdG9wOiAgICB3aW4udG9wXHJcbiAgICAgIH0sXHJcbiAgICAgIHZpZXdwb3J0OiB7XHJcbiAgICAgICAgd2lkdGg6ICB0YWIud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB0YWIuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dXaW5kb3dTaXplICh3aW5TaXplKSB7XHJcbiAgbG9nKHdpblNpemUud2luZG93LCB3aW5TaXplLnZpZXdwb3J0KVxyXG4gIGxvZygnZHggPSAnLCB3aW5TaXplLndpbmRvdy53aWR0aCAtIHdpblNpemUudmlld3BvcnQud2lkdGgpXHJcbiAgbG9nKCdkeSA9ICcsIHdpblNpemUud2luZG93LmhlaWdodCAtIHdpblNpemUudmlld3BvcnQuaGVpZ2h0KVxyXG59XHJcbiIsImltcG9ydCBmcyBmcm9tICcuL2ZpbGVzeXN0ZW0nXHJcbmltcG9ydCBGaWxlTWFuIGZyb20gJy4vZmlsZV9tYW4nXHJcbmltcG9ydCBFeHQgZnJvbSAnLi93ZWJfZXh0ZW5zaW9uJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpc2lvbk1hbiBleHRlbmRzIEZpbGVNYW4ge1xyXG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcclxuICAgIHN1cGVyKHsgLi4ub3B0cywgYmFzZURpcjogJ3Zpc2lvbnMnIH0pXHJcbiAgfVxyXG5cclxuICB3cml0ZSAoZmlsZU5hbWUsIGJsb2IpIHtcclxuICAgIHJldHVybiBmcy53cml0ZUZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lLCB0cnVlKSwgYmxvYilcclxuICB9XHJcblxyXG4gIHJlYWQgKGZpbGVOYW1lKSB7XHJcbiAgICByZXR1cm4gZnMucmVhZEZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSwgJ0FycmF5QnVmZmVyJylcclxuICB9XHJcblxyXG4gIHJlYWRBc0RhdGFVUkwgKGZpbGVOYW1lKSB7XHJcbiAgICByZXR1cm4gZnMucmVhZEZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSwgJ0RhdGFVUkwnKVxyXG4gIH1cclxuXHJcbiAgZ2V0TGluayAoZmlsZU5hbWUpIHtcclxuICAgIGlmICghRXh0LmlzRmlyZWZveCgpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN1cGVyLmdldExpbmsoZmlsZU5hbWUpKVxyXG5cclxuICAgIC8vIE5vdGU6IEV4Y2VwdCBmb3IgQ2hyb21lLCB0aGUgZmlsZXN5c3RlbSBBUEkgd2UgdXNlIGlzIGEgcG9seWZpbGwgZnJvbSBpZGIuZmlsZXN5c3RlbS5qc1xyXG4gICAgLy8gaWRiLmZpbGVzeXN0ZW0uanMgd29ya3MgZ3JlYXQgYnV0IHRoZSBvbmx5IHByb2JsZW0gaXMgdGhhdCB5b3UgY2FuJ3QgdXNlICdmaWxlc3lzdGVtOicgc2NoZW1hIHRvIHJldHJpZXZlIHRoYXQgZmlsZVxyXG4gICAgLy8gc28gaGVyZSwgd2UgaGF2ZSB0byBjb252ZXJ0IHRoZSBmaWxlIHRvIGRhdGEgdXJsXHJcbiAgICByZXR1cm4gZnMucmVhZEZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSwgJ0RhdGFVUkwnKVxyXG4gIH1cclxufVxyXG5cclxubGV0IG1hblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpc2lvbk1hbiAob3B0cyA9IHt9KSB7XHJcbiAgaWYgKG9wdHMpIHtcclxuICAgIG1hbiA9IG5ldyBWaXNpb25NYW4ob3B0cylcclxuICB9XHJcblxyXG4gIGlmICghbWFuKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Zpc2lvbiBtYW5hZ2VyIG5vdCBpbml0aWFsaXplZCcpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWFuXHJcbn1cclxuIiwiaW1wb3J0IEV4dCBmcm9tICcuLi9jb21tb24vd2ViX2V4dGVuc2lvbidcclxuXHJcbmNvbnN0IHBsYXRmb3JtID0gRXh0LmlzRmlyZWZveCgpID8gJ2ZpcmVmb3gnIDogJ2Nocm9tZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB1cmxBZnRlclVwZ3JhZGU6IGBodHRwczovL2E5dDkuY29tL2thbnR1L3dlYi1hdXRvbWF0aW9uLyR7cGxhdGZvcm19L3doYXRzbmV3YCxcclxuICB1cmxBZnRlckluc3RhbGw6IGBodHRwczovL2E5dDkuY29tL2thbnR1L3dlYi1hdXRvbWF0aW9uLyR7cGxhdGZvcm19L3dlbGNvbWVgLFxyXG4gIHVybEFmdGVyVW5pbnN0YWxsOiBgaHR0cHM6Ly9hOXQ5LmNvbS9rYW50dS93ZWItYXV0b21hdGlvbi8ke3BsYXRmb3JtfS93aHlgXHJcbn1cclxuIiwiaW1wb3J0IEV4dCBmcm9tICcuLi9jb21tb24vd2ViX2V4dGVuc2lvbidcclxuaW1wb3J0IHtcclxuICB1bnRpbCwgZGVsYXksIHNldEluLCBwaWNrLCBzcGxpdEludG9Ud28sIHJldHJ5LCB1aWQsXHJcbiAgcmFuZG9tTmFtZSwgZGF0YVVSSXRvQmxvYiwgZ2V0U2NyZWVuRHBpLCBkcGlGcm9tRmlsZU5hbWUsIGVuc3VyZUV4dE5hbWVcclxufSBmcm9tICcuLi9jb21tb24vdXRpbHMnXHJcbmltcG9ydCB7IGJnSW5pdCB9IGZyb20gJy4uL2NvbW1vbi9pcGMvaXBjX2JnX2NzJ1xyXG5pbXBvcnQgKiBhcyBDIGZyb20gJy4uL2NvbW1vbi9jb25zdGFudCdcclxuaW1wb3J0IGxvZyBmcm9tICcuLi9jb21tb24vbG9nJ1xyXG5pbXBvcnQgY2xpcGJvYXJkIGZyb20gJy4uL2NvbW1vbi9jbGlwYm9hcmQnXHJcbmltcG9ydCB7XHJcbiAgc2F2ZVNjcmVlbiwgc2F2ZUZ1bGxTY3JlZW4sIGNhcHR1cmVTY3JlZW5JblNlbGVjdGlvbiwgc2NhbGVEYXRhVVJJLFxyXG4gIGNhcHR1cmVGdWxsU2NyZWVuLCBjYXB0dXJlU2NyZWVuLCBjYXB0dXJlU2NyZWVuSW5TZWxlY3Rpb25TaW1wbGVcclxufSBmcm9tICcuLi9jb21tb24vY2FwdHVyZV9zY3JlZW5zaG90J1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi9jb21tb24vc3RvcmFnZSdcclxuaW1wb3J0IHsgc2V0RmlsZUlucHV0RmlsZXMgfSBmcm9tICcuLi9jb21tb24vZGVidWdnZXInXHJcbmltcG9ydCB7IGdldERvd25sb2FkTWFuIH0gZnJvbSAnLi4vY29tbW9uL2Rvd25sb2FkX21hbidcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IGdldFNjcmVlbnNob3RNYW4gfSBmcm9tICcuLi9jb21tb24vc2NyZWVuc2hvdF9tYW4nXHJcbmltcG9ydCB7IHNlYXJjaEltYWdlIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlc2VhcmNoL2FkYXB0b3IudHMnXHJcbmltcG9ydCB7IGdldFZpc2lvbk1hbiB9IGZyb20gJy4uL2NvbW1vbi92aXNpb25fbWFuJztcclxuaW1wb3J0IHsgcmVzaXplVmlld3BvcnRPZlRhYiB9IGZyb20gJy4uL2NvbW1vbi9yZXNpemVfd2luZG93J1xyXG5pbXBvcnQgeyBnZXRJcGNDYWNoZSB9IGZyb20gJy4uL2NvbW1vbi9pcGMvaXBjX2NhY2hlJ1xyXG5cclxuLy8gTm90ZTogaW4gVWJ1bnR1LCB5b3UgaGF2ZSB0byB0YWtlIHNvbWUgZGVsYXkgYWZ0ZXIgYWN0aXZhdGluZyBzb21lIHRhYiwgb3RoZXJ3aXNlIHRoZXJlIGFyZSBjaGFuY2VzXHJcbi8vIENocm9tZSBzdGlsbCB0aGluayB0aGUgcGFuZWwgaXMgdGhlIHdpbmRvdyB5b3Ugd2FudCB0byB0YWtlIHNjcmVlbnNob3QsIGFuZCB3ZWlyZCBlbm91Z2ggaW4gVWJ1bnR1LFxyXG4vLyBZb3UgY2FuJ3QgdGFrZSBzY3JlZW5zaG90IG9mIHRhYnMgd2l0aCAnY2hyb21lLWV4dGVuc2lvbjovLycgc2NoZW1hLCBldmVuIGlmIGl0J3MgeW91ciBvd24gZXh0ZW5zaW9uXHJcbmNvbnN0IFNDUkVFTlNIT1RfREVMQVkgPSAvTGludXgvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDIwMCA6IDBcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIHN0YXR1czogQy5BUFBfU1RBVFVTLk5PUk1BTCxcclxuICB0YWJJZHM6IHtcclxuICAgIGxhc3RJbnNwZWN0OiBudWxsLFxyXG4gICAgbGFzdFJlY29yZDogbnVsbCxcclxuICAgIHRvSW5zcGVjdDogbnVsbCxcclxuICAgIGZpcnN0UmVjb3JkOiBudWxsLFxyXG4gICAgdG9SZWNvcmQ6IG51bGwsXHJcbiAgICBsYXN0UGxheTogbnVsbCxcclxuICAgIGZpcnN0UGxheTogbnVsbCxcclxuICAgIHRvUGxheTogbnVsbCxcclxuICAgIHBhbmVsOiBudWxsXHJcbiAgfSxcclxuICBwdWxsYmFjazogZmFsc2UsXHJcbiAgLy8gTm90ZTogaGVhcnRCZWF0U2VjcmV0ID0gLTEsIG1lYW5zIG5vIGhlYXJ0IGJlYXQgYXZhaWxhYmxlLCBhbmQgcGFuZWwgc2hvdWxkIG5vdCByZXRyeSBvbiBoZWFydCBiZWF0IGxvc3RcclxuICBoZWFydEJlYXRTZWNyZXQ6IDBcclxufVxyXG5cclxuY29uc3QgdXBkYXRlSGVhcnRCZWF0U2VjcmV0ID0gKHsgZGlzYWJsZWQgPSBmYWxzZSB9ID0ge30pID0+IHtcclxuICBpZiAoZGlzYWJsZWQpIHtcclxuICAgIHN0YXRlLmhlYXJ0QmVhdFNlY3JldCA9IC0xXHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLmhlYXJ0QmVhdFNlY3JldCA9IChNYXRoLm1heCgwLCBzdGF0ZS5oZWFydEJlYXRTZWNyZXQpICsgMSkgJSAxMDAwMFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFiID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiBFeHQudGFicy5jcmVhdGUoeyB1cmwsIGFjdGl2ZTogdHJ1ZSB9KVxyXG59XHJcblxyXG5jb25zdCBhY3RpdmF0ZVRhYiA9ICh0YWJJZCwgZm9jdXNXaW5kb3cpID0+IHtcclxuICByZXR1cm4gRXh0LnRhYnMuZ2V0KHRhYklkKVxyXG4gIC50aGVuKHRhYiA9PiB7XHJcbiAgICBjb25zdCBwID0gZm9jdXNXaW5kb3cgPyBFeHQud2luZG93cy51cGRhdGUodGFiLndpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpXHJcblxyXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiBFeHQudGFicy51cGRhdGUodGFiLmlkLCB7IGFjdGl2ZTogdHJ1ZSB9KSlcclxuICAgIC50aGVuKCgpID0+IHRhYilcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBnZXRUYWIgPSAodGFiSWQpID0+IHtcclxuICByZXR1cm4gRXh0LnRhYnMuZ2V0KHRhYklkKVxyXG59XHJcblxyXG4vLyBHZW5lcmF0ZSBmdW5jdGlvbiB0byBnZXQgaXBjIGJhc2VkIG9uIHRhYklkTmFtZSBhbmQgc29tZSBlcnJvciBtZXNzYWdlXHJcbmNvbnN0IGdlbkdldFRhYklwYyA9ICh0YWJJZE5hbWUsIHB1cnBvc2UpID0+ICh0aW1lb3V0ID0gMTAwLCBiZWZvcmUgPSBJbmZpbml0eSkgPT4ge1xyXG4gIGNvbnN0IHRhYklkID0gc3RhdGUudGFiSWRzW3RhYklkTmFtZV1cclxuXHJcbiAgaWYgKCF0YWJJZCkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgTm8gdGFiIGZvciAke3B1cnBvc2V9IHlldGApKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEV4dC50YWJzLmdldCh0YWJJZClcclxuICAudGhlbih0YWIgPT4ge1xyXG4gICAgaWYgKCF0YWIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJHtwdXJwb3NlfSB0YWIgc2VlbXMgdG8gYmUgY2xvc2VkYClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ2V0SXBjQ2FjaGUoKS5nZXQodGFiLmlkLCB0aW1lb3V0LCBiZWZvcmUpXHJcbiAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gaXBjIGF2YWlsYWJsZSBmb3IgdGhlICR7cHVycG9zZX0gdGFiYClcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgZ2V0UmVjb3JkVGFiSXBjID0gZ2VuR2V0VGFiSXBjKCd0b1JlY29yZCcsICdyZWNvcmRpbmcnKVxyXG5cclxuY29uc3QgZ2V0UGxheVRhYklwYyAgID0gZ2VuR2V0VGFiSXBjKCd0b1BsYXknLCAncGxheWluZyBjb21tYW5kcycpXHJcblxyXG5jb25zdCBnZXRQYW5lbFRhYklwYyAgPSBnZW5HZXRUYWJJcGMoJ3BhbmVsJywgJ2Rhc2hib2FyZCcpXHJcblxyXG4vLyBHZXQgdGhlIGN1cnJlbnQgdGFiIGZvciBwbGF5LCBpZiB1cmwgcHJvdmlkZWQsIGl0IHdpbGwgYmUgbG9hZGVkIGluIHRoZSB0YWJcclxuY29uc3QgZ2V0UGxheVRhYiAgPSAodXJsKSA9PiB7XHJcbiAgLy8gTm90ZTogdXBkYXRlIGVycm9yIG1lc3NhZ2UgdG8gYmUgbW9yZSB1c2VyIGZyaWVuZGx5LiBCdXQgdGhlIG9yaWdpbmFsIG1lc3NhZ2UgaXMga2VwdCBhcyBjb21tZW50XHJcbiAgLy8gY29uc3QgdGhlRXJyb3IgID0gbmV3IEVycm9yKCdFaXRoZXIgYSBwbGF5ZWQgdGFiIG9yIGEgdXJsIG11c3QgYmUgcHJvdmlkZWQgdG8gc3RhcnQgcGxheWluZycpXHJcbiAgY29uc3QgdGhlRXJyb3IgID0gbmV3IEVycm9yKCdObyBjb25uZWN0aW9uIHRvIGJyb3dzZXIgdGFiJylcclxuXHJcbiAgbG9nKCdnZXRQbGF5VGFiJywgdXJsLCBzdGF0ZS50YWJJZHMudG9QbGF5KVxyXG5cclxuICBjb25zdCBjcmVhdGVPbmUgPSAodXJsKSA9PiB7XHJcbiAgICBpZiAoIXVybCkgdGhyb3cgdGhlRXJyb3JcclxuXHJcbiAgICByZXR1cm4gY3JlYXRlVGFiKHVybClcclxuICAgICAgLnRoZW4odGFiID0+IHtcclxuICAgICAgICBzdGF0ZS50YWJJZHMubGFzdFBsYXkgPSBzdGF0ZS50YWJJZHMudG9QbGF5XHJcbiAgICAgICAgc3RhdGUudGFiSWRzLnRvUGxheSA9IHN0YXRlLnRhYklkcy5maXJzdFBsYXkgPSB0YWIuaWRcclxuICAgICAgICByZXR1cm4gdGFiXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZiAoIXN0YXRlLnRhYklkcy50b1BsYXkgJiYgIXVybCkge1xyXG4gICAgdGhyb3cgdGhlRXJyb3JcclxuICB9XHJcblxyXG4gIGlmICghc3RhdGUudGFiSWRzLnRvUGxheSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZU9uZSh1cmwpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2V0VGFiKHN0YXRlLnRhYklkcy50b1BsYXkpXHJcbiAgICAudGhlbihcclxuICAgICAgKHRhYikgPT4ge1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGFiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBOb3RlOiBtdXN0IGRpc2FibGUgaXBjQ2FjaGUgbWFudWFsbHkgaGVyZSwgc28gdGhhdCBmdXJ0aGVyIG1lc3NhZ2VzXHJcbiAgICAgICAgLy8gd29uJ3QgYmUgc2VudCB0aGUgb2xkIGlwY1xyXG4gICAgICAgIGdldElwY0NhY2hlKCkuZGlzYWJsZSh0YWIuaWQpXHJcblxyXG4gICAgICAgIHJldHVybiBFeHQudGFicy51cGRhdGUodGFiLmlkLCB7IHVybCB9KVxyXG4gICAgICB9LFxyXG4gICAgICAoKSAgPT4gY3JlYXRlT25lKHVybClcclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc2hvd1BhbmVsV2luZG93ID0gKCkgPT4ge1xyXG4gIHJldHVybiBhY3RpdmF0ZVRhYihzdGF0ZS50YWJJZHMucGFuZWwsIHRydWUpXHJcbiAgLmNhdGNoKCgpID0+IHtcclxuICAgIHN0b3JhZ2UuZ2V0KCdjb25maWcnKVxyXG4gICAgLnRoZW4oY29uZmlnID0+IHtcclxuICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9XHJcbiAgICAgIHJldHVybiAoY29uZmlnLnNpemUgfHwge30pW2NvbmZpZy5zaG93U2lkZWJhciA/ICd3aXRoX3NpZGViYXInIDogJ3N0YW5kYXJkJ11cclxuICAgIH0pXHJcbiAgICAudGhlbihzaXplID0+IHtcclxuICAgICAgc2l6ZSA9IHNpemUgfHwge1xyXG4gICAgICAgIHdpZHRoOiA4NTAsXHJcbiAgICAgICAgaGVpZ2h0OiA3NzVcclxuICAgICAgfVxyXG5cclxuICAgICAgRXh0LndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICB0eXBlOiAgICdwb3B1cCcsXHJcbiAgICAgICAgdXJsOiAgICBFeHQuZXh0ZW5zaW9uLmdldFVSTCgncG9wdXAuaHRtbCcpLFxyXG4gICAgICAgIHdpZHRoOiAgc2l6ZS53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHdpbiA9PiB7XHJcbiAgICAgICAgaWYgKCFFeHQuaXNGaXJlZm94KCkpIHJldHVyblxyXG5cclxuICAgICAgICAvLyBSZWZlciB0byBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI1ODI5XHJcbiAgICAgICAgLy8gRmlyZWZveCBOZXcgcG9wdXAgd2luZG93IGFwcGVhcnMgYmxhbmsgdW50aWwgcmlnaHQtY2xpY2tcclxuICAgICAgICByZXR1cm4gZGVsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIEV4dC53aW5kb3dzLnVwZGF0ZSh3aW4uaWQsIHtcclxuICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGggKyAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0ICsgMVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3Qgd2l0aFBhbmVsSXBjID0gKCkgPT4ge1xyXG4gIHJldHVybiBzaG93UGFuZWxXaW5kb3coKVxyXG4gIC50aGVuKCgpID0+IHVudGlsKCdwYW5lbCB0YWIgaWQgcmVjb3JkZWQnLCAoKSA9PiAoe1xyXG4gICAgcGFzczogc3RhdGUudGFiSWRzLnBhbmVsXHJcbiAgfSkpKVxyXG4gIC50aGVuKCgpID0+IGRlbGF5KCgpID0+IHt9LCAyMDAwKSlcclxuICAudGhlbigoKSA9PiBnZXRQYW5lbFRhYklwYygyMDAwKSlcclxufVxyXG5cclxuY29uc3Qgc2hvd0JhZGdlID0gKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCB7IGNsZWFyLCB0ZXh0LCBjb2xvciwgYmxpbmsgfSA9IHtcclxuICAgIGNsZWFyOiBmYWxzZSxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgY29sb3I6ICcjZmYwMDAwJyxcclxuICAgIGJsaW5rOiAwLFxyXG4gICAgLi4uKG9wdGlvbnMgfHwge30pXHJcbiAgfVxyXG5cclxuICBpZiAoY2xlYXIpIHtcclxuICAgIHJldHVybiBFeHQuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAnJyB9KVxyXG4gIH1cclxuXHJcbiAgRXh0LmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvciB9KVxyXG4gIEV4dC5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQgfSlcclxuXHJcbiAgaWYgKGJsaW5rKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgRXh0LmJyb3dzZXJBY3Rpb24uZ2V0QmFkZ2VUZXh0KHt9KVxyXG4gICAgICAudGhlbihjdXJUZXh0ID0+IHtcclxuICAgICAgICBpZiAoY3VyVGV4dCAhPT0gdGV4dCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIEV4dC5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICcnIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9LCBibGluaylcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZVJlY29yZGluZ0JhZGdlID0gKGlzUmVjb3JkaW5nLCBvcHRpb25zKSA9PiB7XHJcbiAgcmV0dXJuIHNob3dCYWRnZSh7XHJcbiAgICBjb2xvcjogJyNmZjAwMDAnLFxyXG4gICAgdGV4dDogJ1InLFxyXG4gICAgLi4uKG9wdGlvbnMgfHwge30pLFxyXG4gICAgY2xlYXI6ICFpc1JlY29yZGluZ1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUluc3BlY3RpbmdCYWRnZSA9IChpc0luc3BlY3RpbmcsIG9wdGlvbnMpID0+IHtcclxuICByZXR1cm4gc2hvd0JhZGdlKHtcclxuICAgIGNvbG9yOiAnI2ZmYTgwMCcsXHJcbiAgICB0ZXh0OiAnUycsXHJcbiAgICAuLi4ob3B0aW9ucyB8fCB7fSksXHJcbiAgICBjbGVhcjogIWlzSW5zcGVjdGluZ1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZVBsYXlpbmdCYWRnZSA9IChpc1BsYXlpbmcsIG9wdGlvbnMpID0+IHtcclxuICByZXR1cm4gc2hvd0JhZGdlKHtcclxuICAgIGNvbG9yOiAnIzE0Yzc1NicsXHJcbiAgICB0ZXh0OiAnUCcsXHJcbiAgICAuLi4ob3B0aW9ucyB8fCB7fSksXHJcbiAgICBjbGVhcjogIWlzUGxheWluZ1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGlzVXBncmFkZVZpZXdlZCA9ICgpID0+IHtcclxuICByZXR1cm4gRXh0LnN0b3JhZ2UubG9jYWwuZ2V0KCd1cGdyYWRlX25vdF92aWV3ZWQnKVxyXG4gIC50aGVuKG9iaiA9PiBvYmpbJ3VwZ3JhZGVfbm90X3ZpZXdlZCddICE9PSAnbm90X3ZpZXdlZCcpXHJcbn1cclxuXHJcbmNvbnN0IG5vdGlmeVJlY29yZENvbW1hbmQgPSAoY29tbWFuZCkgPT4ge1xyXG4gIGNvbnN0IG5vdGlmSWQgPSB1aWQoKVxyXG5cclxuICBFeHQubm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZJZCwge1xyXG4gICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgIGljb25Vcmw6ICcuL2xvZ28ucG5nJyxcclxuICAgIHRpdGxlOiAnUmVjb3JkIGNvbW1hbmQhJyxcclxuICAgIG1lc3NhZ2U6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBbXVxyXG5cclxuICAgICAgbGlzdC5wdXNoKGBjb21tYW5kOiAke2NvbW1hbmQuY21kfWApXHJcbiAgICAgIGlmIChjb21tYW5kLnRhcmdldCkgIGxpc3QucHVzaChgdGFyZ2V0OiAke2NvbW1hbmQudGFyZ2V0fWApXHJcbiAgICAgIGlmIChjb21tYW5kLnZhbHVlKSAgIGxpc3QucHVzaChgdmFsdWU6ICR7Y29tbWFuZC52YWx1ZX1gKVxyXG5cclxuICAgICAgcmV0dXJuIGxpc3Quam9pbignXFxuJylcclxuICAgIH0pKClcclxuICB9KVxyXG5cclxuICAvLyBOb3RlOiBjbG9zZSByZWNvcmQgbm90aWZpY2F0aW9ucyByaWdodCBhd2F5LCBzbyB0aGF0IG5vdGlmaWNhdGlvbnMgd29uJ3QgYmUgc3RhY2tlZFxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgRXh0Lm5vdGlmaWNhdGlvbnMuY2xlYXIobm90aWZJZClcclxuICAgIC5jYXRjaChlID0+IGxvZy5lcnJvcihlKSlcclxuICB9LCAyMDAwKVxyXG59XHJcblxyXG5jb25zdCBub3RpZnlBdXRvUGF1c2UgPSAoKSA9PiB7XHJcbiAgRXh0Lm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgIHR5cGU6ICdiYXNpYycsXHJcbiAgICBpY29uVXJsOiAnLi9sb2dvLnBuZycsXHJcbiAgICB0aXRsZTogJ1JlcGxheSBwYXVzZWQhJyxcclxuICAgIG1lc3NhZ2U6ICdBdXRvIHBhdXNlZCBieSBjb21tYW5kJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IG5vdGlmeUJyZWFrcG9pbnQgPSAoKSA9PiB7XHJcbiAgRXh0Lm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgIHR5cGU6ICdiYXNpYycsXHJcbiAgICBpY29uVXJsOiAnLi9sb2dvLnBuZycsXHJcbiAgICB0aXRsZTogJ1JlcGxheSBwYXVzZWQhJyxcclxuICAgIG1lc3NhZ2U6ICdBdXRvIHBhdXNlZCBieSBicmVha3BvaW50J1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IG5vdGlmeUVjaG8gPSAodGV4dCkgPT4ge1xyXG4gIEV4dC5ub3RpZmljYXRpb25zLmNyZWF0ZSh7XHJcbiAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgaWNvblVybDogJy4vbG9nby5wbmcnLFxyXG4gICAgdGl0bGU6ICdFY2hvJyxcclxuICAgIG1lc3NhZ2U6IHRleHRcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBjbG9zZUFsbFdpbmRvd3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIEV4dC53aW5kb3dzLmdldEFsbCgpXHJcbiAgLnRoZW4od2lucyA9PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwod2lucy5tYXAod2luID0+IEV4dC53aW5kb3dzLnJlbW92ZSh3aW4uaWQpKSlcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBpc1RpbWVUb0JhY2t1cCA9ICgpID0+IHtcclxuICByZXR1cm4gc3RvcmFnZS5nZXQoJ2NvbmZpZycpXHJcbiAgLnRoZW4oY29uZmlnID0+IHtcclxuICAgIGNvbnN0IHsgZW5hYmxlQXV0b0JhY2t1cCwgbGFzdEJhY2t1cEFjdGlvblRpbWUsIGF1dG9CYWNrdXBJbnRlcnZhbCB9ID0gY29uZmlnXHJcblxyXG4gICAgaWYgKCFlbmFibGVBdXRvQmFja3VwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZW91dDogZmFsc2UsXHJcbiAgICAgICAgcmVtYWluOiAtMVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlmZiA9IG5ldyBEYXRlKCkgKiAxIC0gKGxhc3RCYWNrdXBBY3Rpb25UaW1lIHx8IDApXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aW1lb3V0OiBkaWZmID4gYXV0b0JhY2t1cEludGVydmFsICogMjQgKiAzNjAwMDAwLFxyXG4gICAgICByZW1haW46IGRpZmZcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBub3RpZnlQYW5lbEFib3V0QWN0aXZlVGFiID0gKGFjdGl2ZVRhYklkKSA9PiB7XHJcbiAgUHJvbWlzZS5hbGwoW1xyXG4gICAgRXh0LnRhYnMuZ2V0KGFjdGl2ZVRhYklkKSxcclxuICAgIGdldFBhbmVsVGFiSXBjKCkuY2F0Y2goKCkgPT4gbnVsbClcclxuICBdKVxyXG4gIC50aGVuKHR1cGxlID0+IHtcclxuICAgIGNvbnN0IFt0YWIsIHBhbmVsSXBjXSA9IHR1cGxlXHJcbiAgICBpZiAoIXBhbmVsSXBjKSAgcmV0dXJuXHJcbiAgICBpZiAodGFiLnVybC5pbmRleE9mKEV4dC5leHRlbnNpb24uZ2V0VVJMKCcnKSkgIT09IC0xKSByZXR1cm5cclxuXHJcbiAgICBpZiAoIXRhYi50aXRsZSB8fCB0YWIudGl0bGUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZGVsYXkoKCkgPT4gbm90aWZ5UGFuZWxBYm91dEFjdGl2ZVRhYihhY3RpdmVUYWJJZCksIDIwMClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFuZWxJcGMuYXNrKCdVUERBVEVfQUNUSVZFX1RBQicsIHtcclxuICAgICAgdXJsOiB0YWIudXJsLFxyXG4gICAgICB0aXRsZTogdGFiLnRpdGxlXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGlzVGFiQWN0aXZlQW5kRm9jdXNlZCA9ICh0YWJJZCkgPT4ge1xyXG4gIHJldHVybiBFeHQudGFicy5nZXQodGFiSWQpXHJcbiAgLnRoZW4odGFiID0+IHtcclxuICAgIGlmICghdGFiLmFjdGl2ZSkgIHJldHVybiBmYWxzZVxyXG5cclxuICAgIHN3aXRjaCAoc3RhdGUuc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgQy5BUFBfU1RBVFVTLk5PUk1BTDpcclxuICAgICAgICByZXR1cm4gRXh0LndpbmRvd3MuZ2V0KHRhYi53aW5kb3dJZClcclxuICAgICAgICAudGhlbih3aW4gPT4gd2luLmZvY3VzZWQpXHJcblxyXG4gICAgICBjYXNlIEMuQVBQX1NUQVRVUy5QTEFZRVI6XHJcbiAgICAgICAgcmV0dXJuIHRhYklkID09PSBzdGF0ZS50YWJJZHMudG9QbGF5XHJcblxyXG4gICAgICBjYXNlIEMuQVBQX1NUQVRVUy5SRUNPUkRFUjpcclxuICAgICAgICByZXR1cm4gdGFiSWQgPT09IHN0YXRlLnRhYklkcy50b1JlY29yZFxyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGlzVGFiQWN0aXZlQW5kRm9jdXNlZDogdW5rbm93biBhcHAgc3RhdHVzLCAnJHtzdGF0ZS5zdGF0dXN9J2ApXHJcbiAgICB9XHJcbiAgfSlcclxuICAuY2F0Y2goZSA9PiBmYWxzZSlcclxufVxyXG5cclxuY29uc3QgYmluZEV2ZW50cyA9ICgpID0+IHtcclxuICBFeHQuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgaXNVcGdyYWRlVmlld2VkKClcclxuICAgIC50aGVuKGlzVmlld2VkID0+IHtcclxuICAgICAgaWYgKGlzVmlld2VkKSB7XHJcbiAgICAgICAgcmV0dXJuIHNob3dQYW5lbFdpbmRvdygpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgRXh0LmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogJycgfSlcclxuICAgICAgICBFeHQuc3RvcmFnZS5sb2NhbC5zZXQoe1xyXG4gICAgICAgICAgdXBncmFkZV9ub3Rfdmlld2VkOiAnJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIEV4dC50YWJzLmNyZWF0ZSh7XHJcbiAgICAgICAgICB1cmw6IGNvbmZpZy51cmxBZnRlclVwZ3JhZGVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIEV4dC50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8sIHRhYikgPT4ge1xyXG4gICAgaWYgKCF0YWIuYWN0aXZlKSAgcmV0dXJuXHJcblxyXG4gICAgaXNUYWJBY3RpdmVBbmRGb2N1c2VkKHRhYklkKVxyXG4gICAgLnRoZW4oaXNGb2N1c2VkID0+IHtcclxuICAgICAgaWYgKCFpc0ZvY3VzZWQpIHJldHVyblxyXG4gICAgICByZXR1cm4gbm90aWZ5UGFuZWxBYm91dEFjdGl2ZVRhYih0YWJJZClcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgRXh0LndpbmRvd3Mub25Gb2N1c0NoYW5nZWQuYWRkTGlzdGVuZXIoKHdpbmRvd0lkKSA9PiB7XHJcbiAgICBFeHQudGFicy5xdWVyeSh7IHdpbmRvd0lkLCBhY3RpdmU6IHRydWUgfSlcclxuICAgIC50aGVuKHRhYnMgPT4ge1xyXG4gICAgICBpZiAodGFicy5sZW5ndGggPT09IDApIHJldHVyblxyXG5cclxuICAgICAgZ2V0SXBjQ2FjaGUoKS5nZXQodGFic1swXS5pZCwgMTAwKVxyXG4gICAgICAudGhlbihcclxuICAgICAgICBpcGMgPT4gaXBjLmFzaygnVEFCX0FDVElWQVRFRCcsIHt9KSxcclxuICAgICAgICBlID0+ICdDb21tZW50OiBpbmdvcmUgdGhpcyBlcnJvcidcclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICAvLyBOb3RlOiBzZXQgdGhlIGFjdGl2YXRlZCB0YWIgYXMgdGhlIG9uZSB0byBwbGF5XHJcbiAgRXh0LnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoKGFjdGl2ZUluZm8pID0+IHtcclxuICAgIGlmIChhY3RpdmVJbmZvLnRhYklkID09PSBzdGF0ZS50YWJJZHMucGFuZWwpICByZXR1cm5cclxuXHJcbiAgICBnZXRJcGNDYWNoZSgpLmdldChhY3RpdmVJbmZvLnRhYklkLCAxMDApXHJcbiAgICAudGhlbihcclxuICAgICAgaXBjID0+IGlwYy5hc2soJ1RBQl9BQ1RJVkFURUQnLCB7fSksXHJcbiAgICAgIGUgPT4gJ0NvbW1lbnQ6IGluZ29yZSB0aGlzIGVycm9yJ1xyXG4gICAgKVxyXG5cclxuICAgIG5vdGlmeVBhbmVsQWJvdXRBY3RpdmVUYWIoYWN0aXZlSW5mby50YWJJZClcclxuXHJcbiAgICBzd2l0Y2ggKHN0YXRlLnN0YXR1cykge1xyXG4gICAgICBjYXNlIEMuQVBQX1NUQVRVUy5OT1JNQUw6XHJcbiAgICAgICAgLy8gTm90ZTogSW4gRmlyZWZveCwgd2l0aG91dCB0aGlzIGRlbGF5IG9mIDEwMG1zLCBgdGFiLnVybGAgd2lsbCBzdGlsbCBiZSAnYWJvdXQ6Y29uZmlnJ1xyXG4gICAgICAgIC8vIHNvIGhhdmUgdG8gd2FpdCBmb3IgdGhlIHVybCB0byB0YWtlIGVmZmVjdFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgRXh0LnRhYnMuZ2V0KGFjdGl2ZUluZm8udGFiSWQpXHJcbiAgICAgICAgICAudGhlbih0YWIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFiLnVybC5pbmRleE9mKEV4dC5leHRlbnNpb24uZ2V0VVJMKCcnKSkgIT09IC0xKSByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIGxvZygnaW4gdGFiIGFjdGl2YXRlZCwgc2V0IHRvUGxheSB0byAnLCBhY3RpdmVJbmZvKVxyXG4gICAgICAgICAgICBzdGF0ZS50YWJJZHMubGFzdFBsYXkgPSBzdGF0ZS50YWJJZHMudG9QbGF5XHJcbiAgICAgICAgICAgIHN0YXRlLnRhYklkcy50b1BsYXkgPSBzdGF0ZS50YWJJZHMuZmlyc3RQbGF5ID0gYWN0aXZlSW5mby50YWJJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMDApXHJcblxyXG4gICAgICAgIGJyZWFrXHJcblxyXG4gICAgICBjYXNlIEMuQVBQX1NUQVRVUy5SRUNPUkRFUjoge1xyXG4gICAgICAgIC8vIE5vdGU6IHRocmVlIHRoaW5ncyB0byBkbyB3aGVuIHN3aXRjaCB0YWIgaW4gcmVjb3JkaW5nXHJcbiAgICAgICAgLy8gMS4gc2V0IHRoZSBuZXcgdGFiIHRvIFJFQ09SRElORyBzdGF0dXMsXHJcbiAgICAgICAgLy8gMi4gYW5kIHRoZSBvcmlnaW5hbCBvbmUgYmFjayB0byBOT1JNQUwgc3RhdHVzXHJcbiAgICAgICAgLy8gMy4gY29tbWl0IGEgYHNlbGVjdFdpbmRvd2AgY29tbWFuZFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSGF2ZSB0byB3YWl0IGZvciB0aGUgbmV3IHRhYiBlc3RhYmxpc2ggY29ubmVjdGlvbiB3aXRoIGJhY2tncm91bmRcclxuICAgICAgICBnZXRJcGNDYWNoZSgpLmdldChhY3RpdmVJbmZvLnRhYklkLCA1MDAwKVxyXG4gICAgICAgIC8vIE5vdGU6IHdhaXQgZm9yIDEgc2Vjb25kLCBleHBlY3RpbmcgY29tbWFuZHMgZnJvbSBvcmlnaW5hbCBwYWdlIHRvIGJlIGNvbW1pdHRlZFxyXG4gICAgICAgIC50aGVuKGlwYyA9PiBkZWxheSgoKSA9PiBpcGMsIDEwMDApKVxyXG4gICAgICAgIC50aGVuKGlwYyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXBjLmFzaygnU0VUX1NUQVRVUycsIHtcclxuICAgICAgICAgICAgc3RhdHVzOiBDLkNPTlRFTlRfU0NSSVBUX1NUQVRVUy5SRUNPUkRJTkdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAvLyBOb3RlOiBzZXQgdGhlIG9yaWdpbmFsIHRhYiB0byBOT1JNQUwgc3RhdHVzXHJcbiAgICAgICAgICAvLyBvbmx5IGlmIHRoZSBuZXcgdGFiIGlzIHNldCB0byBSRUNPUkRJTkcgc3RhdHVzXHJcbiAgICAgICAgICByZXR1cm4gZ2V0UmVjb3JkVGFiSXBjKClcclxuICAgICAgICAgIC50aGVuKGlwYyA9PiB7XHJcbiAgICAgICAgICAgIGlwYy5hc2soJ1NFVF9TVEFUVVMnLCB7XHJcbiAgICAgICAgICAgICAgc3RhdHVzOiBDLkNPTlRFTlRfU0NSSVBUX1NUQVRVUy5OT1JNQUxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAvLyBOb3RlOiBnZXQgd2luZG93IGxvY2F0b3IgJiB1cGRhdGUgcmVjb3JkaW5nIHRhYlxyXG4gICAgICAgICAgY29uc3Qgb2xkVGFiSWQgPSBzdGF0ZS50YWJJZHMuZmlyc3RSZWNvcmRcclxuICAgICAgICAgIGNvbnN0IG5ld1RhYklkID0gYWN0aXZlSW5mby50YWJJZFxyXG5cclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIEV4dC50YWJzLmdldChvbGRUYWJJZCksXHJcbiAgICAgICAgICAgIEV4dC50YWJzLmdldChuZXdUYWJJZClcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgICAudGhlbigoW29sZFRhYiwgbmV3VGFiXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXVxyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIHJlY29yZGluZyB0YWJcclxuICAgICAgICAgICAgc3RhdGUudGFiSWRzLnRvUmVjb3JkID0gYWN0aXZlSW5mby50YWJJZFxyXG5cclxuICAgICAgICAgICAgaWYgKG9sZFRhYi53aW5kb3dJZCA9PT0gbmV3VGFiLndpbmRvd0lkKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYHRhYj0ke25ld1RhYi5pbmRleCAtIG9sZFRhYi5pbmRleH1gKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgdGl0bGU9JHtuZXdUYWIudGl0bGV9YClcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0OiByZXN1bHRbMF0sXHJcbiAgICAgICAgICAgICAgdGFyZ2V0T3B0aW9uczogcmVzdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIC8vIE5vdGU6IGNvbW1pdCB0aGUgYHNlbGVjdFdpbmRvd2AgY29tbWFuZFxyXG4gICAgICAgICAgY29uc3QgY29tbWFuZCA9IHtcclxuICAgICAgICAgICAgY21kOiAnc2VsZWN0V2luZG93JyxcclxuICAgICAgICAgICAgLi4uZGF0YVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBnZXRQYW5lbFRhYklwYygpXHJcbiAgICAgICAgICAudGhlbihwYW5lbElwYyA9PiBwYW5lbElwYy5hc2soJ1JFQ09SRF9BRERfQ09NTUFORCcsIGNvbW1hbmQpKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4gbm90aWZ5UmVjb3JkQ29tbWFuZChjb21tYW5kKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIGxvZy5lcnJvcihlLnN0YWNrKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vLyB1c2FnZTpcclxuLy8gMS4gc2V0IHRhYklkIGZvciBpbnNwZWN0b3I6ICBgc2V0SW5zcGVjdG9yVGFiSWQoc29tZVRhYklkKWBcclxuLy8gMi4gY2xlYXIgdGFiSWQgZm9yIGluc3BlY3RvcjogYHNldEluc3BlY3RvclRhYklkKG51bGwsIHRydWUpYFxyXG5jb25zdCBzZXRJbnNwZWN0b3JUYWJJZCA9ICh0YWJJZCwgc2hvdWxkUmVtb3ZlLCBub05vdGlmeSkgPT4ge1xyXG4gIHN0YXRlLnRhYklkcy5sYXN0SW5zcGVjdCA9IHN0YXRlLnRhYklkcy50b0luc3BlY3RcclxuXHJcbiAgaWYgKHRhYklkKSB7XHJcbiAgICBzdGF0ZS50YWJJZHMudG9JbnNwZWN0ID0gdGFiSWRcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICB9IGVsc2UgaWYgKHNob3VsZFJlbW92ZSkge1xyXG4gICAgaWYgKHN0YXRlLnRhYklkcy50b0luc3BlY3QpIHtcclxuICAgICAgc3RhdGUudGFiSWRzLnRvSW5zcGVjdCA9IG51bGxcclxuXHJcbiAgICAgIGlmIChub05vdGlmeSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG5cclxuICAgICAgcmV0dXJuIGdldElwY0NhY2hlKCkuZ2V0KHN0YXRlLnRhYklkcy50b0luc3BlY3QpXHJcbiAgICAgIC50aGVuKGlwYyA9PiBpcGMuYXNrKCdTVE9QX0lOU1BFQ1RJTkcnKSlcclxuICAgICAgLmNhdGNoKGUgPT4gbG9nKGUuc3RhY2spKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhcnRTZW5kaW5nVGltZW91dFN0YXR1cyA9ICh0aW1lb3V0LCB0eXBlID0gJ3dhaXQnKSA9PiB7XHJcbiAgbGV0IHBhc3QgPSAwXHJcblxyXG4gIGlmIChzdGF0ZS50aW1lcikgIGNsZWFySW50ZXJ2YWwoc3RhdGUudGltZXIpXHJcbiAgc3RhdGUudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBwYXN0ICs9IDEwMDBcclxuXHJcbiAgICBnZXRQYW5lbFRhYklwYygpLnRoZW4ocGFuZWxJcGMgPT4ge1xyXG4gICAgICBwYW5lbElwYy5hc2soJ1RJTUVPVVRfU1RBVFVTJywge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgcGFzdCxcclxuICAgICAgICB0b3RhbDogdGltZW91dFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAocGFzdCA+PSB0aW1lb3V0KSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoc3RhdGUudGltZXIpXHJcbiAgICB9XHJcbiAgfSwgMTAwMClcclxuXHJcbiAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoc3RhdGUudGltZXIpXHJcbn1cclxuXHJcbi8vIFByb2Nlc3NvciBmb3IgYWxsIG1lc3NhZ2UgYmFja2dyb3VuZCBjb3VsZCByZWNlaXZlXHJcbi8vIEFsbCBtZXNzYWdlcyBmcm9tIHBhbmVsIHN0YXJ0cyB3aXRoICdQQU5FTF8nXHJcbi8vIEFsbCBtZXNzYWdlcyBmcm9tIGNvbnRlbnQgc2NyaXB0IHN0YXJ0cyB3aXRoICdDU18nXHJcbmNvbnN0IG9uUmVxdWVzdCA9IChjbWQsIGFyZ3MpID0+IHtcclxuICBpZiAoY21kICE9PSAnQ1NfQUNUSVZBVEVfTUUnKSB7XHJcbiAgICBsb2coJ29uQXNrJywgY21kLCBhcmdzKVxyXG4gIH1cclxuXHJcbiAgc3dpdGNoIChjbWQpIHtcclxuICAgIC8vIE1hcmsgdGhlIHRhYiBhcyBwYW5lbC5cclxuICAgIGNhc2UgJ0lfQU1fUEFORUwnOlxyXG4gICAgICBzdGF0ZS50YWJJZHMucGFuZWwgPSBhcmdzLnNlbmRlci50YWIuaWRcclxuXHJcbiAgICAgIC8vIE5vdGU6IHdoZW4gdGhlIHBhbmVsIGZpcnN0IG9wZW4gZmlyc3QsIGl0IGNvdWxkIGJlIG1hcmtlZCBhcyB0aGUgdGFiIHRvIHBsYXlcclxuICAgICAgLy8gVGhhdCdzIHNvbWV0aGluZyB3ZSBkb24ndCB3YW50IHRvIGhhcHBlblxyXG4gICAgICBpZiAoc3RhdGUudGFiSWRzLnRvUGxheSA9PT0gYXJncy5zZW5kZXIudGFiLmlkKSB7XHJcbiAgICAgICAgbG9nKCdJIGFtIHBhbmVsLCBzZXQgdG9QbGF5IHRvIG51bGwnKVxyXG4gICAgICAgIHN0YXRlLnRhYklkcy50b1BsYXkgPSBzdGF0ZS50YWJJZHMuZmlyc3RQbGF5ID0gc3RhdGUudGFiSWRzLmxhc3RQbGF5XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlXHJcblxyXG4gICAgY2FzZSAnUEFORUxfVElNRV9GT1JfQkFDS1VQJzpcclxuICAgICAgcmV0dXJuIGlzVGltZVRvQmFja3VwKCkudGhlbihvYmogPT4gb2JqLnRpbWVvdXQpXHJcblxyXG4gICAgY2FzZSAnUEFORUxfU1RBUlRfUkVDT1JESU5HJzpcclxuICAgICAgbG9nKCdTdGFydCB0byByZWNvcmQuLi4nKVxyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBDLkFQUF9TVEFUVVMuUkVDT1JERVJcclxuICAgICAgdG9nZ2xlUmVjb3JkaW5nQmFkZ2UodHJ1ZSlcclxuICAgICAgcmV0dXJuIHRydWVcclxuXHJcbiAgICBjYXNlICdQQU5FTF9TVE9QX1JFQ09SRElORyc6XHJcbiAgICAgIGxvZygnU3RvcCByZWNvcmRpbmcuLi4nKVxyXG5cclxuICAgICAgZ2V0UmVjb3JkVGFiSXBjKClcclxuICAgICAgLnRoZW4oaXBjID0+IHtcclxuICAgICAgICBpcGMuYXNrKCdTRVRfU1RBVFVTJywge1xyXG4gICAgICAgICAgc3RhdHVzOiBDLkNPTlRFTlRfU0NSSVBUX1NUQVRVUy5OT1JNQUxcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc3RhdGUuc3RhdHVzID0gQy5BUFBfU1RBVFVTLk5PUk1BTFxyXG4gICAgICBzdGF0ZS50YWJJZHMubGFzdFJlY29yZCAgID0gc3RhdGUudGFiSWRzLnRvUmVjb3JkXHJcbiAgICAgIHN0YXRlLnRhYklkcy50b1JlY29yZCAgICAgPSBudWxsXHJcbiAgICAgIHN0YXRlLnRhYklkcy5maXJzdFJlY29yZCAgPSBudWxsXHJcblxyXG4gICAgICB0b2dnbGVSZWNvcmRpbmdCYWRnZShmYWxzZSlcclxuICAgICAgcmV0dXJuIHRydWVcclxuXHJcbiAgICBjYXNlICdQQU5FTF9UUllfVE9fUkVDT1JEX09QRU5fQ09NTUFORCc6IHtcclxuICAgICAgaWYgKHN0YXRlLnN0YXR1cyAhPT0gQy5BUFBfU1RBVFVTLlJFQ09SREVSKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW4gcmVjb3JkZXIgbW9kZScpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFdlbGwsIGBnZXRQbGF5VGFiYCBpcyBhY3R1YWxseSAnZ2V0IGN1cnJlbnQgYWN0aXZlIHRhYidcclxuICAgICAgcmV0dXJuIGdldFBsYXlUYWIoKVxyXG4gICAgICAudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGxvZygnUEFORUxfVFJZX1RPX1JFQ09SRF9PUEVOX0NPTU1BTkQnLCB0YWIpXHJcblxyXG4gICAgICAgIGlmICghL14oaHR0cHM/OnxmaWxlOikvLnRlc3QodGFiLnVybCkpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgdXJsIHRvIHJlY29yZCBhcyBvcGVuIGNvbW1hbmQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUudGFiSWRzLnRvUmVjb3JkID0gc3RhdGUudGFiSWRzLmZpcnN0UmVjb3JkID0gdGFiLmlkXHJcblxyXG4gICAgICAgIGdldFBhbmVsVGFiSXBjKClcclxuICAgICAgICAudGhlbihwYW5lbElwYyA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjb21tYW5kID0ge1xyXG4gICAgICAgICAgICBjbWQ6ICdvcGVuJyxcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YWIudXJsXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcGFuZWxJcGMuYXNrKCdSRUNPUkRfQUREX0NPTU1BTkQnLCBjb21tYW5kKVxyXG4gICAgICAgICAgbm90aWZ5UmVjb3JkQ29tbWFuZChjb21tYW5kKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnUEFORUxfU1RBUlRfSU5TUEVDVElORyc6XHJcbiAgICAgIGxvZygnc3RhcnQgdG8gaW5zcGVjdC4uLicpXHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IEMuQVBQX1NUQVRVUy5JTlNQRUNUT1JcclxuICAgICAgdG9nZ2xlSW5zcGVjdGluZ0JhZGdlKHRydWUpXHJcbiAgICAgIHJldHVybiB0cnVlXHJcblxyXG4gICAgY2FzZSAnUEFORUxfU1RPUF9JTlNQRUNUSU5HJzpcclxuICAgICAgbG9nKCdzdGFydCB0byBpbnNwZWN0Li4uJylcclxuICAgICAgc3RhdGUuc3RhdHVzID0gQy5BUFBfU1RBVFVTLk5PUk1BTFxyXG5cclxuICAgICAgdG9nZ2xlSW5zcGVjdGluZ0JhZGdlKGZhbHNlKVxyXG4gICAgICByZXR1cm4gc2V0SW5zcGVjdG9yVGFiSWQobnVsbCwgdHJ1ZSlcclxuXHJcbiAgICBjYXNlICdQQU5FTF9TVEFSVF9QTEFZSU5HJzoge1xyXG4gICAgICBsb2coJ3N0YXJ0IHRvIHBsYXkuLi4nKVxyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBDLkFQUF9TVEFUVVMuUExBWUVSXHJcblxyXG4gICAgICB0b2dnbGVQbGF5aW5nQmFkZ2UodHJ1ZSlcclxuICAgICAgLy8gTm90ZTogcmVzZXQgZG93bmxvYWQgbWFuYWdlciB0byBjbGVhciBhbnkgcHJldmlvdXMgZG93bmxvYWRzXHJcbiAgICAgIGdldERvd25sb2FkTWFuKCkucmVzZXQoKVxyXG5cclxuICAgICAgaWYgKHN0YXRlLnRpbWVyKSBjbGVhckludGVydmFsKHN0YXRlLnRpbWVyKVxyXG5cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgLy8gLmNhdGNoKGUgPT4ge1xyXG4gICAgICAvLyAgIHRvZ2dsZVBsYXlpbmdCYWRnZShmYWxzZSlcclxuICAgICAgLy8gICB0aHJvdyBlXHJcbiAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnUEFORUxfSEVBUlRfQkVBVCc6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmhlYXJ0QmVhdFNlY3JldFxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1BBTkVMX1JVTl9DT01NQU5EJzoge1xyXG4gICAgICBpZiAoc3RhdGUudGltZXIpICBjbGVhckludGVydmFsKHN0YXRlLnRpbWVyKVxyXG5cclxuICAgICAgY29uc3Qgc2hvdWxkV2FpdEZvckRvd25sb2FkQWZ0ZXJSdW4gPSAoY29tbWFuZCkgPT4ge1xyXG4gICAgICAgIGxvZygnc2hvdWxkV2FpdEZvckRvd25sb2FkQWZ0ZXJSdW4nLCBjb21tYW5kKVxyXG4gICAgICAgIGlmIChjb21tYW5kLmNtZCA9PT0gJ2NsaWNrJykgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjaGVja0hlYXJ0QmVhdCA9ICh0aW1lb3V0LCBiZWZvcmUpID0+IHtcclxuICAgICAgICB1cGRhdGVIZWFydEJlYXRTZWNyZXQoKVxyXG5cclxuICAgICAgICByZXR1cm4gZ2V0UGxheVRhYklwYyh0aW1lb3V0LCBiZWZvcmUpXHJcbiAgICAgICAgLnRoZW4oaXBjID0+IGlwYy5hc2soJ0hFQVJUX0JFQVQnLCB7IHRpbWVvdXQsIGJlZm9yZSB9KSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBsb2cuZXJyb3IoJ2F0IGxlYXN0IEkgY2F0Y2hlZCBpdCcsIGUubWVzc2FnZSlcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaGVhcnQgYmVhdCBlcnJvciB0aHJvd24nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2hvdWRXYWl0Rm9yQ29tbWFuZCA9IChjb21tYW5kKSA9PiB7XHJcbiAgICAgICAgbG9nKCdzaG91ZFdhaXRGb3JDb21tYW5kJywgY29tbWFuZClcclxuICAgICAgICByZXR1cm4gL2FuZFdhaXQvaS50ZXN0KGNvbW1hbmQuY21kKSB8fCBjb21tYW5kLmNtZCA9PT0gJ29wZW4nXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE5vdGU6IFRoZXJlIGFyZSBzZXZlcmFsIHZlcnNpb25zIG9mIHJ1bkNvbW1hbmRYWFggaGVyZS4gT25lIGJ5IG9uZSwgdGhleSBoYXZlIGEgYmV0dGVyIHRvbGVyZW5jZSBvZiBlcnJvclxyXG4gICAgICAvLyAxLiBydW5Db21tYW5kOlxyXG4gICAgICAvLyAgICAgIFJ1biBhIGNvbW1hbmQsIGFuZCB3YWl0IHVudGlsIHdlIGNhbiBjb25maXJtIHRoYXQgY29tbWFuZCBpcyBjb21wbGV0ZWQgKGUuZy4gIHh4eEFuZFdhaXQpXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIDIuIHJ1bkNvbW1hbmRXaXRoUmV0cnk6XHJcbiAgICAgIC8vICAgICAgRW5oYW5jZSBydW5Db21tYW5kIHdpdGggcmV0cnkgbWVjaGFuaXNtLCBvbmx5IHJldHJ5IHdoZW4gZWxlbWVudCBpcyBub3QgZm91bmRcclxuICAgICAgLy9cclxuICAgICAgLy8gMy4gcnVuQ29tbWFuZFdpdGhDbG9zdXJlQW5kRXJyb3JQcm9jZXNzOlxyXG4gICAgICAvLyAgICAgIEluY2x1ZGUgYGFyZ3NgIGluIGNsb3N1cmUsIGFuZCB0YWtlIGNhcmUgb2YgYGVycm9ySWdub3JlYFxyXG4gICAgICAvL1xyXG4gICAgICAvLyA0LiBydW5XaXRoSGVhcnRCZWF0OlxyXG4gICAgICAvLyAgICAgIFJ1biBhIGhlYXJ0IGJlYXQgY2hlY2sgYWxvbmcgd2l0aCBgcnVuQ29tbWFuZFdpdGhDbG9zdXJlQW5kRXJyb3JQcm9jZXNzYC5cclxuICAgICAgLy8gICAgICBIZWFydCBiZWF0IGNoZWNrIHJlcXVpcmVzIGNzIElwYyBtdXN0IGJlIGNyZWF0ZWQgYmVmb3JlIGhlYXJ0IGJlYXQgY2hlY2sgc3RhcnRzLlxyXG4gICAgICAvLyAgICAgIFdpdGggdGhpcywgd2UgY2FuIGVuc3VyZSB0aGUgcGFnZSBpcyBub3QgY2xvc2VkIG9yIHJlZnJlc2hlZFxyXG4gICAgICAvL1xyXG4gICAgICAvLyA1LiBydW5XaXRoSGVhcnRCZWF0UmV0cnk6XHJcbiAgICAgIC8vICAgICAgUnVuIGBydW5XaXRoSGVhcnRCZWF0YCB3aXRoIHJldHJ5IG1lY2hhbmlzbS4gb25seSByZXRyeSB3aGVuIGl0J3MgYSAnbG9zdCBoZWFydCBiZWF0JyBlcnJvclxyXG4gICAgICAvLyAgICAgIFdoZW4gY2xvc2VkL3JlZnJlc2ggaXMgZGV0ZWN0ZWQsIGl0IHdpbGwgdHJ5IHRvIHNlbmQgc2FtZSBjb21tYW5kIHRvIHRoYXQgdGFiIGFnYWluLlxyXG4gICAgICAvL1xyXG5cclxuICAgICAgY29uc3QgcnVuQ29tbWFuZCA9IChhcmdzLCByZXRyeUluZm8pID0+IHtcclxuICAgICAgICByZXR1cm4gZ2V0UGxheVRhYklwYygpXHJcbiAgICAgICAgLnRoZW4oaXBjID0+IHtcclxuICAgICAgICAgIC8vIE5vdGU6IGVhY2ggY29tbWFuZCBrZWVwcyB0YXJnZXQgcGFnZSdzIHN0YXR1cyBhcyBQTEFZSU5HXHJcbiAgICAgICAgICBpcGMuYXNrKCdTRVRfU1RBVFVTJywgeyBzdGF0dXM6IEMuQ09OVEVOVF9TQ1JJUFRfU1RBVFVTLlBMQVlJTkcgfSlcclxuXHJcbiAgICAgICAgICBsZXQgZ290SGVhcnRCZWF0ID0gZmFsc2VcclxuXHJcbiAgICAgICAgICBjb25zdCBpbm5lckNoZWNrSGVhcnRCZWF0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBOb3RlOiBpZ25vcmUgYW55IGV4Y2VwdGlvbiB3aGVuIGNoZWNraW5nIGhlYXJ0IGJlYXRcclxuICAgICAgICAgICAgLy8gcG9zc2libGUgZXhjZXB0aW9uOiBubyB0YWIgZm9yIHBsYXksIG5vIGlwY1xyXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tIZWFydEJlYXQoKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAoKSA9PiB7IGdvdEhlYXJ0QmVhdCA9IHRydWUgfSxcclxuICAgICAgICAgICAgICBlID0+IHsgbG9nLmVycm9yKGUpOyByZXR1cm4gbnVsbCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyByZXMgZm9ybWF0OiB7IGRhdGEsIGlzSUZyYW1lIH1cclxuICAgICAgICAgIGNvbnN0IHdhaXQgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFdhaXQgICAgICA9IHNob3VkV2FpdEZvckNvbW1hbmQoYXJncy5jb21tYW5kKVxyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRSZXNldElwYyAgPSAhcmVzLmlzSUZyYW1lICYmICgvQW5kV2FpdC9pLnRlc3QoYXJncy5jb21tYW5kLmNtZCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5jb21tYW5kLmNtZCA9PT0gJ3JlZnJlc2gnKVxyXG4gICAgICAgICAgICBpZiAoIXNob3VsZFdhaXQpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpXHJcblxyXG4gICAgICAgICAgICBsb2coJ3dhaXQhISEhJywgcmVzKVxyXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0UGFnZUxvYWQgICA9ICgocmVzLmRhdGEgJiYgcmVzLmRhdGEuZXh0cmEgJiYgcmVzLmRhdGEuZXh0cmEudGltZW91dFBhZ2VMb2FkKSB8fCA2MCkgKiAxMDAwXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRIZWFydGJlYXQgID0gKChyZXMuZGF0YSAmJiByZXMuZGF0YS5leHRyYSAmJiByZXMuZGF0YS5leHRyYS50aW1lb3V0RWxlbWVudCkgfHwgMTApICogMTAwMFxyXG5cclxuICAgICAgICAgICAgLy8gTm90ZTogZm9yIGNsaWNrQW5kV2FpdCBldGMuLCAgbXVzdCBkaXNhYmxlIGlwYyB0byBhdm9pZFxyXG4gICAgICAgICAgICAvLyBhbnkgZnVydGhlciBtZXNzYWdlIChsaWtlIGhlYXJ0IGJlYXQpIHRvIGJlIHNlbnQgdG8gdGhlIG9yaWdpbmFsIGlwY1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUmVzZXRJcGMpIHtcclxuICAgICAgICAgICAgICBnZXRJcGNDYWNoZSgpLmRpc2FibGUoc3RhdGUudGFiSWRzLnRvUGxheSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTm90ZTogcHV0IHNvbWUgZGVsYXkgaGVyZSBiZWNhdXNlIHRoZXJlIGFyZSBjYXNlcyB3aGVuIG5leHQgY29tbWFuZCdzXHJcbiAgICAgICAgICAgIC8vIGhlYXJ0IGJlYXQgcmVxdWVzdCBpcyBhbnN3ZXJlZCBieSBwcmV2aW91cyBwYWdlXHJcbiAgICAgICAgICAgIHJldHVybiBkZWxheSgoKSA9PiB7fSwgMjAwMClcclxuICAgICAgICAgICAgLy8gQSBzdGFuZGxvbmUgYGNoZWNrSGVhcnRCZWF0IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlIHRvIHdhaXQgdW50aWwnc1xyXG4gICAgICAgICAgICAvLyBmaXJzdCBpbnRlcnZhbCB0byBwYXNzIHRoZSBjaGVja1xyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBpbm5lckNoZWNrSGVhcnRCZWF0KCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gdW50aWwoJ3BsYXllciB0YWIgaGVhcnQgYmVhdCBjaGVjaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlubmVyQ2hlY2tIZWFydEJlYXQoKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIHBhc3M6IGdvdEhlYXJ0QmVhdCxcclxuICAgICAgICAgICAgICAgICAgcmVzdWx0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSwgMTAwLCB0aW1lb3V0SGVhcnRiZWF0KVxyXG4gICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY21kIH0gICA9IGFyZ3MuY29tbWFuZFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBbmRXYWl0ID0gL0FuZFdhaXQvLnRlc3QoY21kKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0FuZFdhaXQpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGVhZCA9IGNtZC5yZXBsYWNlKCdBbmRXYWl0JywgJycpXHJcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7Y21kfScgZmFpbGVkLiBObyBwYWdlIGxvYWQgZXZlbnQgZGV0ZWN0ZWQgYWZ0ZXIgJHt0aW1lb3V0SGVhcnRiZWF0IC8gMTAwMH0gc2Vjb25kcy4gVHJ5ICcke2luc3RlYWR9JyBpbnN0ZWFkLmApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y21kfScgZmFpbGVkLiBObyBwYWdlIGxvYWQgZXZlbnQgZGV0ZWN0ZWQgYWZ0ZXIgJHt0aW1lb3V0SGVhcnRiZWF0IC8gMTAwMH0gc2Vjb25kcy5gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIE5vdGU6IG11c3QgZ2V0IHRoZSBuZXcgaXBjIGhlcmUuXHJcbiAgICAgICAgICAgIC8vIFRoZSBwcmV2aW91cyBpcGMgaXMgdXNlbGVzcyBhZnRlciBhIG5ldyBwYWdlIGxvYWRcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gZ2V0UGxheVRhYklwYygpKVxyXG4gICAgICAgICAgICAudGhlbihpcGMgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIE5vdGU6IHNlbmQgdGltZW91dCBzdGF0dXMgdG8gZGFzaGJvYXJkIG9uY2Ugd2UgZ2V0IHRoZSBoZWFydCBiZWF0XHJcbiAgICAgICAgICAgICAgLy8gYW5kIHN0YXJ0IHRvIHdhaXQgZm9yIGRvbSByZWFkeVxyXG4gICAgICAgICAgICAgIGNvbnN0IGNsZWFyID0gc3RhcnRTZW5kaW5nVGltZW91dFN0YXR1cyh0aW1lb3V0UGFnZUxvYWQpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGlwYy5hc2soJ0RPTV9SRUFEWScsIHt9LCB0aW1lb3V0UGFnZUxvYWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyKClcclxuICAgICAgICAgICAgICAgICAgICBpcGMuYXNrKCdIQUNLX0FMRVJUJywge30pXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcigpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBwYWdlIGxvYWQgJHt0aW1lb3V0UGFnZUxvYWQgLyAxMDAwfSBzZWNvbmRzIHRpbWUgb3V0YClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiByZXMuZGF0YSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBOb3RlOiBjbGVhciB0aW1lciB3aGVuZXZlciB3ZSBleGVjdXRlIGEgbmV3IGNvbW1hbmQsIGFuZCBpdCdzIG5vdCBhIHJldHJ5XHJcbiAgICAgICAgICBpZiAoc3RhdGUudGltZXIgJiYgcmV0cnlJbmZvLnJldHJ5Q291bnQgPT09IDApICBjbGVhckludGVydmFsKHN0YXRlLnRpbWVyKVxyXG5cclxuICAgICAgICAgIC8vIE5vdGU6IC0xIHdpbGwgZGlzYWJsZSBpcGMgdGltZW91dCBmb3IgJ3BhdXNlJyBjb21tYW5kXHJcbiAgICAgICAgICBjb25zdCBpcGNUaW1lb3V0ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChhcmdzLmNvbW1hbmQuY21kKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAnb3Blbic6ICAgIHJldHVybiAoKGFyZ3MuY29tbWFuZC5leHRyYSAmJiBhcmdzLmNvbW1hbmQuZXh0cmEudGltZW91dFBhZ2VMb2FkKSB8fCA2MCkgKiAxMDAwXHJcbiAgICAgICAgICAgICAgY2FzZSAncGF1c2UnOiAgIHJldHVybiAtMVxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSgpXHJcblxyXG4gICAgICAgICAgcmV0dXJuIGlwYy5hc2soJ0RPTV9SRUFEWScsIHt9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXBjLmFzaygnUlVOX0NPTU1BTkQnLCB7XHJcbiAgICAgICAgICAgICAgY29tbWFuZDoge1xyXG4gICAgICAgICAgICAgICAgLi4uYXJncy5jb21tYW5kLFxyXG4gICAgICAgICAgICAgICAgZXh0cmE6IHtcclxuICAgICAgICAgICAgICAgICAgLi4uKGFyZ3MuY29tbWFuZC5leHRyYSB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICAgIHJldHJ5SW5mb1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgaXBjVGltZW91dClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbih3YWl0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgbG9nLmVycm9yKCdhbGwgY2F0Y2hlZCBieSBydW5Db21tYW5kIC0gJyArIGUubWVzc2FnZSlcclxuICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0aW1lb3V0ID0gYXJncy5jb21tYW5kLmV4dHJhLnRpbWVvdXRFbGVtZW50ICogMTAwMFxyXG4gICAgICBjb25zdCBydW5Db21tYW5kV2l0aFJldHJ5ID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAvLyBOb3RlOiBhZGQgdGltZXJTZWNyZXQgdG8gZW5zdXJlIGl0IHdvbid0IGNsZWFyIHRpbWVyIHRoYXQgaXMgbm90IGNyZWF0ZWQgYnkgdGhpcyBmdW5jdGlvbiBjYWxsXHJcbiAgICAgICAgY29uc3QgdGltZXJTZWNyZXQgPSBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgc3RhdGUudGltZXJTZWNyZXQgPSB0aW1lclNlY3JldFxyXG5cclxuICAgICAgICBjb25zdCBmbiA9IHJldHJ5KHJ1bkNvbW1hbmQsIHtcclxuICAgICAgICAgIHRpbWVvdXQsXHJcbiAgICAgICAgICBzaG91bGRSZXRyeTogKGUpID0+IHtcclxuICAgICAgICAgICAgbG9nKCdydW5Db21tYW5kV2l0aFJldHJ5IC0gc2hvdWxkUmV0cnknLCBlLm1lc3NhZ2UpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZS5tZXNzYWdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGUubWVzc2FnZS5pbmRleE9mKCd0aW1lb3V0IHJlYWNoZWQgd2hlbiBsb29raW5nIGZvcicpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICBlLm1lc3NhZ2UuaW5kZXhPZignZWxlbWVudCBpcyBmb3VuZCBidXQgbm90IHZpc2libGUgeWV0JykgIT09IC0xIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIGUubWVzc2FnZS5pbmRleE9mKCdJUEMgUHJvbWlzZSBoYXMgYmVlbiBkZXN0cm95ZWQnKSAhPT0gLTEpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb25GaXJzdEZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZSAmJiBlLm1lc3NhZ2UgJiYgZS5tZXNzYWdlLmluZGV4T2YoJ2VsZW1lbnQgaXMgZm91bmQgYnV0IG5vdCB2aXNpYmxlIHlldCcpICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdUYWcgd2FpdGluZycgLy8gQWxsIHVzZSBUYWcgV2FpdGluZyBmb3Igbm93ICAvLyAnVmlzaWJsZSB3YWl0aW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdUYWcgd2FpdGluZydcclxuXHJcbiAgICAgICAgICAgIHN0YXJ0U2VuZGluZ1RpbWVvdXRTdGF0dXModGltZW91dCwgdGl0bGUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb25GaW5hbDogKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsb2coJ29uRmluYWwnLCBlcnIsIGRhdGEpXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS50aW1lciAmJiBzdGF0ZS50aW1lclNlY3JldCA9PT0gdGltZXJTZWNyZXQpICBjbGVhckludGVydmFsKHN0YXRlLnRpbWVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBmbiguLi5hcmdzKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBydW5Db21tYW5kV2l0aENsb3N1cmVBbmRFcnJvclByb2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJ1bkNvbW1hbmRXaXRoUmV0cnkoYXJncylcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAvLyBOb3RlOiBpZiB2YXJpYWJsZSAhRVJST1JJR05PUkUgaXMgc2V0IHRvIHRydWUsXHJcbiAgICAgICAgICAvLyBpdCB3aWxsIGp1c3QgbG9nIGVycm9ycyBpbnN0ZWFkIG9mIGEgc3RvcCBvZiB3aG9sZSBtYWNyb1xyXG4gICAgICAgICAgaWYgKGFyZ3MuY29tbWFuZC5leHRyYSAmJiBhcmdzLmNvbW1hbmQuZXh0cmEuZXJyb3JJZ25vcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBsb2c6IHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcnVuV2l0aEhlYXJ0QmVhdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbmZpbml0ZUNoZWNrSGVhcnRCZWF0ID0gKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICBsZXQgc3RvcCA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvZygnc3RhcnRpbmcgaGVhcnQgYmVhdCcpXHJcbiAgICAgICAgICAgIC8vIE5vdGU6IGRvIG5vdCBjaGVjayBoZWFydCBiZWF0IHdoZW5cclxuICAgICAgICAgICAgLy8gMS4gaXQncyBhICdvcGVuJyBjb21tYW5kLCB3aGljaCBpcyBzdXBwb3NlZCB0byByZWNvbm5lY3QgaXBjXHJcbiAgICAgICAgICAgIC8vIDIuIGl0J3MgZ29pbmcgdG8gZG93bmxvYWQgZmlsZXMsIHdoaWNoIHdpbGwga2luZCBvZiByZWxvYWQgcGFnZSBhbmQgcmVjb25uZWN0IGlwY1xyXG4gICAgICAgICAgICBpZiAoc2hvdWRXYWl0Rm9yQ29tbWFuZChhcmdzLmNvbW1hbmQpIHx8XHJcbiAgICAgICAgICAgICAgICBnZXREb3dubG9hZE1hbigpLmhhc1BlbmRpbmdEb3dubG9hZCgpKSB7XHJcbiAgICAgICAgICAgICAgdXBkYXRlSGVhcnRCZWF0U2VjcmV0KHsgZGlzYWJsZWQ6IHRydWUgfSlcclxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdG9wKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjaGVja0hlYXJ0QmVhdCgxMDAsIHN0YXJ0VGltZSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgKCkgPT4gZGVsYXkoKCkgPT4ge30sIDEwMDApLnRoZW4oZm4pLFxyXG4gICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKCdsb3N0IGhlYXJ0IGJlYXJ0ISEnLCBlLnN0YWNrKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb3N0IGhlYXJ0IGJlYXQgd2hlbiBydW5uaW5nIGNvbW1hbmQnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm4uc3RvcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbG9nKCdzdG9wcGluZyBoZWFydCBiZWF0JylcclxuICAgICAgICAgICAgc3RvcCA9IHRydWVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZm5cclxuICAgICAgICB9KSgpXHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJhY2UoW1xyXG4gICAgICAgICAgcnVuQ29tbWFuZFdpdGhDbG9zdXJlQW5kRXJyb3JQcm9jZXNzKClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgaW5maW5pdGVDaGVja0hlYXJ0QmVhdC5zdG9wKClcclxuICAgICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgaW5maW5pdGVDaGVja0hlYXJ0QmVhdC5zdG9wKClcclxuICAgICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgaW5maW5pdGVDaGVja0hlYXJ0QmVhdCgpXHJcbiAgICAgICAgXSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcnVuV2l0aEhlYXJ0QmVhdFJldHJ5ID0gcmV0cnkocnVuV2l0aEhlYXJ0QmVhdCwge1xyXG4gICAgICAgIHRpbWVvdXQsXHJcbiAgICAgICAgc2hvdWxkUmV0cnk6IChlKSA9PiB7XHJcbiAgICAgICAgICBsb2coJ3J1bldpdGhIZWFydEJlYXRSZXRyeSAtIHNob3VsZFJldHJ5JywgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgcmV0dXJuIGUgJiYgZS5tZXNzYWdlICYmIGUubWVzc2FnZS5pbmRleE9mKCdsb3N0IGhlYXJ0IGJlYXQgd2hlbiBydW5uaW5nIGNvbW1hbmQnKSAhPT0gLTFcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjb25zdCBydW5FdGVybmFsbHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHAgPSBydW5XaXRoSGVhcnRCZWF0UmV0cnkoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkV2FpdEZvckRvd25sb2FkQWZ0ZXJSdW4oYXJncy5jb21tYW5kKSkge1xyXG4gICAgICAgICAgICAgIC8vIE5vdGU6IHdhaXQgZm9yIGRvd25sb2FkIHRvIGVpdGhlciBiZSBjcmVhdGUgb3IgY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGdldERvd25sb2FkTWFuKCkud2FpdEZvckRvd25sb2FkSWZBbnkoKVxyXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vdGU6IHVzZSBiZyB0byBzZXQgcGFnZVVybCwgc28gdGhhdCB3ZSBjYW4gYmUgc3VyZSB0aGF0IHRoaXMgYHBhZ2VVcmxgIGlzIDEwMCUgY29ycmVjdFxyXG4gICAgICAgICAgICByZXR1cm4gRXh0LnRhYnMuZ2V0KHN0YXRlLnRhYklkcy50b1BsYXkpXHJcbiAgICAgICAgICAgIC50aGVuKHRhYiA9PiAoeyAuLi5kYXRhLCBwYWdlVXJsOiB0YWIudXJsIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgbG9nLmVycm9yKCdFcnJvciBpbiBmZXRjaGluZyBwbGF5IHRhYiB1cmwnKVxyXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIHJlc29sdmUocClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwcmVwYXJlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnZXRQbGF5VGFiKClcclxuICAgICAgICAvLyBOb3RlOiBjYXRjaCBhbnkgZXJyb3IsIGFuZCBtYWtlIGl0IHJ1biAnZ2V0UGxheVRhYihhcmdzLnVybCknIGluc3RlYWRcclxuICAgICAgICAuY2F0Y2goZSA9PiAoeyBpZDogLTEgfSkpXHJcbiAgICAgICAgLnRoZW4odGFiID0+IHtcclxuICAgICAgICAgIGxvZygnYWZ0ZXIgZmlyc3QgZ2V0UGxheVRhYicsIHRhYilcclxuICAgICAgICAgIGNvbnN0IG9wZW5VcmxJblRhYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBjbWQsIHRhcmdldCB9ID0gYXJncy5jb21tYW5kXHJcbiAgICAgICAgICAgIGlmIChjbWQgIT09ICdvcGVuJykgdGhyb3cgbmV3IEVycm9yKCdubyBwbGF5IHRhYiBmb3VuZCcpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UGxheVRhYih0YXJnZXQpXHJcbiAgICAgICAgICAgIC50aGVuKHRhYiA9PiAoeyB0YWIsIGhhc09wZW5lZFVybDogdHJ1ZSB9KSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZ2V0SXBjQ2FjaGUoKS5nZXQodGFiLmlkLCAxMDApXHJcbiAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgaXBjID0+IHtcclxuICAgICAgICAgICAgICAvLyBOb3RlOiB0ZXN0IGlmIHRoZSBpcGMgaXMgc3RpbGwgYWN0aXZlLFxyXG4gICAgICAgICAgICAgIC8vIGlmIGl0J3Mgbm90LCB0cnkgdG8gb3BlbiB1cmwgYXMgaWYgdGhhdCBpcGMgZG9lc24ndCBleGlzdCBhdCBhbGxcclxuICAgICAgICAgICAgICAvLyByZXR1cm4gaXBjLmFzaygnSEVBUlRfQkVBVCcsIHt9LCA1MDApXHJcbiAgICAgICAgICAgICAgLy8gLnRoZW4oKCkgPT4gKHsgdGFiLCBoYXNPcGVuZWRVcmw6IGZhbHNlIH0pKVxyXG4gICAgICAgICAgICAgIC8vIC5jYXRjaChvcGVuVXJsSW5UYWIpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgdGFiLCBoYXNPcGVuZWRVcmw6IGZhbHNlIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG9wZW5VcmxJblRhYigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCh7IHRhYiwgaGFzT3BlbmVkVXJsIH0pID0+IHtcclxuICAgICAgICAgIC8vIGNvbnN0IHAgPSBhcmdzLnNob3VsZE5vdEFjdGl2YXRlVGFiID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBhY3RpdmF0ZVRhYih0YWIuaWQsIHRydWUpXHJcbiAgICAgICAgICBjb25zdCBwID0gUHJvbWlzZS5yZXNvbHZlKClcclxuXHJcbiAgICAgICAgICAvLyBOb3RlOiB3YWl0IGZvciB0YWIgdG8gY29uZmlybSBpdCBoYXMgbG9hZGVkXHJcbiAgICAgICAgICByZXR1cm4gcFxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4gZ2V0SXBjQ2FjaGUoKS5nZXQodGFiLmlkLCA2MDAwICogMTApKVxyXG4gICAgICAgICAgLnRoZW4oaXBjID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcCA9ICFoYXNPcGVuZWRVcmwgPyBQcm9taXNlLnJlc29sdmUoKSA6IGlwYy5hc2soJ01BUktfTk9fQ09NTUFORFNfWUVUJywge30pXHJcbiAgICAgICAgICAgIHJldHVybiBwLnRoZW4oKCkgPT4gaXBjLmFzaygnU0VUX1NUQVRVUycsIHsgc3RhdHVzOiBDLkNPTlRFTlRfU0NSSVBUX1NUQVRVUy5QTEFZSU5HIH0pKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJlcGFyZSgpXHJcbiAgICAgIC50aGVuKHJ1bkV0ZXJuYWxseSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGxvZy5lcnJvcignY2F0Y2hlZCBieSBydW5FdGVybmFsbHknLCBlLnN0YWNrKVxyXG5cclxuICAgICAgICBpZiAoZSAmJiBlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIGUubWVzc2FnZS5pbmRleE9mKCdsb3N0IGhlYXJ0IGJlYXQgd2hlbiBydW5uaW5nIGNvbW1hbmQnKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgICBlLm1lc3NhZ2UuaW5kZXhPZignQ291bGQgbm90IGVzdGFibGlzaCBjb25uZWN0aW9uJykgIT09IC0xXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgIHJldHVybiBydW5FdGVybmFsbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnUEFORUxfU1RPUF9QTEFZSU5HJzoge1xyXG4gICAgICB0b2dnbGVQbGF5aW5nQmFkZ2UoZmFsc2UpXHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IEMuQVBQX1NUQVRVUy5OT1JNQUxcclxuXHJcbiAgICAgIC8vIE5vdGU6IHJlc2V0IGRvd25sb2FkIG1hbmFnZXIgdG8gY2xlYXIgYW55IHByZXZpb3VzIGRvd25sb2Fkc1xyXG4gICAgICBnZXREb3dubG9hZE1hbigpLnJlc2V0KClcclxuXHJcbiAgICAgIC8vIE5vdGU6IHJlc2V0IGZpcnN0UGxheSB0byBjdXJyZW50IHRvUGxheSB3aGVuIHN0b3BwZWQgcGxheWluZ1xyXG4gICAgICAvLyB1c2VyZnVsIGZvciBwbGF5aW5nIGxvb3AgKHJlc2V0IGZpcnN0UGxheSBhZnRlciBlYWNoIGxvb3ApXHJcbiAgICAgIHN0YXRlLnRhYklkcy5maXJzdFBsYXkgPSBzdGF0ZS50YWJJZHMudG9QbGF5XHJcblxyXG4gICAgICBpZiAoc3RhdGUudGltZXIpIGNsZWFySW50ZXJ2YWwoc3RhdGUudGltZXIpXHJcblxyXG4gICAgICAvLyBOb3RlOiBsZXQgY3Mga25vdyB0aGF0IGl0IHNob3VsZCBleGl0IHBsYXlpbmcgbW9kZVxyXG4gICAgICByZXR1cm4gZ2V0SXBjQ2FjaGUoKS5nZXQoc3RhdGUudGFiSWRzLnRvUGxheSlcclxuICAgICAgLnRoZW4oaXBjID0+IGlwYy5hc2soJ1NFVF9TVEFUVVMnLCB7IHN0YXR1czogQy5DT05URU5UX1NDUklQVF9TVEFUVVMuTk9STUFMIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlICdmaW5kJyBmdW5jdGlvbmFsaXR5IG9uIGRhc2hib2FyZCBwYW5lbFxyXG4gICAgLy8gSXQgd2lsbCBmaW5kIGVpdGhlciB0aGUgbGFzdCBwbGF5IHRhYiBvciByZWNvcmQgdGFiIHRvIGxvb2sgZm9yIHRoZSBwYXNzZWQgaW4gbG9jYXRvclxyXG4gICAgY2FzZSAnUEFORUxfSElHSExJR0hUX0RPTSc6IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICBnZXRSZWNvcmRUYWJJcGMoKVxyXG4gICAgICAgICAgLnRoZW4oaXBjID0+ICh7IGlwYywgdHlwZTogJ3JlY29yZCcgfSkpXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4gbnVsbCksXHJcbiAgICAgICAgZ2V0UGxheVRhYklwYygpXHJcbiAgICAgICAgICAudGhlbihpcGMgPT4gKHsgaXBjLCB0eXBlOiAncGxheScgfSkpXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4gbnVsbClcclxuICAgICAgXSlcclxuICAgICAgLnRoZW4odHVwbGUgPT4ge1xyXG4gICAgICAgIGlmICghdHVwbGVbMF0gJiYgIXR1cGxlWzFdKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHdoZXJlIHRvIGxvb2sgZm9yIHRoZSBkb20nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR1cGxlLmZpbHRlcih4ID0+ICEheClcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4obGlzdCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgbGlzdC5tYXAoKHsgaXBjLCB0eXBlIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGlwYy5hc2soJ0ZJTkRfRE9NJywgeyBsb2NhdG9yOiBhcmdzLmxvY2F0b3IgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gKHsgcmVzdWx0LCB0eXBlLCBpcGMgfSkpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4obGlzdCA9PiB7XHJcbiAgICAgICAgY29uc3QgZm91bmRlZExpc3QgPSBsaXN0LmZpbHRlcih4ID0+IHgucmVzdWx0KVxyXG5cclxuICAgICAgICBpZiAoZm91bmRlZExpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RPTSBub3QgZm91bmQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGZvdW5kZWRMaXN0Lmxlbmd0aCA9PT0gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGZvdW5kZWRMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnR5cGUgPT09IGFyZ3MubGFzdE9wZXJhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmb3VuZGVkTGlzdFswXVxyXG5cclxuICAgICAgICBjb25zdCB0YWJJZCA9IHN0YXRlLnRhYklkc1tpdGVtLnR5cGUgPT09ICdyZWNvcmQnID8gJ2xhc3RSZWNvcmQnIDogJ3RvUGxheSddXHJcblxyXG4gICAgICAgIHJldHVybiBhY3RpdmF0ZVRhYih0YWJJZCwgdHJ1ZSlcclxuICAgICAgICAudGhlbigoKSA9PiBpdGVtLmlwYy5hc2soJ0hJR0hMSUdIVF9ET00nLCB7IGxvY2F0b3I6IGFyZ3MubG9jYXRvciB9KSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdQQU5FTF9ISUdITElHSFRfUkVDVCc6IHtcclxuICAgICAgcmV0dXJuIGdldFBsYXlUYWJJcGMoKVxyXG4gICAgICAudGhlbihpcGMgPT4gaXBjLmFzaygnSElHSExJR0hUX1JFQ1QnLCBhcmdzKSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdQQU5FTF9ISUdITElHSFRfUkVDVFMnOiB7XHJcbiAgICAgIHJldHVybiBnZXRQbGF5VGFiSXBjKClcclxuICAgICAgLnRoZW4oaXBjID0+IGlwYy5hc2soJ0hJR0hMSUdIVF9SRUNUUycsIGFyZ3MpKVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1BBTkVMX1JFU0laRV9XSU5ET1cnOiB7XHJcbiAgICAgIGlmICghc3RhdGUudGFiSWRzLnBhbmVsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYW5lbCBub3QgYXZhaWxhYmxlJylcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIEV4dC50YWJzLmdldChzdGF0ZS50YWJJZHMucGFuZWwpXHJcbiAgICAgIC50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEV4dC53aW5kb3dzLnVwZGF0ZSh0YWIud2luZG93SWQsIHBpY2soWyd3aWR0aCcsICdoZWlnaHQnXSwge1xyXG4gICAgICAgICAgLi4uYXJncy5zaXplLFxyXG4gICAgICAgICAgd2lkdGg6IGFyZ3Muc2l6ZS53aWR0aCxcclxuICAgICAgICAgIGhlaWdodDogYXJncy5zaXplLmhlaWdodFxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1BBTkVMX1VQREFURV9CQURHRSc6IHtcclxuICAgICAgY29uc3QgZGljdCA9IHtcclxuICAgICAgICBwbGF5OiB0b2dnbGVQbGF5aW5nQmFkZ2UsXHJcbiAgICAgICAgcmVjb3JkOiB0b2dnbGVSZWNvcmRpbmdCYWRnZSxcclxuICAgICAgICBpbnNwZWN0OiB0b2dnbGVJbnNwZWN0aW5nQmFkZ2VcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmbiA9IGRpY3RbYXJncy50eXBlXVxyXG5cclxuICAgICAgaWYgKCFmbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5rbm93biB0eXBlIGZvciB1cGRhdGluZyBiYWRnZSwgJyR7YXJncy50eXBlfSdgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZm4oIWFyZ3MuY2xlYXIsIGFyZ3MpXHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnUEFORUxfTk9USUZZX0FVVE9fUEFVU0UnOiB7XHJcbiAgICAgIG5vdGlmeUF1dG9QYXVzZSgpXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnUEFORUxfTk9USUZZX0JSRUFLUE9JTlQnOiB7XHJcbiAgICAgIG5vdGlmeUJyZWFrcG9pbnQoKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1BBTkVMX05PVElGWV9FQ0hPJzoge1xyXG4gICAgICBub3RpZnlFY2hvKGFyZ3MudGV4dClcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdQQU5FTF9DTE9TRV9BTExfV0lORE9XUyc6IHtcclxuICAgICAgY2xvc2VBbGxXaW5kb3dzKClcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdQQU5FTF9DVVJSRU5UX1BMQVlfVEFCX0lORk8nOiB7XHJcbiAgICAgIHJldHVybiBnZXRQbGF5VGFiKClcclxuICAgICAgLnRoZW4odGFiID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdXJsOiB0YWIudXJsLFxyXG4gICAgICAgICAgdGl0bGU6IHRhYi50aXRsZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdQQU5FTF9CUklOR19QTEFZSU5HX1dJTkRPV19UT19GT1JFR1JPVU5EJzoge1xyXG4gICAgICByZXR1cm4gZ2V0UGxheVRhYigpXHJcbiAgICAgIC50aGVuKHRhYiA9PiBhY3RpdmF0ZVRhYih0YWIuaWQsIHRydWUpKVxyXG4gICAgICAuY2F0Y2goZSA9PiBzaG93UGFuZWxXaW5kb3coKSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdQQU5FTF9SRVNJWkVfUExBWV9UQUInOiB7XHJcbiAgICAgIHJldHVybiBnZXRQbGF5VGFiKClcclxuICAgICAgLnRoZW4odGFiID0+IHJlc2l6ZVZpZXdwb3J0T2ZUYWIodGFiLmlkLCBhcmdzKSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdQQU5FTF9TRUxFQ1RfQVJFQV9PTl9DVVJSRU5UX1BBR0UnOiB7XHJcbiAgICAgIHJldHVybiBnZXRQbGF5VGFiSXBjKClcclxuICAgICAgLnRoZW4oaXBjID0+IHtcclxuICAgICAgICBhY3RpdmF0ZVRhYihzdGF0ZS50YWJJZHMudG9QbGF5LCB0cnVlKVxyXG4gICAgICAgIHJldHVybiBpcGMuYXNrKCdTRUxFQ1RfU0NSRUVOX0FSRUEnKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgbG9nLmVycm9yKGUuc3RhY2spXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYWJsZSB0byB0YWtlIHNjcmVlbnNob3Qgb24gdGhlIGN1cnJlbnQgdGFiJylcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdQQU5FTF9DTEVBUl9WSVNJT05fUkVDVFNfT05fUExBWUlOR19QQUdFJzoge1xyXG4gICAgICByZXR1cm4gZ2V0UGxheVRhYklwYygpXHJcbiAgICAgIC50aGVuKGlwYyA9PiBpcGMuYXNrKCdDTEVBUl9WSVNJT05fUkVDVFMnKSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdQQU5FTF9TRUFSQ0hfVklTSU9OX09OX1BMQVlJTkdfUEFHRSc6IHtcclxuICAgICAgY29uc3QgeyB2aXNpb25GaWxlTmFtZSwgbWluU2ltaWxhcml0eSwgc2VhcmNoQXJlYSA9ICdmdWxsJywgc3RvcmVkSW1hZ2VSZWN0LCBjb21tYW5kIH0gPSBhcmdzXHJcbiAgICAgIGNvbnN0IHBhdHRlcm5EcGkgICAgICA9IGRwaUZyb21GaWxlTmFtZSh2aXNpb25GaWxlTmFtZSkgfHwgOTZcclxuICAgICAgY29uc3Qgc2NyZWVuRHBpICAgICAgID0gZ2V0U2NyZWVuRHBpKClcclxuICAgICAgY29uc3QgZHBpU2NhbGUgICAgICAgID0gcGF0dGVybkRwaSAvIHNjcmVlbkRwaVxyXG4gICAgICBjb25zdCBtYW4gICAgICAgICAgICAgPSBnZXRWaXNpb25NYW4oKVxyXG4gICAgICBjb25zdCBnZXRQYXR0ZXJuSW1hZ2UgPSAoZmlsZU5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gbWFuLmV4aXN0cyhmaWxlTmFtZSlcclxuICAgICAgICAudGhlbihleGlzdGVkID0+IHtcclxuICAgICAgICAgIGlmICghZXhpc3RlZCkgdGhyb3cgbmV3IEVycm9yKGAke2NvbW1hbmR9OiBObyBpbnB1dCBpbWFnZSBmb3VuZCBmb3IgZmlsZSBuYW1lICcke2ZpbGVOYW1lfSdgKVxyXG4gICAgICAgICAgcmV0dXJuIG1hbi5yZWFkQXNEYXRhVVJMKGZpbGVOYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2F2ZURhdGFVcmxUb0xhc3RTY3JlZW5zaG90ID0gKGRhdGFVcmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZ2V0U2NyZWVuc2hvdE1hbigpLm92ZXJ3cml0ZShcclxuICAgICAgICAgIGVuc3VyZUV4dE5hbWUoJy5wbmcnLCBDLkxBU1RfU0NSRUVOU0hPVF9GSUxFX05BTUUpLFxyXG4gICAgICAgICAgZGF0YVVSSXRvQmxvYihkYXRhVXJsKVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBnZXRQYW5lbFRhYklwYygpXHJcbiAgICAgICAgICAudGhlbihwYW5lbElwYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYW5lbElwYy5hc2soJ1JFU1RPUkVfU0NSRUVOU0hPVFMnKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGdldFRhcmdldEltYWdlICA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXB0dXJlID0gKGlwYywgdGFiSWQpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAoc2VhcmNoQXJlYSkge1xyXG4gICAgICAgICAgICBjYXNlICd2aWV3cG9ydCc6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIGlwYy5hc2soJ1NDUkVFTlNIT1RfUEFHRV9JTkZPJyksXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlU2NyZWVuKHRhYklkKVxyXG4gICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKFtwYWdlSW5mbywgZGF0YVVybF0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNhdmVEYXRhVXJsVG9MYXN0U2NyZWVuc2hvdChkYXRhVXJsKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHBhZ2VJbmZvLm9yaWdpbmFsWCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBwYWdlSW5mby5vcmlnaW5hbFlcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZGF0YVVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjYXNlICdmdWxsJzoge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjYXB0dXJlRnVsbFNjcmVlbih0YWJJZCwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRDYXB0dXJlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpcGMuYXNrKCdTVEFSVF9DQVBUVVJFX0ZVTExfU0NSRUVOU0hPVCcsIHt9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVuZENhcHR1cmU6IChwYWdlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gaXBjLmFzaygnRU5EX0NBUFRVUkVfRlVMTF9TQ1JFRU5TSE9UJywgeyBwYWdlSW5mbyB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2U6IChvZmZzZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGlwYy5hc2soJ1NDUk9MTF9QQUdFJywgeyBvZmZzZXQgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC50aGVuKGRhdGFVcmwgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2F2ZURhdGFVcmxUb0xhc3RTY3JlZW5zaG90KGRhdGFVcmwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBkYXRhVXJsLCBvZmZzZXQ6IHsgeDogMCwgeTogMCB9IH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgaWYgKC9eZWxlbWVudDovaS50ZXN0KHNlYXJjaEFyZWEpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0b3JlZEltYWdlUmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJyFzdG9yZWRJbWFnZVJlY3Qgc2hvdWxkIG5vdCBiZSBlbXB0eScpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFuID0gZ2V0U2NyZWVuc2hvdE1hbigpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGVuc3VyZUV4dE5hbWUoJy5wbmcnLCBDLkxBU1RfU0NSRUVOU0hPVF9GSUxFX05BTUUpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hbi5yZWFkQXNEYXRhVVJMKGZpbGVOYW1lKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YVVybCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICBkYXRhVXJsLFxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBzdG9yZWRJbWFnZVJlY3QueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBzdG9yZWRJbWFnZVJlY3QueVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgc2VhcmNoQXJlYSAnJHtzZWFyY2hBcmVhfSdgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ2V0UGxheVRhYklwYygpXHJcbiAgICAgICAgLnRoZW4oaXBjID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvUGxheVRhYklkID0gc3RhdGUudGFiSWRzLnRvUGxheVxyXG5cclxuICAgICAgICAgIGxvZygnZ2V0VGFyZ2V0SW1hZ2UgdGFiSWRzJywgc3RhdGUudGFiSWRzLCB0b1BsYXlUYWJJZClcclxuXHJcbiAgICAgICAgICByZXR1cm4gYWN0aXZhdGVUYWIodG9QbGF5VGFiSWQsIHRydWUpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiBkZWxheSgoKSA9PiB7fSwgU0NSRUVOU0hPVF9ERUxBWSkpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiBjYXB0dXJlKGlwYywgdG9QbGF5VGFiSWQpKVxyXG4gICAgICAgICAgLnRoZW4ob2JqID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjYWxlRGF0YVVSSShvYmouZGF0YVVybCwgZHBpU2NhbGUpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGFVcmwgPT4gKHtcclxuICAgICAgICAgICAgICBkYXRhVXJsLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogb2JqLm9mZnNldFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1pblNpbWlsYXJpdHkgPCAwLjEgfHwgbWluU2ltaWxhcml0eSA+IDEuMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY29uZmlkZW5jZSBzaG91bGQgYmUgYmV0d2VlbiAwLjEgYW5kIDEuMCcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZ2V0UGF0dGVybkltYWdlKHZpc2lvbkZpbGVOYW1lKSxcclxuICAgICAgICBnZXRUYXJnZXRJbWFnZSgpXHJcbiAgICAgIF0pXHJcbiAgICAgIC50aGVuKChbcGF0dGVybkltYWdlVXJsLCB0YXJnZXRJbWFnZUluZm9dKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0SW1hZ2VVcmwgID0gdGFyZ2V0SW1hZ2VJbmZvLmRhdGFVcmxcclxuICAgICAgICBjb25zdCBvZmZzZXQgICAgICAgICAgPSB0YXJnZXRJbWFnZUluZm8ub2Zmc2V0XHJcblxyXG4gICAgICAgIHJldHVybiBzZWFyY2hJbWFnZSh7XHJcbiAgICAgICAgICBwYXR0ZXJuSW1hZ2VVcmwsXHJcbiAgICAgICAgICB0YXJnZXRJbWFnZVVybCxcclxuICAgICAgICAgIG1pblNpbWlsYXJpdHksXHJcbiAgICAgICAgICBhbGxvd1NpemVWYXJpYXRpb246IHRydWUsXHJcbiAgICAgICAgICBzY2FsZURvd25SYXRpbzogICAgIGRwaVNjYWxlICogd2luZG93LmRldmljZVBpeGVsUmF0aW8sXHJcbiAgICAgICAgICBvZmZzZXRYOiAgICAgICAgICAgIG9mZnNldC54IHx8IDAsXHJcbiAgICAgICAgICBvZmZzZXRZOiAgICAgICAgICAgIG9mZnNldC55IHx8IDBcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1BBTkVMX1RJTUVPVVRfU1RBVFVTJzoge1xyXG4gICAgICBzdGFydFNlbmRpbmdUaW1lb3V0U3RhdHVzKGFyZ3MudGltZW91dCwgYXJncy50eXBlKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1BBTkVMX0NMRUFSX1RJTUVPVVRfU1RBVFVTJzoge1xyXG4gICAgICBjbGVhckludGVydmFsKHN0YXRlLnRpbWVyKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0NTX1NUT1JFX1NDUkVFTlNIT1RfSU5fU0VMRUNUSU9OJzoge1xyXG4gICAgICBjb25zdCB7IHJlY3QsIGRldmljZVBpeGVsUmF0aW8sIGZpbGVOYW1lIH0gPSBhcmdzXHJcbiAgICAgIGNvbnN0IHRhYklkID0gYXJncy5zZW5kZXIudGFiLmlkXHJcblxyXG4gICAgICByZXR1cm4gZ2V0SXBjQ2FjaGUoKS5nZXQodGFiSWQpXHJcbiAgICAgIC50aGVuKGlwYyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlVGFiKHN0YXRlLnRhYklkcy50b1BsYXksIHRydWUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gZGVsYXkoKCkgPT4ge30sIFNDUkVFTlNIT1RfREVMQVkpKVxyXG4gICAgICAgIC50aGVuKCgpID0+IGNhcHR1cmVTY3JlZW5JblNlbGVjdGlvbihzdGF0ZS50YWJJZHMudG9QbGF5LCB7IHJlY3QsIGRldmljZVBpeGVsUmF0aW8gfSwge1xyXG4gICAgICAgICAgc3RhcnRDYXB0dXJlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpcGMuYXNrKCdTVEFSVF9DQVBUVVJFX0ZVTExfU0NSRUVOU0hPVCcsIHsgaGlkZVNjcm9sbGJhcjogZmFsc2UgfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbmRDYXB0dXJlOiAocGFnZUluZm8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGlwYy5hc2soJ0VORF9DQVBUVVJFX0ZVTExfU0NSRUVOU0hPVCcsIHsgcGFnZUluZm8gfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY3JvbGxQYWdlOiAob2Zmc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpcGMuYXNrKCdTQ1JPTExfUEFHRScsIHsgb2Zmc2V0IH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLnRoZW4oZGF0YVVybCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtYW4gPSBnZXRTY3JlZW5zaG90TWFuKClcclxuXHJcbiAgICAgICAgICByZXR1cm4gbWFuLm92ZXJ3cml0ZShmaWxlTmFtZSwgZGF0YVVSSXRvQmxvYihkYXRhVXJsKSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZ2V0UGFuZWxUYWJJcGMoKVxyXG4gICAgICAgICAgICAudGhlbihwYW5lbElwYyA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhbmVsSXBjLmFzaygnUkVTVE9SRV9TQ1JFRU5TSE9UUycpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmlsZU5hbWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdDU19TQ1JFRU5fQVJFQV9TRUxFQ1RFRCc6IHtcclxuICAgICAgY29uc3QgeyByZWN0LCBkZXZpY2VQaXhlbFJhdGlvIH0gPSBhcmdzXHJcbiAgICAgIGNvbnN0IHRhYklkID0gYXJncy5zZW5kZXIudGFiLmlkXHJcblxyXG4gICAgICBsb2coJ0NTX1NDUkVFTl9BUkVBX1NFTEVDVEVEJywgcmVjdCwgZGV2aWNlUGl4ZWxSYXRpbywgdGFiSWQpXHJcblxyXG4gICAgICByZXR1cm4gY2FwdHVyZVNjcmVlbkluU2VsZWN0aW9uU2ltcGxlKGFyZ3Muc2VuZGVyLnRhYi5pZCwgeyByZWN0LCBkZXZpY2VQaXhlbFJhdGlvIH0pXHJcbiAgICAgIC50aGVuKGRhdGFVcmwgPT4ge1xyXG4gICAgICAgIGxvZygnQ1NfU0NSRUVOX0FSRUFfU0VMRUNURUQnLCAnZ290IHJldXNsdCcsIGRhdGFVcmwubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiB3aXRoUGFuZWxJcGMoKVxyXG4gICAgICAgIC50aGVuKHBhbmVsSXBjID0+IHtcclxuICAgICAgICAgIHJldHVybiBwYW5lbElwYy5hc2soJ0FERF9WSVNJT05fSU1BR0UnLCB7IGRhdGFVcmwgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgbG9nLmVycm9yKGUuc3RhY2spXHJcbiAgICAgICAgdGhyb3cgZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0NTX0RPTkVfSU5TUEVDVElORyc6XHJcbiAgICAgIGxvZygnZG9uZSBpbnNwZWN0aW5nLi4uJylcclxuICAgICAgc3RhdGUuc3RhdHVzICAgICAgICAgICAgICA9IEMuQVBQX1NUQVRVUy5OT1JNQUxcclxuXHJcbiAgICAgIHRvZ2dsZUluc3BlY3RpbmdCYWRnZShmYWxzZSlcclxuICAgICAgc2V0SW5zcGVjdG9yVGFiSWQobnVsbCwgdHJ1ZSwgdHJ1ZSlcclxuICAgICAgYWN0aXZhdGVUYWIoc3RhdGUudGFiSWRzLnBhbmVsLCB0cnVlKVxyXG5cclxuICAgICAgcmV0dXJuIGdldFBhbmVsVGFiSXBjKClcclxuICAgICAgLnRoZW4ocGFuZWxJcGMgPT4ge1xyXG4gICAgICAgIHJldHVybiBwYW5lbElwYy5hc2soJ0lOU1BFQ1RfUkVTVUxUJywgYXJncylcclxuICAgICAgfSlcclxuXHJcbiAgICAvLyBJdCdzIHVzZWQgZm9yIGluc3BlY3RpbmcuIFRoZSBmaXJzdCB0YWIgd2hpY2ggc2VuZHMgYSBDU19BQ1RJVkFURV9NRSBldmVudFxyXG4gICAgLy8gb24gbW91c2Ugb3ZlciBldmVudCB3aWxsIGJlIHRoZSBvbmUgZm9yIHVzIHRvIGluc3BlY3RcclxuICAgIGNhc2UgJ0NTX0FDVElWQVRFX01FJzpcclxuICAgICAgLy8gbG9nKCdDU19BQ1RJVkFURV9NRSBzdGF0ZS5zdGF0dXMnLCBzdGF0ZS5zdGF0dXMpXHJcblxyXG4gICAgICBzd2l0Y2ggKHN0YXRlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgQy5BUFBfU1RBVFVTLklOU1BFQ1RPUjpcclxuICAgICAgICAgIGlmICghc3RhdGUudGFiSWRzLnRvSW5zcGVjdCkge1xyXG4gICAgICAgICAgICBzdGF0ZS50YWJJZHMudG9JbnNwZWN0ID0gYXJncy5zZW5kZXIudGFiLmlkXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBnZXRJcGNDYWNoZSgpLmdldChzdGF0ZS50YWJJZHMudG9JbnNwZWN0KVxyXG4gICAgICAgICAgICAgIC50aGVuKGlwYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXBjLmFzaygnU0VUX1NUQVRVUycsIHtcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzOiBDLkNPTlRFTlRfU0NSSVBUX1NUQVRVUy5JTlNQRUNUSU5HXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIDApXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuXHJcbiAgICBjYXNlICdDU19SRUNPUkRfQUREX0NPTU1BTkQnOiB7XHJcbiAgICAgIGNvbnN0IHB1bGxiYWNrVGltZW91dCA9IDEwMDBcclxuICAgICAgbGV0IGlzRmlyc3QgICA9IGZhbHNlXHJcblxyXG4gICAgICBpZiAoc3RhdGUuc3RhdHVzICE9PSBDLkFQUF9TVEFUVVMuUkVDT1JERVIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFzdGF0ZS50YWJJZHMudG9SZWNvcmQpIHtcclxuICAgICAgICBpc0ZpcnN0ID0gdHJ1ZVxyXG4gICAgICAgIHN0YXRlLnRhYklkcy50b1JlY29yZCA9IHN0YXRlLnRhYklkcy5maXJzdFJlY29yZCA9IGFyZ3Muc2VuZGVyLnRhYi5pZFxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3RhdGUudGFiSWRzLnRvUmVjb3JkICE9PSBhcmdzLnNlbmRlci50YWIuaWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTm90ZTogaWYgcmVjZWl2ZSBhIHB1bGxiYWNrIGNtZCwgd2UgbmVlZCB0byBzZXQgdGhlIGZsYWcsXHJcbiAgICAgIC8vIGFuZCBzdHJpcCBXYWl0IGZyb20gYW55IHh4eEFuZFdhaXQgY29tbWFuZFxyXG4gICAgICBpZiAoYXJncy5jbWQgPT09ICdwdWxsYmFjaycpIHtcclxuICAgICAgICBzdGF0ZS5wdWxsYmFjayA9IHRydWVcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc3RhdGUucHVsbGJhY2sgPSBmYWxzZSB9LCBwdWxsYmFja1RpbWVvdXQgKiAyKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBnZXRJcGNDYWNoZSgpLmdldChzdGF0ZS50YWJJZHMudG9SZWNvcmQpXHJcbiAgICAgICAgLnRoZW4oaXBjID0+IHtcclxuICAgICAgICAgIHJldHVybiBpcGMuYXNrKCdTRVRfU1RBVFVTJywge1xyXG4gICAgICAgICAgICBzdGF0dXM6IEMuQ09OVEVOVF9TQ1JJUFRfU1RBVFVTLlJFQ09SRElOR1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9LCAwKVxyXG5cclxuICAgICAgcmV0dXJuIGRlbGF5KCgpID0+IHt9LCBwdWxsYmFja1RpbWVvdXQpXHJcbiAgICAgIC50aGVuKCgpID0+IGdldFBhbmVsVGFiSXBjKCkpXHJcbiAgICAgIC50aGVuKHBhbmVsSXBjID0+IHtcclxuICAgICAgICBpZiAoaXNGaXJzdCkge1xyXG4gICAgICAgICAgcGFuZWxJcGMuYXNrKCdSRUNPUkRfQUREX0NPTU1BTkQnLCB7XHJcbiAgICAgICAgICAgIGNtZDogJ29wZW4nLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IGFyZ3MudXJsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm90ZTogcmVtb3ZlIEFuZFdhaXQgZnJvbSBjb21tYW5kcyBpZiB3ZSBnb3QgYSBwdWxsYmFja1xyXG4gICAgICAgIGlmIChzdGF0ZS5wdWxsYmFjaykge1xyXG4gICAgICAgICAgYXJncy5jbWQgPSBhcmdzLmNtZC5yZXBsYWNlKCdBbmRXYWl0JywgJycpXHJcbiAgICAgICAgICBzdGF0ZS5wdWxsYmFjayA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFuZWxJcGMuYXNrKCdSRUNPUkRfQUREX0NPTU1BTkQnLCBhcmdzKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBzdG9yYWdlLmdldCgnY29uZmlnJykpXHJcbiAgICAgIC50aGVuKGNvbmZpZyA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5yZWNvcmROb3RpZmljYXRpb24gJiYgc3RhdGUuc3RhdHVzID09PSBDLkFQUF9TVEFUVVMuUkVDT1JERVIpIHtcclxuICAgICAgICAgIG5vdGlmeVJlY29yZENvbW1hbmQoYXJncylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnQ1NfQ0xPU0VfT1RIRVJfVEFCUyc6IHtcclxuICAgICAgY29uc3QgdGFiSWQgPSBhcmdzLnNlbmRlci50YWIuaWRcclxuXHJcbiAgICAgIHJldHVybiBFeHQudGFicy5nZXQodGFiSWQpXHJcbiAgICAgIC50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEV4dC50YWJzLnF1ZXJ5KHsgd2luZG93SWQ6IHRhYi53aW5kb3dJZCB9KVxyXG4gICAgICAgIC50aGVuKHRhYnMgPT4gdGFicy5maWx0ZXIodCA9PiB0LmlkICE9PSB0YWJJZCkpXHJcbiAgICAgICAgLnRoZW4odGFicyA9PiBFeHQudGFicy5yZW1vdmUodGFicy5tYXAodCA9PiB0LmlkKSkpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnQ1NfU0VMRUNUX1dJTkRPVyc6IHtcclxuICAgICAgY29uc3Qgb2xkVGFibElkICAgICAgID0gYXJncy5zZW5kZXIudGFiLmlkXHJcbiAgICAgIGNvbnN0IFt0eXBlLCBsb2NhdG9yXSA9IHNwbGl0SW50b1R3bygnPScsIGFyZ3MudGFyZ2V0KVxyXG5cclxuICAgICAgaWYgKCFsb2NhdG9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdpbmRvdyBsb2NhdG9yLCAnJHthcmdzLnRhcmdldH0nYClcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHBHZXRUYWJzXHJcblxyXG4gICAgICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ3RpdGxlJzpcclxuICAgICAgICAgIHBHZXRUYWJzID0gRXh0LnRhYnMucXVlcnkoeyB0aXRsZTogbG9jYXRvciB9KVxyXG4gICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgY2FzZSAndGFiJzoge1xyXG4gICAgICAgICAgaWYgKC9eXFxzKm9wZW5cXHMqJC9pLnRlc3QobG9jYXRvcikpIHtcclxuICAgICAgICAgICAgcEdldFRhYnMgPSBFeHQudGFicy5jcmVhdGUoeyB1cmw6IGFyZ3MudmFsdWUgfSlcclxuICAgICAgICAgICAgLnRoZW4odGFiID0+IFt0YWJdKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcGFyc2VJbnQobG9jYXRvciwgMTApXHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB0YWIgb2Zmc2V0LCAnJHtsb2NhdG9yfSdgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwR2V0VGFicyA9IEV4dC50YWJzLmdldChzdGF0ZS50YWJJZHMuZmlyc3RQbGF5KVxyXG4gICAgICAgICAgICAudGhlbih0YWIgPT4gRXh0LnRhYnMucXVlcnkoe1xyXG4gICAgICAgICAgICAgIHdpbmRvd0lkOiB0YWIud2luZG93SWQsXHJcbiAgICAgICAgICAgICAgaW5kZXg6IHRhYi5pbmRleCArIG9mZnNldFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgd2luZG93IGxvY2F0b3IgdHlwZSAnJHt0eXBlfScgbm90IHN1cHBvcnRlZGApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwR2V0VGFic1xyXG4gICAgICAudGhlbih0YWJzID0+IHtcclxuICAgICAgICBpZiAodGFicy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIGZpbmQgdGhlIHRhYiB3aXRoIGxvY2F0b3IgJyR7YXJncy50YXJnZXR9J2ApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWJzWzBdXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgbG9nKCdzZWxlY3RXaW5kb3csIGdvdCB0YWInLCB0YWIpXHJcblxyXG4gICAgICAgIHJldHVybiBnZXRJcGNDYWNoZSgpLmdldCh0YWIuaWQsIDEwMDAwKVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIGlmICgvdGFiPVxccypvcGVuXFxzKi9pLnRlc3QoYXJncy50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVG8gb3BlbiBhIG5ldyB0YWIsIGEgdmFsaWQgVVJMIGlzIG5lZWRlZCcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihpcGMgPT4ge1xyXG4gICAgICAgICAgbG9nKCdzZWxlY3RXaW5kb3csIGdvdCBpcGMnLCBpcGMpXHJcblxyXG4gICAgICAgICAgcmV0dXJuIGlwYy5hc2soJ0RPTV9SRUFEWScsIHt9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpcGMuYXNrKCdTRVRfU1RBVFVTJywge1xyXG4gICAgICAgICAgICAgIHN0YXR1czogQy5DT05URU5UX1NDUklQVF9TVEFUVVMuUExBWUlOR1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAvLyBOb3RlOiBzZXQgdGhlIG9yaWdpbmFsIHRhYiB0byBOT1JNQUwgc3RhdHVzXHJcbiAgICAgICAgICAvLyBvbmx5IGlmIHRoZSBuZXcgdGFiIGlzIHNldCB0byBQTEFZSU5HIHN0YXR1c1xyXG4gICAgICAgICAgbG9nKCdzZWxlY3RXaW5kb3csIHNldCBvcmlnbmlhbCB0byBub3JtYWwnKVxyXG5cclxuICAgICAgICAgIGdldElwY0NhY2hlKCkuZ2V0KG9sZFRhYmxJZClcclxuICAgICAgICAgIC50aGVuKGlwYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpcGMuYXNrKCdTRVRfU1RBVFVTJywge1xyXG4gICAgICAgICAgICAgIHN0YXR1czogQy5DT05URU5UX1NDUklQVF9TVEFUVVMuTk9STUFMXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc3RhdGUudGFiSWRzLmxhc3RQbGF5ID0gc3RhdGUudGFiSWRzLnRvUGxheVxyXG4gICAgICAgICAgc3RhdGUudGFiSWRzLnRvUGxheSA9IHRhYi5pZFxyXG4gICAgICAgICAgcmV0dXJuIGFjdGl2YXRlVGFiKHRhYi5pZClcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgbG9nLmVycm9yKGUuc3RhY2spXHJcbiAgICAgICAgdGhyb3cgZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0NTX0NBUFRVUkVfU0NSRUVOU0hPVCc6XHJcbiAgICAgIHJldHVybiBhY3RpdmF0ZVRhYihzdGF0ZS50YWJJZHMudG9QbGF5LCB0cnVlKVxyXG4gICAgICAudGhlbigoKSA9PiBkZWxheSgoKSA9PiB7fSwgU0NSRUVOU0hPVF9ERUxBWSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHNhdmVTY3JlZW4oc3RhdGUudGFiSWRzLnRvUGxheSwgYXJncy5maWxlTmFtZSkpXHJcblxyXG4gICAgY2FzZSAnQ1NfQ0FQVFVSRV9GVUxMX1NDUkVFTlNIT1QnOlxyXG4gICAgICByZXR1cm4gYWN0aXZhdGVUYWIoc3RhdGUudGFiSWRzLnRvUGxheSwgdHJ1ZSlcclxuICAgICAgLnRoZW4oKCkgPT4gZGVsYXkoKCkgPT4ge30sIFNDUkVFTlNIT1RfREVMQVkpKVxyXG4gICAgICAudGhlbihnZXRQbGF5VGFiSXBjKVxyXG4gICAgICAudGhlbihpcGMgPT4ge1xyXG4gICAgICAgIHJldHVybiBzYXZlRnVsbFNjcmVlbihzdGF0ZS50YWJJZHMudG9QbGF5LCBhcmdzLmZpbGVOYW1lLCB7XHJcbiAgICAgICAgICBzdGFydENhcHR1cmU6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGlwYy5hc2soJ1NUQVJUX0NBUFRVUkVfRlVMTF9TQ1JFRU5TSE9UJywge30pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kQ2FwdHVyZTogKHBhZ2VJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpcGMuYXNrKCdFTkRfQ0FQVFVSRV9GVUxMX1NDUkVFTlNIT1QnLCB7IHBhZ2VJbmZvIH0pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2Nyb2xsUGFnZTogKG9mZnNldCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXBjLmFzaygnU0NST0xMX1BBR0UnLCB7IG9mZnNldCB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY2FzZSAnQ1NfVElNRU9VVF9TVEFUVVMnOlxyXG4gICAgICByZXR1cm4gZ2V0UGFuZWxUYWJJcGMoKVxyXG4gICAgICAudGhlbihpcGMgPT4gaXBjLmFzaygnVElNRU9VVF9TVEFUVVMnLCBhcmdzKSlcclxuXHJcbiAgICBjYXNlICdDU19ERUxFVEVfQUxMX0NPT0tJRVMnOiB7XHJcbiAgICAgIGNvbnN0IHsgdXJsIH0gPSBhcmdzXHJcblxyXG4gICAgICByZXR1cm4gRXh0LmNvb2tpZXMuZ2V0QWxsKHsgdXJsIH0pXHJcbiAgICAgIC50aGVuKGNvb2tpZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBzID0gY29va2llcy5tYXAoYyA9PiBFeHQuY29va2llcy5yZW1vdmUoe1xyXG4gICAgICAgICAgdXJsOiBgJHt1cmx9JHtjLnBhdGh9YCxcclxuICAgICAgICAgIG5hbWU6IGMubmFtZVxyXG4gICAgICAgIH0pKVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHMpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnQ1NfU0VUX0ZJTEVfSU5QVVRfRklMRVMnOiB7XHJcbiAgICAgIHJldHVybiBzZXRGaWxlSW5wdXRGaWxlcyh7XHJcbiAgICAgICAgdGFiSWQ6ICAgIGFyZ3Muc2VuZGVyLnRhYi5pZCxcclxuICAgICAgICBzZWxlY3RvcjogYXJncy5zZWxlY3RvcixcclxuICAgICAgICBmaWxlczogICAgYXJncy5maWxlc1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0NTX09OX0RPV05MT0FEJzoge1xyXG4gICAgICBjb25zdCBwID0gZ2V0RG93bmxvYWRNYW4oKS5wcmVwYXJlRG93bmxvYWQoYXJncy5maWxlTmFtZSwge1xyXG4gICAgICAgIHdhaXQ6ICAgICAgICAgICAgICEhYXJncy53YWl0LFxyXG4gICAgICAgIHRpbWVvdXQ6ICAgICAgICAgIGFyZ3MudGltZW91dCxcclxuICAgICAgICB0aW1lb3V0Rm9yU3RhcnQ6ICBhcmdzLnRpbWVvdXRGb3JTdGFydFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0NTX0lOVk9LRSc6IHtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2UuZ2V0KCdjb25maWcnKVxyXG4gICAgICAudGhlbihjb25maWcgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzVGVzdENhc2UgID0gISFhcmdzLnRlc3RDYXNlXHJcbiAgICAgICAgY29uc3QgaXNUZXN0U3VpdGUgPSAhIWFyZ3MudGVzdFN1aXRlXHJcbiAgICAgICAgY29uc3QgZnJvbSAgICAgICAgPSAoYXJncy50ZXN0Q2FzZSAmJiBhcmdzLnRlc3RDYXNlLmZyb20pIHx8IChhcmdzLnRlc3RTdWl0ZSAmJiBhcmdzLnRlc3RTdWl0ZS5mcm9tKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGZyb20pIHtcclxuICAgICAgICAgIGNhc2UgJ2Jvb2ttYXJrJzoge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5hbGxvd1J1bkZyb21Cb29rbWFyaykge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVG8gcnVuIG1hY3JvIC8gdGVzdCBzdWl0ZSBmcm9tIGJvb2ttYXJrcywgZW5hYmxlIGl0IGluIGthbnR1IHNldHRpbmdzIGZpcnN0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNhc2UgJ2h0bWwnOiB7XHJcbiAgICAgICAgICAgIGlmICghaXNUZXN0U3VpdGUpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhbGxvd2VkIHRvIHJ1biBmcm9tIGxvY2FsIGZpbGUnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc0ZpbGVTY2hlbWEgPSAvXmZpbGU6XFwvXFwvLy50ZXN0KGFyZ3Muc2VuZGVyLnVybClcclxuICAgICAgICAgICAgY29uc3QgaXNIdHRwU2NoZW1hID0gL15odHRwcz86XFwvXFwvLy50ZXN0KGFyZ3Muc2VuZGVyLnVybClcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZpbGVTY2hlbWEgJiYgIWNvbmZpZy5hbGxvd1J1bkZyb21GaWxlU2NoZW1hKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUbyBydW4gdGVzdCBzdWl0ZSBmcm9tIGxvY2FsIGZpbGUsIGVuYWJsZSBpdCBpbiBrYW50dSBzZXR0aW5ncyBmaXJzdCcpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0h0dHBTY2hlbWEgJiYgIWNvbmZpZy5hbGxvd1J1bkZyb21IdHRwU2NoZW1hKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUbyBydW4gdGVzdCBzdWl0ZSBmcm9tIHB1YmxpYyB3ZWJzaXRlLCBlbmFibGUgaXQgaW4ga2FudHUgc2V0dGluZ3MgZmlyc3QnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBzb3VyY2Ugbm90IGFsbG93ZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdpdGhQYW5lbElwYygpXHJcbiAgICAgICAgLnRoZW4ocGFuZWxJcGMgPT4ge1xyXG4gICAgICAgICAgaWYgKGFyZ3MudGVzdENhc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhbmVsSXBjLmFzaygnUlVOX1RFU1RfQ0FTRScsIHtcclxuICAgICAgICAgICAgICB0ZXN0Q2FzZTogYXJncy50ZXN0Q2FzZSxcclxuICAgICAgICAgICAgICBvcHRpb25zOiAgYXJncy5vcHRpb25zXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGFyZ3MudGVzdFN1aXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYW5lbElwYy5hc2soJ1JVTl9URVNUX1NVSVRFJywge1xyXG4gICAgICAgICAgICAgIHRlc3RTdWl0ZTogIGFyZ3MudGVzdFN1aXRlLFxyXG4gICAgICAgICAgICAgIG9wdGlvbnM6ICAgIGFyZ3Mub3B0aW9uc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdDU19JTVBPUlRfSFRNTF9BTkRfSU5WT0tFJzoge1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5nZXQoJ2NvbmZpZycpXHJcbiAgICAgIC50aGVuKGNvbmZpZyA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNGaWxlU2NoZW1hID0gL15maWxlOlxcL1xcLy8udGVzdChhcmdzLnNlbmRlci51cmwpXHJcbiAgICAgICAgY29uc3QgaXNIdHRwU2NoZW1hID0gL15odHRwcz86XFwvXFwvLy50ZXN0KGFyZ3Muc2VuZGVyLnVybClcclxuXHJcbiAgICAgICAgaWYgKGlzRmlsZVNjaGVtYSAmJiAhY29uZmlnLmFsbG93UnVuRnJvbUZpbGVTY2hlbWEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVG8gcnVuIG1hY3JvIGZyb20gbG9jYWwgZmlsZSwgZW5hYmxlIGl0IGluIGthbnR1IHNldHRpbmdzIGZpcnN0JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0h0dHBTY2hlbWEgJiYgIWNvbmZpZy5hbGxvd1J1bkZyb21IdHRwU2NoZW1hKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvIHJ1biBtYWNybyBmcm9tIHB1YmxpYyB3ZWJzaXRlLCBlbmFibGUgaXQgaW4ga2FudHUgc2V0dGluZ3MgZmlyc3QnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdpdGhQYW5lbElwYygpXHJcbiAgICAgICAgLnRoZW4ocGFuZWxJcGMgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHBhbmVsSXBjLmFzaygnSU1QT1JUX0hUTUxfQU5EX1JVTicsIGFyZ3MpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdDU19BRERfTE9HJzoge1xyXG4gICAgICByZXR1cm4gZ2V0UGFuZWxUYWJJcGMoKVxyXG4gICAgICAudGhlbihpcGMgPT4gaXBjLmFzaygnQUREX0xPRycsIGFyZ3MpKVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1NFVF9DTElQQk9BUkQnOiB7XHJcbiAgICAgIGNsaXBib2FyZC5zZXQoYXJncy52YWx1ZSlcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdHRVRfQ0xJUEJPQVJEJzoge1xyXG4gICAgICByZXR1cm4gY2xpcGJvYXJkLmdldCgpXHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuICd1bmtub3duJ1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaW5pdElQQyA9ICgpID0+IHtcclxuICBiZ0luaXQoKHRhYklkLCBjdWlkLCBpcGMpID0+IHtcclxuICAgIGxvZygnY29ubmVjdCBjcyBpcGMnLCB0YWJJZCwgY3VpZCwgaXBjKVxyXG4gICAgZ2V0SXBjQ2FjaGUoKS5zZXQodGFiSWQsIGlwYywgY3VpZClcclxuICAgIGlwYy5vbkFzayhvblJlcXVlc3QpXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgaW5pdE9uSW5zdGFsbGVkID0gKCkgPT4ge1xyXG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgRXh0LnJ1bnRpbWUuc2V0VW5pbnN0YWxsVVJMKGNvbmZpZy51cmxBZnRlclVuaW5zdGFsbClcclxuXHJcbiAgICBFeHQucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoeyByZWFzb24gfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHJlYXNvbikge1xyXG4gICAgICAgIGNhc2UgJ2luc3RhbGwnOlxyXG4gICAgICAgICAgcmV0dXJuIEV4dC50YWJzLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHVybDogY29uZmlnLnVybEFmdGVySW5zdGFsbFxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2FzZSAndXBkYXRlJzpcclxuICAgICAgICAgIEV4dC5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICdORVcnIH0pXHJcbiAgICAgICAgICBFeHQuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7IGNvbG9yOiAnIzQ0NDRGRicgfSlcclxuICAgICAgICAgIHJldHVybiBFeHQuc3RvcmFnZS5sb2NhbC5zZXQoe1xyXG4gICAgICAgICAgICB1cGdyYWRlX25vdF92aWV3ZWQ6ICdub3Rfdmlld2VkJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRQbGF5VGFiID0gKCkgPT4ge1xyXG4gIHJldHVybiBFeHQud2luZG93cy5nZXRDdXJyZW50KClcclxuICAudGhlbih3aW5kb3cgPT4ge1xyXG4gICAgcmV0dXJuIEV4dC50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCB3aW5kb3dJZDogd2luZG93LmlkIH0pXHJcbiAgICAudGhlbih0YWJzID0+IHtcclxuICAgICAgaWYgKCF0YWJzIHx8ICF0YWJzLmxlbmd0aCkgIHJldHVybiBmYWxzZVxyXG4gICAgICBsb2coJ2luIGluaXRQbGF5VGFiLCBzZXQgdG9QbGF5IHRvJywgdGFic1swXSlcclxuICAgICAgc3RhdGUudGFiSWRzLmxhc3RQbGF5ID0gc3RhdGUudGFiSWRzLnRvUGxheVxyXG4gICAgICBzdGF0ZS50YWJJZHMudG9QbGF5ID0gdGFic1swXS5pZFxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBpbml0RG93bmxvYWRNYW4gPSAoKSA9PiB7XHJcbiAgZ2V0RG93bmxvYWRNYW4oKS5vbkNvdW50RG93bihkYXRhID0+IHtcclxuICAgIGdldFBhbmVsVGFiSXBjKCkudGhlbihwYW5lbElwYyA9PiB7XHJcbiAgICAgIHBhbmVsSXBjLmFzaygnVElNRU9VVF9TVEFUVVMnLCB7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICB0eXBlOiAnZG93bmxvYWQnXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmJpbmRFdmVudHMoKVxyXG5pbml0SVBDKClcclxuaW5pdE9uSW5zdGFsbGVkKClcclxuaW5pdFBsYXlUYWIoKVxyXG5pbml0RG93bmxvYWRNYW4oKVxyXG5cclxud2luZG93LmNsaXAgPSBjbGlwYm9hcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==