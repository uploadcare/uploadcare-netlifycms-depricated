(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("netlify-cms"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["netlify-cms", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("netlify-cms"), require("react")) : factory(root["netlify-cms"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_netlify_cms__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/File/FileControl.js":
/*!*********************************!*\
  !*** ./src/File/FileControl.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileControl = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

var FileControl =
/*#__PURE__*/
function (_React$Component) {
  function FileControl() {
    _classCallCheck(this, FileControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(FileControl).apply(this, arguments));
  }

  _createClass(FileControl, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, "test");
    }
  }]);

  _inherits(FileControl, _React$Component);

  return FileControl;
}(_react.default.Component);

exports.FileControl = FileControl;

/***/ }),

/***/ "./src/File/index.js":
/*!***************************!*\
  !*** ./src/File/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FileControl = __webpack_require__(/*! ./FileControl */ "./src/File/FileControl.js");

var _netlifyCms = _interopRequireDefault(__webpack_require__(/*! netlify-cms */ "netlify-cms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_netlifyCms.default.registerWidget('uploadcare_file', _FileControl.FileControl);

/***/ }),

/***/ "./src/createEditorComponent.js":
/*!**************************************!*\
  !*** ./src/createEditorComponent.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEditorComponent = createEditorComponent;

function createEditorComponent() {
  return {
    id: 'uploadcare',
    label: 'Uploadcare',
    fields: [{
      label: 'Image',
      name: 'image',
      widget: 'uploadcare_file'
    }, {
      label: 'Alt Text',
      name: 'alt'
    }],
    pattern: /ucarecdn\.com/,
    fromBlock: function fromBlock(match) {
      return match && {
        image: match[2],
        alt: match[1]
      };
    },
    toBlock: function toBlock(data) {
      return "![".concat(data.alt || '', "](").concat(data.image || '', ")");
    },
    toPreview: function toPreview(data, getAsset) {
      return React.createElement("img", {
        src: getAsset(data.image) || '',
        alt: data.alt || ''
      });
    }
  };
}

/***/ }),

/***/ "./src/getScript.js":
/*!**************************!*\
  !*** ./src/getScript.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScript = getScript;

function getScript(url) {
  return new Promise(function (resolve, reject) {
    var done = false;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = url;

    script.onload = script.onreadystatechange = function () {
      if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
        done = true;
        resolve();
      } else {
        reject();
      }
    };

    script.onerror = function () {
      return reject();
    };

    head.appendChild(script);
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getScript = __webpack_require__(/*! ./getScript */ "./src/getScript.js");

var _createEditorComponent = __webpack_require__(/*! ./createEditorComponent */ "./src/createEditorComponent.js");

var _netlifyCms = _interopRequireDefault(__webpack_require__(/*! netlify-cms */ "netlify-cms"));

__webpack_require__(/*! ./File */ "./src/File/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  var widgetSrc = 'https://ucarecdn.com/libs/widget/3.x/uploadcare.full.js';
  (0, _getScript.getScript)(widgetSrc).then(function () {
    return console.log('widget loaded');
  });

  _netlifyCms.default.registerEditorComponent((0, _createEditorComponent.createEditorComponent)());
}

/***/ }),

/***/ "netlify-cms":
/*!******************************!*\
  !*** external "netlify-cms" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_netlify_cms__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});