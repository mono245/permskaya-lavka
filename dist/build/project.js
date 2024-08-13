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

/***/ "./src/desktop.blocks/header/header.js":
/*!*********************************************!*\
  !*** ./src/desktop.blocks/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   markSelectedMenuItem: () => (/* binding */ markSelectedMenuItem)\n/* harmony export */ });\nconst headerMenu = document.querySelector(\".header__menu\");\r\nconst documentName = cutExtension(window.location.pathname.split(\"/\").at(-1));\r\n\r\nfunction markSelectedMenuItem() {\r\n    Array.from(headerMenu.children).forEach(element => {\r\n        let referToDocumentName = cutExtension(element.getAttribute(\"href\"));\r\n\r\n        if (documentName === referToDocumentName) {\r\n            element.classList.add(\"header__menu-item_selected\");\r\n        }\r\n    });\r\n}\r\n\r\nfunction cutExtension(string) {\r\n    if (string.includes(\".\")) {\r\n        return string.slice(0, string.indexOf(\".\"));\r\n    } else {\r\n        return string;\r\n    }\r\n}\n\n//# sourceURL=webpack://permskaya-lavka/./src/desktop.blocks/header/header.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tablet_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablet.blocks/header/header.js */ \"./src/tablet.blocks/header/header.js\");\n/* harmony import */ var _desktop_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop.blocks/header/header.js */ \"./src/desktop.blocks/header/header.js\");\n\r\n\r\n\r\n_tablet_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__.burgerMenuButton.addEventListener(\"click\", _tablet_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__.toggleMenu);\r\n(0,_tablet_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__.toggleMenuItems)();\r\n\r\n(0,_desktop_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_1__.markSelectedMenuItem)();\n\n//# sourceURL=webpack://permskaya-lavka/./src/project.js?");

/***/ }),

/***/ "./src/tablet.blocks/header/header.js":
/*!********************************************!*\
  !*** ./src/tablet.blocks/header/header.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   burgerMenuButton: () => (/* binding */ burgerMenuButton),\n/* harmony export */   toggleMenu: () => (/* binding */ toggleMenu),\n/* harmony export */   toggleMenuItems: () => (/* binding */ toggleMenuItems)\n/* harmony export */ });\nlet burgerMenuButton = document.querySelector(\".header__burger-menu-button\");\r\n\r\nlet burgerMenuElement = document.querySelector(\".header__burger-menu\");\r\nlet burgerMenuImage = burgerMenuButton.firstElementChild;\r\nlet burgerMenuItems = document.querySelectorAll(\".header__burger-menu-link\");\r\n\r\nlet isBurgerMenuOpened = false;\r\n\r\nfunction toggleMenu() {\r\n    if (isBurgerMenuOpened) {\r\n        closeMenu();\r\n    } else {\r\n        openMenu();\r\n    }\r\n}\r\n\r\nfunction toggleMenuItems() {\r\n    burgerMenuItems.forEach((item) => {item.onclick = closeMenu});\r\n}\r\n\r\nfunction closeMenu() {\r\n    burgerMenuElement.classList.remove(\"opened\");\r\n    burgerMenuImage.src = \"img/burger-menu.svg\";\r\n    isBurgerMenuOpened = false;\r\n}\r\n\r\nfunction openMenu() {\r\n    burgerMenuElement.classList.add(\"opened\")\r\n    burgerMenuImage.src = \"img/close-cross.svg\";\r\n    isBurgerMenuOpened = true;\r\n}\n\n//# sourceURL=webpack://permskaya-lavka/./src/tablet.blocks/header/header.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/project.js");
/******/ 	
/******/ })()
;