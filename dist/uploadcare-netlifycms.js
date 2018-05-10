!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("lodash"),require("netlify-cms"));else if("function"==typeof define&&define.amd)define(["react","lodash","netlify-cms"],t);else{var n="object"==typeof exports?t(require("react"),require("lodash"),require("netlify-cms")):t(e.react,e.lodash,e["netlify-cms"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.register=function(){o.default.registerWidget("uploadcare_widget",i.Control,u.Preview)},Object.defineProperty(t,"Control",{enumerable:!0,get:function(){return i.Control}}),Object.defineProperty(t,"Preview",{enumerable:!0,get:function(){return u.Preview}});var r,o=(r=n(3))&&r.__esModule?r:{default:r},i=n(15),u=n(8)},function(e,t){e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getScript=function(e){return new Promise(function(t,n){var r=!1,o=document.getElementsByTagName("head")[0],i=document.createElement("script");i.src=e,i.onload=i.onreadystatechange=function(){r||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState?n():(r=!0,t())},i.onerror=function(){return n()},o.appendChild(i)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initializeUploadcare=function(e){return function(e){var t="https://ucarecdn.com/libs/widget/".concat("3.x","/uploadcare.full.min.js");return(0,r.getScript)(t).then(function(){window.UPLOADCARE_PUBLIC_KEY=e.widgetOptions.publicKey})}(e).then(function(){return e.effectsTab&&(t="https://ucarecdn.com/libs/widget-tab-effects/".concat("1.x","/uploadcare.tab-effects.min.js"),(0,r.getScript)(t).then(function(){uploadcare.registerTab("preview",uploadcareTabEffects)}));var t})};var r=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createMultiple=function(e){return{id:"Uploadcare Group",label:"Uploadcare Group",fields:[{name:"fileInfo",options:o.default.merge(e.widgetOptions,{multiple:!0}),label:"Uploadcare",widget:"uploadcare_widget"}],toBlock:i}};var r,o=(r=n(1))&&r.__esModule?r:{default:r};function i(e){var t=e.fileInfo;if(t)return"[".concat(t.name||"","](").concat(t.cdnUrl,")")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSingle=function(e){return{id:"Uploadcare Single",label:"Uploadcare Single",fields:[{name:"fileInfo",options:i.default.merge(e.widgetOptions,{multiple:!1}),label:"Uploadcare",widget:"uploadcare_widget"},{name:"customString",label:"Custom string",widget:"string"}],pattern:/^!\[(.*)\]\((.*)\)$/,fromBlock:function(e){return{fileInfo:{cdnUrl:e[2],name:e[1],isImage:!0}}},toBlock:a,toPreview:function(e){return r.default.createElement(o.Preview,e)}}};var r=u(n(0)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(2)),i=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.fileInfo,n=e.customString;if(t){var r=t.cdnUrl+(n||"");return"".concat(t.isImage?"!":"","[").concat(t.name||"","](").concat(r,")")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Preview=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,f(t).apply(this,arguments))}var n,r,i;return n=t,(r=[{key:"render",value:function(){var e=this.props.fileInfo,t=e.cdnUrl,n=e.name,r=t;return o.default.createElement("img",{src:r,alt:n})}}])&&a(n.prototype,r),i&&a(n,i),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");u(e.prototype,t&&t.prototype),t&&u(e,t)}(t,e),t}(o.default.Component);t.Preview=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,s(t).apply(this,arguments))}var n,r,u;return n=t,(r=[{key:"componentDidMount",value:function(){var e=uploadcare.Widget(this.uploader),t=this.props,n=t.value,r=t.onChange,o=t.onUploadComplete;void 0!==n&&e.value(n),"function"==typeof r&&e.onChange(r),"function"==typeof o&&e.onUploadComplete(o)}},{key:"getInputAttributes",value:function(){return o.default.mapKeys(this.props.options,function(e,t){return"data-".concat(o.default.kebabCase(t))})}},{key:"render",value:function(){var e=this,t=this.getInputAttributes();return i.default.createElement("input",a({type:"hidden",ref:function(t){return e.uploader=t}},t))}}])&&f(n.prototype,r),u&&f(n,u),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");c(e.prototype,t&&t.prototype),t&&c(e,t)}(t,e),t}(i.Component);t.default=p},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r,o,i={},u=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,f=0,l=[],s=n(10);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(h(r.parts[u],t))}else{var a=[];for(u=0;u<r.parts.length;u++)a.push(h(r.parts[u],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(a):n.push(r[u]={id:u,parts:[a]})}return n}function y(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(t,e.attrs),y(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function h(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=f++;n=c||(c=v(t)),r=O.bind(null,n,u,!1),o=O.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),y(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=s(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(u),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=u()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var u=n[o];(a=i[u.id]).refs--,r.push(a)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function O(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(u=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var u;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".uploadcare--widget {\n  display: flex;\n}\n",""])},function(e,t,n){var r=n(13);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Control=void 0;var r=i(n(0));n(14);var o=i(n(9));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,l(t).apply(this,arguments))}var n,i,u;return n=t,(i=[{key:"onUploadComplete",value:function(e){this.props.onChange(e)}},{key:"render",value:function(){var e=this.props.field.get("options").toJS(),t=this.props.value,n=t&&t.cdnUrl;return r.default.createElement("div",{className:"nc-controlPane-widget nc-imageControl-imageUpload"},r.default.createElement("span",{className:"nc-imageControl-message"},r.default.createElement(o.default,{options:e,value:n,onUploadComplete:this.onUploadComplete.bind(this)})))}}])&&c(n.prototype,i),u&&c(n,u),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");a(e.prototype,t&&t.prototype),t&&a(e,t)}(t,e),t}(r.default.Component);t.Control=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=r.default.merge(s,e);(0,c.initializeUploadcare)(t).then(function(){return function(e){i.register();var t=o.default.getEditorComponents();t._root.entries=[],t.size=0,o.default.registerEditorComponent((0,u.createSingle)(e)),o.default.registerEditorComponent((0,a.createMultiple)(e))}(t)})};var r=f(n(1)),o=f(n(3)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(2)),u=n(7),a=n(6),c=n(5);function f(e){return e&&e.__esModule?e:{default:e}}var l,s={effectsTab:!0,widgetOptions:{publicKey:"demopublickey",integration:(l=function(){try{var e=window.initCMS.toString().match(/\"Netlify CMS version ([\d\.]*)\"/m);return e?e[1]:"unknown"}catch(e){return"unknown"}}(),"NetlifyCMS/".concat(l,"; Uploadcare-NetlifyCMS/").concat("1.0.0"))}}}])});