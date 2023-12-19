/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scrolls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrolls */ \"./modules/scrolls.js\");\n/* harmony import */ var _modules_btnUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/btnUp */ \"./modules/btnUp.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carusel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/carusel */ \"./modules/carusel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scrolls__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_btnUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_carusel__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/btnUp.js":
/*!**************************!*\
  !*** ./modules/btnUp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst btnUp = () => {\r\n  const services = document.getElementById(\"services\");\r\n  const btnUp = document.querySelector(\".up\");\r\n  let currentScroll = 0;\r\n\r\n  window.addEventListener(\"scroll\", () => {\r\n    currentScroll = window.pageYOffset;\r\n    if (currentScroll >= services.offsetTop) {\r\n      if (!btnUp.style.display) {\r\n        btnUp.style.display = \"block\";\r\n      }\r\n    } else {\r\n      if (btnUp.style.display) {\r\n        btnUp.style.display = \"\";\r\n      }\r\n    }\r\n  });\r\n\r\n  btnUp.addEventListener(\"click\", () => {\r\n    document.getElementById(\"slider\").scrollIntoView({\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (btnUp);\r\n\n\n//# sourceURL=webpack:///./modules/btnUp.js?");

/***/ }),

/***/ "./modules/carusel.js":
/*!****************************!*\
  !*** ./modules/carusel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carusel = () => {\r\n  const servicesCarousel = document.querySelector(\".services-carousel\");\r\n  const elements = servicesCarousel.querySelectorAll(\".services-carousel>div\");\r\n  const arrowLeft = document.querySelector(\".arrow-left\");\r\n  const arrowRight = document.querySelector(\".arrow-right\");\r\n  let firstElem = 0;\r\n  let lastElem = 0;\r\n\r\n  const arrowOff = (arrow) => {\r\n    if (!arrow.classList.contains(\"arrow-disabled\")) {\r\n      arrow.classList.add(\"arrow-disabled\");\r\n      arrow.setAttribute(\"disabled\", \"\");\r\n    }\r\n  };\r\n\r\n  const arrowOn = (arrow) => {\r\n    if (arrow.classList.contains(\"arrow-disabled\")) {\r\n      arrow.classList.remove(\"arrow-disabled\");\r\n      arrow.removeAttribute(\"disabled\", \"\");\r\n    }\r\n  };\r\n\r\n  const render = () => {\r\n    const width = document.defaultView.innerWidth;\r\n    let totalElem = 3;\r\n    if (width < 992) {\r\n      totalElem = 2;\r\n    }\r\n    if (width < 768) {\r\n      totalElem = 1;\r\n    }\r\n    lastElem = firstElem + totalElem - 1;\r\n    if (firstElem === 0) {\r\n      arrowOff(arrowLeft);\r\n    }\r\n    if (lastElem >= elements.length - 1) {\r\n      arrowOff(arrowRight);\r\n    }\r\n\r\n    elements.forEach((elem, index) => {\r\n      if (index >= firstElem && index <= lastElem) {\r\n        elem.style.display = \"\";\r\n      } else {\r\n        elem.style.display = \"none\";\r\n      }\r\n    });\r\n  };\r\n\r\n  arrowLeft.addEventListener(\"click\", () => {\r\n    if (firstElem > 0) {\r\n      firstElem--;\r\n      arrowOn(arrowRight);\r\n    }\r\n    render();\r\n  });\r\n\r\n  arrowRight.addEventListener(\"click\", () => {\r\n    if (lastElem < elements.length - 1) {\r\n      firstElem++;\r\n      arrowOn(arrowLeft);\r\n    }\r\n    render();\r\n  });\r\n\r\n  window.addEventListener(\"resize\", () => render());\r\n\r\n  render();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carusel);\r\n\n\n//# sourceURL=webpack:///./modules/carusel.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const callbackBtns = document.querySelectorAll(\".callback-btn\");\r\n  const modalOverlay = document.querySelector(\".modal-overlay\");\r\n  const modalCallback = document.getElementById(\"callback\");\r\n  const modalClose = modalCallback.querySelector(\".modal-close>img\");\r\n\r\n  const openModal = () => {\r\n    modalOverlay.style.display = \"block\";\r\n    modalCallback.style.display = \"block\";\r\n  };\r\n\r\n  const closeModal = () => {\r\n    modalOverlay.style.display = \"\";\r\n    modalCallback.style.display = \"\";\r\n  };\r\n\r\n  callbackBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => openModal());\r\n  });\r\n\r\n  modalCallback.addEventListener(\"click\", (event) => {\r\n    if (event.target === modalClose) {\r\n      closeModal();\r\n    }\r\n  });\r\n\r\n  modalOverlay.addEventListener(\"click\", () => closeModal());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrolls.js":
/*!****************************!*\
  !*** ./modules/scrolls.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrolls = () => {\r\n  const links = document.querySelectorAll(\"ul>li>a\");\r\n\r\n  links.forEach((link) => {\r\n    link.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      const id = event.target.getAttribute(\"href\");\r\n\r\n      document.querySelector(id).scrollIntoView({\r\n        behavior: \"smooth\",\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolls);\r\n\n\n//# sourceURL=webpack:///./modules/scrolls.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.getElementById(\"slider\");\r\n  const slides = sliderBlock.querySelectorAll(\".item\");\r\n  const tables = sliderBlock.querySelectorAll(\".table\");\r\n  const dots = sliderBlock.querySelectorAll(\".slick\");\r\n  let timeInterval = 3000;\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const prevSlide = (slides, index) => {\r\n    slides[index].style.display = \"none\";\r\n    tables[index].classList.remove(\"active\");\r\n    dots[index].classList.remove(\"slick-active\");\r\n  };\r\n\r\n  const nextSlide = (slides, index) => {\r\n    slides[index].style.display = \"\";\r\n    tables[index].classList.add(\"active\");\r\n    dots[index].classList.add(\"slick-active\");\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide);\r\n    currentSlide++;\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide);\r\n  };\r\n\r\n  const startSlide = (timer = 2000) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  nextSlide(slides, currentSlide);\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;