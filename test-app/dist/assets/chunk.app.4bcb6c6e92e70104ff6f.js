var __ember_auto_import__;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../v2-addon/dist/components/dummy-component.js":
/*!******************************************************!*\
  !*** ../v2-addon/dist/components/dummy-component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dummyComponent)
/* harmony export */ });
/* harmony import */ var _ember_component_template_only__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/component/template-only */ "@ember/component/template-only");
/* harmony import */ var _ember_component_template_only__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_component_template_only__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/component */ "@ember/component");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ember/template-factory */ "@ember/template-factory");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_2__);
var TEMPLATE=(0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_2__.createTemplateFactory)(/*
  Hi from Dummy Component!

*/{"id":"qAficyB2","block":"[[[1,\"Hi from Dummy Component!\\n\"]],[],false,[]]","moduleName":"/workspaces/v2-addons-as-deps-of-lazy-engines-repro/v2-addon/dist/components/dummy-component.js","isStrictMode":false});var dummyComponent=(0,_ember_component__WEBPACK_IMPORTED_MODULE_1__.setComponentTemplate)(TEMPLATE,_ember_component_template_only__WEBPACK_IMPORTED_MODULE_0___default()());

/***/ }),

/***/ "@ember/component":
/*!***********************************!*\
  !*** external "@ember/component" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ember/component");

/***/ }),

/***/ "@ember/component/template-only":
/*!*************************************************!*\
  !*** external "@ember/component/template-only" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ember/component/template-only");

/***/ }),

/***/ "@ember/template-factory":
/*!******************************************!*\
  !*** external "@ember/template-factory" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ember/template-factory");

/***/ }),

/***/ "../../../tmp/broccoli-23395B76d7oCUhXBl/cache-192-webpack_bundler_ember_auto_import_webpack/app.cjs":
/*!***********************************************************************************************************!*\
  !*** ../../../tmp/broccoli-23395B76d7oCUhXBl/cache-192-webpack_bundler_ember_auto_import_webpack/app.cjs ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = (function(){
  var d = _eai_d;
  var r = _eai_r;
  window.emberAutoImportDynamic = function(specifier) {
    if (arguments.length === 1) {
      return r('_eai_dyn_' + specifier);
    } else {
      return r('_eai_dynt_' + specifier)(Array.prototype.slice.call(arguments, 1))
    }
  };
  window.emberAutoImportSync = function(specifier) {
    return r('_eai_sync_' + specifier)(Array.prototype.slice.call(arguments, 1))
  };
  function esc(m) {
    return m && m.__esModule ? m : Object.assign({ default: m }, m);
  }
    d('v2-addon/components/dummy-component', ['@ember/component/template-only','@ember/component','@ember/template-factory'], function() { return esc(__webpack_require__(/*! v2-addon/components/dummy-component */ "../v2-addon/dist/components/dummy-component.js")); });
})();


/***/ }),

/***/ "../../../tmp/broccoli-23395B76d7oCUhXBl/cache-192-webpack_bundler_ember_auto_import_webpack/l.cjs":
/*!*********************************************************************************************************!*\
  !*** ../../../tmp/broccoli-23395B76d7oCUhXBl/cache-192-webpack_bundler_ember_auto_import_webpack/l.cjs ***!
  \*********************************************************************************************************/
/***/ (function(module, exports) {


window._eai_r = require;
window._eai_d = define;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	__webpack_require__("../../../tmp/broccoli-23395B76d7oCUhXBl/cache-192-webpack_bundler_ember_auto_import_webpack/l.cjs");
/******/ 	var __webpack_exports__ = __webpack_require__("../../../tmp/broccoli-23395B76d7oCUhXBl/cache-192-webpack_bundler_ember_auto_import_webpack/app.cjs");
/******/ 	__ember_auto_import__ = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=chunk.app.4bcb6c6e92e70104ff6f.js.map