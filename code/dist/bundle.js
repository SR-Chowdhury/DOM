/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./04.Basic_selectors.js":
/*!*******************************!*\
  !*** ./04.Basic_selectors.js ***!
  \*******************************/
/***/ (() => {

eval("/**************************\n* Bismillahir Rahmanir Rahim\n* DOM T-04\n* Basic Selectors of DOM\n* Author : Shihan Chowdhury\n* Thanks to - Twinkle Cats \n**************************/\nvar h1_id = document.getElementById('04T-id');\nvar btn_id = document.getElementById('04T-btn-id');\nvar colors = ['red', 'green', 'blue'];\nvar i = 0;\nbtn_id.addEventListener('click', function () {\n  h1_id.style.color = colors[i];\n\n  if (i > colors.length) {\n    i = 0;\n  } else {\n    i++;\n  }\n});\n\n//# sourceURL=webpack://code/./04.Basic_selectors.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./04.Basic_selectors.js"]();
/******/ 	
/******/ })()
;