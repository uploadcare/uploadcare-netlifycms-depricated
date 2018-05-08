(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("netlify-cms"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "netlify-cms", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash"), require("netlify-cms"), require("react")) : factory(root["lodash"], root["netlify-cms"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_netlify_cms__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./src/Image/Control.js":
/*!******************************!*\
  !*** ./src/Image/Control.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Control = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Uploader = _interopRequireDefault(__webpack_require__(/*! ./Uploader */ "./src/Image/Uploader.js"));

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

var Control =
/*#__PURE__*/
function (_React$Component) {
  function Control() {
    _classCallCheck(this, Control);

    return _possibleConstructorReturn(this, _getPrototypeOf(Control).apply(this, arguments));
  }

  _createClass(Control, [{
    key: "onUploadComplete",
    value: function onUploadComplete(fileInfo) {
      this.props.onChange(fileInfo.cdnUrl);
    }
  }, {
    key: "render",
    value: function render() {
      var widgetOptions = {
        imagesOnly: true,
        multiple: false
      };
      return _react.default.createElement("div", {
        className: "nc-controlPane-widget nc-imageControl-imageUpload"
      }, _react.default.createElement("span", {
        className: "nc-imageControl-message"
      }, _react.default.createElement(_Uploader.default, {
        options: widgetOptions,
        value: this.props.value,
        onUploadComplete: this.onUploadComplete.bind(this)
      })));
    }
  }]);

  _inherits(Control, _React$Component);

  return Control;
}(_react.default.Component);

exports.Control = Control;

/***/ }),

/***/ "./src/Image/Preview.js":
/*!******************************!*\
  !*** ./src/Image/Preview.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preview = void 0;

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

var Preview =
/*#__PURE__*/
function (_React$Component) {
  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, _getPrototypeOf(Preview).apply(this, arguments));
  }

  _createClass(Preview, [{
    key: "render",
    value: function render() {
      var previewUrl = this.props.cdnUrl + '-/preview/640x480/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/';
      return _react.default.createElement("img", {
        src: previewUrl,
        alt: this.props.alt
      });
    }
  }]);

  _inherits(Preview, _React$Component);

  return Preview;
}(_react.default.Component);

exports.Preview = Preview;

/***/ }),

/***/ "./src/Image/Uploader.js":
/*!*******************************!*\
  !*** ./src/Image/Uploader.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

var Uploader =
/*#__PURE__*/
function (_Component) {
  function Uploader() {
    _classCallCheck(this, Uploader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Uploader).apply(this, arguments));
  }

  _createClass(Uploader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var widget = uploadcare.Widget(this.uploader);
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange,
          onUploadComplete = _this$props.onUploadComplete;

      if (typeof value !== 'undefined') {
        widget.value(value);
      }

      if (typeof onChange === 'function') {
        widget.onChange(onChange);
      }

      if (typeof onUploadComplete === 'function') {
        widget.onUploadComplete(onUploadComplete);
      }
    }
  }, {
    key: "getInputAttributes",
    value: function getInputAttributes() {
      return _lodash.default.mapKeys(this.props.options, function (value, key) {
        return "data-".concat(_lodash.default.kebabCase(key));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var attributes = this.getInputAttributes();
      return _react.default.createElement("input", _extends({
        type: "hidden",
        ref: function ref(input) {
          return _this.uploader = input;
        }
      }, attributes));
    }
  }]);

  _inherits(Uploader, _Component);

  return Uploader;
}(_react.Component);

var _default = Uploader;
exports.default = _default;

/***/ }),

/***/ "./src/Image/index.js":
/*!****************************!*\
  !*** ./src/Image/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
Object.defineProperty(exports, "Control", {
  enumerable: true,
  get: function get() {
    return _Control.Control;
  }
});
Object.defineProperty(exports, "Preview", {
  enumerable: true,
  get: function get() {
    return _Preview.Preview;
  }
});

var _netlifyCms = _interopRequireDefault(__webpack_require__(/*! netlify-cms */ "netlify-cms"));

var _Control = __webpack_require__(/*! ./Control */ "./src/Image/Control.js");

var _Preview = __webpack_require__(/*! ./Preview */ "./src/Image/Preview.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register() {
  _netlifyCms.default.registerWidget('uploadcare_file', _Control.Control, _Preview.Preview);
}

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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var Image = _interopRequireWildcard(__webpack_require__(/*! ./Image */ "./src/Image/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createEditorComponent() {
  return {
    id: 'uploadcare',
    label: 'Uploadcare',
    fields: [{
      label: 'Uploadcare file',
      name: 'cdnUrl',
      widget: 'uploadcare_file'
    }],
    pattern: /^!\[(.*)\]\((.*)\)$/,
    fromBlock: fromBlock,
    toBlock: toBlock,
    toPreview: toPreview
  };
}

function fromBlock(match) {
  var alt = match[1];
  var cdnUrl = match[2];
  return {
    cdnUrl: cdnUrl,
    alt: alt
  };
}

function toBlock(_ref) {
  var cdnUrl = _ref.cdnUrl,
      alt = _ref.alt;

  if (!cdnUrl) {
    return;
  }

  return "![".concat(alt || '', "](").concat(cdnUrl, ")");
}

function toPreview(data) {
  return _react.default.createElement(Image.Preview, data);
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

var _createEditorComponent = __webpack_require__(/*! ./createEditorComponent */ "./src/createEditorComponent.js");

var _netlifyCms = _interopRequireDefault(__webpack_require__(/*! netlify-cms */ "netlify-cms"));

var _getScript = __webpack_require__(/*! ./getScript */ "./src/getScript.js");

var Image = _interopRequireWildcard(__webpack_require__(/*! ./Image */ "./src/Image/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadWidget() {
  var widgetSrc = 'https://ucarecdn.com/libs/widget/3.x/uploadcare.full.js';
  return (0, _getScript.getScript)(widgetSrc);
}

function registerPlugin() {
  Image.register();

  var comps = _netlifyCms.default.getEditorComponents();
  /* Dirty hack to remove default image component */

  /* eslint-disable*/


  comps._root.entries = [];
  comps.size = 0;
  /* eslint-enable*/

  _netlifyCms.default.registerEditorComponent((0, _createEditorComponent.createEditorComponent)());
}

function _default() {
  window.UPLOADCARE_PUBLIC_KEY = 'demopublickey';
  loadWidget().then(registerPlugin);
}

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

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