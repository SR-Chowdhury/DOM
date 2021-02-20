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

/***/ "./07.Event_in_DOM.js":
/*!****************************!*\
  !*** ./07.Event_in_DOM.js ***!
  \****************************/
/***/ (() => {

eval("/**************************\n* Bismillahir Rahmanir Rahim\n* DOM T-07\n* Working with Event in DOM\n* Author : Shihan Chowdhury\n* Thanks to - Twinkle Cats \n**************************/\n$ = function $(selector) {\n  return document.querySelector(selector);\n};\n\nvar toggleBtn = $('#toggleBtn');\nvar para = $('.para');\nvar flag = false;\ntoggleBtn.addEventListener('click', function () {\n  if (flag) {\n    para.style.visibility = 'hidden';\n    flag = false;\n    toggleBtn.innerHTML = 'Show';\n  } else {\n    para.style.visibility = 'visible';\n    flag = true;\n    toggleBtn.innerHTML = 'Hide';\n  }\n});\n\n//# sourceURL=webpack://code/./07.Event_in_DOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./07.Event_in_DOM.js"]();
/******/ 	
/******/ })()
;