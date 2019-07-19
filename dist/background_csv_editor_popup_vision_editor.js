(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["background_csv_editor_popup_vision_editor"],{

/***/ "./src/common/file_man.js":
/*!********************************!*\
  !*** ./src/common/file_man.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filesystem */ "./src/common/filesystem.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web_extension */ "./src/common/web_extension.js");
/* harmony import */ var _web_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/common/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var readableSize = function readableSize(size) {
  var kb = 1024;
  var mb = kb * kb;

  if (size < kb) {
    return size + ' byte';
  }

  if (size < mb) {
    return (size / kb).toFixed(1) + ' KB';
  }

  return (size / mb).toFixed(1) + ' MB';
};

var FileMan = function () {
  function FileMan() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FileMan);

    var _opts$baseDir = opts.baseDir,
        baseDir = _opts$baseDir === undefined ? 'share' : _opts$baseDir;


    if (!baseDir || baseDir === '/') {
      throw new Error('Invalid baseDir, ' + baseDir);
    }

    this.baseDir = baseDir;

    // Note: create the folder in which we will store csv files
    _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].getDirectory(baseDir, true);
  }

  _createClass(FileMan, [{
    key: 'checkFileName',
    value: function checkFileName(fileName) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["withFileExtension"])(fileName, function (baseName) {
        try {
          Object(_utils__WEBPACK_IMPORTED_MODULE_2__["validateStandardName"])(baseName, true);
        } catch (e) {
          throw new Error('Invalid file name \'' + fileName + '\'. File name ' + e.message);
        }
        return baseName;
      });
    }
  }, {
    key: 'getLink',
    value: function getLink(fileName) {
      var tmp = _web_extension__WEBPACK_IMPORTED_MODULE_1___default.a.extension.getURL('temporary');
      return 'filesystem:' + tmp + '/' + this.__filePath(encodeURIComponent(fileName));
    }
  }, {
    key: 'list',
    value: function list() {
      var _this = this;

      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].list(this.baseDir).then(function (fileEntries) {
        var ps = fileEntries.map(function (fileEntry) {
          return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].getMetadata(fileEntry).then(function (meta) {
            return {
              dir: _this.baseDir,
              fileName: fileEntry.name,
              size: readableSize(meta.size),
              lastModified: meta.modificationTime
            };
          });
        });
        return Promise.all(ps);
      });
    }
  }, {
    key: 'exists',
    value: function exists(fileName) {
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].exists(this.__filePath(fileName), { type: 'file' });
    }
  }, {
    key: 'read',
    value: function read(fileName) {
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].readFile(this.__filePath(fileName), 'Text');
    }
  }, {
    key: 'write',
    value: function write(fileName, text) {
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].writeFile(this.__filePath(fileName, true), new Blob([text]));
    }

    // Note: when you try to write on an existing file with file system api,
    // it won't clear old content, so we have to do it mannually

  }, {
    key: 'overwrite',
    value: function overwrite(fileName, text) {
      var _this2 = this;

      return this.remove(fileName).catch(function () {/* Ignore any error */}).then(function () {
        return _this2.write(fileName, text);
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _this3 = this;

      return this.list().then(function (list) {
        var ps = list.map(function (file) {
          return _this3.remove(file.fileName);
        });

        return Promise.all(ps);
      });
    }
  }, {
    key: 'remove',
    value: function remove(fileName) {
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].removeFile(this.__filePath(fileName));
    }
  }, {
    key: 'rename',
    value: function rename(fileName, newName) {
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].moveFile(this.__filePath(fileName), this.__filePath(newName, true));
    }
  }, {
    key: 'metadata',
    value: function metadata(fileName) {
      return _filesystem__WEBPACK_IMPORTED_MODULE_0__["default"].getMetadata(this.__filePath(fileName));
    }
  }, {
    key: '__filePath',
    value: function __filePath(fileName, forceCheck) {
      if (forceCheck) {
        this.checkFileName(fileName);
      }

      return this.baseDir + '/' + fileName.toLowerCase();
    }
  }]);

  return FileMan;
}();

/* harmony default export */ __webpack_exports__["default"] = (FileMan);

/***/ }),

/***/ "./src/common/filesystem.js":
/*!**********************************!*\
  !*** ./src/common/filesystem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var idb_filesystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb.filesystem.js */ "./node_modules/idb.filesystem.js/src/idb.filesystem.js");
/* harmony import */ var idb_filesystem_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(idb_filesystem_js__WEBPACK_IMPORTED_MODULE_0__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var fs = function () {
  var requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

  if (!requestFileSystem) {
    throw new Error('requestFileSystem not supported');
  }

  var dumbSize = 1024 * 1024;
  var maxSize = 5 * 1024 * 1024;
  var getFS = function getFS(size) {
    size = size || maxSize;

    return new Promise(function (resolve, reject) {
      requestFileSystem(window.TEMPORARY, size, resolve, reject);
    });
  };

  var getDirectory = function getDirectory(dir, shouldCreate, fs) {
    var parts = (Array.isArray(dir) ? dir : dir.split('/')).filter(function (p) {
      return p && p.length;
    });
    var getDir = function getDir(parts, directoryEntry) {
      if (!parts || !parts.length) return Promise.resolve(directoryEntry);

      return new Promise(function (resolve, reject) {
        directoryEntry.getDirectory(parts[0], { create: !!shouldCreate }, function (dirEntry) {
          return resolve(dirEntry);
        }, function (e) {
          return reject(e);
        });
      }).then(function (entry) {
        return getDir(parts.slice(1), entry);
      });
    };

    var pFS = fs ? Promise.resolve(fs) : getFS(dumbSize);
    return pFS.then(function (fs) {
      return getDir(parts, fs.root);
    });
  };

  // @return a Promise of [FileSystemEntries]
  var list = function list() {
    var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

    return getFS(dumbSize).then(function (fs) {
      return new Promise(function (resolve, reject) {
        getDirectory(dir).then(function (dirEntry) {
          var result = [];
          var dirReader = dirEntry.createReader();
          var read = function read() {
            dirReader.readEntries(function (entries) {
              if (entries.length === 0) {
                resolve(result.sort());
              } else {
                result = result.concat(Array.from(entries));
                read();
              }
            }, reject);
          };

          read();
        }).catch(reject);
      });
    });
  };

  var fileLocator = function fileLocator(filePath, fs) {
    var parts = filePath.split('/');
    return getDirectory(parts.slice(0, -1), false, fs).then(function (directoryEntry) {
      return {
        directoryEntry: directoryEntry,
        fileName: parts.slice(-1)[0]
      };
    });
  };

  var readFile = function readFile(filePath, type) {
    if (['ArrayBuffer', 'BinaryString', 'DataURL', 'Text'].indexOf(type) === -1) {
      throw new Error('invalid readFile type, \'' + type + '\'');
    }

    return getFS().then(function (fs) {
      return fileLocator(filePath, fs).then(function (_ref) {
        var directoryEntry = _ref.directoryEntry,
            fileName = _ref.fileName;

        return new Promise(function (resolve, reject) {
          directoryEntry.getFile(fileName, {}, function (fileEntry) {
            fileEntry.file(function (file) {
              var reader = new FileReader();

              reader.onerror = reject;
              reader.onloadend = function () {
                resolve(this.result);
              };

              switch (type) {
                case 'ArrayBuffer':
                  return reader.readAsArrayBuffer(file);
                case 'BinaryString':
                  return reader.readAsBinaryString(file);
                case 'DataURL':
                  return reader.readAsDataURL(file);
                case 'Text':
                  return reader.readAsText(file);
                default:
                  throw new Error('unsupported data type, \'' + type);
              }
            }, reject);
          }, reject);
        });
      });
    });
  };

  var writeFile = function writeFile(filePath, blob, size) {
    return getFS(size).then(function (fs) {
      return fileLocator(filePath, fs).then(function (_ref2) {
        var directoryEntry = _ref2.directoryEntry,
            fileName = _ref2.fileName;

        return new Promise(function (resolve, reject) {
          directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
            fileEntry.createWriter(function (fileWriter) {
              fileWriter.onwriteend = function () {
                return resolve(fileEntry.toURL());
              };
              fileWriter.onerror = reject;

              fileWriter.write(blob);
            });
          }, reject);
        });
      });
    });
  };

  var removeFile = function removeFile(filePath) {
    return getFS().then(function (fs) {
      return fileLocator(filePath, fs).then(function (_ref3) {
        var directoryEntry = _ref3.directoryEntry,
            fileName = _ref3.fileName;

        return new Promise(function (resolve, reject) {
          directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
            fileEntry.remove(resolve, reject);
          }, reject);
        });
      });
    });
  };

  var moveFile = function moveFile(srcPath, targetPath) {
    return getFS().then(function (fs) {
      return Promise.all([fileLocator(srcPath, fs), fileLocator(targetPath, fs)]).then(function (tuple) {
        var srcDirEntry = tuple[0].directoryEntry;
        var srcFileName = tuple[0].fileName;
        var tgtDirEntry = tuple[1].directoryEntry;
        var tgtFileName = tuple[1].fileName;

        return new Promise(function (resolve, reject) {
          srcDirEntry.getFile(srcFileName, {}, function (fileEntry) {
            fileEntry.moveTo(tgtDirEntry, tgtFileName, resolve, reject);
          }, reject);
        });
      });
    });
  };

  var getMetadata = function getMetadata(filePath) {
    return getFS().then(function (fs) {
      if (filePath.getMetadata) {
        return new Promise(function (resolve, reject) {
          return filePath.getMetadata(resolve);
        });
      }

      return fileLocator(filePath, fs).then(function (_ref4) {
        var directoryEntry = _ref4.directoryEntry,
            fileName = _ref4.fileName;

        return new Promise(function (resolve, reject) {
          directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
            fileEntry.getMetadata(resolve);
          }, reject);
        });
      });
    });
  };

  var exists = function exists(filePath) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        type = _ref5.type;

    return getFS().then(function (fs) {
      return fileLocator(filePath, fs).then(function (_ref6) {
        var directoryEntry = _ref6.directoryEntry,
            fileName = _ref6.fileName;

        var isSomeEntry = function isSomeEntry(getMethodName) {
          return new Promise(function (resolve) {
            directoryEntry[getMethodName](fileName, { create: false }, function () {
              return resolve(true);
            }, function () {
              return resolve(false);
            });
          });
        };

        var pIsFile = isSomeEntry('getFile');
        var pIsDir = isSomeEntry('getDirectory');

        return Promise.all([pIsFile, pIsDir]).then(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              isFile = _ref8[0],
              isDir = _ref8[1];

          switch (type) {
            case 'file':
              return isFile;
            case 'directory':
              return isDir;
            default:
              return isFile || isDir;
          }
        });
      });
    });
  };

  return {
    list: list,
    readFile: readFile,
    writeFile: writeFile,
    removeFile: removeFile,
    moveFile: moveFile,
    getDirectory: getDirectory,
    getMetadata: getMetadata,
    exists: exists
  };
}();

// For test only
window.fs = fs;

/* harmony default export */ __webpack_exports__["default"] = (fs);

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: delay, until, range, partial, reduceRight, compose, map, on, updateIn, setIn, getIn, pick, uid, flatten, splitIntoTwo, cn, objMap, formatDate, splitKeep, nameFactory, composePromiseFn, parseQuery, toRegExp, insertScript, withTimeout, retry, dataURItoBlob, randomName, withFileExtension, uniqueName, and, loadCsv, loadImage, ensureExtName, validateStandardName, sanitizeFileName, getScreenDpi, dpiFromFileName, mockAPIWith, withCountDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIn", function() { return updateIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitIntoTwo", function() { return splitIntoTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cn", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objMap", function() { return objMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitKeep", function() { return splitKeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameFactory", function() { return nameFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composePromiseFn", function() { return composePromiseFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQuery", function() { return parseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRegExp", function() { return toRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertScript", function() { return insertScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTimeout", function() { return withTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataURItoBlob", function() { return dataURItoBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomName", function() { return randomName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFileExtension", function() { return withFileExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueName", function() { return uniqueName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCsv", function() { return loadCsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureExtName", function() { return ensureExtName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateStandardName", function() { return validateStandardName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeFileName", function() { return sanitizeFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenDpi", function() { return getScreenDpi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dpiFromFileName", function() { return dpiFromFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockAPIWith", function() { return mockAPIWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withCountDown", function() { return withCountDown; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// delay the call of a function and return a promise
var delay = function delay(fn, timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        resolve(fn());
      } catch (e) {
        reject(e);
      }
    }, timeout);
  });
};

// Poll on whatever you want to check, and will time out after a specific duration
// `check` should return `{ pass: Boolean, result: Any }`
// `name` is for a meaningful error message
var until = function until(name, check) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  var expire = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10000;
  var errorMsg = arguments[4];

  var start = new Date();
  var go = function go() {
    if (expire && new Date() - start >= expire) {
      var msg = errorMsg || 'until: ' + name + ' expired!';
      throw new Error(msg);
    }

    var _check = check(),
        pass = _check.pass,
        result = _check.result;

    if (pass) return Promise.resolve(result);
    return delay(go, interval);
  };

  return new Promise(function (resolve, reject) {
    try {
      resolve(go());
    } catch (e) {
      reject(e);
    }
  });
};

var range = function range(start, end) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var ret = [];

  for (var i = start; i < end; i += step) {
    ret.push(i);
  }

  return ret;
};

// create a curry version of the passed in function
var partial = function partial(fn) {
  var len = fn.length;
  var _arbitary = void 0;

  _arbitary = function arbitary(curArgs, leftArgCnt) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length >= leftArgCnt) {
        return fn.apply(null, curArgs.concat(args));
      }

      return _arbitary(curArgs.concat(args), leftArgCnt - args.length);
    };
  };

  return _arbitary([], len);
};

var reduceRight = function reduceRight(fn, initial, list) {
  var ret = initial;

  for (var i = list.length - 1; i >= 0; i--) {
    ret = fn(list[i], ret);
  }

  return ret;
};

// compose functions into one
var compose = function compose() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return reduceRight(function (cur, prev) {
    return function (x) {
      return cur(prev(x));
    };
  }, function (x) {
    return x;
  }, args);
};

var map = partial(function (fn, list) {
  var result = [];

  for (var i = 0, len = list.length; i < len; i++) {
    result.push(fn(list[i]));
  }

  return result;
});

var on = partial(function (key, fn, dict) {
  if (Array.isArray(dict)) {
    return [].concat(_toConsumableArray(dict.slice(0, key)), [fn(dict[key])], _toConsumableArray(dict.slice(key + 1)));
  }

  return _extends({}, dict, _defineProperty({}, key, fn(dict[key])));
});

// immutably update any part in an object
var updateIn = partial(function (keys, fn, obj) {
  var updater = compose.apply(null, keys.map(function (key) {
    return on(key);
  }));
  return updater(fn)(obj);
});

// immutably set any part in an object
// a restricted version of updateIn
var setIn = partial(function (keys, value, obj) {
  var updater = compose.apply(null, keys.map(function (key) {
    return on(key);
  }));
  return updater(function () {
    return value;
  })(obj);
});

// return part of the object with a few keys deep inside
var getIn = partial(function (keys, obj) {
  return keys.reduce(function (prev, key) {
    if (!prev) return prev;
    return prev[key];
  }, obj);
});

// return the passed in object with only certains keys
var pick = function pick(keys, obj) {
  return keys.reduce(function (prev, key) {
    if (obj[key] !== undefined) {
      prev[key] = obj[key];
    }
    return prev;
  }, {});
};

var uid = function uid() {
  return '' + new Date() * 1 + '.' + Math.floor(Math.random() * 10000000).toString(16);
};

var flatten = function flatten(list) {
  return [].concat.apply([], list);
};

var splitIntoTwo = function splitIntoTwo(pattern, str) {
  var index = str.indexOf(pattern);
  if (index === -1) return [str];

  return [str.substr(0, index), str.substr(index + 1)];
};

var cn = function cn() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return args.reduce(function (prev, cur) {
    if (typeof cur === 'string') {
      prev.push(cur);
    } else {
      Object.keys(cur).forEach(function (key) {
        if (cur[key]) {
          prev.push(key);
        }
      });
    }

    return prev;
  }, []).join(' ');
};

var objMap = function objMap(fn, obj) {
  return Object.keys(obj).reduce(function (prev, key, i) {
    prev[key] = fn(obj[key], key, i);
    return prev;
  }, {});
};

var formatDate = function formatDate(d) {
  var pad = function pad(n) {
    return n >= 10 ? '' + n : '0' + n;
  };
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(pad).join('-');
};

var splitKeep = function splitKeep(pattern, str) {
  var result = [];
  var startIndex = 0;
  var reg = void 0,
      match = void 0,
      lastMatchIndex = void 0;

  if (pattern instanceof RegExp) {
    reg = new RegExp(pattern, pattern.flags.indexOf('g') !== -1 ? pattern.flags : pattern.flags + 'g');
  } else if (typeof pattern === 'string') {
    reg = new RegExp(pattern, 'g');
  }

  // eslint-disable-next-line no-cond-assign
  while (match = reg.exec(str)) {
    if (lastMatchIndex === match.index) {
      break;
    }

    if (match.index > startIndex) {
      result.push(str.substring(startIndex, match.index));
    }

    result.push(match[0]);
    startIndex = match.index + match[0].length;
    lastMatchIndex = match.index;
  }

  if (startIndex < str.length) {
    result.push(str.substr(startIndex));
  }

  return result;
};

var nameFactory = function nameFactory() {
  var all = {};

  return function (str) {
    if (!all[str]) {
      all[str] = true;
      return str;
    }

    var n = 2;
    while (all[str + '-' + n]) {
      n++;
    }

    all[str + '-' + n] = true;
    return str + '-' + n;
  };
};

var composePromiseFn = function composePromiseFn() {
  for (var _len4 = arguments.length, list = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    list[_key4] = arguments[_key4];
  }

  return reduceRight(function (cur, prev) {
    return function (x) {
      return prev(x).then(cur);
    };
  }, function (x) {
    return Promise.resolve(x);
  }, list);
};

var parseQuery = function parseQuery(query) {
  return query.slice(1).split('&').reduce(function (prev, cur) {
    var index = cur.indexOf('=');
    var key = cur.substring(0, index);
    var val = cur.substring(index + 1);

    prev[key] = decodeURIComponent(val);
    return prev;
  }, {});
};

var toRegExp = function toRegExp(str) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$needEncode = _ref.needEncode,
      needEncode = _ref$needEncode === undefined ? false : _ref$needEncode,
      _ref$flag = _ref.flag,
      flag = _ref$flag === undefined ? '' : _ref$flag;

  return new RegExp(needEncode ? str.replace(/[[\](){}^$.*+?|]/g, '\\$&') : str, flag);
};

var insertScript = function insertScript(file) {
  var s = document.constructor.prototype.createElement.call(document, 'script');

  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);

  document.documentElement.appendChild(s);
  s.parentNode.removeChild(s);
};

var withTimeout = function withTimeout(timeout, fn) {
  return new Promise(function (resolve, reject) {
    var cancel = function cancel() {
      return clearTimeout(timer);
    };
    var timer = setTimeout(function () {
      reject(new Error('withTimeout: timeout'));
    }, timeout);

    fn(cancel).then(function (data) {
      cancel();
      resolve(data);
    }, function (e) {
      cancel();
      reject(e);
    });
  });
};

var retry = function retry(fn, options) {
  return function () {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var _timeout$retryInterva = _extends({
      timeout: 5000,
      retryInterval: 1000,
      onFirstFail: function onFirstFail() {},
      onFinal: function onFinal() {},
      shouldRetry: function shouldRetry() {
        return false;
      }
    }, options),
        timeout = _timeout$retryInterva.timeout,
        onFirstFail = _timeout$retryInterva.onFirstFail,
        onFinal = _timeout$retryInterva.onFinal,
        shouldRetry = _timeout$retryInterva.shouldRetry,
        retryInterval = _timeout$retryInterva.retryInterval;

    var retryCount = 0;
    var lastError = null;
    var timerToClear = null;
    var done = false;

    var wrappedOnFinal = function wrappedOnFinal() {
      done = true;

      if (timerToClear) {
        clearTimeout(timerToClear);
      }

      return onFinal.apply(undefined, arguments);
    };

    var intervalMan = function () {
      var lastInterval = null;
      var intervalFactory = function () {
        switch (typeof retryInterval === 'undefined' ? 'undefined' : _typeof(retryInterval)) {
          case 'function':
            return retryInterval;

          case 'number':
            return function () {
              return retryInterval;
            };

          default:
            throw new Error('retryInterval must be either a number or a function');
        }
      }();

      return {
        getLastInterval: function getLastInterval() {
          return lastInterval;
        },
        getInterval: function getInterval() {
          var interval = intervalFactory(retryCount, lastInterval);
          lastInterval = interval;
          return interval;
        }
      };
    }();

    var onError = function onError(e, reject) {
      if (!shouldRetry(e, retryCount)) {
        wrappedOnFinal(e);

        if (reject) return reject(e);else throw e;
      }
      lastError = e;

      return new Promise(function (resolve, reject) {
        if (retryCount++ === 0) {
          onFirstFail(e);
          timerToClear = setTimeout(function () {
            wrappedOnFinal(lastError);
            reject(lastError);
          }, timeout);
        }

        if (done) return;

        delay(run, intervalMan.getInterval()).then(resolve, function (e) {
          return onError(e, reject);
        });
      });
    };

    var run = function run() {
      return fn.apply(undefined, args.concat([{
        retryCount: retryCount,
        retryInterval: intervalMan.getLastInterval()
      }])).catch(onError);
    };

    return run().then(function (result) {
      wrappedOnFinal(null, result);
      return result;
    });
  };
};

// refer to https://stackoverflow.com/questions/12168909/blob-from-dataurl
function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], { type: mimeString });
  return blob;
}

var randomName = function randomName() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

  if (length <= 0 || length > 100) throw new Error('randomName, length must be between 1 and 100');

  var randomChar = function randomChar() {
    var n = Math.floor(62 * Math.random());
    var code = void 0;

    if (n <= 9) {
      code = 48 + n;
    } else if (n <= 35) {
      code = 65 + n - 10;
    } else {
      code = 97 + n - 36;
    }

    return String.fromCharCode(code);
  };

  return range(0, length).map(randomChar).join('');
};

var withFileExtension = function withFileExtension(origName, fn) {
  var reg = /\.\w+$/;
  var m = origName.match(reg);

  var extName = m ? m[0] : '';
  var baseName = m ? origName.replace(reg, '') : origName;
  var result = fn(baseName, function (name) {
    return name + extName;
  });

  if (!result) {
    throw new Error('withFileExtension: should not return null/undefined');
  }

  if (typeof result.then === 'function') {
    return result.then(function (name) {
      return name + extName;
    });
  }

  return result + extName;
};

var uniqueName = function uniqueName(name, options) {
  var opts = _extends({
    generate: function generate(old) {
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var reg = /_\((\d+)\)$/;
      var m = old.match(reg);

      if (!m) return old + '_(' + step + ')';
      return old.replace(reg, function (_, n) {
        return '_(' + (parseInt(n, 10) + step) + ')';
      });
    },
    check: function check() {
      return Promise.resolve(true);
    }
  }, options);
  var generate = opts.generate,
      check = opts.check;


  return withFileExtension(name, function (baseName, getFullName) {
    var go = function go(fileName, step) {
      return check(getFullName(fileName)).then(function (pass) {
        if (pass) return fileName;
        return go(generate(fileName, step), step);
      });
    };

    return go(baseName, 1);
  });
};

var and = function and() {
  for (var _len6 = arguments.length, list = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    list[_key6] = arguments[_key6];
  }

  return list.reduce(function (prev, cur) {
    return prev && cur;
  }, true);
};

var loadCsv = function loadCsv(url) {
  return fetch(url).then(function (res) {
    if (!res.ok) throw new Error('failed to load csv - ' + url);
    return res.text();
  });
};

var loadImage = function loadImage(url) {
  return fetch(url).then(function (res) {
    if (!res.ok) throw new Error('failed to load image - ' + url);
    return res.blob();
  });
};

var ensureExtName = function ensureExtName(ext, name) {
  var extName = ext.indexOf('.') === 0 ? ext : '.' + ext;
  if (name.lastIndexOf(extName) + extName.length === name.length) return name;
  return name + extName;
};

var validateStandardName = function validateStandardName(name, isFileName) {
  if (!isFileName && !/^_|[a-zA-Z]/.test(name)) {
    throw new Error('must start with a letter or the underscore character.');
  }

  if (isFileName && !/^_|[a-zA-Z0-9]/.test(name)) {
    throw new Error('must start with alpha-numeric or the underscore character.');
  }

  if (!/^[a-zA-Z0-9_]+$/.test(name)) {
    throw new Error('can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )');
  }
};

var sanitizeFileName = function sanitizeFileName(fileName) {
  return withFileExtension(fileName, function (baseName) {
    return baseName.replace(/[^a-zA-Z0-9_]/g, '_');
  });
};

var getScreenDpi = function getScreenDpi() {
  var DEFAULT_DPI = 96;
  var matchDpi = function matchDpi(dpi) {
    return window.matchMedia('(max-resolution: ' + dpi + 'dpi)').matches === true;
  };

  // We iteratively scan all possible media query matches.
  // We can't use binary search, because there are "many" correct answer in
  // problem space and we need the very first match.
  // To speed up computation we divide problem space into buckets.
  // We test each bucket's first element and if we found a match,
  // we make a full scan for previous bucket with including first match.
  // Still, we could use "divide-and-conquer" for such problems.
  // Due to common DPI values, it's not worth to implement such algorithm.

  var bucketSize = 24; // common divisor for 72, 96, 120, 144 etc.

  for (var i = bucketSize; i < 3000; i += bucketSize) {
    if (matchDpi(i)) {
      var start = i - bucketSize;
      var end = i;

      for (var k = start; k <= end; ++k) {
        if (matchDpi(k)) {
          return k;
        }
      }
    }
  }

  return DEFAULT_DPI; // default fallback
};

var dpiFromFileName = function dpiFromFileName(fileName) {
  var reg = /_dpi_(\d+)/i;
  var m = fileName.match(reg);
  return m ? parseInt(m[1], 10) : 0;
};

var mockAPIWith = function mockAPIWith(factory, mock) {
  var promiseFunctionKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var real = mock;
  var exported = objMap(function (val, key) {
    if (typeof val === 'function') {
      if (promiseFunctionKeys.indexOf(key) !== -1) {
        return function () {
          for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return p.then(function () {
            var _real;

            return (_real = real)[key].apply(_real, args);
          });
        };
      } else {
        return function () {
          var _real3;

          for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }

          p.then(function () {
            var _real2;

            return (_real2 = real)[key].apply(_real2, args);
          });
          return (_real3 = real)[key].apply(_real3, args);
        };
      }
    } else {
      return val;
    }
  }, mock);

  var p = Promise.resolve(factory()).then(function (api) {
    real = api;
  });

  return exported;
};

var withCountDown = function withCountDown(options) {
  var interval = options.interval,
      timeout = options.timeout,
      onTick = options.onTick;

  var past = 0;

  return new Promise(function (resolve, reject) {
    var timer = setInterval(function () {
      past += interval;

      try {
        onTick({ past: past, total: timeout });
      } catch (e) {
        console.error(e);
      }

      if (past >= timeout) clearInterval(timer);
    }, interval);

    var p = delay(function () {}, timeout).then(function () {
      return clearInterval(timer);
    });

    resolve(p);
  });
};

/***/ }),

/***/ "./src/common/web_extension.js":
/*!*************************************!*\
  !*** ./src/common/web_extension.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* global chrome browser */

// Note: it's an adapter for both chrome and web extension API
// chrome and web extension API have almost the same API signatures
// except that chrome accepts callback while web extension returns promises
//
// The whole idea here is to make sure all callback style API of chrome
// also return promises
//
// Important: You need to specify whatever API you need to use in `UsedAPI` below

(function () {
  var adaptChrome = function adaptChrome(obj, chrome) {
    var adapt = function adapt(src, ret, obj, fn) {
      return Object.keys(obj).reduce(function (prev, key) {
        var keyParts = key.split('.');

        var _keyParts$reduce = keyParts.reduce(function (tuple, subkey) {
          var tar = tuple[0];
          var src = tuple[1];

          tar[subkey] = tar[subkey] || {};
          return [tar[subkey], src && src[subkey]];
        }, [prev, src]),
            _keyParts$reduce2 = _slicedToArray(_keyParts$reduce, 2),
            target = _keyParts$reduce2[0],
            source = _keyParts$reduce2[1];

        obj[key].forEach(function (method) {
          fn(method, source, target);
        });

        return prev;
      }, ret);
    };

    var promisify = function promisify(method, source, target) {
      if (!source) return;
      var reg = /The message port closed before a res?ponse was received/;

      target[method] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
          var callback = function callback(result) {
            // Note: The message port closed before a reponse was received.
            // Ignore this message
            if (chrome.runtime.lastError && !reg.test(chrome.runtime.lastError.message)) {
              console.error(chrome.runtime.lastError.message + ', ' + method + ', ' + JSON.stringify(args));
              return reject(chrome.runtime.lastError);
            }
            resolve(result);
          };

          source[method].apply(source, args.concat(callback));
        });
      };
    };

    var copy = function copy(method, source, target) {
      if (!source) return;
      target[method] = source[method];
    };

    return [[obj.toPromisify, promisify], [obj.toCopy, copy]].reduce(function (prev, tuple) {
      return adapt(chrome, prev, tuple[0], tuple[1]);
    }, {});
  };

  var UsedAPI = {
    toPromisify: {
      tabs: ['create', 'sendMessage', 'get', 'update', 'query', 'captureVisibleTab', 'remove'],
      windows: ['update', 'getLastFocused', 'getCurrent', 'getAll', 'remove', 'create', 'get'],
      runtime: ['sendMessage', 'setUninstallURL'],
      cookies: ['get', 'getAll', 'set', 'remove'],
      notifications: ['create', 'clear'],
      browserAction: ['getBadgeText'],
      bookmarks: ['create', 'getTree'],
      debugger: ['attach', 'detach', 'sendCommand', 'getTargets'],
      'storage.local': ['get', 'set']
    },
    toCopy: {
      tabs: ['onActivated', 'onUpdated'],
      windows: ['onFocusChanged'],
      runtime: ['onMessage', 'onInstalled', 'getManifest'],
      storage: ['onChanged'],
      browserAction: ['setBadgeText', 'setBadgeBackgroundColor', 'onClicked'],
      extension: ['getURL'],
      debugger: ['onEvent', 'onDetach'],
      downloads: ['onCreated', 'onChanged', 'onDeterminingFilename']
    }
  };

  var Ext = typeof chrome !== 'undefined' ? adaptChrome(UsedAPI, chrome) : browser;

  _extends(Ext, {
    isFirefox: function isFirefox() {
      return (/Firefox/.test(window.navigator.userAgent)
      );
    }
  });

  if (true) {
    module.exports = Ext;
  } else {}
})();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ZpbGVfbWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZmlsZXN5c3RlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2ViX2V4dGVuc2lvbi5qcyJdLCJuYW1lcyI6WyJyZWFkYWJsZVNpemUiLCJzaXplIiwia2IiLCJtYiIsInRvRml4ZWQiLCJGaWxlTWFuIiwib3B0cyIsImJhc2VEaXIiLCJFcnJvciIsImZzIiwiZ2V0RGlyZWN0b3J5IiwiZmlsZU5hbWUiLCJ3aXRoRmlsZUV4dGVuc2lvbiIsImJhc2VOYW1lIiwidmFsaWRhdGVTdGFuZGFyZE5hbWUiLCJlIiwibWVzc2FnZSIsInRtcCIsIkV4dCIsImV4dGVuc2lvbiIsImdldFVSTCIsIl9fZmlsZVBhdGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsaXN0IiwidGhlbiIsInBzIiwiZmlsZUVudHJpZXMiLCJtYXAiLCJnZXRNZXRhZGF0YSIsImZpbGVFbnRyeSIsImRpciIsIm5hbWUiLCJtZXRhIiwibGFzdE1vZGlmaWVkIiwibW9kaWZpY2F0aW9uVGltZSIsIlByb21pc2UiLCJhbGwiLCJleGlzdHMiLCJ0eXBlIiwicmVhZEZpbGUiLCJ0ZXh0Iiwid3JpdGVGaWxlIiwiQmxvYiIsInJlbW92ZSIsImNhdGNoIiwid3JpdGUiLCJmaWxlIiwicmVtb3ZlRmlsZSIsIm5ld05hbWUiLCJtb3ZlRmlsZSIsImZvcmNlQ2hlY2siLCJjaGVja0ZpbGVOYW1lIiwidG9Mb3dlckNhc2UiLCJyZXF1ZXN0RmlsZVN5c3RlbSIsIndpbmRvdyIsIndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtIiwiZHVtYlNpemUiLCJtYXhTaXplIiwiZ2V0RlMiLCJyZXNvbHZlIiwicmVqZWN0IiwiVEVNUE9SQVJZIiwic2hvdWxkQ3JlYXRlIiwicGFydHMiLCJBcnJheSIsImlzQXJyYXkiLCJzcGxpdCIsImZpbHRlciIsInAiLCJsZW5ndGgiLCJnZXREaXIiLCJkaXJlY3RvcnlFbnRyeSIsImNyZWF0ZSIsImRpckVudHJ5Iiwic2xpY2UiLCJlbnRyeSIsInBGUyIsInJvb3QiLCJyZXN1bHQiLCJkaXJSZWFkZXIiLCJjcmVhdGVSZWFkZXIiLCJyZWFkIiwicmVhZEVudHJpZXMiLCJlbnRyaWVzIiwic29ydCIsImNvbmNhdCIsImZyb20iLCJmaWxlTG9jYXRvciIsImZpbGVQYXRoIiwiaW5kZXhPZiIsImdldEZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25lcnJvciIsIm9ubG9hZGVuZCIsInJlYWRBc0FycmF5QnVmZmVyIiwicmVhZEFzQmluYXJ5U3RyaW5nIiwicmVhZEFzRGF0YVVSTCIsInJlYWRBc1RleHQiLCJibG9iIiwiY3JlYXRlV3JpdGVyIiwiZmlsZVdyaXRlciIsIm9ud3JpdGVlbmQiLCJ0b1VSTCIsInNyY1BhdGgiLCJ0YXJnZXRQYXRoIiwic3JjRGlyRW50cnkiLCJ0dXBsZSIsInNyY0ZpbGVOYW1lIiwidGd0RGlyRW50cnkiLCJ0Z3RGaWxlTmFtZSIsIm1vdmVUbyIsImlzU29tZUVudHJ5IiwiZ2V0TWV0aG9kTmFtZSIsInBJc0ZpbGUiLCJwSXNEaXIiLCJpc0ZpbGUiLCJpc0RpciIsImRlbGF5IiwiZm4iLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInVudGlsIiwiY2hlY2siLCJpbnRlcnZhbCIsImV4cGlyZSIsImVycm9yTXNnIiwic3RhcnQiLCJEYXRlIiwiZ28iLCJtc2ciLCJwYXNzIiwicmFuZ2UiLCJlbmQiLCJzdGVwIiwicmV0IiwiaSIsInB1c2giLCJwYXJ0aWFsIiwibGVuIiwiYXJiaXRhcnkiLCJjdXJBcmdzIiwibGVmdEFyZ0NudCIsImFyZ3MiLCJhcHBseSIsInJlZHVjZVJpZ2h0IiwiaW5pdGlhbCIsImNvbXBvc2UiLCJjdXIiLCJwcmV2IiwieCIsIm9uIiwia2V5IiwiZGljdCIsInVwZGF0ZUluIiwia2V5cyIsIm9iaiIsInVwZGF0ZXIiLCJzZXRJbiIsInZhbHVlIiwiZ2V0SW4iLCJyZWR1Y2UiLCJwaWNrIiwidW5kZWZpbmVkIiwidWlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJmbGF0dGVuIiwic3BsaXRJbnRvVHdvIiwicGF0dGVybiIsInN0ciIsImluZGV4Iiwic3Vic3RyIiwiY24iLCJPYmplY3QiLCJmb3JFYWNoIiwiam9pbiIsIm9iak1hcCIsImZvcm1hdERhdGUiLCJkIiwicGFkIiwibiIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwic3BsaXRLZWVwIiwic3RhcnRJbmRleCIsInJlZyIsIm1hdGNoIiwibGFzdE1hdGNoSW5kZXgiLCJSZWdFeHAiLCJmbGFncyIsImV4ZWMiLCJzdWJzdHJpbmciLCJuYW1lRmFjdG9yeSIsImNvbXBvc2VQcm9taXNlRm4iLCJwYXJzZVF1ZXJ5IiwicXVlcnkiLCJ2YWwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ0b1JlZ0V4cCIsIm5lZWRFbmNvZGUiLCJmbGFnIiwicmVwbGFjZSIsImluc2VydFNjcmlwdCIsInMiLCJkb2N1bWVudCIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlRWxlbWVudCIsImNhbGwiLCJzZXRBdHRyaWJ1dGUiLCJkb2N1bWVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIndpdGhUaW1lb3V0IiwiY2FuY2VsIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJkYXRhIiwicmV0cnkiLCJvcHRpb25zIiwicmV0cnlJbnRlcnZhbCIsIm9uRmlyc3RGYWlsIiwib25GaW5hbCIsInNob3VsZFJldHJ5IiwicmV0cnlDb3VudCIsImxhc3RFcnJvciIsInRpbWVyVG9DbGVhciIsImRvbmUiLCJ3cmFwcGVkT25GaW5hbCIsImludGVydmFsTWFuIiwibGFzdEludGVydmFsIiwiaW50ZXJ2YWxGYWN0b3J5IiwiZ2V0TGFzdEludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJvbkVycm9yIiwicnVuIiwiZGF0YVVSSXRvQmxvYiIsImRhdGFVUkkiLCJieXRlU3RyaW5nIiwiYXRvYiIsIm1pbWVTdHJpbmciLCJhYiIsIkFycmF5QnVmZmVyIiwiaWEiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsInJhbmRvbU5hbWUiLCJyYW5kb21DaGFyIiwiY29kZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm9yaWdOYW1lIiwibSIsImV4dE5hbWUiLCJ1bmlxdWVOYW1lIiwiZ2VuZXJhdGUiLCJvbGQiLCJfIiwicGFyc2VJbnQiLCJnZXRGdWxsTmFtZSIsImFuZCIsImxvYWRDc3YiLCJ1cmwiLCJmZXRjaCIsInJlcyIsIm9rIiwibG9hZEltYWdlIiwiZW5zdXJlRXh0TmFtZSIsImV4dCIsImxhc3RJbmRleE9mIiwiaXNGaWxlTmFtZSIsInRlc3QiLCJzYW5pdGl6ZUZpbGVOYW1lIiwiZ2V0U2NyZWVuRHBpIiwiREVGQVVMVF9EUEkiLCJtYXRjaERwaSIsImRwaSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYnVja2V0U2l6ZSIsImsiLCJkcGlGcm9tRmlsZU5hbWUiLCJtb2NrQVBJV2l0aCIsImZhY3RvcnkiLCJtb2NrIiwicHJvbWlzZUZ1bmN0aW9uS2V5cyIsInJlYWwiLCJleHBvcnRlZCIsImFwaSIsIndpdGhDb3VudERvd24iLCJvblRpY2siLCJwYXN0Iiwic2V0SW50ZXJ2YWwiLCJ0b3RhbCIsImNvbnNvbGUiLCJlcnJvciIsImNsZWFySW50ZXJ2YWwiLCJhZGFwdENocm9tZSIsImNocm9tZSIsImFkYXB0Iiwic3JjIiwia2V5UGFydHMiLCJzdWJrZXkiLCJ0YXIiLCJ0YXJnZXQiLCJzb3VyY2UiLCJtZXRob2QiLCJwcm9taXNpZnkiLCJjYWxsYmFjayIsInJ1bnRpbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiY29weSIsInRvUHJvbWlzaWZ5IiwidG9Db3B5IiwiVXNlZEFQSSIsInRhYnMiLCJ3aW5kb3dzIiwiY29va2llcyIsIm5vdGlmaWNhdGlvbnMiLCJicm93c2VyQWN0aW9uIiwiYm9va21hcmtzIiwiZGVidWdnZXIiLCJzdG9yYWdlIiwiZG93bmxvYWRzIiwiYnJvd3NlciIsImlzRmlyZWZveCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBVTtBQUM3QixNQUFNQyxLQUFLLElBQVg7QUFDQSxNQUFNQyxLQUFLRCxLQUFLQSxFQUFoQjs7QUFFQSxNQUFJRCxPQUFPQyxFQUFYLEVBQWU7QUFDYixXQUFPRCxPQUFPLE9BQWQ7QUFDRDs7QUFFRCxNQUFJQSxPQUFPRSxFQUFYLEVBQWU7QUFDYixXQUFPLENBQUNGLE9BQU9DLEVBQVIsRUFBWUUsT0FBWixDQUFvQixDQUFwQixJQUF5QixLQUFoQztBQUNEOztBQUVELFNBQU8sQ0FBQ0gsT0FBT0UsRUFBUixFQUFZQyxPQUFaLENBQW9CLENBQXBCLElBQXlCLEtBQWhDO0FBQ0QsQ0FiRDs7SUFlcUJDLE87QUFDbkIscUJBQXdCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUFBLHdCQUNRQSxJQURSLENBQ2RDLE9BRGM7QUFBQSxRQUNkQSxPQURjLGlDQUNKLE9BREk7OztBQUd0QixRQUFJLENBQUNBLE9BQUQsSUFBWUEsWUFBWSxHQUE1QixFQUFpQztBQUMvQixZQUFNLElBQUlDLEtBQUosdUJBQThCRCxPQUE5QixDQUFOO0FBQ0Q7O0FBRUQsU0FBS0EsT0FBTCxHQUFlQSxPQUFmOztBQUVBO0FBQ0FFLHVEQUFFQSxDQUFDQyxZQUFILENBQWdCSCxPQUFoQixFQUF5QixJQUF6QjtBQUNEOzs7O2tDQUVjSSxRLEVBQVU7QUFDdkJDLHNFQUFpQkEsQ0FBQ0QsUUFBbEIsRUFBNEIsVUFBQ0UsUUFBRCxFQUFjO0FBQ3hDLFlBQUk7QUFDRkMsNkVBQW9CQSxDQUFDRCxRQUFyQixFQUErQixJQUEvQjtBQUNELFNBRkQsQ0FFRSxPQUFPRSxDQUFQLEVBQVU7QUFDVixnQkFBTSxJQUFJ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N1QsR0FBakI7QUFDRCxHQUZELE1BRU8sRUFFTjtBQUNGLENBcEdELEkiLCJmaWxlIjoiYmFja2dyb3VuZF9jc3ZfZWRpdG9yX3BvcHVwX3Zpc2lvbl9lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnLi9maWxlc3lzdGVtJ1xyXG5pbXBvcnQgRXh0IGZyb20gJy4vd2ViX2V4dGVuc2lvbidcclxuaW1wb3J0IHsgdmFsaWRhdGVTdGFuZGFyZE5hbWUsIHdpdGhGaWxlRXh0ZW5zaW9uIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmNvbnN0IHJlYWRhYmxlU2l6ZSA9IChzaXplKSA9PiB7XHJcbiAgY29uc3Qga2IgPSAxMDI0XHJcbiAgY29uc3QgbWIgPSBrYiAqIGtiXHJcblxyXG4gIGlmIChzaXplIDwga2IpIHtcclxuICAgIHJldHVybiBzaXplICsgJyBieXRlJ1xyXG4gIH1cclxuXHJcbiAgaWYgKHNpemUgPCBtYikge1xyXG4gICAgcmV0dXJuIChzaXplIC8ga2IpLnRvRml4ZWQoMSkgKyAnIEtCJ1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChzaXplIC8gbWIpLnRvRml4ZWQoMSkgKyAnIE1CJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTWFuIHtcclxuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCB7IGJhc2VEaXIgPSAnc2hhcmUnIH0gPSBvcHRzXHJcblxyXG4gICAgaWYgKCFiYXNlRGlyIHx8IGJhc2VEaXIgPT09ICcvJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYmFzZURpciwgJHtiYXNlRGlyfWApXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5iYXNlRGlyID0gYmFzZURpclxyXG5cclxuICAgIC8vIE5vdGU6IGNyZWF0ZSB0aGUgZm9sZGVyIGluIHdoaWNoIHdlIHdpbGwgc3RvcmUgY3N2IGZpbGVzXHJcbiAgICBmcy5nZXREaXJlY3RvcnkoYmFzZURpciwgdHJ1ZSlcclxuICB9XHJcblxyXG4gIGNoZWNrRmlsZU5hbWUgKGZpbGVOYW1lKSB7XHJcbiAgICB3aXRoRmlsZUV4dGVuc2lvbihmaWxlTmFtZSwgKGJhc2VOYW1lKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFsaWRhdGVTdGFuZGFyZE5hbWUoYmFzZU5hbWUsIHRydWUpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZmlsZSBuYW1lICcke2ZpbGVOYW1lfScuIEZpbGUgbmFtZSBgICsgZS5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBiYXNlTmFtZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldExpbmsgKGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCB0bXAgPSBFeHQuZXh0ZW5zaW9uLmdldFVSTCgndGVtcG9yYXJ5JylcclxuICAgIHJldHVybiBgZmlsZXN5c3RlbToke3RtcH0vJHt0aGlzLl9fZmlsZVBhdGgoZW5jb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKSl9YFxyXG4gIH1cclxuXHJcbiAgbGlzdCAoKSB7XHJcbiAgICByZXR1cm4gZnMubGlzdCh0aGlzLmJhc2VEaXIpXHJcbiAgICAudGhlbihmaWxlRW50cmllcyA9PiB7XHJcbiAgICAgIGNvbnN0IHBzID0gZmlsZUVudHJpZXMubWFwKGZpbGVFbnRyeSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZzLmdldE1ldGFkYXRhKGZpbGVFbnRyeSlcclxuICAgICAgICAudGhlbihtZXRhID0+ICh7XHJcbiAgICAgICAgICBkaXI6IHRoaXMuYmFzZURpcixcclxuICAgICAgICAgIGZpbGVOYW1lOiBmaWxlRW50cnkubmFtZSxcclxuICAgICAgICAgIHNpemU6IHJlYWRhYmxlU2l6ZShtZXRhLnNpemUpLFxyXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiBtZXRhLm1vZGlmaWNhdGlvblRpbWVcclxuICAgICAgICB9KSlcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHBzKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGV4aXN0cyAoZmlsZU5hbWUpIHtcclxuICAgIHJldHVybiBmcy5leGlzdHModGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSwgeyB0eXBlOiAnZmlsZScgfSlcclxuICB9XHJcblxyXG4gIHJlYWQgKGZpbGVOYW1lKSB7XHJcbiAgICByZXR1cm4gZnMucmVhZEZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSwgJ1RleHQnKVxyXG4gIH1cclxuXHJcbiAgd3JpdGUgKGZpbGVOYW1lLCB0ZXh0KSB7XHJcbiAgICByZXR1cm4gZnMud3JpdGVGaWxlKHRoaXMuX19maWxlUGF0aChmaWxlTmFtZSwgdHJ1ZSksIG5ldyBCbG9iKFt0ZXh0XSkpXHJcbiAgfVxyXG5cclxuICAvLyBOb3RlOiB3aGVuIHlvdSB0cnkgdG8gd3JpdGUgb24gYW4gZXhpc3RpbmcgZmlsZSB3aXRoIGZpbGUgc3lzdGVtIGFwaSxcclxuICAvLyBpdCB3b24ndCBjbGVhciBvbGQgY29udGVudCwgc28gd2UgaGF2ZSB0byBkbyBpdCBtYW5udWFsbHlcclxuICBvdmVyd3JpdGUgKGZpbGVOYW1lLCB0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW1vdmUoZmlsZU5hbWUpLmNhdGNoKCgpID0+IHsgLyogSWdub3JlIGFueSBlcnJvciAqLyB9KVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy53cml0ZShmaWxlTmFtZSwgdGV4dCkpXHJcbiAgfVxyXG5cclxuICBjbGVhciAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0KClcclxuICAgIC50aGVuKGxpc3QgPT4ge1xyXG4gICAgICBjb25zdCBwcyA9IGxpc3QubWFwKGZpbGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShmaWxlLmZpbGVOYW1lKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHBzKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZSAoZmlsZU5hbWUpIHtcclxuICAgIHJldHVybiBmcy5yZW1vdmVGaWxlKHRoaXMuX19maWxlUGF0aChmaWxlTmFtZSkpXHJcbiAgfVxyXG5cclxuICByZW5hbWUgKGZpbGVOYW1lLCBuZXdOYW1lKSB7XHJcbiAgICByZXR1cm4gZnMubW92ZUZpbGUodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSwgdGhpcy5fX2ZpbGVQYXRoKG5ld05hbWUsIHRydWUpKVxyXG4gIH1cclxuXHJcbiAgbWV0YWRhdGEgKGZpbGVOYW1lKSB7XHJcbiAgICByZXR1cm4gZnMuZ2V0TWV0YWRhdGEodGhpcy5fX2ZpbGVQYXRoKGZpbGVOYW1lKSlcclxuICB9XHJcblxyXG4gIF9fZmlsZVBhdGggKGZpbGVOYW1lLCBmb3JjZUNoZWNrKSB7XHJcbiAgICBpZiAoZm9yY2VDaGVjaykge1xyXG4gICAgICB0aGlzLmNoZWNrRmlsZU5hbWUoZmlsZU5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYmFzZURpciArICcvJyArIGZpbGVOYW1lLnRvTG93ZXJDYXNlKClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICdpZGIuZmlsZXN5c3RlbS5qcydcclxuXHJcbmNvbnN0IGZzID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCByZXF1ZXN0RmlsZVN5c3RlbSA9IHdpbmRvdy5yZXF1ZXN0RmlsZVN5c3RlbSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW1cclxuXHJcbiAgaWYgKCFyZXF1ZXN0RmlsZVN5c3RlbSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZXF1ZXN0RmlsZVN5c3RlbSBub3Qgc3VwcG9ydGVkJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGR1bWJTaXplICA9IDEwMjQgKiAxMDI0XHJcbiAgY29uc3QgbWF4U2l6ZSAgID0gNSAqIDEwMjQgKiAxMDI0XHJcbiAgY29uc3QgZ2V0RlMgPSAoc2l6ZSkgPT4ge1xyXG4gICAgc2l6ZSA9IHNpemUgfHwgbWF4U2l6ZVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlcXVlc3RGaWxlU3lzdGVtKHdpbmRvdy5URU1QT1JBUlksIHNpemUsIHJlc29sdmUsIHJlamVjdClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREaXJlY3RvcnkgPSAoZGlyLCBzaG91bGRDcmVhdGUsIGZzKSA9PiB7XHJcbiAgICBjb25zdCBwYXJ0cyAgID0gKEFycmF5LmlzQXJyYXkoZGlyKSA/IGRpciA6IGRpci5zcGxpdCgnLycpKS5maWx0ZXIocCA9PiBwICYmIHAubGVuZ3RoKVxyXG4gICAgY29uc3QgZ2V0RGlyICA9IChwYXJ0cywgZGlyZWN0b3J5RW50cnkpID0+IHtcclxuICAgICAgaWYgKCFwYXJ0cyB8fCAhcGFydHMubGVuZ3RoKSAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkaXJlY3RvcnlFbnRyeSlcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RGlyZWN0b3J5KFxyXG4gICAgICAgICAgcGFydHNbMF0sXHJcbiAgICAgICAgICB7IGNyZWF0ZTogISFzaG91bGRDcmVhdGUgfSxcclxuICAgICAgICAgIChkaXJFbnRyeSkgPT4gcmVzb2x2ZShkaXJFbnRyeSksXHJcbiAgICAgICAgICAoZSkgPT4gcmVqZWN0KGUpXHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihlbnRyeSA9PiBnZXREaXIocGFydHMuc2xpY2UoMSksIGVudHJ5KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwRlMgPSBmcyA/IFByb21pc2UucmVzb2x2ZShmcykgOiBnZXRGUyhkdW1iU2l6ZSlcclxuICAgIHJldHVybiBwRlMudGhlbihmcyA9PiBnZXREaXIocGFydHMsIGZzLnJvb3QpKVxyXG4gIH1cclxuXHJcbiAgLy8gQHJldHVybiBhIFByb21pc2Ugb2YgW0ZpbGVTeXN0ZW1FbnRyaWVzXVxyXG4gIGNvbnN0IGxpc3QgPSAoZGlyID0gJy8nKSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0RlMoZHVtYlNpemUpXHJcbiAgICAudGhlbihmcyA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZ2V0RGlyZWN0b3J5KGRpcikudGhlbihkaXJFbnRyeSA9PiB7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0ICAgICAgPSBbXVxyXG4gICAgICAgICAgY29uc3QgZGlyUmVhZGVyID0gZGlyRW50cnkuY3JlYXRlUmVhZGVyKClcclxuICAgICAgICAgIGNvbnN0IHJlYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpclJlYWRlci5yZWFkRW50cmllcyhlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LnNvcnQoKSlcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChBcnJheS5mcm9tKGVudHJpZXMpKVxyXG4gICAgICAgICAgICAgICAgcmVhZCgpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCByZWplY3QpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVhZCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2gocmVqZWN0KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVMb2NhdG9yID0gKGZpbGVQYXRoLCBmcykgPT4ge1xyXG4gICAgY29uc3QgcGFydHMgPSBmaWxlUGF0aC5zcGxpdCgnLycpXHJcbiAgICByZXR1cm4gZ2V0RGlyZWN0b3J5KHBhcnRzLnNsaWNlKDAsIC0xKSwgZmFsc2UsIGZzKVxyXG4gICAgLnRoZW4oZGlyZWN0b3J5RW50cnkgPT4gKHtcclxuICAgICAgZGlyZWN0b3J5RW50cnksXHJcbiAgICAgIGZpbGVOYW1lOiBwYXJ0cy5zbGljZSgtMSlbMF1cclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVhZEZpbGUgPSAoZmlsZVBhdGgsIHR5cGUpID0+IHtcclxuICAgIGlmIChbJ0FycmF5QnVmZmVyJywgJ0JpbmFyeVN0cmluZycsICdEYXRhVVJMJywgJ1RleHQnXS5pbmRleE9mKHR5cGUpID09PSAtMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgcmVhZEZpbGUgdHlwZSwgJyR7dHlwZX0nYClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ2V0RlMoKVxyXG4gICAgLnRoZW4oZnMgPT4ge1xyXG4gICAgICByZXR1cm4gZmlsZUxvY2F0b3IoZmlsZVBhdGgsIGZzKVxyXG4gICAgICAudGhlbigoeyBkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBkaXJlY3RvcnlFbnRyeS5nZXRGaWxlKGZpbGVOYW1lLCB7fSwgKGZpbGVFbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBmaWxlRW50cnkuZmlsZShmaWxlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXHJcblxyXG4gICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yICAgID0gcmVqZWN0XHJcbiAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzdWx0KVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJheUJ1ZmZlcic6ICAgcmV0dXJuIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnQmluYXJ5U3RyaW5nJzogIHJldHVybiByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpXHJcbiAgICAgICAgICAgICAgICBjYXNlICdEYXRhVVJMJzogICAgICAgcmV0dXJuIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXHJcbiAgICAgICAgICAgICAgICBjYXNlICdUZXh0JzogICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCBkYXRhIHR5cGUsICcke3R5cGV9YClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHJlamVjdClcclxuICAgICAgICAgIH0sIHJlamVjdClcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHdyaXRlRmlsZSA9IChmaWxlUGF0aCwgYmxvYiwgc2l6ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGdldEZTKHNpemUpXHJcbiAgICAudGhlbihmcyA9PiB7XHJcbiAgICAgIHJldHVybiBmaWxlTG9jYXRvcihmaWxlUGF0aCwgZnMpXHJcbiAgICAgIC50aGVuKCh7IGRpcmVjdG9yeUVudHJ5LCBmaWxlTmFtZSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGRpcmVjdG9yeUVudHJ5LmdldEZpbGUoZmlsZU5hbWUsIHsgY3JlYXRlOiB0cnVlIH0sIChmaWxlRW50cnkpID0+IHtcclxuICAgICAgICAgICAgZmlsZUVudHJ5LmNyZWF0ZVdyaXRlcihmaWxlV3JpdGVyID0+IHtcclxuICAgICAgICAgICAgICBmaWxlV3JpdGVyLm9ud3JpdGVlbmQgPSAoKSA9PiByZXNvbHZlKGZpbGVFbnRyeS50b1VSTCgpKVxyXG4gICAgICAgICAgICAgIGZpbGVXcml0ZXIub25lcnJvciAgICA9IHJlamVjdFxyXG5cclxuICAgICAgICAgICAgICBmaWxlV3JpdGVyLndyaXRlKGJsb2IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LCByZWplY3QpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVGaWxlID0gKGZpbGVQYXRoKSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0RlMoKVxyXG4gICAgLnRoZW4oZnMgPT4ge1xyXG4gICAgICByZXR1cm4gZmlsZUxvY2F0b3IoZmlsZVBhdGgsIGZzKVxyXG4gICAgICAudGhlbigoeyBkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBkaXJlY3RvcnlFbnRyeS5nZXRGaWxlKGZpbGVOYW1lLCB7IGNyZWF0ZTogdHJ1ZSB9LCAoZmlsZUVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGVFbnRyeS5yZW1vdmUocmVzb2x2ZSwgcmVqZWN0KVxyXG4gICAgICAgICAgfSwgcmVqZWN0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZUZpbGUgPSAoc3JjUGF0aCwgdGFyZ2V0UGF0aCkgPT4ge1xyXG4gICAgcmV0dXJuIGdldEZTKClcclxuICAgIC50aGVuKGZzID0+IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICBmaWxlTG9jYXRvcihzcmNQYXRoLCBmcyksXHJcbiAgICAgICAgZmlsZUxvY2F0b3IodGFyZ2V0UGF0aCwgZnMpXHJcbiAgICAgIF0pXHJcbiAgICAgIC50aGVuKHR1cGxlID0+IHtcclxuICAgICAgICBjb25zdCBzcmNEaXJFbnRyeSA9IHR1cGxlWzBdLmRpcmVjdG9yeUVudHJ5XHJcbiAgICAgICAgY29uc3Qgc3JjRmlsZU5hbWUgPSB0dXBsZVswXS5maWxlTmFtZVxyXG4gICAgICAgIGNvbnN0IHRndERpckVudHJ5ID0gdHVwbGVbMV0uZGlyZWN0b3J5RW50cnlcclxuICAgICAgICBjb25zdCB0Z3RGaWxlTmFtZSA9IHR1cGxlWzFdLmZpbGVOYW1lXHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBzcmNEaXJFbnRyeS5nZXRGaWxlKHNyY0ZpbGVOYW1lLCB7fSwgKGZpbGVFbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBmaWxlRW50cnkubW92ZVRvKHRndERpckVudHJ5LCB0Z3RGaWxlTmFtZSwgcmVzb2x2ZSwgcmVqZWN0KVxyXG4gICAgICAgICAgfSwgcmVqZWN0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TWV0YWRhdGEgPSAoZmlsZVBhdGgpID0+IHtcclxuICAgIHJldHVybiBnZXRGUygpXHJcbiAgICAudGhlbihmcyA9PiB7XHJcbiAgICAgIGlmIChmaWxlUGF0aC5nZXRNZXRhZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZmlsZVBhdGguZ2V0TWV0YWRhdGEocmVzb2x2ZSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmlsZUxvY2F0b3IoZmlsZVBhdGgsIGZzKVxyXG4gICAgICAudGhlbigoeyBkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBkaXJlY3RvcnlFbnRyeS5nZXRGaWxlKGZpbGVOYW1lLCB7IGNyZWF0ZTogdHJ1ZSB9LCAoZmlsZUVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGVFbnRyeS5nZXRNZXRhZGF0YShyZXNvbHZlKVxyXG4gICAgICAgICAgfSwgcmVqZWN0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhpc3RzID0gKGZpbGVQYXRoLCB7IHR5cGUgfSA9IHt9KSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0RlMoKVxyXG4gICAgLnRoZW4oZnMgPT4ge1xyXG4gICAgICByZXR1cm4gZmlsZUxvY2F0b3IoZmlsZVBhdGgsIGZzKVxyXG4gICAgICAudGhlbigoeyBkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzU29tZUVudHJ5ID0gKGdldE1ldGhvZE5hbWUpID0+ICB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgZGlyZWN0b3J5RW50cnlbZ2V0TWV0aG9kTmFtZV0oXHJcbiAgICAgICAgICAgICAgZmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgeyBjcmVhdGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgKCkgPT4gcmVzb2x2ZSh0cnVlKSxcclxuICAgICAgICAgICAgICAoKSA9PiByZXNvbHZlKGZhbHNlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcElzRmlsZSA9IGlzU29tZUVudHJ5KCdnZXRGaWxlJylcclxuICAgICAgICBjb25zdCBwSXNEaXIgID0gaXNTb21lRW50cnkoJ2dldERpcmVjdG9yeScpXHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbcElzRmlsZSwgcElzRGlyXSlcclxuICAgICAgICAudGhlbigoW2lzRmlsZSwgaXNEaXJdKSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmlsZSc6ICAgICAgICByZXR1cm4gaXNGaWxlXHJcbiAgICAgICAgICAgIGNhc2UgJ2RpcmVjdG9yeSc6ICAgcmV0dXJuIGlzRGlyXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgcmV0dXJuIGlzRmlsZSB8fCBpc0RpclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxpc3QsXHJcbiAgICByZWFkRmlsZSxcclxuICAgIHdyaXRlRmlsZSxcclxuICAgIHJlbW92ZUZpbGUsXHJcbiAgICBtb3ZlRmlsZSxcclxuICAgIGdldERpcmVjdG9yeSxcclxuICAgIGdldE1ldGFkYXRhLFxyXG4gICAgZXhpc3RzXHJcbiAgfVxyXG59KSgpXHJcblxyXG4vLyBGb3IgdGVzdCBvbmx5XHJcbndpbmRvdy5mcyA9IGZzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmc1xyXG4iLCJcclxuLy8gZGVsYXkgdGhlIGNhbGwgb2YgYSBmdW5jdGlvbiBhbmQgcmV0dXJuIGEgcHJvbWlzZVxyXG5leHBvcnQgY29uc3QgZGVsYXkgPSAoZm4sIHRpbWVvdXQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzb2x2ZShmbigpKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVqZWN0KGUpXHJcbiAgICAgIH1cclxuICAgIH0sIHRpbWVvdXQpXHJcbiAgfSlcclxufVxyXG5cclxuLy8gUG9sbCBvbiB3aGF0ZXZlciB5b3Ugd2FudCB0byBjaGVjaywgYW5kIHdpbGwgdGltZSBvdXQgYWZ0ZXIgYSBzcGVjaWZpYyBkdXJhdGlvblxyXG4vLyBgY2hlY2tgIHNob3VsZCByZXR1cm4gYHsgcGFzczogQm9vbGVhbiwgcmVzdWx0OiBBbnkgfWBcclxuLy8gYG5hbWVgIGlzIGZvciBhIG1lYW5pbmdmdWwgZXJyb3IgbWVzc2FnZVxyXG5leHBvcnQgY29uc3QgdW50aWwgPSAobmFtZSwgY2hlY2ssIGludGVydmFsID0gMTAwMCwgZXhwaXJlID0gMTAwMDAsIGVycm9yTXNnKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgZ28gICAgPSAoKSA9PiB7XHJcbiAgICBpZiAoZXhwaXJlICYmIG5ldyBEYXRlKCkgLSBzdGFydCA+PSBleHBpcmUpIHtcclxuICAgICAgY29uc3QgbXNnID0gZXJyb3JNc2cgfHwgYHVudGlsOiAke25hbWV9IGV4cGlyZWQhYFxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcGFzcywgcmVzdWx0IH0gPSBjaGVjaygpXHJcblxyXG4gICAgaWYgKHBhc3MpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KVxyXG4gICAgcmV0dXJuIGRlbGF5KGdvLCBpbnRlcnZhbClcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXNvbHZlKGdvKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJlamVjdChlKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByYW5nZSA9IChzdGFydCwgZW5kLCBzdGVwID0gMSkgPT4ge1xyXG4gIGNvbnN0IHJldCA9IFtdXHJcblxyXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSBzdGVwKSB7XHJcbiAgICByZXQucHVzaChpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG4vLyBjcmVhdGUgYSBjdXJyeSB2ZXJzaW9uIG9mIHRoZSBwYXNzZWQgaW4gZnVuY3Rpb25cclxuZXhwb3J0IGNvbnN0IHBhcnRpYWwgPSAoZm4pID0+IHtcclxuICBjb25zdCBsZW4gPSBmbi5sZW5ndGhcclxuICBsZXQgYXJiaXRhcnlcclxuXHJcbiAgYXJiaXRhcnkgPSAoY3VyQXJncywgbGVmdEFyZ0NudCkgPT4gKC4uLmFyZ3MpID0+IHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSBsZWZ0QXJnQ250KSB7XHJcbiAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBjdXJBcmdzLmNvbmNhdChhcmdzKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJiaXRhcnkoY3VyQXJncy5jb25jYXQoYXJncyksIGxlZnRBcmdDbnQgLSBhcmdzLmxlbmd0aClcclxuICB9XHJcblxyXG4gIHJldHVybiBhcmJpdGFyeShbXSwgbGVuKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlUmlnaHQgPSAoZm4sIGluaXRpYWwsIGxpc3QpID0+IHtcclxuICB2YXIgcmV0ID0gaW5pdGlhbFxyXG5cclxuICBmb3IgKGxldCBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgcmV0ID0gZm4obGlzdFtpXSwgcmV0KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG4vLyBjb21wb3NlIGZ1bmN0aW9ucyBpbnRvIG9uZVxyXG5leHBvcnQgY29uc3QgY29tcG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgcmV0dXJuIHJlZHVjZVJpZ2h0KChjdXIsIHByZXYpID0+IHtcclxuICAgIHJldHVybiB4ID0+IGN1cihwcmV2KHgpKVxyXG4gIH0sIHggPT4geCwgYXJncylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hcCA9IHBhcnRpYWwoKGZuLCBsaXN0KSA9PiB7XHJcbiAgdmFyIHJlc3VsdCA9IFtdXHJcblxyXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICByZXN1bHQucHVzaChmbihsaXN0W2ldKSlcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHRcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBvbiA9IHBhcnRpYWwoKGtleSwgZm4sIGRpY3QpID0+IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShkaWN0KSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgLi4uZGljdC5zbGljZSgwLCBrZXkpLFxyXG4gICAgICBmbihkaWN0W2tleV0pLFxyXG4gICAgICAuLi5kaWN0LnNsaWNlKGtleSArIDEpXHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGljdCwge1xyXG4gICAgW2tleV06IGZuKGRpY3Rba2V5XSlcclxuICB9KVxyXG59KVxyXG5cclxuLy8gaW1tdXRhYmx5IHVwZGF0ZSBhbnkgcGFydCBpbiBhbiBvYmplY3RcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUluID0gcGFydGlhbCgoa2V5cywgZm4sIG9iaikgPT4ge1xyXG4gIGNvbnN0IHVwZGF0ZXIgPSBjb21wb3NlLmFwcGx5KG51bGwsIGtleXMubWFwKGtleSA9PiBvbihrZXkpKSlcclxuICByZXR1cm4gdXBkYXRlcihmbikob2JqKVxyXG59KVxyXG5cclxuLy8gaW1tdXRhYmx5IHNldCBhbnkgcGFydCBpbiBhbiBvYmplY3RcclxuLy8gYSByZXN0cmljdGVkIHZlcnNpb24gb2YgdXBkYXRlSW5cclxuZXhwb3J0IGNvbnN0IHNldEluID0gcGFydGlhbCgoa2V5cywgdmFsdWUsIG9iaikgPT4ge1xyXG4gIGNvbnN0IHVwZGF0ZXIgPSBjb21wb3NlLmFwcGx5KG51bGwsIGtleXMubWFwKGtleSA9PiBvbihrZXkpKSlcclxuICByZXR1cm4gdXBkYXRlcigoKSA9PiB2YWx1ZSkob2JqKVxyXG59KVxyXG5cclxuLy8gcmV0dXJuIHBhcnQgb2YgdGhlIG9iamVjdCB3aXRoIGEgZmV3IGtleXMgZGVlcCBpbnNpZGVcclxuZXhwb3J0IGNvbnN0IGdldEluID0gcGFydGlhbCgoa2V5cywgb2JqKSA9PiB7XHJcbiAgcmV0dXJuIGtleXMucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcclxuICAgIGlmICghcHJldikgIHJldHVybiBwcmV2XHJcbiAgICByZXR1cm4gcHJldltrZXldXHJcbiAgfSwgb2JqKVxyXG59KVxyXG5cclxuLy8gcmV0dXJuIHRoZSBwYXNzZWQgaW4gb2JqZWN0IHdpdGggb25seSBjZXJ0YWlucyBrZXlzXHJcbmV4cG9ydCBjb25zdCBwaWNrID0gKGtleXMsIG9iaikgPT4ge1xyXG4gIHJldHVybiBrZXlzLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XHJcbiAgICBpZiAob2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwcmV2W2tleV0gPSBvYmpba2V5XVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZXZcclxuICB9LCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVpZCA9ICgpID0+IHtcclxuICByZXR1cm4gJycgKyAobmV3IERhdGUoKSAqIDEpICsgJy4nICtcclxuICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApLnRvU3RyaW5nKDE2KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IChsaXN0KSA9PiB7XHJcbiAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgbGlzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzcGxpdEludG9Ud28gPSAocGF0dGVybiwgc3RyKSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdHIuaW5kZXhPZihwYXR0ZXJuKVxyXG4gIGlmIChpbmRleCA9PT0gLTEpICByZXR1cm4gW3N0cl1cclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIHN0ci5zdWJzdHIoMCwgaW5kZXgpLFxyXG4gICAgc3RyLnN1YnN0cihpbmRleCArIDEpXHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY24gPSAoLi4uYXJncykgPT4ge1xyXG4gIHJldHVybiBhcmdzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcHJldi5wdXNoKGN1cilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGN1cikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJba2V5XSkge1xyXG4gICAgICAgICAgcHJldi5wdXNoKGtleSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZXZcclxuICB9LCBbXSlcclxuICAuam9pbignICcpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvYmpNYXAgPSAoZm4sIG9iaikgPT4ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgocHJldiwga2V5LCBpKSA9PiB7XHJcbiAgICBwcmV2W2tleV0gPSBmbihvYmpba2V5XSwga2V5LCBpKVxyXG4gICAgcmV0dXJuIHByZXZcclxuICB9LCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoZCkgPT4ge1xyXG4gIGNvbnN0IHBhZCA9IChuKSA9PiBuID49IDEwID8gKCcnICsgbikgOiAoJzAnICsgbilcclxuICByZXR1cm4gW2QuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpICsgMSwgZC5nZXREYXRlKCldLm1hcChwYWQpLmpvaW4oJy0nKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3BsaXRLZWVwID0gKHBhdHRlcm4sIHN0cikgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCAgICA9IFtdXHJcbiAgbGV0IHN0YXJ0SW5kZXggID0gMFxyXG4gIGxldCByZWcsIG1hdGNoLCBsYXN0TWF0Y2hJbmRleFxyXG5cclxuICBpZiAocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgcmVnID0gbmV3IFJlZ0V4cChcclxuICAgICAgcGF0dGVybixcclxuICAgICAgcGF0dGVybi5mbGFncy5pbmRleE9mKCdnJykgIT09IC0xID8gcGF0dGVybi5mbGFncyA6IChwYXR0ZXJuLmZsYWdzICsgJ2cnKVxyXG4gICAgKVxyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZWcgPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJylcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25kLWFzc2lnblxyXG4gIHdoaWxlIChtYXRjaCA9IHJlZy5leGVjKHN0cikpIHtcclxuICAgIGlmIChsYXN0TWF0Y2hJbmRleCA9PT0gbWF0Y2guaW5kZXgpIHtcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF0Y2guaW5kZXggPiBzdGFydEluZGV4KSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHN0ci5zdWJzdHJpbmcoc3RhcnRJbmRleCwgbWF0Y2guaW5kZXgpKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5wdXNoKG1hdGNoWzBdKVxyXG4gICAgc3RhcnRJbmRleCAgICAgID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGhcclxuICAgIGxhc3RNYXRjaEluZGV4ICA9IG1hdGNoLmluZGV4XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhcnRJbmRleCA8IHN0ci5sZW5ndGgpIHtcclxuICAgIHJlc3VsdC5wdXNoKHN0ci5zdWJzdHIoc3RhcnRJbmRleCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuYW1lRmFjdG9yeSA9ICgpID0+IHtcclxuICBjb25zdCBhbGwgPSB7fVxyXG5cclxuICByZXR1cm4gKHN0cikgPT4ge1xyXG4gICAgaWYgKCFhbGxbc3RyXSkge1xyXG4gICAgICBhbGxbc3RyXSA9IHRydWVcclxuICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG5cclxuICAgIGxldCBuID0gMlxyXG4gICAgd2hpbGUgKGFsbFtzdHIgKyAnLScgKyBuXSkge1xyXG4gICAgICBuKytcclxuICAgIH1cclxuXHJcbiAgICBhbGxbc3RyICsgJy0nICsgbl0gPSB0cnVlXHJcbiAgICByZXR1cm4gc3RyICsgJy0nICsgblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBvc2VQcm9taXNlRm4gPSAoLi4ubGlzdCkgPT4ge1xyXG4gIHJldHVybiByZWR1Y2VSaWdodCgoY3VyLCBwcmV2KSA9PiB7XHJcbiAgICByZXR1cm4geCA9PiBwcmV2KHgpLnRoZW4oY3VyKVxyXG4gIH0sIHggPT4gUHJvbWlzZS5yZXNvbHZlKHgpLCBsaXN0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFyc2VRdWVyeSA9IChxdWVyeSkgPT4ge1xyXG4gIHJldHVybiBxdWVyeS5zbGljZSgxKS5zcGxpdCgnJicpLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IGN1ci5pbmRleE9mKCc9JylcclxuICAgIGNvbnN0IGtleSA9IGN1ci5zdWJzdHJpbmcoMCwgaW5kZXgpXHJcbiAgICBjb25zdCB2YWwgPSBjdXIuc3Vic3RyaW5nKGluZGV4ICsgMSlcclxuXHJcbiAgICBwcmV2W2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsKVxyXG4gICAgcmV0dXJuIHByZXZcclxuICB9LCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvUmVnRXhwID0gKHN0ciwgeyBuZWVkRW5jb2RlID0gZmFsc2UsIGZsYWcgPSAnJyB9ID0ge30pID0+IHtcclxuICByZXR1cm4gbmV3IFJlZ0V4cChcclxuICAgIG5lZWRFbmNvZGUgPyBzdHIucmVwbGFjZSgvW1tcXF0oKXt9XiQuKis/fF0vZywgJ1xcXFwkJicpIDogc3RyLFxyXG4gICAgZmxhZ1xyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydFNjcmlwdCA9IChmaWxlKSA9PiB7XHJcbiAgY29uc3QgcyA9IGRvY3VtZW50LmNvbnN0cnVjdG9yLnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LmNhbGwoZG9jdW1lbnQsICdzY3JpcHQnKVxyXG5cclxuICBzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKVxyXG4gIHMuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlKVxyXG5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocylcclxuICBzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhUaW1lb3V0ID0gKHRpbWVvdXQsIGZuKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGNhbmNlbCAgPSAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICBjb25zdCB0aW1lciAgID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3dpdGhUaW1lb3V0OiB0aW1lb3V0JykpXHJcbiAgICB9LCB0aW1lb3V0KVxyXG5cclxuICAgIGZuKGNhbmNlbClcclxuICAgIC50aGVuKFxyXG4gICAgICBkYXRhID0+IHtcclxuICAgICAgICBjYW5jZWwoKVxyXG4gICAgICAgIHJlc29sdmUoZGF0YSlcclxuICAgICAgfSxcclxuICAgICAgZSA9PiB7XHJcbiAgICAgICAgY2FuY2VsKClcclxuICAgICAgICByZWplY3QoZSlcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXRyeSA9IChmbiwgb3B0aW9ucykgPT4gKC4uLmFyZ3MpID0+IHtcclxuICBjb25zdCB7IHRpbWVvdXQsIG9uRmlyc3RGYWlsLCBvbkZpbmFsLCBzaG91bGRSZXRyeSwgcmV0cnlJbnRlcnZhbCB9ID0ge1xyXG4gICAgdGltZW91dDogNTAwMCxcclxuICAgIHJldHJ5SW50ZXJ2YWw6IDEwMDAsXHJcbiAgICBvbkZpcnN0RmFpbDogICgpID0+IHt9LFxyXG4gICAgb25GaW5hbDogICAgICAoKSA9PiB7fSxcclxuICAgIHNob3VsZFJldHJ5OiAgKCkgPT4gZmFsc2UsXHJcbiAgICAuLi5vcHRpb25zXHJcbiAgfVxyXG5cclxuICBsZXQgcmV0cnlDb3VudCAgICA9IDBcclxuICBsZXQgbGFzdEVycm9yICAgICA9IG51bGxcclxuICBsZXQgdGltZXJUb0NsZWFyICA9IG51bGxcclxuICBsZXQgZG9uZSAgICAgICAgICA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IHdyYXBwZWRPbkZpbmFsID0gKC4uLmFyZ3MpID0+IHtcclxuICAgIGRvbmUgPSB0cnVlXHJcblxyXG4gICAgaWYgKHRpbWVyVG9DbGVhcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXJUb0NsZWFyKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvbkZpbmFsKC4uLmFyZ3MpXHJcbiAgfVxyXG5cclxuICBjb25zdCBpbnRlcnZhbE1hbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbGFzdEludGVydmFsICAgICAgPSBudWxsXHJcbiAgICBjb25zdCBpbnRlcnZhbEZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzd2l0Y2ggKHR5cGVvZiByZXRyeUludGVydmFsKSB7XHJcbiAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgICAgcmV0dXJuIHJldHJ5SW50ZXJ2YWxcclxuXHJcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgIHJldHVybiAoKSA9PiByZXRyeUludGVydmFsXHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JldHJ5SW50ZXJ2YWwgbXVzdCBiZSBlaXRoZXIgYSBudW1iZXIgb3IgYSBmdW5jdGlvbicpXHJcbiAgICAgIH1cclxuICAgIH0pKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXRMYXN0SW50ZXJ2YWw6ICgpID0+IGxhc3RJbnRlcnZhbCxcclxuICAgICAgZ2V0SW50ZXJ2YWw6ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IGludGVydmFsRmFjdG9yeShyZXRyeUNvdW50LCBsYXN0SW50ZXJ2YWwpXHJcbiAgICAgICAgbGFzdEludGVydmFsID0gaW50ZXJ2YWxcclxuICAgICAgICByZXR1cm4gaW50ZXJ2YWxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pKClcclxuXHJcbiAgY29uc3Qgb25FcnJvciA9IChlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghc2hvdWxkUmV0cnkoZSwgcmV0cnlDb3VudCkpIHtcclxuICAgICAgd3JhcHBlZE9uRmluYWwoZSlcclxuXHJcbiAgICAgIGlmIChyZWplY3QpIHJldHVybiByZWplY3QoZSlcclxuICAgICAgZWxzZSAgICAgICAgdGhyb3cgZVxyXG4gICAgfVxyXG4gICAgbGFzdEVycm9yID0gZVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmIChyZXRyeUNvdW50KysgPT09IDApIHtcclxuICAgICAgICBvbkZpcnN0RmFpbChlKVxyXG4gICAgICAgIHRpbWVyVG9DbGVhciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgd3JhcHBlZE9uRmluYWwobGFzdEVycm9yKVxyXG4gICAgICAgICAgcmVqZWN0KGxhc3RFcnJvcilcclxuICAgICAgICB9LCB0aW1lb3V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZG9uZSkgcmV0dXJuXHJcblxyXG4gICAgICBkZWxheShydW4sIGludGVydmFsTWFuLmdldEludGVydmFsKCkpXHJcbiAgICAgIC50aGVuKHJlc29sdmUsIGUgPT4gb25FcnJvcihlLCByZWplY3QpKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJ1biA9ICgpID0+IHtcclxuICAgIHJldHVybiBmbiguLi5hcmdzLCB7XHJcbiAgICAgIHJldHJ5Q291bnQsXHJcbiAgICAgIHJldHJ5SW50ZXJ2YWw6IGludGVydmFsTWFuLmdldExhc3RJbnRlcnZhbCgpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKG9uRXJyb3IpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcnVuKClcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICB3cmFwcGVkT25GaW5hbChudWxsLCByZXN1bHQpXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfSlcclxufVxyXG5cclxuLy8gcmVmZXIgdG8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTIxNjg5MDkvYmxvYi1mcm9tLWRhdGF1cmxcclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFVUkl0b0Jsb2IgKGRhdGFVUkkpIHtcclxuICAvLyBjb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xyXG4gIC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXHJcbiAgdmFyIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFVUkkuc3BsaXQoJywnKVsxXSk7XHJcblxyXG4gIC8vIHNlcGFyYXRlIG91dCB0aGUgbWltZSBjb21wb25lbnRcclxuICB2YXIgbWltZVN0cmluZyA9IGRhdGFVUkkuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF1cclxuXHJcbiAgLy8gd3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXJcclxuICB2YXIgYWIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xyXG5cclxuICAvLyBjcmVhdGUgYSB2aWV3IGludG8gdGhlIGJ1ZmZlclxyXG4gIHZhciBpYSA9IG5ldyBVaW50OEFycmF5KGFiKTtcclxuXHJcbiAgLy8gc2V0IHRoZSBieXRlcyBvZiB0aGUgYnVmZmVyIHRvIHRoZSBjb3JyZWN0IHZhbHVlc1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICB9XHJcblxyXG4gIC8vIHdyaXRlIHRoZSBBcnJheUJ1ZmZlciB0byBhIGJsb2IsIGFuZCB5b3UncmUgZG9uZVxyXG4gIHZhciBibG9iID0gbmV3IEJsb2IoW2FiXSwge3R5cGU6IG1pbWVTdHJpbmd9KTtcclxuICByZXR1cm4gYmxvYjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJhbmRvbU5hbWUgPSAobGVuZ3RoID0gNikgPT4ge1xyXG4gIGlmIChsZW5ndGggPD0gMCB8fCBsZW5ndGggPiAxMDApICB0aHJvdyBuZXcgRXJyb3IoJ3JhbmRvbU5hbWUsIGxlbmd0aCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgMTAwJylcclxuXHJcbiAgY29uc3QgcmFuZG9tQ2hhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG4gPSBNYXRoLmZsb29yKDYyICogTWF0aC5yYW5kb20oKSlcclxuICAgIGxldCBjb2RlXHJcblxyXG4gICAgaWYgKG4gPD0gOSkge1xyXG4gICAgICBjb2RlID0gNDggKyBuXHJcbiAgICB9IGVsc2UgaWYgKG4gPD0gMzUpIHtcclxuICAgICAgY29kZSA9IDY1ICsgbiAtIDEwXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb2RlID0gOTcgKyBuIC0gMzZcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJhbmdlKDAsIGxlbmd0aCkubWFwKHJhbmRvbUNoYXIpLmpvaW4oJycpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoRmlsZUV4dGVuc2lvbiA9IChvcmlnTmFtZSwgZm4pID0+IHtcclxuICBjb25zdCByZWcgPSAvXFwuXFx3KyQvXHJcbiAgY29uc3QgbSAgID0gb3JpZ05hbWUubWF0Y2gocmVnKVxyXG5cclxuICBjb25zdCBleHROYW1lICAgPSBtID8gbVswXSA6ICcnXHJcbiAgY29uc3QgYmFzZU5hbWUgID0gbSA/IG9yaWdOYW1lLnJlcGxhY2UocmVnLCAnJykgOiBvcmlnTmFtZVxyXG4gIGNvbnN0IHJlc3VsdCAgICA9IGZuKGJhc2VOYW1lLCAobmFtZSkgPT4gbmFtZSArIGV4dE5hbWUpXHJcblxyXG4gIGlmICghcmVzdWx0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpdGhGaWxlRXh0ZW5zaW9uOiBzaG91bGQgbm90IHJldHVybiBudWxsL3VuZGVmaW5lZCcpXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gcmVzdWx0LnRoZW4obmFtZSA9PiBuYW1lICsgZXh0TmFtZSlcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQgKyBleHROYW1lXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1bmlxdWVOYW1lID0gKG5hbWUsIG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBvcHRzID0ge1xyXG4gICAgZ2VuZXJhdGU6IChvbGQsIHN0ZXAgPSAxKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZyA9IC9fXFwoKFxcZCspXFwpJC9cclxuICAgICAgY29uc3QgbSAgID0gb2xkLm1hdGNoKHJlZylcclxuXHJcbiAgICAgIGlmICghbSkgcmV0dXJuIGAke29sZH1fKCR7c3RlcH0pYFxyXG4gICAgICByZXR1cm4gb2xkLnJlcGxhY2UocmVnLCAoXywgbikgPT4gYF8oJHtwYXJzZUludChuLCAxMCkgKyBzdGVwfSlgKVxyXG4gICAgfSxcclxuICAgIGNoZWNrOiAoKSA9PiBQcm9taXNlLnJlc29sdmUodHJ1ZSksXHJcbiAgICAuLi5vcHRpb25zXHJcbiAgfVxyXG4gIGNvbnN0IHsgZ2VuZXJhdGUsIGNoZWNrIH0gPSBvcHRzXHJcblxyXG4gIHJldHVybiB3aXRoRmlsZUV4dGVuc2lvbihuYW1lLCAoYmFzZU5hbWUsIGdldEZ1bGxOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBnbyA9IChmaWxlTmFtZSwgc3RlcCkgPT4ge1xyXG4gICAgICByZXR1cm4gY2hlY2soZ2V0RnVsbE5hbWUoZmlsZU5hbWUpKVxyXG4gICAgICAudGhlbihwYXNzID0+IHtcclxuICAgICAgICBpZiAocGFzcykgcmV0dXJuIGZpbGVOYW1lXHJcbiAgICAgICAgcmV0dXJuIGdvKGdlbmVyYXRlKGZpbGVOYW1lLCBzdGVwKSwgc3RlcClcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ28oYmFzZU5hbWUsIDEpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFuZCA9ICguLi5saXN0KSA9PiBsaXN0LnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICYmIGN1ciwgdHJ1ZSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQ3N2ID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgLnRoZW4ocmVzID0+IHtcclxuICAgIGlmICghcmVzLm9rKSAgdGhyb3cgbmV3IEVycm9yKGBmYWlsZWQgdG8gbG9hZCBjc3YgLSAke3VybH1gKVxyXG4gICAgcmV0dXJuIHJlcy50ZXh0KClcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEltYWdlID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgLnRoZW4ocmVzID0+IHtcclxuICAgIGlmICghcmVzLm9rKSAgdGhyb3cgbmV3IEVycm9yKGBmYWlsZWQgdG8gbG9hZCBpbWFnZSAtICR7dXJsfWApXHJcbiAgICByZXR1cm4gcmVzLmJsb2IoKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnN1cmVFeHROYW1lID0gKGV4dCwgbmFtZSkgPT4ge1xyXG4gIGNvbnN0IGV4dE5hbWUgPSBleHQuaW5kZXhPZignLicpID09PSAwID8gZXh0IDogKCcuJyArIGV4dClcclxuICBpZiAobmFtZS5sYXN0SW5kZXhPZihleHROYW1lKSArIGV4dE5hbWUubGVuZ3RoID09PSBuYW1lLmxlbmd0aCkgcmV0dXJuIG5hbWVcclxuICByZXR1cm4gbmFtZSArIGV4dE5hbWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU3RhbmRhcmROYW1lID0gKG5hbWUsIGlzRmlsZU5hbWUpID0+IHtcclxuICBpZiAoIWlzRmlsZU5hbWUgJiYgIS9eX3xbYS16QS1aXS8udGVzdChuYW1lKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgdGhlIHVuZGVyc2NvcmUgY2hhcmFjdGVyLmApXHJcbiAgfVxyXG5cclxuICBpZiAoaXNGaWxlTmFtZSAmJiAhL15ffFthLXpBLVowLTldLy50ZXN0KG5hbWUpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYG11c3Qgc3RhcnQgd2l0aCBhbHBoYS1udW1lcmljIG9yIHRoZSB1bmRlcnNjb3JlIGNoYXJhY3Rlci5gKVxyXG4gIH1cclxuXHJcbiAgaWYgKCEvXlthLXpBLVowLTlfXSskLy50ZXN0KG5hbWUpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGNhbiBvbmx5IGNvbnRhaW4gYWxwaGEtbnVtZXJpYyBjaGFyYWN0ZXJzIGFuZCB1bmRlcnNjb3JlcyAoQS16LCAwLTksIGFuZCBfIClgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhbml0aXplRmlsZU5hbWUgPSAoZmlsZU5hbWUpID0+IHtcclxuICByZXR1cm4gd2l0aEZpbGVFeHRlbnNpb24oZmlsZU5hbWUsIChiYXNlTmFtZSkgPT4gYmFzZU5hbWUucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAnXycpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2NyZWVuRHBpID0gKCkgPT4ge1xyXG4gIGNvbnN0IERFRkFVTFRfRFBJID0gOTZcclxuICBjb25zdCBtYXRjaERwaSA9IChkcGkpID0+IHtcclxuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC1yZXNvbHV0aW9uOiAke2RwaX1kcGkpYCkubWF0Y2hlcyA9PT0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgLy8gV2UgaXRlcmF0aXZlbHkgc2NhbiBhbGwgcG9zc2libGUgbWVkaWEgcXVlcnkgbWF0Y2hlcy5cclxuICAvLyBXZSBjYW4ndCB1c2UgYmluYXJ5IHNlYXJjaCwgYmVjYXVzZSB0aGVyZSBhcmUgXCJtYW55XCIgY29ycmVjdCBhbnN3ZXIgaW5cclxuICAvLyBwcm9ibGVtIHNwYWNlIGFuZCB3ZSBuZWVkIHRoZSB2ZXJ5IGZpcnN0IG1hdGNoLlxyXG4gIC8vIFRvIHNwZWVkIHVwIGNvbXB1dGF0aW9uIHdlIGRpdmlkZSBwcm9ibGVtIHNwYWNlIGludG8gYnVja2V0cy5cclxuICAvLyBXZSB0ZXN0IGVhY2ggYnVja2V0J3MgZmlyc3QgZWxlbWVudCBhbmQgaWYgd2UgZm91bmQgYSBtYXRjaCxcclxuICAvLyB3ZSBtYWtlIGEgZnVsbCBzY2FuIGZvciBwcmV2aW91cyBidWNrZXQgd2l0aCBpbmNsdWRpbmcgZmlyc3QgbWF0Y2guXHJcbiAgLy8gU3RpbGwsIHdlIGNvdWxkIHVzZSBcImRpdmlkZS1hbmQtY29ucXVlclwiIGZvciBzdWNoIHByb2JsZW1zLlxyXG4gIC8vIER1ZSB0byBjb21tb24gRFBJIHZhbHVlcywgaXQncyBub3Qgd29ydGggdG8gaW1wbGVtZW50IHN1Y2ggYWxnb3JpdGhtLlxyXG5cclxuICBjb25zdCBidWNrZXRTaXplID0gMjQgLy8gY29tbW9uIGRpdmlzb3IgZm9yIDcyLCA5NiwgMTIwLCAxNDQgZXRjLlxyXG5cclxuICBmb3IgKGxldCBpID0gYnVja2V0U2l6ZTsgaSA8IDMwMDA7IGkgKz0gYnVja2V0U2l6ZSkge1xyXG4gICAgaWYgKG1hdGNoRHBpKGkpKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaSAtIGJ1Y2tldFNpemVcclxuICAgICAgY29uc3QgZW5kICAgPSBpXHJcblxyXG4gICAgICBmb3IgKGxldCBrID0gc3RhcnQ7IGsgPD0gZW5kOyArK2spIHtcclxuICAgICAgICBpZiAobWF0Y2hEcGkoaykpIHtcclxuICAgICAgICAgIHJldHVybiBrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gREVGQVVMVF9EUEk7IC8vIGRlZmF1bHQgZmFsbGJhY2tcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRwaUZyb21GaWxlTmFtZSA9IChmaWxlTmFtZSkgPT4ge1xyXG4gIGNvbnN0IHJlZyA9IC9fZHBpXyhcXGQrKS9pXHJcbiAgY29uc3QgbSA9IGZpbGVOYW1lLm1hdGNoKHJlZylcclxuICByZXR1cm4gbSA/IHBhcnNlSW50KG1bMV0sIDEwKSA6IDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1vY2tBUElXaXRoID0gKGZhY3RvcnksIG1vY2ssIHByb21pc2VGdW5jdGlvbktleXMgPSBbXSkgPT4ge1xyXG4gIGxldCByZWFsID0gbW9ja1xyXG4gIGxldCBleHBvcnRlZCA9IG9iak1hcCgodmFsLCBrZXkpID0+IHtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGlmIChwcm9taXNlRnVuY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHAudGhlbigoKSA9PiByZWFsW2tleV0oLi4uYXJncykpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICBwLnRoZW4oKCkgPT4gcmVhbFtrZXldKC4uLmFyZ3MpKVxyXG4gICAgICAgICAgcmV0dXJuIHJlYWxba2V5XSguLi5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbFxyXG4gICAgfVxyXG4gIH0sIG1vY2spXHJcblxyXG4gIGNvbnN0IHAgPSBQcm9taXNlLnJlc29sdmUoZmFjdG9yeSgpKVxyXG4gICAgICAgICAgICAudGhlbihhcGkgPT4geyByZWFsID0gYXBpIH0pXHJcblxyXG4gIHJldHVybiBleHBvcnRlZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aENvdW50RG93biA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgeyBpbnRlcnZhbCwgdGltZW91dCwgb25UaWNrIH0gPSBvcHRpb25zXHJcbiAgbGV0IHBhc3QgPSAwXHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgcGFzdCArPSBpbnRlcnZhbFxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBvblRpY2soeyBwYXN0LCB0b3RhbDogdGltZW91dCB9KVxyXG4gICAgICB9IGNhdGNoIChlKSB7IGNvbnNvbGUuZXJyb3IoZSkgfVxyXG5cclxuICAgICAgaWYgKHBhc3QgPj0gdGltZW91dCkgIGNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICB9LCBpbnRlcnZhbClcclxuXHJcbiAgICBjb25zdCBwID0gZGVsYXkoKCkgPT4ge30sIHRpbWVvdXQpXHJcbiAgICAudGhlbigoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKSlcclxuXHJcbiAgICByZXNvbHZlKHApXHJcbiAgfSlcclxufVxyXG4iLCIvKiBnbG9iYWwgY2hyb21lIGJyb3dzZXIgKi9cclxuXHJcbi8vIE5vdGU6IGl0J3MgYW4gYWRhcHRlciBmb3IgYm90aCBjaHJvbWUgYW5kIHdlYiBleHRlbnNpb24gQVBJXHJcbi8vIGNocm9tZSBhbmQgd2ViIGV4dGVuc2lvbiBBUEkgaGF2ZSBhbG1vc3QgdGhlIHNhbWUgQVBJIHNpZ25hdHVyZXNcclxuLy8gZXhjZXB0IHRoYXQgY2hyb21lIGFjY2VwdHMgY2FsbGJhY2sgd2hpbGUgd2ViIGV4dGVuc2lvbiByZXR1cm5zIHByb21pc2VzXHJcbi8vXHJcbi8vIFRoZSB3aG9sZSBpZGVhIGhlcmUgaXMgdG8gbWFrZSBzdXJlIGFsbCBjYWxsYmFjayBzdHlsZSBBUEkgb2YgY2hyb21lXHJcbi8vIGFsc28gcmV0dXJuIHByb21pc2VzXHJcbi8vXHJcbi8vIEltcG9ydGFudDogWW91IG5lZWQgdG8gc3BlY2lmeSB3aGF0ZXZlciBBUEkgeW91IG5lZWQgdG8gdXNlIGluIGBVc2VkQVBJYCBiZWxvd1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYWRhcHRDaHJvbWUgPSBmdW5jdGlvbiAob2JqLCBjaHJvbWUpIHtcclxuICAgIHZhciBhZGFwdCA9IGZ1bmN0aW9uIChzcmMsIHJldCwgb2JqLCBmbikge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGtleSkge1xyXG4gICAgICAgIHZhciBrZXlQYXJ0cyA9IGtleS5zcGxpdCgnLicpXHJcbiAgICAgICAgdmFyIFtcclxuICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgIHNvdXJjZVxyXG4gICAgICAgIF0gPSBrZXlQYXJ0cy5yZWR1Y2UoZnVuY3Rpb24gKHR1cGxlLCBzdWJrZXkpIHtcclxuICAgICAgICAgIHZhciB0YXIgPSB0dXBsZVswXVxyXG4gICAgICAgICAgdmFyIHNyYyA9IHR1cGxlWzFdXHJcblxyXG4gICAgICAgICAgdGFyW3N1YmtleV0gPSB0YXJbc3Via2V5XSB8fCB7fVxyXG4gICAgICAgICAgcmV0dXJuIFt0YXJbc3Via2V5XSwgc3JjICYmIHNyY1tzdWJrZXldXVxyXG4gICAgICAgIH0sIFtcclxuICAgICAgICAgIHByZXYsXHJcbiAgICAgICAgICBzcmNcclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICBvYmpba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcclxuICAgICAgICAgIGZuKG1ldGhvZCwgc291cmNlLCB0YXJnZXQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHByZXZcclxuICAgICAgfSwgcmV0KVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiAobWV0aG9kLCBzb3VyY2UsIHRhcmdldCkge1xyXG4gICAgICBpZiAoIXNvdXJjZSkgIHJldHVyblxyXG4gICAgICB2YXIgcmVnID0gL1RoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlcz9wb25zZSB3YXMgcmVjZWl2ZWQvXHJcblxyXG4gICAgICB0YXJnZXRbbWV0aG9kXSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gTm90ZTogVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVwb25zZSB3YXMgcmVjZWl2ZWQuXHJcbiAgICAgICAgICAgIC8vIElnbm9yZSB0aGlzIG1lc3NhZ2VcclxuICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgIXJlZy50ZXN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7Y2hyb21lLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2V9LCAke21ldGhvZH0sICR7SlNPTi5zdHJpbmdpZnkoYXJncyl9YClcclxuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzb3VyY2VbbWV0aG9kXS5hcHBseShzb3VyY2UsIGFyZ3MuY29uY2F0KGNhbGxiYWNrKSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvcHkgPSBmdW5jdGlvbiAobWV0aG9kLCBzb3VyY2UsIHRhcmdldCkge1xyXG4gICAgICBpZiAoIXNvdXJjZSkgIHJldHVyblxyXG4gICAgICB0YXJnZXRbbWV0aG9kXSA9IHNvdXJjZVttZXRob2RdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgW29iai50b1Byb21pc2lmeSwgcHJvbWlzaWZ5XSxcclxuICAgICAgW29iai50b0NvcHksIGNvcHldXHJcbiAgICBdXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCB0dXBsZSkge1xyXG4gICAgICByZXR1cm4gYWRhcHQoY2hyb21lLCBwcmV2LCB0dXBsZVswXSwgdHVwbGVbMV0pXHJcbiAgICB9LCB7fSlcclxuICB9XHJcblxyXG4gIHZhciBVc2VkQVBJID0ge1xyXG4gICAgdG9Qcm9taXNpZnk6IHtcclxuICAgICAgdGFiczogWydjcmVhdGUnLCAnc2VuZE1lc3NhZ2UnLCAnZ2V0JywgJ3VwZGF0ZScsICdxdWVyeScsICdjYXB0dXJlVmlzaWJsZVRhYicsICdyZW1vdmUnXSxcclxuICAgICAgd2luZG93czogWyd1cGRhdGUnLCAnZ2V0TGFzdEZvY3VzZWQnLCAnZ2V0Q3VycmVudCcsICdnZXRBbGwnLCAncmVtb3ZlJywgJ2NyZWF0ZScsICdnZXQnXSxcclxuICAgICAgcnVudGltZTogWydzZW5kTWVzc2FnZScsICdzZXRVbmluc3RhbGxVUkwnXSxcclxuICAgICAgY29va2llczogWydnZXQnLCAnZ2V0QWxsJywgJ3NldCcsICdyZW1vdmUnXSxcclxuICAgICAgbm90aWZpY2F0aW9uczogWydjcmVhdGUnLCAnY2xlYXInXSxcclxuICAgICAgYnJvd3NlckFjdGlvbjogWydnZXRCYWRnZVRleHQnXSxcclxuICAgICAgYm9va21hcmtzOiBbJ2NyZWF0ZScsICdnZXRUcmVlJ10sXHJcbiAgICAgIGRlYnVnZ2VyOiBbJ2F0dGFjaCcsICdkZXRhY2gnLCAnc2VuZENvbW1hbmQnLCAnZ2V0VGFyZ2V0cyddLFxyXG4gICAgICAnc3RvcmFnZS5sb2NhbCc6IFsnZ2V0JywgJ3NldCddXHJcbiAgICB9LFxyXG4gICAgdG9Db3B5OiB7XHJcbiAgICAgIHRhYnM6IFsnb25BY3RpdmF0ZWQnLCAnb25VcGRhdGVkJ10sXHJcbiAgICAgIHdpbmRvd3M6IFsnb25Gb2N1c0NoYW5nZWQnXSxcclxuICAgICAgcnVudGltZTogWydvbk1lc3NhZ2UnLCAnb25JbnN0YWxsZWQnLCAnZ2V0TWFuaWZlc3QnXSxcclxuICAgICAgc3RvcmFnZTogWydvbkNoYW5nZWQnXSxcclxuICAgICAgYnJvd3NlckFjdGlvbjogWydzZXRCYWRnZVRleHQnLCAnc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3InLCAnb25DbGlja2VkJ10sXHJcbiAgICAgIGV4dGVuc2lvbjogWydnZXRVUkwnXSxcclxuICAgICAgZGVidWdnZXI6IFsnb25FdmVudCcsICdvbkRldGFjaCddLFxyXG4gICAgICBkb3dubG9hZHM6IFsnb25DcmVhdGVkJywgJ29uQ2hhbmdlZCcsICdvbkRldGVybWluaW5nRmlsZW5hbWUnXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIEV4dCA9IHR5cGVvZiBjaHJvbWUgIT09ICd1bmRlZmluZWQnID8gYWRhcHRDaHJvbWUoVXNlZEFQSSwgY2hyb21lKSA6IGJyb3dzZXJcclxuXHJcbiAgT2JqZWN0LmFzc2lnbihFeHQsIHtcclxuICAgIGlzRmlyZWZveDogKCkgPT4ge1xyXG4gICAgICByZXR1cm4gL0ZpcmVmb3gvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEV4dFxyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdpbmRvdy5FeHQgPSBFeHRcclxuICB9XHJcbn0pKClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==