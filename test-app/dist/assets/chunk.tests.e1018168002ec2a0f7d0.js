var __ember_auto_import__;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../tmp/broccoli-734756nGdKWijR8F/cache-189-webpack_bundler_ember_auto_import_webpack/l.cjs":
/*!********************************************************************************************************!*\
  !*** ../../../tmp/broccoli-734756nGdKWijR8F/cache-189-webpack_bundler_ember_auto_import_webpack/l.cjs ***!
  \********************************************************************************************************/
/***/ (function(module, exports) {


window._eai_r = require;
window._eai_d = define;


/***/ }),

/***/ "../../../tmp/broccoli-734756nGdKWijR8F/cache-189-webpack_bundler_ember_auto_import_webpack/tests.cjs":
/*!************************************************************************************************************!*\
  !*** ../../../tmp/broccoli-734756nGdKWijR8F/cache-189-webpack_bundler_ember_auto_import_webpack/tests.cjs ***!
  \************************************************************************************************************/
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
    d('dom-element-descriptors', [], function() { return esc(__webpack_require__(/*! dom-element-descriptors */ "../node_modules/.pnpm/dom-element-descriptors@0.5.0/node_modules/dom-element-descriptors/dist/es/index.js")); });
})();


/***/ }),

/***/ "../node_modules/.pnpm/dom-element-descriptors@0.5.0/node_modules/dom-element-descriptors/dist/es/index.js":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/dom-element-descriptors@0.5.0/node_modules/dom-element-descriptors/dist/es/index.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_DESCRIPTOR: () => (/* binding */ IS_DESCRIPTOR),
/* harmony export */   createDescriptor: () => (/* binding */ createDescriptor),
/* harmony export */   isDescriptor: () => (/* binding */ isDescriptor),
/* harmony export */   lookupDescriptorData: () => (/* binding */ lookupDescriptorData),
/* harmony export */   registerDescriptorData: () => (/* binding */ registerDescriptorData),
/* harmony export */   resolveDOMElement: () => (/* binding */ resolveDOMElement),
/* harmony export */   resolveDOMElements: () => (/* binding */ resolveDOMElements),
/* harmony export */   resolveDescription: () => (/* binding */ resolveDescription)
/* harmony export */ });
const IS_DESCRIPTOR='__dom_element_descriptor_is_descriptor__';/**
 * Determine if the argument is an {@link IDOMElementDescriptor}.
 *
 * This does not check if the argument is registered, just that it's type is
 * {@link IDOMElementDescriptor}.
 */function isDescriptor(target){return typeof target==='object'&&target&&IS_DESCRIPTOR in target;}/**
 * Get the registry instance.
 *
 * We store it on the window to ensure that if some dependency/hoisting horkage
 * results in the presence of multiple copies of this library, they are all
 * using the same registry.
 *
 * @returns the registry
 */function getRegistry(){const win=window;win.domElementDescriptorsRegistry=win.domElementDescriptorsRegistry||new WeakMap();return win.domElementDescriptorsRegistry;}/**
 * Register or explicitly unregister descriptor data.
 *
 * Note that descriptor data does not need to be unregistered, the
 * un-registration functionality exists for cases when the descriptor is known
 * to no longer be valid.
 *
 * @param descriptor the DOM element descriptor
 * @param data the descriptor's data, or null to un-register
 */function registerDescriptorData(descriptor,data){if(data){getRegistry().set(descriptor,data);}else{getRegistry().delete(descriptor);}}/**
 * Look up registered descriptor data
 *
 * @param descriptor the descriptor
 * @returns the descriptor's data, or null if none is set
 */function lookupDescriptorData(descriptor){return getRegistry().get(descriptor)||null;}/**
 * Given a descriptor or descriptor data, get the single/first element it would
 * match.
 *
 * This is analogous to `querySelector()`, and is meant to be used by DOM helper
 * libraries to resolve the targets of single-element operations.
 *
 * @param target the descriptor or descriptor data
 * @returns the resolved DOM element, or null if no element matched
 */function resolveDOMElement(target){let data=isDescriptor(target)?lookupDescriptorData(target):target;if(!data){return null;}if(data.element!==undefined){return data.element;}else{for(let element of data.elements||[]){return element;}return null;}}/**
 * Given a descriptor or descriptor data, get the elements it would match.
 *
 * This is analogous to `querySelectorAll()`, and is meant to be used by DOM
 * helper libraries to resolve the targets of multi-element operations.
 *
 * @param target the descriptor or descriptor data
 * @returns the resolved DOM elements (possibly none)
 */function resolveDOMElements(target){let data=isDescriptor(target)?lookupDescriptorData(target):target;if(!data){return[];}if(data.elements){return Array.from(data.elements);}else{let element=data.element;return element?[element]:[];}}/**
 * Get the description of the given descriptor or descriptor data, if it has one
 *
 * @param target the descriptor or descriptor data
 * @returns the description or `undefined` if it doesn't have a description
 */function resolveDescription(target){let data=isDescriptor(target)?lookupDescriptorData(target):target;return data?.description;}/**
 * Create a descriptor from descriptor data
 *
 * This is a convenience method for creating a descriptor associated with some
 * descriptor data. This is intended for cases where a consumer of a DOM helper
 * library want to create an ad-hoc descriptor from an element or list of
 * elements to pass to a DOM helper.
 *
 * @param data the descriptor data
 * @returns a new DOM element descriptor associated with the descriptor data
 *
 * @example
 *
 * let element = someOtherLibrary.getGraphElement();
 * let descriptor = createDescriptor({ element, description: 'graph element' });
 *
 * await click(descriptor);
 * assert.dom(descriptor).hasClass('selected');
 */function createDescriptor(data){let descriptor={[IS_DESCRIPTOR]:true};registerDescriptorData(descriptor,data);return descriptor;}

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
/******/ 	__webpack_require__("../../../tmp/broccoli-734756nGdKWijR8F/cache-189-webpack_bundler_ember_auto_import_webpack/l.cjs");
/******/ 	var __webpack_exports__ = __webpack_require__("../../../tmp/broccoli-734756nGdKWijR8F/cache-189-webpack_bundler_ember_auto_import_webpack/tests.cjs");
/******/ 	__ember_auto_import__ = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=chunk.tests.e1018168002ec2a0f7d0.js.map