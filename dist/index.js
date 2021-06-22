(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sarmayCharacterShaper"] = factory();
	else
		root["sarmayCharacterShaper"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

const kzMap = {
  ا: { 3: '\uFE8E', 4: '\uFE8D' },
  ب: { 1: '\uFE91', 2: '\uFE92', 3: '\uFE90', 4: '\uFE8F' },
  ۆ: { 3: '\uFBDA', 4: '\uFBD9' },
  گ: { 1: '\uFB94', 2: '\uFB95', 3: '\uFB93', 4: '\uFB92' },
  ع: { 1: '\uFECB', 2: '\uFECC', 3: '\uFECA', 4: '\uFEC9' },
  د: { 3: '\uFEAA', 4: '\uFEA9' },
  ە: { 3: '\uFEEA', 4: '\uFEE9' },
  ج: { 1: '\uFE9F', 2: '\uFEA0', 3: '\uFE9E', 4: '\uFE9D' },
  ز: { 3: '\uFEB0', 4: '\uFEAF' },
  ي: { 1: '\uFEF3', 2: '\uFEF4', 3: '\uFEF2', 4: '\uFEF1' },
  ك: { 1: '\uFEDB', 2: '\uFEDC', 3: '\uFEDA', 4: '\uFED9' },
  ق: { 1: '\uFED7', 2: '\uFED8', 3: '\uFED6', 4: '\uFED5' },
  ل: { 1: '\uFEDF', 2: '\uFEE0', 3: '\uFEDE', 4: '\uFEDD' },
  م: { 1: '\uFEE3', 2: '\uFEE4', 3: '\uFEE2', 4: '\uFEE1' },
  ن: { 1: '\uFEE7', 2: '\uFEE8', 3: '\uFEE6', 4: '\uFEE5' },
  ڭ: { 1: '\uFBD5', 2: '\uFBD6', 3: '\uFBD4', 4: '\uFBD3' },
  و: { 3: '\uFEEE', 4: '\uFEED' },
  پ: { 1: '\uFB58', 2: '\uFB59', 3: '\uFB57', 4: '\uFB56' },
  ر: { 3: '\uFEAE', 4: '\uFEAD' },
  س: { 1: '\uFEB3', 2: '\uFEB4', 3: '\uFEB2', 4: '\uFEB1' },
  ت: { 1: '\uFE97', 2: '\uFE98', 3: '\uFE96', 4: '\uFE95' },
  ۋ: { 3: '\uFBDF', 4: '\uFBDE' },
  ۇ: { 3: '\uFBD8', 4: '\uFBD7' },
  ف: { 1: '\uFED3', 2: '\uFED4', 3: '\uFED2', 4: '\uFED1' },
  ح: { 1: '\uFEA3', 2: '\uFEA4', 3: '\uFEA2', 4: '\uFEA1' },
  چ: { 1: '\uFB7C', 2: '\uFB7D', 3: '\uFB7B', 4: '\uFB7A' },
  ش: { 1: '\uFEB7', 2: '\uFEB8', 3: '\uFEB6', 4: '\uFEB5' },
  ى: { 1: '\uFBE8', 2: '\uFBE9', 3: '\uFEF0', 4: '\uFEEF' },
  ء: { 4: '\uFE80' },
  ھ: { 1: '\uFBAC' }
}
module.exports = {
  kzMap
}


/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shaper)
/* harmony export */ });
const { kzMap } = __webpack_require__(1)

const hasKey = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

const getHyphenateIndex = (prevEnd, prev, current) => {
  if (!prev || !current) return -1
  if (prev === '\u0644' && current === '\u0627') {
    if (prevEnd) {
      return 0
    } else {
      return 1
    }
  }
  return -1
}

const getCharIndex = (prevEnd, prev, current) => {
  if (!prev || !hasKey(kzMap, prev)) {
    return 0
  }
  if (!current || !hasKey(kzMap, current)) {
    if (hasKey(kzMap[prev], '3') && !prevEnd) {
      return 3
    } else {
      return 4
    }
  }
  if (prevEnd) {
    if (hasKey(kzMap[prev], '1') && (hasKey(kzMap[current], '2') || hasKey(kzMap[current], '3'))) {
      return 1
    } else {
      return 4
    }
  } else {
    if (hasKey(kzMap[prev], '2') && ((hasKey(kzMap[current], '2') || hasKey(kzMap[current], '3')))) {
      return 2
    } else if (hasKey(kzMap[prev], '3')) {
      return 3
    }
  }
}

function shaper (string) {
  if (typeof string !== 'string') return string
  let index = 0
  const length = string.length
  let prev = string.charAt(index++)
  let prevEnd = true
  let result = ''
  let charIndex = null
  const jointCharArray = ['\uFEFB', '\uFEFC']
  for (; index <= length; index++) {
    const current = index !== length ? string.charAt(index) : undefined
    if (prev === '\u06BE') { result += '\uFBAC'; prev = current; prevEnd = false; continue }
    const jointCharIndex = getHyphenateIndex(prevEnd, prev, current)
    if (jointCharIndex !== -1) {
      result += jointCharArray[jointCharIndex]
      if (index === length - 1) {
        break
      } else {
        prevEnd = true
        prev = string.charAt(++index)
        continue
      }
    }
    charIndex = getCharIndex(prevEnd, prev, current)
    result += (charIndex === 0 ? prev : kzMap[prev][charIndex])
    prevEnd = (!((charIndex === 1 || charIndex === 2)))
    prev = current
  }
  const rowResult = result.split('\n').filter(z => z.trim())
  let encodeString = ''
  rowResult.forEach((ele, i) => {
    if (ele.trim()) {
      const enter = i < rowResult.length - 1 ? '\n' : ''
      encodeString += ele.split('').reverse().join('') + enter
    }
  })
  return encodeString
}

})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});